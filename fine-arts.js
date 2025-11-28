// ==========================
// fine-arts.js — FINAL UPDATED
// Based on COLORIDO 2025 Fine Arts PDF (Pages 1–6)  :contentReference[oaicite:1]{index=1}
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  const FORM_URL = "https://forms.gle/uEnfvmkpHXeUV2EC8";

  // STAFF COORDINATORS — from PDF PAGE 6
  const COMMON_STAFF = [
    "Dr. P. Samatha Chowdary (CE) – 9849948311",
    "Smt. M. Sunitha (ECE) – 9573297310",
    "Dr. V. Sujatha Lakshmi (MCA) – 9441834758",
    "Smt. P. Vanisree (ECE) – 8897020224",
    "Sri. G.R.N. Chowdary (ME) – 9848384828"
  ];

  // COMMON GENERAL RULES — from all PDF pages
  const GENERAL_RULES = [
    "All participants must carry their college ID card.",
    "Registration must be done before the commencement of the event.",
    "Any suspicious activity can lead to direct disqualification.",
    "Judges' decision will be final.",
    "Any violation of rules leads to negative marking.",
    "Every event is strictly time-bound.",
    "Cross-college teams are not allowed unless specified."
  ];

  const fineArts = {
    title: "Fine Arts",
    description:
      "Creative challenges across Mehandi, Rangoli, Soap Carving, Conceptual Painting, Origami and Face Painting — where imagination meets skill.",
    venue: "Silver Jubilee Block Portico",
    staffCoordinators: COMMON_STAFF,

    subEvents: [

      // ============================================================
      // 1. MEHANDI — PDF PAGE 1
      // ============================================================
      {
        id: "mehandi",
        day: 2,
        name: "Mehandi",
        tagline: "Express tradition with beautiful, intricate henna art!",

        description:
          "A creative henna design contest where participants showcase traditional and artistic Mehandi patterns within a limited time frame.",
        
        meta: "Individual · Mehandi Design",

        rules: [
          ...GENERAL_RULES,
          "This is an individual event.",
          "Required material will be provided.",
          "Time limit should not exceed 1.5 hours."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Fine+Arts+Mehandi&font=montserrat",
        venue: "Design / Activity Hall",
        dateTime: "Festival Day · Mehandi Slot",
        studentCoordinators: [
          "Student Coord – Mehandi 1 · 9XXXXXXXXX",
          "Student Coord – Mehandi 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: COMMON_STAFF,
        formUrl: FORM_URL
      },

      // ============================================================
      // 2. CONCEPTUAL PAINTING — PDF PAGE 2
      // ============================================================
      {
        id: "conceptual-painting",
        day: 2,
        name: "Conceptual Painting",
        tagline: "Turn ideas into expressive visuals through themed painting!",

        description:
          "Conceptual painting emphasizes ideas and meaning rather than pure aesthetics, encouraging artists to communicate themes visually.",

        meta: "Individual · Painting",

        rules: [
          ...GENERAL_RULES,
          "This is an individual event.",
          "Theme is given by EC & CCC.",
          "Time limit should not exceed 2 hours.",
          "Paints, charts and basic brushes will be provided.",
          "Participants must bring their own additional supplies."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Fine+Arts+Painting&font=montserrat",
        venue: "Fine Arts Hall / Drawing Studio",
        dateTime: "Festival Day · Painting Slot",
        studentCoordinators: [
          "Student Coord – Conceptual Painting 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: COMMON_STAFF,
        formUrl: FORM_URL
      },

      // ============================================================
      // 3. ORIGAMI — PDF PAGE 3
      // ============================================================
      {
        id: "origami-art",
        day: 1,
        name: "Origami Art",
        tagline: "Create wonders with the pure art of paper folding!",

        description:
          "Origami transforms simple sheets of paper into intricate models using geometric folds and creativity.",

        meta: "Individual · Paper Folding",

        rules: [
          ...GENERAL_RULES,
          "This is an individual event.",
          "Chart and scissors will be supplied.",
          "Time limit should not exceed 1.5 hours."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Fine+Arts+Origami&font=montserrat",
        venue: "Fine Arts Classroom / Hall",
        dateTime: "Festival Day · Origami Slot",
        studentCoordinators: [
          "Student Coord – Origami 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: COMMON_STAFF,
        formUrl: FORM_URL
      },

      // ============================================================
      // 4. SOAP CARVING — PDF PAGE 4
      // ============================================================
      {
        id: "soap-carving",
        day: 1,
        name: "Soap Carving",
        tagline: "Carve delicate sculptures from simple soap blocks!",

        description:
          "Soap carving is a delicate sculpting art using simple tools to create expressive and detailed forms.",

        meta: "Individual · Sculpture",

        rules: [
          ...GENERAL_RULES,
          "This is an individual event.",
          "Soap and needle will be supplied.",
          "Time limit should not exceed 1.5 hours."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Fine+Arts+Soap+Carving&font=montserrat",
        venue: "Fine Arts Workshop / Lab",
        dateTime: "Festival Day · Soap Carving Slot",
        studentCoordinators: [
          "Student Coord – Soap Carving 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: COMMON_STAFF,
        formUrl: FORM_URL
      },

      // ============================================================
      // 5. RANGOLI — PDF PAGE 5
      // ============================================================
      {
        id: "rangoli",
        day: 2,
        name: "Rangoli",
        tagline: "Design vibrant rangoli patterns filled with color and culture!",

        description:
          "Rangoli is a creative floor-art form where participants design colorful motifs within a limited time using traditional materials.",

        meta: "Teams of 2 · Floor Art",

        rules: [
          ...GENERAL_RULES,
          "Team size is 2 members only.",
          "Minimum material will be provided.",
          "Time limit should not exceed 1.5 hours."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Fine+Arts+Rangoli&font=montserrat",
        venue: "Open Corridor / Courtyard",
        dateTime: "Festival Day · Rangoli Slot",
        studentCoordinators: [
          "Student Coord – Rangoli 1 · 9XXXXXXXXX",
          "Student Coord – Rangoli 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: COMMON_STAFF,
        formUrl: FORM_URL
      },

      // ============================================================
      // 6. FACE PAINTING — PDF PAGE 6
      // ============================================================
      {
        id: "face-painting",
        day: 1,
        name: "Face Painting",
        tagline: "Transform faces with creativity and color!",

        description:
          "An artistic contest where participants paint unique designs on their partner’s face based on a theme.",

        meta: "Teams of 2 · Face Art",

        rules: [
          "Team size is limited to 2 members.",
          "Cross-college teams are not allowed.",
          "Time limit is 1.5 hours.",
          "Judges' decision is final.",
          "Minimum colours and brushes will be supplied.",
          "The team must contain 2 members only.",
          "Time limit should not exceed 1.5 hours."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Fine+Arts+Face+Painting&font=montserrat",
        venue: "Fine Arts Hall",
        dateTime: "Festival Day · Face Painting Slot",
        studentCoordinators: [
          "Student Coord – Face Painting 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: COMMON_STAFF,
        formUrl: FORM_URL
      }
    ]
  };

  // ============================================================
  //  RENDER EVENT CARDS
  // ============================================================

  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventContainer = document.getElementById("subEventContainer");

  if (trackTitleEl) trackTitleEl.textContent = fineArts.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = fineArts.description;

  const createEventCard = (se) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "event-card--sub";

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

    const eventsByDay = fineArts.subEvents.reduce((acc, ev) => {
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
