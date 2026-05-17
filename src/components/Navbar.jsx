import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      subLinks: [
        { name: 'Overall Services', path: '/services' },
        { name: '360° Virtual Tours', path: '/virtual-tours' },
        { name: 'Drone Photo & Videography', path: '/drone-services' },
        { name: 'Google Street View', path: '/google-street-view' },
        { name: 'Drone Aerial Survey', path: '/drone-survey' }
      ]
    },
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
            <div 
              key={link.name} 
              className="nav-item-wrapper"
              onMouseEnter={() => link.subLinks && setDropdownOpen(true)}
              onMouseLeave={() => link.subLinks && setDropdownOpen(false)}
            >
              {link.subLinks ? (
                <div className="dropdown-container">
                  <span className={`nav-item ${location.pathname.includes(link.path) || link.subLinks.some(s => location.pathname === s.path) ? 'active' : ''}`}>
                    {link.name} <ChevronDown size={16} className={`chevron ${dropdownOpen ? 'rotate' : ''}`} />
                  </span>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="dropdown-menu glass"
                      >
                        {link.subLinks.map(sub => (
                          <Link 
                            key={sub.name} 
                            to={sub.path} 
                            className={`dropdown-item ${location.pathname === sub.path ? 'active' : ''}`}
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
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
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
                <div className="mobile-actions" style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', padding: '1.5rem 0' }}>
                  <SocialIcon url="https://wa.me/919353456068" target="_blank" style={{ height: 40, width: 40 }} />
                  <SocialIcon url="https://www.instagram.com/v3dmania/" target="_blank" style={{ height: 40, width: 40 }} />
                  <SocialIcon url="https://www.linkedin.com/company/v3dmania/" target="_blank" style={{ height: 40, width: 40 }} />
                  <SocialIcon url="https://www.facebook.com/profile.php?id=61571287546052" target="_blank" style={{ height: 40, width: 40 }} />
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
