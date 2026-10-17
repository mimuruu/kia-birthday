# A Little Birthday Journey for Kiya

Kado digital ulang tahun Sweet Seventeen untuk Saskia (Kiya). Static site, tanpa backend, mobile-first.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Lalu buka URL yang muncul (default `http://localhost:5173`).

## Build production

```bash
npm run build
npm run preview
```

Hasil build ada di `dist/`, siap di-deploy ke hosting static (Vercel, Netlify, GitHub Pages). Untuk GitHub Pages, tambahkan `base` di `vite.config.ts` sesuai nama repo.

## Deploy ke GitHub Pages

Set `base: '/<nama-repo>/'` di `vite.config.ts`, lalu:

```bash
npm run build && npx gh-pages -d dist
```

## Cara kerja halaman

- **Cover pembuka** dengan tombol **Buka Kado**. Musik dicoba diputar otomatis saat halaman dibuka; kalau browser memblokir autoplay, musik mulai otomatis pada interaksi pertama (termasuk tombol Buka Kado).
- Alur: greeting, perjalanan kenangan, galeri foto, kejutan inside joke, surat ulang tahun, closing.
- Tombol musik di pojok kanan bawah untuk play/pause. Kalau file audio tidak ada, tombol otomatis nonaktif tanpa error.
- Galeri bisa digeser di HP; ketuk foto untuk perbesar (lightbox, tutup dengan tombol X atau Escape).

## Asset yang perlu disiapkan

Taruh file dengan nama persis seperti ini:

```text
public/
  images/
    kiya-photo-01.jpg   # wajib
    kiya-photo-02.jpg   # wajib
    kiya-photo-03.jpg   # wajib
    kiya-photo-04.jpg   # opsional
    kiya-photo-05.jpg   # opsional
  audio/
    mari-bercerita.mp3  # lagu "Mari Bercerita", dari sumber yang berhak
```

- Foto: JPG/PNG/WebP, orientasi bebas (akan di-crop rasio persegi di galeri). Kompres dulu supaya cepat dibuka di HP, misal lebar maksimum 1600 px.
- Foto yang filenya belum ada otomatis ditampilkan sebagai placeholder rapi, bukan gambar rusak. Setelah file ditaruh, foto langsung muncul tanpa ubah kode.
- Semua teks (copy), daftar foto, dan path audio bisa diubah di satu file: `src/content/birthdayContent.ts`.

## Struktur proyek

```text
src/
  components/       # OpeningCover, MemoryJourney, PhotoGallery, BirthdayLetter, SurpriseReveal, ClosingSection, MusicControl, Confetti, Doodles
  content/
    birthdayContent.ts   # semua teks + path foto/audio
  hooks/
    useReveal.ts
  App.tsx           # alur halaman + logika audio (autoplay + fallback)
  index.css         # design system (warna, tipografi, animasi)
public/
  images/           # taruh foto di sini
  audio/            # taruh mari-bercerita.mp3 di sini
```

## Catatan

- Jangan mengunduh lagu dari sumber tidak resmi; pakai file audio yang kamu punya haknya.
- Animasi dekoratif otomatis dikurangi kalau pengunjung memakai `prefers-reduced-motion`.
