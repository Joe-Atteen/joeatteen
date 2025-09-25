import Body from "./Body";
import Hero from "./Hero";
import Footer from "./Footer";
import PageTransition from "./components/PageTransition";

const Home = () => {
  return (
    <div className="w-full">
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
