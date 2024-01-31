export interface ExperienceI {
    title: string;
    company: string;
    start: string;
    end: string;
    description?: string;
  }
  
export interface SkillI {
    name: string;
  }

export interface ProjectI {
  image: string,
  title: string,
  description: string,
  link?: string,
  skills: string[],
  githubFrontend?: string,
  githubBackend?: string,
}