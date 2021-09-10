import React from 'react';

export default function EventCard(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center border-2 bg-white">
        <img
          className="h-80 w-80"
          src={props.img}
          alt="team 1"
        />
        <h2 className="text-2xl font-medium mt-8 mb-3 font-bold text-xl">{props.name}</h2>
        <h3 className="text-lg ">{props.date}</h3>
        <h2 className="text-xl font-medium mt-2 mb-3">{props.about}</h2>        
      </div>
    </>
  );
}
