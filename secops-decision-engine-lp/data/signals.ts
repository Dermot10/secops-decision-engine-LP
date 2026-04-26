export interface Signal {
  source: string
  sourceKey: 'abuseipdb' | 'virustotal' | 'greynoise' 
  field: string
  value: string | number
  weight: number
}

export const signals: Signal[] = [
  {
    source: 'AbuseIPDB',
    sourceKey: 'abuseipdb',
    field: 'abuse_confidence_score',
    value: 100,
    weight: 0.6
  },
  {
    source: 'VirusTotal',
    sourceKey: 'virustotal',
    field: 'malicious_engines',
    value: '14/94',
    weight: 0.5
  },
  {
    source: 'GreyNoise',
    sourceKey: 'greynoise',
    field: 'classification',
    value: 'malicious',
    weight: 0.4
  }
]