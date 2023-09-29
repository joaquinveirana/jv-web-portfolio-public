'use client';

import SectionTitle from '@/app/components/SectionTitle/SectionTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import GrowOnScroll from '@/app/components/GrowOnScroll/GrowOnScroll';
import { Project, ProjectsProps } from '@/app/props/ProjectsProps';

/* 
  --- Styles ---
*/
const sectionContentClass =
  'md:flex-row-centered md:items-start flex-col-centered w-full';
const projectImageClass = '';

export const Projects = (props: ProjectsProps) => {
  /* 
    Hooks
  */

  return (
    <article id='#projects' className='article-class'>
      {/* Title */}
      <SectionTitle
        title={props.textContent.title}
        growTimeout={1500}
        extraScrollThreshold={500}
        growOneTime={true}
      />
      {props.textContent.projects.map((project: Project) => {
        return (
          <img
            className={projectImageClass}
            src={project.imagesPaths[0]}
            alt={`Imagen del proyecto: ${project.name} `}
          />
        );
      })}
      <div className={sectionContentClass}></div>
    </article>
  );
};
