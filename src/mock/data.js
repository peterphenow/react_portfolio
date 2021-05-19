import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Peter Phenow ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Peter Phenow',
  subtitle: "I'm a Full-Stack Web Developer.",
  cta: 'Know more', // button wording
};

// ABOUT DATA
export const aboutData = {
  img: 'tinyprofilecropped.jpg',
  paragraphOne: `I am a driven Full Stack Web Developer with a background in accounting and finance 
    and a Full-Stack Certificate from the University of Minnesota.`,
  paragraphTwo: `During the boot camp, I worked on multiple group projects, honing skills in Node.js, 
    React, Express, and MongoDB. I recently collaborated with a team of 5 to build an application 
    from start to finish and demo it to a group of industry professionals with positive reviews.`,
  paragraphThree: `I enjoy collaborating and working on a diverse team while solving problems. Looking
    to bring my knowledge and technical skills to an organization while focusing on continuous learning.`,
  resume: 'Peter - WebDev Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projectPics/covid-tracker.png',
    title: 'COVID Tracker',
    info: 'I collaborated on this project with 4 other developers. We wanted to make an app with reliable COVID-19 information where users could visit and see all kinds of different data. Users can sign up and log in to get access to even more data.',
    info2: 'This app was built with the MERN stack.',
    url: 'https://covid-19-tracker-pcp.herokuapp.com/',
    repo: 'https://github.com/peterphenow/Covid_19_Tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
