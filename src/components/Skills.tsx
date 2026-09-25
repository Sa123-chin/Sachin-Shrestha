import React from "react";
import { Award, Check, Settings, Briefcase, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { skillCategories } from "../data";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "cat-core":
        return <Award className="h-5 w-5 text-teal-400" />;
      case "cat-additional":
        return <Briefcase className="h-5 w-5 text-teal-400" />;
      case "cat-systems":
        return <Cpu className="h-5 w-5 text-teal-400" />;
      default:
        return <Settings className="h-5 w-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-transparent border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            Capabilities
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            Professional Skills & Methodologies
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 mx-auto rounded" />
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-lg mx-auto">
            A comprehensive matrix of core, operational, and procedural HR competencies across jurisdictions.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-slate-900/35 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-teal-500/40 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800/60">
                  <div className="h-10 w-10 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    {category.categoryName}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => {
                    const isHighlight = category.id === "cat-core";
                    return (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-sans font-medium transition-all ${
                          isHighlight
                            ? "bg-teal-500 text-slate-950 font-semibold shadow-[0_0_12px_rgba(20,184,166,0.25)]"
                            : "bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        {!isHighlight && <Check className="h-3 w-3 text-teal-400" />}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Decorative accent footer */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                {category.skills.length} core competencies
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
