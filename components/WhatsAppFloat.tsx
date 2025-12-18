"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/971564322012?text=Hello%20Clicks%20Synergy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="text-white" size={28} />
      </Link>
    </div>
  );
}