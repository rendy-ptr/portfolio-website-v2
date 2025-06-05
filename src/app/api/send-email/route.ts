import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporterOptions: SMTPTransport.Options = {
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport(transporterOptions);

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: 'Email sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: 'Failed to send email',
        },
        {
          status: 500,
        }
      );
    }
  }
}
