import React from 'react';

/**
 * Services Page Component
 * Renders technical capabilities leveraging upscaled asset media from the public directory
 * to match the Projects page card proportions identically.
 */
function Services() {
  // Requirement 2b: Clearly structured collection utilizing public folder path roots
  const technicalServicesList = [
    { id: 1, title: "Front-Facing AI Software Development", image: "/service1.jpg", description: "Building fast, responsive, and interactive frontend applications." },
    { id: 2, title: "Custom Model Hosting & API Infrastructure", image: "/service2.jpg", description: "Creating cross-platform mobile experiences for iOS and Android." },
    { id: 3, title: "MLOps Automation & Observability Systems", image: "/service3.jpg", description: "Writing clean, optimized scripts and object-oriented backend logic." },
  ];

  return (
    <div style={{ padding: '60px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Services I Offer</h1>
      <p style={{ color: '#555', marginBottom: '30px' }}>Here is a comprehensive breakdown of the core digital solutions I specialize in providing:</p>
      
      {/* Requirement 1h: Centered row layout forcing card objects inline using dimensions identical to the Projects view */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'nowrap', 
        justifyContent: 'center', 
        gap: '40px', 
        marginTop: '20px',
        overflowX: 'auto'
      }}>
        {technicalServicesList.map((service) => (
          <div 
            key={service.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '25px', 
              borderRadius: '12px', 
              width: '320px', // Matches the Projects card width exactly
              flexShrink: 0,
              background: '#f9f9f9',
              textAlign: 'left', 
              boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between' 
            }}
          >
            {/* Visual asset icon container block - upscaled to look exactly like project cards */}
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <img 
                src={service.image} 
                alt={service.title} 
                style={{ 
                  width: '100%', // Fills the card width out fully to match project images
                  height: '170px', // Set to the exact same height as your project images
                  objectFit: 'cover', // Ensures the image fills the boundaries cleanly without looking stretched
                  borderRadius: '6px' 
                }} 
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
