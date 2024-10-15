import React, { useState } from 'react';
import './Contact.css';
import fb from '../../assets/fb.webp';
import insta from '../../assets/insta.webp';
import linkedin from '../../assets/link.webp';
import twitter from '../../assets/tw.webp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to an API or email service
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='contact-page'>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us using the form below or through our social media channels.</p>

      <div className='contact-form'>
        <form onSubmit={handleSubmit}>
          <div className='name'>
          <input id='fname'
            type='text'
            name='fname'
            value={formData.fname}
            onChange={handleChange}
            placeholder='First Name'
            required
          />
          <input id='lname'
            type='text'
            name='lname'
            value={formData.lname}
            onChange={handleChange}
            placeholder='Last Name'
            required
          />
         </div>
          
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your Email'
            required
          />

          
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Your Message'
            required
          ></textarea>
          

          <button type='submit'>Send Message</button>
        </form>
      </div>
      
      <div className='contact-social'>
        <h3>Follow Us On Social Media</h3>
        <div className='social-icons'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src={fb} alt='Facebook' />
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src={insta} alt='Instagram' />
          </a>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt='LinkedIn' />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src={twitter} alt='Twitter' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
