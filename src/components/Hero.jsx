/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const codeBlockVariants = {
    hidden: {
      x: 50,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center border-b border-neutral-800 pb-16 pt-16 lg:pt-24"
    >
      <div className="flex flex-wrap items-center w-full">
        <motion.div
          className="w-full lg:w-1/2 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.span
              variants={itemVariants}
              className="text-sm uppercase tracking-widest text-purple-400 font-medium"
            >
              Welcome to my portfolio
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-white"
            >
              Emmanuel Garcia{" "}
              <span className="block text-neutral-400">Sumargo</span>
            </motion.h1>

            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-purple-400 to-neutral-200 bg-clip-text text-transparent"
              >
                Computer Science Student
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-neutral-400 max-w-xl leading-relaxed"
              >
                Passionate about web development and data technologies.
                Proficient in Python and JavaScript, with experience in
                full-stack development and machine learning projects.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <Link
                to="contact" // The ID of the contact section
                smooth={true}
                duration={1000}
                className="px-6 py-3 bg-neutral-200 text-neutral-900 rounded-lg font-medium hover:bg-neutral-300 transition-colors cursor-pointer"
              >
                Get in touch
              </Link>
              <Link
                to="projects" // The ID of the projects section
                smooth={true}
                duration={1000}
                className="px-6 py-3 border border-neutral-700 rounded-lg font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                View my work
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 text-neutral-400"
          >
            <a
              href="https://github.com/garcia2217"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-g-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:emmanuel.535220103@stu.untar.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block lg:w-1/2">
          <motion.div
            className="relative"
            variants={codeBlockVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-neutral-500/30 rounded-lg blur opacity-30"></div>
            <div className="relative bg-neutral-900 p-8 rounded-lg border border-neutral-800">
              <pre className="text-sm font-mono">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-neutral-200">developer</span> = {"{"}
                {"\n"}
                {"  "}name:{" "}
                <span className="text-purple-300">
                  "Emmanuel Garcia Sumargo"
                </span>
                ,{"\n"}
                {"  "}role:{" "}
                <span className="text-purple-300">
                  "Computer Science Student"
                </span>
                ,{"\n"}
                {"  "}location:{" "}
                <span className="text-purple-300">
                  "Tarumanagara University"
                </span>
                ,{"\n"}
                {"  "}skills: [
                <span className="text-purple-300">"Web Dev"</span>,
                <span className="text-purple-300">"Data Analysis"</span>],
                {"\n"}
                {"}"};
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
