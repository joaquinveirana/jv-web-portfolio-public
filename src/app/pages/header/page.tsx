'use client';
import Image from 'next/image';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import { HeaderProps, NavItem } from '@/app/types/HeaderTypes';
import { BurgerClose } from 'react-burger-icons';
import EffectButton from '@/app/components/EffectButton/EffectButton';

/* 
  --- Styles ---
*/
// Header Main Items Classes
const mainHeaderClass =
  'md:px-6 md:h-[100px] fixed top-0 w-full h-[90px] text-sm bg-dark-primary-color-300 bg-opacity-70 backdrop-blur-sm';
const logoClass = 'md:mx-6 mx-1 px-4 absolute top-50% left-0 cursor-pointer';
const hamburgerIconClass =
  'md:hidden fixed right-0 w-[50px] h-[50px] z-20 cursor-pointer';

// Nav Panel Classes
const blurPanelClass =
  'md:hidden fixed top-0 left-0 z-15 w-screen h-screen bg-[transparent] backdrop-blur-sm';
const mobileNavPanel =
  'fixed top-0 left-full z-10 w-3/4 h-screen bg-dark-primary-color-500';
const desktopNavPanel = 'md:h-[70px] md:w-fit md:sticky md:bg-[transparent]';
const desktopNavItemList =
  'md:h-full md:flex md:flex-row md:items-center md:justify-center';
const navLinksClass =
  'md:m-4 md:text-sm m-6 text-2xl text-light-primary-color-700';

export default function Header(props: HeaderProps) {
  /* 
    --- React Hooks ---
  */
  const [isOpen, setIsOpen] = useState(false);
  const refSlider = useClickAway(() => setIsOpen(false));
  const headerRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleScrollDirectionChange = () => {
      if (!headerRef.current) return;

      // Shadows removal on top and creation on scroll and height change on top
      if (window.scrollY === 0) {
        headerRef.current.style.height = '100px';
        headerRef.current.style.boxShadow = '0 0px 0px 0px rgb(0 0 0 / 0.1)';
      } else {
        headerRef.current.style.height = '70px';
        headerRef.current.style.boxShadow =
          '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';
      }

      // Hide header on scroll
      if (window.scrollY > prevScroll)
        headerRef.current.style.transform = 'translateY(-100px)';
      else headerRef.current.style.transform = 'translateY(0px)';

      prevScroll = window.scrollY;
    };
    window.addEventListener('scroll', handleScrollDirectionChange);
    return () => {
      window.removeEventListener('scroll', handleScrollDirectionChange);
    };
  }, []);

  /* 
    --- Aux Functions ---
  */
  let prevScroll = 0;
  if (typeof window !== 'undefined') {
    prevScroll = window.scrollY;
  }

  const scrollToSection = (sectionId: string) => () => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const openCloseSlidingPanel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  const openResume = () => {
    // Resume pdf saved in public folder
    if (typeof window !== 'undefined') window.open('/resume.pdf');
  };

  return (
    <header
      ref={headerRef}
      className={`${mainHeaderClass} flex-rox-centered transition-all-eio-300`}
    >
      {/* Main Logo */}
      <div className={`md:w-fit flex justify-center items-center`}>
        <Image
          src={props.logo.imageLogo}
          alt={props.logo.imageLogoAlt}
          className={`${logoClass} z-20 transition-all-eio-500 hover:opacity-0`}
          width={80}
          height={15}
          priority
        />
        <Image
          src={props.logo.imageLogoSecondary}
          alt={props.logo.imageLogoAlt}
          className={`${logoClass} z-10 transition-all-eio-500`}
          width={80}
          height={15}
          priority
        />
      </div>

      {/* Hamburguer Menu Icon */}
      <button
        onMouseDownCapture={(
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => openCloseSlidingPanel(e)}
        className={`${hamburgerIconClass}`}
      >
        <BurgerClose isClosed={isOpen} />
      </button>

      {/* Blur behind Nav Sliding Panel */}
      {isOpen && <div className={`${blurPanelClass}`}></div>}

      {/* Sliding Nav Panel */}
      <section
        ref={refSlider as LegacyRef<HTMLDivElement>}
        className={`${mobileNavPanel} ${desktopNavPanel} flex-col-centered transition-all-eio-300
        ${isOpen && 'transform -translate-x-full'}
        `}
      >
        <nav className='md:h-full'>
          <ul className={`${desktopNavItemList} flex-col-centered`}>
            {props.navItems.map((navItem: NavItem, index: number) => {
              return (
                <li key={index} className={`${navLinksClass} hover-cyan-text`}>
                  <a
                    href={navItem.itemLink}
                    onClick={scrollToSection(navItem.itemId)}
                  >
                    {navItem.itemName}
                  </a>
                </li>
              );
            })}

            <EffectButton
              text={props.resume.itemName}
              callback={() => openResume()}
              width='32'
            ></EffectButton>
          </ul>
        </nav>
      </section>
    </header>
  );
}
