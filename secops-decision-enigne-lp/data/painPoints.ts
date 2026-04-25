export interface PainPoint {
  id: string;
  title: string;
  desc: string;
}

export const painPoints: PainPoint[] = [
  {
    id: "01",
    title: "Your logs are evidence. Nobody's reading them.",
    desc: "Thousands of auth events, network connections, and process executions generated every day. All of it sitting in files no one opens until after the breach."
  },
  {
    id: "02",
    title: "You caught the last incident by accident.",
    desc: "Someone noticed something unusual in a Slack alert. Maybe. Reactive security isn't a strategy — it's luck running out slowly."
  },
  {
    id: "03",
    title: "Enterprise deals are stalling on security questions.",
    desc: "SOC 2, ISO 27001, GDPR audit trails. Your sales cycle now includes a 40-page security questionnaire. You need proof of active monitoring, not a paragraph in your docs."
  },
  {
    id: "04",
    title: "SIEMs are built for teams you don't have.",
    desc: "Splunk and Chronicle are priced for enterprises with dedicated analysts and six-figure budgets. You need something that works for a team of engineers who have other jobs to do."
  },
  {
    id: "05",
    title: "Your detection logic lives in someone's head.",
    desc: "No version control. No audit trail. When that engineer leaves, the institutional knowledge about what to watch for goes with them."
  },
  {
    id: "06",
    title: "You know it needs to change. Nothing has.",
    desc: "You've had the conversation. You've looked at the tools. The gap between knowing and fixing it keeps getting wider. Every week without coverage is a week of exposure."
  }
];