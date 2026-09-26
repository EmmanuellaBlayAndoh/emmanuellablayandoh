import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useLocation } from "react-router-dom";

import profileImage from "../assets/profile.jpeg";

import {
  Home01Icon,
  UserIcon,
  Briefcase01Icon,
  Mail01Icon,
  Download01Icon,
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
  {
    label: "Contact Me",
    icon: Mail01Icon,
    href: "/contact",
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    // Fixed to the viewport so it stays put while the page scrolls.
    // It now carries its own mx-auto/max-w/px instead of relying on
    // being nested inside a page's padded container, since a fixed
    // element is positioned relative to the viewport regardless of
    // where in the DOM it lives.
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Decorative blurred backdrop for the header bar, kept as its own
          layer instead of living on the row below. backdrop-filter (and
          filter/transform) on an element makes it a new containing block
          for any position:fixed descendants inside it — since <nav> below
          is fixed with a "bottom" offset, having backdrop-blur on its
          parent row was measuring that offset from the row's own (small,
          near-the-top) box instead of the real viewport, which pinned the
          mobile nav near the top instead of the bottom. Moving the blur to
          this sibling layer keeps <nav>'s containing-block chain clean. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 backdrop-blur-xl"
      />

      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between py-4 gap-4 px-5 pt-6 sm:px-8 sm:pt-8 md:pt-10 lg:px-10 xl:px-12">
        {/* =====================================================
            LOGO */}
        <div className="min-w-0 justify-self-start">
          <Link
            to="/"
            className="group flex w-fit min-w-0 items-center gap-2.5 sm:gap-3 lg:gap-4"
          >
            <motion.div
              whileHover={{
                scale: 1.06,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                h-9
                w-9
                shrink-0
                overflow-hidden
                rounded-full
                border
                border-white/10
                bg-[#28262d]
                sm:h-10
                sm:w-10
                lg:h-12
                lg:w-12
              "
            >
              <motion.img
                src={profileImage}
                alt="Emmanuella Blay Andoh"
                className="h-full w-full object-cover"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <span
              className="
                whitespace-nowrap
                text-[12px]
                font-semibold
                tracking-[-0.02em]
                text-white
                sm:text-[13px]
                lg:text-[14px]
              "
            >
              EmmanuellaBlayAndoh
            </span>
          </Link>
        </div>

        {/* =====================================================
            NAVIGATION — floats as a fixed bottom dock on mobile,
            rejoins the header row as a static/inline pill from md:
        ====================================================== */}
        <nav
          className="
            fixed
            left-1/2
            z-[100]
            flex
            w-max
            max-w-[calc(100vw-24px)]
            -translate-x-1/2
            items-center
            overflow-hidden
            rounded-full
            border
            border-white/[0.07]
            bg-[#303033]/95
            p-1.5
            shadow-[0_15px_45px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            bottom-[max(1.25rem,env(safe-area-inset-bottom))]

            md:static
            md:bottom-auto
            md:left-auto
            md:w-auto
            md:max-w-none
            md:translate-x-0
            md:justify-self-center
            md:rounded-full
            md:border-white/[0.025]
            md:bg-[#303033]/80
            md:p-2
            md:shadow-[0_15px_40px_rgba(0,0,0,0.14)]
          "
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              location.pathname === item.href ||
              (item.href !== "/" && location.pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`
                  relative
                  flex
                  min-h-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  px-2.5
                  text-[10px]
                  transition-colors
                  duration-300

                  sm:min-h-[40px]
                  sm:px-3.5
                  sm:text-xs

                  md:min-h-[42px]
                  md:px-[15px]
                  md:text-sm

                  lg:px-[17px]

                  ${isActive ? "text-white" : "text-[#b9b7bb] hover:text-white"}
                `}
              >
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

                <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap sm:gap-2 md:gap-[8px]">
                  <HugeiconsIcon icon={Icon} size={16} strokeWidth={1.7} />

                  <span>{item.label}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            DOWNLOAD CV
        ====================================================== */}
        <div className="justify-self-end">
          <motion.a
            href="/Emmanuella-Blay-Andoh-CV.pdf"
            download="Emmanuella-Blay-Andoh-CV.pdf"
            className="
              group
              flex
              h-10
              shrink-0
              items-center
              gap-2
              rounded-full
              border-2
              border-[#dd756a]
              bg-transparent
              px-3
              text-[12px]
              font-semibold
              text-white
              transition-colors
              duration-300
              hover:bg-[#dd756a]

              sm:h-11
              sm:px-3.5
              sm:text-[13px]

              md:h-[50px]
              md:gap-3
              md:px-5
              md:text-[14px]
            "
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <span>Download CV</span>

            <motion.span
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#dd756a]
                text-white
                transition-colors
                duration-300
                group-hover:bg-[#17151a]

                md:h-8
                md:w-8
              "
              whileHover={{
                y: 2,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <HugeiconsIcon icon={Download01Icon} size={16} strokeWidth={1.9} />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}

