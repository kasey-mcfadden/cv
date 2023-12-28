import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Kasey McFadden",
  initials: "KM",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/NY",
  about:
    "Full Stack Engineer with experience building and shipping applications in various languages and frameworks.",
  summary:
    "Full Stack Engineer",
  avatarUrl: "",
  personalWebsiteUrl: "https://kaseym.dev",
  contact: {
    email: "kaseysmcfadden(at)gmail(dot)com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kasey-mcfadden",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kaseymcfadden/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Princeton University",
      degree: "Bachelor of Engineering in Computer Science",
      departmentalGpa: "3.63",
      start: "",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Microsoft",
      link: "",
      badges: ["Hybrid Remote"],
      title: "Software Engineer",
      logo: "",
      start: "2022",
      end: "",
      description: "Joined the Experience and Devices org, working on the Office team to develop and enhance Office applications and services. Contributing to the content workflow of support.microsoft.com, a high-traffic site with 1B+ annual users.",
      technologies: ["C#", "TypeScript", "React", "Redux", "GraphQL"],
    },
    {
      company: "Capital One",
      link: "",
      badges: [],
      title: "Software Engineer Intern",
      logo: "",
      start: "",
      end: "Summer 2021",
      description: "Developed a web application to modernize static sites, integrating Tableau and QuickSight, and enabling streamlined business analytics for over 30,000 users across multiple teams. Utilized Capital One's learning resources to obtain Certified Secure Software Engineer (CSSE) and CSSE Pro certifications, investing 20+ hours in study and assessment during internship downtime.",
      technologies: ["TypeScript", "React", "Express.js", "SQL"],
    },
    {
      company: "Merck",
      link: "",
      badges: [],
      title: "Software Engineer Intern",
      logo: "",
      start: "",
      end: "Summer 2020",
      description: "Developed a computer vision system using FRCNN and a mechanical disintegration apparatus, automating pill disintegration analysis and providing crucial data while eliminating manual analysis. Designed interactive visualization maps to monitor pharmaceutical product distribution, leveraging Merck's Blockchain API to combat fraud.",
      technologies: ["Python", "Go", "JavaScript", "D3.js", "OpenCV", "NumPy"],
    },
    {
      company: "Venus Technology Ventures",
      link: "",
      badges: ["Acquired 2021"],
      title: "Software Engineer Intern",
      logo: "",
      start: "",
      end: "Summer 2019",
      description: "Integrated Stanford CoreNLP pipeline into a fintech voice platform to recognize natural language patterns and create custom user vocabulary, contributing to technical documentation for a patent application. Led app refactoring effort, integrating 10+ communication APIs, migrating the UI to Sencha, adding authentication flow and voice AI.",
      technologies: ["Go", "JavaScript", "Sencha", "NLP"],
    },
  ],
  skills: [
    "C#",
    "Python",
    "Golang",
    "Java",
    "JavaScript/TypeScript",
    "React",
    "Redux",
    "Next.js",
    "Node.js",
    "Express.js",
    "Bootstrap",
    "GraphQL",
    "Swagger",
    "Azure",
    "AWS",
    "Postgres",
    "SQL",
  ],
  projects: [
    {
      title: "TigerStudy",
      techStack: [
        "Python",
        "JavaScript",
      ],
      description: "Study group finder made for Princeton's McGraw Center for Teaching and Learning. Now maintained by Princeton.",
      logo: "",
      link: {
        label: "tigerapps.org",
        href: "https://tigerapps.org/",
      },
    },
    {
      title: "MerckMap",
      techStack: ["Hackathon", "Lead Developer", "Python", "Go", "JavaScript", "D3.js"],
      description:
        "Interactive map-based data visualization model that sorts data from Merck's Blockchain API. Won 1st Place, Merck Blockchain API Challenge @ HackRU.",
      logo: "",
      link: {
        label: "kasey-mcfadden.github.io/hack_ru",
        href: "https://kasey-mcfadden.github.io/hack_ru/",
      },
    },
    {
      title: "NFThesis",
      techStack: ["Solidity", "JavaScript", "Ethers.js", "Hardhat", "Alchemy"],
      description:
        "Deployed a smart contract on the Ropsten testnet allowing students to mint their senior theses as NFTs.",
      logo: "",
      link: {
        label: "github.com/kasey-mcfadden/NFThesis-Contract",
        href: "https://github.com/kasey-mcfadden/NFThesis-Contract"
      }
    },
    {
      title: "Adaptive Replacement Cache",
      techStack: ["Go"],
      description:
        "A cache optimized to favor either recency or frequency, improving hit ratio.",
      logo: "",
      link: {
        label: "github.com/kasey-mcfadden/arc",
        href: "https://github.com/kasey-mcfadden/arc",
      },
    },
    {
      title: "Edgeways",
      techStack: ["Python", "JavaScript"],
      description:
        "Twitter-like platform incorporating periodic foreign language quizzes within your feed, tailored to the tweets you encounter.",
      logo: "",
    },
  ],
} as const;
