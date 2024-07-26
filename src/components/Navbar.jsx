import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center text-2xl text-neutral-300"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <div className={`flex-grow hidden lg:flex items-center gap-6 text-lg`}>
          {[
            "home",
            "about",
            "technologies",
            "education",
            "experience",
            "projects",
          ].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer text-neutral-300 hover:text-purple-400"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
        <div
          className={`fixed top-0 right-0 w-1/2 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-neutral-300 p-6 lg:hidden transition-transform duration-300 ${
            isOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            {[
              "home",
              "about",
              "technologies",
              "education",
              "experience",
              "projects",
            ].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
