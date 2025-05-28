import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request) {
    const body = await request.json();
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: 'websitetekalp@gmail.com',
          pass: process.env.EMAIL_SECRET_KEY
        },
      })
      
      const mailData = {
        from: 'TEKALP <websitetekalp@gmail.com>',
        to: 'contact@tekalp.fr',
        subject: `TEKALP - DEMANDE DE CONTACT`,
        html: 
        `<div>
            <p>Demande : ${body.email}</p>
            <p>Prénom : ${body.firstname}</p>
            <p>Nom : ${body.lastname}</p>
            <p>Entreprise : ${body.company}</p>
            <p>Message : ${body.message}</p>
        </div>`
       }
      
       try {
        await new Promise((resolve, reject) => {
          transporter.sendMail(mailData, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
        return NextResponse.json({ success: true, message: 'Contact form submitted successfully!' });
      } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to send email.' });
      }
  }