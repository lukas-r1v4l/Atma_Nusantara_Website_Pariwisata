/* =========================================================================
   ATMA NUSANTARA - SHOWCASE DETAIL DYNAMIC RENDERER
   Menampilkan detail unik tiap destinasi dalam 1 file showcase.html
   berdasarkan parameter URL ?id=nama-destinasi
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof destinationsData === "undefined" || destinationsData.length === 0) {
    console.warn("Data destinasi tidak ditemukan.");
    return;
  }

  // Ambil parameter id dari URL, misal showcase.html?id=mount-bromo
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = (urlParams.get("id") || "holbung-hill").trim().toLowerCase();

  // Cari destinasi yang sesuai atau default ke yang pertama (Holbung Hill)
  const dest =
    destinationsData.find((item) => item.id.toLowerCase() === targetId) ||
    destinationsData[0];

  if (!dest) return;

  // 1. Perbarui Judul Dokumen (Tab Browser)
  document.title = `Showcase: ${dest.title} - Atma Nusantara`;

  // 2. Perbarui Gambar Banner & Caption
  const bannerImg = document.getElementById("showcaseImg");
  if (bannerImg) {
    bannerImg.src = dest.image;
    bannerImg.alt = dest.title;
  }

  const captionName = document.getElementById("showcaseTitle");
  if (captionName) {
    captionName.textContent = dest.title;
  }

  const captionLocation = document.getElementById("showcaseLocation");
  if (captionLocation) {
    captionLocation.textContent = dest.location;
  }

  // 3. Perbarui Deskripsi "About Destination Showcase"
  const aboutBox = document.getElementById("showcaseAbout");
  if (aboutBox && dest.about) {
    aboutBox.innerHTML = `
      <h3>About Destination Showcase</h3>
      ${dest.about.map((p) => `<p>${p}</p>`).join("")}
    `;
  }

  // 4. Perbarui Ringkasan Tiket, Parkir, & Jam Operasional
  const ticketSpan = document.getElementById("showcaseTicket");
  if (ticketSpan) {
    ticketSpan.textContent = dest.ticket;
  }

  const parkingSpan = document.getElementById("showcaseParking");
  if (parkingSpan) {
    parkingSpan.textContent = dest.parking;
  }

  const hoursSpan = document.getElementById("showcaseHours");
  if (hoursSpan) {
    hoursSpan.textContent = dest.hours;
  }

  // 5. Perbarui Badge Fitur yang Tersedia
  const badgeGroup = document.getElementById("showcaseBadges");
  if (badgeGroup && dest.features) {
    badgeGroup.innerHTML = dest.features
      .map((feat) => `<span class="badge-pill">${feat}</span>`)
      .join("");
  }
});
