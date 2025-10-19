import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";

type NavItem = { name: string; href: string };
const primaryNav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const legalNav: NavItem[] = [
  { name: "Onboarding Agreement", href: "/onboarding-agreement" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [legalOpen, setLegalOpen] = React.useState<boolean>(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.legal-dropdown')) {
        setLegalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkBase = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${linkBase} bg-blue-600 text-white shadow-md`
      : `${linkBase} text-gray-700 hover:bg-blue-50 hover:text-blue-600`;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex justify-between items-center h-20">
          {/* Brand with Larger Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200" 
              aria-label="Earningsharthi Home"
            >
              {/* Larger Logo Image */}
              <div className="flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Earningsharthi Logo" 
                  className="h-14 w-14 object-contain drop-shadow-md"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Brand Name Only - No Tagline */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: '"Haboro Serif", serif',
                    fontWeight: 700,
                    letterSpacing: '-0.025em'
                  }}
                >
                  Earningsharthi
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {primaryNav.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={navClass} 
                end={item.href === "/"}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Legal dropdown (desktop) */}
            <div className="relative legal-dropdown">
              <button
                className={`${linkBase} text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-1 transition-all duration-200 ${
                  legalOpen ? 'bg-blue-50 text-blue-600' : ''
                }`}
                aria-haspopup="menu"
                aria-expanded={legalOpen}
                onClick={() => setLegalOpen((v) => !v)}
              >
                Legal 
                <ChevronDown 
                  className={`h-4 w-4 transition-transform duration-200 ${
                    legalOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {legalOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl p-2 animate-in fade-in-0 zoom-in-95"
                  onMouseLeave={() => setLegalOpen(false)}
                >
                  {legalNav.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-md"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`
                      }
                      role="menuitem"
                      onClick={() => setLegalOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://wa.me/916398799013?text=Hello%20Earningsharthi,%20I%20want%20to%20learn%20about%20your%20digital%20marketing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
            >
              <Phone className="h-4 w-4" />
              <span>Get Started</span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden animate-in fade-in-50 slide-in-from-top-5 duration-200">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-xl">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Legal (mobile) */}
              <div className="pt-3 border-t border-gray-200">
                <div className="px-3 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Legal Documents
                </div>
                {legalNav.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-lg text-base transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/916398799013?text=Hello%20Earningsharthi,%20I%20want%20to%20learn%20about%20your%20digital%20marketing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-center flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <NavLink
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 text-center flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;