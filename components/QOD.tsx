import Link from 'next/link';
import React from 'react';

export default function QOD() {
  return (
    <>
      <div className="relative px-4 md:px-12 lg:px-24 pt-36 pb-24">
        <div className="flex flex-col items-center justify-center w-full  mb-12">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Question Of The Day
          </h1>
          <hr className="w-32 h-1 bg-brand-700 rounded-full" />
          <p className="px-5 my-8 text-xl">
            Solve these qusetions and share your answer in our discord. We
            discuss these questions daily after 09:00 PM IST.
          </p>
        </div>
        <div className="sm:mx-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* Card Start */}
          <div className="h-auto w-full">
            <div className="bg-white rounded-md shadow-lg p-8">
              <div className="flex items-center">
                <img className="h-12" src="assets/svg/basic.svg" />
                <h2 className="text-base f-m-m ml-4 font-semibold">
                  TechHub - Basic
                </h2>
              </div>
              <p className="text-base f-m-m mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                tempora earum voluptates, non pariatur, voluptatem ducimus est
                reiciendis consequuntur enim explicabo amet omnis vero.
                Reprehenderit atque doloribus quo ea consequuntur!
              </p>
              <div className="flex flex-row justify-between mt-8 mx-3 gap-3  uppercase tracking-widest ">
                <button className="w-max btn btn-border-grad text-brand-700">
                  Solve
                </button>
                <Link href="/questions#basic-questions">
                  <button className="w-max btn btn-border-grad text-brand-700">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card Start */}
          <div className="h-auto w-full">
            <div className="bg-white rounded-md shadow-lg p-8">
              <div className="flex items-center">
                <img className="h-12" src="assets/svg/alpha.svg" />
                <h2 className="text-base f-m-m ml-4 font-semibold">
                  TechHub - Alpha
                </h2>
              </div>
              <p className="text-base f-m-m mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                tempora earum voluptates, non pariatur, voluptatem ducimus est
                reiciendis consequuntur enim explicabo amet omnis vero.
                Reprehenderit atque doloribus quo ea consequuntur!
              </p>
              <div className="flex flex-row justify-between mt-8 mx-3 gap-3  uppercase tracking-widest ">
                <button className="w-max btn btn-border-grad text-brand-700">
                  Solve
                </button>
                <Link href="/questions#alpha-questions">
                  <button className="w-max btn btn-border-grad text-brand-700">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card Start */}
          <div className="h-auto w-full">
            <div className="bg-white rounded-md shadow-lg p-8">
              <div className="flex items-center">
                <img className="h-12" src="assets/svg/beta.svg" />
                <h2 className="text-base f-m-m ml-4 font-semibold">
                  TechHub - Beta
                </h2>
              </div>
              <p className="text-base f-m-m mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                tempora earum voluptates, non pariatur, voluptatem ducimus est
                reiciendis consequuntur enim explicabo amet omnis vero.
                Reprehenderit atque doloribus quo ea consequuntur!
              </p>
              <div className="flex flex-row justify-between mt-8 mx-3 gap-3  uppercase tracking-widest ">
                <button className="w-max btn btn-border-grad text-brand-700">
                  Solve
                </button>
                <Link href="questions/#beta-questions">
                  <button className="w-max btn btn-border-grad text-brand-700">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card End */}
        </div>
      </div>
    </>
  );
}
