// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="px-4">
        <div className="grid grid-rows-2 md:grid-cols-2">
          <div className='text-center md:text-left'>
            <p>&copy; 2024 Nike. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex justify-evenly">
              <li className='pr-4'>
                <a href="#" className="hover:text-gray-300">About Us</a>
              </li>
              <li className='pr-4'>
                <a href="#" className="hover:text-gray-300">Contact Us</a>
              </li>
              <li className='pr-4'>
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
