export type HeaderProps = {
  lang: string;
  lightMode: boolean;
  logo: HeaderLogo;
  navItems: NavItem[];
  resumeLink: NavItem;
};

export type HeaderLogo = {
  imageLogo: string;
  imageLogoSecondary: string;
  imageLogoAlt: string;
};
export type NavItem = { itemName: string; itemLink: string };
