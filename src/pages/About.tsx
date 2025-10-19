import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Team members with images
  const teamMembers = [
    {
      name: "Priyanka",
      role: "Founder",
      description: "Visionary leader with expertise in digital marketing and business strategies. Founded Earning Sharthi to provide affordable digital solutions for startups and businesses.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-purple-600 to-purple-800"
    },
    {
      name: "Daya Shankar Prajapati",
      role: "Director",
      description: "Strategic business leader with extensive experience in digital entrepreneurship and client management. Oversees operations and business development.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Vivek Singh",
      role: "Director",
      description: "Digital marketing expert and technology strategist. Manages website development, SEO, and digital advertising campaigns for clients.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "from-green-500 to-green-600"
    }
  ];

  // Company stats
  const stats = [
    { number: "150+", label: "Happy Clients", icon: "😊", delay: "0s" },
    { number: "300+", label: "Projects Delivered", icon: "🚀", delay: "0.1s" },
    { number: "24/7", label: "Support Available", icon: "📞", delay: "0.2s" },
    { number: "₹50L+", label: "Client Revenue Generated", icon: "💰", delay: "0.3s" },
  ];

  // Core values
  const values = [
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "We provide premium digital marketing services at startup-friendly prices that won't break your budget.",
      delay: "0s"
    },
    {
      icon: "🎯",
      title: "Result-Oriented",
      description: "Focused on delivering measurable ROI through SEO, performance marketing & data-driven strategies.",
      delay: "0.1s"
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description: "We act as your extended digital team, building long-term relationships focused on your growth.",
      delay: "0.2s"
    },
    {
      icon: "⚡",
      title: "Quick Delivery",
      description: "Fast turnaround times without compromising on quality. Get your website live in days, not months.",
      delay: "0.3s"
    },
  ];

  // Services we offer
  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Professional websites starting from just ₹4,999 with free domain & hosting for 1 year",
      features: ["WordPress/Shopify", "Custom Development", "E-commerce Solutions", "Responsive Design"]
    },
    {
      icon: "🔍",
      title: "SEO Services",
      description: "Get Page 1 Google rankings with our comprehensive SEO strategies",
      features: ["On-Page SEO", "Technical SEO", "Local SEO", "Monthly Reporting"]
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Complete social media management and advertising campaigns",
      features: ["Content Creation", "Platform Management", "Paid Advertising", "Analytics"]
    },
    {
      icon: "🎯",
      title: "Google & Meta Ads",
      description: "Targeted advertising campaigns that drive real results",
      features: ["PPC Management", "Ad Creation", "A/B Testing", "ROI Tracking"]
    }
  ];

  // Work process
  const process = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We understand your business goals and create a customized digital strategy.",
      icon: "💬",
      delay: "0s"
    },
    {
      step: "02",
      title: "Project Development",
      description: "Our expert team builds your website and implements marketing strategies.",
      icon: "⚡",
      delay: "0.2s"
    },
    {
      step: "03",
      title: "Quality Testing",
      description: "Rigorous testing to ensure everything works perfectly before launch.",
      icon: "✅",
      delay: "0.4s"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We launch your project and provide ongoing support for growth.",
      icon: "🚀",
      delay: "0.6s"
    }
  ];

  // Achievements
  const achievements = [
    { number: "50+", label: "Websites Developed", icon: "💻", delay: "0s" },
    { number: "100+", label: "SEO Clients", icon: "🔍", delay: "0.1s" },
    { number: "200+", label: "Social Media Campaigns", icon: "📱", delay: "0.2s" },
    { number: "₹2Cr+", label: "Client Revenue Generated", icon: "💰", delay: "0.3s" }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Earning Sharthi developed my business website at just ₹4,999! Professional work and great support. Highly recommended for startups.",
      author: "Rajesh Kumar",
      company: "Small Business Owner",
      rating: 5,
      delay: "0s"
    },
    {
      text: "Their SEO services got us on Page 1 of Google within 3 months. Our online visibility and leads have increased significantly.",
      author: "Priya Sharma", 
      company: "Local Service Business",
      rating: 5,
      delay: "0.1s"
    },
    {
      text: "Affordable social media marketing that actually works. They manage all our platforms and the engagement has been amazing.",
      author: "Amit Patel",
      company: "E-commerce Store",
      rating: 5,
      delay: "0.2s"
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      icon: "💰",
      title: "Startup Friendly Prices",
      description: "Get premium digital marketing services starting from just ₹4,999. No hidden costs.",
      delay: "0s"
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      description: "Website development in 3-7 days. Fast delivery without compromising quality.",
      delay: "0.1s"
    },
    {
      icon: "🎯",
      title: "Expert Team",
      description: "Work with certified digital marketing professionals with proven track records.",
      delay: "0.2s"
    },
    {
      icon: "📊",
      title: "Transparent Reporting",
      description: "Regular performance reports and analytics to track your ROI.",
      delay: "0.3s"
    },
    {
      icon: "🔄",
      title: "Flexible Packages",
      description: "Customizable service packages that grow with your business needs.",
      delay: "0.4s"
    },
    {
      icon: "🏆",
      title: "Proven Results",
      description: "150+ satisfied clients and 300+ successful projects delivered.",
      delay: "0.5s"
    }
  ];

  // WhatsApp redirect for consultation
  const handleWhatsAppRedirect = () => {
    const message = "Hello Earning Sharthi! I'm interested in your digital marketing services. Please provide more details.";
    window.open(`https://wa.me/916398799013?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Earning Sharthi | Affordable Digital Marketing Agency</title>
        <meta
          name="description"
          content="Earning Sharthi - Your affordable digital marketing partner. Website development from ₹4,999, SEO, social media marketing & Google Ads. 150+ clients. 300+ projects."
        />
        <meta
          name="keywords"
          content="digital marketing agency, affordable website development, SEO services, social media marketing, Google Ads, Meta Ads, startup business solutions"
        />
        <link rel="canonical" href="https://earningsharthi.in/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Earning Sharthi",
            "url": "https://earningsharthi.in",
            "logo": "https://earningsharthi.in/logo.png",
            "description": "Affordable digital marketing agency providing website development, SEO, and social media marketing services.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Khatima",
              "addressRegion": "Uttarakhand",
              "addressCountry": "IN"
            },
            "areaServed": "India",
            "founder": {
              "@type": "Person",
              "name": "Priyanka"
            },
            "employee": teamMembers.map(member => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": member.role
            })),
            "sameAs": [
              "https://www.facebook.com/earningsharthidigital",
              "https://www.instagram.com/earningsharthi",
              "https://x.com/earningsharthi"
            ]
          })}
        </script>
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-400 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-400 rounded-full blur-xl animate-ping"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-yellow-500 text-purple-900 px-6 py-3 rounded-full text-lg font-bold mb-8 animate-bounce">
            🚀 Affordable Digital Marketing Solutions
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            About <span className="text-yellow-400">Earning Sharthi</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-purple-100 leading-relaxed animate-fade-in-up delay-300">
            We are a <strong className="text-yellow-400">full-service digital marketing agency</strong> providing 
            <strong> affordable solutions</strong> for startups and businesses. 
            <strong> Website development from ₹4,999</strong>, SEO, social media marketing, 
            and <strong>Google/Meta Ads</strong> that deliver real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <Link
              to="/services"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-yellow-500/25"
            >
              <span>Our Services</span>
            </Link>
            <button
              onClick={handleWhatsAppRedirect}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-green-500/25"
            >
              <span className="text-xl">💚</span>
              <span>Get Free Consultation</span>
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-110"
                style={{animationDelay: stat.delay}}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-yellow-400">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR STORY SECTION === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in <strong className="text-purple-600">Devbhumi Uttarakhand, Khatima</strong>, 
                  <strong> Earning Sharthi</strong> emerged with a clear mission: to make 
                  <em className="text-purple-600"> professional digital marketing accessible and affordable</em> for 
                  every business, especially startups and small enterprises.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our journey began when we realized that most digital agencies charge exorbitant fees 
                  that are out of reach for new businesses. We decided to change this by offering 
                  <strong> premium-quality services at startup-friendly prices</strong>.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we're proud to have served <strong className="text-purple-600">150+ businesses</strong> across 
                  India, delivering <strong className="text-purple-600">300+ successful projects</strong> including 
                  websites starting from just <strong>₹4,999</strong>, SEO campaigns, and social media 
                  marketing that have generated <strong>over ₹2 Crore in revenue</strong> for our clients.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  View Our Portfolio
                </Link>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Discuss Your Project
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up delay-300">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === MISSION & VISION === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses with affordable digital solutions that drive growth and success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide <strong className="text-purple-600">high-quality, affordable digital marketing services</strong> 
                that help businesses establish and grow their online presence. We believe every business, 
                regardless of size, deserves access to professional 
                <strong> website development, SEO, and marketing services</strong>.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-200">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the <strong className="text-purple-600">most trusted affordable digital marketing partner</strong> 
                for startups and small businesses across India. We aim to help 
                <strong> 10,000+ businesses</strong> succeed online through our cost-effective 
                digital solutions and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICES OVERVIEW === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions designed for your business growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-xs">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up">
            <Link
              to="/services"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
            >
              <span>View All Services & Pricing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === CORE VALUES === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our work and client relationships</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center group animate-fade-in-up"
                style={{animationDelay: value.delay}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Earning Sharthi?</h2>
            <p className="text-xl text-gray-600">Discover what makes us the preferred choice for businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((point, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{animationDelay: point.delay}}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{point.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR TEAM === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">The passionate professionals behind Earning Sharthi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR PROCESS === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work Process</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to get your project launched</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center group animate-fade-in-up"
                style={{animationDelay: step.delay}}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                <div className="text-2xl font-bold text-purple-600 mb-2">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ACHIEVEMENTS === */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-purple-100">Milestones that showcase our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-110 animate-fade-in-up"
                style={{animationDelay: achievement.delay}}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">{achievement.number}</div>
                <div className="text-purple-100 text-sm md:text-base">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real success stories from businesses we've helped grow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: testimonial.delay}}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-purple-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join <strong className="text-yellow-400">150+ successful businesses</strong> that trust Earning Sharthi for their 
            digital marketing needs. Get started with website development from <strong>₹4,999</strong>!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
            >
              <span>Start Your Project</span>
            </Link>
            <button
              onClick={handleWhatsAppRedirect}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
            >
              <span className="text-xl">💚</span>
              <span>WhatsApp Consultation</span>
            </button>
          </div>
          
          <p className="text-purple-200 mt-6 text-sm">
            ✅ Free Domain & Hosting ✅ 24/7 Support ✅ Money-Back Guarantee ✅ Quick Delivery
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppRedirect}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
      >
        <span className="text-2xl">💚</span>
      </button>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default About;