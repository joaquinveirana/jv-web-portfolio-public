'use client';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { LegacyRef, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import { HeaderProps, NavItem } from '@/app/types/HeaderTypes';

/* 
  Styles
*/
const mobileNavPanel =
  'fixed top-0 left-full z-10 w-4/5 h-screen transition duration-300 ease-in-out bg-dark-primary-color-500 flex flex-col items-center justify-center';
const desktopNavPanel = 'md:h-[70px] md:w-fit md:sticky md:bg-[transparent]';
const mobileNavItems = 'flex flex-col items-center justify-center';
const desktopNavItems =
  'md:flex md:flex-row md:items-center md:justify-center md:h-full';

export default function Header(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
    console.log(isOpen);
  });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  console.log(props.lang);
  return (
    <header
      className={`md:pr-6 md:pl-6 flex w-full md:h-[70px] h-[90px] items-center justify-between font-mono text-sm ${
        props.lightMode ? 'bg-light-primary-color' : 'bg-dark-primary-color-400'
      }`}
    >
      {/* Main Logo */}
      <div className='md:w-fit w-1/5 flex justify-center items-center'>
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
      {!isOpen && (
        <MenuIcon
          onClick={() => handleOpenModal()}
          className={`md:hidden mr-4 ${props.lightMode ? 'action' : 'primary'}`}
          fontSize='large'
        ></MenuIcon>
      )}

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
        className={`${mobileNavPanel} ${desktopNavPanel}
        ${isOpen && 'transform -translate-x-full'}
        `}
      >
        <nav className='md:h-full flex flex-col items-center justify-center'>
          <ul className={`${mobileNavItems} ${desktopNavItems}`}>
            {props.navItems.map((navItem: NavItem) => {
              return (
                <li className={`md:m-2 md:text-lg m-6 text-2xl`}>
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
