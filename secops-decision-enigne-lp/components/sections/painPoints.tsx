import { painPoints } from "@/data/painPoints";

export default function PainPoints() {
  return (
    <section className="pain-section">
      <h2>Sound familiar?</h2>

      <div className="pain-grid">
        {painPoints.map(p => (
          <div key={p.id} className="pain-card">
            <div className="pain-number">{p.id}</div>
            <span>{p.icon}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}