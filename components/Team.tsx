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
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-10/12">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <TeamMate
                name="Aditya Keshri"
                img="assets/avatars/avatar.svg"
                designation="Engineer | Problem Solver | Data geek"
                github="https://github.com/adikeshri"
                web="https://adikeshri.ml"
                lin="https://linkedin.com/in/adikeshri"
                twitter="https://twitter.com/adi_keshri"
              />
              <TeamMate
                name="Avinash"
                img="assets/avatars/avatar-6.svg"
                designation="Data Science | Machine Learning "
                lin="linkedin.com/in/iavinas only add my linkedin"
              />
              <TeamMate
                name="Shekhar"
                img="assets/avatars/avatar-2.svg"
                designation="Speaker | Full Stack Developer"
                github="github-link"
                web="web-link"
              />
              <TeamMate
                name="Deep Narayan Tandan"
                img="assets/avatars/avatar-3.svg"
                designation="Freelancer | Full Stack Developer"
                web="https://dntandan.ml"
                lin="https://linkedin.com/in/dntandan"
                twitter="https://twitter.com/dntandan"
                github="https://github.com/dntandan"
              />

              <TeamMate
                name="Siddhant Ranjan"
                img="assets/avatars/avatar-4.svg"
                designation="Kaggle Exper | Data Science"
                github="https://github.com/sid26ranjan"
              />
              <TeamMate
                name="Abhi Chaurasia"
                img="assets/avatars/avatar.svg"
                designation="Pythonista | Full Stack Developer | Audiophile"
                github="https://github.com/abhi204"
              />
              <TeamMate
                name="Avikant"
                img="assets/avatars/avatar-3.svg"
                designation="Data Science | Full Stack Developer"
                github="https://github.com/AvikantSrivastava"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
