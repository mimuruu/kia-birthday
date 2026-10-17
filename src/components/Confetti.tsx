import { useEffect, useState } from "react"

const COLORS = ["#b03d66", "#f2c3d4", "#fdf3b8", "#dcecc9", "#f9d9e3"]

type Bit = {
  id: number
  left: number
  delay: number
  duration: number
  color: string
  rotate: number
}

export function Confetti({ fire }: { fire: number }) {
  const [bits, setBits] = useState<Bit[]>([])

  useEffect(() => {
    if (!fire) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const next: Bit[] = Array.from({ length: 26 }, (_, i) => ({
      id: fire * 100 + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2.2 + Math.random() * 1.4,
      color: COLORS[i % COLORS.length],
      rotate: Math.random() * 360,
    }))
    setBits(next)
    const timer = window.setTimeout(() => setBits([]), 4200)
    return () => window.clearTimeout(timer)
  }, [fire])

  if (bits.length === 0) return null
  return (
    <div aria-hidden="true">
      {bits.map((b) => (
        <span
          key={b.id}
          className="confetti-bit"
          style={{
            left: `${b.left}%`,
            background: b.color,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            transform: `rotate(${b.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}
