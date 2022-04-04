import './App.css';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Footer from './components/footer/footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <BrowserRouter basename={public.env.PUBLIC_URL}>
        <div className="d-flex flex-column justify-content-between" style={{minHeight: "100vh"}}>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
