import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img 
            src="/3Dmania_logo_name.png" 
            alt="3DMania" 
            className="logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary start-btn">
            Book Now
          </Link>
          
          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-overlay"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-menu"
            >
              <div className="mobile-menu-header">
                 <img src="/3Dmania_logo_name.png" alt="3DMania" style={{ height: '35px' }} />
                 <button onClick={() => setIsOpen(false)} className="close-btn"><X size={28} /></button>
              </div>
              <div className="mobile-links">
                {navLinks.map(link => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mobile-actions">
                  <Link to="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>Sign In</Link>
                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Start Free</Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
