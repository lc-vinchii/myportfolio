export const portfolioConfig = {
  personal: {
    name: "Ron Marvin De Jesus",
    title: "Full Stack Developer",
    bio: "Passionate developer with 5+ years of experience building modern web applications. I love creating efficient, scalable solutions and learning new technologies.",
    email: "ronmarvin.dejesus@gmail.com",
    github: "https://github.com/lc-vinchii",
    linkedin: "https://linkedin.com/in/alexjohnson",
    location: "Bulacan, Philippines",
  },

  techStack: [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      level: "Expert",
      icon: "⚛️",
      description: "Building dynamic user interfaces with hooks and context",
    },
    {
      id: 2,
      name: "Next.js",
      category: "Framework",
      level: "Expert",
      icon: "▲",
      description: "Full-stack React framework for production applications",
    },
    {
      id: 3,
      name: "TypeScript",
      category: "Language",
      level: "Advanced",
      icon: "📘",
      description: "Type-safe JavaScript for better development experience",
    },
    {
      id: 4,
      name: "Node.js",
      category: "Backend",
      level: "Advanced",
      icon: "🟢",
      description: "Server-side JavaScript runtime for scalable applications",
    },
    {
      id: 5,
      name: "PHP",
      category: "Backend",
      level: "Intermediate",
      icon: "🐘",
      description: "something",
    },
    {
      id: 6,
      name: "PostgreSQL",
      category: "Database",
      level: "Intermediate",
      icon: "🐘",
      description: "Relational database for complex data relationships",
    },
    {
      id: 7,
      name: "AWS",
      category: "Cloud",
      level: "Intermediate",
      icon: "☁️",
      description: "Cloud infrastructure and deployment services",
    },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      longDescription:
        "Built a comprehensive e-commerce platform from scratch using Next.js and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory control.",
      image: "/placeholder.svg?height=300&width=500",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      longDescription:
        "Developed a real-time task management application using React and Socket.io. The app supports team collaboration, drag-and-drop task organization, real-time notifications, and progress tracking with beautiful data visualizations.",
      image: "/placeholder.svg?height=300&width=500",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Chart.js"],
      liveUrl: "https://taskmanager-demo.vercel.app",
      githubUrl: "https://github.com/alexjohnson/task-manager",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive maps.",
      longDescription:
        "Created a comprehensive weather dashboard that provides current conditions, 7-day forecasts, and interactive weather maps. Features location-based weather detection, favorite locations, and detailed weather analytics.",
      image: "/placeholder.svg?height=300&width=500",
      techStack: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      featured: false,
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, SEO optimization, and content management.",
      longDescription:
        "Built a full-featured blog platform with markdown support, syntax highlighting, SEO optimization, and a content management system. Includes features like tags, categories, search functionality, and social sharing.",
      image: "/placeholder.svg?height=300&width=500",
      techStack: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      liveUrl: "https://blog-platform-demo.vercel.app",
      githubUrl: "https://github.com/alexjohnson/blog-platform",
      featured: false,
    },
  ],
}
