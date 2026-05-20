import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, MapPin, Info, ArrowRight, Video, Globe, Camera } from 'lucide-react';
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
    '360° Virtual Tours',
    'Google Street View',
    'Drone Photo & Videography',
    'Drone Survey & Mapping'
  ];

  const projects = [
    // 360° Virtual Tours
    {
      id: 1,
      name: 'Viruksha Avenue',
      location: 'Dharmapuri, Tamil Nadu',
      category: '360° Virtual Tours',
      description: 'An immersive 3D virtual tour of a premium residential development featuring high-resolution panoramas and interactive hotspots.',
      image: 'https://mania3d-assets.web.app/viruksha-avenue/preview.jpg',
      tourLink: 'https://mania3d-assets.web.app/viruksha-avenue/index.html'
    },
    {
      id: 2,
      name: 'Godwin Public School',
      location: 'Bangalore, Karnataka',
      category: '360° Virtual Tours',
      description: 'A comprehensive virtual exploration of the school campus, classrooms, and facilities.',
      image: 'https://mania3d-assets.web.app/godwin-public-school/preview.jpg',
      tourLink: 'https://mania3d-assets.web.app/godwin-public-school/index.html'
    },
    {
      id: 3,
      name: 'Presidency School East',
      location: 'Bangalore, Karnataka',
      category: '360° Virtual Tours',
      description: 'An immersive tour of the prestigious Presidency School East campus and its modern infrastructure.',
      image: 'https://mania3d-assets.web.app/presidency-school-east/preview.jpg',
      tourLink: 'https://mania3d-assets.web.app/presidency-school-east/index.html'
    },
    {
      id: 4,
      name: 'Prestige Villa',
      location: 'Bangalore, Karnataka',
      category: '360° Virtual Tours',
      description: 'Explore the elegance and luxury of this premium villa through a detailed 3D walk-through.',
      image: 'https://mania3d-assets.web.app/prestige-villa/preview.jpg',
      tourLink: 'https://mania3d-assets.web.app/prestige-villa/index.html'
    },

    // Google Street View
    {
      id: 12,
      name: 'Duroflex Experience Centre',
      location: 'HSR Layout, Bangalore',
      category: 'Google Street View',
      description: 'Step inside the premium sleep experience centre and explore their range of mattresses and sleep solutions in high-definition 360°.',
      image: 'https://mania3d-assets.web.app/duroflex.jpeg',
      tourLink: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=12.920298,77.651708'
    },
    {
      id: 13,
      name: 'Oyster Bar & Kitchen',
      location: 'HSR Layout, Bangalore',
      category: 'Google Street View',
      description: 'Discover the vibrant ambiance and elegant interiors of this premium dining destination through an immersive virtual walkthrough.',
      image: 'https://mania3d-assets.web.app/oyster-bar-kitchen.jpg',
      tourLink: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=12.911895,77.637997'
    },
    {
      id: 14,
      name: 'US Polo Assn.',
      location: 'Domlur, Bangalore',
      category: 'Google Street View',
      description: 'Explore the latest fashion collections and the premium store layout of US Polo Assn in this detailed Google Street View integration.',
      image: 'https://mania3d-assets.web.app/polo.jpg',
      tourLink: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=12.969359,77.641236'
    },
    {
      id: 15,
      name: 'Luxury Cart',
      location: 'Gurugram, Haryana',
      category: 'Google Street View',
      description: 'A high-end automotive showroom experience, allowing customers to virtually browse premium vehicles and the showroom facility.',
      image: 'https://mania3d-assets.web.app/cart.avif',
      tourLink: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=28.437497,77.103206'
    },

    // Drone Photo & Videography (UPDATED WITH DRONE1-7 AND VIDEO)
    {
      id: 11,
      name: 'Viruksha Avenue Drone Marketing',
      location: 'Dharmapuri, Tamil Nadu',
      category: 'Drone Photo & Videography',
      description: 'An immersive cinematic video detailing complete property access and surrounding developments.',
      image: '/viruksha.png',
      video: 'https://mania3d-assets.web.app/Viruksha Avenue First Cut.mp4',
      tourLink: '#',
      type: 'video'
    },
    {
      id: 5,
      name: 'Drone Shoot in Bangalore',
      location: 'Bangalore, Karnataka',
      category: 'Drone Photo & Videography',
      description: 'A beautiful high-altitude capture highlighting modern villa architecture and plotted development layouts.',
      image: 'https://mania3d-assets.web.app/drone1.jpeg',
      tourLink: '#',
      type: 'photo'
    },
    {
      id: 6,
      name: 'Aerial Photography in Bangalore',
      location: 'Hosur, Tamil Nadu',
      category: 'Drone Photo & Videography',
      description: 'High-quality drone photography capturing expansive urban developments, infrastructure progress, and community layouts from an elevated perspective.',
      image: 'https://mania3d-assets.web.app/drone2.jpeg',
      tourLink: '#',
      type: 'photo'
    },
    {
      id: 7,
      name: 'Coastal Aerial Drone Shots',
      location: 'Goa, India',
      category: 'Drone Photo & Videography',
      description: 'Stunning high-altitude drone photography providing breathtaking aerial views of waterfront properties and luxury resort destinations.',
      image: 'https://mania3d-assets.web.app/drone3.jpeg',
      tourLink: '#',
      type: 'photo'
    },
    {
      id: 8,
      name: 'Industrial Drone Photography',
      location: 'Chennai, Tamil Nadu',
      category: 'Drone Photo & Videography',
      description: 'Detailed aerial imaging using advanced drone technology to capture manufacturing sites, industrial facilities, and large-scale commercial assets.',
      image: 'https://mania3d-assets.web.app/drone4.jpeg',
      tourLink: '#',
      type: 'photo'
    },
    {
      id: 10,
      name: 'Premium Property Showcase',
      location: 'Bangalore, Karnataka',
      category: 'Drone Photo & Videography',
      description: 'Detailed high-definition layout boundary imaging and plotted developer layout visual drone shots.',
      image: 'https://mania3d-assets.web.app/drone7.JPG',
      tourLink: '#',
      type: 'photo'
    },

    // Drone Survey & Mapping (NEW CATEGORY SECTION)
    {
      id: 16,
      name: 'DEM & DTM Map',
      location: 'Hosur, Tamil Nadu',
      category: 'Drone Survey & Mapping',
      description: 'High-precision 2D boundary land analysis and development layout mapping survey.',
      image: 'https://mania3d-assets.web.app/mapping.png',
      tourLink: '#'
    },
    {
      id: 17,
      name: 'Orthomosaic Map',
      location: 'Chennai, Tamil Nadu',
      category: 'Drone Survey & Mapping',
      description: 'Highly detailed vertical orthomosaic site survey maps for commercial engineering assessment.',
      image: 'https://mania3d-assets.web.app/mapping1.jpg',
      tourLink: '#'
    },
    {
      id: 18,
      name: 'Contour Map',
      location: 'Bangalore, Karnataka',
      category: 'Drone Survey & Mapping',
      description: 'Detailed top-down layout mapping outlining massive plotted layouts and terrain models.',
      image: 'https://mania3d-assets.web.app/mapping2.png',
      tourLink: '#'
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="page-container">
      <section className="section" style={{ paddingTop: 'clamp(5rem, 15vw, 8rem)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '1rem', fontWeight: 800 }}>
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '800px', margin: '0 auto' }}>
              Explore our unified work collection. Seamlessly filter through 360° virtual walkthroughs, professional drone media, official Google Street View maps, and high-precision mapping surveys.
            </p>
          </div>

          {/* Filters Bar */}
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

          {/* Projects Grid */}
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
                      {project.video ? (
                        <video
                          src={project.video}
                          poster={project.image}
                          controls
                          playsInline
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <img src={project.image} alt={project.name} />
                      )}
                      <div className="project-category-badge">{project.category}</div>
                    </div>
                    <div className="project-info" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>{project.name}</h3>

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
                        {project.category === '360° Virtual Tours' && (
                          <a
                            href={project.tourLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                          >
                            View Tour <Play size={16} fill="currentColor" />
                          </a>
                        )}
                        {project.category === 'Drone Photo & Videography' && (
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {project.video ? (
                              <button
                                className="btn btn-primary"
                                onClick={(e) => {
                                  // Request fullscreen and play
                                  const videoEl = e.currentTarget.closest('.project-card').querySelector('video');
                                  if (videoEl) {
                                    videoEl.play();
                                    if (videoEl.requestFullscreen) {
                                      videoEl.requestFullscreen();
                                    } else if (videoEl.webkitEnterFullscreen) {
                                      videoEl.webkitEnterFullscreen();
                                    } else if (videoEl.mozRequestFullScreen) {
                                      videoEl.mozRequestFullScreen();
                                    } else if (videoEl.msRequestFullscreen) {
                                      videoEl.msRequestFullscreen();
                                    }
                                  }
                                }}
                                style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                              >
                                Watch Fullscreen <Video size={16} />
                              </button>
                            ) : (
                              <a
                                href={project.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                              >
                                View Photo <Camera size={16} />
                              </a>
                            )}
                          </div>
                        )}
                        {project.category === 'Google Street View' && (
                          <a
                            href={project.tourLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                          >
                            View on Maps <Globe size={16} />
                          </a>
                        )}
                        {project.category === 'Drone Survey & Mapping' && (
                          <a
                            href={project.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                          >
                            View Survey Map <Globe size={16} />
                          </a>
                        )}
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
          background: #000;
        }
        .project-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image-container img {
          transform: scale(1.05);
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
          z-index: 10;
        }
        .project-info {
          padding: 2rem;
        }
      `}} />
    </div>
  );
};

export default Projects;
