import raw from '@/information.json'

export interface EducationEntry {
  CollegeName: string
  GraducationYear: number
  GraducationMonth: string
  DegreeName: string
  logoSrc: string
  location?: string
  gpa?: string
}

export interface ProjectLink {
  icon: string
  src: string
  displayText: string
}

export interface ProjectEntry {
  name: string
  description: string
  techstack: Record<string, string[]>
  images: string[]
  links?: ProjectLink[]
  highlights?: string[]
}

export interface SocialEntry {
  logo: string
  hyperlink: string
}

export interface ExperiencePosition {
  title: string
  startDate: string
  endDate: string | null
  summary?: string
  responsibilities?: string[]
}

export interface ExperienceEntry {
  company: string
  logo?: string
  role?: string
  location?: string
  startDate?: string
  endDate?: string | null
  summary?: string
  responsibilities?: string[]
  tags?: string[]
  positions?: ExperiencePosition[]
}

interface PortfolioData {
  Overview: string
  Education: EducationEntry[]
  Projects: ProjectEntry[]
  Socials: SocialEntry[]
  ExperienceList: ExperienceEntry[]
}

const data = raw as unknown as PortfolioData

export const overview = data.Overview
export const education = data.Education
export const projects = data.Projects
export const socials = data.Socials
export const experiences = data.ExperienceList

/** Map the legacy `mdi-*` social keys to our inline Icon names. */
export function socialIconName(logo: string): string {
  const map: Record<string, string> = {
    'mdi-email': 'mail',
    'mdi-github': 'github',
    'mdi-linkedin': 'linkedin',
  }
  return map[logo] ?? 'external'
}

export function socialLabel(logo: string): string {
  const map: Record<string, string> = {
    'mdi-email': 'Email',
    'mdi-github': 'GitHub',
    'mdi-linkedin': 'LinkedIn',
  }
  return map[logo] ?? 'Link'
}

export const skills: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'Frameworks & Backend',
    items: ['Spring Boot', 'ASP.NET Core', '.NET Core', 'React', 'Vue.js'],
  },
  {
    label: 'Data & Databases',
    items: ['Apache Spark', 'Snowflake', 'PostgreSQL', 'MongoDB', 'HDFS', 'Firebase Firestore'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, Lambda)', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    label: 'APIs & Architecture',
    items: ['REST APIs', 'Microservices', 'Distributed Systems', 'JWT'],
  },
  {
    label: 'AI & Developer Tools',
    items: ['Ollama (Local LLMs)', 'GitHub Copilot', 'Devin AI', 'Tableau', 'Git', 'Agile / Scrum'],
  },
]

export interface AwardEntry {
  title: string
  issuer: string
  description: string
}

export const awards: AwardEntry[] = [
  {
    title: 'Blue Ribbon Award',
    issuer: 'FactSet Research Systems',
    description: 'Recognized as a top 10% performer.',
  },
  {
    title: '2nd Prize — Coding Competition',
    issuer: 'IEEE College Chapter',
    description: 'Placed second in the coding competition held by the Institute of IEEE.',
  },
]

export const LOCATION = 'Salt Lake City, UT'

export const RESUME_URL =
  'https://github.com/suhrusai/suhrusai/blob/main/resume.pdf?raw=true'

export const PROFILE_IMAGE =
  'https://github.com/suhrusai/suhrusai/blob/main/porfolio-images/Profile%20Pic.jpeg?raw=true'
