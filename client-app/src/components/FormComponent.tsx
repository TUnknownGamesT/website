import React, { useState } from 'react';
import '../css/form-component.css';

const FormComponent: React.FC = () => {
  const initialFormData = {
    name: '',
    countryCode: '+41', // Default Swiss
    contactNumber: '',
    email: '',
    industry: '',
    projectDescription: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const baseUrl = `https://localhost:5002`;

    try {
      const response = await fetch(`${baseUrl}/api/form/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your request has been sent successfully!");
        setFormData(initialFormData); // Reset form data after successful submission
        setIsSubmitted(false); // Optionally reset submission state
      } else {
        alert("There was an issue sending your request. Please try again later.");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("There was an error sending your request.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className={isSubmitted ? 'submitted' : ''}>
        <div className="form-row">
          <div className="form-group">
            <label>
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Contact Number <span className="required">*</span>
            </label>
            <div className="phone-input-container">
              <input
                type="text"
                name="countryCode"
                onChange={handleChange}
                value={formData.countryCode}
                className="country-code"
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Your number"
                value={formData.contactNumber}
                onChange={handleChange}
                pattern="[0-9]{6,15}"
                title="Please enter a valid contact number (10-15 digits)."
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Industry</label>
            <input
              type="text"
              name="industry"
              placeholder="Your industry"
              value={formData.industry}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>
            Tell us about your project <span className="required">*</span>
          </label>
          <textarea
            name="projectDescription"
            placeholder="Describe your project"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send request
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
