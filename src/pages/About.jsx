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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: 'clamp(2rem, 8vw, 4rem)', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>Who We Are</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: '1.8' }}>
                3DMania is a Bangalore-based company redefining how businesses showcase their spaces through immersive 360° virtual tours.
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                We combine technology and storytelling to create interactive experiences that allow customers to explore spaces as if they were physically present.
              </p>
              <div style={{ padding: '1.2rem', background: 'rgba(0, 242, 255, 0.05)', borderRadius: '15px', borderLeft: '4px solid var(--accent-blue)' }}>
                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 600, fontStyle: 'italic', color: 'var(--accent-blue)' }}>
                  "Take a Tour — Make a Deal"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass"
              style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '30px' }}
            >
              <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', marginBottom: '1.5rem' }}>What We Do</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  '360 Virtual Tours',
                  'Google Street View Integration',
                  'Drone Photo & Videography',
                  'Aerial Mapping & Survey',
                  'Visual Marketing Solutions'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
                    <CheckCircle color="var(--accent-blue)" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', marginTop: 'clamp(2.5rem, 6vw, 3rem)' }}>
            <motion.div
              whileHover={{ y: -10 }}
              className="glass"
              style={{ padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '24px', textAlign: 'center' }}
            >
              <div className="icon-circle" style={{ margin: '0 auto 1.5rem' }}><Eye size={30} /></div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', marginBottom: '1.2rem' }}>Vision</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                To transform how businesses connect with customers through immersive digital experiences.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="glass"
              style={{ padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '24px', textAlign: 'center' }}
            >
              <div className="icon-circle" style={{ margin: '0 auto 1.5rem' }}><Target size={30} /></div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', marginBottom: '1.2rem' }}>Mission</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                To provide high-quality, affordable, and customized solutions that help businesses grow.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="glass"
              style={{ padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '24px', textAlign: 'center' }}
            >
              <div className="icon-circle" style={{ margin: '0 auto 1.5rem' }}><Award size={30} /></div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', marginBottom: '1.2rem' }}>Core Value</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Innovation, Quality, and Customer-centricity in every frame we capture.
              </p>
            </motion.div>
          </div>

          {/* Founder Section */}
          <section style={{ marginTop: 'clamp(3rem, 8vw, 4rem)', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(2rem, 8vw, 4rem)', borderRadius: '30px' }}
            >
              <img src='https://mania3d-assets.web.app/profile.png' style={{ height: '300px', width: '300px', borderRadius: '10px', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', fontWeight: 800 }} />
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>Venkatesh</h2>
              <p style={{ color: 'var(--accent-blue)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 500, marginBottom: '1.5rem' }}>Founder & CEO</p>
              <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
                With 10+ years of experience in drone operations, 360° photography, and visual media solutions. Passionate about technology and digital experiences, Venkatesh started 3Dmania to help businesses showcase their spaces in a more immersive and interactive way through virtual tours, drone visuals, and modern digital solutions.

              </p>
            </motion.div>
          </section>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
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
