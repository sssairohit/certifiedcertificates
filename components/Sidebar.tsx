import React from 'react';
import { Certification } from '../types';

interface SidebarProps {
  certifications: Certification[];
  activeTabId: number | null;
  onTabClick: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ certifications, activeTabId, onTabClick }) => {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 bg-slate-800 text-gray-200 flex flex-col overflow-y-auto">
      <nav className="flex-grow">
        <ul>
          {certifications.map((cert) => (
            <li key={cert.id}>
              <button
                onClick={() => onTabClick(cert.id)}
                className={`w-full text-left p-4 text-[1.0rem] font-medium transition-colors duration-200 ease-in-out focus:outline-none ${
                  activeTabId === cert.id
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cert.title}
              </button>
            </li>
          ))}
          {certifications.length === 0 && (
             <li className="p-4 text-gray-400 text-[1.0rem]">No matching certifications found.</li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;