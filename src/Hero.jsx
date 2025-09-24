import { useState, useEffect, useRef } from "react";
import hero from "./assets/images/joe.webp";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroElement = heroRef.current;
        heroElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;

        // Adjust opacity for fade-out effect
        const opacity = 1 - scrollPosition / 600;
        heroElement.style.opacity = opacity > 0 ? opacity : 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="home"
      className="min-h-dvh relative overflow-hidden flex items-center justify-center hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-[#1a1a1a]"></div>

      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40"></div> */}

      {/* Hero content container with parallax */}
      <div
        className={`max-w-[1300px] w-full mx-auto px-4 z-10 flex flex-col items-center justify-center text-center ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-1000 ease-in-out`}
      >
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-black/10 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-rotate-slow"></div>
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] mx-auto rounded-full border-4 border-[#ecc9b0] p-2 shadow-xl shadow-[#ecc9b0]/20 relative z-10 transition-all duration-300 group-hover:border-[#e3a477] overflow-hidden">
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity z-20 rounded-full"></div>
            <img
              src={hero}
              alt="Joe Atteen"
              className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        <h1 className="font-gt-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight relative">
          <span className="inline-block relative overflow-hidden">
            <span className="inline-block">JOE E. ATTEEN</span>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ecc9b0]/50 to-transparent"></span>
          </span>
        </h1>

        <div className="mb-6">
          <h2
            className={`font-gt-medium text-xl sm:text-2xl md:text-3xl text-[#c7c7c7] ${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 delay-700 ease-in-out flex items-center justify-center gap-2`}
          >
            <span>Software</span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ecc9b0] to-[#e3a477] animate-pulse"></span>
            <span className="text-[#ecc9b0] relative">
              UI Engineer
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ecc9b0]/20"></span>
            </span>
          </h2>
        </div>

        <p
          className={`max-w-xl mx-auto text-[#a7a7a7] font-gt-light text-lg mb-6 relative ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 delay-500 ease-in-out`}
        >
          <span className="">
            I craft intuitive and high-performance user interfaces that bridge
            the gap between design and engineering.
            <span className="absolute -bottom-4 left-0 w-1/4 h-[1px] bg-gradient-to-r from-[#ecc9b0] to-transparent"></span>
            <span className="absolute -bottom-4 right-0 w-1/4 h-[1px] bg-gradient-to-l from-[#ecc9b0] to-transparent"></span>
          </span>
        </p>

        <div
          className={`flex items-center justify-center gap-4 relative ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 delay-700 ease-in-out`}
        >
          <a
            href="https://github.com/joeatteen"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full bg-[#222] border border-[#333] flex items-center justify-center h-[50px] w-[50px] transition-all duration-300 hover:scale-110 hover:border-[#ecc9b0]/40"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-[#c7c7c7] group-hover:text-[#ecc9b0] text-xl transition-colors"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/joeatteen/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full bg-[#222] border border-[#333] flex items-center justify-center h-[50px] w-[50px] transition-all duration-300 hover:scale-110 hover:border-[#ecc9b0]/40"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-[#c7c7c7] group-hover:text-[#ecc9b0] text-xl transition-colors"></i>
          </a>
          <a
            href="https://x.com/joeatteen"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full bg-[#222] border border-[#333] flex items-center justify-center h-[50px] w-[50px] transition-all duration-300 hover:scale-110 hover:border-[#ecc9b0]/40"
            aria-label="X (Twitter)"
          >
            <i className="fab fa-x-twitter text-[#c7c7c7] group-hover:text-[#ecc9b0] text-xl transition-colors"></i>
          </a>
          <a
            href="https://wa.me/233209119731"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full bg-[#222] border border-[#333] flex items-center justify-center h-[50px] w-[50px] transition-all duration-300 hover:scale-110 hover:border-[#ecc9b0]/40"
            aria-label="Resume"
          >
            <i className="fab fa-whatsapp text-[#c7c7c7] group-hover:text-[#ecc9b0] text-xl transition-colors"></i>
          </a>
          <a
            href="mailto:contact@joeatteen.com"
            className="group relative rounded-full bg-[#222] border border-[#333] flex items-center justify-center h-[50px] w-[50px] transition-all duration-300 hover:scale-110 hover:border-[#ecc9b0]/40"
            aria-label="Email"
          >
            <i className="fas fa-envelope text-[#c7c7c7] group-hover:text-[#ecc9b0] text-xl transition-colors"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
