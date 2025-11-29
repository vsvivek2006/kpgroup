import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle, Star, MessageCircle, Phone, MapPin, Bed, Bath, Square, Heart, Search, Filter, Home as HomeIcon, User, Plus, CreditCard, BookOpen } from "lucide-react";
import PaymentButton from "../components/PaymentButton";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Hero Slides for Real Estate
  const heroSlides = [
    {
      title: "Find Your Dream Property",
      highlight: "Best Deals in Market",
      tagline: "Discover premium properties at unbeatable prices with expert guidance",
      features: ["5000+ Properties", "Verified Listings", "Expert Agents", "Quick Processing"],
      bg: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      cta: "Browse Properties"
    },
    {
      title: "Sell Your Property Fast",
      highlight: "Maximum Value Guaranteed",
      tagline: "Get the best price for your property with our marketing expertise",
      features: ["Free Valuation", "Professional Photography", "Digital Marketing", "Quick Sale"],
      bg: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      cta: "Sell Now"
    },
    {
      title: "Premium Properties",
      highlight: "Luxury Living Awaits",
      tagline: "Exclusive collection of luxury apartments, villas, and commercial spaces",
      features: ["Luxury Apartments", "Modern Villas", "Commercial Spaces", "Investment Properties"],
      bg: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
      cta: "View Luxury"
    }
  ];

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
    "South City, Gurgaon"
  ];

  // Featured Properties with better images
  const featuredProperties = [
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
      featured: true,
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
    }
  ];

  // ✅ UPDATED PRICING PACKAGES - New Affordable Pricing
  const pricingPackages = [
    {
      name: "STARTER PACKAGE",
      price: "₹299",
      originalPrice: "₹599",
      duration: "one-time",
      description: "Perfect for individual property sellers",
      features: [
        "10 Property Submissions",
        "Basic Amenities Setup",
        "Nearest Location Tags", 
        "Additional Information",
        "Image Gallery (10 photos)",
        "30 Days Listing Validity"
      ],
      notIncluded: [
        "Featured Property",
        "Top Property Placement",
        "Urgent Property Tag",
        "Property Plan Upload"
      ],
      popular: false,
      color: "from-green-500 to-green-600"
    },
    {
      name: "BASIC PACKAGE",
      price: "₹799", 
      originalPrice: "₹1599",
      duration: "one-time",
      description: "Great for regular property listings",
      features: [
        "20 Property Submissions",
        "5 Featured Properties",
        "Basic Amenities Setup",
        "Nearest Location Tags",
        "Additional Information", 
        "Image Gallery (20 photos)",
        "60 Days Listing Validity"
      ],
      notIncluded: [
        "Top Property Placement",
        "Urgent Property Tag", 
        "Property Plan Upload"
      ],
      popular: true,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "PRO PACKAGE",
      price: "₹1199",
      originalPrice: "₹2399",
      duration: "monthly", 
      description: "Complete solution for professional agents",
      features: [
        "50 Property Submissions",
        "20 Featured Properties",
        "10 Top Property Placements", 
        "10 Urgent Property Tags",
        "Advanced Amenities Setup",
        "Nearest Location Tags",
        "Property Plan Upload",
        "Additional Information",
        "Image Gallery (50 photos)",
        "Priority Support",
        "90 Days Listing Validity"
      ],
      notIncluded: [],
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: "🏠",
      title: "5000+ Properties",
      description: "Wide range of verified properties across all budgets"
    },
    {
      icon: "🤝", 
      title: "Trusted Agents",
      description: "Certified and experienced real estate professionals"
    },
    {
      icon: "💰",
      title: "Best Prices", 
      description: "Guaranteed best deals and transparent pricing"
    },
    {
      icon: "⚡",
      title: "Quick Processing",
      description: "Fast documentation and hassle-free transactions" 
    }
  ];

  // Process Steps
  const processSteps = [
    {
      number: "01",
      title: "Search Property", 
      description: "Browse through our extensive property listings",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Visit & Select",
      description: "Schedule site visits and select your favorite", 
      icon: "📍"
    },
    {
      number: "03",
      title: "Documentation",
      description: "Complete all legal formalities with our experts",
      icon: "📝"
    },
    {
      number: "04", 
      title: "Move In",
      description: "Get possession and start your new life",
      icon: "🎉"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Mehra",
      property: "3BHK in Sector 45", 
      text: "Found my dream home within budget. KPrealtors made the entire process smooth and transparent.",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      property: "2BHK in Sohna Road",
      text: "Excellent service! The team helped me sell my apartment quickly at a great price.",
      rating: 5
    },
    {
      name: "Amit Verma",
      property: "Office in Cyber City", 
      text: "Professional approach and deep market knowledge. Highly recommended for commercial properties.",
      rating: 5
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = (message = "Hello KPrealtors! I'm interested in property services.") => {
    window.open(`https://wa.me/919717157006?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919717157006';
  };

  const toggleFavorite = (id) => {
    // Handle favorite toggle
    console.log(`Toggled favorite for property ${id}`);
  };

  const handleBookInfo = (propertyTitle) => {
    handleWhatsApp(`I want to book a site visit for ${propertyTitle}. Please share available dates.`);
  };

  const handleSearch = () => {
    const filters = [];
    if (selectedPropertyType) filters.push(`Type: ${selectedPropertyType}`);
    if (selectedBudget) filters.push(`Budget: ${selectedBudget}`);
    if (selectedLocation) filters.push(`Location: ${selectedLocation}`);
    
    const message = `I'm looking for properties with:\n${filters.join('\n')}`;
    handleWhatsApp(message);
  };

  // ✅ Payment success handler
  const handlePaymentSuccess = (paymentId) => {
    console.log('Payment Successful! ID:', paymentId);
    // Auto redirect to success page handled in PaymentButton
  };

  // ✅ Payment failure handler  
  const handlePaymentFailure = (error) => {
    console.error('Payment Failed:', error);
    // Auto redirect to failed page handled in PaymentButton
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>KPrealtors Group - Find Your Dream Property | Buy Sell Rent Properties</title>
        <meta name="description" content="KPrealtors Group - Premium real estate services. Buy, sell, rent properties in Gurgaon. 5000+ verified listings. Expert agents. Best prices guaranteed." />
        <meta name="keywords" content="real estate, property, buy property, sell property, gurgaon properties, apartments, villas, commercial property" />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative min-h-screen sm:h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ background: slide.bg }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content */}
                  <div className="text-white text-center lg:text-left">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                      <Star className="h-4 w-4 mr-2 text-yellow-400" />
                      <span className="text-sm font-semibold">Trusted by 1000+ Clients</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                      <span className="block text-yellow-400 text-2xl sm:text-3xl lg:text-4xl mt-3">
                        {slide.highlight}
                      </span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-white/90 leading-relaxed">
                      {slide.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6 lg:mb-8">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-white/80 justify-center lg:justify-start">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-400 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                      <button
                        onClick={() => handleWhatsApp(`I'm interested in ${slide.title} - ${slide.highlight}`)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-4 lg:px-8 lg:py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
                      >
                        <span>🚀 {slide.cta}</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                      <button
                        onClick={handleCall}
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-4 lg:px-8 lg:py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Call +91-97171 57006</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Content - Property Search */}
                  <div className="hidden lg:block relative">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                      <h3 className="text-2xl font-bold text-white mb-6">Find Your Property</h3>
                      <div className="space-y-4">
                        {/* Property Type */}
                        <select 
                          value={selectedPropertyType}
                          onChange={(e) => setSelectedPropertyType(e.target.value)}
                          className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70"
                        >
                          <option value="">Select Property Type</option>
                          {propertyTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>

                        {/* Budget Range */}
                        <select 
                          value={selectedBudget}
                          onChange={(e) => setSelectedBudget(e.target.value)}
                          className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70"
                        >
                          <option value="">Select Budget Range</option>
                          {budgetRanges.map((budget) => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>

                        {/* Location */}
                        <select 
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70"
                        >
                          <option value="">Select Location</option>
                          {popularLocations.map((location) => (
                            <option key={location} value={location}>{location}</option>
                          ))}
                        </select>

                        <button 
                          onClick={handleSearch}
                          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <Search className="h-5 w-5" />
                          <span>Search Properties</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* === PROPERTY SEARCH FILTERS === */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-green-600" />
                Advanced Property Search
              </h3>
              <button 
                onClick={() => {
                  setSelectedPropertyType("");
                  setSelectedBudget("");
                  setSelectedLocation("");
                }}
                className="text-sm text-gray-600 hover:text-green-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select 
                  value={selectedPropertyType}
                  onChange={(e) => setSelectedPropertyType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">All Types</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select 
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
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
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">All Locations</option>
                  {popularLocations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button 
                  onClick={handleSearch}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Search className="h-4 w-4" />
                  <span>Search Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FEATURED PROPERTIES === */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔥 FEATURED PROPERTIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Premium <span className="text-green-600">Properties</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked selection of the best properties in prime locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Property Image */}
                <div className="relative h-48 sm:h-56">
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
                    <Heart className={`h-4 w-4 ${property.favorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                </div>

                {/* Property Details */}
                <div className="p-4 sm:p-6">
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
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center text-gray-600">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.beds} Beds</span>
                    </div>
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
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button
                      onClick={() => handleBookInfo(property.title)}
                      className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 text-sm"
                    >
                      <BookOpen className="h-3 w-3" />
                      <span>Book Info</span>
                    </button>
                    <button
                      onClick={() => handleWhatsApp(`I'm interested in ${property.title} at ${property.location} for ${property.price}`)}
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

          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-flex items-center bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View All Properties
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* === PRICING PACKAGES === */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💰 AFFORDABLE LISTING PACKAGES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-purple-600">Package</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Budget-friendly packages to list and promote your properties effectively
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br ${pkg.color} rounded-2xl sm:rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-lg opacity-80 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg px-3 py-1 inline-block mb-6">
                    <span className="text-sm font-semibold">
                      Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
                    </span>
                  </div>
                  
                  <p className="text-white/90 text-base mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                    {pkg.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start opacity-50">
                        <div className="h-5 w-5 text-red-300 mr-3 flex-shrink-0 mt-0.5">❌</div>
                        <span className="text-white/70 text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {/* ✅ Clean Payment Button - No Test Buttons */}
                    <PaymentButton
                      amount={parseInt(pkg.price.replace('₹', '').replace(',', '')) * 100}
                      packageName={pkg.name}
                      packageDescription={pkg.description}
                      onSuccess={handlePaymentSuccess}
                      onFailure={handlePaymentFailure}
                    >
                      💳 Pay {pkg.price}
                    </PaymentButton>
                    
                    <button
                      onClick={() => handleWhatsApp(`I want more information about ${pkg.name} package for ${pkg.price}`)}
                      className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
                    >
                      💬 Get Info on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Payment Security Note */}
          <div className="text-center mt-12 bg-green-50 rounded-2xl p-6 border border-green-200">
            <div className="flex items-center justify-center mb-3">
              <div className="text-green-600 text-2xl mr-2">🔒</div>
              <h3 className="text-lg font-bold text-green-800">Secure Payment Processing</h3>
            </div>
            <p className="text-green-700 text-sm max-w-2xl mx-auto">
              All payments are securely processed through Razorpay. We support UPI, Credit/Debit Cards, Net Banking, and Wallets. 
              Your financial information is protected with bank-level security.
            </p>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why <span className="text-yellow-400">KPrealtors</span>?
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              We provide end-to-end real estate solutions with transparency and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl lg:text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to find or sell your property
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-green-500 -z-10"></div>
                )}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 lg:p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">{step.icon}</div>
                  <div className="text-xl lg:text-2xl font-bold text-blue-600 mb-2">{step.number}</div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="text-purple-600">Success Stories</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients who found their dream properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-xl">{testimonial.name}</p>
                  <p className="text-green-600 text-base">{testimonial.property}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Ready to Find Your <span className="text-yellow-400">Dream Property</span>?
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-white/90">
            Get started with KPrealtors Group and experience seamless property transactions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsApp("I'm ready to buy/sell property. Please connect with me.")}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start Now</span>
            </button>
            <button
              onClick={handleCall}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call +91-97171 57006</span>
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex justify-around items-center py-3">
          <Link to="/" className="flex flex-col items-center text-green-600">
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/buy" className="flex flex-col items-center text-gray-600">
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1">Buy</span>
          </Link>
          <Link to="/sell" className="flex flex-col items-center text-gray-600">
            <Plus className="h-5 w-5" />
            <span className="text-xs mt-1">Sell</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-gray-600">
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
          <Link to="/shortlisted" className="flex flex-col items-center text-gray-600">
            <Heart className="h-5 w-5" />
            <span className="text-xs mt-1">Saved</span>
          </Link>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => handleWhatsApp()}
        className="fixed bottom-20 lg:bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Home;
