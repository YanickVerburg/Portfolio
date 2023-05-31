import {
  SiGoogleplay,
  SiReact,
  SiExpo,
  SiAdobexd,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTurborepo,
  SiStorybook,
  SiFirebase,
  SiCloudflare,
  SiDigitalocean,
} from "react-icons/si";
import { DiUnitySmall, DiScrum } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { MdAnimation } from "react-icons/md";
import { ProjectList } from "@/types";

const projectList: ProjectList[] = [
  {
    id: "janskapsalon",
    title: "Jans kapsalon",
    coverImage: "/images/jk.webp",
    projectImage: "/images/jk.webp",
    projectImageLight: "/images/jk.webp",
    url: "https://janskapsalon.vercel.app/",
    translate: "translate-y-[10px] sm:translate-y-[-96px]",
    width: "w-[162px]",
    grid: "col-span-2 row-span-1",
    order: "order-2",
    description:
      "Jans kapsalon is a website made for a fictional hairdresser. The goal of the website is to find information about the hairdresser, and to be able to book an appointment. The hairdresser also needs a management system to view appointments and change data.",
    workedOn: [
      { work: "I made the design for the website" },
      { work: "I realised the design with React and Tailwind" },
    ],
    newSkills: [
      { skill: "Building a website with React" },
      { skill: "Styling a website with Tailwind CSS" },
      { skill: "How to work agile in a scrum team" },
      {
        skill: "Working with AdobeXD and creating webdesigns",
      },
    ],
    icons: [
      { icon: <SiReact />, url: "https://react.dev/" },
      { icon: <SiTailwindcss />, url: "https://tailwindcss.com/" },
      {
        icon: <SiAdobexd />,
        url: "https://helpx.adobe.com/xd/get-started.html",
      },
      { icon: <DiScrum />, url: "https://www.scrum.org/" },
    ],
  },
  {
    id: "fly-n",
    title: "Fly-n",
    coverImage: "/images/fly-n.webp",
    projectImage: "/images/fly-n-pf.webp",
    projectImageLight: "/images/fly-n-pf.webp",
    url: "https://play.google.com/store/apps/details?id=com.leonvdw.flyn",
    translate: "translate-y-[10px] sm:translate-y-0",
    width: "w-[90px]",
    grid: "col-span-1 row-span-2",
    order: "order-1",
    description:
      "Fly-n is an international travel app that allows you to find and book door-to-door trips. The aim of Fly-n is to combine different travel providers to create a comprehensive travel itinerary. You will be redirected to book tickets.",
    workedOn: [
      { work: "I made the design for the app" },
      { work: "I helped realising the design in React Native" },
      {
        work: "I created the business cases, persona's, product vision board and I worked on the SDG's",
      },
      { work: "I drafted the Privacy Policy" },
      {
        work: "I helped pitch the idea to big companies for possible collaborations",
      },
    ],
    newSkills: [
      { skill: "Building an application with React Native" },
      { skill: "Styling an application with React Native Paper" },
      {
        skill:
          "Certain business aspects like business cases, persona's & product vision",
      },
      { skill: "The drafting of a Privacy Policy" },
    ],
    icons: [
      { icon: <SiReact />, url: "https://react.dev/" },
      {
        icon: <SiGoogleplay />,
        url: "https://play.google.com/console/about/",
      },
      { icon: <SiExpo />, url: "https://expo.dev/" },
    ],
  },

  {
    id: "portfolio",
    title: "Portfolio",
    coverImage: "/images/portfolio.webp",
    projectImage: "/images/portfolio.webp",
    projectImageLight: "/images/portfolio_light.webp",
    url: "https://yanickverburg.nl",
    translate: "translate-y-0 ",
    width: "w-[120px]",
    grid: "col-span-2 row-span-1",
    order: "order-2",
    description:
      "This is my portfolio site. It is a place where I can show my work and skills. I made this website to show my skills and to learn new things. I made this website with Next.js and Tailwind CSS. I also used Framer Motion for animations.",
    workedOn: [
      { work: "I made the design for the website" },
      { work: "I realised the design with Next.js and Tailwind CSS" },
      { work: "I made a cors proxy to fetch images with Cloudflare Workers" },
      {
        work: "I created a Python api and hosted it on Digital Ocean Functions",
      },
    ],
    newSkills: [
      { skill: "Building a website with Next.js" },
      { skill: "Using Framer Motion for animations" },
      { skill: "Working with Cloudflare Workers" },
      { skill: "Hosting an api with Digital Ocean Functions" },
    ],
    icons: [
      { icon: <SiNextdotjs />, url: "https://nextjs.org/" },
      { icon: <SiTailwindcss />, url: "https://tailwindcss.com/" },
      { icon: <SiCloudflare />, url: "https://www.cloudflare.com/" },
      { icon: <SiDigitalocean />, url: "https://digitalocean.com/" },
      { icon: <SiFramer />, url: "https://www.framer.com/motion/" },
    ],
    githubUrl: "https://github.com/lvdwardt/portfolio",
  },
  {
    id: "babble",
    title: "Babble",
    coverImage: "/images/companies/babble.webp",
    projectImage: "/images/companies/babble.webp",
    projectImageLight: "/images/companies/babble.webp",
    url: "https://hiperr.net",
    translate: "translate-y-0 ",
    width: "w-[120px]",
    grid: "col-span-2 row-span-1",
    order: "order-2",
    description:
      "Babble is a platform where streamers can play games with their chat. It is a great way for streamers to interact with their viewers and build a community. Viewers can simply use the Twitch or Youtube chat to play, and the streamer controls everything via the platform.",
    workedOn: [
      { work: "I created a monorepo with Turborepo" },
      { work: "I implemented a design system with Storybook" },
      { work: "I realised the design with React and TailwindCSS" },
      { work: "I hosted the website with Firebase" },
    ],
    newSkills: [
      { skill: "Implemeting and working with a monorepo" },
      { skill: "Working with storybook to create a design system" },
      { skill: "Hosting a website with Firebase" },
    ],
    icons: [
      { icon: <SiReact />, url: "https://react.dev/" },
      { icon: <SiTailwindcss />, url: "https://tailwindcss.com" },
      { icon: <SiTurborepo />, url: "https://turbo.build/repo" },
      { icon: <SiStorybook />, url: "https://storybook.js.org/" },
      { icon: <SiFirebase />, url: "https://firebase.google.com/" },
    ],
  },
  {
    id: "capgemini",
    title: "Capgemini",
    coverImage: "/images/companies/cap.webp",
    projectImage: "/images/companies/cap.webp",
    projectImageLight: "/images/companies/cap.webp",
    url: "https://www.youtube.com/watch?v=OnScnacuOww",
    translate: "translate-y-0 ",
    width: "w-[130px]",
    grid: "col-span-2 row-span-1",
    order: "order-2",
    description:
      "Capgemini is a global consulting and technology services company that helps organizations with digital transformation and innovation in over 50 countries. They provide a wide range of services, including consulting, technology solutions, and software development. During my internship here I developed a Virtual Reality Escape Room focusing mainly on thinking out of the box, accessibility and the Sustainable Development Goals. I also took on the role of scrum master of a team of 6 developers.",
    workedOn: [
      { work: "I designed a puzzle game" },
      { work: "I developed a puzzle game in Unity" },
      { work: "I realised VR interaction" },
      { work: "I applied AI, locomotion and animations" },
    ],
    newSkills: [
      { skill: "Working with C# & Unity" },
      { skill: "Working with Unity & XR Interaction Toolkit" },
      { skill: "Learned working as a Scrum master" },
    ],
    icons: [
      { icon: <DiUnitySmall />, url: "https://unity.com/" },
      {
        icon: <TbBrandCSharp />,
        url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
      },
      { icon: <DiScrum />, url: "https://www.scrum.org/" },
      {
        icon: <MdAnimation />,
        url: "https://docs.unity3d.com/Manual/AnimationSection.html",
      },
    ],
  },
];
export default projectList;
