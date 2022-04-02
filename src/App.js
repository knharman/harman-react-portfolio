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
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
