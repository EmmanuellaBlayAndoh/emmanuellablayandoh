import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  Mail01Icon,
  Linkedin01Icon,
  DribbbleIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

import Navbar from "../components/Navbar";
import LightRays from "../components/LightRays";

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin01Icon,
    href: "https://www.linkedin.com/",
  },
  {
    label: "Dribbble",
    icon: DribbbleIcon,
    href: "https://dribbble.com/",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function Contact() {
  return (
    <main className="min-h-dvh w-full overflow-hidden bg-[#080b11] text-white">
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
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <Navbar />

        <div
          className="
        flex
        min-h-[calc(100dvh-100px)]
        flex-col
        pb-20
        pt-16
        sm:pt-28
        lg:pt-36
      "
        >
          <motion.section
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col justify-center"
          >
            {/* Label */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-[#dd756a] sm:text-xs"
            >
              <span className="h-1 w-1 rounded-full bg-[#dd756a]" />
              <span>Get in touch</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="
              mt-5
              max-w-[900px]
              text-[clamp(48px,8vw,100px)]
              font-bold
              leading-[0.92]
              tracking-[-0.06em]
            "
            >
              Got an interesting idea?
              <br />
              <span className="text-[#dd756a]">Let’s make it make sense.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
              mt-7
              max-w-[650px]
              text-[13px]
              leading-[1.6]
              text-[#bcb9bf]
              sm:text-[15px]
            "
            >
              Whether you have a product to design, an idea that needs some
              pixels, or simply want to say hi, I’m always up for a good
              conversation.
            </motion.p>

            {/* Contact */}
            <motion.div
              variants={fadeUp}
              className="
              mt-10
              flex
              flex-col
              gap-8
              sm:mt-12
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
            >
              {/* Email */}
              <motion.a
                href="mailto:emmanuellablayandoh@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                group
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white
                py-2
                pl-5
                pr-2
                text-[12px]
                font-semibold
                text-[#18171b]
                sm:text-sm
              "
              >
                <HugeiconsIcon icon={Mail01Icon} size={17} strokeWidth={1.8} />

                <span>emmanuellablayandoh@gmail.com</span>

                <motion.span
                  whileHover={{ rotate: 45 }}
                  className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#dd756a]
                  text-white
                "
                >
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    strokeWidth={2}
                  />
                </motion.span>
              </motion.a>

              {/* Socials */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      whileHover={{
                        y: -5,
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.94,
                      }}
                      className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#303136]
                      text-white
                      transition-colors
                      duration-300
                      hover:bg-[#dd756a]
                      sm:h-12
                      sm:w-12
                    "
                    >
                      <HugeiconsIcon icon={Icon} size={20} strokeWidth={1.6} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.section>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="
            mt-16
            flex
            flex-col
            gap-2
            border-t
            border-white/[0.08]
            pt-5
            text-[10px]
            text-[#77747b]
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-xs
          "
          >
            <span>Accra, Ghana</span>

            <span>Available for interesting projects</span>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
