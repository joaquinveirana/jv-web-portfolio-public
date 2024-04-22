import { DictContentHeader } from '@/i18n/DictInterface';

export type HeaderProps = {
  logo: LogoType;
  textContent: DictContentHeader;
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
