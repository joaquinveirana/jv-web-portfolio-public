'use client';

import { DialogProps } from '@/app/props/DialogProps';
import { useClickAway } from '@uidotdev/usehooks';
import { LegacyRef } from 'react';

export default function EffectButton(props: DialogProps) {
  const refDialog = useClickAway(() => {
    props.callback();
  });

  return (
    <div className='absolute top-0 left-0 w-full h-screen z-50 bg-[black] bg-opacity-30 backdrop-blur-xl flex-col-centered'>
      <div
        ref={refDialog as LegacyRef<HTMLDivElement>}
        className='md:w-1/2 w-3/4 h-1/2 z-60 bg-[red] rounded-md'
      >
        <h1>{props.content.title}</h1>
        <p>{props.content.paragraph}</p>
      </div>
    </div>
  );
}
