import { motion } from "framer-motion";
import Footer from "./Footer";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
              Contact
            </span>
            <div className="h-px bg-[#ecc9b0]/60 w-16 ml-4"></div>
          </div>
          <h1 className="text-2xl md:text-3xl font-gt-semibold text-white mb-6">
            Let&apos;s Work Together
          </h1>
          <p className="md:text-lg text-[#c7c7c7] max-w-3xl mx-auto font-gt-light leading-relaxed">
            I&apos;m always interested in new opportunities, challenging
            projects, and meaningful collaborations. Whether you have a project
            in mind or just want to connect, I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Get in Touch */}
          <motion.div variants={itemVariants}>
            <div className="bg-[#1a1a1a] rounded-2xl p-4 sm:p-8 border border-[#333] h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 px-3 bg-[#ecc9b0]/10 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#ecc9b0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-gt-semibold text-white">
                  Available for Exciting Projects
                </h3>
              </div>
              <p className="text-[#c7c7c7] sm:text-lg font-gt-light leading-relaxed mb-6">
                I&apos;m currently open to new opportunities and exciting
                projects. If you have a project you&apos;d like to discuss, or
                if you&apos;re looking for a developer to join your team,
                I&apos;d love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#ecc9b0]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0a0] font-gt-light">
                      Email
                    </p>
                    <a
                      href="mailto:joeyatteen@gmail.com"
                      className="text-white font-gt-medium hover:text-[#ecc9b0] transition-colors"
                    >
                      joeyatteen@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#ecc9b0]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#a0a0a0] font-gt-light">
                      Location
                    </p>
                    <p className="text-white font-gt-medium">Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <div className="bg-[#1a1a1a] rounded-2xl p-4 sm:p-8 border border-[#333] h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 px-3 bg-[#ecc9b0]/10 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#ecc9b0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-gt-semibold text-white">
                  Connect With Me
                </h3>
              </div>
              <p className="text-[#c7c7c7] sm:text-lg font-gt-light leading-relaxed mb-6">
                Follow my work and connect with me on social media.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/Joe-Atteen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-[#252525] rounded-xl hover:bg-[#333] transition-all duration-300 group"
                >
                  <div className="text-center">
                    <i className="fab fa-github text-2xl text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors mb-2"></i>
                    <p className="text-sm font-gt-medium text-[#c7c7c7] group-hover:text-white transition-colors">
                      GitHub
                    </p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/joe-atteen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-[#252525] rounded-xl hover:bg-[#333] transition-all duration-300 group"
                >
                  <div className="text-center">
                    <i className="fab fa-linkedin-in text-2xl text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors mb-2"></i>
                    <p className="text-sm font-gt-medium text-[#c7c7c7] group-hover:text-white transition-colors">
                      LinkedIn
                    </p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/joe_atteen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-[#252525] rounded-xl hover:bg-[#333] transition-all duration-300 group"
                >
                  <div className="text-center">
                    <i className="fab fa-instagram text-2xl text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors mb-2"></i>
                    <p className="text-sm font-gt-medium text-[#c7c7c7] group-hover:text-white transition-colors">
                      Instagram
                    </p>
                  </div>
                </a>
                <a
                  href="https://twitter.com/Joe_Atteen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-[#252525] rounded-xl hover:bg-[#333] transition-all duration-300 group"
                >
                  <div className="text-center">
                    <i className="fab fa-x-twitter text-2xl text-[#c7c7c7] group-hover:text-[#ecc9b0] transition-colors mb-2"></i>
                    <p className="text-sm font-gt-medium text-[#c7c7c7] group-hover:text-white transition-colors">
                      Twitter
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1a1a1a] to-[#252525] rounded-2xl p-8 md:p-12 text-center border border-[#333]"
        >
          <h3 className="text-2xl md:text-3xl font-gt-semibold text-white mb-4">
            Let&apos;s Create Something Amazing
          </h3>
          <p className="text-[#c7c7c7] font-gt-light max-w-2xl mx-auto text-lg">
            Ready to bring your ideas to life? Whether it&apos;s a new project,
            collaboration, or just a conversation about technology, I&apos;m
            here to help.
          </p>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Contact;
