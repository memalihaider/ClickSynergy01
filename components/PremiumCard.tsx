"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PremiumCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function PremiumCard({ title, description, icon: Icon, index }: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative p-8 rounded-3xl glass-gold hover:bg-gold/10 transition-all duration-500"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-500">
          <Icon size={32} />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
        
        <div className="mt-8 flex items-center text-gold font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          Learn More
          <div className="ml-2 w-8 h-px bg-gold"></div>
        </div>
      </div>
    </motion.div>
  );
}
