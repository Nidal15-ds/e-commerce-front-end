import React, { useState } from 'react';
import './SuggestionBox.css';

export default function SuggestionBox() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ fullName: '', phone: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="suggestion-section">
      <div className="suggestion-container">
        
        {/* Left Side: Info & Context */}
        <div className="suggestion-info-side">
          <div className="suggestion-badge">Request & Feedback</div>
          <h2>Looking for a Specific Product?</h2>
          <p>
            Have any suggestions to improve DZ Store, or is there a specific item, brand, or traditional wear you want us to bring for you across the 58 wilayas? Let us know below!
          </p>
          <div className="suggestion-features">
            <div className="feature-item">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span>Fast response from our support team</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span>Custom product sourcing across Algeria</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="suggestion-form-side">
          {submitted && (
            <div className="success-alert">
              Merci ! Votre message a bien été envoyé. Nous vous répondrons très bientôt.
            </div>
          )}

          <form onSubmit={handleSubmit} className="suggestion-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-with-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="e.g. Nidal Dous"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-with-icon">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="0550123456"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message / Requested Product</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Describe the product you want us to stock or type your suggestion here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Envoyer
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}