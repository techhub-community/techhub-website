import React from 'react';
import LLTCard from './LLTCard';

export default function LLT() {
  return (
    <section className="px-6 xl:px-0">
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center justify-center w-full  mb-12">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Let's Learn Together
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-12 gap-8 place-items-center place-content-center">
          <LLTCard title="Software Development" img="assets/svg/software.svg" />
          <LLTCard
            title="Competitive Coding"
            img="assets/svg/competitive.svg"
          />
          <LLTCard title="Data Science" img="assets/svg/datascience.svg" />
          <LLTCard title="Web Development" img="assets/svg/webdev.svg" />
          <LLTCard title="Automation" img="assets/svg/automation.svg" />
          <LLTCard title="Daily Discussions" img="assets/svg/daily.svg" />
          <LLTCard title="Mobile Development" img="assets/svg/mobiledev.svg" />
          <LLTCard title="Doubt Clearance" img="assets/svg/doubt.svg" />
        </div>
      </div>
    </section>
  );
}
