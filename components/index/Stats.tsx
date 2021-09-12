import React from 'react';

export default function Stats(props) {
  function getStars() {
    var sum = 0;
    props.githubStats.map((element) => {
      sum += element.stargazers_count;
    });
    return sum;
  }

  function getProjects() {
    return props.githubStats.length;
  }
  return (
    <div className="bg-[#040E17] mx-auto py-16">
      <div className="relative xl:px-20 lg:px-20 md:px-12 pt-10">
        <h1 className="text-center xl:text-4xl text-3xl xl:w-4/6 w-5/6 mx-auto font-extrabold text-gray-200">
          TechHub in Numbers
        </h1>
        <p className="text-xl text-center text-gray-400 xl:w-4/6 w-5/6 mx-auto pt-5 pb-8 font-normal">
          Wherever there is number, there is beauty.
        </p>
        <div className="flex bg-black-800 w-4/5 flex-wrap mx-auto">
          <div className="w-full xl:w-3/12 lg:w-3/12 sm:w-3/12 md:w-3/12  pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-brand-500 pb-1">
              {typeof props.githubStats !== 'string' ? getProjects() : ''}
            </p>
            <p className="text-2xl text-gray-400 text-center font-normal">
              Projects
            </p>
          </div>
          <div className="w-full xl:w-3/12 lg:w-3/12 sm:w-3/12 md:w-3/12 pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-brand-500 pb-1">
              {typeof props.githubStats !== 'string' ? getStars() : ''}
            </p>
            <p className="text-2xl text-gray-400 text-center font-normal">
              Github stars
            </p>
          </div>
          <div className="w-full xl:w-3/12 lg:w-3/12 sm:w-3/12 md:w-3/12 pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-brand-500 pb-1">
              180+
            </p>
            <p className="text-2xl text-gray-400 text-center font-normal">
              Active members
            </p>
          </div>
          <div className="w-full xl:w-3/12 lg:w-3/12 sm:w-3/12 md:w-3/12  pt-8 pb-8">
            <p className="text-5xl font-bold text-center text-brand-500 pb-1">
              30+
            </p>
            <p className="text-2xl text-gray-400 text-center font-normal">
              Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
