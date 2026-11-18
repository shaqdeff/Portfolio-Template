import {
  frontend,
  backend,
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
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Base',
  },
  {
    id: 'projects',
    title: 'Creations',
  },
  {
    id: 'contact',
    title: 'Interact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Project Manager',
    icon: backend,
  },
  
  {
    title: 'Agile/SCRUM',
    icon: prototyping,
  },

  {
    title: 'SAP Consultant',
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
    name: 'React JS',
    icon: reactjs,
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
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
 
];

const experiences = [
       {
    title: 'SAP Junior FICA Consultant',
    company_name: 'South African Revenue Services',
    iconBg: '#333333',
    icon: coverhunt,
    date: 'July 2025 - Present',
  },
      {
    title: 'SAP Junior ABAP Platform Developer',
    company_name: 'South African Revenue Services',
    iconBg: '#333333',
    icon: coverhunt,
    date: 'October 2024 - July 2025',
  },
  
    {
    title: 'Cloud Platforms Apprentice / Business Development Enthusiast / Google Education Project Lead',
    company_name: 'Liquid Telecommunications',
    iconBg: '#333333',
    icon: coverhunt,
    date: 'May 2024 - September 2024',
  },
  {
    title: 'Junior Software Developer',
    company_name: 'Younglings Africa',
    iconBg: '#333333',
    icon: coverhunt,
    date: 'January 2024 - January 2025',
  },
  {
    title: 'Software Development Intern',
    company_name: 'UVU Africa as CapaCiTi',
    iconBg: '#333333',
    icon: coverhunt,
    date: 'July 2023 - January 2024',
  },
  {
    title: 'eLearning and ICT Intern',
    company_name: 'Dept of Education North West',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'March 2022 - March 2023',
  },
  {
    title: 'Site and Interim Project Manager',
    company_name: 'Ke A Dira Projects Plant Hire Pty Ltd',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'July 2016 - August 2018',
  },
  {
    title: 'Casual',
    company_name: 'Food Lovers Market',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'December 2014',

  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Unit Converter',
    description: 'Basic Unit metric converter, coded in Java.',
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
    repo: 'https://github.com/TshepoShale/Unit-Converter-in-Java.git',
  },
  {
    id: 'project-2',
    name: 'edtech Website',
    description:
      'A state-of-the-art website based and focused on EdTech.',
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
    repo: 'https://github.com/TshepoShale/GroupWebsite.git',
    demo: 'https://group-website-sqq9-pvam45sss-tsheposhales-projects.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React.',
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
    name: 'Skillset Exhibit',
    description: `A showcase of my skills, by means of a professional portfolio. This is me, in a nutshell. Feast your eyes!`,
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
    repo: 'https://github.com/TshepoShale/Portfolio.git',
    demo: 'https://stalwart-heliotrope-9d0745.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Banking App',
    description:
      'This is a simple banking app, coded in Python, with a simple Graphical User Interface.',
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
    image: nyeusi,
    repo: 'https://github.com/TshepoShale/pythonProject1.git',
  },
];

export { services, technologies, experiences, projects };
