import React from "react";
import { Award, Globe, Database, ShieldCheck, Users, TrendingUp, UserCheck } from "lucide-react";

interface Milestone {
  metric: string;
  description: string;
}

interface Specialization {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    metric: "80%",
    description: "Fewer manual HR errors after digitizing record-keeping via HRMS"
  },
  {
    metric: "100%",
    description: "Compliance in employee exit documentation through structured clearance"
  },
  {
    metric: "95%",
    description: "Attendance in the training programs I designed and led"
  },
  {
    metric: "ISO",
    description: "Key role in certification and \"Best Place to Work\" recognition"
  },
  {
    metric: "KRA",
    description: "KPI-based performance systems that improved accountability across teams"
  }
];

const specializations: Specialization[] = [
  {
    title: "Multi-country payroll",
    description: "End-to-end compliant processing for Nepal, Hong Kong, Singapore, and Australia.",
    icon: <Globe className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    title: "HRIS systems",
    description: "Setup and automation to maintain clean employee records and access control.",
    icon: <Database className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    title: "Compliance and auditing",
    description: "Robust frameworks leading to zero-discrepancy audits and exit procedures.",
    icon: <ShieldCheck className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    title: "Workforce planning",
    description: "Strategic headcount forecasting, onboarding velocity, and role clarity across cross-border teams.",
    icon: <Users className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    title: "Performance management",
    description: "KRA/KPI frameworks, scorecards, and coaching loops that drive execution without bureaucracy.",
    icon: <TrendingUp className="h-4.5 w-4.5 text-teal-400" />
  },
  {
    title: "Onboarding & offboarding",
    description: "Structured Day-1 operational readiness and 100% audit-ready clearance and offboarding.",
    icon: <UserCheck className="h-4.5 w-4.5 text-teal-400" />
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-[1] bg-[#070b18] py-16 sm:py-20 border-b border-[#1c2a44]"
      style={{ position: "relative", zIndex: 1, backgroundColor: "#070b18" }}
    >
      {/* 60px fade at the top edge (transparent to #070b18) so the transition from background animation is seamless */}
      <div
        className="absolute -top-[60px] left-0 right-0 h-[60px] pointer-events-none bg-gradient-to-b from-transparent to-[#070b18]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-left mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-teal-400 uppercase font-semibold">
            About Me
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-1.5">
            The Philosophy Behind the Systems
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-3 rounded" />
        </div>

        {/* Row 1: Two equal columns with equal height (align-items: stretch, 20px gap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch mb-10">
          {/* Left Column: Narrative Story */}
          <div className="bg-[#0c1224] border border-[#1c2a44] rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-lg">
            <div className="space-y-4">
              <h3 className="text-[20px] font-medium text-slate-100 leading-snug tracking-tight">
                I'm an HR professional dedicated to turning HR chaos into systems that scale.
              </h3>
              <p className="text-[14px] text-slate-300 leading-[1.7]">
                Over four years, I've built compliance frameworks, payroll systems, and people operations across Nepal, Hong Kong, Singapore, and Australia, while managing HRIS, onboarding, and performance systems for growing teams.
              </p>
              <p className="text-[14px] text-slate-300 leading-[1.7]">
                I specialize in end-to-end people operations that keep managers and employees aligned across time zones and regulatory environments. I'm open to conversations about international HR operations, people systems, or workforce planning.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1c2a44] flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-teal-400 font-medium">Global Scope: NP • HK • SG • AUS</span>
              <span>Audit-Ready Systems</span>
            </div>
          </div>

          {/* Right Column: Track Record of High-Impact Milestones */}
          <div className="bg-[#0c1224] border border-[#1c2a44] rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-lg">
            <div>
              <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-[#1c2a44]">
                <div className="h-7 w-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Award className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                  Track record of high-impact milestones
                </h3>
              </div>

              {/* Milestones list with thin dividers */}
              <div className="divide-y divide-[#1c2a44]/80">
                {milestones.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-3 first:pt-0 last:pb-0 flex items-center gap-4 group"
                  >
                    <div className="font-display font-bold text-2xl sm:text-3xl text-teal-400 min-w-[72px] flex-shrink-0 tracking-tight group-hover:text-teal-300 transition-colors">
                      {item.metric}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-snug group-hover:text-white transition-colors">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Full-width "Core specializations" label & 3-Column Grid */}
        <div className="pt-2 text-left">
          <div className="mb-4">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-teal-400 font-semibold">
              Core specializations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, i) => (
              <div
                key={i}
                className="bg-[#0c1224] border border-[#1c2a44] hover:border-teal-400/70 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/5 group flex flex-col justify-start"
              >
                <div className="h-9 w-9 rounded-lg bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 mb-3 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all flex-shrink-0">
                  {spec.icon}
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white leading-snug group-hover:text-teal-300 transition-colors mb-1.5">
                  {spec.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
