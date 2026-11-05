const destinations = [
  // =========================================================================
  // 1. KATEGORI: Mountains & Nature (5 Destinasi)
  // =========================================================================
  {
    title: "Holbung Hill, Samosir",
    category: "Mountains & Nature",
    description: "An expanse of green savanna hills with a direct view over the waters of Lake Toba.",
    ticket: "Rp15.000",
    image: "assets/image/new/tourism-categories/bukit-holbung.jpg",
    link: "showcase.html"
  },
  {
    title: "Mount Bromo, East Java",
    category: "Mountains & Nature",
    description: "An iconic active volcano in Bromo Tengger Semeru National Park famous for its golden sunrise and sea of sand.",
    ticket: "Rp35.000",
    image: "assets/image/new/tourism-categories/gunung-bromo.jpg",
    link: "showcase.html"
  },
  {
    title: "Mount Rinjani, Lombok",
    category: "Mountains & Nature",
    description: "Indonesia's second-highest volcano in West Nusa Tenggara featuring the breathtaking Segara Anak crater lake.",
    ticket: "Rp20.000",
    image: "assets/image/new/tourism-categories/bukit-rinjani.jpg",
    link: "showcase.html"
  },
  {
    title: "Ijen Crater, Banyuwangi",
    category: "Mountains & Nature",
    description: "A volcanic crater in East Java renowned worldwide for its rare electric-blue fire phenomenon and turquoise lake.",
    ticket: "Rp20.000",
    image: "assets/image/new/tourism-categories/kawah-ijen.jpg",
    link: "showcase.html"
  },
  {
    title: "Mount Kelimutu, Flores",
    category: "Mountains & Nature",
    description: "A mystical volcano in East Nusa Tenggara famous for its three summit crater lakes that periodically change colors.",
    ticket: "Rp20.000",
    image: "assets/image/new/tourism-categories/gunung-kelimutu.jpg",
    link: "showcase.html"
  },

  // =========================================================================
  // 2. KATEGORI: Culture & History (5 Destinasi)
  // =========================================================================
  {
    title: "Huta Siallagan Traditional Village",
    category: "Culture & History",
    description: "A complex of centuries-old traditional Bolon houses and an ancient stone council site in Samosir.",
    ticket: "Rp20.000",
    image: "assets/image/new/tourism-categories/huta-siallagan.jpg",
    link: "showcase.html"
  },
  {
    title: "Borobudur Temple, Magelang",
    category: "Culture & History",
    description: "The world's largest 9th-century Buddhist temple monument in Central Java adorned with relief panels and stupas.",
    ticket: "Rp50.000",
    image: "assets/image/new/tourism-categories/borobudur.jpg",
    link: "showcase.html"
  },
  {
    title: "Prambanan Temple, Yogyakarta",
    category: "Culture & History",
    description: "A magnificent 9th-century Hindu temple compound in Yogyakarta dedicated to the Trimurti with towering spires.",
    ticket: "Rp50.000",
    image: "assets/image/new/tourism-categories/prambanan.jpg",
    link: "showcase.html"
  },
  {
    title: "Tana Toraja, South Sulawesi",
    category: "Culture & History",
    description: "Ancestral highlands famous for boat-shaped Tongkonan traditional houses, cliffside graves, and cultural rituals.",
    ticket: "Rp20.000",
    image: "assets/image/new/tourism-categories/tana-toraja.jpg",
    link: "showcase.html"
  },
  {
    title: "Uluwatu Temple, Bali",
    category: "Culture & History",
    description: "A sacred Balinese sea temple perched on a steep 70-meter cliff edge offering sunset Kecak fire dance performances.",
    ticket: "Rp30.000",
    image: "assets/image/new/tourism-categories/uluwatu.jpg",
    link: "showcase.html"
  },

  // =========================================================================
  // 3. KATEGORI: Beaches & Marine Areas (5 Destinasi)
  // =========================================================================
  {
    title: "Sorake Beach, Nias",
    category: "Beaches & Marine Areas",
    description: "An international surfing paradise in South Nias, North Sumatra with world-class wave barrels and coral reefs.",
    ticket: "Free",
    image: "assets/image/new/tourism-categories/pantai-sorake.jpg",
    link: "showcase.html"
  },
  {
    title: "Raja Ampat Islands, West Papua",
    category: "Beaches & Marine Areas",
    description: "An archipelago of karst islands in Southwest Papua holding the richest marine coral reef biodiversity on Earth.",
    ticket: "Rp100.000",
    image: "assets/image/new/tourism-categories/raja-ampat.jpg",
    link: "showcase.html"
  },
  {
    title: "Pink Beach, Labuan Bajo",
    category: "Beaches & Marine Areas",
    description: "One of the world's rare pink-sand beaches inside Komodo National Park with crystal-clear snorkeling waters.",
    ticket: "Rp25.000",
    image: "assets/image/new/tourism-categories/pantai-pink.jpg",
    link: "showcase.html"
  },
  {
    title: "Kelingking Beach, Nusa Penida",
    category: "Beaches & Marine Areas",
    description: "A dramatic T-Rex-shaped limestone headland in Bali overlooking a secluded white-sand cove and turquoise waves.",
    ticket: "Rp15.000",
    image: "assets/image/new/tourism-categories/pantai-kelingking.jpg",
    link: "showcase.html"
  },
  {
    title: "Derawan Islands, East Kalimantan",
    category: "Beaches & Marine Areas",
    description: "A tropical marine sanctuary in Berau famous for green sea turtles, stingless jellyfish lakes, and manta rays.",
    ticket: "Rp25.000",
    image: "assets/image/new/tourism-categories/kota-derawan.jpg",
    link: "showcase.html"
  }
];

const cardsGrid = document.getElementById("cardsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderCards(selectedCategory = "all") {
  if (!cardsGrid) return;
  cardsGrid.innerHTML = "";

  const normalizedCategory = (selectedCategory || "all").trim().toLowerCase();

  const filteredData =
    normalizedCategory === "all"
      ? destinations
      : destinations.filter(
          (item) => item.category.trim().toLowerCase() === normalizedCategory
        );

  if (filteredData.length === 0) {
    cardsGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #666; padding: 32px 0;">Tidak ada destinasi pada kategori ini.</p>`;
    return;
  }

  filteredData.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="assets/corak/corak_1.png" alt="Corak Card" class="card-watermark">
      <div class="card-image-wrapper">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="category-badge">${item.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.description}</p>
        <p class="card-ticket">Ticket: ${item.ticket}</p>
        <div class="card-footer">
          <a href="${item.link || 'showcase.html'}" class="btn-details">View Details</a>
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

// Render cards
renderCards("all");
