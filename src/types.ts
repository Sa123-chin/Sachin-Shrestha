export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone?: string;
  headline: string;
  subheadline: string;
  bioParagraphs: string[];
  avatarUrl: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
}

export interface HelpItem {
  id: string;
  title: string;
  description: string;
}

