import React from 'react';
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5';

export default function TeamMate() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          className="rounded-full"
          src="https://via.placeholder.com/150"
          alt="team 1"
        />
        <h2 className="text-xl font-medium mt-6">John Doe</h2>
        <h3 className="text-md">john.doe@gmail.com</h3>
        <div className="w-full flex justify-center pt-5 pb-5">
          <div className="flex flex-row gap-6 place-items-center mr-4">
            <IoLogoFacebook className="text-2xl text-black-700 hover:text-brand-500" />
            <IoLogoInstagram className="text-2xl text-black-700 hover:text-brand-500" />
            <IoLogoLinkedin className="text-2xl text-black-700 hover:text-brand-500" />
            <IoLogoGithub className="text-2xl text-black-700 hover:text-brand-500" />
          </div>
        </div>
      </div>
    </>
  );
}
