import React from 'react';

export default function ServicesCard() {
  return (
    <div className="hover-card h-auto w-auto shadow-lg  p-6 rounded-xl">
      <img
        className="h-16 rounded-full mb-4"
        src="https://wexmire.com/assets/images/lightbulb (1).svg"
        alt=""
      />
      <h1 className="text-2xl py-3 font-bold tracking-wide">Service Title</h1>
      <p className="text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae
        quam debitis possimus, doloribus ipsum corporis, omnis qui porro velit
        exercitationem inventore, sapiente consequatur! Laborum sint illo fuga
        vel explicabo!
      </p>
      <div className="corner"></div>
    </div>
  );
}
