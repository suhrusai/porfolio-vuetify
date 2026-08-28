import raw from '@/information.json'

export interface EducationEntry {
  CollegeName: string
  GraducationYear: number
  GraducationMonth: string
  DegreeName: string
  logoSrc: string
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
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Vue.js', 'ASP.NET', 'Bootstrap', 'Vuetify'],
  },
  { label: 'Backend', items: ['.NET Framework', '.NET Core', 'Web API', 'Python', 'Node.js'] },
  { label: 'Deployment & Automation', items: ['GitHub Actions', 'PowerShell'] },
  { label: 'Languages', items: ['C#', 'Java', 'Python'] },
]

export const RESUME_URL =
  'https://github.com/suhrusai/suhrusai/blob/main/resume.pdf?raw=true'

export const PROFILE_IMAGE =
  'https://github.com/suhrusai/suhrusai/blob/main/porfolio-images/Profile%20Pic.jpeg?raw=true'
