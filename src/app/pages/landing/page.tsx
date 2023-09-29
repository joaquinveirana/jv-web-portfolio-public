'use client';

import Grow from '@mui/material/Grow';
import { LandingProps } from '@/app/props/LandingProps';
import { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { JVLogo3D } from '@/app/components/Object3D/JVLogo3D';

/* 
  --- Styles ---
*/
const mainLandingClass =
  '2xl:px-48 xl:px-40 lg:px-36 md:px-28 sm:px-12 px-6 md:py-0 pt-[150px] md:items-start flex-col-centered justify-between w-full h-screen bg-dark-300';
const mainTitleContainerClass = 'xl:w-9/12 lg:w-2/3 md:my-auto w-full z-10';
const mainTitleUnderscoreClass =
  'inline-block relative -top-[0.14em] left-[10px]';
const mainTitleClass =
  '5xl:text-9xl 4xl:text-8xl 2xl:text-8xl lg:text-7xl md:text-6xl z-10 text-5xl font-bold text-light-700';
const secondaryTitleClass =
  '5xl:text-7xl 4xl:text-6xl 2xl:text-6xl xl:text-4xl text-3xl my-1 font-bold text-light-200';
const mainParagraphClass = 'lg:w-3/5 md:w-8/12 md:my-8 my-6 paragraph-class';
const logo3DClass =
  'xl:right-16 lg:w-2/5 lg:right-8 md:w-5/12 md:h-screen md:absolute md:top-0 md:right-0 md:py-24 mx-auto w-2/3 aspect-square z-0 relative cursor-grab animate-fade-in';
const seeMoreContainerClass =
  'pb-4 w-full h-[40px] flex-row-centered cursor-pointer [&>*:nth-child(odd)]:hover:direct-cyan-text';
const seeMoreIconClass = 'w-[40px] h-[40px] text-dark-500';

export const Landing = (props: LandingProps) => {
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
    }, 120 + Math.random() * 50);

    setConsoleWritingIntervalId(id);

    // Main header console underscore blink
    let visible = false;
    window.setInterval(() => {
      if (!consoleUnderscoreElement) return;
      if (visible) {
        consoleUnderscoreElement.className = `${mainTitleClass} ${mainTitleUnderscoreClass} opacity-0`;
        visible = false;
      } else {
        consoleUnderscoreElement.className = `${mainTitleClass} ${mainTitleUnderscoreClass}`;
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
      {/* Main text */}
      <div className={mainTitleContainerClass}>
        <h1 className='lg:mb-6 md:mb-4'>
          <span id='main-header' className={mainTitleClass}></span>
          {!mainHeaderLoaded && (
            <span
              className={`${mainTitleClass} ${mainTitleUnderscoreClass} opacity-0`}
              id='console-underscore'
            >
              &#95;
            </span>
          )}
        </h1>
        <Grow in={mainHeaderLoaded} timeout={2000}>
          <div>
            <h2 className={secondaryTitleClass}>{props.textContent.title2}</h2>
            <p className={mainParagraphClass}>
              {props.textContent.description}
            </p>
          </div>
        </Grow>
      </div>
      {/* 3D Logo with Three */}
      <div className={logo3DClass}>
        <JVLogo3D></JVLogo3D>
      </div>
      {/* Little arrow icon to scroll down on click */}
      <Grow in={mainHeaderLoaded} timeout={3000}>
        <div className={seeMoreContainerClass}>
          <ExpandMoreIcon
            className={seeMoreIconClass}
            onClick={() => {
              document.getElementById('#about')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
          ></ExpandMoreIcon>
        </div>
      </Grow>
    </section>
  );
};
