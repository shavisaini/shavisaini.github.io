/** Dated milestones, each backed by a document in the portfolio archive. */

export interface Milestone {
  date: string;
  title: string;
  detail: string;
}

export const journey: readonly Milestone[] = [
  {
    date: 'Sep 2026',
    title: 'NETRA completed',
    detail:
      'Finished the Smart India Hackathon 2026 prototype — a passive network threat analytics platform reporting on eight categories of network behaviour, with staged experiment records and 48 test modules behind it.',
  },
  {
    date: 'Jul 2026',
    title: 'TryHackMe Cyber Security 101 · CUH conclave · internship completed',
    detail:
      'Finished the 45-hour Cyber Security 101 path on 1 July, attended the ten-day International Conclave on AI and Cyber Security at Central University of Haryana as a participant and content creator, and closed the CyberYoddha internship with an A+ grade on 29 July.',
  },
  {
    date: 'Jun 2026',
    title: 'CyberYoddha internship · ZeroDay Heist · TryHackMe Pre Security',
    detail:
      'Began a 45-day cybersecurity internship on 15 June, competed in the six-hour ZeroDay Heist international CTF, and completed the TryHackMe Pre Security path.',
  },
  {
    date: 'Apr 2026',
    title: 'UNI6CTF 1.0',
    detail:
      'National-level capture-the-flag competition. Finished 88th with 1,030 points as part of team Ctrl+z.',
  },
  {
    date: 'Mar 2026',
    title: "HackZero'26",
    detail: 'Capture-the-flag event organised by OWASP VIT Bhopal University.',
  },
  {
    date: 'Dec 2025',
    title: 'OWASP API Security Top 10',
    detail:
      'APIsec University course on the API-specific risk categories and how each is tested — the foundation for the API side of my web security practice.',
  },
  {
    date: 'Apr 2025',
    title: 'Google Cybersecurity Professional Certificate',
    detail:
      'Completed the eight-course programme begun in 2024, covering security fundamentals, networks, Linux and SQL, threats and vulnerabilities, detection and response, and Python automation.',
  },
];
