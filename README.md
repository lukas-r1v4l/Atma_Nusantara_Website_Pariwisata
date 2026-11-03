# Atma Nusantara - Eksplorasi (Website Pariwisata)

**Atma Nusantara** merupakan sebuah website yang memberikan informasi eksplorasi yang memperkenalkan kekayaan destinasi alam, budaya, kuliner lokal, serta wisata bahari. Pada website ini, user dapat melihat cerita perjalanan yang dibagikan.

## Prototype & Wireframe (Figma)

Design pada website ini kami mengambil tema minimalis glassmorphism. Kami menggunakan Figma untuk merancang semua element yang akan digunakan pada website tersebut.

1. **Gaya Visual Utama (_UI Style_): _Modern Editorial & Neo-Nusantara Heritage_**
   - Memadukan tata letak _modern minimalist_ (dominasi ruang putih bersih, kartu berbingkai halus, dan tombol monokrom hitam tegas) dengan identitas budaya lokal berupa _watermark_ motif ukiran/mandala tradisional Nusantara, sulur emas pada _banner_ kategori, serta tipografi aksara kaligrafi **"Atma Nusantara"** pada _footer_.
2. **Komponen Navigasi: _Dynamic Island / Dynamic Notch Navbar_**
   - Menggunakan bilah navigasi melayang berbentuk kapsul (_floating pill/notch navbar_) di bagian atas halaman dengan tombol _Call-to-Action_ kontras (`Contact & Partnerships`).
3. **Skema Warna (_Color Palette_): _Dual-Tone Atmospheric Dark & Clean Monochrome_**
   - **Hero & Dark Section (`#111827` / `#1E1E1E` + _Glassmorphism_):** Bagian _Hero Landing Page_ menggunakan gradasi gelap dramatis yang menyatu dengan foto lanskap matahari terbit gunung berapi serta kartu statistik berefek kaca transparan (_dark glassmorphism_).
   - **Content Area (`#FFFFFF` & `#F8FAFC`):** Area konten utama dan halaman katalog menggunakan latar putih bersih agar fotografi destinasi terlihat hidup.
   - **Cultural & Pastel Accents:** Aksen sulur emas (`#C5A059`) pada _header_ kategori, serta warna pastel lembut (_soft blue_, _warm beige/sand_, dan _sage green_) pada kartu _Travel Journal_.
4. **Tipografi (_Typography_):**
   - Kombinasi huruf **Serif Editorial** pada judul utama _Hero Banner_, **Modern Sans-Serif** (_Plus Jakarta Sans_ / _Inter_) pada teks antarmuka dan kartu informasi, serta **Decorative Script/Calligraphy** pada identitas _footer_.

**Link Figma** : https://www.figma.com/design/O6xCgROX2WqidMAAyswqAM/Atma-Nusantara--Website-Pariwisata-?node-id=0-1&t=KKhy1t828GnyggN2-1

## Struktur Halaman & Alur Navigasi

Kelima halaman saling terhubung melalui komponen global **Dynamic Island/Notch Navbar** di bagian atas dan **Footer Atma Nusantara** di bagian bawah:

```text
[1. Landing Page / Home (index.html)]
   ├──> [2. Tourism Categories (kategori.html)]
   ├──> [3. Showcase (showcase.html)]
   ├──> [4. Gallery & Journal (gallery-journal.html)]
   └──> [5. Contact & Partnerships (kontak-kemitraan.html)]
```

### Rincian Isi & Tata Letak Setiap Halaman

## Struktur Folder Proyek

```text
atma-nusantara-web/
├── README.md                       # Dokumentasi singkat, tema desain, & struktur halaman (Berkas #3)
├── Nama-Tim.txt                    # Data nama tim, NIM, dan nama anggota kelompok (Berkas #5)
├── index.html                      # Halaman 1: Landing Page (Home)
├── kategori.html                   # Halaman 2: Tourism Categories
├── showcase.html                   # Halaman 3: Showcase
├── gallery-journal.html            # Halaman 4: Gallery & Journal
├── kontak-kemitraan.html           # Halaman 5: Contact & Partnerships
├── assets/
│   ├── css/
│   │   └── style.css               # Stylesheet kustom (Tema Neo-Nusantara, Flexbox, & CSS Grid)
│   └── img/                        # Foto destinasi, ornamen batik/sulur, dan aset gambar
├── wireframe/                      # Ekspor PDF/PNG hasil desain Figma (Berkas #2)
└── screenshots/                    # Tangkapan layar hasil implementasi Desktop & Mobile (Berkas #4)
```
