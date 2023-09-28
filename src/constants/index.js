import { c } from "maath/dist/index-43782085.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  github,
  shirt,
  northface,
  jobook,
  fittime,
  tenso,
  tripteron,
  email,
  kazanexpress,
  provectus,
  inno,
  bobcat,
  design,
  credly,
  metacredly,
  metaback,
  mosaic,
  githubpink,
  purplelinkedin,
  emailpink,
  littlelemon,
} from "../assets";

import linkedin from "../assets/linkedin.png";
import angular from "../assets/tech/angular.png";
import bootstrap from "../assets/tech/bootstrap.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialLinks = [
  {
    name: "Email",
    icon: email,
    icon2: emailpink,
    link: "mailto:suliman.badour1@gmail.com",
  },
  {
    name: "github",
    icon: github,
    icon2: githubpink,
    link: "https://github.com/sulimanbadour1",
  },
  {
    name: "linkedin",
    icon: linkedin,
    icon2: purplelinkedin,
    link: "https://www.linkedin.com/in/sulimanbadour/",
  },
];

const services = [
  {
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Back-End Development",
    icon: mobile,
  },
  {
    title: "Product Design",
    icon: design,
  },
  {
    title: "Design Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Designer",
    company_name: "Kazan Express",
    icon: kazanexpress,
    iconBg: "#ff1919",
    date: "Mar 2020 - Dec 2020",
    points: [
      "Executed Visual redesign of web applications and marketing for +20 new product categories (Shoes, plus-size).",
      "Designed posters and various social media content for multiple clients.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Product Designer",
    company_name: "Provectus",
    icon: provectus,
    iconBg: "#ffffff",
    date: "Apr 2021 - Dec 2021",
    points: [
      "Worked as a UI/UX designer on one of Provectus internal projects, Communicated with the product managers and the stakeholders weekly.",
      "Designed  new features from scratch and revamped old ones to cope with the standards of the current market.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Innopolis Design Lab",
    icon: inno,
    iconBg: "#41ba21",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      " Designed UI & UX in collaboration with engineering & design teams.",
      " Designed and modeled 3d products, made animations to add them to company projects.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Doosan Bobcat",
    icon: bobcat,
    iconBg: "#ea401d",
    date: "Jan 2023 - Apr 2022",
    points: [
      "Collaborated with cross-functional teams to define, design, and ship new web applications and features.",
      " Designed 3D models and integrated them into the company's website. ",
      " Designed UI & UX in collaboration with engineering & design teams. ",
      "Participated in user testing and research to gain insights into user behavior.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I think Suli is one of the best web developers I've ever worked with. He's creative, eye detailed, and has a great sense of design.",
    name: "Jeff ",
    designation: "SW Engineer",
    company: "Daloopa",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFn48E_Kmf5HA/profile-displayphoto-shrink_800_800/0/1656025463611?e=2147483647&v=beta&t=YUaAVqegQLB0Ra7LYcNUJLEC4bK_BVZkpsQJA2OLdE8",
  },
  {
    testimonial:
      "I've worked with Suli on several projects and he's always delivered great work on time, with great attention to detail. ",
    name: "Tomáš",
    designation: "Design Lead",
    company: "Provectus",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "Suli is a good designer and developer, he has a good eye for design and he is very creative. Working with him was a great experience.",
    name: "Dina",
    designation: "Product Manager",
    company: "IUL",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const projects = [
  {
    name: "Little Lemon Restaurant",
    description:
      "A full responsive website for a restaurant in Prague, which allows users to browse the menu, reserve a table  order and checkout. Also, it has a dashboard for the restaurant owner to manage orders and reservations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: littlelemon,
    source_code_link: "https://github.com/sulimanbadour1/Meta_Capstone_Project",
  },
  {
    name: "Shirt Store AI",
    description:
      "Web-based platform that allows users to create and share their own custom t-shirt designs using DALL.E, change colors to save thier own choosen design, and order them for printing and delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threeJs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/sulimanbadour1/AI_shirt_SAAS_3js",
  },
  {
    name: "3D Mosaic",
    description:
      "E-Commerce Website for a Furniture Company which helps users to try, Scan its products in 3D via AR technology and take orders from clients, build products as the customer needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spline",
        color: "green-text-gradient",
      },
      {
        name: "threeJs",
        color: "pink-text-gradient",
      },
    ],
    image: mosaic,
    source_code_link: "https://www.behance.net/gallery/141974421/3D-Mosaic",
  },
  {
    name: "JoBook",
    description:
      "JoBook is a job search web application, dedicated to helping users to find an opportunity in the market. It is a platform that connects job seekers with employers. Search for jobs, create a profile, and apply for jobs.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "VanillaJS",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobook,
    source_code_link: "https://www.behance.net/gallery/137731959/JoBook",
  },
  {
    name: "The North Face App",
    description:
      "A e-commerce mobile app for the brand The North Face, which allows users to browse the latest products, order and checkout. Also, It allow tracking the order and get notifications. and share the products with friends.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: northface,
    source_code_link:
      "https://www.behance.net/gallery/138474501/The-North-Face-Mobile-Application/",
  },
  {
    name: "Fit Time",
    description:
      "A mobile app for fitness, which connects between trainers and trainees, allowing users to book a session with a trainer. allow trainers to manage their sessions and trainees to track their progress.",
    tags: [
      {
        name: "UI",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fittime,
    source_code_link: "",
  },
];

const projectsengineer = [
  {
    name: "TensDrone",
    description:
      "Tensodrone that do not break Tensodrone is a multi-rotor UAV of a new design with collision protection, made on the principle of tensegrity. This approach allows for the combination of the protective cage and the airframe in one structure, increasing impact resistance with less weight.",
    tags: [
      {
        name: "Fusion360",
        color: "blue-text-gradient",
      },
      {
        name: "ROS",
        color: "green-text-gradient",
      },
      {
        name: "CAD",
        color: "pink-text-gradient",
      },
    ],
    image: tenso,
    source_code_link: "https://youtu.be/4dEewzDinpA?si=7WFjcUC_CviAtYL7",
  },
  {
    name: "SpotRobot",
    description:
      "Spot Robot is a quadruped robot. It is a four-legged robot that can walk, run, and climb stairs. Spot is the first commercial robot to be able to climb stairs and traverse rough terrain. It is designed for indoor and outdoor operation and is waterproof and dustproof in all weathers.",
    tags: [
      {
        name: "XML",
        color: "blue-text-gradient",
      },
      {
        name: "CAD",
        color: "green-text-gradient",
      },
      {
        name: "CAE",
        color: "pink-text-gradient",
      },
    ],
    image: tripteron,
    source_code_link:
      "https://www.youtube.com/channel/UCU2AGYmAQM4jw4wezPOFhIA",
  },
];
// //  metaback,
//   designbadge,
//   googlesoft,
const badges = [
  {
    name: "Meta Front-End Certificate",
    icon: metacredly,
    link: "https://www.credly.com/org/facebook-blueprint/badge/meta-front-end-developer-certificate",
  },
  {
    name: "UX Google Certificate",
    icon: credly,
    link: "https://www.credly.com/earner/earned/badge/c2089dc9-8c95-403b-95cd-b090c6818f61",
  },
  {
    name: "Meta Back-End Certificate",
    icon: metaback,
    link: "https://www.credly.com/org/facebook-blueprint/badge/meta-back-end-developer-certificate",
  },

  // {
  //   name: "Pragmatic Institute",
  //   icon: designbadge,
  //   link: "https://www.credly.com/org/pragmatic-institute/badge/design",
  // },
  // {
  //   name: "Google U.S. Software Engineer Apprenticeship Program",
  //   icon: googlesoft,
  //   link: "https://www.credly.com/org/google-s-u-s-apprenticeship-program/badge/google-u-s-software-engineer-apprenticeship-program",
  // },
];

export {
  socialLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projectsengineer,
  badges,
};
