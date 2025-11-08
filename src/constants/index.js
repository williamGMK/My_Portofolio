import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  csharp,
  iot,
} from "../assets";

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

const services = [
  {
    title: " full stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Electronics & Network System",
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "java",
    icon: java,
  },
  {
    name: "csharp",
    icon: csharp,
  },

  {
    name: "iot",
    icon: iot,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "N/A",
    icon: creator,
    iconBg: "#383E56",
    date: "N/A",
    points: ["No work Experience For now."],
  },
  {
    title: "React Native Developer",
    company_name: "N/A",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "N/A",
    points: ["No work Experience For now."],
  },
  {
    title: "Web Developer",
    company_name: "N/A",
    icon: shopify,
    iconBg: "#383E56",
    date: "N/A",
    points: ["No work Experience For now."],
  },
  {
    title: "Full stack Developer",
    company_name: "N/A",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: ["No work Experience For now."],
  },
];

const testimonials = [
  {
    testimonial:
      "Glodi helped me debug and rebuild my wedding invitation web app from scratch. He reorganized the backend, separated the frontend files, and set up MongoDB with Express routes — everything ran smoothly after that. Truly professional!",
    name: "Don",
    designation: "Web Developer",
    company: "Freelance Project",
    image: "",
  },
  {
    testimonial:
      "We were completely stuck on our LearnCampus project with the deadline just one day away. Glodi took over, built the system from the ground up, and guided the presentation. The entire team was impressed by his speed and clarity.",
    name: "Sandy, Matt & Ryan",
    designation: "Team Members",
    company: "Belgium Campus",
    image: "",
  },
  {
    testimonial:
      "After reviewing his project, I told Glodi, 'You have mastered the syntax!' His technical precision and problem-solving skills stood out throughout the course.",
    name: "Sir Tendai",
    designation: "Lecturer",
    company: "Belgium Campus",
    image: "",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
