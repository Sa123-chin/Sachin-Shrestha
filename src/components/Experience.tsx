import React from "react";
import { Briefcase, Calendar, Building, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { experiences } from "../data";

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            Career Track
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            Professional Experience
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 mx-auto rounded" />
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-lg mx-auto">
            A reverse chronological breakdown of HR leadership, compliance-building, and digital systems execution.
          </p>
        </div>

        {/* Timeline Path Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-slate-800 pl-6 sm:pl-8 ml-2 sm:ml-6 space-y-12"
        >
          {experiences.map((exp, index) => {
            const isOdin = exp.company.includes("Odin");
            return (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="relative group"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center h-4.5 w-4.5 sm:h-5 sm:w-5 rounded-full border-2 border-teal-400 bg-slate-950 group-hover:bg-teal-400 transition-all duration-300 ring-4 ring-[#030712]">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 group-hover:bg-slate-950 transition-all duration-300" />
                </span>

                {/* Experience Detail */}
                <div className="bg-slate-900/35 backdrop-blur-md border border-slate-800/80 hover:border-teal-500/40 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Top Header Grid */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                          {exp.role}
                        </h3>
                        {index === 0 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 font-mono uppercase tracking-wider">
                            Latest
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400 mt-1 font-sans">
                        <span className="flex items-center space-x-1.5 font-medium text-slate-200">
                          <Building className="h-4 w-4 text-slate-500" />
                          <span>{exp.company}</span>
                        </span>
                      </div>
                    </div>

                    {/* Timeline Date Tag */}
                    <div className="flex-shrink-0 md:text-right">
                      <span className="inline-flex items-center space-x-1.5 bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono font-medium py-1 px-3 rounded-full">
                        <Calendar className="h-3.5 w-3.5 text-teal-400" />
                        <span>{exp.duration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-3 mt-2">
                    {exp.achievements.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-sm sm:text-base text-slate-300 leading-relaxed">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-teal-400/80 mt-2.5 mr-3" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
