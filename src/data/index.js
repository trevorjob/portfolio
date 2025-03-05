import { seo, bookola, youtubesum, pharmarc } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const experiences = [
  {
    title: "Software Engineer",
    // company_name: "EstateSourcer (UK-based Real Estate Data Company)",
    company_name: "EstateSourcer",
    date: "Sep 2024 – Present",
    details: [
      "Designed and developed 6 large-scale web scrapers, processing over <span style='color: white;'>2 million web pages</span> and saving <span style='color: white;'>$1,000/month</span>.",
      "Built APIs to streamline <span style='color: white;'>data extraction</span> and integration for various applications.",
      "Integrated <span style='color: white;'>AI-powered workflows</span> using LangChain to automate data processing.",
      "Developed a fully integrated dashboard for scraper management with <span style='color: white;'>real-time monitoring</span>.",
      "Managed deployment with <span style='color: white;'>Docker</span>, ensuring scalability and security.",
    ],
  },
  {
    title: "Backend Engineering Intern",
    company_name: "HNG Tech LTD",
    date: "Jun 2024 – Aug 2024",
    details: [
      "Developed secure API endpoints for retrieving job details using <span style='color: white;'>JWT authentication</span>.",
      "Collaborated with product managers to create <span style='color: white;'>actionable GitHub tickets</span> for efficient workflow.",
      "Optimized backend performance for various web applications.",
      "Integrated and secured authentication mechanisms including OAuth and JWT.",
      "Ranked in the <span style='color: white;'>top 500 out of 22,000</span> participants.",
    ],
  },
  {
    title: "Lead Developer",
    company_name: "Bookola (Digital Library)",
    date: "2023",
    details: [
      "Led a team of 3 in building a digital library with a <span style='color: white;'>real-time chat room</span> using WebSockets.",
      "Integrated the <span style='color: white;'>GPT-3.5 AI model</span> to create personalized user profiles.",
      "Managed database connections and contributed to frontend development.",
      "Deployed the application ensuring seamless integration.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "GIGI TravelGirl",
    date: "Jan 2024 – Mar 2024",
    details: [
      "Contributed to the data models, <span style='color: white;'>database architecture</span>, and API functionalities.",
      "Responsible for the <span style='color: white;'>connectivity of both the backend and front-end</span> using axios.",
      "Implemented Redis integration for storing session data, enabling fast read/write operations.",
      "Responsible for flight, location, and related API routes.",
    ],
  },
];

const portfolio = [
  {
    name: "Bookola",
    description:
      "A digital library featuring AI-driven personality profiling and a WebSocket-powered chat system.",
    image: bookola,
    url: "https://bookola.onrender.com/",
  },
  {
    name: "YouTube Summarizer",
    description:
      "An AI tool that generates summaries of YouTube videos using Huggingface transformers and LangChain.",
    image: youtubesum,
    url: "https://tifi.tv/youtube-summarizer",
  },
  {
    name: "PharmArc",
    description:
      "A pharmacy management API built with Flask and Flask-SQLAlchemy to streamline pharmacy operations.",
    image: pharmarc,
    url: "https://pharmarc.onrender.com/",
  },
  {
    name: "SEO Analyzer",
    description:
      "An API that performs advanced SEO analysis, including keyword extraction, competitor analysis, and metadata retrieval.",
    image: seo,
    url: "https://seo-analyzer-1.onrender.com/",
  },
  {
    name: "TravelGirl",
    description:
      "GIGI TravelGirl is a travel and tourism platform designed for travellers, explorers, and tourists seeking the ultimate travelling experience. Developed as a FullStack project.",
    image:
      "https://raw.githubusercontent.com/deolla/GIGI-TravelGirl/refs/heads/main/img/IMG-20240324-WA0011.jpg",
    url: "https://github.com/deolla/GIGI-TravelGirl",
  },
];

export { experiences, portfolio };
