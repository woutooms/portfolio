import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "outlined" | "filled";
  children?: React.ReactNode;
}

interface Contact {
  email: string;
  phone: string;
  address: string;
  website: string;
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

interface ContactDetails {
  email: string;
  phone: string;
  address: string;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  year: string;
}

interface EducationProps {
  education: Education[];
}

interface Experience {
  title: string;
  company: string;
  year: string;
  description: string;
  website?: string;
}

interface NavigationItem {
  name: string;
  href: string;
}

export interface ReflectionSection {
  title: string;
  content: string;
}

export interface Reflection {
  stageReflection: ReflectionSection;
  personalGrowth: ReflectionSection;
  futureVision: ReflectionSection;
  workplaceReflection: ReflectionSection;
}

interface Portfolio {
  name: string;
  title: string;
  description: string;
  projects: Project[];
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  contact: Contact;
  reflection: Reflection;
}

interface Project {
  name: string;
  description: string;
  detailedDescription?: string;
  image: string;
  images?: string[];
  technologies?: string[];
  category: string;
  year?: string;
  status?: string;
  website?: string;
}

interface ProjectsListProps {
  projects: Project[];
}

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface Skill {
  name: string;
  level: string;
  proficiency: string;
}

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
}

type SocialLinks =
  | "twitter"
  | "linkedin"
  | "github";

export type {
  ButtonProps,
  Contact,
  ContactDetails,
  Education,
  EducationProps,
  Experience,
  NavigationItem,
  Portfolio,
  Project,
  ProjectsListProps,
  Service,
  Skill,
  SkillCardProps,
  SocialLinks,
};
