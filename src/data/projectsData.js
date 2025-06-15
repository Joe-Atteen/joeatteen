// Import all project images
import cedirates from "../assets/images/cedirates.webp";
import cc from "../assets/images/cc.webp";
import fuel from "../assets/images/fuel.webp";
import rates from "../assets/images/rates.webp";
import bog from "../assets/images/bog.webp";

import creditscore from "../assets/images/creditscore.webp";
import purple from "../assets/images/purple.webp";
import yellow from "../assets/images/yellow.webp";
import orange from "../assets/images/orange.webp";
import green from "../assets/images/green.webp";

import tekquest from "../assets/images/tekquest.webp";
import profile from "../assets/images/profile.webp";
import ask from "../assets/images/ask.webp";
import tags from "../assets/images/tags.webp";
import users from "../assets/images/users.webp";

import dev from "../assets/images/dev-portal.webp";
import devhome from "../assets/images/dev-home.webp";
import search from "../assets/images/search.webp";
import api from "../assets/images/api.webp";

import hubtel from "../assets/images/hubtel.webp";
import landing from "../assets/images/landing.webp";
import getApp from "../assets/images/get-the-app.webp";
import section from "../assets/images/section.webp";

// Main projects data array
export const projectsData = [
  {
    id: "cedirates",
    title: "CediRates",
    slug: "cedirates",
    shortDescription: "Currency exchange rate tracking application",
    technologies: ["Web app", "Next.js", "Tailwind", "Node.js", "TypeScript"],
    projectUrl: "https://cedirates.com/",
    thumbnail: cedirates,
    fullDescription:
      "A robust, data-driven full-stack web application offering daily updates on fuel prices and exchange rates. It features a currency converter and calculator for seamless currency conversions. Initially, I served as the sole frontend engineer on this project. Currently, I lead a team of four engineers as the engineering manager, overseeing the development and maintenance of the platform, which now boasts over 40,000 active monthly users.",
    images: [
      {
        src: cedirates,
        alt: "CediRates Homepage",
        caption: "Homepage showing current exchange rates",
      },
      {
        src: rates,
        alt: "Exchange Rates Display",
        caption: "Detailed view of currency exchange rates",
      },
      {
        src: fuel,
        alt: "Fuel Price Tracker",
        caption: "Fuel price tracking interface",
      },
      {
        src: cc,
        alt: "Currency Converter",
        caption: "Interactive currency converter tool",
      },
      {
        src: bog,
        alt: "Bank of Ghana Rates",
        caption: "Bank of Ghana official rates comparison",
      },
    ],
  },
  {
    id: "creditscore",
    title: "myCreditScore",
    slug: "creditscore",
    shortDescription: "Personal credit score monitoring platform",
    technologies: ["Web app", "Bootstrap", "Sass", "Next.js", "TypeScript"],
    projectUrl: "https://mycreditscore.com.gh/",
    thumbnail: creditscore,
    fullDescription:
      "myCreditScore is a web application that delivers users their credit scores and detailed credit reports. The primary goal is to promote accessible and responsible credit management in Ghana. I developed the beautifully intuitive user interface.",
    images: [
      {
        src: creditscore,
        alt: "myCreditScore Homepage",
        caption: "Main dashboard showing user&apos;s credit score",
      },
      {
        src: purple,
        alt: "Credit Report Analysis",
        caption: "Detailed credit report analysis view",
      },
      {
        src: yellow,
        alt: "Score Improvement Tips",
        caption: "Credit score improvement recommendations",
      },
      {
        src: orange,
        alt: "Credit History Timeline",
        caption: "User credit history timeline visualization",
      },
      {
        src: green,
        alt: "Performance Metrics",
        caption: "Credit performance metrics and statistics",
      },
    ],
  },
  {
    id: "tekquest",
    title: "TekQuest",
    slug: "tekquest",
    shortDescription: "Technical learning and challenge platform",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "TypeScript",
      "Full Stack",
    ],
    projectUrl: "https://tek-quest.vercel.app/",
    thumbnail: tekquest,
    fullDescription:
      "This is a full stack Next.js application modeled after Stack Overflow where users can ask questions and have them answered. There&apos;s the option to upvote or downvote a question or answer and many more interesting features. It leverages React for building user interfaces and integrates Auth.js for authentication, supporting providers like GitHub and Google. The backend is powered by MongoDB for database management, and OpenAI&apos;s API is utilized for an AI-driven feature. The project uses Tailwind CSS for styling, ensuring a responsive and visually appealing design.",
    images: [
      {
        src: tekquest,
        alt: "TekQuest Homepage",
        caption: "Main homepage showing recent questions",
      },
      {
        src: profile,
        alt: "User Profile",
        caption: "User profile page with stats and activity",
      },
      {
        src: ask,
        alt: "Ask Question Interface",
        caption: "Question submission interface with rich text editor",
      },
      {
        src: tags,
        alt: "Tags Page",
        caption: "Browse and filter questions by tags",
      },
      {
        src: users,
        alt: "Community Users",
        caption: "Community users and contributors listing",
      },
    ],
  },
  {
    id: "dev-portal",
    title: "Dev Portal",
    slug: "dev-portal",
    shortDescription: "Developer documentation and resource hub",
    technologies: ["HTML", "Bootstrap", "Sass", "CSS", "Vue"],
    projectUrl: "https://developers.hubtel.com/",
    thumbnail: dev,
    fullDescription:
      "The developers portal is a centralized platform that provides developers with the tools, documentation, APIs, SDKs, and resources they need to efficiently build, integrate, and manage applications. Converted design to code on this one.",
    images: [
      {
        src: devhome,
        alt: "Developer Portal Homepage",
        caption: "Developer portal homepage with navigation",
      },
      {
        src: dev,
        alt: "API Documentation",
        caption: "API documentation with code examples",
      },
      {
        src: search,
        alt: "Search Functionality",
        caption: "Documentation search functionality",
      },
      {
        src: api,
        alt: "API Reference",
        caption: "Detailed API reference and endpoints",
      },
    ],
  },
  {
    id: "hubtel",
    title: "Hubtel Web",
    slug: "hubtel",
    shortDescription: "Payment and service delivery platform",
    technologies: ["Web app", "Bootstrap", "Sass", "Nuxt", "Vue"],
    projectUrl: "https://hubtel.com/",
    thumbnail: hubtel,
    fullDescription:
      "Hubtel is a payment platform that provides a wide range of services, including payment processing, invoicing, and subscription management. I was responsible for converting the design to code for the web application.",
    images: [
      {
        src: hubtel,
        alt: "Hubtel Dashboard",
        caption: "Hubtel main dashboard interface",
      },
      {
        src: landing,
        alt: "Landing Page",
        caption: "Product landing page layout",
      },
      {
        src: getApp,
        alt: "App Download Section",
        caption: "Mobile app promotion section",
      },
      {
        src: section,
        alt: "Features Section",
        caption: "Platform features showcase section",
      },
    ],
  },
];

// Helper function to find a project by slug
export const getProjectBySlug = (slug) => {
  return projectsData.find((project) => project.slug === slug);
};

// Export individual projects for direct import
export const projects = projectsData.map(
  ({ id, title, slug, shortDescription, technologies, thumbnail }) => ({
    id,
    title,
    slug,
    description: shortDescription,
    technologies,
    image: thumbnail,
    link: `/${slug}`,
  })
);
