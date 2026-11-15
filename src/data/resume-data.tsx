import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { logos } from "./logos";

export const RESUME_DATA = {
  name: "Kasey McFadden",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/NY",
  title: "Product Lead & Full Stack Engineer",
  about: `Founding engineer (employee #2) at Sandstone, a legal tech startup backed by Sequoia and Lightspeed. I came in as an engineer 
    and my role has grown into product, so I now split my time between customers, product decisions, 
    and shipping code. Previously at Microsoft.`,
  personalWebsiteUrl: "https://kaseym.com",
  contact: {
    email: "kaseym@alumni.princeton.edu",
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
    ],
  },
  education: [
    {
      school: "Princeton University",
      degree: "Bachelor of Engineering in Computer Science",
      departmentalGpa: "3.63",
      start: "",
      end: "May 2022",
      logo: logos.princeton,
    },
  ],
  work: [
    {
      company: "Sandstone",
      link: "",
      badges: [],
      title: "Product Lead & Founding Engineer",
      logo: logos.sandstone,
      start: "Aug. 2025",
      end: "",
      description: "Building the intelligence layer for in-house legal teams. Own product and engineering work end to end, from customer discovery through shipping.",
      bullets: [],
      technologies: ["Python", "Rust", "TypeScript", "React"],
    },
    {
      company: "Microsoft",
      link: "",
      badges: [],
      title: "Software Engineer",
      logo: logos.microsoft,
      start: "Aug. 2022",
      end: "Jul. 2025",
      description: "Drove development of Microsoft's distributed CMS, enabling hundreds of authors to publish content at scale (500M+ monthly requests, 3B+ annual impressions) and supporting adoption across flagship products.",
      bullets: [
        "Maintained and expanded a suite of 20+ scalable microservices.",
        "Cut sitewide permissions retrieval time by 76\% by refining C# concurrency techniques.",
        "Accelerated Copilot Labs (Microsoft's GenAI) adoption by streamlining content onboarding workflows.",
        "Identified and drove an 80% reduction in federated gateway durations by developing a Grafana k6 performance testing suite.",
        "Architected full-stack permissions features, including new performance dashboards via Microsoft's internal monitoring platform to target user improvements.",
        "Led 5+ high-priority privacy and security initiatives, ensuring safe service connections and secrets compliance.",
        "Built LLM-powered Agile templates, increasing team velocity and delivery consistency.",
        "Onboarded and mentored 2 early-career engineers.",
      ],
      technologies: ["C#", "TypeScript", "React", "Redux", "GraphQL", "Azure DevOps", "Copilot", "OpenAI"],
    },
    {
      company: "Capital One",
      link: "",
      badges: [],
      title: "Software Engineer Intern",
      logo: logos.capitalOne,
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
      logo: logos.merck,
      start: "",
      end: "Summer 2020",
      description: "Developed a Python-based computer vision system using FRCNN and OpenCV to automate pill disintegration analysis, reducing manual analysis time by 60%. \
        Designed interactive D3.js visualization maps, leveraging Merck's Blockchain API and Go backend to monitor pharmaceutical product distribution and combat fraud.",
      technologies: ["Python", "Go", "JavaScript", "D3.js", "OpenCV", "NumPy"],
    },
  ],
  skills: {
    technologies: [
      "OpenAI", "Anthropic", "RAG", "Kubernetes", "Docker", "AWS", "GCP", "Azure", "PostgreSQL", "PostHog", "CI/CD"
    ],
    frameworks: [
      "React", "Next.js", "LangChain", "Vercel AI SDK", "Temporal", "Node.js", "FastAPI", "Tailwind", "Playwright"
    ],
    languages: [
      "TypeScript/JavaScript", "Python", "C#", "Go", "SQL", "GraphQL", "Java"
    ]
  },
  projects: [
    {
      title: "Mountain View",
      techStack: ["Three.js", "WebGL", "JavaScript"],
      description:
        "Interactive 3D landscape with dynamic lighting, weather systems, and procedural terrain.",
      link: {
        label: "mountain-view.kaseym.com",
        href: "https://mountain-view.kaseym.com/",
      },
    },
    {
      title: "Diagrams",
      techStack: ["TypeScript", "Next.js", "libSQL"],
      description:
        "Self-hosted Excalidraw workspace with folders, autosave, and version history.",
      link: {
        label: "diagrams.kaseym.com",
        href: "https://diagrams.kaseym.com/",
      },
    },
    {
      title: "TigerStudy",
      techStack: [
        "Python",
        "JavaScript",
      ],
      description: "Study group finder built for Princeton's McGraw Center.",
      link: {
        label: "tigerapps.org/archive",
        href: "https://tigerapps.org/archive/",
      },
    },
    {
      title: "MerckMap",
      techStack: ["Python", "Go", "JavaScript", "D3.js"],
      description:
        "Map-based data model using Merck's Blockchain API. Won 1st Place, Merck Challenge @ HackRU.",
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
      link: {
        label: "github.com/kasey-mcfadden/arc",
        href: "https://github.com/kasey-mcfadden/arc",
      },
    },
  ],
} as const;

export type ResumeData = typeof RESUME_DATA;
export type WorkEntry = ResumeData["work"][number];
export type Education = ResumeData["education"][number];
export type Project = ResumeData["projects"][number];
