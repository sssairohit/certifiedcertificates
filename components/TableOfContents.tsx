import React from 'react';
import { Certification } from '../types';

interface TableOfContentsProps {
  certification: Certification | null;
  activeTocId: string | null;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ certification, activeTocId, searchTerm, onSearchChange }) => {
  return (
    <aside className="hidden lg:block w-[292px] bg-gray-50 border-l border-gray-200 p-4 overflow-y-auto">
      <div className="mb-4">
        <label htmlFor="search-certs" className="sr-only">Search certifications</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="search"
            name="search-certs"
            id="search-certs"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-[1.2rem]"
            placeholder="Search Contents"
          />
        </div>
      </div>
      
      {certification && certification.content && certification.content.length > 0 && (
        <div className="border-t pt-4 mt-4">
          <h3 className="text-[1.4rem] font-semibold text-gray-800 mb-4">On this page</h3>
          <nav>
            <ul className="space-y-2">
              {certification.content.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`block text-[1.0rem] transition-colors duration-200 ease-in-out border-l-2 pl-3 ${
                      activeTocId === section.id
                        ? 'border-indigo-500 text-indigo-600 font-semibold'
                        : 'border-transparent text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </aside>
  );
};

export default TableOfContents;