import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Kasey McFadden",
  initials: "KM",
  location: "New York City",
  locationLink: "https://www.google.com/maps/place/NY",
  summary:
    "Full Stack Engineer",
  about:
    "Full Stack Engineer with over 8 years of experience building and shipping applications in various languages and frameworks. Passionate about clean code, documentation, and continuous learning. Big fan of running, mountains, DIY-ing.",
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
      description: "Enhanced the C3 content management system, used by Microsoft employees to manage content for support.microsoft.com (100M+ MAU). Delivered 15+ full-stack features ahead of schedule. Contributed to the development of an AI-driven Content Assistant LLM using OpenAI and Copilot, which reduced content authoring time by over 50%. Achieved a 76% average performance improvement on sitewide permissions retrieval by refining concurrency techniques. Led multiple team-wide privacy and security initiatives, including implementing new data encryption standards and conducting regular security audits.",
      technologies: ["C#", "TypeScript", "React", "Redux", "GraphQL", "Azure DevOps", "Copilot", "OpenAI"],
    },
    {
      company: "Capital One",
      link: "",
      badges: ["Remote"],
      title: "Software Engineer Intern",
      logo: "",
      start: "",
      end: "Summer 2021",
      description: "Developed a React web application with Express.js and SQL to replace static sites for 30k+ users, integrating Tableau and QuickSight for streamlined business analytics. Earned Capital One's Certified Secure Software Engineer (CSSE) and CSSE Pro certifications, demonstrating commitment to secure coding practices.",
      technologies: ["TypeScript", "React", "Express.js", "SQL"],
    },
    {
      company: "Merck",
      link: "",
      badges: ["Remote"],
      title: "Software Engineer Intern",
      logo: "",
      start: "",
      end: "Summer 2020",
      description: "Developed a Python-based computer vision system using FRCNN and OpenCV to automate pill disintegration analysis, reducing manual analysis time by 60%. Designed interactive D3.js visualization maps, leveraging Merck's Blockchain API and Go backend to monitor pharmaceutical product distribution and combat fraud.",
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
      description: "Integrated Stanford CoreNLP pipeline into a Go-based fintech voice platform, enabling natural language pattern recognition and custom user vocabulary, contributing to a patent application. Led a refactoring effort, integrating 10+ APIs, migrating the UI to Sencha, and adding authentication and voice AI capabilities.",
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
