'use client';

import Grow from '@mui/material/Grow';
import { LandingProps } from '@/app/props/LandingProps';
import Image from 'next/image';
import { useEffect } from 'react';

/* 
  --- Styles ---
*/
const mainLandingClass =
  'md:px-32 md:py-0 pt-[150px] md:items-start w-full h-screen bg-dark-primary-color-300 md:flex-col-centered justify-start';
const mainHeaderClass1 = 'mb-4 md:text-9xl text-4xl font-bold';
const mainHeaderClass = 'my-1 md:text-7xl text-4xl font-bold';
const mainParagraphClass =
  'xl:w-3/5 lg:w-full md:w-full md:text-lg md:my-8 my-6 text-base text-light-primary-color-200';

export default function Landing(props: LandingProps) {
  function consoleText(words: any, id: any, colors: any = undefined) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    if (!target) return;

    target.setAttribute('style', 'color:' + colors[0]);
    window.setInterval(function () {
      if (!target) return;

      if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function () {
      if (!con) return;
      if (visible === true) {
        con.className = `${mainHeaderClass1} text-[white] inline-block relative -top-[0.14em] left-[10px] hidden`;
        visible = false;
      } else {
        con.className = `${mainHeaderClass1} text-[white] inline-block relative -top-[0.14em] left-[10px]`;

        visible = true;
      }
    }, 400);
  }

  useEffect(() => {
    consoleText([props.textContent.title1], 'pruebaTexto');
  }, []);

  return (
    <section id='#landing' className={mainLandingClass}>
      {/*       <Grow appear={true} in={true} timeout={300}>
        <h3 className='text-base text-light-primary-color-600 '>
          {props.textContent.title0}
        </h3>
      </Grow> */}

      <div className='md:p-0 px-6 w-full z-10'>
        <div className='h-[500px]'>
          <span
            id='pruebaTexto'
            className={`${mainHeaderClass1} text-light-primary-color-600`}
          ></span>
          <div
            className={`${mainHeaderClass1} text-[white] inline-block relative -top-[0.14em] left-[10px]`}
            id='console'
          >
            &#95;
          </div>
        </div>
        {/*         <Grow in={true} timeout={600}>
          <h1 className={`${mainHeaderClass1} text-light-primary-color-600`}>
            {props.textContent.title1}
          </h1>
        </Grow> */}
        <Grow in={true} timeout={1000}>
          <h1 className={`${mainHeaderClass} text-light-primary-color-200`}>
            {props.textContent.title2}
          </h1>
        </Grow>
        <Grow in={true} timeout={1300}>
          <p className={mainParagraphClass}>{props.textContent.description}</p>
        </Grow>
      </div>
      <Image
        src={'/my_logos/jv-logo-background.png'}
        width={800}
        height={800}
        priority
        alt={''}
        className='px-4 absolute bottom-16 md:right-16 z-0 cursor-pointer transition-all-eio-500 opacity-10'
      />
    </section>
  );
}
