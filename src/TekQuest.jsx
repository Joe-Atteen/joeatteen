import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import tekquest from "./assets/images/tekquest.webp";
import profile from "./assets/images/profile.webp";
import ask from "./assets/images/ask.webp";
import tags from "./assets/images/tags.webp";
import users from "./assets/images/users.webp";
import Footer from "./Footer";

const Cedirates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="py-10">
        <div className="flex mb-10">
          <button
            className="p-0 hover:border-[#1a1a1a] !border-[#1a1a1a] bg-[#1a1a1a]"
            onClick={() => navigate(-1)}
          >
            <i className="fa fa-arrow-left text-xl sm:text-3xl text-white"></i>
          </button>
        </div>
        <div className="p-5 px-4 py-10 sm:p-16 sm:py-20 sm:pb-12 bg-[#1f1f1f] h-full max-w-[950px] mx-auto">
          <div className="flex flex-col">
            <a
              href="https://tek-quest.vercel.app/"
              target="_blank"
              className="font-gt-bold uppercase text-white mb-5 sm:mb-10 lg:mb-14 flex items-start gap-5"
            >
              <h2 className="wrap">TekQuest</h2>{" "}
              <span>
                <i className="fas fa-external-link-alt text-2xl sm:text-4xl"></i>
              </span>
            </a>
            <div className="max-w-[500px]">
              <p className="font-gt-thin text-white mb-5 sm:mb-10 lg:mb-14">
                This is a Next.js application modeled after Stack Overflow where
                users can ask questions and have them answered. There&apos;s the
                option to upvote or downvote a question or answer and many more
                interesting features. It leverages React for building user
                interfaces and integrates Auth.js for authentication, supporting
                providers like GitHub and Google. The backend is powered by
                MongoDB for database management, and OpenAI&apos;s API is
                utilized for an AI-driven feature. The project uses Tailwind CSS
                for styling, ensuring a responsive and visually appealing
                design. Development is streamlined with tools like PostCSS,
                ESLint, and TypeScript for type safety. It&apos;s still work in
                progress.
              </p>
              <div className="flex flex-wrap gap-2 font-gt-light text-white">
                <div className="inline-flex p-2 border border-white rounded-lg">
                  React
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Next.js
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  Tailwind CSS
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  MongoDB
                </div>
                <div className="inline-flex p-2 border border-white rounded-lg">
                  TypeScript
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto py-10 sm:py-20 bg-[#d2d5db] px-[10px] sm:px-[50px]">
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={tekquest}
              alt="cedirates"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img
              src={profile}
              alt="rates"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img src={ask} alt="fuel" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img src={tags} alt="cc" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1080px] mx-auto rounded-[20px] shadow-2xl overflow-hidden mb-10">
            <img src={users} alt="cc" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cedirates;
