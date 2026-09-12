import { motion } from "framer-motion";
import {
  Mail01Icon,
  Linkedin01Icon,
  DribbbleIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import Navbar from "../components/Navbar";
import profileImage from "../assets/profile.jpeg";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socials = [
  {
    label: "Email",
    icon: Mail01Icon,
    href: "mailto:emmanuellablayandoh@gmail.com",
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

function Emmanuella() {
  return (
    <main className="min-h-dvh w-full overflow-hidden bg-[#080b11] text-[#f7f5f7]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <Navbar />

        {/* Page Header */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24"
        >
          <motion.div variants={fadeUp}>
            <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-[#dd756a] sm:text-xs">
              <span className="h-1 w-1 rounded-full bg-[#dd756a]" />
              <span>Get to know me</span>
            </div>

            <h1 className="text-[clamp(48px,7vw,88px)] font-bold leading-[0.95] tracking-[-0.055em]">
              About Me.
            </h1>
          </motion.div>

          {/* Intro */}
          <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Text */}
            <motion.div variants={fadeUp} className="max-w-[650px]">
              <p className="text-[18px] font-medium leading-[1.45] text-[#e8e5e9] sm:text-[21px]">
                Hi, I’m Emmanuella.
              </p>

              <p className="mt-4 text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[19px]">
                I’m a UI/UX & Product Designer with 3+ years of experience
                turning ideas, problems, and “we need an app for this” moments
                into digital products that are simple, useful, and enjoyable to
                use.
              </p>

              <p className="mt-5 text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[19px]">
                I enjoy taking complicated problems and turning them into
                experiences that feel simple, intuitive, and most importantly
                human.
              </p>

              <p className="mt-5 text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[19px]">
                I enjoy taking complicated problems and turning them into
                experiences that feel simple, intuitive, and most importantly
                human.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[420px]"
              >
                <div className="absolute inset-0 rounded-full bg-[#bfc2c6]" />

                <div className="relative aspect-square overflow-hidden rounded-full">
                  <img
                    src={profileImage}
                    alt="Emmanuella"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px w-full bg-white/[0.18]" />

        {/* My Journey */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20 lg:py-24"
        >
          <div>
            <SectionLabel>My Journey</SectionLabel>

            <h2 className="mt-4 max-w-[340px] text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.04em]">
              So, how did I end up here?
            </h2>
          </div>

          <div className="max-w-[650px] text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[18px]">
            <p>My journey into design started from technology.</p>

            <p className="mt-5">
              With a background in Computer Engineering, I learned how things
              work under the hood. But over time, I became increasingly
              interested in what happens before the code — the decisions that
              determine what gets built, who it's built for, and whether people
              can actually use it without needing a 20-minute tutorial.
            </p>

            <p className="mt-5">
              That curiosity pulled me toward UI/UX and product design.
            </p>

            <p className="mt-5">
              I discovered that I loved the process of taking an abstract idea,
              breaking it down, understanding the people behind the problem, and
              gradually turning it into something tangible.
            </p>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px w-full bg-white/[0.18]" />

        {/* Contribution */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20 lg:py-24"
        >
          <div>
            <SectionLabel>My Contribution</SectionLabel>

            <h2 className="mt-4 max-w-[350px] text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.04em]">
              What I bring to a team
            </h2>
          </div>

          <div className="max-w-[650px] text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[18px]">
            <p>
              After 3+ years of designing digital products, I've learned that
              great design is rarely about getting everything right on the first
              try.
            </p>

            <p className="mt-5">
              I like collaborating with developers, product teams, founders, and
              other designers because the best products rarely come from one
              person sitting alone in a room.
            </p>

            <p className="mt-5">
              I bring curiosity, problem-solving, attention to detail,
              collaboration, and a healthy obsession with making things make
              sense.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-t-[60px] bg-[#292a2e] px-5 py-16 text-center sm:rounded-t-[80px] sm:px-10 sm:py-20 lg:px-20 lg:py-24"
        >
          {/* Decorative glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#dd756a] blur-[120px]"
          />

          <div className="relative z-10 mx-auto max-w-[700px]">
            <h2 className="text-[clamp(34px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.04em]">
              Got an interesting idea?
              <br />
              Let’s make it make sense.
            </h2>

            <p className="mx-auto mt-6 max-w-[560px] text-xs leading-[1.6] text-[#c4c1c6] sm:text-sm">
              Whether you have a product to design, an idea that needs some
              pixels, or simply want to say hi, I’m always up for a good
              conversation.
            </p>

            {/* Email */}
            <motion.a
              href="mailto:emmanuellablayandoh@gmail.com"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mx-auto mt-8 flex w-fit max-w-full items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-xs font-semibold text-[#292a2e] shadow-xl sm:text-sm"
            >
              <span className="truncate">emmanuellablayandoh@gmail.com</span>

              <motion.span
                whileHover={{
                  rotate: 45,
                }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dd756a] text-white"
              >
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={18}
                  strokeWidth={1.8}
                />
              </motion.span>
            </motion.a>

            {/* Socials */}
            <div className="mt-10 flex justify-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b3c40] text-[#d9d6db] transition-colors duration-300 hover:bg-[#dd756a] hover:text-white"
                  >
                    <HugeiconsIcon icon={Icon} size={19} strokeWidth={1.6} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="flex min-h-[45px] items-center justify-center border-t border-white/[0.04] text-center text-[9px] text-[#9b989e] sm:text-[10px]">
          © 2026 Emmanuella Blay Andoh. Designed & built by me
        </footer>
      </div>
    </main>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-[#dd756a] sm:text-xs">
      <span className="h-1 w-1 rounded-full bg-[#dd756a]" />
      <span>{children}</span>
    </div>
  );
}

export default Emmanuella;

// import { motion } from "framer-motion";
// import {
//   Mail01Icon,
//   Linkedin01Icon,
//   DribbbleIcon,
//   ArrowUpRight01Icon,
// } from "@hugeicons/core-free-icons";
// import { HugeiconsIcon } from "@hugeicons/react";

// // import Navbar from "../components/Navbar";
// import profileImage from "../assets/profile.jpeg";

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const sectionReveal = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const socials = [
//   {
//     label: "Email",
//     icon: Mail01Icon,
//     href: "mailto:emmanuellablayandoh@gmail.com",
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

// function Emmanuella() {
//   return (
//     <main className="min-h-dvh w-full overflow-hidden bg-[#080b11] text-[#f7f5f7]">
//       <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
//         {/* <Navbar /> */}

//         {/* Page Header */}
//         <motion.section
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24"
//         >
//           <motion.div variants={fadeUp}>
//             <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-[#dd756a] sm:text-xs">
//               <span className="h-1 w-1 rounded-full bg-[#dd756a]" />
//               <span>Get to know me</span>
//             </div>

//             <h1 className="text-[clamp(48px,7vw,88px)] font-bold leading-[0.95] tracking-[-0.055em]">
//               About Me.
//             </h1>
//           </motion.div>

//           {/* Intro */}
//           <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
//             {/* Text */}
//             <motion.div variants={fadeUp} className="max-w-[650px]">
//               <p className="text-[18px] font-medium leading-[1.45] text-[#e8e5e9] sm:text-[21px]">
//                 Hi, I’m Emmanuella.
//               </p>

//               <p className="mt-4 text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[19px]">
//                 I’m a UI/UX & Product Designer with 3+ years of experience
//                 turning ideas, problems, and “we need an app for this” moments
//                 into digital products that are simple, useful, and enjoyable to
//                 use.
//               </p>

//               <p className="mt-5 text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[19px]">
//                 I enjoy taking complicated problems and turning them into
//                 experiences that feel simple, intuitive, and most importantly
//                 human.
//               </p>

//               <p className="mt-5 text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[19px]">
//                 I enjoy taking complicated problems and turning them into
//                 experiences that feel simple, intuitive, and most importantly
//                 human.
//               </p>
//             </motion.div>

//             {/* Image */}
//             <motion.div
//               variants={fadeUp}
//               className="flex justify-center lg:justify-end"
//             >
//               <motion.div
//                 animate={{
//                   y: [0, -8, 0],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="relative w-full max-w-[420px]"
//               >
//                 <div className="absolute inset-0 rounded-full bg-[#bfc2c6]" />

//                 <div className="relative aspect-square overflow-hidden rounded-full">
//                   <img
//                     src={profileImage}
//                     alt="Emmanuella"
//                     className="h-full w-full object-cover object-top"
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* Divider */}
//         <div className="h-px w-full bg-white/[0.18]" />

//         {/* My Journey */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={sectionReveal}
//           className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20 lg:py-24"
//         >
//           <div>
//             <SectionLabel>My Journey</SectionLabel>

//             <h2 className="mt-4 max-w-[340px] text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.04em]">
//               So, how did I end up here?
//             </h2>
//           </div>

//           <div className="max-w-[650px] text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[18px]">
//             <p>My journey into design started from technology.</p>

//             <p className="mt-5">
//               With a background in Computer Engineering, I learned how things
//               work under the hood. But over time, I became increasingly
//               interested in what happens before the code — the decisions that
//               determine what gets built, who it's built for, and whether people
//               can actually use it without needing a 20-minute tutorial.
//             </p>

//             <p className="mt-5">
//               That curiosity pulled me toward UI/UX and product design.
//             </p>

//             <p className="mt-5">
//               I discovered that I loved the process of taking an abstract idea,
//               breaking it down, understanding the people behind the problem, and
//               gradually turning it into something tangible.
//             </p>
//           </div>
//         </motion.section>

//         {/* Divider */}
//         <div className="h-px w-full bg-white/[0.18]" />

//         {/* Contribution */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={sectionReveal}
//           className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20 lg:py-24"
//         >
//           <div>
//             <SectionLabel>My Contribution</SectionLabel>

//             <h2 className="mt-4 max-w-[350px] text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.04em]">
//               What I bring to a team
//             </h2>
//           </div>

//           <div className="max-w-[650px] text-[16px] leading-[1.45] text-[#d1ced4] sm:text-[18px]">
//             <p>
//               After 3+ years of designing digital products, I've learned that
//               great design is rarely about getting everything right on the first
//               try.
//             </p>

//             <p className="mt-5">
//               I like collaborating with developers, product teams, founders, and
//               other designers because the best products rarely come from one
//               person sitting alone in a room.
//             </p>

//             <p className="mt-5">
//               I bring curiosity, problem-solving, attention to detail,
//               collaboration, and a healthy obsession with making things make
//               sense.
//             </p>
//           </div>
//         </motion.section>

//         {/* CTA */}
//         <motion.section
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true, amount: 0.15 }}
//           transition={{
//             duration: 0.9,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="relative overflow-hidden rounded-t-[60px] bg-[#292a2e] px-5 py-16 text-center sm:rounded-t-[80px] sm:px-10 sm:py-20 lg:px-20 lg:py-24"
//         >
//           {/* Decorative glow */}
//           <motion.div
//             animate={{
//               scale: [1, 1.15, 1],
//               opacity: [0.15, 0.25, 0.15],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#dd756a] blur-[120px]"
//           />

//           <div className="relative z-10 mx-auto max-w-[700px]">
//             <h2 className="text-[clamp(34px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.04em]">
//               Got an interesting idea?
//               <br />
//               Let’s make it make sense.
//             </h2>

//             <p className="mx-auto mt-6 max-w-[560px] text-xs leading-[1.6] text-[#c4c1c6] sm:text-sm">
//               Whether you have a product to design, an idea that needs some
//               pixels, or simply want to say hi, I’m always up for a good
//               conversation.
//             </p>

//             {/* Email */}
//             <motion.a
//               href="mailto:emmanuellablayandoh@gmail.com"
//               whileHover={{
//                 scale: 1.04,
//               }}
//               whileTap={{
//                 scale: 0.97,
//               }}
//               className="mx-auto mt-8 flex w-fit max-w-full items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-xs font-semibold text-[#292a2e] shadow-xl sm:text-sm"
//             >
//               <span className="truncate">emmanuellablayandoh@gmail.com</span>

//               <motion.span
//                 whileHover={{
//                   rotate: 45,
//                 }}
//                 className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dd756a] text-white"
//               >
//                 <HugeiconsIcon
//                   icon={ArrowUpRight01Icon}
//                   size={18}
//                   strokeWidth={1.8}
//                 />
//               </motion.span>
//             </motion.a>

//             {/* Socials */}
//             <div className="mt-10 flex justify-center gap-4">
//               {socials.map((social) => {
//                 const Icon = social.icon;

//                 return (
//                   <motion.a
//                     key={social.label}
//                     href={social.href}
//                     target={
//                       social.href.startsWith("http") ? "_blank" : undefined
//                     }
//                     rel="noreferrer"
//                     aria-label={social.label}
//                     whileHover={{
//                       y: -6,
//                       scale: 1.08,
//                     }}
//                     whileTap={{
//                       scale: 0.92,
//                     }}
//                     className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3b3c40] text-[#d9d6db] transition-colors duration-300 hover:bg-[#dd756a] hover:text-white"
//                   >
//                     <HugeiconsIcon icon={Icon} size={19} strokeWidth={1.6} />
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.section>

//         {/* Footer */}
//         <footer className="flex min-h-[45px] items-center justify-center border-t border-white/[0.04] text-center text-[9px] text-[#9b989e] sm:text-[10px]">
//           © 2026 Emmanuella Blay Andoh. Designed & built by me
//         </footer>
//       </div>
//     </main>
//   );
// }

// function SectionLabel({ children }) {
//   return (
//     <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-[#dd756a] sm:text-xs">
//       <span className="h-1 w-1 rounded-full bg-[#dd756a]" />
//       <span>{children}</span>
//     </div>
//   );
// }

// export default Emmanuella;
