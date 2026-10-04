import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';

/**
 * Main Application Component
 * Controls the core layout grid and injects a fluid media-query CSS framework 
 * to ensure all pages are 100% mobile, tablet, and desktop friendly.
 */
function App() {
  return (
    <Router>
      {/* Fluid styling framework managing phone and desktop typography scales dynamically */}
      <style>{`
        /* Desktop base configurations */
        h1 { font-size: 2.6rem !important; margin-bottom: 20px !important; color: #2c3e50 !important; }
        h2 { font-size: 2.0rem !important; margin-bottom: 15px !important; color: #34495e !important; }
        h3 { font-size: 1.6rem !important; margin-bottom: 10px !important; color: #2c3e50 !important; }
        h4 { font-size: 1.3rem !important; margin-bottom: 8px !important; color: #2c3e50 !important; }
        h5 { font-size: 1.1rem !important; margin-bottom: 5px !important; color: #7f8c8d !important; }
        p, li, label, input, textarea { font-size: 1.15rem !important; line-height: 1.6 !important; }
        nav { flex-direction: row; padding: 30px 60px; }
        .nav-links { flex-direction: row; gap: 35px; margin-top: 0; width: auto; justify-content: flex-end; }

        /* Mobile & Tablet Responsive Media Query Rules */
        @media (max-width: 768px) {
          h1 { font-size: 2.0rem !important; }
          h2 { font-size: 1.6rem !important; }
          h3 { font-size: 1.3rem !important; }
          p, li, label, input, textarea { font-size: 1.05rem !important; }
          nav { flex-direction: column !important; padding: 20px !important; text-align: center; gap: 15px; }
          .nav-links { flex-direction: column !important; gap: 15px !important; width: 100% !important; justify-content: center !important; margin-top: 10px; }
          .nav-links li { width: 100%; text-align: center; }
          main { padding: 20px !important; }
        }
      `}</style>

      {/* Responsive Navigation Scheme */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        background: '#2c3e50', 
        alignItems: 'center', 
        color: 'white',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Logo container brand area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '55px', height: '55px', background: '#3498db', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.4rem' }}>
            M
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>Muhammad Portfolio</span>
        </div>
        
        {/* Navigation list using standard CSS responsive hooks */}
        <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.25rem' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.25rem' }}>About Me</Link></li>
          <li><Link to="/projects" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.25rem' }}>Projects</Link></li>
          <li><Link to="/education" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.25rem' }}>Education</Link></li>
          <li><Link to="/services" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.25rem' }}>Services</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.25rem' }}>Contact Me</Link></li>
        </ul>
      </nav>

      {/* Main Content Node Layout Panel Container */}
      <main style={{ 
        width: '100%', 
        minHeight: 'calc(100vh - 115px)',
        margin: '0', 
        padding: '0',
        boxSizing: 'border-box'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
