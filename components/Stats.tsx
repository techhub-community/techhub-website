import React from 'react';

export default function Stats() {
  return (
    <div className="bg-black-800 mx-auto py-16">
      <div className="relative xl:px-20 lg:px-20 md:px-12 pt-10">
        <h1 className="text-center xl:text-4xl text-3xl xl:w-4/6 w-5/6 mx-auto font-extrabold text-gray-200">
          Trusted by the Fortune 500 and More in Over 80 Territories
        </h1>
        <p className="text-xl text-center text-gray-400 xl:w-4/6 w-5/6 mx-auto pt-5 pb-8 font-normal">
          As copper costs soar, we are taking aggressive steps in pricing and
          product development to ensure our continued commitment to
          cost-effectively providing the world's highest quality.
        </p>
        <div className="flex bg-black-800 w-4/5 flex-wrap mx-auto">
          <div className="w-full xl:w-3/12 lg:w-3/12 sm:w-3/12 md:w-3/12  pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-brand-500 pb-1">
              220
            </p>
            <p className="text-2xl text-gray-400 text-center font-normal">
              Projects
            </p>
          </div>
          <div className="w-full xl:w-3/12 lg:w-3/12 sm:w-3/12 md:w-3/12 pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-brand-500 pb-1">
              130K
            </p>
            <p className="text-2xl text-gray-400 text-center font-normal">
              Earned
            </p>
          </div>
          <div className="w-full xl:w-3/12 lg:w-3/12 sm:w-3/12 md:w-3/12 pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-brand-500 pb-1">
              24/7
            </p>
            <p className="text-2xl text-gray-400 text-center font-normal">
              Delivery
            </p>
          </div>
          <div className="w-full xl:w-3/12 lg:w-3/12 sm:w-3/12 md:w-3/12  pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-brand-500 pb-1">
              99%
            </p>
            <p className="text-2xl text-gray-400 text-center font-normal">
              Success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
