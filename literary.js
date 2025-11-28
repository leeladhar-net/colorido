// ==========================
// literary.js — FINAL UPDATED
// With structured prizes + universal form link
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  const FORM_URL = "https://forms.gle/QT6ZUApe72pSeumt6";

  const staffCoordinators = [
    "Dr. D. Rajani, M&H – 9014415069",
    "Sri. K. Sudhakar, English – 9493424184",
    "Ms. A. Mahalakshmi, CSBS – 8886368289"
  ];

  const literary = {
    title: "Literary Events",
    description:
      "Showcase your verbal quick thinking, argument skills, vocabulary and creativity through our Literary Track.",
    venue: "Cyber & Digital Block Seminar Halls",
    staffCoordinators,

    subEvents: [
      // ================================
      // 1 — JAM
      // ================================
      {
        id: "jam",
        name: "JAM (Just A Minute)",
        day: 1,
        tagline: "A high-energy one-minute speaking challenge full of wit and spontaneity.",
        description:
          "In JAM, participants must speak for one uninterrupted minute on a given topic while avoiding hesitation, repetition and deviation.",
        meta: "Individual · 1-minute Speaking",

        rules: [
          "Individual participation only.",
          "Topics are given on the spot.",
          "Participants must speak for one full minute.",
          "Interruptions may be raised by others for repetition, hesitation or deviation.",
          "Valid interruptions gain points.",
          "Offensive or personal comments are strictly prohibited.",
          "Judge/JAM master's decision is final."
        ],

        prizes: { first: 1500, second: 1000, third: 500 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Literary+JAM&font=montserrat",
        venue: "Literary Arena / Seminar Hall",
        dateTime: "Festival Day · Session to be announced",
        studentCoordinators: [
          "Student Coord – JAM 1 · 9XXXXXXXXX",
          "Student Coord – JAM 2 · 9XXXXXXXXX"
        ],
        staffCoordinators,
        formUrl: FORM_URL
      },

      // ================================
      // 2 — Debate
      // ================================
      {
        id: "debate",
        name: "Debate",
        day: 1,
        tagline: "A structured argument battle on current issues and thought-provoking topics.",
        description:
          "Participants argue for or against a topic with logical reasoning, rebuttals and strong communication.",
        meta: "Teams or Individuals · Debate",

        rules: [
          "Teams or individual format will be announced beforehand.",
          "Topics may be announced in advance or on the spot.",
          "Time limits for each round must be strictly followed.",
          "Rebuttals must remain respectful.",
          "Reading entirely from notes is discouraged.",
          "Judging is based on logic, delivery, confidence and rebuttal strength.",
          "Judges' decision is final."
        ],

        prizes: { first: 1500, second: 1000, third: 500 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Literary+Debate&font=montserrat",
        venue: "Auditorium / Literary Hall",
        dateTime: "Festival Day · Debate Slot",
        studentCoordinators: [
          "Student Coord – Debate 1 · 9XXXXXXXXX",
          "Student Coord – Debate 2 · 9XXXXXXXXX"
        ],
        staffCoordinators,
        formUrl: FORM_URL
      },

      // ================================
      // 3 — Spell Bee
      // ================================
      {
        id: "spell-bee",
        name: "Spell Bee",
        day: 1,
        tagline: "Test your vocabulary, focus and sharp listening!",
        description:
          "A spelling competition conducted in multiple rounds with increasing difficulty.",
        meta: "Individual · Vocabulary Contest",

        rules: [
          "Individual participation only.",
          "Participants must spell words correctly within the given time.",
          "Pronouncer may repeat or use the word in a sentence.",
          "No electronic devices or notes are allowed.",
          "Elimination or point-based format will be announced on-spot.",
          "Pronouncer's and judges' decisions are final."
        ],

        prizes: { first: 1500, second: 1000, third: 500 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Literary+Spell+Bee&font=montserrat",
        venue: "Lecture Hall / Literary Room",
        dateTime: "Festival Day · Spell Bee Slot",
        studentCoordinators: [
          "Student Coord – Spell Bee 1 · 9XXXXXXXXX"
        ],
        staffCoordinators,
        formUrl: FORM_URL
      },

      // ================================
      // 4 — Image Description
      // ================================
      {
        id: "image-description",
        name: "Image Description",
        day: 1,
        tagline: "Describe, imagine and narrate the story behind the image!",
        description:
          "Participants observe an image or collage and creatively describe it in speech or writing.",
        meta: "Individual · Creative Interpretation",

        rules: [
          "Individual participation only.",
          "Participants must describe or interpret the displayed image within the given time.",
          "Judging is based on creativity, coherence, originality and language.",
          "Offensive or inappropriate descriptions are not allowed.",
          "Time limits will be strictly followed.",
          "Judges' decision is final."
        ],

        prizes: { first: 1500, second: 1000, third: 500 },

        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Literary+Image+Description&font=montserrat",
        venue: "Literary / Fine Arts Hall",
        dateTime: "Festival Day · Image Description Slot",
        studentCoordinators: [
          "Student Coord – Image Description 1 · 9XXXXXXXXX"
        ],
        staffCoordinators,
        formUrl: FORM_URL
      }
    ]
  };

  // ============================================================
  // Render Cards
  // ============================================================

  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventContainer = document.getElementById("subEventContainer");

  if (trackTitleEl) trackTitleEl.textContent = literary.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = literary.description;

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
    const eventsByDay = {};

    literary.subEvents.forEach((ev) => {
      if (!eventsByDay[ev.day]) eventsByDay[ev.day] = [];
      eventsByDay[ev.day].push(ev);
    });

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
  // Modal Logic
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
