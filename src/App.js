import "./styles.css";
import Navbar from "./components/Navbar";
import Products from "./routes/Products";
import Solutions from "./routes/Solutions";
import Careers from "./routes/Careers";
import Resources from "./routes/Resources";
import AboutUs from "./routes/AboutUs";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Careers" element={<Careers />} />
      </Routes>
    </div>
  );
}
