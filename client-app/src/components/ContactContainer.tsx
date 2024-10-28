import React from 'react';
import FormComponent from './FormComponent';
import '../css/contact-container.css';

const ContactContainer: React.FC = () => {
  return (
    <div style={{marginTop: "120px"}}>
        <div className="contact-container">
        <div className="left-section">
            <h1>Let's discuss</h1>
            <FormComponent />
        </div>
        <div className="right-section">
            <h1>Contact information</h1>
            <p>+41232142141</p>
            <p>unknowngames.public@gmail.com</p>
        </div>
        </div>
    </div>
  );
};

export default ContactContainer;