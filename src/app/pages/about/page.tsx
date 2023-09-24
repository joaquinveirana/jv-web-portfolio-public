'use client';

import GrowOnScroll from '@/app/components/GrowOnScroll/GrowOnScroll';
import Grow from '@mui/material/Grow';
import { AboutProps } from '@/app/props/AboutProps';

/* 
  --- Styles ---
*/
const mainAboutClass = 'main-section-class';

export default function About(props: AboutProps) {
  return (
    <section id='#about' className={mainAboutClass}>
      <div className='lg:px-2 px-6 w-full flex-col-centered'>
        <GrowOnScroll
          growTimeout={1500}
          scrollThreshold={100}
          growOneTime={true}
        >
          <div className='md:w-full w-full text-[white] font-semibold text-3xl flex-row-centered'>
            <h1 className='w-fit whitespace-nowrap'>
              {props.textContent.title}
            </h1>
            <div className='w-full ml-4 border-[1px] border-dark-700 opacity-30'></div>
          </div>
        </GrowOnScroll>
        {/*  */}
        <div className='xl:flex-row-centered xl:items-start w-full pt-8 flex-col-centered'>
          <div className='xl:pr-12 xl:px-0 xl:w-2/3 flex flex-col'>
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
                {props.textContent.techList.map(
                  (tech: string, index: number) => {
                    return (
                      <li
                        key={index}
                        className='pt-2 pr-16 sub-paragraph-class'
                      >
                        <span className='text-cyan-600'>&#9724;</span> {tech}
                      </li>
                    );
                  }
                )}
              </ul>
            </GrowOnScroll>
          </div>
          <GrowOnScroll
            growTimeout={1500}
            scrollThreshold={200}
            growOneTime={true}
          >
            <div className='xl:w-1/3 xl:px-4 xl:py-4 px-24 py-8'>
              <img
                className='w-full max-w-[370px] z-0 aspect-square grayscale-20 hover:grayscale-0 outline outline-4 outline-offset-8 outline-cyan-600 hover:outline-offset-0 hover:outline-8 transition-all-eio-300'
                src='./me.jpg'
                alt='Picture of me'
              />
            </div>
          </GrowOnScroll>
        </div>
      </div>
    </section>
  );
}
