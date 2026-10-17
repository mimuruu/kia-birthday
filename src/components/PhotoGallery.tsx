import { useCallback, useEffect, useRef, useState } from "react"
import { gallery } from "../content/birthdayContent"
import { useReveal } from "../hooks/useReveal"

export function PhotoGallery() {
  const ref = useReveal<HTMLDivElement>()
  const trackRef = useRef<HTMLDivElement | null>(null)
  const lightboxTrigger = useRef<HTMLElement | null>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const updateNav = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (el && window.matchMedia("(min-width: 900px)").matches && el.scrollWidth > el.clientWidth) {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
    }
    updateNav()
    window.addEventListener("resize", updateNav)
    return () => window.removeEventListener("resize", updateNav)
  }, [updateNav])

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>(".polaroid")
    const amount = card ? card.offsetWidth + 20 : 260
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }

  const openLightbox = (index: number, trigger: HTMLElement) => {
    lightboxTrigger.current = trigger
    setLightbox(index)
  }

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    lightboxTrigger.current?.focus()
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [lightbox, closeLightbox])

  return (
    <section className="section" aria-labelledby="gallery-title">
      <div className="wrap">
        <div className="section-head reveal is-visible" ref={ref}>
          <h2 id="gallery-title">{gallery.heading}</h2>
          <p className="lead">{gallery.lead}</p>
        </div>
      </div>
      <div className="gallery-track" ref={trackRef} onScroll={updateNav}>
        {gallery.photos.map((photo, i) => (
          <PhotoItem key={photo.src} photo={photo} onOpen={openLightbox} index={i} />
        ))}
      </div>
      <div className="gallery-nav">
        <button type="button" onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Foto sebelumnya">
          <span aria-hidden="true">&#8592;</span>
        </button>
        <button type="button" onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="Foto berikutnya">
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Foto lebih besar"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Tutup foto" autoFocus>
            <span aria-hidden="true">&#10005;</span>
          </button>
          <figure>
            <img src={gallery.photos[lightbox].src} alt={gallery.photos[lightbox].alt} />
          </figure>
        </div>
      )}
    </section>
  )
}

function PhotoItem({
  photo,
  index,
  onOpen,
}: {
  photo: (typeof gallery.photos)[number]
  index: number
  onOpen: (index: number, trigger: HTMLElement) => void
}) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const fileName = photo.src.split("/").pop()
  const placeholderText = import.meta.env.DEV
    ? `Foto nanti: ${fileName}`
    : "foto kita"

  return (
    <div className="polaroid">
      <div className="polaroid-frame">
        {failed ? (
          <div className="photo-placeholder" role="img" aria-label={photo.alt}>
            {placeholderText}
          </div>
        ) : loaded ? (
          <button
            type="button"
            className="polaroid-hit"
            onClick={(e) => onOpen(index, e.currentTarget)}
            aria-label={`Perbesar ${photo.alt}`}
          >
            <img src={photo.src} alt={photo.alt} />
          </button>
        ) : (
          <img
            src={photo.src}
            alt={photo.alt}
            loading={index > 1 ? "lazy" : "eager"}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}
