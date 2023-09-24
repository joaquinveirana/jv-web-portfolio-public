import { Vector3 } from '@react-three/fiber';

export type CommonProps = {
  backgroundColor?: string;
  light: LightsProps;
};

export type LightsProps = {
  ambient: AmbientLightProps[];
  point: PointLightProps[];
};

export type AmbientLightProps = {
  intensity: number;
  color: string;
};

export type PointLightProps = {
  intensity: number;
  color: string;
  position: Vector3;
};
