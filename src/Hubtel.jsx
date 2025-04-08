import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import hubtel from "./assets/images/hubtel.webp";
import landing from "./assets/images/landing.webp";
import get from "./assets/images/get-the-app.webp";
import section from "./assets/images/section.webp";
import Footer from "./Footer";

const Cedirates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="py-10">
        <div className="flex mb-10">
          <button
            className="p-0 hover:border-[#1a1a1a] !border-[#1a1a1a] bg-[#1a1a1a]"
            onClick={() => navigate(-1)}
          >
            <i className="fa fa-arrow-left text-xl sm:text-3xl text-white"></i>
          </button>
        </div>
        <div className="p-5 px-4 py-10 sm:p-16 sm:py-20 sm:pb-12 bg-[#1f1f1f] h-full max-w-[950px] mx-auto">
          <div className="flex flex-col">
            <a
              href="https://hubtel.com/"
              target="_blank"
              className="font-gt-bold uppercase text-white mb-5 sm:mb-10 lg:mb-14 flex items-start gap-5"
            >
              <h2 className="wrap">Hubtel Web</h2>{" "}
              <span>
                <i className="fas fa-external-link-alt text-2xl sm:text-4xl"></i>
              </span>
            </a>
            <div className="max-w-[500px]">
              <p className="font-gt-thin text-white mb-5 sm:mb-10 lg:mb-14">
                Hubtel is a payment platform that provides a wide range of
                services, including payment processing, invoicing, and
                subscription management. I was responsible for converting the
                design to code for the web application.
              </p>
              <div className="flex flex-wrap gap-2 font-gt-light text-white">
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
                  Nuxt
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Vue
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto py-10 sm:py-20 bg-[#d2d5db] px-[10px] sm:px-[50px]">
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={hubtel}
              alt="cedirates"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={landing}
              alt="rates"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img src={get} alt="fuel" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={section}
              alt="cc"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cedirates;
