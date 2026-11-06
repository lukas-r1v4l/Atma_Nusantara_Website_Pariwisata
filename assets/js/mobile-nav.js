/* =========================================================================
   ATMA NUSANTARA - MOBILE NAVIGATION DRAWER
   Vanilla JavaScript Pemula: Buka & Tutup Menu Mobile (Android/Handphone)
   Serta Pelacak Otomatis Halaman Aktif (Notch Indikator)
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuClose = document.getElementById("menuClose");
  const menuOverlay = document.getElementById("menuOverlay");

  if (!menuToggle || !mobileMenu) return;

  // 1. Fungsi untuk membuka menu
  function openMenu() {
    mobileMenu.classList.add("open");
    if (menuOverlay) menuOverlay.classList.add("open");
    document.body.style.overflow = "hidden"; // Kunci scroll halaman saat menu terbuka
  }

  // 2. Fungsi untuk menutup menu
  function closeMenu() {
    mobileMenu.classList.remove("open");
    if (menuOverlay) menuOverlay.classList.remove("open");
    document.body.style.overflow = ""; // Kembalikan scroll normal
  }

  // Event listener klik tombol hamburger
  menuToggle.addEventListener("click", openMenu);

  // Event listener klik tombol silang (X)
  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }

  // Event listener klik di luar menu (pada overlay) untuk menutup
  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  // Menutup menu jika menekan tombol Escape pada keyboard
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  // 3. Otomatis memastikan notch hitam selalu mengikuti halaman aktif
  function syncActiveLink() {
    const rawPath = window.location.pathname.toLowerCase();
    // Ambil nama file atau slug terakhir (misal 'category.html' atau 'category')
    const segments = rawPath.split("/").filter(Boolean);
    const lastSegment = segments.length > 0 ? segments[segments.length - 1] : "";
    const pageName = lastSegment.replace(".html", "");

    const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-links a");
    let matched = false;

    mobileLinks.forEach(function (link) {
      const href = (link.getAttribute("href") || "").toLowerCase();
      const hrefName = href.replace(".html", "");

      // Cek apakah halaman saat ini cocok dengan href link
      const isHome = (pageName === "" || pageName === "index" || rawPath.endsWith("/")) && hrefName === "index";
      const isShowcase = (pageName === "showcase" && hrefName === "category");
      const isDirectMatch = (pageName !== "" && pageName === hrefName);

      if (isHome || isShowcase || isDirectMatch) {
        link.classList.add("active");
        matched = true;
      } else {
        link.classList.remove("active");
      }
    });

    // Jika belum ada yang cocok dan berada di root domain, default ke 'Home'
    if (!matched && (pageName === "" || pageName === "index" || rawPath.endsWith("/"))) {
      const homeLink = mobileMenu.querySelector('.mobile-nav-links a[href="index.html"]');
      if (homeLink) homeLink.classList.add("active");
    }
  }

  syncActiveLink();
});
