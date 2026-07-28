import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/AcademicsPage";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/contact" element={<Contact />} />{" "}
    </Routes>
  );
}

export default App;
