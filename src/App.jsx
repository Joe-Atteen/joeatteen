import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import Resume from "./Resume";
import ProjectDetail from "./components/ProjectDetail";
import BlogPostDetail from "./BlogPostDetail";
import MobileBottomNav from "./MobileBottomNav";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./Navbar";

// This component is needed to access the location for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<ProjectDetail />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <MobileBottomNav />
    </BrowserRouter>
  );
}

export default App;
