'use client';
import * as React from 'react';
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
const iconHoverEffectClass = 'w-6 h-6 text-light-200 icon-effect-class';
const iconHoverTagClass = 'md:w-6 md:-translate-y-1 md:-rotate-90 md:transform md:block hidden';
const decorativeLine = 'md:w-[10px] md:flex md:border-[1px] md:border-light-200 md:rounded hidden';

export const SocialsBar = (props: SocialsBarProps) => {
  /* 
    --- Aux Functions ---
  */
  const iconBySite = (site: Site) => {
    const iconHover: (siteName: string) => void = (siteName: string) => {
      const siteInList = props.sites.find((elem: Site) => elem.name === siteName);
      if (siteInList) {
        setIndexIconHovered(props.sites.indexOf(siteInList));
      }
    };

    if (site.name === 'github') {
      return (
        <a href={site.link} target="_blank" rel="noreferrer">
          <SiGithub
            className={iconHoverEffectClass}
            onMouseOver={() => iconHover(site.name)}
            onMouseOut={() => setIndexIconHovered(-1)}
          />
        </a>
      );
    }

    if (site.name === 'linkedin') {
      return (
        <a href={site.link} target="_blank" rel="noreferrer">
          <SiLinkedin
            className={iconHoverEffectClass}
            onMouseOver={() => iconHover(site.name)}
            onMouseOut={() => setIndexIconHovered(-1)}
          />
        </a>
      );
    }

    if (site.name === 'gmail') {
      return (
        <a href={site.link} target="_blank" rel="noreferrer">
          <SiGmail
            className={iconHoverEffectClass}
            onMouseOver={() => iconHover(site.name)}
            onMouseOut={() => setIndexIconHovered(-1)}
          />
        </a>
      );
    }

    if (site.name === 'credly') {
      return (
        <a href={site.link} target="_blank" rel="noreferrer">
          <SiAcclaim
            className={iconHoverEffectClass}
            onMouseOver={() => iconHover(site.name)}
            onMouseOut={() => setIndexIconHovered(-1)}
          />
        </a>
      );
    }

    return (
      <a href={site.link} target="_blank" rel="noreferrer">
        <OpenInNewIcon
          className={iconHoverEffectClass}
          onMouseOver={() => iconHover(site.name)}
          onMouseOut={() => setIndexIconHovered(-1)}
        />
      </a>
    );
  };

  /* 
    --- React Hooks ---
  */
  const [indexIconHovered, setIndexIconHovered] = useState<number>(-1);

  const decorativeDiv = (
    <Grow in={true} timeout={props.growTimeout}>
      <div className={decorativeLine}></div>
    </Grow>
  );

  const iconHoverTag = (site: Site, index: number) => {
    return (
      <div className={iconHoverTagClass}>
        <Grow in={indexIconHovered === index} timeout={500}>
          <span className="text-cyan-600 text-sm">{site.name}</span>
        </Grow>
      </div>
    );
  };
  return (
    <aside className={socialSidebarClass}>
      {decorativeDiv}
      {props.sites.map((site: Site, index: number) => {
        return (
          <div key={index} className={iconClass}>
            <Grow in={true} timeout={props.growTimeout}>
              <div className="md:mr-6 flex-row-centered">
                {iconHoverTag(site, index)}
                {iconBySite(site)}
              </div>
            </Grow>
          </div>
        );
      })}
      {decorativeDiv}
    </aside>
  );
};
