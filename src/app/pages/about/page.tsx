'use client';

import GrowOnScroll from '@/app/components/GrowOnScroll/GrowOnScroll';

export default function About() {
  return (
    <section id='#about' className='w-full'>
      <div className='h-[1000px] w-full bg-dark-primary-color-500 flex justify-center items-center'>
        <GrowOnScroll
          growTimeout={1500}
          scrollThreshold={200}
          growOneTime={true}
        >
          <div className='w-full h-full text-[white] flex justify-center items-center text-3xl'>
            <h1>About</h1>
          </div>
        </GrowOnScroll>
      </div>
    </section>
  );
}
