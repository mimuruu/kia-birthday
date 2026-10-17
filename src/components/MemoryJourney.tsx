import { memories, greeting } from "../content/birthdayContent"
import { Doodle } from "./Doodles"
import { useReveal } from "../hooks/useReveal"

export function GreetingSection() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="section greeting reveal" ref={ref} aria-labelledby="greeting-title">
      <h2 id="greeting-title">{greeting.heading}</h2>
      <p className="lead">{greeting.lead}</p>
      <p className="transition-line">{greeting.transition}</p>
    </section>
  )
}

export function MemoryJourney() {
  return (
    <section className="section" aria-labelledby="journey-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="journey-title">Cerita kita so far</h2>
        </div>
        <div className="memory-list">
          {memories.map((m) => (
            <MemoryItem key={m.id} memory={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MemoryItem({ memory }: { memory: (typeof memories)[number] }) {
  const ref = useReveal<HTMLElement>()
  return (
    <article className={`memory memory-${memory.variant} reveal`} ref={ref}>
      <span className={`tape${memory.variant === "card-right" || memory.variant === "night" ? " tape-right" : memory.variant === "ticket" ? " tape-left" : ""}`} aria-hidden="true" />
      <Doodle name={memory.doodle} />
      <h3>{memory.title}</h3>
      <p>{memory.text}</p>
    </article>
  )
}
