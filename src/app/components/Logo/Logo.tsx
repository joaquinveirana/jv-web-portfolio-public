'use client';
import { LogoProps } from '@/app/props/LogoProps';
import Image from 'next/image';

/* 
  --- Styles ---
*/
const logoDivClass =
  'md:w-fit flex justify-center items-center animate-fade-in';

const logoImageClass =
  'px-4 absolute top-50% md:left-6 left-0 cursor-pointer transition-all-eio-500';

export const Logo = (props: LogoProps) => {
  return (
    <div className={logoDivClass} onClick={props.callback()}>
      <Image
        src={props.imageLogo}
        alt={props.altLogo}
        className={`${logoImageClass} z-20 hover:opacity-0`}
        width={80}
        height={15}
        priority
      />
      <Image
        src={props.imageLogoSecondary}
        alt={props.altLogo}
        className={`${logoImageClass} z-10`}
        width={80}
        height={15}
        priority
      />
    </div>
  );
};
