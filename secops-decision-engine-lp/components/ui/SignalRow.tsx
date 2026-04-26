import { Signal } from '@/data/signals'

const sourceStyles: Record<string, string> = {
  abuseipdb: 'src-abuse',
  virustotal: 'src-vt',
  greynoise: 'src-gn',
  shodan: 'src-shodan',
}

export function SignalRow({ signal }: { signal: Signal }) {
  return (
    <div className="signal-row">
      <span className={`signal-source ${sourceStyles[signal.sourceKey]}`}>
        {signal.source}
      </span>
      <span className="signal-field">{signal.field}</span>
      <span className="signal-value">{String(signal.value)}</span>
      <span className="signal-weight">w:{signal.weight}</span>
    </div>
  )
}