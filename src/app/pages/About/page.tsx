'use client';

import { GrowOnScroll } from '@/app/components/GrowOnScroll/GrowOnScroll';
import { AboutProps } from '@/app/props/AboutProps';
import SectionTitle from '@/app/components/SectionTitle/SectionTitle';

/* 
  --- Styles ---
*/
const sectionContentClass =
  'lg:flex-row-centered lg:items-start w-full pt-8 flex-col-centered';
const paragraphsListClass = 'xl:pr-8 lg:pr-4 lg:w-7/12 w-full flex flex-col';
const imgContainerClass = 'lg:px-8 lg:w-5/12 py-12 w-full';
const imgClass =
  'lg:max-w-[310px] lg:w-full m-auto max-w-[300px] w-8/12 z-0 aspect-square outline-hover-effect transition-all-eio-300';

export const About = (props: AboutProps) => {
  return (
    <article id='#about' className='article-class'>
      {/* Title */}
      <SectionTitle
        title={props.textContent.title}
        growTimeout={1500}
        growOneTime={true}
      />

      <div className={sectionContentClass}>
        {/* Paragraphs list */}
        <div className={paragraphsListClass}>
          {props.textContent.paragraphs.map(
            (paragraph: string, index: number) => {
              return (
                <GrowOnScroll key={index} growTimeout={1500} growOneTime={true}>
                  <p key={index} className='py-2 paragraph-class'>
                    {paragraph}
                  </p>
                </GrowOnScroll>
              );
            }
          )}

          {/* Tech list */}
          <GrowOnScroll growTimeout={1500} growOneTime={true}>
            <ul className='w-fit columns-2'>
              {props.textContent.techList.map((tech: string, index: number) => {
                return (
                  <li key={index} className='pt-2 pr-16 sub-paragraph-class'>
                    <span className='text-cyan-600'>&#9724;</span> {tech}
                  </li>
                );
              })}
            </ul>
          </GrowOnScroll>
        </div>

        {/* Profile Pic */}
        <GrowOnScroll growTimeout={1500} growOneTime={true}>
          <div className={imgContainerClass}>
            <img
              className={imgClass}
              src={props.textContent.photoSrc}
              alt={props.textContent.photoAlt}
            />
          </div>
        </GrowOnScroll>
      </div>
    </article>
  );
};
