'use client';
import Image from 'next/image';
import { LegacyRef, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import { HeaderProps, NavItem } from '@/app/types/HeaderTypes';
import { BurgerClose } from 'react-burger-icons';
import EffectButton from '@/app/components/EffectButton/EffectButton';

/* 
  --- Styles ---
*/
// Header Main Items Classes
const mainHeaderClass =
  'md:px-6 md:h-[70px] w-full h-[90px] flex items-center justify-between text-sm';
const logoClass = 'md:mx-6 px-4 absolute top-50% left-0 cursor-pointer';
const logoHoverGhostEffect =
  'transition duration-500 ease-in-out hover:transform hover:-translate-x-[5px] hover:opacity-0';
const hamburgerIconClass =
  'md:hidden fixed right-0 w-[50px] h-[50px] z-20 cursor-pointer';
const navLinksClass =
  'md:m-4 md:text-base m-6 text-2xl text-light-primary-color-600';

// Nav Panel Classes
const blurPanelClass =
  'md:hidden fixed top-0 left-0 z-15 w-screen h-screen bg-[transparent] backdrop-blur-md';
const mobileNavPanel =
  'fixed top-0 left-full z-10 w-3/4 h-screen transition duration-300 ease-in-out bg-dark-primary-color-500';
const desktopNavPanel = 'md:h-[70px] md:w-fit md:sticky md:bg-[transparent]';
const desktopNavItemList =
  'md:h-full md:flex md:flex-row md:items-center md:justify-center';

// Effects and Common Classes
const flexColumnClass = 'flex flex-col items-center justify-center';
const hoverCyanTextEffect =
  'hover:text-cyan-terciary-color transition-color duration-500 ease-out';

export default function Header(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const refSlider = useClickAway(() => setIsOpen(false));

  console.log(props.lang);
  return (
    <header
      className={`${mainHeaderClass} ${
        props.lightMode ? 'bg-light-primary-color' : 'bg-dark-primary-color-200'
      }`}
    >
      {/* Main Logo */}
      <div className='md:w-fit flex justify-center items-center'>
        <Image
          src={props.logo.imageLogo}
          alt={props.logo.imageLogoAlt}
          className={`${logoClass} z-20 ${logoHoverGhostEffect}`}
          width={80}
          height={15}
          priority
        />
        <Image
          src={props.logo.imageLogoSecondary}
          alt={props.logo.imageLogoAlt}
          className={`${logoClass} z-10`}
          width={80}
          height={15}
          priority
        />
      </div>

      {/* Hamburguer Menu Icon */}
      <button
        onMouseDown={(e) => {
          setIsOpen(!isOpen);
          e.nativeEvent.stopImmediatePropagation();
          e.stopPropagation();
        }}
        className={`${hamburgerIconClass}`}
      >
        <BurgerClose isClosed={isOpen} />
      </button>

      {/* Blur behind Nav Sliding Panel */}
      {isOpen && <div className={`${blurPanelClass}`}></div>}

      {/* Sliding Nav Panel */}
      <section
        ref={refSlider as LegacyRef<HTMLDivElement>}
        className={`${mobileNavPanel} ${desktopNavPanel} ${flexColumnClass}
        ${isOpen && 'transform -translate-x-full'}
        `}
      >
        <nav className='md:h-full'>
          <ul className={`${flexColumnClass} ${desktopNavItemList}`}>
            {props.navItems.map((navItem: NavItem, index: number) => {
              return (
                <li
                  key={index}
                  className={`${navLinksClass} ${hoverCyanTextEffect}`}
                >
                  <a href={navItem.itemLink}>{navItem.itemName}</a>
                </li>
              );
            })}

            <button className='m-6 px-4 py-2 transition duration-500 ease-in-out hover:text-cyan-terciary-color border-solid border-4 border-cyan-terciary-color text-light-primary-color-800 md:text-sm text-xl'>
              {props.resumeLink.itemName}
            </button>
          </ul>
        </nav>
      </section>
    </header>
  );
}
