import React from 'react';
import '../styles/global.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="Section">
      <h2>Contact Me</h2>
      <p>
        We'd love to hear from you! Whether you have a question about our services, need support, or just want to say hello, feel free to reach out.
      </p>
      <h3>Get in Touch</h3>
      <p>
        <strong>Email:</strong> contact@yourcompany.com
      </p>
      <p>
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>
    
      <h3>Follow Me</h3>
    
      <ul>
        <li>Twitter: @yourcompany</li>
        <li>Facebook: facebook.com/yourcompany</li>
        <li>LinkedIn: linkedin.com/company/yourcompany</li>
      </ul>
    </section>
  );
}

export default Contact;