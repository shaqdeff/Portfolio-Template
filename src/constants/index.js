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
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
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
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: 'Front-End Developer',
  //   company_name: 'Cover Hunt',
  //   icon: coverhunt,
  //   iconBg: '#333333',
  //   date: 'Aug 2021 - Feb 2022',
  // },
  {
    title: 'IT Intern',
    company_name: 'Lakehub',
    icon: microverse,
    iconBg: '#333333',
    date: 'August 2021 - Feb 2023',
  },
  {
    title: 'Wordpress developer',
    company_name: 'KaaKazini',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Aug 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Ziqweb',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'General events',
    description: 'A platform that highlights events of a crtain company',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Charity-Nelima/events-general',
    demo: 'https://general-events.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Get recruited',
    description:
      'A recruitment app that helps recruiters find github profiles for job seekers.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/Charity-Nelima/phase-2-independent-project?tab=readme-ov-file',
    demo: 'https://phase-2-independent-project-1n464cdd4-charity-nelima.vercel.app/home/',
  },
  {
    id: 'project-3',
    name: 'Comrade restaurant',
    description: 'This is a single-page restaurant app built from react',
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
    repo: 'https://github.com/Charity-Nelima/comrades_restaurant-1',
    demo: 'https://comrades-restaurant.vercel.app/',
  },

];

export { services, technologies, experiences, projects };
