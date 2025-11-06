import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-4 text-center">
      <div className="text-[1.0rem] text-gray-500 dark:text-gray-400">
        <a 
          href="https://linkedin.com/in/sssairohit" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Sai Rohit's LinkedIn profile (opens in a new tab)"
          className="hover:underline font-medium text-gray-700 dark:text-gray-300 focus:outline-none rounded-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-gray-950"
        >
          Sai Rohit
        </a>
        <span className="mx-2 select-none">•</span>
        <span>© 2025 Certified Certificates (CC)</span>
        <span className="mx-2 select-none">•</span>
        <span>Powered by AI</span>
      </div>
    </footer>
  );
};

export default Footer;