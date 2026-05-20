import { motion } from 'framer-motion';
import { Shield, Activity, Calendar, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const DroneSurveyService = () => {
  const benefits = [
    {
      title: "Faster & Safer Site Data Collection",
      desc: "Capture large areas quickly without the need for extensive ground access, improving efficiency and reducing operational risks.",
      icon: Shield,
      color: "var(--accent-blue)"
    },
    {
      title: "Accurate Visual Documentation",
      desc: "Get detailed aerial visuals and site mapping that help track progress, analyze land conditions, and support project planning.",
      icon: Activity,
      color: "var(--accent-purple)"
    },
    {
      title: "Improve Project Monitoring & Planning",
      desc: "Regular drone surveys provide a clear overview of site development, helping teams monitor changes and make informed decisions.",
      icon: Calendar,
      color: "var(--accent-blue)"
    }
  ];

  const solutions = [
    { title: "Site Mapping", desc: "Detailed high-resolution 2D and 3D orthomosaic maps." },
    { title: "Construction Progress Monitoring", desc: "Periodic visual site tracking and documentation." },
    { title: "Aerial Land Survey", desc: "Accurate visual captures of vast terrains." },
    { title: "Orthomosaic Image Generation", desc: "Stitched high-precision vertical aerial maps." },
    { title: "High-Resolution Site Documentation", desc: "UHD visual records for audits and assessments." },
    { title: "Top View Project Visualization", desc: "Perfect top-down layouts for planning teams." }
  ];

  const industries = [
    "Construction Companies", "Real Estate Developers", "Infrastructure Projects",
    "Industrial Sites", "Land Development Projects", "Architecture & Planning Firms"
  ];

  return (
    <div className="page-container" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Topological Grid & Laser Scanner Animation */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {/* Sweep scanner line */}
        <motion.div
          animate={{
            y: ['0vh', '100vh']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(0, 242, 255, 0.15), transparent)',
            boxShadow: '0 0 15px rgba(0, 242, 255, 0.5)',
            zIndex: 1
          }}
        />
        {/* Giant rotating layout grid contour */}
        <motion.div
          animate={{ rotate: 180 }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ position: 'absolute', top: '15%', right: '-15%', color: 'var(--accent-blue)', opacity: 0.03 }}
        >
          <Layers style={{ width: 'clamp(220px, 45vw, 450px)', height: 'clamp(220px, 45vw, 450px)' }} />
        </motion.div>
        {/* Scanning topological radar grid */}
        <motion.div
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 70%)',
            border: '1px dashed rgba(0, 242, 255, 0.1)',
            borderRadius: '50%'
          }}
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
                ACCURATE AERIAL DATA COLLECTION
              </span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Drone Survey & <span className="text-gradient">Mapping Solutions</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                3Dmania’s Drone Survey & Mapping services help businesses collect accurate aerial data quickly, safely, and efficiently. Using advanced drone technology, we provide high-resolution site visuals and mapping solutions for construction, land analysis, infrastructure planning, and project monitoring.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 1.5rem', fontWeight: 700, minWidth: '240px', textAlign: 'center' }}>
                  Schedule a Drone Survey
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
                  src="/3dmania-drone-survey.png"
                  alt="Drone Mapping Showcase"
                  className="service-showcase-img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Survey Project */}
      <section className="section glass" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Sample Survey Project</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Explore detailed visual site documentation and high-precision survey mapping.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '2.5rem' }}>
            {/* Project 1: Orthomosaic Site Mapping */}
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
              <img
                src="https://mania3d-assets.web.app/mapping1.jpg"
                alt="Orthomosaic Site Mapping Survey"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                padding: '2.5rem 1.5rem 1.5rem 1.5rem',
                color: '#fff',
                textAlign: 'left'
              }}>
                <p style={{ margin: 0, color: 'var(--accent-blue)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1rem' }}>Active Survey Site</p>
                <h3 style={{ margin: '0.3rem 0 0.1rem 0', fontSize: '1.3rem', fontWeight: 800 }}>Orthomosaic Mapping</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>Chennai, Tamil Nadu</p>
              </div>
            </motion.div>

            {/* Project 2: Infrastructure Analysis Map */}
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
              <img
                src="https://mania3d-assets.web.app/mapping2.png"
                alt="Infrastructure Analysis Mapping Survey"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                padding: '2.5rem 1.5rem 1.5rem 1.5rem',
                color: '#fff',
                textAlign: 'left'
              }}>
                <p style={{ margin: 0, color: 'var(--accent-blue)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1rem' }}>Active Survey Site</p>
                <h3 style={{ margin: '0.3rem 0 0.1rem 0', fontSize: '1.3rem', fontWeight: 800 }}>Contour Map</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>Bangalore, Karnataka</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why Drone Survey & Mapping Matters Section */}
      <section className="section glass" style={{ background: 'rgba(255,255,255,0.01)', borderBottom: '1px solid rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Drone Survey & Mapping Matters</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Drone-based surveying reduces manual effort, saves time, and delivers precise visual information that supports better planning.
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

      {/* Professional Drone Survey Solutions */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Professional Drone Survey Solutions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              At 3Dmania, we provide reliable drone survey services tailored for construction and land development.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass"
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}
              >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} /> {sol.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Industries We Serve</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Precise data-gathering aerial solutions tailored for modern development sectors.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass"
                style={{
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  border: '1px solid rgba(0, 242, 255, 0.15)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: 'rgba(0, 242, 255, 0.02)',
                  color: '#fff'
                }}
              >
                <ChevronRight size={16} color="var(--accent-blue)" />
                {ind}
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
              Transform the Way You Monitor & Analyze Projects
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
              Drone surveying helps businesses save time, improve visibility, and make smarter project decisions with accurate aerial insights. Ready to streamline your site monitoring process?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 1.5rem', fontWeight: 700, borderRadius: '50px', minWidth: '240px', textAlign: 'center' }}>
                Schedule a Drone Survey
              </Link>
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

export default DroneSurveyService;
