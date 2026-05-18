import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Camera, Drone, MapPin, CheckCircle, Smartphone, Globe, Zap, Users, Trophy, DollarSign, Play, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const clientLogos = [
  "Indecimal Logo.png",
  "LOGO DR ANAS SADIK copy (1)_pages-to-jpg-0003.jpg",
  "Logo green.png",
  "NSC Logo cropped.png",
  "Presidency-Logo-V2.png",
  "Sai saravana developers  Logo.png",
  "Topaz Logo.png",
  "Urban_Ladder_Old_logo.png",
  "WhatsApp Image 2026-03-21 at 4.38.30 PM.jpeg",
  "duroflex Logo.png",
  "logo.png",
  "logo_Edited.png",
  "png-clipart-prestige-lake-ridge-prestige-group-property-developer-business-real-estate-business-people-logo.png"
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFeaturedTourPlaying, setIsFeaturedTourPlaying] = useState(false);
  const slides = [
    {
      title: "Interactive 3D Virtual Tours - Step Inside Your Space",
      subtitle: "FEATURED SHOWCASE",
      tourUrl: "https://mania3d-assets.web.app/output/index.html"
    },
    {
      title: "Experience Properties Remotely with Complete Detail",
      subtitle: "REAL ESTATE",
      tourUrl: "https://mania3d-assets.web.app/viruksha-avenue/index.html"
    },
    {
      title: "Immersive 360° Walkthroughs That Build True Trust",
      subtitle: "LUXURY VILLAS",
      tourUrl: "https://mania3d-assets.web.app/prestige-villa/index.html"
    },
    {
      title: "Let Students & Parents Tour Your Campus Virtually",
      subtitle: "SCHOOLS & COLLEGES",
      tourUrl: "https://mania3d-assets.web.app/godwin-public-school/index.html"
    },
    {
      title: "State-of-the-Art Facilities & Modern Infrastructure",
      subtitle: "CAMPUS WALKTHROUGHS",
      tourUrl: "https://mania3d-assets.web.app/presidency-school-east/index.html"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const [activeIndustry, setActiveIndustry] = useState(0);  const industries = [
    {
      name: "Real Estate",
      desc: "Make property decisions with immersive virtual tours - Showcase every detail in 360° and let buyers explore properties remotely with confidence and clarity.",
      img: "https://mania3d-assets.web.app/Real Estate_1.JPG"
    },
    {
      name: "Retail Showrooms",
      desc: "Bring your showroom experience online in 360° - Let customers walk through your products and spaces virtually before visiting your store.",
      img: "https://mania3d-assets.web.app/Showroom_1.avif"
    },
    {
      name: "Construction Sites",
      desc: "Monitor progress smarter with digital site walkthroughs - Track construction updates, document milestones, and showcase project development remotely.",
      img: "https://mania3d-assets.web.app/building-1210677_1280.jpg"
    },
    {
      name: "Schools & Colleges",
      desc: "Create a virtual campus experience for students and parents - Showcase classrooms, labs, infrastructure, and facilities through interactive 360° tours.",
      img: "https://mania3d-assets.web.app/education.jpg"
    },
    {
      name: "Hotels & Resorts",
      desc: "Inspire bookings with immersive guest experiences - Allow guests to explore rooms, amenities, and ambience virtually before they arrive.",
      img: "https://mania3d-assets.web.app/Hotel_1.jpg"
    },
    {
      name: "Coworking Spaces",
      desc: "Showcase modern workspaces with interactive 360° tours - Help businesses and freelancers explore your workspace, amenities, and environment remotely.",
      img: "https://mania3d-assets.web.app/Coworking_1.webp"
    },
    {
      name: "Event Venues",
      desc: "Showcase banquet halls, conference centers, and wedding venues to potential clients. Allow customers to visualize event layouts and seating arrangements",
      img: "https://mania3d-assets.web.app/event.jpg"
    },
    {
      name: "Hospitality & Tourism",
      desc: "Highlight resorts, hotels, and vacation rentals with stunning 360° views. Enhance booking confidence by letting guests explore rooms, amenities, and surroundings beforehand. Promote destination attractions with virtual guides.",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      name: "Interior Design & Architecture",
      desc: "Present design concepts and completed projects through immersive virtual tours. Help clients visualize spaces and layouts in detail before implementation. Showcase portfolios in a compelling and interactive format.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
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
      img: "https://mania3d-assets.web.app/cultural_heritage.jpg"
    },
  ];

  const whyChooseData = [
    {
      title: "Key Benefits of 360° Virtual Tours",
      content: (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }} />
            <span><strong style={{ color: '#fff' }}>HD Quality Visual Experience:</strong>Deliver crystal-clear 360° virtual tours with high-definition visuals that showcase every detail professionally.</span>
          </li>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }} />
            <span><strong style={{ color: '#fff' }}>Affordable Pricing:</strong> Get premium virtual tour solutions at highly competitive pricing without compromising on quality.</span>
          </li>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }} />
            <span><strong style={{ color: '#fff' }}>Timely Project Delivery:</strong> We ensure fast and reliable delivery so your business can go live and start attracting customers quickly.</span>
          </li>
        </ul>
      )
    },
    {
      title: "Google Street View integration",
      content: (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }} />
            <span><strong style={{ color: '#fff' }}>Build Trust with Real Visual Presence:</strong>Help customers explore your business through immersive 360° views, photos, and reviews directly on Google Maps.</span>
          </li>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }} />
            <span><strong style={{ color: '#fff' }}>Showcase Your Ambience & Experience:</strong> Highlight your interiors, atmosphere, and customer experience to attract more walk-ins and inquiries.</span>
          </li>
          <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
            <CheckCircle size={20} style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }} />
            <span><strong style={{ color: '#fff' }}>Increase Visibility & Customer Reach:</strong> Stand out on Google Search and Maps with professional Street View integration that brings more attention to your business.</span>
          </li>
        </ul>
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
              backgroundColor: '#000',
            }}
          >
            {/* The 3D Virtual Tour Embed */}
            <iframe
              src={slides[currentSlide].tourUrl}
              title={slides[currentSlide].title}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              allow="accelerometer; gyroscope; autoplay; fullscreen"
              allowFullScreen
            />

            {/* Readability Gradient Overlay - pointerEvents: 'none' allows dragging the 3D tour on the right side */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 100%)',
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none'
            }}>
              {/* Restore pointerEvents: 'auto' so details and buttons remain interactive */}
              <div className="container" style={{ pointerEvents: 'auto' }}>
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
                    style={{ fontSize: 'clamp(1.8rem, 6vw, 3.2rem)', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.2, color: '#ffffff' }}
                  >
                    {slides[currentSlide].title.split('digital twins').map((part, i) => (
                      i === 0 ? part : <span key={i}><span className="text-gradient">digital twins</span>{part}</span>
                    ))}
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                  >
                    <Link to="/services" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>Learn More</Link>
                    <Link to="/contact" className="btn btn-outline" style={{ padding: '0.8rem 2rem', background: 'rgba(255,255,255,0.1)' }}>Contact Us</Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators - Horizontally Centered at the Bottom */}
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'row',
          gap: '1.2rem',
          zIndex: 10
        }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: currentSlide === i ? 'var(--accent-blue)' : 'rgba(255,255,255,0.3)',
                boxShadow: currentSlide === i ? '0 0 10px var(--accent-blue)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              title={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Section 1.5: Client Logos Scrolling Marquee */}
      <section className="marquee-container">
        <div className="marquee-content">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <img
              key={index}
              src={`https://mania3d-assets.web.app/client-logos/${logo}`}
              alt={`Client Logo ${index + 1}`}
              className="marquee-item"
            />
          ))}
        </div>
      </section>

      {/* Why Choose 3Dmania Slider */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(2rem, 5vw, 3rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 8vw, 4rem)' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800 }}
            >
              Why Choose <span className="text-gradient">3Dmania?</span>
            </motion.h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1rem, 3vw, 2rem)',
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
                  padding: 'clamp(1.5rem, 5vw, 2.5rem)',
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
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  marginBottom: '1rem',
                  color: whyChooseIndex === i ? 'var(--accent-blue)' : '#fff',
                  transition: 'color 0.3s'
                }}>
                  {card.title}
                </h3>
                <div style={{
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: whyChooseIndex === i ? '#fff' : 'var(--text-muted)',
                  transition: 'color 0.3s',
                  lineHeight: 1.6
                }}>
                  {card.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Details & Free Demo Button Refinement */}
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 600, margin: 0 }}>
              contact: <a href="tel:+919353456068" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>+91-9353456068</a>
            </p>
            <a 
              href="tel:+919353456068" 
              className="btn btn-primary" 
              style={{ 
                padding: '1rem 2.5rem', 
                fontSize: '1.05rem', 
                fontWeight: 700, 
                borderRadius: '50px',
                boxShadow: '0 8px 24px rgba(0, 242, 255, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Featured Project: Viruksha Avenue */}
      <section className="section glass" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
            gap: 'clamp(2rem, 10vw, 5rem)',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p style={{ color: 'var(--accent-blue)', fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.1rem' }}>Viruksha Avenue</p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2rem)', fontWeight: 800, marginBottom: '1.5rem' }}>Experience a Live Virtual Tour</h2>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Let your customers explore your space just like this, anytime from anywhere.
              </p>
              <a 
                href="https://mania3d-assets.web.app/viruksha-avenue/index.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
              >
                Learn More <ArrowRight size={18} />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative', width: '100%', height: 'clamp(300px, 45vh, 450px)', borderRadius: '24px', overflow: 'hidden' }}
            >
              {!isFeaturedTourPlaying ? (
                <div 
                  onClick={() => setIsFeaturedTourPlaying(true)}
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '100%', 
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src="https://mania3d-assets.web.app/viruksha-avenue/preview.jpg"
                    alt="Viruksha Avenue Preview"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Pulsing Play Button Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 0 0px rgba(0, 242, 255, 0.4)',
                          '0 0 0 15px rgba(0, 242, 255, 0)',
                          '0 0 0 0px rgba(0, 242, 255, 0)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(0, 242, 255, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000',
                        cursor: 'pointer'
                      }}
                    >
                      <Play fill="#000" color="#000" size={32} style={{ marginLeft: '4px' }} />
                    </motion.div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://mania3d-assets.web.app/viruksha-avenue/index.html"
                  title="Viruksha Avenue Interactive Tour"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '24px',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                  }}
                  allow="accelerometer; gyroscope; autoplay; fullscreen"
                  allowFullScreen
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Industries Accordion Section */}
      <section className="section glass">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 'clamp(2rem, 8vw, 4rem)' }}>Explore the power of 3D across industries.</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 8vw, 5rem)'
          }}>
            <div style={{ position: 'relative', height: 'clamp(300px, 50vh, 500px)', borderRadius: '20px', overflow: 'hidden' }}>
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
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              maxHeight: 'clamp(400px, 60vh, 600px)',
              overflowY: 'auto',
              paddingRight: '0.5rem'
            }} className="custom-scrollbar">
              {industries.map((industry, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndustry(i)}
                  style={{
                    padding: 'clamp(1rem, 3vw, 2rem)',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    background: activeIndustry === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                    borderLeft: activeIndustry === i ? '4px solid var(--accent-blue)' : '4px solid transparent',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: activeIndustry === i ? '1rem' : '0' }}>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 700 }}>{industry.name}</h3>
                    <ChevronDown size={18} style={{ transform: activeIndustry === i ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                  </div>
                  {activeIndustry === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                    >
                      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>{industry.desc}</p>
                      <Link to="/projects" style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.9rem' }}>
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <style dangerouslySetInnerHTML={{
        __html: `
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
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 2rem 0;
          margin: 1.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          position: relative;
          z-index: 5;
        }
        .marquee-content {
          display: inline-flex;
          gap: 6rem;
          animation: marquee 35s linear infinite;
          align-items: center;
          will-change: transform;
        }
        .marquee-item {
          height: 48px;
          max-width: 140px;
          object-fit: contain;
          opacity: 0.5;
          filter: grayscale(1) brightness(1.6);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .marquee-item:hover {
          opacity: 1;
          filter: none !important;
          transform: scale(1.08);
          cursor: pointer;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}} />
    </div>
  );
};

export default Home;
