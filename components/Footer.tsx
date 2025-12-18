"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-gold/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 border border-gold rounded-lg rotate-45 flex items-center justify-center">
                <span className="text-gold font-bold text-xl -rotate-45">C</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-gradient-gold">
                CLICKS SYNERGY
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering global brands with cutting-edge digital solutions. We blend creativity with technology to drive measurable growth.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#B8860B" }}
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gray-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-8 text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="text-gray-400 hover:text-gold transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-8 text-sm">Services</h4>
            <ul className="space-y-4">
              {["Digital Marketing", "Web Development", "SEO Optimization", "Ads Management", "Content Creation"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-400 hover:text-gold transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-8 text-sm">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Office No. 201-056, 2nd Floor, R308 Building, Near Burjuman Mall, Dubai – UAE
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-gray-400 text-sm">+971 56 432 2012</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-gray-400 text-sm">info.clicksynergy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            © 2025 CLICKS SYNERGY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="text-gray-500 hover:text-gold text-xs tracking-widest uppercase transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-gold text-xs tracking-widest uppercase transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
