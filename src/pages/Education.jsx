import React from 'react';

/**
 * Education Page Component
 * Renders academic milestones, credentials, and institutional highlights 
 * formatted to maintain visual consistency across all routing components.
 */
function Education() {
  return (
    <div style={{ padding: '60px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Education & Academic Qualifications</h1>
      <p style={{ color: '#555', marginBottom: '40px' }}>An overview of my academic background and technical specializations:</p>
      
      {/* Requirement 1g: Structured wrapper layout housing degree titles, institution timelines, and core focus summaries */}
      <div style={{ 
        background: '#f9f9f9', 
        borderLeft: '6px solid #3498db', 
        padding: '40px 30px', 
        borderRadius: '0 12px 12px 0', 
        textAlign: 'left',
        boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
        display: 'inline-block',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Academic Qualification Name */}
        <h2 style={{ color: '#2c3e50', marginTop: 0 }}>Advanced Diploma in Software Engineering Artificial Intelligence</h2>
        
        {/* Certified Institution and Date Range */}
        <h3 style={{ color: '#7f8c8d', fontWeight: '500' }}>Centennial College | 2025 - 2028</h3>
        
        {/* Core curricular focus areas and industry technical skills mapping paragraph */}
        <p style={{ color: '#555', margin: '20px 0 0 0', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Focused on full-stack application development, machine learning model deployment, 
          big data pipelining, and automated software lifecycles (MLOps).
        </p>
      </div>
    </div>
  );
}

export default Education;
