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
    { 
      name: "Real Estate", 
      desc: "Showcase residential and commercial properties with interactive, high-definition walkthroughs. Attract buyers and tenants by allowing them to explore properties remotely. Save time by pre-qualifying leads with immersive experiences.", 
      img: "/real_estate.jpg" 
    },
    { 
      name: "Hospitality & Tourism", 
      desc: "Highlight resorts, hotels, and vacation rentals with stunning 360° views. Enhance booking confidence by letting guests explore rooms, amenities, and surroundings beforehand. Promote destination attractions with virtual guides.", 
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      name: "Co-working Spaces & Offices", 
      desc: "Let businesses explore shared office spaces or corporate buildings before committing. Showcase amenities, layouts, and environment.", 
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      name: "Retail & Showrooms", 
      desc: "Offer customers a virtual shopping experience for furniture, cars, or luxury goods. Let buyers explore showrooms and products without leaving their homes.", 
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      name: "Interior Design & Architecture", 
      desc: "Present design concepts and completed projects through immersive virtual tours. Help clients visualize spaces and layouts in detail before implementation. Showcase portfolios in a compelling and interactive format.", 
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      name: "Construction & Infrastructure", 
      desc: "Provide project progress updates with 360° site views. Share detailed visual reports with stakeholders and clients.", 
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      name: "Event Venues", 
      desc: "Showcase banquet halls, conference centers, and wedding venues to potential clients. Allow customers to visualize event layouts and seating arrangements.", 
      img: "/event.jpg" 
    },
    { 
      name: "Healthcare", 
      desc: "Enable patients to virtually tour hospitals, clinics, and wellness centers. Build trust by showcasing your facilities in detail.", 
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      name: "Manufacturing & Warehousing", 
      desc: "Offer virtual factory tours to prospective clients or partners. Highlight safety measures and operational capabilities.", 
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      name: "Museums & Cultural Heritage", 
      desc: "Bring art, history, and culture to life with immersive virtual exhibits. Attract global audiences to explore your collections digitally.", 
      img: "/cultural_heritage.jpg" 
    },
    { 
      name: "Education & Training", 
      desc: "Create virtual campus tours for schools, colleges, and universities. Develop interactive training modules for technical and corporate learning environments.", 
      img: "/education.jpg" 
    }
  ];

  const whyChooseData = [
    {
      title: "Key Benefits of Virtual Tours",
      content: (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }} />
            <span><strong style={{ color: '#fff' }}>Enhanced Client Engagement:</strong> Interactive tours keep viewers hooked longer.</span>
          </li>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }} />
            <span><strong style={{ color: '#fff' }}>Cost-Effective Marketing:</strong> Reduce the need for multiple physical visits.</span>
          </li>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }} />
            <span><strong style={{ color: '#fff' }}>Increased Trust:</strong> Provide transparency with detailed, authentic visual experiences.</span>
          </li>
        </ul>
      )
    },
    {
      title: "Google Street View Service by 3Dmania",
      content: (
        <p style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1.2rem' }}>
          Take your business to the next level with 3DMania’s Google Street View service. As a Google Street View Trusted Photographer, we help you showcase your business interiors on Google Maps, allowing potential customers to virtually walk through your space anytime, anywhere.
        </p>
      )
    },
    {
      title: "A Game-Changer for Sales & Marketing",
      content: (
        <p style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1.2rem' }}>
          Virtual tours are no longer just a novelty—they're a <strong style={{ color: 'var(--accent-blue)' }}>powerful sales and marketing tool</strong>. By giving your audience the ability to "step into" your space virtually, you build trust, enhance engagement, and shorten the decision-making process. Our tours act as a 24/7 showroom, accessible to clients around the globe.
        </p>
      )
    }
  ];

  const [whyChooseIndex, setWhyChooseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWhyChooseIndex((prev) => (prev + 1) % whyChooseData.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

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

     

      {/* Why Choose 3Dmania Slider */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}
            >
              Why Choose <span className="text-gradient">3Dmania?</span>
            </motion.h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {whyChooseData.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  scale: whyChooseIndex === i ? 1.05 : 1,
                  borderColor: whyChooseIndex === i ? 'rgba(0, 242, 255, 0.5)' : 'rgba(255, 255, 255, 0.05)',
                  backgroundColor: whyChooseIndex === i ? 'rgba(0, 242, 255, 0.03)' : 'rgba(255, 255, 255, 0.01)',
                  boxShadow: whyChooseIndex === i ? '0 20px 40px rgba(0, 242, 255, 0.15)' : '0 10px 30px rgba(0,0,0,0.1)'
                }}
                transition={{ duration: 0.5 }}
                className="glass"
                style={{ 
                  padding: '2.5rem', 
                  borderRadius: '24px', 
                  border: '1px solid',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={() => setWhyChooseIndex(i)}
              >
                {whyChooseIndex === i && (
                  <motion.div 
                    layoutId="highlight"
                    style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      width: '4px', 
                      height: '100%', 
                      background: 'var(--accent-blue)' 
                    }} 
                  />
                )}
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1.5rem', 
                  color: whyChooseIndex === i ? 'var(--accent-blue)' : '#fff',
                  transition: 'color 0.3s'
                }}>
                  {card.title}
                </h3>
                <div style={{ 
                  fontSize: '0.95rem', 
                  color: whyChooseIndex === i ? '#fff' : 'var(--text-muted)',
                  transition: 'color 0.3s',
                  lineHeight: 1.6
                }}>
                  {card.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project: Viruksha Avenue */}
      <section className="section glass" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p style={{ color: 'var(--accent-blue)', fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.1rem' }}>FEATURED PROJECT</p>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem' }}>Viruksha Avenue</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Explore the premium residential development of Viruksha Avenue in Dharmapuri. Experience an immersive 3D virtual tour featuring high-resolution panoramas and interactive hotspots, bringing every detail of this stunning project to life right from your screen.
              </p>
              <Link to="/projects#viruksha-avenue" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <img 
                src="https://mania3d-assets.web.app/viruksha-avenue/preview.jpg" 
                alt="Viruksha Avenue Preview" 
                style={{ 
                  width: '100%', 
                  borderRadius: '24px', 
                  boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              />
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
                  alt={industries[activeIndustry].name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div style={{ position: 'absolute', bottom: '30px', left: '30px' }}>
                 <div style={{ background: 'var(--accent-blue)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play fill="#000" color="#000" size={24} />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '600px', overflowY: 'auto', paddingRight: '1rem', scrollbarWidth: 'thin', scrollbarColor: 'var(--accent-blue) transparent' }} className="custom-scrollbar">
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--accent-blue);
          border-radius: 10px;
        }
      `}} />
    </div>
  );
};

export default Home;
