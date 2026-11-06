# Atma Nusantara — Eksplorasi Pariwisata Indonesia

> **Dokumentasi Singkat & Struktur Halaman — Tugas 1 Pengembangan Web Front-End (`13.FEWD.201`)**

**Atma Nusantara** merupakan website informasi dan eksplorasi pariwisata Indonesia yang memperkenalkan kekayaan destinasi alam & pegunungan, warisan budaya & sejarah, wisata pantai & bahari, serta cerita perjalanan dari para wisatawan. Website ini dirancang secara responsif untuk tampilan **Desktop** dan **Mobile**.

## 🎨 1. Konsep Desain, Prototype & Wireframe (Figma)

Desain antarmuka website ini mengusung tema **Modern Neo-Nusantara Editorial & Minimalist Glassmorphism**. Seluruh kerangka _wireframe_ dan _prototype_ dirancang terlebih dahulu menggunakan **Figma** sebelum diimplementasikan ke dalam kode HTML dan CSS:

1. **Gaya Visual Utama (_UI Style_): _Modern Editorial & Neo-Nusantara Heritage_**
   - Memadukan tata letak _modern minimalist_ (dominasi ruang putih bersih `#FFFFFF`, kartu berbingkai halus, dan tombol monokrom hitam tegas `#141414`) dengan identitas budaya lokal berupa _watermark_ motif ukiran tradisional Nusantara (`corak_1.png` dan `corak_2.png`) serta tipografi kaligrafi **"Atma Nusantara"** (`name-brand-footer.png`) pada bagian _footer_.
2. **Komponen Navigasi Global: _Dynamic Island / Dynamic Notch Navbar_**
   - Menggunakan bilah navigasi melayang berbentuk kapsul (_sticky rounded navbar_ dengan `border-radius: 30px`) di bagian atas seluruh halaman yang dilengkapi logo brand di sisi kiri, tautan navigasi utama di tengah/kanan, serta tombol _Call-to-Action_ kontras (`Contact & Partnerships`).
3. **Skema Warna (_Color Palette_): _Dual-Tone Atmospheric Dark & Clean Monochrome_**
   - **Hero & Dark Section (`#111111` / `#1E1E1E` + _Glassmorphism_):** Bagian _Hero Landing Page_ menggunakan gradasi gelap dramatis (`linear-gradient`) yang menyatu dengan foto lanskap _cover_ serta komponen kapsul transparan berefek kaca buram (`backdrop-filter: blur`).
   - **Content Area (`#FFFFFF`, `#F9FAFB`, & `#F6F6F6`):** Area konten utama, halaman katalog, peringkat destinasi, dan formulir menggunakan latar terang bersih agar fotografi destinasi terlihat tajam dan menonjol.
   - **Cultural & Pastel Accents:** Aksen ornamen emas pada _banner_ kategori serta tema warna pastel lembut (_theme-blue_ & _theme-warm_) pada kartu _Travel Journal_.
4. **Tipografi (_Typography_):**
   - Menggunakan keluarga huruf **Inter** (_Google Fonts_) untuk menjaga keterbacaan antarmuka yang modern dan konsisten di berbagai ukuran layar, dipadukan dengan aksara dekoratif pada _watermark footer_.

- **Link Prototype & Wireframe Figma:** [Atma Nusantara (Website Pariwisata) — Figma Design](https://www.figma.com/design/O6xCgROX2WqidMAAyswqAM/Atma-Nusantara--Website-Pariwisata-?node-id=0-1&t=KKhy1t828GnyggN2-1)

## 🗺️ 2. Struktur Halaman & Alur Navigasi (Sitemap)

Website ini terdiri atas **6 halaman HTML** yang saling terhubung secara konsisten melalui komponen global **Header (`<header class="navbar">`)** dan **Footer (`<footer class="site-footer">`)**:

```text
[1. Home / Landing Page (index.html)]
   ├──> [2. Tourism Categories (category.html)] ──(Klik "View Details" ?id=...)──> [5. Showcase Destinasi (showcase.html)]
   ├──> [3. Top Destination (top-destination.html)]
   ├──> [4. Gallery & Journal (gallery-journal.html)]
   ├──> [5. Showcase Destinasi (showcase.html?id=holbung-hill / mount-bromo)]
   └──> [6. Contact & Partnerships (contact-partnership.html)]
```

### Tabel Ringkasan Struktur 6 Halaman Website

|  No   | Nama Halaman               | Berkas HTML                | CSS & JS Terkait                                                    | Fungsi & Konten Utama Halaman                                                                                                                                                                                                                                                                                 |
| :---: | :------------------------- | :------------------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1** | **Home (Landing Page)**    | `index.html`               | `global.css`, `home.css`, Inline Slider JS                          | Halaman pembuka yang menampilkan _Hero Banner_, _Highlight Gallery Slider_ interaktif (4 destinasi ikonik), bar statistik (3 indikator), cuplikan _Showcase & Travel Journal_, serta 3 kartu _Comment_ (testimoni wisatawan).                                                                                 |
| **2** | **Tourism Categories**     | `category.html`            | `global.css`, `category.css`, `destinations-data.js`, `category.js` | Halaman katalog 15 destinasi wisata di Indonesia yang dilengkapi _Category Banner_ berornamen Nusantara dan 4 tombol filter interaktif (_All_, _Mountains & Nature_, _Culture & History_, _Beaches & Marine Areas_).                                                                                          |
| **3** | **Top Destination**        | `top-destination.html`     | `global.css`, `top-destination.css`                                 | Halaman daftar peringkat 15 destinasi wisata terpopuler di Indonesia (`<ol class="top-list">`) yang menyajikan nomor urut peringkat, nama destinasi beserta provinsi, dan jumlah kunjungan.                                                                                                                   |
| **4** | **Gallery & Journal**      | `gallery-journal.html`     | `global.css`, `gallery-journal.css`                                 | Halaman dokumentasi visual bergaya _Bento Grid_ (1 kartu foto besar Kaldera Toba + 2 kartu foto kecil Rumah Bolon & Pantai Sorake) serta 4 artikel _Travel Journal_ dengan 4 topik berbeda (_Itinerary_, _Culinary_, _Culture_, _Adventure_).                                                                 |
| **5** | **Destination Showcase**   | `showcase.html`            | `global.css`, `showcase.css`, `destinations-data.js`, `showcase.js` | Halaman detail destinasi dinamis (_Dynamic Single-Template Page_) yang memuat foto utama 16:9 dengan _floating blurred caption_, artikel _About Destination Showcase_, _Summary Information_ (tiket, parkir, jam buka), serta _Available Features_ untuk ke-15 destinasi berdasarkan parameter URL `?id=...`. |
| **6** | **Contact & Partnerships** | `contact-partnership.html` | `global.css`, `contact-partnership.css`                             | Halaman informasi program kemitraan ekosistem wisata (3 kartu kategori mitra: _Lodging & Homestay_, _Tour Agent & Guide_, _UMKM & Culinary_) dan formulir _Contact & Partnership Inquiry Form_.                                                                                                               |

## 📄 3. Rincian Isi & Tata Letak Setiap Halaman

### 3.1 Halaman 1 — Home / Landing Page (`index.html`)

- **Seksi 1 (`<section id="home" class="main-section">` — Hero & Highlight Gallery Slider):**
  - Menampilkan gambar latar penuh (`cover-home.jpg`) dengan lapisan gradasi gelap (`.main-overlay`), judul utama _"Visit the tourist attractions you'd like to see!"_, dan tombol CTA _"Let's Explore!"_ yang mengarah halus (_smooth scroll_) ke seksi `#showcase`.
  - Di bagian bawah _hero_ terdapat kartu melayang **Highlight Gallery** (_"The Masterpiece of Indonesia"_) dengan tombol navigasi kiri/kanan (`.slider-btn.prev` & `.next`) untuk mengganti foto dan judul 4 destinasi ikonik (_Candi Borobudur_, _Taman Mini Indonesia Indah_, _Raja Ampat_, dan _Danau Toba_).
- **Seksi 2 (`<section class="stats-section">` — Info Stats Bar):**
  - Menggunakan **CSS Flexbox** (`.stats-container`) untuk menyejajarkan 3 informasi keunggulan utama yang dipisahkan garis vertikal: `100+ Destination` (_Curated tourist destinations_), `120+ Local Partners` (_UMKM, Homestays & Guides_), dan `24/7 Travel Info` (_Routes, weather & ticket prices_).
- **Seksi 3 (`<section id="showcase" class="showcase-section">` — Showcase & Travel Journal):**
  - Menggunakan **CSS Grid 2 kolom** (`.showcase-grid`): kolom kiri (`.journal-left`) memuat 2 kartu pengantar destinasi (_Holbung Hill_ dan _Mount Bromo_) lengkap dengan tombol **Check it!** yang terhubung langsung ke `showcase.html?id=holbung-hill` dan `showcase.html?id=mount-bromo`; kolom kanan (`.journal-right`) menampilkan kartu visual besar _Lake Toba Caldera & Samosir Island Geopark_ dengan badge `⭐ Rating 4.9/5`.
- **Seksi 4 (`<section class="comments-section">` — Traveler Comments):**
  - Menggunakan **CSS Grid 3 kolom** (`.comments-grid`) untuk menampilkan ulasan dari 3 pengguna (_Jhonny L. — Backpacker & Blogger_, _Vallery S. — Travel Photographer_, dan _Mike S. — Solo Traveler_) beserta foto profil masing-masing.

### 3.2 Halaman 2 — Tourism Categories (`category.html`)

- **Seksi 1 (`<section class="category-banner">` — Banner & Filter Kategori):**
  - Kotak banner bergradasi abu-abu elegan dengan ornamen sulur Nusantara (`assets/corak/corak_2.png`) di sisi kanan, judul _"Select Tourism Category"_, dan 4 tombol filter (`.filter-buttons` menggunakan **CSS Flexbox**): `All`, `Mountains & Nature`, `Culture & History`, dan `Beaches & Marine Areas`.
- **Seksi 2 (`<main class="cards-grid" id="cardsGrid">` — Katalog 15 Destinasi Wisata Indonesia):**
  - Menggunakan **CSS Grid 3 kolom** (`grid-template-columns: repeat(3, 1fr)`) yang dirender secara dinamis oleh `category.js` dari data `destinations-data.js`.
  - Setiap kartu (`<article class="card">`) memiliki latar _watermark_ `corak_1.png`, foto destinasi dengan `.category-badge` berefek _glassmorphism_, judul, deskripsi, harga tiket, serta tombol **View Details** (`showcase.html?id=...`) di sudut kanan bawah.
  - **Daftar 15 Destinasi (3 Kategori × 5 Tempat Wisata):**
    1. **Mountains & Nature (5 Destinasi):** _Holbung Hill Samosir_, _Mount Bromo East Java_, _Mount Rinjani Lombok_, _Ijen Crater Banyuwangi_, dan _Mount Kelimutu Flores_.
    2. **Culture & History (5 Destinasi):** _Huta Siallagan Traditional Village_, _Borobudur Temple Magelang_, _Prambanan Temple Yogyakarta_, _Tana Toraja South Sulawesi_, dan _Uluwatu Temple Bali_.
    3. **Beaches & Marine Areas (5 Destinasi):** _Sorake Beach Nias_, _Raja Ampat Islands West Papua_, _Pink Beach Labuan Bajo_, _Kelingking Beach Nusa Penida_, dan _Derawan Islands East Kalimantan_.

### 3.3 Halaman 3 — Top Destination (`top-destination.html`)

- **Seksi Utama (`<section class="top-destination-box">`):**
  - Menampilkan judul `<h1>List of top tourist attractions</h1>` dan daftar terurut `<ol class="top-list">` yang memuat ke-15 destinasi wisata unggulan Indonesia beserta provinsi dan angka kunjungannya.
  - Setiap baris `<li class="top-item">` ditata menggunakan **CSS Flexbox** (`justify-content: space-between; align-items: center;`) dengan efek transisi _hover_ halus.

### 3.4 Halaman 4 — Gallery & Journal (`gallery-journal.html`)

- **Seksi 1 (`<section class="gallery-section">` — Visual Gallery Bento Grid):**
  - Menggunakan **CSS Grid** (`grid-template-columns: 1.45fr 1fr; grid-template-rows: 210px 210px;`) untuk menciptakan tata letak asimetris: 1 kartu besar di kiri yang membentang 2 baris (`grid-row: 1 / span 2` — _Twilight in the Waters of the Toba Caldera_) dan 2 kartu di kanan (_Bolon Traditional House_ serta _Sorake Beach & Lagundri Bay_), masing-masing dilengkapi `.badge-glass` dan efek _hover zoom_.
- **Seksi 2 (`<section class="journal-section">` — Travel Journal: Notes from Travelers):**
  - Menggunakan **CSS Grid 2×2** (`.journal-grid`) yang menampilkan 4 artikel catatan perjalanan dengan 4 topik berbeda dan kombinasi warna kartu `.theme-blue` serta `.theme-warm`:
    1. **Itinerary (`By Rina Wijaya`):** _A Budget-Friendly Guide to Exploring Samosir by Rental Motorcycle_.
    2. **Culinary (`By Andi Pratama`):** _Tasting Authentic Lintong Coffee & Lake Toba Culinary Gems_.
    3. **Culture (`By Sarah Simanjuntak`):** _Uncovering Ancient Stone Court Legends at Huta Siallagan_.
    4. **Adventure (`By Budi Santoso`):** _Catching the Sunrise & Rolling Morning Mist at Holbung Hill_.

### 3.5 Halaman 5 — Destination Showcase (`showcase.html`)

- **Seksi 1 (`<section class="img">` — Panorama Banner & Floating Blurred Caption):**
  - Menampilkan foto utama destinasi berasio `16:9` (`#showcaseImg`) dengan panel keterangan melayang di pojok kanan bawah (`.cpt`) berefek kaca buram (`backdrop-filter: blur(12px)`) yang memuat nama destinasi (`#showcaseTitle`), ikon GPS (`gps_1.png`), serta lokasi dan jam buka (`#showcaseLocation`).
- **Seksi 2 (`.desc-wrapper` — Layout 2 Kolom Deskripsi & Ringkasan Informasi):**
  - **Kolom Kiri (`.desc`):** Kotak artikel `#showcaseAbout` berlatar _watermark_ ornamen Nusantara (`--watermark-ornament`) yang memuat 2 paragraf ulasan mendalam mengenai sejarah dan daya tarik destinasi.
  - **Kolom Kanan (`.sum`):** Memuat 2 kartu informasi:
    1. **Summary Information (`.box-sum`):** Rincian harga tiket masuk (`#showcaseTicket`), biaya parkir (`#showcaseParking`), jam operasional (`#showcaseHours`), serta tombol **Book Local Guide** (ke `contact-partnership.html`) dan **Back to Catalog** (ke `category.html`).
    2. **Available Features (`.box-feat`):** Deretan kapsul fasilitas yang tersedia (`#showcaseBadges` menggunakan **CSS Flexbox** `.badge-group`).
- **Mekanisme Dinamis (`showcase.js`):** Membaca parameter `?id=...` pada URL menggunakan `URLSearchParams(window.location.search)` sehingga 1 file `showcase.html` dapat menampilkan detail unik untuk seluruh 15 destinasi di Indonesia tanpa menduplikasi file HTML.

### 3.6 Halaman 6 — Contact & Partnerships (`contact-partnership.html`)

- **Seksi 1 (`.partner-cards-grid` — Program Kemitraan Ekosistem Pariwisata):**
  - Menggunakan **CSS Grid 3 kolom** untuk menampilkan 3 kategori kemitraan: _Lodging & Homestay Partners_, _Tour Agent & Guide Partners_, serta _UMKM & Culinary Partners_.
- **Seksi 2 (`.inquiry-form-card` — Formulir Kontak & Pengajuan Kemitraan):**
  - Menggunakan elemen `<form class="inquiry-form">` dengan tata letak responsif (`.form-row-two` untuk _Full Name / Business Name_ dan _Phone Number_), input _Email address_, dropdown `<select id="requirements">` (_Lodging_, _Tour Guide_, _UMKM_, _General Inquiry_), `<textarea id="description">`, serta tombol `<button type="submit" class="btn-submit">Submit</button>`.

## 📂 4. Struktur Folder & Berkas Proyek

```text
Atma_Nusantara_Website_Pariwisata/
├── README.md                       # Dokumentasi singkat, konsep desain, & struktur halaman (Berkas #3)
├── Nama-Tim.txt                    # Data nama tim, NIM, dan nama anggota kelompok (Berkas #5)
├── index.html                      # Halaman 1: Landing Page (Hero, Slider Highlight, Showcase, Testimoni)
├── category.html                   # Halaman 2: Tourism Categories (Filter Dinamis & 15 Katalog Destinasi)
├── top-destination.html            # Halaman 3: Top Destination (Daftar Peringkat 15 Destinasi Populer)
├── gallery-journal.html            # Halaman 4: Gallery & Journal (Bento Visual Gallery & 4 Travel Journal)
├── showcase.html                   # Halaman 5: Showcase Destinasi (Halaman Detail Dinamis 15 Destinasi)
├── contact-partnership.html        # Halaman 6: Contact & Partnerships (Program Kemitraan & Form Kontak)
└── assets/
    ├── css/
    │   ├── global.css              # Reset, typography Inter, container, navbar, & footer bersama (DRY)
    │   ├── home.css                # Styling khusus Landing Page (index.html)
    │   ├── category.css            # Styling khusus Banner Kategori & Card Grid (category.html)
    │   ├── top-destination.css     # Styling khusus List Top Destination (top-destination.html)
    │   ├── gallery-journal.css     # Styling khusus Visual Gallery & Travel Journal (gallery-journal.html)
    │   ├── showcase.css            # Styling khusus Halaman Showcase Destinasi (showcase.html)
    │   └── contact-partnership.css # Styling khusus Program Kemitraan & Form Kontak (contact-partnership.html)
    ├── js/
    │   ├── destinations-data.js    # Repositori data terpusat 15 destinasi wisata Indonesia
    │   ├── category.js             # Skrip filter 4 kategori & render kartu destinasi ke showcase.html?id=...
    │   └── showcase.js             # Skrip pengubah konten dinamis showcase.html berdasarkan URL parameter
    ├── corak/                      # Motif batik & ornamen khas Nusantara (corak_1.png, corak_2.png)
    ├── icon/                       # Logo brand, penanda GPS, & ikon media sosial
    ├── image/                      # Foto destinasi wisata Nusantara & watermark brand footer
    │   └── new/                    # Foto resolusi tinggi terorganisasi per modul halaman
    └── user/                       # Foto profil testimoni traveler (Jhonny.jpg, Vallery.jpg, Mike.jpg)
```
