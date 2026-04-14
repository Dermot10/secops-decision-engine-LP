import { pipelineSteps } from '@/data/pipelineSteps'
import { FlowStep } from '@/components/ui/flowStep'

export default function Pipeline() {
  return (
    <section className="flow-section" id="pipeline">
      <div className="section-label">the pipeline</div>
      <h2>From log to decision<br />in seconds</h2>
      <p className="sub">
        An event-driven pipeline that handles enrichment, detection, and triage — automatically.
      </p>
      <div className="pipeline-flow">
        {pipelineSteps.map((step, i) => (
            <div key={step.num}>
                <FlowStep step={step} />
                {i < pipelineSteps.length - 1 && (
                <div className="flow-connector" />
                )}
            </div>
            ))}
      </div>
    </section>
  )
}