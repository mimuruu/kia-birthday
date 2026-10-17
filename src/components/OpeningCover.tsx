import { opening } from "../content/birthdayContent"

type OpeningCoverProps = {
  open: boolean
  onOpen: () => void
}

export function OpeningCover({ open, onOpen }: OpeningCoverProps) {
  return (
    <div className={`cover${open ? " is-open" : ""}${open ? "" : " float-on"}`}>
      <div className="cover-inner">
        <p className="cover-kicker">{opening.kicker}</p>
        <div className="envelope" aria-hidden="true">
          <div className="envelope-back" />
          <div className="envelope-letter" />
          <div className="envelope-flap" />
          <div className="envelope-front" />
        </div>
        <h1>{opening.title}</h1>
        <button type="button" className="btn-primary" onClick={onOpen}>
          {opening.button}
        </button>
        <p className="cover-hint">{opening.hint}</p>
      </div>
    </div>
  )
}
