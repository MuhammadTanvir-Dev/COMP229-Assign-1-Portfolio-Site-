import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Page Component
 * Renders the introductory screen, core professional mission criteria, 
 * and handles traffic redirection buttons.
 */
function Home() {
  return (
    <div style={{ padding: '60px', textAlign: 'center', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      {/* Requirement 1c: Welcome greeting message banner headline */}
      <h1>Welcome to My Professional Portfolio</h1>
      
      {/* Requirement 1c: Core mission statement criteria block */}
      <p style={{ margin: '30px auto', fontSize: '1.3rem', color: '#555', fontStyle: 'italic', lineHeight: '1.8' }}>
        "Mission Statement: Dedicated to engineering robust web solutions and software architectures that deliver clean user interfaces and scale fluidly."
      </p>

      {/* Requirement 1c: Navigation button layout redirecting visitors directly to the About page */}
      <Link to="/about">
        <button style={{ 
          padding: '14px 28px', 
          background: '#3498db', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px', 
          fontSize: '1.1rem', 
          fontWeight: 'bold',
          cursor: 'pointer', 
          marginTop: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          Learn More About Me
        </button>
      </Link>
    </div>
  );
}

export default Home;
