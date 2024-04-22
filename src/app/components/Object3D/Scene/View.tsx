'use client';
import * as React from 'react';
import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from 'react';
import { OrbitControls, View as ViewImpl } from '@react-three/drei';
import { Three } from '../Helpers/Three';
import { ViewProps } from '@/app/props/ViewProps';

const View = forwardRef(({ children, orbit, ...props }: ViewProps, ref) => {
  const localRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef as unknown as MutableRefObject<HTMLElement>}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = 'View';

export { View };
