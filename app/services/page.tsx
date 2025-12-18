"use client";

import { motion } from "framer-motion";
import { 
  Share2, 
  Smartphone, 
  Search, 
  Rocket, 
  Palette, 
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
  Globe,
  Zap
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";

const services = [
  {
    title: "Digital Marketing",
    icon: Share2,
    description: "Comprehensive digital marketing solutions to boost your online presence.",
    features: [
      "Social Media Management",
      "Ads Management (FB, IG, TikTok, X)",
      "Google & YouTube Ads",
      "Creative Content Strategy",
      "UI/UX Design",
      "Customer Service (CSR)",
      "Video Production"
    ]
  },
  {
    title: "Web & App Development",
    icon: Smartphone,
    description: "Custom web and mobile applications built for performance and scalability.",
    features: [
      "E-commerce Stores (Shopify)",
      "Dropshipping Solutions",
      "Portfolio Websites",
      "Business Platforms",
      "Modern UI/UX",
      "SEO Structured Code",
      "Scalable Architecture"
    ]
  },
  {
    title: "SEO Optimization",
    icon: Search,
    description: "Optimize your website to rank at the top of search results.",
    features: [
      "On-page SEO",
      "Off-page SEO",
      "Backlinking Strategy",
      "Guest Posting",
      "Technical SEO Audit",
      "Keyword Research",
      "Competitor Analysis"
    ]
  },
  {
    title: "Ads Management",
    icon: Rocket,
    description: "Strategic ad management across multiple platforms for maximum ROI.",
    features: [
      "Facebook & Instagram Ads",
      "TikTok & Snapchat Ads",
      "YouTube & Google Ads",
      "X (Twitter) Campaigns",
      "Lead Generation",
      "Sales Optimization",
      "Detailed Analytics"
    ]
  },
  {
    title: "Visual Content",
    icon: Palette,
    description: "Eye-catching visuals that represent your brand perfectly.",
    features: [
      "Branding Graphics",
      "Banners & Posters",
      "Social Media Designs",
      "Merchandise Design",
      "Professional Creatives",
      "Motion Graphics",
      "Brand Identity"
    ]
  },
  {
    title: "Brand Strategy",
    icon: ShieldCheck,
    description: "Expert guidance to position your brand for success.",
    features: [
      "Market Research",
      "Brand Positioning",
      "Communication Strategy",
      "Growth Hacking",
      "Relationship Management",
      "Profit Maximization",
      "Vision Planning"
    ]
  }
];

const shopifyBenefits = [
  "Fast buying process",
  "Product & store creation",
  "Cost reduction",
  "Affordable marketing",
  "No reach limitations",
  "Multiple payment modes",
  "Market adaptability"
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              SOLUTIONS FOR THE <span className="text-gradient-gold">DIGITAL AGE</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              We provide a comprehensive suite of digital services designed to scale your business and dominate your market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[40px] border border-white/5 hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                  <service.icon className="text-gold group-hover:text-black" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-400">
                      <CheckCircle2 className="text-gold mr-3" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopify Special Section */}
      <section className="py-32 bg-zinc-950/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader 
                title="E-commerce Excellence" 
                subtitle="Shopify Specialists" 
                align="left"
              />
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                We build high-converting Shopify stores that are optimized for sales and scalability. From product sourcing to store design, we handle everything.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {shopifyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center p-4 glass rounded-2xl border border-white/5">
                    <ShoppingBag className="text-gold mr-3" size={20} />
                    <span className="text-gray-300 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-gold p-2 rounded-[40px]">
                <div className="bg-black rounded-[38px] p-12 aspect-video flex flex-col justify-center items-center text-center">
                  <Zap className="text-gold mb-6 animate-pulse" size={64} />
                  <h4 className="text-3xl font-bold text-white mb-4">Ready to Sell?</h4>
                  <p className="text-gray-500 mb-8">Launch your automated e-commerce business today.</p>
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gold text-black font-bold tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-500 glow-gold"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass p-12 md:p-20 rounded-[50px] text-center border border-white/5">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Need a <span className="text-gradient-gold">Custom Solution?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Every business is unique. We offer tailored strategies to meet your specific goals and challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-black font-bold tracking-widest uppercase rounded-full hover:bg-gold hover:text-black transition-all duration-500"
            >
              Contact Our Experts
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}