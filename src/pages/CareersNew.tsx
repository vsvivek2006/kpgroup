import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  Briefcase, 
  MapPin, 
  Clock,
  DollarSign, 
  Users, 
  Award, 
  Send,
  Phone,
  Mail,
  CheckCircle,
  Star,
  GraduationCap,
  Code,
  TrendingUp,
  Heart,
  Rocket,
  Building,
  Target,
  Zap,
  Crown
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  category: "tech" | "marketing" | "internship";
  urgent?: boolean;
  featured?: boolean;
}

interface FormData {
  name: string;
  qualification: string;
  mobile: string;
  email: string;
  skills: string;
  about: string;
  experience: string;
  currentPackage: string;
  expectedPackage: string;
  portfolio: string;
  position: string;
  noticePeriod: string;
}

const CareersNew: React.FC = () => {
  const [activeJob, setActiveJob] = useState<string>("website-developer");
  const [activeCategory, setActiveCategory] = useState<"all" | "tech" | "marketing" | "internship">("all");
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    qualification: "",
    mobile: "",
    email: "",
    skills: "",
    about: "",
    experience: "",
    currentPackage: "",
    expectedPackage: "",
    portfolio: "",
    position: "Website Developer",
    noticePeriod: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🌟 *Job Application - Earning Sharthi* 🌟

*Position Applied For:* ${formData.position}

*Personal Information:*
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Mobile:* ${formData.mobile}

*Education & Qualification:*
🎓 *Qualification:* ${formData.qualification}

*Professional Details:*
💼 *Total Experience:* ${formData.experience}
⏰ *Notice Period:* ${formData.noticePeriod || "Immediate"}
💰 *Current Package:* ${formData.currentPackage || "Fresher"}
🎯 *Expected Package:* ${formData.expectedPackage}

*Skills & Expertise:*
🛠️ *Skills:* ${formData.skills}

*Portfolio/Links:* 
🔗 ${formData.portfolio || "Not provided"}

*About Candidate:*
📝 ${formData.about}

I'm excited to join the Earning Sharthi team and contribute to your growth journey! 🚀`;

    const whatsappUrl = `https://wa.me/916398799013?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    
    // Reset form
    setFormData({
      name: "",
      qualification: "",
      mobile: "",
      email: "",
      skills: "",
      about: "",
      experience: "",
      currentPackage: "",
      expectedPackage: "",
      portfolio: "",
      position: "Website Developer",
      noticePeriod: ""
    });
  };

  // Current Job Openings with ₹ Symbol
  const jobOpenings: JobOpening[] = [
    {
      id: "website-developer",
      title: "Website Developer",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "0-3 Years",
      salary: "₹15,000 - ₹40,000 / month",
      category: "tech",
      urgent: true,
      featured: true,
      description: "We are looking for a skilled Website Developer to join our team. You will be responsible for building and maintaining responsive websites for our clients using modern technologies.",
      responsibilities: [
        "Develop responsive websites using HTML, CSS, JavaScript, React.js",
        "Implement SEO best practices and optimize website performance",
        "Collaborate with design team to create pixel-perfect implementations",
        "Test and debug websites across multiple browsers and devices",
        "Client communication and project management",
        "Stay updated with latest web technologies and trends"
      ],
      requirements: [
        "Strong knowledge of HTML5, CSS3, JavaScript ES6+",
        "Experience with React.js/Next.js frameworks",
        "Understanding of responsive design and cross-browser compatibility",
        "Basic knowledge of SEO principles",
        "Familiarity with Git version control",
        "Good communication and problem-solving skills"
      ],
      perks: [
        "Flexible working hours",
        "Learning & development opportunities",
        "Performance bonuses",
        "Certificate of experience",
        "Career growth path",
        "Project-based incentives"
      ]
    },
    {
      id: "software-developer",
      title: "Software Developer",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "1-4 Years",
      salary: "₹25,000 - ₹60,000 / month",
      category: "tech",
      featured: true,
      description: "Join our team as a Software Developer to build innovative solutions and work on exciting projects for our clients across various domains.",
      responsibilities: [
        "Develop software solutions using modern technologies and frameworks",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and technical discussions",
        "Debug and fix technical issues across applications",
        "Collaborate with cross-functional team members",
        "Document development processes and technical specifications"
      ],
      requirements: [
        "Proficiency in JavaScript/TypeScript, Node.js, Python or Java",
        "Experience with databases (SQL/NoSQL) and ORM tools",
        "Understanding of APIs, RESTful services, and microservices",
        "Knowledge of cloud platforms (AWS, GCP, Azure)",
        "Strong problem-solving and analytical skills",
        "Degree in Computer Science or related field preferred"
      ],
      perks: [
        "Competitive salary package",
        "Health insurance benefits",
        "Remote work options",
        "Skill development programs",
        "Stock options (for senior roles)",
        "Tech gadget allowance"
      ]
    },
    {
      id: "digital-marketer",
      title: "Digital Marketer",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "0-3 Years",
      salary: "₹12,000 - ₹35,000 / month",
      category: "marketing",
      urgent: true,
      featured: true,
      description: "We need a creative Digital Marketer to help our clients grow their online presence, drive traffic, and achieve business objectives through digital channels.",
      responsibilities: [
        "Manage and execute social media marketing campaigns",
        "Create and implement SEO strategies for client websites",
        "Run and optimize Google/Facebook/Instagram ad campaigns",
        "Content creation and marketing strategy development",
        "Analyze campaign performance using analytics tools",
        "Client reporting, communication, and strategy meetings"
      ],
      requirements: [
        "Knowledge of SEO, SEM, SMM, and content marketing",
        "Experience with social media platforms and management tools",
        "Understanding of Google Analytics and other analytics platforms",
        "Content writing and copywriting skills",
        "Creative thinking and analytical mindset",
        "Results-driven approach with good communication skills"
      ],
      perks: [
        "Performance-based incentives",
        "Certification support (Google, Facebook, etc.)",
        "Creative freedom and experimentation",
        "Client interaction and portfolio building",
        "Industry exposure across multiple domains",
        "Flexible work environment"
      ]
    },
    {
      id: "seo-specialist",
      title: "SEO Specialist",
      type: "Full Time",
      location: "Remote",
      experience: "1-3 Years",
      salary: "₹18,000 - ₹40,000 / month",
      category: "marketing",
      description: "Join as SEO Specialist to optimize client websites, improve search rankings, and drive organic growth through technical and content SEO strategies.",
      responsibilities: [
        "Perform comprehensive SEO audits and competitor analysis",
        "Implement on-page and technical SEO optimizations",
        "Develop and execute link building strategies",
        "Create SEO-friendly content strategies",
        "Monitor rankings and performance metrics",
        "Client consultation and strategy presentations"
      ],
      requirements: [
        "Proven experience in SEO with successful case studies",
        "Knowledge of SEO tools (Ahrefs, SEMrush, Google Search Console)",
        "Understanding of technical SEO aspects",
        "Content strategy and keyword research skills",
        "Analytical mindset with attention to detail",
        "Up-to-date with latest SEO trends and algorithm changes"
      ],
      perks: [
        "Performance-linked bonuses",
        "SEO tool subscriptions",
        "Industry conference opportunities",
        "Flexible remote work",
        "Diverse client portfolio",
        "Continuous learning environment"
      ]
    },
    {
      id: "frontend-intern",
      title: "Frontend Development Intern",
      type: "Internship",
      location: "Remote",
      experience: "Fresher",
      salary: "₹5,000 - ₹15,000 / month + Certificate",
      category: "internship",
      description: "6-month internship program for aspiring frontend developers to learn and work on real projects with mentorship from experienced developers.",
      responsibilities: [
        "Learn and implement responsive web designs",
        "Assist in developing website components and features",
        "Participate in code reviews and team meetings",
        "Work on bug fixes and minor feature implementations",
        "Learn and follow best coding practices",
        "Document learning progress and project contributions"
      ],
      requirements: [
        "Basic knowledge of HTML, CSS, and JavaScript",
        "Eagerness to learn and grow in web development",
        "Good communication and learning attitude",
        "Portfolio or projects (academic/personal)",
        "Available for 6-month internship duration",
        "Engineering/BCA/CS students preferred"
      ],
      perks: [
        "Stipend + Performance incentives",
        "Internship completion certificate",
        "Letter of recommendation",
        "Mentorship from senior developers",
        "Potential full-time job offer",
        "Real project experience"
      ]
    },
    {
      id: "digital-marketing-intern",
      title: "Digital Marketing Intern",
      type: "Internship",
      location: "Remote",
      experience: "Fresher",
      salary: "₹4,000 - ₹12,000 / month + Certificate",
      category: "internship",
      description: "Hands-on internship in digital marketing with exposure to SEO, social media, content marketing, and analytics across multiple client projects.",
      responsibilities: [
        "Assist in social media content creation and scheduling",
        "Support SEO activities and keyword research",
        "Help in creating marketing reports and analytics",
        "Participate in campaign planning and execution",
        "Learn and apply digital marketing tools",
        "Contribute to content creation and strategy"
      ],
      requirements: [
        "Basic understanding of digital marketing concepts",
        "Good written and verbal communication skills",
        "Creative thinking and willingness to learn",
        "Familiarity with social media platforms",
        "Available for 3-6 month internship",
        "Marketing/Management students preferred"
      ],
      perks: [
        "Monthly stipend",
        "Internship certificate",
        "Practical marketing experience",
        "Mentorship from marketing experts",
        "Flexible working hours",
        "Career guidance and support"
      ]
    }
  ];

  const digitalMarketingRoles: string[] = [
    "SEO Specialist",
    "Social Media Manager",
    "Content Marketer",
    "PPC Specialist",
    "Email Marketing Specialist",
    "Digital Marketing Manager",
    "Growth Hacker",
    "Analytics Specialist",
    "Content Strategist",
    "Influencer Marketing Manager"
  ];

  const filteredJobs = activeCategory === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeCategory);

  const currentJob = jobOpenings.find(job => job.id === activeJob);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>Careers - Join Earning Sharthi Team | Website Developer, Digital Marketer Jobs</title>
        <meta name="description" content="Join Earning Sharthi team! Hiring Website Developers, Software Developers, Digital Marketers. Full-time & internship opportunities. Apply now!" />
      </Helmet>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">Application sent successfully!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Zap className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-sm font-semibold">We're Hiring! {jobOpenings.length} Open Positions</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Build Your 
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Career
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join <span className="font-bold text-yellow-400">Earning Sharthi</span> - Work on exciting projects, grow your skills, and shape the digital future with us.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Briefcase className="h-6 w-6 inline mr-2 text-blue-300" />
              <span className="font-semibold">{jobOpenings.length} Open Positions</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <MapPin className="h-6 w-6 inline mr-2 text-green-300" />
              <span className="font-semibold">Remote & On-site</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="h-6 w-6 inline mr-2 text-purple-300" />
              <span className="font-semibold">Great Team Culture</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#apply"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <Target className="h-5 w-5" />
              <span>Apply Now</span>
            </a>
            <a
              href="#openings"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Building className="h-5 w-5" />
              <span>View Openings</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="openings" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "all" 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl" 
                  : "bg-white text-gray-700 hover:bg-purple-50 border-2 border-gray-200 shadow-lg"
              }`}
            >
              <Rocket className="h-5 w-5 inline mr-3" />
              All Positions
            </button>
            <button
              onClick={() => setActiveCategory("tech")}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "tech" 
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl" 
                  : "bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200 shadow-lg"
              }`}
            >
              <Code className="h-5 w-5 inline mr-3" />
              Tech Roles
            </button>
            <button
              onClick={() => setActiveCategory("marketing")}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "marketing" 
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-2xl" 
                  : "bg-white text-gray-700 hover:bg-green-50 border-2 border-gray-200 shadow-lg"
              }`}
            >
              <TrendingUp className="h-5 w-5 inline mr-3" />
              Marketing
            </button>
            <button
              onClick={() => setActiveCategory("internship")}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "internship" 
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl" 
                  : "bg-white text-gray-700 hover:bg-orange-50 border-2 border-gray-200 shadow-lg"
              }`}
            >
              <GraduationCap className="h-5 w-5 inline mr-3" />
              Internships
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Job Listings */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 text-purple-600" />
                  Current Openings
                  <span className="ml-auto bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                    {filteredJobs.length}
                  </span>
                </h2>
                <div className="space-y-4">
                  {filteredJobs.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => setActiveJob(job.id)}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        activeJob === job.id
                          ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>
                        <div className="flex space-x-1">
                          {job.featured && (
                            <Crown className="h-4 w-4 text-yellow-500" />
                          )}
                          {job.urgent && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                              URGENT
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          job.type === "Internship" 
                            ? "bg-orange-100 text-orange-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {job.type}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          {job.location}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="mr-4">{job.experience}</span>
                        <DollarSign className="h-4 w-4 mr-2" />
                        <span className="font-semibold text-green-700">{job.salary}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Digital Marketing Roles Info */}
                <div className="mt-8 p-5 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border-2 border-yellow-200">
                  <h3 className="font-bold text-yellow-800 mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Digital Marketing Specializations
                  </h3>
                  <p className="text-yellow-700 text-sm mb-4">
                    We hire for various digital marketing roles with competitive packages:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {digitalMarketingRoles.map((role, index) => (
                      <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Job Details & Application Form */}
            <div className="lg:col-span-2">
              {currentJob && (
                <>
                  {/* Job Details */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          {currentJob.featured && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mr-4 flex items-center">
                              <Crown className="h-4 w-4 mr-1" />
                              FEATURED
                            </div>
                          )}
                          {currentJob.urgent && (
                            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                              <Zap className="h-4 w-4 mr-1" />
                              URGENT HIRING
                            </div>
                          )}
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                          {currentJob.title}
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-6">
                          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                            <Briefcase className="h-4 w-4 mr-2" />
                            {currentJob.type}
                          </span>
                          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {currentJob.location}
                          </span>
                          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {currentJob.experience}
                          </span>
                          <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                            <DollarSign className="h-4 w-4 mr-2" />
                            {currentJob.salary}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg mb-8 leading-relaxed bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      {currentJob.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Briefcase className="h-5 w-5 mr-3 text-purple-600" />
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-3">
                          {currentJob.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start bg-gray-50 p-4 rounded-xl hover:bg-purple-50 transition-colors">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Award className="h-5 w-5 mr-3 text-blue-600" />
                          Requirements
                        </h3>
                        <ul className="space-y-3">
                          {currentJob.requirements.map((item, index) => (
                            <li key={index} className="flex items-start bg-gray-50 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                              <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Heart className="h-5 w-5 mr-3 text-green-600" />
                        Perks & Benefits
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentJob.perks.map((perk, index) => (
                          <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 text-gray-800 p-4 rounded-xl text-center border border-green-200 hover:shadow-lg transition-all duration-300">
                            <div className="text-sm font-semibold">{perk}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Application Form */}
                  <div id="apply" className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">Apply for this Position</h2>
                      <p className="text-gray-600 text-lg">
                        Fill the form below and we'll contact you via WhatsApp for the next steps.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Personal Information */}
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <Users className="h-5 w-5 mr-3 text-purple-600" />
                          Personal Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="Enter your full name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Highest Qualification *
                            </label>
                            <input
                              type="text"
                              name="qualification"
                              value={formData.qualification}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., B.Tech, BCA, Diploma, etc."
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Mobile Number *
                            </label>
                            <input
                              type="tel"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Professional Details */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <Briefcase className="h-5 w-5 mr-3 text-green-600" />
                          Professional Details
                        </h3>
                        
                        <div className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Skills & Technologies *
                          </label>
                          <textarea
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                            placeholder="List your technical skills, programming languages, tools, frameworks, marketing skills, etc."
                          />
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Total Experience *
                            </label>
                            <input
                              type="text"
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., 2 years, Fresher"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Notice Period
                            </label>
                            <input
                              type="text"
                              name="noticePeriod"
                              value={formData.noticePeriod}
                              onChange={handleInputChange}
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., Immediate, 15 days"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Position Applying For *
                            </label>
                            <select
                              name="position"
                              value={formData.position}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                            >
                              <option value="Website Developer">Website Developer</option>
                              <option value="Software Developer">Software Developer</option>
                              <option value="Digital Marketer">Digital Marketer</option>
                              <option value="SEO Specialist">SEO Specialist</option>
                              <option value="Social Media Manager">Social Media Manager</option>
                              <option value="Content Marketer">Content Marketer</option>
                              <option value="Frontend Development Intern">Frontend Development Intern</option>
                              <option value="Digital Marketing Intern">Digital Marketing Intern</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Current Package (Annual)
                            </label>
                            <input
                              type="text"
                              name="currentPackage"
                              value={formData.currentPackage}
                              onChange={handleInputChange}
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., ₹3,00,000 or Fresher"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Expected Package (Annual) *
                            </label>
                            <input
                              type="text"
                              name="expectedPackage"
                              value={formData.expectedPackage}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., ₹4,00,000"
                            />
                          </div>
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Portfolio/GitHub/LinkedIn Link
                          </label>
                          <input
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                            placeholder="https://github.com/yourusername or LinkedIn profile URL"
                          />
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Tell Us About Yourself *
                          </label>
                          <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                            placeholder="Share your background, career goals, achievements, and why you want to join Earning Sharthi..."
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 shadow-lg"
                      >
                        <Send className="h-6 w-6" />
                        <span>Submit Application via WhatsApp</span>
                      </button>

                      <p className="text-center text-gray-600 text-sm">
                        By applying, you agree to be contacted via WhatsApp for the recruitment process. 
                        Your information is secure with us.
                      </p>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our HR team is here to help you find the perfect role and guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+916398799013"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>Call HR: +91-6398799013</span>
            </a>
            <a
              href="mailto:careers@earningsharthi.com"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Mail className="h-6 w-6" />
              <span>Email Our Team</span>
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="text-center">
              <div className="bg-blue-500/20 p-4 rounded-2xl inline-block mb-4">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Response</h3>
              <p className="text-gray-400">We respond to all applications within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/20 p-4 rounded-2xl inline-block mb-4">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Supportive Team</h3>
              <p className="text-gray-400">Join a collaborative and growth-oriented environment</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/20 p-4 rounded-2xl inline-block mb-4">
                <Rocket className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Growth</h3>
              <p className="text-gray-400">Continuous learning and advancement opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersNew;
