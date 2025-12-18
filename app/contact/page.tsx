"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  CheckCircle2
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", value: "+971 56 432 2012", sub: "043304431" },
    { icon: Mail, title: "Email", value: "info.clicksynergy@gmail.com", sub: "Support 24/7" },
    { icon: MapPin, title: "Office", value: "Office No. 201-056, 2nd Floor", sub: "Adidas Building, Dubai" },
    { icon: Clock, title: "Hours", value: "Mon - Fri: 9AM - 6PM", sub: "Weekend: Closed" },
  ];

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
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              LET'S BUILD THE <span className="text-gradient-gold">FUTURE TOGETHER</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Have a project in mind? Reach out to us and let's discuss how we can help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-gold/30 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                      <info.icon className="text-gold group-hover:text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{info.title}</h3>
                      <p className="text-white font-bold text-lg">{info.value}</p>
                      <p className="text-gray-500 text-sm">{info.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="glass-gold p-8 md:p-12 rounded-[40px] border border-gold/10 relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="text-black" size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                    <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {error && (
                      <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-2xl">
                        {error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold font-bold ml-4">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold font-bold ml-4">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold font-bold ml-4">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 ..."
                          className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold font-bold ml-4">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gold font-bold ml-4">Your Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-6 bg-gold text-black font-bold tracking-widest uppercase rounded-2xl hover:bg-gold-light transition-all duration-500 flex items-center justify-center gap-3 glow-gold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass h-[400px] rounded-[40px] border border-white/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-30"></div>
            <div className="relative z-10 text-center">
              <MapPin className="text-gold mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">Visit Our Office</h3>
              <p className="text-gray-400">R308 Building, Near Burjuman Mall, Dubai – UAE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}