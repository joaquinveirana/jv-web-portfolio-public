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
};

export type NavItemType = {
  itemId: string;
  itemName: string;
  itemLink: string;
};

type MoreInfo = {
  title: string;
  paragraph: string;
};
