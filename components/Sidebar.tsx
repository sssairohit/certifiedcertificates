import React, { useState, useEffect, useMemo } from 'react';
import { Certification, GroupByOption } from '../types';

interface SidebarProps {
  groupedCertifications: Record<string, Certification[]>;
  selectedCertificationId: number | null;
  onSelectCertification: (certification: Certification) => void;
  groupBy: GroupByOption;
  setGroupBy: (value: GroupByOption) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ groupedCertifications, selectedCertificationId, onSelectCertification, groupBy, setGroupBy }) => {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  const groupKeys = useMemo(() => Object.keys(groupedCertifications), [groupedCertifications]);

  useEffect(() => {
    if (selectedCertificationId) {
      const parentGroup = groupKeys.find(group => 
        groupedCertifications[group].some(cert => cert.id === selectedCertificationId)
      );
      if (parentGroup && !openGroups.has(parentGroup)) {
        setOpenGroups(prev => new Set(prev).add(parentGroup));
      }
    }
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

  const baseButtonClass = "relative inline-flex items-center justify-center px-4 py-2 text-[1.0rem] font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-150";
  const activeButtonClass = "bg-indigo-600 text-white";
  const inactiveButtonClass = "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700";

  return (
    <aside className="w-64 lg:w-[292px] bg-gray-50 border-r border-gray-200 flex-shrink-0 overflow-y-auto dark:bg-gray-950 dark:border-gray-800">
      <div className="p-4">
        <div className="mb-4">
          <span className="text-[1.0rem] font-medium text-gray-600 dark:text-gray-400 block mb-2">Group by:</span>
          <div className="flex rounded-md shadow-sm w-full">
            <button
              type="button"
              onClick={() => setGroupBy('organization')}
              className={`${baseButtonClass} rounded-l-md border border-gray-300 dark:border-gray-600 w-1/2 ${groupBy === 'organization' ? activeButtonClass : inactiveButtonClass}`}
            >
              Organization
            </button>
            <button
              type="button"
              onClick={() => setGroupBy('domain')}
              className={`${baseButtonClass} -ml-px rounded-r-md border border-gray-300 dark:border-gray-600 w-1/2 ${groupBy === 'domain' ? activeButtonClass : inactiveButtonClass}`}
            >
              Domain
            </button>
          </div>
        </div>
        
        {groupKeys.length > 0 && (
          <div className="mb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
            <button
              onClick={toggleAllGroups}
              className="w-full text-left px-2 py-1.5 rounded-md text-[1.0rem] font-semibold text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors dark:text-indigo-400 dark:hover:bg-indigo-900/50"
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
                className="w-full flex justify-between items-center text-left px-2 py-1.5 rounded-md text-[1.0rem] font-semibold text-gray-600 hover:bg-gray-200 transition-colors dark:text-gray-400 dark:hover:bg-gray-800"
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
                <ul className="pl-2 mt-1 border-l-2 border-gray-200 dark:border-gray-700">
                  {certifications.sort((a, b) => a.title.localeCompare(b.title)).map(cert => (
                    <li key={cert.id}>
                      <button
                        onClick={() => onSelectCertification(cert)}
                        className={`w-full text-left pl-3 pr-1 py-1.5 rounded-r-md text-[1.0rem] transition-colors duration-150 ${
                          selectedCertificationId === cert.id
                            ? 'bg-indigo-100 text-indigo-700 font-semibold dark:bg-indigo-900/50 dark:text-indigo-300'
                            : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100'
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