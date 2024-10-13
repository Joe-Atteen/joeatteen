import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import creditscore from "./assets/images/creditscore.webp";
import purple from "./assets/images/purple.webp";
import yellow from "./assets/images/yellow.webp";
import orange from "./assets/images/orange.webp";
import green from "./assets/images/green.webp";

const Cedirates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="py-10">
      <div className="flex mb-10">
        <button
          className="p-0 hover:border-[#1a1a1a] !border-[#1a1a1a]"
          onClick={() => navigate(-1)}
        >
          <i className="fa fa-arrow-left text-xl sm:text-3xl text-white"></i>
        </button>
      </div>
      <div className="p-5 px-4 py-10 sm:p-16 sm:py-20 sm:pb-12 bg-[#1f1f1f] h-full max-w-[950px] mx-auto">
        <div className="flex flex-col">
          <a
            href="https://mycreditscore.com.gh/"
            target="_blank"
            className="font-gt-bold uppercase text-white mb-5 sm:mb-10 lg:mb-14 flex items-start gap-5"
          >
            <h2 className="hidden min-[800px]:flex">CreditScore</h2>{" "}
            <h2 className="min-[800px]:hidden">mCS</h2>{" "}
            <span>
              <i className="fas fa-external-link-alt text-2xl sm:text-4xl"></i>
            </span>
          </a>
          <div className="max-w-[500px]">
            <p className="font-gt-thin text-white mb-5 sm:mb-10 lg:mb-14">
              myCreditScore is a web application that delivers users their credit scores and
              detailed credit reports. The primary goal is to promote accessible
              and responsible credit management in Ghana. I was responsible for
              developing the user interface.
            </p>
            <div className="flex flex-wrap gap-2 font-gt-light">
              <div className="inline-flex p-2 border border-white rounded-lg">
                Web app
              </div>
              <div className="inline-flex p-2 border border-white rounded-lg">
                Bootstrap
              </div>
              <div className="inline-flex p-2 border border-white rounded-lg">
                Sass
              </div>
              <div className="inline-flex p-2 border border-white rounded-lg">
                Next.js
              </div>
              <div className="inline-flex p-2 border border-white rounded-lg">
                TypeScript
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto py-10 sm:py-20 bg-[#d2d5db] px-[10px] sm:px-[50px]">
        <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
          <img
            src={creditscore}
            alt="cedirates"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
          <img src={purple} alt="rates" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
          <img src={yellow} alt="fuel" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
          <img src={orange} alt="cc" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden">
          <img src={green} alt="bog" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Cedirates;
