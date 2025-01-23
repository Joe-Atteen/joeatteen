import Body from "./Body";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
    return (
      <div className="max-w-[1300px] mx-auto">
        <Navbar />
        <Hero />
        <Body />
      </div>
    );
};

export default Home;
