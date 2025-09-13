import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: process.env.SMTP_ENDPOINT,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function sendMail(to: string, body: string) {
    await transport.sendMail({
        from: 'taruncv516@gmail.com',
        sender: 'taruncv516@gmail.com',
        to,
        subject: 'Hello from zapier!!',
        text: body,
    });
}
