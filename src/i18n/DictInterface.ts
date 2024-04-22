export interface DictContent {
  loading: string;
  header: DictContentHeader;
  landing: DictContentLanding;
  about: DictContentAbout;
  experience: DictContentExperience;
  projects: DictContentProjects;
  learning: DictContentLearning;
  contact: DictContentContact;
  socials: DictContentSocial[];
}

export interface DictContentAbout {
  title: string;
  photoAlt: string;
  photoSrc: string;
  paragraphs: string[];
  techList: string[];
}

export interface DictContentContact {
  title: string;
  mainParagraph: string;
  email: string;
  footer1: string;
  footer2: string;
  buttonText: string;
  footerRepoLink: string;
  footerReferenceLink: string;
}

export interface DictContentExperience {
  title: string;
  aria: Aria;
  jobs: Job[];
}

export interface Aria {
  panel: string;
  tab: string;
}

export interface Job {
  company: string;
  companyShortName: string;
  companyWebsite: string;
  position: string;
  startDate: string;
  endDate: string;
  keyPoints: string[];
}

export interface DictContentHeader {
  navItems: NavItem[];
  resume: Resume;
  moreInfo: MoreInfo;
}

export interface MoreInfo {
  title: string;
  paragraphs: string[];
  linksTitle: string;
  references: Reference[];
}

export interface Reference {
  referenceName: string;
  refereneceLinks: RefereneceLink[];
}

export interface RefereneceLink {
  ref: string;
  link: string;
}

export interface NavItem {
  itemId: string;
  itemName: string;
  itemLink: string;
}

export interface Resume {
  itemName: string;
  itemLink: string | null;
}

export interface DictContentLanding {
  title0: string;
  title1: string;
  title2: string;
  description: string;
}

export interface DictContentLearning {
  title: string;
}

export interface DictContentProjects {
  title: string;
  aria: Aria;
  projects: Project[];
}

export interface Project {
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
}

export interface DictContentSocial {
  name: string;
  link: string;
}
