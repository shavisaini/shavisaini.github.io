/**
 * NETRA case-study facts, written for a public audience.
 *
 * Everything here is traceable to the project's own documentation and recorded
 * stage reports. Nothing is inferred, rounded for effect, or added for
 * presentation.
 *
 * This file is deliberately kept at the level of *what the system does and
 * refuses to do*. Detector logic, thresholds, feature definitions, module
 * names, internal routes and processing order are not published here: they
 * would teach reproduction without adding anything to the argument that the
 * work was done and understood.
 */

export const netra = {
  name: 'NETRA',
  tagline: 'Passive network threat analytics prototype',
  status: 'Smart India Hackathon 2026 prototype',
  role: 'Sole author — problem framing, detection design, backend and interface',
  stack: 'Python · FastAPI · React · scikit-learn',
  /** Window the published screenshots were captured in. */
  captures: {
    range: '30 September – 1 October 2026',
  },
} as const;

export interface Stage {
  step: string;
  title: string;
  detail: string;
}

/**
 * The conceptual shape of the system, not its architecture. Four ideas, in the
 * order a visitor needs them — not the order the code runs in.
 */
export const approach: readonly Stage[] = [
  {
    step: '01',
    title: 'Observe',
    detail:
      'Work only from a one-way copy of network traffic. The monitoring side never sends anything back onto the link it is watching.',
  },
  {
    step: '02',
    title: 'Measure',
    detail:
      'Turn that traffic into behavioural measurements over time, and keep anything that could not be measured explicitly marked as missing rather than as zero.',
  },
  {
    step: '03',
    title: 'Decide',
    detail:
      'Raise a finding only where several independent signals agree, and carry the measurements that produced it along with the finding.',
  },
  {
    step: '04',
    title: 'Investigate',
    detail:
      'Group related findings into incidents an analyst can actually work, with the supporting evidence attached to each one.',
  },
];

export interface Capability {
  name: string;
  summary: string;
  /** The claim the project refuses to make about this category. */
  notClaimed: string;
}

/**
 * The eight behaviour categories NETRA reports on. Described by what an analyst
 * sees, with the limit on each one kept visible — the limits are the point.
 */
export const capabilities: readonly Capability[] = [
  {
    name: 'Volumetric abuse',
    summary: 'Sudden, concentrated traffic surges directed at a target.',
    notClaimed: 'Proof of spoofing, reflection or amplification — or who sent it.',
  },
  {
    name: 'DNS behaviour',
    summary: "Name-resolution activity that departs from a host's ordinary pattern.",
    notClaimed: 'That any single unusual name is itself the finding.',
  },
  {
    name: 'Generated domains',
    summary: 'Domain names whose shape suggests they were generated rather than chosen.',
    notClaimed: 'A named malware family. No reputation feed is consulted to decide this.',
  },
  {
    name: 'Name-channel abuse',
    summary: 'Name traffic shaped more like a data channel than like ordinary lookups.',
    notClaimed: 'That anything was carried out. Payloads are never reconstructed.',
  },
  {
    name: 'Command-and-control patterns',
    summary:
      'Conversations that repeat with machine-like regularity toward a single destination.',
    notClaimed: 'Malware attribution, or the name of a command-and-control framework.',
  },
  {
    name: 'Reconnaissance',
    summary: 'A single source fanning out across many hosts or ports in a probing pattern.',
    notClaimed:
      'Attacker identity — and an authorised scanner looks no different in this telemetry.',
  },
  {
    name: 'Large outbound transfers',
    summary: 'Sustained outbound volume that is lopsided and repeats.',
    notClaimed:
      'That data was stolen, or what it contained. A routine one-way backup produces the same shape.',
  },
  {
    name: 'Unusual encrypted sessions',
    summary:
      'Encrypted sessions whose handshake and timing characteristics stand out from the rest of the environment.',
    notClaimed: 'Anything about the contents. Nothing is decrypted at any point.',
  },
];

/** Design positions, stated as principles rather than as implementation. */
export const principles = [
  {
    title: 'Passive by construction',
    detail:
      'Nothing is probed, blocked, answered or decrypted. The system reads a copy of traffic and produces statements about it; acting on those statements is a human decision made elsewhere.',
  },
  {
    title: 'No outbound enrichment',
    detail:
      'Threat-intelligence matching runs against a locally supplied list, specifically so that enriching an alert can never become an outbound connection from the monitored environment.',
  },
  {
    title: 'Bounded under load',
    detail:
      'Memory use is capped at every stage, so an unusually large — or deliberately hostile — capture degrades the view rather than exhausting the host.',
  },
  {
    title: 'Identifiers stay out of the model',
    detail:
      'Addresses, ports, timestamps and labels are excluded from the research model, both to prevent label leakage and to keep raw identifiers out of any published artifact.',
  },
] as const;

/** Reproduced from the project's own limitations documentation. */
export const limitations = [
  'The one-directional boundary is a deployment assumption. No software process can certify a physical data path.',
  'Passive only. Nothing is blocked, answered or decrypted, and there is no active response.',
  'The anomaly-detection baseline sits deliberately outside the alert path. It showed no measured benefit over the rule-based work, so describing this as AI-powered detection would be false.',
  'Model training and evaluation both used public research captures from a single collection. That is not a cross-dataset result.',
  'Detection quality has never been scored against a labelled attack corpus, so there is no accuracy or false-positive figure to quote.',
  'Throughput was recorded once, on one workstation, replaying synthetic traffic. It is not a line rate.',
  'It does not integrate with existing intrusion-detection or flow-collection ecosystems.',
  'A hackathon-timeline prototype. It has never been operated in production or on a live network.',
] as const;

/** Engineering lessons, kept at the level of the decision rather than the code. */
export const learnings = [
  {
    title: 'A missing measurement has to stay missing',
    detail:
      'The first version returned zero for anything it could not compute, and those zeroes quietly satisfied comparisons further down the line. Making absence an explicit state turned a class of invisible false positives into an honest gap in the evidence.',
  },
  {
    title: 'Writing down what a detector must not say is design work',
    detail:
      'Every category on this page has a sentence describing the claim it is not allowed to make. Each of those sentences changed the implementation — usually by removing a conclusion that the data had never actually supported.',
  },
  {
    title: 'An unused model is still a result',
    detail:
      'Feeding the research model into the alert stream would have let me call the project AI-powered. It had no measured advantage over the deterministic work, so wiring it in would have added an unexplainable input to a system whose whole argument is that it can be checked.',
  },
  {
    title: 'Grouping alerts is not detecting better',
    detail:
      'How findings are gathered into incidents and how findings are raised are separate policies. Tuning the first reduces the number of alerts on screen while changing nothing about what was detected, and confusing the two is an easy way to report progress that is not there.',
  },
] as const;
