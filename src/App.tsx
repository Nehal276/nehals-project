import { useEffect } from 'react';
import './index.css';
import './App.css';
import { Provider } from 'react-redux';
import {store} from '../src/Store/index.ts';
import Topbar from './navBar.tsx';
import Footer from './Pages/Footer.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact.tsx';
import Home from './Pages/Home.tsx';
import Blog from './Pages/Blog.tsx';
import About from './Pages/About.tsx';
import Resume from './Pages/Resume.tsx';
import Projects from './Pages/Projects.tsx';
import Gallery from './Pages/Gallery.tsx';
import BusinessHeadshot from './Pages/BusinessHeadshot.tsx';
import DramaticShot from './Pages/DramaticShot.tsx';
import PassionImage from './Pages/PassionImage.tsx';
import VideographyPost from './Pages/VideographyPost.tsx';
import AppforVitalMonitor from './Pages/Projects pages/AppforVitalMonitor.tsx';
import Koa from './Pages/Projects pages/Koa.tsx';
import Easeaid from './Pages/Projects pages/Easeaid.tsx';
import Lock from './Pages/Projects pages/Lock.tsx';
import Nebulizer from './Pages/Projects pages/Nebulizer.tsx';

function App() {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot") as HTMLDivElement;
    const cursorCircle = document.querySelector(".cursor-circle") as HTMLDivElement;

    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorCircle.style.left = `${posX - 8}px`;
      cursorCircle.style.top = `${posY - 8}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseEnter = () => {
      cursorCircle.style.width = "40px";
      cursorCircle.style.height = "40px";
    };

    const handleMouseLeave = () => {
      cursorCircle.style.width = "20px";
      cursorCircle.style.height = "20px";
    };

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  
  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
      <Provider store={store}>
      <HashRouter>
        <Topbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/videography-post" element={<VideographyPost />} />
          <Route path="/business-headshot" element={<BusinessHeadshot />} />
          <Route path="/dramatic-shot" element={<DramaticShot />} />
          <Route path="/passion-image" element={<PassionImage />} />
          <Route path="/AppforVitalMonitor" element={<AppforVitalMonitor />} />
          <Route path="/Koa" element={<Koa />} />
          <Route path="/Easeaid" element={<Easeaid />} />
          <Route path="/Lock" element={<Lock />} />
          <Route path="/Nebulizer" element={<Nebulizer/>} />
        </Routes>
        <Footer />
      </HashRouter></Provider>
    </>
  );
}

export default App;