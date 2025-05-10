import html from "./assets/images/html.webp";
import css from "./assets/images/css.webp";
import js from "./assets/images/js.webp";
import bootstrap from "./assets/images/bootstrap.webp";
import tailwind from "./assets/images/tailwind.webp";
import sass from "./assets/images/sass.webp";
import typescript from "./assets/images/typescript.webp";
import vue from "./assets/images/vue.webp";
import nextjs from "./assets/images/nextjs.webp";
import react from "./assets/images/react.webp";
import git from "./assets/images/git.webp";
import nodejs from "./assets/images/nodejs.webp";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "./carousel/EmblaCarousel";
import cedirates from "./assets/images/cedirates.webp";
import creditscore from "./assets/images/creditscore.webp";
import tekquest from "./assets/images/tekquest.webp";
import dev from "./assets/images/dev-portal.webp";
import hubtel from "./assets/images/hubtel.webp";

const OPTIONS = { align: "start" };

const slides = [
  {
    image: cedirates,
    title: "CediRates",
    link: "/cedirates",
  },
  {
    image: creditscore,
    title: "myCreditScore",
    link: "/creditscore",
  },
  {
    image: tekquest,
    title: "TekQuest",
    link: "/tekquest",
  },
  {
    image: dev,
    title: "Dev Portal",
    link: "/dev-portal",
  },
  {
    image: hubtel,
    title: "Hubtel Web",
    link: "/hubtel",
  },
];

const Body = () => {
  const [isBodyVisible, setBodyVisible] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBodyVisible(true);
        }
      },
      {
        rootMargin: "0px 0px -100px 0px", // Adjust as needed
        threshold: 0.5, // Trigger when 10% of the body is in view
      }
    );

    const currentBodyRef = bodyRef.current;
    if (currentBodyRef) {
      observer.observe(currentBodyRef);
    }

    return () => {
      if (currentBodyRef) {
        observer.unobserve(currentBodyRef);
      }
    };
  }, []);

  return (
    <div id="about" ref={bodyRef} className={isBodyVisible ? "visible" : ""}>
      <div className="p-5 py-10 sm:p-16 sm:py-20 bg-[#1f1f1f] h-full w-full mb-20">
        <div className="flex flex-col">
          <h3 className="font-gt-medium text-white mb-5 md:w-[80%] xl:w-[65%]">
            Hi 👋, I&apos;m Joe, a UX and Frontend Engineer based in Ghana.
          </h3>
          <p className="font-gt-light text-[#c7c7c7]">
            I develop intuitive, high-performance user interfaces that sit at
            the intersection of design and code. With a strong foundation in
            user experience and frontend architecture, I bring digital products
            to life through clean, scalable, and maintainable code. <br />
            <br />I specialize in building modern web experiences using React,
            Next.js, TypeScript, Tailwind CSS, and various UI framweworks like
            ShadCN UI, with additional strengths in HTML, CSS, Bootstrap,
            JavaScript, responsive design and design systems, ensuring
            consistency and polish across products. I work closely with design
            teams—often translating Figma files into pixel-perfect, accessible
            interfaces.
            <br />
            <br />
            On the backend, I have just about enough experience with Node.js to
            build and integrate APIs, handle data workflows, and support
            full-stack development when needed.
            <br />
            <br /> Whether it&apos;s crafting interactive components, optimizing
            performance, or improving UX flows, I focus on delivering seamless,
            user-first experiences.
            <br />
            <br /> Let’s build something people love to use.
          </p>
        </div>
      </div>

      <div className="p-5 px-4 py-10 sm:p-16 sm:py-20 sm:pb-12 bg-[#1f1f1f] h-full w-full mb-20 ">
        <div className="flex flex-col">
          <h2 className="font-gt-bold uppercase text-[#ecc9b0] mb-4 sm:mb-8 text-center">
            Latest Work
          </h2>
          <p className="font-gt-light text-[#c7c7c7] mb-8 sm:mb-10 md:mb-16 text-center max-w-[820px] mx-auto">
            A curated selection of projects showcasing my focus on user
            experience, clean frontend architecture, and responsive design —
            built for real users and real impact.
          </p>
          <div>
            <EmblaCarousel slides={slides} options={OPTIONS} />
          </div>
        </div>
      </div>

      <div className="p-5 py-10 sm:p-16 sm:py-20 bg-[#1f1f1f] h-full w-full mb-20">
        <div className="flex flex-col">
          <h2 className="font-gt-bold uppercase text-[#ecc9b0] mb-8 sm:mb-10 md:mb-16 text-center">
            Toolbox
          </h2>
          <div className="flex flex-wrap gap-1 sm:gap-6 justify-center">
            <img
              src={html}
              alt="html"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={css}
              alt="css"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={js}
              alt="js"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={bootstrap}
              alt="bootstrap"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={tailwind}
              alt="tailwind"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={sass}
              alt="sass"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={typescript}
              alt="typescript"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={vue}
              alt="vue"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={react}
              alt="react"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={nextjs}
              alt="nextjs"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={git}
              alt="git"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
            <img
              src={nodejs}
              alt="node"
              className={`w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]`}
            />
          </div>
        </div>
      </div>

      <div className="p-5 py-10 sm:p-16 sm:py-20 bg-[#1f1f1f] h-full w-full mb-24 rounded-b-[50px] contact-bg relative overflow-hidden">
        <div className="z-10">
          <div className="flex flex-col mb-20">
            <h3 className="font-gt-bold text-[#ecc9b0] mb-4">
              So about that new project...
            </h3>
            <p className="font-gt-light text-[#c7c7c7]">
              I am just a text or mail away. Pleased to make your acquiantance
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-10 py-14 border-[#ecc9bo] border-t border-b">
            <div className="flex flex-col items-center sm:items-start gap-5">
              <div className="flex items-center gap-2">
                <i
                  className="fas fa-phone-alt text-white"
                  aria-hidden="true"
                ></i>
                <a
                  href="tel: +233209119731"
                  className="text-[#c7c7c7] font-gt-light text-lg"
                >
                  +233 20 911 9731
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i
                  className="fas fa-envelope text-white"
                  aria-hidden="true"
                ></i>
                <a
                  href="mailto:joeyatteen@gmail.com"
                  className="text-[#c7c7c7] font-gt-light text-lg"
                >
                  joeyatteen@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://github.com/Joe-Atteen" target="_blank">
                <i className="fab fa-github text-[50px]" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/joe-atteen/" target="_blank">
                <i
                  className="fab fa-linkedin text-[50px]"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="https://twitter.com/joe_atteen" target="_blank">
                <i
                  className="fab fa-x-twitter text-[50px]"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="https://wa.me/233209119731" target="_blank">
                <i
                  className="fab fa-whatsapp text-[50px]"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="/atteen-resume.pdf" target="_blank">
                <i
                  className="	fa fa-file-pdf-o text-[48px]"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8">
        <h5 className="font-gt-thin text-center text-[.75rem] tracking-[.3em] text-[#7a7a7a] mb-3">
          COOKED WITH REACT & TAILWINDCSS
        </h5>
        <h5 className="font-gt-thin text-center text-[.75rem] tracking-[.3em] text-[#7a7a7a]">
          LAST UPDATED 10•4•2025
        </h5>
      </div>
    </div>
  );
};

export default Body;
