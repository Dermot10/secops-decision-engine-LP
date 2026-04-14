type PainPoint = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  highlight?: boolean
};


export const painPoints = [
  {
    id: "01",
    icon: "🪵",
    title: "You have logs. No one's watching them.",
    desc: "Your infrastructure generates thousands of security events daily. They vanish into log files with no one to interpret them until something goes wrong."
  },
  {
    id: "02",
    icon: "🏢",
    title: "Enterprise customers want proof of security posture.",
    desc: "Your sales deals are stalling on security questionnaires. You need evidence of active monitoring — not just a checkbox in your infra docs."
  },
  {
    id: "03",
    icon: "💸",
    title: "A full SIEM is overkill. And expensive.",
    desc: "Splunk, Sentinel, Chronicle — all built for enterprises with dedicated security teams and six-figure budgets. You need something proportionate."
  },
  {
    id: "04",
    icon: "🔍",
    title: "Your last incident was caught by accident.",
    desc: "Someone noticed something unusual. Maybe. Reactive security isn't a strategy — it's luck. You know it needs to change."
  },
  {
    id: "05",
    icon: "👤",
    title: "You don't have a security hire yet.",
    desc: "You're a developer-led team. Security expertise is expensive to hire and hard to retain. You need tooling that works without a dedicated analyst."
  },
  {
    id: "06",
    icon: "📊",
    title: "Compliance is becoming unavoidable.",
    desc: "SOC 2, ISO 27001, GDPR audit trails — you're getting asked about these more often. Showing active threat monitoring is table stakes."
  }
];