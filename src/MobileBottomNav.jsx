import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "About",
      href: "/about",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      name: "Projects",
      href: "/projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      name: "Blog",
      href: "/blog",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
    {
      name: "Contact",
      href: "/contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#1a1a1a]/95 backdrop-blur-lg border-t border-[#333]/50"
    >
      <div className="flex items-center justify-between py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <motion.div
              key={item.name}
              className="relative"
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.href}
                className={`relative flex flex-col items-center justify-center py-[5px] px-3 w-[60px] rounded-xl transition-all duration-300 ${
                  active
                    ? "text-[#ecc9b0]"
                    : "text-[#a0a0a0] hover:text-[#ecc9b0]"
                }`}
              >
                {/* Active indicator */}
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#ecc9b0]/10 rounded-md"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Icon */}
                <div
                  className={`relative z-10 mb-1 ${
                    active ? "scale-110" : ""
                  } transition-transform duration-200`}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <span
                  className={`relative z-10 text-xs font-gt-light ${
                    active ? "font-gt-semibold" : ""
                  }`}
                >
                  {item.name}
                </span>

                {/* Active dot */}
                {/* {active && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 w-1 h-1 bg-[#ecc9b0] rounded-full"
                />
              )} */}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom safe area for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-[#1a1a1a]/95" />
    </motion.nav>
  );
};

export default MobileBottomNav;
