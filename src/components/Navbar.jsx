import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      subLinks: [
        { name: '360° Virtual Tours', path: '/virtual-tours' },
        { name: 'Google Street View', path: '/google-street-view' },
        { name: 'Drone Photo & Videography', path: '/drone-services' },
        { name: 'Drone Aerial Survey', path: '/drone-survey' }
      ]
    },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
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
            <div 
              key={link.name} 
              className="nav-item-wrapper"
              ref={link.subLinks ? dropdownRef : null}
              onMouseEnter={() => link.subLinks && setDropdownOpen(true)}
              onMouseLeave={() => link.subLinks && setDropdownOpen(false)}
            >
              {link.subLinks ? (
                <div className="dropdown-container">
                  {/* Clicking the text navigates to /services */}
                  <Link
                    to={link.path}
                    className={`nav-item ${
                      location.pathname === link.path || link.subLinks.some(s => location.pathname === s.path) ? 'active' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Separate chevron button toggles dropdown */}
                  <button
                    onClick={() => setDropdownOpen(prev => !prev)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0 4px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#fff',
                      opacity: 0.7,
                    }}
                    aria-label="Toggle services dropdown"
                  >
                    <ChevronDown size={16} className={`chevron ${dropdownOpen ? 'rotate' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="dropdown-menu"
                        style={{ pointerEvents: 'auto' }}
                      >
                        {link.subLinks.map(sub => (
                          <Link 
                            key={sub.name} 
                            to={sub.path} 
                            className={`dropdown-item ${location.pathname === sub.path ? 'active' : ''}`}
                            onClick={() => setDropdownOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  to={link.path} 
                  className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="desktop-socials">
            <SocialIcon url="https://wa.me/919353456068" target="_blank" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://www.instagram.com/v3dmania/" target="_blank" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://www.linkedin.com/company/v3dmania/" target="_blank" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://www.facebook.com/profile.php?id=61571287546052" target="_blank" style={{ height: 35, width: 35 }} />
          </div>
          
          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu Overlay — rendered outside <nav> to avoid clipping */}
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
                  <div key={link.name}>
                    {link.subLinks ? (
                      <div className="mobile-dropdown-section">
                        <div className="mobile-link parent-link">
                          {link.name}
                        </div>
                        <div className="mobile-sublinks">
                          {link.subLinks.map(sub => (
                            <Link 
                              key={sub.name} 
                              to={sub.path} 
                              className={`mobile-sublink ${location.pathname === sub.path ? 'active' : ''}`}
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link 
                        to={link.path} 
                        className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.2rem' }}>
                  <a 
                    href="https://wa.me/919353456068" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mobile-social-text-link"
                    style={{ color: '#25D366' }}
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61571287546052" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mobile-social-text-link"
                    style={{ color: '#1877F2' }}
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/v3dmania/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mobile-social-text-link"
                    style={{ color: '#0077B5' }}
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/v3dmania/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mobile-social-text-link"
                    style={{ color: '#E1306C' }}
                  >
                    Instagram
                  </a>
                  <a 
                    href="tel:+919353456068" 
                    className="mobile-social-text-link"
                    style={{ color: 'var(--accent-blue)' }}
                  >
                    Phone
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
