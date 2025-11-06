import React, { useState, useMemo } from 'react';
import { CERTIFICATIONS } from './constants';
import { Certification } from './types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TableOfContents from './components/TableOfContents';

type GroupByOption = 'organization' | 'domain';

const App: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(CERTIFICATIONS[0] ?? null);
  const [activeTocId, setActiveTocId] = useState<string | null>(null);
  const [groupBy, setGroupBy] = useState<GroupByOption>('organization');

  const handleSelectCertification = (certification: Certification) => {
    setSelectedCertification(certification);
    setActiveTocId(certification.content[0]?.id ?? null);
    // The main content area will now scroll, we don't need manual scrolling logic here
  };

  const handleTocEntryInView = (id: string | null) => {
    setActiveTocId(id);
  };
  
  const groupedCertifications = useMemo(() => {
    return CERTIFICATIONS.reduce((acc, cert) => {
      const key = cert[groupBy];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(cert);
      return acc;
    }, {} as Record<string, Certification[]>);
  }, [groupBy]);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        groupedCertifications={groupedCertifications}
        selectedCertificationId={selectedCertification?.id ?? null}
        onSelectCertification={handleSelectCertification}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header groupBy={groupBy} setGroupBy={setGroupBy} />
        <main className="flex-1 overflow-y-auto bg-gray-100">
            <MainContent 
              certification={selectedCertification} 
              onTocEntryInView={handleTocEntryInView}
            />
        </main>
      </div>
      <TableOfContents 
        certification={selectedCertification}
        activeTocId={activeTocId}
      />
    </div>
  );
};

export default App;
