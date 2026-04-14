import { stats } from '@/data/stats'

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="stat-num">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}