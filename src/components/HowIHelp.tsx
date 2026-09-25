import React from "react";
import { ShieldCheck, Globe, Cpu, UserMinus, TrendingUp, Scale, Zap } from "lucide-react";
import { motion } from "motion/react";
import { helpItems } from "../data";

const iconMap: Record<string, React.ReactNode> = {
  "help-1": <ShieldCheck className="h-6 w-6 text-teal-400" />,
  "help-2": <Globe className="h-6 w-6 text-teal-400" />,
  "help-3": <Cpu className="h-6 w-6 text-teal-400" />,
  "help-4": <UserMinus className="h-6 w-6 text-teal-400" />,
  "help-5": <TrendingUp className="h-6 w-6 text-teal-400" />,
  "help-6": <Scale className="h-6 w-6 text-teal-400" />,
  "help-7": <Zap className="h-6 w-6 text-teal-400" />,
};

export default function HowIHelp() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="how-i-help" className="py-16 sm:py-20 bg-transparent border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            Operational Value
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            How I Can Help Your Team
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 mx-auto rounded" />
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-lg mx-auto">
            Practical human resources and systems operations designed to eliminate friction and foster clean organizational scaling.
          </p>
        </div>

        {/* 2-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
        >
          {helpItems.map((item, idx) => {
            // Make the 7th item span full width on md screens to balance the grid
            const isLastOdd = idx === helpItems.length - 1 && helpItems.length % 2 !== 0;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`bg-slate-900/35 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex gap-5 hover:border-teal-500/40 hover:shadow-lg transition-all duration-300 group ${
                  isLastOdd ? "md:col-span-2 md:max-w-xl md:mx-auto md:w-full" : ""
                }`}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 h-12 w-12 bg-slate-950/80 rounded-xl flex items-center justify-center border border-slate-800/80 shadow-xs group-hover:bg-teal-500/10 group-hover:border-teal-500/30 transition-all">
                  {iconMap[item.id] || <ShieldCheck className="h-6 w-6 text-teal-400" />}
                </div>

                {/* Text Content */}
                <div className="space-y-1.5 text-left">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
