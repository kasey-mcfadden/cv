import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Kasey McFadden",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/NY",
  title: "Full Stack Software Engineer",
  about: `Founding engineer at a Sequoia-backed legal tech startup, building 
    full-stack AI infrastructure from the ground up. Previously spent 3 years 
    at Microsoft developing distributed content systems at scale. Focused on shipping high-quality software, fast.`,
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
      logo: "/logos/princeton.png",
    },
  ],
  work: [
    {
      company: "Sandstone",
      link: "",
      badges: [],
      title: "Founding Engineer",
      logo: "/logos/sandstone.png",
      start: "Aug. 2025",
      end: "",
      description: "Building the intelligence layer for in-house legal teams. Full-stack ownership across product, integrations, and developer tooling. Backed by Sequoia.",
      bullets: [],
      technologies: ["Python", "Rust", "TypeScript", "React"],
    },
    {
      company: "Microsoft",
      link: "",
      badges: [],
      title: "Software Engineer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/250px-Microsoft_icon.svg.png",
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
      logo: "https://companieslogo.com/img/orig/COF-669e640e.png?t=1720244491",
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
      logo: "https://companieslogo.com/img/orig/MRK-7f8ec2c5.png?t=1722952496",
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
      title: "TigerStudy",
      techStack: [
        "Python",
        "JavaScript",
      ],
      description: "Group finder built for Princeton's McGraw Center. Still in active use by students.",
      link: {
        label: "tigerapps.org",
        href: "https://tigerapps.org/",
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
    {
      title: "Edgeways",
      techStack: ["Python", "JavaScript"],
      description:
        "Twitter-like platform incorporating tailored foreign language quizzes within your feed.",
    },
  ],
} as const;

export type ResumeData = typeof RESUME_DATA;
export type WorkEntry = ResumeData["work"][number];
export type Education = ResumeData["education"][number];
export type Project = ResumeData["projects"][number];
