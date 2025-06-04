'use client';
import { Bot, User, Send, X, BotMessageSquare } from 'lucide-react';
import { Input } from '../ui/input';
import React, { useEffect, useRef, useState } from 'react';
import Linkify from 'react-linkify';
import { initialChatMessages } from '@/mocks/ChatMessages';

type ChatBotProps = {
  darkMode: boolean;
};

const ChatBot = ({ darkMode }: ChatBotProps) => {
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState(initialChatMessages);

  useEffect(() => {
    if (chatbotOpen) {
      setTimeout(() => {
        if (chatEndRef.current) {
          chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [chatMessages, chatbotOpen]);

  const handleChatbotToggle = () => {
    setChatbotOpen(!chatbotOpen);
  };

  const simulateBotResponse = async (userMessage: string) => {
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} ${errorText}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setTimeout(() => {
        const newBotMessage = {
          id: Date.now(),
          text: data.reply,
          sender: 'bot' as const,
          timestamp: new Date(),
        };

        setChatMessages(prev => [...prev, newBotMessage]);
        setIsTyping(false);
      }, 2000);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error('Error in simulateBotResponse:', errorMessage);
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          text: `Maaf, ada masalah: ${errorMessage}. Coba lagi nanti!`,
          sender: 'bot' as const,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      const userMessage = {
        id: Date.now(),
        text: chatMessage.trim(),
        sender: 'user' as const,
        timestamp: new Date(),
      };

      setChatMessages(prev => [...prev, userMessage]);
      setChatMessage('');

      simulateBotResponse(chatMessage.trim());
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="relative">
        <div
          className={`absolute inset-0 h-16 w-16 animate-ping rounded-full border-4 ${
            darkMode ? 'border-yellow-400' : 'border-pink-400'
          }`}
          style={{ animationDuration: '2s' }}
        ></div>

        <div className="group relative">
          <button
            onClick={handleChatbotToggle}
            className={`btn-press-lg relative flex h-16 w-16 animate-bounce cursor-pointer items-center justify-center rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-110 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
              darkMode
                ? 'bg-yellow-400 hover:bg-yellow-300'
                : 'bg-pink-400 hover:bg-pink-300'
            }`}
            style={{ animationDuration: '2s' }}
          >
            {chatbotOpen ? (
              <X className="h-8 w-8 text-black" />
            ) : (
              <BotMessageSquare className="h-8 w-8 text-black" />
            )}
          </button>

          <div
            className={`absolute right-0 bottom-full mb-2 hidden border-4 border-black px-3 py-2 text-sm font-bold whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:block ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
            }`}
          >
            {chatbotOpen ? 'Tutup Chat AI' : 'Chat dengan AI Assistant'}
            <div
              className={`absolute top-full right-4 h-0 w-0 border-t-8 border-r-8 border-l-8 border-transparent ${
                darkMode ? 'border-t-gray-800' : 'border-t-white'
              }`}
            ></div>
          </div>
        </div>

        {chatbotOpen && (
          <div
            className={`animate-slide-in-up absolute right-0 bottom-full mb-20 flex h-[500px] w-96 flex-col border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div
              className={`flex items-center gap-3 border-b-4 border-black p-4 ${
                darkMode ? 'bg-cyan-400' : 'bg-pink-400'
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black">
                  AI Assistant RendyBot
                </h3>
                <p className="text-sm text-black">🟢 Online - Siap membantu!</p>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {chatMessages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                      message.sender === 'user'
                        ? darkMode
                          ? 'ml-4 bg-yellow-400 text-black'
                          : 'ml-4 bg-cyan-400 text-black'
                        : darkMode
                          ? 'mr-4 bg-gray-700 text-white'
                          : 'mr-4 bg-gray-100 text-black'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-600" />
                      )}
                      {message.sender === 'user' && (
                        <User className="mt-1 h-4 w-4 flex-shrink-0 text-pink-600" />
                      )}
                      <div className="flex-1">
                        <p
                          className="text-sm leading-relaxed break-words whitespace-pre-wrap"
                          style={{ maxWidth: '100%', wordBreak: 'break-word' }}
                        >
                          <Linkify
                            componentDecorator={(
                              decoratedHref,
                              decoratedText,
                              key
                            ) => (
                              <a
                                href={decoratedHref}
                                key={key}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                              >
                                {decoratedText}
                              </a>
                            )}
                          >
                            {message.text}
                          </Linkify>
                        </p>
                        <p className="mt-1 text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString('id-ID', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className={`mr-4 border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-cyan-600" />
                      <div className="flex gap-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-cyan-600"></div>
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-cyan-600"
                          style={{ animationDelay: '0.1s' }}
                        ></div>
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-cyan-600"
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">
                        sedang mengetik...
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            <div className="border-t-4 border-black p-4">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={chatMessage}
                  onChange={e => setChatMessage(e.target.value)}
                  placeholder="Tanyakan tentang portfolio Rendy..."
                  className="btn-press-instant flex-1 border-4 border-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={isTyping || !chatMessage.trim()}
                  className="btn-press border-4 border-black bg-green-400 px-4 py-2 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:bg-green-300 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-xs text-gray-500">
                💡 Coba tanya: &quot;Dimana rendy tinggal ?&quot; atau
                &quot;Berapa umur rendy sekarang ?&quot;
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
