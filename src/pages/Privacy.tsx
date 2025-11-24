import React, { useState } from "react";

const Privacy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy & Policies</h1>
          <p className="text-blue-100 text-lg md:text-xl">
            How Property Experts collects, uses, protects your information and our business policies.
          </p>
          <p className="text-sm text-blue-200 mt-2">Last updated: {lastUpdated}</p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mt-8 gap-4">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "privacy" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("refund")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "refund" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Refund Policy
            </button>
            <button
              onClick={() => setActiveTab("cancellation")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "cancellation" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Cancellation Policy
            </button>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      {activeTab === "privacy" && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
            {/* Intro */}
            <div>
              <p className="text-lg leading-relaxed">
                This Privacy Policy explains how <strong>Property Experts</strong> ("we", "us", "our") collects,
                uses, discloses, and safeguards personal information when you visit our website, engage
                with our property services, or use our platform. By using our website/services, you agree 
                to this Policy. If you do not agree, please discontinue use.
              </p>
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-blue-900 font-medium">Regulatory Note:</p>
                    <p className="text-sm text-blue-800 mt-1">
                      We strive to comply with applicable laws, including India's Digital Personal Data 
                      Protection (DPDP) Act and, where relevant, GDPR. References below to "lawful basis" 
                      and "data principal rights" reflect these standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What we collect */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Personal & Contact:</strong> name, email, phone, address, identification documents.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Property Details:</strong> property location, specifications, photos, ownership documents.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Financial Information:</strong> income details, bank statements for loan processing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Technical:</strong> IP address, device/browser info, pages viewed, session data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Usage & Analytics:</strong> property searches, preferences, interactions with listings.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Payment Information:</strong> transaction details (processed via secure gateways).</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  Sensitive personal data is collected only when necessary for property transactions and with explicit consent.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Sources of Data
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Direct:</strong> registration forms, property listings, consultations, calls.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Automated:</strong> website analytics, cookies, property search patterns.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Third-Party:</strong> property portals, verification services, financial institutions.</span>
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Cookies & Similar Technologies
              </h2>
              <p className="mb-4 text-gray-700">
                We use cookies to enhance user experience, remember preferences, analyze property search patterns,
                and provide personalized property recommendations.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Essential:</strong> required for core functionality and secure transactions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Analytics:</strong> understand user behavior and improve property recommendations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Marketing:</strong> show relevant property listings and services.</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  You can manage cookies via your browser settings. Some property search features may not work without certain cookies.
                </p>
              </div>
            </div>

            {/* How we use */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Facilitate property buying, selling, and rental transactions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Provide personalized property recommendations and alerts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Process property documentation and legal verifications.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Assist with home loan applications and financial services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Security, fraud prevention, and regulatory compliance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Customer support and service improvements.</span>
                </li>
              </ul>
            </div>

            {/* Lawful basis */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
                Legal Bases / Consent
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Consent:</strong> marketing communications, property alerts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Contract:</strong> to facilitate property transactions and services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Legitimate Interest:</strong> property recommendations, service improvements.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Legal Obligation:</strong> property registration, KYC compliance, taxation.</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  You may withdraw consent for marketing communications at any time.
                </p>
              </div>
            </div>

            {/* Sharing */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">6</span>
                How We Share Information
              </h2>
              <p className="mb-4 text-gray-700">
                We do not sell personal data. We may share limited information with:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Property Partners:</strong> brokers, developers, legal authorities for transaction completion.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Financial Institutions:</strong> banks, NBFCs for loan processing with consent.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Legal Authorities:</strong> as required by property laws and regulations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Service Providers:</strong> payment gateways, document verification services.</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">7</span>
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement robust security measures including encryption, access controls, and secure 
                data storage to protect your personal and financial information during property transactions.
              </p>
            </div>

            {/* Retention */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">8</span>
                Data Retention
              </h2>
              <p className="text-gray-700">
                We retain property transaction data as required by law (typically 8+ years). 
                Marketing data is retained for 24 months from last interaction unless deleted upon request.
              </p>
            </div>

            {/* Your rights */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">9</span>
                Your Rights
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Access/Correction:</strong> access your data and correct inaccuracies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Deletion:</strong> request deletion where legally permitted.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Consent Management:</strong> opt-out of marketing communications.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Data Portability:</strong> receive your data in usable format.</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">10</span>
                Contact Information
              </h2>
              <p className="text-gray-700">
                For privacy concerns or to exercise your rights, contact:
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Property Experts</strong><br/>
                  Email: <a href="mailto:info@propertyexperts.com" className="text-blue-600 underline">info@propertyexperts.com</a><br/>
                  Phone: <a href="tel:+919876543210" className="text-blue-600 underline">+91 9876543210</a><br/>
                  Response Time: 3-5 business days
                </p>
              </div>
            </div>

            {/* Summary card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Quick Summary</h3>
              <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>We collect data necessary for property transactions and services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Your information is shared only with authorized parties for transaction completion.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Robust security measures protect your personal and financial data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>You have rights to access, correct, and delete your personal information.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Refund Policy Tab */}
      {activeTab === "refund" && (
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Refund Policy</h2>
            
            <div className="space-y-8">
              {/* General Refund Policy */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">General Refund Policy</h3>
                <p className="text-gray-700 mb-4">
                  At Property Experts, we are committed to providing excellent real estate services. 
                  Due to the nature of property transactions and consulting services, we have the following refund policy:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Consultation fees are refundable if cancelled 24 hours before scheduled appointment</li>
                  <li>Property listing fees are non-refundable once property is listed on portals</li>
                  <li>Documentation and legal service fees are non-refundable after work commencement</li>
                  <li>Package services refunded on pro-rata basis for services not rendered</li>
                </ul>
              </div>

              {/* Service-Specific Policies */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service-Specific Refund Policies</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Property Consultation</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>100% refund if cancelled 24+ hours before appointment</li>
                      <li>50% refund if cancelled less than 24 hours before</li>
                      <li>No refund after consultation completion</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Property Listing Services</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Full refund before property is listed on any portal</li>
                      <li>50% refund after listing but before 7 days</li>
                      <li>No refund after 7 days of listing</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Legal & Documentation</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>No refund once document preparation has started</li>
                      <li>Government/statutory fees are non-refundable</li>
                      <li>Partial refund if work is incomplete due to client unavailability</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Refund Process */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h3>
                <div className="space-y-4 text-gray-700">
                  <p>To request a refund, please contact us with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your service details and invoice number</li>
                    <li>Reason for refund request</li>
                    <li>Any supporting documentation</li>
                  </ul>
                  <p>Refund requests are processed within 7-10 business days. Approved refunds will be credited to the original payment method.</p>
                </div>
              </div>

              {/* Contact for Refunds */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Refund Inquiries</h3>
                <p className="text-blue-100 mb-4">
                  Have questions about our refund policy? Contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:info@propertyexperts.com"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                  <a 
                    href="tel:+919876543210"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cancellation Policy Tab */}
      {activeTab === "cancellation" && (
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cancellation Policy</h2>
            
            <div className="space-y-8">
              {/* General Cancellation */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">General Cancellation Policy</h3>
                <p className="text-gray-700 mb-4">
                  We understand that property plans may change. Our cancellation policy is designed to be 
                  fair while ensuring we can provide quality services to all our clients.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Service cancellations require written notice via email</li>
                  <li>Completed services up to cancellation date remain billable</li>
                  <li>Package services can be cancelled with applicable charges</li>
                  <li>Government/statutory fees are non-refundable upon cancellation</li>
                </ul>
              </div>

              {/* Service Cancellation Details */}
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Cancellation Details</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Property Consultation</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Free cancellation 24+ hours before appointment</li>
                      <li>50% charge for cancellations within 24 hours</li>
                      <li>Full charge for no-shows without prior notice</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Property Listing Services</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Can be cancelled before property goes live on portals</li>
                      <li>50% cancellation fee after listing is active</li>
                      <li>Listing removal takes 3-5 business days</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Legal & Documentation Services</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Cancellation possible before document preparation starts</li>
                      <li>Partial refund based on work completed</li>
                      <li>Government fees and charges are non-refundable</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cancellation Process */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Process</h3>
                <div className="space-y-4 text-gray-700">
                  <p>To cancel services, please:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Send written notice to info@propertyexperts.com</li>
                    <li>Include your service details and client ID</li>
                    <li>Specify the effective cancellation date</li>
                    <li>Clear any outstanding payments</li>
                  </ul>
                  <p>We will acknowledge your cancellation within 2 business days and provide final settlement details.</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Need to Cancel Services?</h3>
                <p className="text-blue-100 mb-4">
                  Contact us directly to discuss cancellation options and applicable charges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:info@propertyexperts.com?subject=Service Cancellation Request"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Cancellation
                  </a>
                  <a 
                    href="tel:+919876543210"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call to Discuss
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Privacy;