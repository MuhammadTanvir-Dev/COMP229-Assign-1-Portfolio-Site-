import React from 'react';

/**
 * About Me Page Component
 * Displays the user's legal name, a professional headshot, a bio paragraph,
 * and handles the downloadable resume link.
 */
function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>About Me</h1>
      <h2>Muhammad</h2>
      
      {/* Absolute path pointing straight to the public directory */}
      <img 
        src="/profile.jpg" 
        alt="Muhammad Professional Headshot" 
        style={{ width: '180px', height: '180px', borderRadius: '50%', margin: '20px 0', objectFit: 'cover', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} 
      />
      
      <p style={{ lineHeight: '1.6', color: '#333', fontSize: '1.1rem', marginTop: '10px', textAlign: 'left' }}>
        I am a dedicated software and application development student. I focus on leveraging modern 
        JavaScript ecosystems like React to engineer responsive, intuitive, and highly functional web 
        applications that align with professional standards.
      </p>

      <div style={{ marginTop: '35px' }}>
        <a href="/resume.pdf" download="Muhammad_Resume.pdf" style={{ padding: '12px 20px', background: '#2ecc71', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', display: 'inline-block' }}>
          📄 Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
}

export default About;
