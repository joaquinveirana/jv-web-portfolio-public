export type ProjectsProps = {
  textContent: ProjectContent;
};

export type ProjectContent = {
  title: string;
  projects: Project[];
};

export type Project = {
  name: string;
  supraName: string;
  date: string;
  imageLink: string;
  websiteLink: string;
  repoLink: string;
  description: string;
  techList: string[];
  imagePath: string;
  videoPath: string;
};
