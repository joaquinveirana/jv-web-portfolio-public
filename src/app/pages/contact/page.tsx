'use client';

import { GrowOnScroll } from '@/app/components/GrowOnScroll/GrowOnScroll';
import { ContactProps } from '@/app/props/ContactProps';
import { EffectButton } from '@/app/components/EffectButton/EffectButton';

/* 
  --- Styles ---
*/

export const Contact = (props: ContactProps) => {
  return (
    <article id='#contact' className='pt-16 article-class'>
      {/* Contact section */}
      <GrowOnScroll
        growTimeout={1500}
        extraScrollThreshold={2000}
        growOneTime={true}
      >
        <div className='flex-col-centered'>
          <h1 className='pb-6 title-class'>{props.textContent.title}</h1>
          <p className='md:w-1/2 px-2 w-full paragraph-class'>
            {props.textContent.mainParagraph}
          </p>
          <a href={props.textContent.email} target='_blank'>
            <EffectButton
              text={props.textContent.buttonText}
              callback={() => {}}
              width={'50'}
              growTimeout={2000}
            ></EffectButton>
          </a>
          <div className='pt-16 pb-6'>
            <a href={props.textContent.footerRepoLink} target='_blank'>
              <span className='sub-paragraph-class hover-cyan-text'>
                {props.textContent.footer1}
              </span>
            </a>
            <a href={props.textContent.footerReferenceLink} target='_blank'>
              <span className='sub-paragraph-class hover-cyan-text'>
                {props.textContent.footer2}
              </span>
            </a>
          </div>
        </div>
      </GrowOnScroll>
    </article>
  );
};
