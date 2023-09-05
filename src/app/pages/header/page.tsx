'use client';
import Image from 'next/image';
import { LegacyRef, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import { HeaderProps, NavItem } from '@/app/types/HeaderTypes';
import { BurgerClose } from 'react-burger-icons';

/* 
  Styles
*/
const mainHeaderClass =
  'md:pr-6 md:pl-6 flex w-full md:h-[70px] h-[90px] items-center justify-between font-mono text-sm';
const mobileNavPanel =
  'fixed top-0 left-full z-10 w-3/4 h-screen transition duration-300 ease-in-out bg-dark-primary-color-500';
const columnaFlexClass = 'flex flex-col items-center justify-center';
const desktopNavPanel = 'md:h-[70px] md:w-fit md:sticky md:bg-[transparent]';
const mobileNavItems = 'flex flex-col items-center justify-center';
const desktopNavItems =
  'md:flex md:flex-row md:items-center md:justify-center md:h-full';

export default function Header(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => setIsOpen(false));

  console.log(props.lang);
  return (
    <header
      className={`${mainHeaderClass} ${
        props.lightMode ? 'bg-light-primary-color' : 'bg-dark-primary-color-300'
      }`}
    >
      {/* Main Logo */}
      <div className='md:w-fit flex justify-center items-center'>
        <Image
          src={props.imageLogoFilename}
          alt={props.imageLogoAlt}
          className={`md:p-4 p-3 ${props.lightMode && 'dark:invert'}`}
          width={80}
          height={15}
          priority
        />
      </div>

      {/* Hamburguer Menu Icon */}
      <button
        onMouseDown={(e) => {
          e.nativeEvent.stopImmediatePropagation();
          setIsOpen(!isOpen);
        }}
        className={`md:hidden md:cursor-pointer fixed right-0 z-20 w-[50px] h-[50px]
        `}
      >
        <BurgerClose isClosed={isOpen} />
      </button>

      {/* Blur behind Nav Sliding Panel */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='fixed top-0 left-0 z-5 w-screen h-[90px]' />
          <div className='fixed top-[90px] left-0 z-5 w-screen h-screen bg-[transparent] backdrop-blur-xs' />
        </div>
      )}

      {/* Sliding Nav Panel */}
      <section
        ref={ref as LegacyRef<HTMLDivElement>}
        className={`${mobileNavPanel} ${desktopNavPanel} ${columnaFlexClass}
        ${isOpen && 'transform -translate-x-full'}
        `}
      >
        <nav className={`md:h-full`}>
          <ul className={`${mobileNavItems} ${desktopNavItems}`}>
            {props.navItems.map((navItem: NavItem, index: number) => {
              return (
                <li
                  key={index}
                  className={`md:m-4 md:text-lg m-6 text-2xl text-light-secondary-color-700 hover:text-skyblue-terciary-color transition-color duration-500 ease-out`}
                >
                  <a href={navItem.itemLink}>{navItem.itemName}</a>
                </li>
              );
            })}

            <li className={`md:m-6 md:text-lg m-6 mt-12 text-2xl`}>
              <a href=''>{props.resumeLink.itemName}</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
