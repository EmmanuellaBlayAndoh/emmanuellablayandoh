import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

import {
  Mail01Icon,
  Linkedin01Icon,
  DribbbleIcon,
} from "@hugeicons/core-free-icons";

import Navbar from "./Navbar";
import LightRays from "./LightRays";

const socialLinks = [
  {
    label: "Email",
    icon: Mail01Icon,
    href: "mailto:your@email.com",
  },
  {
    label: "LinkedIn",
    icon: Linkedin01Icon,
    href: "https://linkedin.com",
  },
  {
    label: "Dribbble",
    icon: DribbbleIcon,
    href: "https://dribbble.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const [ghanaTime, setGhanaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Accra",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      setGhanaTime(time);
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main
      id="home"
      className="relative min-h-dvh w-full overflow-x-hidden bg-[#100d14] text-white"
    >
      {/* Light Rays */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#AEB4C8"
          raysSpeed={0.45}
          lightSpread={0.85}
          rayLength={1.45}
          pulsating={false}
          fadeDistance={1.15}
          saturation={0.55}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.025}
          distortion={0.025}
          className="h-full w-full"
        />
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center_top,rgba(76,82,107,0.13),transparent_35%),linear-gradient(to_bottom,rgba(16,13,20,0.1),rgba(16,13,20,0.35))]" />

      {/* Main container */}
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Navbar */}
        <Navbar />

        {/* Hero content */}
        <motion.div
          className="relative flex min-h-0 flex-1 flex-col justify-center gap-16 pb-8 pt-24 sm:gap-14 sm:pb-10 sm:pt-28 md:pt-32 lg:gap-0 lg:pb-12 lg:pt-36"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[1210px] border-[2px] border-[#dd756a] px-4 py-6 sm:px-7 sm:py-7 md:px-10 md:py-8 lg:px-12"
          >
            {/* Corner handles */}
            <span className="absolute -left-[7px] -top-[7px] h-3 w-3 border border-[#dd756a] bg-white sm:-left-[8px] sm:-top-[8px] sm:h-[14px] sm:w-[14px]" />

            <span className="absolute -right-[7px] -top-[7px] h-3 w-3 border border-[#dd756a] bg-white sm:-right-[8px] sm:-top-[8px] sm:h-[14px] sm:w-[14px]" />

            <span className="absolute -bottom-[7px] -left-[7px] h-3 w-3 border border-[#dd756a] bg-white sm:-bottom-[8px] sm:-left-[8px] sm:h-[14px] sm:w-[14px]" />

            <span className="absolute -bottom-[7px] -right-[7px] h-3 w-3 border border-[#dd756a] bg-white sm:-bottom-[8px] sm:-right-[8px] sm:h-[14px] sm:w-[14px]" />

            {/* Mouse pointer */}
            <motion.div
              className="pointer-events-none absolute -right-3 top-1/2 z-20 hidden sm:block lg:-right-5"
              initial={{
                opacity: 0,
                x: -8,
                y: -4,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                delay: 0.85,
                duration: 0.35,
              }}
            >
              <div
                className="h-5 w-4 rotate-[-15deg] bg-white sm:h-[25px] sm:w-[19px]"
                style={{
                  clipPath:
                    "polygon(0 0, 0 100%, 30% 70%, 45% 100%, 58% 94%, 43% 65%, 82% 65%)",
                  filter:
                    "drop-shadow(1px 1px 0px #111) drop-shadow(-1px -1px 0px #111)",
                }}
              />
            </motion.div>

            {/* Heading */}
            <div className="mx-auto w-full max-w-[1130px] text-center">
              <h1 className="text-[clamp(40px,14vw,96px)] font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-[#f7f5f7]">
                Product Designer
              </h1>

              <p className="mx-auto mt-3 max-w-[850px] text-[clamp(13px,1.5vw,18px)] font-normal leading-[1.6] tracking-[-0.02em] text-[#d8d5da] sm:mt-4">
                I love solving real problems, creating clean interfaces, and
                turning “I have an idea...” into something people can actually
                use. I make things look good, work well, and hopefully make
                people’s lives a little easier.
              </p>
            </div>

            {/* Dimensions */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#dd756a] px-3 py-1.5 text-[11px] font-medium text-white sm:-bottom-11 sm:px-4 sm:py-2 sm:text-sm md:-bottom-12"
              initial={{
                opacity: 0,
                y: -5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.35,
              }}
            >
              1211 × 195
            </motion.div>
          </motion.div>

          {/* Bottom section */}
          <div className="flex flex-col items-center gap-8 text-center md:mt-auto md:h-auto md:flex-row md:items-end md:justify-between md:gap-0 md:pt-10 md:text-left">
            {/* Socials */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center md:items-end"
            >
              <div className="mb-4 flex items-center gap-3 text-xs text-[#eeeaf0] sm:text-sm">
                <span>Say hello</span>

                <span className="text-xl leading-none">☺</span>

                <span className="h-1 w-16 rounded-full bg-[#dd756a] sm:w-20 lg:w-[92px]" />
              </div>

              <div className="flex gap-3 sm:gap-4 lg:gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noreferrer"
                      whileHover={{
                        y: -5,
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.94,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.025] bg-[#353438]/80 text-white backdrop-blur-[10px] transition-colors duration-300 hover:bg-[#dd756a] sm:h-12 sm:w-12"
                    >
                      <HugeiconsIcon icon={Icon} size={20} strokeWidth={1.6} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Location & Time */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-1 text-xs text-[#d9d6db] sm:text-sm md:items-start"
            >
              <span className="text-[#f2eff2]">Accra, Ghana</span>
              <span className="text-[#8f8b92]">{ghanaTime}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

// import { motion } from "framer-motion";
// import { HugeiconsIcon } from "@hugeicons/react";
// import { useEffect, useState } from "react";

// import {
//   Mail01Icon,
//   Linkedin01Icon,
//   DribbbleIcon,
// } from "@hugeicons/core-free-icons";

// // import Navbar from "./Navbar";
// import LightRays from "./LightRays";

// const socialLinks = [
//   {
//     label: "Email",
//     icon: Mail01Icon,
//     href: "mailto:your@email.com",
//   },
//   {
//     label: "LinkedIn",
//     icon: Linkedin01Icon,
//     href: "https://linkedin.com",
//   },
//   {
//     label: "Dribbble",
//     icon: DribbbleIcon,
//     href: "https://dribbble.com",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.25,
//     },
//   },
// };

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function Hero() {
//   const [ghanaTime, setGhanaTime] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const time = new Intl.DateTimeFormat("en-US", {
//         timeZone: "Africa/Accra",
//         hour: "numeric",
//         minute: "2-digit",
//         hour12: true,
//       }).format(new Date());

//       setGhanaTime(time);
//     };

//     updateTime();

//     const interval = setInterval(updateTime, 60000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <main
//       id="home"
//       className="relative min-h-dvh w-full overflow-x-hidden bg-[#100d14] text-white"
//     >
//       {/* Light Rays */}
//       <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60">
//         <LightRays
//           raysOrigin="top-center"
//           raysColor="#AEB4C8"
//           raysSpeed={0.45}
//           lightSpread={0.85}
//           rayLength={1.45}
//           pulsating={false}
//           fadeDistance={1.15}
//           saturation={0.55}
//           followMouse={true}
//           mouseInfluence={0.08}
//           noiseAmount={0.025}
//           distortion={0.025}
//           className="h-full w-full"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center_top,rgba(76,82,107,0.13),transparent_35%),linear-gradient(to_bottom,rgba(16,13,20,0.1),rgba(16,13,20,0.35))]" />

//       {/* Main container */}
//       <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col px-5 sm:px-8 lg:px-10 xl:px-12">
//         {/* Navbar */}
//         {/* <Navbar /> */}

//         {/* Hero content */}
//         <motion.div
//           className="relative flex min-h-0 flex-1 flex-col justify-center gap-16 pb-8 pt-10 sm:gap-14 sm:pb-10 sm:pt-12 lg:gap-0 lg:pb-12 lg:pt-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Heading */}
//           <motion.div
//             variants={fadeUp}
//             className="relative mx-auto w-full max-w-[1210px] border-[2px] border-[#dd756a] px-4 py-6 sm:px-7 sm:py-7 md:px-10 md:py-8 lg:px-12"
//           >
//             {/* Corner handles */}
//             <span className="absolute -left-[7px] -top-[7px] h-3 w-3 border border-[#dd756a] bg-white sm:-left-[8px] sm:-top-[8px] sm:h-[14px] sm:w-[14px]" />

//             <span className="absolute -right-[7px] -top-[7px] h-3 w-3 border border-[#dd756a] bg-white sm:-right-[8px] sm:-top-[8px] sm:h-[14px] sm:w-[14px]" />

//             <span className="absolute -bottom-[7px] -left-[7px] h-3 w-3 border border-[#dd756a] bg-white sm:-bottom-[8px] sm:-left-[8px] sm:h-[14px] sm:w-[14px]" />

//             <span className="absolute -bottom-[7px] -right-[7px] h-3 w-3 border border-[#dd756a] bg-white sm:-bottom-[8px] sm:-right-[8px] sm:h-[14px] sm:w-[14px]" />

//             {/* Mouse pointer */}
//             <motion.div
//               className="pointer-events-none absolute -right-3 top-1/2 z-20 hidden sm:block lg:-right-5"
//               initial={{
//                 opacity: 0,
//                 x: -8,
//                 y: -4,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.85,
//                 duration: 0.35,
//               }}
//             >
//               <div
//                 className="h-5 w-4 rotate-[-15deg] bg-white sm:h-[25px] sm:w-[19px]"
//                 style={{
//                   clipPath:
//                     "polygon(0 0, 0 100%, 30% 70%, 45% 100%, 58% 94%, 43% 65%, 82% 65%)",
//                   filter:
//                     "drop-shadow(1px 1px 0px #111) drop-shadow(-1px -1px 0px #111)",
//                 }}
//               />
//             </motion.div>

//             {/* Heading */}
//             <div className="mx-auto w-full max-w-[1130px] text-center">
//               <h1 className="text-[clamp(40px,14vw,96px)] font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-[#f7f5f7]">
//                 Product Designer
//               </h1>

//               <p className="mx-auto mt-3 max-w-[850px] text-[clamp(13px,1.5vw,18px)] font-normal leading-[1.6] tracking-[-0.02em] text-[#d8d5da] sm:mt-4">
//                 I love solving real problems, creating clean interfaces, and
//                 turning “I have an idea...” into something people can actually
//                 use. I make things look good, work well, and hopefully make
//                 people’s lives a little easier.
//               </p>
//             </div>

//             {/* Dimensions */}
//             <motion.div
//               className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#dd756a] px-3 py-1.5 text-[11px] font-medium text-white sm:-bottom-11 sm:px-4 sm:py-2 sm:text-sm md:-bottom-12"
//               initial={{
//                 opacity: 0,
//                 y: -5,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.8,
//                 duration: 0.35,
//               }}
//             >
//               1211 × 195
//             </motion.div>
//           </motion.div>

//           {/* Bottom section */}
//           <div className="flex flex-col items-center gap-8 text-center md:mt-auto md:h-auto md:flex-row md:items-end md:justify-between md:gap-0 md:pt-10 md:text-left">
//             {/* Socials */}
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-col items-center md:items-end"
//             >
//               <div className="mb-4 flex items-center gap-3 text-xs text-[#eeeaf0] sm:text-sm">
//                 <span>Say hello</span>

//                 <span className="text-xl leading-none">☺</span>

//                 <span className="h-1 w-16 rounded-full bg-[#dd756a] sm:w-20 lg:w-[92px]" />
//               </div>

//               <div className="flex gap-3 sm:gap-4 lg:gap-6">
//                 {socialLinks.map((social) => {
//                   const Icon = social.icon;

//                   return (
//                     <motion.a
//                       key={social.label}
//                       href={social.href}
//                       aria-label={social.label}
//                       target={
//                         social.href.startsWith("http") ? "_blank" : undefined
//                       }
//                       rel="noreferrer"
//                       whileHover={{
//                         y: -5,
//                         scale: 1.08,
//                       }}
//                       whileTap={{
//                         scale: 0.94,
//                       }}
//                       className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.025] bg-[#353438]/80 text-white backdrop-blur-[10px] transition-colors duration-300 hover:bg-[#dd756a] sm:h-12 sm:w-12"
//                     >
//                       <HugeiconsIcon icon={Icon} size={20} strokeWidth={1.6} />
//                     </motion.a>
//                   );
//                 })}
//               </div>
//             </motion.div>

//             {/* Location & Time */}
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-col items-center gap-1 text-xs text-[#d9d6db] sm:text-sm md:items-start"
//             >
//               <span className="text-[#f2eff2]">Accra, Ghana</span>
//               <span className="text-[#8f8b92]">{ghanaTime}</span>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </main>
//   );
// }
