
import React from 'react';
import { Certification } from '../types';

interface TableOfContentsProps {
  certification: Certification | null;
  activeTocId: string | null;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ certification, activeTocId }) => {
  if (!certification || !certification.content || certification.content.length === 0) {
    return <aside className="hidden lg:block w-56 xl:w-64 bg-gray-50 border-l border-gray-200"></aside>;
  }

  return (
    <aside className="hidden lg:block w-56 xl:w-64 bg-gray-50 border-l border-gray-200 p-4 overflow-y-auto">
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
    </aside>
  );
};

export default TableOfContents;
