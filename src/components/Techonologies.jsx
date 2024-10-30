/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { DiNodejsSmall } from "react-icons/di";
import { SiLaravel, SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiC,
  SiDart,
  SiPhp,
  SiGit,
  SiTailwindcss,
  SiVisualstudiocode,
  SiBootstrap,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiFlutter,
  SiPostman,
} from "react-icons/si";
import { ChevronDown, ChevronUp, Search, Filter } from "lucide-react";

const TechCard = ({ Icon, name, color, proficiency = 80, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className="group relative rounded-2xl bg-neutral-900/30 p-8 backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700 hover:bg-neutral-900/50 transition-colors"
  >
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center gap-4"
    >
      {Icon ? (
        <Icon className={`text-7xl ${color}`} />
      ) : (
        <div className={`text-3xl font-medium ${color}`}>{name}</div>
      )}
      <div className="text-sm font-medium text-neutral-400">{name}</div>
      <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className={`h-full ${color}`}
        />
      </div>
    </motion.div>
  </motion.div>
);

const SkillCategory = ({ title, skills, filter, isVisible }) => {
  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredSkills.length > 0 ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mb-8 rounded-xl bg-neutral-900/30 p-8 backdrop-blur-sm border border-neutral-800/50"
    >
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6 text-2xl font-medium text-neutral-200"
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-3 rounded-lg bg-neutral-800/50 p-4 hover:bg-neutral-800 transition-colors"
          >
            {skill.icon && <skill.icon className={`text-2xl ${skill.color}`} />}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-neutral-200">
                {skill.name}
              </span>
              {skill.proficiency && (
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1 }}
                    className={`h-full ${skill.color}`}
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ) : null;
};

const Technologies = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const mainTechnologies = [
    {
      Icon: RiReactjsLine,
      name: "React",
      color: "text-cyan-500",
      proficiency: 90,
    },
    {
      Icon: DiNodejsSmall,
      name: "Node.js",
      color: "text-green-500",
      proficiency: 85,
    },
    {
      Icon: SiLaravel,
      name: "Laravel",
      color: "text-red-500",
      proficiency: 80,
    },
    {
      Icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-500",
      proficiency: 75,
    },
    {
      Icon: SiExpress,
      name: "Express",
      color: "text-gray-500",
      proficiency: 85,
    },
    {
      Icon: SiPostgresql,
      name: "PostgreSQL",
      color: "text-blue-500",
      proficiency: 80,
    },
  ];

  const detailedSkills = {
    languages: [
      {
        name: "Python",
        icon: SiPython,
        color: "text-yellow-500",
        proficiency: 85,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-500",
        proficiency: 90,
      },
      {
        name: "HTML/CSS",
        icon: SiHtml5,
        color: "text-orange-500",
        proficiency: 85,
      },
      {
        name: "C/C++",
        icon: SiC,
        color: "text-blue-500",
        proficiency: 75,
      },
      {
        name: "Java",
        color: "text-orange-500",
        proficiency: 75,
      },
      {
        name: "Dart",
        icon: SiDart,
        color: "text-blue-500",
        proficiency: 70,
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "text-purple-500",
        proficiency: 75,
      },
    ],
    frameworks: [
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-gray-500",
        proficiency: 85,
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "text-red-500",
        proficiency: 80,
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "text-blue-400",
        proficiency: 75,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "text-purple-500",
        proficiency: 90,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
        proficiency: 95,
      },
    ],
    tools: [
      {
        name: "VS Code",
        icon: SiVisualstudiocode,
        color: "text-blue-500",
        proficiency: 95,
      },
      {
        name: "Git",
        icon: SiGit,
        color: "text-orange-500",
        proficiency: 90,
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-500",
        proficiency: 90,
      },
    ],
    libraries: [
      {
        name: "React.js",
        icon: RiReactjsLine,
        color: "text-cyan-500",
        proficiency: 90,
      },
      {
        name: "Pandas",
        icon: SiPandas,
        color: "text-blue-600",
        proficiency: 85,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
        color: "text-blue-500",
        proficiency: 80,
      },
      {
        name: "Matplotlib",
        color: "text-gray-400",
        proficiency: 75,
      },
      {
        name: "Seaborn",
        color: "text-blue-400",
        proficiency: 75,
      },
      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
        color: "text-orange-500",
        proficiency: 80,
      },
    ],
  };

  const categories = [
    { id: "all", name: "All" },
    { id: "languages", name: "Languages" },
    { id: "frameworks", name: "Frameworks" },
    { id: "tools", name: "Tools" },
    { id: "libraries", name: "Libraries" },
  ];

  return (
    <section id="technologies" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-6 text-4xl font-light tracking-tight text-neutral-100">
          Technologies
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-400">
          A showcase of the technologies and tools I have experience with
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 mb-16"
      >
        {mainTechnologies.map((tech, index) => (
          <TechCard key={tech.name} {...tech} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-3 rounded-full bg-neutral-900/50 px-8 py-4 text-sm font-medium backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </>
          ) : (
            <>
              View All Skills
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </>
          )}
        </motion.button>
      </motion.div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 space-y-6"
        >
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 rounded-xl bg-neutral-900/30 p-6 backdrop-blur-sm border border-neutral-800/50">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search skills..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full rounded-lg bg-neutral-800/50 py-3 pl-12 pr-4 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-colors"
              />
            </div>
            <div className="flex items-center gap-4">
              <Filter className="h-4 w-4 text-neutral-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-neutral-700 text-white"
                        : "bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50"
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {Object.entries(detailedSkills).map(([key, skills]) => {
            if (activeCategory === "all" || activeCategory === key) {
              return (
                <SkillCategory
                  key={key}
                  title={
                    key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/_/g, " ")
                  }
                  skills={skills}
                  filter={filter}
                  isVisible={isExpanded}
                />
              );
            }
            return null;
          })}
        </motion.div>
      )}
    </section>
  );
};

export default Technologies;
