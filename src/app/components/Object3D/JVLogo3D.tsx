'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import CircularProgress from '@mui/material/CircularProgress';

const Obj = dynamic(() => import('./Object/Obj').then((mod) => mod.Obj), {
  ssr: false,
});

const Common = dynamic(
  () => import('./Canvas/Common').then((mod) => mod.Common),
  { ssr: false }
);

const View = dynamic(() => import('./Canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex w-full h-full flex-col items-center justify-center'>
      <CircularProgress />
    </div>
  ),
});

export default function JVLogo3D() {
  return (
    <div className='w-full h-full'>
      <View orbit={true} className='h-full w-full'>
        <Suspense fallback={null}>
          <Obj
            objPath='/my_logos/jv_logo_sq_cyan_mate-processed.glb'
            scale={2.5}
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
    </div>
  );
}
