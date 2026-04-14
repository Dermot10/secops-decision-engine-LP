export interface PipelineStep {
  num: string
  lang: 'Go' | 'Python'
  title: string
  description: string
  status: 'live' | 'beta' | 'planned'
}

export const pipelineSteps: PipelineStep[] = [
  {
    num: '01',
    lang: 'Python',
    title: 'Log ingestion',
    description: 'Application logs, auth events, and cloud audit trails normalised to a common schema.',
    status: 'planned'
  },
  {
    num: '02',
    lang: 'Python',
    title: 'Detection rules',
    description: 'YAML-defined detection rules evaluate events. Brute force, port scans, privilege escalation.',
    status: 'live'
  },
  {
    num: '03',
    lang: 'Go',
    title: 'Alert gateway',
    description: 'Alerts queued via RabbitMQ with retry, dead letter, and full audit trail.',
    status: 'live'
  },
  {
    num: '04',
    lang: 'Python',
    title: 'AI triage',
    description: 'Three-source enrichment + deterministic rules + LLM classification with full explainability.',
    status: 'live'
  },
  {
    num: '05',
    lang: 'Go',
    title: 'Decision',
    description: 'Escalate, auto-close, or human review — with reasons your team can act on immediately.',
    status: 'live'
  }
]