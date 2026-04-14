export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '3', label: 'enrichment sources' },
  { value: '<1s', label: 'triage latency' },
  { value: '100%', label: 'decisions explained' },
  { value: '0', label: 'black box decisions' },
]