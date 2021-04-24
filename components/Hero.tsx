import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container px-4 pt-20 xl:pt-24 mx-auto">
      <div className="w-full px-4 md:mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-6  lg:text-7xl text-5xl font-extrabold leading-1 tracking-normal text-black-700 md:text-6xl md:tracking-tight">
          This is your place. <br />
          <span className="block w-full text-transparent bg-clip-text bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 lg:inline">
            Explore. Learn. Build. Grow.
          </span>{' '}
        </h1>
        <p className="px-0 mb-6 text-lg text-black-500 md:text-xl lg:px-24 ">
          At TechHub, we've developed a huge community around solving
          programming challenges, building exciting real-world projects in every
          stack, and daily discussions.
        </p>
        <div className="mb-6">
          <Link href="/about">
            <button className="btn text-white btn-grad">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full mx-auto text-center md:w-10/12">
        <img
          src="/assets/svg/hero2.svg"
          className="h-auto py-6 w-auto object-scale-down"
        />
      </div>
    </section>
  );
}
