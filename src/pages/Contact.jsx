import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Contact Page Component
 * Handles rendering the informational panels alongside interactive reactive input form states.
 */
function Contact() {
  // Hook instance invoked to navigate back to the root application route upon completion
  const navigate = useNavigate();

  // Requirement 2b: Contextual state variable collection mapping targeted captured attributes
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    contactNumber: '', 
    email: '', 
    message: '' 
  });

  /**
   * Action handler invoked upon submission events
   * Intercepts default refresh behaviors, outputs the captured values, and executes redirection.
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Outputs captured input to console to satisfy data-gathering requirements
    console.log("Form submission data captured successfully:", formData);
    
    // Notifies user of confirmation
    alert("Thank you! Your message has been logged. Redirecting back to the Home page...");
    
    // Requirement 1j: Returns visitor back to the landing view route frame
    navigate('/'); 
  };

  return (
    <div style={{ padding: '60px', maxWidth: '550px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contact Me</h1>
      
      {/* Requirement 1i: Static Informational Panel Construct Frame containing direct information */}
      <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '30px', borderLeft: '5px solid #2c3e50' }}>
        <p><strong>Email Address:</strong> muhammad@example.com</p>
        <p><strong>Contact Phone:</strong> +1 (555) 019-2834</p>
      </div>

      {/* Requirement 1j: Interactive form component logging mandatory input data fields */}
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input 
          placeholder="First Name" 
          onChange={e => setFormData({...formData, firstName: e.target.value})} 
          required 
          style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <input 
          placeholder="Last Name" 
          onChange={e => setFormData({...formData, lastName: e.target.value})} 
          required 
          style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <input 
          placeholder="Contact Number" 
          onChange={e => setFormData({...formData, contactNumber: e.target.value})} 
          required 
          style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <input 
          placeholder="Email Address" 
          type="email" 
          onChange={e => setFormData({...formData, email: e.target.value})} 
          required 
          style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
        <textarea 
          placeholder="Your Message" 
          onChange={e => setFormData({...formData, message: e.target.value})} 
          required 
          style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc', height: '120px', resize: 'vertical' }} 
        />
        
        <button 
          type="submit" 
          style={{ padding: '14px', background: '#3498db', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
