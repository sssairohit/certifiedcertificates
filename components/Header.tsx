import React from 'react';

interface HeaderProps {
  domains: string[];
  organizations: string[];
  selectedDomain: string;
  selectedOrganization: string;
  onDomainChange: (domain: string) => void;
  onOrganizationChange: (organization: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  domains,
  organizations,
  selectedDomain,
  selectedOrganization,
  onDomainChange,
  onOrganizationChange,
}) => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-[1.4rem] font-bold text-gray-800">Certified Certificates</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="domain-filter" className="block text-[1.4rem] font-medium text-gray-700 mb-1">
              Filter by Domain
            </label>
            <select
              id="domain-filter"
              value={selectedDomain}
              onChange={(e) => onDomainChange(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-[1.0rem]"
            >
              <option value="All">All Domains</option>
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="org-filter" className="block text-[1.4rem] font-medium text-gray-700 mb-1">
              Filter by Organization
            </label>
            <select
              id="org-filter"
              value={selectedOrganization}
              onChange={(e) => onOrganizationChange(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-[1.0rem]"
            >
              <option value="All">All Organizations</option>
              {organizations.map((org) => (
                <option key={org} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;