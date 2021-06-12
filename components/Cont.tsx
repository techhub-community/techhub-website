import React from 'react';

export default function Cont(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <a href={'https://github.com/' + props.name}>
          <img
            className="rounded-full h-36 w-36"
            src={props.img}
            alt="team 1"
          />
        </a>
        <h2 className="text-xl font-medium mt-6">{props.name}</h2>
        <h3 className="text-md">{'Contributions: ' + props.count}</h3>
      </div>
    </>
  );
}


