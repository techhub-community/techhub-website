import React from 'react';
import TeamMate from '@/components/Team/TeamMate';
export default function Team() {
  const TeamMembers = [
    {
      name: 'Aditya Keshri',
      img: 'assets/avatars/avatar.svg',
      designation: 'Engineer | Problem Solver | Data Geek',
      github: 'https://github.com/adikeshri',
      web: 'https://adikeshri.ml',
      lin: 'https://linkedin.com/in/adikeshri',
      twitter: 'https://twitter.com/adi_keshri',
    },
    {
      name: 'Avinash Kumar',
      img: 'assets/avatars/avatar-6.svg',
      designation: 'Data Scientist',
      lin: 'https://linkedin.com/in/iavinas',
    },
    {
      name: 'Shekhar',
      img: 'assets/avatars/avatar-2.svg',
      designation: 'Speaker | Full Stack Developer',
      github: 'https://github.com/sekharjha',
    },
    {
      name: 'Deep Narayan Tandan',
      img: 'assets/avatars/avatar-3.svg',
      designation: 'Freelancer | Full Stack Developer',
      web: 'https://dntandan.ml',
      twitter: 'https://twitter.com/dntandan',
      github: 'https://github.com/dntandan',
    },
    {
      name: 'Siddhant Ranjan',
      img: 'assets/avatars/avatar-4.svg',
      designation: 'Kaggle Expert | Data Science',
      github: 'https://github.com/sid26ranjan',
    },
    {
      name: 'Abhi Chaurasia',
      img: 'assets/avatars/avatar-5.svg',
      designation: 'Pythonista | Full Stack Developer | Audiophile',
      github: 'https://github.com/abhi204',
    },
    {
      name: 'Avikant',
      img: 'assets/avatars/avatar-7.svg',
      designation: 'Data Science | Full Stack Developer',
      github: 'https://github.com/AvikantSrivastava',
    },
    {
      name: 'Arvind',
      img: 'assets/avatars/avatar-10.svg',
      designation: 'Python | UX, UI | Learning in public',
      github: 'https://github.com/Arvind644',
      twitter: 'https://twitter.com/Arvind_0602',
    },
    {
      name: 'Anjali Prasad',
      img: 'assets/avatars/avatar-9.svg',
      designation: 'Front End Developer',
      github: 'https://github.com/anjali112-bit',
    },
    {
      name: 'Ashish Gopalika',
      img: 'assets/avatars/avatar-11.svg',
      designation: 'CP | Problem Solver',
      github: 'https://github.com/ashish-gopalika',
    },
    {
      name: 'Kushagra Aggarwal',
      img: 'assets/avatars/avatar-12.svg',
      designation:
        'No one stays forever but you Your goals will happen, so focus',
      github: 'https://github.com/codewithkushagra',
      twitter: 'https://twitter.com/kushagra_agra08',
    },
    {
      name: 'Ritik Anubhav',
      img: 'assets/avatars/avatar-13.svg',
      designation:
        'Love Problem solving | Competitive programming | C language',
      github: 'https://github.com/ritikanubhav',
      lin: 'https://www.linkedin.com/in/ritik-anubhav-253ab3211/',
    },
    {
      name: 'Harshit Gulgulia',
      img: 'assets/avatars/avatar-14.svg',
      designation: 'Love Problem solving',
      github: 'https://github.com/HarshitGulgulia',
      twitter: 'https://twitter.com/HarshitGulgulia',
    },
  ];

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
              {TeamMembers.map((member, index) => (
                <TeamMate
                  name={member.name}
                  img={member.img}
                  designation={member.designation}
                  github={member.github}
                  web={member.web}
                  lin={member.lin}
                  twitter={member.twitter}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
