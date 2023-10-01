'use client';

import { DialogProps } from '@/app/props/DialogProps';
import { RefLink, Reference } from '@/app/props/HeaderProps';
import { useClickAway } from '@uidotdev/usehooks';
import { LegacyRef } from 'react';

export default function EffectButton(props: DialogProps) {
  const refDialog = useClickAway(() => {
    props.callback();
  });

  return (
    <div className='absolute top-0 left-0 w-full h-screen z-50 bg-[transparent] bg-opacity-30 backdrop-blur-sm flex-col-centered'>
      <div
        ref={refDialog as LegacyRef<HTMLDivElement>}
        className='md:w-1/2 p-8 w-3/4 h-1/2 z-60 bg-dark-400 rounded-md'
      >
        <h1 className='pb-4 subtitle-class'>{props.content.title}</h1>
        {props.content.paragraphs.map((sentence: string, index: number) => {
          return (
            <p key={index} className='pb-2 sub-paragraph-class'>
              {sentence}
            </p>
          );
        })}

        {props.content.references.map((ref: Reference, index: number) => {
          return (
            <div key={index} className='pb-2 sub-paragraph-class'>
              <span className='text-cyan-600'>&#9724; </span>
              {ref.referenceName}
              {ref.refereneceLinks.map((refLink: RefLink, subIndex: number) => {
                return (
                  <a
                    className='px-1 hover-cyan-text'
                    key={subIndex}
                    href={refLink.link}
                    target='_blank'
                  >
                    <span>{refLink.ref}</span>
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
