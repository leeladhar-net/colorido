// ==========================
// dramatics.js — FINAL UPDATED (PDF-Accurate)
// Based on COLORIDO 2025 Dramatics PDF  :contentReference[oaicite:1]{index=1}
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  const FORM_URL = "https://forms.gle/uEnfvmkpHXeUV2EC8";

  // STAFF COORDINATORS (from PDF page 4)
  const STAFF = [
    "Dr. A. Yaswanth Kumar, IT – 9966049619",
    "Dr. Sreeram Nimmagadda, Physics – 9296259370"
  ];

  // GENERAL RULES (common across all dramatics events — PDF pages 1–4)
  const GENERAL = [
    "All participants should carry their college ID Card.",
    "Registration must be done before the commencement of the event.",
    "Any suspicious doing can lead to direct disqualification.",
    "Judges’ decision will be final.",
    "Violation of rules leads to negative marking.",
    "Every event is strictly time-bound.",
    "Cross-college teams are not allowed."
  ];

  const dramatics = {
    title: "Dramatics",
    description:
      "Showcasing expressive performance arts — Skit, Stand-up Comedy, Mime, and Scene Recreation.",
    venue: "New Auditorium (SAC)",
    staffCoordinators: STAFF,

    subEvents: [

      // =========================================
      // 1 — SKIT (Group) — PDF Page 1
      // =========================================
      {
        id: "skit",
        day: 2,
        name: "Skit (Group)",
        tagline: "A lively short theatrical performance with humor, emotions and impactful storytelling.",
        
        description:
          "Skit is a short dramatic performance mixing humor, expressive acting, and creative storytelling. Teams present exaggerated characters and meaningful narratives.",

        meta: "Group · Drama",

        rules: [
          ...GENERAL,
          "Team should consist of 5–10 members.",
          "Performance time should not exceed 10 minutes.",
          "Languages allowed: English, Hindi, Telugu.",
          "No vulgar moments or indecent content."
        ],

        prizes: { first: 3000, second: 2000, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dramatics+Skit&font=montserrat",
        venue: "New Auditorium (SAC)",
        dateTime: "Festival Day · Evening Slot",
        studentCoordinators: [
          "Student Coord – Skit 1 · 9XXXXXXXXX",
          "Student Coord – Skit 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: STAFF,
        formUrl: FORM_URL
      },

      // =========================================
      // 2 — STAND-UP COMEDY — PDF Page 2
      // =========================================
      {
        id: "standup-comedy",
        day: 1,
        name: "Stand-up Comedy",
        tagline: "Bring out your humor and take the spotlight with your funniest punchlines!",

        description:
          "A laughter-filled event looking for talented comedians who can entertain the audience with wit, timing and originality.",

        meta: "Individual · Comedy",

        rules: [
          ...GENERAL,
          "Participants are judged on content, fluency, spontaneity, presentation, and humor.",
          "No vulgar or offensive moments allowed.",
          "Performance must follow the event’s time limit."
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dramatics+Standup+Comedy&font=montserrat",
        venue: "New Auditorium (SAC)",
        dateTime: "Festival Day · Evening Slot",
        studentCoordinators: [
          "Student Coord – Stand-up Comedy 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: STAFF,
        formUrl: FORM_URL
      },

      // =========================================
      // 3 — SCENE RECREATION — PDF Page 3
      // =========================================
      {
        id: "scene-recreation",
        day: 1,
        name: "Scene Recreation",
        tagline: "Recreate iconic cinematic or theatrical scenes with expressive performance.",

        description:
          "Teams recreate memorable scenes from plays or movies, focusing on authenticity, expressions, and portrayal of characters.",

        meta: "Group · Acting",

        rules: [
          ...GENERAL,
          "Team size must not exceed 12 members.",
          "Performance time must not exceed 8 minutes.",
          "No vulgar or indecent scenes.",
        ],

        prizes: { first: 2000, second: 1500, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dramatics+Scene+Recreation&font=montserrat",
        venue: "New Auditorium (SAC)",
        dateTime: "Festival Day · Afternoon Slot",
        studentCoordinators: [
          "Student Coord – Scene Recreation 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: STAFF,
        formUrl: FORM_URL
      },

      // =========================================
      // 4 — MIME (Group) — PDF Page 4
      // =========================================
      {
        id: "mime",
        day: 1,
        name: "Mime (Group)",
        tagline: "Tell powerful stories using only expressions, gestures and movement.",

        description:
          "Mime is a silent art where performers convey emotions, stories and ideas using expressive body movements alone.",

        meta: "Group · Silent Act",

        rules: [
          ...GENERAL,
          "Team should consist of 5–10 members.",
          "Performance must not exceed 7 minutes.",
          "Languages allowed (if concept required): English, Hindi, Telugu.",
          "No vulgarity or offensive gestures."
        ],

        prizes: { first: 3000, second: 2000, third: 1000 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Dramatics+Mime&font=montserrat",
        venue: "New Auditorium (SAC)",
        dateTime: "Festival Day · Afternoon Slot",
        studentCoordinators: [
          "Student Coord – Mime 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: STAFF,
        formUrl: FORM_URL
      }
    ]
  };

  // ============================================================
  // RENDER CARDS
  // ============================================================

  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventContainer = document.getElementById("subEventContainer");

  if (trackTitleEl) trackTitleEl.textContent = dramatics.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = dramatics.description;

  function createEventCard(se) {
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
  }

  if (subEventContainer) {
    subEventContainer.innerHTML = "";

    const eventsByDay = dramatics.subEvents.reduce((acc, ev) => {
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
  // MODAL LOGIC (unchanged — your popups)
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
