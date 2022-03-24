import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Emissions from "./pages/Emissions";
import Crypto from "./pages/Crypto";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/crypto" element={<Crypto />}></Route>
            <Route path="/emissions" element={<Emissions />}></Route>
            <Route path="/calculator" element={<Calculator />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
