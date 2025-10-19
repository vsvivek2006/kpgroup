import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle, Star, MessageCircle, Phone, Zap, Shield, Users, TrendingUp } from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Unique Hero Slides with modern design
  const heroSlides = [
    {
      title: "Launch Your Business Online",
      highlight: "Website from ₹4,999",
      tagline: "Professional Website + FREE Domain & Hosting for 1 Year",
      features: ["Mobile Responsive", "SEO Optimized", "Fast Loading", "1 Year Support"],
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      cta: "Get Your Website"
    },
    {
      title: "Grow with Digital Marketing",
      highlight: "SEO + Social Media ₹9,999/month",
      tagline: "Complete Digital Marketing Solutions for Business Growth",
      features: ["Google Ranking", "Social Media Management", "Lead Generation", "Monthly Reports"],
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      cta: "Start Growing"
    },
    {
      title: "E-commerce Solutions",
      highlight: "Online Store ₹14,999",
      tagline: "Complete E-commerce Store with Payment Gateway & Products",
      features: ["Product Management", "Payment Gateway", "Order Tracking", "Inventory Management"],
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      cta: "Start Selling"
    }
  ];

  // Startup Business Solutions - Modern Cards
  const startupSolutions = [
    {
      icon: "💼",
      title: "Business Website",
      price: "₹4,999",
      originalPrice: "₹9,999",
      description: "Professional Business Website with FREE Domain & Hosting",
      features: ["1 Year Free Hosting", "Free Domain", "Responsive Design", "SEO Ready"],
      popular: false,
      savings: "50% OFF",
      badge: "Most Affordable"
    },
    {
      icon: "🛒",
      title: "E-commerce Store",
      price: "₹14,999",
      originalPrice: "₹29,999",
      description: "Complete Online Store with Payment Integration",
      features: ["100+ Products", "Payment Gateway", "Order Management", "1 Year Support"],
      popular: true,
      savings: "50% OFF",
      badge: "BEST VALUE"
    },
    {
      icon: "🏠",
      title: "Real Estate Website",
      price: "₹39,999",
      originalPrice: "₹79,999",
      description: "Advanced Property Listing & Management System",
      features: ["Property Listings", "Lead Management", "Booking System", "Admin Panel"],
      popular: false,
      savings: "50% OFF",
      badge: "Premium"
    },
    {
      icon: "📰",
      title: "News Portal",
      price: "₹4,999",
      originalPrice: "₹9,999",
      description: "Dynamic News & Blog Publishing Platform",
      features: ["Unlimited Articles", "Category Management", "Author Panel", "SEO Optimized"],
      popular: false,
      savings: "50% OFF",
      badge: "Great Deal"
    },
    {
      icon: "🎓",
      title: "School/NGO Website",
      price: "₹14,999",
      originalPrice: "₹29,999",
      description: "Educational Institute or NGO Website Solution",
      features: ["Student Management", "Event Calendar", "Gallery", "Donation System"],
      popular: false,
      savings: "50% OFF",
      badge: "Special Offer"
    },
    {
      icon: "🔍",
      title: "Google Business Setup",
      price: "₹999",
      originalPrice: "₹2,499",
      description: "Professional Google Business Profile Optimization",
      features: ["Profile Creation", "Posts Setup", "Review Management", "Local SEO"],
      popular: false,
      savings: "60% OFF",
      badge: "Quick Service"
    }
  ];

  // Growth Packages - Modern Design
  const growthPackages = [
    {
      name: "STARTUP GROWTH",
      price: "₹24,999",
      duration: "one-time",
      originalPrice: "₹49,998",
      description: "Perfect for new businesses starting online",
      features: [
        "Business Website Development",
        "Google Business Setup",
        "Basic SEO Setup",
        "Social Media Profiles",
        "3 Months Technical Support",
        "Free Domain & Hosting (1 Year)"
      ],
      popular: false,
      savings: "₹24,999",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "BUSINESS GROWTH",
      price: "₹49,999",
      duration: "one-time",
      originalPrice: "₹99,998",
      description: "Complete digital presence for growing businesses",
      features: [
        "Professional Website",
        "Advanced SEO (3 Months)",
        "Social Media Marketing (3 Months)",
        "Google Ads Setup",
        "6 Months Support",
        "Free Domain & Hosting (1 Year)",
        "Monthly Performance Reports"
      ],
      popular: true,
      savings: "₹49,999",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "ENTERPRISE GROWTH",
      price: "₹89,999",
      duration: "one-time",
      originalPrice: "₹1,79,998",
      description: "Premium solutions for established businesses",
      features: [
        "Custom Website Development",
        "Complete SEO (6 Months)",
        "Social Media Management (6 Months)",
        "Google & Meta Ads Management",
        "12 Months Priority Support",
        "Free Domain & Hosting (2 Years)",
        "Dedicated Account Manager"
      ],
      popular: false,
      savings: "₹89,999",
      color: "from-green-500 to-green-600"
    }
  ];

  // Why Choose Us - Modern Icons
  const whyChooseUs = [
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Lightning Fast Delivery",
      description: "Get your website live in 3-7 days without compromising quality"
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "1 Year Free Support",
      description: "We provide complete technical support for 1 year after delivery"
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Growth Focused",
      description: "Every solution is designed to help your business grow online"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Expert Team",
      description: "Work with certified professionals with 3+ years experience"
    }
  ];

  // Process Steps
  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Free business analysis and strategy session",
      icon: "💬"
    },
    {
      number: "02",
      title: "Planning",
      description: "Custom project plan with timeline and pricing",
      icon: "📋"
    },
    {
      number: "03",
      title: "Development",
      description: "Professional implementation with regular updates",
      icon: "⚡"
    },
    {
      number: "04",
      title: "Launch & Grow",
      description: "Go live and continue growing with our support",
      icon: "🚀"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Local Restaurant Owner",
      text: "Got my restaurant website at just ₹4,999! Professional work and great support. Online orders increased by 40%.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      business: "Fashion Boutique",
      text: "E-commerce store developed in 5 days. Sales started from day one. Excellent service!",
      rating: 5
    },
    {
      name: "Amit Patel",
      business: "Real Estate Agent",
      text: "Professional real estate website with property management. Getting quality leads daily.",
      rating: 5
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = (message = "Hello Earning Sharthi! I want to discuss digital marketing services.") => {
    window.open(`https://wa.me/916398799013?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>Earning Sharthi - Affordable Website Development & Digital Marketing Services</title>
        <meta name="description" content="Professional website development from ₹4,999 with FREE domain & hosting. E-commerce stores ₹14,999. Complete digital marketing solutions. 150+ happy clients." />
        <meta name="keywords" content="website development, e-commerce website, digital marketing, seo services, affordable website, business website" />
      </Helmet>

      {/* === MODERN HERO SECTION - MOBILE OPTIMIZED === */}
      <section className="relative min-h-screen sm:h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ background: slide.bg }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Left Content - Mobile Optimized */}
                  <div className="text-white text-center lg:text-left">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-yellow-400" />
                      <span className="text-xs sm:text-sm font-semibold">Trusted by 150+ Businesses</span>
                    </div>
                    
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                      {slide.title}
                      <span className="block text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 sm:mt-3">
                        {slide.highlight}
                      </span>
                    </h1>
                    
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 text-white/90 leading-relaxed">
                      {slide.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-white/80 justify-center lg:justify-start">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2 text-green-400 flex-shrink-0" />
                          <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
                      <button
                        onClick={() => handleWhatsApp(`I'm interested in ${slide.title} - ${slide.highlight}`)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
                      >
                        <span>🚀 {slide.cta}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleWhatsApp()}
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone className="h-4 w-4" />
                        <span className="whitespace-nowrap">Call +91-6398799013</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Content - Hidden on mobile, shown on desktop */}
                  <div className="hidden lg:block relative">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Get Free Consultation</h3>
                      <div className="space-y-3 lg:space-y-4">
                        <div className="bg-white/20 rounded-lg p-3 lg:p-4">
                          <div className="text-white/80 text-sm">Website Development</div>
                          <div className="text-yellow-400 font-bold text-base lg:text-lg">Starting at ₹4,999</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 lg:p-4">
                          <div className="text-white/80 text-sm">E-commerce Store</div>
                          <div className="text-yellow-400 font-bold text-base lg:text-lg">Only ₹14,999</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 lg:p-4">
                          <div className="text-white/80 text-sm">Digital Marketing</div>
                          <div className="text-yellow-400 font-bold text-base lg:text-lg">From ₹9,999/month</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleWhatsApp("I want free consultation about website and digital marketing services.")}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 mt-4 lg:mt-6 flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5" />
                        <span>💬 WhatsApp Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* === STARTUP SOLUTIONS - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              🚀 STARTUP BUSINESS SOLUTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Launch Your Business <span className="text-blue-600">Online</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Professional websites and digital solutions at startup-friendly prices. 
              Everything you need to establish your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {startupSolutions.map((solution, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-2 ${
                  solution.popular ? 'border-yellow-400 ring-1 sm:ring-2 ring-yellow-200' : 'border-gray-100'
                } overflow-hidden`}
              >
                {solution.popular && (
                  <div className="bg-yellow-500 text-gray-900 py-2 sm:py-3 px-3 sm:px-4 text-center font-bold text-xs sm:text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl">{solution.icon}</div>
                    {solution.badge && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                        {solution.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{solution.description}</p>
                  
                  <div className="flex items-baseline mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{solution.price}</span>
                    <span className="text-sm sm:text-lg text-gray-400 line-through ml-2">{solution.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold ml-auto">
                      {solution.savings}
                    </span>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleWhatsApp(`I'm interested in ${solution.title} for ${solution.price}`)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Get This Package</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-green-200">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                🤝 You are starting a business, we will help you.
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6">
                Call now for free consultation and custom solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href="tel:+916398799013"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Call +91-6398799013</span>
                </a>
                <button
                  onClick={() => handleWhatsApp("I want to discuss my business requirements and get a custom solution.")}
                  className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>WhatsApp Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === GROWTH PACKAGES - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              📈 COMPLETE GROWTH PACKAGES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              All-in-One <span className="text-purple-600">Growth Solutions</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to establish and grow your business online. 
              From website development to digital marketing - all in one package.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {growthPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br ${pkg.color} rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transform transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? 'ring-2 sm:ring-4 ring-yellow-400 ring-opacity-50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-gray-900 px-4 py-1 sm:px-6 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
                      ⭐ RECOMMENDED
                    </div>
                  </div>
                )}
                
                <div className="p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">{pkg.price}</span>
                    <span className="text-sm sm:text-lg opacity-80 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-2 py-1 sm:px-3 sm:py-1 inline-block mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm font-semibold">Save {pkg.savings}</span>
                  </div>
                  
                  <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">{pkg.description}</p>
                  
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleWhatsApp(`I'm interested in ${pkg.name} package for ${pkg.price}`)}
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Get This Package</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Why <span className="text-yellow-400">Earning Sharthi</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another agency. We're your growth partners committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROCESS - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              How We <span className="text-green-600">Work</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent process to get your project from idea to launch
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 sm:top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 -z-10"></div>
                )}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 lg:mb-4">{step.icon}</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">{step.number}</div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our <span className="text-purple-600">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what businesses like yours have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</p>
                  <p className="text-purple-600 text-sm sm:text-base">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Ready to Start Your <span className="text-yellow-400">Online Journey</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 text-white/90">
            Get your professional website from <strong className="text-yellow-400">₹4,999</strong> with 
            FREE domain & hosting. Limited time offer!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => handleWhatsApp("I'm ready to start my website project. Please help me get started.")}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Start My Project</span>
            </button>
            <a
              href="tel:+916398799013"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Call Now</span>
            </a>
          </div>
          
          <p className="text-white/80 mt-4 sm:mt-6 lg:mt-8 text-xs sm:text-sm lg:text-lg">
            ✅ Free Consultation ✅ 1 Year Support ✅ Money-Back Guarantee
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button - Mobile Optimized */}
      <button
        onClick={() => handleWhatsApp()}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
};

export default Home;