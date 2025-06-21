import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { projects } from "./data/projectsData";

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
      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className={`py-12 md:py-20 ${fadeInClass} ${
          visibleSections.about
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="lg:px-6">
          <div className="flex flex-col">
            <div className="flex items-center mb-8">
              <div className="h-px bg-[#ecc9b0]/60 w-10 mr-4"></div>
              <span className="text-[#ecc9b0]/80 font-gt-regular text-sm tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="font-gt-semibold text-2xl md:text-3xl text-white mb-10 leading-relaxed">
              UX Engineer & Frontend Developer
            </h2>

            <div className="space-y-7 text-lg">
              <p className="font-gt-light text-[#c7c7c7] leading-loose">
                Hi there 👋 I&apos;m Joe—part pixel perfectionist, part code
                poet, and full-time frontend enthusiast based in Ghana. When
                I&apos;m not transforming caffeine into beautiful interfaces,
                I&apos;m busy making sure users don&apos;t throw their devices
                out the window in frustration. My superpower? Turning
                designers&apos; wildest dreams into responsive realities without
                breaking a sweat (okay, maybe just a little sweat).
              </p>

              <p className="font-gt-light text-[#c7c7c7] leading-loose">
                My toolkit includes React (we&apos;re best friends), Next.js
                (for when I want to show off), TypeScript (because I enjoy
                arguing with my code), and Tailwind CSS (the fashion designer of
                CSS frameworks). I have a love affair with ShadCN UI and a
                long-term relationship with responsive design. If there&apos;s a
                pixel out of place, I&apos;ll find it—probably at 2 AM while
                muttering about CSS specificity.
              </p>

              <p className="font-gt-light text-[#c7c7c7] leading-loose">
                I speak fluent Figma and can translate it into code with the
                precision of a seasoned diplomat. My secret talent? Making
                developers and designers play nice together. On the backend
                side, I know just enough Node.js to be dangerous—or helpful,
                depending on who you ask. I&apos;ve yet to meet an API I
                couldn&apos;t befriend or a data workflow I couldn&apos;t
                streamline.
              </p>

              <p className="font-gt-light text-[#c7c7c7] leading-loose">
                When I&apos;m not obsessing over component architecture or
                animation performance, you might find me explaining to friends
                why that website they just showed me has terrible UX (I&apos;m
                super fun at parties, I promise). Ready to create something that
                makes users say &quot;Wow&quot; instead of &quot;How&quot;?
                Let&apos;s build something remarkable together—bugs not
                included.
              </p>
            </div>

            <div className="mt-14 flex flex-col sm:flex-row gap-6">
              <a
                href="#contact"
                className="flex items-center gap-2 group text-white hover:text-[#ecc9b0] font-gt-light px-0 py-1 transition-all duration-300 border-b border-transparent hover:border-[#ecc9b0]/30"
              >
                <i className="fas fa-envelope text-sm"></i>
                <span>Get in Touch</span>
                <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform text-sm ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        ref={workRef}
        className={`py-12 md:py-20 ${fadeInClass} ${
          visibleSections.work
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="lg:px-6">
          <div className="flex flex-col mb-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 mb-24">
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
          </div>

          <div className="pt-6 border-t border-[#333]/30">
            <h4 className="font-gt-light text-lg md:text-xl text-white mb-10">
              All Projects
            </h4>
            <EmblaCarousel slides={projects} options={OPTIONS} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`py-12 md:py-20 relative overflow-hidden border-b border-[#333]/30 ${fadeInClass} ${
          visibleSections.contact
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="lg:px-6 relative z-10">
          <div className="flex flex-col mb-16">
            <h2 className="font-gt-semibold text-2xl md:text-3xl text-white mb-5 leading-relaxed text-center">
              Let&apos;s Work Together
            </h2>
            <p className="font-gt-light text-[#c7c7c7] max-w-2xl sm:text-lg leading-relaxed text-center mx-auto">
              Whether you have a project in mind, a question about my work, or
              just want to say hello, I&apos;m just a message away. Let&apos;s
              create something amazing.
            </p>
          </div>

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
