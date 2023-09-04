export type HeaderProps = {
  lang: string;
  lightMode: boolean;
  imageLogoFilename: string;
  imageLogoAlt: string;
  navItems: NavItem[];
  resumeLink: NavItem;
};

export type NavItem = { itemName: string; itemLink: string };
