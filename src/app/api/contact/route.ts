import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, phone, company, email, service, budget, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.CONTACT_EMAIL || 'contact@smbmitra.com',
            subject: `New Lead from SMB Mitra: ${name} (${company || 'Individual'})`,
            html: `
        <h2>New Contact / Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone / WhatsApp:</strong> ${phone || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service Interested In:</strong> ${service || 'General'}</p>
        <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message / Scope:</strong></p>
        <p>${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
