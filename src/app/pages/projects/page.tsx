'use client';

import SectionTitle from '@/app/components/SectionTitle/SectionTitle';
import GrowOnScroll from '@/app/components/GrowOnScroll/GrowOnScroll';
import { Project, ProjectsProps } from '@/app/props/ProjectsProps';
import ProjectDisplay from '@/app/components/ProjectsComponents/ProjectDisplay';

export const Projects = (props: ProjectsProps) => {
  return (
    <article id='#projects' className='article-class'>
      {/* Title */}
      <SectionTitle
        title={props.textContent.title}
        growTimeout={1500}
        extraScrollThreshold={1000}
        growOneTime={true}
      />

      <div className='flex-col-centered'>
        {props.textContent.projects.map((project: Project, index: number) => {
          return (
            <GrowOnScroll
              key={index}
              growOneTime={true}
              growTimeout={1500}
              extraScrollThreshold={1000 + (index + 1 * 200)}
            >
              <div>
                <ProjectDisplay
                  index={index}
                  project={project}
                ></ProjectDisplay>
              </div>
            </GrowOnScroll>
          );
        })}
      </div>
    </article>
  );
};
