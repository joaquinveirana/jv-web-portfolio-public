'use client';

import { ProjectImageProps } from '@/app/props/ProjectImageProps';
import ReactPlayer from 'react-player';

/* 
  --- Styles ---
*/
const imageContainerClass =
  'md:my-0 md:z-10 my-2 w-full order-2 shadow-lg aspect-video grayscale-70 transition-all-eio-300 hover:grayscale-0';

export const ProjectImage = (props: ProjectImageProps) => {
  return (
    <div className={imageContainerClass}>
      <a href={props.imageLink} target='_blank'>
        {props.videoPath.length === 0 ? (
          <img
            src={props.imagePath}
            alt={`Imagen del proyecto: ${props.name} `}
          />
        ) : (
          props.isClient && (
            <ReactPlayer
              url={props.videoPath}
              width='100%'
              height='100%'
              loop={true}
              muted={true}
              onMouseOver={(event: MouseEvent) =>
                event.target && (event.target as HTMLMediaElement).play()
              }
              onMouseOut={(event: MouseEvent) =>
                event.target && (event.target as HTMLMediaElement).load()
              }
            />
          )
        )}
      </a>
    </div>
  );
};
