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
    title: "Awalnya dari Roblox",
    text: "Kita berkenalan dari Roblox. Dari game, jadi sering ngobrol, dan ternyata enak banget cerita sama kamu.",
    variant: "note",
    doodle: "spark",
  },
  {
    id: "irl",
    title: "First time meet in real life",
    text: "Dari avatar di layar, akhirnya beneran ketemu langsung. Tetap jadi momen yang paling diinget.",
    variant: "wide",
    doodle: "star",
  },
  {
    id: "mrt",
    title: "Naik MRT bareng",
    text: "Perjalanan simpel, tapi kerasa beda kalau ditemenin kamu.",
    variant: "ticket",
    doodle: "mrt",
  },
  {
    id: "gbk",
    title: "Sempet ke GBK",
    text: "Jalan bareng tanpa rencana besar, tapi hari tetap jadi enak.",
    variant: "card-right",
    doodle: "flag",
  },
  {
    id: "lights",
    title: "City lights Jakarta",
    text: "Lampu-lampu kota malam hari. Momen pelan yang pengen diulang lagi.",
    variant: "night",
    doodle: "moon",
  },
  {
    id: "calls",
    title: "Teleponan malem-malem",
    text: "Cerita hari masing-masing, hal-hal random, sampe ketawa sendiri di ujung telepon.",
    variant: "call",
    doodle: "phone",
  },
  {
    id: "minecraft",
    title: "Minecraft dan candaan random",
    text: "Main bareng, buat dunia, terus ketawa karena hal-hal yang nggak jelas. Classic.",
    variant: "blocky",
    doodle: "cube",
  },
]

export const gallery = {
  heading: "A few memories to keep",
  lead: "Geser atau ketuk buat lihat lebih deket.",
  photos: [
    { src: "/images/kiya-photo-01.jpg", alt: "Foto kenangan kita nomor satu" },
    { src: "/images/kiya-photo-02.jpg", alt: "Foto kenangan kita nomor dua" },
    { src: "/images/kiya-photo-03.jpg", alt: "Foto kenangan kita nomor tiga" },
    { src: "/images/kiya-photo-04.jpg", alt: "Foto kenangan kita nomor empat" },
    { src: "/images/kiya-photo-05.jpg", alt: "Foto kenangan kita nomor lima" },
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
  src: "/audio/mari-bercerita.mp3",
  title: "Mari Bercerita",
  volume: 0.3,
}
