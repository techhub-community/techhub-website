import React from 'react';
import ServicesCard from './Services/ServicesCard';

export default function Services() {
  return (
    <section className="px-6 xl:px-0">
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center justify-center w-full  mb-12">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Our Services
          </h1>
          <hr className="w-32 h-1 bg-brand-700 rounded-full" />
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 md:px-12 gap-6 place-items-center place-content-center">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </section>
  );
}
