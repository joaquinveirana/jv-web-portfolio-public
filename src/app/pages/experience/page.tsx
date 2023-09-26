import SectionTitle from '@/app/components/SectionTitle/SectionTitle';
import { ExperienceProps } from '@/app/props/ExperienceProps';

/* 
  --- Styles ---
*/
const mainExperienceClass = 'main-section-class';
const sectionContentClass =
  'xl:flex-row-centered xl:items-start w-full pt-8 flex-col-centered';

export default async function Experience(props: ExperienceProps) {
  return (
    <section id='#about' className={mainExperienceClass}>
      <SectionTitle
        title={props.textContent.title}
        growTimeout={1500}
        scrollThreshold={100}
        growOneTime={true}
      />
      {/*  */}
      <div className={sectionContentClass}></div>
    </section>
  );
}
