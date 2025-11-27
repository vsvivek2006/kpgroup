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
  Building,
  TrendingUp
} from "lucide-react";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    propertyType: "",
    budget: "",
    location: "",
    beds: "",
    baths: ""
  });
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set());
  const propertiesPerPage = 12;

  // Property Types
  const propertyTypes = [
    "Apartment",
    "Independent House",
    "Villa",
    "Floor",
    "Independent Floor",
    "Commercial Shop",
    "Agriculture Land",
    "Farm House Land",
    "R Zone Land"
  ];

  // Budget Ranges
  const budgetRanges = [
    "Up to ₹50L",
    "₹50L - ₹1Cr",
    "₹1Cr - ₹2Cr",
    "₹2Cr - ₹5Cr",
    "Above ₹5Cr"
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

  // Bathroom Options
  const bathOptions = ["Any", "1", "2", "3", "4+"];

  // Sample Properties Data
  const sampleProperties = [
    {
      id: 1,
      title: "Luxury 3BHK Apartment",
      location: "Sector 45, Gurgaon",
      price: "₹85,50,000",
      pricePerSqft: "₹7,500/sq.ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      beds: 3,
      baths: 2,
      area: "1140 sq.ft",
      type: "Apartment",
      featured: true,
      urgent: false,
      favorite: false
    },
    {
      id: 2,
      title: "Modern 4BHK Villa",
      location: "DLF Phase 5, Gurgaon",
      price: "₹2.5 Cr",
      pricePerSqft: "₹12,000/sq.ft",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
      beds: 4,
      baths: 3,
      area: "2080 sq.ft",
      type: "Villa",
      featured: true,
      urgent: true,
      favorite: false
    },
    {
      id: 3,
      title: "Premium Office Space",
      location: "Cyber City, Gurgaon",
      price: "₹1.2 Cr",
      pricePerSqft: "₹8,500/sq.ft",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
      beds: 0,
      baths: 2,
      area: "1411 sq.ft",
      type: "Commercial Shop",
      featured: true,
      urgent: false,
      favorite: false
    },
    {
      id: 4,
      title: "2BHK Budget Apartment",
      location: "Sohna Road, Gurgaon",
      price: "₹45,00,000",
      pricePerSqft: "₹6,200/sq.ft",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      beds: 2,
      baths: 2,
      area: "725 sq.ft",
      type: "Apartment",
      featured: true,
      urgent: true,
      favorite: false
    },
    {
      id: 5,
      title: "Agriculture Land",
      location: "Outskirts, Gurgaon",
      price: "₹75,00,000",
      pricePerSqft: "₹1,500/sq.yd",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      beds: 0,
      baths: 0,
      area: "5000 sq.yd",
      type: "Agriculture Land",
      featured: false,
      urgent: false,
      favorite: false
    },
    {
      id: 6,
      title: "Independent House",
      location: "MG Road, Gurgaon",
      price: "₹3.2 Cr",
      pricePerSqft: "₹15,000/sq.ft",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400&h=300&fit=crop",
      beds: 5,
      baths: 4,
      area: "2133 sq.ft",
      type: "Independent House",
      featured: true,
      urgent: true,
      favorite: false
    },
    {
      id: 7,
      title: "Spacious 3BHK Floor",
      location: "South City, Gurgaon",
      price: "₹95,00,000",
      pricePerSqft: "₹8,200/sq.ft",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      beds: 3,
      baths: 3,
      area: "1158 sq.ft",
      type: "Floor",
      featured: false,
      urgent: false,
      favorite: false
    },
    {
      id: 8,
      title: "R Zone Land Plot",
      location: "Sector 56, Gurgaon",
      price: "₹1.8 Cr",
      pricePerSqft: "₹3,200/sq.yd",
      image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=400&h=300&fit=crop",
      beds: 0,
      baths: 0,
      area: "5625 sq.yd",
      type: "R Zone Land",
      featured: true,
      urgent: false,
      favorite: false
    },
    {
      id: 9,
      title: "Luxury 2BHK Apartment",
      location: "Golf Course Road, Gurgaon",
      price: "₹1.1 Cr",
      pricePerSqft: "₹9,500/sq.ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      beds: 2,
      baths: 2,
      area: "1157 sq.ft",
      type: "Apartment",
      featured: false,
      urgent: true,
      favorite: false
    },
    {
      id: 10,
      title: "Farm House Land",
      location: "Outskirts, Gurgaon",
      price: "₹2.8 Cr",
      pricePerSqft: "₹4,500/sq.yd",
      image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=400&h=300&fit=crop",
      beds: 0,
      baths: 0,
      area: "6222 sq.yd",
      type: "Farm House Land",
      featured: true,
      urgent: false,
      favorite: false
    },
    {
      id: 11,
      title: "Independent Floor",
      location: "Sector 45, Gurgaon",
      price: "₹65,00,000",
      pricePerSqft: "₹7,100/sq.ft",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      beds: 2,
      baths: 2,
      area: "915 sq.ft",
      type: "Independent Floor",
      featured: false,
      urgent: false,
      favorite: false
    },
    {
      id: 12,
      title: "Commercial Shop",
      location: "MG Road, Gurgaon",
      price: "₹85,00,000",
      pricePerSqft: "₹12,000/sq.ft",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
      beds: 0,
      baths: 1,
      area: "708 sq.ft",
      type: "Commercial Shop",
      featured: true,
      urgent: true,
      favorite: false
    }
  ];

  // Initialize properties
  useEffect(() => {
    setProperties(sampleProperties);
    setFilteredProperties(sampleProperties);
  }, []);

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
        const price = property.price;
        const budget = filters.budget;
        
        if (budget === "Up to ₹50L") return price.includes("L") && parseInt(price.replace('₹', '').replace('L', '')) <= 50;
        if (budget === "₹50L - ₹1Cr") return (price.includes("L") && parseInt(price.replace('₹', '').replace('L', '')) > 50) || 
          (price.includes("Cr") && parseFloat(price.replace('₹', '').replace('Cr', '')) < 1);
        if (budget === "₹1Cr - ₹2Cr") return price.includes("Cr") && parseFloat(price.replace('₹', '').replace('Cr', '')) >= 1 && 
          parseFloat(price.replace('₹', '').replace('Cr', '')) < 2;
        if (budget === "₹2Cr - ₹5Cr") return price.includes("Cr") && parseFloat(price.replace('₹', '').replace('Cr', '')) >= 2 && 
          parseFloat(price.replace('₹', '').replace('Cr', '')) < 5;
        if (budget === "Above ₹5Cr") return price.includes("Cr") && parseFloat(price.replace('₹', '').replace('Cr', '')) >= 5;
        
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

    // Baths Filter
    if (filters.baths && filters.baths !== "Any") {
      const baths = filters.baths === "4+" ? 4 : parseInt(filters.baths);
      filtered = filtered.filter(property => 
        filters.baths === "4+" ? property.baths >= 4 : property.baths === baths
      );
    }

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parsePrice(a.price) - parsePrice(b.price);
        case "price-high":
          return parsePrice(b.price) - parsePrice(a.price);
        case "newest":
          return b.id - a.id;
        case "oldest":
          return a.id - b.id;
        default:
          return 0;
      }
    });

    setFilteredProperties(filtered);
    setCurrentPage(1);
  }, [filters, sortBy, properties]);

  const parsePrice = (price) => {
    if (price.includes("Cr")) {
      return parseFloat(price.replace('₹', '').replace('Cr', '')) * 10000000;
    } else {
      return parseFloat(price.replace('₹', '').replace('L', '')) * 100000;
    }
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
      baths: ""
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
    const message = `I'm interested in ${property.title} at ${property.location} for ${property.price}`;
    window.open(`https://wa.me/919717157006?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919717157006';
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
        <title>Properties for Sale - KPrealtors Group | Find Your Dream Property</title>
        <meta name="description" content="Browse premium properties for sale in Gurgaon. Apartments, villas, commercial spaces, and land. Find your dream property with KPrealtors Group." />
        <meta name="keywords" content="properties for sale, buy property, apartments, villas, commercial property, land, gurgaon properties" />
      </Helmet>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Properties for Sale
            </h1>
            <p className="text-xl lg:text-2xl text-green-100 mb-8">
              Discover {properties.length}+ premium properties in prime locations
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Home, label: "Properties", value: "5000+" },
                { icon: Building, label: "Types", value: "9+" },
                { icon: Star, label: "Verified", value: "100%" },
                { icon: TrendingUp, label: "Happy Clients", value: "1000+" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-green-100 text-sm">{stat.label}</div>
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
                <Filter className="h-5 w-5 mr-2 text-green-600" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </h2>
              
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? 'bg-green-500 text-white' : 'text-gray-600'}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? 'bg-green-500 text-white' : 'text-gray-600'}`}
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
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
              <select
                value={filters.budget}
                onChange={(e) => handleFilterChange("budget", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {bedOptions.map((beds) => (
                  <option key={beds} value={beds}>{beds} {beds !== "Any" && "Beds"}</option>
                ))}
              </select>
            </div>

            {/* Baths */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Baths</label>
              <select
                value={filters.baths}
                onChange={(e) => handleFilterChange("baths", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {bathOptions.map((baths) => (
                  <option key={baths} value={baths}>{baths} {baths !== "Any" && "Baths"}</option>
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
            Showing {currentProperties.length} of {filteredProperties.length} properties
          </p>
          <p className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Properties Grid/List */}
        {currentProperties.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more properties.</p>
            <button
              onClick={clearFilters}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
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
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                        {property.type}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="text-2xl font-bold text-gray-900 mb-1">{property.price}</div>
                    <div className="text-sm text-gray-600 mb-4">{property.pricePerSqft}</div>

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
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleWhatsApp(property)}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 text-sm"
                      >
                        <MessageCircle className="h-3 w-3" />
                        <span>Enquire</span>
                      </button>
                      <button
                        onClick={handleCall}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 text-sm"
                      >
                        <Phone className="h-3 w-3" />
                        <span>Call</span>
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
                            ? "bg-green-600 text-white"
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-green-100 mb-6">
            Our expert agents will help you find the perfect property that matches your requirements.
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
              onClick={() => handleWhatsApp({ title: "Custom Property Search", location: "Any" })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Custom Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;