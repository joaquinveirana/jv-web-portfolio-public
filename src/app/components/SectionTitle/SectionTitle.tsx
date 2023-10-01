'use client';

import { SectionTitleProps } from '@/app/props/SectionTitleProps';
import GrowOnScroll from '../GrowOnScroll/GrowOnScroll';

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <GrowOnScroll
      growTimeout={props.growTimeout}
      extraScrollThreshold={props.extraScrollThreshold}
      growOneTime={props.growOneTime}
    >
      <div className='w-full flex-row-centered justify-start title-class'>
        <h1 className='w-fit whitespace-nowrap'>{props.title}</h1>
        <div className='w-1/3 ml-4 border-[1px] border-dark-700 opacity-30'></div>
      </div>
    </GrowOnScroll>
  );
}
