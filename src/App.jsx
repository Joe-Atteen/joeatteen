import Cedirates from "./Cedirates";
import CreditScore from "./CreditScore";
import DevPortal from "./DevPortal";
import Hubtel from "./Hubtel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import TekQuest from "./TekQuest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cedirates" element={<Cedirates />} />
        <Route path="creditscore" element={<CreditScore />} />
        <Route path="tekquest" element={<TekQuest />} />
        <Route path="dev-portal" element={<DevPortal />} />
        <Route path="hubtel" element={<Hubtel />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
