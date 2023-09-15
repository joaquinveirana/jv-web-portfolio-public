import Grow from '@mui/material/Grow';
import { LandingProps } from '@/app/props/LandingProps';

/* 
  --- Styles ---
*/
const mainLandingClass =
  'md:px-32 md:py-0 pt-[150px] md:items-start w-full h-screen bg-dark-primary-color-300 md:flex-col-centered justify-start';
const mainHeaderClass = 'my-1 md:text-7xl text-4xl font-bold';
const mainParagraphClass =
  'xl:w-3/5 lg:w-full md:w-full md:text-lg md:my-8 my-6 text-base text-light-primary-color-200';

export default function Landing(props: LandingProps) {
  return (
    <section id='#landing' className={mainLandingClass}>
      {/*       <Grow appear={true} in={true} timeout={300}>
        <h3 className='text-base text-light-primary-color-600 '>
          {props.textContent.title0}
        </h3>
      </Grow> */}
      <div className='md:p-0 md:w-3/4 px-6 w-full '>
        <Grow in={true} timeout={600}>
          <h1 className={`${mainHeaderClass} text-light-primary-color-600`}>
            {props.textContent.title1}
          </h1>
        </Grow>
        <Grow in={true} timeout={1000}>
          <h1 className={`${mainHeaderClass} text-light-primary-color-200`}>
            {props.textContent.title2}
          </h1>
        </Grow>
        <Grow in={true} timeout={1300}>
          <p className={mainParagraphClass}>{props.textContent.description}</p>
        </Grow>
      </div>
    </section>
  );
}
