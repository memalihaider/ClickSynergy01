# Clicks Synergy - Digital Marketing Company Website

A modern, responsive website for Clicks Synergy, a digital marketing and solutions company specializing in business growth strategies.

## Features

- **Futuristic Design**: Premium dark theme with gold accents, glassmorphism, and mesh gradients.
- **Smooth Animations**: Powered by Framer Motion for a high-end, interactive user experience.
- **Fully Responsive**: Optimized for all devices with a mobile-first approach.
- **SEO-Friendly**: Built with Next.js 16 for optimal performance and search engine visibility.
- **Conversion-Focused**: Strategic CTAs, premium service cards, and interactive contact forms.
- **WhatsApp Integration**: Floating WhatsApp icon on all pages for instant customer communication.
- **Custom Logo**: Rounded logo in the navbar with hover animations.

## Pages

- **Home**: Hero section, company overview, objectives, and services preview
- **About**: Company mission, vision, global presence, and achievements
- **Services**: Detailed breakdown of all digital marketing and development services
- **Clients**: Portfolio showcase with testimonials and client logos
- **Contact**: Complete contact information, contact form, and location details

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Geist Sans and Geist Mono

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Email Configuration

The contact form uses Resend for email delivery. When a customer submits the form, two emails are sent:

1. **To the customer**: A welcome email with company introduction, services, and contact details
2. **To the company**: The form data for processing

To set up email functionality:

1. Sign up for a Resend account at https://resend.com
2. Get your API key from the dashboard
3. Update `.env.local` with your API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
4. Verify your domain (clicksynergy.com) in Resend dashboard for better deliverability

**Note**: The emails are sent from `info@clicksynergy.com`. Make sure to verify this domain in Resend. Form submissions are sent to `theclicksynergy@gmail.com`.

## Company Information

- **Name**: Clicks Synergy
- **Tagline**: Your reliable partner for business growth
- **Location**: Dubai, UAE (Global presence in UK, USA, Middle East & Gulf)
- **Contact**: +971 56 432 2012 | info.clicksynergy@gmail.com
- **Website**: www.clicksynergy.ae

## Services Offered

- Digital Marketing (Social Media, Ads, SEO, Content Creation)
- Web & App Development (E-commerce, Shopify stores, Business websites)
- Ads Management (Facebook, Instagram, YouTube, TikTok, etc.)
- Visual Content Creation
- UI/UX Design
- Customer Service Solutions

## Color Scheme

- **Primary**: Black (#000000) - Premium background
- **Accent**: Gold (#FFD700) - Highlights and CTAs
- **Secondary**: Blue (#1E90FF) - Technology and growth

## Deployment

This website is production-ready and can be deployed on Vercel, Netlify, or any other hosting platform that supports Next.js applications.
