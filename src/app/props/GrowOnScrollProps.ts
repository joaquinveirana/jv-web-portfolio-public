import { ReactElement } from 'react';

export type GrowOnScrollProps = {
  growOneTime: boolean;
  children: ReactElement;
  growTimeout: number;
  extraScrollThreshold?: number;
  window?: () => Window;
};
