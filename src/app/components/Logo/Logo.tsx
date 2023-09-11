'use client';
import { LogoProps } from '@/app/props/LogoProps';
import Image from 'next/image';

export default function Logo(props: LogoProps) {
  const logoClass = 'px-4 absolute top-50% left-0 cursor-pointer';

  return (
    <div
      className={`md:w-fit flex justify-center items-center animate-fade-in`}
      onClick={props.callback()}
    >
      <Image
        src={props.imageLogo}
        alt='JV Logo'
        className={`${logoClass} z-20 transition-all-eio-500 hover:opacity-0`}
        width={80}
        height={15}
        priority
      />
      <Image
        src={props.imageLogoSecondary}
        alt='JV Logo'
        className={`${logoClass} z-10 transition-all-eio-500`}
        width={80}
        height={15}
        priority
      />
    </div>
  );
}
