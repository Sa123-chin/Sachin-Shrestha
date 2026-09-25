import React from "react";
import { ArrowDown, Mail, MapPin, FileText, CheckCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo, stats } from "../data";
import { triggerEmailModal } from "./EmailOptionsModal";

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 bg-transparent overflow-hidden flex flex-col justify-center"
    >
      {/* Decorative ambient glowing lines and dots to match tech minimalist style */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Main Hero Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-display text-lg sm:text-xl font-semibold text-slate-200 leading-relaxed border-l-4 border-teal-500 pl-4 py-1"
            >
              {personalInfo.headline}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              {personalInfo.subheadline}
            </motion.p>

            {/* Quick Metadata */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-400 font-sans"
            >
              <div className="flex items-center space-x-1">
                <MapPin className="h-4.5 w-4.5 text-teal-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4.5 w-4.5 text-teal-400" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={triggerEmailModal}
                  className="hover:text-teal-300 transition-colors underline decoration-dotted underline-offset-4 cursor-pointer"
                >
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4 text-teal-400" />
                  <a
                    href={`tel:${personalInfo.phone.replace(/[\s-]/g, "")}`}
                    className="hover:text-teal-300 transition-colors underline decoration-dotted underline-offset-4"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={() => handleScrollTo("#contact")}
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-sans font-bold py-3 px-6 rounded-lg shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:shadow-[0_0_25px_rgba(20,184,166,0.45)] transition-all"
              >
                Let's Discuss Opportunities
              </button>
              <button
                onClick={() => handleScrollTo("#experience")}
                className="inline-flex items-center justify-center bg-slate-900/60 hover:bg-slate-800/80 text-white border border-slate-800 font-sans font-medium py-3 px-6 rounded-lg shadow-sm transition-all"
              >
                <span>Explore Track Record</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Sachin Portrait Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-sm w-full">
              {/* Decorative behind-frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal-500 via-indigo-500 to-violet-600 opacity-35 blur-lg group-hover:opacity-45 transition-opacity" />
              
              <div className="relative bg-slate-900/65 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-2xl flex flex-col items-center text-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 border border-slate-800">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-102 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="w-full flex items-center justify-between border-t border-slate-800 pt-3">
                  <div className="text-left">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Current Role</p>
                    <p className="text-sm font-semibold text-slate-200">People Ops & System Lead</p>
                    <p className="text-xs text-slate-400">Odin Mortgage & Tax</p>
                  </div>
                  <div className="h-9 w-9 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Stats Band */}
        <div className="mt-20 lg:mt-24">
          <div className="text-center mb-10">
            <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
              The Impact in Numbers
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
              Demonstrated Performance Metrics
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            id="stats-band"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                variants={statVariants}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-teal-500/40 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
              >
                {/* Accent accent bar top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-teal-400 transition-colors" />

                <div>
                  <div className="text-4xl lg:text-5xl font-display font-bold text-teal-400 tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-display font-semibold text-slate-200 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => handleScrollTo("#about")}
            className="animate-bounce flex flex-col items-center text-slate-400 hover:text-white transition-colors"
            aria-label="Scroll Down"
          >
            <span className="text-xs font-mono tracking-widest uppercase mb-1">Read Bio</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
