import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Resume from "./Resume";
import ProjectDetail from "./components/ProjectDetail";

// This component is needed to access the location for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ProjectDetail />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
