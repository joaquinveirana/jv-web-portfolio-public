export type GrowOnScrollProps = {
  growOneTime: boolean;
  children: React.ReactElement;
  growTimeout: number;
  extraScrollThreshold?: number;
  window?: () => Window;
};
