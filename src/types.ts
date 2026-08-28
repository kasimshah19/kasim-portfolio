export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: string;
  highlights: string[];
  architectureSummary?: string;
  keyWorkflows?: string[];
  accentColor?: string;
  domain?: string;
  badgeType?: string;
  badgeSubtitle?: string;
  techSummary?: string;
  displayTags?: string[];
  isAccent?: boolean;
}

export interface ExperienceModule {
  number: string;
  title: string;
  tags: string[];
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  rolePrefix?: string;
  companyName: string;
  companyLink?: string;
  title: string;
  typeBadge?: string;
  organization: string;
  period: string;
  summary: string;
  modules: ExperienceModule[];
  points?: string[];
  techStack?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreOrStatus: string;
  scoreLabel: string;
  boardOrAffiliation: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  description: string;
  skills: string[];
}

export interface PresentationItem {
  id: string;
  topic: string;
  year: string;
  scope: string;
  description: string;
}

export interface ResearchPublicationItem {
  id: string;
  title: string;
  journalOrConference: string;
  authors: string[];
  role: string;
  year: string;
  paperType: string;
  doiOrLink?: string;
  acceptanceLetterUrl?: string;
  certificateUrl?: string;
  paperPdfUrl?: string;
  status: string;
  abstract: string;
  keywords: string[];
  keyHighlights: string[];
}

export interface MindsetCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
