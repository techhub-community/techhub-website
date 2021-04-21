import React from 'react';

export default function QOD() {
  return (
    <>
      <div className="relative px-4 md:px-12 lg:px-24 pt-36 pb-12">
        <div className="w-full xl:px-0 px-4 lg:flex-row flex flex-col-reverse items-center justify-between mx-auto container relative z-20">
          <div className="w-full lg:w-1/2 relative">
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
                      <div className="absolute right-0 top-0 -mt-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={50}
                          height={50}
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            fill="#DA4670"
                            d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <img className="h-12" src="assets/svg/question.svg" />
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
                    </div>
                    {/* Card 2 */}
                    <div className="lg:w-1/2 relative bg-brand-700 rounded-md p-6 mr-6 shadow-lg">
                      <div className="absolute right-0 top-0 -mt-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={50}
                          height={50}
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            fill="#001009"
                            d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center">
                        <img className="h-12" src="assets/svg/question.svg" />
                        <h2 className="text-base ml-4 font-semibold text-white">
                          TechHub - Alpha
                        </h2>
                      </div>
                      <p className="text-base mt-3 text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta, sunt quam accusantium unde corrupti
                        possimus repellendus. Illo omnis commodi, porro delectus
                        itaque recusandae ipsum cupiditate! Fuga, modi quam!
                        Qui, et.{' '}
                      </p>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="lg:w-1/2 relative mt-8 lg:ml-32 bg-white rounded-md shadow-lg p-6 mr-6">
                    <div className="absolute right-0 top-0 -mt-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={50}
                        height={50}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="#DA4670"
                          d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <img className="h-12" src="assets/svg/question.svg" />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-32 xl:pl-56">
            <h1 className="text-3xl lg:text-5xl text-black-700 font-bold">
              Question Of The Day
            </h1>
            <p className="lg:text-base text-sm leading-loose mt-3 mb-8">
              Solve these qusetions and share your answer in our discord. We
              discuss these questions daily after 09:00 PM IST.{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
