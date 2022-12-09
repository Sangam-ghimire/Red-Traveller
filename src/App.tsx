import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Destination from "./Pages/Destination";
import Tips from "./Pages/Tips";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
