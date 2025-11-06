import React from 'react';

type GroupByOption = 'organization' | 'domain';

interface HeaderProps {
  groupBy: GroupByOption;
  setGroupBy: (value: GroupByOption) => void;
}

const Header: React.FC<HeaderProps> = ({ groupBy, setGroupBy }) => {
  const baseButtonClass = "relative inline-flex items-center px-4 py-2 text-[1.2rem] font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-150";
  const activeButtonClass = "bg-indigo-600 text-white";
  const inactiveButtonClass = "bg-white text-gray-700 hover:bg-gray-50";

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-[1.4rem] font-bold text-gray-900">
            Certified Certificates
          </h1>
          <div className="flex items-center space-x-3">
            <span className="text-[1.2rem] font-medium text-gray-600">Group by:</span>
            <div className="flex rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => setGroupBy('organization')}
                className={`${baseButtonClass} rounded-l-md border border-gray-300 ${groupBy === 'organization' ? activeButtonClass : inactiveButtonClass}`}
              >
                Organization
              </button>
              <button
                type="button"
                onClick={() => setGroupBy('domain')}
                className={`${baseButtonClass} -ml-px rounded-r-md border border-gray-300 ${groupBy === 'domain' ? activeButtonClass : inactiveButtonClass}`}
              >
                Domain
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
