import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

const Hero = ({ slice }) => (
  <section className='w-full flex justify-center'>
    <div className='flex flex-col my-12 max-w-prose items-center gap-6'>
      <div className='text-6xl font-semibold'>
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className='text-gray-500 text-center text-xl leading-normal'>
        <PrismicRichText field={slice.primary.description} />
      </div>
      <div className='bg-black text-white font-bold text-xl rounded-lg'>
        <div className='py-4 px-8'>
          <PrismicLink field={slice.primary.buttoncta_link}>
            Enroll Now!
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
