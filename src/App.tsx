import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms'; 
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Packages from './pages/Packages';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import Rent from './pages/Rent';
import Properties from './pages/Properties';
import Refund from './pages/Refund';



function App() {
  return (
    <Router>
      {/* Global Meta Tags & Scripts */}
      <Helmet>
        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MQWHT9DZ');
          `}
        </script>
        
        {/* Primary Meta Tags */}
        <title>KPrealtors Group - Premium Real Estate Services | Buy Sell Rent Properties</title>
        <meta name="description" content="KPrealtors Group - Premium real estate services in Gurgaon. Buy, sell, rent properties. 5000+ verified listings. Expert agents. Best prices guaranteed." />
        <meta name="keywords" content="real estate, property, buy property, sell property, gurgaon properties, apartments, villas, commercial property, kprealtors, property dealers" />
        <meta name="author" content="KPrealtors Group" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kprealtors.in/" />
        <meta property="og:title" content="KPrealtors Group - Premium Real Estate Services" />
        <meta property="og:description" content="Buy, sell, rent properties in Gurgaon. 5000+ verified listings. Expert agents. Best prices guaranteed." />
        <meta property="og:image" content="https://kprealtors.in/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kprealtors.in/" />
        <meta property="twitter:title" content="KPrealtors Group - Premium Real Estate Services" />
        <meta property="twitter:description" content="Buy, sell, rent properties in Gurgaon. 5000+ verified listings. Expert agents. Best prices guaranteed." />
        <meta property="twitter:image" content="https://kprealtors.in/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kprealtors.in/" />
        
        {/* Razorpay Script for Payment Functionality */}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        
        {/* Additional Real Estate Specific Meta Tags */}
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurgaon" />
        <meta name="geo.position" content="28.4595;77.0266" />
        <meta name="ICBM" content="28.4595, 77.0266" />
        
        {/* Business Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "KPrealtors Group",
              "description": "Premium real estate services in Gurgaon",
              "url": "https://kprealtors.in/",
              "telephone": "+919717157006",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gurgaon",
                "addressRegion": "Haryana",
                "postalCode": "122001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.4595",
                "longitude": "77.0266"
              },
              "openingHours": "Mo-Su 09:00-21:00",
              "areaServed": "Gurgaon",
              "sameAs": []
            }
          `}
        </script>
      </Helmet>

      {/* GTM Noscript */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-MQWHT9DZ"
          height="0" 
          width="0" 
          style={{display: 'none', visibility: 'hidden'}}
          title="Google Tag Manager"
        />
      </noscript>

      <div className="min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            
            {/* Property Actions */}
            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/properties" element={<Properties />} />
            {/* Legal Pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} /> 
            
            
            {/* User Account Pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* ✅ PAYMENT SUCCESS PAGE */}
            <Route path="/payment/success" element={
              <div className="min-h-screen flex items-center justify-center bg-green-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4 border border-green-200">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-green-500 text-3xl">✅</div>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Thank you for your payment. Your package has been activated successfully. 
                    Our team will contact you within 24 hours to proceed with your property listing.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="/dashboard" 
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 block"
                    >
                      Go to Dashboard
                    </a>
                    <a 
                      href="https://wa.me/919717157006" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 block flex items-center justify-center space-x-2"
                    >
                      <span>💬</span>
                      <span>Contact on WhatsApp</span>
                    </a>
                    <a 
                      href="/"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 block"
                    >
                      Return to Home
                    </a>
                  </div>
                </div>
              </div>
            } />
            
            {/* ✅ PAYMENT FAILED PAGE */}
            <Route path="/payment/failed" element={
              <div className="min-h-screen flex items-center justify-center bg-red-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4 border border-red-200">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-red-500 text-3xl">❌</div>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h1>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We couldn't process your payment. This could be due to insufficient funds, 
                    network issues, or incorrect payment details. Please try again.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="/packages" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 block"
                    >
                      Try Again
                    </a>
                    <a 
                      href="https://wa.me/919717157006" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 block flex items-center justify-center space-x-2"
                    >
                      <span>💬</span>
                      <span>WhatsApp Support</span>
                    </a>
                    <a 
                      href="tel:+919717157006"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 block flex items-center justify-center space-x-2"
                    >
                      <span>📞</span>
                      <span>Call +91-97171 57006</span>
                    </a>
                  </div>
                </div>
              </div>
            } />

            {/* ✅ PAYMENT PENDING PAGE */}
            <Route path="/payment/pending" element={
              <div className="min-h-screen flex items-center justify-center bg-yellow-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4 border border-yellow-200">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-yellow-500 text-3xl">⏳</div>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Processing</h1>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Your payment is being processed. This usually takes 2-3 minutes. 
                    You will receive a confirmation message once it's completed.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="/dashboard" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 block"
                    >
                      Check Dashboard
                    </a>
                    <a 
                      href="https://wa.me/919717157006" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 block"
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            } />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppFloat 
          phoneNumber="919717157006"
          message="Hello KPrealtors! I'm interested in your property services."
          position="bottom-right"
        />
      </div>
    </Router>
  );
}

export default App;
