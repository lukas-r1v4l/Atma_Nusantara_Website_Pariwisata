# Refactoring Struktur & Kualitas Kode Atma Nusantara Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menata ulang struktur direktori, merapikan penamaan berkas & aset, menghilangkan duplikasi CSS/gambar, dan memperbaiki bug HTML/sintaks pada website Atma Nusantara agar memenuhi standar arsitektur web modern untuk penilaian UTS Front-End.

**Architecture:** 
- Standarisasi halaman utama menjadi `index.html` dan perbaikan typo penamaan (`gallery-journal.html`).
- Pemisahan CSS menjadi arsitektur modular: `assets/css/global.css` (reset, variabel, typography, container, navbar, footer) + berkas CSS spesifik tiap halaman (`index.css`, `category.css`, `top-destination.css`, `gallery-journal.css`, `contact-partnership.css`).
- Pemindahan berkas JavaScript ke `assets/js/` dan perbaikan path referensi.
- Pembersihan folder `assets/` (menghapus duplikat gambar, rename file berkarakter khusus).

**Tech Stack:** Semantic HTML5, Modular CSS3 (Flexbox & CSS Grid, Glassmorphism), Vanilla JavaScript (ES6+), Git.

**Spec:** Rekomendasi audit Front-End UTS Atma Nusantara.

---

## File Structure Map

### Berkas yang Dibuat / Dipindah / Dihapus:
- **Halaman Web (Root):**
  - `home.html` ➔ ganti nama jadi `index.html`
  - `category.html` ➔ diperbarui link navigasi & CSS
  - `top-destination.html` ➔ perbaikan `<bod>` menjadi `<body>`, link & CSS
  - `galery-journal.html` ➔ ganti nama jadi `gallery-journal.html`
  - `contact-partnership.html` ➔ diperbarui link navigasi & CSS
- **Styling (`assets/css/`):**
  - Baru: `assets/css/global.css` (Navbar, Footer, Reset, Global typography)
  - Pindah & refactor: `style_home.css` ➔ `assets/css/home.css`
  - Pindah & refactor: `style_category.css` ➔ `assets/css/category.css`
  - Pindah & refactor: `top.css` ➔ `assets/css/top-destination.css`
  - Pindah & refactor: `style_contact-galery.css` ➔ dipisah menjadi `assets/css/gallery-journal.css` & `assets/css/contact-partnership.css`
- **JavaScript (`assets/js/`):**
  - Pindah: `script.js` ➔ `assets/js/category.js`
  - Baru: `assets/js/main.js` (skrip global/navbar jika diperlukan)
- **Aset Gambar (`assets/`):**
  - Hapus: `assets/image/home/` (folder duplikat 100%)
  - Ganti nama: `assets/image/name-brand(footer).png` ➔ `assets/image/name-brand-footer.png`
- **Dokumentasi:**
  - Perbarui `README.md` agar sesuai persis dengan struktur aktual

---

## Tasks

### Task 1: Pembersihan & Restrukturisasi Aset (Assets Cleanup)
- [ ] Ganti nama `assets/image/name-brand(footer).png` menjadi `assets/image/name-brand-footer.png`.
- [ ] Hapus direktori duplikat `assets/image/home/`.
- [ ] Buat direktori `assets/css/` dan `assets/js/`.

### Task 2: Ekstraksi CSS Modular (`global.css` & Per Halaman)
- [ ] Buat `assets/css/global.css` berisi Reset, Base Typography, Container, Navbar, dan Footer.
- [ ] Refactor berkas CSS halaman untuk menghapus duplikasi Navbar/Footer/Reset:
  - `assets/css/home.css` (hanya style khusus hero & highlight)
  - `assets/css/category.css` (hanya style filter & katalog)
  - `assets/css/top-destination.css` (hanya style list destinasi)
  - `assets/css/gallery-journal.css` (hanya style grid galeri & kartu journal)
  - `assets/css/contact-partnership.css` (hanya style form & kartu partnership)
- [ ] Hapus berkas CSS lama di root (`style_home.css`, `style_category.css`, `top.css`, `style_contact-galery.css`).

### Task 3: Restrukturisasi Halaman HTML & Perbaikan Bug
- [ ] Ganti nama `home.html` menjadi `index.html`.
- [ ] Ganti nama `galery-journal.html` menjadi `gallery-journal.html`.
- [ ] Perbaiki bug `<bod>` di `top-destination.html` menjadi `<body>`.
- [ ] Sinkronkan Navbar & Footer di seluruh 5 berkas HTML:
  - Logo Brand selalu mengarah ke `index.html`.
  - Tautan navigasi aktif (`class="active"`) sesuai halaman masing-masing.
  - Tautan navigasi konsisten: `index.html`, `category.html`, `top-destination.html`, `gallery-journal.html`, `contact-partnership.html`.
  - Hubungkan ke `assets/css/global.css` dan file CSS halamannya masing-masing.
  - Perbarui referensi `name-brand-footer.png`.
- [ ] Pindahkan `script.js` ke `assets/js/category.js` dan perbarui path `<script src="assets/js/category.js">` di `category.html`.
- [ ] Rapikan inline script pada `index.html` dan bersihkan alert dummy.

### Task 4: Sinkronisasi Dokumentasi (`README.md`) & Verifikasi Akhir
- [ ] Perbarui struktur pohon folder di `README.md`.
- [ ] Buat `Nama-Tim.txt` (placeholder template agar sesuai deskripsi di README).
- [ ] Verifikasi seluruh tautan dan dependensi berkas (tidak ada link broken/404).
- [ ] Commit seluruh perubahan ke branch `rex-fitur`.
