import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-3 mb-4">
      <p>&copy; 2025 Serenity Hub. All rights reserved.</p>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 ml-2"><FontAwesomeIcon icon={faTwitter} size="lg" className="mr-2" /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 ml-2"><FontAwesomeIcon icon={faFacebook} size="lg" className="mr-2" /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 ml-2"><FontAwesomeIcon icon={faInstagram} size="lg" className="mr-2" /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 ml-2"><FontAwesomeIcon icon={faTiktok} size="lg" className="mr-2" /></a>
    </footer>
  );
}
export default Footer;
