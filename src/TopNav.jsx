import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const TopNav = () => {
  const handleGoHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="flex justify-between mb-10">
      <button
        className="p-0 hover:border-[#1a1a1a] !border-[#1a1a1a] bg-[#1a1a1a]"
        onClick={() => navigate(-1)}
      >
        <i className="fa fa-arrow-left text-xl sm:text-3xl text-white"></i>
      </button>
      <Link
        to="/"
        onClick={handleGoHome}
        className="uppercase font-gt-semibold text-[20px] text-nowrap"
      >
        Go home
      </Link>
    </div>
  );
};

export default TopNav;
