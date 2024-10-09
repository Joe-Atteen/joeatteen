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
import Slider from "./Slider";
import { useEffect, useRef, useState } from "react";

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
          <p className="font-gt-regular text-[#c7c7c7]">
            I specialize in building efficient, user-friendly and responsive
            interfaces with clean code. My goal is to deliver smooth digital
            experiences through well-crafted engineering. Let’s create something
            awesome!
          </p>
        </div>
      </div>

      <div className="p-5 px-4 py-10 sm:p-16 sm:py-20 sm:pb-12 bg-[#1f1f1f] h-full w-full mb-20 ">
        <div className="flex flex-col">
          <h2 className="font-gt-bold uppercase text-[#ecc9b0] mb-16 text-center">
            Latest Work
          </h2>
          <div>
            <Slider />
          </div>
        </div>
      </div>

      <div className="p-5 py-10 sm:p-16 sm:py-20 bg-[#1f1f1f] h-full w-full mb-20">
        <div className="flex flex-col">
          <h2 className="font-gt-bold uppercase text-[#ecc9b0] mb-16 text-center">
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
            <p className="font-gt-regular text-[#c7c7c7]">
              I am just a text or mail away. Pleased to make your acquiantance
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-10 py-14 border-[#ecc9bo] border-t border-b">
            <div className="flex flex-col items-center sm:items-start gap-5">
              <div className="flex items-center gap-2">
                <i className="fas fa-phone-alt text-white" aria-hidden="true"></i>
                <a
                  href="tel: +233209119731"
                  className="text-[#c7c7c7] font-gt-regular text-lg"
                >
                  +233 20 911 9731
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-white" aria-hidden="true"></i>
                <a
                  href="mailto:joeyatteen@gmail.com"
                  className="text-[#c7c7c7] font-gt-regular text-lg"
                >
                  joeyatteen@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
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
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8">
        <h5 className="font-gt-thin text-center text-[.75rem] tracking-[.3em] text-[#7a7a7a] mb-3">
          COOKED WITH REACT & TAILWINDCSS
        </h5>
        <h5 className="font-gt-thin text-center text-[.75rem] tracking-[.3em] text-[#7a7a7a]">
          LAST UPDATED 6•10•2024
        </h5>
      </div>
    </div>
  );
};

export default Body;
