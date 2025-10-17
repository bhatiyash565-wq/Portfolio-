
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 text-center py-6">
      <div className="container mx-auto px-6">
        <p className="text-white/70 text-sm">
          &copy; {new Date().getFullYear()} Yash Bhati. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
