export type ExperienceProps = {
  textContent: ExperienceContent;
};

export type ExperienceContent = {
  title: string;
  jobs: JobExperience[];
  aria: AriaTablist;
};

export type JobExperience = {
  company: string;
  companyShortName: string;
  position: string;
  startDate: string;
  endDate: string;
  keyPoints: string[];
};

export type AriaTablist = {
  panel: string;
  tab: string;
};
