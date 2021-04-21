import React from 'react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io5';

export default function CTA() {
  return (
    <div className="bg-black-800 mx-auto py-8">
      <div className="relative xl:px-20 lg:px-20 md:px-12 pt-10">
        <h1 className="text-center xl:text-4xl text-3xl xl:w-4/6 w-5/6 mx-auto font-extrabold text-gray-200">
          Join US
        </h1>
        <p className="text-xl text-center text-gray-400 xl:w-4/6 w-5/6 mx-auto pt-5 pb-8 font-normal">
          As copper costs soar, we are taking aggressive steps in pricing and
          product development to ensure our continued commitment to
          cost-effectively providing the world's highest quality.
        </p>
        <div className="flex justify-center items-center py-6">
          <div className="flex flex-row gap-6 place-items-center mr-4">
            <IoLogoFacebook className="text-2xl text-gray-200 hover:text-brand-500" />
            <IoLogoInstagram className="text-2xl text-gray-200 hover:text-brand-500" />
            <IoLogoLinkedin className="text-2xl text-gray-200 hover:text-brand-500" />
            <IoLogoGithub className="text-2xl text-gray-200 hover:text-brand-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
