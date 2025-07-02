import { useState, useEffect } from "react";
import logo from "./assets/images/nav-img.webp";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "work", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    // { name: "Home", href: "#home" },
    // { name: "About", href: "#about" },
    // { name: "Work", href: "#work" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-lg bg-black/10 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className={`flex items-center ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            } transition-all duration-500 ease-in-out`}
          >
            <a href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#ecc9b0] p-0.5">
                <img
                  src={logo}
                  alt="Joe Atteen"
                  className="h-full w-full object-cover rounded-full hover:scale-110 transition-all duration-300"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center gap-12 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            } transition-all duration-700 ease-in-out`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-gt-thin text-base relative ${
                  activeSection === item.href.substring(1)
                    ? "text-[#ecc9b0]"
                    : "text-white hover:text-[#ecc9b0]"
                } transition-colors duration-300`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-[#ecc9b0] w-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`hidden md:block ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            } transition-all duration-900 ease-in-out`}
          >
            <a
              href="/atteen-resume.pdf"
              className="px-5 py-2 bg-[#ecc9b0] hover:bg-[#e3a477] hover:!text-black text-black font-gt-medium rounded-md transition-all duration-300 inline-flex items-center group"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-white ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            } transition-all duration-700 ease-in-out`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="fas fa-times text-2xl"></i>
            ) : (
              <i className="fas fa-bars text-2xl"></i>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/95 z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className={`font-gt-medium text-2xl ${
                activeSection === item.href.substring(1)
                  ? "text-[#ecc9b0]"
                  : "text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/atteen-resume.pdf"
            target="_blank"
            className="mt-6 bg-[#ecc9b0] text-black font-gt-medium px-8 py-3 rounded-full transition-all duration-300"
          >
            View Resume
          </a>
          <div className="mt-12 flex gap-6">
            <a
              href="https://github.com/Joe-Atteen"
              target="_blank"
              className="text-white hover:text-[#ecc9b0]"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/joe-atteen/"
              target="_blank"
              className="text-white hover:text-[#ecc9b0]"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://twitter.com/joe_atteen"
              target="_blank"
              className="text-white hover:text-[#ecc9b0]"
            >
              <i className="fab fa-x-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
