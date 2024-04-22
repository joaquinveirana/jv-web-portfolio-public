'use client';
import * as React from 'react';
import { Project } from '@/app/props/ProjectsProps';
import { useEffect, useState } from 'react';
import { ProjectTitle } from './ProjectTitle';
import { ProjectDescription } from './ProjectDescription';
import { ProjectImage } from './ProjectImage';

/* 
  --- Styles ---
*/
const projectsContainerClass = 'md:mb-12 md:w-full md:justify-between md:flex-row-start mt-8 flex-col-centered';

export const ProjectDisplay = (props: { project: Project; index: number }) => {
  /* 
    --- React Hooks ---
  */
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Used to avoid Error: There was an error while hydrating this Suspense boundary. Switched to client rendering.
    setIsClient(true);
  }, []);

  /* 
    --- Aux Functions ---
  */
  const isOddProject = props.index % 2 !== 0;

  return (
    <div key={props.index} className={`${projectsContainerClass} ${isOddProject && 'md:flex-row-reverse'}`}>
      {/* Project image - video */}
      <div className="md:order-1 order-2">
        <ProjectImage
          name={props.project.name}
          imageLink={props.project.imageLink}
          imagePath={props.project.imagePath}
          videoPath={props.project.videoPath}
          odd={isOddProject}
          isClient={isClient}
        />
      </div>

      {/* Title and Description of the project (desktop)*/}
      <div className="md:flex-col-end md:order-2 hidden">
        <ProjectTitle
          supraName={props.project.supraName}
          name={props.project.name}
          date={props.project.date}
          odd={isOddProject}
        />
        <ProjectDescription
          websiteLink={props.project.websiteLink}
          repoLink={props.project.repoLink}
          description={props.project.description}
          techList={props.project.techList}
          odd={isOddProject}
        />
      </div>

      {/* Title and Description of the project (mobile)*/}
      <div className="md:hidden w-full order-1">
        <ProjectTitle
          supraName={props.project.supraName}
          name={props.project.name}
          date={props.project.date}
          odd={isOddProject}
        />
      </div>

      <div className="md:hidden w-full order-3">
        <ProjectDescription
          websiteLink={props.project.websiteLink}
          repoLink={props.project.repoLink}
          description={props.project.description}
          techList={props.project.techList}
          odd={isOddProject}
        />
      </div>
    </div>
  );
};
