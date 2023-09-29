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
  link: string;
  repoLink: string;
  description: string;
  techList: string[];
  imagesPaths: string[];
};
