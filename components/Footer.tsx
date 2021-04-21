import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-50 text-black-700 pt-8 pb-4 flex flex-col items-center justify-center">
      <div className="w-44">
        <img loading="lazy" src="/assets/logo/logo-full-transparent.png" />
      </div>
      <div className="my-4">
        <ul className="flex uppercase tracking-widest">
          <Link href="/">
            <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
              Contact
            </li>
          </Link>
          <Link href="https://kutt.it/techhub-invite">
            <li className="lg:text-lg text-sm leading-5 lg:mr-10 mr-2 flex flex-col items-end justify-end font-normal cursor-pointer hover:text-brand-600">
              Discord
            </li>
          </Link>
        </ul>
      </div>
      <div className="py-3 flex lg:items-start items-center">
        <p className="lg:text-base text-xs leading-5">
          2021 TechHub, All rights reserved
        </p>
      </div>
    </div>
  );
}
