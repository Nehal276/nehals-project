import './index.css';
import './App.css';
import Topbar from './navBar.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact.tsx';
import Home from './Pages/Home.tsx';
import Blog from './Pages/Blog.tsx';
import About from './Pages/About.tsx';
import Resume from './Pages/Resume.tsx';
import Projects from './Pages/Projects.tsx';
import BusinessHeadshot from './Pages/BusinessHeadshot.tsx';
import DramaticShot from './Pages/DramaticShot.tsx';
import PassionImage from './Pages/PassionImage.tsx';
import VideographyPost from './Pages/VideographyPost.tsx';



function App() {
  
  return (
    
    <>
      <HashRouter>
        <Topbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/videography-post" element={<VideographyPost />} />
          <Route path="/business-headshot" element={<BusinessHeadshot />} />
          <Route path="/dramatic-shot" element={<DramaticShot />} />
          <Route path="/passion-image" element={<PassionImage />} />
        </Routes>
      </HashRouter>
      
    </>
  );
}

export default App;


