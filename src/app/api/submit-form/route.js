import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { firstName, lastName, email, phone, message,pageUrl } = await req.json();

        // Configure your SMTP transporter (example with Gmail SMTP)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: true,
            auth: {
                user: 'harrykennedy.cs@gmail.com', // your email
                pass: "zhnuhluqapfjmxuw", // your email password or app password
            },
        });

        // Email options
        const mailOptions = {
            from: `"${firstName}" <${email}>`, // sender address
           to: "harrykennedy.cs@gmail.com, mark@bestpublishingservice.com", // receiver email (your email)
            subject: "New Contact Form Submission",
            text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        PageURL: ${pageUrl}
      `,
        };

        // Send mail
        await transporter.sendMail(mailOptions);

        return Response.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        return Response.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
