import { PersonalInfo, StatItem, ExperienceItem, SkillCategory, EducationItem, TestimonialItem, HelpItem, ProjectItem } from "./types";
import sachinAvatar from "./assets/images/sachin_avatar_permanent.png";
import taxCalcThumbnail from "./assets/images/nepal_tax_calc_mockup_1790654474409.jpg";
import aiCopilotThumbnail from "./assets/images/ai_talent_copilot_mockup_1790654487743.jpg";

export const personalInfo: PersonalInfo = {
  name: "Sachin Shrestha",
  location: "Kathmandu, Bagmati, Nepal",
  email: "sthsachin018@gmail.com",
  phone: "+977-9843766018",
  headline: "HR Professional & People Operations Lead | Multi-Country Payroll (NP, HK, SG, AUS) | HRIS & Compliance",
  subheadline: "Turning HR chaos into systems that scale — 80% fewer manual errors, 100% audit-ready compliance, across 4 countries.",
  bioParagraphs: [
    "I am an HR professional dedicated to turning HR chaos into systems that scale.",
    "Over 4+ years, I've built compliance frameworks, payroll systems, and people operations across four countries — Nepal, Hong Kong, Singapore, and Australia — while managing HRIS, onboarding, and performance systems for growing teams.",
    "I specialize in end-to-end people operations: multi-country payroll, HR compliance, HRIS management, and performance systems that keep managers and employees aligned across time zones and regulatory environments. Open to conversations about international HR operations, people systems, or workforce planning — feel free to connect."
  ],
  avatarUrl: sachinAvatar
};

export const stats: StatItem[] = [
  {
    id: "stat-1",
    value: "80%",
    label: "HR Error Reduction",
    description: "Reduction in manual HR errors via HRMS digitization"
  },
  {
    id: "stat-2",
    value: "100%",
    label: "Exit Compliance Rate",
    description: "Compliance rate in employee exit documentation"
  },
  {
    id: "stat-3",
    value: "95%",
    label: "Training Attendance",
    description: "Employee attendance in training programs led"
  },
  {
    id: "stat-4",
    value: "4 Countries",
    label: "Global Payroll Scope",
    description: "Multi-country payroll managed (Nepal, Hong Kong, Singapore, Australia)"
  }
];

export const keyImpacts: string[] = [
  "Reduced manual HR errors by 80% by digitizing record-keeping via HRMS",
  "Achieved 100% compliance in employee exit documentation through structured clearance processes",
  "Drove 95% attendance in employee training programs I designed and led",
  "Played a key role in a company's successful ISO certification and 'Best Place to Work' recognition",
  "Rolled out KRA/KPI-based performance systems that improved accountability across teams"
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "People Operations & System Lead",
    company: "Odin Mortgage & Tax",
    duration: "May 2026 – Present",
    achievements: [
      "Design and implement Management Operating Systems — scorecards, huddles, coaching loops — adopted across all levels",
      "Defines primary outputs and guardrails for every team and manager role.",
      "Builds and maintains a decisions-grade dashboard — binary, objective, and trusted by leadership.",
      "Owns the performance review framework: cadence, structure, documentation, and audit-readiness",
      "Own end-to-end, multi-region payroll — salaries, commissions, statutory contributions — accurate and on time, every time.",
      "Prepare and manage employment contracts, NDAs, and all HR documentation pre- and post-hire",
      "Drive manager enablement through SOPs, templates, and role clarity frameworks that standardize execution across teams.",
      "Maintain HRIS data integrity and run compliant onboarding and offboarding at scale"
    ]
  },
  {
    id: "exp-2",
    role: "People Operations Specialist",
    company: "Odin Mortgage & Tax",
    duration: "Jan 2026 – Apr 2026",
    achievements: [
      "Supported HRIS management and cross-regional payroll coordination",
      "Contributed to onboarding and compliance documentation processes"
    ]
  },
  {
    id: "exp-3",
    role: "People Operations Officer",
    company: "Odin Mortgage & Tax",
    duration: "Sep 2025 – Dec 2025",
    achievements: [
      "Prepare, issue, and maintain employment contracts, variations, NDAs, and HR documentation audit-ready at all times",
      "Track probation milestones and documentation deadlines in coordination with line managers.",
      "Manage end-to-end payroll processing across 4 countries (Nepal, Hong Kong, Singapore, Australia), coordinating with internal teams and external stakeholders to navigate differing tax, statutory contribution, and compliance requirements per jurisdiction means.",
      "Ensure salaries, commissions, statutory contributions, and adjustments are processed accurately and on time.",
      "Investigate and resolve payroll discrepancies using structured workflows and documented processes.",
      "Maintain data integrity across HRIS and People Ops platforms; manage access provisioning and revocation per onboarding/offboarding checklists.",
      "Support system audits, updates, and reporting requirements",
      "Run structured onboarding to ensure every new hire is operationally ready from Day 1.",
      "Manage compliant offboarding — exit documentation, final payroll coordination, and access removal.",
      "Provide operational support for performance cycles — tracking timelines, documentation, and completion status."
    ]
  },
  {
    id: "exp-4",
    role: "HR Officer",
    company: "Vianet Communication Limited",
    duration: "May 2024 – Sep 2025",
    achievements: [
      "Oversaw HR functions and coordination across the organization, managing onboarding, training, performance reviews, and policy compliance",
      "Introduced a structured induction program that improved the onboarding experience for new employees",
      "Designed and implemented an HR workflow process that streamlined operations organization-wide",
      "Rolled out a KRA/KPI-based performance evaluation system, enhancing accountability and goal alignment across teams",
      "Revised job descriptions across all levels and departments for accurate role clarity",
      "Prevented resignation of key talent through proactive engagement and retention efforts, addressing grievances before escalation"
    ]
  },
  {
    id: "exp-5",
    role: "Junior-Executive, People and Culture",
    company: "Techone Global Nepal",
    duration: "Aug 2023 – May 2024",
    achievements: [
      "Managed daily operations of the People & Culture department, leading full-cycle recruitment, onboarding, training, and offboarding",
      "Coordinated annual performance review cycles, ensuring 100% timely completion",
      "Conducted Microsoft Office training sessions achieving 95% employee attendance",
      "Played a pivotal role in the company's successful ISO standard certification",
      "Contributed to the organization being recognized as a \"Best Place to Work\" through enhanced HR practices and engagement initiatives",
      "Liaised with Finance and Admin on EPF/CIT enrollment and compliance documentation"
    ]
  },
  {
    id: "exp-6",
    role: "Junior Officer, HR and Admin",
    company: "Jagdamba Steels Limited",
    duration: "Dec 2021 – May 2023",
    achievements: [
      "Managed end-to-end recruitment process — sourcing, screening, interviews, and onboarding — while maintaining full documentation compliance",
      "Implemented digital record-keeping via HRMS, reducing manual errors by 80%",
      "Improved monthly HR reporting efficiency by automating key data collection processes",
      "Introduced a structured clearance process ensuring 100% compliance during employee exits",
      "Coordinated with factory HR teams on recruitment, onboarding, and contract renewals",
      "Managed attendance tracking, travel/allowance processing, and monthly HR reporting on manpower and attrition"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "cat-core",
    categoryName: "Core Expertise",
    skills: [
      "Payroll Management (NP, HK, SG, AUS)",
      "HRIS (HR Information Systems)",
      "HR Compliance & Auditing"
    ]
  },
  {
    id: "cat-additional",
    categoryName: "People Operations & Talent",
    skills: [
      "Workforce Planning",
      "Employee Onboarding & Offboarding",
      "Employment Contracts & NDAs",
      "Performance Management (KRA/KPI)",
      "People Operations",
      "Talent Management",
      "HR Policies & Procedures"
    ]
  },
  {
    id: "cat-systems",
    categoryName: "Methods & Frameworks",
    skills: [
      "Management Operating Systems (MOS)",
      "Scorecards & Huddles",
      "Coaching Loops",
      "Digital Transformation (HRMS)",
      "ISO Certification Support",
      "Employee Retention Workflows"
    ]
  }
];

export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Master of Business Administration (MBA)",
    institution: "Lincoln University College",
    duration: "Dec 2022 – Oct 2024"
  },
  {
    id: "edu-2",
    degree: "Bachelor of Business Administration (BBA), Finance",
    institution: "Pokhara University",
    duration: "Jul 2017 – Jun 2022"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Sachin is dependable, takes ownership of his work, and shows a strong willingness to continuously learn and improve. He brings solid knowledge of HR compliance and applies it effectively in HR Operations.",
    author: "Jyoti Sigdel",
    title: "People Systems & Organizational Growth"
  },
  {
    id: "test-2",
    quote: "I had the privilege of working with Sachin Shrestha, where he stood out as an exceptional HR professional with an impressive command of laws, regulations, and HR best practices.",
    author: "Syeda Rafia Islam Lopa",
    title: "HR Professional"
  },
  {
    id: "test-3",
    quote: "Sachin is always eager to learn and displays confidence with a can-do attitude. He is diligent, a fast learner, and absolutely great with HR work.",
    author: "Rashmi Baral",
    title: "Former Manager"
  }
];

export const helpItems: HelpItem[] = [
  {
    id: "help-1",
    title: "Build compliant HR systems from scratch",
    description: "Designing onboarding, payroll, and documentation workflows that hold up under audit."
  },
  {
    id: "help-2",
    title: "Manage payroll across multiple countries without missed cycles",
    description: "Proven across Nepal, Hong Kong, Singapore, and Australia."
  },
  {
    id: "help-3",
    title: "Turn messy manual processes into digital systems",
    description: "Cut manual HR errors by 80% through structured HRMS implementation."
  },
  {
    id: "help-4",
    title: "Keep exits and offboarding 100% compliant",
    description: "Reducing legal and operational risk during employee transitions."
  },
  {
    id: "help-5",
    title: "Design performance systems people actually use",
    description: "KRA/KPI frameworks that improve accountability without adding bureaucracy."
  },
  {
    id: "help-6",
    title: "Bridge the gap between compliance and culture",
    description: "Policies that protect the company without making the workplace feel rigid."
  },
  {
    id: "help-7",
    title: "Move fast without cutting corners",
    description: "Structured workflows catch and resolve issues quickly, not later."
  }
];

export const projects: ProjectItem[] = [
  {
    id: "nepal-tax-calculator",
    title: "Nepal Personal Income Tax & TDS Forecast Calculator (FY 2083/84)",
    summary: "An IRD-compliant progressive payroll tax calculator, 12-month rolling TDS simulator, and audit-ready worksheet generator for salaried and individual taxpayers in Nepal.",
    description: "A fiscal and payroll tax system modeled on the Income Tax Act, 2058 (with FY 2083/84 Finance Act amendments). It supports full-year filers and mid-year joiners (pro-rata), statutory exemptions (CIT, SSF, EPF, Life/Health/Building Insurance, Remote Area Allowances A-E), the 1% social security levy exemption for SSF contributors, and month-by-month TDS schedules. It also compares Individual vs. Married slabs and exports a 2-page audit-grade PDF.",
    keyFeatures: [
      "Progressive tax engine (1%, 10%, 20%, 30%, 36%, 39% slabs) with Individual/Married toggle",
      "Statutory deductions and credits (SSF, CIT, EPF caps, insurance limits, Female, Medical, Foreign and Incapacitated tax credits, Remote Area concessions)",
      "Editable 12-month Bikram Sambat ledger (Shrawan to Ashad) with IRD horizontal template",
      "Unmarried vs. Married scenario comparison with marginal/effective rates and slab charts",
      "Audit-ready PDF export (portrait worksheet plus landscape 12-month TDS schedule)",
      "Nepali (Lakhs/Crores) and International number formats, with one-click presets"
    ],
    tags: ["Fintech", "Payroll", "Tax", "Nepal"],
    role: "Solo developer",
    techStack: ["React", "TypeScript", "Tailwind CSS", "PDF Generation", "Fintech Engine"],
    liveUrl: "https://nepal-personal-income-tax-calculator-506321761975.asia-southeast1.run.app",
    githubUrl: "https://github.com/sthsachin017",
    thumbnail: taxCalcThumbnail,
    gallery: [taxCalcThumbnail]
  },
  {
    id: "ai-talent-copilot",
    title: "AI Talent Acquisition Screening & Interview Copilot",
    summary: "An SOP-driven recruitment copilot that analyzes resumes against job descriptions, enforces company core values, flags risks, and generates interview scripts and executive briefings.",
    description: "A platform for TA teams and hiring managers that replaces slow, bias-prone resume screening with a strict SOP. It parses the CV, JD and core values, separates Must-Haves from Nice-to-Haves, produces a calibrated 0-100 match score with red-flag detection, and gives an advance/reject recommendation with evidence. For advancing candidates it generates phone screening scripts; for rejected candidates it drafts empathetic rejection emails.",
    keyFeatures: [
      "AI screening and 0-100 scoring with verbatim CV evidence and red-flag detection (gaps, job-hopping, relocation)",
      "Executive dossier and hiring manager memo with competency matrix, tenure/stability index, and core values alignment",
      "Dual-mode phone scripts: 60-second knockout and full 15-minute SOP interview board with a live checklist",
      "60-second executive briefing in four 15-second windows, with in-browser text-to-speech (1x, 1.25x, 1.5x)",
      "Multi-role requisition management, screening history, clipboard export, and one-click rejection emails"
    ],
    tags: ["AI", "Recruitment", "HR Tech", "Productivity"],
    role: "Solo developer",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Web Speech API"],
    liveUrl: "https://candidate-screening.ai.studio",
    githubUrl: "https://github.com/sthsachin017",
    thumbnail: aiCopilotThumbnail,
    gallery: [aiCopilotThumbnail]
  }
];


