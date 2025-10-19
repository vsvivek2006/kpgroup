import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Code, 
  ShoppingCart,
  Video,
  Instagram,
  Youtube,
  MapPin,
  MessageCircle,
  Mail,
  Users,
  Zap,
  ArrowRight,
  Star,
  Rocket,
  Target,
  Crown,
  Sparkles,
  Check,
  Monitor,
  Settings,
  Search,
  Facebook,
  MousePointer,
  Brush,
  Phone
} from 'lucide-react';

interface ServiceFeature {
  text: string;
}

interface ServiceBenefit {
  text: string;
}

interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  popular?: boolean;
  badge?: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: Service[];
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('website');

  // ✅ SERVICES ARRAY MATCHING PRICING PAGE STRUCTURE
  const serviceCategories: ServiceCategory[] = [
    {
      id: 'website',
      title: 'Website Development',
      icon: <Rocket className="h-12 w-12" />,
      description: 'Professional website development services for all business types',
      services: [
        {
          icon: <Monitor className="h-8 w-8" />,
          name: 'Real Estate Website Development',
          description: 'Professional real estate websites with property listings and advanced search functionality',
          features: [
            { text: 'Responsive Design for all devices' },
            { text: 'Property Listing Module' },
            { text: 'Advanced Search & Filtering' },
            { text: 'Contact Form Integration' },
            { text: 'SEO Optimization' },
            { text: 'Domain and Hosting Setup' },
            { text: 'SSL Certificate Security' },
            { text: 'Maintenance & Support' }
          ],
          benefits: [
            { text: 'Showcase properties professionally' },
            { text: 'Generate quality leads' },
            { text: 'Mobile-responsive design' },
            { text: 'SEO optimized for visibility' }
          ],
          popular: true,
          badge: 'MOST POPULAR'
        },
        {
          icon: <ShoppingCart className="h-8 w-8" />,
          name: 'E-commerce Website Development',
          description: 'Complete e-commerce solutions with secure payment gateways and inventory management',
          features: [
            { text: 'Shopping Cart & Checkout' },
            { text: 'Product Management System' },
            { text: 'Secure Payment Gateway' },
            { text: 'Inventory Management' },
            { text: 'Order Tracking System' },
            { text: 'Customer Account Management' },
            { text: 'Multi-vendor Marketplace Options' },
            { text: 'SEO Optimized Structure' }
          ],
          benefits: [
            { text: 'Sell products online 24/7' },
            { text: 'Secure payment processing' },
            { text: 'Easy inventory management' },
            { text: 'Scalable business growth' }
          ]
        },
        {
          icon: <Code className="h-8 w-8" />,
          name: 'News Portal Website Development',
          description: 'Dynamic news websites with content management and publishing systems',
          features: [
            { text: 'Content Management System' },
            { text: 'Author & Editor Login' },
            { text: 'Newsletter Subscription' },
            { text: 'Google News Integration' },
            { text: 'Breaking News Ticker' },
            { text: 'Image and Video Support' },
            { text: 'Post Scheduling' },
            { text: 'SEO Optimization' }
          ],
          benefits: [
            { text: 'Easy content publishing' },
            { text: 'Multiple author support' },
            { text: 'News distribution' },
            { text: 'Monetization ready' }
          ]
        },
        {
          icon: <Users className="h-8 w-8" />,
          name: 'NGO Website Development',
          description: 'Professional NGO websites with donation integration and volunteer management',
          features: [
            { text: 'Donation Page Integration' },
            { text: 'Volunteer Registration Forms' },
            { text: 'Event Management System' },
            { text: 'Gallery & Portfolio' },
            { text: 'News & Blog Section' },
            { text: 'Social Media Integration' },
            { text: 'Contact Management' },
            { text: 'SEO Optimization' }
          ],
          benefits: [
            { text: 'Accept online donations' },
            { text: 'Manage volunteers efficiently' },
            { text: 'Showcase impact stories' },
            { text: 'Build community trust' }
          ]
        }
      ]
    },
    {
      id: 'seo',
      title: 'SEO Services',
      icon: <Search className="h-12 w-12" />,
      description: 'Complete SEO optimization services to rank #1 on Google and drive organic traffic',
      services: [
        {
          icon: <TrendingUp className="h-8 w-8" />,
          name: 'Professional SEO Services',
          description: 'Comprehensive SEO strategies to improve your Google rankings and organic visibility',
          features: [
            { text: 'Comprehensive Keyword Research (30+ keywords)' },
            { text: 'On-Page SEO Optimization' },
            { text: 'Technical SEO Audit & Fixes' },
            { text: 'Quality Backlink Building' },
            { text: 'Content Optimization Strategy' },
            { text: 'Monthly Ranking Progress Reports' },
            { text: 'Google Analytics & Search Console Setup' },
            { text: 'Local SEO Optimization' }
          ],
          benefits: [
            { text: 'Higher Google rankings' },
            { text: 'Increased organic traffic' },
            { text: 'Better conversion rates' },
            { text: 'Long-term business growth' }
          ],
          popular: true,
          badge: 'BEST FOR GROWTH'
        },
        {
          icon: <MapPin className="h-8 w-8" />,
          name: 'Local SEO Services',
          description: 'Optimize your business for local searches and Google Maps visibility',
          features: [
            { text: 'Google Business Profile Optimization' },
            { text: 'Local Citation Building' },
            { text: 'Local Keyword Research' },
            { text: 'Review Management Strategy' },
            { text: 'Local Directory Submissions' },
            { text: 'Map Pack Optimization' },
            { text: 'Localized Content Creation' },
            { text: 'Neighborhood Targeting' }
          ],
          benefits: [
            { text: 'Appear in local searches' },
            { text: 'Increase walk-in customers' },
            { text: 'Build local reputation' },
            { text: 'Beat local competition' }
          ]
        }
      ]
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      icon: <Instagram className="h-12 w-12" />,
      description: 'Complete social media management and marketing solutions for business growth',
      services: [
        {
          icon: <Facebook className="h-8 w-8" />,
          name: 'Social Media Management',
          description: 'Complete social media management across all platforms with creative content',
          features: [
            { text: '15 Creative Design Posts Monthly' },
            { text: '2 Professional Videos/Reels' },
            { text: 'Platform Management: Instagram, Meta, Twitter(X)' },
            { text: 'Trending Hashtags & Keyword Research' },
            { text: 'Content Calendar & Strategy' },
            { text: 'Audience Engagement Management' },
            { text: 'Performance Analytics Report' },
            { text: 'Monthly Growth Strategy' }
          ],
          benefits: [
            { text: 'Increase brand awareness' },
            { text: 'Drive website traffic' },
            { text: 'Generate quality leads' },
            { text: 'Build community engagement' }
          ],
          popular: true,
          badge: 'MOST POPULAR'
        },
        {
          icon: <Video className="h-8 w-8" />,
          name: 'Video Content Creation',
          description: 'Professional video content creation for social media and marketing campaigns',
          features: [
            { text: 'Creative Script Writing' },
            { text: 'Professional Video Editing' },
            { text: 'Motion Graphics & Animation' },
            { text: 'Color Correction & Grading' },
            { text: 'Professional Sound Design' },
            { text: 'Multiple Format Export' },
            { text: 'Social Media Optimization' },
            { text: 'Quick Turnaround' }
          ],
          benefits: [
            { text: 'Engaging video content' },
            { text: 'Professional quality' },
            { text: 'Social media ready' },
            { text: 'Increased engagement' }
          ]
        },
        {
          icon: <Users className="h-8 w-8" />,
          name: 'Influencer Marketing',
          description: 'Connect with relevant influencers to boost your brand awareness and reach',
          features: [
            { text: 'Influencer Research & Selection' },
            { text: 'Campaign Strategy Development' },
            { text: 'Content Coordination & Management' },
            { text: 'Performance Tracking & Analytics' },
            { text: 'ROI Analysis & Reporting' },
            { text: 'Relationship Management' },
            { text: 'Campaign Optimization' },
            { text: 'Result Measurement' }
          ],
          benefits: [
            { text: 'Increased brand awareness' },
            { text: 'Targeted audience reach' },
            { text: 'Authentic promotions' },
            { text: 'Measurable results' }
          ]
        }
      ]
    },
    {
      id: 'ads',
      title: 'Google Ads & Marketing',
      icon: <MousePointer className="h-12 w-12" />,
      description: 'Professional Google Ads management and digital advertising solutions',
      services: [
        {
          icon: <Target className="h-8 w-8" />,
          name: 'Google Ads Management',
          description: 'Professional Google Ads campaigns for maximum ROI and conversions',
          features: [
            { text: 'Campaign Strategy & Complete Setup' },
            { text: 'Keyword Research & Analysis' },
            { text: 'Ad Copy Creation & Optimization' },
            { text: 'Conversion Tracking Setup' },
            { text: 'Daily Budget Management' },
            { text: 'A/B Testing of Ads & Landing Pages' },
            { text: 'Monthly Performance Reports' },
            { text: 'ROI Optimization & Monitoring' }
          ],
          benefits: [
            { text: 'Immediate website traffic' },
            { text: 'Targeted audience reach' },
            { text: 'Measurable ROI' },
            { text: 'Quick lead generation' }
          ],
          popular: true,
          badge: 'HIGH ROI'
        },
        {
          icon: <Mail className="h-8 w-8" />,
          name: 'Email Marketing',
          description: 'Professional email marketing campaigns for customer engagement and retention',
          features: [
            { text: 'Custom Email Template Design' },
            { text: 'List Segmentation & Management' },
            { text: 'Automation Setup & Configuration' },
            { text: 'Performance Analytics Dashboard' },
            { text: 'A/B Testing Implementation' },
            { text: 'Monthly Campaign Management' },
            { text: 'Newsletter Design' },
            { text: 'Lead Nurturing Sequences' }
          ],
          benefits: [
            { text: 'Direct customer communication' },
            { text: 'High ROI' },
            { text: 'Automated campaigns' },
            { text: 'Measurable results' }
          ]
        }
      ]
    },
    {
      id: 'quick',
      title: 'Quick Digital Services',
      icon: <Zap className="h-12 w-12" />,
      description: 'Quick setup services to establish your digital presence immediately',
      services: [
        {
          icon: <Brush className="h-8 w-8" />,
          name: 'Logo Design & Branding',
          description: 'Professional logo design with complete brand identity kit',
          features: [
            { text: '3 Initial Logo Concepts' },
            { text: 'Unlimited Revisions Until Satisfaction' },
            { text: 'Vector File Delivery' },
            { text: 'All Source Files' },
            { text: 'Brand Color Palette' },
            { text: 'Typography Guide' },
            { text: 'Brand Style Guide' },
            { text: '3-5 Day Delivery' }
          ],
          benefits: [
            { text: 'Professional brand identity' },
            { text: 'Memorable logo design' },
            { text: 'Consistent branding' },
            { text: 'Multiple concepts' }
          ]
        },
        {
          icon: <MapPin className="h-8 w-8" />,
          name: 'Google Business Profile',
          description: 'Get found on Google Maps and local searches with optimized business listing',
          features: [
            { text: 'Google Business Profile Creation' },
            { text: 'Category & Description Optimization' },
            { text: 'Professional Photos Upload & Management' },
            { text: 'Service/Product Listings Setup' },
            { text: 'Review Management System Setup' },
            { text: 'Google Map Integration' },
            { text: 'Local SEO Optimization' },
            { text: 'Regular Post Updates' }
          ],
          benefits: [
            { text: 'Appear in local searches' },
            { text: 'Increase walk-in customers' },
            { text: 'Build trust with reviews' },
            { text: 'Free business listing' }
          ]
        },
        {
          icon: <MessageCircle className="h-8 w-8" />,
          name: 'Business WhatsApp Setup',
          description: 'Professional Business WhatsApp with product catalog and automated responses',
          features: [
            { text: 'Business WhatsApp API Setup' },
            { text: 'Complete Business Profile Creation' },
            { text: 'Product Catalog Listings (10 products included)' },
            { text: 'Quick Reply Messages Setup' },
            { text: 'Away Message Configuration' },
            { text: 'Business Hours Setup' },
            { text: 'Greeting Message Setup' },
            { text: 'Customer Support System' }
          ],
          benefits: [
            { text: 'Professional customer communication' },
            { text: 'Product showcase capability' },
            { text: 'Automated responses' },
            { text: 'Enhanced customer service' }
          ]
        },
        {
          icon: <Youtube className="h-8 w-8" />,
          name: 'YouTube Channel Creation',
          description: 'Professional YouTube channel setup with branding and optimization',
          features: [
            { text: 'Complete Channel Branding & Artwork' },
            { text: 'Strategic Channel Description & SEO' },
            { text: 'Section Setup & Content Organization' },
            { text: 'Professional Channel Trailer Creation' },
            { text: 'Basic Monetization Setup' },
            { text: 'Video Upload Strategy Planning' },
            { text: 'Custom URL Setup' },
            { text: 'Audience Growth Strategy' }
          ],
          benefits: [
            { text: 'Video content platform' },
            { text: 'Monetization opportunities' },
            { text: 'Brand authority building' },
            { text: 'Engaging content delivery' }
          ]
        }
      ]
    }
  ];

  const whatsappUrl = 'https://wa.me/919521281509?text=Hello%20Earningsharthi,%20I%20want%20to%20discuss';

  const currentCategory = serviceCategories.find(cat => cat.id === activeTab) || serviceCategories[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* ✅ SEO OPTIMIZED META TAGS */}
      <Helmet>
        <title>Digital Marketing Services | Website Development, SEO, Social Media - Earningsharthi</title>
        <meta
          name="description"
          content="Professional digital marketing services: Website Development, SEO Services, Social Media Management, Google Ads. Grow your business with Earningsharthi's expert solutions."
        />
        <meta
          name="keywords"
          content="digital marketing services, website development, SEO services, social media management, Google Ads, e-commerce development, branding services, Earningsharthi"
        />
        <link rel="canonical" href="https://earningsharthi.in/services" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 2%, transparent 20%),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1%, transparent 25%),
                             radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 1%, transparent 15%)`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="h-4 w-4" />
            50+ PROFESSIONAL SERVICES AVAILABLE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Digital
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Marketing Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Complete digital marketing solutions to accelerate your business growth and online presence. 
            From websites to social media, we've got you covered.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Check className="h-6 w-6" />, text: "50+ Services Available" },
              { icon: <Star className="h-6 w-6" />, text: "Expert Certified Team" },
              { icon: <Zap className="h-6 w-6" />, text: "Guaranteed Results" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-blue-500/30 backdrop-blur-sm px-4 py-3 rounded-2xl">
                <div className="text-yellow-400">
                  {item.icon}
                </div>
                <span className="text-blue-100 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-1">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all whitespace-nowrap ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="text-center mb-12">
            <div className="text-blue-600 mb-4 flex justify-center">
              {currentCategory.icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentCategory.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentCategory.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentCategory.services.map((service, serviceIndex) => (
              <div 
                key={serviceIndex} 
                className={`relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 ${
                  service.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Crown className="h-3 w-3 fill-current" />
                      <span>{service.badge}</span>
                    </span>
                  </div>
                )}
                
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features Section */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                    <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-700 flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Section */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                    Key Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span 
                        key={benefitIndex} 
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {benefit.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/pricing"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 text-center shadow-lg hover:shadow-xl"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={`${whatsappUrl}%20${encodeURIComponent(service.name)}%20service`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 text-center shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Free Consultation</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6 text-white">
            <Sparkles className="h-4 w-4" />
            FREE DIGITAL MARKETING CONSULTATION
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a FREE 30-minute consultation with our digital marketing experts. 
            We'll analyze your business and recommend the perfect strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${whatsappUrl}%20the%20right%20service%20for%20my%20business`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>💬 Get Free Consultation</span>
            </a>
            <a
              href="tel:+919521281509"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="h-6 w-6" />
              <span>📞 Call: +91 9521281509</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Choose from our wide range of professional services and start your digital journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>View All Pricing Plans</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`${whatsappUrl}%20starting%20a%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start a Project</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;