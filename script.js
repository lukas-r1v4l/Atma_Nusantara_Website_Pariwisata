const destinations = [
  {
    title: "Holbung Hill, Samosir",
    category: "Mountains & Nature",
    description: "An expanse of green savanna hills with a direct view over the waters of Lake Toba.",
    ticket: "Rp15.000",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Holbung Hill, Samosir",
    category: "Mountains & Nature",
    description: "An expanse of green savanna hills with a direct view over the waters of Lake Toba.",
    ticket: "Rp15.000",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Holbung Hill, Samosir",
    category: "Mountains & Nature",
    description: "An expanse of green savanna hills with a direct view over the waters of Lake Toba.",
    ticket: "Rp15.000",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Holbung Hill, Samosir",
    category: "Mountains & Nature",
    description: "An expanse of green savanna hills with a direct view over the waters of Lake Toba.",
    ticket: "Rp15.000",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Holbung Hill, Samosir",
    category: "Mountains & Nature",
    description: "An expanse of green savanna hills with a direct view over the waters of Lake Toba.",
    ticket: "Rp15.000",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Huta Siallagan Traditional Village",
    category: "Culture & History",
    description: "A complex of centuries-old traditional Bolon houses and an ancient stone council site.",
    ticket: "Rp20.000",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80"
  }
];

const cardsGrid = document.getElementById("cardsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderCards(selectedCategory = "all") {
  cardsGrid.innerHTML = "";

  const filteredData = selectedCategory === "all"
    ? destinations
    : destinations.filter(item => item.category === selectedCategory);

  if (filteredData.length === 0) {
    cardsGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #666; padding: 32px 0;">Tidak ada destinasi pada kategori ini.</p>`;
    return;
  }

  filteredData.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="./assets/corak/corak_1.png" alt="Corak Card" class="card-watermark">
      <div class="card-image-wrapper">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="category-badge">${item.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.description}</p>
        <p class="card-ticket">Ticket: ${item.ticket}</p>
        <div class="card-footer">
          <button class="btn-details">View Details</button>
        </div>
      </div>
    `;
    cardsGrid.appendChild(card);
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");
    renderCards(category);
  });
});

renderCards();