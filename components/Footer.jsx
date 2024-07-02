// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 Nike. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
