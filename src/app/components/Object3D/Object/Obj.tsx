'use client';

import { Obj3DProps } from '@/app/props/Obj3DProps';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Obj(props: Obj3DProps) {
  const { scene } = useGLTF(props.objPath);
  useFrame((state, delta) => (scene.rotation.y += props.rotationSpeed));
  return (
    <primitive
      object={scene}
      scale={props.scale}
      position={props.position}
      rotation={props.rotation}
    />
  );
}
