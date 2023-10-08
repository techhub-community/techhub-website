import React from 'react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io5';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-[#040E17] mx-auto py-8">
      <div className="relative xl:px-20 lg:px-20 md:px-12 pt-10 flex flex-col justify-center items-center">
        <h1 className="text-center xl:text-4xl text-3xl xl:w-4/6 w-5/6 mx-auto font-extrabold text-gray-200">
          Join US
        </h1>
        <p className="text-xl text-center text-gray-400 xl:w-4/6 w-5/6 mx-auto pt-5 pb-8 font-normal">
          "If you want to lift yourself up, lift up someone else." – Booker T.
          Washington
        </p>
        <div>
          <Link href="https://kutt.it/techhub-invite">
              <img
                alt="Discord"
                className="h-8 zoom"
                src="https://img.shields.io/discord/814219041614594078?color=%23c31265&label=Discord&style=for-the-badge"
              />
          </Link>
        </div>
        <div className="flex justify-center items-center py-6">
          <div className="flex flex-row gap-6 place-items-center mr-4">
            <Link href="https://www.facebook.com/official.techhub.community">
                <IoLogoFacebook className="text-2xl text-gray-200 hover:text-brand-500" />
            </Link>
            <Link href="https://www.instagram.com/techhub_community/">
                <IoLogoInstagram className="text-2xl text-gray-200 hover:text-brand-500" />
            </Link>
            <Link href="https://www.twitter.com/_techhub">
                <IoLogoTwitter className="text-2xl text-gray-200 hover:text-brand-500" />
            </Link>
            <Link href="https://www.linkedin.com/company/techhub-community">
                <IoLogoLinkedin className="text-2xl text-gray-200 hover:text-brand-500" />
            </Link>
            <Link href="https://github.com/techhub-community/">
                <IoLogoGithub className="text-2xl text-gray-200 hover:text-brand-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
