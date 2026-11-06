/* =========================================================================
   ATMA NUSANTARA - MOBILE NAVIGATION DRAWER
   Vanilla JavaScript Pemula: Buka & Tutup Menu Mobile (Android/Handphone)
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

  // Otomatis memberi kelas 'active' pada link yang sesuai dengan halaman saat ini
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-links a");

  mobileLinks.forEach(function (link) {
    const href = link.getAttribute("href");
    if (
      href === currentFile ||
      (currentFile === "" && href === "index.html") ||
      (currentFile.startsWith("showcase.html") && href === "category.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
