import React from 'react';
import EventCard from '@/components/EventCards/EventCard';
export default function PastEvents() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto py-12">
        <div className="flex flex-col items-center justify-center w-full mb-24">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Past Events
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-10/12">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <EventCard
                name="Java Workshop!"
                img="assets/posters/java.jpg"
                date="March 1st, 2021"
                about="Object Oriented Programming"
              />
              <EventCard
                name="Linux Workshop"
                img="assets/posters/ubuntu.png"
                date="Feb 21st, 2021"
                about="Intro to Linux-Ubuntu OS"
              />
              <EventCard
                name="Python"
                img="assets/posters/python.jpg"
                date="Feb 14th, 2021"
                about="Creating Projects Using Python"
              />
              <EventCard
                name="Natural Language Processing"
                img="assets/posters/NLP.jpeg"
                date="August 15th, 2021"
                about="Getting Started With NLP"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
