/**
 * Certificates shown on the site.
 *
 * Every field was read off the certificate itself. Verification links appear
 * only where the issuer printed one on the document; where none exists, the
 * certificate file is the evidence and no link is invented.
 */

export interface Certificate {
  title: string;
  issuer: string;
  /** Human-readable issue date exactly as the certificate states it. */
  date: string;
  /** Machine-sortable date, used for ordering only. */
  sort: string;
  kind: 'Professional certificate' | 'Course' | 'Internship';
  summary: string;
  credentialId?: string;
  verify?: { label: string; url: string };
  file?: string;
  /** Component courses, disclosed on demand. */
  components?: { title: string; date: string; url: string }[];
}

export const certificates: readonly Certificate[] = [
  {
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google · Coursera',
    date: '3 April 2025',
    sort: '2025-04-03',
    kind: 'Professional certificate',
    summary:
      'An eight-course path covering security fundamentals, risk management, networks and network security, Linux and SQL, assets and vulnerabilities, detection and response, Python automation, and job preparation.',
    credentialId: '0VOOGEO7O5W3',
    verify: {
      label: 'Verify on Coursera',
      url: 'https://coursera.org/verify/professional-cert/0VOOGEO7O5W3',
    },
    file: '/certificates/google-cybersecurity-professional-certificate.pdf',
    components: [
      {
        title: 'Foundations of Cybersecurity',
        date: '2024',
        url: 'https://coursera.org/verify/2A1LETQ35H4B',
      },
      {
        title: 'Play It Safe: Manage Security Risks',
        date: '2024',
        url: 'https://coursera.org/verify/CX6OIGQ2002T',
      },
      {
        title: 'Connect and Protect: Networks and Network Security',
        date: '2024',
        url: 'https://coursera.org/verify/XEFPEDR0A1TG',
      },
      {
        title: 'Tools of the Trade: Linux and SQL',
        date: '2025',
        url: 'https://coursera.org/verify/49HB3A040W3S',
      },
      {
        title: 'Assets, Threats, and Vulnerabilities',
        date: '2025',
        url: 'https://coursera.org/verify/NKJHPL6POGBD',
      },
      {
        title: 'Automate Cybersecurity Tasks with Python',
        date: '2025',
        url: 'https://coursera.org/verify/84B0YUVCXMGG',
      },
    ],
  },
  {
    title: '45-Day Cyber Security Internship',
    issuer: 'CyberYoddha LLP',
    date: '15 June – 29 July 2026',
    sort: '2026-07-29',
    kind: 'Internship',
    summary:
      'Assessed through assignments, practical evaluations and a final examination. Awarded an A+ grade on the overall assessment.',
    file: '/certificates/cyberyoddha-cyber-security-internship.pdf',
  },
  {
    title: 'Cyber Security 101',
    issuer: 'TryHackMe',
    date: '1 July 2026',
    sort: '2026-07-01',
    kind: 'Course',
    summary:
      'A 45-hour hands-on learning path across offensive and defensive fundamentals, completed after the Pre Security path (19 hours, 11 June 2026).',
    credentialId: 'THM-USOQD8TN5G',
    file: '/certificates/tryhackme-cyber-security-101.pdf',
  },
  {
    title: 'Pre Security',
    issuer: 'TryHackMe',
    date: '11 June 2026',
    sort: '2026-06-11',
    kind: 'Course',
    summary:
      'A 19-hour foundation path covering networking, web, and Linux primitives, completed immediately before Cyber Security 101.',
    credentialId: 'THM-6DD9ATMUN9',
    file: '/certificates/tryhackme-pre-security.pdf',
  },
  {
    title: 'OWASP API Security Top 10',
    issuer: 'APIsec University',
    date: '31 December 2025',
    sort: '2025-12-31',
    kind: 'Course',
    summary:
      'The API-specific risk categories — broken object-level authorisation, broken authentication, excessive data exposure and the rest — and how each one is tested.',
    verify: {
      label: 'Verify on Credly',
      url: 'https://www.credly.com/badges/a7bbd9b8-c654-4321-a1e1-21d31f35a911',
    },
    file: '/certificates/apisec-owasp-api-security-top-10.jpg',
  },
];
