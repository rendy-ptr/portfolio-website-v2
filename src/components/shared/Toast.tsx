'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning';
  onClose: () => void;
}

export const Toast = ({ message, type, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const duration = 5000;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, duration - elapsed);
      setProgress((remaining / duration) * 100);
      if (remaining <= 0) {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onClose]);

  const typeStyles = {
    success: {
      bg: 'bg-green-400',
      text: 'text-black',
      border: 'border-green-600',
      progress: 'bg-green-600',
    },
    error: {
      bg: 'bg-red-400',
      text: 'text-black',
      border: 'border-red-600',
      progress: 'bg-red-600',
    },
    warning: {
      bg: 'bg-yellow-400',
      text: 'text-black',
      border: 'border-yellow-600',
      progress: 'bg-yellow-600',
    },
  };

  return (
    <div
      className={`animate-slide-in-right fixed top-6 right-6 z-50 max-w-md ${
        isVisible ? 'animate-glitch' : 'animate-slide-in-right-reverse'
      } ${typeStyles[type].bg} ${typeStyles[type].text} border-6 ${
        typeStyles[type].border
      } neo-border rounded-lg p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-body text-xl leading-tight font-bold">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="btn-press-instant cursor-pointer rounded-full border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-black/20">
        <div
          className={`h-full ${typeStyles[type].progress} transition-all duration-50 ease-linear`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
