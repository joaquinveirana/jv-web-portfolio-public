'use client';

import Grow from '@mui/material/Grow';
import { LandingProps } from '@/app/props/LandingProps';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JVLogo3D from '@/app/components/Object3D/JVLogo3D';

/* 
  --- Styles ---
*/
const mainLandingClass =
  'lg:px-64 md:px-36 md:py-0 pt-[150px] md:items-start w-full h-screen bg-dark-300 md:flex-col-centered md:justify-between';
const mainHeaderClass =
  'xl:text-9xl lg:text-8xl md:text-7xl z-10 text-4xl font-bold text-light-700';
const mainHeaderUnderscoreClass =
  'inline-block relative -top-[0.14em] left-[10px]';
const secondaryHeaderClass =
  'my-1 lg:text-7xl md:text-6xl text-4xl font-bold text-light-200';
const mainParagraphClass =
  'xl:w-3/5 lg:w-full md:w-full md:my-8 my-6 paragraph-class';
const logo3DClass =
  '2xl:w-[800px] xl:w-[700px] xl:right-16 lg:w-[500px] lg:right-8 md:w-[500px] md:h-screen md:absolute md:top-0 md:right-0 md:py-24 mx-auto w-2/3 aspect-square z-0 relative animate-fade-in';
const seeMoreContainerClass =
  'pb-4 w-full h-[40px] flex-row-centered cursor-pointer [&>*:nth-child(odd)]:hover:direct-cyan-text';
const seeMoreIconClass = 'w-[40px] h-[40px] text-dark-500';

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
    }, 120 + Math.random() * 50);

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
      <div className='md:my-auto w-full z-10'>
        <h1 className='md:mb-6'>
          <span id='main-header' className={mainHeaderClass}></span>
          {!mainHeaderLoaded && (
            <span
              className={`${mainHeaderClass} ${mainHeaderUnderscoreClass} opacity-0`}
              id='console-underscore'
            >
              &#95;
            </span>
          )}
        </h1>
        <Grow in={mainHeaderLoaded} timeout={2000}>
          <div>
            <h2 className={secondaryHeaderClass}>{props.textContent.title2}</h2>
            <p className={mainParagraphClass}>
              {props.textContent.description}
            </p>
          </div>
        </Grow>
      </div>
      <div className={logo3DClass}>
        <JVLogo3D></JVLogo3D>
      </div>
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
}
