'use client';

import { Obj3DProps } from '@/app/props/Obj3DProps';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

export function Obj(props: Obj3DProps) {
  const { scene } = useGLTF(props.objPath);
  const [rotationClockwise, setRotationClockwise] = useState(true);
  useFrame((state, delta) => {
    if (scene.rotation.y > 2.5) setRotationClockwise(false);
    if (scene.rotation.y < 0.5) setRotationClockwise(true);
    rotationClockwise
      ? (scene.rotation.y += props.rotationSpeed)
      : (scene.rotation.y -= props.rotationSpeed);
  });
  return (
    <primitive
      object={scene}
      scale={props.scale}
      position={props.position}
      rotation={props.rotation}
    />
  );
}
