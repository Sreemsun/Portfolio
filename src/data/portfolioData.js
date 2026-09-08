export const portfolioData = {
  personal: {
    name: "Sreemsun Anand",
    initials: "SA",
    role: "Full Stack & AI Engineer | CS Student",
    tagline: "Building Intelligent Full-Stack & AI Solutions.",
    bio: "Computer Science & Engineering student specializing in React, Node.js, FastAPI, Python, and AI/ML integrations.",
    aboutDetailed: "I am a Computer Science & Engineering student at Christ College of Engineering (APJ Abdul Kalam Technological University) with a strong foundation in full-stack web development, AI/ML integration, and relational & NoSQL databases. Passionate about building real-time weather analytics, AI medical platforms, offline-first mobile applications, and scalable cloud solutions.",
    profileImage: "/profile.png",

    email: "sreemsun21anand@gmail.com",
    phone: "+91-9037705985",
    location: "Kerala, India",
    github: "https://github.com/Sreemsun",
    linkedin: "https://www.linkedin.com/in/sreemsun-anand/",
    resumeUrl: "#"
  },

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ],

  stats: [
    { value: "3+", label: "Major Full-Stack & AI Projects", color: "text-primary" },
    { value: "20+", label: "Tech Stack & Tools", color: "text-secondary" },
    { value: "10+", label: "Professional Certifications", color: "text-tertiary" },
    { value: "3", label: "Hackathons & Achievements", color: "text-primary-container" }
  ],


  skillCategories: [
    {
      title: "Languages",
      icon: "code",
      accentColor: "bg-primary/20 text-primary",
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "layers",
      accentColor: "bg-secondary/20 text-secondary",
      skills: ["React (Vite)", "React Native", "FastAPI", "Flask", "Node.js", "Express.js"]
    },
    {
      title: "Databases",
      icon: "database",
      accentColor: "bg-tertiary/20 text-tertiary",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
    },
    {
      title: "ML / AI & Data",
      icon: "memory",
      accentColor: "bg-primary-container/20 text-primary-container",
      skills: ["Scikit-learn", "Pandas", "Matplotlib", "OpenAI API", "Hugging Face"]
    },
    {
      title: "Tools & DevOps",
      icon: "build",
      accentColor: "bg-secondary/20 text-secondary",
      skills: ["Git", "GitHub", "GitHub Actions", "Vercel", "Render", "Figma"]
    }
  ],

  projects: [
    {
      id: "weatherscope",
      title: "WeatherScope – Advanced Weather Dashboard",
      period: "May 2026 – Jun 2026",
      description: "Developed a full-stack weather dashboard featuring real-time weather monitoring, AQI, UV index, and forecast visualization. Built weather history management, city comparison tools, interactive maps with Leaflet.js, and automated PDF report generation.",
      tags: [
        { name: "React (Vite)", type: "primary" },
        { name: "FastAPI", type: "secondary" },
        { name: "MySQL", type: "tertiary" },
        { name: "OpenWeather API", type: "primary-container" },
        { name: "Leaflet.js", type: "secondary" }
      ],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Sreemsun",
      liveDemoUrl: "#"
    },
    {
      id: "medassist",
      title: "MedAssist – AI Medical Assistance Platform",
      period: "Jan 2026 – Mar 2026",
      description: "Developed an AI-powered medical platform with symptom analysis, digital health record management, and appointment scheduling. Secured using JWT authentication, bcrypt, and Helmet.js, with integrated Python-based ML analytics.",
      tags: [
        { name: "Node.js", type: "primary" },
        { name: "Express.js", type: "secondary" },
        { name: "MongoDB", type: "tertiary" },
        { name: "JWT", type: "primary-container" },
        { name: "OpenAI API", type: "primary" },
        { name: "Python", type: "secondary" }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Sreemsun",
      liveDemoUrl: "#"
    },
    {
      id: "env-monitoring",
      title: "Environmental Monitoring & Alert System",
      period: "Feb 2026 – Apr 2026",
      description: "Built a Flask dashboard for real-time monitoring of weather, AQI, pollution levels, and UV data. Designed a multi-factor environmental risk scoring algorithm with live API integration and seamless cloud deployment.",
      tags: [
        { name: "Python", type: "primary" },
        { name: "Flask", type: "secondary" },
        { name: "SQLite", type: "tertiary" },
        { name: "WeatherAPI", type: "primary-container" },
        { name: "Chart.js", type: "primary" },
        { name: "Leaflet.js", type: "secondary" }
      ],
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Sreemsun",
      liveDemoUrl: "#"
    }
  ],

  experience: [
    {
      title: "Industry Orientation Trainee (Hybrid)",
      company: "Talrop",
      period: "Jan 2025 – Jun 2025",
      description: "Completed structured training in frontend, backend, product engineering, and software development practices. Gained exposure to startup ecosystems, software engineering career paths, professional expectations, and industry execution standards.",
      highlight: true
    }
  ],

  education: [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institution: "Christ College of Engineering, Kerala",
      university: "APJ Abdul Kalam Technological University",
      period: "2023 – 2027",
      description: "CGPA: 7.9 / 10. Focused on Software Development, Data Structures & Algorithms, Database Management Systems, and Artificial Intelligence."
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon (2025)",
      role: "Team Leader",
      project: "Campus360 – AI Student Portfolio Platform",
      description: "Led a six-member team to develop Campus360, an AI-powered student portfolio platform. Successfully shortlisted through institute-level internal screening for Smart India Hackathon 2025.",
      badge: "SIH 2025 Shortlisted"
    },
    {
      title: "HackQuest’25 (2025)",
      role: "Developer & Creator",
      project: "TeachLink – Offline-First Lesson Planning",
      description: "Developed TeachLink, a React Native offline-first mobile application featuring AI-powered lesson planning specifically designed for rural teachers.",
      badge: "HackQuest'25"
    },
    {
      title: "Q-Bit Hackathon (2026)",
      role: "Developer",
      project: "Environmental Monitoring Prototype",
      description: "Developed an Environmental Monitoring prototype that evolved into a complete, production-ready full-stack cloud platform.",
      badge: "Q-Bit Hackathon"
    }
  ],

  certifications: [
    {
      title: "Machine Learning with Python",
      provider: "IBM",
      color: "text-primary"
    },
    {
      title: "Data Visualization with Python",
      provider: "IBM",
      color: "text-secondary"
    },
    {
      title: "Data Analysis with Python",
      provider: "IBM",
      color: "text-tertiary"
    },
    {
      title: "Databases and SQL for Data Science with Python",
      provider: "IBM",
      color: "text-primary-container"
    },
    {
      title: "Python Project for Data Science",
      provider: "IBM",
      color: "text-primary"
    },
    {
      title: "Python for Data Science, AI & Development",
      provider: "IBM",
      color: "text-secondary"
    },
    {
      title: "Data Science Methodology",
      provider: "IBM",
      color: "text-tertiary"
    },
    {
      title: "Tools for Data Science",
      provider: "IBM",
      color: "text-primary-container"
    },
    {
      title: "What is Data Science?",
      provider: "IBM",
      color: "text-primary"
    },
    {
      title: "Introduction to Software Engineering",
      provider: "IBM",
      color: "text-secondary"
    },
    {
      title: "Data Science",
      provider: "NPTEL",
      color: "text-tertiary"
    }
  ]
};


