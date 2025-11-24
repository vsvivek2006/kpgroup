// BrowseProperties.tsx
import React, { useState } from 'react';
import PaymentButton from '../components/PaymentButton';

const BrowseProperties: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const properties = [
    {
      id: 1,
      title: "Luxury Sea-Facing 3BHK Apartment",
      location: "Marine Drive, Mumbai",
      price: 25000000,
      beds: 3,
      baths: 2,
      area: "1500 sq ft",
      type: "Apartment",
      image: "/images/property1.jpg",
      featured: true,
      description: "Beautiful sea-facing apartment with modern amenities, modular kitchen, and stunning views of Arabian Sea.",
      amenities: ["Swimming Pool", "Gym", "Park", "24/7 Security", "Power Backup"],
      yearBuilt: 2020,
      parking: 2
    },
    {
      id: 2,
      title: "Modern Independent Villa with Garden",
      location: "South Delhi",
      price: 48000000,
      beds: 4,
      baths: 3,
      area: "2800 sq ft",
      type: "Independent House",
      image: "/images/property2.jpg",
      featured: true,
      description: "Spacious villa with private garden, premium finishes, and modern architecture in prime South Delhi location.",
      amenities: ["Garden", "Swimming Pool", "Home Theater", "Modular Kitchen"],
      yearBuilt: 2018,
      parking: 3
    },
    {
      id: 3,
      title: "Beachside 2BHK Studio Flat",
      location: "North Goa",
      price: 12000000,
      beds: 2,
      baths: 2,
      area: "1100 sq ft",
      type: "Apartment",
      image: "/images/property3.jpg",
      featured: false,
      description: "Cozy beachside flat perfect for vacation home or rental investment. Walking distance to beach.",
      amenities: ["Beach Access", "Balcony", "Furnished", "Security"],
      yearBuilt: 2021,
      parking: 1
    },
    {
      id: 4,
      title: "Premium Penthouse with City Views",
      location: "Whitefield, Bangalore",
      price: 35000000,
      beds: 3,
      baths: 3,
      area: "2000 sq ft",
      type: "Penthouse",
      image: "/images/property4.jpg",
      featured: true,
      description: "Luxury penthouse with panoramic city views, private terrace, and premium clubhouse amenities.",
      amenities: ["Private Terrace", "Clubhouse", "Gym", "Pool", "Jacuzzi"],
      yearBuilt: 2022,
      parking: 2
    },
    {
      id: 5,
      title: "Spacious Farm House Land",
      location: "Lonavala",
      price: 8500000,
      beds: 0,
      baths: 0,
      area: "2 Acres",
      type: "Farm House Land",
      image: "/images/property5.jpg",
      featured: false,
      description: "Beautiful agricultural land perfect for farm house construction. Peaceful surroundings with mountain views.",
      amenities: ["Mountain View", "Water Well", "Road Access"],
      yearBuilt: null,
      parking: 0
    },
    {
      id: 6,
      title: "Commercial Shop in Mall",
      location: "Pune",
      price: 15000000,
      beds: 0,
      baths: 1,
      area: "800 sq ft",
      type: "Commercial Shop",
      image: "/images/property6.jpg",
      featured: true,
      description: "Prime commercial shop in reputed shopping mall. High footfall area with great business potential.",
      amenities: ["Mall Location", "Parking", "Security", "AC"],
      yearBuilt: 2019,
      parking: 0
    },
    {
      id: 7,
      title: "R Zone Residential Plot",
      location: "Hyderabad",
      price: 5500000,
      beds: 0,
      baths: 0,
      area: "1200 sq ft",
      type: "R Zone Land",
      image: "/images/property7.jpg",
      featured: false,
      description: "Residential plot in approved R Zone. Clear title with all necessary approvals for construction.",
      amenities: ["Approved Layout", "Road Access", "Water Connection"],
      yearBuilt: null,
      parking: 0
    },
    {
      id: 8,
      title: "Independent Floor in Society",
      location: "Gurgaon",
      price: 18000000,
      beds: 3,
      baths: 2,
      area: "1350 sq ft",
      type: "Independent Floor",
      image: "/images/property8.jpg",
      featured: true,
      description: "Beautiful independent floor in gated society with separate entrance and private amenities.",
      amenities: ["Private Entrance", "Park", "Security", "Power Backup"],
      yearBuilt: 2020,
      parking: 1
    },
    {
      id: 9,
      title: "Luxury Villa with Private Pool",
      location: "Goa",
      price: 32000000,
      beds: 4,
      baths: 4,
      area: "3500 sq ft",
      type: "Villa",
      image: "/images/property9.jpg",
      featured: true,
      description: "Stunning luxury villa with private swimming pool, landscaped garden, and modern interiors.",
      amenities: ["Private Pool", "Garden", "Maid Room", "Security"],
      yearBuilt: 2021,
      parking: 3
    },
    {
      id: 10,
      title: "Agriculture Land with Irrigation",
      location: "Nashik",
      price: 3500000,
      beds: 0,
      baths: 0,
      area: "5 Acres",
      type: "Agriculture Land",
      image: "/images/property10.jpg",
      featured: false,
      description: "Fertile agriculture land with irrigation facilities. Suitable for various crops and farming.",
      amenities: ["Irrigation", "Well", "Storage Shed"],
      yearBuilt: null,
      parking: 0
    },
    {
      id: 11,
      title: "High Street Commercial Shop",
      location: "Chennai",
      price: 22000000,
      beds: 0,
      baths: 1,
      area: "600 sq ft",
      type: "Commercial Shop",
      image: "/images/property11.jpg",
      featured: true,
      description: "Prime location commercial shop on high street. Excellent visibility and customer footfall.",
      amenities: ["High Street", "Parking", "AC", "Storage"],
      yearBuilt: 2017,
      parking: 0
    },
    {
      id: 12,
      title: "Compact 1BHK Apartment",
      location: "Noida",
      price: 6500000,
      beds: 1,
      baths: 1,
      area: "650 sq ft",
      type: "Apartment",
      image: "/images/property12.jpg",
      featured: false,
      description: "Compact and well-designed 1BHK apartment perfect for singles or couples. Ready to move in.",
      amenities: ["Clubhouse", "Security", "Park", "Power Backup"],
      yearBuilt: 2022,
      parking: 1
    }
  ];

  const propertyTypes = [
    'All Types',
    'Apartment',
    'Independent House',
    'Villa',
    'Floor',
    'Independent Floor',
    'Commercial Shop',
    'Agriculture Land',
    'Farm House Land',
    'R Zone Land'
  ];

  const locations = [
    'All Locations',
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Pune',
    'Goa',
    'Gurgaon',
    'Noida',
    'Lonavala',
    'Nashik'
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = !priceRange || (
      priceRange === '0-50' && property.price <= 5000000 ||
      priceRange === '50-100' && property.price > 5000000 && property.price <= 10000000 ||
      priceRange === '100-500' && property.price > 10000000 && property.price <= 50000000 ||
      priceRange === '500+' && property.price > 50000000
    );
    const matchesType = !propertyType || propertyType === 'All Types' || property.type === propertyType;
    const matchesLocation = !location || location === 'All Locations' || property.location.includes(location);
    
    return matchesSearch && matchesPrice && matchesType && matchesLocation;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'area-high':
        return parseInt(b.area) - parseInt(a.area);
      case 'latest':
      default:
        return b.id - a.id;
    }
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
    alert(`Payment Successful! Our executive will contact you soon. Payment ID: ${paymentId}`);
    setShowPaymentModal(false);
    setSelectedProperty(null);
  };

  const handlePaymentFailure = (error: string) => {
    alert(`Payment Failed: ${error}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Browse Properties</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover your perfect property from our extensive collection
          </p>
        </div>
      </section>

      {/* Advanced Filters */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <input 
                type="text" 
                placeholder="Search properties, locations, amenities..." 
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Property Type */}
            <select 
              className="p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Location */}
            <select 
              className="p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            {/* Price Range */}
            <select 
              className="p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
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

          {/* Secondary Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
            <div className="text-gray-600">
              Found <span className="font-bold text-purple-600">{sortedProperties.length}</span> properties
            </div>
            <div className="flex gap-4">
              <select 
                className="p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Sort by: Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="area-high">Area: Large to Small</option>
              </select>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange('');
                  setPropertyType('');
                  setLocation('');
                  setSortBy('latest');
                }}
                className="bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="container mx-auto px-4 py-8">
        {sortedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProperties.map(property => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {property.featured && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-black/50 px-3 py-1 rounded-full text-sm">
                      {property.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2 flex items-center text-sm">
                    📍 {property.location}
                  </p>
                  <p className="text-xl font-bold text-purple-600 mb-3">{formatPrice(property.price)}</p>
                  
                  <div className="flex justify-between text-gray-500 text-sm mb-3">
                    {property.beds > 0 && <span>🛏️ {property.beds} Bed</span>}
                    {property.baths > 0 && <span>🚿 {property.baths} Bath</span>}
                    <span>📐 {property.area}</span>
                  </div>

                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{property.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{property.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => handleBuyNow(property)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition"
                  >
                    🛒 Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No properties found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search criteria or clear filters</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setPriceRange('');
                setPropertyType('');
                setLocation('');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {sortedProperties.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
              Load More Properties
            </button>
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
              <p className="text-gray-600 text-sm mb-2">📐 {selectedProperty.area}</p>
              <p className="text-xl font-bold text-purple-600">{formatPrice(selectedProperty.price)}</p>
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
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Can't Find Your Dream Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our property experts help you find the perfect match based on your requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
              📞 Call Expert: +91-9876543210
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition">
              💬 Get Custom Recommendations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseProperties;