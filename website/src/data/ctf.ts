/**
 * CTF participation and community events.
 *
 * Results appear only where the certificate printed one. Three of the four
 * events issued participation certificates with no placing, and they are
 * labelled as such rather than dressed up.
 */

export interface CtfEntry {
  event: string;
  organiser: string;
  date: string;
  sort: string;
  format: string;
  result: string;
  team?: string;
  credentialId?: string;
  verify?: string;
  file: string;
}

export const ctfs: readonly CtfEntry[] = [
  {
    event: 'CREST CTF 2026',
    organiser: 'CREST Cyber Club, Pimpri Chinchwad University',
    date: '2026',
    sort: '2026-12-31',
    format: '8-hour competition',
    result: 'Participation',
    file: '/certificates/crest-ctf-2026.pdf',
  },
  {
    event: 'ZeroDay Heist 2026',
    organiser: 'CyberHX',
    date: '6 June 2026',
    sort: '2026-06-06',
    format: '6-hour international CTF',
    result: 'Participation',
    credentialId: 'ZDH-2026-EA280181',
    verify: 'https://creds.cyberhx.com',
    file: '/certificates/zeroday-heist-2026.jpg',
  },
  {
    event: 'UNI6CTF 1.0',
    organiser: 'UNI6CTF',
    date: '4 April 2026',
    sort: '2026-04-04',
    format: 'National-level competition',
    result: 'Rank 88 · 1,030 points',
    team: 'Ctrl+z',
    credentialId: 'UNI6CTF-2026-0201',
    verify: 'https://verify.uni6ctf.online',
    file: '/certificates/uni6ctf-1-0.jpg',
  },
  {
    event: "HackZero'26",
    organiser: 'OWASP VIT Bhopal University',
    date: '28–29 March 2026',
    sort: '2026-03-28',
    format: 'Student CTF',
    result: 'Participation',
    team: 'Ctrl+z',
    file: '/certificates/hackzero-26-ctf.pdf',
  },
];

export interface EventEntry {
  name: string;
  organiser: string;
  date: string;
  summary: string;
  roles: { role: string; detail: string; file: string }[];
}

export const events: readonly EventEntry[] = [
  {
    name: 'International Conclave on Artificial Intelligence, Cyber Security & Emerging Technologies',
    organiser: 'Centre for Innovation and Incubation, Central University of Haryana',
    date: '5–14 July 2026',
    summary:
      'A ten-day conclave run with M Cyber Academy, Maharaj Cybersecurity Pvt. Ltd. as technology partner.',
    roles: [
      {
        role: 'Participant',
        detail: 'Attended the full ten-day programme.',
        file: '/certificates/cuh-conclave-participation.jpg',
      },
      {
        role: 'Content creator',
        detail: 'Recognised for contribution as a content creator during the conclave.',
        file: '/certificates/cuh-conclave-content-creator.jpg',
      },
    ],
  },
];
