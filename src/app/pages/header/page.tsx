'use client';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';

import { BurgerClose } from 'react-burger-icons';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { HeaderProps, NavItemType } from '@/app/props/HeaderProps';
import EffectButton from '@/app/components/EffectButton/EffectButton';
import Logo from '@/app/components/Logo/Logo';
import Dialog from '@/app/components/Dialog/Dialog';
import MoreInfoIcon from '@/app/components/MoreInfoIcon/MoreInfoIcon';
import NavItem from '@/app/components/NavItem/NavItem';

/* 
  --- Styles ---
*/
// Header Main Items Classes
const mainHeaderClass =
  'md:px-8 fixed top-0 w-full h-[100px] text-sm bg-dark-primary-color-300 bg-opacity-70';
const hamburgerIconClass =
  'md:hidden fixed right-0 w-[50px] h-[50px] z-20 cursor-pointer';

// Nav Panel Classes
const blurPanelClass =
  'md:hidden fixed top-0 right-full w-screen h-screen z-15 backdrop-blur-sm';
const mobileNavPanel =
  'fixed top-0 left-full w-3/4 h-screen z-10 pt-32 pb-10 bg-dark-primary-color-500';
const desktopNavPanel =
  'md:p-0 md:h-[70px] md:w-fit md:sticky md:bg-[transparent]';
const desktopNavItemList = 'md:h-full md:flex-row-centered';

export default function Header(props: HeaderProps) {
  const content = props.textContent;

  /* 
    --- Aux Functions ---
  */
  const checkWindowsDefined = (): boolean => {
    return typeof window !== 'undefined';
  };

  let prevScroll = 0;
  if (checkWindowsDefined()) {
    prevScroll = window.scrollY;
  }

  const scrollToSection = (sectionId: string) => () => {
    console.log(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      setIsOpenNavSlider(false);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const openCloseSlidingPanel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsOpenNavSlider(!isOpenNavSlider);
    e.stopPropagation();
  };

  const openResume = () => {
    if (checkWindowsDefined()) window.open('/resume.pdf');
  };

  /* 
    --- React Hooks ---
  */
  const [isOpenNavSlider, setIsOpenNavSlider] = useState<boolean>(false);
  const [isOpenInfoDialog, setIsOpenInfoDialog] = useState<boolean>(false);

  const refSlider = useClickAway(() => setIsOpenNavSlider(false));
  const refHeader = useRef<HTMLInputElement>(null);

  // Hide header on scroll down + change header height on scroll + disable shadows when header on top
  useEffect(() => {
    const handleScrollDirectionChange = () => {
      if (!refHeader.current) return;

      if (window.scrollY === 0) {
        refHeader.current.style.height = '100px';
        refHeader.current.style.boxShadow = '0 0px 0px 0px rgb(0 0 0 / 0.1)';
      } else {
        refHeader.current.style.height = '70px';
        refHeader.current.style.boxShadow =
          '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';
      }

      if (window.scrollY > prevScroll)
        refHeader.current.style.transform = 'translateY(-100px)';
      else refHeader.current.style.transform = 'translateY(0px)';

      prevScroll = window.scrollY;
    };
    window.addEventListener('scroll', handleScrollDirectionChange);
    return () => {
      window.removeEventListener('scroll', handleScrollDirectionChange);
    };
  }, []);

  // Disable scroll when sliding panel is open
  useEffect(() => {
    if (checkWindowsDefined())
      if (isOpenNavSlider)
        disableBodyScroll(document as unknown as HTMLElement);
      else enableBodyScroll(document as unknown as HTMLElement);
  }, [isOpenNavSlider]);

  // Disable scroll when dialog panel is open
  useEffect(() => {
    if (checkWindowsDefined())
      if (isOpenInfoDialog)
        disableBodyScroll(document as unknown as HTMLElement);
      else enableBodyScroll(document as unknown as HTMLElement);
  }, [isOpenInfoDialog]);

  /* 
    --- Component ---
  */
  return (
    <header
      ref={refHeader}
      className={`${mainHeaderClass} ${
        !isOpenNavSlider && !isOpenInfoDialog && 'backdrop-blur-sm'
      } flex-row-centered transition-all-eio-300`}
    >
      {/* Main Logo */}
      <Logo
        imageLogo={props.logo.imageLogo}
        imageLogoSecondary={props.logo.imageLogoSecondary}
        altLogo={props.logo.altLogo}
        callback={() => scrollToSection('#landing')}
      ></Logo>

      {/* Hamburguer Menu Icon */}
      <button
        onMouseDownCapture={(
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => openCloseSlidingPanel(e)}
        className={`${hamburgerIconClass}`}
      >
        <BurgerClose isClosed={isOpenNavSlider} />
      </button>

      {/* Blur behind Nav Sliding Panel */}
      <div
        className={`${blurPanelClass} 
        ${isOpenNavSlider && 'transform translate-x-full'}`}
      ></div>

      {/* Sliding Nav Panel */}
      <section
        ref={refSlider as LegacyRef<HTMLDivElement>}
        className={`${mobileNavPanel} ${desktopNavPanel} transition-all-eio-500
        ${isOpenNavSlider && 'transform -translate-x-full'}
        `}
      >
        <nav className='md:p-0 md:flex-row-centered h-full flex-col-centered justify-between'>
          <ul className={`${desktopNavItemList} flex-col-centered`}>
            {content.navItems.map((navItem: NavItemType, index: number) => {
              return (
                <NavItem
                  key={index}
                  callback={(id: string) => scrollToSection(id)}
                  growTimeout={300 * (index + 1)}
                  navItem={navItem}
                ></NavItem>
              );
            })}

            <EffectButton
              text={content.resume.itemName}
              callback={() => openResume()}
              width='32'
              growTimeout={300 * (content.navItems.length + 1)}
            ></EffectButton>
          </ul>

          <MoreInfoIcon
            growTimeout={300 * (content.navItems.length + 2)}
            callback={() => {
              setIsOpenInfoDialog(true);
              setIsOpenNavSlider(false);
            }}
          ></MoreInfoIcon>
        </nav>
      </section>

      {isOpenInfoDialog && (
        <Dialog
          callback={() => setIsOpenInfoDialog(false)}
          content={{
            title: props.textContent.moreInfo.title,
            paragraph: props.textContent.moreInfo.paragraph,
          }}
        ></Dialog>
      )}
    </header>
  );
}
