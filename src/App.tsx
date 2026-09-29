import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowIHelp from "./components/HowIHelp";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import EmailOptionsModal, { triggerEmailModal } from "./components/EmailOptionsModal";
import NetworkBackground from "./components/NetworkBackground";
import { personalInfo } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 font-sans antialiased selection:bg-teal-400 selection:text-slate-950 relative overflow-hidden">
      {/* 
        Continuously moving connected network background: 
        Dark radial gradient background with slowly drifting connected dots.
        Fixed behind all content (z-index: 0, pointer-events: none),
        and cleanly concealed behind the solid #about section.
      */}
      <NetworkBackground />

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

          {/* Featured Technical Projects & Innovations */}
          <Projects />

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

