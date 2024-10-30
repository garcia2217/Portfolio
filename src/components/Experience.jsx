/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, GraduationCap, Briefcase, BookOpen } from "lucide-react";
import { EXPERIENCES } from "../constants";

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-12 rounded-xl bg-neutral-900/30 p-4 sm:p-6 backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700 transition-all duration-300"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[200px_1fr] lg:gap-8">
        {/* Timeline and Type Icon */}
        <div className="flex items-center lg:items-start gap-4 mb-4 lg:mb-0">
          <div className="hidden lg:block">
            <div className="h-full w-px bg-neutral-800" />
          </div>
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
            <span className="text-sm font-medium text-neutral-400 whitespace-nowrap">
              {experience.year}
            </span>
            <div className="flex items-center gap-2">
              {experience.type === "academic" ? (
                <GraduationCap className="h-5 w-5 text-purple-400" />
              ) : experience.type === "teaching" ? (
                <BookOpen className="h-5 w-5 text-blue-400" />
              ) : (
                <Briefcase className="h-5 w-5 text-green-400" />
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-200">
              {experience.role}
            </h3>
            <p className="text-purple-400">{experience.company}</p>
          </div>

          <p className="mb-6 text-sm sm:text-base text-neutral-400">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="mb-6 flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-purple-500/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-purple-400 border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Courses Section */}
          {experience.courses && (
            <div className="mt-6">
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
                View Course Details
              </motion.button>

              <motion.div
                initial={false}
                animate={{ height: isExpanded ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {experience.courses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-lg bg-neutral-800/50 p-4"
                    >
                      <h4 className="mb-3 text-sm sm:text-base font-medium text-neutral-200">
                        {course.name}
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-purple-400">
                            Topics Covered
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {course.topics.map((topic, topicIdx) => (
                              <span
                                key={topicIdx}
                                className="rounded-full bg-neutral-700/50 px-2 sm:px-3 py-1 text-xs text-neutral-300"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-purple-400">
                            Tools Used
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {course.tools.map((tool, toolIdx) => (
                              <span
                                key={toolIdx}
                                className="rounded-full bg-purple-500/10 px-2 sm:px-3 py-1 text-xs text-purple-300 border border-purple-500/20"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="mt-20 py-16 sm:py-32 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 sm:mb-16 text-center"
      >
        <h2 className="mb-4 sm:mb-6 text-4xl font-light tracking-tight text-neutral-100">
          Experience
        </h2>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-neutral-400">
          My professional journey
        </p>
      </motion.div>

      <div className="mx-auto max-w-6xl">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
