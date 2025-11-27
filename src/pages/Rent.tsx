import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Search, 
  Filter, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Star, 
  Grid3X3,
  List,
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageCircle,
  Home,
  Calendar,
  CreditCard,
  Shield,
  CheckCircle
} from "lucide-react";

const Rent = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    propertyType: "",
    budget: "",
    location: "",
    beds: "",
    furnished: ""
  });
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set());
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const propertiesPerPage = 12;

  // Property Types for Rent
  const propertyTypes = [
    "Apartment",
    "Independent House",
    "Villa",
    "Floor",
    "Independent Floor",
    "Commercial Shop",
    "Studio Apartment",
    "PG/Hostel"
  ];

  // Budget Ranges for Rent
  const budgetRanges = [
    "Up to ₹10K",
    "₹10K - ₹20K",
    "₹20K - ₹35K",
    "₹35K - ₹50K",
    "Above ₹50K"
  ];

  // Popular Locations
  const popularLocations = [
    "Sector 45, Gurgaon",
    "DLF Phase 5, Gurgaon",
    "Cyber City, Gurgaon",
    "Sohna Road, Gurgaon",
    "MG Road, Gurgaon",
    "South City, Gurgaon",
    "Sector 56, Gurgaon",
    "Golf Course Road, Gurgaon"
  ];

  // Bedroom Options
  const bedOptions = ["Any", "1", "2", "3", "4", "5+"];

  // Furnished Options
  const furnishedOptions = [
    { value: "", label: "Any" },
    { value: "fully", label: "Fully Furnished" },
    { value: "semi", label: "Semi Furnished" },
    { value: "unfurnished", label: "Unfurnished" }
  ];

  // Generate 40 sample rental properties
  useEffect(() => {
    const sampleProperties = generateSampleProperties();
    setProperties(sampleProperties);
    setFilteredProperties(sampleProperties);
  }, []);

  const generateSampleProperties = () => {
    const properties = [];
    const types = propertyTypes;
    const locations = popularLocations;
    const furnishedTypes = ["fully", "semi", "unfurnished"];
    
    for (let i = 1; i <= 40; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      const furnished = furnishedTypes[Math.floor(Math.random() * furnishedTypes.length)];
      const isCommercial = type.includes("Commercial");
      
      properties.push({
        id: i,
        title: `${getPropertyTitle(type, i)}`,
        location: location,
        rent: getRandomRent(type),
        deposit: getRandomDeposit(),
        image: getPropertyImage(type),
        beds: isCommercial ? 0 : Math.floor(Math.random() * 4) + 1,
        baths: isCommercial ? Math.floor(Math.random() * 2) + 1 : Math.floor(Math.random() * 3) + 1,
        area: getRandomArea(type),
        type: type,
        furnished: furnished,
        availableFrom: getRandomDate(),
        featured: Math.random() > 0.7,
        urgent: Math.random() > 0.8,
        favorite: false,
        postedDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
      });
    }
    return properties;
  };

  const getPropertyTitle = (type, id) => {
    const prefixes = {
      "Apartment": ["Luxury", "Modern", "Premium", "Spacious", "Elegant"],
      "Independent House": ["Beautiful", "Grand", "Elegant", "Modern", "Traditional"],
      "Villa": ["Luxury", "Modern", "Premium", "Spacious", "Elegant"],
      "Floor": ["Complete", "Independent", "Spacious", "Well-Maintained"],
      "Independent Floor": ["Modern", "Spacious", "Well-Ventilated"],
      "Commercial Shop": ["Prime Location", "High Street", "Shopping Complex"],
      "Studio Apartment": ["Compact", "Modern", "Well-Designed"],
      "PG/Hostel": ["Comfortable", "Safe", "Well-Maintained"]
    };

    const prefix = prefixes[type][Math.floor(Math.random() * prefixes[type].length)];
    const bhk = type.includes("Apartment") || type.includes("House") || type.includes("Villa") || type.includes("Floor")
      ? `${Math.floor(Math.random() * 3) + 1}BHK ` : "";
    
    return `${prefix} ${bhk}${type} ${id}`;
  };

  const getRandomRent = (type) => {
    const ranges = {
      "Apartment": [8000, 45000],
      "Independent House": [15000, 80000],
      "Villa": [30000, 120000],
      "Floor": [10000, 40000],
      "Independent Floor": [12000, 50000],
      "Commercial Shop": [20000, 100000],
      "Studio Apartment": [6000, 25000],
      "PG/Hostel": [5000, 15000]
    };

    const [min, max] = ranges[type];
    const rent = Math.floor(Math.random() * (max - min + 1)) + min;
    return `₹${rent.toLocaleString()}/month`;
  };

  const getRandomDeposit = () => {
    const deposits = ["1 Month", "2 Months", "3 Months", "4 Months", "5 Months"];
    return deposits[Math.floor(Math.random() * deposits.length)];
  };

  const getRandomArea = (type) => {
    const ranges = {
      "Apartment": [400, 1200],
      "Independent House": [800, 2500],
      "Villa": [1200, 4000],
      "Floor": [600, 1500],
      "Independent Floor": [700, 1800],
      "Commercial Shop": [300, 1500],
      "Studio Apartment": [200, 600],
      "PG/Hostel": [100, 400]
    };

    const [min, max] = ranges[type];
    const area = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${area} sq.ft`;
  };

  const getPropertyImage = (type) => {
    const imageMap = {
      "Apartment": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      "Independent House": "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400&h=300&fit=crop",
      "Villa": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
      "Floor": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      "Independent Floor": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      "Commercial Shop": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
      "Studio Apartment": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      "PG/Hostel": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop"
    };
    return imageMap[type];
  };

  const getRandomDate = () => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + Math.floor(Math.random() * 30) + 1);
    return futureDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  // Filter properties
  useEffect(() => {
    let filtered = [...properties];

    // Property Type Filter
    if (filters.propertyType) {
      filtered = filtered.filter(property => property.type === filters.propertyType);
    }

    // Budget Filter
    if (filters.budget) {
      filtered = filtered.filter(property => {
        const rent = parseInt(property.rent.replace(/[₹,]/g, ''));
        const budget = filters.budget;
        
        if (budget === "Up to ₹10K") return rent <= 10000;
        if (budget === "₹10K - ₹20K") return rent > 10000 && rent <= 20000;
        if (budget === "₹20K - ₹35K") return rent > 20000 && rent <= 35000;
        if (budget === "₹35K - ₹50K") return rent > 35000 && rent <= 50000;
        if (budget === "Above ₹50K") return rent > 50000;
        
        return true;
      });
    }

    // Location Filter
    if (filters.location) {
      filtered = filtered.filter(property => property.location === filters.location);
    }

    // Beds Filter
    if (filters.beds && filters.beds !== "Any") {
      const beds = filters.beds === "5+" ? 5 : parseInt(filters.beds);
      filtered = filtered.filter(property => 
        filters.beds === "5+" ? property.beds >= 5 : property.beds === beds
      );
    }

    // Furnished Filter
    if (filters.furnished) {
      filtered = filtered.filter(property => property.furnished === filters.furnished);
    }

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rent-low":
          return parseRent(a.rent) - parseRent(b.rent);
        case "rent-high":
          return parseRent(b.rent) - parseRent(a.rent);
        case "newest":
          return new Date(b.postedDate) - new Date(a.postedDate);
        case "oldest":
          return new Date(a.postedDate) - new Date(b.postedDate);
        default:
          return 0;
      }
    });

    setFilteredProperties(filtered);
    setCurrentPage(1);
  }, [filters, sortBy, properties]);

  const parseRent = (rent) => {
    return parseInt(rent.replace(/[₹,]/g, ''));
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      propertyType: "",
      budget: "",
      location: "",
      beds: "",
      furnished: ""
    });
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const handleWhatsApp = (property) => {
    const message = `I'm interested in renting ${property.title} at ${property.location} for ${property.rent}`;
    window.open(`https://wa.me/919717157006?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919717157006';
  };

  const handleBookVisit = (property) => {
    setSelectedProperty(property);
    // Here you can open a modal or redirect to booking page
    const message = `I want to book a site visit for ${property.title} at ${property.location}. Available date: ${property.availableFrom}`;
    window.open(`https://wa.me/919717157006?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleRentNow = (property) => {
    setSelectedProperty(property);
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    // Razorpay Payment Integration
    const options = {
      key: "rzp_live_RWTw2PBAFCZz9j", // Your Razorpay Live Key
      amount: parseRent(selectedProperty.rent) * 100, // Amount in paise
      currency: "INR",
      name: "KPrealtors Group",
      description: `Security Deposit for ${selectedProperty.title}`,
      image: "/logo.png",
      handler: function(response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        setShowPaymentModal(false);
        // Send confirmation via WhatsApp
        const message = `Payment confirmed for ${selectedProperty.title}. Payment ID: ${response.razorpay_payment_id}. Please proceed with the agreement.`;
        window.open(`https://wa.me/919717157006?text=${encodeURIComponent(message)}`, '_blank');
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "+919999999999"
      },
      notes: {
        address: "KPrealtors Group Office"
      },
      theme: {
        color: "#059669"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const activeFiltersCount = Object.values(filters).filter(value => value !== "").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Rent Properties - KPrealtors Group | Find Rental Homes & Apartments</title>
        <meta name="description" content="Find 1000+ rental properties in Gurgaon. Apartments, houses, villas, and commercial spaces for rent. Best deals with KPrealtors Group." />
        <meta name="keywords" content="rent properties, rental homes, apartments for rent, house for rent, gurgaon rental properties" />
      </Helmet>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Find Your Rental Home
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 mb-8">
              Browse {properties.length}+ verified rental properties in prime locations
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Home, label: "Rental Properties", value: "1000+" },
                { icon: Calendar, label: "Available Now", value: "40+" },
                { icon: Star, label: "Verified", value: "100%" },
                { icon: Shield, label: "Secure Booking", value: "24/7" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-purple-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-purple-600" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </h2>
              
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? 'bg-purple-500 text-white' : 'text-gray-600'}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? 'bg-purple-500 text-white' : 'text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="rent-low">Rent: Low to High</option>
                <option value="rent-high">Rent: High to Low</option>
              </select>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select
                value={filters.propertyType}
                onChange={(e) => handleFilterChange("propertyType", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rent</label>
              <select
                value={filters.budget}
                onChange={(e) => handleFilterChange("budget", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Any Budget</option>
                {budgetRanges.map((budget) => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">All Locations</option>
                {popularLocations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Beds */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Beds</label>
              <select
                value={filters.beds}
                onChange={(e) => handleFilterChange("beds", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {bedOptions.map((beds) => (
                  <option key={beds} value={beds}>{beds} {beds !== "Any" && "Beds"}</option>
                ))}
              </select>
            </div>

            {/* Furnished */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Furnishing</label>
              <select
                value={filters.furnished}
                onChange={(e) => handleFilterChange("furnished", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {furnishedOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {currentProperties.length} of {filteredProperties.length} rental properties
          </p>
          <p className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Properties Grid/List */}
        {currentProperties.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No rental properties found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more properties.</p>
            <button
              onClick={clearFilters}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className={`${
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
            }`}>
              {currentProperties.map((property) => (
                <div
                  key={property.id}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  {/* Property Image */}
                  <div className={`relative ${
                    viewMode === "list" ? "w-1/3" : "h-48"
                  }`}>
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {property.featured && (
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Featured
                        </span>
                      )}
                      {property.urgent && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Urgent
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => toggleFavorite(property.id)}
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300"
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.has(property.id) ? "text-red-500 fill-current" : "text-gray-600"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Property Details */}
                  <div className={`p-4 sm:p-6 ${viewMode === "list" ? "w-2/3" : ""}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-bold">
                        {property.type}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="text-2xl font-bold text-gray-900 mb-1">{property.rent}</div>
                    <div className="text-sm text-gray-600 mb-2">
                      Security: {property.deposit} • {property.furnished.replace("fully", "Fully").replace("semi", "Semi").replace("unfurnished", "Unfurnished")}
                    </div>
                    <div className="text-sm text-green-600 mb-4 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Available from {property.availableFrom}
                    </div>

                    {/* Property Features */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-4">
                      {property.beds > 0 && (
                        <div className="flex items-center text-gray-600">
                          <Bed className="h-4 w-4 mr-1" />
                          <span className="text-sm">{property.beds} Beds</span>
                        </div>
                      )}
                      <div className="flex items-center text-gray-600">
                        <Bath className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Square className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.area}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => handleBookVisit(property)}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 text-sm"
                      >
                        <Calendar className="h-3 w-3" />
                        <span>Visit</span>
                      </button>
                      <button
                        onClick={() => handleRentNow(property)}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 text-sm"
                      >
                        <CreditCard className="h-3 w-3" />
                        <span>Rent Now</span>
                      </button>
                      <button
                        onClick={() => handleWhatsApp(property)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 text-sm"
                      >
                        <MessageCircle className="h-3 w-3" />
                        <span>Enquire</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Show first page, last page, and pages around current page
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`px-3 py-2 rounded-lg font-medium ${
                          currentPage === pageNumber
                            ? "bg-purple-600 text-white"
                            : "border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return <span key={pageNumber} className="px-2">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Rental Booking</h3>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h4 className="font-semibold text-gray-900">{selectedProperty.title}</h4>
              <p className="text-sm text-gray-600">{selectedProperty.location}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-gray-900">{selectedProperty.rent}</span>
                <span className="text-sm text-gray-600">Security: {selectedProperty.deposit}</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Verified property with complete documentation
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Secure payment via Razorpay
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Instant booking confirmation
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <CreditCard className="h-4 w-4" />
                <span>Pay Security</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Help Finding Rental Properties?
          </h2>
          <p className="text-xl text-purple-100 mb-6">
            Our rental experts will help you find the perfect home that matches your budget and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call +91-97171 57006</span>
            </button>
            <button
              onClick={() => handleWhatsApp({ title: "Rental Property Search", location: "Any" })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Rental Assistance</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;