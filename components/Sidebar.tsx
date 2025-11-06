import React, { useState, useEffect } from 'react';
import { Certification } from '../types';

interface SidebarProps {
  groupedCertifications: Record<string, Certification[]>;
  selectedCertificationId: number | null;
  onSelectCertification: (certification: Certification) => void;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ groupedCertifications, selectedCertificationId, onSelectCertification }) => {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!selectedCertificationId) return;

    const parentGroup = Object.keys(groupedCertifications).find(groupName =>
      groupedCertifications[groupName].some(cert => cert.id === selectedCertificationId)
    );

    if (parentGroup && !openGroups.has(parentGroup)) {
      setOpenGroups(prevOpenGroups => new Set(prevOpenGroups).add(parentGroup));
    }
  }, [selectedCertificationId, groupedCertifications]);

  const toggleGroup = (groupName: string) => {
    setOpenGroups(prevOpenGroups => {
      const newOpenGroups = new Set(prevOpenGroups);
      if (newOpenGroups.has(groupName)) {
        newOpenGroups.delete(groupName);
      } else {
        newOpenGroups.add(groupName);
      }
      return newOpenGroups;
    });
  };

  const sortedGroupNames = Object.keys(groupedCertifications).sort((a, b) => a.localeCompare(b));

  return (
    <aside className="w-64 md:w-80 bg-gray-50 border-r border-gray-200 h-screen overflow-y-auto">
      <nav className="p-2">
        {sortedGroupNames.map((groupName) => (
          <div key={groupName} className="mb-1">
            <button
              onClick={() => toggleGroup(groupName)}
              className="w-full flex justify-between items-center text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors duration-150"
            >
              <span className="text-[1.2rem] font-semibold">{groupName}</span>
              <ChevronIcon isOpen={openGroups.has(groupName)} />
            </button>
            {openGroups.has(groupName) && (
              <ul className="pl-3 mt-1 border-l-2 border-gray-200 ml-3">
                {groupedCertifications[groupName].map((cert) => (
                  <li key={cert.id} className="mt-1">
                    <button
                      onClick={() => onSelectCertification(cert)}
                      className={`w-full text-left px-3 py-2 rounded-md text-[1.0rem] transition-colors duration-150 ${
                        selectedCertificationId === cert.id
                          ? 'bg-indigo-100 text-indigo-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {cert.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
