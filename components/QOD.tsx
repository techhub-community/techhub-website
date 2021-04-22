import React from 'react';

export default function QOD() {
  return (
    <>
      <div className="relative px-4 md:px-12 lg:px-24 pt-36 pb-12">
        <div className="w-full xl:px-0 px-4 lg:flex-row flex flex-col items-center justify-between mx-auto container relative z-20">
          <div className="lg:w-2/2 lg:pr-32 xl:pr-56">
            <h1 className="text-3xl lg:text-5xl text-black-700 font-bold">
              Question Of The Day
            </h1>
            <p className="my-3">[22/04/2021]</p>
            <p className="lg:text-base text-sm leading-loose mt-3 mb-8">
              Solve these qusetions and share your answer in our discord. We
              discuss these questions daily after 09:00 PM IST.{' '}
            </p>
          </div>
          <div className="w-full lg:w-2/2 relative">
            <div className="slider">
              <div className="slide-ana">
                <div
                  className="w-full"
                  style={{
                    transform: 'translateX(0%)',
                  }}
                >
                  {/* Card 1 */}
                  <div className="w-full lg:flex relative">
                    <div className="lg:w-1/2 relative bg-white rounded-md p-6 mr-6 lg:mb-0 mb-8 shadow-lg lg:mt-0 mt-8">
                      <div className="absolute right-0 top-0 -mt-5 mr-4">
                        <img className="h-12" src="assets/svg/question.svg" />
                      </div>
                      <div className="flex items-center">
                        <img
                          className="h-12"
                          src="https://cdn.svgporn.com/logos/insomnia.svg"
                        />
                        <h2 className="text-base f-m-m ml-4 font-semibold">
                          TechHub - Basic
                        </h2>
                      </div>
                      <p className="text-base f-m-m mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore tempora earum voluptates, non pariatur,
                        voluptatem ducimus est reiciendis consequuntur enim
                        explicabo amet omnis vero. Reprehenderit atque doloribus
                        quo ea consequuntur!
                      </p>
                      <div className="my-3 uppercase tracking-widest ">
                        <button className="border-2 rounded border-dashed border-black-200 hover:border-brand-500 px-2 max-w-max">
                          Solve Me Now
                        </button>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="lg:w-1/2 relative bg-brand-700 rounded-md p-6 mr-6 shadow-lg">
                      <div className="absolute right-0 top-0 -mt-5 mr-4">
                        <img className="h-12" src="assets/svg/question.svg" />
                      </div>
                      <div className="flex items-center">
                        <img
                          className="h-12"
                          src="https://cdn.svgporn.com/logos/dialogflow.svg"
                        />
                        <h2 className="text-base ml-4 font-semibold text-white">
                          TechHub - Alpha
                        </h2>
                      </div>
                      <p className="text-base mt-3 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore tempora earum voluptates, non pariatur,
                        voluptatem ducimus est reiciendis consequuntur enim
                        explicabo amet omnis vero. Reprehenderit atque doloribus
                        quo ea consequuntur!
                      </p>
                      <div className="my-3 uppercase tracking-widest text-white">
                        <button className="border-2 rounded border-dashed border-black-100 hover:border-brand-500 px-2 max-w-max">
                          Solve Me Now
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                    <div className="absolute right-0 top-0 -mt-5 mr-4">
                      <img className="h-12" src="assets/svg/question.svg" />
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-12"
                        src="https://cdn.svgporn.com/logos/codesandbox.svg"
                      />
                      <h2 className="text-base ml-4 font-semibold">
                        TechHub - Beta
                      </h2>
                    </div>
                    <p className="text-base mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore rem itaque accusamus quos hic fuga veritatis
                      doloremque, quisquam facilis blanditiis! Officia nam
                      perferendis placeat error exercitationem dolor neque
                      commodi beatae!
                    </p>
                    <div className="my-3 uppercase tracking-widest ">
                      <button className="border-2 rounded border-dashed border-black-200 hover:border-brand-500 px-2 max-w-max">
                        Solve Me Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
