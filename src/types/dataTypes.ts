export interface JobRequirements {
  content: string;
  items: string[];
}

export interface JobVacancy {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: JobRequirements;
  role: JobRequirements;
}
