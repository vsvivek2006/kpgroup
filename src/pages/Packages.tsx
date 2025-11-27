// Packages.tsx
import React, { useState } from 'react';
import PaymentButton from '../components/PaymentButton';

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [activeTab, setActiveTab] = useState('buyer');

  // --- Finalized Package Data (3 Paid Packages per Category) ---

  const buyerPackages = [
    {
      id: 1,
      name: "Pro Buyer",
      price: 299, 
      originalPrice: 499,
      duration: "3 Months",
      popular: false,
      badge: "ESSENTIAL",
      features: [
        "Unlimited Property Access",
        "Advanced Search Filters",
        "Priority Customer Support",
        "Property Price Analytics",
        "Virtual Tours Access",
        "Document Verification",
        "Property Comparison Tool",
        "WhatsApp Notifications",
      ],
      buttonText: "Go Pro",
      description: "Best for serious home buyers and long-term search",
      gradient: "from-blue-50 to-indigo-100",
      borderColor: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-800",
      badgeColor: "bg-blue-500",
    },
    {
      id: 2,
      name: "Premium Investor",
      price: 799, 
      originalPrice: 1099,
      duration: "6 Months",
      popular: true,
      badge: "RECOMMENDED",
      features: [
        "🔥 All Pro Features Included",
        "🔥 Dedicated Relationship Manager",
        "🔥 Exclusive Pre-Launch Access",
        "🔥 Investment Analytics Dashboard",
        "🔥 Legal Consultations (3 sessions)",
        "🔥 Expert Negotiation Support",
        "🔥 Property Valuation Reports",
        "🔥 Portfolio Management Tools",
        "🔥 Site Visit Coordination",
      ],
      buttonText: "Invest Now",
      description: "For serious real estate investors seeking high returns",
      gradient: "from-purple-50 to-pink-100",
      borderColor: "border-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      textColor: "text-purple-800",
      badgeColor: "bg-purple-500",
    },
    {
      id: 3,
      name: "Elite Membership",
      price: 1199, 
      originalPrice: 1999,
      duration: "1 Year",
      popular: false,
      badge: "ELITE",
      features: [
        "💎 All Premium Features",
        "💎 Unlimited Legal Consultations",
        "💎 Full Property Management Support",
        "💎 Commercial Property Access",
        "💎 International Property Insights",
        "💎 Personalized Property Alerts & Reports",
        "💎 Complete Loan Assistance & Tax Advisory",
        "💎 Lifetime Dedicated Support",
        "💎 Business Property Consulting",
      ],
      buttonText: "Go Elite",
      description: "Complete, hands-off real estate solution package",
      gradient: "from-orange-50 to-red-100",
      borderColor: "border-orange-500",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      textColor: "text-orange-800",
      badgeColor: "bg-orange-500",
    },
  ];

  const sellerPackages = [
    {
      id: 4,
      name: "Featured Seller",
      price: 299, 
      originalPrice: 499,
      duration: "1 Month",
      popular: false,
      badge: "BOOST",
      features: [
        "⭐ Featured Listing Placement (7 Days)",
        "⭐ High Priority in Search Results",
        "⭐ Professional Photography (10 images)",
        "⭐ Virtual Tour Creation",
        "⭐ Social Media Promotion (Basic)",
        "⭐ WhatsApp Lead Notifications",
        "⭐ Lead Management Dashboard",
        "⭐ Priority Support",
      ],
      buttonText: "Boost Listing",
      description: "Maximise visibility for a single property listing",
      gradient: "from-teal-50 to-cyan-100",
      borderColor: "border-teal-500",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      textColor: "text-teal-800",
      badgeColor: "bg-teal-500",
    },
    {
      id: 5,
      name: "Premium Seller",
      price: 799, 
      originalPrice: 1099,
      duration: "3 Months",
      popular: true,
      badge: "TOP SELLER",
      features: [
        "🚀 All Featured Seller Benefits (3 Listings)",
        "🚀 Dedicated Sales Manager",
        "🚀 Professional Video Tour",
        "🚀 Multi-platform Listing",
        "🚀 Advanced Market Analysis",
        "🚀 Expert Negotiation Support",
        "🚀 Legal Documentation Help",
        "🚀 Property Valuation Report",
        "🚀 Open House Organization (1 Session)",
      ],
      buttonText: "Go Premium",
      description: "Comprehensive package for faster, premium sales",
      gradient: "from-pink-50 to-rose-100",
      borderColor: "border-pink-500",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      textColor: "text-pink-800",
      badgeColor: "bg-pink-500",
    },
    {
      id: 6,
      name: "Enterprise Seller",
      price: 1199, 
      originalPrice: 1999,
      duration: "6 Months",
      popular: false,
      badge: "ENTERPRISE",
      features: [
        "🏢 All Premium Seller Features (5 Listings)",
        "🏢 Custom Marketing Campaign & Staging Advice",
        "🏢 Complete Open House Management",
        "🏢 Full Legal & Documentation Support",
        "🏢 Price Optimization Strategy & Reports",
        "🏢 Dedicated Support Team",
        "🏢 Custom API Access for Developers",
        "🏢 Bulk Listing Management",
        "🏢 Business Analytics Dashboard",
      ],
      buttonText: "Enterprise Plan",
      description: "For builders, developers, and bulk property owners",
      gradient: "from-indigo-50 to-violet-100",
      borderColor: "border-indigo-500",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      textColor: "text-indigo-800",
      badgeColor: "bg-indigo-500",
    },
  ];

  const currentPackages = activeTab === 'buyer' ? buyerPackages : sellerPackages;

  const handlePackageSelect = (pkg: any) => {
    setSelectedPackage(pkg);
    // Removed the conditional check for pkg.price === 1
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (paymentId: string) => {
    alert(`🎉 Payment Successful! \nYour ${selectedPackage.name} package is now active.\nPayment ID: ${paymentId}`);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20 sm:py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">
            Premium Real Estate Packages
          </h1>
          <p className="text-lg md:text-xl mb-3 max-w-3xl mx-auto font-light">
            Unlock exclusive features tailored for buyers and sellers in India.
          </p>
          <p className="text-md opacity-90 font-medium">
            Find, Buy, or Sell faster with our professional plans.
          </p>
        </div>
      </section>

      {/* Tab Navigation (Mobile Friendly) */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-1 max-w-lg mx-auto border border-white/20">
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('buyer')}
              className={`flex-1 py-3 sm:py-4 px-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 text-center ${
                activeTab === 'buyer'
                  ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              🏠 Buyer Plans
            </button>
            <button
              onClick={() => setActiveTab('seller')}
              className={`flex-1 py-3 sm:py-4 px-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 text-center ${
                activeTab === 'seller'
                  ? 'bg-white text-green-600 shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              💰 Seller Plans
            </button>
          </div>
        </div>
      </section>

      {/* Packages Grid (Professional Look) */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border-4 ${pkg.borderColor} bg-white`}
            >
              {/* Badge & Popular Ribbon */}
              <div className={`text-center py-4 bg-gradient-to-r ${pkg.gradient} relative`}>
                <span className={`inline-block ${pkg.badgeColor} text-white px-4 py-1 rounded-full text-xs font-bold z-10 shadow-md uppercase`}>
                  {pkg.badge}
                </span>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-bold rounded-bl-xl shadow-lg">
                    BEST VALUE
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 flex flex-col h-full">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <h3 className={`text-3xl font-bold ${pkg.textColor} mb-2`}>{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-medium">{pkg.description}</p>
                  
                  {/* Price Section */}
                  <div className="mb-4">
                    <span className={`text-5xl font-extrabold ${pkg.textColor}`}>
                      {formatPrice(pkg.price)}
                    </span>
                    <span className="text-xl text-gray-500 font-semibold"> / {pkg.duration}</span>
                    <div className="flex items-center justify-center gap-3 mt-1">
                      {pkg.originalPrice > pkg.price && (
                        <span className="text-lg text-red-500 line-through font-medium">
                          {formatPrice(pkg.originalPrice)}
                        </span>
                      )}
                      {pkg.originalPrice > pkg.price && (
                        <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          Save {((pkg.originalPrice - pkg.price) / pkg.originalPrice * 100).toFixed(0)}%
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-grow mb-8">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className={`text-green-500 mr-3 mt-1 flex-shrink-0 font-extrabold`}>
                          {activeTab === 'buyer' ? '🏠' : '💰'}
                        </span>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto"> {/* Ensures button is at the bottom */}
                  <button
                    onClick={() => handlePackageSelect(pkg)}
                    className={`w-full ${pkg.buttonColor} text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:shadow-2xl shadow-xl`}
                  >
                    {pkg.buttonText} • {formatPrice(pkg.price)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && selectedPackage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 transform transition-all duration-300 scale-100 opacity-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">Complete Payment</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none"
              >
                ×
              </button>
            </div>
            
            {/* Package Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border-2 border-blue-200">
              <h4 className="font-bold text-xl text-gray-800 mb-2">{selectedPackage.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{selectedPackage.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Duration</p>
                  <p className="font-semibold text-gray-700">{selectedPackage.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">Total Amount</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-blue-600">{formatPrice(selectedPackage.price)}</p>
                    {selectedPackage.originalPrice > selectedPackage.price && (
                      <p className="text-sm text-gray-500 line-through">{formatPrice(selectedPackage.originalPrice)}</p>
                    )}
                  </div>
                </div>
              </div>
              {selectedPackage.originalPrice > selectedPackage.price && (
                <div className="mt-3 bg-green-100 border border-green-200 rounded-lg p-2">
                  <p className="text-green-700 text-sm font-semibold text-center">
                    🎉 You save {formatPrice(selectedPackage.originalPrice - selectedPackage.price)}!
                  </p>
                </div>
              )}
            </div>

            {/* Payment Button (Placeholder for actual implementation) */}
            <PaymentButton
              amount={selectedPackage.price}
              packageName={selectedPackage.name}
              packageDescription={selectedPackage.description}
              onSuccess={handlePaymentSuccess}
              onFailure={handlePaymentFailure}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              💳 Pay {formatPrice(selectedPackage.price)} Now
            </PaymentButton>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                🔒 Secure & Encrypted Payment
              </div>
              <p className="text-xs text-gray-400">
                Powered by Razorpay • All major cards accepted
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Need Expert Guidance?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our team is ready to help you choose the best plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-bold text-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.03] shadow-xl">
              📞 Call Expert: +91-9876543210
            </button>
            <button className="w-full sm:w-auto bg-white text-gray-900 px-8 py-3 rounded-xl font-bold text-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.03] shadow-xl border-2 border-white">
              💬 24/7 WhatsApp Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
