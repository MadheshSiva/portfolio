import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-lg">PP</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <span className={`text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text transition-all duration-300 ${scrolled ? "text-transparent" : "from-blue-500 to-purple-700 text-transparent"
              }`}>
              Pick Pixel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-200 relative group ${scrolled
                ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                : "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-600"
              }`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors duration-200 relative group ${scrolled
                ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                : "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-600"
              }`}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/team"
              className={`text-sm font-medium transition-colors duration-200 relative group ${scrolled
                ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                : "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-600"
              }`}
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors duration-200 relative group ${scrolled
                ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                : "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-600"
              }`}
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 ${scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
              }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 backdrop-blur-md bg-white/95 dark:bg-slate-900/95">
            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/team"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/portfolio"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="mx-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;