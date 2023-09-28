'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Layout } from './Canvas/Layout';

const Common = dynamic(
  () => import('./Scene/Common').then((mod) => mod.Common),
  { ssr: false }
);

const View = dynamic(() => import('./Scene/View').then((mod) => mod.View), {
  ssr: false,
});

export default function JVLogo3D() {
  const Obj = dynamic(
    () =>
      import('./Object/Obj').then((mod) => {
        setObjLoaded(true);
        return mod.Obj;
      }),
    {
      ssr: false,
    }
  );

  const checkWindowsDefined = (): boolean => {
    return typeof window !== 'undefined';
  };

  const logoScale = () => {
    if (width === 0) return 0;
    if (width > 1750) return 2.7;
    else if (width > 1500) {
      return 2.5;
    } else if (width > 1300) {
      return 2.2;
    } else if (width > 1200) {
      return 2;
    } else if (width > 1000) {
      return 1.8;
    } else if (width > 756) {
      return 1.5;
    } else {
      return 2.5;
    }
  };

  /* 
    Hooks
  */
  const [objLoaded, setObjLoaded] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (checkWindowsDefined()) {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className='w-full h-full'>
      <Layout showFadeIn={true} startFadeIn={objLoaded}>
        <View orbit={true} className='h-full w-full'>
          <Suspense fallback={null}>
            <Obj
              objPath='/my_logos/jv_logo_sq_cyan_mate-processed.glb'
              scale={logoScale()}
              position={[0, 0, 0]}
              rotation={[0.0, 1.5, 0]}
              rotationSpeed={0.001}
            />
            <Common
              light={{
                ambient: [{ intensity: 0.5, color: 'white' }],
                point: [
                  { position: [8, 3, 3], intensity: 2, color: 'red' },
                  { position: [8, -3, -3], intensity: 2, color: 'purple' },
                  { position: [-8, 0, -3], intensity: 1, color: 'white' },
                ],
              }}
            />
          </Suspense>
        </View>
      </Layout>
    </div>
  );
}
