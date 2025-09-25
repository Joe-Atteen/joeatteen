import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0a0a0a] text-white"
    >
      {/* Main Content */}
      <section className="py-10 md:py-16">
        <div className="max-w-[1300px] mx-auto px-4 pt-16">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-gt-semibold text-2xl md:text-3xl text-white mb-6">
                  Hi, I&apos;m Joe Atteen
                </h2>
                <div className="space-y-4 text-[#c7c7c7] sm:text-lg font-gt-light leading-relaxed">
                  <p>
                    While my specialty lies in frontend development and crafting
                    intuitive user interfaces, I&apos;m able to architect
                    full-stack solutions that transform ambitious ideas into
                    reality.
                  </p>
                  <p>
                    I&apos;ve built my career on more than just writing code; I
                    guide teams and drive projects from conception to successful
                    delivery. My contribution spans the entire development
                    lifecycle, from strategic planning and system architecture
                    to hands-on development and deployment.
                  </p>
                  <p>
                    With deep expertise in modern web technologies, I don&apos;t
                    just build applications, but create digital experiences that
                    users love and businesses depend on. Whether leading a
                    development team or offering hands-on execution, I bring the
                    same level of excellence and strategic thinking to every
                    challenge.
                  </p>
                  <p>
                    Beyond the code, I&apos;m passionate about sharing knowledge
                    through my blog, and getting a good rest. I believe the best
                    solutions come from combining technical expertise with
                    strong leadership and clear communication.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-[1300px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-gt-semibold text-2xl md:text-3xl text-white mb-4">
              My Expertise
            </h2>
            <p className="font-gt-light text-[#c7c7c7] sm:text-lg max-w-2xl mx-auto">
              From technical development to strategic consulting and team
              leadership
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
          >
            {/* Technical Development */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ecc9b0] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-code text-black text-2xl"></i>
              </div>
              <h3 className="font-gt-medium text-xl text-white mb-4">
                Technical Development
              </h3>
              <p className="font-gt-light text-[#c7c7c7] sm:text-lg mb-4 leading-relaxed">
                Full-stack development with modern technologies, specializing in
                React ecosystems and scalable web applications.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "React",
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                  "AWS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#222] border border-[#333] rounded-full text-sm text-[#c7c7c7] font-gt-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Strategic Consulting */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ecc9b0] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-lightbulb text-black text-2xl"></i>
              </div>
              <h3 className="font-gt-medium text-xl text-white mb-4">
                Strategic Consulting
              </h3>
              <p className="font-gt-light text-[#c7c7c7] sm:text-lg mb-4 leading-relaxed">
                Technology strategy, architecture planning, and digital
                transformation guidance for businesses and startups.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Tech Strategy",
                  "System Architecture",
                  "Digital Transformation",
                  "Process Optimization",
                  "Scalability Planning",
                  "Performance Audit",
                ].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-[#222] border border-[#333] rounded-full text-sm text-[#c7c7c7] font-gt-light"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Team Leadership */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ecc9b0] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-black text-2xl"></i>
              </div>
              <h3 className="font-gt-medium text-xl text-white mb-4">
                Team Leadership
              </h3>
              <p className="font-gt-light text-[#c7c7c7] sm:text-lg mb-4 leading-relaxed">
                Leading development teams, mentoring developers, and driving
                projects from conception to successful delivery.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Team Management",
                  "Project Leadership",
                  "Code Reviews",
                  "Mentoring",
                  "Agile Methodologies",
                  "Cross-functional Collaboration",
                ].map((leadership) => (
                  <span
                    key={leadership}
                    className="px-3 py-1 bg-[#222] border border-[#333] rounded-full text-sm text-[#c7c7c7] font-gt-light"
                  >
                    {leadership}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 hidden">
        <div className="max-w-[1300px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="font-gt-semibold text-2xl md:text-3xl text-white mb-4">
              My Journey
            </h2>
            <p className="font-gt-light text-[#c7c7c7] sm:text-lg max-w-2xl mx-auto">
              A timeline of my professional growth and key milestones
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#333] hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  title: "Senior Frontend Developer",
                  company: "Freelance",
                  description:
                    "Leading frontend development for various clients, focusing on React applications and modern web technologies.",
                },
                {
                  year: "2023",
                  title: "Frontend Developer",
                  company: "Tech Startup",
                  description:
                    "Built and maintained multiple web applications using React, contributing to a 40% increase in user engagement.",
                },
                {
                  year: "2022",
                  title: "Junior Developer",
                  company: "Digital Agency",
                  description:
                    "Started my professional journey, learning modern web development practices and working on diverse projects.",
                },
                {
                  year: "2021",
                  title: "Self-Taught Developer",
                  company: "Personal Projects",
                  description:
                    "Began my coding journey, building personal projects and contributing to open-source repositories.",
                },
              ].map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  <div className="hidden md:flex w-16 h-16 bg-[#ecc9b0] rounded-full items-center justify-center flex-shrink-0 relative z-10">
                    <span className="font-gt-medium text-black text-sm">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 bg-[#111111] p-6 rounded-lg border border-[#333]">
                    <div className="md:hidden mb-2">
                      <span className="inline-block px-3 py-1 bg-[#ecc9b0] text-black font-gt-medium text-sm rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-gt-medium text-xl text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-gt-regular text-[#ecc9b0] mb-3">
                      {item.company}
                    </p>
                    <p className="font-gt-light text-[#c7c7c7] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 ">
        <div className="max-w-[1300px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="font-gt-semibold text-2xl md:text-3xl text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="font-gt-light text-[#c7c7c7] sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Ready to bring your ideas to life? Let&apos;s discuss how we can
              create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-[#ecc9b0] hover:bg-[#e3a477] text-black hover:!text-black font-gt-medium rounded-md transition-all duration-300 inline-flex items-center justify-center group"
              >
                Get In Touch
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <a
                href="/atteen-resume.pdf"
                className="inline-flex items-center justify-center gap-2 group bg-transparent border border-[#ecc9b0]/70 text-[#ecc9b0] hover:bg-[#ecc9b0]/5 font-gt-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                Download Resume
                <i className="fas fa-download ml-2"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;
