import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowIHelp from "./components/HowIHelp";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import EmailOptionsModal, { triggerEmailModal } from "./components/EmailOptionsModal";
import { personalInfo } from "./data";
import darkBg from "./assets/images/dark_abstract_bg_1784296516872.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased selection:bg-teal-400 selection:text-slate-950 relative overflow-hidden">
      {/* Background Wallpaper & Glow Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">
        {/* Abstract generated wallpaper */}
        <img
          src={darkBg}
          alt="Dark Abstract Wallpaper"
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        {/* Subtle mesh overlay and gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#090d1a]/95 to-[#020617]/98" />
        
        {/* Glow Effects */}
        {/* Obsidian Blue ambient bubble */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[140px]" />
        {/* Midnight Indigo ambient bubble */}
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[130px]" />
        {/* Digital Violet glow in the corner */}
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-violet-600/15 blur-[120px]" />
        {/* Ambient deep obsidian tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,4,16,0.85))]" />
      </div>

      <div className="relative z-10">
        {/* Responsive Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          {/* Hero & Stats Band */}
          <Hero />

          {/* Narrative & High-impact Achievements */}
          <About />

          {/* Value Proposition: How I Can Help Your Team */}
          <HowIHelp />

          {/* Chronological Work Experience timeline */}
          <Experience />

          {/* Multi-Country Payroll, Systems, and HR competencies */}
          <Skills />

          {/* Education & Qualifications */}
          <Education />

          {/* Managerial & Former Manager Endorsements */}
          <Testimonials />

          {/* Interactive Contact & Resume Download requests */}
          <Contact />
        </main>

        {/* Minimalist Professional Footer */}
        <footer className="bg-slate-950/80 backdrop-blur-md text-slate-400 py-12 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-display font-bold text-sm">
                SS
              </div>
              <div className="text-left">
                <span className="font-display font-bold text-white tracking-tight block text-sm">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">
                  HR & People Operations Lead
                </span>
              </div>
            </div>

            <div className="text-center md:text-right space-y-1">
              <p className="text-xs font-mono">
                © {new Date().getFullYear()} Sachin Shrestha. All rights reserved.
              </p>
              <p className="text-[10px] text-slate-500">
                Kathmandu, Bagmati, Nepal • <button onClick={triggerEmailModal} className="hover:text-teal-400 transition-colors cursor-pointer underline decoration-dotted underline-offset-2 bg-transparent border-none p-0 inline">sthsachin018@gmail.com</button>
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Global Email Options Modal */}
      <EmailOptionsModal />
    </div>
  );
}

