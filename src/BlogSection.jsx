// BlogSection.jsx for your React portfolio
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  // Format date if available
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn(
        "Invalid published_at date:",
        dateString,
        "for post:",
        post.title
      );
      return "";
    }
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Debug log
  console.log("BlogCard post object:", post);
  console.log(
    "BlogCard post.published_at:",
    post.published_at,
    "for post:",
    post.title
  );

  return (
    <div className="bg-[#252525] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      {post.image_url ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
        </div>
      ) : (
        <div className="relative h-32 bg-gradient-to-r from-[#2c2c2c] to-[#1c1c1c]">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#ecc9b0] opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 14.25v-2.625a3.75 3.75 0 00-3.75-3.75h-1.5A3.75 3.75 0 0010.5 11.25v2.25m0 0c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v6.75c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125v-6.75"
              />
            </svg>
          </div>
        </div>
      )}

      <div className="p-6 flex-grow flex flex-col">
        {post.category && (
          <div className="mb-2">
            <span className="bg-[#ecc9b0] text-[#1a1a1a] text-xs font-gt-medium px-2 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        )}

        <h3 className="text-xl font-gt-semibold text-white mb-3 line-clamp-2">
          {post.title}
        </h3>

        <div className="text-xs text-[#a0a0a0] mb-2 font-gt-light">
          {formatDate(post.published_at || post.created_at) || "No date"}
        </div>

        <p className="text-[#d1d1d1] text-sm mb-4 line-clamp-3 font-gt-light flex-grow">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center text-[#ecc9b0] hover:text-[#e3a477] font-gt-medium text-sm group transition-all"
        >
          Read more
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    category: PropTypes.string,
    published_at: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
};

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const apiBaseUrl =
    import.meta.env.VITE_API_URL || "https://atteen-blog.vercel.app";
  
    console.log("API Base URL:", apiBaseUrl);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        console.log(
          `Fetching posts from: ${apiBaseUrl}/api/public-posts?page=${page}&limit=3`
        );

        // Try to fetch from the real API first
        try {
          const response = await fetch(
            `${apiBaseUrl}/api/public-posts?page=${page}&limit=3`
          );

          if (response.ok) {
            const data = await response.json();
            setPosts(data.posts);
            setTotalPages(data.pagination.totalPages);
            return; // Exit if successful
          }
        } catch (apiError) {
          console.log("API fetch failed, using mock data:", apiError);
        }

        // If API fails, use mock data for development
        console.log("Using mock blog data for development");

        // Mock blog posts data
        const mockPosts = [
          {
            id: "1",
            title: "Understanding React Hooks: A Comprehensive Guide",
            excerpt:
              "React Hooks have revolutionized how we write React components, allowing function components to use state and other React features without writing a class.",
            slug: "react-hooks",
            image_url: "https://picsum.photos/id/0/800/400",
            category: "React",
            published_at: "2023-10-15T10:30:00Z",
          },
          {
            id: "2",
            title: "Advanced Tailwind CSS Techniques for Modern Web Design",
            excerpt:
              "Learn how to leverage Tailwind CSS for creating beautiful, responsive designs while maintaining clean and maintainable code.",
            slug: "tailwind-tips",
            image_url: "https://picsum.photos/id/3/800/400",
            category: "CSS",
            published_at: "2023-11-22T14:15:00Z",
          },
          {
            id: "3",
            title: "Next.js vs. React: When to Use Each Framework",
            excerpt:
              "A detailed comparison between React and Next.js, explaining when to use each technology for optimal results in your web projects.",
            slug: "nextjs-vs-react",
            image_url: "https://picsum.photos/id/6/800/400",
            category: "Web Development",
            published_at: "2023-12-05T08:45:00Z",
          },
        ];

        setPosts(mockPosts);
        setTotalPages(1); // Mock a single page of results
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, apiBaseUrl]);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <section className="lg:px-6" id="blog">
      <div className="flex flex-col mb-16">
        <div className="flex items-center mb-8">
          <div className="h-px bg-[#ecc9b0]/60 w-10 mr-4"></div>
          <span className="text-[#ecc9b0]/80 font-gt-regular text-sm tracking-wider uppercase">
            Blog
          </span>
        </div>
        <h2 className="font-gt-semibold text-2xl md:text-3xl text-white mb-5 leading-relaxed">
          Latest Blog Posts
        </h2>
        <p className="font-gt-light text-[#c7c7c7] max-w-2xl sm:text-lg leading-relaxed">
          Exploring various topics that focus on tech, the world of work and life in general through my lens.
        </p>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ecc9b0]"></div>
        </div>
      )}

      {error && (
        <div className="bg-[#2a2a2a] border-l-4 border-red-500 p-4 rounded-md max-w-2xl mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-gt-medium text-red-300">{error}</p>
            </div>
          </div>
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="text-center py-12 max-w-2xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-[#3a3a3a] mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 14.25v-2.625a3.75 3.75 0 00-3.75-3.75h-1.5A3.75 3.75 0 0010.5 11.25v2.25m0 0c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v6.75c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125v-6.75"
            />
          </svg>
          <p className="text-[#a0a0a0] font-gt-light text-lg">
            No blog posts available at the moment.
          </p>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className={`px-4 py-2 rounded-md flex items-center transition-all ${
                  page === 1
                    ? "text-[#5a5a5a] bg-[#252525] cursor-not-allowed"
                    : "text-white bg-[#353535] hover:bg-[#454545]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
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
                Previous
              </button>
              <span className="text-[#a0a0a0] font-gt-medium text-sm">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className={`px-4 py-2 rounded-md flex items-center transition-all ${
                  page === totalPages
                    ? "text-[#5a5a5a] bg-[#252525] cursor-not-allowed"
                    : "text-white bg-[#353535] hover:bg-[#454545]"
                }`}
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
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
              </button>
            </div>
          )}

          {/* <div className="flex justify-center mt-12">
            <Link
              to="/#blog"
              className="px-5 py-2 bg-[#ecc9b0] hover:bg-[#e3a477] hover:!text-black text-black font-gt-medium rounded-md transition-all duration-300 inline-flex items-center group"
            >
              View All Blog Posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div> */}
        </>
      )}
    </section>
  );
};

export default BlogSection;
