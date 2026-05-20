import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Camera, Drone, MapPin, CheckCircle, Smartphone, Globe, Zap, Users, Trophy, DollarSign, Play, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const clientLogos = [
  "indecimal-logo.png",
  "dr-anas-sadik-logo.jpg",
  "logo-green.png",
  "nsc-logo.png",
  "presidency-logo.png",
  "sai-saravana-logo.png",
  "topaz-logo.png",
  "urban-ladder-logo.png",
  "whatsapp-logo.jpeg",
  "duroflex-logo.png",
  "logo.png",
  "logo-edited.png",
  "prestige-logo.png"
];

const heroTitles = [
  "Step Inside Your Space - Anytime, Anywhere",
  "Immersive 360° Experiences That Build Trust",
  "Showcase Your Business Beyond Photos",
  "Drone Visuals & Virtual Tours That Capture Attention",
  "Let Customers Explore Before They Visit"
];

const HERO_TOUR_URL = "/tours/output/index.html";

const Home = () => {
  const [activeIndustry, setActiveIndustry] = useState(0); const industries = [
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
      {/* Section 1: Hero - Single Tour Background with Cycling Titles */}
      <section className="hero-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Static Presidency School Virtual Tour */}
        <iframe
          src={HERO_TOUR_URL}
          title="Virtual Tour Background"
          className="hero-iframe"
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

        {/* Title and Controls — bottom-center */}
        <div className="hero-content-box" style={{
          position: 'absolute',
          bottom: '50px', // Positioned perfectly above the native virtual tour carousel
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'none',
          width: '95%',
          maxWidth: '1200px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.8rem'
        }}>
          <p
            className="hero-title-text"
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 'clamp(0.85rem, 2.2vw, 1.8rem)',
              letterSpacing: '0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,1), 0 2px 10px rgba(0,0,0,0.8)',
              lineHeight: 1.3,
              margin: 0,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {heroTitles[0]}
          </p>

          {/* Buttons */}
          <div className="hero-buttons-container" style={{ pointerEvents: 'auto', display: 'flex', gap: '1.2rem', justifyContent: 'center' }}>
            <Link
              to="/services"
              className="btn btn-primary hero-btn"
              style={{ padding: '0.7rem 2.2rem', fontSize: '1rem', fontWeight: 600, borderRadius: '50px', textDecoration: 'none' }}
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline hero-btn"
              style={{ padding: '0.7rem 2.2rem', fontSize: '1rem', fontWeight: 600, borderRadius: '50px', textDecoration: 'none', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>

      </section>

      {/* Client Logos Carousel - Moved to next section */}
      <section className="client-logos-section" style={{ background: 'var(--bg-dark)' }}>
        <div className="marquee-container" style={{
          width: '100%',
          margin: 0,
          padding: '1rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(0, 0, 0, 0.5)'
        }}>
          <div className="marquee-content" style={{ animationDuration: '40s' }}>
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <img
                key={index}
                src={`/client-logos/${logo}`}
                alt={`Client logo ${index}`}
                className="marquee-item"
                style={{ height: '90px', maxWidth: '220px', objectFit: 'contain', padding: '10px' }}
              />
            ))}
          </div>
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

      {/* Featured Project */}
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
              <p style={{ color: 'var(--accent-blue)', fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.1rem' }}>Featured Project</p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2rem)', fontWeight: 800, marginBottom: '1.5rem' }}>Experience a Live Virtual Tour</h2>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Let your customers explore your space just like this, anytime from anywhere.
              </p>
              <Link
                to="/virtual-tours"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative', width: '100%', height: 'clamp(300px, 45vh, 450px)', borderRadius: '24px', overflow: 'hidden' }}
            >
              {/* Play button always opens in new tab */}
              <img
                src="/tours/viruksha-avenue/preview.jpg"
                alt="Viruksha Avenue Preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                background: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <a
                  href="/tours/viruksha-avenue/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                  aria-label="Open Virtual Tour in new tab"
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
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(0, 242, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Play fill="#000" color="#000" size={32} style={{ marginLeft: '4px' }} />
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Industries Accordion Section */}
      <section className="section glass">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 'clamp(2rem, 8vw, 4rem)' }}>Industries We Serve</h2>
          <div className="industries-desktop-layout" style={{
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

          {/* Premium Mobile Format: Image -> Title -> Description for each category sequentially */}
          <div className="industries-mobile-layout" style={{ display: 'none' }}>
            {industries.map((industry, i) => (
              <div 
                key={i} 
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  padding: '1.2rem',
                  marginBottom: '2.5rem'
                }}
              >
                {/* Category Image */}
                <div style={{ width: '100%', height: '220px', borderRadius: '16px', overflow: 'hidden' }}>
                  <img 
                    src={industry.img} 
                    alt={industry.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                {/* Category Title & Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '0 0.5rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-blue)', margin: 0 }}>
                    {industry.name}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {industry.desc}
                  </p>
                  <Link 
                    to="/projects" 
                    style={{ 
                      color: 'var(--accent-light)', 
                      fontWeight: 600, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      textDecoration: 'none', 
                      fontSize: '0.92rem',
                      marginTop: '0.5rem'
                    }}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
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
          height: 60px;
          max-width: 160px;
          object-fit: contain;
          opacity: 1;
          filter: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: #ffffff;
          padding: 8px 16px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .marquee-item:hover {
          opacity: 0.85;
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

        .industries-mobile-layout {
          display: none;
        }
        .industries-desktop-layout {
          display: grid;
        }

        /* Responsive Hero & Logos Carousel for Mobile and Tablet */
        @media (max-width: 768px) {
          .industries-desktop-layout {
            display: none !important;
          }
          .industries-mobile-layout {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
            width: 100% !important;
          }
          .hero-section {
            height: 75vh !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .hero-iframe {
            position: absolute !important;
            width: 100% !important;
            height: 100% !important;
            top: 0 !important;
            left: 0 !important;
          }
          .hero-content-box {
            position: absolute !important;
            bottom: 95px !important; /* Lifted beautifully above the tour's native carousel/pagination dots */
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 92% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 1rem !important;
            background: transparent !important;
            pointer-events: none !important;
            z-index: 10 !important;
          }
          .hero-title-text {
            white-space: normal !important;
            font-size: 1.25rem !important;
            font-weight: 800 !important;
            line-height: 1.4 !important;
            text-overflow: clip !important;
            overflow: visible !important;
            margin-bottom: 0.2rem !important;
            max-width: 100% !important;
            text-shadow: 0 4px 20px rgba(0,0,0,1), 0 2px 10px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8) !important;
          }
          .hero-buttons-container {
            display: flex !important;
            flex-direction: row !important;
            gap: 0.8rem !important;
            justify-content: center !important;
            width: 100% !important;
            pointer-events: auto !important;
          }
          .hero-btn {
            padding: 0.65rem 1.4rem !important;
            font-size: 0.88rem !important;
            font-weight: 700 !important;
            border-radius: 50px !important;
            flex: none !important;
            text-align: center !important;
            width: 130px !important;
            transition: all 0.3s ease !important;
          }

          /* Client Logos Carousel inside the remaining 25vh of the first fold */
          .client-logos-section {
            height: 25vh !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: var(--bg-dark) !important;
            overflow: hidden !important;
          }
          .marquee-container {
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            padding: 0 !important;
            margin: 0 !important;
            background: rgba(0, 0, 0, 0.6) !important;
            border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
          }
          .marquee-content {
            gap: 3.5rem !important;
            animation-duration: 25s !important;
          }
          .marquee-item {
            height: 52px !important;
            max-width: 115px !important;
            padding: 5px 10px !important;
            background: #ffffff !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
            border: 1px solid rgba(255,255,255,0.05) !important;
          }
        }

        /* Additional Responsive Tweaks for Small Mobile Screens */
        @media (max-width: 480px) {
          .hero-section {
            height: 77vh !important;
          }
          .hero-content-box {
            bottom: 85px !important; /* Keep it nicely adjusted on extremely small screens */
          }
          .client-logos-section {
            height: 23vh !important;
          }
          .hero-title-text {
            font-size: 1.12rem !important;
            line-height: 1.35 !important;
          }
          .hero-btn {
            padding: 0.55rem 1.2rem !important;
            font-size: 0.82rem !important;
            width: 115px !important;
          }
          .marquee-item {
            height: 44px !important;
            max-width: 95px !important;
            border-radius: 6px !important;
          }
        }
      `}} />
    </div>
  );
};

export default Home;
