import dev from "./assets/images/dev-portal.webp";
import devhome from "./assets/images/dev-home.webp";
import search from "./assets/images/search.webp";
import api from "./assets/images/api.webp";
import Footer from "./Footer";
import TopNav from "./TopNav";

const Cedirates = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="py-10">
        <TopNav />
        <div className="p-5 px-4 py-10 sm:p-16 sm:py-20 sm:pb-12 bg-[#1f1f1f] h-full max-w-[950px] mx-auto">
          <div className="flex flex-col">
            <a
              href="https://developers.hubtel.com/"
              target="_blank"
              className="font-gt-bold uppercase text-white mb-5 sm:mb-10 lg:mb-14 flex items-start gap-5"
            >
              <h2>Dev Portal</h2>{" "}
              <span>
                <i className="fas fa-external-link-alt text-2xl sm:text-4xl"></i>
              </span>
            </a>
            <div className="max-w-[500px]">
              <p className="font-gt-thin text-white mb-5 sm:mb-10 lg:mb-14">
                The developers portal is a centralized platform that provides
                developers with the tools, documentation, APIs, SDKs, and
                resources they need to efficiently build, integrate, and manage
                applications. Converted design to code on this one.
              </p>
              <div className="flex flex-wrap gap-2 font-gt-light text-white">
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Html
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Bootstrap
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Sass
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  CSS
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Vue
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto py-10 sm:py-20 bg-[#303338] px-[10px] sm:px-[50px]">
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={devhome}
              alt="rates"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={dev}
              alt="cedirates"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={search}
              alt="fuel"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden">
            <img src={api} alt="cc" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cedirates;
