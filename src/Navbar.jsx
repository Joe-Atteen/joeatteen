import { useState, useEffect } from "react";
import logo from "./assets/images/nav-img.webp";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="inline-flex pt-5 z-50">
        <div
          className={`${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          } transition-transform duration-1000 ease-in-out`}
        >
          <div
            className={`w-[45px] hover:w-[130px] bg-[#2f2f2f] rounded-[6px] p-[8px] flex items-center gap-3 group transition-all duration-300 ease-in-out cursor-pointer`}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-[30px] w-[30px] object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out z-10"
            />
            <div className="font-gt-regular transform -translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <a
                href={`./src/assets/images/atteen-resume.pdf`}
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky -top-7 right-0 -mt-[70px] mb-[120px] z-40 ml-36">
        <div className="inline-flex justify-end w-full">
          <div
            className={`h-[85px] flex items-center justify-center bg-[#1f1f1f] rounded-b-[6px] px-3 pt-7 shadow-xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-20"
            } transition-transform duration-1000 ease-in-out`}
          >
            <a href="mailto:joeyatteen@gmail.com">
              <div className="border-white border-2 rounded-[6px]">
                <i className="fas fa-envelope px-3 py-2 text-white"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
