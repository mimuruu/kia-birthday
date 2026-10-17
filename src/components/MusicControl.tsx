import { music } from "../content/birthdayContent"
import { Doodle } from "./Doodles"

export type AudioStatus = "blocked" | "playing" | "paused" | "unavailable"

type MusicControlProps = {
  status: AudioStatus
  onToggle: () => void
}

export function MusicControl({ status, onToggle }: MusicControlProps) {
  const unavailable = status === "unavailable"
  const playing = status === "playing"
  const label = unavailable
    ? `Musik tidak tersedia (${music.title})`
    : playing
      ? `Jeda musik: ${music.title}`
      : `Putar musik: ${music.title}`

  return (
    <button
      type="button"
      className="music-control"
      onClick={onToggle}
      disabled={unavailable}
      aria-label={label}
      title={label}
    >
      <Doodle name={playing ? "pause" : "music"} />
      {status === "blocked" && (
        <span className="music-note-badge" aria-hidden="true">
          ♪
        </span>
      )}
    </button>
  )
}
