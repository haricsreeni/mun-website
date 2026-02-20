const nodemailer = require('nodemailer');

/**
 * Send an email notification about a new contact query.
 * Fails gracefully if SMTP is not configured.
 */
async function sendContactNotification({ email, query }) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
        console.warn('⚠️  SMTP not configured — skipping email notification');
        return;
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `"IITM MUN Website" <${SMTP_USER}>`,
        to: NOTIFY_EMAIL,
        subject: `New Contact Query from ${email}`,
        text: `You have received a new contact query.\n\nFrom: ${email}\n\nQuery:\n${query}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8b0000; border-bottom: 2px solid #8b0000; padding-bottom: 10px;">
          New Contact Query — IITM MUN 2026
        </h2>
        <p><strong>From:</strong> <a href="mailto:${email}">${email}</a></p>
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0;">
          <p style="margin: 0; white-space: pre-wrap;">${query}</p>
        </div>
        <p style="color: #999; font-size: 12px;">
          This email was sent automatically from the IITM MUN website contact form.
        </p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Contact notification email sent');
    } catch (err) {
        console.error('❌ Failed to send email:', err.message);
    }
}

/**
 * Send a confirmation email to a participant after successful registration.
 * Fails gracefully if SMTP is not configured.
 */
async function sendRegistrationConfirmation(registration) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.warn('⚠️  SMTP not configured — skipping registration confirmation email');
        return;
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    const { fullName, email, committee, delegationType, institution } = registration;

    const mailOptions = {
        from: `"IITM MUN Website" <${SMTP_USER}>`,
        to: email,
        subject: `Registration Confirmed — IITM MUN 2026`,
        text: `Hello ${fullName},\n\nThank you for registering for IITM MUN 2026.\n\nCommittee: ${committee}\nDelegation type: ${delegationType}\nInstitution: ${institution || 'N/A'}\n\nWe will share further details via email soon.\n\nRegards,\nIITM MUN Team`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8b0000; border-bottom: 2px solid #8b0000; padding-bottom: 10px;">
          Registration Confirmed — IITM MUN 2026
        </h2>
        <p>Hi ${fullName},</p>
        <p>Thank you for registering for IITM MUN 2026. Here are the details we received:</p>
        <ul>
          <li><strong>Committee:</strong> ${committee}</li>
          <li><strong>Delegation type:</strong> ${delegationType}</li>
          <li><strong>Institution:</strong> ${institution || 'N/A'}</li>
        </ul>
        <p>We will send additional information and event updates to this email.</p>
        <p style="color: #999; font-size: 12px;">This is an automated confirmation sent from the IITM MUN website.</p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Registration confirmation email sent to', email);
    } catch (err) {
        console.error('❌ Failed to send registration confirmation email:', err.message);
    }
}

module.exports = { sendContactNotification, sendRegistrationConfirmation };

