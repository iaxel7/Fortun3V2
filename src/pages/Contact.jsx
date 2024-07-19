import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '../assets/css/contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const validateForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setFormStatus('Please complete the entire form.');
      return;
    }

    if (!emailRegex.test(email)) {
      setFormStatus('Please enter a valid email address.');
      return;
    }

    setFormStatus('Message sent successfully!');
    document.getElementById('contactForm').reset();
  };

  return (
    <>
      <Navbar />
      <div id="hero-img"></div>
      <div className="container">
        <h2>Contact Us</h2>
        <form id="contactForm" onSubmit={validateForm}>
          <div className="input-group">
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="input-group">
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="input-group">
            <textarea id="message" name="message" placeholder="Your Message" ></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
        {formStatus && (
          <div id="successMessage">
            <p>{formStatus}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
