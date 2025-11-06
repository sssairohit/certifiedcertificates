import { Certification } from './types';

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: 'Certified Solutions Architect - Professional & Advanced Networking - Specialty',
    domain: 'Cloud & Network Architecture',
    organization: 'Amazon Web Services (AWS)',
    content: [
      {
        id: 'csp-overview',
        title: 'Solutions Architect - Professional: Overview',
        content: `The AWS Certified Solutions Architect - Professional (SAP-C02) exam is intended for individuals who perform a solutions architect role with two or more years of hands-on experience managing and operating systems on AWS.

This certification validates a candidate's ability to:
- Design and deploy dynamically scalable, highly available, fault-tolerant, and reliable applications.
- Select appropriate AWS services to design and deploy an application based on given requirements.
- Migrate complex, multi-tier applications on AWS.
- Implement cost-control strategies.`
      },
      {
        id: 'csp-domains',
        title: 'Solutions Architect - Professional: Key Domains',
        content: `The exam covers four main domains:
1.  **Design Solutions for Organizational Complexity:** 26%
2.  **Design for New Solutions:** 29%
3.  **Continuously Improve Existing Solutions:** 25%
4.  **Accelerate Workload Migration and Modernization:** 20%`
      },
      {
        id: 'an-overview',
        title: 'Advanced Networking - Specialty: Overview',
        content: `The AWS Certified Advanced Networking - Specialty (ANS-C01) certification is intended for individuals who perform a networking role and have five years of hands-on experience with networking.

It validates a candidate's ability to:
- Design and develop hybrid and cloud-native networking architectures at scale.
- Implement and manage core AWS networking services.
- Leverage automation to streamline network deployment and operations.
- Secure and monitor AWS networks for performance and compliance.`
      },
      {
        id: 'an-domains',
        title: 'Advanced Networking - Specialty: Key Domains',
        content: `This exam covers five main domains:
1.  **Network Design:** 30%
2.  **Network Implementation:** 26%
3.  **Network Management and Operation:** 20%
4.  **Network Security, Compliance, and Governance:** 24%`
      },
      {
        id: 'chapter-1-foundations',
        title: 'Chapter 1: Foundational AWS Concepts & Core Services',
        content: `This chapter establishes the foundational knowledge required for both Solutions Architect Professional and Advanced Networking paths. A deep understanding of these core concepts is critical for designing and managing scalable, secure, and resilient solutions on AWS.

**Key Topics Covered:**
*   **AWS Well-Architected Framework:** Understanding the five pillars (Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization) is non-negotiable. This framework provides the blueprint for evaluating architectures and implementing designs that will scale over time.
*   **Identity and Access Management (IAM):** We will delve into advanced IAM topics, including roles, policies, cross-account access, and federated identity management. Securely controlling access to AWS resources is the bedrock of any secure cloud environment.
*   **Virtual Private Cloud (VPC):** Moving beyond the basics, this section will cover complex VPC architectures, including multi-VPC designs, transit gateways, VPC endpoints (Gateway and Interface), and network access control lists (NACLs) vs. security groups.
*   **Elastic Compute Cloud (EC2):** We will explore advanced EC2 concepts such as placement groups, instance types optimization, Spot Instances for cost savings, and Auto Scaling for high availability and dynamic scaling.
*   **Simple Storage Service (S3):** This section covers advanced S3 features, including storage classes (e.g., Intelligent-Tiering, Glacier Deep Archive), lifecycle policies, replication for disaster recovery, and securing data with bucket policies and access points.`
      },
      {
        id: 'chapter-2-architecture',
        title: 'Chapter 2: Advanced Architecture & Scalability',
        content: `Building upon the core services, this chapter explores how to combine them into complex, resilient, and scalable architectures. We will focus on designing for high availability, fault tolerance, and hybrid connectivity.

**Key Topics Covered:**
*   **Advanced Networking & Hybrid Environments:** This section is critical for connecting on-premises data centers with the AWS cloud.
    *   **AWS Direct Connect vs. Site-to-Site VPN:** Understanding the use cases, performance, and cost implications of dedicated private connections versus encrypted tunnels over the internet.
    *   **AWS Transit Gateway:** Designing a hub-and-spoke network topology to simplify connectivity and management between multiple VPCs and on-premises networks.
    *   **Amazon Route 53:** Advanced DNS management, including routing policies (e.g., latency-based, geolocation, weighted) for global traffic distribution and high availability.
*   **Designing for Scalability & High Availability:** Learn how to build systems that can handle dynamic traffic loads and recover gracefully from failures.
    *   **Elastic Load Balancing (ELB):** Deep dive into Application Load Balancers (ALB), Network Load Balancers (NLB), and Gateway Load Balancers (GWLB), and their specific use cases for distributing traffic.
    *   **Advanced Auto Scaling:** Implementing dynamic and predictive scaling policies to automatically adjust compute capacity based on demand, optimizing for both performance and cost.
    *   **Containerization (ECS & EKS):** Introduction to Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS) for deploying, managing, and scaling containerized applications.
*   **Database Solutions at Scale:** Selecting the right database service is crucial for application performance and scalability.
    *   **Relational vs. NoSQL:** Comparing Amazon RDS (and its high-availability features) and Amazon Aurora (for performance) with Amazon DynamoDB (for scalable, low-latency NoSQL).
    *   **In-Memory Caching:** Using Amazon ElastiCache (Redis or Memcached) to reduce database load and improve application response times.`
      },
       {
        id: 'exam-format',
        title: 'Exam Format & Details (for both)',
        content: `Both certifications follow a similar format:
- **Format:** Multiple choice, multiple response questions.
- **Length:** 170-180 minutes.
- **Number of Questions:** 65-75 questions.
- **Cost:** 300 USD each.
- **Prerequisites:** AWS recommends holding an associate-level certification (e.g., Solutions Architect - Associate) before attempting the professional or specialty exams.`
      }
    ],
  },
  {
    id: 2,
    title: 'Advanced Security Practitioner (CASP+)',
    domain: 'Cybersecurity',
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
    domain: 'Cloud & Network Architecture',
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
    domain: 'Cybersecurity',
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
    domain: 'Cybersecurity',
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
    domain: 'Cloud & Network Architecture',
    organization: 'Microsoft Azure',
    content: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'This combination validates expertise in designing and implementing solutions that run on Microsoft Azure, including aspects like compute, network, storage, and security. It signifies mastery in cloud and cybersecurity architecture within the Azure ecosystem.',
      },
      {
        id: 'az-305',
        title: 'Solutions Architect',
        content: 'Focuses on designing identity, governance, data storage, business continuity, and infrastructure solutions. It tests your ability to advise stakeholders and translate business requirements into secure, scalable, and reliable cloud solutions.',
      },
      {
        id: 'sc-100',
        title: 'Cybersecurity Architect',
        content: 'Focuses on designing a Zero Trust strategy and architecture, evaluating Governance Risk Compliance (GRC), and designing security for infrastructure and applications.',
      }
    ]
  },
  {
    id: 10,
    title: 'Professional Cloud Architect (PCA)',
    domain: 'Cloud & Network Architecture',
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