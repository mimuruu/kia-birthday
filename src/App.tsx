import { useCallback, useEffect, useRef, useState } from "react"
import { music } from "./content/birthdayContent"
import { OpeningCover } from "./components/OpeningCover"
import { GreetingSection, MemoryJourney } from "./components/MemoryJourney"
import { PhotoGallery } from "./components/PhotoGallery"
import { BirthdayLetter } from "./components/BirthdayLetter"
import { SurpriseReveal } from "./components/SurpriseReveal"
import { ClosingSection } from "./components/ClosingSection"
import { MusicControl, type AudioStatus } from "./components/MusicControl"

export default function App() {
  const [coverOpen, setCoverOpen] = useState(false)
  const [audioStatus, setAudioStatus] = useState<AudioStatus>("blocked")
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const tryStartAudio = useCallback(() => {
    const audio = audioRef.current
    if (!audio || audio.dataset.failed === "true") return
    audio
      .play()
      .then(() => {
        audio.loop = true
        setAudioStatus("playing")
      })
      .catch((err: DOMException) => {
        if (err.name === "NotAllowedError") {
          setAudioStatus("blocked")
        } else {
          audio.dataset.failed = "true"
          setAudioStatus("unavailable")
        }
      })
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = music.volume
    const onPlay = () => setAudioStatus("playing")
    const onPause = () => setAudioStatus((s) => (s === "playing" ? "paused" : s))
    const onError = () => {
      audio.dataset.failed = "true"
      setAudioStatus("unavailable")
    }
    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)
    audio.addEventListener("error", onError)
    tryStartAudio()
    return () => {
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      audio.removeEventListener("error", onError)
    }
  }, [tryStartAudio])

  useEffect(() => {
    if (audioStatus !== "blocked") return
    const onFirstInteraction = () => tryStartAudio()
    window.addEventListener("pointerdown", onFirstInteraction, { once: true })
    window.addEventListener("keydown", onFirstInteraction, { once: true })
    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction)
      window.removeEventListener("keydown", onFirstInteraction)
    }
  }, [audioStatus, tryStartAudio])

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current
    if (!audio || audio.dataset.failed === "true") return
    if (audio.paused) {
      tryStartAudio()
    } else {
      audio.pause()
    }
  }, [tryStartAudio])

  const openGift = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
    setCoverOpen(true)
    if (audioStatus === "blocked") tryStartAudio()
  }, [audioStatus, tryStartAudio])

  useEffect(() => {
    document.body.style.overflow = coverOpen ? "" : "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [coverOpen])

  const backToStart = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
    setCoverOpen(false)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Langsung ke isi
      </a>
      <audio ref={audioRef} src={music.src} preload="auto" playsInline />
      <OpeningCover open={coverOpen} onOpen={openGift} />
      <main id="main" className={coverOpen ? "is-open" : ""} inert={!coverOpen}>
        <GreetingSection />
        <MemoryJourney />
        <PhotoGallery />
        <SurpriseReveal />
        <BirthdayLetter />
        <ClosingSection onBackToStart={backToStart} />
      </main>
      <MusicControl status={audioStatus} onToggle={toggleAudio} />
    </>
  )
}
