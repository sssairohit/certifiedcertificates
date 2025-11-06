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

  // Helper to create safe IDs from group names
  const createSafeId = (name: string) => `group-content-${name.replace(/[^a-zA-Z0-9]/g, '-')}`;

  return (
    <aside className="w-64 lg:w-[292px] bg-gray-50 border-r border-gray-200 flex-shrink-0 overflow-y-auto dark:bg-gray-950 dark:border-gray-800">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-[1.0rem] font-medium text-gray-600 dark:text-gray-400">Group by:</span>
              <button
                onClick={() => setGroupBy('organization')}
                aria-pressed={groupBy === 'organization'}
                className={`text-[1.0rem] font-medium transition-colors focus:outline-none rounded-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-gray-950 ${
                  groupBy === 'organization'
                    ? 'text-indigo-600 dark:text-indigo-400 underline'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline'
                }`}
              >
                Organization
              </button>
              <span className="text-gray-300 dark:text-gray-600 select-none">•</span>
              <button
                onClick={() => setGroupBy('domain')}
                aria-pressed={groupBy === 'domain'}
                className={`text-[1.0rem] font-medium transition-colors focus:outline-none rounded-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-gray-950 ${
                  groupBy === 'domain'
                    ? 'text-indigo-600 dark:text-indigo-400 underline'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline'
                }`}
              >
                Domain
              </button>
            </div>
            
            {groupKeys.length > 0 && (
              <button
                onClick={toggleAllGroups}
                aria-expanded={areAllGroupsOpen}
                className="text-[1.0rem] font-medium text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none rounded-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-gray-950"
              >
                {areAllGroupsOpen ? 'Collapse All' : 'Expand All'}
              </button>
            )}
        </div>
        
        <nav>
          {Object.entries(groupedCertifications).sort(([groupA], [groupB]) => groupA.localeCompare(groupB)).map(([group, certifications]) => (
            <div key={group} className="mb-1">
              <button
                onClick={() => toggleGroup(group)}
                aria-expanded={openGroups.has(group)}
                aria-controls={createSafeId(group)}
                className="w-full flex justify-between items-center text-left px-2 py-1.5 text-[1.0rem] font-semibold text-gray-600 hover:bg-gray-200 transition-colors dark:text-gray-400 dark:hover:bg-gray-800 focus:outline-none rounded-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-gray-950"
              >
                <span className="capitalize">{group}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${openGroups.has(group) ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              {openGroups.has(group) && (
                <ul id={createSafeId(group)} className="pl-2 mt-1 border-l-2 border-gray-200 dark:border-gray-700">
                  {/* FIX: Cast certifications to Certification[] and create a copy before sorting to avoid mutation. */}
                  {[...(certifications as Certification[])].sort((a, b) => a.title.localeCompare(b.title)).map(cert => (
                    <li key={cert.id}>
                      <button
                        onClick={() => onSelectCertification(cert)}
                        aria-current={selectedCertificationId === cert.id ? 'true' : undefined}
                        className={`w-full text-left pl-3 pr-1 py-1.5 text-[1.0rem] transition-colors duration-150 focus:outline-none rounded-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-gray-950 ${
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