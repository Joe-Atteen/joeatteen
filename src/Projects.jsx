import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "./data/projectsData";
import Footer from "./Footer";
import SEO from "./components/SEO";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        );

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
    visible: { opacity: 1, y: 0 },
  };

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Joe Atteen's Projects",
    description:
      "Portfolio of web development projects by Joe Atteen, showcasing React, JavaScript, and full-stack applications.",
    author: {
      "@type": "Person",
      name: "Joe Atteen",
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO
        title="Projects - Joe Atteen Portfolio"
        description="Explore Joe Atteen's portfolio of web development projects including React applications, JavaScript solutions, and full-stack development work."
        keywords="Joe Atteen Projects, Portfolio, React Projects, JavaScript Projects, Web Development, Frontend Projects"
        canonicalUrl="https://joeatteen.com/projects"
        structuredData={projectsStructuredData}
      />
      <div className="py-20 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6 pt-12">
            <div className="h-px bg-[#ecc9b0]/60 w-10 mr-4"></div>
            <span className="text-[#ecc9b0]/80 font-gt-regular text-sm tracking-wider uppercase">
              Portfolio
            </span>
            <div className="h-px bg-[#ecc9b0]/60 w-10 ml-4"></div>
          </div>

          <h1 className="font-gt-semibold text-2xl md:text-3xl text-white mb-6">
            Featured Projects
          </h1>

          <p className="font-gt-light text-[#c7c7c7] sm:text-lg leading-relaxed max-w-3xl mx-auto">
            A comprehensive collection of my work. Each project represents a
            unique challenge solved with modern technologies and user-centered
            design.
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full font-gt-light text-sm transition-all duration-300 ${
              filter === "all"
                ? "bg-[#ecc9b0] text-black"
                : "bg-[#222]/30 text-[#c7c7c7] hover:bg-[#333]/40 hover:text-[#ecc9b0] border border-[#333]/40"
            }`}
          >
            All Projects
          </button>

          {[
            "React",
            "Next.js",
            "Web app",
            "Vue",
            "TypeScript",
            "Bootstrap",
          ].map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full font-gt-light text-sm transition-all duration-300 ${
                filter === tech
                  ? "bg-[#ecc9b0] text-black"
                  : "bg-[#222]/30 text-[#c7c7c7] hover:bg-[#333]/40 hover:text-[#ecc9b0] border border-[#333]/40"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <Link to={project.link} className="block w-full h-full">
                <div className="group h-full bg-[#222]/30 border border-transparent hover:border-[#333] rounded-lg p-2 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="h-48 overflow-hidden rounded-md mb-5 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 right-0 m-3 w-8 h-8 bg-[#ecc9b0]/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-50">
                      <i className="fa fa-arrow-right text-black/80 text-xs"></i>
                    </div>
                  </div>

                  <div className="px-2">
                    <h3 className="font-gt-regular text-base text-white mb-2 group-hover:text-[#ecc9b0] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {project.description && (
                      <p className="text-[#c7c7c7] text-sm mb-3 line-clamp-2 font-gt-light">
                        {project.description}
                      </p>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[#c7c7c7]/70 text-xs font-gt-light py-1 px-2 rounded-full border border-[#333]/40"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[#c7c7c7]/70 text-xs font-gt-light py-1 px-2">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center mt-3">
                      <span className="text-[#ecc9b0]/80 text-sm font-gt-light group-hover:text-[#ecc9b0] transition-colors duration-300">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
