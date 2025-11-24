import React, { useState } from "react";

const Terms: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Terms & Conditions</h1>
          <p className="text-blue-100 text-lg md:text-xl">
            Legal terms governing your use of Property Experts platform and services.
          </p>
          <p className="text-sm text-blue-200 mt-2">Last updated: {lastUpdated}</p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mt-8 gap-4">
            <button
              onClick={() => setActiveTab("terms")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "terms" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Terms & Conditions
            </button>
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
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      {activeTab === "terms" && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
            {/* Introduction */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                This document is an electronic record in terms of Information Technology Act, 2000 and rules
                there under as applicable and the amended provisions pertaining to electronic records in various
                statutes as amended by the Information Technology Act, 2000. This electronic record is generated
                by a computer system and does not require any physical or digital signatures.
              </p>
              <p className="text-gray-700">
                This document is published in accordance with the provisions of Rule 3 (1) of the Information
                Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and
                regulations, privacy policy and Terms of Use for access or usage of domain name
                https://propertyexperts.com ('Website'), including the related mobile site and mobile application
                (hereinafter referred to as 'Platform').
              </p>
            </div>

            {/* Platform Ownership */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Platform Ownership</h2>
              <p className="text-gray-700">
                The Platform is owned by Property Experts, a company incorporated under the Companies
                Act, 1956 with its registered office at [Your Office Address] (hereinafter referred to as 
                'Platform Owner', 'we', 'us', 'our').
              </p>
            </div>

            {/* Terms of Use */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Terms of Use</h2>
              <p className="text-gray-700 mb-4">
                Your use of the Platform and services and tools are governed by the following terms and
                conditions ("Terms of Use") as applicable to the Platform including the applicable policies which
                are incorporated herein by way of reference. If You transact on the Platform, You shall be subject
                to the policies that are applicable to the Platform for such transaction.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>By mere use of the Platform, You shall be contracting with the Platform Owner</li>
                <li>These terms and conditions including the policies constitute Your binding obligations</li>
                <li>Any terms proposed by You which conflict with these Terms are expressly rejected</li>
                <li>These Terms can be modified at any time without assigning any reason</li>
              </ul>
            </div>

            {/* User Agreement */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Agreement</h2>
              <p className="text-gray-700 mb-4 font-semibold">
                ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR
                AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE,
                SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING.
              </p>
              <p className="text-gray-700">For the purpose of these Terms of Use, wherever the context so requires 'you', 'your' or 'user' shall mean any natural or legal person who has agreed to become a user on the Platform.</p>
            </div>

            {/* User Obligations */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Obligations</h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-700">
                <li>
                  <strong>Account Information:</strong> You agree to provide true, accurate and complete information
                  during registration, and you shall be responsible for all acts done through the use of your registered account.
                </li>
                <li>
                  <strong>No Warranty:</strong> We do not provide any warranty or guarantee as to the accuracy,
                  timeliness, performance, completeness or suitability of the information and materials offered
                  on this Platform.
                </li>
                <li>
                  <strong>Risk:</strong> Your use of our Services and the Platform is solely and entirely at your own risk and
                  discretion for which we shall not be liable to you in any manner.
                </li>
                <li>
                  <strong>Intellectual Property:</strong> The contents of the Platform and the Services are proprietary to us.
                  You will not have any authority to claim any intellectual property rights, title, or interest.
                </li>
                <li>
                  <strong>Payment:</strong> You agree to pay us the charges associated with availing the Services.
                </li>
                <li>
                  <strong>Lawful Use:</strong> You agree not to use the Platform for any purpose that is unlawful, illegal or
                  forbidden by these Terms, or Indian or local laws.
                </li>
              </ul>
            </div>

            {/* Third Party Links */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third Party Links</h2>
              <p className="text-gray-700">
                The Platform may contain links to other third party websites. On accessing these links, you will 
                be governed by the terms of use, privacy policy and such other policies of such third party websites. 
                These links are provided for your convenience for providing further information.
              </p>
            </div>

            {/* Legal Contract */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Legal Contract</h2>
              <p className="text-gray-700">
                You understand that upon initiating a transaction for availing the Services you are entering
                into a legally binding and enforceable contract with the Platform Owner for the Services.
              </p>
            </div>

            {/* Indemnification */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
              <p className="text-gray-700">
                You shall indemnify and hold harmless Platform Owner, its affiliates, group companies and 
                their respective officers, directors, agents, and employees, from any claim or demand, or actions 
                including reasonable attorney's fees, made by any third party or penalty imposed due to or arising 
                out of Your breach of this Terms of Use, privacy Policy and other Policies.
              </p>
            </div>

            {/* Force Majeure */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Force Majeure</h2>
              <p className="text-gray-700">
                Notwithstanding anything contained in these Terms of Use, the parties shall not be liable for
                any failure to perform an obligation under these Terms if performance is prevented or
                delayed by a force majeure event.
              </p>
            </div>

            {/* Governing Law */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law & Jurisdiction</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>These Terms and any dispute or claim relating to it shall be governed by and construed in accordance with the laws of India</li>
                <li>All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in [Your City]</li>
                <li>All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website</li>
              </ul>
            </div>

            {/* Quick Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Key Points Summary</h3>
              <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
                <li>By using our platform, you agree to these terms and conditions</li>
                <li>You are responsible for maintaining accurate account information</li>
                <li>All platform content is proprietary and protected by intellectual property laws</li>
                <li>Property transactions create legally binding contracts</li>
                <li>Disputes will be governed by Indian laws and courts in [Your City]</li>
                <li>We may update these terms periodically without prior notice</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Privacy Policy Content */}
      {activeTab === "privacy" && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
            {/* Introduction */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                This Privacy Policy describes how Property Experts and its affiliates (collectively "Property Experts, we, our, us") 
                collect, use, share, protect or otherwise process your information/ personal data through our website 
                https://propertyexperts.com (hereinafter referred to as Platform).
              </p>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> We do not offer any product/service under this Platform outside India and your personal 
                  data will primarily be stored and processed in India. By using our Platform, you agree to be bound by 
                  this Privacy Policy and governed by Indian laws.
                </p>
              </div>
            </div>

            {/* Information Collection */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>Personal Data:</strong> Name, date of birth, address, telephone/mobile number, email ID</li>
                <li><strong>Property Information:</strong> Property details, ownership documents, transaction history</li>
                <li><strong>Financial Information:</strong> Bank account, payment instrument details (with consent)</li>
                <li><strong>Technical Data:</strong> IP address, device information, browsing behavior, preferences</li>
                <li><strong>Transaction Data:</strong> Property search history, interactions, service requests</li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  You always have the option to not provide information by choosing not to use a particular service or feature on the Platform.
                </p>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Provide and manage property services you request</li>
                <li>Facilitate property transactions and documentation</li>
                <li>Personalize your experience and property recommendations</li>
                <li>Process payments and prevent fraudulent activities</li>
                <li>Communicate service updates and property alerts</li>
                <li>Comply with legal obligations and property regulations</li>
                <li>Conduct market research and improve our services</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>Property Partners:</strong> Brokers, developers, legal authorities for transaction completion</li>
                <li><strong>Financial Institutions:</strong> Banks, NBFCs for loan processing (with consent)</li>
                <li><strong>Service Providers:</strong> Payment gateways, document verification services</li>
                <li><strong>Legal Authorities:</strong> As required by property laws and regulations</li>
                <li><strong>Group Companies:</strong> Affiliates for providing integrated services</li>
              </ul>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Security Alert:</strong> We will never ask for your debit/credit card PIN, net-banking or mobile banking password. 
                  If you receive such requests, report it immediately to appropriate law enforcement agencies.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700">
                We adopt reasonable security practices and procedures to protect your personal data from 
                unauthorized access or disclosure, loss or misuse. This includes secure servers, encryption, 
                and access controls.
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  However, no internet transmission is completely secure. Users are responsible for protecting 
                  their login credentials and account information.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>Access:</strong> View and access your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Consent Withdrawal:</strong> Opt-out of marketing communications</li>
                <li><strong>Data Portability:</strong> Receive your data in usable format</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Grievance Officer</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Designation:</strong> Grievance Officer</p>
                  <p><strong>Company:</strong> Property Experts</p>
                  <p><strong>Address:</strong> [Your Office Address]</p>
                  <p><strong>Email:</strong> grievance@propertyexperts.com</p>
                  <p><strong>Phone:</strong> +91 9876543210</p>
                  <p><strong>Working Hours:</strong> Monday - Friday (9:00 - 18:00)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Refund Policy Content */}
      {activeTab === "refund" && (
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Refund & Cancellation Policy</h2>
            
            <div className="space-y-8">
              {/* General Policy */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Refund Policy</h3>
                <p className="text-gray-700 mb-4">
                  This refund and cancellation policy outlines how you can cancel or seek a refund for services 
                  purchased through the Property Experts Platform.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Cancellations will only be considered if the request is made within 2 days of placing the order</li>
                  <li>Refund requests may not be entertained if services have already been initiated</li>
                  <li>In case of service deficiencies, please report to our customer service team within 2 days</li>
                  <li>Approved refunds will be processed within 15 business days</li>
                </ul>
              </div>

              {/* Service Specific Policies */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service-Specific Policies</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Property Consultation Services</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Full refund if cancelled 24+ hours before scheduled consultation</li>
                      <li>50% refund if cancelled less than 24 hours before appointment</li>
                      <li>No refund after consultation completion</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Property Listing Services</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Full refund before property is listed on any portal</li>
                      <li>50% refund after listing but within 7 days</li>
                      <li>No refund after 7 days of active listing</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Legal & Documentation Services</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>No refund once document preparation has commenced</li>
                      <li>Government/statutory fees are non-refundable</li>
                      <li>Partial refund based on work completed</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Refund Process */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h3>
                <div className="space-y-4 text-gray-700">
                  <p>To request a refund or cancellation:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact our customer service team with your service details</li>
                    <li>Provide invoice number and reason for refund request</li>
                    <li>Submit any supporting documentation</li>
                    <li>Clear any outstanding payments if applicable</li>
                  </ul>
                  <p>Refund requests are processed within 7-10 business days. Approved refunds will be credited to your original payment method.</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Refund & Cancellation Support</h3>
                <p className="text-blue-100 mb-4">
                  Need assistance with refunds or cancellations? Contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:support@propertyexperts.com"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Support
                  </a>
                  <a 
                    href="tel:+919876543210"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Support
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

export default Terms;