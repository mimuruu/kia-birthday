const base = import.meta.env.BASE_URL

export const recipient = {
  name: "Saskia",
  nickname: "Kiya",
  birthday: "18 Oktober 2026",
}

export const opening = {
  kicker: "Sebuah kado kecil buat seseorang yang spesial",
  title: "Happy Sweet 17th, Saskiaaa!",
  hint: "Ada sesuatu di dalamnya. Tekan tombolnya ya.",
  button: "Buka Kado",
}

export const greeting = {
  heading: "Happy Sweet 17th, Saskiaaa!",
  lead: "Selamat ulang tahun yang ke-17! Semoga tahun ini jadi tahun yang baik buat kamu.",
  transition: "A little collection of our random, but memorable moments.",
}

export type Memory = {
  id: string
  title: string
  text: string
  variant: "note" | "wide" | "ticket" | "card-right" | "night" | "call" | "blocky"
  doodle: "star" | "spark" | "mrt" | "flag" | "moon" | "phone" | "cube"
}

export const memories: Memory[] = [
  {
    id: "roblox",
    title: "Prolog",
    text: "Bermula dari game bocil, ngerasa nyambung, tukeran acc discord, mutualan ig, dan ternyata nyaman banget yaa cerita sama kamu.",
    variant: "note",
    doodle: "spark",
  },
  {
    id: "irl",
    title: "First time meet in real life",
    text: "Siapa sangka yang tadinya cuma tatap tatapan avatar roblox, akhirnya beneran ketemu langsung.",
    variant: "wide",
    doodle: "star",
  },
  {
    id: "gbk",
    title: "Gelora Bung Karno Hari itu",
    text: "Kita pusing bareng bareng karena kerjain to tka bareng, dann ituu seruu bangeett.",
    variant: "card-right",
    doodle: "flag",
  },
  {
    id: "mrt",
    title: "Kesasar Di MRT",
    text: "Sempet kesasar ke lebak bulus, mungkin kalo aku sendiri, aku bakal bete bgt. tapi karena sama kamu rasanya jadi bedaa.",
    variant: "ticket",
    doodle: "mrt",
  },
  {
    id: "lights",
    title: "City Lights Jakarta",
    text: "Lampu-lampu kota di malam hari yang bener bener ngebuat kita takjub, pengen deh kesana lagi...",
    variant: "night",
    doodle: "moon",
  },
  {
    id: "calls",
    title: "Calls every night",
    text: "Study together, Cerita hari masing masing, sampe kita ketawa denger jokes sendiri.",
    variant: "call",
    doodle: "phone",
  },
  {
    id: "minecraft",
    title: "Minecraft",
    text: "Buat dunia bareng, jadi arsitek, ternak ayam, ternak babi, sambil bercanda pukul pukulan.",
    variant: "blocky",
    doodle: "cube",
  },
]

export const gallery = {
  heading: "A few memories to keep",
  lead: "Geser atau ketuk buat lihat lebih deket.",
  photos: [
    { src: `${base}images/kiya-photo-01.jpg`, alt: "Foto kenangan kita nomor satu" },
    { src: `${base}images/kiya-photo-02.jpg`, alt: "Foto kenangan kita nomor dua" },
    { src: `${base}images/kiya-photo-03.jpg`, alt: "Foto kenangan kita nomor tiga" },
    { src: `${base}images/kiya-photo-04.jpg`, alt: "Foto kenangan kita nomor empat" },
    { src: `${base}images/kiya-photo-05.jpg`, alt: "Foto kenangan kita nomor lima" },
  ],
}

export const surprise = {
  button: "Psst… ada satu lagi",
  heading: "Khusus kamu",
  jokes: [
    { word: "AMANSAJA", note: "Kamu udah tahu artinya. Sama kayak dulu." },
    { word: "ABIS TKA", note: "Masih inget ya. Aku juga." },
  ],
}

export const letter = {
  heading: "Buat kamu, dari aku",
  paragraphs: [
    "Happy sweet 17th, Saskiaaa! Hopefully di umur ke-17 ini kamu makin mature, and always happy with yourself plus your inner circle!",
    "Aku harap relationship kita bisa tetep begini for a very long time (kalau lebih dari ini also okey okey aja sih eak), dan literally manifesting banget kita bisa ketemu nanti di PTN impian kita, JATINANGOR ITB UNPAD! Aamiin!",
  ],
}

export const closing = {
  headline: "Happy 17th, Kiya!",
  message: "Semoga banyak hal baik datang ke kamu tahun ini. Makasih udah jadi temen yang seru selama ini.",
  backToStart: "Kembali ke awal",
}

export const music = {
  src: `${base}audio/mari-bercerita.mp3`,
  title: "Mari Bercerita",
  volume: 0.3,
}
