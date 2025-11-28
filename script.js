// ===============================
// NAVBAR TOGGLE (MOBILE)
// ===============================
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      mainNav.classList.remove("open");
    });
  });
}

// ===============================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const el = document.querySelector(targetId);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===============================
// HERO SCROLL + NAVBAR APPEAR
// ===============================
const heroBlock = document.getElementById("heroBlock");
const header = document.getElementById("mainHeader");

// amount of scroll needed for full motion (hero center -> above top)
const HERO_SCROLL_RANGE = 260; // change this for faster/slower movement

// Throttle function to limit scroll event frequency
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

function updateHeroOnScroll() {
  if (!heroBlock || !header) return;

  const scrollY = window.scrollY || window.pageYOffset;

  // progress: 0 at top, 1 after HERO_SCROLL_RANGE px scroll
  const progress = Math.min(Math.max(scrollY / HERO_SCROLL_RANGE, 0), 1);

  // fade hero out as it goes up
  const heroOpacity = 1 - progress; // 1 -> 0
  heroBlock.style.opacity = heroOpacity;

  // HEADER: hidden while hero visible, then fade/slide in
  header.style.opacity = progress; // 0 -> 1
  header.style.transform = `translateY(${(1 - progress) * -100}%)`; // -100% -> 0
}

// attach scroll + initial state with throttling
const throttledScrollHandler = throttle(updateHeroOnScroll, 16); // ~60fps
window.addEventListener("scroll", throttledScrollHandler);
throttledScrollHandler();

// ===============================
// SCROLL REVEAL ANIMATIONS
// ===============================
const observerOptions = {
  threshold: 0.18
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Event cards stagger reveal
const eventCards = document.querySelectorAll(".event-card");
const eventObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = Array.from(eventCards).indexOf(card);
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 140);
        eventObserver.unobserve(card);
      }
    });
  },
  { threshold: 0.18 }
);
eventCards.forEach((card) => eventObserver.observe(card));

// Hospitality cards stagger
const infoCards = document.querySelectorAll(".info-card");
const infoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = Array.from(infoCards).indexOf(card);
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 130);
        infoObserver.unobserve(card);
      }
    });
  },
  { threshold: 0.2 }
);
infoCards.forEach((card) => infoObserver.observe(card));

// Accommodation register button – open Google Form
const accommodationRegister = document.getElementById("accommodationRegister");

// TODO: replace this with your actual Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/your-form-id-here/viewform";

if (accommodationRegister) {
  accommodationRegister.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, "_blank", "noopener");
  });
}

// Transportation steps
const transportSteps = document.querySelectorAll(".transport-step");
const transportObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const step = entry.target;
        const index = Array.from(transportSteps).indexOf(step);
        step.style.transitionDelay = index * 0.12 + "s";
        step.classList.add("visible");
        transportObserver.unobserve(step);
      }
    });
  },
  { threshold: 0.16 }
);
transportSteps.forEach((step) => transportObserver.observe(step));

// Dias table rows (if present)
const diasRows = document.querySelectorAll("#diasBody tr");
if (diasRows.length) {
  const diasObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const row = entry.target;
          const index = Array.from(diasRows).indexOf(row);
          setTimeout(() => {
            row.classList.add("visible");
          }, index * 110);
          diasObserver.unobserve(row);
        }
      });
    },
    { threshold: 0.15 }
  );
  diasRows.forEach((row) => diasObserver.observe(row));

  // highlight current slot
  function highlightCurrentSlot() {
    const now = new Date();
    let closestRow = null;
    let closestTime = Infinity;

    diasRows.forEach((row) => {
      const timeStr = row.getAttribute("data-time");
      if (!timeStr) return;
      const slotTime = new Date(timeStr);
      const diff = slotTime - now;
      if (diff >= 0 && diff < closestTime) {
        closestTime = diff;
        closestRow = row;
      }
    });

    diasRows.forEach((row) => row.classList.remove("highlight"));
    if (closestRow) {
      closestRow.classList.add("highlight");
    }
  }

  highlightCurrentSlot();
  setInterval(highlightCurrentSlot, 60 * 1000);
}

// Contact + map
const contactCards = document.querySelectorAll(".contact-card");
const mapCard = document.querySelector(".map-card");

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        if (card.classList.contains("contact-card")) {
          const index = Array.from(contactCards).indexOf(card);
          card.style.transitionDelay = index * 0.12 + "s";
        }
        card.classList.add("visible");
        contactObserver.unobserve(card);
      }
    });
  },
  { threshold: 0.2 }
);

contactCards.forEach((card) => contactObserver.observe(card));
if (mapCard) contactObserver.observe(mapCard);

// ===============================
// SUB-EVENTS DATA (for popup cards)
// ===============================
const subEvents = {
  technical: [
    {
      name: "TECHFUSION (CSE)",
      link: "techfusion.html",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "AI KSHETRA (CSM)",
      link: "ai-kshetra.html",
      image: "https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "COGNOS (CSD / AI)",
      link: "cognos.html",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "NEXUS OF THINGS (IoT / CSO)",
      link: "nexus-of-things.html",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "TECHNIKOS FESTA (ECE)",
      link: "technikos-festa.html",
      image: "https://images.pexels.com/photos/159220/electronics-electricity-energy-159220.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "VIDYUT TARANG (EEE)",
      link: "vidyut-tarang.html",
      image: "https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "MECHMANTRA (MECH)",
      link: "mechmantra.html",
      image: "https://images.pexels.com/photos/2965260/pexels-photo-2965260.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "CIVIL VARNA (CE)",
      link: "civil-varna.html",
      image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "CheCK (CHE)",
      link: "check.html",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "ByteBizz (CSBS)",
      link: "bytebizz.html",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "MANMEET (MBA)",
      link: "manmeet.html",
      image: "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "CASOIREE (MCA)",
      link: "casoiree.html",
      image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ],

  cultural: [
    {
      name: "Literary",
      link: "literary.html",
      image: "literary.jpg"
    },
    {
      name: "Fine Arts",
      link: "fine-arts.html",
      image: "finearts.jpg"
    },
    {
      name: "Dramatics",
      link: "dramatics.html",
      image: "dramatics.jpg"
    },
    {
      name: "Singing & Music",
      link: "singing.html",
      image: "music.jpg"
    },
    {
      name: "Dance",
      link: "dance.html",
      image: "dance.jpg"
    },
    {
      name: "Tekraft",
      link: "tekraft.html",
      image: "tekraft.jpg"
    },
    {
      name: "Fashion Show",
      link: "https://forms.gle/oQ4R71MWEd9A7PSc9",
      image: "fashion show.jpg"
    }
  ]
};

// ===============================
// SUB-EVENTS MODAL (image cards in popup)
// ===============================
const eventsModal = document.getElementById("eventsModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalEventsList = document.getElementById("modalEventsList");

// attach open handlers for Technical / Cultural cards
eventCards.forEach((card) => {
  const category = card.getAttribute("data-category");
  if (!category || category === "sports") return; // sports goes to its own page

  // whole card click
  card.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openEventsModal(category);
  });

  // CTA button click
  const cta = card.querySelector(".event-cta");
  if (cta) {
    cta.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openEventsModal(category);
    });
  }
});

function openEventsModal(category) {
  if (!eventsModal || !modalTitle || !modalEventsList) return;

  const list = subEvents[category] || [];
  modalEventsList.innerHTML = "";

  if (category === "technical") {
    modalTitle.textContent = "Technical Events";
  } else if (category === "cultural") {
    modalTitle.textContent = "Cultural Events";
  } else {
    modalTitle.textContent = "Events";
  }

  if (list.length > 0) {
    const fragment = document.createDocumentFragment();
    
    list.forEach((ev) => {
      const li = document.createElement("li");

      const card = document.createElement("a");
      card.href = ev.link;
      card.className = "events-modal-card";

      const imgSrc =
        ev.image ||
        "https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=800";

      card.innerHTML = `
        <img src="${imgSrc}" alt="${ev.name}" loading="lazy">
        <div class="events-modal-card-overlay">
          <div class="events-modal-card-title">${ev.name}</div>
          <div class="events-modal-card-type">
            ${category === "technical" ? "Technical Block" : "Cultural Block"}
          </div>
        </div>
      `;

      li.appendChild(card);
      fragment.appendChild(li);
    });
    
    modalEventsList.appendChild(fragment);
  }

  eventsModal.classList.add("visible");
}

function closeEventsModal() {
  if (!eventsModal) return;
  eventsModal.classList.remove("visible");
}

if (modalClose) {
  modalClose.addEventListener("click", closeEventsModal);
}

if (eventsModal) {
  eventsModal.addEventListener("click", (e) => {
    if (e.target === eventsModal) {
      closeEventsModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeEventsModal();
  }
});

// ===============================
// SCROLL INDICATOR FUNCTIONALITY
// ===============================
document.addEventListener("DOMContentLoaded", function() {
  const scrollIndicator = document.querySelector('.scroll-indicator-container');
  
  if (scrollIndicator) {
    // Hide scroll indicator when scrolling begins
    let scrollTimeout;
    window.addEventListener('scroll', function() {
      scrollIndicator.classList.add('hidden');
      
      // Clear timeout if exists
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Show scroll indicator again when scrolling stops
      scrollTimeout = setTimeout(function() {
        scrollIndicator.classList.remove('hidden');
      }, 1000);
    });
    
    // Scroll to events section when clicked
    scrollIndicator.addEventListener('click', function() {
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});
