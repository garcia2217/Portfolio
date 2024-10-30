import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Technologies",
    "Experience",
    "Projects",
    "Contact",
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Name - Add your logo here */}
          <Link
            to="Home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            EGS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider cursor-pointer relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-800/50 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <Menu
              className={`w-6 h-6 text-neutral-300 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </button>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-neutral-900/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out shadow-2xl ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full pt-20 p-6">
              <div className="flex justify-between items-center">
                <span></span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-neutral-800/50 transition-colors duration-200"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6 text-neutral-300" />
                </button>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="flex items-center py-4 text-neutral-400 hover:text-white transition-colors duration-300 group"
                >
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span className="uppercase tracking-wider text-sm">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
