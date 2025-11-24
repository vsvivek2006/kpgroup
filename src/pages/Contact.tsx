import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Linkedin, Facebook, Star, Zap, Shield, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const whatsappMessage = `Hello Property Experts! 

*🏠 New Property Inquiry*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Interested:* ${formData.service}
*Requirements:* ${formData.message}

I'm interested in your property services and would like to know more!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
  };

  const services = [
    'Buy Property',
    'Sell Property',
    'Property Consultation',
    'Home Loan Assistance',
    'Legal Documentation',
    'Property Valuation',
    'Investment Advisory',
    'Rental Services',
    'Commercial Property',
    'Other Service'
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-7 w-7" />,
      title: 'Call Us Now',
      content: '+91 9876543210',
      link: 'tel:+919876543210',
      description: 'Available 24/7 for property queries',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: 'Email Us',
      content: 'info@propertyexperts.com',
      link: 'mailto:info@propertyexperts.com',
      description: 'Response within 2 hours',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: 'Visit Office',
      content: 'Mumbai, India',
      link: '#',
      description: 'Property consultancy serving nationwide',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: 'Working Hours',
      content: '24/7 Support',
      link: '#',
      description: 'Always available for our clients',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Quick Response',
      description: 'Get instant replies on WhatsApp within minutes'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Trusted Service',
      description: 'Verified properties with legal documentation'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Team',
      description: 'Professional property consultants & legal experts'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Proven Track Record',
      description: '500+ happy property transactions'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Property Experts | Real Estate Services & Property Consultation</title>
        <meta
          name="description"
          content="Get in touch with Property Experts for buying, selling, and property consultation services. Find your dream home today!"
        />
        <meta
          name="keywords"
          content="contact property experts, real estate services, buy property, sell property, property consultation, home loan"
        />
      </Helmet>
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your <span className="text-yellow-400">Dream Home</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Ready to buy, sell, or invest in property? Our expert consultants are here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/919876543210?text=Hello%20Property%20Experts!%20I%20want%20to%20discuss%20property%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3 shadow-lg"
              >
                <MessageCircle className="h-6 w-6" />
                <span>💬 Instant WhatsApp Connect</span>
              </a>
              <a
                href="#contact-form"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center space-x-3"
              >
                <span>📝 Fill Property Form</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">Property Experts</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in real estate journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start Your <span className="text-blue-600">Property Journey</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Fill this form and we'll connect within 30 minutes with best options
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your required service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Property Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your property requirements, budget, preferred location, type of property, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>🚀 Send Requirements</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  📞 We'll call you within 30 minutes to discuss your property needs
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Get In <span className="text-blue-600">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're here to help you find your perfect property. Choose the most convenient way to reach out, and let's start your property journey together.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`block bg-gradient-to-br ${info.color} text-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 group`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                        <p className="text-white text-opacity-90 text-lg font-semibold mb-2">
                          {info.content}
                        </p>
                        <p className="text-white text-opacity-70 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media & Quick Actions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-gray-900 text-xl mb-6">Connect With Us</h3>
                
                {/* Social Links */}
                <div className="flex space-x-4 mb-8">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">WhatsApp</span>
                  </a>
                  <a
                    href="https://www.instagram.com/propertyexperts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="font-semibold">Instagram</span>
                  </a>
                </div>

                {/* Quick Response Promise */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center text-lg">
                    <Zap className="h-5 w-5 mr-2" />
                    Quick Response Guarantee
                  </h4>
                  <div className="space-y-2 text-green-700">
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      WhatsApp: Instant response (1-5 minutes)
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Email: Within 2 hours during business hours
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Phone: 24/7 for urgent property inquiries
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-4 text-lg">Why Clients Trust Us</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">500+ Properties</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Legal Verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Best Price Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our property services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you find properties for me?",
                answer: "We can typically show you suitable properties within 24 hours! For urgent requirements, same-day property visits available."
              },
              {
                question: "Do you provide legal documentation support?",
                answer: "Yes! We provide complete legal verification and documentation support for all property transactions."
              },
              {
                question: "What areas do you cover?",
                answer: "We serve major cities across India including Mumbai, Delhi, Bangalore, Hyderabad, Pune, and more."
              },
              {
                question: "Can I see property photos and videos?",
                answer: "Absolutely! We provide high-quality photos, 360° virtual tours, and video walkthroughs of all properties."
              },
              {
                question: "Do you help with home loans?",
                answer: "Yes! We have tie-ups with major banks and offer complete home loan assistance with best interest rates."
              },
              {
                question: "What are your service charges?",
                answer: "We offer transparent pricing with no hidden charges. Service fees start from 1% depending on property value."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Find Your <span className="text-yellow-400">Dream Home</span>?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Don't wait for the perfect property. Let's find it together starting today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hello%20Property%20Experts!%20I'm%20ready%20to%20find%20my%20dream%20property!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span>🚀 Start Property Search</span>
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-5 rounded-xl text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>📞 Call Now</span>
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-lg">
            ⚡ Free property consultation & site visits included
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Contact;