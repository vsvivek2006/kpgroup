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
  Star
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
}

const Careers: React.FC = () => {
  const [activeJob, setActiveJob] = useState<string>("website-developer");
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
    position: "Website Developer"
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
    
    const message = `*Job Application - ${formData.position}*

*Personal Information:*
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Mobile: ${formData.mobile}

*Education & Skills:*
🎓 Qualification: ${formData.qualification}
💼 Skills: ${formData.skills}

*Experience:*
📈 Total Experience: ${formData.experience}
💰 Current Package: ${formData.currentPackage}
🎯 Expected Package: ${formData.expectedPackage}

*Portfolio:* ${formData.portfolio}

*About Me:* ${formData.about}

I'm interested in joining Earning Sharthi team!`;

    window.open(`https://wa.me/916398799013?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Current Job Openings
  const jobOpenings: JobOpening[] = [
    {
      id: "website-developer",
      title: "Website Developer",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "0-3 Years",
      salary: "₹15,000 - ₹40,000",
      description: "We are looking for a skilled Website Developer to join our team. You will be responsible for building and maintaining responsive websites for our clients.",
      responsibilities: [
        "Develop responsive websites using HTML, CSS, JavaScript",
        "Work with React.js/Next.js frameworks",
        "Implement SEO best practices",
        "Collaborate with design team",
        "Test and debug websites",
        "Client communication and project management"
      ],
      requirements: [
        "Knowledge of HTML5, CSS3, JavaScript",
        "Experience with React.js or similar framework",
        "Understanding of responsive design",
        "Basic knowledge of SEO",
        "Good communication skills",
        "Portfolio of previous work"
      ],
      perks: [
        "Flexible working hours",
        "Learning & development opportunities",
        "Performance bonuses",
        "Certificate of experience",
        "Career growth path"
      ]
    },
    {
      id: "software-developer",
      title: "Software Developer",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "1-4 Years",
      salary: "₹25,000 - ₹60,000",
      description: "Join our team as a Software Developer to build innovative solutions and work on exciting projects for our clients.",
      responsibilities: [
        "Develop software solutions using modern technologies",
        "Write clean, maintainable code",
        "Participate in code reviews",
        "Debug and fix technical issues",
        "Collaborate with team members",
        "Document development processes"
      ],
      requirements: [
        "Proficiency in JavaScript/TypeScript",
        "Experience with Node.js, Python or Java",
        "Knowledge of databases (SQL/NoSQL)",
        "Understanding of APIs and RESTful services",
        "Problem-solving skills",
        "Degree in Computer Science or related field"
      ],
      perks: [
        "Competitive salary package",
        "Health insurance",
        "Remote work options",
        "Skill development programs",
        "Stock options (for senior roles)"
      ]
    },
    {
      id: "digital-marketer",
      title: "Digital Marketer",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "0-3 Years",
      salary: "₹12,000 - ₹35,000",
      description: "We need a creative Digital Marketer to help our clients grow their online presence and drive business results.",
      responsibilities: [
        "Manage social media campaigns",
        "Create and execute SEO strategies",
        "Run Google/Facebook ad campaigns",
        "Content creation and marketing",
        "Analyze campaign performance",
        "Client reporting and communication"
      ],
      requirements: [
        "Knowledge of SEO/SEM/SMM",
        "Experience with social media platforms",
        "Basic understanding of analytics",
        "Content writing skills",
        "Creative thinking",
        "Results-driven approach"
      ],
      perks: [
        "Performance-based incentives",
        "Certification support",
        "Creative freedom",
        "Client interaction experience",
        "Industry exposure"
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
    "Analytics Specialist"
  ];

  const currentJob = jobOpenings.find(job => job.id === activeJob);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Join Earning Sharthi Team | Website Developer, Digital Marketer Jobs</title>
        <meta name="description" content="Join Earning Sharthi team! We're hiring Website Developers, Software Developers, and Digital Marketers. Build your career with us. Apply now!" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Join Our <span className="text-yellow-400">Team</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Build your career with Earning Sharthi. Work on exciting projects, grow your skills, and make an impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Briefcase className="h-5 w-5 inline mr-2" />
              <span>3 Open Positions</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="h-5 w-5 inline mr-2" />
              <span>Remote & On-site</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users className="h-5 w-5 inline mr-2" />
              <span>Friendly Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Job Listings */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Openings</h2>
                <div className="space-y-4">
                  {jobOpenings.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => setActiveJob(job.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                        activeJob === job.id
                          ? 'border-purple-500 bg-purple-50 shadow-md'
                          : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                      }`}
                    >
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {job.type}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          {job.location}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="mr-3">{job.experience}</span>
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span>{job.salary}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Digital Marketing Roles Info */}
                <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <h3 className="font-bold text-yellow-800 mb-2">💼 Digital Marketing Roles</h3>
                  <p className="text-yellow-700 text-sm mb-3">
                    We also hire for various digital marketing specializations:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {digitalMarketingRoles.map((role, index) => (
                      <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Job Details & Application Form */}
            <div className="lg:col-span-2">
              {/* Job Details */}
              {currentJob && (
                <>
                  <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {currentJob.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {currentJob.type}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {currentJob.location}
                          </span>
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                            {currentJob.experience}
                          </span>
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                            {currentJob.salary}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg mb-6">{currentJob.description}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Briefcase className="h-5 w-5 mr-2 text-purple-600" />
                          Responsibilities
                        </h3>
                        <ul className="space-y-2">
                          {currentJob.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-blue-600" />
                          Requirements
                        </h3>
                        <ul className="space-y-2">
                          {currentJob.requirements.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-green-600" />
                        Perks & Benefits
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentJob.perks.map((perk, index) => (
                          <span key={index} className="bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium">
                            {perk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Application Form */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply for this Position</h2>
                    <p className="text-gray-600 mb-6">
                      Fill out the form below and we'll contact you via WhatsApp for the next steps.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Highest Qualification *
                          </label>
                          <input
                            type="text"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="e.g., B.Tech, BCA, Diploma"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Skills & Technologies *
                        </label>
                        <textarea
                          name="skills"
                          value={formData.skills}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="List your technical skills, programming languages, tools, etc."
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Total Experience *
                          </label>
                          <input
                            type="text"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="e.g., 2 years, 6 months"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Position Applying For *
                          </label>
                          <select
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          >
                            <option value="Website Developer">Website Developer</option>
                            <option value="Software Developer">Software Developer</option>
                            <option value="Digital Marketer">Digital Marketer</option>
                            <option value="SEO Specialist">SEO Specialist</option>
                            <option value="Social Media Manager">Social Media Manager</option>
                            <option value="Content Marketer">Content Marketer</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Package (Annual)
                          </label>
                          <input
                            type="text"
                            name="currentPackage"
                            value={formData.currentPackage}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="e.g., ₹3,00,000 or Fresher"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expected Package (Annual) *
                          </label>
                          <input
                            type="text"
                            name="expectedPackage"
                            value={formData.expectedPackage}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="e.g., ₹4,00,000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Portfolio/GitHub/LinkedIn Link
                        </label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="https://github.com/yourusername or LinkedIn profile"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Short Introduction About Yourself *
                        </label>
                        <textarea
                          name="about"
                          value={formData.about}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Tell us about your background, career goals, and why you want to join Earning Sharthi..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Send className="h-5 w-5" />
                        <span>Submit Application via WhatsApp</span>
                      </button>

                      <p className="text-center text-gray-600 text-sm">
                        By applying, you agree to be contacted via WhatsApp for the recruitment process.
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
      <section className="py-12 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Have Questions About Careers?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Reach out to our HR team for any queries about job openings or application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916398799013"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call HR: +91-6398799013</span>
            </a>
            <a
              href="mailto:careers@earningsharthi.com"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;