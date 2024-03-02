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
  sudoku,
  uofa,
  stl,
  remotetasks,
  linkedin,
  
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
    title: 'Computer Science Student',
    company_name: 'University of Arizona',
    icon: uofa,
    iconBg: '#001a5d',
    date: 'Aug 2000 - May 2024',
  },
  {
    title: 'Student Technology Assistant',
    company_name: `Housing & Residential Life ${'@'} University of Arizona`,
    icon: uofa,
    iconBg: '#e2002d',
    date: 'Jun 2022 - Present',
  },
  {
    title: 'AI Reviewer',
    company_name: 'Remotetasks',
    icon: remotetasks,
    iconBg: '#35ce9d',
    date: 'Dec 2023 - Current',
  },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'CyberTRIP',
    description: 'A web-based tool designed to simplify cybersecurity incident tracking, management, and prioritization in real time.',
    tags: [
      {
        name: 'Flask',
        color: 'white',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'Web Development',
        color: 'pink-text-gradient',
      },
    ],
    info: "",
    image: cybertrip,
    repo: 'https://github.com/cwharris77/cyberTRIP',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'STL File Creator',
    description: `A C program for creating and manipulating 3D scenes and exporting them to STL files in ASCII or binary format.`,
    tags: [
      {
        name: 'C',
        color: 'blue-text-gradient',
      },
      {
        name: 'Data Structures',
        color: 'green-text-gradient',
      },
      {
        name: 'STL',
        color: 'pink-text-gradient',
      },
    ],
    info: "This project was accomplished as part of an Agile team",
    image: stl,
    repo: 'https://github.com/cwharris77/CSC-352/tree/main/pa9',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Alien Invasion',
    description:
      'A version of the classic Alien Invasion game created using pygame.',
    tags: [
      {
        name: 'Python3',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pygame',
        color: 'green-text-gradient',
      },
      {
        name: 'SDLC',
        color: 'pink-text-gradient',
      },
    ],
    info: "",
    image: alien,
    repo: 'https://github.com/cwharris77/Alien-Invasion',
    demo: 'https://cwharris77.github.io/Alien-Invasion/',
  },
  {
    id: 'project-4',
    name: 'Sudoku',
    description: 'A sudoku game built as part of an Agile team using JavaFX',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaFX',
        color: 'green-text-gradient',
      },
      {
        name: 'MVC',
        color: 'pink-text-gradient',
      },
    ],
    info: "",
    image: sudoku,
    repo: 'https://github.com/cwharris77/CSC-335/tree/main/team-project-segfault',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
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
        name: 'Multi-Threading',
        color: 'pink-text-gradient',
      },
    ],
    info: "",
    image: wiki,
    repo: 'https://github.com/cwharris77/CSC-210/tree/main/PA10-WikiRacer',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
