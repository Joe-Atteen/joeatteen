const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1a1a] py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>

      <div className="max-w-[1300px] mx-auto lg:px-6">
        <div className="flex flex-col items-center justify-center mb-12 relative">
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#222] border border-[#333] mb-6 hover:bg-[#ecc9b0]/10 hover:border-[#ecc9b0]/30 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors"></i>
          </button>
        </div>

        <div className="h-px bg-[#333] w-full max-w-xs mx-auto mb-8"></div>

        <div className="flex flex-col items-center">
          <p className="font-gt-thin text-center text-[.75rem] tracking-[.3em] text-[#7a7a7a] mb-2">
            CRAFTED WITH REACT & TAILWIND CSS
          </p>
          <p className="font-gt-thin text-center text-[.75rem] tracking-[.3em] text-[#7a7a7a]">
            © {currentYear} JOE ATTEEN • LAST UPDATED 15•6•2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
