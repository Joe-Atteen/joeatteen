import { useRef } from "react";
import generatePDF from "react-to-pdf";

const Resume = () => {
  const resumeRef = useRef();

  return (
    <div className="min-h-screen md:p-[10px] lg:p-8 text-black">
      <div className="text-right">
        <button
          className="text-white mb-7 border border-gray-100 hover:border-gray-100 hover:bg-gray-100 hover:text-black font-gt-medium"
          onClick={() =>
            generatePDF(resumeRef, { filename: "atteen-resume.pdf" })
          }
        >
          Download as PDF
        </button>
      </div>

      <div
        ref={resumeRef}
        className="max-w-5xl mx-auto bg-white p-11 pt-6 pb-2 rounded-lg shadow-lg grid grid-cols-3 gap-8"
      >
        {/* Left Column */}
        <div className="col-span-2">
          {/* Profile Section */}
          <div className=" mb-5 pb-5 border-b">
            <div>
              <h4 className="text-5xl font-gt-bold text-black leading-none mb-2 uppercase name">
                Joseph Atteen
              </h4>
              <p className="text-xl text-gray-600 font-gt-medium title">
                User Experience & Frontend Engineer
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h5 className="text-gray-700 leading-relaxed font-gt-regular profile">
              {" "}
              I specialize in crafting intuitive and responsive user experiences
              with a strong focus on design systems and performance
              optimization. With expertise in modern frontend frameworks and
              tools like NextJS and Tailwind CSS, I bring innovative solutions
              to complex problems, ensuring seamless functionality and user
              satisfaction. My approach balances technical precision with design
              thinking, making me a key asset in bridging the gap between design
              and development.
            </h5>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h4 className="text-2xl font-gt-semibold mb-4 heading">
              Experience
            </h4>
            <div className="space-y-7">
              {/* Experience Item */}
              <div>
                <h5 className="text-lg font-gt-semibold text-green-700 leading-none work-title">
                  UX Engineer,{" "}
                  <span className="text-gray-600 font-gt-medium">Hubtel</span>
                </h5>
                <h5 className="text-gray-500 text-base font-gt-medium date">
                  August 2023 - Present • Accra, Ghana
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Work closely with UX/UI designers to translate design
                    mockups and wireframes into user interfaces.
                  </span>
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Provide feedback on design feasibility and suggest
                    improvements from a technical perspective.
                  </span>
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Work in an agile environment with cross-functional teams,
                    including developers, product managers, and stakeholders to
                    ensure the delivery of responsive, accessible, functional
                    and interactive user interfaces.
                  </span>
                </h5>
              </div>
              {/* Experience Item */}
              <div>
                <h5 className="text-lg font-gt-semibold text-green-700 leading-none work-title">
                  Software Engineer,{" "}
                  <span className="text-gray-600 font-gt-medium">
                    Spring Data Works Limited
                  </span>
                </h5>
                <h5 className="text-gray-500 text-base font-gt-medium date">
                  April 2023 - July 2023 • Accra, Ghana
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Developed system code according to the system design and
                    standards.
                  </span>
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Provided troubleshooting and solutions to defects and errors
                    in already existing code
                  </span>
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Elicited, documented, and managed requirements as per
                    enterprise standards/guidelines.
                  </span>
                </h5>
              </div>
              {/* Experience Item */}
              <div>
                <h5 className="text-lg font-gt-semibold text-green-700 leading-none work-title">
                  Engineering Manager,{" "}
                  <span className="text-gray-600 font-gt-medium">
                    CediRates
                  </span>
                </h5>
                <h5 className="text-gray-500 text-base font-gt-medium date">
                  February 2023 - Present • Accra, Ghana
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Leading a team of engineers to build and maintain a
                    functional data-intensive web app that provides daily
                    updated fuel prices and exchange rates.
                  </span>
                </h5>
              </div>
              {/* Experience Item */}
              <div>
                <h5 className="text-lg font-gt-semibold text-green-700 leading-none work-title">
                  Frontend Developer,{" "}
                  <span className="text-gray-600 font-gt-medium">COLDSiS</span>
                </h5>
                <h5 className="text-gray-500 text-base font-gt-medium date">
                  July 2022 - March 2023 • Accra, Ghana
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Liaised with a UI/UX designer to redevelop the company
                    website.
                  </span>
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Struck a balance between aesthetic and functional design to
                    build optimized websites for both PC and mobile screens.
                  </span>
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>Developed reusable components and modules.</span>
                </h5>
              </div>
              {/* Experience Item */}
              <div>
                <h5 className="text-lg font-gt-semibold text-green-700 leading-none work-title">
                  Freelance Developer
                </h5>
                <h5 className="text-gray-500 text-base font-gt-medium date">
                  2019 - Current
                </h5>
                <h5 className="mt-1 font-gt-regular text-base text-gray-700 flex gap-1 job">
                  <span>•</span>{" "}
                  <span>
                    Providing web solutions for clients using latest frontend
                    technologies.
                  </span>
                </h5>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="">
            <h4 className="text-2xl font-gt-semibold mb-4 heading">
              Education
            </h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-gt-semibold text-green-700 leading-none work-title">
                  Software Development (Mobile & Web),{" "}
                  <span className="text-gray-600 font-gt-medium">
                    Codetrain
                  </span>
                </h5>
                <h5 className="text-gray-500 text-base font-gt-medium date">
                  January 2022 - October 2023
                </h5>
              </div>

              <div>
                <h5 className="text-lg font-gt-semibold text-green-700 leading-none work-title">
                  Computer Engineering,{" "}
                  <span className="text-gray-600 font-gt-medium">
                    Kwame Nkrumah University of Science & Technology
                  </span>
                </h5>
                <h5 className="text-gray-500 text-base font-gt-medium date">
                  October 2017 - May 2019
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 border-l pl-8">
          {/* Contact Details */}
          <div>
            <h5 className="text-lg font-gt-semibold leading-none work-title mb-3">
              Details
            </h5>
            <ul className="text-gray-600 space-y-2 text-base font-gt-regular">
              <li className="leading-tight list">joeatteen.com</li>
              <li className="leading-tight list">joeyatteen@gmail.com</li>
              <li className="leading-tight list">+233 20 911 9731</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h5 className="text-lg font-gt-semibold leading-none work-title mb-3">
              Language(s)
            </h5>
            <ul className="text-gray-600 space-y-2 text-base font-gt-regular">
              <li>English: Fluent</li>
            </ul>
          </div>

          {/* Main Skills */}
          <div>
            <h5 className="text-lg font-gt-semibold leading-none work-title mb-3">
              Skills
            </h5>
            <ul className="text-gray-600 space-y-2 text-base font-gt-regular">
              <li className="leading-tight list">Team Management</li>
              <li className="leading-tight list">
                Cross-functional Team Collaboration
              </li>
              <li className="leading-tight list">Responsive UI Development</li>
              <li className="leading-tight list">Performance Optimization</li>
              <li className="leading-tight list">
                Design Systems & Component Libraries
              </li>
              <li className="leading-tight list">Front-end Architecture</li>
              <li className="leading-tight list">
                Cross-browser Compatibility
              </li>
              <li className="leading-tight list">State Management</li>
              <li className="leading-tight list">Version Control (Git)</li>
            </ul>
          </div>

          {/* Engineering Toolbox */}
          <div>
            <h5 className="text-lg font-gt-semibold leading-none work-title mb-3">
              Engineering Toolbox
            </h5>
            <ul className="text-gray-600 space-y-2 text-base font-gt-regular">
              <li className="leading-tight list">HTML & CSS</li>
              <li className="leading-tight list">JavaScript</li>
              <li className="leading-tight list">Bootstrap</li>
              <li className="leading-tight list">Sass</li>
              <li className="leading-tight list">Tailwind</li>
              <li className="leading-tight list">React</li>
              <li className="leading-tight list">Vue</li>
              <li className="leading-tight list">TypeScript</li>
              <li className="leading-tight list">Next.js</li>
              <li className="leading-tight list">Node.js</li>
              <li className="leading-tight list">Redux</li>
              <li className="leading-tight list">Supabase</li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h5 className="text-lg font-gt-semibold leading-none work-title mb-3">
              References
            </h5>
            <ul className="text-gray-600 space-y-2 text-base font-gt-regular">
              <li className="leading-tight list">Available upon request</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
