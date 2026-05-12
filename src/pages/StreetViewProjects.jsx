import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, ArrowRight, Globe, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const StreetViewProjects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Retail', 'Restaurant', 'Public Spaces'];

  const projects = [
    {
      id: 1,
      name: 'Modern Residential Complex',
      location: 'HSR Layout, Bangalore',
      category: 'Residential',
      description: 'A comprehensive indoor street view of a modern residential complex, highlighting amenities and architecture.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
      actionLink: 'https://www.google.com/maps/embed?pb=!4v1778431172379!6m8!1m7!1sCAoSHENJQUJJaENsOUpHUmlHLUJ5Ti1Ebm9mdzNIbE0.!2m2!1d12.92029806020971!2d77.65170802805414!3f90.0432562886043!4f11.844887779717737!5f0.7820865974627469',
    },
    {
      id: 2,
      name: 'Premium Commercial Space',
      location: 'HSR Layout, Bangalore',
      category: 'Commercial',
      description: 'Showcasing the expansive interiors and professional environment of a premium commercial building.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
      actionLink: 'https://www.google.com/maps/embed?pb=!4v1778431771096!6m8!1m7!1sCAoSHENJQUJJaEFHYnp6Z1lUbDdRV2Utd19rQUI1STk.!2m2!1d12.9118959420352!2d77.63799766593304!3f7.2932957520471895!4f-12.158418109892565!5f0.7820865974627469',
    },
    {
      id: 3,
      name: 'Tech Hub Office',
      location: 'Domlur, Bangalore',
      category: 'Office',
      description: 'Interactive tour of a high-tech office space, perfect for attracting top talent and clients.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
      actionLink: 'https://www.google.com/maps/embed?pb=!4v1778431866670!6m8!1m7!1sCAoSLEFGMVFpcE1FS0xRS1ZycDJiRkl2MjRGcVF2YnBLN0VfOGhaZFJ3SUtfZUlu!2m2!1d12.96935983406239!2d77.64123685270948!3f268.91578480080346!4f7.7512704539610695!5f0.5970117501821992',
    },
    {
      id: 4,
      name: 'Luxury Showroom',
      location: 'Gurgaon, Haryana',
      category: 'Retail',
      description: 'A detailed walkthrough of a luxury retail showroom, offering customers an immersive preview of the products.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
      actionLink: 'https://www.google.com/maps/embed?pb=!4v1778431937192!6m8!1m7!1sCAoSHENJQUJJaEFsaHhlY1U4LWNKS244LU95TkxWMF8.!2m2!1d28.4374978554924!2d77.1032061962073!3f252.40179826129307!4f3.781663389249914!5f0.7820865974627469',
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
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1.5rem' }}>Google <span className="text-gradient">Street View</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Put your business on the map with professional Google Street View integration.
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '2.5rem' 
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
                      <a 
                        href={project.actionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary" 
                        style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                      >
                        View on Maps <Globe size={16} />
                      </a>
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
              marginTop: '6rem', 
              padding: '4rem', 
              borderRadius: '24px', 
              textAlign: 'center',
              border: '1px solid var(--accent-blue)'
            }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to be on the map?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              Increase your online visibility and build trust with Google Street View.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Get Started <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
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

export default StreetViewProjects;
