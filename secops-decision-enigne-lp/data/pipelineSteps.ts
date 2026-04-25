export interface PipelineStep {
  num: string;
  title: string;
  outcome: string;
  description: string;
  status: 'live' | 'beta' | 'planned';
}

export const pipelineSteps: PipelineStep[] = [
  {
    num: '01',
    title: 'Detection Rules',
    outcome: 'Your engineers write the rules',
    description: 'YAML-defined detections your team owns, versions, and ships like code. Brute force, privilege escalation, port scans — and anything specific to your stack.',
    status: 'live'
  },
  {
    num: '02',
    title: 'Alert Pipeline',
    outcome: 'Nothing gets missed',
    description: 'Every event evaluated in real time. Queued with retry logic, dead letter handling, and a full audit trail. No silent failures.',
    status: 'live'
  },
  {
    num: '03',
    title: 'Threat Intel',
    outcome: 'Context on every indicator',
    description: 'IPs enriched against AbuseIPDB, VirusTotal, and GreyNoise in parallel. Embedded in every triage result — not a separate lookup.',
    status: 'live'
  },
  {
    num: '04',
    title: 'AI Triage',
    outcome: 'Signal from noise, automatically',
    description: 'Deterministic rules handle the clear cases. LLM classification handles the ambiguous ones. Every decision explained — not just a score.',
    status: 'live'
  },
  {
    num: '05',
    title: 'Metrics',
    outcome: 'Prove your security posture',
    description: 'Automation rate, escalation rate, override rate. The numbers that show whether your detections are working — exportable for compliance evidence.',
    status: 'live'
  }
];