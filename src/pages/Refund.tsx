import React from 'react';
import { Link } from 'react-router-dom';

const Refund: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Refund Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clear and transparent refund guidelines for our real estate services
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Reading time: 5 minutes
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="mb-12">
          <ol className="flex items-center space-x-3 text-sm">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium transition duration-200">
                Home
              </Link>
            </li>
            <li className="text-gray-400">→</li>
            <li className="text-gray-900 font-semibold">Refund Policy</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="font-bold text-gray-900 text-lg mb-4">On this page</h3>
              <nav className="space-y-2">
                <a href="#introduction" className="block text-blue-600 hover:text-blue-800 font-medium py-2 border-l-4 border-blue-600 pl-4">Introduction</a>
                <a href="#service-nature" className="block text-gray-600 hover:text-blue-600 font-medium py-2 border-l-4 border-transparent pl-4">Service Nature</a>
                <a href="#eligibility" className="block text-gray-600 hover:text-blue-600 font-medium py-2 border-l-4 border-transparent pl-4">Eligibility</a>
                <a href="#process" className="block text-gray-600 hover:text-blue-600 font-medium py-2 border-l-4 border-transparent pl-4">Refund Process</a>
                <a href="#timeline" className="block text-gray-600 hover:text-blue-600 font-medium py-2 border-l-4 border-transparent pl-4">Timeline</a>
                <a href="#contact" className="block text-gray-600 hover:text-blue-600 font-medium py-2 border-l-4 border-transparent pl-4">Contact</a>
                <a href="#legal" className="block text-gray-600 hover:text-blue-600 font-medium py-2 border-l-4 border-transparent pl-4">Legal Note</a>
              </nav>
            </div>

            {/* Quick Help Card */}
            <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Need Immediate Help?</h3>
              <p className="text-blue-100 text-sm mb-4">Our support team is here to assist you with refund-related queries.</p>
              <Link to="/contact" className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-200">
                Contact Support
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Content Sections */}
              <div className="p-8 lg:p-12">
                {/* Introduction */}
                <section id="introduction" className="mb-12 scroll-mt-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        At <span className="font-semibold text-blue-600">KP Realtors Group</span>, we are committed to providing exceptional real estate services with complete transparency. This comprehensive refund policy outlines the specific circumstances under which refunds may be granted and demonstrates our dedication to fair business practices.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Service-Based Nature */}
                <section id="service-nature" className="mb-12 scroll-mt-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                    Understanding Service-Based Transactions
                  </h2>
                  
                  <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
                    <p className="text-blue-800 font-semibold mb-4">
                      💡 Real estate services differ from product purchases. Our professional fees compensate for:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Expert market analysis & property valuation",
                        "Strategic marketing & advertising campaigns",
                        "Professional photography & virtual tours",
                        "Comprehensive buyer/seller representation",
                        "Contract negotiation & transaction management",
                        "Legal documentation & compliance oversight",
                        "Network access & professional connections",
                        "Time, expertise, and resources invested"
                      ].map((service, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-blue-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Refund Eligibility */}
                <section id="eligibility" className="mb-12 scroll-mt-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                    Refund Eligibility Criteria
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Eligible Cases */}
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-green-800">Eligible for Refund</h3>
                      </div>
                      <ul className="space-y-3">
                        {[
                          { text: "Duplicate payments or billing errors", icon: "💰" },
                          { text: "Services not initiated as per agreement", icon: "⏱️" },
                          { text: "Contract cancellation during cooling-off period", icon: "📝" },
                          { text: "Mutual written agreement between parties", icon: "🤝" },
                          { text: "Service delivery failure on our part", icon: "❌" },
                          { text: "Overpayments beyond agreed amounts", icon: "💳" }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="text-green-600 font-semibold">{item.icon}</span>
                            <span className="text-green-700">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Non-Eligible Cases */}
                    <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-red-800">Non-Refundable</h3>
                      </div>
                      <ul className="space-y-3">
                        {[
                          { text: "Commissions for successfully closed deals", icon: "🏠" },
                          { text: "Marketing expenses already incurred", icon: "📢" },
                          { text: "Third-party vendor costs paid on your behalf", icon: "👥" },
                          { text: "Retainer fees for commenced work", icon: "⏰" },
                          { text: "Market condition changes affecting property value", icon: "📈" },
                          { text: "Client-side transaction cancellation", icon: "🙅" }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="text-red-600 font-semibold">{item.icon}</span>
                            <span className="text-red-700">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Refund Process */}
                <section id="process" className="mb-12 scroll-mt-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                    Step-by-Step Refund Process
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        step: "01",
                        title: "Submit Request",
                        description: "Complete our refund request form with all required details",
                        icon: "📄",
                        color: "from-blue-500 to-blue-600"
                      },
                      {
                        step: "02",
                        title: "Document Review",
                        description: "We verify your contract and service details thoroughly",
                        icon: "🔍",
                        color: "from-green-500 to-green-600"
                      },
                      {
                        step: "03",
                        title: "Case Evaluation",
                        description: "Our team assesses eligibility based on policy guidelines",
                        icon: "⚖️",
                        color: "from-purple-500 to-purple-600"
                      },
                      {
                        step: "04",
                        title: "Final Decision",
                        description: "You receive our decision with detailed explanation",
                        icon: "✅",
                        color: "from-orange-500 to-orange-600"
                      }
                    ].map((step, index) => (
                      <div key={index} className="text-center group">
                        <div className={`bg-gradient-to-r ${step.color} rounded-2xl p-1 mb-4 transform group-hover:scale-105 transition duration-300`}>
                          <div className="bg-white rounded-xl p-6">
                            <div className="text-3xl mb-3">{step.icon}</div>
                            <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                              {step.step}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Timeline */}
                <section id="timeline" className="mb-12 scroll-mt-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                    Processing Timeline
                  </h2>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-blue-600 mb-2">24-48 Hours</div>
                        <div className="text-gray-700 font-semibold">Initial Response</div>
                        <div className="text-gray-500 text-sm mt-2">Acknowledgement of your request</div>
                      </div>
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-green-600 mb-2">7-10 Days</div>
                        <div className="text-gray-700 font-semibold">Case Review</div>
                        <div className="text-gray-500 text-sm mt-2">Thorough assessment & decision</div>
                      </div>
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-purple-600 mb-2">14 Days</div>
                        <div className="text-gray-700 font-semibold">Refund Processing</div>
                        <div className="text-gray-500 text-sm mt-2">For approved refund requests</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Information */}
                <section id="contact" className="mb-12 scroll-mt-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                    Contact for Refund Requests
                  </h2>

                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Ready to Submit a Refund Request?</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-100">Required Information:</h4>
                        <ul className="space-y-2 text-blue-100">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <span>Full legal name and contact details</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <span>Service agreement/contract number</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <span>Detailed reason for refund request</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <span>Supporting documents & evidence</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-100">Contact Channels:</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="text-blue-100">refunds@kprealtorsgroup.com</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <span className="text-blue-100">+1 (555) 123-REFUND</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1" />
                              </svg>
                            </div>
                            <span className="text-blue-100">Live Chat Support</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-200 flex-1 text-center"
                      >
                        Start Refund Process
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      <Link
                        to="/terms"
                        className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-200 flex-1 text-center"
                      >
                        View Full Terms
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Legal Note */}
                <section id="legal" className="scroll-mt-8">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-yellow-800 mb-2">Important Legal Disclaimer</h3>
                        <p className="text-yellow-700 leading-relaxed">
                          This refund policy serves as a general guideline and is subject to the specific terms and conditions outlined in your individual service agreement with KP Realtors Group. In the event of any discrepancy or conflict between this policy and your signed contract, the terms of the signed contract shall prevail. We strongly recommend reviewing your specific service agreement for detailed provisions regarding payments, cancellations, and refund eligibility criteria.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
