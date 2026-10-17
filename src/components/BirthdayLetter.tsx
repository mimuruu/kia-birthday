import { letter } from "../content/birthdayContent"
import { useReveal } from "../hooks/useReveal"

export function BirthdayLetter() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="section" aria-labelledby="letter-title">
      <div className="wrap">
        <div className="letter reveal" ref={ref}>
          <h2 id="letter-title">{letter.heading}</h2>
          {letter.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="sign" aria-hidden="true">
            Dengan senang hati,
          </p>
        </div>
      </div>
    </section>
  )
}
