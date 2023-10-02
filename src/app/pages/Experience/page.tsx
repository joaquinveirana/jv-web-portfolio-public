'use client';

import SectionTitle from '@/app/components/SectionTitle/SectionTitle';
import { ExperienceProps, JobExperience } from '@/app/props/ExperienceProps';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { GrowOnScroll } from '@/app/components/GrowOnScroll/GrowOnScroll';

/* 
  --- Styles ---
*/
const sectionContentClass =
  'md:flex-row-centered md:items-start flex-col-centered w-full';
const tabListContainerClass = 'md:pt-6 md:w-1/5 pt-2 w-full flex-row-centered';
const tabListStyles = {
  '.MuiTab-root': {
    borderLeft: 3,
    borderBottom: 3,
    borderColor: '#27374d',
  },
  '.MuiTab-textColorPrimary': {
    color: '#abc1d3',
  },
  '.MuiTabs-indicator': {
    left: 0,
    width: '3px',
    backgroundColor: '#34bbff',
  },
  '& .Mui-selected': { color: '#34bbff' },
};
const tabListItemClass =
  'transition-all-eio-300 hover:text-cyan-600 hover:bg-dark-500';
const tabPanelContainerClass = 'md:w-4/5 md:p-4 pt-6';

export const Experience = (props: ExperienceProps) => {
  /* 
    --- React Hooks ---
  */
  const [tabValue, setTabValue] = useState(0);
  const [tabListVerticalOrientation, setTablistVerticalOrientation] =
    useState(false);
  useEffect(() => {
    const tabListOrientationChange = () => {
      // Styling and orientation of the TabList depending ogf the screen width
      if (window.innerWidth > 768) {
        tabListStyles['.MuiTab-root'].borderBottom = 0;
        tabListStyles['.MuiTab-root'].borderLeft = 3;

        setTablistVerticalOrientation(true);
      } else {
        tabListStyles['.MuiTab-root'].borderBottom = 3;
        tabListStyles['.MuiTab-root'].borderLeft = 0;
        setTablistVerticalOrientation(false);
      }
    };
    tabListOrientationChange();
    window.addEventListener('resize', tabListOrientationChange);
    return () => {
      window.removeEventListener('resize', tabListOrientationChange);
    };
  });

  return (
    <article id='#experience' className='article-class'>
      {/* Title */}
      <SectionTitle
        title={props.textContent.title}
        growTimeout={1500}
        extraScrollThreshold={500}
        growOneTime={true}
      />

      <div className={sectionContentClass}>
        {/* TabList of Companies */}
        <GrowOnScroll
          growTimeout={1500}
          extraScrollThreshold={600}
          growOneTime={true}
        >
          <div className={tabListContainerClass}>
            <Tabs
              aria-label={props.textContent.aria.panel}
              onChange={(event: React.SyntheticEvent, newValue: number) =>
                setTabValue(newValue)
              }
              orientation={
                tabListVerticalOrientation ? 'vertical' : 'horizontal'
              }
              sx={tabListStyles}
              value={tabValue}
              variant='scrollable'
            >
              {props.textContent.jobs.map(
                (job: JobExperience, index: number) => {
                  return (
                    <Tab
                      className={tabListItemClass}
                      aria-controls={`${props.textContent.aria.tab}-${index}`}
                      key={index}
                      label={job.companyShortName}
                    />
                  );
                }
              )}
            </Tabs>
          </div>
        </GrowOnScroll>

        {/* TabPanel with company content */}
        <GrowOnScroll
          growTimeout={1500}
          extraScrollThreshold={600}
          growOneTime={true}
        >
          <div className={tabPanelContainerClass}>
            {props.textContent.jobs.map((job: JobExperience, index: number) => {
              return (
                <div
                  key={index}
                  className={`${tabValue === index ? 'block' : 'hidden'}`}
                >
                  <h1 className='subsubtitle-class'>
                    {job.position} @ {job.company}
                  </h1>
                  <h6 className='pb-2 secondary-sub-paragraph-class'>
                    {job.startDate} - {job.endDate}
                  </h6>
                  {job.keyPoints.map((keyPoint: string, index: number) => {
                    return (
                      <div key={index} className='py-2 flex items-start'>
                        <span className='text-cyan-600'>&#9724;</span>
                        <p className='text-base pl-2 paragraph-class'>
                          {keyPoint}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </GrowOnScroll>
      </div>
    </article>
  );
};
