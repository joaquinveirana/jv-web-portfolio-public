'use client';

import Grow from '@mui/material/Grow';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { SiGmail, SiLinkedin, SiGithub, SiAcclaim } from 'react-icons/si';
import { Site, SocialsBarProps } from '@/app/props/SocialsBarProps';
import { useState } from 'react';

/* 
  --- Styles ---
*/
const socialSidebarClass =
  'xl:w-32 lg:w-24 md:fixed md:top-1/3 md:left-0 md:w-24 md:h-1/3 md:min-h-[300px] md:z-0 md:py-12 md:flex md:flex-col md:items-center md:justify-around md:bg-[transparent] w-full bg-dark-300 flex flex-row p-4';
const iconClass = 'md:flex-row-centered md:my-4 w-full flex-col-centered';
const iconHoverEffectClass = 'w-6 h-6 icon-effect-class';
const iconHoverTagClass =
  'md:w-6 md:-translate-y-1 md:-rotate-90 md:transform md:block hidden';

export const SocialsBar = (props: SocialsBarProps) => {
  /* 
    --- Aux Functions ---
  */
  const iconBySite = (site: Site) => {
    const goToSite: Function = () => {
      window.open(site.link, '_blank');
    };
    const iconHover: Function = (siteName: string) => {
      const siteInList = props.sites.find(
        (elem: Site) => elem.name === siteName
      );
      if (siteInList) setIndexIconHovered(props.sites.indexOf(siteInList));
    };

    if (site.name === 'github')
      return (
        <SiGithub
          className={iconHoverEffectClass}
          onClick={() => goToSite()}
          onMouseOver={() => iconHover(site.name)}
          onMouseOut={() => setIndexIconHovered(-1)}
        />
      );

    if (site.name === 'linkedin')
      return (
        <SiLinkedin
          className={iconHoverEffectClass}
          onClick={() => goToSite()}
          onMouseOver={() => iconHover(site.name)}
          onMouseOut={() => setIndexIconHovered(-1)}
        />
      );

    if (site.name === 'gmail')
      return (
        <SiGmail
          className={iconHoverEffectClass}
          onClick={() => goToSite()}
          onMouseOver={() => iconHover(site.name)}
          onMouseOut={() => setIndexIconHovered(-1)}
        />
      );

    if (site.name === 'credly')
      return (
        <SiAcclaim
          className={iconHoverEffectClass}
          onClick={() => goToSite()}
          onMouseOver={() => iconHover(site.name)}
          onMouseOut={() => setIndexIconHovered(-1)}
        />
      );

    return (
      <OpenInNewIcon
        className={iconHoverEffectClass}
        onClick={() => goToSite()}
        onMouseOver={() => iconHover(site.name)}
        onMouseOut={() => setIndexIconHovered(-1)}
      />
    );
  };

  /* 
    --- React Hooks ---
  */
  const [indexIconHovered, setIndexIconHovered] = useState<number>(-1);

  const iconHoverTag = (site: Site, index: number) => {
    return (
      <div className={iconHoverTagClass}>
        <Grow in={indexIconHovered === index} timeout={500}>
          <span className='text-cyan-600 text-sm'>{site.name}</span>
        </Grow>
      </div>
    );
  };
  return (
    <aside className={socialSidebarClass}>
      {props.sites.map((site: Site, index: number) => {
        return (
          <div key={index} className={iconClass}>
            <Grow in={true} timeout={props.growTimeout}>
              <div className='md:mr-6 flex-row-centered'>
                {iconHoverTag(site, index)}
                {iconBySite(site)}
              </div>
            </Grow>
          </div>
        );
      })}
    </aside>
  );
};
