import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'minimal nama 2 karakter'),
  subject: z.string().min(3, 'minimal subject 3 karakter'),
  email: z.string().email('Email tidak valid'),
  message: z.string().min(10, 'Minimal pesan 10 karakter'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
