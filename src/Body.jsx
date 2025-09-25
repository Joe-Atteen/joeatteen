import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { projects } from "./data/projectsData";
import BlogSection from "./BlogSection";

const OPTIONS = { align: "start" };

const Body = () => {
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    work: false,
    contact: false,
  });

  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-100px 0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const refs = [aboutRef, workRef, contactRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const fadeInClass = "transition-all duration-1000 ease-out";

  return (
    <>
      {/* Work Section */}
      <section
        id="work"
        ref={workRef}
        className={`pb-10 md:pb-12 ${fadeInClass} ${
          visibleSections.work
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="lg:px-6">
          <div className="flex flex-col mb-8">
            <div className="flex items-center mb-8">
              <div className="h-px bg-[#ecc9b0]/60 w-10 mr-4"></div>
              <span className="text-[#ecc9b0]/80 font-gt-regular text-sm tracking-wider uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="font-gt-semibold text-2xl md:text-3xl text-white mb-5 leading-relaxed">
              Latest Work
            </h2>
            <p className="font-gt-light text-[#c7c7c7] max-w-2xl sm:text-lg leading-relaxed">
              A curated selection of projects showcasing my focus on user
              experience, clean frontend architecture, and responsive design.
            </p>
          </div>
          <EmblaCarousel slides={projects} options={OPTIONS} />
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="about"
        ref={aboutRef}
        className={`py-10 md:py-12 ${fadeInClass} ${
          visibleSections.about
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <BlogSection />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`py-10 md:py-12 relative overflow-hidden ${fadeInClass} ${
          visibleSections.contact
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="lg:px-6 relative z-10 md:pt-5">
          <div className="w-full max-w-md mx-auto">
            <h4 className="text-center font-gt-medium text-white mb-6">
              Connect with me
            </h4>
            <div className="flex items-center justify-center gap-3 lg:gap-8">
              <a
                href="https://github.com/Joe-Atteen"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub"
              >
                <div className="w-12 h-12 rounded-full bg-[#222] border border-[#333] flex items-center justify-center group-hover:border-[#ecc9b0]/40 transition-all duration-300">
                  <i className="fab fa-github text-xl text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors"></i>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/joe-atteen/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <div className="w-12 h-12 rounded-full bg-[#222] border border-[#333] flex items-center justify-center group-hover:border-[#ecc9b0]/40 transition-all duration-300">
                  <i className="fab fa-linkedin-in text-xl text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors"></i>
                </div>
              </a>
              <a
                href="https://twitter.com/joe_atteen"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Twitter"
              >
                <div className="w-12 h-12 rounded-full bg-[#222] border border-[#333] flex items-center justify-center group-hover:border-[#ecc9b0]/40 transition-all duration-300">
                  <i className="fab fa-x-twitter text-xl text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors"></i>
                </div>
              </a>
              <a
                href="https://wa.me/233209119731"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Resume"
              >
                <div className="w-12 h-12 rounded-full bg-[#222] border border-[#333] flex items-center justify-center group-hover:border-[#ecc9b0]/40 transition-all duration-300">
                  <i className="fab fa-whatsapp text-xl text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors"></i>
                </div>
              </a>
              <a
                href="mailto:joeyatteen@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Resume"
              >
                <div className="w-12 h-12 rounded-full bg-[#222] border border-[#333] flex items-center justify-center group-hover:border-[#ecc9b0]/40 transition-all duration-300">
                  <i className="fa fa-envelope text-xl text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
