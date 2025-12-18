"use client";

import { motion } from "framer-motion";
import { 
  Star, 
  Quote, 
  ArrowRight, 
  ExternalLink,
  Trophy,
  Users,
  Briefcase,
  Heart
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";

const testimonials = [
  {
    name: "John Smith",
    company: "Tech Solutions Inc.",
    text: "Click Synergy transformed our online presence completely. Our sales increased by 150% within 6 months.",
    rating: 5,
    image: "JS"
  },
  {
    name: "Sarah Johnson",
    company: "Fashion Boutique",
    text: "The team's expertise in social media marketing helped us reach a global audience. Highly recommended!",
    rating: 5,
    image: "SJ"
  },
  {
    name: "Mike Davis",
    company: "Manufacturing Co.",
    text: "Professional, reliable, and results-driven. They delivered exactly what they promised.",
    rating: 5,
    image: "MD"
  }
];

const stats = [
  { label: "Happy Clients", value: "500+", icon: Heart },
  { label: "Projects Done", value: "1000+", icon: Briefcase },
  { label: "Retention Rate", value: "95%", icon: Users },
  { label: "Awards Won", value: "25+", icon: Trophy },
];

export default function Clients() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-gold font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">Our Success Stories</span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-tight">
              TRUSTED BY <span className="text-gradient-gold">GLOBAL LEADERS</span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed">
              We've helped hundreds of businesses achieve their digital goals and scale their operations globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 md:p-8 rounded-2xl md:rounded-[30px] text-center border border-white/5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <stat.icon className="text-gold w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-32 bg-zinc-950/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Client Testimonials" 
            subtitle="Voices of Success" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 md:p-10 rounded-[30px] md:rounded-[40px] border border-white/5 relative group"
              >
                <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-gold/10 group-hover:text-gold/20 transition-colors w-10 h-10 md:w-14 md:h-14" />
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold md:w-4 md:h-4" />
                  ))}
                </div>
                <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-black font-bold text-sm md:text-base">
                    {t.image}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">{t.name}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="Our Portfolio" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[1, 2].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative aspect-video rounded-[30px] md:rounded-[40px] overflow-hidden glass border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-gold text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 block">Digital Strategy</span>
                      <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">Global Brand Launch</h3>
                      <p className="text-gray-400 text-xs md:text-base max-w-md">A comprehensive digital transformation for a leading retail brand.</p>
                    </div>
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-gold transition-colors duration-500 shrink-0 ml-4">
                      <ExternalLink className="text-black w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 md:mt-20 text-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 glass text-white font-bold tracking-widest uppercase rounded-full hover:bg-gold hover:text-black transition-all duration-500 inline-block text-sm md:text-base"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-gold p-8 md:p-20 rounded-[30px] md:rounded-[50px] text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">
                Be Our Next <span className="text-gradient-gold">Success Story</span>
              </h2>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gold text-black font-bold tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-500 glow-gold text-sm md:text-base"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
