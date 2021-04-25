import React from 'react';

export default function SingleQuestion() {
  return (
    <>
      {/* Single Row Start */}
      <div className="flex flex-col gap-3 md:flex-row justify-start md:justify-between border-b-2 border-dashed pb-5 ">
        <div className="flex gap-3 text-left md:w-2/3">
          <img
            className="h-12 rounded-full"
            src="https://cdn.svgporn.com/logos/insomnia.svg"
            alt=""
          />
          <div>
            <p className="text-lg font-medium leading-none text-black-700">
              Question Title
            </p>
            <p className="line-clamp-3 md:line-clamp-1 text-sm text-gray-600 mt-2 ">
              Lorem ipsum do/lor sit amet consectetur, adipisicing elit. Totam
              aperiam esse dignissimos voluptatibus fugiat enim! Eos optio rerum
              nostrum quo, molestiae sed repellendus iusto est? Dolore similique
              eveniet nihil. Delectus!
            </p>
          </div>
        </div>
        <div className="text-left">
          <p className="text-lg">16/04/2021</p>
        </div>
        <div>
          <p className="btn btn-grad text-white w-max">Solve Now</p>
        </div>
      </div>
      {/* Single Row Ends */}
    </>
  );
}
