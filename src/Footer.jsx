import { Link } from "react-router-dom";

const Footer = () => {
// const navigate = useNavigate();

const handleGoHome = () => {
//   navigate(-1);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <>
      <div className="contact-bg relative overflow-hidden mb-10">
        <div className="z-10">
          <div className="border-[#404040] border-t border-b py-10 flex justify-between items-start max-md:flex-col gap-10 px-3 sm:px-5">
            <Link
              to="/"
              onClick={handleGoHome}
              className="uppercase font-gt-semibold text-[20px] text-nowrap"
            >
              Go back home
            </Link>
            <div className="flex flex-col gap-5">
              <h3 className="font-gt-ultrabold text-nowrap">All Projects</h3>
              <div className="flex flex-wrap gap-4 font-gt-medium">
                <Link to="/cedirates">
                  <div className="inline-flex items-center gap-2 p-2 px-4 border border-white rounded-lg">
                    CediRates
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
                <Link to="/creditscore">
                  <div className="inline-flex items-center gap-2 p-2 px-4 border border-white rounded-lg">
                    myCreditScore
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
                <Link to="/dev-portal">
                  <div className="inline-flex items-center gap-2 p-2 px-4 border border-white rounded-lg">
                    Developers Portal
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <a href="https://github.com/Joe-Atteen" target="_blank">
          <i className="fab fa-github text-[30px]" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/joe-atteen/" target="_blank">
          <i className="fab fa-linkedin text-[30px]" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/joe_atteen" target="_blank">
          <i className="fab fa-x-twitter text-[30px]" aria-hidden="true"></i>
        </a>
        <a href="https://wa.me/233209119731" target="_blank">
          <i className="fab fa-whatsapp text-[30px]" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
