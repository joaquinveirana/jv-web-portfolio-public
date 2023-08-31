'use client';
// I18n dictionary getter
import { getDictionary, getLang } from '@/i18n/i18n_functions';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { LegacyRef, useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';

type HeaderProps = {
  lang: string;
  lightMode: boolean;
  imageLogoFilename: string;
  imageLogoAlt: string;
};

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
      className={`flex w-full items-center justify-between font-mono text-sm lg:flex ${
        props.lightMode ? 'bg-dark-primary-color' : 'bg-light-primary-color'
      }`}
    >
      {/* Main Logo */}
      <Image
        src={props.imageLogoFilename}
        alt={props.imageLogoAlt}
        className={`p-4 ${props.lightMode && 'dark:invert'}`}
        width={90}
        height={20}
        priority
      />

      {/* Hamburguer Menu Icon */}
      <MenuIcon
        onClick={() => handleOpenModal()}
        className={`mr-4 ${props.lightMode ? 'action' : 'primary'}`}
        fontSize='large'
      ></MenuIcon>

      {/* Sliding panel */}
      <div
        ref={ref as LegacyRef<HTMLDivElement>}
        className={`fixed top-0 z-10 w-3/4 h-screen bg-[red] ${
          isOpen ? 'right-0' : '-right-3/4'
        }
        `}
      ></div>
    </header>
  );
}

/* 
${isOpen ? 'visible' : 'hidden'}
transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')}; */
