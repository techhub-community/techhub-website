import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container px-4 pt-20 xl:pt-24 mx-auto">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-6  lg:text-7xl text-5xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          The only{' '}
          <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-brand-600 lg:inline">
            Dev Community
          </span>{' '}
          you will ever need to grow.
        </h1>
        <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24 ">
          At TechHub, we've developed a huge community around solving
          programming challenges, building exciting real-world projects in every
          stack, and daily discussions.
        </p>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <Link href="/about">
            <button className="mx-2 my-2 transition duration-150 ease-in-out hover:border-brand-700 hover:text-brand-600 rounded border border-black-600 text-black-500 px-6 py-2 text-md">
              Learn More
            </button>
          </Link>
          {/* <button
              className="rounded-sm md:inline-flex px-5 py-2 border-solid border border-black"
              style={{ marginLeft: ".5rem" }}
            >
              Watch Video
            </button> */}
        </div>
      </div>
      <div className="flex justify-center w-full mx-auto text-center md:w-10/12">
        <img
          src="/assets/svg/hero2.svg"
          className="h-auto w-auto object-scale-down"
        />
      </div>
    </section>
  );
}
