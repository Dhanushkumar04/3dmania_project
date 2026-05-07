import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1.5rem' }}>About <span className="text-gradient">3DMania</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Redefining how businesses showcase their spaces through immersive 360° virtual tours.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Who We Are</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                3DMania is a Bangalore-based company redefining how businesses showcase their spaces through immersive 360° virtual tours.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                We combine technology and storytelling to create interactive experiences that allow customers to explore spaces as if they were physically present.
              </p>
              <div style={{ padding: '1.5rem', background: 'rgba(0, 242, 255, 0.05)', borderRadius: '15px', borderLeft: '4px solid var(--accent-blue)' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 600, fontStyle: 'italic', color: 'var(--accent-blue)' }}>
                  "Take a Tour — Make a Deal"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass"
              style={{ padding: '3rem', borderRadius: '30px' }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>What We Do</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  '360 Virtual Tours',
                  'Google Street View Integration',
                  'Drone Photo & Videography',
                  'Aerial Mapping & Survey',
                  'Visual Marketing Solutions'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                    <CheckCircle color="var(--accent-blue)" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '6rem' }}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass" 
              style={{ padding: '3rem', borderRadius: '24px', textAlign: 'center' }}
            >
              <div className="icon-circle" style={{ margin: '0 auto 1.5rem' }}><Eye size={35} /></div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Vision</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                To transform how businesses connect with customers through immersive digital experiences.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass" 
              style={{ padding: '3rem', borderRadius: '24px', textAlign: 'center' }}
            >
              <div className="icon-circle" style={{ margin: '0 auto 1.5rem' }}><Target size={35} /></div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Mission</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                To provide high-quality, affordable, and customized solutions that help businesses grow.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass" 
              style={{ padding: '3rem', borderRadius: '24px', textAlign: 'center' }}
            >
              <div className="icon-circle" style={{ margin: '0 auto 1.5rem' }}><Award size={35} /></div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Core Value</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Innovation, Quality, and Customer-centricity in every frame we capture.
              </p>
            </motion.div>
          </div>

          {/* Founder Section */}
          <section style={{ marginTop: '8rem', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem', borderRadius: '30px' }}
            >
              <div style={{ 
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                background: 'linear-gradient(45deg, var(--accent-blue), #555)', 
                margin: '0 auto 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: '#fff',
                fontWeight: 800
              }}>
                VK
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Venkatesh Kumar</h2>
              <p style={{ color: 'var(--accent-blue)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '2rem' }}>Founder & CEO</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
                Lead by passion for technology and visual storytelling, Venkatesh established 3DMania to bridge the gap between physical spaces and the digital world.
              </p>
            </motion.div>
          </section>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .icon-circle {
          width: 80px;
          height: 80px;
          background: rgba(0, 242, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
        }
      `}} />
    </div>
  );
};

export default About;
