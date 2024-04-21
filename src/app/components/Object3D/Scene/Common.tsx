import * as React from 'react';
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import {
  AmbientLightProps,
  CommonProps,
  PointLightProps,
} from '@/app/props/CommonProps';

export const Common = (props: CommonProps) => (
  <Suspense fallback={null}>
    {props.backgroundColor && (
      <color attach="background" args={[props.backgroundColor]} />
    )}
    {props.light.ambient.map((light: AmbientLightProps, index: number) => {
      return (
        <ambientLight
          key={index}
          intensity={light.intensity}
          color={light.color}
        />
      );
    })}
    {props.light.point.map((light: PointLightProps, index: number) => {
      return (
        <pointLight
          key={index}
          intensity={light.intensity}
          color={light.color}
          position={light.position}
        />
      );
    })}
    <PerspectiveCamera makeDefault fov={40} position={[5, 0, 0]} />
  </Suspense>
);
