import { motion } from 'framer-motion';
import { Camera, MapPin, Drone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const galleries = {
    "360° Virtual Tours": [
      { url: "https://mania3d-assets.web.app/Hotel_2.jpg", label: "Hospitality & Resorts" },
      { url: "https://mania3d-assets.web.app/Coworking-2.webp", label: "Coworking Spaces" },
      { url: "https://mania3d-assets.web.app/Showroom_2.jpg", label: "Premium Retail" },
      { url: "https://mania3d-assets.web.app/Showroom_3.jpg", label: "Luxury Showrooms" }
    ],
    "Drone Photo & Videography": [
      { url: "https://mania3d-assets.web.app/drone1.jpeg", label: "Aerial Property Shoots" },
      { url: "https://mania3d-assets.web.app/drone2.jpeg", label: "Urban Layout Scale" },
      { url: "https://mania3d-assets.web.app/drone3.jpeg", label: "Coastal Horizon Captures" }
    ],
    "Google Street View": [
      { url: "https://mania3d-assets.web.app/duroflex.jpeg", label: "Duroflex Experience Centre" },
      { url: "https://mania3d-assets.web.app/polo.jpg", label: "US Polo Assn. Store" }
    ]
  };

  const serviceCategories = [
    {
      title: "360° Virtual Tours",
      description: "At 3Dmania, we create immersive 360° virtual tours that let your customers explore your spaces anytime, from anywhere. From real estate properties to showrooms, hotels, and restaurants, we capture your location in stunning detail.",
      icon: <Camera size={40} />,
      link: "/virtual-tours",
      items: [
        { title: 'Real Estate', desc: 'Let buyers explore properties virtually, saving time and increasing enquiries.' },
        { title: 'Retail Showrooms', desc: 'Display product range and ambience online. Attract more walk-ins.' },
        { title: 'Hospitality', desc: 'Allow guests to experience rooms and amenities before booking.' },
        { title: 'Coworking Spaces', desc: 'Showcase workspaces and community areas in 360°.' },
        { title: 'Interior Design', desc: 'Present completed projects in interactive, high-quality tours.' },
        { title: 'Educational Institutions', desc: 'Offer virtual campus tours of classrooms, labs, and common areas.' }
      ]
    },
    {
      title: "Drone Photo & Videography",
      description: "At 3DMania, we offer high-quality drone photography and videography tailored for real estate, infrastructure, and commercial projects, from cinematic property showcases to detailed aerial mapping.",
      icon: <Drone size={40} />,
      link: "/drone-services",
      items: [
        { title: 'Drone Photography', desc: 'Capture stunning aerial images of residential and plotted properties.' },
        { title: 'Drone Videography', desc: 'Create dynamic property videos with smooth flythrough sequences.' },
        { title: '360° Drone Virtual Tours', desc: 'Offer a fully immersive aerial view of your property or project site.' },
        { title: 'Aerial Engineering', desc: 'Provide precise drone surveys, 2D mapping, and 3D models.' },
        { title: 'Route Videos', desc: 'Highlight property access and location advantages.' },
        { title: 'Marketing Shoots', desc: 'Customized aerial solutions for real estate and hospitality.' }
      ]
    },
    {
      title: "Google Street View",
      description: "Take your business to the next level with 3DMania's Google Street View service. As a Google Street View Trusted Photographer, we help you showcase your interiors on Google Maps.",
      icon: <MapPin size={40} />,
      link: "/google-street-view",
      items: [
        { title: 'Google Maps Integration', desc: 'Walk-through your space directly from search results.' },
        { title: 'Local SEO Boost', desc: 'Improve your visibility on local business listings.' },
        { title: 'Verified Photography', desc: 'Trust-building high-resolution imagery for your business profile.' },
        { title: '24/7 Virtual Showroom', desc: 'Accessible to potential customers around the clock.' }
      ]
    }
  ];

  return (
    <div className="page-container">
      <section className="section" style={{ paddingTop: 'clamp(5rem, 15vw, 8rem)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800 }}>Our <span className="text-gradient">Services</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Redefining how businesses showcase their spaces through cutting-edge technology and innovative storytelling.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 12vw, 8rem)' }}>
            {serviceCategories.map((cat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass"
                style={{ padding: 'clamp(1.5rem, 5vw, 4rem)', borderRadius: '30px' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '3rem', alignItems: 'start' }}>
                  {/* Left Column - Details */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                      <div style={{ color: 'var(--accent-blue)', background: 'rgba(0, 242, 255, 0.1)', padding: '0.8rem', borderRadius: '15px' }}>
                        {cat.icon}
                      </div>
                      <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', fontWeight: 800 }}>{cat.title}</h2>
                    </div>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                      {cat.description}
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                      {cat.items.slice(0, 4).map((item, i) => (
                        <div key={i} className="service-sub-card">
                          <h4 style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700 }}>
                            <ArrowRight size={14} /> {item.title}
                          </h4>
                          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <Link to={cat.link} className="btn btn-primary" style={{ padding: '0.8rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Right Column - Visual Gallery Grid */}
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                      Visual Showcase
                    </h3>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: galleries[cat.title].length > 2 ? '1fr 1fr' : '1fr', 
                      gap: '1rem' 
                    }}>
                      {galleries[cat.title].map((img, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.03, y: -5 }}
                          style={{ 
                            position: 'relative', 
                            height: galleries[cat.title].length > 2 ? '150px' : '220px', 
                            borderRadius: '16px', 
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.08)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                          }}
                        >
                          <img 
                            src={img.url} 
                            alt={img.label} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                            padding: '1.5rem 1rem 0.8rem 1rem',
                            color: '#fff',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            textAlign: 'left'
                          }}>
                            {img.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass"
            style={{ 
              marginTop: 'clamp(3rem, 10vw, 6rem)', 
              padding: 'clamp(2rem, 8vw, 4rem)', 
              borderRadius: '30px', 
              textAlign: 'center',
              border: '1px solid var(--accent-blue)'
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1rem', fontWeight: 800 }}>Start Your Project Today</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Let's create something amazing together.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Get a Free Quote <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .service-sub-card {
          padding: 1.2rem;
          background: rgba(255,255,255,0.02);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease;
        }
        .service-sub-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: var(--accent-blue);
          transform: translateX(5px);
        }
      `}} />
    </div>
  );
};

export default Services;
