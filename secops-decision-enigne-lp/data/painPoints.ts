export interface PainPoint {
  id: string;
  title: string;
  desc: string;
}

export const painPoints: PainPoint[] = [
  {
    id: "01",
    title: "AI didn't just change how you build. It's changed how you get attacked.",
    desc: "Automated vulnerability scanning, AI-generated phishing, credential stuffing at scale — the threat surface your team faces in 2026 is categorically different from two years ago. Manual reviews can't keep pace. Your defence needs to be as automated as the attack."
  },
  {
    id: "02",
    title: "Your logs are evidence. Nobody's reading them.",
    desc: "Thousands of auth events, network connections, and process executions generated every day. All of it sitting in files no one opens until after the breach."
  },
  {
    id: "03",
    title: "You caught the last incident by accident.",
    desc: "Someone noticed something unusual in a Slack alert. Maybe. There's no version-controlled detection logic, no audit trail — just institutional knowledge in one engineer's head and luck that's running out slowly."
  },
  {
    id: "04",
    title: "Enterprise deals are stalling on security questions.",
    desc: "SOC 2, ISO 27001, GDPR audit trails. Your sales cycle now includes a 40-page security questionnaire. You need proof of active monitoring, not a paragraph in your docs."
  },
  {
    id: "05",
    title: "The tools your team ships with are now attack surfaces.",
    desc: "GitHub, Vercel, CI pipelines — the breaches hitting developer infrastructure aren't abstract anymore. Your team uses these tools every day. When the supply chain is the vector, you need detection that understands how developers actually work."
  },
  {
    id: "06",
    title: "SIEMs are built for teams you don't have.",
    desc: "Splunk and Chronicle are priced for enterprises with dedicated analysts and six-figure budgets. You need something that works for a team of engineers who have other jobs to do."
  },
];