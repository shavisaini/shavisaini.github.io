/** Skills and lab practice, drawn from the résumé and from NETRA. */

export const skills = [
  {
    group: 'Security tooling',
    items: ['Kali Linux', 'Nmap', 'Burp Suite', 'Metasploit', 'Wireshark-class PCAP analysis'],
  },
  {
    group: 'Web and API security',
    items: [
      'OWASP Top 10',
      'OWASP API Security Top 10',
      'SQL injection',
      'XSS',
      'CSRF',
      'Authentication testing',
    ],
  },
  {
    group: 'Network security analysis',
    items: [
      'Packet capture and PCAP replay',
      'Flow and behavioural analysis',
      'IPFIX',
      'TLS and DNS metadata',
    ],
  },
  {
    group: 'Programming',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'FastAPI', 'React'],
  },
  {
    group: 'Governance and risk',
    items: ['Risk assessment basics', 'Vulnerability identification', 'Finding documentation'],
  },
] as const;

/**
 * Deliberately called practice, not projects. These are structured exercises in
 * a lab I built, and labelling them as original work would be inflation.
 */
export const practice = [
  {
    title: 'Ethical hacking lab',
    detail:
      'Built a vulnerable lab with Metasploitable under VirtualBox. Ran reconnaissance, port scanning and service enumeration with Nmap, validated vulnerabilities with basic exploitation to understand real impact, and documented findings mapped to organisational risk scenarios.',
  },
  {
    title: 'Web application security testing',
    detail:
      'Intercepted and modified HTTP requests with Burp Suite against web and API targets, and worked PortSwigger Web Security Academy labs on SQL injection, XSS, CSRF and authentication bypass, applying OWASP Top 10 methodology as the testing workflow.',
  },
  {
    title: 'Command-line and wargame practice',
    detail:
      'OverTheWire wargames alongside the TryHackMe Pre Security and Cyber Security 101 paths — 64 hours of recorded hands-on time across the two paths.',
  },
] as const;

export const education = [
  {
    qualification: 'B.Tech, Computer Science Engineering',
    institution: 'JMIETI',
    detail: 'CGPA 8.4',
  },
  {
    qualification: 'Secondary education',
    institution: '',
    detail: '91%',
  },
] as const;
