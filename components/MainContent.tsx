import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'https://esm.sh/react-markdown@9';
import { Certification } from '../types';

interface MainContentProps {
  certification: Certification | null;
  onTocEntryInView: (id: string | null) => void;
  activeTocId: string | null;
}

const MainContent: React.FC<MainContentProps> = ({ certification, onTocEntryInView, activeTocId }) => {
  const sectionRefs = useRef<Map<string, HTMLHeadingElement | null>>(new Map());
  const observer = useRef<IntersectionObserver | null>(null);
  const [copied, setCopied] = useState(false);

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

  useEffect(() => {
    if (certification && (window as any).feather) {
      (window as any).feather.replace();
    }
  }, [certification]);


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

  const handleShare = () => {
    const baseUrl = window.location.href.split('#')[0];
    const shareUrl = activeTocId ? `${baseUrl}#${activeTocId}` : baseUrl;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy URL: ', err);
    });
  };

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
        
        <div className="flex justify-between items-start gap-4 mb-6 border-b pb-4 dark:border-gray-700">
          <h1 className="text-[1.4rem] font-bold text-gray-900 dark:text-gray-100">{certification.title}</h1>
          <div className="relative flex-shrink-0">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-1.5 text-gray-600 border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-950 transition-colors"
              aria-label="Copy link to this section"
            >
              <i data-feather="share-2" className="w-4 h-4"></i>
              <span className="text-[1.0rem] font-medium">Share</span>
            </button>
            {copied && (
              <span className="absolute -top-9 right-0 bg-gray-800 text-white text-[0.9rem] px-2 py-1 rounded-none shadow-lg transition-opacity duration-300 animate-pulse">
                Link copied!
              </span>
            )}
          </div>
        </div>
        
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
              <div className="prose prose-lg max-w-none text-gray-600 dark:prose-invert dark:text-gray-400 
                              prose-headings:font-semibold prose-headings:text-gray-800 dark:prose-headings:text-gray-200
                              prose-strong:text-gray-700 dark:prose-strong:text-gray-300
                              prose-ul:list-disc prose-ul:pl-6 prose-li:my-1
                              dark:prose-a:text-indigo-400 prose-a:text-indigo-600 hover:prose-a:underline">
                <ReactMarkdown>{section.content}</ReactMarkdown>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;