import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Home, Search, Building2, Phone, CreditCard, LogIn, UserPlus, Home as RentIcon } from "lucide-react";

type NavItem = { 
  name: string; 
  href: string;
  icon?: React.ReactNode;
};

const primaryNav: NavItem[] = [
  { 
    name: "Home", 
    href: "/",
    icon: <Home className="h-4 w-4" />
  },
  { 
    name: "Buy", 
    href: "/buy",
    icon: <Search className="h-4 w-4" />
  },
  { 
    name: "Rent", 
    href: "/rent",
    icon: <RentIcon className="h-4 w-4" />
  },
  { 
    name: "Sell", 
    href: "/sell",
    icon: <CreditCard className="h-4 w-4" />
  },
  { 
    name: "Properties", 
    href: "/properties",
    icon: <Building2 className="h-4 w-4" />
  },
  { 
    name: "Packages", 
    href: "/packages",
    icon: <CreditCard className="h-4 w-4" />
  },
  { 
    name: "Contact", 
    href: "/contact",
    icon: <Phone className="h-4 w-4" />
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const linkBase = "px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2";
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${linkBase} bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg transform scale-105`
      : `${linkBase} text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-green-700 hover:shadow-md`;

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-gray-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300" 
              aria-label="KPrealtors Group Home"
            >
              {/* Logo Image */}
              <div className="flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="KPrealtors Group Logo" 
                  className="h-14 w-14 object-contain drop-shadow-md"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Brand Name */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-700 bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: '"Haboro Serif", serif',
                    fontWeight: 700,
                    letterSpacing: '-0.025em'
                  }}
                >
                  KPrealtors
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1">
                  PROPERTY EXPERTS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryNav.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={navClass} 
                end={item.href === "/"}
              >
                {item.icon}
                <span className="font-semibold">{item.name}</span>
              </NavLink>
            ))}
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center p-3 rounded-2xl text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6 transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transform hover:rotate-180 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/60 shadow-2xl animate-in fade-in-50 slide-in-from-top-5 duration-300">
            <div className="px-4 pt-6 pb-8 space-y-2">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-4 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-green-700 hover:shadow-md"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    {item.name}
                  </div>
                </NavLink>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link
                  to="/login"
                  className="flex items-center gap-3 px-4 py-4 rounded-2xl text-lg font-semibold text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="h-5 w-5" />
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-3 px-4 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <UserPlus className="h-5 w-5" />
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;