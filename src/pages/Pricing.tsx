import React, { useState } from 'react';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  Video, 
  Mail, 
  MessageCircle, 
  CreditCard, 
  Crown, 
  Rocket, 
  Target, 
  Award, 
  Sparkles,
  Phone
} from 'lucide-react';
import { Helmet } from 'react-helmet';

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Type Definitions
interface PlanFeature {
  text: string;
}

interface Plan {
  name: string;
  price: string;
  originalPrice: string;
  currentPrice: number;
  popular: boolean;
  badge: string | null;
  features: string[];
  duration?: string;
}

interface ServiceCategory {
  category: string;
  plans: Plan[];
}

interface QuickService {
  name: string;
  price: string;
  originalPrice: string;
  currentPrice: number;
  description: string;
  icon: React.ReactNode;
}

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface BenefitItem {
  icon: React.ReactNode;
  text: string;
}

const Pricing: React.FC = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState<boolean>(false);
  const [paymentService, setPaymentService] = useState<string>("");
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [originalAmount, setOriginalAmount] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('website');

  const RAZORPAY_KEY_ID = 'rzp_live_RW4McqKd7aRTOo';
  const WHATSAPP_NUMBER = '916398799013'; // Updated WhatsApp number
  const PHONE_NUMBER = '+91-6398799013'; // Updated phone number

  // Payment Handler
  const handlePayment = async (amount: number, serviceName: string): Promise<void> => {
    try {
      const amountInPaise = Math.round(amount * 100);
      
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: amountInPaise,
        currency: 'INR',
        name: 'Earningsharthi Digital Marketing',
        description: `${serviceName} - Advance Payment`,
        handler: function(response: any) {
          alert(`🎉 Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          const message = `Payment Successful for ${serviceName}. Payment ID: ${response.razorpay_payment_id}`;
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '+919999999999'
        },
        notes: {
          service: serviceName
        },
        theme: {
          color: '#2563eb'
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment Error:', error);
      alert('❌ Payment failed. Please try again or contact support.');
    }
  };

  const openPaymentModal = (serviceName: string, currentPrice: number, originalPrice: number): void => {
    const discountedPrice = Math.floor(currentPrice * 0.95); // 5% extra discount
    setPaymentAmount(discountedPrice);
    setOriginalAmount(currentPrice);
    setPaymentService(serviceName);
    setIsPaymentOpen(true);
  };

  // Website Development Services
  const websiteServices: ServiceCategory[] = [
    {
      category: "Real Estate Website Development",
      plans: [
        {
          name: 'BASIC',
          price: '₹9,999',
          originalPrice: '₹22,000',
          currentPrice: 9999,
          popular: false,
          badge: null,
          features: [
            'Responsive Design',
            'Basic SEO',
            'Website Optimization',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Social Media and Whatsapp Integration',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        },
        {
          name: 'STANDARD',
          price: '₹16,999',
          originalPrice: '₹35,000',
          currentPrice: 16999,
          popular: false,
          badge: null,
          features: [
            'Responsive Design',
            'Standard SEO',
            'Website Optimization',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Social Media and Whatsapp Integration',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        },
        {
          name: 'PROFESSIONAL',
          price: '₹21,999',
          originalPrice: '₹45,000',
          currentPrice: 21999,
          popular: true,
          badge: 'MOST POPULAR',
          features: [
            'Responsive Design',
            'Advance SEO',
            'Website Optimization',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Social Media and Whatsapp Integration',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        },
        {
          name: 'PREMIUM',
          price: '₹39,999',
          originalPrice: '₹75,000',
          currentPrice: 39999,
          popular: false,
          badge: 'PREMIUM',
          features: [
            'Responsive Design',
            'Premium SEO',
            'Website Optimization',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Social Media and Whatsapp Integration',
            'Maintenance & Support',
            'Property Listing Module',
            'Keyword Research',
            'Monthly Report'
          ]
        }
      ]
    },
    {
      category: "E-commerce Website Development",
      plans: [
        {
          name: 'BASIC',
          price: '₹4,999',
          originalPrice: '₹12,000',
          currentPrice: 4999,
          popular: false,
          badge: null,
          features: [
            'Basic Template',
            'Basic SEO',
            'Upto 10 Products',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Shopping Cart and Checkout',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        },
        {
          name: 'STANDARD',
          price: '₹14,999',
          originalPrice: '₹30,000',
          currentPrice: 14999,
          popular: false,
          badge: null,
          features: [
            'Responsive Design',
            'Standard SEO',
            'Upto 50 Products',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Shopping cart and Checkout',
            'Maintenance & Support',
            'Monthly Report',
            'Analytics Integration',
            'Keyword Research'
          ]
        },
        {
          name: 'PROFESSIONAL',
          price: '₹28,999',
          originalPrice: '₹55,000',
          currentPrice: 28999,
          popular: true,
          badge: 'POPULAR',
          features: [
            'Responsive Design',
            'Advance SEO',
            'Upto 200 products',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Product Review and Rating',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        },
        {
          name: 'PREMIUM',
          price: '₹51,999',
          originalPrice: '₹95,000',
          currentPrice: 51999,
          popular: false,
          badge: 'PREMIUM',
          features: [
            'Responsive Design',
            'Premium SEO',
            'Unlimited Products',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Multi Vendor & Marketplace Option',
            'Maintenance & Support',
            'Order & Inventory Management',
            'Keyword Research',
            'Monthly Report'
          ]
        }
      ]
    },
    {
      category: "News Portal Website Development",
      plans: [
        {
          name: 'BASIC',
          price: '₹4,999',
          originalPrice: '₹12,000',
          currentPrice: 4999,
          popular: false,
          badge: null,
          features: [
            'Basic Template',
            'Basic SEO',
            'Breaking News Ticker',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Image and Video Post Support',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        },
        {
          name: 'STANDARD',
          price: '₹9,999',
          originalPrice: '₹22,000',
          currentPrice: 9999,
          popular: true,
          badge: 'POPULAR',
          features: [
            'Responsive Design',
            'Standard SEO',
            'Post scheduling & Management',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Google news Integration',
            'Maintenance & Support',
            'Monthly Report',
            'Analytics Integration',
            'Keyword Research'
          ]
        },
        {
          name: 'PROFESSIONAL',
          price: '₹16,999',
          originalPrice: '₹35,000',
          currentPrice: 16999,
          popular: false,
          badge: null,
          features: [
            'Responsive Design',
            'Advance SEO',
            'Author & Editor Login',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Newsletter Subscription',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        }
      ]
    }
  ];

  // Other Website Services
  const otherWebsiteServices: ServiceCategory[] = [
    {
      category: "NGO Website Development",
      plans: [
        {
          name: 'BASIC',
          price: '₹4,999',
          originalPrice: '₹12,000',
          currentPrice: 4999,
          popular: true,
          badge: 'POPULAR',
          features: [
            'Responsive Design',
            'Basic SEO',
            'Website Optimization',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Volunteer Registration form',
            'Maintenance & Support',
            'Monthly Report',
            'Analytics Integration',
            'Keyword Research'
          ]
        },
        {
          name: 'STANDARD',
          price: '₹14,999',
          originalPrice: '₹30,000',
          currentPrice: 14999,
          popular: false,
          badge: null,
          features: [
            'Responsive Design',
            'Standard SEO',
            'Author & Editor Login',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Donation Page Integration',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        }
      ]
    },
    {
      category: "Shopify Website Development",
      plans: [
        {
          name: 'BASIC',
          price: '₹5,500',
          originalPrice: '₹12,000',
          currentPrice: 5500,
          popular: true,
          badge: 'POPULAR',
          features: [
            'Responsive Design',
            'Basic SEO',
            'Shipping Setup',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Shipping Cart & Checkout Setup',
            'Maintenance & Support',
            'Monthly Report',
            'Analytics Integration',
            'Keyword Research'
          ]
        },
        {
          name: 'STANDARD',
          price: '₹11,000',
          originalPrice: '₹25,000',
          currentPrice: 11000,
          popular: false,
          badge: null,
          features: [
            'Responsive Design',
            'Standard SEO',
            'Collection & Categories Setup',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Social Media Integration',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        }
      ]
    },
    {
      category: "Information Website Development",
      plans: [
        {
          name: 'BASIC',
          price: '₹4,999',
          originalPrice: '₹12,000',
          currentPrice: 4999,
          popular: true,
          badge: 'POPULAR',
          features: [
            'Responsive Design',
            'Basic SEO',
            'Basic Template',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Contact Form and Whatsapp Chat',
            'Maintenance & Support',
            'Monthly Report',
            'Analytics Integration',
            'Keyword Research'
          ]
        },
        {
          name: 'STANDARD',
          price: '₹7,999',
          originalPrice: '₹18,000',
          currentPrice: 7999,
          popular: false,
          badge: null,
          features: [
            'Responsive Design',
            'Standard SEO',
            'Custom Layout',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Social Media Integration',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        }
      ]
    },
    {
      category: "School / College Website Development",
      plans: [
        {
          name: 'STANDARD',
          price: '₹2,199',
          originalPrice: '₹8,000',
          currentPrice: 2199,
          popular: true,
          badge: 'BEST VALUE',
          features: [
            'Responsive Design',
            'Standard SEO',
            'Custom Layout',
            'Domain and Hosting',
            'Secure SSL certificate',
            'Social Media Integration',
            'Maintenance & Support',
            'Analytics Integration',
            'Keyword Research',
            'Monthly Report'
          ]
        }
      ]
    }
  ];

  // SEO Services
  const seoServices: Plan[] = [
    {
      name: 'BASIC',
      price: '₹4,999',
      originalPrice: '₹12,000',
      currentPrice: 4999,
      popular: true,
      badge: 'POPULAR',
      duration: 'per month',
      features: [
        'Basic website Audit',
        'Basic SEO',
        'Content Optimization',
        '1 Keyword Research',
        'Technical SEO',
        'Backlink Strategy',
        'Local SEO',
        'Maintenance & Support',
        'Monthly Report'
      ]
    },
    {
      name: 'STANDARD',
      price: '₹11,000',
      originalPrice: '₹25,000',
      currentPrice: 11000,
      popular: false,
      badge: null,
      duration: 'per month',
      features: [
        'Basic website Audit',
        'Basic SEO',
        'Content Optimization',
        '15 Keyword Research',
        'Technical SEO',
        'Backlink Strategy',
        'Local SEO',
        'Maintenance & Support',
        'Monthly Report'
      ]
    },
    {
      name: 'PROFESSIONAL',
      price: '₹22,000',
      originalPrice: '₹45,000',
      currentPrice: 22000,
      popular: false,
      badge: 'PREMIUM',
      duration: 'per month',
      features: [
        'Basic website Audit',
        'Basic SEO',
        'Content Optimization',
        '30+ Keyword Research',
        'Technical SEO',
        'Backlink Strategy',
        'Local SEO',
        'Maintenance & Support',
        'Monthly Report'
      ]
    }
  ];

  // Social Media Services
  const socialMediaServices: ServiceCategory[] = [
    {
      category: "Social Media Marketing",
      plans: [
        {
          name: 'STARTER',
          price: '₹5,500',
          originalPrice: '₹12,000',
          currentPrice: 5500,
          popular: false,
          badge: null,
          duration: 'Monthly',
          features: [
            'Account Setup and Optimization',
            'Creative Post designs',
            'Reel / Video Content',
            'Story Highlight Design',
            'Content Calendar & Strategy',
            'Hashtag & Caption Writing',
            'Ad campaign',
            'Lead generation',
            'Influencer Collaboration',
            'Community Management'
          ]
        },
        {
          name: 'STANDARD',
          price: '₹11,000',
          originalPrice: '₹22,000',
          currentPrice: 11000,
          popular: false,
          badge: null,
          duration: 'Monthly',
          features: [
            'Account Setup and Optimization',
            'Creative Post designs',
            'Reel / Video Content',
            'Story Highlight Design',
            'Content Calendar & Strategy',
            'Hashtag & Caption Writing',
            'Ad campaign',
            'Basic Lead generation',
            'Influencer Collaboration',
            'Community Management'
          ]
        },
        {
          name: 'PROFESSIONAL',
          price: '₹22,000',
          originalPrice: '₹40,000',
          currentPrice: 22000,
          popular: true,
          badge: 'MOST POPULAR',
          duration: 'Monthly',
          features: [
            'Account Setup and Optimization',
            'Creative Post designs',
            'Reel / Video Content',
            'Story Highlight Design',
            'Content Calendar & Strategy',
            'Hashtag & Caption Writing',
            'Ad campaign',
            'Targeted Lead generation',
            'Influencer Collaboration (Optional)',
            'Community Management'
          ]
        },
        {
          name: 'PREMIUM',
          price: '₹33,000',
          originalPrice: '₹60,000',
          currentPrice: 33000,
          popular: false,
          badge: 'PREMIUM',
          duration: 'Monthly',
          features: [
            'Account Setup and Optimization',
            'Creative Post designs',
            'Reel / Video Content',
            'Story Highlight Design',
            'Content Calendar & Strategy',
            'Hashtag & Caption Writing',
            'Ad campaign',
            'Advanced Lead generation',
            'Influencer Collaboration',
            'Community Management'
          ]
        }
      ]
    },
    {
      category: "Social Media Management",
      plans: [
        {
          name: 'STARTER',
          price: '₹2,500',
          originalPrice: '₹8,000',
          currentPrice: 2500,
          popular: false,
          badge: null,
          duration: 'Monthly',
          features: [
            '1 Platforms Managed',
            'Creative Post designs',
            'Reel / Video Content',
            'Story Highlight Design',
            'Content Calendar & Strategy',
            'Engagement',
            'Ad campaign',
            'Lead generation',
            'Influencer Collaboration',
            'Community Management'
          ]
        },
        {
          name: 'STANDARD',
          price: '₹5,000',
          originalPrice: '₹15,000',
          currentPrice: 5000,
          popular: true,
          badge: 'BEST VALUE',
          duration: 'Monthly',
          features: [
            '2 Platforms managed',
            'Creative Post designs',
            'Reel / Video Content',
            'Story Highlight Design',
            'Content Calendar & Strategy',
            'Hashtag & Caption Writing',
            'Ad campaign',
            'Basic Lead generation',
            'Influencer Collaboration',
            'Community Management'
          ]
        },
        {
          name: 'PROFESSIONAL',
          price: '₹7,500',
          originalPrice: '₹20,000',
          currentPrice: 7500,
          popular: false,
          badge: null,
          duration: 'Monthly',
          features: [
            '3 Platforms Managed',
            'Creative Post designs',
            'Reel / Video Content',
            'Story Highlight Design',
            'Content Calendar & Strategy',
            'Hashtag & Caption Writing',
            'Ad campaign',
            'Targeted Lead generation',
            'Influencer Collaboration (Optional)',
            'Community Management'
          ]
        },
        {
          name: 'PREMIUM',
          price: '₹7,500',
          originalPrice: '₹25,000',
          currentPrice: 7500,
          popular: false,
          badge: 'PREMIUM',
          duration: 'Monthly',
          features: [
            '4 Platforms Managed',
            'Creative Post designs',
            'Reel / Video Content',
            'Story Highlight Design',
            'Content Calendar & Strategy',
            'Hashtag & Caption Writing',
            'Ad campaign',
            'Advanced Lead generation',
            'Influencer Collaboration',
            'Community Management'
          ]
        }
      ]
    }
  ];

  // Quick Services
  const quickServices: QuickService[] = [
    { 
      name: 'Logo Design Service', 
      price: '₹799', 
      originalPrice: '₹2,999',
      currentPrice: 799,
      description: 'Professional logo design with multiple concepts',
      icon: <TrendingUp className="h-6 w-6" />
    },
    { 
      name: 'Google Business Page', 
      price: '₹999', 
      originalPrice: '₹2,999',
      currentPrice: 999,
      description: 'Google My Business listing setup & optimization',
      icon: <Target className="h-6 w-6" />
    },
    { 
      name: 'Business WhatsApp', 
      price: '₹999', 
      originalPrice: '₹2,499',
      currentPrice: 999,
      description: 'Business WhatsApp API setup with catalog',
      icon: <MessageCircle className="h-6 w-6" />
    }
  ];

  // Navigation Tabs
  const tabs: Tab[] = [
    { id: 'website', label: '🌐 Website Development', icon: <Rocket className="h-4 w-4" /> },
    { id: 'seo', label: '🔍 SEO Services', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'social', label: '📱 Social Media', icon: <Users className="h-4 w-4" /> },
    { id: 'quick', label: '⚡ Quick Services', icon: <Zap className="h-4 w-4" /> }
  ];

  // Benefit Items
  const benefitItems: BenefitItem[] = [
    { icon: <Shield className="h-6 w-6" />, text: "30-Day Money Back Guarantee" },
    { icon: <Zap className="h-6 w-6" />, text: "24/7 Priority Support" },
    { icon: <Award className="h-6 w-6" />, text: "Certified Experts" }
  ];

  // Utility Functions
  const calculateDiscount = (currentPrice: number, originalPrice: number): number => {
    return Math.round((1 - currentPrice / originalPrice) * 100);
  };

  const getOriginalPriceNumber = (priceString: string): number => {
    return parseInt(priceString.replace(/[^0-9]/g, ''));
  };

  const scheduleConsultation = (): void => {
    const consultationMessage = `🎯 I want to schedule a Free Digital Marketing Consultation!\n\nPlease share available time slots for a 30-minute video call.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(consultationMessage)}`, '_blank');
  };

  // WhatsApp message function
  const getWhatsAppUrl = (message: string): string => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Digital Marketing Pricing | Website Development from ₹2,199 | Earningsharthi</title>
        <meta
          name="description"
          content="Affordable digital marketing packages: Website Development from ₹2,199, SEO from ₹4,999, Social Media from ₹2,500. 70% OFF + 5% Extra on Advance Payment."
        />
        <meta 
          name="keywords" 
          content="website development price, SEO services cost, social media marketing pricing, e-commerce website cost, digital marketing packages India"
        />
        <link rel="canonical" href="https://earningsharthi.in/pricing" />
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
            SPECIAL OFFER: 70% OFF + 5% EXTRA ON ADVANCE PAYMENT
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Digital Marketing
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Get premium digital marketing services at unbeatable prices. 
            Scale your business with our expert solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefitItems.map((item, index) => (
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

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Website Development Section */}
      {activeTab === 'website' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Website Development
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get stunning, responsive websites that convert visitors into customers
              </p>
            </div>

            {/* Main Website Services */}
            <div className="space-y-16">
              {websiteServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {service.category}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.plans.map((plan, planIndex) => (
                      <div key={planIndex} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                        plan.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200 hover:border-blue-300'
                      } transition-all duration-300 hover:shadow-2xl`}>
                        {plan.popular && plan.badge && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                              <Crown className="h-3 w-3 fill-current" />
                              <span>{plan.badge}</span>
                            </span>
                          </div>
                        )}
                        
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 text-center mb-2">{plan.name}</h4>
                          
                          <div className="text-center mb-6">
                            <div className="flex items-baseline justify-center gap-2">
                              <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                              <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                            </div>
                            <div className="mt-2">
                              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                SAVE {calculateDiscount(plan.currentPrice, getOriginalPriceNumber(plan.originalPrice))}%
                              </span>
                            </div>
                            <div className="mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              Advance: ₹{Math.floor(plan.currentPrice * 0.95).toLocaleString()} (5% OFF)
                            </div>
                          </div>

                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="space-y-3">
                            <button
                              onClick={() => openPaymentModal(`${service.category} - ${plan.name}`, plan.currentPrice, getOriginalPriceNumber(plan.originalPrice))}
                              className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                                plan.popular
                                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900'
                                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                              }`}
                            >
                              💳 Pay Advance - Save 5%
                            </button>
                            <a
                              href={getWhatsAppUrl(`Hello Earningsharthi, I want ${service.category} - ${plan.name} plan`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl font-medium transition-colors block text-center"
                            >
                              💬 WhatsApp for Details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Other Website Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherWebsiteServices.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
                    <div className="text-center mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {service.category}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                      {service.plans.map((plan, planIndex) => (
                        <div key={planIndex} className={`bg-white rounded-2xl p-6 border-2 ${
                          plan.popular ? 'border-yellow-400' : 'border-gray-200'
                        } hover:shadow-lg transition-shadow`}>
                          {plan.popular && plan.badge && (
                            <div className="inline-block bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3">
                              {plan.badge}
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>
                            <div className="text-right">
                              <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
                                <span className="text-sm text-gray-400 line-through">{plan.originalPrice}</span>
                              </div>
                              <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mt-1">
                                SAVE {calculateDiscount(plan.currentPrice, getOriginalPriceNumber(plan.originalPrice))}%
                              </div>
                            </div>
                          </div>

                          <ul className="space-y-2 mb-4">
                            {plan.features.slice(0, 6).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="space-y-2">
                            <button
                              onClick={() => openPaymentModal(`${service.category} - ${plan.name}`, plan.currentPrice, getOriginalPriceNumber(plan.originalPrice))}
                              className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                                plan.popular
                                  ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                              }`}
                            >
                              💳 Pay Advance
                            </button>
                            <a
                              href={getWhatsAppUrl(`Hello Earningsharthi, I want ${service.category} - ${plan.name} plan`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center text-sm"
                            >
                              💬 Get Quote
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEO Services Section */}
      {activeTab === 'seo' && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional SEO Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Boost your Google rankings and drive organic traffic with our expert SEO strategies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {seoServices.map((service, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                  service.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200 hover:border-blue-300'
                } transition-all duration-300 hover:shadow-2xl`}>
                  {service.popular && service.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Crown className="h-3 w-3 fill-current" />
                        <span>{service.badge}</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{service.name}</h3>
                    <p className="text-gray-500 text-center text-sm mb-6">{service.duration}</p>
                    
                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold text-blue-600">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                      </div>
                      <div className="mt-2">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          SAVE {calculateDiscount(service.currentPrice, getOriginalPriceNumber(service.originalPrice))}%
                        </span>
                      </div>
                      <div className="mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Advance: ₹{Math.floor(service.currentPrice * 0.95).toLocaleString()} (5% OFF)
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <button
                        onClick={() => openPaymentModal(`SEO Service - ${service.name}`, service.currentPrice, getOriginalPriceNumber(service.originalPrice))}
                        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                          service.popular
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900'
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                        }`}
                      >
                        💳 Pay Advance - Save 5%
                      </button>
                      <a
                        href={getWhatsAppUrl(`Hello Earningsharthi, I want SEO Service - ${service.name} plan`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-xl font-medium transition-colors block text-center"
                      >
                        💬 WhatsApp for Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Media Services Section */}
      {activeTab === 'social' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Social Media Marketing & Management
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Grow your social presence, engage your audience, and drive conversions
              </p>
            </div>

            <div className="space-y-16">
              {socialMediaServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {service.category}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.plans.map((plan, planIndex) => (
                      <div key={planIndex} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                        plan.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200 hover:border-purple-300'
                      } transition-all duration-300 hover:shadow-2xl`}>
                        {plan.popular && plan.badge && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                              <Crown className="h-3 w-3 fill-current" />
                              <span>{plan.badge}</span>
                            </span>
                          </div>
                        )}
                        
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 text-center mb-2">{plan.name}</h4>
                          <p className="text-gray-500 text-center text-sm mb-4">{plan.duration}</p>
                          
                          <div className="text-center mb-6">
                            <div className="flex items-baseline justify-center gap-2">
                              <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
                              <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                            </div>
                            <div className="mt-2">
                              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                SAVE {calculateDiscount(plan.currentPrice, getOriginalPriceNumber(plan.originalPrice))}%
                              </span>
                            </div>
                            <div className="mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              Advance: ₹{Math.floor(plan.currentPrice * 0.95).toLocaleString()} (5% OFF)
                            </div>
                          </div>

                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="space-y-3">
                            <button
                              onClick={() => openPaymentModal(`${service.category} - ${plan.name}`, plan.currentPrice, getOriginalPriceNumber(plan.originalPrice))}
                              className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                                plan.popular
                                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900'
                                  : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
                              }`}
                            >
                              💳 Pay Advance - Save 5%
                            </button>
                            <a
                              href={getWhatsAppUrl(`Hello Earningsharthi, I want ${service.category} - ${plan.name} plan`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl font-medium transition-colors block text-center"
                            >
                              💬 WhatsApp for Details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quick Services Section */}
      {activeTab === 'quick' && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Digital Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get your digital presence started with our quick and affordable services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {quickServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                      <div className="flex items-baseline space-x-2 mt-1">
                        <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    SAVE {calculateDiscount(service.currentPrice, getOriginalPriceNumber(service.originalPrice))}%
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => openPaymentModal(service.name, service.currentPrice, getOriginalPriceNumber(service.originalPrice))}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-semibold transition-all"
                    >
                      💳 Pay Advance - Save 5%
                    </button>
                    <a
                      href={getWhatsAppUrl(`Hello Earningsharthi, I want ${service.name} service`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl font-medium transition-colors block text-center"
                    >
                      💬 Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Consultation Card */}
            <div className="max-w-2xl mx-auto mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Sparkles className="h-4 w-4" />
                FREE DIGITAL MARKETING CONSULTATION
              </div>
              <h3 className="text-2xl font-bold mb-4">Not Sure Which Plan to Choose?</h3>
              <p className="text-green-100 mb-6 text-lg">
                Get a FREE 30-minute consultation with our digital marketing experts. 
                We'll analyze your business and recommend the perfect strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scheduleConsultation}
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Schedule Free Call
                </button>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
                  className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 500+ satisfied clients who've scaled their business with Earningsharthi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl("Hello Earningsharthi, I want to discuss digital marketing services for my business")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>💬 WhatsApp for 70% OFF</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="h-6 w-6" />
              <span>📞 Call: {PHONE_NUMBER}</span>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-blue-200">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Certified Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {isPaymentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border-2 border-blue-300 animate-pop-in">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
                  Advance Payment - 5% OFF
                </h3>
                <p className="text-blue-600 font-semibold text-sm mt-1">{paymentService}</p>
              </div>
              <button 
                onClick={() => setIsPaymentOpen(false)} 
                className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl border-2 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                    ₹{paymentAmount.toLocaleString()}
                  </div>
                  <div className="font-semibold text-green-700 text-sm md:text-base">
                    After 5% Advance Discount
                  </div>
                  <div className="text-gray-500 text-sm line-through mt-1">
                    Original: ₹{originalAmount.toLocaleString()}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handlePayment(paymentAmount, paymentService)}
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300"
              >
                <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
                Pay ₹{paymentAmount.toLocaleString()} Now
              </button>

              <a
                href={getWhatsAppUrl(`Hello Earningsharthi, I want to discuss ${paymentService} before payment`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 md:py-3 rounded-xl font-bold transition-all hover:scale-105 text-center block border-2 border-blue-300 text-sm md:text-base flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Discuss First on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

      <style jsx>{`
        @keyframes pop-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in {
          animation: pop-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Pricing;
