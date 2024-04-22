import { MouseEventHandler } from 'react';
import { NavItemType } from './HeaderProps';

export type NavItemProps = {
  callback: (a: string) => MouseEventHandler<HTMLAnchorElement> | undefined;
  growTimeout: number;
  navItem: NavItemType;
};
