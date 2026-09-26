import { motion } from "framer-motion";
import { useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import LightRays from "../components/LightRays";
import CaseStudyNav from "../components/CaseStudyNav";

import renovynThumbnail from "../assets/renovynearth-thumbnail.png";
import onboarding from "../assets/onboarding.png";
import dashboard from "../assets/dashboard.png";
import floodrisk from "../assets/floodrisk.png";
import floodriska from "../assets/floodriska.png";
import floodriskb from "../assets/floodriskb.png";
import airquality from "../assets/airquality.png";
import airqualitya from "../assets/airqualitya.png";
import heatrisk from "../assets/heatrisk.png";
import heatriska from "../assets/heatriska.png";
import carbonfootprintestimator from "../assets/carbonfootprintestimator.png";
import rSignal from "../assets/rSignal.png";
import signup from "../assets/signup.png";
import designsystem from "../assets/designsystem.png";

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

const imageReveal = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionVariants = {
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

const listItemVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function RenovynEarth() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="relative min-h-dvh w-full bg-[#080b11] text-white">
      {/* Light Rays */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50">
        <LightRays
          raysOrigin="top-center"
          raysColor="#AEB4C8"
          raysSpeed={0.4}
          lightSpread={0.9}
          rayLength={1.4}
          pulsating={false}
          fadeDistance={1.2}
          saturation={0.5}
          followMouse={true}
          mouseInfluence={0.07}
          noiseAmount={0.025}
          distortion={0.02}
          className="h-full w-full"
        />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(70,78,105,0.08),transparent_32%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <Navbar />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pageVariants}
          className="pb-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 lg:pb-32"
        >
          {/* Back */}
          <motion.div variants={fadeUp}>
            <Link
              to="/works"
              className="group inline-flex items-center gap-3 text-[12px] text-[#d5d2d7] transition-colors hover:text-white sm:text-[13px]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-x-1 group-hover:border-white/25 group-hover:bg-white/[0.05]">
                <HugeiconsIcon
                  icon={ArrowLeft01Icon}
                  size={15}
                  strokeWidth={1.8}
                />
              </span>

              <span>My works</span>
            </Link>
          </motion.div>

          {/* Project heading */}
          <motion.section
            variants={fadeUp}
            className="mt-10 grid items-end gap-8 md:grid-cols-[1fr_auto] md:gap-12 lg:mt-11"
          >
            <div>
              <motion.h1 className="text-[clamp(34px,4vw,72px)] font-bold uppercase leading-[0.95] tracking-[-0.055em]">
                Renovyn Earth
              </motion.h1>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["Product Design", "UX/UI", "Web & Mobile"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[5px] bg-[#303136] px-3 py-1.5 text-[10px] font-medium text-[#e4e1e5] sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-[390px] text-[14px] font-medium leading-[1.35] tracking-[-0.025em] text-[#f0edf1] sm:text-[16px] lg:pb-1"
            >
              Making climate risk easier to understand, monitor, and act on.
            </motion.p>
          </motion.section>

          {/* Hero project image */}
          <motion.div
            variants={imageReveal}
            className="group relative mt-8 overflow-hidden rounded-[22px] sm:mt-9 sm:rounded-[28px] lg:mt-10"
          >
            <motion.img
              src={renovynThumbnail}
              alt="Renovyn Earth project preview"
              className="block h-auto w-full object-cover"
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Subtle hover effect */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-white/[0.04]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Project details */}
          <motion.section
            variants={fadeUp}
            className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-8 lg:mt-10"
          >
            <ProjectMeta label="ROLE" value="UI/UX DESIGNER" />

            <ProjectMeta label="PLATFORM" value="MOBILE APP" />

            <ProjectMeta label="TOOLS" value="FIGMA" />

            <ProjectMeta label="CLIENT" value="RENOVYN TECH SOLUTION" />
          </motion.section>

          {/* Download section */}
          <motion.section variants={fadeUp} className="mt-10 sm:mt-12">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-wide text-[#d9d6db] sm:text-[11px]">
              Download App
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <StoreButton
                icon="ant-design:apple-filled"
                text="Download On AppStore"
                href="#"
              />

              <StoreButton
                icon="famicons:logo-google-playstore"
                text="Download On PlayStore"
                href="#"
              />
            </div>
          </motion.section>

          {/* Case Study */}
          <motion.section
            variants={sectionVariants}
            className="mt-12
                  border-t border-white/[0.16]
                  pt-8
                  sm:mt-14 sm:pt-10
                  lg:mt-16
"
          >
            <div
              className="grid
                gap-12
                lg:grid-cols-[190px_minmax(0,1fr)]
                lg:gap-12
                xl:grid-cols-[205px_minmax(0,1fr)]
                xl:gap-16"
            >
              {/* Sticky Case Study Navigation */}
              <CaseStudyNav />

              {/* Case study content */}
              <div className="min-w-0 max-w-[780px]">
                {/* Overview */}
                <CaseStudySection id="section-1" number="01." title="Overview">
                  <p className="text-[#d7d4d9]">
                    Climate data can be overwhelming.
                  </p>

                  <p>
                    Flood risk, extreme heat, environmental trends, carbon
                    emissions, and local authority information often exist
                    across different sources and systems. For everyday users,
                    understanding what those risks mean for their specific
                    location can be difficult.
                  </p>

                  <p>
                    <strong className="text-white">Renovyn Earth</strong> was
                    designed to bring relevant climate intelligence into one
                    accessible platform.
                  </p>

                  <p>The goal was simple:</p>

                  <div className="border-l-2 border-[#20d4d0] pl-4 font-semibold text-white">
                    Help people understand the climate risks around them and
                    make better-informed decisions.
                  </div>
                </CaseStudySection>

                {/* Problem */}
                <CaseStudySection
                  id="section-2"
                  number="02."
                  title="The Problem"
                >
                  <p className="font-semibold text-white">
                    Climate information is everywhere, but understanding it
                    isn't.
                  </p>

                  <p>
                    Users may know that flooding or extreme heat is becoming a
                    concern, but they often struggle to answer practical
                    questions such as:
                  </p>

                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">
                      How exposed is my area to flooding?
                    </li>
                    <li className="list-disc">
                      How vulnerable is my location to extreme heat?
                    </li>
                    <li className="list-disc">
                      What are the current environmental conditions?
                    </li>
                    <li className="list-disc">
                      Could these risks become worse in the future?
                    </li>
                    <li className="list-disc">
                      How can I track my environmental impact?
                    </li>
                    <li className="list-disc">
                      Where can I find reliable updates about my local area?
                    </li>
                  </ul>

                  <p>
                    The challenge was therefore not simply providing{" "}
                    <strong className="text-white">more data.</strong>
                  </p>

                  <p>
                    It was about turning{" "}
                    <strong className="text-white">
                      complex environmental data into information people could
                      understand at a glance.
                    </strong>
                  </p>
                </CaseStudySection>

                {/* Goal */}
                <CaseStudySection id="section-3" number="03." title="The Goal">
                  <p>
                    The goal was to create a product that makes climate
                    information easier to discover, understand, and act on.
                  </p>

                  <p>
                    Instead of presenting users with large amounts of
                    environmental data, the experience needed to surface the
                    information most relevant to their location and present it
                    in a simple, understandable way.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <GoalCard
                      title="Simplify"
                      text="Turn complex climate data into clear, understandable information."
                    />

                    <GoalCard
                      title="Localise"
                      text="Make climate information relevant to a user's postcode and location."
                    />

                    <GoalCard
                      title="Visualise"
                      text="Use maps, scores, charts, and visual indicators to make risk easier to interpret."
                    />

                    <GoalCard
                      title="Inform"
                      text="Provide timely alerts, predictive insights, and trusted local authority updates."
                    />
                  </div>
                </CaseStudySection>

                {/* Understanding the users */}
                <CaseStudySection
                  id="section-4"
                  number="04."
                  title="Understanding the Users"
                >
                  <p>
                    The experience was designed around people who want to
                    understand environmental risks affecting their homes,
                    communities, and everyday lives without needing specialist
                    knowledge.
                  </p>

                  <p>
                    This meant prioritising clear language, location-specific
                    information, simple visualisations, and an interface that
                    could communicate risk without overwhelming the user.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <InfoCard
                      title="Residents"
                      text="Want to understand the climate risks affecting their home and community."
                    />

                    <InfoCard
                      title="Homeowners & Property Seekers"
                      text="Need insight into environmental risks associated with a location."
                    />

                    <InfoCard
                      title="Businesses"
                      text="Need environmental information to support planning and risk management."
                    />

                    <InfoCard
                      title="Local Authorities"
                      text="Need a way to communicate relevant environmental information and updates to residents."
                    />
                  </div>
                </CaseStudySection>

                {/* Design Process */}
                <CaseStudySection
                  id="section-5"
                  number="05."
                  title="Design Process"
                >
                  <p>
                    The design process moved from understanding the problem to
                    structuring the experience, creating the interface, and
                    refining the final product through testing.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <ProcessCard
                      number="01"
                      title="Research"
                      text="Understanding the problem, users, and environmental information they need."
                    />

                    <ProcessCard
                      number="02"
                      title="Ideation"
                      text="Exploring ways to organise climate information into a simple experience."
                    />

                    <ProcessCard
                      number="03"
                      title="Design"
                      text="Creating wireframes, visual direction, and high-fidelity interfaces."
                    />

                    <ProcessCard
                      number="04"
                      title="Testing"
                      text="Reviewing the experience and refining interactions and information hierarchy."
                    />
                  </div>
                </CaseStudySection>

                {/* Design System */}
                <CaseStudySection
                  id="section-6"
                  number="06."
                  title="Design System"
                >
                  <p>
                    The interface uses a visual system designed to make
                    different environmental risks easy to distinguish while
                    keeping the overall experience consistent.
                  </p>
                  <ShowcaseItem image={designsystem} />
                  {/* 
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InfoCard
                      title="Typography"
                      text="Clear hierarchy and readable type help users scan information quickly."
                    />

                    <InfoCard
                      title="Colour"
                      text="Risk states and environmental categories use distinct visual cues."
                    />

                    <InfoCard
                      title="Cards"
                      text="Information is grouped into focused cards to reduce cognitive load."
                    />

                    <InfoCard
                      title="Maps"
                      text="Interactive map experiences help users explore location-based risk."
                    />
                  </div> */}
                </CaseStudySection>

                {/* Product Showcase */}
                <CaseStudySection
                  id="section-7"
                  number="07."
                  title="Product Showcase"
                >
                  <p>
                    Renovyn Earth brings climate intelligence into a simple and
                    accessible mobile experience. From onboarding to the main
                    dashboard and detailed risk information, each part of the
                    product was designed to help users understand their
                    environment without feeling overwhelmed.
                  </p>

                  <p>
                    The experience guides users from discovering their location
                    to exploring climate risks and understanding what those
                    risks mean for them.
                  </p>

                  {/* Product Showcase Items */}
                  <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-20">
                    {/* 00. Onboarding */}
                    <ShowcaseItem
                      number="00."
                      title="Onboarding"
                      description="The onboarding experience was designed to introduce users to Renovyn Earth's core value proposition without overwhelming them with climate-related information. Rather than presenting a long tutorial, I used a short sequence of focused screens to communicate what the app can help users understand and monitor."
                      image={onboarding}
                    />
                    {/* 01. Sign Up */}
                    <ShowcaseItem
                      number="01."
                      title="Signup"
                      description="The sign-up flow guides users through creating an account with their email and password, verifying their email via OTP, and adding their postcode to personalise their climate-risk insights and local updates."
                      image={signup}
                    />

                    {/* 02. Dashboard */}
                    <ShowcaseItem
                      number="01."
                      title="Dashboard"
                      description="The main dashboard gives users a quick snapshot of their local air quality, heat risk, and flood risk based on their registered postcode. It transforms complex environmental data into clear, easy-to-understand readings so users can quickly assess the conditions and risks around them.
                      
                      The postcode is an important part of the Renovyn Earth experience because many of the platform's climate insights are location-specific."
                      image={dashboard}
                    />

                    {/* 03. Air Quality */}
                    <ShowcaseItem
                      number="03."
                      title="Air Quality"
                      description="The air quality experience presents local pollution information in a simple format, helping users understand current air quality levels and the pollutants affecting their area."
                      image={airquality}
                    />

                    <ShowcaseItem
                      description="Users can toggle between Insights and Predictive Analysis to view their current air quality information alongside an Air Quality Forecast Trend. An Advanced Analytics option takes users to a Comparison Insights page, where they can compare their local air quality readings with the UK average for better context."
                      image={airqualitya}
                    />

                    {/* 04. Floodrisk */}
                    <ShowcaseItem
                      number="04."
                      title="Floodrisk"
                      description="Clicking the Flood Risk card takes users to the Insights page where they will have to choose a UK country to view active flood alerts and warnings in that region."
                      image={floodrisk}
                    />

                    <ShowcaseItem
                      description="After choosing a UK country the user will be able to toggle between active flood alert and warnings in that particular region"
                      image={floodriska}
                    />

                    <ShowcaseItem
                      description="The Flood Risk Predictive Analysis helps users understand not only their current flood risk but also how that risk may evolve over time, using historical data, environmental patterns, and predictive insights to highlight potential future exposure. From the Flood Risk section, users can select Advanced Analytics to navigate to the Interactive Flood Risk Map, where they can visually explore flood-risk levels across different locations, identify higher-risk areas, and interact with the map to gain more detailed, location-specific insights."
                      image={floodriskb}
                    />

                    {/* 05. Heat Risk */}
                    <ShowcaseItem
                      number="05."
                      title="Heat Risk"
                      description="Clicking the Heat Risk card takes users to a dedicated Heat Risk Insights page, where they can explore detailed information about their location’s heat exposure, risk level, trends, and key contributing factors. From there, users can access deeper analysis and understand how heat risk may affect their area over time."
                      image={heatrisk}
                    />

                    <ShowcaseItem
                      description="The Heat Risk Predictive Analysis helps users understand how heat exposure could change over time by analysing environmental trends and historical patterns to highlight potential future heat-risk conditions in their area. From the Heat Risk Insights page, selecting Advanced Analytics takes users to the Interactive Heat Risk Map, where they can explore heat-risk levels across different locations and visually identify areas with higher or lower heat exposure."
                      image={heatriska}
                    />

                    {/* 06. Carbon Footprint */}
                    <ShowcaseItem
                      number="06."
                      title="Carbon Footprint Estimator"
                      description="The Carbon Footprint Estimator allows users to estimate their personal carbon emissions based on everyday activities such as energy use, transportation, travel, and lifestyle choices. It transforms their inputs into a clear estimate of their environmental impact, helping users understand their footprint and identify opportunities to make more sustainable choices."
                      image={carbonfootprintestimator}
                    />

                    {/* 07. r-Signal */}
                    <ShowcaseItem
                      number="07."
                      title="R-Signal"
                      description="The R-Signal feature connects users with verified local authorities, providing relevant local news, community announcements, environmental updates, and upcoming events based on their postcode or selected area. This creates a direct channel between councils and residents, helping users stay informed about what is happening in their local community"
                      image={rSignal}
                    />
                  </div>
                </CaseStudySection>
              </div>
            </div>
          </motion.section>

          {/* Next Project */}
          <motion.section
            variants={fadeUp}
            className="mt-20 border-t border-white/[0.3] pb-10 pt-12 sm:mt-24 sm:pt-14 lg:mt-28 lg:pt-16"
          >
            <Link to="/works/gbat-online" className="group block">
              {/* Label */}
              <p className="text-[11px] font-semibold uppercase tracking-[-0.01em] text-[#d8d5da] sm:text-[13px]">
                Next Project
              </p>

              {/* Project title + arrow */}
              <div className="mt-7 flex items-center gap-5 sm:mt-8 sm:gap-6">
                <h2
                  className="
          text-[clamp(42px,7vw,72px)]
          font-bold
          uppercase
          leading-none
          tracking-[-0.055em]
          text-white
          transition-colors
          duration-300
          group-hover:text-[#dd756a]
        "
                >
                  GBAT ONLINE
                </h2>

                {/* Arrow circle */}
                <motion.span
                  className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white
          text-white
          transition-colors
          duration-300
          group-hover:border-[#dd756a]
          group-hover:text-[#dd756a]
          sm:h-16
          sm:w-16
        "
                  whileHover={{
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={24}
                    strokeWidth={1.7}
                  />
                </motion.span>
              </div>
            </Link>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}

function ProjectMeta({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="min-w-0"
    >
      <p className="text-[10px] font-medium uppercase tracking-wide text-[#aaa6ad] sm:text-[11px]">
        {label}
      </p>

      <p className="mt-3 text-[14px] font-semibold uppercase tracking-[-0.025em] text-[#f5f3f5] sm:text-[16px]">
        {value}
      </p>
    </motion.div>
  );
}

function StoreButton({ icon, text, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        flex
        h-12
        items-center
        gap-3
        rounded-full
        bg-white
        px-5
        text-[#17171b]
        shadow-[0_10px_30px_rgba(0,0,0,0.15)]
        sm:h-[52px]
        sm:px-6
        lg:px-7
      "
    >
      <Icon icon={icon} width="24" height="24" />

      <span className="whitespace-nowrap text-[12px] font-semibold sm:text-[13px]">
        {text}
      </span>
    </motion.a>
  );
}
function CaseStudySection({ id, number, title, children }) {
  return (
    <motion.section
      id={id}
      className="
        scroll-mt-24
        border-b border-white/[0.14]
        py-10
        first:pt-0
        last:border-b-0
        sm:py-12
      "
    >
      <h2 className="text-[24px] font-semibold tracking-[-0.045em] text-white sm:text-[27px]">
        {number} {title}
      </h2>

      <div className="mt-5 space-y-4 text-[12px] leading-[1.55] text-[#c8c5ca] sm:text-[13px]">
        {children}
      </div>
    </motion.section>
  );
}

function GoalCard({ title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5"
    >
      <h3 className="text-[13px] font-semibold text-white">{title}</h3>

      <p className="mt-2 text-[11px] leading-[1.5] text-[#aaa7ad]">{text}</p>
    </motion.div>
  );
}

function InfoCard({ title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5"
    >
      <h3 className="text-[13px] font-semibold text-white">{title}</h3>

      <p className="mt-2 text-[11px] leading-[1.5] text-[#aaa7ad]">{text}</p>
    </motion.div>
  );
}

function ProcessCard({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5"
    >
      <span className="text-[10px] font-medium text-[#20d4d0]">{number}</span>

      <h3 className="mt-3 text-[13px] font-semibold text-white">{title}</h3>

      <p className="mt-2 text-[11px] leading-[1.5] text-[#aaa7ad]">{text}</p>
    </motion.div>
  );
}

function ShowcaseItem({ number, title, description, image }) {
  const hasHeading = number && title;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      {/* Number + Title */}
      {hasHeading && (
        <motion.div
          initial={{
            opacity: 0,
            x: -15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-flex items-center rounded-full bg-[#303136] px-8 py-4"
        >
          <span className="text-[10px] font-semibold text-[#20d4d0] sm:text-[14px]">
            {number}
          </span>

          <span className="ml-1 text-[10px] font-semibold text-[#20d4d0] sm:text-[14px]">
            {title}
          </span>
        </motion.div>
      )}

      {/* Description */}
      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: hasHeading ? 0.08 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            max-w-[760px]
            text-[10px]
            leading-[1.55]
            text-[#c8c5ca]
            sm:text-[11px]
            lg:text-[12px]
            ${hasHeading ? "mt-4" : "mt-0"}
          `}
        >
          {description}
        </motion.p>
      )}

      {/* Phone Mockups */}
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.98,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.12,
        }}
        transition={{
          duration: 0.8,
          delay: hasHeading ? 0.12 : 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mt-5
          overflow-hidden
          rounded-[14px]
          border
          border-white/[0.07]
          bg-[#292a2e]
          shadow-[0_25px_70px_rgba(0,0,0,0.22)]
          sm:mt-6
          sm:rounded-[18px]
        "
      >
        <motion.img
          src={image}
          alt={title ? `${title} screens` : "Renovyn Earth screens"}
          className="
            block
            h-auto
            w-full
            object-contain
          "
          initial={{
            scale: 1.025,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Hover overlay */}
        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-white/[0.04]
          "
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        />

        {/* Moving shine */}
        <motion.div
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-[60%]
            w-[35%]
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
          "
          whileHover={{
            left: "140%",
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
