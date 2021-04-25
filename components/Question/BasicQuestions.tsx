import React from 'react';
import SingleQuestion from './SingleQuestion';

export default function BasicQuestions() {
  return (
    <>
      <div className="w-full px-2 md:px-12 my-4" id="basic-questions">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="sm:flex items-center justify-between">
            <div className="flex text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              <img className="h-12" src="assets/svg/basic.svg" alt="" />
              <p className="ml-4 py-3 self-center">TechHub Basic Questions</p>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-16 flex flex-col gap-8">
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
        </div>
      </div>
    </>
  );
}
