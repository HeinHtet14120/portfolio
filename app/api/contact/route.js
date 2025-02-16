import { ok } from 'assert';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req, res) => {
  const { name, email, message } = await req.json();

  var transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });
  // Email options
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_TO, // your email address
    subject: `New message from ${name}:`,
    text: `New message from ${email}: ${message}`,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
};
