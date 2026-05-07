import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Camera, Drone, MapPin, CheckCircle, Smartphone, Globe, Zap, Users, Trophy, DollarSign, Play, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      subtitle: "CORPORATE REAL ESTATE",
      title: "Make smarter big picture decisions with digital twins.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
    },
    {
      subtitle: "RETAIL & SHOWROOMS",
      title: "Step inside your future store from anywhere.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000"
    },
    {
      subtitle: "HOSPITALITY & HOTELS",
      title: "Immersive experiences that drive direct bookings.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const [activeIndustry, setActiveIndustry] = useState(0);
  const industries = [
    { name: "Residential Real Estate", desc: "Turn every property into a 24/7 open house. Reduce drive time, attract more qualified buyers, and accelerate your sales process.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
    { name: "Travel & Hospitality", desc: "Showcase your resort, hotel, or vacation rental in stunning 360°. Build trust and boost direct bookings with immersive tours.", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" },
    { name: "Retail & Showrooms", desc: "Let customers explore your store layout and products virtually. Increase walk-ins and build excitement before they visit.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800" },
    { name: "Commercial Real Estate", desc: "Give potential tenants a complete view of office spaces, amenities, and community areas remotely.", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div>
      {/* Section 1: Hero Carousel (Matterport Style) */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85))',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div className="container">
                <div style={{ maxWidth: '900px' }}>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ color: 'var(--accent-blue)', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '1.5rem', fontSize: '0.9rem' }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, marginBottom: '2.5rem', lineHeight: 1.1 }}
                  >
                    {slides[currentSlide].title.split('digital twins').map((part, i) => (
                      i === 0 ? part : <span key={i}><span className="text-gradient">digital twins</span>{part}</span>
                    ))}
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    style={{ display: 'flex', gap: '1.5rem' }}
                  >
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Learn More</Link>
                    <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem', background: 'rgba(255,255,255,0.1)' }}>Get a Demo</Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', zIndex: 10 }}>
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                background: currentSlide === i ? 'var(--accent-blue)' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }} 
            />
          ))}
        </div>
      </section>

     

      {/* Corporate Grid (Screenshot 2 style) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: "Corporate Real Estate", desc: "Manage global portfolios with confidence using 3D insights to centralize management decisions." },
              { title: "Design & Construction", desc: "Integrate with Procore and Autodesk to save time, reduce site visits, and improve communication." },
              { title: "Facilities Management", desc: "Manage operations from anywhere — incorporating real-time data to cut costs and increase ROI." },
              { title: "Property Marketing", desc: "Close faster by increasing seller and buyer confidence with immersive 3D tours and floor plans." }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass"
                style={{ padding: '3rem', borderRadius: '15px', height: '100%' }}
              >
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>{card.card ? card.card : card.desc}</p>
                <Link to="/services" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Section: Smartphone (Screenshot 2 style) */}
      <section className="section glass" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p style={{ color: '#ff4d4d', fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem' }}>MATTERPORT 24/7 AGENT</p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem' }}>Add life to every listing.</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                Make your marketing multi-task. 3DMania equips you with all the tools needed to win more listings, sell more homes, and maximize your limited time.
              </p>
              <Link to="/contact" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Learn More <ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" 
                alt="Property on phone" 
                style={{ width: '100%', borderRadius: '40px', border: '10px solid #222', boxShadow: '0 50px 100px rgba(0,0,0,0.5)' }}
              />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--accent-blue)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Play fill="#000" color="#000" size={30} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Capture Section (Screenshot 3 style) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}>
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/3dmania_smartphone (1).png" 
                alt="3D Camera" 
                style={{ width: '100%', borderRadius: '20px' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '2rem' }}>It all starts with 3D capture.</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.6 }}>
                With a variety of cameras and capture options to choose from, 3DMania makes it easy to create digital twins of your properties. Ranging from smartphone capture to our professional-grade Pro3 lidar camera.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link to="/services" className="btn btn-primary">Shop Services</Link>
                <Link to="/contact" className="btn btn-outline">Get Started Free</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Accordion Section (Screenshot 4 style) */}
      <section className="section glass">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '4rem' }}>Explore the power of 3D across industries.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
            <div style={{ position: 'relative', height: '500px', borderRadius: '20px', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeIndustry}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={industries[activeIndustry].img} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div style={{ position: 'absolute', bottom: '30px', left: '30px' }}>
                 <div style={{ background: 'var(--accent-blue)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play fill="#000" color="#000" size={24} />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {industries.map((industry, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveIndustry(i)}
                  style={{ 
                    padding: '2rem', 
                    borderRadius: '15px', 
                    cursor: 'pointer',
                    background: activeIndustry === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                    borderLeft: activeIndustry === i ? '4px solid var(--accent-blue)' : '4px solid transparent',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: activeIndustry === i ? '1rem' : '0' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{industry.name}</h3>
                    <ChevronDown style={{ transform: activeIndustry === i ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                  </div>
                  {activeIndustry === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                    >
                      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{industry.desc}</p>
                      <Link to="/projects" style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <style dangerouslySetInnerHTML={{ __html: `
        .feature-card {
          padding: 3rem;
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .feature-card:hover {
          transform: translateY(-15px);
          background: rgba(255,255,255,0.08);
          border-color: var(--accent-blue);
        }
      `}} />
    </div>
  );
};

export default Home;
