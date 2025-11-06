
import { Certification } from './types';

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: 'Certified Solutions Architect - Professional and Advanced Networking - Specialty',
    domain: 'Cloud Architecture & Networking',
    organization: 'Amazon Web Services (AWS)',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Validates advanced technical skills and experience in designing distributed applications and systems on the AWS platform. This certification is for individuals who perform a solutions architect role with two or more years of hands-on experience managing and operating systems on AWS.',
      },
      {
        id: 'key-domains',
        title: 'Key Domains',
        content: 'Covers complex topics such as designing for new business requirements, continuous improvement for existing solutions, accelerated workload migration, and ensuring security and reliability.',
      },
      {
        id: 'exam-format',
        title: 'Exam Format',
        content: 'The exam is a multiple-choice, multiple-response test that challenges your ability to solve complex problems and design solutions using architectural best practices.',
      },
       {
        id: 'advanced-networking',
        title: 'Advanced Networking',
        content: 'The Advanced Networking specialty validates expertise in designing and implementing AWS and hybrid IT network architectures at scale. Topics include Direct Connect, VPN, VPC, and routing.',
      }
    ],
  },
  {
    id: 2,
    title: 'Advanced Security Practitioner (CASP+)',
    domain: 'Cybersecurity (Vendor-Neutral)',
    organization: 'CompTIA',
    content: [
       {
        id: 'overview',
        title: 'Overview',
        content: 'A performance-based certification for enterprise security architects and senior security engineers. CASP+ validates advanced-level competency in risk management, enterprise security operations and architecture, research and collaboration, and integration of enterprise security.',
      },
      {
        id: 'target-audience',
        title: 'Target Audience',
        content: 'Aimed at IT cybersecurity professionals with a minimum of ten years of experience in IT administration, including at least five years of hands-on technical security experience.',
      },
      {
        id: 'exam-objectives',
        title: 'Exam Objectives',
        content: 'Focuses on critical thinking and judgment across a broad spectrum of security disciplines including enterprise security, risk management, and incident response.',
      }
    ]
  },
  {
    id: 3,
    title: 'Certified Internetwork Expert (CCIE) / Certified Design Expert (CCDE)',
    domain: 'Networking/Architecture',
    organization: 'Cisco',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Cisco Certified Internetwork Expert (CCIE) and Cisco Certified Design Expert (CCDE) certifications are expert-level credentials that validate the highest level of networking and network design skills respectively. They are among the most respected certifications in the IT industry.',
      },
      {
        id: 'ccie-track',
        title: 'CCIE Track',
        content: 'The CCIE track is for hands-on network engineers and requires passing a qualifying exam and a rigorous 8-hour lab exam. It validates end-to-end IT lifecycle skills.',
      },
      {
        id: 'ccde-track',
        title: 'CCDE Track',
        content: 'The CCDE track is for expert-level network design engineers and architects. It focuses on translating business needs and operational constraints into the design of a converged network solution.',
      }
    ]
  },
  {
    id: 4,
    title: 'Certified Master Architect (CMA)',
    domain: 'Platform Architecture/Strategic Consulting',
    organization: 'ServiceNow',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'The pinnacle of ServiceNow certification, the CMA demonstrates an individual\'s ability to design and lead the most complex ServiceNow implementations, aligning platform capabilities with strategic business outcomes.',
      },
      {
        id: 'requirements',
        title: 'Prerequisites',
        content: 'Requires a significant number of prior ServiceNow certifications, extensive implementation experience, and passing a rigorous board review where candidates must present and defend a complex solution architecture.',
      },
      {
        id: 'core-competencies',
        title: 'Core Competencies',
        content: 'Validates skills in governance, enterprise architecture, business process, and ServiceNow platform capabilities to solve complex business problems.',
      }
    ]
  },
  {
    id: 5,
    title: 'SAP Certified Master',
    domain: 'Enterprise Software/Architecture',
    organization: 'SAP',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Represents the highest level of SAP certification. It is awarded to experts who have extensive hands-on experience, deep product knowledge, and the ability to lead and architect complex SAP projects.',
      },
      {
        id: 'expertise',
        title: 'Demonstrated Expertise',
        content: 'This certification is not based on a single exam but on a portfolio of successful projects, contributions to the SAP community, and a deep understanding of SAP technologies and methodologies.',
      }
    ]
  },
  {
    id: 6,
    title: 'Portfolio Management Professional (PfMP)',
    domain: 'Project/Program/Portfolio Management',
    organization: 'Project Management Institute (PMI)',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Recognizes the advanced experience and skill of portfolio managers. The PfMP demonstrates proven ability in the coordinated management of one or more portfolios to achieve strategic objectives.',
      },
      {
        id: 'strategic-alignment',
        title: 'Strategic Alignment',
        content: 'Focuses on ensuring the portfolio of projects and programs is aligned with the organization\'s strategic goals, managing resources, and optimizing value.',
      },
      {
        id: 'eligibility',
        title: 'Eligibility Requirements',
        content: 'Requires extensive experience in portfolio management (e.g., 96 months) and passing two evaluations: a panel review and a multiple-choice examination.',
      }
    ]
  },
  {
    id: 7,
    title: 'Certified Information Systems Security Professional (CISSP)',
    domain: 'Cybersecurity (Vendor-Neutral)',
    organization: '(ISC)²',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'A globally recognized certification in the field of information security. It confirms an individual\'s knowledge in designing, engineering, implementing, and managing an overall information security program to protect organizations from growingly sophisticated attacks.',
      },
      {
        id: 'domains',
        title: 'Eight Domains',
        content: 'The CISSP exam covers eight critical domains of information security: Security and Risk Management, Asset Security, Security Architecture and Engineering, Communication and Network Security, Identity and Access Management (IAM), Security Assessment and Testing, Security Operations, and Software Development Security.',
      }
    ]
  },
  {
    id: 8,
    title: 'Offensive Security Certified Professional (OSCP)',
    domain: 'Penetration Testing',
    organization: 'Offensive Security',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'A highly respected ethical hacking certification that is purely hands-on. OSCP holders have demonstrated their ability to compromise a series of target machines using multiple exploitation steps and produce detailed penetration test reports for their findings.',
      },
      {
        id: 'exam-structure',
        title: 'Exam Structure',
        content: 'The OSCP exam is a 24-hour, hands-on penetration test in a dedicated lab environment. Candidates must demonstrate practical and creative problem-solving skills to succeed.',
      },
      {
        id: 'motto',
        title: 'Try Harder Motto',
        content: 'The certification is known for its "Try Harder" philosophy, encouraging a persistent and resourceful mindset essential for real-world penetration testing.',
      }
    ]
  },
  {
    id: 9,
    title: 'Azure Solutions Architect Expert (AZ-305) and Cybersecurity Architect Expert (SC-100)',
    domain: 'Cloud Architecture',
    organization: 'Microsoft Azure',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'This combination validates expertise in designing and implementing solutions that run on Microsoft Azure, including aspects like compute, network, storage, and security. It signifies mastery in cloud and cybersecurity architecture within the Azure ecosystem.',
      },
      {
        id: 'az-305',
        title: 'AZ-305: Solutions Architect',
        content: 'Focuses on designing identity, governance, data storage, business continuity, and infrastructure solutions. It tests your ability to advise stakeholders and translate business requirements into secure, scalable, and reliable cloud solutions.',
      },
      {
        id: 'sc-100',
        title: 'SC-100: Cybersecurity Architect',
        content: 'Focuses on designing a Zero Trust strategy and architecture, evaluating Governance Risk Compliance (GRC), and designing security for infrastructure and applications.',
      }
    ]
  },
  {
    id: 10,
    title: 'Professional Cloud Architect (PCA)',
    domain: 'Cloud Architecture',
    organization: 'Google Cloud Platform (GCP)',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Enables professionals to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives. This certification validates the ability to design and plan a cloud solution architecture.',
      },
      {
        id: 'core-skills',
        title: 'Core Skills',
        content: 'Key skills include designing for security and compliance, analyzing and optimizing technical and business processes, managing implementations, and ensuring solution and operations reliability.',
      }
    ]
  },
  {
    id: 11,
    title: 'VMware Certified Design Expert (VCDX)',
    domain: 'Virtualization/Data Center Design',
    organization: 'VMware',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'The highest level of VMware certification. VCDX candidates must submit and successfully defend a production-ready VMware solution design before a panel of veteran VCDX holders.',
      },
      {
        id: 'defense-process',
        title: 'The Defense Process',
        content: 'Candidates are evaluated not just on their technical design, but also on their ability to justify design choices, manage a project, and articulate how the solution meets business requirements.',
      }
    ]
  },
  {
    id: 12,
    title: 'Oracle Certified Master (OCM)',
    domain: 'Database Administration',
    organization: 'Oracle',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'The OCM credential is the pinnacle of Oracle certifications and demonstrates the ability to manage mission-critical Oracle database systems. It is a rigorous performance-based exam that tests senior-level DBAs.',
      },
      {
        id: 'exam-environment',
        title: 'Exam Environment',
        content: 'The OCM is a two-day, hands-on exam where candidates are given a live database environment and a set of complex scenarios to troubleshoot and resolve under time pressure.',
      }
    ]
  },
  {
    id: 13,
    title: 'ITIL Master',
    domain: 'IT Service Management (ITSM)',
    organization: 'Axelos',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Represents the highest level of achievement in the ITIL framework. To become an ITIL Master, one must be able to explain and justify how they have personally selected and applied a range of ITIL knowledge, principles, methods, and techniques to achieve desired business outcomes in one or more practical assignments.',
      },
      {
        id: 'practical-application',
        title: 'Focus on Practical Application',
        content: 'Unlike other ITIL certifications, the Master level is not based on an exam. It requires candidates to submit a portfolio of work demonstrating their hands-on application of ITIL principles to solve real-world business problems.',
      }
    ]
  },
];
