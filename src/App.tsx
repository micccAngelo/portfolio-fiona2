import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppOutlet from "./Components/Layout/AppOutlet";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppOutlet />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Projects />} />
          <Route path="project/:category" element={<Projects />} />
          <Route path="projects" element={<Navigate to="/project" replace />} />
          <Route path="projects/:category" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
