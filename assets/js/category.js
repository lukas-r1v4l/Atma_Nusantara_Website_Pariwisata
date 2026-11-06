/* =========================================================================
   ATMA NUSANTARA - CATEGORY PAGE SCRIPT
   Filter Kategori Dinamis & Render Kartu Destinasi ke Showcase
   ========================================================================= */

const cardsGrid = document.getElementById("cardsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

// Ambil data dari destinations-data.js (destinationsData)
const catalogDestinations = typeof destinationsData !== "undefined" ? destinationsData : [];

function renderCards(selectedCategory = "all") {
  if (!cardsGrid) return;
  cardsGrid.innerHTML = "";

  const normalizedCategory = (selectedCategory || "all").trim().toLowerCase();

  const filteredData =
    normalizedCategory === "all"
      ? catalogDestinations
      : catalogDestinations.filter(
          (item) => item.category.trim().toLowerCase() === normalizedCategory
        );

  if (filteredData.length === 0) {
    cardsGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #666; padding: 32px 0;">Tidak ada destinasi pada kategori ini.</p>`;
    return;
  }

  filteredData.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    const detailUrl = `showcase.html?id=${encodeURIComponent(item.id)}`;
    
    card.innerHTML = `
      <img src="assets/corak/corak_1.png" alt="Corak Card" class="card-watermark">
      <div class="card-image-wrapper">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="category-badge">${item.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.description}</p>
        <p class="card-ticket">Ticket: ${item.catalogTicket || item.ticket}</p>
        <div class="card-footer">
          <a href="${detailUrl}" class="btn-details">View Details</a>
        </div>
      </div>
    `;
    cardsGrid.appendChild(card);
  });
}

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category") || "all";
      renderCards(category);
    });
  });
}

// Render seluruh kartu saat halaman dimuat
renderCards("all");
