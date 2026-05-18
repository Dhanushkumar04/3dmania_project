import { Link } from 'react-router-dom';
import { Globe, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { Facebook as FB, Instagram as IG, Linkedin as LI } from './Icons';
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
  return (
    <footer className="footer glass" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '4rem',
          padding: '4rem 0'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <img
              src="/3Dmania_logo_name.png"
              alt="3DMania Logo"
              style={{ height: '50px', width: 'auto', objectFit: 'contain', marginLeft: '-5px' }}
            />
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Redefining how businesses showcase their spaces through immersive 360° virtual tours. Based in Bangalore, serving globally.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
              <li><Link to="/about" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>About Us</Link></li>
              <li><Link to="/services" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Services</Link></li>
              <li><Link to="/projects" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Portfolio</Link></li>
              <li><Link to="/contact" className="footer-link" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>Contact Details</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ color: 'var(--text-muted)' }}>
                <strong>Phone:</strong> <br />
                <a href="tel:+919353456068" style={{ color: 'inherit' }}>+91-9353456068</a>
              </li>
              <li style={{ color: 'var(--text-muted)' }}>
                <strong>Email:</strong> <br />
                <a href="mailto:info@3dmania.in" style={{ color: 'inherit' }}>info@3dmania.in</a>
              </li>
              <li style={{ color: 'var(--text-muted)' }}>
                <strong>Location:</strong> <br />
                Bangalore, India
              </li>
            </ul>
          </div>

          {/* Tagline */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>Tagline</h4>
            <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '1.1rem' }}>
              "Giving you the confidence even before you visit"
            </p>
            <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2rem' }}>
              <SocialIcon url="https://www.facebook.com/profile.php?id=61571287546052" target="_blank" />
              <SocialIcon url="https://www.linkedin.com/company/v3dmania/" target="_blank" />
              <SocialIcon url="https://www.instagram.com/v3dmania/" target="_blank" />
              <SocialIcon url="https://wa.me/919353456068" target="_blank" />
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '2rem 0',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}>
          Copyright © 2025 3D Mania. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
