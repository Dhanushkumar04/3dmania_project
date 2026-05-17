import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Globe, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoogleStreetViewService = () => {
  const benefits = [
    {
      title: "Build Customer Trust Before They Visit",
      desc: "Customers are more likely to visit businesses they can explore beforehand. A 360° walkthrough helps them feel confident and familiar with your space before arriving.",
      icon: ShieldCheck,
      color: "var(--accent-blue)"
    },
    {
      title: "Showcase Your Ambience & Experience",
      desc: "Your interiors, lighting, layout, and atmosphere play a huge role in customer decisions. Google Street View highlights your environment in a way standard photos cannot.",
      icon: Sparkles,
      color: "var(--accent-purple)"
    },
    {
      title: "Increase Visibility on Google",
      desc: "Businesses with immersive visual content attract more engagement on Google Search and Maps. Improve your digital presence and stand out from competitors with an interactive experience.",
      icon: Globe,
      color: "var(--accent-blue)"
    }
  ];

  const steps = [
    { title: "High-Quality 360° Capture", desc: "Professional high-resolution capture of your business location." },
    { title: "Professional Enhancement", desc: "Sleek image adjustments, blurring faces/plates, and dynamic stitching." },
    { title: "Google Maps Integration", desc: "Seamless publishing and connecting of nodes directly onto Google Maps." },
    { title: "Mobile-Friendly Viewing", desc: "Perfect responsive view across desktops, mobile apps, and tablet viewports." },
    { title: "Fast Project Delivery", desc: "Quick turnaround, making your business visible in a matter of days." }
  ];

  const industries = [
    "Retail Showrooms", "Hotels & Resorts", "Restaurants & Cafes", 
    "Schools & Colleges", "Clinics & Hospitals", "Offices & Coworking Spaces", 
    "Real Estate Projects"
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
                BEYOND JUST PHOTOS
              </span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Put Your Business on <span className="text-gradient">Google Street View</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                In today's digital world, customers explore businesses online before they visit in person. With 3Dmania's Google Street View Service, your customers can virtually walk through your business directly from Google Search and Google Maps.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontWeight: 700 }}>
                  Get Free Consultation
                </Link>
                <a href="tel:+919353456068" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontWeight: 600 }}>
                  Call Today
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
                  src="https://mania3d-assets.web.app/duroflex.jpeg" 
                  alt="Google Street View Showcase" 
                  style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', height: '350px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '40px',
                  left: '40px',
                  background: 'rgba(0, 0, 0, 0.75)',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <MapPin size={20} color="var(--accent-blue)" />
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem' }}>Experience Centre</p>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bangalore, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Google Street View Matters Section */}
      <section className="section glass" style={{ background: 'rgba(255,255,255,0.01)', borderBottom: '1px solid rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Google Street View Matters</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Immersive 360° visibility helps build trust and creates a stronger first impression.
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

      {/* Professional Capture & Google Integration Workflow */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Professional 360° Capture & Google Integration</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              At 3Dmania, we handle the complete process — from capture to seamless publishing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass"
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.03)',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(0, 242, 255, 0.1)', position: 'absolute', top: '15px', right: '20px' }}>
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} /> {step.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Project Showcase Section */}
      <section className="section glass" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Sample Google Street View Project</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Explore an immersive virtual walkthrough showcase in this high-definition embedded viewer.
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
            <iframe
              src="https://mania3d-assets.web.app/viruksha-avenue/index.html"
              title="Presidency School East Sample Tour"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                background: '#000'
              }}
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>Industries We Serve</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Immersive virtual tours elevate spaces across diverse domains.
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
              Let Customers Experience Your Business Before They Visit
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
              Give your business a stronger online presence with immersive Google Street View integration by 3Dmania. Ready to showcase your business on Google Maps?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontWeight: 700, borderRadius: '50px' }}>
                Get Free Consultation
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

export default GoogleStreetViewService;
