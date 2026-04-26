export interface Stat {
  value: string;
  label: string;
  note: string;
}

export const stats: Stat[] = [
  {
    value: "< 500ms",
    label: "Triage latency",
    note: "Three-source enrichment, parallel"
  },
  {
    value: "100%",
    label: "Decisions explained",
    note: "No black box outputs"
  },
  {
    value: "0",
    label: "Security hires required",
    note: "Built for engineering teams"
  },
  {
    value: "YAML",
    label: "Detection format",
    note: "Version controlled, team owned"
  }
];