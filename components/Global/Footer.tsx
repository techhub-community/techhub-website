import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-50 text-black-700 pt-8 pb-4 flex flex-col md:flex-row items-center justify-around">
      <div className="hidden md:block w-36">
        <Link href="https://vercel.com?utm_source=techhub-community&utm_campaign=oss">
          <a target="_blank" rel="noopener noreferrer">
            <img loading="lazy" src="/assets/svg/vercel-logo.svg" />
          </a>
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
            <a>
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Home
              </li>
            </a>
          </Link>
          <Link href="/events">
            <a>
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Events
              </li>
            </a>
          </Link>
          <Link href="/blogs">
            <a>
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Blogs
              </li>
            </a>
          </Link>
          <Link href="/contributors">
            <a>
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Contributors
              </li>
            </a>
          </Link>
          <Link href="https://kutt.it/techhub-invite">
            <a>
              {' '}
              <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
                Discord
              </li>
            </a>
          </Link>
        </ul>
      </div>

      <div className="hidden md:block w-24">
        <img loading="lazy" src="/assets/logo/logo-full-transparent.png" />
      </div>
      <div className="block md:hidden w-36">
        <Link href="https://vercel.com?utm_source=techhub-community&utm_campaign=oss">
          <a target="_blank" rel="noopener noreferrer">
            <img loading="lazy" src="/assets/svg/vercel-logo.svg" />
          </a>
        </Link>
      </div>
    </div>
  );
}
