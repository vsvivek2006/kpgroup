import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  Rocket,
  Users,
  Zap,
  Award,
  Star,
  TrendingUp
} from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  // Online logo URLs
  const partnerLogos = [
    { 
      name: "MSME", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/MSME_Logo.svg/1200px-MSME_Logo.svg.png", 
      alt: "MSME India" 
    },
    { 
      name: "Startup India", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Startup_India_Logo.svg/1200px-Startup_India_Logo.svg.png", 
      alt: "Startup India" 
    },
    { 
      name: "Meta", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png", 
      alt: "Meta Business" 
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png", 
      alt: "Google Partner" 
    },
    { 
      name: "PhonePe", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png", 
      alt: "PhonePe Payments" 
    },
    { 
      name: "Razorpay", 
      logo: "https://razorpay.com/assets/razorpay-glyph.svg", 
      alt: "Razorpay" 
    },
    { 
      name: "CCAvenue", 
      logo: "https://www.ccavenue.com/images/ccavenue-logo.svg", 
      alt: "CCAvenue" 
    },
    { 
      name: "PayPal", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png", 
      alt: "PayPal" 
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
          
          {/* Brand Section - Full Width on Mobile, 2 cols on desktop */}
          <div className="md:col-span-2 lg:col-span-4 text-center mb-6 lg:mb-8">
            <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-6">
              
              {/* Responsive Logo */}
              <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 bg-gradient-to-r from-purple-600 to-pink-600 p-4 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl border-2 border-purple-400/30 w-full max-w-4xl">
                <div className="flex-shrink-0 mb-4 lg:mb-0">
                  <img 
                    src="/logo.png" 
                    alt="Earning Sharthi Logo" 
                    className="h-20 w-20 lg:h-32 lg:w-32 object-contain drop-shadow-2xl animate-pulse"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'h-20 w-20 lg:h-32 lg:w-32 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-bold';
                      fallback.textContent = 'ES';
                      target.parentNode?.insertBefore(fallback, target);
                    }}
                  />
                </div>
                
                {/* Brand Name with Enhanced Styling */}
                <div className="flex flex-col text-center lg:text-left">
                  <span 
                    className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl"
                    style={{ 
                      fontFamily: '"Haboro Serif", serif',
                      fontWeight: 800,
                      letterSpacing: '-0.025em',
                      textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    EARNING SHARTHI
                  </span>
                  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-4 mt-2 lg:mt-3">
                    <div className="flex items-center gap-1 bg-green-500/20 px-2 lg:px-3 py-1 rounded-full border border-green-400/30">
                      <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
                      <span className="text-green-300 text-xs lg:text-sm font-semibold">Premium Services</span>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-500/20 px-2 lg:px-3 py-1 rounded-full border border-blue-400/30">
                      <Rocket className="h-3 w-3 lg:h-4 lg:w-4 text-blue-400" />
                      <span className="text-blue-300 text-xs lg:text-sm font-semibold">Fast Delivery</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges - Hidden on mobile, visible on tablet+ */}
              <div className="hidden md:flex flex-wrap justify-center items-center gap-4 lg:gap-6 mt-4">
                {[
                  { icon: Users, text: "5000+ Clients", color: "text-green-400" },
                  { icon: Award, text: "50K+ Orders", color: "text-yellow-400" },
                  { icon: Zap, text: "24/7 Support", color: "text-blue-400" },
                  { icon: TrendingUp, text: "4.9/5 Rating", color: "text-purple-400" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/5 px-3 lg:px-4 py-2 rounded-xl border border-white/10">
                    <item.icon className={`h-4 w-4 lg:h-5 lg:w-5 ${item.color}`} />
                    <span className="text-white font-semibold text-xs lg:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 p-4 lg:p-6 rounded-2xl border border-purple-400/20 h-full">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-yellow-300 text-center">Get In Touch</h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-3 lg:space-x-4 p-2 lg:p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Phone className="h-4 w-4 lg:h-6 lg:w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs lg:text-sm">Call Us</p>
                    <a 
                      href="tel:+916398799013" 
                      className="text-white font-semibold text-base lg:text-lg hover:text-green-300 transition-colors"
                    >
                      +91 6398799013
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 lg:space-x-4 p-2 lg:p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Mail className="h-4 w-4 lg:h-6 lg:w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs lg:text-sm">Email Us</p>
                    <a 
                      href="mailto:info@earningsharthi.in" 
                      className="text-white font-semibold text-base lg:text-lg hover:text-blue-300 transition-colors"
                    >
                      info@earningsharthi.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 lg:space-x-4 p-2 lg:p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <MapPin className="h-4 w-4 lg:h-6 lg:w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs lg:text-sm">Location</p>
                    <span className="text-white font-semibold text-base lg:text-lg">Khatima, Uttarakhand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/30 p-4 lg:p-6 rounded-2xl border border-blue-400/20 h-full">
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-yellow-300 text-center">Quick Links</h3>
              <ul className="space-y-2 lg:space-y-3">
                {[
                  { name: "🏠 Home", path: "/" },
                  { name: "👥 About", path: "/about" },
                  { name: "🚀 Services", path: "/services" },
                  { name: "💼 Portfolio", path: "/portfolio" },
                  { name: "💰 Pricing", path: "/pricing" },
                  { name: "📞 Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="text-gray-300 hover:text-yellow-300 transition-all duration-300 text-sm lg:text-lg block py-1 lg:py-2 px-2 lg:px-3 rounded-lg hover:bg-white/5 hover:translate-x-1 lg:hover:translate-x-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services & Social */}
          <div>
            <div className="bg-gradient-to-br from-pink-900/50 to-red-900/30 p-4 lg:p-6 rounded-2xl border border-pink-400/20 h-full">
              <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-yellow-300 text-center">Our Services</h3>
              <ul className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                {[
                  { name: "🌐 Website Development", path: "/services" },
                  { name: "🔍 SEO Services", path: "/services" },
                  { name: "📱 Social Media", path: "/services" },
                  { name: "🎯 Google & Meta Ads", path: "/services" },
                  { name: "🛒 E-commerce", path: "/services" },
                  { name: "🎨 Branding", path: "/services" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="text-gray-300 hover:text-pink-300 transition-all duration-300 text-xs lg:text-sm block py-1 lg:py-2 px-2 lg:px-3 rounded-lg hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-yellow-300 text-center">Follow Us</h3>
              <div className="flex justify-center space-x-2 lg:space-x-4">
                {[
                  { 
                    icon: MessageCircle, 
                    href: "https://wa.me/916398799013", 
                    color: "bg-green-500 hover:bg-green-600",
                    label: "WhatsApp"
                  },
                  { 
                    icon: Instagram, 
                    href: "https://www.instagram.com/earningsharthi", 
                    color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
                    label: "Instagram"
                  },
                  { 
                    icon: Facebook, 
                    href: "https://www.facebook.com/earningsharthidigital", 
                    color: "bg-blue-600 hover:bg-blue-700",
                    label: "Facebook"
                  },
                  { 
                    icon: Linkedin, 
                    href: "https://x.com/earningsharthi", 
                    color: "bg-blue-500 hover:bg-blue-600",
                    label: "Twitter/X"
                  }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-2 lg:p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg transform`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-4 lg:p-8 border border-purple-400/20 mb-8 lg:mb-12">
          <h3 className="text-lg lg:text-2xl font-bold text-center text-yellow-300 mb-4 lg:mb-8">Our Trusted Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-6 items-center justify-items-center">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white/10 p-2 lg:p-4 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105 hover:bg-white/15 group w-full max-w-24 lg:max-w-32"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className="h-6 lg:h-10 w-auto object-contain mx-auto filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'h-6 lg:h-10 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold text-center px-1';
                    fallback.textContent = partner.name;
                    target.parentNode?.insertBefore(fallback, target);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 lg:p-8 border-2 border-yellow-400/30 shadow-2xl">
            <h2 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">Ready to Grow Your Business?</h2>
            <p className="text-purple-100 text-base lg:text-xl mb-4 lg:mb-6">Let's create something amazing together!</p>
            <a
              href="https://wa.me/916398799013"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2 lg:gap-3"
            >
              <MessageCircle className="h-4 w-4 lg:h-6 lg:w-6" />
              Start Your Project Today
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-purple-800 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
              {[
                { name: "📄 Agreement", path: "/onboarding-agreement" },
                { name: "📝 Terms", path: "/terms" },
                { name: "🔒 Privacy", path: "/privacy" },
                { name: "💸 Refund", path: "/refund-policy" }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="text-gray-400 hover:text-yellow-300 transition-all duration-300 text-xs lg:text-sm font-medium hover:scale-105"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-800 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center">
          <p className="text-gray-300 text-base lg:text-lg mb-3 lg:mb-4 font-semibold">
            © {year} <span className="text-yellow-300">EARNING SHARTHI</span>. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm lg:text-md mb-3 lg:mb-4">
            Made with 💖 in India | Vivek Singh 
          </p>
          
          {/* Service Highlights - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-3 lg:gap-6 mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-purple-800">
            {[
              "🚀 Premium Services",
              "⭐ 5000+ Clients", 
              "⚡ Instant Start",
              "💼 50K+ Orders",
              "🎯 Real Results",
              "🛡️ 100% Safe"
            ].map((text, index) => (
              <div key={index} className="text-gray-300 text-xs lg:text-sm font-medium bg-white/5 px-3 lg:px-4 py-1 lg:py-2 rounded-full border border-white/10">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
