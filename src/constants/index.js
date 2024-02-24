import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  cloud,
  apple,
  IT,
  python,
  java,
  swift,
  c,
  mongo,
  express,
  aws,
  cybertrip,
  alien,
  wiki,
  
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Fullstack Web Development',
    icon: frontend,
  },
  {
    title: 'Cloud Computing',
    icon: cloud
  },
  {
    title: 'iOS Mobile Development',
    icon: apple,
  },
  {
    title: 'IT Support',
    icon: IT,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Mongo DB',
    icon: mongo,
  },
  {
    name: 'express',
    icon: express,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Python 3',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Swfit',
    icon: swift,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'aws',
    icon: aws,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'CyberTRIP',
    description: 'A web-based tool designed to simplify cybersecurity incident tracking, management, and prioritization in real time.',
    tags: [
      {
        name: 'Flask',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Agile',
        color: 'pink-text-gradient',
      },
    ],
    image: cybertrip,
    repo: 'https://github.com/cwharris77/cyberTRIP',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Alien Invasion',
    description:
      'A version of the classic Alien Invasion game created using pygame.',
    tags: [
      {
        name: 'pygame',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      // {
      //   name: 'scss',
      //   color: 'pink-text-gradient',
      // },
    ],
    image: alien,
    repo: 'https://github.com/cwharris77/Alien-Invasion',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Wiki Racer',
    description:
      'An implementation of the Wiki Ladder game where the challenge is to navigate from a designated start Wikipedia page to a predetermined end page using only hyperlinks within the articles in the quickest time.',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'Memoization',
        color: 'green-text-gradient',
      },
      {
        name: 'Mulit-threading',
        color: 'pink-text-gradient',
      },
    ],
    image: wiki,
    repo: 'https://github.com/cwharris77/CSC-210/tree/main/PA10-WikiRacer',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
