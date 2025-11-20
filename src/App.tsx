import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Terms from './pages/Terms'; 
import OnboardingAgreement from './pages/OnboardingAgreement'; 
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Offer from './pages/Offer';
import GrowthServices from './pages/GrowthServices';
import CareersNew from './pages/CareersNew';

function App() {
  return (
    <Router>
      {/* Google Tag Manager */}
      <Helmet>
        {/* GTM Script */}
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
        <title>Earningsharthi - Digital Marketing & Web Development Company in Uttarakhand</title>
        <meta name="description" content="Earningsharthi provides professional digital marketing, branding, and web development services in Khatima, Uttarakhand. Grow your business online with our expert solutions." />
        <meta name="keywords" content="digital marketing, web development, branding, SEO, social media marketing, e-commerce, Khatima, Uttarakhand, India, website design, logo design, careers, jobs, hiring" />
        <meta name="author" content="Earningsharthi" />

        {/* Careers Page Meta Tags */}
        <meta name="careers" content="Explore career opportunities at Earningsharthi. Join our team of digital marketing and web development professionals in Uttarakhand." />
        <meta property="og:title" content="Careers at Earningsharthi - Join Our Team" />
        <meta property="og:description" content="Explore open positions and career opportunities at Earningsharthi, a leading digital marketing and web development company in Uttarakhand." />
        <meta property="og:url" content="https://earningsharthi.in/careers" />
        <meta property="og:image" content="https://earningsharthi.in/og-image-careers.jpg" />
        <meta property="twitter:title" content="Careers at Earningsharthi - Join Our Team" />
        <meta property="twitter:description" content="Explore open positions and career opportunities at Earningsharthi, a leading digital marketing and web development company in Uttarakhand." />
        <meta property="twitter:image" content="https://earningsharthi.in/og-image-careers.jpg" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://earningsharthi.in/" />
        <meta property="og:title" content="Earningsharthi - Digital Marketing & Web Development Company" />
        <meta property="og:description" content="Professional digital marketing, web development, and branding services in Khatima, Uttarakhand. Transform your online presence with Earningsharthi." />
        <meta property="og:image" content="https://earningsharthi.in/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://earningsharthi.in/" />
        <meta property="twitter:title" content="Earningsharthi - Digital Marketing & Web Development Company" />
        <meta property="twitter:description" content="Professional digital marketing, web development, and branding services in Khatima, Uttarakhand." />
        <meta property="twitter:image" content="https://earningsharthi.in/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://earningsharthi.in/" />
        
        {/* GA4 Tracking - Add your actual GA4 ID when available */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </script> */}
        
        {/* ✅ Razorpay Script for Payment Functionality */}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Helmet>

      {/* GTM Noscript - for browsers without JavaScript */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-MQWHT9DZ"
          height="0" 
          width="0" 
          style={{display: 'none', visibility: 'hidden'}}
        />
      </noscript>

      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/onboarding-agreement" element={<OnboardingAgreement />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/growth-services" element={<GrowthServices />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/careers" element={<CareersNew />} />

            
            {/* ✅ PAYMENT SUCCESS PAGE */}
            <Route path="/payment/success" element={
              <div className="min-h-screen flex items-center justify-center bg-green-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
                  <div className="text-green-500 text-6xl mb-4">✅</div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                  <p className="text-gray-600 mb-6">
                    Thank you for your payment. We've received your order and will contact you within 24 hours.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="/" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      Return to Home
                    </a>
                    <a 
                      href="https://wa.me/916398799013" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      💬 WhatsApp Support
                    </a>
                  </div>
                </div>
              </div>
            } />
            
            {/* ✅ PAYMENT FAILED PAGE */}
            <Route path="/payment/failed" element={
              <div className="min-h-screen flex items-center justify-center bg-red-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
                  <div className="text-red-500 text-6xl mb-4">❌</div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h1>
                  <p className="text-gray-600 mb-6">
                    Your payment could not be processed. Please try again or contact our support team.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="/pricing" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      Try Again
                    </a>
                    <a 
                      href="https://wa.me/916398799013" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      💬 WhatsApp Support
                    </a>
                    <a 
                      href="tel:+916398799013"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      📞 Call Support
                    </a>
                  </div>
                </div>
              </div>
            } />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
