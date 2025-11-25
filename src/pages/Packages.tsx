// Packages.tsx
import React, { useState } from 'react';
import PaymentButton from '../components/PaymentButton';

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [activeTab, setActiveTab] = useState('buyer');

  const buyerPackages = [
    {
      id: 1,
      name: "Basic Search",
      price: 0,
      originalPrice: 0,
      duration: "Lifetime",
      popular: false,
      features: [
        "Basic Property Search",
        "Limited Property Views (10/day)",
        "Standard Customer Support",
        "Email Notifications",
        "Save Properties"
      ],
      limitations: [
        "No Priority Access",
        "Limited Advanced Filters",
        "No Expert Assistance"
      ],
      buttonText: "Get Started Free",
      description: "Perfect for casual property browsing"
    },
    {
      id: 2,
      name: "Pro Buyer",
      price: 99, // ✅ Fixed amount - ₹99
      originalPrice: 199,
      duration: "3 Months",
      popular: true,
      features: [
        "Unlimited Property Access",
        "Advanced Search Filters",
        "Priority Customer Support",
        "Property Price Analytics",
        "Virtual Tours Access",
        "Document Verification",
        "Legal Assistance Basic",
        "Property Comparison Tool"
      ],
      limitations: [
        "Limited Legal Consultations",
        "Standard Negotiation Support"
      ],
      buttonText: "Buy Now",
      description: "Best for serious home buyers"
    },
    {
      id: 3,
      name: "Premium Investor",
      price: 299, // ✅ Fixed amount - ₹299
      originalPrice: 499,
      duration: "6 Months",
      popular: false,
      features: [
        "All Pro Features",
        "Dedicated Relationship Manager",
        "Exclusive Pre-Launch Access",
        "Investment Analytics",
        "Legal Consultations (5 sessions)",
        "Negotiation Support",
        "Property Valuation Reports",
        "Market Trend Analysis",
        "Rental Yield Calculator",
        "Portfolio Management"
      ],
      limitations: [
        "No Property Management",
        "Limited to Residential Properties"
      ],
      buttonText: "Buy Now",
      description: "For serious real estate investors"
    },
    {
      id: 4,
      name: "Elite Membership",
      price: 599, // ✅ Fixed amount - ₹599
      originalPrice: 999,
      duration: "1 Year",
      popular: false,
      features: [
        "All Premium Features",
        "Unlimited Legal Consultations",
        "Full Property Management Support",
        "Commercial Property Access",
        "International Property Access",
        "Personalized Property Alerts",
        "Site Visits Coordination",
        "Loan Assistance",
        "Tax Advisory Services",
        "Lifetime Support Access"
      ],
      limitations: [
        "No International Travel Included",
        "Additional charges for legal documentation"
      ],
      buttonText: "Buy Now",
      description: "Complete real estate solution"
    }
  ];

  const sellerPackages = [
    {
      id: 5,
      name: "Basic Listing",
      price: 99, // ✅ Fixed amount - ₹99
      originalPrice: 199,
      duration: "1 Month",
      popular: false,
      features: [
        "Property Listing (30 days)",
        "Basic Photo Upload (5 images)",
        "Contact Form",
        "Standard Search Visibility",
        "Email Support"
      ],
      limitations: [
        "No Featured Listing",
        "Limited Photo Upload",
        "No Social Media Promotion"
      ],
      buttonText: "List Now",
      description: "Basic property listing package"
    },
    {
      id: 6,
      name: "Featured Seller",
      price: 299, // ✅ Fixed amount - ₹299
      originalPrice: 499,
      duration: "3 Months",
      popular: true,
      features: [
        "Featured Listing Placement",
        "High Priority in Search",
        "Professional Photography (10 images)",
        "Virtual Tour Creation",
        "Social Media Promotion",
        "WhatsApp Notifications",
        "Buyer Verification",
        "Lead Management Dashboard"
      ],
      limitations: [
        "Limited to one property",
        "No dedicated manager"
      ],
      buttonText: "List Now",
      description: "Get maximum visibility for your property"
    },
    {
      id: 7,
      name: "Premium Seller",
      price: 599, // ✅ Fixed amount - ₹599
      originalPrice: 999,
      duration: "6 Months",
      popular: false,
      features: [
        "All Featured Seller Benefits",
        "Dedicated Sales Manager",
        "Property Video Tour",
        "Multi-platform Listing",
        "Lead Priority Management",
        "Market Price Analysis",
        "Negotiation Support",
        "Legal Documentation Help",
        "Property Valuation Report"
      ],
      limitations: [
        "Additional charges for legal work",
        "Limited to residential properties"
      ],
      buttonText: "List Now",
      description: "Complete selling solution"
    },
    {
      id: 8,
      name: "Enterprise Seller",
      price: 999, // ✅ Fixed amount - ₹999
      originalPrice: 1499,
      duration: "1 Year",
      popular: false,
      features: [
        "All Premium Seller Features",
        "Multiple Property Listings",
        "Custom Marketing Campaign",
        "Professional Staging Advice",
        "Open House Organization",
        "Legal & Documentation Full Support",
        "Price Optimization Strategy",
        "Competitor Analysis",
        "Dedicated Support Team"
      ],
      limitations: [
        "Maximum 5 properties",
        "Commercial properties extra"
      ],
      buttonText: "List Now",
      description: "For builders and multiple property owners"
    }
  ];

  const currentPackages = activeTab === 'buyer' ? buyerPackages : sellerPackages;

  const handlePackageSelect = (pkg: any) => {
    if (pkg.price === 0) {
      // Free package - direct activate
      alert(`🎉 Your ${pkg.name} package has been activated!`);
      return;
    }
    setSelectedPackage(pkg);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (paymentId: string) => {
    alert(`🎉 Payment Successful! Your ${selectedPackage.name} package is now active.\nPayment ID: ${paymentId}`);
    setShowPaymentModal(false);
    setSelectedPackage(null);
  };

  const handlePaymentFailure = (error: string) => {
    alert(`❌ Payment Failed: ${error}`);
    setShowPaymentModal(false);
  };

  const formatPrice = (price: number) => {
    return `₹${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Choose Your Package</h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            Find the perfect plan for your real estate journey
          </p>
          <p className="text-lg opacity-90">
            Flexible packages for buyers, sellers, and investors
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-2 max-w-2xl mx-auto">
          <div className="flex">
            <button
              onClick={() => setActiveTab('buyer')}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                activeTab === 'buyer'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              👨‍💼 Buyer Packages
            </button>
            <button
              onClick={() => setActiveTab('seller')}
              className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                activeTab === 'seller'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              👨‍💻 Seller Packages
            </button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {currentPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? 'ring-4 ring-blue-500 ring-opacity-50 transform hover:scale-105' : 'hover:scale-102'
              }`}
            >
              {pkg.popular && (
                <div className="bg-blue-600 text-white text-center py-2 font-semibold">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-blue-600">
                      {formatPrice(pkg.price)}
                    </span>
                    {pkg.originalPrice > pkg.price && (
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(pkg.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  {pkg.originalPrice > pkg.price && (
                    <div className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                      Save {((pkg.originalPrice - pkg.price) / pkg.originalPrice * 100).toFixed(0)}%
                    </div>
                  )}
                  
                  <div className="text-gray-500 text-sm mt-2">Valid for {pkg.duration}</div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">✅ What's Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {pkg.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">⚠️ Limitations:</h4>
                    <ul className="space-y-2">
                      {pkg.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="text-gray-400 mr-2">•</span>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                {pkg.price === 0 ? (
                  <button
                    onClick={() => handlePackageSelect(pkg)}
                    className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-all"
                  >
                    {pkg.buttonText}
                  </button>
                ) : (
                  <button
                    onClick={() => handlePackageSelect(pkg)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                        : 'bg-gray-800 text-white hover:bg-gray-900'
                    }`}
                  >
                    {pkg.buttonText} - {formatPrice(pkg.price)}
                  </button>
                )}

                {/* Free trial notice */}
                {pkg.price === 0 && (
                  <p className="text-center text-gray-500 text-xs mt-2">
                    No credit card required
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Complete Payment</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">{selectedPackage.name}</h4>
              <p className="text-gray-600 text-sm mb-2">{selectedPackage.description}</p>
              <p className="text-gray-600 text-sm mb-2">Valid for {selectedPackage.duration}</p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold text-blue-600">{formatPrice(selectedPackage.price)}</p>
                {selectedPackage.originalPrice > selectedPackage.price && (
                  <p className="text-sm text-gray-500 line-through">{formatPrice(selectedPackage.originalPrice)}</p>
                )}
              </div>
              {selectedPackage.originalPrice > selectedPackage.price && (
                <p className="text-green-600 text-sm font-semibold">
                  You save {formatPrice(selectedPackage.originalPrice - selectedPackage.price)}!
                </p>
              )}
            </div>

            {/* ✅ Payment Button Component */}
            <PaymentButton
              amount={selectedPackage.price} // ✅ Exact amount from package
              packageName={selectedPackage.name}
              packageDescription={selectedPackage.description}
              onSuccess={handlePaymentSuccess}
              onFailure={handlePaymentFailure}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Pay {formatPrice(selectedPackage.price)} Now
            </PaymentButton>

            <div className="mt-4 text-center text-sm text-gray-500">
              🔒 Secure payment powered by Razorpay
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Still Confused About Which Package to Choose?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts will help you select the perfect package based on your requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
              📞 Call Expert: +91-9876543210
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              💬 Chat with Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;