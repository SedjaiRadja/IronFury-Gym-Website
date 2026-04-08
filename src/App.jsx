import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import TeamPage from "./pages/team/TeamPage";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Registration from "./components/Registration";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import CoachDetails from "./pages/team/CoachDetail";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team/:id" element={<CoachDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
