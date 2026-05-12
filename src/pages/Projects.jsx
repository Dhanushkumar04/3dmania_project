import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, MapPin, Tag, Info, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const { hash } = useLocation();
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setHighlightedId(id);

      // Give the page a moment to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);

      // Remove highlight after 4 seconds
      const timer = setTimeout(() => setHighlightedId(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  const categories = [
    'All',
    'Real Estate',
    'Schools & Colleges'

  ];

  const projects = [
    {
      id: 9,
      name: 'Viruksha Avenue',
      location: 'Dharmapuri, Tamil Nadu',
      category: 'Real Estate',
      description: 'An immersive 3D virtual tour of a premium residential development featuring high-resolution panoramas and interactive hotspots.',
      image: 'https://mania3d-assets.web.app/viruksha-avenue/preview.jpg',
      tourLink: 'https://mania3d-assets.web.app/viruksha-avenue/index.html'
    },
    {
      id: 10,
      name: 'Godwin Public School',
      location: 'Bangalore, Karnataka',
      category: 'Schools & Colleges',
      description: 'A comprehensive virtual exploration of the school campus, classrooms, and facilities.',
      image: 'https://mania3d-assets.web.app/godwin-public-school/preview.jpg',
      tourLink: 'https://mania3d-assets.web.app/godwin-public-school/index.html'
    },
    {
      id: 11,
      name: 'Presidency School East',
      location: 'Bangalore, Karnataka',
      category: 'Schools & Colleges',
      description: 'An immersive tour of the prestigious Presidency School East campus and its modern infrastructure.',
      image: 'https://mania3d-assets.web.app/presidency-school-east/preview.jpg',
      tourLink: 'https://mania3d-assets.web.app/presidency-school-east/index.html'
    },
    {
      id: 12,
      name: 'Prestige Villa',
      location: 'Bangalore, Karnataka',
      category: 'Real Estate',
      description: 'Explore the elegance and luxury of this premium villa through a detailed 3D walk-through.',
      image: 'https://mania3d-assets.web.app/prestige-villa/preview.jpg',
      tourLink: 'https://mania3d-assets.web.app/prestige-villa/index.html'
    }

  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '1rem' }}>360°<span className="text-gradient"> Virtual Tours</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '800px', margin: '0 auto' }}>
              Explore our work across different industries and see how we transform spaces into digital experiences.
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', borderRadius: '8px' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 2.5rem)'
          }}>
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => {
                const projectSlug = project.name.toLowerCase().replace(/\s+/g, '-');
                const isHighlighted = highlightedId === projectSlug;

                return (
                  <motion.div
                    layout
                    key={project.id}
                    id={projectSlug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: isHighlighted ? 1.05 : 1,
                      borderColor: isHighlighted ? 'var(--accent-blue)' : 'rgba(255,255,255,0.05)',
                      boxShadow: isHighlighted ? '0 0 40px var(--accent-glow)' : 'none'
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="project-card glass"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderWidth: '1px',
                      borderStyle: 'solid'
                    }}
                  >
                    <div className="project-image-container">
                      <img src={project.image} alt={project.name} />
                      <div className="project-category-badge">{project.category}</div>
                    </div>
                    <div className="project-info" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.name}</h3>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          <MapPin size={16} color="var(--accent-blue)" />
                          {project.location}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                          <Info size={16} color="var(--accent-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                          {project.description}
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto' }}>
                        <a
                          href={project.tourLink}
                          className="btn btn-primary"
                          style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                        >
                          View Tour <Play size={16} fill="currentColor" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              marginTop: 'clamp(3rem, 10vw, 6rem)',
              padding: 'clamp(2rem, 8vw, 4rem)',
              borderRadius: '24px',
              textAlign: 'center',
              border: '1px solid var(--accent-blue)'
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Want your space featured here?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
              Start your project today and let us help you reach a global audience.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>
              Get Started Now <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .project-card {
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-blue);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .project-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .project-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image-container img {
          transform: scale(1.1);
        }
        .project-category-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--accent-blue);
          color: #000;
          padding: 0.4rem 1rem;
          border-radius: 5px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .project-info {
          padding: 2rem;
        }
      `}} />
    </div>
  );
};

export default Projects;
