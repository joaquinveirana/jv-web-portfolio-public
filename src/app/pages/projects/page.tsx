'use client';

import SectionTitle from '@/app/components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import GrowOnScroll from '@/app/components/GrowOnScroll/GrowOnScroll';
import { Project, ProjectsProps } from '@/app/props/ProjectsProps';
import ReactPlayer from 'react-player';

/* 
  --- Styles ---
*/
const sectionContentClass = 'flex-col-centered w-full';
const projectImageClass =
  'relative z-20 shadow-lg aspect-video rounded-sm grayscale-70 transition-all-eio-300 hover:grayscale-0';

export const Projects = (props: ProjectsProps) => {
  /* 
    Hooks
  */
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Used to avoid Error: There was an error while hydrating this Suspense boundary. Switched to client rendering.
    setIsClient(true);
  }, []);

  /* 
    Aux functions
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

      <div className={sectionContentClass}>
        {props.textContent.projects.map((project: Project, index: number) => {
          return (
            <div key={index} className='mt-10'>
              <div
                className={
                  'shadow-lg aspect-video rounded-sm grayscale-70 transition-all-eio-300 hover:grayscale-0'
                }
              >
                {project.videoPath.length === 0 ? (
                  <img
                    src={project.imagePath}
                    alt={`Imagen del proyecto: ${project.name} `}
                  />
                ) : (
                  isClient && (
                    <ReactPlayer
                      url={project.videoPath}
                      width='100%'
                      height='100%'
                      loop={true}
                      muted={true}
                      onMouseOver={(event: MouseEvent) =>
                        event.target &&
                        (event.target as HTMLMediaElement).play()
                      }
                      onMouseOut={(event: MouseEvent) =>
                        event.target &&
                        (event.target as HTMLMediaElement).load()
                      }
                    />
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
