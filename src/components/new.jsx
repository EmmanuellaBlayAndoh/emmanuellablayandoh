import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLocation } from "react-router-dom";

import profileImage from "../assets/profile.jpeg";

import {
  Home01Icon,
  UserIcon,
  Briefcase01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

const navItems = [
  {
    label: "Home",
    icon: Home01Icon,
    href: "/",
  },
  {
    label: "Emmanuella",
    icon: UserIcon,
    href: "/emmanuella",
  },
  {
    label: "My Works",
    icon: Briefcase01Icon,
    href: "/works",
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between gap-4 pt-6 sm:pt-8 md:pt-10">
      {/* Logo */}
      <motion.a
        href="/"
        className="flex w-fit min-w-0 items-center gap-3 text-[13px] font-semibold tracking-[-0.02em] text-white sm:gap-[18px] sm:text-[15px]"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-white/10 bg-[#28262d] sm:h-12 sm:w-12"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={profileImage}
            alt="Emmanuella Blay Andoh"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <span className="min-w-0 truncate">EmmanuellaBlayAndoh</span>
      </motion.a>

      {/* Navigation */}
      <nav
        className="
          fixed bottom-5 left-1/2 z-50
          flex -translate-x-1/2 items-center
          rounded-full border border-white/[0.06]
          bg-[#303033]/90 p-1.5
          shadow-[0_15px_40px_rgba(0,0,0,0.3)]
          backdrop-blur-xl

          md:static md:translate-x-0
          md:rounded-full md:border-white/[0.025]
          md:bg-[#303033]/80 md:p-2
          md:shadow-[0_15px_40px_rgba(0,0,0,0.14)]
        "
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          // Check current route
          const isActive =
            location.pathname === item.href ||
            (item.href !== "/" &&
              location.pathname.startsWith(item.href));

          return (
            <a
              key={item.label}
              href={item.href}
              className={`relative flex min-h-[36px] items-center rounded-full px-2.5 text-[11px] transition-colors duration-300 xs:px-3 xs:text-xs sm:px-4 sm:text-sm md:min-h-[42px] md:px-[21px] ${
                isActive
                  ? "text-white"
                  : "text-[#b9b7bb] hover:text-white"
              }`}
            >
              {/* Active background */}
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full bg-white/[0.09]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap sm:gap-2 md:gap-[11px]">
                <HugeiconsIcon
                  icon={Icon}
                  size={17}
                  strokeWidth={1.7}
                />

                <span>{item.label}</span>
              </span>
            </a>
          );
        })}
      </nav>

      {/* Let's Talk */}
      <motion.a
        href="#contact"
        className="group flex h-11 flex-shrink-0 items-center gap-2 rounded-full border-2 border-[#dd756a] bg-transparent px-3.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#dd756a] sm:h-[50px] sm:gap-3 sm:px-5 sm:text-[14px]"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
      >
        <span className="hidden sm:inline">Let's Talk</span>

        <motion.span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#dd756a] text-white transition-colors duration-300 group-hover:bg-[#17151a] sm:h-8 sm:w-8"
          whileHover={{ rotate: -35 }}
          transition={{ duration: 0.2 }}
        >
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={16}
            strokeWidth={1.9}
          />
        </motion.span>
      </motion.a>
    </header>
  );
}