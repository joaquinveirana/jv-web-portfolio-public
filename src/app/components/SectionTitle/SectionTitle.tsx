'use client';

import { SectionTitleProps } from '@/app/props/SectionTitleProps';
import GrowOnScroll from '../GrowOnScroll/GrowOnScroll';

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <GrowOnScroll
      growTimeout={props.growTimeout}
      scrollThreshold={props.scrollThreshold}
      growOneTime={props.growOneTime}
    >
      <div className='md:w-full w-full text-[white] font-semibold text-3xl flex-row-centered'>
        <h1 className='w-fit whitespace-nowrap'>{props.title}</h1>
        <div className='w-full ml-4 border-[1px] border-dark-700 opacity-30'></div>
      </div>
    </GrowOnScroll>
  );
}
