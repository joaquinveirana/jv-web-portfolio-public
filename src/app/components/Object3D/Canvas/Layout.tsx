'use client';

import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { r3f } from '../Helpers/global';

const Layout = ({
  children,
  showFadeIn,
  startFadeIn,
}: {
  children: ReactNode;
  showFadeIn: boolean;
  startFadeIn: boolean;
}) => {
  const ref = useRef<HTMLInputElement>(null);

  /* 
    Hooks
  */
  const [hiddenOrfadeIn, setHiddenOrfadeIn] = useState(
    showFadeIn ? 'opacity-0' : 'opacity-100'
  );
  useEffect(() => {
    if (startFadeIn) setHiddenOrfadeIn('opacity-100');
  }, [startFadeIn]);

  return (
    <div ref={ref} className='relative w-full h-full overflow-auto touch-auto'>
      {children}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        className={`${hiddenOrfadeIn} transition-all-eio-11000`}
        eventSource={ref as unknown as MutableRefObject<HTMLElement>}
        eventPrefix='client'
      >
        {/* @ts-ignore */}
        <r3f.Out />
        <Preload all />
      </Canvas>
    </div>
  );
};

export { Layout };
