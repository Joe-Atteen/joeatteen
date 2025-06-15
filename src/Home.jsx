import Body from "./Body";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import PageTransition from "./components/PageTransition";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for smoother transitions
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#1a1a1a] z-50 flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-[#ecc9b0] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <PageTransition>
        <Navbar />
        <Hero />
        <div className="max-w-[1300px] mx-auto px-4">
          <Body />
        </div>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Home;
