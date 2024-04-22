import { MouseEventHandler } from 'react';

export type LogoProps = {
  callback: () => MouseEventHandler<HTMLDivElement> | undefined;
  imageLogo: string;
  imageLogoSecondary: string;
  altLogo: string;
};
