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
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-gold font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-tight">
              LET'S BUILD THE <span className="text-gradient-gold">FUTURE TOGETHER</span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl leading-relaxed">
              Have a project in mind? Reach out to us and let's discuss how we can help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-gold/30 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-900 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                      <info.icon className="text-gold group-hover:text-black w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1">{info.title}</h3>
                      <p className="text-white font-bold text-base md:text-lg break-all">{info.value}</p>
                      <p className="text-gray-500 text-xs md:text-sm">{info.sub}</p>
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
              <div className="glass-gold p-6 md:p-12 rounded-[30px] md:rounded-[40px] border border-gold/10 relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 md:py-20"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                      <CheckCircle2 className="text-black w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Message Sent!</h2>
                    <p className="text-gray-400 text-sm md:text-base">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    {error && (
                      <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-2xl">
                        {error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:outline-none focus:border-gold/50 transition-colors text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:outline-none focus:border-gold/50 transition-colors text-sm md:text-base"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 56 432 2012"
                          className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:outline-none focus:border-gold/50 transition-colors text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:outline-none focus:border-gold/50 transition-colors text-sm md:text-base"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:outline-none focus:border-gold/50 transition-colors resize-none text-sm md:text-base"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 md:py-5 bg-gold text-black font-bold rounded-xl md:rounded-2xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Message
                          <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass h-[300px] md:h-[400px] rounded-[30px] md:rounded-[40px] border border-white/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-30"></div>
            <div className="relative z-10 text-center px-6">
              <MapPin className="text-gold mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Visit Our Office</h3>
              <p className="text-gray-400 text-sm md:text-base">R308 Building, Near Burjuman Mall, Dubai – UAE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}