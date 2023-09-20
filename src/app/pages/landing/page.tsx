'use client';

import Grow from '@mui/material/Grow';
import { LandingProps } from '@/app/props/LandingProps';
import Image from 'next/image';
import { useEffect, useState } from 'react';

/* 
  --- Styles ---
*/
const mainLandingClass =
  'md:px-32 md:py-0 pt-[150px] md:items-start w-full h-screen bg-dark-primary-color-300 md:flex-col-centered justify-start';
const mainHeaderClass =
  'xl:text-9xl lg:text-8xl md:text-7xl text-4xl font-bold text-light-primary-color-700';
const mainHeaderUnderscoreClass =
  'inline-block relative -top-[0.14em] left-[10px]';
const secondaryHeaderClass =
  'my-1 lg:text-7xl md:text-6xl text-4xl font-bold text-light-primary-color-200';
const mainParagraphClass =
  'xl:w-3/5 lg:w-full md:w-full md:text-lg md:my-8 my-6 text-base text-light-primary-color-200';
const backgroundImageClass =
  'xl:w-[800px] lg:right-16 lg:w-[500px] md:px-4 md:right-4 md:w-[400px] px-8 absolute bottom-16 z-0 opacity-20 animate-fade-inout';

export default function Landing(props: LandingProps) {
  const [mainHeaderLoaded, setMainHeaderLoaded] = useState(false);
  const [mainHeaderText, setMainHeaderText] = useState(
    props.textContent.title1
  );
  const [consoleWritingIntervalId, setConsoleWritingIntervalId] = useState(-1);

  useEffect(() => {
    const consoleUnderscoreElement =
      document.getElementById('console-underscore');
    const mainHeaderElement = document.getElementById('main-header');
    let letterCount = 1;

    // Write of the main header with console effect
    const id = window.setInterval(() => {
      if (!mainHeaderElement) return;
      if (letterCount <= mainHeaderText.length) {
        mainHeaderElement.innerHTML = mainHeaderText.substring(0, letterCount);
        letterCount++;
      }
      if (letterCount === mainHeaderText.length + 1) setMainHeaderLoaded(true);
    }, 120 + Math.random() * 60);

    setConsoleWritingIntervalId(id);

    // Main header console underscore blink
    let visible = false;
    window.setInterval(() => {
      if (!consoleUnderscoreElement) return;
      if (visible) {
        consoleUnderscoreElement.className = `${mainHeaderClass} ${mainHeaderUnderscoreClass} opacity-0`;
        visible = false;
      } else {
        consoleUnderscoreElement.className = `${mainHeaderClass} ${mainHeaderUnderscoreClass}`;
        visible = true;
      }
    }, 400);
  }, []);

  useEffect(() => {
    // Turn off the main header writing interval
    window.clearInterval(consoleWritingIntervalId);
  }, [mainHeaderLoaded]);

  return (
    <section id='#landing' className={mainLandingClass}>
      <div className='md:p-2 px-6 w-full z-10'>
        <h1 className='md:mb-6'>
          <span id='main-header' className={mainHeaderClass}></span>
          <span
            className={`${mainHeaderClass} ${mainHeaderUnderscoreClass} opacity-0`}
            id='console-underscore'
          >
            &#95;
          </span>
        </h1>
        <Grow in={mainHeaderLoaded} timeout={2000}>
          <h2 className={secondaryHeaderClass}>{props.textContent.title2}</h2>
        </Grow>
        <Grow in={mainHeaderLoaded} timeout={3000}>
          <p className={mainParagraphClass}>{props.textContent.description}</p>
        </Grow>
      </div>
      <Image
        src={'/my_logos/jv-logo-background.png'}
        width={800}
        height={800}
        priority
        alt={''}
        className={backgroundImageClass}
      />
    </section>
  );
}
