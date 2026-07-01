import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/portfolio", label: "Work" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/60 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow duration-500">
                <span className="text-white font-bold text-sm tracking-tight">PP</span>
              </div>
            </div>
            <span className="text-lg font-semibold text-white tracking-tight">
              Pick Pixel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5 items-center">
              <span
                className={`h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "w-5 rotate-45 translate-y-[4.5px]" : "w-5"
                }`}
              />
              <span
                className={`h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "w-0 opacity-0" : "w-3.5"
                }`}
              />
              <span
                className={`h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "w-5 -rotate-45 -translate-y-[4.5px]" : "w-4"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-2 flex flex-col gap-2 backdrop-blur-2xl bg-black/80 border-t border-white/5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 text-base font-medium rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 px-6 py-3 text-center text-sm font-medium text-black bg-white rounded-2xl hover:bg-white/90 transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;