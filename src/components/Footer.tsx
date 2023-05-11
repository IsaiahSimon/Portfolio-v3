import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Designed & Built by Isaiah Simon
      </p>
    </footer>
  );
};

export default Footer;
