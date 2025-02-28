import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import UrPetCare from "./pages/portofolio/UrPetCare";
import KenanganSenja from "./pages/portofolio/KenanganSenja";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          {/* Parent Route */}
          <Route path="/portofolio" element={<Portofolio />}/>
            {/* Child Route */}
            <Route path="portofolio/urpetcare" element={<UrPetCare />} />
            <Route path="portofolio/kenangansenja" element={<KenanganSenja />} />
         
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
