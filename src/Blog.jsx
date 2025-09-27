import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBaseUrl =
    import.meta.env.VITE_API_URL || "https://atteen-blog.vercel.app";

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        // Try to fetch from the real API first
        try {
          const response = await fetch(
            `${apiBaseUrl}/api/public-posts?page=1&limit=50`
          );

          if (response.ok) {
            const data = await response.json();
            setPosts(data.posts);
            return; // Exit if successful
          }
        } catch (apiError) {
          console.log("API fetch failed:", apiError);
          setError("Failed to load blog posts. Please try again later.");
        }
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [apiBaseUrl]);

  // Filter posts based on selected category
  useEffect(() => {
    const filterPosts = () => {
      if (selectedCategory === "All") {
        setFilteredPosts(posts);
      } else {
        setFilteredPosts(
          posts.filter((post) => post.category === selectedCategory)
        );
      }
    };

    filterPosts();
  }, [selectedCategory, posts]);

  // Get unique categories from posts
  const getCategories = () => {
    const categories = ["All"];
    const uniqueCategories = [...new Set(posts.map((post) => post.category))];
    return categories.concat(uniqueCategories);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn("Invalid published_at date:", dateString);
      return "";
    }
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0a0a0a] text-white"
    >
      <div className="max-w-[1300px] mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6 pt-16">
            <div className="h-px bg-[#ecc9b0]/60 w-16 mr-4"></div>
            <span className="text-[#ecc9b0]/80 font-gt-regular text-sm tracking-wider uppercase">
              Blog
            </span>
            <div className="h-px bg-[#ecc9b0]/60 w-16 ml-4"></div>
          </div>
          <h1 className="text-2xl md:text-3xl font-gt-semibold text-white mb-6">
            Blog Posts
          </h1>
          <p className="sm:text-lg text-[#c7c7c7] max-w-3xl mx-auto font-gt-light leading-relaxed">
            Thoughts and insights on any and evrything by me.
          </p>
        </motion.div>

        {/* Category Filter */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {getCategories().map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-gt-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#ecc9b0] text-[#1a1a1a] shadow-lg"
                    : "bg-[#252525] text-[#c7c7c7] hover:bg-[#333] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-[1300px] mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-14">
              <div className="bg-[#252525] rounded-3xl h-[35px] w-[70px] relative overflow-hidden shimmer"></div>
              <div className="bg-[#252525] rounded-3xl h-[35px] w-[70px] relative overflow-hidden shimmer"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              <div className="bg-[#252525] rounded-2xl h-[420px] w-full relative overflow-hidden shimmer"></div>
              <div className="bg-[#252525] rounded-2xl h-[420px] w-full relative overflow-hidden shimmer"></div>
              <div className="bg-[#252525] rounded-2xl h-[420px] w-full relative overflow-hidden shimmer"></div>
            </div>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-2xl font-gt-semibold text-white mb-4">
              Unable to Load Blog Posts
            </h3>
            <p className="text-[#c7c7c7] font-gt-light mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#ecc9b0] text-[#1a1a1a] rounded-lg font-gt-medium hover:bg-[#e3a477] transition-all duration-300"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {/* Posts Grid */}
        {!loading && !error && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="group bg-[#1a1a1a] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#ecc9b0]/10 transition-all duration-500 hover:-translate-y-2 border border-[#333] hover:border-[#ecc9b0]/20"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Featured badge */}
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#ecc9b0] text-[#1a1a1a] text-xs font-gt-medium px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Category and Read Time */}
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                      <span className="bg-black/70 text-[#ecc9b0] text-xs font-gt-medium px-2 py-1 rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                      {post.read_time && (
                        <span className="bg-black/70 text-white text-xs font-gt-light px-2 py-1 rounded-full backdrop-blur-sm">
                          {post.read_time} min read
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-gt-semibold text-white mb-3 line-clamp-2 group-hover:text-[#ecc9b0] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#a0a0a0] font-gt-light">
                        {formatDate(post.published_at || post.created_at) ||
                          "No date"}
                      </span>
                    </div>

                    <p className="text-[#c7c7c7] font-gt-light mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-[#252525] text-[#a0a0a0] px-2 py-1 rounded-md font-gt-light"
                          >
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-[#a0a0a0] px-2 py-1 font-gt-light">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Read More */}
                    <div className="flex items-center text-[#ecc9b0] group-hover:text-white transition-colors duration-300">
                      <span className="font-gt-medium text-sm">
                        Read Article
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* No posts message */}
        {!loading && !error && filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-gt-semibold text-white mb-4">
              No posts found
            </h3>
            <p className="text-[#c7c7c7] font-gt-light">
              No blog posts found for the selected category.
            </p>
          </motion.div>
        )}
      </div>

      <Footer />
    </motion.div>
  );
};

export default Blog;
