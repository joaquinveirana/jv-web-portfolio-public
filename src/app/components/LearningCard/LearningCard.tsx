'use client';
import * as React from 'react';
import { LearningCardsProps } from '@/app/props/LearningCardProps';
import { LearningItem } from '@/interfaces/db-entities';
import EmblaCarousel from '../Carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../Carousel/embla.scss';
import { GrowOnScroll } from '../GrowOnScroll/GrowOnScroll';

/* 
  --- Styles ---
*/
const badgeContainerClass = 'md:my-0 md:pt-2 md:z-20 md:relative mb-4 w-full flex-col-star';
const descriptionBadgeClass =
  'md:p-8 md:w-[330px] p-6 w-full max-h-[460px] flex flex-col gap-4 rounded-md shadow-lg bg-dark-400 text-xl secondary-sub-paragraph-light-class hover:bg-dark-500 transition-all';
const descriptionCertClass =
  'md:p-8 md:w-[550px] p-6 w-full max-h-[530px] flex flex-col gap-4 rounded-md shadow-lg bg-dark-400 text-xl secondary-sub-paragraph-light-class hover:bg-dark-500 transition-all';
const learningItemInfo = 'flex flex-col gap-2';
const learningItemTitle = 'text-xl font-bold cursor-pointer hover:text-cyan-600 line-clamp-2';
const learningItemDate = 'text-sm';
const learningItemSubtitle = 'text-sm font-semibold text-cyan-600';

export const LearningCards = (props: LearningCardsProps) => {
  const SLIDES = props.items.map((item: LearningItem, index: number) => {
    return (
      <div key={index} className={`${props.isBadge ? `${descriptionBadgeClass}` : `${descriptionCertClass}`}`}>
        <a href={item.link} target="_blank" rel="noreferrer">
          <img src={item.linkImg} alt={`Cert: ${item.title}`} />
        </a>
        <div className={learningItemInfo}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <h1 className={learningItemTitle}>{item.title}</h1>
          </a>
          <p className={learningItemDate}>{item.date}</p>
          <p className={learningItemSubtitle}>
            {item.issuedBy}, {item.authorizedBy}
          </p>
        </div>
      </div>
    );
  });
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <GrowOnScroll growOneTime={true} growTimeout={1500}>
      <div className={badgeContainerClass}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
      </div>
    </GrowOnScroll>
  );
};
