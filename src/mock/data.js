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
    img: 'projectPics/hiddenGems.png',
    title: 'Hidden Gems',
    info: 'This is another project where I collaborated with 4 other developers.  We wanted to create a fully-functional application using all the skills we had learned up to this point.',
    info2:
      "Our project, Hidden Gems, is a Google Maps API-powered application, utilizing a MYSQL database in conjunction with Sequelize, that lets the user store locations on a map of places they loved visiting before the pandemic lockdowns, as reminders to visit them again or to share their experience with other users encouraging them to visit. When the user clicks anywhere on the map, a pop up window appears and lets them enter information about the location. After submitting their location, the marker's data and location is written into the database for future use and for others to see.",
    url: 'https://hidden-gems1.herokuapp.com/',
    repo: 'https://github.com/peterphenow/Hidden-Gems', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectPics/eat-da-burger.png',
    title: 'Eat-Da-Burger!',
    info: 'I created this app to learn more about what ORM(Object-Relational Mapping) is and how it works. In this project, I created a homemade ORM to simplify the SQL statement functions. In this app, the user can add a burger, devour it, and delete the burger while the burger moves to different sections of the app.',
    info2: 'I also used MySQL, Node, Express.js, and Handlebars to complete this app.',
    url: 'https://eat-da-burger-pp.herokuapp.com/',
    repo: 'https://github.com/peterphenow/Eat-Da-Burger', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectPics/realmRoller.png',
    title: 'Realm Roller',
    info: 'I collaborated with 4 other developers on this project. We utilized multiple APIs to create a one-stop shop for everything a D&D Master might need to run a successful campaign.',
    info2:
      'It includes a name generator for NPCs(Non-Player Characters), a dice-roller, a notes field, image upload, and a spell lookup.',
    url: 'https://peterphenow.github.io/RealmRoller/',
    repo: 'https://github.com/peterphenow/RealmRoller', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to reach out to me? Great!',
  btn: 'Contact Me',
  email: 'peter.phenow@gmail.com',
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
