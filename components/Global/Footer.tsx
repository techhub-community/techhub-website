import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-50 text-black-700 pt-8 pb-4 flex flex-col md:flex-row items-center justify-around">
      <div className="hidden md:block w-36">
        <Link href="https://vercel.com?utm_source=techhub-community&utm_campaign=oss" target="_blank" rel="noopener noreferrer">
            <img loading="lazy" src="/assets/svg/vercel-logo.svg" />
        </Link>
      </div>
      <div className="block md:hidden w-24">
        <img loading="lazy" src="/assets/logo/logo-full-transparent.png" />
      </div>
      <div className="py-3 flex lg:items-start items-center">
        <p className="lg:text-base text-xs leading-5">
          2021 TechHub, All rights reserved
        </p>
      </div>
      <div className="my-4">
        <ul className="flex uppercase tracking-widest">
          <Link href="/">
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Home
              </li>
          </Link>
          <Link href="/events">
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Events
              </li>
          </Link>
          <Link href="/blogs">
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Blogs
              </li>
          </Link>
          <Link href="/contributors">
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Contributors
              </li>
          </Link>
          <Link href="https://kutt.it/techhub-invite">
              {' '}
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Discord
              </li>
          </Link>
        </ul>
      </div>

      <div className="hidden md:block w-24">
        <img loading="lazy" src="/assets/logo/logo-full-transparent.png" />
      </div>
      <div className="block md:hidden w-36">
        <Link href="https://vercel.com?utm_source=techhub-community&utm_campaign=oss" target="_blank" rel="noopener noreferrer">
            <img loading="lazy" src="/assets/svg/vercel-logo.svg" />
        </Link>
      </div>
    </div>
  );
}
