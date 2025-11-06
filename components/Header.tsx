import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          <h1 className="text-[1.6rem] font-bold text-gray-900">
            Certified Certificates
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
