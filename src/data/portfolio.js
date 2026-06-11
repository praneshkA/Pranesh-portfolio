/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO DATA  –  Edit everything here to customise the site
 * ─────────────────────────────────────────────────────────────
 */

export const personal = {
  name: "Pranesh",
  role: "Full-Stack Developer",
  tagline: "Building real-world web apps with the MERN stack.",
  location: "Tamil Nadu, India",
  email: "praneshalagesan@gmail.com",
  phone: "9976121007",
  github: "https://github.com/praneshkA",       // ← replace with real link
  linkedin: "https://www.linkedin.com/in/pranesh-k-a-074267296/", // ← replace with real link
  resumeLink: "https://drive.google.com/file/d/1V3nkWTPOPs_Xpn-54IYNXdtlnjGNjMRV/view?usp=drive_link",                                  // ← replace with Google Drive link
  about: `A passionate Full Stack Developer currently pursuing B.Tech in Information Technology at Sri Eshwar College of Engineering. I specialize in creating innovative web solutions using modern technologies and frameworks.

My journey in software development began with a curiosity about how things work behind the scenes. This curiosity has evolved into a deep passion for creating user-centric applications that solve real-world problems.

I believe in continuous learning and staying updated with the latest technologies. My goal is to contribute to meaningful projects that make a positive impact on people's lives.`,
};

export const skills = [
  { name: "React.js",       category: "Frontend" },
  { name: "Next.js",        category: "Frontend" },
  { name: "JavaScript",     category: "Frontend" },
  { name: "HTML5 / CSS3",   category: "Frontend" },
  { name: "Tailwind CSS",   category: "Frontend" },
  { name: "Node.js",        category: "Backend"  },
  { name: "Express.js",     category: "Backend"  },
  { name: "REST APIs",      category: "Backend"  },
  { name: "MongoDB",        category: "Database" },
  { name: "SQL / MySQL",    category: "Database" },
  { name: "AWS (EC2, RDS)", category: "Cloud"    },
  { name: "Terraform",      category: "Cloud"    },
  { name: "Jenkins CI/CD",  category: "Cloud"    },
  { name: "Java",           category: "Language" },
  { name: "JavaScript.",     category: "Language" },
  { name: "Python",         category: "Language" },
  { name: "C",              category: "Language" },
  { name: "Git / GitHub",   category: "Tools"    },
  { name: "Cloudinary",     category: "Tools"    },
];

export const projects = [
  {
    title: "Crispii - E-Commerce Platform",
    description:
      "Full-stack e-commerce platform for traditional snacks & sweets. Took a local village manufacturer from offline to online with admin dashboard, product management, order tracking, and status updates.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
    liveLink : "https://crispii.live/",
    githubLink: "https://github.com/praneshkA/crispii",
    featured: true,
    image: "/assets/crispii.png",
  },
  {
    title: "CI/CD 2-Tier AWS Deployment",
    description:
      "Full CI/CD pipeline with Jenkins and Terraform deploying a 2-tier AWS architecture (EC2 + RDS). Automated infrastructure provisioning via Infrastructure as Code, cutting deployment time significantly.",
    tech: ["AWS", "Terraform", "Jenkins", "EC2", "RDS MySQL", "Python Flask", "Nginx"],
    liveLink: "#",
    githubLink: "https://github.com/praneshkA/devops-2tier-cicd",
    featured: true,
      image: "/assets/cloud.png",
  },
  {
    title: "PrimeFix – Service Booking App",
    description:
      "Secure platform connecting users with household repair technicians. Features real-time map tracking via Leaflet, secure payments, and role-based dashboards for users, admins, and technicians.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Leaflet API"],
    liveLink: "https://unrivaled-fairy-06e33f.netlify.app/",
    githubLink: "https://github.com/praneshkA/PrimeFix",
    featured: true,
    image: "/assets/primefix.png",
  },
  
  {
  title: "ShoppingCart- E-Commerce Platform",
  description:
    "Developed a full-stack e-commerce platform using the MERN stack with user authentication, product search and filtering, shopping cart management, order tracking, and a responsive UI for mobile and desktop. Implemented RESTful APIs, MongoDB database management, and scalable frontend design.",
  tech: [
    "MongoDB","Express.js","React.js","Node.js","RESTful APIs","JWT Authentication","CSS",
  ],
  liveLink: "https://stylecart12.netlify.app/",
  githubLink: "https://github.com/praneshkA/ShoppingCart/tree/main/frontend",
  featured: true,
  image: "/assets/e-commerce.png",
},
{
  title: "RWA Member Info Panel",
  description:
    "Built a Next.js-based RWA member management portal for viewing and managing community member information. Implemented member directory, admin panel, profile management, authentication, and CRUD operations using MongoDB and Mongoose.",
  tech: [
    "Next.js",
    "React.js",
    "JavaScript",
    "MongoDB",
    "Mongoose",
    "NextAuth.js",
    "CSS Modules",
    "Vercel",
  ],
  liveLink: "https://rwa-info-panel.vercel.app/",
  githubLink: "https://github.com/praneshkA/RWA-info-panel/tree/main",
  featured: true,
  image: "/assets/RWA.png",
},
{
  title: "SnapLink Analytics",
  description:
    "Developed a full-stack URL shortener with analytics using the MERN stack. The platform allows users to create short links, manage URLs, track click counts, view recent visits, generate QR codes, use custom aliases, and access a responsive dashboard with secure JWT authentication.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "JWT Authentication",
    "NanoID",
    "Axios",
    "React Router",
    "Recharts",
    "Tailwind CSS",
    "Netlify",
    "Render",
  ],
  liveLink: "https://katomaran-url.netlify.app",
  githubLink: "https://github.com/praneshkA/URL-Shortener",
  featured: true,
  image: "/assets/URL.png",
}

];

export const education = [
  {
    degree: "B.Tech — Information Technology",
    institution: "Sri Eshwar College of Engineering",
    period: "2023 – 2027",
    grade: "CGPA: 6.90 (till 5th sem)",
  },
  {
    degree: "HSC (Class XII)",
    institution: "Srinivasa Vidhyalaya Matric.Hr.Sec School",
    period: "2022 – 2023",
    grade: "77%",
  },
  {
    degree: "SSLC (Class X)",
    institution: "Srinivasa Vidhyalaya Matric.Hr.Sec School",
    period: "2020 – 2021",
    grade: "Pass",
  },
];

export const experience = [
  {
    role: "MERN Stack Intern",
    company: "Better Tomorrow",
    period: "2025  ·  3 weeks",
    description:
      "Hands-on full-stack internship covering frontend design, RESTful API development, MongoDB database management, JWT authentication, and Redux state management. Built and deployed a complete MERN project following industry best practices.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export const certifications = [
  { title: "Full-Stack Web Development", issuer: "Udemy",      year: "2025" },
  { title: "Java Programming",           issuer: "Udemy",      year: "2024" },
  { title: "SQL – Basic & Intermediate", issuer: "HackerRank", year: "2024" },
 { title: "Ethical Hacking",             issuer: "Udemy",      year: "2024" },
 { title: "Python and flask framwork",   issuer: "Udemy",      year: "2023" },
  { title: "React.JS Crash Course",   issuer: "Udemy",      year: "2024" },
  { title: "Mastering Data Structures & Algorithms using C and C++",   issuer: "Udemy",      year: "2025" },



];

export const achievements = [
  "LeetCode – Solved 250+ problems",
  "LeetCode – 1500+ contest rating",
  "SkillRack – 600+ problems solved",
];
