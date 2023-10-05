import { AriaTablist } from './AriaProps';

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
  companyWebsite: string;
  position: string;
  startDate: string;
  endDate: string;
  keyPoints: string[];
};
