// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    shortDescription: 'Full-stack e-commerce platform with cart and payment integration.',
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    image: '../assets/images/project1.png', // Add your image path
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/andyds1/project1',
    features: [
      'User authentication and authorization',
      'Shopping cart with real-time updates',
      'Stripe payment integration',
      'Admin dashboard for product management',
      'Responsive design for all devices'
    ],
    technologies: 'Built with React for the frontend, Node.js and Express for the backend, and MongoDB for the database. Implemented JWT authentication and integrated Stripe for secure payments.'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather and 7-day forecasts using external APIs.',
    shortDescription: 'Weather app with current conditions and 7-day forecasts.',
    tags: ['Python', 'Flask', 'API', 'CSS'],
    image: '../assets/images/project2.png',
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/andyds1/project2',
    features: [
      'Real-time weather data from OpenWeatherMap API',
      '7-day weather forecast',
      'Location search functionality',
      'Beautiful UI with weather icons',
      'Temperature unit conversion (C/F)'
    ],
    technologies: 'Developed using Python Flask for the backend, integrated with OpenWeatherMap API for weather data, and styled with custom CSS for an intuitive user interface.'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects, skills, and contact information.',
    shortDescription: 'Personal portfolio with project showcase and contact form.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '../assets/images/project3.png',
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/andyds1/project3',
    features: [
      'Fully responsive design',
      'Smooth scrolling navigation',
      'Project gallery with filtering',
      'Contact form with validation',
      'Dark mode support'
    ],
    technologies: 'Built with vanilla HTML, CSS, and JavaScript. Focused on performance optimization and accessibility. Implemented custom animations and transitions for enhanced user experience.'
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    shortDescription: 'Collaborative task manager with real-time sync.',
    tags: ['Node.js', 'Express', 'Socket.io', 'PostgreSQL'],
    image: '../assets/images/project4.png',
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/andyds1/project4',
    features: [
      'Real-time task updates with Socket.io',
      'User roles and permissions',
      'Task assignment and tracking',
      'File attachments and comments',
      'Email notifications'
    ],
    technologies: 'Backend built with Node.js and Express, using PostgreSQL for data persistence. Implemented real-time features with Socket.io and email notifications with Nodemailer.'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A modern blogging platform with markdown support, categories, and user comments.',
    shortDescription: 'Blogging platform with markdown and commenting system.',
    tags: ['Vue.js', 'TypeScript', 'Firebase'],
    image: '../assets/images/project5.png',
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/andyds1/project5',
    features: [
      'Markdown editor for posts',
      'Category and tag system',
      'User authentication with Firebase',
      'Comment system with moderation',
      'SEO optimized'
    ],
    technologies: 'Frontend built with Vue.js 3 and TypeScript for type safety. Firebase used for authentication, database, and hosting. Implemented markdown parsing and syntax highlighting.'
  },
  {
    id: 6,
    title: 'Inventory System',
    description: 'An inventory management system for small businesses with stock tracking and reporting.',
    shortDescription: 'Business inventory system with stock tracking.',
    tags: ['C#', '.NET', 'SQL Server'],
    image: '../assets/images/project6.png',
    demoLink: 'https://demo-link.com',
    githubLink: 'https://github.com/andyds1/project6',
    features: [
      'Product and stock management',
      'Low stock alerts',
      'Sales and purchase tracking',
      'Inventory reports and analytics',
      'Barcode scanning support'
    ],
    technologies: 'Developed using C# and .NET Core with Entity Framework. SQL Server for database management. Implemented RESTful API and responsive admin interface.'
  }
]
