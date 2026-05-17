import { motion } from 'framer-motion';
import { Eye, Video, Award, Camera, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DroneServices = () => {
  const benefits = [
    {
      title: "Showcase Scale & Surroundings",
      desc: "Drone visuals provide a complete perspective of your property or project, helping customers understand location, accessibility, and overall environment better.",
      icon: Eye,
      color: "var(--accent-blue)"
    },
    {
      title: "Create High-Impact Marketing Content",
      desc: "Professional aerial photos and videos capture attention quickly and make your business stand out across digital platforms.",
      icon: Video,
      color: "var(--accent-purple)"
    },
    {
      title: "Build a Premium Brand Image",
      desc: "High-quality drone visuals elevate your business presentation and create a modern, professional impression for customers and investors.",
      icon: Award,
      color: "var(--accent-blue)"
    }
  ];

  const services = [
    { title: "Aerial Photography", desc: "Ultra HD high-altitude commercial captures." },
    { title: "Cinematic Drone Videos", desc: "Seamless 4K promotional cinematic drone shoots." },
    { title: "Real Estate Showcase Videos", desc: "Detailed boundary and exterior dynamic flyovers." },
    { title: "Resort & Hotel Visuals", desc: "Breathtaking property scale and amenities highlights." },
    { title: "Construction Progress Documentation", desc: "Accurate interval site mapping and monitoring." },
    { title: "Social Media Promotional Content", desc: "Snappy, high-engagement creative aerial edits." }
  ];

  const industries = [
    "Real Estate", "Hotels & Resorts", "Construction Projects", 
    "Educational Institutions", "Commercial Spaces", "Event Venues", "Retail & Showrooms"
  ];

  return (
    <div className="page-container" style={{ overflow: 'hidden' }}>
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
                A WHOLE NEW PERSPECTIVE
              </span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Drone Photography & <span className="text-gradient">Videography</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Aerial visuals create a powerful first impression. With 3Dmania's Drone Photography & Videography services, showcase your property, project, or business with stunning cinematic visuals that attract attention instantly.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontWeight: 700 }}>
                  Book a Drone Shoot
                </Link>
                <a href="tel:+919353456068" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontWeight: 600 }}>
                  Contact Today
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div className="glass" style={{ borderRadius: '30px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200" 
                  alt="Drone Photography Showcase" 
                  style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', height: '350px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Drone Visuals Matter Section */}
      <section className="section glass" style={{ background: 'rgba(255,255,255,0.01)', borderBottom: '1px solid rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Drone Visuals Matter</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              High-quality drone visuals elevate your business presentation and create a premium, modern impression.
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

      {/* Professional Drone Capture Services */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Professional Drone Capture Services</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              At 3Dmania, we use advanced drone technology and creative filming techniques.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((serv, idx) => (
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
                  <CheckCircle2 size={16} /> {serv.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{serv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Drone Project */}
      <section className="section glass" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Sample Drone Project</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Explore beautiful UHD aerial photography capturing breathtaking scale.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              width: '100%', 
              height: 'clamp(350px, 60vh, 550px)', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              position: 'relative'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200"
              alt="UHD Drone capture sample"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* Dark tint overlay with text */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
              padding: '3rem 2rem 2rem 2rem',
              color: '#fff',
              textAlign: 'left'
            }}>
              <p style={{ margin: 0, color: 'var(--accent-blue)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1rem' }}>Featured Shoot</p>
              <h3 style={{ margin: '0.5rem 0 0.2rem 0', fontSize: '1.5rem', fontWeight: 800 }}>Coastal Resort Cinematic</h3>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Goa, India</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Industries We Serve</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Professional drone visual coverage customized for all leading sectors.
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
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: '6rem 0' }}>
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
              Elevate Your Brand with Stunning Aerial Visuals
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
              Professional drone content helps businesses capture attention, improve marketing impact, and create memorable customer experiences. Ready to showcase your business from the sky?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontWeight: 700, borderRadius: '50px' }}>
                Book a Drone Shoot
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontWeight: 600, borderRadius: '50px' }}>
                Contact 3Dmania Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DroneServices;
