import React, { useState, useEffect, useMemo } from 'react';
import { Certification, GroupByOption } from '../types';

interface SidebarProps {
  groupedCertifications: Record<string, Certification[]>;
  selectedCertificationId: number | null;
  onSelectCertification: (certification: Certification) => void;
  groupBy: GroupByOption;
  setGroupBy: (value: GroupByOption) => void;
  bookmarkedIds: Set<number>;
  onToggleBookmark: (id: number) => void;
  showOnlyBookmarked: boolean;
  onShowOnlyBookmarkedChange: (show: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  groupedCertifications, 
  selectedCertificationId, 
  onSelectCertification, 
  groupBy, 
  setGroupBy,
  bookmarkedIds,
  onToggleBookmark,
  showOnlyBookmarked,
  onShowOnlyBookmarkedChange 
}) => {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  const groupKeys = useMemo(() => Object.keys(groupedCertifications), [groupedCertifications]);

  useEffect(() => {
    // Expand all groups by default when the component mounts or when filters change
    setOpenGroups(new Set(groupKeys));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupKeys]);

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
  }, [selectedCertificationId, groupedCertifications]);

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
        <div className="grid grid-cols-2 gap-px border border-gray-300 dark:border-gray-700 mb-4">
            <button
                onClick={() => onShowOnlyBookmarkedChange(false)}
                aria-pressed={!showOnlyBookmarked}
                className={`py-1.5 text-[1.0rem] font-medium transition-colors focus:outline-none rounded-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    !showOnlyBookmarked
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
            >
                All
            </button>
            <button
                onClick={() => onShowOnlyBookmarkedChange(true)}
                aria-pressed={showOnlyBookmarked}
                className={`py-1.5 text-[1.0rem] font-medium transition-colors focus:outline-none rounded-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    showOnlyBookmarked
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
            >
                Bookmarked
            </button>
        </div>

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
          {groupKeys.length === 0 && (
            <div className="px-2 py-4 text-center text-gray-500 dark:text-gray-400">
              <p className="text-[1.0rem]">
                {showOnlyBookmarked ? 'No bookmarked certifications.' : 'No certifications found.'}
              </p>
              {showOnlyBookmarked && (
                <p className="text-[0.9rem] mt-2">You can bookmark items by hovering over them in the list.</p>
              )}
            </div>
          )}
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
                  {[...(certifications as Certification[])].sort((a, b) => a.title.localeCompare(b.title)).map(cert => (
                    <li key={cert.id}>
                      <div className={`flex items-center justify-between group w-full text-left rounded-none transition-colors duration-150 ${
                          selectedCertificationId === cert.id
                              ? 'bg-indigo-100 dark:bg-indigo-900/50'
                              : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                      }`}>
                          <button
                              onClick={() => onSelectCertification(cert)}
                              aria-current={selectedCertificationId === cert.id ? 'true' : undefined}
                              className={`flex-grow text-left pl-3 pr-1 py-1.5 text-[1.0rem] focus:outline-none rounded-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 ${
                                  selectedCertificationId === cert.id
                                      ? 'text-indigo-700 font-semibold dark:text-indigo-300'
                                      : 'text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100'
                              }`}
                          >
                              {cert.title}
                          </button>
                          <button
                              onClick={(e) => {
                                  e.stopPropagation();
                                  onToggleBookmark(cert.id);
                              }}
                              aria-label={bookmarkedIds.has(cert.id) ? 'Remove bookmark' : 'Add bookmark'}
                              className={`flex-shrink-0 p-2 mr-1 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 focus:text-indigo-600 transition-opacity rounded-none focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 ${
                                  bookmarkedIds.has(cert.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 focus:opacity-100'
                              }`}
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                  fill={bookmarkedIds.has(cert.id) ? 'currentColor' : 'none'}
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                              >
                                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                              </svg>
                          </button>
                      </div>
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