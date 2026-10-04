import React from 'react';
// Requirement 1d: Import your real profile image from the assets folder
import profileImg from '../assets/profile.jpg';

/**
 * About Me Page Component
 * Displays the user's legal name, a professional headshot, a bio paragraph,
 * and handles the downloadable resume link.
 */
function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>About Me</h1>
      
      {/* Requirement 1d: Your legal name */}
      <h2>Muhammad</h2>
      
      {/* Requirement 1d: Displaying your real professional profile image */}
      <img 
        src={profileImg} 
        alt="Muhammad Professional Headshot" 
        style={{ 
          width: '180px', 
          height: '180px', 
          borderRadius: '50%', 
          margin: '20px 0', 
          objectFit: 'cover',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
        }} 
      />
      
      {/* Requirement 1d: Clean, professional bio paragraph */}
      <p style={{ lineHeight: '1.6', color: '#333', fontSize: '1.1rem', marginTop: '10px' }}>
        I am a dedicated software and application development student. I focus on leveraging modern 
        JavaScript ecosystems like React to engineer responsive, intuitive, and highly functional web 
        applications that align with professional standards.
      </p>

      {/* Requirement 1e: Download link targeting the resume in the public folder */}
      <div style={{ marginTop: '35px' }}>
        <a 
          href="/resume.pdf" 
          download="Muhammad_Resume.pdf" 
          style={{ 
            padding: '12px 20px', 
            background: '#2ecc71', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px', 
            fontWeight: 'bold', 
            display: 'inline-block',
            transition: 'background 0.2s'
          }}
        >
          📄 Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
}

export default About;
