// Blog posts data for the portfolio site
export const blogData = [
  {
    id: "1",
    title: "Understanding React Hooks: A Comprehensive Guide",
    excerpt:
      "React Hooks have revolutionized how we write React components, allowing function components to use state and other React features without writing a class. This comprehensive guide covers everything you need to know about React Hooks.",
    slug: "react-hooks",
    image_url: "https://picsum.photos/id/0/800/400",
    category: "React",
    published_at: "2023-10-15T10:30:00Z",
    read_time: "8",
    tags: ["react", "javascript", "hooks", "frontend"],
    featured: true,
  },
  {
    id: "2",
    title: "Advanced Tailwind CSS Techniques for Modern Web Design",
    excerpt:
      "Learn how to leverage Tailwind CSS for creating beautiful, responsive designs while maintaining clean and maintainable code. Discover advanced techniques and best practices.",
    slug: "tailwind-tips",
    image_url: "https://picsum.photos/id/3/800/400",
    category: "CSS",
    published_at: "2023-11-22T14:15:00Z",
    read_time: "6",
    tags: ["css", "tailwind", "design", "frontend"],
    featured: false,
  },
  {
    id: "3",
    title: "Next.js vs. React: When to Use Each Framework",
    excerpt:
      "A detailed comparison between React and Next.js, explaining when to use each technology for optimal results in your web projects. Understanding the trade-offs and benefits.",
    slug: "nextjs-vs-react",
    image_url: "https://picsum.photos/id/6/800/400",
    category: "Web Development",
    published_at: "2023-12-05T08:45:00Z",
    read_time: "7",
    tags: ["nextjs", "react", "javascript", "frameworks"],
    featured: true,
  },
  {
    id: "4",
    title: "Building Responsive Layouts with CSS Grid",
    excerpt:
      "Master CSS Grid to create complex, responsive layouts with ease. Learn the fundamentals and advanced techniques for modern web design.",
    slug: "css-grid-layouts",
    image_url: "https://picsum.photos/id/5/800/400",
    category: "CSS",
    published_at: "2023-12-15T09:30:00Z",
    read_time: "9",
    tags: ["css", "grid", "layout", "responsive"],
    featured: false,
  },
  {
    id: "5",
    title: "JavaScript ES6+ Features Every Developer Should Know",
    excerpt:
      "Explore the most important ES6+ features that modern JavaScript developers use daily. From arrow functions to async/await and beyond.",
    slug: "javascript-es6-features",
    image_url: "https://picsum.photos/id/1/800/400",
    category: "JavaScript",
    published_at: "2024-01-08T11:00:00Z",
    read_time: "10",
    tags: ["javascript", "es6", "modern-js", "development"],
    featured: true,
  },
  {
    id: "6",
    title: "State Management in React: Redux vs Context API",
    excerpt:
      "Compare different state management solutions in React. Learn when to use Redux, Context API, or other state management libraries.",
    slug: "react-state-management",
    image_url: "https://picsum.photos/id/2/800/400",
    category: "React",
    published_at: "2024-01-15T14:20:00Z",
    read_time: "12",
    tags: ["react", "redux", "context-api", "state-management"],
    featured: false,
  },
];

// Get all unique categories
export const getCategories = () => {
  const categories = ["All", ...new Set(blogData.map((post) => post.category))];
  return categories;
};

// Get all unique tags
export const getTags = () => {
  const allTags = blogData.flatMap((post) => post.tags || []);
  return [...new Set(allTags)];
};

// Filter posts by category
export const getPostsByCategory = (category) => {
  if (category === "All") return blogData;
  return blogData.filter((post) => post.category === category);
};

// Get featured posts
export const getFeaturedPosts = () => {
  return blogData.filter((post) => post.featured);
};

// Get post by slug
export const getPostBySlug = (slug) => {
  return blogData.find((post) => post.slug === slug);
};

// Sort posts by date (newest first)
export const sortPostsByDate = (posts) => {
  return [...posts].sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  );
};
