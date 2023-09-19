'use client';

import Grow from '@mui/material/Grow';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  SiCredly,
  SiGmail,
  SiLinkedin,
  SiGithub,
  SiAcclaim,
} from 'react-icons/si';
import { Site, SocialsBarProps } from '@/app/props/SocialsBarProps';
import { useState } from 'react';

/* 
  --- Styles ---
*/
const socialSidebarClass =
  'md:fixed md:top-1/3 md:left-0 md:w-32 md:h-1/3 md:z-0 md:py-12 md:flex-col-centered md:justify-around hidden';

const iconHoverEffectClass =
  'md:w-[26px] md:h-[26px] w-[32px] h-[32px] icon-class';

export default function SocialsBar(props: SocialsBarProps) {
  const iconBySite = (site: Site) => {
    const goToSite: Function = () => {
      window.open(site.link, '_blank');
    };

    const iconHover: Function = (siteName: string) => {
      const siteInList = props.sites.find(
        (elem: Site) => elem.name === siteName
      );
      if (siteInList) {
        console.log(props.sites.indexOf(siteInList));
        setIndexIconHovered(props.sites.indexOf(siteInList));
      }
    };

    if (site.name === 'github')
      return (
        <SiGithub
          className={iconHoverEffectClass}
          onClick={() => goToSite()}
          onMouseOver={() => iconHover(site.name)}
        />
      );

    if (site.name === 'linkedin')
      return (
        <SiLinkedin
          className={iconHoverEffectClass}
          onClick={() => goToSite()}
          onMouseOver={() => iconHover(site.name)}
        />
      );

    if (site.name === 'gmail')
      return (
        <SiGmail
          className={iconHoverEffectClass}
          onClick={() => goToSite()}
          onMouseOver={() => iconHover(site.name)}
        />
      );

    if (site.name === 'credly')
      return (
        <SiAcclaim
          className={iconHoverEffectClass}
          onClick={() => goToSite()}
          onMouseOver={() => iconHover(site.name)}
        />
      );

    return (
      <OpenInNewIcon
        className={iconHoverEffectClass}
        onClick={() => goToSite()}
        onMouseOver={() => iconHover(site.name)}
      />
    );
  };

  const [indexIconHovered, setIndexIconHovered] = useState<number>(-1);

  return (
    <div className={socialSidebarClass}>
      {props.sites.map((site: Site, index: number) => {
        return (
          <Grow key={index} in={true} timeout={props.growTimeout}>
            <div className='flex'>
              <div className='-rotate-90 transform'>
                <Grow in={true} timeout={100}>
                  <div>Icono</div>
                </Grow>
              </div>
              <div>{iconBySite(site)}</div>
            </div>
          </Grow>
        );
      })}
    </div>
  );
}
