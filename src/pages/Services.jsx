import React from 'react';

/**
 * Services Page Component
 * Renders technical capabilities leveraging fluid card wraps to support responsive dimensions on any device layout.
 */
function Services() {
  const technicalServicesList = [
    { id: 1, title: "Front-Facing AI Software Development", image: "/service1.jpg", description: "Building fast, responsive, and interactive frontend applications." },
    { id: 2, title: "Custom Model Hosting & API Infrastructure", image: "/service2.jpg", description: "Creating cross-platform mobile experiences for iOS and Android." },
    { id: 3, title: "MLOps Automation & Observability Systems", image: "/service3.jpg", description: "Writing clean, optimized scripts and object-oriented backend logic." },
  ];

  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Services I Offer</h1>
      <p style={{ color: '#555', marginBottom: '30px' }}>Here is a comprehensive breakdown of the core digital solutions I specialize in providing:</p>
      
      {/* Flex container configured with responsive wrap tracking parameters */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', // Adapts fluidly down to single file lists on compact viewports
        justifyContent: 'center', 
        gap: '30px', 
        marginTop: '20px'
      }}>
        {technicalServicesList.map((service) => (
          <div 
            key={service.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '25px', 
              borderRadius: '12px', 
              width: '100%',
              maxWidth: '320px', // Matches your projects width matrix exactly
              boxSizing: 'border-box',
              background: '#f9f9f9',
              textAlign: 'left', 
              boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between' 
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <img 
                src={service.image} 
                alt={service.title} 
                style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: '6px' }} 
              />
            </div>
            
            <div>
              <h3>{service.title}</h3>
              <p style={{ marginTop: '5px', color: '#555' }}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
