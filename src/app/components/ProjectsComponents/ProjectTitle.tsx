'use client';

import { ProjectTitleProps } from '@/app/props/ProjectTitleProps';

/* 
  --- Styles ---
*/
const titleContainerClass =
  'md:my-0 md:pt-4 md:w-[300px] md:relative md:z-20 pb-2 flex-col-start w-full';
const supraTitleTextClass =
  'pr-2 text-cyan-600 font-semibold secondary-sub-paragraph-class';
const titleTextClass = 'pr-2 subtitle-class';
const dateTextClass = 'secondary-sub-paragraph-class';

export const ProjectTitle = (props: ProjectTitleProps) => {
  return (
    <div
      className={`${titleContainerClass} ${
        props.odd
          ? 'md:left-0 md:justify-start md:items-start'
          : 'md:right-0 md:justify-end md:items-end'
      }`}
    >
      {/* Project titles */}
      <div className={`flex-row-end`}>
        <h6 className={supraTitleTextClass}>{props.supraName}</h6>
        <h6 className={dateTextClass}>{props.date}</h6>
      </div>
      <div className={`flex-row-end ${!props.odd && 'flex-row-reverse'}`}>
        <h1 className={`${titleTextClass} ${!props.odd && 'md:pl-2 pr-0'}`}>
          {props.name}
        </h1>
      </div>
    </div>
  );
};
