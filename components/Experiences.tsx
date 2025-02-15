import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import {
  GraduationCap,
  Goal,
  LaptopMinimalCheck,
  Briefcase,
  Building,
  Code,
} from 'lucide-react';
import ColourfulText from './ui/colourful-text';
export function Experiences() {
  const data = [
    {
      title: 'Early 2022',
      content: (
        <div>
          <div className="flex flex-row items-center gap-2  mb-2">
            <Goal className="w-5 h-5 text-green-500" />

            <p className="text-neutral-800 dark:text-neutral-300 text-sm md:text-sm font-normal">
              Deep Dive into My Software Engineering Journey
            </p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-500" />
            </div>
            <div className="flex items-center gap-2 h-full">
              <p className="text-neutral-800 dark:text-neutral-300 text-sm font-normal">
                Higher National Diploma in Computing - Software Engineering{' '}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      subTitle: 'Sep - Oct',
      content: (
        <div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <LaptopMinimalCheck className="w-4 h-4 text-white-400" />
            </div>
            <p className="text-neutral-800 dark:text-neutral-500 text-sm md:text-sm font-normal">
              <span className="text-white-400 font-bold text-xl">
                Backend Developer{' '}
              </span>{' '}
              at{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.ultimatelifestyle.app/"
                className="text-white-400 font-bold text-xl"
              >
                {' '}
                <ColourfulText
                  text=" Ultimate LifeStyle "
                  theme="rgb"
                  animate={true}
                />
              </a>
            </p>
          </div>

          <div className=" rounded-lg border shadow-sm p-4 my-4 space-y-4">
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              Developed a healthcare platform for diabetes patients to connect
              with doctors remotely. Built RESTful APIs with Express.js and
              TypeScript, using MongoDB for user data and Firebase for real-time
              health tracking. Implemented secure authentication, appointment
              scheduling, and automated notifications.
            </p>
            <div className="flex flex-wrap gap-2 border-t pt-4">
              {[
                'TypeScript',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Firebase',
                'REST API',
              ].map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10  border border-primary/10 text-primary text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2023 - 2024',
      subTitle: 'Dec - Jul',
      content: (
        <div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <LaptopMinimalCheck className="w-4 h-4 text-white-400" />
            </div>
            <p className="text-neutral-800 dark:text-neutral-500 text-sm md:text-sm font-normal">
              <span className="text-white-400 font-bold text-xl">
                Web Developer{' '}
              </span>{' '}
              at{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.vasthive.fo/"
                className="text-white-400 font-bold text-xl"
              >
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-900 font-bold text-xl">
                  Vasthive{' '}
                </span>
              </a>
            </p>
          </div>

          <div className=" rounded-lg border shadow-sm p-4 my-4 space-y-4">
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              Developed an event management application with a Flask backend and
              React frontend. Built RESTful APIs for event scheduling, user
              management, and real-time updates. Implemented MySQL database for
              efficient event tracking and user data management. Created a
              responsive frontend interface for seamless event creation and
              management.
            </p>
            <div className="flex flex-wrap gap-2 border-t pt-4">
              {[
                'Python',
                'Flask',
                'React',
                'MySQL',
                'REST API',
                'JavaScript',
              ].map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10  border border-primary/10 text-primary text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2024 - Present',
      content: (
        <div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <LaptopMinimalCheck className="w-4 h-4 text-white-400" />
            </div>
            <p className="text-neutral-800 dark:text-neutral-500 text-sm md:text-sm font-normal">
              <span className="text-white-400 font-bold text-xl">
                Mid Level Full Stack Developer{' '}
              </span>{' '}
              at{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://returning.ai/"
                className="text-white-400 font-bold text-xl"
              >
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#277BFF] to-[#8850FF] font-bold text-xl">
                  Returning AI{' '}
                </span>
              </a>
            </p>
          </div>

          <div className=" rounded-lg border shadow-sm p-4 my-4 space-y-4">
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              Architected and developed a real-time trading analysis platform
              with Discord-like communication features. Built scalable WebSocket
              infrastructure for instant market updates and user interactions.
              Implemented MERN stack (MongoDB, Express.js, React, Node.js) with
              Redis caching for optimal performance. Designed real-time chat
              systems, trading analytics, and collaborative workspaces for
              traders.
            </p>
            <div className="flex flex-wrap gap-2 border-t pt-4">
              {[
                'React',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Redis',
                'Socket.IO',
                'WebSocket',
                'TypeScript',
                'AWS',
              ].map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10  border border-primary/10 text-primary text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <Timeline data={data} />
    </div>
  );
}
