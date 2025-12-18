"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BarChart3, 
  Globe, 
  Zap, 
  Users, 
  Target, 
  TrendingUp, 
  Rocket, 
  ShieldCheck,
  Smartphone,
  Search,
  Share2,
  Palette
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";

const objectives = [
  { title: "Increase Sales", icon: TrendingUp, desc: "Drive revenue growth through targeted digital strategies." },
  { title: "Brand Awareness", icon: Target, desc: "Make your brand a household name in your industry." },
  { title: "Market Share", icon: BarChart3, desc: "Expand your footprint and dominate your market niche." },
  { title: "Global Reach", icon: Globe, desc: "Enter new international markets with confidence." },
  { title: "Customer Loyalty", icon: Users, desc: "Build lasting relationships with your target audience." },
  { title: "Profit Maximization", icon: Zap, desc: "Optimize your digital spend for maximum ROI." },
];

const services = [
  { title: "Digital Marketing", icon: Share2, desc: "Comprehensive strategies to boost your online presence." },
  { title: "Web Development", icon: Smartphone, desc: "High-performance websites built for conversion." },
  { title: "SEO Optimization", icon: Search, desc: "Rank higher and drive organic traffic to your site." },
  { title: "Ads Management", icon: Rocket, desc: "Precision-targeted campaigns across all platforms." },
  { title: "Visual Content", icon: Palette, desc: "Stunning visuals that capture your brand essence." },
  { title: "Brand Strategy", icon: ShieldCheck, desc: "Expert guidance to position your brand for success." },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 md:px-6 rounded-full glass-gold text-gold text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8">
              The Future of Digital Growth
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[0.9]">
              <span className="text-white">ELEVATE YOUR</span><br />
              <span className="text-gradient-gold">DIGITAL SYNERGY</span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
              We blend cutting-edge technology with creative brilliance to transform your business into a global digital powerhouse.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto group px-8 py-4 md:px-10 md:py-5 bg-gold text-black font-bold tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-500 flex items-center justify-center glow-gold text-sm md:text-base"
              >
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 glass text-white font-bold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all duration-500 text-center text-sm md:text-base"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-gray-500 mb-4">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 glass-gold p-2 rounded-[30px] md:rounded-[40px]">
                <div className="bg-black rounded-[28px] md:rounded-[38px] overflow-hidden aspect-square flex items-center justify-center p-8 md:p-12">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-gold/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute inset-4 border border-gold/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl md:text-8xl font-bold text-gradient-gold">CS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass p-4 md:p-8 rounded-2xl md:rounded-3xl glow-gold animate-float">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1">10+</div>
                <div className="text-[10px] md:text-xs tracking-widest uppercase text-gold font-bold">Years Excellence</div>
              </div>
            </motion.div>

            <div className="space-y-6 md:space-y-8">
              <SectionHeader 
                title="Redefining Digital Excellence" 
                subtitle="Who We Are" 
                align="left" 
              />
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                At Click Synergy, we specialize in customized solutions and Digital Marketing Services, emphasizing flexibility, quality, and commitment. Our expertise lies in understanding client needs, devising effective business strategies, and delivering clear vision with measurable results.
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-8 pt-4 md:pt-8">
                <div>
                  <h4 className="text-white font-bold text-2xl md:text-3xl mb-1 md:mb-2">500+</h4>
                  <p className="text-gray-500 text-[10px] md:text-sm tracking-widest uppercase">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-2xl md:text-3xl mb-1 md:mb-2">98%</h4>
                  <p className="text-gray-500 text-[10px] md:text-sm tracking-widest uppercase">Client Satisfaction</p>
                </div>
              </div>
              <div className="pt-4 md:pt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center text-gold font-bold tracking-widest uppercase text-xs md:text-sm group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 md:py-32 bg-zinc-950/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Our Strategic Vision" 
            subtitle="Objectives" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {objectives.map((obj, i) => (
              <PremiumCard 
                key={i}
                index={i}
                title={obj.title}
                description={obj.desc}
                icon={obj.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Cutting-Edge Solutions" 
            subtitle="Our Services" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <PremiumCard 
                key={i}
                index={i}
                title={service.title}
                description={service.desc}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="mt-12 md:mt-20 text-center">
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 glass text-white font-bold tracking-widest uppercase rounded-full hover:bg-gold hover:text-black transition-all duration-500 inline-block text-sm md:text-base"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="glass-gold p-8 md:p-16 rounded-[30px] md:rounded-[40px] text-center border border-gold/20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-tight">
              READY TO SCALE YOUR <br className="hidden md:block" />
              <span className="text-gradient-gold">DIGITAL PRESENCE?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
              Join hundreds of successful brands that have transformed their business with Click Synergy. Let's build something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 md:px-12 md:py-6 bg-gold text-black font-bold tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-500 inline-flex items-center justify-center glow-gold text-sm md:text-base"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
