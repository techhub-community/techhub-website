import React from 'react';
import EventCard from '@/components/EventCards/EventCard';
export default function CurrentEvents() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto py-12">
        <div className="flex flex-col items-center justify-center w-full mb-24">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Current Events
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-10/12">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <EventCard
                name="Competitive Coding"
                img="assets/posters/cp.jpg"
                date="Daily"
                about="Doubt discussions"
              />
              <EventCard
                name="Hackathon"
                img="assets/posters/hackathon.jpg"
                date="----"
                about="exciting hackathons"
              />
              <EventCard
                name="Web-Dev"
                img="assets/posters/webd.png"
                date="-----"
                about="Basics of HTML,CSS and JS"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}