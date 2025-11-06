
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TableOfContents from './components/TableOfContents';
import { CERTIFICATIONS } from './constants';
import { Certification } from './types';

function App() {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [selectedOrganization, setSelectedOrganization] = useState<string>('All');
  const [filteredCertifications, setFilteredCertifications] = useState<Certification[]>(CERTIFICATIONS);
  const [activeTabId, setActiveTabId] = useState<number | null>(CERTIFICATIONS.length > 0 ? CERTIFICATIONS[0].id : null);
  const [activeTocId, setActiveTocId] = useState<string | null>(null);

  const domains = useMemo(() => [...new Set(CERTIFICATIONS.map((c) => c.domain))], []);
  const organizations = useMemo(() => [...new Set(CERTIFICATIONS.map((c) => c.organization))], []);
  
  useEffect(() => {
    let result = CERTIFICATIONS;

    if (selectedDomain !== 'All') {
      result = result.filter((cert) => cert.domain === selectedDomain);
    }
    if (selectedOrganization !== 'All') {
      result = result.filter((cert) => cert.organization === selectedOrganization);
    }

    setFilteredCertifications(result);
    
    if (result.length > 0) {
      if (!result.some(cert => cert.id === activeTabId)) {
          setActiveTabId(result[0].id);
      }
    } else {
      setActiveTabId(null);
    }
  }, [selectedDomain, selectedOrganization, activeTabId]);

  const activeCertification = useMemo(() => {
    return filteredCertifications.find(cert => cert.id === activeTabId) || null;
  }, [activeTabId, filteredCertifications]);
  
  useEffect(() => {
    if (activeCertification && activeCertification.content.length > 0) {
      setActiveTocId(activeCertification.content[0].id);
    } else {
      setActiveTocId(null);
    }
  }, [activeCertification]);

  const handleTabClick = (id: number) => {
    setActiveTabId(id);
  };

  const handleDomainChange = (domain: string) => {
    setSelectedDomain(domain);
  };

  const handleOrganizationChange = (organization: string) => {
    setSelectedOrganization(organization);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header
        domains={domains}
        organizations={organizations}
        selectedDomain={selectedDomain}
        selectedOrganization={selectedOrganization}
        onDomainChange={handleDomainChange}
        onOrganizationChange={handleOrganizationChange}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          certifications={filteredCertifications}
          activeTabId={activeTabId}
          onTabClick={handleTabClick}
        />
        <div className="flex-1 flex overflow-hidden">
          <MainContent certification={activeCertification} onTocEntryInView={setActiveTocId} />
          <TableOfContents certification={activeCertification} activeTocId={activeTocId} />
        </div>
      </div>
    </div>
  );
}

export default App;
