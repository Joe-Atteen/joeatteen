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
        className={`py-10 md:py-12 ${fadeInClass} ${
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
              experience, clean frontend architecture, and responsive design —
              built for real users and real impact.
            </p>
          </div>

          {/* Project Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 mb-24">
            {projects
              .filter((project) =>
                ["cedirates", "creditscore", "dev-portal"].includes(project.id)
              )
              .map((project, index) => (
                <a key={index} href={project.link} className="group">
                  <div className="h-64 overflow-hidden mb-6 rounded-md relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 right-0 m-3 w-10 h-10 bg-[#ecc9b0]/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-50">
                      <i className="fa fa-arrow-right text-black/80 text-xs"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-gt-regular text-lg text-white mb-2 group-hover:text-[#ecc9b0] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-gt-light text-[#c7c7c7] mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[#c7c7c7]/70 px-0 py-0 text-xs font-gt-light"
                        >
                          <span className="me-1">{tech}</span>
                          {i < project.technologies.length - 1 ? " • " : ""}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[#ecc9b0]/80 mt-3">
                      <span className="font-gt-light text-sm group-hover:text-[#ecc9b0]">
                        View Project
                      </span>
                      <i className="fas fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </a>
              ))}
          </div> */}

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
        className={`py-10 md:py-12 relative overflow-hidden border-b border-[#333]/30 ${fadeInClass} ${
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

        {/* Background decorations - subtle */}
        <div className="absolute top-0 right-0 h-64 w-64 bg-[#ecc9b0]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-[#ecc9b0]/3 rounded-full blur-3xl"></div>
      </section>
    </>
  );
};

export default Body;
