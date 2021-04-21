import React from 'react';
import TeamMate from '@/components/Team/TeamMate';

export default function Team() {
  return (
    <div>
      <section className="px-6 xl:px-0">
        <div className="mx-auto container mb-36 lg:mt-24">
          <div className="flex flex-col items-center justify-center w-full mb-24">
            <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
              Meet The Team
            </h1>
            <hr className="w-36 h-1 bg-brand-700 rounded-full" />
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="w-10/12">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <TeamMate />
                <TeamMate />
                <TeamMate />
                <TeamMate />
                <TeamMate />
                <TeamMate />
                <TeamMate />
                <TeamMate />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
