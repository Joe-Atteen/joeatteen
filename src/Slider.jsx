import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/pagination";
import cedirates from "./assets/images/cedirates.webp";
import creditscore from "./assets/images/creditscore.webp";
import dev from "./assets/images/dev-portal.webp";
import { Link } from "react-router-dom";

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      className="mySwiper"
    >
      <SwiperSlide>
        <Link to="/cedirates">
          <div className="max-w-[900px] mx-auto h-[550px] rounded-[20px] overflow-hidden">
            <div className="latest-bg relative overflow-hidden">
              <div className="z-10">
                <div className="flex items-center justify-between p-5 sm:py-5 sm:p-7 content">
                  <h5 className="font-gt-medium text-[20px] sm:text-[30px] text-white">
                    CediRates
                  </h5>
                  <i className="fas fa-external-link-alt text-2xl sm:text-4xl text-white"></i>
                </div>
              </div>
            </div>

            <img
              src={cedirates}
              alt="cedirates"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/cedirates">
          <div className="max-w-[900px] mx-auto h-[550px] rounded-[20px] overflow-hidden">
            <div className="latest-bg relative overflow-hidden">
              <div className="z-10">
                <div className="flex items-center justify-between p-5 sm:py-5 sm:p-7 content">
                  <h5 className="font-gt-medium text-[20px] sm:text-[30px] text-white">
                    myCreditScore
                  </h5>
                  <i className="fas fa-external-link-alt text-2xl sm:text-4xl text-white"></i>
                </div>
              </div>
            </div>
            <img
              src={creditscore}
              alt="creditscore"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/cedirates">
          <div className="max-w-[900px] mx-auto h-[550px] rounded-[20px] overflow-hidden">
            <div className="latest-bg relative overflow-hidden">
              <div className="z-10">
                <div className="flex items-center justify-between p-5 sm:py-5 sm:p-7 content">
                  <h5 className="font-gt-medium text-[20px] sm:text-[30px] text-white">
                    Dev Portal
                  </h5>
                  <i className="fas fa-external-link-alt text-2xl sm:text-4xl text-white"></i>
                </div>
              </div>
            </div>
            <img
              src={dev}
              alt="dev"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </SwiperSlide>
      <div className="mb-16"></div>
    </Swiper>
  );
};

export default Slider;
