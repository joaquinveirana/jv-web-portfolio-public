'use client';

import { ProjectDescriptionProps } from '@/app/props/ProjectDescriptionProps';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

/* 
  --- Styles ---
*/
const descriptionContainerClass =
  'md:my-0 md:pt-2 md:w-[300px] md:z-20 md:relative mb-4 w-full flex-col-start';
const descriptionTextClass =
  'md:p-6 md:w-[330px] p-4 rounded-md shadow-lg bg-dark-400 text-base secondary-sub-paragraph-light-class';
const technologiesListClass =
  'md:w-[260px] p-2 secondary-sub-paragraph-light-class flex-row-end';

export const ProjectDescription = (props: ProjectDescriptionProps) => {
  return (
    <div
      className={`${descriptionContainerClass} ${
        props.odd
          ? 'md:left-0 md:justify-start md:items-start'
          : 'md:right-0 md:justify-end md:items-end'
      }`}
    >
      {/* Project description */}
      <div
        className={`${descriptionTextClass} ${
          props.odd ? 'md:text-left' : 'md:text-right'
        }`}
      >
        {props.description}
      </div>

      {/* Project Technologies */}
      <div className={technologiesListClass}>{props.techList.join(' - ')}</div>

      {/* Link Icons */}
      <div className='flex-row-end'>
        {props.repoLink.length !== 0 && (
          <a href={props.repoLink} target='_blank'>
            <SiGithub className='mx-2 w-6 h-6 icon-effect-class' />
          </a>
        )}
        {props.websiteLink.length !== 0 && (
          <a href={props.websiteLink} target='_blank'>
            <FiExternalLink className='mx-2 w-6 h-6 icon-effect-class' />
          </a>
        )}
      </div>
    </div>
  );
};
