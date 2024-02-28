// Footer.jsx
import React from 'react';

const Footer = ({ themeColor }) => (
  <footer style={{ backgroundColor: themeColor, color: 'white', textAlign: 'center', padding: '10px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <a href="/">
          <img src="/facebook.png" alt="Facebook Logo" style={{ maxWidth: '30px', marginRight: '5px' }} />
        </a>
        |
        <a href="/">
          <img src="/gmail.png" alt="Gmail Logo" style={{ maxWidth: '30px', margin: '0 5px' }} />
        </a>
        |
        <a href="/">
          <img src="/instagram.png" alt="Instagram Logo" style={{ maxWidth: '30px', marginLeft: '5px' }} />
        </a>
      </div>
      <div>&copy; 2024 All rights reserved</div>
      <div>
        <button>Contact Support</button>
      </div>
    </div>
  </footer>
);

export default Footer;
