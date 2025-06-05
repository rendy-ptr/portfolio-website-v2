'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/schemas/contactSchema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { Toast } from '@/components/shared/Toast';

type ContactProps = {
  darkMode: boolean;
};

const Contact = ({ darkMode }: ContactProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning';
  } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setToast(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (!response.ok) {
        throw new Error(resJson.error || 'Gagal mengirim email.');
      }

      setToast({ message: 'Pesan berhasil dikirim!', type: 'success' });
      reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Terjadi kesalahan saat mengirim email.';
      setToast({ message: errorMessage, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-16">
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2
          className={`mb-8 text-5xl font-black transition-all duration-500 hover:scale-105 ${
            darkMode ? 'text-yellow-400' : 'text-red-600'
          }`}
        >
          KIRIM EMAIL
        </h2>

        <div
          className={`border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Nama */}
            <div className="group">
              <label
                htmlFor="nama"
                className="mb-2 block text-xl font-bold transition-all duration-300 group-hover:scale-105"
              >
                NAMA
              </label>
              <Input
                id="nama"
                type="text"
                {...register('name')}
                className="btn-press-instant border-4 border-black p-4 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="group">
              <label
                htmlFor="email"
                className="mb-2 block text-xl font-bold transition-all duration-300 group-hover:scale-105"
              >
                EMAIL
              </label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="btn-press-instant border-4 border-black p-4 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="group">
              <label
                htmlFor="subject"
                className="mb-2 block text-xl font-bold transition-all duration-300 group-hover:scale-105"
              >
                SUBJECT
              </label>
              <Input
                id="subject"
                type="text"
                {...register('subject')}
                className="btn-press-instant border-4 border-black p-4 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Pesan */}
            <div className="group">
              <label
                htmlFor="pesan"
                className="mb-2 block text-xl font-bold transition-all duration-300 group-hover:scale-105"
              >
                PESAN
              </label>
              <Textarea
                id="pesan"
                {...register('message')}
                className="btn-press-instant min-h-[120px] border-4 border-black p-4 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Tombol Kirim */}
            <Button
              type="submit"
              disabled={isLoading}
              className="btn-press-lg cursor-pointer border-4 border-black bg-green-400 px-8 py-4 text-lg font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:bg-green-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
            >
              <Send className="mr-2 h-5 w-5" />
              {isLoading ? 'MENGIRIM...' : 'KIRIM PESAN'}
            </Button>
          </form>
        </div>
      </div>
      {/* Toast Feedback */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
