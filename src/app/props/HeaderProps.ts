export type HeaderProps = {
  logo: LogoType;
  textContent: {
    navItems: NavItemType[];
    resume: NavItemType;
    moreInfo: MoreInfo;
  };
};

export type LogoType = {
  imageLogo: string;
  imageLogoSecondary: string;
  altLogo: string;
};

export type NavItemType = {
  itemId: string;
  itemName: string;
  itemLink: string;
};

export type MoreInfo = {
  title: string;
  paragraphs: string[];
  linksTitle: string;
  references: Reference[];
};

export type Reference = {
  referenceName: string;
  refereneceLinks: RefLink[];
};

export type RefLink = { ref: string; link: string };
