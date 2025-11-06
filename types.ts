export type GroupByOption = 'organization' | 'domain';

export interface ContentSection {
  id: string;
  title: string;
  content: string;
}

export interface Certification {
  id: number;
  title: string;
  domain: string;
  organization: string;
  content: ContentSection[];
}
