import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Kasey McFadden",
  initials: "KM",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/NY",
  summary:
    "Full Stack Software Engineer",
  about:
    "Full Stack Software Engineer with experience delivering scalable, high-impact features at Microsoft and across multiple tech stacks. Passionate about clean code and continuous learning.",
  avatarUrl: "",
  personalWebsiteUrl: "https://kaseym.dev",
  contact: {
    email: "kaseysmcfadden@gmail.com",
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
      badges: [],
      title: "Software Engineer",
      logo: "",
      start: "August 2022",
      end: "",
      description: "Developed the C3 content management system, directly improving content workflow for end-user Help, Support, and Learning Experiences across Microsoft's product suite, impacting high-traffic sites (3B+ annual impressions).",
      bullets: [
        "Achieved a 76\% average performance improvement on permissions retrieval by refining concurrency techniques.",
        "Developed a performance testing suite for the federated gateway, identifying an 80\% improvement in federated gateway durations. ",
        "Delivered full stack Product-Level Permissions feature ahead of deadline, architecting new site performance graphs through Geneva to target improvements for users. ",
        "Led .NET learning and upgrade initiative for entire codebase, driving engineering excellence and continuous learning. ",
        "Authored documentation on best practices for creating user stories, including custom team-specific LLM prompts to supercharge dev cycles. ",
        "Led multiple team-wide privacy and security initiatives."
      ],
      technologies: ["C#", "TypeScript", "React", "Redux", "GraphQL", "Azure DevOps", "Copilot", "OpenAI"],
    },
    {
      company: "Capital One",
      link: "",
      badges: [],
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
      badges: [],
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
    "GraphQL",
    "OpenAI",
    "Copilot",
    "Azure",
    "AWS",
    "Postgres",
    "SQL",
    "Kubernetes",
    "Docker",
    "Cybersecurity",
    "CI/CD",
    "Distributed Systems",
    "Cloud Computing",
  ],
  projects: [
    {
      title: "TigerStudy",
      techStack: [
        "Python",
        "JavaScript",
      ],
      description: "Group finder built for Princeton's McGraw Center for Teaching and Learning. Still in active use by students.",
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
        "Built and deployed a smart contract allowing students to mint their senior theses as NFTs.",
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
