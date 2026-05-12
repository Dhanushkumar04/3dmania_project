import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, MapPin, Info, ArrowRight, Camera, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const DroneProjects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Aerial Photography', 'Cinematic Video', 'Industrial'];

  const projects = [
    {
      id: 1,
      name: 'Skyline Residential Complex',
      location: 'Bangalore, Karnataka',
      category: 'Aerial Photography',
      description: 'Stunning high-altitude photography capturing the complete layout and surroundings of a luxury residential complex.',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
      actionLink: '#',
      type: 'photo'
    },
    {
      id: 2,
      name: 'Industrial Infrastructure Survey',
      location: 'Hosur, Tamil Nadu',
      category: 'Industrial',
      description: 'Detailed aerial inspection and survey of a large-scale manufacturing unit for maintenance and planning.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=1200',
      actionLink: '#',
      type: 'survey'
    },
    {
      id: 3,
      name: 'Coastal Resort Cinematic',
      location: 'Goa, India',
      category: 'Cinematic Video',
      description: 'Breathtaking 4K cinematic video showcasing the beachfront property and its amenities from unique perspectives.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200',
      actionLink: '#',
      type: 'video'
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
            <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '1rem' }}>Drone <span className="text-gradient">Photo & Videography</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '800px', margin: '0 auto' }}>
              Capture the world from above with our professional drone photography and videography services.
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
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="project-card glass"
                  style={{ display: 'flex', flexDirection: 'column' }}
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
                      <button
                        className="btn btn-primary"
                        style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                      >
                        {project.type === 'video' ? 'Watch Video' : 'View Gallery'}
                        {project.type === 'video' ? <Video size={16} /> : <Camera size={16} />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

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
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Need an aerial perspective?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
              From cinematic videos to industrial surveys, our drone services cover it all.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>
              Contact Us <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
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

export default DroneProjects;
