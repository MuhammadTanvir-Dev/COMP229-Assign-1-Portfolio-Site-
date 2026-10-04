import React from 'react';

/**
 * Projects Page Component
 * Displays the 3 mandatory highlighted engineering initiatives dynamically,
 * shifting from a side-by-side layout on desktop to a neat vertical column stack on mobile screen widths.
 */
function Projects() {
  const technicalProjects = [
    { id: 1, title: "E-Commerce Application", image: "/project1.jpg", role: "Frontend Developer", outcome: "Engineered responsive interface handling real-time item operations smoothly." },
    { id: 2, title: "Task Manager Dashboard", image: "/project2.jpg", role: "Full-Stack Engineer", outcome: "Built scalable relational schedules reducing timeline update latencies." },
    { id: 3, title: "Weather Prediction UI", image: "/project3.jpg", role: "UI/UX Developer", outcome: "Integrated multi-sourced third-party atmospheric tracking APIs cleanly." }
  ];

  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Highlighted Initiatives</h1>
      <p style={{ color: '#555', marginBottom: '30px' }}>A compilation of core software projects detailing my roles and successful deliverables:</p>
      
      {/* Adjusted from 'nowrap' to 'wrap' to ensure perfect responsiveness on smaller screen parameters */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', // Allows cards to fold beneath each other automatically on phones
        justifyContent: 'center', 
        gap: '30px', 
        marginTop: '20px'
      }}>
        {technicalProjects.map(project => (
          <div 
            key={project.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '25px', 
              borderRadius: '12px', 
              width: '100%',
              maxWidth: '320px', // Restricts expansion boundaries cleanly
              boxSizing: 'border-box',
              background: '#f9f9f9', 
              textAlign: 'left', 
              boxShadow: '0 4px 10px rgba(0,0,0,0.04)' 
            }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: '100%', height: '170px', borderRadius: '6px', objectFit: 'cover', marginBottom: '15px' }} 
            />
            <h3>{project.title}</h3>
            <p><strong>Role:</strong> {project.role}</p>
            <p style={{ marginTop: '5px', color: '#555' }}><strong>Outcome:</strong> {project.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
