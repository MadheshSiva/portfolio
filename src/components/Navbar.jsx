import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 dark:bg-black/50 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-12 py-4 flex justify-between items-center">
        <span className="text-sm font-medium tracking-tight">
          YourCompany
        </span>

        <div className="flex gap-10 text-sm text-gray-700 dark:text-gray-300">
          <Link to="/about" className="hover:text-black dark:hover:text-white">
            About
          </Link>
          <Link to="/team" className="hover:text-black dark:hover:text-white">
            Team
          </Link>
          <Link to="/contact" className="hover:text-black dark:hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
