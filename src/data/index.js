import { seo, bookola, youtubesum, pharmarc,finwallet,twitterbot } from "../assets";

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
    title: "Fullstack Software Engineer",
    company_name: "Toplorgical LTD",
    date: "Feb 2025 – Present",
    details: [
      "Designed and developed AI models for fraud alert detection used by banks, <span style='color: white;'>reducing fraudulent transactions by 86%</span> and <span style='color: white;'>enhancing real-time threat identification across financial systems</span>.",
"Rewrote the company’s <span style='color: white;'>frontend with Next.js</span> while optimizing Django-based backend services, <span style='color: white;'>improving web application performance by 45%</span> and enhancing maintainability",
"<span style='color: white;'>Optimized backend infrastructure and database queries,</span> enhancing system efficiency and scalability to support a 60% increase in concurrent users, <span style='color: white;'>leading to 30% faster response times</span> and reduced infrastructure costs",
"<span style='color: white;'>Deployed two company mobile applications on the App Store</span> with <span style='color: white;'>robust Django REST API backends</span>, ensuring seamless user access and compliance with platform requirements",
"Implemented caching strategies and database optimization techniques to scale web applications for <span style='color: white;'>enterprise-level traffic</span>",
    ],
  },
  {
    title: "Software Engineer",
    // company_name: "EstateSourcer (UK-based Real Estate Data Company)",
    company_name: "EstateSourcer",
    date: "Sep 2024 – Feb 2025",
    details: [
      "Designed and developed 6 large-scale web scrapers, processing over <span style='color: white;'>2 million web pages monthly</span> and reducing data acquisition costs by<span style='color: white;'>$12,000 annually</span>.",
      "Built robust Django REST APIs to streamline <span style='color: white;'>data extraction</span>, enabling seamless integration for various web and mobile applications and stakeholders.",
      "Integrated <span style='color: white;'>AI-powered workflows</span> using LangChain with Django backends, creating scalable solutions that automate complex tasks and enhance data analysis capabilities for web applications.",
      "Developed a fully integrated dashboard for scraper management with <span style='color: white;'>providing real-time functionalities</span> for scheduling, monitoring, and controlling scraper operations.",
      "Managed deployment with Docker containers, ensuring scalability, security, and high availability across multiple environments, <span style='color: white;'>supporting 99.9% uptime for web applications</span>.",
      "Implemented database optimization strategies that <span style='color: white;'>improved query performance by 40%</span> for high-traffic web applications"
    ],
  },
  {
    title: "Backend Engineering Intern",
    company_name: "HNG Tech LTD",
    date: "Jun 2024 – Aug 2024",
    details: [
      "Developed Django and Flask API endpoints <span style='color: white;'>with 99.9% uptime</span> and <span style='color: white;'>reduced authentication response time by 40%</span> for web and mobile applications.",
      "Collaborated with product managers to create <span style='color: white;'>actionable GitHub tickets</span> for web application development, ensuring efficient project workflow.",
      "<span style='color: white;'>Optimized backend performance</span> for various web applications, <span style='color: white;'>implementing caching and database indexing strategies that</span> improved response times by 35%",
      "Integrated and secured authentication mechanisms, including <span style='color: white;'>OAuth and JWT with Django authentication</span>, to enhance security for web and mobile application API access",
      "Scaled backend services to <span style='color: white;'>handle 10x increased user load</span> during peak traffic periods",
      "Ranked in the <span style='color: white;'>top 500 out of 22,000 participants</span>, earning a certificate of proficiency in backend development",
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

];

const portfolio = [
  {
    name: "Fintech Wallet Application",
    description:
      "A complete fintech with all the financial features",
    image: finwallet,
    url: "https://fintech-wallet-app.vercel.app/",
  },
  {
    name: "Bookola",
    description:
      "A digital library featuring AI-driven personality profiling and a WebSocket-powered chat system.",
    image: bookola,
    url: "https://bookola.onrender.com/",
  },
  {
    name: "TwitterBot",
    description:
      "An Python Bot For Automating Following, Liking and Posting Content On The X Platform.",
    image: twitterbot,
    url: "https://github.com/trevorjob/twitter-bot",
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
];

export { experiences, portfolio };
