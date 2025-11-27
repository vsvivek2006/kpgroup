import React, { useState } from 'react';
import PaymentButton from '../components/PaymentButton';
import { Phone, MessageCircle, Shield, CheckCircle, Star, Zap, Crown } from 'lucide-react';

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [activeTab, setActiveTab] = useState('buyer');

  // Updated Packages with correct prices: 299, 799, 1199
  const buyerPackages = [
    {
      id: 1,
      name: "Pro Buyer",
      price: 299,
      originalPrice: 599,
      duration: "3 Months",
      popular: true,
      badge: "MOST POPULAR",
      features: [
        "✅ Unlimited Property Access",
        "✅ Advanced Search Filters", 
        "✅ Priority Customer Support",
        "✅ Property Price Analytics",
        "✅ Virtual Tours Access",
        "✅ Document Verification",
        "✅ Legal Assistance Basic",
        "✅ Property Comparison Tool",
        "✅ WhatsApp Notifications",
        "✅ Dedicated Support Agent"
      ],
      buttonText: "Get Started",
      description: "Perfect for serious home buyers",
      gradient: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-600",
      badgeColor: "bg-blue-500",
      icon: Star
    },
    {
      id: 2,
      name: "Premium Investor", 
      price: 799,
      originalPrice: 1599,
      duration: "6 Months",
      popular: false,
      badge: "INVESTOR CHOICE",
      features: [
        "🚀 All Pro Features Included",
        "🚀 Dedicated Relationship Manager", 
        "🚀 Exclusive Pre-Launch Access",
        "🚀 Investment Analytics Dashboard",
        "🚀 Legal Consultations (5 sessions)",
        "🚀 Expert Negotiation Support",
        "🚀 Property Valuation Reports",
        "🚀 Portfolio Management Tools",
        "🚀 Site Visit Coordination",
        "🚀 Loan Assistance Guidance"
      ],
      buttonText: "Go Premium",
      description: "For serious real estate investors",
      gradient: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      textColor: "text-purple-600",
      badgeColor: "bg-purple-500",
      icon: Zap
    },
    {
      id: 3,
      name: "Elite Membership",
      price: 1199,
      originalPrice: 2399,
      duration: "1 Year", 
      popular: false,
      badge: "ELITE",
      features: [
        "💎 All Premium Features",
        "💎 Unlimited Legal Consultations",
        "💎 Full Property Management Support", 
        "💎 Commercial Property Access",
        "💎 International Property Insights",
        "💎 Personalized Property Alerts",
        "💎 Complete Loan Assistance",
        "💎 Tax Advisory Services",
        "💎 Lifetime Dedicated Support",
        "💎 Business Property Consulting"
      ],
      buttonText: "Go Elite", 
      description: "Complete real estate solution",
      gradient: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      textColor: "text-orange-600",
      badgeColor: "bg-orange-500",
      icon: Crown
    },
  ];

  const sellerPackages = [
    {
      id: 4,
      name: "Featured Seller",
      price: 299,
      originalPrice: 599,
      duration: "1 Month",
      popular: true,
      badge: "BEST SELLER",
      features: [
        "⭐ Featured Listing Placement (7 Days)",
        "⭐ High Priority in Search Results",
        "⭐ Professional Photography (10 images)", 
        "⭐ Virtual Tour Creation",
        "⭐ Social Media Promotion",
        "⭐ WhatsApp Lead Notifications",
        "⭐ Buyer Verification System",
        "⭐ Lead Management Dashboard",
        "⭐ Performance Analytics",
        "⭐ Priority Support"
      ],
      buttonText: "Start Selling",
      description: "Maximize visibility for your property",
      gradient: "from-green-500 to-green-600",
      borderColor: "border-green-500",
      buttonColor: "bg-green-600 hover:bg-green-700", 
      textColor: "text-green-600",
      badgeColor: "bg-green-500",
      icon: Star
    },
    {
      id: 5,
      name: "Premium Seller",
      price: 799,
      originalPrice: 1599,
      duration: "3 Months",
      popular: false,
      badge: "PREMIUM",
      features: [
        "🔥 All Featured Seller Benefits",
        "🔥 Dedicated Sales Manager",
        "🔥 Professional Video Tour", 
        "🔥 Multi-platform Listing",
        "🔥 Advanced Market Analysis",
        "🔥 Expert Negotiation Support",
        "🔥 Legal Documentation Help",
        "🔥 Property Valuation Report",
        "🔥 Custom Marketing Strategy",
        "🔥 Open House Organization"
      ],
      buttonText: "Go Premium",
      description: "Comprehensive sales package", 
      gradient: "from-teal-500 to-teal-600",
      borderColor: "border-teal-500",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      textColor: "text-teal-600",
      badgeColor: "bg-teal-500",
      icon: Zap
    },
    {
      id: 6,
      name: "Enterprise Seller",
      price: 1199,
      originalPrice: 2399, 
      duration: "6 Months",
      popular: false,
      badge: "ENTERPRISE",
      features: [
        "🏢 All Premium Seller Features", 
        "🏢 Multiple Property Listings (Up to 5)",
        "🏢 Custom Marketing Campaign",
        "🏢 Complete Open House Management",
        "🏢 Full Legal & Documentation Support",
        "🏢 Price Optimization Strategy",
        "🏢 Competitor Analysis Reports", 
        "🏢 Dedicated Support Team",
        "🏢 Bulk Listing Management",
        "🏢 Business Analytics Dashboard"
      ],
      buttonText: "Enterprise Plan",
      description: "For developers & bulk owners",
      gradient: "from-indigo-500 to-indigo-600",
      borderColor: "border-indigo-500", 
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      textColor: "text-indigo-600",
      badgeColor: "bg-indigo-500",
      icon: Crown
    },
  ];

  const currentPackages = activeTab === 'buyer' ? buyerPackages : sellerPackages;

  const handlePackageSelect = (pkg: any) => {
    setSelectedPackage(pkg);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (paymentId: string) => {
    // Send WhatsApp confirmation
    const message = `🎉 Payment Successful!\n\nPackage: ${selectedPackage.name}\nAmount: ₹${selectedPackage.price}\nPayment ID: ${paymentId}\nDuration: ${selectedPackage.duration}\n\nThank you for choosing KPrealtors Group! Our team will activate your package within 2 hours.`;
    window.open(`https://wa.me/919717157006?text=${encodeURIComponent(message)}`, '_blank');
    
    setShowPaymentModal(false);
    setSelectedPackage(null);
  };

  const handlePaymentFailure = (error: string) => {
    alert(`❌ Payment Failed: ${error}\n\nPlease try again or contact our support team at +91-97171 57006`);
    setShowPaymentModal(false);
  };

  const handleCallSupport = () => {
    window.location.href = 'tel:+919717157006';
  };

  const handleWhatsAppSupport = () => {
    const message = "Hello KPrealtors! I need help choosing a package or have payment-related queries.";
    window.open(`https://wa.me/919717157006?text=${encodeURIComponent(message)}`, '_blank');
  };

  const formatPrice = (price: number) => {
    return `₹${price}`;
  };

  const calculateSavings = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Affordable packages designed for every real estate need
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold">Starting at ₹299</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold">50%+ Savings</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold">Instant Activation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-2 max-w-md mx-auto border border-gray-200">
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('buyer')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'buyer'
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              🏠 Buyer
            </button>
            <button
              onClick={() => setActiveTab('seller')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'seller'
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              💰 Seller
            </button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPackages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 ${pkg.borderColor} bg-white group`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-6 right-6 bg-yellow-400 text-yellow-900 px-4 py-2 text-sm font-bold rounded-full z-10 shadow-lg animate-pulse">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${pkg.gradient} text-white`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-bold ${pkg.textColor} mb-3`}>{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    
                    {/* Price Section */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-3 mb-2">
                        <span className={`text-5xl font-bold ${pkg.textColor}`}>
                          {formatPrice(pkg.price)}
                        </span>
                        {pkg.originalPrice > pkg.price && (
                          <span className="text-xl text-gray-500 line-through">
                            {formatPrice(pkg.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="text-gray-500 font-medium">{pkg.duration}</div>
                      
                      {/* Savings Badge */}
                      {pkg.originalPrice > pkg.price && (
                        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mt-3 inline-block">
                          Save {calculateSavings(pkg.originalPrice, pkg.price)}% (₹{pkg.originalPrice - pkg.price})
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <span className="text-green-500 mr-3 mt-1 flex-shrink-0 text-lg">•</span>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handlePackageSelect(pkg)}
                    className={`w-full ${pkg.buttonColor} text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-2xl`}
                  >
                    {pkg.buttonText} - {formatPrice(pkg.price)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && selectedPackage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Complete Your Purchase</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Package Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedPackage.gradient} text-white`}>
                  {selectedPackage.icon && <selectedPackage.icon className="h-6 w-6" />}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{selectedPackage.name}</h4>
                  <p className="text-gray-600 text-sm">{selectedPackage.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-semibold text-gray-900">{selectedPackage.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">Total Amount</p>
                  <div className="flex items-center justify-end gap-2">
                    <p className="text-2xl font-bold text-green-600">{formatPrice(selectedPackage.price)}</p>
                    {selectedPackage.originalPrice > selectedPackage.price && (
                      <p className="text-sm text-gray-500 line-through">{formatPrice(selectedPackage.originalPrice)}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {selectedPackage.originalPrice > selectedPackage.price && (
                <div className="mt-4 bg-green-100 border border-green-200 rounded-lg p-3">
                  <p className="text-green-700 text-sm font-semibold text-center">
                    🎉 You're saving ₹{selectedPackage.originalPrice - selectedPackage.price}!
                  </p>
                </div>
              )}
            </div>

            {/* Payment Button */}
            <PaymentButton
              amount={selectedPackage.price}
              packageName={selectedPackage.name}
              packageDescription={selectedPackage.description}
              onSuccess={handlePaymentSuccess}
              onFailure={handlePaymentFailure}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              💳 Pay {formatPrice(selectedPackage.price)} Now
            </PaymentButton>

            {/* Security & Support */}
            <div className="mt-6 space-y-3 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="h-4 w-4 text-green-500" />
                Secure payment powered by Razorpay
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Phone className="h-4 w-4 text-blue-500" />
                Need help? Call +91-97171 57006
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Support Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Deciding?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our real estate experts will help you choose the perfect package for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleCallSupport}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call +91-97171 57006
            </button>
            <button
              onClick={handleWhatsAppSupport}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Support
            </button>
          </div>
          
          {/* Trust Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Secure Payment", desc: "256-bit SSL encryption" },
              { icon: CheckCircle, title: "Instant Activation", desc: "Within 2 hours of payment" },
              { icon: Star, title: "5-Star Support", desc: "24/7 customer care" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                <feature.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;