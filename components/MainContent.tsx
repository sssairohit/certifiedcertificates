import React, { useEffect, useRef } from 'react';
import { Certification } from '../types';

interface MainContentProps {
  certification: Certification | null;
  onTocEntryInView: (id: string | null) => void;
}

const MainContent: React.FC<MainContentProps> = ({ certification, onTocEntryInView }) => {
  const sectionRefs = useRef<Map<string, HTMLHeadingElement | null>>(new Map());
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    
    const callback = (entries: IntersectionObserverEntry[]) => {
      const intersectingEntries = entries.filter(e => e.isIntersecting);
      if (intersectingEntries.length > 0) {
        onTocEntryInView(intersectingEntries[intersectingEntries.length - 1].target.id);
      }
    };

    observer.current = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    });

    const currentRefs = sectionRefs.current;
    currentRefs.forEach(ref => {
      if (ref) observer.current?.observe(ref);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [certification, onTocEntryInView]);

  if (!certification) {
    return (
      <div className="p-6 md:p-10 flex items-center justify-center h-full">
        <div className="text-center">
            <h2 className="text-[1.4rem] font-semibold text-gray-700 dark:text-gray-300">Select a Learning Module</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-[1.0rem]">
                Please select a certification from the sidebar to view its learning module.
            </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-[1.0rem] font-medium px-2.5 py-0.5 rounded-none dark:bg-indigo-900/70 dark:text-indigo-300">
            {certification.organization}
          </span>
          <span className="inline-block bg-teal-100 text-teal-800 text-[1.0rem] font-medium px-2.5 py-0.5 rounded-none dark:bg-teal-900/70 dark:text-teal-300">
            {certification.domain}
          </span>
        </div>
        <h1 className="text-[1.4rem] font-bold text-gray-900 mb-6 border-b pb-4 dark:text-gray-100 dark:border-gray-700">{certification.title}</h1>
        
        <div className="space-y-8">
          {certification.content.map((section) => (
            <section key={section.id}>
              <h2 
                id={section.id}
                ref={el => { sectionRefs.current.set(section.id, el) }}
                className="text-[1.4rem] font-semibold text-gray-800 mb-3 scroll-mt-20 dark:text-gray-200"
              >
                {section.title}
              </h2>
              <p className="text-gray-600 text-[1.0rem] leading-relaxed whitespace-pre-line dark:text-gray-400">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;