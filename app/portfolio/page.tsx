"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Globe, Smartphone, TrendingUp, Users, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const portfolioProjects = [
  {
    id: 1,
    title: "Luxury Fashion E-commerce",
    category: "E-commerce Development",
    description: "Complete Shopify store redesign with 300% increase in conversion rate. Implemented advanced product filtering, AR try-on feature, and seamless checkout experience.",
    image: "/api/placeholder/600/400",
    technologies: ["Shopify", "Liquid", "React", "Tailwind CSS"],
    results: ["300% Conversion Increase", "45% Cart Abandonment Reduction", "2M+ Monthly Revenue"],
    link: "#",
    client: "Elite Fashion Co.",
    testimonial: "Clicks Synergy transformed our online presence completely. Our sales have never been better."
  },
  {
    id: 2,
    title: "SaaS Dashboard Redesign",
    category: "Web Application",
    description: "Modernized legacy dashboard with intuitive UX/UI, real-time analytics, and mobile-first responsive design. Integrated advanced data visualization and automated reporting.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
    results: ["60% User Engagement Boost", "40% Task Completion Time", "95% Mobile Satisfaction"],
    link: "#",
    client: "TechFlow Solutions",
    testimonial: "The new dashboard is a game-changer for our productivity and user experience."
  },
  {
    id: 3,
    title: "Digital Marketing Campaign",
    category: "Marketing Strategy",
    description: "Comprehensive multi-channel campaign targeting B2B tech companies. Achieved viral reach with strategic content marketing and influencer partnerships.",
    image: "/api/placeholder/600/400",
    technologies: ["Google Ads", "Facebook Ads", "Content Marketing", "SEO"],
    results: ["500K+ Impressions", "15K New Leads", "ROI of 450%"],
    link: "#",
    client: "InnovateTech Corp",
    testimonial: "Their strategic approach delivered results beyond our expectations."
  },
  {
    id: 4,
    title: "Restaurant Branding & Website",
    category: "Brand Identity",
    description: "Complete brand overhaul including logo design, website development, and social media strategy. Created a cohesive brand story that resonates with local food enthusiasts.",
    image: "/api/placeholder/600/400",
    technologies: ["WordPress", "Adobe Creative Suite", "Social Media", "Photography"],
    results: ["200% Social Media Growth", "35% Website Traffic Increase", "4.8/5 Customer Rating"],
    link: "#",
    client: "Bella Vista Restaurant",
    testimonial: "Our brand now truly represents our passion for authentic Italian cuisine."
  },
  {
    id: 5,
    title: "Mobile App Development",
    category: "Mobile Application",
    description: "Cross-platform fitness tracking app with gamification features, social integration, and personalized workout plans. Available on iOS and Android.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    results: ["100K+ Downloads", "4.7 App Store Rating", "80% User Retention"],
    link: "#",
    client: "FitLife Pro",
    testimonial: "The app exceeded our vision and user expectations completely."
  },
  {
    id: 6,
    title: "SEO & Content Strategy",
    category: "Digital Marketing",
    description: "Comprehensive SEO overhaul and content marketing strategy for a B2B software company. Achieved top rankings for competitive keywords and consistent organic growth.",
    image: "/api/placeholder/600/400",
    technologies: ["SEO Analysis", "Content Strategy", "Technical SEO", "Analytics"],
    results: ["Top 3 Rankings for 50+ Keywords", "250% Organic Traffic Growth", "Lead Quality +60%"],
    link: "#",
    client: "DataSync Solutions",
    testimonial: "Their SEO expertise has transformed our online visibility and lead generation."
  }
];

const categories = ["All", "Web Development", "E-commerce", "Mobile Apps", "Digital Marketing", "Branding"];

export default function Portfolio() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader 
            title="Our Portfolio" 
            subtitle="Success Stories & Case Studies" 
          />
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Explore our diverse portfolio of successful projects across various industries. Each case study demonstrates our commitment to delivering exceptional results and innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, i) => (
              <button
                key={i}
                className="px-6 py-3 glass text-white font-medium rounded-full hover:bg-gold hover:text-black transition-all duration-300 text-sm md:text-base"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {portfolioProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass border border-white/5 rounded-[30px] md:rounded-[40px] overflow-hidden hover:border-gold/20 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-bold tracking-widest uppercase rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {project.results.map((result, j) => (
                      <div key={j} className="flex items-center text-green-400 text-sm">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* Client Testimonial */}
                  <div className="mb-6 p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-gold mr-1" />
                      <Star className="w-4 h-4 text-gold mr-1" />
                      <Star className="w-4 h-4 text-gold mr-1" />
                      <Star className="w-4 h-4 text-gold mr-1" />
                      <Star className="w-4 h-4 text-gold mr-1" />
                    </div>
                    <p className="text-gray-300 text-sm italic">"{project.testimonial}"</p>
                    <p className="text-gold text-xs font-medium mt-2">- {project.client}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={project.link}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gold text-black font-bold tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-500 text-sm group-hover:shadow-gold"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-gold p-8 md:p-20 rounded-[30px] md:rounded-[50px] text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">
                Ready to Create Your <span className="text-gradient-gold">Success Story</span>?
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help you achieve extraordinary results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 md:px-10 py-4 md:py-5 bg-gold text-black font-bold tracking-widest uppercase rounded-full hover:bg-gold-light transition-all duration-500 glow-gold text-sm md:text-base"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="px-8 md:px-10 py-4 md:py-5 glass text-white font-bold tracking-widest uppercase rounded-full hover:bg-gold hover:text-black transition-all duration-500 text-sm md:text-base"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}