import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Get In <span className="text-gradient">Touch</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Have a project in mind? Let's discuss how we can bring your space to the digital world.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div className="contact-item">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Call Us</h4>
                    <p style={{ fontSize: '1.1rem', color: 'var(--accent-blue)' }}>+91 9353456068</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box"><Mail size={24} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email Us</h4>
                    <p style={{ fontSize: '1.1rem', color: 'var(--accent-blue)' }}>info@3dmania.in</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box"><Globe size={24} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Website</h4>
                    <p style={{ fontSize: '1.1rem', color: 'var(--accent-blue)' }}>https://3dmania.in/</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box"><MapPin size={24} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Location</h4>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Bangalore, India</p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/919353456068" 
                  className="btn btn-outline" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '1rem', 
                    padding: '1.2rem',
                    color: '#25d366',
                    borderColor: '#25d366'
                  }}
                >
                  <MessageSquare size={24} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass"
              style={{ padding: '3rem', borderRadius: '30px' }}
            >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea rows="5" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem' }}>
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-item {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .icon-box {
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.05);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .form-group label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .form-group input, .form-group textarea {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1rem;
          border-radius: 12px;
          color: #fff;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-blue);
        }
      `}} />
    </div>
  );
};

export default Contact;
