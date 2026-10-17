import { closing } from "../content/birthdayContent"
import { Doodle } from "./Doodles"
import { useReveal } from "../hooks/useReveal"

type ClosingSectionProps = {
  onBackToStart: () => void
}

export function ClosingSection({ onBackToStart }: ClosingSectionProps) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="section closing" aria-labelledby="closing-title">
      <img
        src={`${import.meta.env.BASE_URL}images/rapunzel-flower.png`}
        alt=""
        aria-hidden="true"
        className="closing-flower"
        loading="lazy"
      />
      <div className="wrap reveal" ref={ref}>
        <div className="closing-doodles" aria-hidden="true">
          <Doodle name="star" />
          <Doodle name="flower" />
          <Doodle name="spark" />
        </div>
        <h2 id="closing-title">{closing.headline}</h2>
        <p>{closing.message}</p>
        <button type="button" className="btn-primary" onClick={onBackToStart}>
          {closing.backToStart}
        </button>
      </div>
    </section>
  )
}
