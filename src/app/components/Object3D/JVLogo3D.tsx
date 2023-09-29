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

export const JVLogo3D = () => {
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

  const logoScale = () => {
    if (windowWidth === 0) return 0;
    if (windowWidth > 1750) return 3.1;
    else if (windowWidth > 1600) {
      return 2.8;
    } else if (windowWidth > 1500) {
      return 2.5;
    } else if (windowWidth > 1300) {
      return 2.2;
    } else if (windowWidth > 1200) {
      return 2;
    } else if (windowWidth > 1000) {
      return 1.8;
    } else if (windowWidth > 756) {
      return 1.5;
    } else {
      return 2.5;
    }
  };

  /* 
    Hooks
  */
  const [objLoaded, setObjLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleWindowWidthChange = () => {
      if (window.outerWidth) {
        setWindowWidth(window.outerWidth - 16);
      }
      console.log(window.outerWidth);

      console.log(windowWidth);
    };
    handleWindowWidthChange();
    window.addEventListener('resize', handleWindowWidthChange);
    return () => {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  }, []);

  return (
    <div className='w-full h-full'>
      <Layout showFadeIn={true} startFadeIn={objLoaded}>
        <View orbit={true} className='h-full w-full'>
          <Suspense fallback={null}>
            <Obj
              objPath='/my_logos/jv_logo_sq_cyan_mate-processed.glb'
              scale={logoScale()}
              position={[-0.15, 0, 0.15]}
              rotation={[0.0, 1.5, 0]}
              rotationSpeed={0.001}
            />
            <Common
              light={{
                ambient: [{ intensity: 0.35, color: 'white' }],
                point: [
                  { position: [1, 0, 1], intensity: 10, color: 'purple' },
                  { position: [18, 0, 0], intensity: 0.2, color: 'white' },
                ],
              }}
            />
          </Suspense>
        </View>
      </Layout>
    </div>
  );
};
