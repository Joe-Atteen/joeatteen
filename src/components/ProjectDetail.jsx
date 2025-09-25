import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getProjectBySlug, projects } from "../data/projectsData";
import Footer from "../Footer";
import PageTransition from "./PageTransition";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageTransition>
      <div className="py-10 max-w-7xl mx-auto px-6">
        <section className="py-16">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <div className="h-px bg-[#ecc9b0]/60 w-10 mr-4"></div>
              <span className="text-[#ecc9b0]/80 font-gt-regular text-sm tracking-wider uppercase">
                Project
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <h1 className="font-gt-medium text-4xl md:text-5xl text-white mb-4 md:mb-0">
                {project.title}
              </h1>
              <a
                href={project.projectUrl}
                target="_blank"
                className="flex items-center gap-2 group text-[#ecc9b0] font-gt-light hover:text-[#e3a477] transition-colors"
              >
                Visit Live Site
                <i className="fas fa-arrow-up-right-from-square transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>

            <div className="mt-8">
              <p className="font-gt-light text-[#c7c7c7] leading-loose mb-10">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[#c7c7c7]/80 font-gt-light text-sm py-1 px-3 rounded-full border border-[#333]/60 hover:border-[#ecc9b0]/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#333]/30 pt-16">
          <div className="max-w-3xl mb-10">
            <h2 className="font-gt-regular text-2xl text-white mb-5">
              Project Screenshots
            </h2>
            <p className="font-gt-light text-[#c7c7c7] leading-relaxed">
              A collection of screens showcasing the key features and UI of the{" "}
              {project.title} application.
            </p>
          </div>

          <div className="space-y-4 md:space-y-10 mt-16">
            {project.images.map((image, index) => (
              <figure key={index} className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
                <figcaption className="mt-3 text-[#c7c7c7] font-gt-light text-sm">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="flex justify-between items-center py-8 mt-16 border-t border-[#333]/30">
            <Link
              to="/projects"
              className="flex items-center gap-2 group text-[#c7c7c7] font-gt-light hover:text-[#ecc9b0] transition-colors"
            >
              <i className="fas fa-arrow-left transform group-hover:-translate-x-1 transition-transform"></i>
              Back to Projects
            </Link>

            <a
              href={project.projectUrl}
              target="_blank"
              className="flex items-center gap-2 group bg-transparent border border-[#ecc9b0]/70 text-[#ecc9b0] hover:bg-[#ecc9b0]/5 font-gt-light px-5 py-2 rounded-md transition-all duration-300"
            >
              Visit Live Site
              <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="border-t border-[#333]/30 py-16">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center mb-6">
              <div className="h-px bg-[#ecc9b0]/60 w-10 mr-4"></div>
              <span className="text-[#ecc9b0]/80 font-gt-regular text-sm tracking-wider uppercase">
                Other Projects
              </span>
            </div>
            <h2 className="font-gt-medium text-3xl text-white mb-4">
              Explore More Work
            </h2>
            <p className="font-gt-light text-[#c7c7c7] leading-relaxed">
              Discover other projects that showcase my skills and experience in
              web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((otherProject) => otherProject.slug !== project.slug)
              .slice(0, 3)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  to={`/${otherProject.slug}`}
                  className="group bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#333]/30 rounded-lg overflow-hidden hover:border-[#ecc9b0]/30 transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={otherProject.image}
                      alt={otherProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-gt-regular text-xl text-white mb-2 group-hover:text-[#ecc9b0] transition-colors">
                      {otherProject.title}
                    </h3>
                    <p className="font-gt-light text-[#c7c7c7] text-sm leading-relaxed mb-4">
                      {otherProject.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {otherProject.technologies
                        .slice(0, 3)
                        .map((tech, index) => (
                          <span
                            key={index}
                            className="text-[#c7c7c7]/70 font-gt-light text-xs py-1 px-2 rounded-full border border-[#333]/40"
                          >
                            {tech}
                          </span>
                        ))}
                      {otherProject.technologies.length > 3 && (
                        <span className="text-[#c7c7c7]/70 font-gt-light text-xs py-1 px-2">
                          +{otherProject.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[#ecc9b0] font-gt-light text-sm group-hover:text-[#e3a477] transition-colors">
                        View Project
                      </span>
                      <i className="fas fa-arrow-right text-[#ecc9b0] group-hover:text-[#e3a477] group-hover:translate-x-1 transition-all"></i>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 group bg-transparent border border-[#ecc9b0]/70 text-[#ecc9b0] hover:bg-[#ecc9b0]/5 font-gt-light px-6 py-3 rounded-md transition-all duration-300"
            >
              View All Projects
              <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default ProjectDetail;
