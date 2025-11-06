import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { CERTIFICATIONS } from './constants';
import { Certification, GroupByOption } from './types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TableOfContents from './components/TableOfContents';

const App: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(CERTIFICATIONS[0] ?? null);
  const [activeTocId, setActiveTocId] = useState<string | null>(null);
  const [groupBy, setGroupBy] = useState<GroupByOption>('organization');
  const [searchTerm, setSearchTerm] = useState('');
  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  const handleSelectCertification = useCallback((certification: Certification) => {
    setSelectedCertification(certification);
    setActiveTocId(certification.content[0]?.id ?? null);
  }, []);

  const handleTocEntryInView = (id: string | null) => {
    setActiveTocId(id);
  };
  
  const filteredCertifications = useMemo(() => {
    if (!searchTerm.trim()) {
      return CERTIFICATIONS;
    }
    return CERTIFICATIONS.filter(cert => 
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.domain.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const groupedCertifications = useMemo(() => {
    return filteredCertifications.reduce((acc, cert) => {
      const key = cert[groupBy];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(cert);
      return acc;
    }, {} as Record<string, Certification[]>);
  }, [groupBy, filteredCertifications]);

  useEffect(() => {
    if (selectedCertification && !filteredCertifications.some(c => c.id === selectedCertification.id)) {
      setSelectedCertification(null);
    }
  }, [filteredCertifications, selectedCertification]);

  useEffect(() => {
    if (!selectedCertification && filteredCertifications.length > 0) {
      handleSelectCertification(filteredCertifications[0]);
    }
  }, [selectedCertification, filteredCertifications, handleSelectCertification]);


  return (
    <div className="flex flex-col h-screen bg-white">
      <Header 
        globalSearchTerm={globalSearchTerm}
        onGlobalSearchChange={setGlobalSearchTerm}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          groupedCertifications={groupedCertifications}
          selectedCertificationId={selectedCertification?.id ?? null}
          onSelectCertification={handleSelectCertification}
          groupBy={groupBy}
          setGroupBy={setGroupBy}
        />
        <main className="flex-1 overflow-y-auto bg-gray-100">
            <MainContent 
              certification={selectedCertification} 
              onTocEntryInView={handleTocEntryInView}
            />
        </main>
        <TableOfContents 
          certification={selectedCertification}
          activeTocId={activeTocId}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>
    </div>
  );
};

export default App;