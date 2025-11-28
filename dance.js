// ==========================
// dance.js — FINAL UPDATED
// Based on COLORIDO 2025 Dance PDF (Pages 1–8)  :contentReference[oaicite:2]{index=2}
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  const COMMON_FORM = "https://forms.gle/5J5oVLhjveo7Qr1k9";

  // STAFF COORDINATORS — from PDF Page 8
  const COMMON_STAFF = [
    "Sri. J. Ranga Raya Chowdary (ME) – 9701730044",
    "Sri. K. Siva Prasada Rao (ChE) – 9640940920",
    "Smt. M. Vasavi (CSE) – 9490114243",
    "Sri. V. Mastan Rao (EEE) – 9492078762"
  ];

  const COMMON_GENERAL_RULES = [
    "All participants must carry their college ID card.",
    "Registration must be done before the commencement of the event.",
    "Any suspicious activity can lead to direct disqualification.",
    "Judges' decision will be final.",
    "Any violation of rules leads to negative marking.",
    "Every event is strictly time-bound."
  ];

  const danceBlock = {
    title: "Dance",
    description:
      "A celebration of culture, rhythm and expression — Classical, Folk, Western & thematic performances take center stage at COLORIDO 2025.",
    venue: "Open Air Theatre",
    staffCoordinators: COMMON_STAFF,

    subEvents: [
      // ============================================================
      // 1. CLASSICAL SOLO — PDF PAGE 1
      // ============================================================
      {
        id: "classical-solo",
        day: 1,
        name: "Classical Dance – Solo",
        tagline: "Showcase the grace and divinity of classical tradition!",
        description:
          "A stage for performers who live and breathe classical dance. Express stories through rhythm, expressions and rich heritage.",

        meta: "Solo · Classical",

        rules: [
          ...COMMON_GENERAL_RULES,
          "No cinematic songs are allowed.",
          "Duration of performance is 4 minutes. Exceeding the time leads to deduction.",
          "Contestant must dress appropriately. Indecent exposure is NOT allowed.",
          "Participants must bring two pen drives to avoid technical disturbance.",
          "Obscene/offensive music or songs are not allowed.",
          "Only one song may be submitted during registration.",
          "Judgment: rhythm, formation, expression, costumes, makeup, sets and overall effect.",
          "Participants must arrange their own makeup and costumes.",
          "In case of tie, a battle round will be conducted with a random song."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dance+Classical+Solo&font=montserrat",
        venue: "Main Stage",
        dateTime: "Festival Day · Classical Slot",
        studentCoordinators: ["Student Coordinator – 9XXXXXXXXX"],
        staffCoordinators: COMMON_STAFF,
        formUrl: COMMON_FORM
      },

      // ============================================================
      // 2. CLASSICAL GROUP — PDF PAGE 2
      // ============================================================
      {
        id: "classical-group",
        day: 1,
        name: "Classical Dance – Group",
        tagline: "Synchrony, grace and rhythm — classical harmony in motion!",
        description:
          "A coordinated celebration of classical dance styles with expressive storytelling and formations.",

        meta: "Group · Classical",

        rules: [
          ...COMMON_GENERAL_RULES,
          "Cross-college teams are not allowed.",
          "No cinematic songs are allowed.",
          "All dancers must be costume-ready one hour before the performance.",
          "Only small accessory props are allowed.",
          "Participants must submit their track 2 days before the event.",
          "Offensive songs are not allowed.",
          "A backup pen drive is recommended.",
          "Group size: minimum 4, maximum 6 dancers.",
          "Duration: 5 minutes only.",
          "Judgment: rhythm, formation, expression, costumes, makeup and overall effect.",
          "Tie → Battle round with random song."
        ],

        prizes: { first: 3000, second: 2000, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dance+Classical+Group&font=montserrat",
        venue: "Main Stage",
        dateTime: "Festival Day · Classical Group Slot",
        studentCoordinators: ["Student Coordinator – 9XXXXXXXXX"],
        staffCoordinators: COMMON_STAFF,
        formUrl: COMMON_FORM
      },

      // ============================================================
      // 3. FOLK SOLO — PDF PAGE 3
      // ============================================================
      {
        id: "folk-solo",
        day: 2,
        name: "Folk Dance – Solo",
        tagline: "Express the spirit of India’s vibrant cultural heritage!",
        description:
          "Folk dance brings alive emotions, culture and regional beauty. A vibrant solo celebration of Indian traditions.",

        meta: "Solo · Folk",

        rules: [
          ...COMMON_GENERAL_RULES,
          "No cinematic songs are allowed.",
          "Duration: 4 minutes.",
          "Dress must be appropriate. Indecent exposure is NOT allowed.",
          "Bring two pen drives to avoid technical issues.",
          "Obscene or offensive songs are prohibited.",
          "Only one song may be submitted during registration.",
          "Judgment: rhythm, formation, expression, costumes, makeup, sets and overall effect.",
          "Tie → Battle round with random song."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dance+Folk+Solo&font=montserrat",
        venue: "Open Stage",
        dateTime: "Festival Day · Folk Solo Slot",
        studentCoordinators: ["Student Coordinator – 9XXXXXXXXX"],
        staffCoordinators: COMMON_STAFF,
        formUrl: COMMON_FORM
      },

      // ============================================================
      // 4. FOLK GROUP — PDF PAGE 4
      // ============================================================
      {
        id: "folk-group",
        day: 2,
        name: "Folk Dance – Group",
        tagline: "Come alive with rich, energetic folk rhythms!",
        description:
          "An expressive group folk category blending culture, colours and powerful traditional storytelling.",

        meta: "Group · Folk",

        rules: [
          ...COMMON_GENERAL_RULES,
          "Cross-college teams are not allowed.",
          "Dancers must be ready 1 hour before the event.",
          "Only small accessory props allowed.",
          "Tracks must be submitted 2 days prior.",
          "Group size: 4 to 10 dancers.",
          "Duration: 5 minutes.",
          "Judgment: rhythm, formation, expressions, costumes, makeup, overall effect.",
          "Tie → Battle round."
        ],

        prizes: { first: 3000, second: 2000, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dance+Folk+Group&font=montserrat",
        venue: "Main Stage",
        dateTime: "Festival Day · Folk Group Slot",
        studentCoordinators: ["Student Coordinator – 9XXXXXXXXX"],
        staffCoordinators: COMMON_STAFF,
        formUrl: COMMON_FORM
      },

      // ============================================================
      // 5. WESTERN SOLO — PDF PAGE 5
      // ============================================================
      {
        id: "western-solo",
        day: 2,
        name: "Western Dance – Solo",
        tagline: "Unleash your freestyle energy and attitude!",
        description:
          "A modern platform for freestyle, hip-hop, contemporary and western dance forms — full of energy and creativity.",

        meta: "Solo · Western",

        rules: [
          ...COMMON_GENERAL_RULES,
          "Duration: 4 minutes.",
          "Dress must be decent; indecent exposure not allowed.",
          "Two pen drives must be brought.",
          "Offensive music is prohibited.",
          "One song must be submitted at registration.",
          "Judgment: rhythm, formation, expression, costumes, makeup and overall effect.",
          "Tie → Battle round."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dance+Western+Solo&font=montserrat",
        venue: "Main Stage",
        dateTime: "Festival Day · Western Solo Block",
        studentCoordinators: ["Student Coordinator – 9XXXXXXXXX"],
        staffCoordinators: COMMON_STAFF,
        formUrl: COMMON_FORM
      },

      // ============================================================
      // 6. WESTERN GROUP — PDF PAGE 6
      // ============================================================
      {
        id: "western-group",
        day: 2,
        name: "Western Dance – Group",
        tagline: "Synchronize creativity and bold western expressions!",
        description:
          "Group western dance filled with high-energy, fusion styles and outstanding stage presence.",

        meta: "Group · Western",

        rules: [
          ...COMMON_GENERAL_RULES,
          "Cross-college teams are not allowed.",
          "Dancers must be costume-ready 1 hour before the event.",
          "Only small accessory props allowed.",
          "Submit audio track 2 days before event.",
          "Group size: 4 to 10 participants.",
          "Duration: 5 minutes.",
          "Judgment: rhythm, formations, expressions, costumes, makeup and overall effect.",
          "Tie → Battle round."
        ],

        prizes: { first: 3000, second: 2000, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dance+Western+Group&font=montserrat",
        venue: "Main Stage",
        dateTime: "Festival Day · Western Group Slot",
        studentCoordinators: ["Student Coordinator – 9XXXXXXXXX"],
        staffCoordinators: COMMON_STAFF,
        formUrl: COMMON_FORM
      },

      // ============================================================
      // 7. CHOREODAY — PDF PAGE 7
      // ============================================================
      {
        id: "choreoday",
        day: 2,
        name: "Choreoday (Theme-Based)",
        tagline: "Tell a story through powerful themed choreography!",
        description:
          "A grand theme-based choreography competition combining storytelling, formations, fusion and creativity.",

        meta: "Group · Theme / Fusion",

        rules: [
          ...COMMON_GENERAL_RULES,
          "Cross-college teams are not allowed.",
          "All dancers should be ready 1 hour prior.",
          "Only small accessory props allowed.",
          "Track must be submitted 2 days before event.",
          "Minimum 10 participants; no maximum limit.",
          "Duration: 10 minutes.",
          "Judgment: rhythm, expression, costumes, makeup, formations and overall impact.",
          "Tie → Battle round with random song."
        ],

        prizes: { first: 10000, second: 6000, third: 4000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dance+Choreoday&font=montserrat",
        venue: "Main Stage · Prime Time",
        dateTime: "Festival Evening · Prime Slot",
        studentCoordinators: ["Student Coordinator – 9XXXXXXXXX"],
        staffCoordinators: COMMON_STAFF,
        formUrl: COMMON_FORM
      }
    ]
  };

  // ============================================================
  //  RENDER EVENT CARDS
  // ============================================================

  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventContainer = document.getElementById("subEventContainer");

  if (trackTitleEl) trackTitleEl.textContent = danceBlock.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = danceBlock.description;

  const createEventCard = (se) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "event-card--sub";

    // Dataset mapping
    card.dataset.name = se.name;
    card.dataset.tagline = se.tagline;
    card.dataset.description = se.description;
    card.dataset.meta = se.meta;
    card.dataset.rules = JSON.stringify(se.rules);
    card.dataset.studentCoords = JSON.stringify(se.studentCoordinators);
    card.dataset.staffCoords = JSON.stringify(se.staffCoordinators);
    card.dataset.prizes = JSON.stringify(se.prizes);
    card.dataset.dateTime = se.dateTime;
    card.dataset.venue = se.venue;
    card.dataset.formUrl = se.formUrl;

    card.innerHTML = `
      <div class="event-card-image-container">
        <img src="${se.imageUrl}" alt="${se.name}" class="event-card-image" loading="lazy" onerror="this.src='https://placehold.co/400x250/1a202c/00f7ff?text=Image+Not+Available&font=montserrat'">
      </div>
      <div class="event-card-content">
        <div class="event-card-sub-name">${se.name}</div>
        <p class="event-card-sub-tagline">${se.tagline}</p>
        <div class="event-card-sub-meta">
          <span>${se.meta}</span>
          <span>Day ${se.day}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openSubeventModal(card));
    return card;
  };

  // ============================================================
  // ORGANIZE EVENTS BY DAY
  // ============================================================
  if (subEventContainer) {
    subEventContainer.innerHTML = "";

    const eventsByDay = danceBlock.subEvents.reduce((acc, ev) => {
      if (!acc[ev.day]) acc[ev.day] = [];
      acc[ev.day].push(ev);
      return acc;
    }, {});

    [1, 2].forEach((day) => {
      if (eventsByDay[day]) {
        const dayTitle = document.createElement("h2");
        dayTitle.className = "day-title";
        dayTitle.textContent = `Day ${day}`;
        subEventContainer.appendChild(dayTitle);

        const grid = document.createElement("div");
        grid.className = "event-grid";

        eventsByDay[day].forEach((ev) => grid.appendChild(createEventCard(ev)));

        subEventContainer.appendChild(grid);
      }
    });
  }

  // ============================================================
  // MODAL LOGIC
  // ============================================================

  // ---------- modal logic ----------
  const modalOverlay = document.getElementById("subeventModalOverlay");
  const modal = document.getElementById("subeventModal");
  const modalTitle = document.getElementById("subeventModalTitle");
  const modalTagline = document.getElementById("subeventModalTagline");
  const rulesList = document.getElementById("subeventRules");
  const studentCoordsList = document.getElementById("subeventStudentCoords");
  const staffCoordsList = document.getElementById("subeventStaffCoords");
  const venueEl = document.getElementById("subeventVenue");
  const dateTimeEl = document.getElementById("subeventDateTime");
  const prizesEl = document.getElementById("subeventPrizes");
  const closeButtons = document.querySelectorAll(".subevent-modal-close-btn");
  const registerBtn = document.getElementById("subeventRegisterBtn");

  let lastFocusedElement = null;
  let keyHandler = null;

  function openSubeventModal(triggerEl) {
    if (!modalOverlay || !modal) return;

    lastFocusedElement = triggerEl;

    const name = triggerEl.dataset.name || "";
    const tagline = triggerEl.dataset.tagline || "";
    const rules = JSON.parse(triggerEl.dataset.rules || "[]");
    const studentCoords = JSON.parse(triggerEl.dataset.studentCoords || "[]");
    const staffCoords = JSON.parse(triggerEl.dataset.staffCoords || "[]");
    const venue = triggerEl.dataset.venue || "";
    const dateTime = triggerEl.dataset.dateTime || "";
    const prizes = JSON.parse(triggerEl.dataset.prizes || "null");
    const formUrl = triggerEl.dataset.formUrl || "#";

    modalTitle.textContent = name;
    modalTagline.textContent = tagline;

    // RULES
    rulesList.innerHTML = "";
    if (rules.length > 0) {
      const fragment = document.createDocumentFragment();
      rules.forEach((rule) => {
        const li = document.createElement("li");
        li.textContent = rule;
        fragment.appendChild(li);
      });
      rulesList.appendChild(fragment);
    }

    // STUDENT COORDS
    studentCoordsList.innerHTML = "";
    if (studentCoords.length > 0) {
      const fragment = document.createDocumentFragment();
      studentCoords.forEach((c) => {
        const li = document.createElement("li");
        li.textContent = c;
        fragment.appendChild(li);
      });
      studentCoordsList.appendChild(fragment);
    }

    // STAFF COORDS
    staffCoordsList.innerHTML = "";
    if (staffCoords.length > 0) {
      const fragment = document.createDocumentFragment();
      staffCoords.forEach((c) => {
        const li = document.createElement("li");
        li.textContent = c;
        fragment.appendChild(li);
      });
      staffCoordsList.appendChild(fragment);
    }

    venueEl.textContent = venue;
    dateTimeEl.textContent = dateTime;
    
    // Format prizes display
    prizesEl.innerHTML = "";
    if (prizes && typeof prizes === "object") {
      const fragment = document.createDocumentFragment();
      
      if (prizes.first) {
        const firstLi = document.createElement("li");
        firstLi.textContent = `1st Prize: ₹${prizes.first}`;
        fragment.appendChild(firstLi);
      }
      
      if (prizes.second) {
        const secondLi = document.createElement("li");
        secondLi.textContent = `2nd Prize: ₹${prizes.second}`;
        fragment.appendChild(secondLi);
      }
      
      if (prizes.third) {
        const thirdLi = document.createElement("li");
        thirdLi.textContent = `3rd Prize: ₹${prizes.third}`;
        fragment.appendChild(thirdLi);
      }
      
      prizesEl.appendChild(fragment);
    } else {
      prizesEl.textContent = prizes || "";
    }

    if (registerBtn) {
      registerBtn.href = formUrl;
    }

    modalOverlay.hidden = false;
    modalOverlay.classList.add("is-open");

    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    keyHandler = function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeSubeventModal();
      } else if (e.key === "Tab" && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    document.addEventListener("keydown", keyHandler);
    if (firstFocusable) firstFocusable.focus();
  }

  function closeSubeventModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("is-open");
    modalOverlay.hidden = true;

    if (keyHandler) {
      document.removeEventListener("keydown", keyHandler);
      keyHandler = null;
    }

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeSubeventModal);
  });

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeSubeventModal();
    });
  }

});
