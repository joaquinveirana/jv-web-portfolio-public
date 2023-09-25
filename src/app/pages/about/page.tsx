'use client';

import GrowOnScroll from '@/app/components/GrowOnScroll/GrowOnScroll';
import { AboutProps } from '@/app/props/AboutProps';
import SectionTitle from '@/app/components/SectionTitle/SectionTitle';

/* 
  --- Styles ---
*/
const mainAboutClass = 'main-section-class';
const sectionContentClass =
  'xl:flex-row-centered xl:items-start w-full pt-8 flex-col-centered';
const paragraphsListClass = 'xl:pr-12 xl:px-0 xl:w-2/3 flex flex-col';
const imgContainerClass = 'xl:w-1/3 xl:px-4 xl:py-4 px-24 py-8';
const imgClass =
  'w-full max-w-[370px] z-0 aspect-square outline outline-4 outline-offset-8 outline-cyan-600 hover:outline-offset-0 hover:outline-8 transition-all-eio-300';

export default function About(props: AboutProps) {
  return (
    <section id='#about' className={mainAboutClass}>
      <SectionTitle
        title={props.textContent.title}
        growTimeout={1500}
        scrollThreshold={100}
        growOneTime={true}
      />
      {/*  */}
      <div className={sectionContentClass}>
        <div className={paragraphsListClass}>
          {props.textContent.paragraphs.map(
            (paragraph: string, index: number) => {
              return (
                <GrowOnScroll
                  key={index}
                  growTimeout={1500}
                  scrollThreshold={200 + 100 * index}
                  growOneTime={true}
                >
                  <p key={index} className='py-2 paragraph-class'>
                    {paragraph}
                  </p>
                </GrowOnScroll>
              );
            }
          )}
          <GrowOnScroll
            growTimeout={1500}
            scrollThreshold={200 + 100 * props.textContent.paragraphs.length}
            growOneTime={true}
          >
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
        {/*  */}
        <GrowOnScroll
          growTimeout={1500}
          scrollThreshold={200}
          growOneTime={true}
        >
          <div className={imgContainerClass}>
            <img className={imgClass} src='./me.jpg' alt='Picture of me' />
          </div>
        </GrowOnScroll>
      </div>
    </section>
  );
}
