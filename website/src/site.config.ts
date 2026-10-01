/**
 * Single source of truth for identity, verified links and navigation.
 * Nothing here may be a placeholder: every URL below was taken from a document
 * in the portfolio archive or from a live profile.
 *
 * The portfolio deliberately publishes no source-code or repository link. It
 * exists to show the work and the reasoning, not to distribute the code.
 */

export const site = {
  name: 'Shavi Saini',
  /** Header designation. Honest to the work: not a job title, not a trainer claim. */
  role: 'Cybersecurity & Ethical Hacking',
  description:
    'Shavi Saini — cybersecurity and ethical hacking. NETRA, a passive network threat analytics prototype, plus CTF participation, security labs and verified certificates.',
  location: 'Haryana, India',
  email: 'shavisaini2002@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shavisaini',
  },
} as const;

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about/' },
  { label: 'Projects', path: '/netra/' },
  { label: 'Certificates', path: '/certificates/' },
  { label: 'CTFs', path: '/ctf/' },
  { label: 'Contact', path: '/contact/' },
  { label: 'Resume', path: '/resume/' },
] as const;
