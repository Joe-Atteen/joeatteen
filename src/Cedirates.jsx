import { useEffect } from "react";
import cedirates from "./assets/images/cedirates.webp";
import cc from "./assets/images/cc.webp";
import fuel from "./assets/images/fuel.webp";
import rates from "./assets/images/rates.webp";
import bog from "./assets/images/bog.webp";
import Footer from "./Footer";
import TopNav from "./TopNav";

const Cedirates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="py-10">
        <TopNav />
        <div className="p-5 px-4 py-10 sm:p-16 sm:py-20 sm:pb-12 bg-[#1f1f1f] h-full max-w-[950px] mx-auto">
          <div className="flex flex-col">
            <a
              href="https://cedirates.com/"
              target="_blank"
              className="font-gt-bold uppercase text-white mb-5 sm:mb-10 lg:mb-14 flex items-start gap-5"
            >
              <h2>CediRates</h2>{" "}
              <span>
                <i className="fas fa-external-link-alt text-2xl sm:text-4xl"></i>
              </span>
            </a>
            <div className="max-w-[600px]">
              <p className="font-gt-thin text-white mb-5 sm:mb-10 lg:mb-14">
                A functional data-intensive full stack web app that provides daily updated
                fuel prices and exchange rates. It has a currency converter and
                a calculator for eaasy currency conversions. I started out as
                the sole frontend engineer on this project. Currently, I
                function as the engineering manager, leading a team of 4
                engineers to build and manage this web app.
              </p>
              <div className="flex flex-wrap gap-2 font-gt-light text-white">
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Web app
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Next.js
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Tailwind
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Node.js
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  TypeScript
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto py-10 sm:py-20 bg-[#303338] px-[10px] sm:px-[50px]">
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={cedirates}
              alt="cedirates"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={rates}
              alt="rates"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img src={fuel} alt="fuel" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img src={cc} alt="cc" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden">
            <img src={bog} alt="bog" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cedirates;
