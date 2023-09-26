export type ExperienceProps = {
  textContent: ExperienceContent;
};

export type ExperienceContent = {
  title: string;
  jobs: JobExperience[];
};

export type JobExperience = {
  company: string;
  companyShortName: string;
  position: string;
  startDate: string;
  endDate: string;
  keyPoints: string[];
};
