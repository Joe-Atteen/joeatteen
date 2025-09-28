import Body from "./Body";
import Hero from "./Hero";
import Footer from "./Footer";
import PageTransition from "./components/PageTransition";
import SEO from "./components/SEO";

const Home = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe Atteen",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer specializing in frontend development and user interfaces. I lead teams to build exceptional digital experiences.",
    url: "https://joeatteen.com",
    image: "https://joeatteen.com/og-image.jpg",
    sameAs: [
      "https://github.com/Joe-Atteen",
      "https://linkedin.com/in/joe-atteen",
      "https://twitter.com/Joe_Atteen",
      "https://instagram.com/joe_atteen",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "Ghana",
    },
    knowsAbout: [
      "JavaScript",
      "React",
      "Frontend Development",
      "User Interface Design",
      "Web Development",
      "Software Engineering",
      "Team Leadership",
    ],
  };

  return (
    <div className="w-full">
      <SEO
        title="Joe Atteen - Software Engineer & Frontend Specialist"
        description="Software Engineer specializing in frontend development and user interfaces. I lead teams to build exceptional digital experiences and transform ambitious ideas into reality."
        keywords="Joe Atteen, Software Engineer, Frontend Developer, React Developer, JavaScript Developer, Web Developer, UI Developer, Ghana Developer, Team Lead"
        url="https://joeatteen.com"
        type="website"
        structuredData={homeStructuredData}
      />
      <PageTransition>
        <Hero />
        <div className="max-w-[1300px] mx-auto px-4 lg:px-0">
          <Body />
        </div>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Home;
