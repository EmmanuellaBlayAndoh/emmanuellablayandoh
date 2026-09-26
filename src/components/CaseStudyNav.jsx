
import { motion } from "framer-motion";

const sections = [
  { id: "section-1", label: "01. Overview" },
  { id: "section-2", label: "02. The Problem" },
  { id: "section-3", label: "03. The Goal" },
  { id: "section-4", label: "04. Understanding the Users" },
  { id: "section-5", label: "05. Design Process" },
  { id: "section-6", label: "06. Design System" },
  { id: "section-7", label: "07. Product Showcase" },
];

export default function CaseStudyNav() {
  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside className="hidden lg:block lg:sticky lg:top-8 lg:h-fit lg:self-start">
      <nav className="flex flex-col gap-5">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            type="button"
            onClick={() => handleClick(section.id)}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            className="group flex w-fit items-center gap-3 text-left text-[12px] text-[#c3c0c5] transition-colors duration-300 hover:text-white"
          >
            <span className="h-px w-5 shrink-0 bg-[#8e8b91] transition-all duration-300 group-hover:w-7 group-hover:bg-white" />

            <span className="whitespace-nowrap">
              {section.label}
            </span>
          </motion.button>
        ))}
      </nav>
    </aside>
  );
}
