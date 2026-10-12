import {
    backend,
    ux,
    prototyping,
    golang,
    typescript,
    python,
    aws,
    gcp,
    c,
    nodejs,
    git,
    docker,
    postgresql,
    graphql,
    brain,
    ecobee,
    crisp,
    fpga,
    elevator,
    java,
    eqmx,
    hubspot
} from '../assets';

export const navLinks = [{
        id: 'about',
        title: 'About',
    },
    {
        id: 'experience',
        title: 'Experience'
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [{
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'Embedded developer',
        icon: ux,
    },
    {
        title: 'Software Prototyping',
        icon: prototyping,
    },
];

const technologies = [{
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'Node JS',
        icon: nodejs,
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
        name: 'docker',
        icon: docker,
    },
    {
        name: 'python',
        icon: python
    },
    {
        name: 'golang',
        icon: golang
    },
    {
        name: 'c++',
        icon: c
    },
    {
        name: 'aws',
        icon: aws
    },
    {
        name: 'gcp',
        icon: gcp
    },
    {
        name: 'eqmx',
        icon: eqmx
    },
    {
        name: 'java',
        icon: java
    },
];

const experiences = [
    {
        title: 'Senior Software Engineer',
        company_name: 'HubSpot',
        icon: hubspot,
        iconBg: '#333333',
        date: 'August 2026 - Present',
    },
    {
        title: 'Software Engineer',
        company_name: 'HubSpot',
        icon: hubspot,
        iconBg: '#333333',
        date: 'September 2025 - July 2026',
    },
    {
        title: 'Software Engineer',
        company_name: 'ecobee',
        icon: ecobee,
        iconBg: '#333333',
        date: 'October 2024 - June 2025',
    },
    {
        title: 'Software Engineering Intern',
        company_name: 'ecobee',
        icon: ecobee,
        iconBg: '#333333',
        date: 'September 2023 - August 2024',
    },
    {
        title: 'Junior Software Support Analyst',
        company_name: 'crisp',
        icon: crisp,
        iconBg: '#333333',
        date: 'Aug 2021 - June 2023',
    },
];

const projects = [{
        id: 'project-1',
        name: 'Acrylic elevator',
        description: 'A prototype elevator designed and built from scratch. I was responsible for programming the microcontroller using embedded C',
        tags: [{
                name: 'embedded C',
                color: 'blue-text-gradient',
            },
            {
                name: 'MPLABX',
                color: 'green-text-gradient',
            },
            {
                name: 'AutoCAD',
                color: 'pink-text-gradient',
            },
        ],
        image: elevator,
        repo: '',
        demo: '',
    },
    {
        id: 'project-2',
        name: 'Four mode timer',
        description: 'A timer with four different operational modes developed using FPGA',
        tags: [{
                name: 'Quartus',
                color: 'blue-text-gradient',
            },
            {
                name: 'FPGA',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: fpga,
        repo: null,
        demo: null,
    },
    {
        id: 'project-3',
        name: 'Telerehabilitation interface',
        description: 'Currently working on a telerehabilitation interface used to conduct remote rehabilitation for patients with Parkinson\'s disease and recovering from stroke.',
        tags: [{
                name: 'EQMX',
                color: 'blue-text-gradient',
            },
            {
                name: 'Python',
                color: 'green-text-gradient',
            },
            {
                name: 'React',
                color: 'pink-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: brain,
        repo: '',
        demo: '',
    },
];

export { services, technologies, experiences, projects };