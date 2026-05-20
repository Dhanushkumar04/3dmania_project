import { motion } from 'framer-motion';
import { Map, Heart, TrendingUp, CheckCircle2, ChevronRight, Home as HomeIcon, ShoppingBag, HardHat, GraduationCap, Bed, Briefcase, Eye, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const getTourUrl = (path) => {
  if (!path || path.startsWith('http') || path === '#') return path;
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return path;
  }
  return `https://mania3d-assets.web.app${path.replace('/tours', '')}`;
};

const VirtualToursService = () => {
  const benefits = [
    {
      title: "Create Immersive Customer Experiences",
      desc: "Allow users to move through your space interactively and experience it as if they were physically present.",
      icon: Map,
      color: "var(--accent-blue)"
    },
    {
      title: "Build Trust & Transparency",
      desc: "Show every detail clearly and help customers feel more confident before visiting or making decisions.",
      icon: Heart,
      color: "var(--accent-purple)"
    },
    {
      title: "Increase Engagement & Conversions",
      desc: "Interactive virtual experiences keep visitors engaged longer and improve customer interest and inquiries.",
      icon: TrendingUp,
      color: "var(--accent-blue)"
    }
  ];

  const solutions = [
    "Interactive 360° Walkthroughs", "Mobile & Desktop Compatible Tours",
    "Website Integration", "Google Street View Integration",
    "Drone Aerial Nodes", "Custom Branding & Navigation"
  ];

  const industryDetails = [
    {
      title: "Real Estate",
      desc: "Make property decisions with immersive virtual tours. Showcase every detail in 360° and help buyers explore properties remotely with confidence and clarity.",
      icon: HomeIcon
    },
    {
      title: "Retail Showrooms",
      desc: "Bring your showroom experience online in 360°. Let customers walk through your products and spaces virtually before visiting your store.",
      icon: ShoppingBag
    },
    {
      title: "Construction Sites",
      desc: "Monitor progress smarter with digital site walkthroughs. Track construction updates, document milestones, and showcase project development remotely.",
      icon: HardHat
    },
    {
      title: "Schools & Colleges",
      desc: "Create a virtual campus experience for students and parents. Showcase classrooms, labs, infrastructure, and facilities through interactive 360° tours.",
      icon: GraduationCap
    },
    {
      title: "Hotels & Resorts",
      desc: "Inspire bookings with immersive guest experiences. Allow guests to explore rooms, amenities, and ambience virtually before they arrive.",
      icon: Bed
    },
    {
      title: "Coworking Spaces",
      desc: "Showcase modern workspaces with interactive 360° tours. Help businesses and freelancers explore your workspace, amenities, and environment remotely.",
      icon: Briefcase
    }
  ];

  const keyBenefits = [
    { title: "HD Quality Visual Experience", desc: "Deliver crystal-clear 360° virtual tours with high-definition visuals that showcase every detail professionally." },
    { title: "Affordable Pricing", desc: "Get premium virtual tour solutions at highly competitive pricing without compromising on quality." },
    { title: "Timely Project Delivery", desc: "We ensure fast and reliable delivery so your business can go live and start attracting customers quickly." }
  ];

  return (
    <div className="page-container" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Spatial Background Animation for Digital Twins */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {/* Spatial Grid outline rotation */}
        <motion.div
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            width: 'clamp(150px, 25vw, 250px)',
            height: 'clamp(150px, 25vw, 250px)',
            border: '1px dashed rgba(0, 242, 255, 0.08)',
            borderRadius: '50%',
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        />
        {/* Giant rotating spatial twin compass */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ position: 'absolute', bottom: '10%', right: '10%', color: 'var(--accent-blue)', opacity: 0.03 }}
        >
          <Map style={{ width: 'clamp(180px, 35vw, 350px)', height: 'clamp(180px, 35vw, 350px)' }} />
        </motion.div>
        {/* Spatial hotspots pulsing in background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ position: 'absolute', top: '40%', left: '8%', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 0 15px var(--accent-blue)' }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.5, 0.15]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          style={{ position: 'absolute', bottom: '30%', left: '18%', width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.5)', boxShadow: '0 0 12px rgba(0, 242, 255, 0.5)' }}
        />
      </div>

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: 'clamp(5rem, 15vw, 8rem)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span style={{
                background: 'rgba(0, 242, 255, 0.1)',
                color: 'var(--accent-blue)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.1rem',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '1.5rem'
              }}>
                IMMERSIVE INTERACTIVE EXPERIENCES
              </span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Transform the Way You Showcase <span className="text-gradient">Your Space</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                3DMania's 360° Virtual Tours help businesses create immersive and interactive digital experiences that allow customers to explore spaces remotely from any device, anytime. Unlike traditional photos or videos, virtual tours provide a realistic walkthrough experience that increases engagement, builds trust, and helps customers make faster decisions.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 1.5rem', fontWeight: 700, minWidth: '240px', textAlign: 'center' }}>
                  Book a Virtual Tour
                </Link>
                <a href="tel:+919353456068" className="btn btn-outline" style={{ padding: '1rem 1.5rem', fontWeight: 600, minWidth: '240px', textAlign: 'center' }}>
                  Call Us Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div className="glass service-showcase-glass">
                <img
                  src="/virtual-tour-image.png"
                  alt="360 Virtual Tour Showcase"
                  className="service-showcase-img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Virtual Tour Project */}
      <section id="sample-tour" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Sample Virtual Tour Project</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Step inside a sample luxury virtual tour project and explore the environment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '2.5rem' }}>
            {/* Project 1: Godwin Public School */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                width: '100%',
                height: 'clamp(280px, 45vh, 420px)',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative'
              }}
              className="glass"
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                background: 'rgba(5,5,5,0.7)',
                padding: '0.8rem 1.2rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                zIndex: 10,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h3 style={{ fontSize: '0.95rem', margin: 0, fontWeight: 700 }}>Godwin Public School</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600 }}>Interactive 3D walkthrough</span>
              </div>
              <a href={getTourUrl("/tours/godwin-public-school/index.html")} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
                <img src="/godwin-preview.jpg" alt="Godwin Public School Tour" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
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
                      pointerEvents: 'auto',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(0, 242, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 10
                    }}
                    className="play-button-overlay"
                  >
                    <Play fill="#000" color="#000" size={32} style={{ marginLeft: '4px' }} />
                  </motion.div>
                </div>
              </a>
            </motion.div>

            {/* Project 2: Prestige Villa */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                width: '100%',
                height: 'clamp(280px, 45vh, 420px)',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative'
              }}
              className="glass"
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                background: 'rgba(5,5,5,0.7)',
                padding: '0.8rem 1.2rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                zIndex: 10,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h3 style={{ fontSize: '0.95rem', margin: 0, fontWeight: 700 }}>Prestige Villa</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600 }}>Interactive 3D walkthrough</span>
              </div>
              <a href={getTourUrl("/tours/prestige-villa/index.html")} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
                <img src="/prestige-preview.jpg" alt="Prestige Villa Tour" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
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
                      pointerEvents: 'auto',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(0, 242, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 10
                    }}
                    className="play-button-overlay"
                  >
                    <Play fill="#000" color="#000" size={32} style={{ marginLeft: '4px' }} />
                  </motion.div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why 360 Virtual Tours Matter Section */}
      <section className="section glass" style={{ background: 'rgba(255,255,255,0.01)', borderBottom: '1px solid rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Why 360° Virtual Tours Matter</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Transform traditional listings into immersive experiences that captivate clients instantly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="benefit-card glass"
                  style={{
                    padding: '2.5rem',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  whileHover={{ y: -8, borderColor: benefit.color, boxShadow: '0 20px 40px rgba(0, 242, 255, 0.1)' }}
                >
                  <div style={{
                    background: `rgba(${benefit.color === 'var(--accent-blue)' ? '0, 242, 255' : '188, 19, 254'}, 0.1)`,
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: benefit.color
                  }}>
                    <Icon size={30} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>{benefit.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Virtual Tour Solutions */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 800, marginBottom: '1.5rem' }}>Professional Virtual Tour Solutions</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                At 3DMania, we create high-quality 360° virtual tours tailored to your business needs with smooth navigation, professional visuals, and mobile-friendly viewing experiences.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {solutions.map((sol, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ position: 'relative' }}
            >
              <div className="glass" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <img
                  src="https://mania3d-assets.web.app/polo.jpg"
                  alt="Virtual Tour Technology"
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section glass" style={{ background: 'rgba(255,255,255,0.01)', borderBottom: '1px solid rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Industries We Serve</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Tailored 3D environments designed to serve specific business strategies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {industryDetails.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass"
                  style={{ padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)', transition: 'border-color 0.3s' }}
                  whileHover={{ borderColor: 'rgba(0, 242, 255, 0.3)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                    <div style={{ background: 'rgba(0, 242, 255, 0.1)', color: 'var(--accent-blue)', padding: '0.8rem', borderRadius: '12px' }}>
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{ind.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{ind.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits of 3DMania Virtual Tours */}
      <section className="section glass" style={{ background: 'rgba(255,255,255,0.01)', borderBottom: '1px solid rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Key Benefits of 3DMania</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              We set the standard in immersive marketing solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {keyBenefits.map((ben, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass"
                style={{ padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)' }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-blue)' }}>{ben.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{ben.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              padding: 'clamp(2rem, 8vw, 4rem)',
              borderRadius: '30px',
              textAlign: 'center',
              border: '1px solid var(--accent-blue)',
              boxShadow: '0 20px 50px rgba(0, 242, 255, 0.15)',
              background: 'radial-gradient(circle at center, rgba(0, 242, 255, 0.05) 0%, transparent 70%)'
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>
              Let Customers Explore Your Space Before They Visit
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
              Immersive virtual tours help businesses create stronger digital experiences, attract more customers, and stand out from competitors. Ready to showcase your business in 360°?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
              <a href="/contact" className="btn btn-primary" style={{ padding: '1rem 1.5rem', fontWeight: 700, borderRadius: '50px', textDecoration: 'none', minWidth: '240px', textAlign: 'center' }}>
                Know More
              </a>
              <a href="tel:+919353456068" className="btn btn-outline" style={{ padding: '1rem 1.5rem', fontWeight: 600, minWidth: '240px', textAlign: 'center' }}>
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VirtualToursService;
