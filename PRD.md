# PRD — A Little Birthday Journey for Kiya

## 1. Ringkasan Produk

Membangun website ucapan Sweet Seventeen untuk Saskia, yang akrab dipanggil Kiya. Website ini merupakan kado digital berbentuk perjalanan kenangan mini: personal, hangat, sedikit lucu, dan menyentuh tanpa terlihat terlalu romantis.

Website akan dibagikan melalui sebuah link, dengan prioritas utama pengalaman pengguna di HP. Tidak diperlukan akun, login, atau backend.

- **Nama proyek:** A Little Birthday Journey for Kiya
- **Penerima:** Saskia (Kiya)
- **Momen:** Sweet Seventeen, 18 Oktober 2026
- **Target selesai:** 17 Oktober 2026
- **Bahasa konten:** Indonesia informal bercampur English
- **Platform:** Web responsif, terutama browser HP
- **Referensi visual:** https://www.instagram.com/p/DadQIJVsaSS/?exln=bG15MGkzbmdoa3My
- **Catatan referensi:** Jika postingan Instagram tidak dapat diakses dari lingkungan pengembangan, jangan menghambat implementasi atau mengklaim telah melihatnya. Gunakan brief visual di dokumen ini; jika screenshot referensi tersedia di project, gunakan sebagai acuan tambahan.

## 2. Latar Belakang

Pembuat kado dan Kiya berkenalan melalui Roblox sekitar tiga bulan lalu. Meski pertemanan masih baru, mereka sudah memiliki sejumlah kenangan bersama yang berarti. Website perlu menyampaikan bahwa momen sederhana dapat menjadi kenangan berharga tanpa membuat hubungan mereka tampak terlalu romantis.

## 3. Tujuan

1. Menyampaikan ucapan ulang tahun Sweet Seventeen yang terasa personal.
2. Mengabadikan sekitar 3–5 foto bersama dalam tampilan scrapbook digital.
3. Mengajak Kiya menjelajahi cerita melalui interaksi ringan dan kejutan kecil.
4. Membuat website mudah dibuka dari link tanpa instalasi atau login.
5. Menyediakan musik latar “Mari Bercerita” dengan upaya autoplay dan fallback yang sesuai perilaku browser.
6. Menjaga website tetap ringan, responsif, mudah dipahami, dan selesai tanpa backend.

## 4. Bukan Tujuan (Non-goals)

- Tidak membuat aplikasi dengan akun, login, database, API, atau admin panel.
- Tidak membuat kuis panjang atau mini-game kompleks.
- Tidak memakai hitung mundur sebagai fitur utama karena ulang tahun sudah sangat dekat.
- Tidak menambahkan kalimat cinta, pengakuan perasaan, atau bahasa romantis berlebihan di luar pesan yang diberikan.
- Tidak mengunduh lagu berhak cipta dari sumber tidak resmi.
- Tidak menggunakan informasi pribadi atau screenshot percakapan tanpa izin.

## 5. Target Pengguna

**Pengguna utama:** Kiya, yang membuka website dari link di browser HP.

Kebutuhan pengguna:
- Langsung memahami cara memulai.
- Bisa melihat foto dengan nyaman tanpa pinch-zoom yang diperlukan.
- Bisa membuka pesan dan kejutan dengan satu atau beberapa tap sederhana.
- Tidak terganggu oleh animasi berat, pop-up, atau navigasi yang membingungkan.
- Bisa mengaktifkan, menjeda, atau mematikan musik kapan saja.

## 6. Arah Visual dan Tone

### 6.1 Arah visual

- Mobile-first; harus tetap baik pada laptop/desktop.
- Aesthetic scrapbook/jurnal kenangan yang personal, bukan landing page bisnis.
- Warna utama: pink lembut, blush, off-white/cream, dengan teks berkontras tinggi.
- Gunakan aksen doodle gambar tangan, bintang, bunga kecil, pita, atau elemen kertas secukupnya.
- Gunakan frame foto seperti polaroid atau potongan scrapbook, tetapi jangan memasang caption permanen pada setiap foto.
- Tipografi boleh memasangkan font display yang playful dengan sans-serif yang mudah dibaca. Pastikan font fallback lokal tersedia.
- Animasi halus: fade, slide kecil, floating decor yang tidak mengganggu, dan confetti ringan hanya pada momen kejutan.
- Hindari glow berlebihan, efek neon, banyak gradient, efek parallax berat, dan dekorasi penuh di setiap bagian.

### 6.2 Tone konten

- Hangat, santai, lucu, tulus, sedikit nostalgic.
- Boleh mencampur bahasa Indonesia dan English secara natural.
- Jangan terdengar seperti surat formal atau template ucapan generik.
- Jangan membuat unsur romantis lebih eksplisit daripada teks asli yang diberikan.

## 7. Konteks dan Materi Cerita

### 7.1 Cerita singkat

Pembuat kado dan Kiya berkenalan melalui Roblox sekitar tiga bulan sebelum ulang tahun ini.

### 7.2 Momen yang dapat diceritakan

1. Pertama kali bertemu langsung (first time meet in real life).
2. Naik MRT bersama.
3. Pergi ke GBK.
4. Menikmati city lights Jakarta bersama.
5. Menelepon pada malam hari, berbagi cerita lucu dan cerita tentang hari masing-masing.
6. Bermain Minecraft bersama dan tertawa karena candaan random.

Jangan membuat tanggal, urutan waktu yang pasti, atau detail kejadian baru yang tidak diberikan. Gunakan urutan naratif yang terasa natural, bukan timeline bertanggal.

### 7.3 Hal yang disukai Kiya

- Menggambar dan melukis.
- Warna pink.
- Cokelat sebagai camilan untuk mengisi energi.
- Musik mellow; Payung Teduh disebut sebagai contoh selera musik.

Hal-hal ini boleh menginspirasi visual, tetapi tidak perlu semua dimasukkan ke dalam teks.

### 7.4 Inside jokes

- “AMANSAJA”
- “ABIS TKA”

Gunakan sebagai easter egg atau bagian kejutan yang perlu diketuk untuk ditemukan. Jangan menjelaskan leluconnya kepada penerima.

## 8. Arsitektur Konten dan Alur Pengguna

Alur utama yang direkomendasikan:

1. **Cover / opening** — judul pendek, hiasan pink, dan tombol “Buka Kado” atau “Open Your Birthday Surprise”.
2. **Birthday greeting** — ucapan Sweet Seventeen dan transisi halus ke cerita.
3. **Memory journey** — beberapa bagian ringkas yang mengacu pada pertemuan langsung, MRT/GBK/city lights, serta telepon malam dan Minecraft.
4. **Photo scrapbook** — 3–5 foto yang bisa digeser atau diketuk untuk melihat versi lebih besar. Foto tidak diberi caption.
5. **Hidden surprise** — satu tombol atau elemen dekorasi yang dapat diketuk untuk memunculkan inside joke/pesan singkat.
6. **Birthday letter** — pesan utama dengan layout seperti surat atau kartu.
7. **Closing** — harapan baik, ucapan ulang tahun, dan tombol sederhana untuk kembali ke awal atau membuka ulang kejutan.

Alur ini tidak harus menjadi halaman URL yang berbeda. Boleh berbentuk satu halaman panjang dengan section dan tombol navigasi, selama alurnya jelas di HP.

## 9. Konten Utama

### 9.1 Pesan ulang tahun dari pengguna

Pertahankan maksud dan gaya asli. Boleh memperbaiki kapitalisasi atau tanda baca ringan, tetapi jangan mengubahnya menjadi formal atau lebih romantis.

> Happy sweet 17th, Saskiaaa! Hopefully di umur ke-17 ini kamu makin mature, and always happy with yourself plus your inner circle! Aku harap relationship kita bisa tetep begini for a very long time (kalau lebih dari ini also okey okey aja sih eak), dan literally manifesting banget kita bisa ketemu nanti di PTN impian kita, JATINANGOR ITB UNPAD! Aamiin!

Teks ini boleh ditampilkan per paragraf atau muncul dengan animasi ringan. Jangan memaksa efek ketik yang membuat pembaca lama menunggu; sediakan seluruh teks dengan cepat dan aksesibel.

### 9.2 Contoh microcopy untuk UI

Gunakan sebagai titik awal; sesuaikan bila diperlukan:

- Opening button: **Buka Kado**
- Transition: **A little collection of our random, but memorable moments.**
- Photo section: **A few memories to keep**
- Hidden surprise button: **Psst… ada satu lagi**
- Closing: **Happy 17th, Kiya! Semoga banyak hal baik datang ke kamu tahun ini.**

Jangan menampilkan semua contoh microcopy jika terasa repetitif. Maksimalkan ruang untuk foto dan pesan utama.

## 10. Persyaratan Fungsional

### 10.1 Opening dan navigasi

- Tampilkan cover pembuka yang jelas dan tombol utama yang mudah diketuk.
- Tombol pembuka membawa pengguna ke konten berikutnya dengan transisi yang halus.
- Bila website memakai satu halaman panjang, sediakan navigasi ringan atau tombol next/back yang tidak memenuhi layar.
- Hindari modal yang sulit ditutup.

### 10.2 Galeri foto

- Mendukung 3–5 foto.
- Galeri dapat digeser dengan touch di HP dan diklik pada desktop.
- Foto bisa dibuka lebih besar melalui lightbox sederhana; lightbox harus bisa ditutup dengan tombol yang jelas dan tombol Escape di keyboard.
- Jangan membuat caption permanen.
- Gunakan `alt` yang deskriptif tetapi singkat, tanpa menyimpulkan identitas atau situasi yang tidak diketahui.
- Bila foto belum tersedia, tampilkan placeholder visual yang rapi di mode pengembangan, bukan gambar rusak atau ikon broken image.

### 10.3 Interaksi kejutan

- Sedikitnya satu elemen tersembunyi dapat diketuk untuk menampilkan pesan atau inside joke.
- Setelah kejutan dibuka, boleh tampilkan confetti ringan atau animasi kecil.
- Tombol harus tetap bekerja jika animasi dimatikan melalui pengaturan reduced motion.
- Jangan membuat interaksi wajib yang menghalangi pengguna membaca pesan utama.

### 10.4 Musik latar dan autoplay

- Lagu pilihan: **“Mari Bercerita”**.
- Coba memulai audio otomatis ketika halaman pertama kali dimuat.
- **Jangan menganggap autoplay dengan suara pasti diizinkan.** Browser mobile dan browser modern sering menolak autoplay yang memiliki suara sebelum interaksi pengguna.
- Jika autoplay ditolak, simpan status error secara aman dan mulai musik saat pengguna menekan tombol **Buka Kado** atau tombol musik. Jangan mengulang percobaan otomatis terus-menerus.
- Saat interaksi pertama pengguna tersedia, lanjutkan dengan pemutaran audio tanpa memerlukan langkah lain.
- Tampilkan kontrol musik yang selalu mudah ditemukan: play/pause dan mute/unmute. Jangan memutar audio tersembunyi tanpa kontrol.
- Audio boleh loop setelah dimulai dan volume awal sekitar 25–35%.
- Gunakan `playsInline` bila relevan, tangani `HTMLMediaElement.play()` yang mengembalikan Promise, dan tangani kegagalan tanpa error fatal.
- Tempatkan asset audio lokal yang telah disediakan secara sah pada `public/audio/mari-bercerita.mp3` atau path yang setara. Bila file audio belum tersedia, UI harus tetap berjalan, tombol musik dinonaktifkan atau memberi penjelasan yang jelas, dan console tidak boleh dipenuhi error.
- Jangan mengambil atau mengunduh file lagu berhak cipta dari sumber tidak resmi. Jika file audio tidak disediakan, beri tahu pengembang/pemilik agar memasukkan file yang pengguna berhak menggunakannya atau gunakan tautan/sematan resmi yang sesuai. Jangan pura-pura musik sedang dimainkan jika tidak ada sumber audio.

### 10.5 Responsif dan aksesibilitas

- Prioritas desain pada lebar 360–430 px, lalu pastikan layak pada tablet dan desktop.
- Target area interaksi sekitar 44×44 px atau lebih jika memungkinkan.
- Pastikan teks terbaca, kontras cukup, dan tombol memiliki label yang jelas.
- Dukungan keyboard untuk tombol, lightbox, dan navigasi.
- Hormati `prefers-reduced-motion` dengan mengurangi atau menghilangkan animasi dekoratif.
- Jangan menyampaikan informasi penting hanya lewat warna atau animasi.

## 11. Materi / Asset yang Dibutuhkan

Susunan yang disarankan:

```text
public/
  images/
    kiya-photo-01.jpg
    kiya-photo-02.jpg
    kiya-photo-03.jpg
    kiya-photo-04.jpg   # opsional
    kiya-photo-05.jpg   # opsional
  audio/
    mari-bercerita.mp3  # jika file tersedia secara sah
```

- Siapkan 3–5 foto bersama dalam format JPG, PNG, atau WebP.
- Kompres gambar agar pemuatan di HP cepat; jangan mengorbankan kualitas foto secara berlebihan.
- Jika file audio belum ada, jangan menggantinya dengan file atau tautan yang tidak terverifikasi.
- Semua asset harus punya fallback yang layak.

## 12. Asumsi Teknis

- Aplikasi adalah static frontend tanpa backend.
- Pilihan default: **React + Vite + TypeScript**. Bila repository yang sudah ada memakai stack frontend lain, pertahankan stack tersebut kecuali ada alasan teknis kuat untuk mengubahnya.
- Gunakan CSS/Tailwind sesuai setup yang sudah ada; jangan menambahkan dependency besar hanya untuk satu efek dekoratif.
- Hindari database, autentikasi, analytics, dan pengumpulan data.
- Deployment harus cocok untuk hosting static seperti Vercel, Netlify, atau GitHub Pages (sesuaikan base path bila perlu).
- Semua konten, foto, dan path audio mudah diubah tanpa harus menyentuh banyak file.

## 13. Privasi dan Keamanan

- Tidak meminta nama lengkap tambahan, lokasi, login, atau data dari pengunjung.
- Jangan mengirim foto atau informasi apa pun ke API pihak ketiga.
- Jangan memasukkan token, secret, atau kunci API.
- Gunakan hanya foto yang pemiliknya menyetujui untuk dimasukkan ke kado ini.
- Jangan menambahkan analytics, tracker, atau external script yang tidak diperlukan.

## 14. Kriteria Penerimaan (Acceptance Criteria)

Website dianggap selesai jika:

1. Bisa dijalankan secara lokal mengikuti instruksi README/package scripts.
2. Berfungsi tanpa backend dan tidak meminta login.
3. Layout rapi pada HP serta tetap layak di desktop.
4. Cover, alur kenangan, galeri foto, pesan utama, kejutan tersembunyi, dan closing berfungsi.
5. Galeri mendukung 3–5 foto dan tidak menambahkan caption permanen.
6. Teks ulang tahun mempertahankan maksud dan tone asli, tidak menjadi formal atau terlalu romantis.
7. “AMANSAJA” dan “ABIS TKA” muncul sebagai easter egg atau kejutan.
8. Browser diminta mencoba autoplay; bila ditolak, musik bisa dimulai melalui interaksi pertama dan kontrol play/pause tersedia.
9. Website tidak crash atau menampilkan error fatal jika asset audio belum disertakan.
10. Tidak ada tautan, gambar, atau asset eksternal palsu.
11. Tombol dapat digunakan dengan mouse, touch, serta keyboard bila relevan.
12. Pengaturan reduced motion dihormati dan animasi tidak menghalangi konten.
13. Tidak ada error runtime yang diketahui, dan build production berhasil.
14. README menjelaskan lokasi asset foto/audio dan cara menjalankan serta build project.

## 15. Prioritas Implementasi

**P0 — wajib:** layout mobile-first, pesan ulang tahun, galeri 3–5 foto, alur kenangan, tombol pembuka, kejutan/inside joke, musik dengan fallback autoplay, kontrol play/pause, build bersih.

**P1 — penting bila waktu cukup:** lightbox foto, confetti ringan, gerakan dekoratif lembut, transisi antar-section.

**P2 — tidak wajib:** efek 3D, animasi kompleks, kuis, hitung mundur, atau mini-game.

Utamakan P0 sampai stabil sebelum menambahkan P1 atau P2.
