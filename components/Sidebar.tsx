import React, { useState, useEffect, useMemo } from 'react';
import { Certification } from '../types';

interface SidebarProps {
  groupedCertifications: Record<string, Certification[]>;
  selectedCertificationId: number | null;
  onSelectCertification: (certification: Certification) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ groupedCertifications, selectedCertificationId, onSelectCertification }) => {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  const groupKeys = useMemo(() => Object.keys(groupedCertifications), [groupedCertifications]);

  // Effect to automatically expand the group of the selected certification
  useEffect(() => {
    if (selectedCertificationId) {
      const parentGroup = groupKeys.find(group => 
        groupedCertifications[group].some(cert => cert.id === selectedCertificationId)
      );
      if (parentGroup && !openGroups.has(parentGroup)) {
        setOpenGroups(prev => new Set(prev).add(parentGroup));
      }
    }
  // We only want this to run when the selected ID changes, not when openGroups changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCertificationId, groupKeys, groupedCertifications]);

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(group)) {
        newSet.delete(group);
      } else {
        newSet.add(group);
      }
      return newSet;
    });
  };

  const areAllGroupsOpen = useMemo(() => openGroups.size === groupKeys.length && groupKeys.length > 0, [openGroups, groupKeys]);

  const toggleAllGroups = () => {
    if (areAllGroupsOpen) {
      setOpenGroups(new Set());
    } else {
      setOpenGroups(new Set(groupKeys));
    }
  };

  return (
    <aside className="w-64 md:w-80 bg-gray-50 border-r border-gray-200 flex-shrink-0 overflow-y-auto">
      <div className="p-4">
        {groupKeys.length > 0 && (
          <div className="mb-4">
            <button
              onClick={toggleAllGroups}
              className="w-full text-left px-2 py-1.5 rounded-md text-[1.0rem] font-semibold text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            >
              {areAllGroupsOpen ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        )}
        <nav>
          {Object.entries(groupedCertifications).sort(([groupA], [groupB]) => groupA.localeCompare(groupB)).map(([group, certifications]) => (
            <div key={group} className="mb-1">
              <button
                onClick={() => toggleGroup(group)}
                className="w-full flex justify-between items-center text-left px-2 py-1.5 rounded-md text-[1.0rem] font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <span className="capitalize">{group}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${openGroups.has(group) ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              {openGroups.has(group) && (
                <ul className="pl-2 mt-1 border-l-2 border-gray-200">
                  {certifications.sort((a, b) => a.title.localeCompare(b.title)).map(cert => (
                    <li key={cert.id}>
                      <button
                        onClick={() => onSelectCertification(cert)}
                        className={`w-full text-left pl-3 pr-1 py-1.5 rounded-r-md text-[1.0rem] transition-colors duration-150 ${
                          selectedCertificationId === cert.id
                            ? 'bg-indigo-100 text-indigo-700 font-semibold'
                            : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
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
      </div>
    </aside>
  );
};

export default Sidebar;