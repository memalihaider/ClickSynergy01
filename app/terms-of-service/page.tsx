"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export default function TermsOfService() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Terms of Service"
            subtitle="Legal Agreement & Conditions"
          />
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            These terms and conditions outline the rules and regulations for the use of Clicks Synergy's services and website.
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

            {/* Acceptance of Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Acceptance of Terms</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                By accessing and using Clicks Synergy's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-400 leading-relaxed">
                These Terms of Service ("Terms") apply to all visitors, users, and others who access or use our services. By using our services, you agree to be bound by these Terms.
              </p>
            </motion.div>

            {/* Description of Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Description of Services</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Clicks Synergy provides comprehensive digital marketing and web development services, including but not limited to:
              </p>
              <ul className="text-gray-400 leading-relaxed space-y-2 ml-6">
                <li>• Digital marketing strategy and campaign management</li>
                <li>• Website design and development</li>
                <li>• E-commerce platform development and optimization</li>
                <li>• Search engine optimization (SEO) services</li>
                <li>• Social media marketing and management</li>
                <li>• Content creation and marketing</li>
                <li>• Analytics and performance tracking</li>
                <li>• Consulting and strategic planning</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-6">
                All services are provided subject to these Terms and any specific project agreements or proposals provided to you.
              </p>
            </motion.div>

            {/* User Obligations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">User Obligations</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                By using our services, you agree to:
              </p>
              <ul className="text-gray-400 leading-relaxed space-y-3 ml-6">
                <li>• Provide accurate, current, and complete information about yourself and your business</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Use our services only for lawful purposes</li>
                <li>• Respect intellectual property rights</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Cooperate with us in providing necessary information for service delivery</li>
                <li>• Pay for services as agreed upon</li>
              </ul>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Intellectual Property</h2>

              <h3 className="text-xl font-semibold text-gold mb-4">Our Intellectual Property</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                The service and its original content, features, and functionality are and will remain the exclusive property of Clicks Synergy and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-4">Client Content</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                You retain ownership of content, materials, and data you provide to us. By providing such content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display such content solely for the purpose of providing our services to you.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-4">Deliverables</h3>
              <p className="text-gray-400 leading-relaxed">
                Upon full payment for services, you will receive full ownership rights to the deliverables we create for you, subject to any third-party licenses or restrictions. We retain the right to use anonymized versions of our work in our portfolio and marketing materials.
              </p>
            </motion.div>

            {/* Payment Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Payment Terms</h2>

              <h3 className="text-xl font-semibold text-gold mb-4">Fees and Payment</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                You agree to pay all fees associated with our services as outlined in project proposals, invoices, or service agreements. All fees are non-refundable unless otherwise specified.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-4">Payment Methods</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We accept payments via bank transfer, credit card, and other agreed-upon methods. Late payments may incur additional fees.
              </p>

              <h3 className="text-xl font-semibold text-gold mb-4">Taxes</h3>
              <p className="text-gray-400 leading-relaxed">
                All fees are exclusive of applicable taxes. You are responsible for paying all applicable taxes related to the services.
              </p>
            </motion.div>

            {/* Project Timeline and Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Project Timeline and Delivery</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We will make reasonable efforts to meet agreed-upon timelines. However, project timelines are estimates and may be affected by factors such as client feedback delays, third-party dependencies, or unforeseen circumstances.
              </p>
              <ul className="text-gray-400 leading-relaxed space-y-2 ml-6">
                <li>• Timelines begin upon receipt of all necessary information and approvals</li>
                <li>• We will keep you informed of project progress</li>
                <li>• Reasonable delays will not constitute a breach of contract</li>
                <li>• Rush orders may incur additional fees</li>
              </ul>
            </motion.div>

            {/* Confidentiality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Confidentiality</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Both parties agree to maintain the confidentiality of proprietary information, trade secrets, and sensitive business information disclosed during the course of our relationship.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This obligation continues indefinitely, even after the termination of our services. We may disclose information only as required by law or with your written consent.
              </p>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                In no event shall Clicks Synergy be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our total liability for any claim arising out of or relating to these Terms or our services shall not exceed the amount paid by you for the services in the 12 months preceding the claim.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you.
              </p>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Termination</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Either party may terminate this agreement at any time, with or without cause, by providing written notice to the other party.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Upon termination, you must cease all use of our services and pay any outstanding fees. We will provide you with access to your data and deliverables as agreed upon.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Sections regarding intellectual property, confidentiality, limitation of liability, and governing law shall survive termination.
              </p>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Governing Law</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                These Terms shall be interpreted and governed by the laws of the United Arab Emirates, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Any disputes arising from these Terms shall be resolved through binding arbitration in Dubai, UAE, or through the competent courts of Dubai, UAE.
              </p>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="glass p-8 md:p-12 rounded-[30px] border border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-gray-400 space-y-2">
                <p><strong>Email:</strong> legal@clickssynergy.com</p>
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