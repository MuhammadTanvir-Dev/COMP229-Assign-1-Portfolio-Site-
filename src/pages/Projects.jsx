import React from 'react';
import proj1 from '../assets/project1.jpg';
import proj2 from '../assets/project2.jpg';
import proj3 from '../assets/project3.jpg';

/**
 * Projects Page Component
 * Renders the 3 mandatory highlighted engineering initiatives dynamically 
 * laid out side-by-side inside a single centered row footprint.
 */
function Projects() {
  // Requirement 2b: Contextual array managing structural data parameters for highlighted deliverables
  const technicalProjects = [
    { id: 1, title: "E-Commerce Application", image: proj1, role: "Frontend Developer", outcome: "Engineered responsive interface handling real-time item operations smoothly." },
    { id: 2, title: "Task Manager Dashboard", image: proj2, role: "Full-Stack Engineer", outcome: "Built scalable relational schedules reducing timeline update latencies." },
    { id: 3, title: "Weather Prediction UI", image: proj3, role: "UI/UX Developer", outcome: "Integrated multi-sourced third-party atmospheric tracking APIs cleanly." }
  ];

  return (
    <div style={{ padding: '60px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Highlighted Initiatives</h1>
      <p style={{ color: '#555', marginBottom: '30px' }}>A compilation of core software projects detailing my roles and successful deliverables:</p>
      
      {/* Requirement 1f: Flex row routing array values across structured descriptive panel cards */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'nowrap', 
        justifyContent: 'center', 
        gap: '40px', 
        marginTop: '20px',
        overflowX: 'auto' 
      }}>
        {technicalProjects.map(project => (
          <div 
            key={project.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '25px', 
              borderRadius: '12px', 
              width: '320px', 
              flexShrink: 0, 
              background: '#f9f9f9', 
              textAlign: 'left', 
              boxShadow: '0 4px 10px rgba(0,0,0,0.04)' 
            }}
          >
            {/* Visual asset display mapping */}
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: '100%', height: '170px', borderRadius: '6px', objectFit: 'cover', marginBottom: '15px' }} 
            />
            {/* Project Designation and Deliverable Titles */}
            <h3>{project.title}</h3>
            
            {/* Role and Outcome descriptive fields */}
            <p><strong>Role:</strong> {project.role}</p>
            <p style={{ marginTop: '5px', color: '#555' }}><strong>Outcome:</strong> {project.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
