"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Globe2, 
  Award, 
  Users2, 
  Rocket,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";

const values = [
  { title: "Innovation", icon: Rocket, desc: "Constantly pushing boundaries with cutting-edge digital strategies." },
  { title: "Quality", icon: Award, desc: "Uncompromising excellence in every project we deliver." },
  { title: "Collaboration", icon: Users2, desc: "Working as an extension of your team to achieve shared goals." },
  { title: "Integrity", icon: CheckCircle2, desc: "Transparent communication and honest business practices." },
];

const locations = [
  { name: "UAE", region: "Middle East" },
  { name: "UK", region: "Europe" },
  { name: "USA", region: "North America" },
  { name: "Gulf", region: "Middle East" },
];

export default function About() {
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
            <span className="text-gold font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-tight">
              PIONEERING THE <span className="text-gradient-gold">DIGITAL FRONTIER</span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed">
              We are a team of digital marketing experts dedicated to the global growth of businesses. Our focus is on increasing sales, enhancing brand awareness, and maximizing profits through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-gold p-8 md:p-12 rounded-[30px] md:rounded-[40px] border border-gold/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Target size={80} className="text-gold md:hidden" />
                <Target size={120} className="text-gold hidden md:block" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-gold/20">
                  <Target className="text-black w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Our Mission</h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                  To empower businesses worldwide with innovative digital solutions that drive measurable growth and sustainable success. We blend creativity with data-driven strategies to deliver exceptional ROI.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[30px] md:rounded-[40px] border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 md:p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Eye size={80} className="text-blue-500 md:hidden" />
                <Eye size={120} className="text-blue-500 hidden md:block" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-blue-600/20">
                  <Eye className="text-white w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Our Vision</h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                  To be the leading digital transformation partner, recognized globally for delivering exceptional results and building lasting partnerships. We aim to redefine the standards of digital excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="What Drives Us" 
            subtitle="Core Values" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <PremiumCard 
                key={i}
                index={i}
                title={value.title}
                description={value.desc}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/5 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <SectionHeader 
              title="Serving Clients Worldwide" 
              subtitle="Global Presence" 
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl text-center border border-white/5 hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-gold transition-colors duration-500">
                  <Globe2 className="text-gold group-hover:text-black w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-1">{loc.name}</h4>
                <p className="text-gray-500 text-[10px] md:text-sm uppercase tracking-widest">{loc.region}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-gold p-8 md:p-20 rounded-[30px] md:rounded-[50px] text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">
                Ready to Start Your <span className="text-gradient-gold">Digital Transformation?</span>
              </h2>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gold text-black font-bold tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-500 glow-gold"
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
