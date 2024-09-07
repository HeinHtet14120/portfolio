import { ok } from 'assert';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req, res) => {
    const { name, email, message } = await req.json();

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
    // Email options
    let mailOptions = {
        from: email,
        to: process.env.EMAIL_TO, // your email address
        subject: `New message from ${name}:`,
        text:`New message from ${email}: ${message}`,
    };

    try{
        const result = await transporter.sendMail(mailOptions)
        console.log("This is result : ", result)
        return NextResponse.json({ message: 'Message received successfully!' }, { status: 200 });
    }catch(error) {
        console.log(error)
        return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
    }
    
}