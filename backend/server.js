// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ===== Middleware =====
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173', // Local frontend
      process.env.FRONTEND_URL // Production frontend
    ],
    credentials: true,
  })
);

// ===== API Route =====
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // === Basic Validation ===
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    // === Nodemailer Transporter ===
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App-specific password
      },
    });

    // === Verify SMTP connection ===
    await transporter.verify();
    console.log('📡 Mail server is ready to send emails.');

    // === Email Template ===
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO, // Recipient
      subject: '📥 New Contact Form Submission',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Contact Form</title>
        </head>
        <body style="margin:0; padding:0; background:#f4f4f7; font-family: Arial, sans-serif;">
          <div style="max-width:600px; margin:20px auto; background:#fff; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.1); overflow:hidden;">
            <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); color:#fff; text-align:center; padding:20px;">
              <h2 style="margin:0; font-size:24px;">📩 New Contact Form Submission</h2>
            </div>
            <div style="padding:20px; color:#333;">
              <p><strong>👤 Name:</strong> ${name}</p>
              <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color:#6366f1;">${email}</a></p>
              <p><strong>💬 Message:</strong></p>
              <p style="background:#f1f1f1; padding:12px; border-radius:5px;">${message}</p>
            </div>
            <div style="background:#f9fafb; text-align:center; padding:12px; font-size:12px; color:#888;">
              You received this email from your portfolio contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // === Send Email ===
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully from ${email}`);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
