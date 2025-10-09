export const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Web Development in 2025',
    date: '2025-01-15',
    author: 'Admin',
    tags: ['webdev', 'tutorial', 'beginners'],
    excerpt: 'A comprehensive guide to starting your journey in web development. Learn about the essential tools, languages, and frameworks you need to know in 2025.',
    content: `
      <p>Web development continues to evolve rapidly, and 2025 brings exciting new opportunities for aspiring developers. Whether you're just starting out or looking to refresh your skills, this guide will help you navigate the modern web development landscape.</p>
      
      <h3>Essential Technologies</h3>
      <p>The foundation of web development remains HTML, CSS, and JavaScript. These three technologies form the backbone of every website you'll build. HTML provides structure, CSS handles styling, and JavaScript adds interactivity.</p>
      
      <h3>Modern Frameworks</h3>
      <p>Today's web developers have access to powerful frameworks that streamline development. React, Vue, and Svelte are popular choices for building dynamic user interfaces. Each has its strengths, and the best choice depends on your project requirements.</p>
      
      <h3>Development Tools</h3>
      <p>A good development environment is crucial. VSCode remains the most popular code editor, offering excellent extensions and customization. Git for version control is essential, and familiarity with the command line will serve you well.</p>
      
      <h3>Next Steps</h3>
      <p>Start with the basics, build projects, and don't be afraid to experiment. The web development community is welcoming and full of resources. Happy coding!</p>
    `
  },
  {
    id: 2,
    title: 'CSS Grid vs Flexbox: When to Use Each',
    date: '2025-01-10',
    author: 'Admin',
    tags: ['css', 'tutorial', 'design'],
    excerpt: 'Understanding the differences between CSS Grid and Flexbox will help you choose the right layout tool for your projects. Here\'s a practical comparison.',
    content: `
      <p>CSS Grid and Flexbox are two powerful layout systems in CSS, but they excel in different scenarios. Understanding when to use each will make you a more effective developer.</p>
      
      <h3>Flexbox: One-Dimensional Layouts</h3>
      <p>Flexbox is perfect for laying out items in a single dimension - either in a row or a column. It's ideal for navigation bars, card layouts, and centering content. Flexbox excels when you need to distribute space among items or align them along a single axis.</p>
      
      <h3>CSS Grid: Two-Dimensional Layouts</h3>
      <p>CSS Grid shines when you need to control both rows and columns simultaneously. It's the go-to choice for page layouts, complex card grids, and any design where you need precise control over both dimensions.</p>
      
      <h3>Using Both Together</h3>
      <p>The best approach often involves using both. Use Grid for the overall page structure, then use Flexbox for components within grid items. This combination gives you the flexibility and power to create any layout.</p>
    `
  },
  {
    id: 3,
    title: 'Building Responsive Websites Without Media Queries',
    date: '2025-01-05',
    author: 'Admin',
    tags: ['css', 'responsive', 'advanced'],
    excerpt: 'Modern CSS offers intrinsic design techniques that reduce the need for media queries. Learn how to build fluid, responsive layouts that adapt naturally.',
    content: `
      <p>While media queries are powerful, modern CSS provides techniques for creating responsive designs that adapt naturally to any screen size without explicit breakpoints.</p>
      
      <h3>Fluid Typography</h3>
      <p>Using clamp() and viewport units, you can create typography that scales smoothly between minimum and maximum sizes. This eliminates the need for multiple font-size declarations at different breakpoints.</p>
      
      <h3>Container Queries</h3>
      <p>Container queries allow components to respond to their container's size rather than the viewport. This makes components truly modular and reusable across different contexts.</p>
      
      <h3>Intrinsic Layouts</h3>
      <p>Techniques like auto-fit, minmax(), and flexbox wrapping create layouts that naturally adapt. Grid with auto-fit and minmax() can create responsive card layouts without a single media query.</p>
      
      <h3>When to Still Use Media Queries</h3>
      <p>Media queries remain useful for major layout shifts and hiding/showing content. The goal isn't to eliminate them entirely, but to reduce reliance on them for basic responsiveness.</p>
    `
  }
]