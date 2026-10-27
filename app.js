"use strict";

const whatsappNumber = "255686936097";
const tours = [
  {
    title: "Prison Island", category: "Islands & Beaches", tag: "ISLAND HERITAGE",
    description: "Discover the historic island near Stone Town, see giant tortoises, and enjoy spectacular Indian Ocean views.",
    image: "photo-1518509562904-e7ef99cdcc86", imageFile: "excursion-prison-island.jpg", alt: "Tropical island coastline",
    highlights: ["Historic island", "Giant tortoises", "Ocean views"]
  },
  {
    title: "Nakupenda Island", category: "Islands & Beaches", tag: "SAND BANK ESCAPE",
    description: "Enjoy a beautiful turquoise-water sandbank, swimming, snorkelling, relaxation, and an included seafood lunch.",
    image: "photo-1500375592092-40eb2168fd21", imageFile: "excursion-nakupenda-island.jpg", alt: "Turquoise Indian Ocean water",
    highlights: ["Sandbank", "Swimming & snorkelling", "Seafood lunch included"]
  },
  {
    title: "Nyange Sandbank", category: "Islands & Beaches", tag: "ISLAND ESCAPE",
    description: "Discover a peaceful sandbank with clear blue water, beautiful scenery, swimming, and photography opportunities.",
    image: "photo-1514282401047-d79a71a590e8", imageFile: "excursion-nyange-sandbank.jpg", alt: "Clear water along a tropical beach",
    highlights: ["Clear blue water", "Swimming", "Photography"]
  },
  {
    title: "Blue Safari", category: "Ocean Adventures", tag: "OCEAN ADVENTURE",
    description: "Explore Zanzibar's waters aboard a traditional dhow. Visit sandbanks, lagoons, and coral reefs. Snorkelling and a local-specialities lunch are included.",
    image: "photo-1544551763-46a013bb70d5", imageFile: "excursion-blue-safari.jpg", imagePosition: "center top", alt: "Boat sailing across tropical water",
    highlights: ["Traditional dhow", "Sandbanks & lagoons", "Snorkelling and lunch included"]
  },
  {
    title: "Village Tour — Local Life", category: "Culture & Heritage", tag: "LOCAL CULTURE",
    description: "Experience traditional village life, meet local people, and discover Zanzibar's Swahili culture and traditions.",
    image: "photo-1516026672322-bc52d61a55d5", imageFile: "excursion-village-tour.jpg", alt: "Village landscape in East Africa",
    highlights: ["Swahili culture", "Local life", "Community experience"]
  },
  {
    title: "Jozani Forest", category: "Nature & Wildlife", tag: "FOREST & WILDLIFE",
    description: "Explore lush forest and mangroves while discovering Zanzibar's rare red colobus monkeys.",
    image: "photo-1448375240586-882707db888b", imageFile: "excursion-jozani-forest.jpg", imagePosition: "center top", alt: "Sunlight through a lush forest",
    highlights: ["Forest trails", "Mangroves", "Red colobus monkeys"]
  },
  {
    title: "Salaam Cave — Sea Turtles", category: "Nature & Wildlife", tag: "MARINE LIFE",
    description: "Discover Salaam Cave and see sea turtles up close. Swimming with turtles depends on local permission and conditions.",
    image: "photo-1546026423-cc4642628d2b", imageFile: "excursion-salaam-cave.jpg", imagePosition: "center top", alt: "Tropical marine life and coral reef",
    highlights: ["Sea turtles", "Natural cave", "Swimming subject to permission and conditions"]
  },
  {
    title: "Secret Cave", category: "Nature & Wildlife", tag: "HIDDEN ZANZIBAR",
    description: "Explore a remarkable hidden cave near Kizimkazi, featuring clear water and extraordinary natural scenery.",
    image: "photo-1500530855697-b586d89ba3ee", imageFile: "excursion-secret-cave.jpg", alt: "Natural scenery in warm light",
    highlights: ["Near Kizimkazi", "Clear water", "Natural scenery"]
  },
  {
    title: "Nungwi Beach", category: "Islands & Beaches", tag: "NORTHERN COAST",
    description: "Relax on Zanzibar's beautiful northern coastline, known for white sand and turquoise water.",
    image: "photo-1519046904884-53103b34b206", imageFile: "excursion-nungwi-beach.jpg", alt: "White-sand tropical beach",
    highlights: ["Northern Zanzibar", "White sand", "Turquoise water"]
  },
  {
    title: "Mnemba Island & Dolphins", category: "Ocean Adventures", tag: "REEFS & MARINE LIFE",
    description: "Discover coral reefs and tropical marine life around Mnemba Atoll, with the possibility of spotting wild dolphins. Sightings are not guaranteed.",
    image: "photo-1546026423-cc4642628d2b", imageFile: "excursion-mnemba-dolphins.jpg", alt: "Coral reef beneath clear ocean water",
    highlights: ["Mnemba Atoll", "Coral reefs", "Wild dolphin sightings not guaranteed"]
  },
  {
    title: "Mikumi Safari — Tanzania", category: "Safari & Adventure", tag: "MAINLAND SAFARI",
    description: "Experience a one-day mainland wildlife safari in Mikumi National Park. Look for elephants, giraffes, zebras, buffalo, and lions. Flights and lunch are included.",
    image: "photo-1516426122078-c23e76319801", imageFile: "excursion-mikumi-safari.jpg", alt: "Elephants in an African wildlife landscape",
    highlights: ["Mikumi National Park", "One-day safari", "Flights and lunch included"]
  },
  {
    title: "Stone Town & Forodhani", category: "Culture & Heritage", tag: "HISTORY & CULTURE",
    description: "Explore historic Stone Town, its architecture and cultural heritage, followed by the vibrant Forodhani evening market.",
    image: "photo-1518509562904-e7ef99cdcc86", imageFile: "excursion-stone-town-forodhani.jpg", alt: "Historic coastal destination",
    highlights: ["Historic Stone Town", "Architecture & heritage", "Forodhani evening market"]
  },
  {
    title: "Zakir Wildlife Park", category: "Nature & Wildlife", tag: "WILDLIFE ENCOUNTER",
    description: "Discover animals including giraffes and zebras at Zakir Wildlife Sanctuary.",
    image: "photo-1516426122078-c23e76319801", imageFile: "excursion-zakir-wildlife-park.jpg", imagePosition: "center top", alt: "Wildlife in a natural habitat",
    highlights: ["Zakir Wildlife Sanctuary", "Giraffes", "Zebras"]
  },
  {
    title: "Buggy Tour", category: "Safari & Adventure", tag: "ISLAND ADVENTURE",
    description: "Experience an exciting buggy adventure along rural roads, village routes, and scenic landscapes.",
    image: "photo-1473448912268-2022ce9509d8", imageFile: "excursion-buggy-tour.jpg", alt: "Scenic route through tropical nature",
    highlights: ["Rural roads", "Village routes", "Scenic landscapes"]
  },
  {
    title: "Horse Riding in Zanzibar", category: "Safari & Adventure", tag: "COASTAL ADVENTURE",
    description: "Enjoy a memorable horse-riding experience through tropical surroundings or along the beach, depending on the selected route.",
    image: "photo-1474511320723-9a56873867b5", imageFile: "excursion-horse-riding.jpg", alt: "Horse in a natural landscape",
    highlights: ["Tropical surroundings", "Beach route may be available", "Route depends on selection"]
  },
  {
    title: "Dhow Sunset Trip", category: "Ocean Adventures", tag: "GOLDEN HOUR",
    description: "Watch an unforgettable Indian Ocean sunset aboard a traditional wooden dhow.",
    image: "photo-1500530855697-b586d89ba3ee", imageFile: "excursion-dhow-sunset.jpg", alt: "Sunset over a scenic landscape",
    highlights: ["Traditional wooden dhow", "Indian Ocean sunset", "Evening sailing"]
  },
  {
    title: "Spice Farm Tour", category: "Culture & Heritage", tag: "SPICE ISLAND",
    description: "Discover Zanzibar's spice heritage, including cloves, cinnamon, vanilla, cardamom, and black pepper.",
    image: "photo-1530789253388-582c481c54b0", imageFile: "excursion-spice-farm.jpg", alt: "Lush tropical landscape",
    highlights: ["Zanzibar spice heritage", "Cloves & cinnamon", "Vanilla, cardamom & pepper"]
  },
  {
    title: "Pemba Island — The Green Island", category: "Islands & Beaches", tag: "BEYOND ZANZIBAR",
    description: "Explore Pemba's beautiful beaches, marine environment, local culture, spice plantations, and snorkelling opportunities.",
    image: "photo-1514282401047-d79a71a590e8", imageFile: "excursion-pemba-island.jpg", alt: "Tropical island beach",
    highlights: ["Beaches & marine life", "Local culture", "Spice plantations & snorkelling"]
  },
  {
    title: "Saadani National Park", category: "Safari & Adventure", tag: "COASTAL WILDERNESS",
    description: "Enjoy a mainland safari experience where wilderness meets the coast. Travel arrangements may involve a boat or plane depending on availability. Lunch is included.",
    image: "photo-1516426122078-c23e76319801", imageFile: "excursion-saadani-national-park.jpg", alt: "African wildlife landscape",
    highlights: ["Coastal national park", "Boat or plane arrangements depend on availability", "Lunch included"]
  }
];

const imageUrl = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const localImageUrl = (file) => `assets/images/${file}`;
const encode = (value) => encodeURIComponent(value);
const byName = (name) => tours.find((tour) => tour.title === name);
const toast = document.querySelector("#toast");
let toastTimer;
let gallerySlides = [];
let galleryIndex = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4400);
}

function openWhatsApp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encode(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  showToast("Your request is ready for WhatsApp. Review it before sending; if no tab opens, use the WhatsApp contact button.");
}

function renderTours(filter = "All Experiences") {
  const grid = document.querySelector("#tour-grid");
  const selectedTours = filter === "All Experiences"
    ? tours
    : tours.filter((tour) => tour.category === filter);
  grid.innerHTML = selectedTours.map((tour, index) => `
    <article class="tour-card" style="animation-delay:${Math.min(index * 35, 245)}ms">
      <button class="tour-photo image-loading" type="button" data-tour="${tour.title}" aria-label="View ${tour.title} details">
        <img src="${localImageUrl(tour.imageFile)}" data-fallback="${imageUrl(tour.image, 750)}" style="object-position: ${tour.imagePosition || "center"}" sizes="(max-width: 600px) calc(100vw - 44px), (max-width: 820px) calc(45vw - 30px), (max-width: 1120px) 30vw, 22vw" alt="${tour.alt}" loading="lazy" decoding="async">
        <span class="tour-category">${tour.tag}</span>
      </button>
      <div class="tour-card-body">
        <h3>${tour.title}</h3>
        <p>${tour.description}</p>
        <div class="tour-card-actions">
          <button class="tour-detail-link" type="button" data-tour="${tour.title}">Explore experience <i data-lucide="arrow-up-right"></i></button>
          <a class="tour-whatsapp" href="https://wa.me/${whatsappNumber}?text=${encode(`Hello, I'm interested in the ${tour.title} experience. Please share more details.`)}" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle"></i> Book</a>
        </div>
      </div>
    </article>
  `).join("");
  grid.setAttribute("aria-busy", "false");
  setupImageLoading(grid);
  renderIcons();
}

function renderPlannerChoices() {
  document.querySelector("#planner-excursions").innerHTML = tours.map((tour, index) => `
    <label class="checkbox-option">
      <input type="checkbox" name="excursions" value="${tour.title}" id="excursion-${index}">
      <span>${tour.title}</span>
    </label>
  `).join("");
}

function openTour(name) {
  const tour = byName(name);
  if (!tour) return;
  const modalImage = document.querySelector("#tour-modal-image");
  modalImage.src = localImageUrl(tour.imageFile);
  modalImage.dataset.fallback = imageUrl(tour.image, 1200);
  modalImage.dataset.loading = "";
  delete modalImage.dataset.fallbackApplied;
  modalImage.alt = tour.alt;
  document.querySelector("#tour-modal-category").textContent = tour.category.toUpperCase();
  document.querySelector("#tour-modal-title").textContent = tour.title;
  document.querySelector("#tour-modal-description").textContent = tour.description;
  document.querySelector("#tour-modal-highlights").innerHTML = tour.highlights
    .map((item) => `<span class="modal-highlight">${item}</span>`).join("");
  document.querySelector("#tour-booking-form").dataset.tour = tour.title;
  document.querySelector("#tour-modal").showModal();
  setupImageLoading(document.querySelector("#tour-modal"));
  document.querySelector("#tour-modal .modal-close").focus();
}

function renderIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function setupImageLoading(root = document) {
  root.querySelectorAll("img[data-fallback]").forEach((image) => {
    if (image.dataset.loading === "true") return;
    image.dataset.loading = "true";
    const container = image.closest(".image-loading");
    const finish = (failed = false) => {
      if (!container) return;
      container.classList.remove("image-loading");
      container.classList.toggle("image-failed", failed);
      container.classList.toggle("image-loaded", !failed);
      container.setAttribute("aria-busy", "false");
    };
    if (container) container.setAttribute("aria-busy", "true");

    image.addEventListener("load", () => finish(), { once: true });
    image.addEventListener("error", () => {
      if (!image.dataset.fallbackApplied) {
        image.dataset.fallbackApplied = "true";
        const fallback = image.dataset.fallback;
        if (container?.classList.contains("gallery-item")) container.dataset.image = fallback;
        image.src = fallback;
      } else {
        finish(true);
      }
    });

    if (image.complete) {
      if (image.naturalWidth > 0) {
        finish();
      } else {
        image.dispatchEvent(new Event("error"));
      }
    }
  });
}

function showGallerySlide(index) {
  if (!gallerySlides.length) return;
  galleryIndex = (index + gallerySlides.length) % gallerySlides.length;
  const slide = gallerySlides[galleryIndex];
  document.querySelector("#lightbox-image").src = slide.dataset.image;
  document.querySelector("#lightbox-image").alt = slide.querySelector("img").alt;
  document.querySelector("#lightbox-caption").textContent = slide.dataset.caption;
}

function setupVideoCrossfade() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const videos = [document.querySelector("#bgVideo1"), document.querySelector("#bgVideo2")];
  // Keep the optimized poster visible until authorized hero footage is supplied.
  const sources = [];
  if (sources.length !== videos.length || sources.some((source) => !source)) return;
  let activeIndex = 0;
  let rotationTimer;

  const startVideo = (video, source) => {
    video.src = source;
    video.load();
    video.addEventListener("canplay", () => {
      video.play().then(() => {
        video.classList.add("is-visible");
        document.querySelector(".hero-poster").style.opacity = "0";
      }).catch(() => { /* Keep the poster when autoplay is unavailable. */ });
    }, { once: true });
  };

  const rotate = () => {
    const nextIndex = 1 - activeIndex;
    const next = videos[nextIndex];
    const current = videos[activeIndex];
    next.src = sources[nextIndex];
    next.load();
    next.addEventListener("canplay", () => {
      next.play().then(() => {
        next.classList.add("is-visible");
        current.classList.remove("is-visible");
        window.setTimeout(() => current.pause(), 1300);
        activeIndex = nextIndex;
      }).catch(() => {});
    }, { once: true });
  };

  startVideo(videos[0], sources[0]);
  rotationTimer = window.setInterval(rotate, 18000);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(rotationTimer);
      videos.forEach((video) => video.pause());
    } else {
      videos[activeIndex].play().catch(() => {});
      rotationTimer = window.setInterval(rotate, 18000);
    }
  });
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-chip.is-active")?.classList.remove("is-active");
    button.classList.add("is-active");
    renderTours(button.dataset.filter);
  });
});

document.addEventListener("click", (event) => {
  const tourButton = event.target.closest("[data-tour]");
  if (tourButton && tourButton.id !== "tour-modal-book") {
    openTour(tourButton.dataset.tour);
    return;
  }
  const galleryItem = event.target.closest(".gallery-item");
  if (galleryItem) {
    gallerySlides = [...document.querySelectorAll(".gallery-item")];
    showGallerySlide(gallerySlides.indexOf(galleryItem));
    document.querySelector("#lightbox-modal").showModal();
  }
});

document.querySelectorAll(".modal").forEach((dialog) => {
  dialog.querySelector(".modal-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelector(".lightbox-prev").addEventListener("click", () => showGallerySlide(galleryIndex - 1));
document.querySelector(".lightbox-next").addEventListener("click", () => showGallerySlide(galleryIndex + 1));
document.querySelector("#lightbox-modal").addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    showGallerySlide(galleryIndex + (event.key === "ArrowRight" ? 1 : -1));
  }
});
let galleryTouchStart;
document.querySelector("#lightbox-image").addEventListener("touchstart", (event) => {
  galleryTouchStart = event.changedTouches[0].clientX;
}, { passive: true });
document.querySelector("#lightbox-image").addEventListener("touchend", (event) => {
  if (galleryTouchStart === undefined) return;
  const distance = event.changedTouches[0].clientX - galleryTouchStart;
  galleryTouchStart = undefined;
  if (Math.abs(distance) > 45) showGallerySlide(galleryIndex + (distance < 0 ? 1 : -1));
}, { passive: true });

document.querySelector("[data-open-film]").addEventListener("click", () => {
  document.querySelector("#film-modal").showModal();
});
document.querySelector("#film-modal a").addEventListener("click", () => {
  document.querySelector("#film-modal").close();
});

document.querySelector("#tour-booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = getFormValues(form);
  const message = [
    `Hello Nasi Tour Zanzibar, I'm interested in ${form.dataset.tour}.`,
    `Name: ${data.name}`,
    `Preferred travel date: ${data.date}`,
    `Guests: ${data.guests}`,
    `Requests: ${data.requests || "None"}`
  ].join("\n");
  document.querySelector("#tour-modal").close();
  openWhatsApp(message);
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
  nav.classList.toggle("is-open", !isExpanded);
  menuToggle.innerHTML = `<i data-lucide="${isExpanded ? "menu" : "x"}"></i>`;
  renderIcons();
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    renderIcons();
  });
});

const languageSelect = document.querySelector("#language-select");
let translationReady = false;

function syncLanguageSelect() {
  const translateSelect = document.querySelector(".goog-te-combo");
  if (!translateSelect) return;
  translationReady = true;
  languageSelect.disabled = false;
  const cookie = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-z-]+)/);
  const activeLanguage = cookie ? cookie[1] : "en";
  if ([...languageSelect.options].some((option) => option.value === activeLanguage)) {
    languageSelect.value = activeLanguage;
    document.documentElement.lang = activeLanguage;
    document.documentElement.dir = activeLanguage === "ar" ? "rtl" : "ltr";
  }
}

document.addEventListener("site-translate-ready", syncLanguageSelect);
document.addEventListener("site-translate-error", () => {
  languageSelect.disabled = true;
  languageSelect.title = "Language translation is unavailable right now.";
  showToast("Language options couldn't load. Check your internet connection and refresh to try again.");
});
languageSelect.addEventListener("change", () => {
  const translateSelect = document.querySelector(".goog-te-combo");
  if (!translateSelect) {
    showToast("Language translation is still loading. Please try again in a moment.");
    return;
  }
  const selectedLanguage = languageSelect.value;
  translateSelect.value = selectedLanguage === "en" ? "" : selectedLanguage;
  translateSelect.dispatchEvent(new Event("change", { bubbles: true }));
  document.documentElement.lang = selectedLanguage;
  document.documentElement.dir = selectedLanguage === "ar" ? "rtl" : "ltr";
});
if (document.querySelector(".goog-te-combo")) syncLanguageSelect();
window.setTimeout(() => {
  if (!translationReady) {
    languageSelect.disabled = true;
    languageSelect.title = "Language translation could not be loaded.";
  }
}, 12000);

const header = document.querySelector(".site-header");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-revealed"));
}

function getFormValues(form) {
  return Object.fromEntries(new FormData(form).entries());
}

document.querySelector("#transfer-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = getFormValues(form);
  const message = [
    "Hello Nasi Tour Zanzibar, I'd like to request an airport transfer.",
    `Name: ${data.name}`,
    `Transfer: ${data.type}`,
    `Pick-up: ${data.pickup}`,
    `Destination / hotel: ${data.destination}`,
    `Travel date: ${data.date}`,
    `Flight number: ${data.flight || "Not provided"}`,
    `Passengers: ${data.passengers}`,
    `Luggage: ${data.luggage || "Not provided"}`,
    `Special requests: ${data.requests || "None"}`
  ].join("\n");
  openWhatsApp(message);
});

document.querySelector("#planner-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = getFormValues(form);
  const selected = [...form.querySelectorAll('input[name="excursions"]:checked')].map((input) => input.value);
  const message = [
    "Hello Nasi Tour Zanzibar, I'd like help planning a private trip.",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `WhatsApp: ${data.phone}`,
    `Preferred travel date: ${data.date}`,
    `Adults: ${data.adults}`,
    `Children: ${data.children}`,
    `Experiences of interest: ${selected.length ? selected.join(", ") : "I'd like recommendations"}`,
    `Hotel / pick-up location: ${data.hotel}`,
    `Additional requests: ${data.requests || "None"}`
  ].join("\n");
  openWhatsApp(message);
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = getFormValues(form);
  const subject = `Website enquiry from ${data.name}`;
  const body = `${data.message}\n\nName: ${data.name}\nEmail: ${data.email}`;
  window.location.href = `mailto:nasitourzanzibar@gmail.com?subject=${encode(subject)}&body=${encode(body)}`;
  showToast("Your email app should open with the message ready to send.");
});

const dateInputs = document.querySelectorAll('input[type="date"]');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInputs.forEach((input) => { input.min = localToday; });

renderPlannerChoices();
setupImageLoading();
renderTours();
renderIcons();
setupVideoCrossfade();
