import { Link } from "react-router-dom";
import { useEffect } from "react";

const TopNav = () => {
  const handleGoHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-between mb-10">
      <Link
        to="/"
        onClick={handleGoHome}
        className="p-0 hover:border-[#1a1a1a] !border-[#1a1a1a] bg-[#1a1a1a]"
      >
        <i className="fa fa-arrow-left text-xl sm:text-3xl text-white"></i>
      </Link>
    </div>
  );
};

export default TopNav;
