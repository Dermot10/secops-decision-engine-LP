import { PipelineStep } from '@/data/pipelineSteps'

const statusBadge = {
  live: { label: 'live', className: 'status-live' },
  beta: { label: 'beta', className: 'status-beta' },
  planned: { label: 'coming soon', className: 'status-planned' },
}

export function FlowStep({ step }: { step: PipelineStep }) {
  const badge = statusBadge[step.status]
  return (
    <div className="flow-step">
      <div className="flow-step-inner">
        <div className="step-num">{step.num}</div>
        <div className="step-badges">
          <span className={`step-lang ${step.lang === 'Go' ? 'lang-go' : 'lang-py'}`}>
            {step.lang}
          </span>
          <span className={`step-status ${badge.className}`}>
            {badge.label}
          </span>
        </div>
        <h4>{step.title}</h4>
        <p>{step.description}</p>
      </div>
    </div>
  )
}