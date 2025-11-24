import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Home,
  Building,
  Shield,
  Award,
  Star,
  Heart,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, transparent 24%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1) 76%, transparent 77%, transparent),
                          linear-gradient(60deg, transparent 24%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1) 76%, transparent 77%, transparent)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        
        {/* Top Section - Contact Strip */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 lg:p-8 mb-8 lg:mb-12 shadow-2xl border border-emerald-400/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
            {/* Phone Call */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div>
                  <p className="text-emerald-100 text-sm lg:text-base">Call Us Anytime</p>
                  <a 
                    href="tel:+919717157006" 
                    className="text-white font-bold text-lg lg:text-2xl hover:text-emerald-200 transition-colors block"
                  >
                    +91 97171 57006
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MessageCircle className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div>
                  <p className="text-emerald-100 text-sm lg:text-base">Chat on WhatsApp</p>
                  <a 
                    href="https://wa.me/919717157006" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-bold text-lg lg:text-2xl hover:text-emerald-200 transition-colors block"
                  >
                    +91 97171 57006
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Mail className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div>
                  <p className="text-emerald-100 text-sm lg:text-base">Email Us</p>
                  <a 
                    href="mailto:info@kprealtors.com" 
                    className="text-white font-bold text-lg lg:text-xl hover:text-emerald-200 transition-colors block"
                  >
                    info@kprealtors.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-2xl p-6 lg:p-8 border border-slate-700/50 h-full">
              {/* Logo & Brand */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl">
                  <Building className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">KPrealtors Group</h3>
                  <p className="text-emerald-300 text-sm lg:text-base">Your Trusted Property Partners</p>
                </div>
              </div>

              <p className="text-gray-300 text-base lg:text-lg mb-6 leading-relaxed">
                We specialize in helping you find, buy, and sell properties with complete transparency 
                and professional guidance. With 5000+ verified properties and 1000+ happy clients, 
                we are your trusted partners in real estate.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, text: "5000+ Properties", color: "text-emerald-400" },
                  { icon: Shield, text: "Verified Listings", color: "text-blue-400" },
                  { icon: Award, text: "Best Prices", color: "text-amber-400" },
                  { icon: Clock, text: "Quick Processing", color: "text-purple-400" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-slate-700/30 p-3 rounded-lg">
                    <item.icon className={`h-4 w-4 lg:h-5 lg:w-5 ${item.color}`} />
                    <span className="text-white text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-slate-800/50 rounded-2xl p-6 lg:p-8 border border-slate-700/50 h-full">
              <h4 className="text-lg lg:text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Quick Links
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Browse Properties", path: "/properties" },
                  { name: "Sell Your Property", path: "/sell" },
                  { name: "Buy Property", path: "/buy" },
                  { name: "Our Packages", path: "/packages" },
                  { name: "About Company", path: "/about" },
                  { name: "Contact Support", path: "/contact" }
                ].map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    className="block text-gray-300 hover:text-emerald-300 transition-all duration-300 py-2 border-b border-slate-700/50 last:border-b-0 hover:translate-x-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Property Types & Social */}
          <div>
            <div className="bg-slate-800/50 rounded-2xl p-6 lg:p-8 border border-slate-700/50 h-full">
              <h4 className="text-lg lg:text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Property Types
              </h4>
              
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  "🏠 Apartment",
                  "🏡 Independent House",
                  "🏘️ Villa", 
                  "🏢 Floor",
                  "🏠 Independent Floor",
                  "🏪 Commercial Shop",
                  "🌳 Agriculture Land",
                  "🏞️ Farm House Land",
                  "📊 R Zone Land"
                ].map((type, index) => (
                  <div key={index} className="text-gray-300 text-sm hover:text-emerald-300 transition-colors py-1">
                    {type}
                  </div>
                ))}
              </div>

              {/* Office Info */}
              <div className="border-t border-slate-700/50 pt-4">
                <div className="flex items-start space-x-2 mb-4">
                  <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Office Address:</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      H. No. 239, Khera Khurampur,<br />
                      Farrukhnagar, Gurugram,<br />
                      Haryana - 122506
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t border-slate-700/50 pt-4">
                <p className="text-white font-medium text-sm mb-3">Follow Us:</p>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: MessageCircle,
                      href: "https://wa.me/919717157006",
                      color: "bg-emerald-500 hover:bg-emerald-600",
                      label: "WhatsApp"
                    },
                    {
                      icon: Instagram,
                      href: "https://instagram.com/kprealtors",
                      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
                      label: "Instagram"
                    },
                    {
                      icon: Facebook,
                      href: "https://facebook.com/kprealtorsgroup",
                      color: "bg-blue-600 hover:bg-blue-700",
                      label: "Facebook"
                    }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 transform`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 lg:p-8 border-2 border-yellow-400/30 shadow-2xl">
            <h2 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-emerald-100 text-base lg:text-xl mb-4 lg:mb-6">
              Let us help you find the perfect property that matches your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919717157006"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2 lg:gap-3"
              >
                <MessageCircle className="h-4 w-4 lg:h-6 lg:w-6" />
                Contact on WhatsApp
              </a>
              <Link
                to="/properties"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 inline-flex items-center gap-2 lg:gap-3"
              >
                <Home className="h-4 w-4 lg:h-6 lg:w-6" />
                Browse Properties
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8 lg:pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm lg:text-base">
                © {year} <span className="text-emerald-400 font-semibold">KPrealtors Group</span>. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Refund Policy", path: "/refund" },
                { name: "Disclaimer", path: "/disclaimer" }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="text-gray-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>in India</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-slate-700">
            {[
              "🔒 Secure Transactions",
              "⭐ 4.8/5 Rating", 
              "✅ Verified Properties",
              "🏆 Trusted Realtors",
              "💼 1000+ Clients",
              "📞 24/7 Support",
              "🏠 5000+ Properties",
              "💰 Best Prices"
            ].map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 bg-slate-700/30 px-3 lg:px-4 py-2 rounded-full">
                <span className="text-emerald-300 text-xs font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="lg:hidden fixed bottom-20 right-4 z-50 flex flex-col gap-3">
        <a
          href="tel:+919717157006"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/919717157006"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;