
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactUs from "./pages/Contactus";



function App() {

  return (
        <>
            <Navbar />

                <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/contactus" element={<ContactUs />}></Route>
                </Routes>

            <Footer />
        </>
  );
}

export default App
