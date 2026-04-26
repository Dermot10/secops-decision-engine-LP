export interface Stage {
    id: string;
    label: string;
    sub: string;
    desc: string;
    intensity: number,
    you: boolean;
}


export const STAGES: Stage[] = [
  {
    id: "01",
    label: "Founder",
    sub: "1–3 people",
    desc: "Security is a password manager and a prayer. Acceptable — the surface is small.",
    intensity: 1,
    you: false,
  },
  {
    id: "02",
    label: "Early Team",
    sub: "4–15 people",
    desc: "Engineers own everything. Security is whoever noticed the Slack alert. Still getting away with it.",
    intensity: 2,
    you: true,
  },
  {
    id: "03",
    label: "Growing Fast",
    sub: "15–80 people",
    desc: "Real customers. Real data. Real attack surface. No security function. This is where incidents happen.",
    intensity: 3,
    you: true,
  },
  {
    id: "04",
    label: "Scaling",
    sub: "80–200 people",
    desc: "First security hire. Compliance pressure mounting. Choosing a SIEM. Budget conversations starting.",
    intensity: 2,
    you: true,
  },
  {
    id: "05",
    label: "Enterprise",
    sub: "200+ people",
    desc: "Dedicated SOC. Six-figure tooling. Splunk contracts. Not your problem yet.",
    intensity: 1,
    you: false,
  },
];


export const INTENSITY_STYLE: Record<number, { pulse: string; glow: string; dotColor: string; borderColor: string }> = {
  0: {
    pulse: "none",
    glow: "none",
    dotColor: "#131920",
    borderColor: "#243040",
  },
  1: {
    pulse: "pulse-slow 3s ease-in-out infinite",
    glow: "0 0 10px rgba(56,189,248,0.2)",
    dotColor: "#1a2a3a",
    borderColor: "#2e3d52",
  },
  2: {
    pulse: "pulse-mid 2s ease-in-out infinite",
    glow: "0 0 16px rgba(56,189,248,0.35)",
    dotColor: "#38bdf8",
    borderColor: "#38bdf8",
  },
  3: {
    pulse: "pulse-fast 1.2s ease-in-out infinite",
    glow: "0 0 28px rgba(56,189,248,0.6)",
    dotColor: "#38bdf8",
    borderColor: "#38bdf8",
  },
};