export type HeaderProps = {
  lang: string;
  logo: HeaderLogo;
  navItems: NavItem[];
  resume: NavItem;
};

export type HeaderLogo = {
  imageLogo: string;
  imageLogoSecondary: string;
  imageLogoAlt: string;
};
export type NavItem = { itemId: string; itemName: string; itemLink: string };
