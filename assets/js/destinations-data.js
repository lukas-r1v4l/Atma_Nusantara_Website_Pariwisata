/* =========================================================================
   ATMA NUSANTARA - DESTINATIONS DATA REPOSITORY
   Katalog terpusat untuk Category & Showcase (15 Destinasi)
   ========================================================================= */

const destinationsData = [
  // =========================================================================
  // 1. KATEGORI: Mountains & Nature (5 Destinasi)
  // =========================================================================
  {
    id: "holbung-hill",
    title: "Holbung Hill, Samosir",
    category: "Mountains & Nature",
    description: "An expanse of green savanna hills with a direct view over the waters of Lake Toba.",
    ticket: "IDR 15,000 - IDR 25,000",
    catalogTicket: "Rp15.000",
    parking: "IDR 5,000 - IDR 10,000",
    location: "North Sumatra, Indonesia • Open Daily (07:00 – 21:00 WIB)",
    hours: "Daily (07:00 – 21:00 WIB)",
    image: "assets/image/new/tourism-categories/bukit-holbung.jpg",
    about: [
      "Holbung Hill, located in Samosir Regency, North Sumatra, is one of the most stunning panoramic viewpoints overlooking the ancient caldera of Lake Toba. Known affectionately as the 'Teletubbies Hill of Sumatra', this destination offers sweeping vistas of undulating emerald-green savanna ridges plunging dramatically into deep blue volcanic waters.",
      "Visitors can enjoy refreshing morning breezes, gentle trekking trails that are friendly for all age groups, and world-class vantage points for watching sunrise mist roll across the lake. The surrounding traditional Batak villages also offer authentic cultural experiences and warm local hospitality."
    ],
    features: ["Homestay & Resort", "Panoramic Photo Spot", "Local Restaurant & Coffee", "Camping Ground", "Trekking Path"]
  },
  {
    id: "mount-bromo",
    title: "Mount Bromo, East Java",
    category: "Mountains & Nature",
    description: "An iconic active volcano in Bromo Tengger Semeru National Park famous for its golden sunrise and sea of sand.",
    ticket: "IDR 29,000 - IDR 34,000",
    catalogTicket: "Rp35.000",
    parking: "IDR 10,000 - IDR 20,000",
    location: "East Java, Indonesia • Open 24 Hours (Sunrise 03:00 WIB)",
    hours: "24 Hours (Best Time 03:00 – 10:00 WIB)",
    image: "assets/image/new/tourism-categories/gunung-bromo.jpg",
    about: [
      "Mount Bromo is a legendary active stratovolcano situated inside Bromo Tengger Semeru National Park, East Java. Rising to 2,329 meters, it sits dramatically within the vast Tengger Caldera, surrounded by a mystical 10-kilometer desert of volcanic sand known as the 'Sea of Sand' (Lautan Pasir).",
      "Famed worldwide for its breathtaking golden sunrise viewed from Penanjakan and King Kong Hill, visitors can experience 4WD Jeep excursions across whispering sands, horseback riding toward the volcanic rim, and hiking 250 concrete steps to gaze directly into Bromo's steaming sulfur crater."
    ],
    features: ["4WD Jeep Adventure", "Golden Sunrise Viewpoint", "Sea of Sand (Pasir Berbisik)", "Horseback Riding", "Sulfur Crater Hike"]
  },
  {
    id: "mount-rinjani",
    title: "Mount Rinjani, Lombok",
    category: "Mountains & Nature",
    description: "Indonesia's second-highest volcano in West Nusa Tenggara featuring the breathtaking Segara Anak crater lake.",
    ticket: "IDR 20,000 - IDR 50,000",
    catalogTicket: "Rp20.000",
    parking: "IDR 10,000 - IDR 20,000",
    location: "Lombok, West Nusa Tenggara • Open Daily (06:00 – 18:00 WITA)",
    hours: "Trekking Basecamp (06:00 – 18:00 WITA)",
    image: "assets/image/new/tourism-categories/bukit-rinjani.jpg",
    about: [
      "Mount Rinjani is Indonesia's second-highest volcano, towering majestically at 3,726 meters above sea level on the island of Lombok, West Nusa Tenggara. Revered as a sacred pilgrimage site by both the local Sasak people and Balinese Hindus, Rinjani offers one of the most celebrated mountaineering routes in Southeast Asia.",
      "The centerpiece of Rinjani's massive caldera is Lake Segara Anak, a crescent-shaped turquoise crater lake with the active volcanic cone of Gunung Barujari resting inside. Hikers traverse lush rainforests, expansive savannas, and natural hot springs on multi-day guided expeditions to reach the iconic summit rim."
    ],
    features: ["Segara Anak Crater Lake", "Summit Trekking Expeditions", "Natural Hot Springs", "Mountain Porters & Guides", "Savanna Campsite"]
  },
  {
    id: "ijen-crater",
    title: "Ijen Crater, Banyuwangi",
    category: "Mountains & Nature",
    description: "A volcanic crater in East Java renowned worldwide for its rare electric-blue fire phenomenon and turquoise lake.",
    ticket: "IDR 20,000 - IDR 30,000",
    catalogTicket: "Rp20.000",
    parking: "IDR 5,000 - IDR 15,000",
    location: "Banyuwangi & Bondowoso, East Java • Night Hike (02:00 – 12:00 WIB)",
    hours: "Hike Opens 02:00 – 12:00 WIB",
    image: "assets/image/new/tourism-categories/kawah-ijen.jpg",
    about: [
      "Ijen Crater (Kawah Ijen) is a geological marvel located at the eastern tip of Java between Banyuwangi and Bondowoso. It is world-renowned for hosting the largest highly acidic turquoise crater lake on Earth, as well as the mesmerizing, rare phenomenon of electric-blue sulfur flames visible only in pitch darkness.",
      "The nocturnal trek starts at Paltuding basecamp around 02:00 AM, leading adventurous hikers up a 3-kilometer mountain trail to the crater rim. Along the way, travelers encounter traditional sulfur miners carrying heavy bamboo baskets, witness starry night skies, and greet an unforgettable sunrise over the turquoise acid lake."
    ],
    features: ["Electric Blue Fire Phenomenon", "Turquoise Acidic Crater Lake", "Paltuding Basecamp Trail", "Sulfur Mining Heritage", "Sunrise Rim Vantage Point"]
  },
  {
    id: "mount-kelimutu",
    title: "Mount Kelimutu, Flores",
    category: "Mountains & Nature",
    description: "A mystical volcano in East Nusa Tenggara famous for its three summit crater lakes that periodically change colors.",
    ticket: "IDR 20,000 - IDR 30,000",
    catalogTicket: "Rp20.000",
    parking: "IDR 5,000 - IDR 10,000",
    location: "Moni, Ende Regency, Flores, NTT • Open Daily (05:00 – 18:00 WITA)",
    hours: "Daily (05:00 – 18:00 WITA)",
    image: "assets/image/new/tourism-categories/gunung-kelimutu.jpg",
    about: [
      "Mount Kelimutu is a mystical volcano located in Kelimutu National Park near the mountain village of Moni in Flores, East Nusa Tenggara. It is globally famous for its three distinct summit crater lakes, each with vivid, periodically shifting water colors—from deep turquoise and chocolate brown to jade green and midnight black.",
      "Local Lio indigenous folklore holds that each crater lake serves as the final resting sanctuary for departed ancestral souls based on the deeds of their lives. A paved stairway leads to the highest observation monument, where travelers gather before daybreak to watch morning fog unveil the surreal colored waters."
    ],
    features: ["Tri-Colored Crater Lakes", "Ancestral Lio Folklore", "Inspiration Monument Viewpoint", "Moni Mountain Village", "Biodiversity Forest Trail"]
  },

  // =========================================================================
  // 2. KATEGORI: Culture & History (5 Destinasi)
  // =========================================================================
  {
    id: "huta-siallagan",
    title: "Huta Siallagan Traditional Village",
    category: "Culture & History",
    description: "A complex of centuries-old traditional Bolon houses and an ancient stone council site in Samosir.",
    ticket: "IDR 20,000",
    catalogTicket: "Rp20.000",
    parking: "IDR 5,000 - IDR 10,000",
    location: "Ambarita, Samosir Island, North Sumatra • Open Daily (08:00 – 18:00 WIB)",
    hours: "Daily (08:00 – 18:00 WIB)",
    image: "assets/image/new/tourism-categories/huta-siallagan.jpg",
    about: [
      "Huta Siallagan is an ancient fortified Batak Toba cultural village established in the 17th century by King Laga Siallagan in Ambarita, Samosir Island. Enclosed by stone ramparts and shaded by a centuries-old sacred Hariara banyan tree, the village preserves an intact complex of traditional Bolon stilt houses adorned with ornate red, black, and white Gorga carvings.",
      "The village's most famous historical treasure is the Batu Parsidangan—a stone council table surrounded by stone chairs where ancient Batak kings, elders, and spiritual leaders held court to administer justice. Visitors can learn about ancient Batak law, witness traditional Tor-Tor dance performances, and admire handwoven Ulos textiles."
    ],
    features: ["Batu Parsidangan Stone Court", "Authentic Rumah Bolon Houses", "Tor-Tor Dance & Sigale-Gale", "Traditional Gorga Carvings", "Ulos Weaving Gallery"]
  },
  {
    id: "borobudur-temple",
    title: "Borobudur Temple, Magelang",
    category: "Culture & History",
    description: "The world's largest 9th-century Buddhist temple monument in Central Java adorned with relief panels and stupas.",
    ticket: "IDR 50,000 - IDR 100,000",
    catalogTicket: "Rp50.000",
    parking: "IDR 10,000 - IDR 20,000",
    location: "Magelang, Central Java • Open Daily (06:30 – 17:00 WIB)",
    hours: "Daily (06:30 – 17:00 WIB)",
    image: "assets/image/new/tourism-categories/borobudur.jpg",
    about: [
      "Borobudur Temple is the world's largest Buddhist monument, constructed in the 9th century during the reign of the Syailendra Dynasty in Central Java. Built without mortar from over two million volcanic andesite stone blocks, this UNESCO World Heritage Site is designed as a colossal three-dimensional cosmic mandala representing Buddhist cosmology.",
      "The monument consists of nine stacked terraces topped by a central monumental stupa, adorned with 2,672 detailed narrative bas-relief panels and 504 Buddha statues. Pilgrims and cultural travelers from across the globe visit Borobudur to walk its circumambulatory pathways and experience the serene mist rising over Mount Merapi and the Menoreh Hills at sunrise."
    ],
    features: ["UNESCO World Heritage Monument", "2,672 Narrative Relief Panels", "Perforated Stupas & Buddha Statues", "Menoreh Hills Sunrise View", "Cultural Heritage Museum"]
  },
  {
    id: "prambanan-temple",
    title: "Prambanan Temple, Yogyakarta",
    category: "Culture & History",
    description: "A magnificent 9th-century Hindu temple compound in Yogyakarta dedicated to the Trimurti with towering spires.",
    ticket: "IDR 50,000 - IDR 100,000",
    catalogTicket: "Rp50.000",
    parking: "IDR 10,000 - IDR 20,000",
    location: "Sleman, Yogyakarta & Klaten • Open Daily (06:30 – 17:00 WIB)",
    hours: "Daily (06:30 – 17:00 WIB)",
    image: "assets/image/new/tourism-categories/prambanan.jpg",
    about: [
      "Prambanan Temple is the largest and most magnificent Hindu temple compound in Indonesia, built in the 9th century by the Mataram Kingdom. Dedicated to the Trimurti—the Hindu trinity of Brahma the Creator, Vishnu the Preserver, and Shiva the Destroyer—its soaring, intricately carved stone spires rise to an impressive 47 meters.",
      "The temple walls feature masterfully sculpted narrative reliefs depicting the epic saga of the Ramayana and Bhagavata Purana. In the evenings, the open-air theater against the illuminated backdrop of Prambanan hosts the world-famous Ramayana Ballet performance, bringing ancient Javanese performing arts vividly to life under the starlit sky."
    ],
    features: ["47-Meter Shiva Central Shrine", "Ramayana Relief Sculptures", "Evening Ramayana Ballet Show", "Candi Sewu & Bubrah Enclosure", "Bicycle & Audio Tour Rental"]
  },
  {
    id: "tana-toraja",
    title: "Tana Toraja, South Sulawesi",
    category: "Culture & History",
    description: "Ancestral highlands famous for boat-shaped Tongkonan traditional houses, cliffside graves, and cultural rituals.",
    ticket: "IDR 20,000 - IDR 40,000",
    catalogTicket: "Rp20.000",
    parking: "IDR 5,000 - IDR 10,000",
    location: "Tana Toraja, South Sulawesi • Open Daily (08:00 – 17:00 WITA)",
    hours: "Daily (08:00 – 17:00 WITA)",
    image: "assets/image/new/tourism-categories/tana-toraja.jpg",
    about: [
      "Tana Toraja is an enchanting highland realm in South Sulawesi renowned for its distinct indigenous culture, ancestral animist traditions (Aluk Todolo), and dramatic funeral rites. The landscape is dotted with iconic Tongkonan traditional houses featuring towering, boat-shaped saddle roofs decorated with buffalo horns and symbolic geometric carvings.",
      "Among Toraja's most extraordinary cultural sites are the cliffside burial caves of Lemo and Londa, where life-sized wooden effigies known as Tau-Tau gaze out from balconies carved into sheer limestone karst walls. Visitors can also explore traditional coffee plantations, terraced rice valleys, and vibrant weekly livestock markets in Rantepao."
    ],
    features: ["Tongkonan Boat-Roofed Houses", "Lemo & Londa Cliffside Graves", "Tau-Tau Wooden Effigies", "Authentic Toraja Arabica Coffee", "Rambu Solo' Cultural Ceremonies"]
  },
  {
    id: "uluwatu-temple",
    title: "Uluwatu Temple, Bali",
    category: "Culture & History",
    description: "A sacred Balinese sea temple perched on a steep 70-meter cliff edge offering sunset Kecak fire dance performances.",
    ticket: "IDR 30,000 - IDR 50,000",
    catalogTicket: "Rp30.000",
    parking: "IDR 5,000 - IDR 10,000",
    location: "Pecatu, South Kuta, Badung, Bali • Open Daily (07:00 – 19:00 WITA)",
    hours: "Daily (07:00 – 19:00 WITA)",
    image: "assets/image/new/tourism-categories/uluwatu.jpg",
    about: [
      "Pura Luhur Uluwatu is one of Bali's six key directional spiritual sanctuaries (Sad Kahyangan), dramatically situated on the crest of a vertical limestone cliff soaring 70 meters above the roaring waves of the Indian Ocean in the Bukit Peninsula. Founded in the 11th century, it protects Bali from evil sea spirits according to Hindu belief.",
      "Uluwatu is celebrated for its cliffside coastal walking paths, populated by playful macaque monkeys living in the surrounding dry forest. Every evening at sunset, an open-air amphitheater on the cliff edge stages the electrifying Kecak Fire Dance, combining hypnotic chanting, fire spectacles, and panoramic golden hour ocean vistas."
    ],
    features: ["70-Meter Cliffside Ocean Vista", "Sunset Kecak Fire Dance", "Sacred Monkey Forest Sanctuary", "Historic 11th-Century Balinese Shrine", "Surf Break Viewing Point"]
  },

  // =========================================================================
  // 3. KATEGORI: Beaches & Marine Areas (5 Destinasi)
  // =========================================================================
  {
    id: "sorake-beach",
    title: "Sorake Beach, Nias",
    category: "Beaches & Marine Areas",
    description: "An international surfing paradise in South Nias, North Sumatra with world-class wave barrels and coral reefs.",
    ticket: "Free / Donation",
    catalogTicket: "Free",
    parking: "IDR 5,000 - IDR 10,000",
    location: "Luahagundre Maniamolo, South Nias, North Sumatra • Open 24 Hours",
    hours: "24 Hours (Best Surf Morning & Late Afternoon)",
    image: "assets/image/new/tourism-categories/pantai-sorake.jpg",
    about: [
      "Sorake Beach, nestled in Lagundri Bay on the southern coast of Nias Island, North Sumatra, is globally recognized as one of the world's most legendary right-hand reef surf breaks. Offering consistent, perfectly formed barrel waves that break over a shallow coral reef, Sorake has hosted prestigious World Surf League (WSL) qualifying events for decades.",
      "Beyond its world-class surf pedigree, Sorake features tranquil coconut groves, beachfront homestays, and crystal-clear tide pools ideal for snorkeling. It also provides convenient access to traditional South Nias cultural villages known for monumental megalithic stone complexes and the famous 'Hombo Batu' (stone jumping) athleticism."
    ],
    features: ["World-Class Right-Hand Surf Break", "WSL Championship Wave Spot", "Lagundri Bay Snorkeling", "Beachfront Surf Camps & Homestays", "Nias Stone Jumping Heritage"]
  },
  {
    id: "raja-ampat",
    title: "Raja Ampat Islands, West Papua",
    category: "Beaches & Marine Areas",
    description: "An archipelago of karst islands in Southwest Papua holding the richest marine coral reef biodiversity on Earth.",
    ticket: "IDR 100,000 - IDR 500,000",
    catalogTicket: "Rp100.000",
    parking: "Harbor Docking Fee",
    location: "Southwest Papua, Indonesia • Open Daily 24 Hours",
    hours: "Daily 24 Hours (Best Season Oct – Apr)",
    image: "assets/image/new/tourism-categories/raja-ampat.jpg",
    about: [
      "Raja Ampat (The Four Kings) is an archipelago situated off the northwest tip of Bird's Head Peninsula in Southwest Papua, comprising over 1,500 small islands, cays, and emerald-topped karst islets surrounded by pristine aquamarine waters. It sits at the epicenter of the Coral Triangle, harboring the highest marine biodiversity recorded anywhere on Earth.",
      "Divers and snorkelers encounter more than 1,500 species of reef fish, 550 types of hard corals, majestic manta ray cleaning stations, and rare carpet sharks. Above the water, climbing to the iconic wooden summit of Pianemo or Wayag reveals an awe-inspiring labyrinth of turquoise lagoons and jagged limestone karst formations."
    ],
    features: ["Epicenter of Global Marine Biodiversity", "Iconic Pianemo & Wayag Viewpoints", "Manta Ray Cleaning Stations", "Liveaboard Diving Expeditions", "Pristine Karst Lagoon Kayaking"]
  },
  {
    id: "pink-beach",
    title: "Pink Beach, Labuan Bajo",
    category: "Beaches & Marine Areas",
    description: "One of the world's rare pink-sand beaches inside Komodo National Park with crystal-clear snorkeling waters.",
    ticket: "IDR 25,000 - IDR 50,000",
    catalogTicket: "Rp25.000",
    parking: "Boat Anchor Fee",
    location: "Komodo National Park, West Manggarai, Flores, NTT • Open Daily (07:00 – 17:00 WITA)",
    hours: "Daily (07:00 – 17:00 WITA)",
    image: "assets/image/new/tourism-categories/pantai-pink.jpg",
    about: [
      "Pink Beach (Pantai Merah) is one of only seven beaches in the entire world endowed with naturally blushing pink sand, located inside the UNESCO-protected Komodo National Park in East Nusa Tenggara. The distinctive pastel rosy hue is created by microscopic red organisms called Foraminifera that mix harmoniously with white calcium carbonate sand.",
      "Framed by rugged arid hills, bright blue waters, and pristine coral reefs located just meters from the shoreline, Pink Beach is a paradise for swimming, snorkeling, and aerial photography. Travelers frequently combine visits to Pink Beach with dragon-spotting treks on Komodo Island and panoramic hikes on Padar Island."
    ],
    features: ["Natural Rosy Pink Coral Sand", "Shallow Reef Snorkeling Gardens", "Komodo Dragon Island Proximity", "Padar Island Boat Excursion", "Turquoise Swimming Waters"]
  },
  {
    id: "kelingking-beach",
    title: "Kelingking Beach, Nusa Penida",
    category: "Beaches & Marine Areas",
    description: "A dramatic T-Rex-shaped limestone headland in Bali overlooking a secluded white-sand cove and turquoise waves.",
    ticket: "IDR 15,000 - IDR 25,000",
    catalogTicket: "Rp15.000",
    parking: "IDR 5,000 - IDR 10,000",
    location: "Bunga Mekar, Nusa Penida, Klungkung, Bali • Open Daily (06:00 – 18:30 WITA)",
    hours: "Daily (06:00 – 18:30 WITA)",
    image: "assets/image/new/tourism-categories/pantai-kelingking.jpg",
    about: [
      "Kelingking Beach is one of Bali's most photographed natural landmarks, situated on the southwestern coast of Nusa Penida island. Named after its resemblance to a curled pinkie finger ('kelingking'), the towering limestone headland has achieved global viral fame for its striking profile that looks uncannily like a Tyrannosaurus Rex extending into the ocean.",
      "From the cliff-top viewpoint, travelers are treated to a dizzying 200-meter drop looking down upon turquoise swirling waves and a pristine white-sand cove below. An adventurous steep trail flanked by bamboo handrails leads intrepid explorers all the way down to the secluded beach paradise."
    ],
    features: ["T-Rex-Shaped Limestone Cliff", "200-Meter Dramatic Ocean Drop", "Secluded White-Sand Cove", "Manta Point Coastal Cruise", "Cliff-Top Sunset Lookout"]
  },
  {
    id: "derawan-islands",
    title: "Derawan Islands, East Kalimantan",
    category: "Beaches & Marine Areas",
    description: "A tropical marine sanctuary in Berau famous for green sea turtles, stingless jellyfish lakes, and manta rays.",
    ticket: "IDR 25,000 - IDR 50,000",
    catalogTicket: "Rp25.000",
    parking: "Speedboat Harbor Fee",
    location: "Berau Regency, East Kalimantan • Open Daily 24 Hours",
    hours: "Daily 24 Hours (Best Time May – Oct)",
    image: "assets/image/new/tourism-categories/kota-derawan.jpg",
    about: [
      "The Derawan Archipelago, situated in the Celebes Sea off the coast of East Kalimantan, is a world-class tropical marine haven comprising Derawan, Maratua, Kakaban, and Sangalaki islands. It is renowned as Indonesia's premier sanctuary for giant green sea turtles, which feed along the shallow seagrass beds and nest on pristine sandspits.",
      "The highlight of the archipelago is Kakaban Island's landlocked marine lake, where visitors can safely swim amidst millions of stingless golden and moon jellyfish that have evolved without predators for millennia. Neighboring Sangalaki offers thrilling encounters with resident manta rays, while Maratua features breathtaking underwater drop-offs."
    ],
    features: ["Stingless Jellyfish Lake at Kakaban", "Giant Green Sea Turtle Sanctuary", "Sangalaki Manta Ray Point", "Maratua Coral Wall Drop-Off", "Overwater Wooden Bungalows"]
  }
];
