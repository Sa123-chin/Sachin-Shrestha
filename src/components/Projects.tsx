import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Sparkles, CheckCircle2, Layers, Code, X, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { ProjectItem } from "../types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-transparent border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            Featured Systems
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            Technical Projects & Products
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 mx-auto rounded" />
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-xl mx-auto">
            Custom-engineered payroll simulators, AI screening systems, and compliance platforms built to eliminate manual friction and scale People Operations.
          </p>
        </div>

        {/* 2-Column Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-slate-900/35 backdrop-blur-md border border-slate-800/80 rounded-2xl overflow-hidden hover:border-teal-500/40 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Top Section: Media & Badges */}
              <div>
                {/* Thumbnail Image Container */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-slate-950/80 border-b border-slate-800/80 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} screenshot thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full bg-slate-950/85 text-teal-300 border border-teal-500/30 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Quick View Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-xs">
                    <span className="inline-flex items-center space-x-1.5 bg-teal-500/20 text-teal-300 border border-teal-500/40 px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium backdrop-blur-md shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="h-3.5 w-3.5" />
                      <span>View Specifications</span>
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-7 text-left space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-teal-400 font-medium">{project.role}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-teal-300 transition-colors leading-snug cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-sans rounded bg-slate-800/60 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/60 mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 hover:border-teal-500/60 font-sans text-xs sm:text-sm font-medium py-2 px-3.5 rounded-lg transition-all"
                      aria-label={`Live Demo of ${project.title}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-600 font-sans text-xs sm:text-sm font-medium py-2 px-3.5 rounded-lg transition-all"
                      aria-label={`GitHub Repository for ${project.title}`}
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center space-x-1 text-xs sm:text-sm font-sans font-medium text-slate-400 hover:text-teal-300 transition-colors py-2 px-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#020617]/85 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl bg-[#090d1a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-left"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/60">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
                    Project Dossier
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-sans text-slate-400">{selectedProject.role}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800/60 transition-colors focus:outline-none"
                  aria-label="Close project modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 divide-y divide-slate-800/60">
                {/* Hero Preview Image */}
                <div className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950">
                  <img
                    src={selectedProject.thumbnail}
                    alt={`${selectedProject.title} showcase screenshot`}
                    className="w-full h-auto object-cover max-h-72"
                  />
                </div>

                {/* Title & Tags */}
                <div className="pt-4 space-y-3">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                    {selectedProject.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full Description */}
                <div className="pt-6 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Executive Overview
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="pt-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-teal-400" />
                    <span>Key Architectural Features</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-sm font-sans text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Matrix */}
                <div className="pt-6 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-1.5">
                    <Code className="h-3.5 w-3.5 text-teal-400" />
                    <span>Technology Stack & Integrations</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-sans rounded-lg bg-slate-800/70 text-slate-200 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer / Actions */}
              <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 font-sans text-xs sm:text-sm font-medium py-2 px-4 rounded-lg shadow-sm transition-all"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-sans text-xs sm:text-sm font-medium py-2 px-4 rounded-lg transition-all"
                    >
                      <Github className="h-4 w-4" />
                      <span>View GitHub</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-sans text-slate-400 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-800/40 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
