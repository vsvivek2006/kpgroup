// Buy.tsx
import React, { useState } from 'react';
import PaymentButton from '../components/PaymentButton';

const Buy: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const properties = [
    {
      id: 1,
      title: "Luxury Sea-Facing Apartment",
      location: "Marine Drive, Mumbai",
      price: 25000000,
      beds: 3,
      baths: 2,
      area: "1500 sq ft",
      type: "apartment",
      image: "/images/property1.jpg",
      featured: true,
      description: "Beautiful sea-facing apartment with modern amenities and stunning views."
    },
    {
      id: 2,
      title: "Modern Villa with Garden",
      location: "South Delhi",
      price: 48000000,
      beds: 4,
      baths: 3,
      area: "2800 sq ft",
      type: "villa",
      image: "/images/property2.jpg",
      featured: true,
      description: "Spacious villa with private garden and premium finishes."
    },
    {
      id: 3,
      title: "Beachside Studio Flat",
      location: "North Goa",
      price: 12000000,
      beds: 2,
      baths: 2,
      area: "1100 sq ft",
      type: "apartment",
      image: "/images/property3.jpg",
      featured: false,
      description: "Cozy beachside flat perfect for vacation home."
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      location: "Whitefield, Bangalore",
      price: 35000000,
      beds: 3,
      baths: 3,
      area: "2000 sq ft",
      type: "penthouse",
      image: "/images/property4.jpg",
      featured: true,
      description: "Premium penthouse with panoramic city views."
    },
    {
      id: 5,
      title: "Family Apartment",
      location: "Pune",
      price: 8500000,
      beds: 2,
      baths: 2,
      area: "950 sq ft",
      type: "apartment",
      image: "/images/property5.jpg",
      featured: false,
      description: "Perfect family home in peaceful neighborhood."
    },
    {
      id: 6,
      title: "Farmhouse with Pool",
      location: "Lonavala",
      price: 65000000,
      beds: 5,
      baths: 4,
      area: "4500 sq ft",
      type: "villa",
      image: "/images/property6.jpg",
      featured: true,
      description: "Luxury farmhouse with swimming pool and large garden."
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = !priceRange || (
      priceRange === '0-50' && property.price <= 5000000 ||
      priceRange === '50-100' && property.price > 5000000 && property.price <= 10000000 ||
      priceRange === '100-500' && property.price > 10000000 && property.price <= 50000000 ||
      priceRange === '500+' && property.price > 50000000
    );
    const matchesType = !propertyType || property.type === propertyType;
    
    return matchesSearch && matchesPrice && matchesType;
  });

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const handleBuyNow = (property: any) => {
    setSelectedProperty(property);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (paymentId: string) => {
    alert(`Payment Successful! Payment ID: ${paymentId}`);
    setShowPaymentModal(false);
    setSelectedProperty(null);
  };

  const handlePaymentFailure = (error: string) => {
    alert(`Payment Failed: ${error}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Find Your Dream Home</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover premium properties with the best deals and instant booking
          </p>
          
          {/* Advanced Search */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <input 
                  type="text" 
                  placeholder="Search by location, property name..." 
                  className="w-full p-4 text-gray-800 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className="p-4 text-gray-800 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="plot">Plot</option>
              </select>
              <select 
                className="p-4 text-gray-800 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="">Any Price</option>
                <option value="0-50">Under ₹50L</option>
                <option value="50-100">₹50L - ₹1Cr</option>
                <option value="100-500">₹1Cr - ₹5Cr</option>
                <option value="500+">₹5Cr+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Featured Properties</h2>
            <p className="text-gray-600">Found {filteredProperties.length} properties matching your criteria</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <select className="p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none">
              <option>Sort by: Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Area: Large to Small</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {property.featured && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-black/50 px-3 py-1 rounded-full text-sm">
                    {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-3 flex items-center">
                  📍 {property.location}
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{formatPrice(property.price)}</p>
                <p className="text-gray-500 mb-4 text-sm">{property.description}</p>
                
                <div className="flex justify-between text-gray-500 border-t border-gray-200 pt-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg">🛏️</div>
                    <div className="text-sm font-semibold">{property.beds} Beds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg">🚿</div>
                    <div className="text-sm font-semibold">{property.baths} Baths</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg">📐</div>
                    <div className="text-sm font-semibold">{property.area}</div>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleBuyNow(property)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  🛒 Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </section>

      {/* Payment Modal */}
      {showPaymentModal && selectedProperty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Your Purchase</h3>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">{selectedProperty.title}</h4>
              <p className="text-gray-600 text-sm mb-2">📍 {selectedProperty.location}</p>
              <p className="text-xl font-bold text-blue-600">{formatPrice(selectedProperty.price)}</p>
            </div>

            <div className="space-y-4">
              <PaymentButton
                amount={selectedProperty.price}
                currency="INR"
                onSuccess={handlePaymentSuccess}
                onFailure={handlePaymentFailure}
                propertyId={selectedProperty.id}
                propertyName={selectedProperty.title}
              />
              
              <button
                onClick={() => setShowPaymentModal(false)}
                className="w-full bg-gray-500 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
              🔒 Secure payment powered by Razorpay
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Help Finding Your Dream Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our property experts are here to help you every step of the way
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

export default Buy;