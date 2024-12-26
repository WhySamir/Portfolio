import Navbar from "./components/Navbar";
// import SmNav from "./components/SmNav";
import { useState, Suspense } from "react";
import Photopage from "./components/Photopage";
import "./assets/fonts/stylesheet.css";
import "./App.css";
import About from "./components/About";
import Work from "./components/Work";
import CaseStudy from "./components/CaseStudy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div className={`whyte-text `}>
            <Navbar show={show} setShow={setShow} />

            {!show && (
              <Routes>
                <Route path="/" element={<Photopage />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/case-study" element={<CaseStudy />} />
              </Routes>
            )}
          </div>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
