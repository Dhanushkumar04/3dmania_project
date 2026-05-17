import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import VirtualToursService from './pages/VirtualToursService';
import DroneServices from './pages/DroneServices';
import GoogleStreetViewService from './pages/GoogleStreetViewService';
import DroneSurveyService from './pages/DroneSurveyService';
import { MessageCircle } from 'lucide-react';

import { useState, useEffect } from 'react';

function App() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px
      if (window.scrollY > 400) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Background3D />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/virtual-tours" element={<VirtualToursService />} />
          <Route path="/drone-services" element={<DroneServices />} />
          <Route path="/google-street-view" element={<GoogleStreetViewService />} />
          <Route path="/drone-survey" element={<DroneSurveyService />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />


    </div>
  );
}

export default App;
