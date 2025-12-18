"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export default function PrivacyPolicy() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Privacy Policy"
            subtitle="How We Protect Your Information"
          />
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Your privacy is important to us. This policy explains how Clicks Synergy collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {/* Last Updated */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">Last Updated: December 18, 2025</p>
            </div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Introduction</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Clicks Synergy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-gray-400 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gold mb-4">Personal Information</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We may collect personally identifiable information that you provide directly to us, including:
              </p>
              <ul className="text-gray-400 leading-relaxed mb-6 space-y-2 ml-6">
                <li>• Name, email address, and contact information</li>
                <li>• Business information and company details</li>
                <li>• Payment information for billing purposes</li>
                <li>• Project requirements and specifications</li>
                <li>• Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold mb-4">Automatically Collected Information</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="text-gray-400 leading-relaxed mb-6 space-y-2 ml-6">
                <li>• IP address and location data</li>
                <li>• Browser type and version</li>
                <li>• Operating system</li>
                <li>• Referring website information</li>
                <li>• Pages visited and time spent on our site</li>
                <li>• Device information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gold mb-4">Cookies and Tracking Technologies</h3>
              <p className="text-gray-400 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="text-gray-400 leading-relaxed space-y-3 ml-6">
                <li>• <strong>Service Delivery:</strong> To provide, maintain, and improve our digital marketing and web development services</li>
                <li>• <strong>Communication:</strong> To respond to your inquiries, send updates, and provide customer support</li>
                <li>• <strong>Personalization:</strong> To customize your experience and deliver relevant content</li>
                <li>• <strong>Analytics:</strong> To analyze usage patterns and improve our website and services</li>
                <li>• <strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                <li>• <strong>Marketing:</strong> To send promotional materials (with your consent)</li>
              </ul>
            </motion.div>

            {/* Information Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Information Sharing and Disclosure</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="text-gray-400 leading-relaxed space-y-3 ml-6">
                <li>• <strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
                <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li>• <strong>Consent:</strong> With your explicit consent</li>
              </ul>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Data Security</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="text-gray-400 leading-relaxed space-y-2 ml-6">
                <li>• SSL/TLS encryption for data transmission</li>
                <li>• Secure data storage and access controls</li>
                <li>• Regular security audits and updates</li>
                <li>• Employee training on data protection</li>
                <li>• Incident response procedures</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-6">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Your Rights</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="text-gray-400 leading-relaxed space-y-3 ml-6">
                <li>• <strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
                <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li>• <strong>Restriction:</strong> Request limitation of how we process your information</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-6">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Children's Privacy</h2>
              <p className="text-gray-400 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </motion.div>

            {/* Changes to Privacy Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-gray-400 space-y-2">
                <p><strong>Email:</strong> privacy@clickssynergy.com</p>
                <p><strong>Phone:</strong> +971 56 432 2012</p>
                <p><strong>Address:</strong> Office No. 201-056, 2nd Floor, R308 Building, Near Burjuman Mall, Dubai – UAE</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}