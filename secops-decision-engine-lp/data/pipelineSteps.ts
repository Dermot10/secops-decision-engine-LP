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
    title: 'Log Collection',
    outcome: 'Every event, from every surface',
    description: 'SSH, web servers, cloud audit trails, GitHub webhooks — normalised to a common schema automatically. File tail, syslog, and webhook ingestion without custom integrations.',
    status: 'beta'
  },
  {
    num: '02',
    title: 'Detection Rules',
    outcome: 'Your engineers write and own the rules',
    description: 'YAML-defined detections your team versions and ships like code. Brute force, privilege escalation, port scans — and anything specific to your stack.',
    status: 'beta'
  },
  {
    num: '03',
    title: 'Alert Pipeline',
    outcome: 'Nothing gets missed',
    description: 'Every matching event processed with a full audit trail. No silent failures, no dropped alerts.',
    status: 'beta'
  },
  {
    num: '04',
    title: 'Threat Intel',
    outcome: 'Context on every indicator',
    description: 'IoCs enriched against various sources of intelligence in parallel to provide context to your detections. Embedded in every triage result.',
    status: 'beta'
  },
  {
    num: '05',
    title: 'AI Triage',
    outcome: 'Signal from noise, automatically',
    description: 'Deterministic rules handle the clear cases. LLM classification handles the ambiguous ones. Every decision explained — not just a score.',
    status: 'beta'
  },
  {
    num: '06',
    title: 'Notifications',
    outcome: 'Your team knows the moment it matters',
    description: 'Escalations fire to Slack, PagerDuty, or email automatically. The alert, the confidence score, the AI summary — delivered where your team already works.',
    status: 'planned'
  },
  {
    num: '07',
    title: 'Rule Intelligence',
    outcome: 'Detections that improve themselves',
    description: 'Pattern mining on historical alerts surfaces detection gaps and false positive rates. AI-suggested rules based on what your stack actually sees — not generic templates.',
    status: 'planned'
  }
];