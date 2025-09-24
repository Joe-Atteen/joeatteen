// BlogPostDetail.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // If using React Router
import PropTypes from "prop-types";
import SafeMarkdown from "./SafeMarkdown";
import CopyableCodeBlock from "./CopyableCodeBlock";
import "./prose.css";

// Reusable components
const BackToTop = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 bg-[#ecc9b0] hover:bg-[#e3a477] text-[#1a1a1a] p-3 rounded-full shadow-lg transition-all duration-300 z-50 opacity-80 hover:opacity-100"
    aria-label="Back to top"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

const ShareButton = ({ platform, url, title }) => {
  const getShareUrl = () => {
    switch (platform) {
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
      default:
        return "#";
    }
  };

  const getIcon = () => {
    switch (platform) {
      case "twitter":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        );
      case "facebook":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={getShareUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-[#252525] hover:bg-[#333] text-white transition-all duration-300"
      aria-label={`Share on ${platform}`}
    >
      {getIcon()}
    </a>
  );
};

ShareButton.propTypes = {
  platform: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// Function to get related posts based on tags and category
const getRelatedPosts = (currentPost, currentSlug) => {
  // Mock posts data for related posts functionality
  const allPosts = [
    {
      slug: "react-hooks",
      title: "Understanding React Hooks: A Comprehensive Guide",
      excerpt:
        "React Hooks have revolutionized how we write React components, allowing function components to use state and other React features.",
      category: "React",
      read_time: "8",
      image_url: "https://picsum.photos/id/0/800/400",
      tags: ["react", "javascript", "hooks", "frontend"],
      content: "# Understanding React Hooks...",
    },
    {
      slug: "tailwind-tips",
      title: "Advanced Tailwind CSS Techniques for Modern Web Design",
      excerpt:
        "Discover advanced Tailwind CSS techniques to create beautiful, responsive designs with utility-first CSS approach.",
      category: "CSS",
      read_time: "12",
      image_url: "https://picsum.photos/id/1/800/400",
      tags: ["css", "tailwind", "design", "frontend"],
      content: "# Advanced Tailwind CSS Techniques...",
    },
    {
      slug: "nextjs-vs-react",
      title: "Next.js vs React: When to Use Each Framework",
      excerpt:
        "A comprehensive comparison between Next.js and React to help you choose the right framework for your project.",
      category: "React",
      read_time: "10",
      image_url: "https://picsum.photos/id/2/800/400",
      tags: ["react", "nextjs", "framework", "frontend"],
      content: "# Next.js vs React...",
    },
    {
      slug: "javascript-es6",
      title: "Modern JavaScript ES6+ Features You Should Know",
      excerpt:
        "Explore the latest JavaScript features that will make your code more readable, efficient, and maintainable.",
      category: "JavaScript",
      read_time: "15",
      image_url: "https://picsum.photos/id/3/800/400",
      tags: ["javascript", "es6", "programming", "frontend"],
      content: "# Modern JavaScript ES6+ Features...",
    },
    {
      slug: "react-performance",
      title: "Optimizing React Performance: Best Practices",
      excerpt:
        "Learn how to optimize your React applications for better performance using memoization, lazy loading, and other techniques.",
      category: "React",
      read_time: "14",
      image_url: "https://picsum.photos/id/4/800/400",
      tags: ["react", "performance", "optimization", "frontend"],
      content: "# Optimizing React Performance...",
    },
    {
      slug: "css-grid-flexbox",
      title: "CSS Grid vs Flexbox: A Complete Comparison",
      excerpt:
        "Understanding when to use CSS Grid vs Flexbox with practical examples and best practices for modern web layouts.",
      category: "CSS",
      read_time: "11",
      image_url: "https://picsum.photos/id/5/800/400",
      tags: ["css", "grid", "flexbox", "layout"],
      content: "# CSS Grid vs Flexbox...",
    },
  ];

  // Filter out current post
  const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);

  if (!currentPost || !currentPost.tags) {
    // If no current post or tags, return first 3 posts
    return otherPosts.slice(0, 3);
  }

  // Calculate relevance score for each post
  const scoredPosts = otherPosts.map((post) => {
    let score = 0;

    // Same category gets higher score
    if (post.category === currentPost.category) {
      score += 3;
    }

    // Shared tags get points
    if (currentPost.tags && post.tags) {
      const sharedTags = currentPost.tags.filter((tag) =>
        post.tags.includes(tag)
      );
      score += sharedTags.length * 2;
    }

    return { ...post, relevanceScore: score };
  });

  // Sort by relevance score (highest first) and return top 3
  return scoredPosts
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3);
};

// Main component
const BlogPostDetail = () => {
  const { slug } = useParams(); // Get the slug from URL params
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const apiBaseUrl =
    import.meta.env.VITE_API_URL || "https://atteen-blog.vercel.app";

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setLoading(true);

        // Try to fetch from the real API first
        try {
          const response = await fetch(
            `${apiBaseUrl}/api/public-posts/${slug}`
          );

          if (response.ok) {
            const data = await response.json();

            // Debug: Log the actual content format
            console.log("Raw content from API:", data.post.content);
            console.log("Content type:", typeof data.post.content);
            console.log(
              "First 200 characters:",
              data.post.content?.substring(0, 200)
            );

            setPost(data.post);
            // Set the page title
            document.title = `${data.post.title} | Joe Atteen's Blog`;
            return; // Exit if successful
          }
        } catch (apiError) {
          console.log("API fetch failed, using mock data:", apiError);
        }

        // If API fails, use mock data for development
        console.log("Using mock data for development");

        // Mock post data - this will be used when the API is not available
        // This helps during development and testing
        const mockPosts = {
          "react-hooks": {
            title: "Understanding React Hooks: A Comprehensive Guide",
            content: `# Understanding React Hooks: A Comprehensive Guide

## Introduction

React Hooks have revolutionized how we write React components, allowing function components to use state and other React features without writing a class. This guide will walk you through the most important hooks and how to use them effectively.

## useState Hook

The useState hook is the most basic hook for managing state in function components:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The useEffect hook allows you to perform side effects in function components:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
    
    // Clean-up function (optional)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Only re-run if count changes
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useContext Hook

The useContext hook makes it easy to consume React context:

\`\`\`javascript
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am styled by theme context!</button>;
}
\`\`\`

## Best Practices

1. **Don't call Hooks inside loops, conditions, or nested functions**
2. **Only call Hooks from React function components**
3. **Keep the dependency array accurate**
4. **Use the functional update form when new state depends on old state**

> "Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class." - React Documentation

## Conclusion

React Hooks have made functional components more powerful and have simplified state management and side effects in React applications. With a solid understanding of hooks, you can write more concise and readable React code.`,
            image_url: "https://picsum.photos/id/0/800/400",
            created_at: "2023-10-15T10:30:00Z",
            read_time: "8",
            category: "React",
            author: {
              name: "Joe Atteen",
              bio: "React developer and UI/UX enthusiast focused on building clean, performant web applications.",
              avatar: "https://i.pravatar.cc/150?img=32",
              social: {
                twitter: "https://twitter.com/joe_atteen",
                linkedin: "https://linkedin.com/in/joe-atteen",
                github: "https://github.com/Joe-Atteen",
              },
            },
            tags: ["react", "javascript", "hooks", "frontend"],
          },
          "tailwind-tips": {
            title: "Advanced Tailwind CSS Techniques for Modern Web Design",
            content: `# Advanced Tailwind CSS Techniques for Modern Web Design

## The Power of Utility-First CSS

Tailwind CSS has changed how many of us approach styling. Instead of creating custom CSS classes, we compose designs directly in our markup with utility classes. This approach has several benefits:

- **Faster development time** - no switching between files
- **Smaller CSS bundle** - only include what you use
- **Consistent design constraints** - work within a design system

## Creating Custom Design Systems

While Tailwind provides excellent defaults, the real power comes from customization:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#ecc9b0',
        'brand-secondary': '#1a1a1a',
        'brand-accent': '#e3a477',
      },
      fontFamily: {
        'gt': ['GT Walsheim', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['visited'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
\`\`\`

## Responsive Design Best Practices

Tailwind makes responsive design incredibly intuitive with its mobile-first approach:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Content that changes from 1 column on mobile to 2 columns on medium screens and 3 columns on large screens -->
</div>
\`\`\`

## Dark Mode Implementation

Implementing dark mode is straightforward with Tailwind:

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  <!-- Content that changes color in dark mode -->
</div>
\`\`\`

## Animation Techniques

Tailwind's built-in animation utilities cover most common needs:

\`\`\`html
<button class="transform hover:scale-105 transition-all duration-300">
  Hover to scale
</button>
\`\`\`

## Performance Optimization

- Use PurgeCSS to remove unused styles in production
- Consider using JIT mode for development speed
- Group related utilities with @apply in your CSS

> "Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny." - Adam Wathan, Creator of Tailwind CSS

## Conclusion

Tailwind CSS provides a powerful set of tools that can dramatically improve your workflow and help you build consistent, responsive interfaces. By learning these advanced techniques, you can take full advantage of what Tailwind has to offer.`,
            image_url: "https://picsum.photos/id/3/800/400",
            created_at: "2023-11-22T14:15:00Z",
            read_time: "6",
            category: "CSS",
            author: {
              name: "Joe Atteen",
              bio: "Frontend developer specializing in modern CSS and design systems.",
              avatar: "https://i.pravatar.cc/150?img=32",
              social: {
                twitter: "https://twitter.com/joe_atteen",
                linkedin: "https://linkedin.com/in/joe-atteen",
                github: "https://github.com/Joe-Atteen",
              },
            },
            tags: ["tailwind", "css", "design", "frontend"],
          },
          "nextjs-vs-react": {
            title: "Next.js vs. React: When to Use Each Framework",
            content: `# Next.js vs. React: When to Use Each Framework

## Understanding the Relationship

First, let's clarify: Next.js is a React framework, not an alternative to React. React is a JavaScript library for building user interfaces, while Next.js is a comprehensive framework built on top of React that provides additional structure, features, and optimizations.

## Key Differences

### Routing

**React:**
- Requires additional libraries like React Router
- Client-side routing by default
- Manual setup for complex routes

\`\`\`javascript
// React with React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

**Next.js:**
- Built-in file-system based routing
- Automatic route creation based on files in pages directory
- Support for dynamic routes out-of-the-box

\`\`\`
pages/
├── index.js         // → /
├── about.js         // → /about
└── blog/
    └── [slug].js    // → /blog/:slug
\`\`\`

### Rendering Methods

**React:**
- Client-side rendering by default
- Server-side rendering requires additional setup

**Next.js:**
- Multiple rendering methods:
  - Static Site Generation (SSG)
  - Server-Side Rendering (SSR)
  - Incremental Static Regeneration (ISR)
  - Client-side rendering

\`\`\`javascript
// Next.js SSG example
export async function getStaticProps() {
  const posts = await fetchBlogPosts();
  
  return {
    props: { posts }
  };
}

// Next.js SSR example
export async function getServerSideProps() {
  const data = await fetchDynamicData();
  
  return {
    props: { data }
  };
}
\`\`\`

## When to Use React

- Simple, single-page applications
- When you need complete control over your application structure
- When you want to integrate with existing systems
- When you're building a library or a component to be used by other applications

## When to Use Next.js

- For content-focused websites that benefit from SEO
- When you need both static and dynamic pages
- For large applications that require structured scalability
- When you want built-in performance optimizations (image optimization, font optimization, etc.)

## Hybrid Approaches

Modern web applications often use hybrid approaches:

- Next.js for the main website structure and SEO-important pages
- Client-side React components for dynamic interfaces within pages
- React libraries for complex state management across the application

> "Choose the right tool for the right job. Sometimes that's plain React, sometimes it's Next.js, and often it's a combination of both." - Web Development Best Practices

## Conclusion

Both React and Next.js have their place in modern web development. React offers flexibility and is great for highly interactive applications, while Next.js provides structure and optimization for content-heavy websites. Understanding the strengths of each helps you make the right architectural decisions for your projects.`,
            image_url: "https://picsum.photos/id/6/800/400",
            created_at: "2023-12-05T08:45:00Z",
            read_time: "7",
            category: "Web Development",
            author: {
              name: "Joe Atteen",
              bio: "Fullstack developer with a focus on React ecosystems and modern web architecture.",
              avatar: "https://i.pravatar.cc/150?img=32",
              social: {
                twitter: "https://twitter.com/joe_atteen",
                linkedin: "https://linkedin.com/in/joe-atteen",
                github: "https://github.com/Joe-Atteen",
              },
            },
            tags: ["nextjs", "react", "javascript", "frameworks"],
          },
        };

        // Use the mock post that matches the slug, or a default one
        const mockPost = mockPosts[slug] || {
          title: `Blog Post: ${slug}`,
          content: `# This is a mock blog post for ${slug}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.\n\n## Subheading\n\nMore content here with **bold text** and *italic text*.\n\n- List item 1\n- List item 2\n- List item 3\n\n### Code example\n\n\`\`\`javascript\nconst greeting = "Hello world!";\nconsole.log(greeting);\n\`\`\`\n\n> This is a blockquote that demonstrates the styling for the markdown renderer.`,
          image_url: "https://picsum.photos/800/400",
          created_at: new Date().toISOString(),
          read_time: "5",
          category: "Development",
          author: {
            name: "Joe Atteen",
            bio: "Web developer and designer with a passion for creating beautiful user experiences.",
            avatar: "https://i.pravatar.cc/150?img=32",
            social: {
              twitter: "https://twitter.com/joe_atteen",
              linkedin: "https://linkedin.com/in/joe-atteen",
              github: "https://github.com/Joe-Atteen",
            },
          },
          tags: ["react", "javascript", "web-development"],
        };

        setPost(mockPost);
        document.title = `${mockPost.title} | Joe Atteen's Blog`;
      } catch (err) {
        console.error("Error in blog post detail:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    // Show back to top button when scrolled down
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    if (slug) {
      fetchPostDetails();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.title = "Joe Atteen"; // Reset title on unmount
    };
  }, [slug, apiBaseUrl]);

  // Fetch related posts from API or use fallback
  useEffect(() => {
    const fetchRelatedPosts = async () => {
      if (!post) return; // Wait for main post to load first

      try {
        // Try to fetch from the API first
        const response = await fetch(`${apiBaseUrl}/api/public-posts`);

        if (response.ok) {
          const data = await response.json();

          // Filter out current post and get related posts
          const otherPosts = data.posts.filter((p) => p.slug !== slug);

          if (otherPosts.length > 0) {
            // Calculate relevance and get top 3
            const scoredPosts = otherPosts.map((p) => {
              let score = 0;

              // Same category gets higher score
              if (p.category === post.category) {
                score += 3;
              }

              // Shared tags get points (if both posts have tags)
              if (post.tags && p.tags) {
                const sharedTags = post.tags.filter((tag) =>
                  p.tags.includes(tag)
                );
                score += sharedTags.length * 2;
              }

              return { ...p, relevanceScore: score };
            });

            const topRelated = scoredPosts
              .sort((a, b) => b.relevanceScore - a.relevanceScore)
              .slice(0, 3);

            setRelatedPosts(topRelated);
            return;
          }
        }
      } catch (apiError) {
        console.log("Related posts API fetch failed:", apiError);
      }

      // Fallback to hardcoded related posts
      console.log("Using hardcoded related posts as fallback");
      const fallbackPosts = getRelatedPosts(post, slug);
      setRelatedPosts(fallbackPosts);
    };

    fetchRelatedPosts();
  }, [post, slug, apiBaseUrl]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#1a1a1a]">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 mt-4 w-12 h-12">
            <div className="animate-spin h-12 w-12 border-4 border-[#ecc9b0] border-t-transparent rounded-full"></div>
          </div>
        </div>
        <p className="mt-6 text-[#a0a0a0] font-gt-light">Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#1a1a1a]">
        <div className="max-w-2xl w-full bg-[#252525] rounded-xl p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-red-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h2 className="text-2xl font-gt-semibold text-white mb-4">
              Something went wrong
            </h2>
            <p className="text-[#d1d1d1] mb-6">{error}</p>
            <Link
              to="/#blog"
              className="px-6 py-2 bg-[#ecc9b0] text-[#1a1a1a] rounded-md font-gt-medium hover:bg-[#e3a477] transition-all duration-300"
            >
              Return to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#1a1a1a]">
        <div className="max-w-2xl w-full bg-[#252525] rounded-xl p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#ecc9b0] mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-gt-semibold text-white mb-4">
              Post Not Found
            </h2>
            <p className="text-[#d1d1d1] mb-6">
              The article you&apos;re looking for might have been moved or
              doesn&apos;t exist.
            </p>
            <Link
              to="/#blog"
              className="px-6 py-2 bg-[#ecc9b0] text-[#1a1a1a] rounded-md font-gt-medium hover:bg-[#e3a477] transition-all duration-300"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#1a1a1a] pb-16 fade-in">
      {showBackToTop && <BackToTop />}

      {/* Hero Section with Featured Image */}
      <div className="relative w-full">
        {post.image_url ? (
          <div className="relative h-[50vh] sm:h-[60vh] w-full">
            <div className="absolute inset-0">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-transparent to-[#1a1a1a] opacity-90"></div>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-4 md:p-8 text-white">
              <div className="container mx-auto max-w-4xl">
                {post.category && (
                  <span className="inline-block bg-[#ecc9b0] text-[#1a1a1a] font-gt-medium px-3 py-1 text-sm rounded-full mb-4">
                    {post.category}
                  </span>
                )}
                <h1 className="text-3xl md:text-5xl font-gt-bold leading-tight mb-4 text-white">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-[#d1d1d1]">
                  <time
                    dateTime={post.created_at}
                    className="font-gt-light flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {formatDate(post.created_at)}
                  </time>

                  {post.read_time && (
                    <span className="font-gt-light flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {post.read_time} min read
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-32 pb-8 px-4">
            <div className="container mx-auto max-w-4xl">
              {post.category && (
                <span className="inline-block bg-[#ecc9b0] text-[#1a1a1a] font-gt-medium px-3 py-1 text-sm rounded-full mb-4">
                  {post.category}
                </span>
              )}
              <h1 className="text-3xl md:text-5xl font-gt-bold leading-tight mb-4 text-white">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#d1d1d1]">
                <time
                  dateTime={post.created_at}
                  className="font-gt-light flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {formatDate(post.created_at)}
                </time>

                {post.read_time && (
                  <span className="font-gt-light flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {post.read_time} min read
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Social Share */}
          <div className="my-8 flex items-center justify-end">
            {/* <div className="flex space-x-2">
              <ShareButton
                platform="twitter"
                url={currentUrl}
                title={post.title}
              />
              <ShareButton
                platform="facebook"
                url={currentUrl}
                title={post.title}
              />
              <ShareButton
                platform="linkedin"
                url={currentUrl}
                title={post.title}
              />
            </div> */}

            <Link
              to="/#blog"
              className="text-[#ecc9b0] hover:text-[#e3a477] font-gt-medium text-sm flex items-center transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to articles
            </Link>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="post-content mb-8">
              {/* Try our SafeMarkdown component which handles errors gracefully */}
              <div className="text-[#f1f1f1] leading-relaxed">
                <SafeMarkdown
                  components={{
                    h1: ({ ...props }) => (
                      <h1
                        className="text-3xl font-gt-bold text-white my-6"
                        {...props}
                      />
                    ),
                    h2: ({ ...props }) => (
                      <h2
                        className="text-2xl font-gt-semibold text-white my-5"
                        {...props}
                      />
                    ),
                    h3: ({ ...props }) => (
                      <h3
                        className="text-xl font-gt-medium text-white my-4"
                        {...props}
                      />
                    ),
                    p: ({ ...props }) => (
                      <p className="my-4 text-[#e1e1e1]" {...props} />
                    ),
                    a: ({ ...props }) => (
                      <a
                        className="text-[#ecc9b0] underline hover:text-[#e3a477]"
                        {...props}
                      />
                    ),
                    ul: ({ ...props }) => (
                      <ul className="list-disc pl-6 my-4" {...props} />
                    ),
                    ol: ({ ...props }) => (
                      <ol className="list-decimal pl-6 my-4" {...props} />
                    ),
                    li: ({ ...props }) => <li className="mb-2" {...props} />,
                    blockquote: ({ ...props }) => (
                      <blockquote
                        className="border-l-4 border-[#ecc9b0] pl-4 italic my-6 text-[#d1d1d1]"
                        {...props}
                      />
                    ),
                    code: ({ className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || "");
                      const isInline =
                        !match && !String(children).includes("\n");

                      return !isInline && match ? (
                        <CopyableCodeBlock className={className}>
                          {String(children).replace(/\n$/, "")}
                        </CopyableCodeBlock>
                      ) : (
                        <code
                          className="bg-[#333] text-[#ecc9b0] px-1 py-0.5 rounded text-sm"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    },
                    img: ({ ...props }) => (
                      <div className="my-6">
                        <img className="rounded-lg w-full h-auto" {...props} />
                      </div>
                    ),
                  }}
                >
                  {post.content}
                </SafeMarkdown>
              </div>
            </div>
          </div>

          {/* Tags if available */}
          {post.tags && post.tags.length > 0 && (
            <div className="my-8">
              <h3 className="text-lg font-gt-medium text-white mb-3">
                Tagged with:
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#333] text-[#d1d1d1] px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio if available */}
          {post.author && (
            <div className="my-12 bg-[#252525] p-6 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {post.author.avatar && (
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#ecc9b0]">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-gt-semibold text-white mb-2">
                    {post.author.name}
                  </h3>
                  {post.author.bio && (
                    <p className="text-[#d1d1d1] text-sm mb-3 font-gt-light">
                      {post.author.bio}
                    </p>
                  )}

                  {post.author.social && (
                    <div className="flex justify-center sm:justify-start space-x-4">
                      {post.author.social.twitter && (
                        <a
                          href={post.author.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ecc9b0] hover:text-[#e3a477]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      )}
                      {post.author.social.linkedin && (
                        <a
                          href={post.author.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ecc9b0] hover:text-[#e3a477]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </a>
                      )}
                      {post.author.social.github && (
                        <a
                          href={post.author.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ecc9b0] hover:text-[#e3a477]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="my-12 flex flex-col sm:flex-row justify-between gap-4">
            {post.prev_post ? (
              <Link
                to={`/blog/${post.prev_post.slug}`}
                className="group flex-1 bg-[#252525] hover:bg-[#2a2a2a] p-4 rounded-lg transition-all flex flex-col items-start justify-center"
              >
                <span className="text-sm text-[#a0a0a0] mb-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous Article
                </span>
                <span className="text-[#ecc9b0] font-gt-medium">
                  {post.prev_post.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}

            {post.next_post ? (
              <Link
                to={`/blog/${post.next_post.slug}`}
                className="group flex-1 bg-[#252525] hover:bg-[#2a2a2a] p-4 rounded-lg transition-all text-right flex flex-col items-end justify-center"
              >
                <span className="text-sm text-[#a0a0a0] mb-1 flex items-center">
                  Next Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="text-[#ecc9b0] font-gt-medium">
                  {post.next_post.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>

          {/* Call to Action */}
          <div className="my-12 bg-gradient-to-r from-[#252525] to-[#2a2a2a] p-8 rounded-xl text-center">
            <h3 className="text-2xl font-gt-semibold text-white mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-[#d1d1d1] mb-6 max-w-2xl mx-auto">
              Check out more of my articles or get in touch if you&apos;d like
              to discuss any of the topics covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <a
                href="/"
                className="px-5 py-2 bg-[#ecc9b0] hover:bg-[#e3a477] hover:!text-black text-[#1a1a1a] font-gt-medium rounded-md transition-all"
              >
                More Articles
              </a> */}
              <a
                href="/"
                className="px-5 py-2 bg-transparent border border-[#ecc9b0] text-[#ecc9b0] hover:bg-[#ecc9b0] hover:!text-[#1a1a1a] font-gt-medium rounded-md transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Related Posts Section */}
          <div className="mt-20 mb-12">
            <h3 className="text-2xl font-gt-semibold text-white mb-8">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-[#1e1e1e] hover:bg-[#252525] rounded-xl overflow-hidden transition-all duration-300 border border-[#333]"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#ecc9b0] to-[#e3a477] relative overflow-hidden">
                    {relatedPost.image_url ? (
                      <img
                        src={relatedPost.image_url}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-[#1a1a1a] opacity-60"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    {/* <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-[#ecc9b0] text-[#1a1a1a] text-xs font-gt-medium rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="text-[#a0a0a0] text-sm">
                        {relatedPost.read_time} min read
                      </span>
                    </div> */}
                    <h4 className="text-white font-gt-semibold text-lg mb-3 group-hover:text-[#ecc9b0] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-[#a0a0a0] text-sm line-clamp-3 mb-4">
                      {relatedPost.excerpt ||
                        relatedPost.content.substring(0, 120) + "..."}
                    </p>
                    <div className="flex items-center text-[#ecc9b0] text-sm font-gt-medium">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
