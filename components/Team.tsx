import React from 'react';
import TeamMate from '@/components/Team/TeamMate';

export default function Team() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto py-12">
        <div className="flex flex-col items-center justify-center w-full mb-24">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Meet The Team
          </h1>
          <hr className="w-36 h-1 bg-brand-700 rounded-full" />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-10/12">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <TeamMate
                name="Aditya"
                img="https://picsum.photos/350"
                designation="Full Stack Developer"
                github="github-link"
                web="web-link"
              />
              <TeamMate
                name="Avinash"
                img="https://picsum.photos/250"
                designation="Full Stack Developer"
                fb="https://facebook.com/dntandan"
                insta="https://instagram.com/deepnarayantandan"
                web="web-link"
              />
              <TeamMate
                name="Shekhar"
                img="https://picsum.photos/300"
                designation="Full Stack Developer"
                github="github-link"
                web="web-link"
              />
              <TeamMate
                name="Deep Narayan Tandan"
                img="https://picsum.photos/200"
                designation="Full Stack Developer"
                web="https://dntandan.ml"
                lin="https://linkedin.com/in/dntandan"
                twitter="https://twitter.com/dntandan"
                github="https://github.com/dntandan"
              />
              <TeamMate
                name="Avikant"
                img="https://picsum.photos/250"
                designation="Full Stack Developer"
                lin="github-link"
                web="web-link"
                fb="web-link"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
