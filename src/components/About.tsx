import React from "react";
import { Check, Award, Briefcase, Globe, Database, UserCheck } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo, keyImpacts } from "../data";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const specialties = [
    {
      icon: <Globe className="h-5 w-5 text-teal-400" />,
      title: "Multi-Country Payroll",
      desc: "End-to-end compliant processing for Nepal, Hong Kong, Singapore, and Australia.",
    },
    {
      icon: <Database className="h-5 w-5 text-teal-400" />,
      title: "HRIS Systems",
      desc: "Setup and automation to maintain clean employee records and access control.",
    },
    {
      icon: <UserCheck className="h-5 w-5 text-teal-400" />,
      title: "Compliance & Auditing",
      desc: "Robust frameworks leading to zero-discrepancy audits and exit procedures.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-transparent border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-left mb-10 sm:mb-12">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            About Me
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            The Philosophy Behind the Systems
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 rounded" />
        </div>

        {/* About Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Story & Specialties */}
          <div className="lg:col-span-6 flex flex-col space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                {personalInfo.bioParagraphs[0]}
              </h3>
              {personalInfo.bioParagraphs.slice(1).map((para, i) => (
                <p key={i} className="font-sans text-base text-slate-300 leading-relaxed text-justify sm:text-left">
                  {para}
                </p>
              ))}
            </div>

            {/* Micro Specialties */}
            <div className="space-y-4 pt-4 border-t border-slate-900">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                Core Specializations
              </h4>
              <div className="grid gap-4">
                {specialties.map((spec, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl hover:bg-slate-900/40 transition-all duration-300 border border-transparent hover:border-slate-800/80"
                  >
                    <div className="flex-shrink-0 h-10 w-10 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center">
                      {spec.icon}
                    </div>
                    <div>
                      <h5 className="font-display text-sm font-semibold text-slate-200">
                        {spec.title}
                      </h5>
                      <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1">
                        {spec.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Track Record of Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 bg-slate-900/35 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Award className="h-5 w-5 text-teal-400" />
                <h3 className="font-display text-lg font-bold text-white">
                  Track Record of High-Impact Milestones
                </h3>
              </div>

              <div className="space-y-4">
                {keyImpacts.map((impact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3.5 group"
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mt-0.5 group-hover:bg-teal-400 group-hover:border-teal-400 transition-colors">
                      <Check className="h-3.5 w-3.5 text-teal-400 group-hover:text-slate-950 transition-colors" />
                    </div>
                    <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                      {impact}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
