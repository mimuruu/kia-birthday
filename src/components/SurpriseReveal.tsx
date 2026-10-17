import { useState } from "react"
import { surprise } from "../content/birthdayContent"
import { useReveal } from "../hooks/useReveal"
import { Confetti } from "./Confetti"

export function SurpriseReveal() {
  const ref = useReveal<HTMLDivElement>()
  const [open, setOpen] = useState(false)
  const [fire, setFire] = useState(0)

  const openSurprise = () => {
    setOpen(true)
    setFire((n) => n + 1)
  }

  return (
    <section className="section surprise" aria-labelledby="surprise-title">
      <Confetti fire={fire} />
      <div className="wrap reveal" ref={ref}>
        <div className="section-head">
          <h2 id="surprise-title">{surprise.heading}</h2>
        </div>
        {!open ? (
          <button type="button" className="surprise-btn" onClick={openSurprise} aria-expanded="false">
            {surprise.button}
          </button>
        ) : (
          <div className="joke-cards">
            {surprise.jokes.map((joke) => (
              <div className="joke-card" key={joke.word}>
                <p className="joke-word">{joke.word}</p>
                <p className="joke-note">{joke.note}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
