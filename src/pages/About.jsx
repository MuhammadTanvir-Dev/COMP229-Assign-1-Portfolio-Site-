import React from 'react';

/**
 * About Me Page Component
 * Displays the user's legal name, a professional headshot, a bio paragraph,
 * and handles the downloadable resume link with fluid mobile safety margins.
 */
function About() {
  return (
    <div style={{ 
      padding: '40px 20px', // Safe responsive padding constraints
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'Arial, sans-serif', 
      textAlign: 'center',
      boxSizing: 'border-box'
    }}>
      <h1>About Me</h1>
      
      {/* Requirement 1d: Your legal name */}
      <h2>Muhammad</h2>
      
      {/* Requirement 1d: Displaying your real professional profile image from the public folder */}
      <img 
        src="/profile.jpg" 
        alt="Muhammad Professional Headshot" 
        style={{ 
          width: '100%',
          maxWidth: '180px', // Scales down smoothly on narrow screens while keeping desktop limits
          height: 'auto',
          aspectRatio: '1/1',
          borderRadius: '50%', 
          margin: '20px 0', 
          objectFit: 'cover',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
        }} 
      />
      
      {/* Requirement 1d: Clean, professional bio paragraph aligned neatly */}
      <p style={{ lineHeight: '1.6', color: '#333', fontSize: '1.1rem', marginTop: '10px', textAlign: 'left' }}>
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
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}
        >
          📄 Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
}

export default About;
