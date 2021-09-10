import React from 'react';
import EventCard from '@/components/Events/EventCard';
import { UpcomingEventsList } from '@/components/Events/EventsList';

export default function UpcomingEvents() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto py-12">
        <div className="flex flex-col items-center justify-center w-full mb-24">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Upcoming Events
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-10/12">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {UpcomingEventsList.map((event) => (
                <EventCard
                  name={event.name}
                  img={event.img}
                  date={event.date}
                  about={event.about}
                  desc={event.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
