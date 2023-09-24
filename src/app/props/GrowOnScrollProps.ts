export type GrowOnScrollProps = {
  growOneTime: boolean;
  children: React.ReactElement;
  growTimeout: number;
  scrollThreshold: number;
  window?: () => Window;
};
