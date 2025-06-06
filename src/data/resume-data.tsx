import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Kasey McFadden",
  initials: "KM",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/NY",
  title:
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
      end: "May 2022",
    },
  ],
  work: [
    {
      company: "Microsoft",
      link: "",
      badges: [],
      title: "Software Engineer",
      logo: "",
      start: "Aug. 2022",
      end: "",
      description: "Developed a distributed CMS, powering content workflow for end-user Help, Support, and Learning Experiences across Microsoft's product suite (3b+ annual impressions, 500m+ monthly requests).",
      bullets: [
        "Reduced sitewide permissions retrieval time by 76\% by refining C# concurrency techniques.",
        "Led .NET learning and upgrade initiative, modernizing 20+ scalable microservices.",
        "Streamlined content onboarding for Copilot Labs, accelerating adoption of Microsoft's generative AI.",
        "Developed a k6 performance testing suite, identifying an 80\% improvement in federated gateway durations.",
        "Delivered full stack Product-Level Permissions feature ahead of deadline, architecting new site performance graphs by logging and metering through Geneva (Microsoft's monitoring platform) to target improvements for users.",
        "Led 5+ high-priority privacy and security efforts towards safe service connection and secrets standards.",
        "Created LLM-powered Agile templates, accelerating team delivery.",
        "Authored and presented an architecture doc on a new system design for Authoring Schemas after identifying inefficiencies and failures in existing processes.",
        "Onboarded and mentored 2 early-career engineers.",
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
      description: "Developed a React web application with Express.js to replace static sites for 30k+ users, integrating Tableau and QuickSight for streamlined business analytics, reducing manual reporting time by 40%. \
        Earned Capital One's Certified Secure Software Engineer (CSSE) and CSSE Pro certifications for secure coding practices.",
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
      description: "Developed a Python-based computer vision system using FRCNN and OpenCV to automate pill disintegration analysis, reducing manual analysis time by 60%. \
        Designed interactive D3.js visualization maps, leveraging Merck's Blockchain API and Go backend to monitor pharmaceutical product distribution and combat fraud.",
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
      description: "Integrated Stanford CoreNLP pipeline into a Go-based fintech voice platform, enabling natural language pattern recognition and custom user vocabulary, contributing to a patent application. \
        Led a refactoring effort, integrating 10+ APIs, migrating the UI to Sencha, and adding authentication and voice AI capabilities.",
      technologies: ["Go", "JavaScript", "Sencha", "NLP"],
    },
  ],
  skills: {
    languages: [
      "TypeScript/JavaScript", "C#", "Python", "Go", "Java", "SQL", "GraphQL"
    ],
    frameworks: [
      "React", "Redux", ".NET", "Apollo", "Next.js", "Node.js", "Express.js", "Jest"
    ],
    technologies: [
      "OpenAI", "Copilot", "Azure", "AWS", "Kubernetes", "Docker", "D2", "CI/CD", "Distributed Systems"
    ]
  },
  projects: [
    {
      title: "TigerStudy",
      techStack: [
        "Python",
        "JavaScript",
      ],
      description: "Group finder built for Princeton's McGraw Center. Still in active use by students.",
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
        "Map-based data model using Merck's Blockchain API. Won 1st Place, Merck Challenge @ HackRU.",
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
        "Twitter-like platform incorporating tailored foreign language quizzes within your feed.",
      logo: "",
    },
  ],
} as const;
