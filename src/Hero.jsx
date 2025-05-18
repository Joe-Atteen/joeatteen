import { useState, useEffect } from "react";
import hero from "./assets/images/hero-img-2.webp";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-[15vh] lg:mb-[20vh]">
      <div
        className={`h-[300px] max-[730px]:h-[230px] max-[480px]:h-[180px] w-full bg-[#2e2e2e] rounded-t-[50px] relative hero-bg mb-48 shadow-xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-transform duration-1000 ease-in-out`}
      >
        <div className="absolute inset-0 bg-[#1f1f1f] opacity-85 z-0 rounded-t-[50px]"></div>
        <div className="absolute bottom-0 left-[50%] grayscale-[.1] transform -translate-x-[50%] h-[400px] w-[500px] max-[730px]:h-[300px] max-[730px]:w-[400px] max-[480px]:h-[240px] max-[480px]:w-[300px] max-[330px]:w-[90%]">
          <img
            src={hero}
            alt="Profile"
            className="w-full h-full object-cover z-10"
          />
        </div>
        <div className="absolute top-[236px] max-[1279px]:top-[256px] max-[900px]:top-[264px] max-[730px]:top-[206px] max-[480px]:top-[156px] left-[50.3%] -translate-x-[50%]">
          <div className="inline-flex flex-col justify-center p-0">
            <h1
              className={`font-gt-bold text-[10rem] text-center text-white leading-[8rem] text-nowrap`}
            >
              <span
                style={{
                  background:
                    "linear-gradient(to bottom, white 50%, #ecc9b0 50%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                JOE E. ATTEEN
              </span>
            </h1>
            <h6
              className={`font-gt-light text-center min-[500px]:text-start text-[#c7c7c7] text-[2rem] ${
                isVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000 delay-700 ease-in-out`}
            >
              Software • User Experience (UX) Engineer
            </h6>
          </div>
        </div>
      </div>
      <div className={`flex justify-center`}>
        <a href="#about">
          <div
            className={`${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 delay-1000 ease-in-out`}
          >
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
