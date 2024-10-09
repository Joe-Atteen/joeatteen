import Cedirates from "./Cedirates";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cedirates" element={<Cedirates />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
