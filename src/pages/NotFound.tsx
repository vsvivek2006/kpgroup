import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Home, ArrowLeft, Phone, MessageCircle, TrendingUp, Users, Briefcase, Mail } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* ✅ SEO Component */}
      <Helmet>
        <title>404 - Page Not Found | Property Experts - Real Estate Services</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Explore Property Experts' real estate services or return to homepage for property solutions."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://propertyexperts.com/404" />

        {/* Open Graph */}
        <meta property="og:title" content="404 - Page Not Found | Property Experts" />
        <meta property="og:description" content="Page not found. Explore our real estate services or return to Property Experts homepage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://propertyexperts.com/404" />
        <meta property="og:image" content="https://propertyexperts.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found | Property Experts" />
        <meta name="twitter:description" content="The page you are looking for is missing. Explore Property Experts real estate services." />
        <meta name="twitter:image" content="https://propertyexperts.com/og-image.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "404 - Page Not Found",
            "url": "https://propertyexperts.com/404",
            "description": "Oops! The page you're looking for doesn't exist. Explore Property Experts real estate services.",
            "publisher": {
              "@type": "Organization",
              "name": "Property Experts",
              "url": "https://propertyexperts.com"
            }
          })}
        </script>
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.3) 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated 404 */}
          <div className="mb-8">
            <div className="text-9xl font-black tracking-tighter bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              404
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Property Page Not Found
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Don't worry! While this property page is unavailable, let us help you find your dream home.
          </p>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Actions - Enhanced */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-800 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Go Back</span>
            </button>
            
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Home className="h-5 w-5" />
              <span className="font-semibold">Homepage</span>
            </Link>
            
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              <span className="font-semibold">Get Help</span>
            </Link>
          </div>

          {/* Search Tip - Enhanced */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-4 shadow-sm">
              <div className="flex-shrink-0">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-blue-800 font-medium">Quick Navigation Tip</p>
                <p className="text-blue-600 text-sm">
                  Use our main menu to explore Properties, Services, Packages, or contact our property experts.
                </p>
              </div>
            </div>
          </div>

          {/* Popular Sections - Enhanced */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Popular Sections You Might Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/buy"
                className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Home className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Buy Property</h3>
                <p className="text-gray-600 text-sm">Find your dream home from premium listings</p>
              </Link>
              
              <Link
                to="/sell"
                className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <TrendingUp className="h-6 w-6 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Sell Property</h3>
                <p className="text-gray-600 text-sm">Get the best price for your property</p>
              </Link>
              
              <Link
                to="/packages"
                className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <Briefcase className="h-6 w-6 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Our Packages</h3>
                <p className="text-gray-600 text-sm">Premium property services packages</p>
              </Link>
              
              <Link
                to="/browse"
                className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                  <Search className="h-6 w-6 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Browse Properties</h3>
                <p className="text-gray-600 text-sm">Explore all available properties</p>
              </Link>
            </div>
          </div>

          {/* Enhanced Help Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-10 text-white text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Property Assistance?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Our property experts are here to help you find your dream home or get the best value for your property.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                +91 9876543210
              </a>
              
              <a
                href="https://wa.me/919876543210?text=Hello%20Property%20Experts,%20I%20need%20help%20with%20property%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </div>
            
            <p className="text-blue-200 text-sm mt-6">
              Typically reply within 15 minutes during business hours
            </p>
          </div>

          {/* Additional Navigation */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Buy', 'Sell', 'Packages', 'About', 'Contact', 'Login'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;