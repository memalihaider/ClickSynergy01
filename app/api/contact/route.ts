import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();

    // Email to customer with company introduction
    const customerEmail = await resend.emails.send({
      from: 'Clicks Synergy <info@clicksynergy.com>',
      to: [email],
      subject: 'Thank you for contacting Clicks Synergy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #FFD700; margin: 0;">Clicks Synergy</h1>
            <p style="color: #666; margin: 5px 0;">Your Partner in Digital Success</p>
          </div>

          <h2 style="color: #FFD700;">Thank You for Reaching Out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for your interest in Clicks Synergy. We've received your message and will get back to you within 24 hours.</p>

          <h3 style="color: #FFD700;">About Clicks Synergy</h3>
          <p>We are a premier digital marketing and solutions company specializing in business growth strategies. With global presence in UAE, UK, USA, and Gulf regions, we help businesses achieve their digital objectives.</p>

          <h3 style="color: #FFD700;">Our Services</h3>
          <ul style="color: #ccc;">
            <li>Digital Marketing (Social Media, Ads, SEO, Content Creation)</li>
            <li>Web & App Development (E-commerce, Shopify stores, Business websites)</li>
            <li>Ads Management (Facebook, Instagram, YouTube, TikTok, etc.)</li>
            <li>Visual Content Creation & UI/UX Design</li>
            <li>Customer Service Solutions</li>
          </ul>

          <h3 style="color: #FFD700;">Contact Details</h3>
          <p style="color: #ccc;">
            Phone: +971 56 432 2012<br>
            Email: info@clicksynergy.com<br>
            Office: Office No. 201-056, 2nd Floor, Adidas Building, Dubai, UAE<br>
            Website: www.clicksynergy.ae
          </p>

          <p>We look forward to discussing how we can help grow your business!</p>
          <p>Best regards,<br>The Clicks Synergy Team</p>
        </div>
      `,
    });

    // Email to company with form data
    const companyEmail = await resend.emails.send({
      from: 'Contact Form <info@clicksynergy.com>',
      to: ['theclicksynergy@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
          <h2 style="color: #000;">New Contact Form Submission</h2>
          <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #FFD700; margin-top: 0;">Customer Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <h3 style="color: #FFD700;">Message:</h3>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from the Clicks Synergy website contact form.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ message: 'Failed to send emails' }, { status: 500 });
  }
}