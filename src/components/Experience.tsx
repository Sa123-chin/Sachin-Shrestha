import React, { useState } from "react";
import { Briefcase, Flag, Award, Activity, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface RoleDetail {
  id: string;
  stepLabel: string;
  title: string;
  date: string;
  isCurrent?: boolean;
  bullets: string[];
}

interface CompanyItem {
  id: string;
  company: string;
  dateSpan: string;
  headlineChip: string;
  iconType: "odin" | "vianet" | "techone" | "jagdamba";
  roles: RoleDetail[];
  defaultRoleIndex?: number;
}

const companiesData: CompanyItem[] = [
  {
    id: "odin",
    company: "Odin Mortgage & Tax",
    dateSpan: "Sep 2025 – Present",
    headlineChip: "4-country payroll",
    iconType: "odin",
    defaultRoleIndex: 2, // Default to Lead
    roles: [
      {
        id: "officer",
        stepLabel: "Officer",
        title: "People Operations Officer",
        date: "Sep 2025 – Dec 2025",
        isCurrent: false,
        bullets: [
          "Prepared, issued, and maintained employment contracts, variations, NDAs, and HR documentation audit-ready at all times",
          "Tracked probation milestones and documentation deadlines with line managers",
          "Managed end-to-end payroll across 4 countries (Nepal, Hong Kong, Singapore, Australia) under differing tax and statutory rules",
          "Ensured salaries, commissions, statutory contributions, and adjustments were processed accurately and on time",
          "Investigated and resolved payroll discrepancies using structured workflows and documented processes"
        ]
      },
      {
        id: "specialist",
        stepLabel: "Specialist",
        title: "People Operations Specialist",
        date: "Jan 2026 – Apr 2026",
        isCurrent: false,
        bullets: [
          "Supported HRIS management and cross-regional payroll coordination",
          "Contributed to onboarding and compliance documentation processes"
        ]
      },
      {
        id: "lead",
        stepLabel: "Lead",
        title: "People Operations & System Lead",
        date: "May 2026 – Present",
        isCurrent: true,
        bullets: [
          "Design and implement Management Operating Systems (scorecards, huddles, coaching loops) adopted across all levels",
          "Define primary outputs and guardrails for every team and manager role",
          "Build and maintain a decisions-grade dashboard: binary, objective, and trusted by leadership",
          "Own the performance review framework: cadence, structure, documentation, and audit-readiness",
          "Own end-to-end, multi-region payroll (salaries, commissions, statutory contributions), accurate and on time",
          "Prepare and manage employment contracts, NDAs, and all HR documentation pre- and post-hire",
          "Drive manager enablement through SOPs, templates, and role clarity frameworks",
          "Maintain HRIS data integrity and run compliant onboarding and offboarding at scale"
        ]
      }
    ]
  },
  {
    id: "vianet",
    company: "Vianet Communication Limited",
    dateSpan: "May 2024 – Sep 2025",
    headlineChip: "KRA/KPI system",
    iconType: "vianet",
    roles: [
      {
        id: "hr-officer",
        stepLabel: "HR Officer",
        title: "HR Officer",
        date: "May 2024 – Sep 2025",
        isCurrent: false,
        bullets: [
          "Oversaw HR functions across the organization: onboarding, training, performance reviews, and policy compliance",
          "Introduced a structured induction program that improved the onboarding experience",
          "Designed and implemented an HR workflow process that streamlined operations organization-wide",
          "Rolled out a KRA/KPI-based performance evaluation system, improving accountability and goal alignment",
          "Revised job descriptions across all levels and departments for accurate role clarity",
          "Prevented resignation of key talent through proactive engagement, addressing grievances before escalation"
        ]
      }
    ]
  },
  {
    id: "techone",
    company: "Techone Global Nepal",
    dateSpan: "Aug 2023 – May 2024",
    headlineChip: "ISO certification",
    iconType: "techone",
    roles: [
      {
        id: "junior-exec",
        stepLabel: "Junior Executive",
        title: "Junior Executive, People and Culture",
        date: "Aug 2023 – May 2024",
        isCurrent: false,
        bullets: [
          "Managed daily People & Culture operations, leading full-cycle recruitment, onboarding, training, and offboarding",
          "Coordinated annual performance review cycles with 100% timely completion",
          "Ran Microsoft Office training sessions with 95% employee attendance",
          "Played a pivotal role in the company's ISO standard certification",
          "Contributed to the company being recognized as a \"Best Place to Work\"",
          "Liaised with Finance and Admin on EPF/CIT enrollment and compliance documentation"
        ]
      }
    ]
  },
  {
    id: "jagdamba",
    company: "Jagdamba Steels Limited",
    dateSpan: "Dec 2021 – May 2023",
    headlineChip: "80% fewer errors",
    iconType: "jagdamba",
    roles: [
      {
        id: "junior-officer",
        stepLabel: "Junior Officer",
        title: "Junior Officer, HR and Admin",
        date: "Dec 2021 – May 2023",
        isCurrent: false,
        bullets: [
          "Managed end-to-end recruitment (sourcing, screening, interviews, onboarding) with full documentation compliance",
          "Implemented digital record-keeping via HRMS, reducing manual errors by 80%",
          "Improved monthly HR reporting efficiency by automating key data collection",
          "Introduced a structured clearance process ensuring 100% compliance during employee exits",
          "Coordinated with factory HR teams on recruitment, onboarding, and contract renewals",
          "Managed attendance tracking, travel/allowance processing, and monthly HR reporting on manpower and attrition"
        ]
      }
    ]
  }
];

export default function Experience() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);

  const handleCardClick = (companyId: string) => {
    if (selectedCompanyId === companyId) {
      setSelectedCompanyId(null);
    } else {
      setSelectedCompanyId(companyId);
      const comp = companiesData.find((c) => c.id === companyId);
      setSelectedRoleIndex(comp?.defaultRoleIndex ?? 0);
    }
  };

  const getCompanyIcon = (type: CompanyItem["iconType"]) => {
    switch (type) {
      case "odin":
        return <Briefcase className="h-5 w-5 text-violet-400" />;
      case "vianet":
        return <Flag className="h-5 w-5 text-teal-400" />;
      case "techone":
        return <Award className="h-5 w-5 text-orange-400" />;
      case "jagdamba":
        return <Activity className="h-5 w-5 text-blue-400" />;
    }
  };

  const getIconWrapperClasses = (type: CompanyItem["iconType"]) => {
    switch (type) {
      case "odin":
        return "bg-violet-500/10 border-violet-500/30 text-violet-400";
      case "vianet":
        return "bg-teal-500/10 border-teal-500/30 text-teal-400";
      case "techone":
        return "bg-orange-500/10 border-orange-500/30 text-orange-400";
      case "jagdamba":
        return "bg-blue-500/10 border-blue-500/30 text-blue-400";
    }
  };

  const selectedCompany = companiesData.find((c) => c.id === selectedCompanyId);
  const currentRole = selectedCompany?.roles[selectedRoleIndex] || selectedCompany?.roles[0];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-sm sm:text-base font-mono tracking-widest text-teal-400 uppercase font-semibold">
            Career Track
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
            Professional Experience
          </h2>
          <div className="h-1 w-12 bg-teal-400 mt-4 mx-auto rounded" />
          <p className="font-sans text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            A career built on HR leadership, compliance, and digital systems. Select a company to see how my responsibilities grew over time.
          </p>
        </div>

        {/* 1) Four Companies in ONE Horizontal Row (4 cols desktop, 2 cols mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {companiesData.map((item) => {
            const isSelected = selectedCompanyId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleCardClick(item.id)}
                aria-expanded={isSelected}
                aria-controls="experience-details-panel"
                className={`relative w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
                  isSelected
                    ? "bg-[#0e172e] border-teal-400 shadow-xl shadow-teal-500/10 -translate-y-1"
                    : "bg-[#0c1224] border-[#1c2a44] hover:border-[#2a3d63] hover:bg-[#111a33] hover:-translate-y-0.5"
                }`}
              >
                {/* Top Row: Icon tile + Headline chip */}
                <div className="flex items-center justify-between gap-2 w-full">
                  <div
                    className={`h-9 w-9 rounded-lg flex items-center justify-center border ${getIconWrapperClasses(
                      item.iconType
                    )}`}
                  >
                    {getCompanyIcon(item.iconType)}
                  </div>
                  <span
                    className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border transition-all ${
                      isSelected
                        ? "bg-teal-500/15 border-teal-500/35 text-teal-300"
                        : "bg-slate-900/60 border-slate-800 text-slate-400"
                    }`}
                  >
                    {item.headlineChip}
                  </span>
                </div>

                {/* Company Name & Date */}
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-white leading-tight tracking-tight">
                    {item.company}
                  </h3>
                  <span className="block font-mono text-xs text-slate-400 font-feature-settings-tnum">
                    {item.dateSpan}
                  </span>
                </div>

                {/* Bottom Pointer Indicator when active */}
                {isSelected && (
                  <div className="hidden lg:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#0e172e] border-r-2 border-b-2 border-teal-400 rotate-45 z-10" />
                )}
              </button>
            );
          })}
        </div>

        {/* Muted Hint when unselected */}
        {!selectedCompanyId && (
          <div className="text-center py-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-sans">
            <Info className="h-4 w-4" />
            <span>Select a company to see the details</span>
          </div>
        )}

        {/* 2) Details Panel directly below row */}
        <AnimatePresence mode="wait">
          {selectedCompany && currentRole && (
            <motion.div
              id="experience-details-panel"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden mt-3"
            >
              <div className="bg-[#0c1224] border border-[#1c2a44] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                {/* Panel Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-4 pb-5 border-b border-[#1c2a44] mb-6">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {selectedCompany.company}
                    </h3>
                    <span className="font-mono text-xs sm:text-sm text-slate-400 font-feature-settings-tnum">
                      {selectedCompany.dateSpan}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCompanyId(null)}
                    className="inline-flex items-center space-x-1 text-xs font-sans text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
                  >
                    <span>Close</span>
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Horizontal Stepper for Odin (or any multi-role company) */}
                {selectedCompany.roles.length > 1 && (
                  <div className="mb-7 p-4 sm:p-5 bg-[#070b18]/60 border border-[#1c2a44] rounded-xl">
                    <span className="block text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold text-center mb-4">
                      Career Progression (Oldest → Newest)
                    </span>

                    <div className="relative flex items-center justify-between max-w-xl mx-auto px-4">
                      {/* Connecting Line */}
                      <div className="absolute top-[14px] left-[15%] right-[15%] h-[2px] bg-[#1c2a44] z-0" />

                      {selectedCompany.roles.map((r, idx) => {
                        const isActive = idx === selectedRoleIndex;
                        return (
                          <button
                            key={r.id}
                            type="button"
                            onClick={() => setSelectedRoleIndex(idx)}
                            aria-selected={isActive}
                            className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                          >
                            {/* Dot on line */}
                            <div
                              className={`h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                                isActive
                                  ? "bg-teal-400 border-teal-400 shadow-[0_0_12px_rgba(25,211,176,0.6)]"
                                  : "bg-[#0c1224] border-[#1c2a44] group-hover:border-teal-400/60"
                              }`}
                            >
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  isActive ? "bg-[#070b18]" : "bg-transparent"
                                }`}
                              />
                            </div>

                            <span
                              className={`text-xs font-semibold mt-2 transition-colors ${
                                isActive ? "text-teal-300" : "text-slate-400 group-hover:text-slate-200"
                              }`}
                            >
                              {r.stepLabel}
                            </span>
                            <span className="text-[11px] font-mono text-slate-500 font-feature-settings-tnum mt-0.5">
                              {r.date.split("–")[0].trim()}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Role Details Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-2.5 flex-wrap">
                    <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                      {currentRole.title}
                    </h4>
                    {currentRole.isCurrent && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold tracking-wider bg-teal-500/15 text-teal-300 border border-teal-500/30">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-slate-400 font-feature-settings-tnum">
                    {currentRole.date}
                  </span>
                </div>

                {/* Bullets with Teal Markers */}
                <ul className="space-y-2.5">
                  {currentRole.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start text-sm sm:text-base text-slate-300 leading-relaxed"
                    >
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-teal-400 mt-2.5 mr-3 shadow-[0_0_6px_rgba(25,211,176,0.5)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
