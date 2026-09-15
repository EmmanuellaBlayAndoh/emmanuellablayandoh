import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import Navbar from "../components/Navbar";
import LightRays from "../components/LightRays";

const projects = [
  {
    title: "RENOVYN EARTH APP",
    description:
      "A climate intelligence platform helping people and communities understand risks like flooding, heat, and air quality through clear, actionable information.",
    tags: ["Climate Risk Awareness", "Sustainability"],
    imageClass:
      "bg-[#eaf7fc] bg-[radial-gradient(circle_at_20%_20%,rgba(174,215,239,0.25)_1px,transparent_1px)] [background-size:34px_34px]",
    accent: "renovyn",
  },
  {
    title: "GBAT ONLINE",
    description:
      "An online learning platform designed to create a simpler and more engaging experience for learners from discovering courses to accessing learning content and tracking their progress.",
    tags: ["E-learning", "Online Exam"],
    imageClass:
      "bg-[#f1efff] bg-[radial-gradient(circle_at_20%_20%,rgba(181,172,255,0.22)_1px,transparent_1px)] [background-size:34px_34px]",
    accent: "gbat",
  },
  {
    title: "TAKACYCLE",
    description:
      "A digital waste management and recycling platform designed to connect users with collection services while making the process of managing and recycling waste more convenient.",
    tags: ["Waste Management", "Recycling"],
    imageClass:
      "bg-[#ecffd2] bg-[radial-gradient(circle_at_20%_20%,rgba(155,205,92,0.18)_1px,transparent_1px)] [background-size:34px_34px]",
    accent: "takacycle",
  },
];

const containerVariants = {
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Works() {
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
        {/* Header */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pb-14 pt-16 sm:pb-16 sm:pt-20 md:pt-24 lg:pb-20"
        >
          {/* Section label */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-[#dd756a] sm:text-xs"
          >
            <span className="h-1 w-1 rounded-full bg-[#dd756a]" />
            <span>Featured Projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-[800px] text-[clamp(42px,6vw,76px)] font-bold leading-[0.98] tracking-[-0.055em]"
          >
            Works I’ve been busy with
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[680px] text-[13px] leading-[1.5] text-[#bbb8be] sm:text-[15px]"
          >
            A few projects that show how I think. Each one started as a vague
            brief and ended as something measurable.
          </motion.p>

          {/* Tabs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-fit items-center rounded-full bg-[#292a2e] p-1.5"
          >
            <button
              type="button"
              className="flex h-9 items-center gap-2 rounded-full bg-[#3a3b3f] px-4 text-[11px] font-semibold text-white sm:h-10 sm:px-5 sm:text-xs"
            >
              <span>Projects</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-[9px] font-bold text-[#292a2e]">
                3
              </span>
            </button>

            <button
              type="button"
              className="flex h-9 items-center rounded-full px-4 text-[11px] font-semibold text-[#d1ced4] transition-colors hover:text-white sm:h-10 sm:px-6 sm:text-xs"
            >
              Design Shots
            </button>
          </motion.div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={containerVariants}
          className="grid gap-x-7 gap-y-12 pb-24 sm:gap-y-16 lg:grid-cols-2 lg:gap-x-9 lg:gap-y-16 lg:pb-32"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.section>
      </div>
    </main>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={cardVariants}
      className={`group min-w-0 ${
        index === 2 ? "lg:max-w-[calc(50%-18px)]" : ""
      }`}
    >
      {/* Project image */}
      <motion.div
        whileHover="hover"
        className={`relative aspect-[1.65/1] overflow-hidden rounded-[14px] sm:rounded-[16px] ${project.imageClass}`}
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-40">
          <ProjectPattern type={project.accent} />
        </div>

        {/* Renovyn phone mockup */}
        {project.accent === "renovyn" && (
          <motion.div
            variants={{
              hover: {
                y: -8,
                rotate: -1.5,
              },
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-[-2%] left-1/2 h-[76%] w-[27%] -translate-x-1/2 rounded-[22px] border-[3px] border-[#22252b] bg-black shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:rounded-[26px]"
          >
            <div className="absolute left-1/2 top-1.5 h-1 w-12 -translate-x-1/2 rounded-full bg-[#272727]" />
          </motion.div>
        )}

        {/* GBAT visual */}
        {project.accent === "gbat" && (
          <motion.div
            variants={{
              hover: {
                scale: 1.03,
              },
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute inset-[16%] rounded-xl border border-white/50 bg-white/30 backdrop-blur-[2px]"
          >
            <div className="flex h-full items-center justify-center">
              <span className="text-[clamp(38px,6vw,80px)] font-black tracking-[-0.08em] text-[#c8c1ff]/40">
                GBAT
              </span>
            </div>
          </motion.div>
        )}

        {/* Takacycle visual */}
        {project.accent === "takacycle" && (
          <motion.div
            variants={{
              hover: {
                scale: 1.04,
                rotate: 2,
              },
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute left-1/2 top-1/2 h-[42%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-[#d8f3b3]/60"
          />
        )}

        {/* Hover overlay */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          variants={{
            hover: {
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute inset-0 bg-black/[0.04]"
        />
      </motion.div>

      {/* Project information */}
      <div className="mt-4">
        <h2 className="text-[14px] font-bold tracking-[-0.02em] text-white sm:text-[16px]">
          {project.title}
        </h2>

        <p className="mt-2 max-w-[650px] text-[12px] leading-[1.45] text-[#d0cdd2] sm:text-[14px]">
          {project.description}
        </p>

        {/* Bottom row */}
        <div className="mt-4 flex items-center justify-between gap-4">
          {/* Tags */}
          <div className="flex min-w-0 flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[4px] bg-[#303136] px-2 py-1 text-[9px] text-[#d4d1d5] sm:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View project */}
          <motion.button
            type="button"
            whileHover={{
              scale: 1.04,
              borderColor: "rgba(255,255,255,0.6)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group/button flex shrink-0 items-center gap-3 rounded-[9px] border border-white/50 px-3 py-2 text-[10px] font-semibold text-white transition-colors hover:bg-white/[0.05] sm:px-3.5 sm:py-2.5 sm:text-[11px]"
          >
            <span>View Project</span>

            <motion.span
              whileHover={{
                rotate: 45,
              }}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#15171c]"
            >
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={13}
                strokeWidth={2}
              />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectPattern({ type }) {
  const symbol = type === "renovyn" ? "R" : type === "gbat" ? "GBAT" : "T";

  return (
    <div className="grid h-full w-full grid-cols-7 grid-rows-5 place-items-center overflow-hidden text-[20px] font-bold sm:text-[25px]">
      {Array.from({ length: 35 }).map((_, index) => (
        <span
          key={index}
          className={
            type === "renovyn"
              ? "text-[#c3e8fa]"
              : type === "gbat"
                ? "text-[#d6d0ff]"
                : "text-[#d8f3b3]"
          }
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}
