import React from 'react';

interface HeaderProps {
  globalSearchTerm: string;
  onGlobalSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ globalSearchTerm, onGlobalSearchChange }) => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Removed horizontal padding from main container to allow alignment with sidebars */}
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Left spacer to align with the left sidebar */}
          <div className="w-[324px] flex-shrink-0"></div>
          
          {/* Centered title, with padding to keep it from the edges */}
          <div className="flex-1 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-[1.6rem] font-bold text-gray-900">
              Certified Certificates
            </h1>
          </div>
          
          {/* Right container for search bar, aligns with the right sidebar. Added px-4 to match sidebar padding. */}
          <div className="w-[324px] flex-shrink-0 px-4">
            <label htmlFor="global-search" className="sr-only">Global Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="search"
                name="global-search"
                id="global-search"
                value={globalSearchTerm}
                onChange={(e) => onGlobalSearchChange(e.target.value)}
                className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-[1.2rem]"
                placeholder="Global Search"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;