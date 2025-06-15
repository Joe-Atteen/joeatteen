import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getProjectBySlug } from "../data/projectsData";
import Footer from "../Footer";
import TopNav from "../TopNav";
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
        <TopNav />

        <section className="py-16 mb-10">
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

        <section className="border-t border-[#333]/30 pt-16 pb-24">
          <div className="max-w-3xl mb-10">
            <h2 className="font-gt-regular text-2xl text-white mb-5">
              Project Screenshots
            </h2>
            <p className="font-gt-light text-[#c7c7c7] leading-relaxed">
              A collection of screens showcasing the key features and UI of the{" "}
              {project.title} application.
            </p>
          </div>

          <div className="space-y-20 mt-16">
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

          <div className="flex justify-between items-center pt-16 mt-16 border-t border-[#333]/30">
            <a
              href="/"
              className="flex items-center gap-2 group text-[#c7c7c7] font-gt-light hover:text-[#ecc9b0] transition-colors"
            >
              <i className="fas fa-arrow-left transform group-hover:-translate-x-1 transition-transform"></i>
              Back to Projects
            </a>

            <a
              href={project.projectUrl}
              target="_blank"
              className="flex items-center gap-2 group bg-transparent border border-[#ecc9b0]/70 text-[#ecc9b0] hover:bg-[#ecc9b0]/5 font-gt-light px-5 py-2 rounded-full transition-all duration-300"
            >
              Visit Live Site
              <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default ProjectDetail;
