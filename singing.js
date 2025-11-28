// singing.js
// Singing & Music – Classical Solo, Western Solo, Light Music Solo, Classical Group, Western Group, Music Band

document.addEventListener("DOMContentLoaded", () => {
  // one common form link for all singing events
  const COMMON_SINGING_FORM = "https://forms.gle/aTUQEWRMiCyKwUJT7";

  const singing = {
    title: "Singing & Music",
    description:
      "Vocal music competitions in classical, western, light music, group songs, and bands.",
    venue: "SJB Seminar Hall",
    staffCoordinators: [
      "Dr. V. Ramakoteswara Rao, ME – 9949943488",
      "Sri. P. Siddhartha, MBA – 9491611567",
      "Dr. Y. Sumanth, EEE – 9948198771"
    ],
    subEvents: [
      {
        id: "classical-solo",
        name: "Swaranjali(solo)",
        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Singing+Classical+Solo&font=montserrat",
        tagline: "Solo classical vocal performance (Indian classical).",
        meta: "Individual · Classical vocal",
        day: 1,
        rules: [
          "Specific Rules",
          "Presentation should be strictly non-cine.",
          "Time limit is 3 mins.",
          "No Orchestra will be provided.",
          "Karaoke is prohibited."
        ],
        studentCoordinators: [
          "Student Coord – Classical Solo 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Classical Solo 1"
        ],
        venue: "Music Hall / Auditorium.",
        dateTime: "Festival day · classical slot to be announced.",
        prizes: "1st: ₹2,000 · 2nd: ₹1,500 · 3rd: ₹1,000.",
        formUrl: COMMON_SINGING_FORM
      },
      {
        id: "western-solo",
        name: "Rock-Raaga(Solo)",
        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Singing+Western+Solo&font=montserrat",
        tagline:
          "Solo western vocal performance in English or permitted language.",
        meta: "Individual · Western vocal",
        day: 1,
        rules: [
          "All the Participants should carry their college ID Card.",
          "Registration must be done before the commencement of the event.",
          "Any suspicious doing can lead direct disqualification.",
          "Judges decision will be final.",
          "Any Violation of rules leads to negative marking.",
          "Every event is strictly time bound.",
          "Group should have at least 4 members and must not exceed 6 members",
          "Time limit is 5 mins.",
          "No Orchestra will be provided.",
          "Karaoke is prohibited."
        ],
        studentCoordinators: [
          "Student Coord – Western Solo 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Western Solo 1"
        ],
        venue: "Main Stage / Music Hall.",
        dateTime: "Festival day · western solo slot.",
        prizes: "1st: ₹1,500 · 2nd: ₹1,000 · 3rd: ₹500.",
        formUrl: COMMON_SINGING_FORM
      },
      {
        id: "light-solo",
        name: "Ra-p-Ublic",
        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Singing+Rap+Battle&font=montserrat",
        tagline: "Solo rap performance showcasing rhythm, rhyme, and storytelling.",
        meta: "Individual · Rap",
        day: 1,
        rules: [
          "Individual participation only.",
          "Performers must showcase their original rap compositions or approved freestyle.",
          "Time limit is 3-4 minutes including setup and performance.",
          "Use of explicit language, offensive content, or hate speech is strictly prohibited.",
          "Participants may perform with or without instrumental backing tracks.",
          "Judging criteria include flow, rhythm, lyrical content, stage presence, and audience engagement.",
          "Participants must submit their backing track (if any) in the required format and time frame.",
          "Judges' decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Rap 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Rap 1"
        ],
        venue: "Main Stage / Music Hall.",
        dateTime: "Festival day · rap battle slot.",
        prizes: "1st: ₹2,000 · 2nd: ₹1,500 · 3rd: ₹1,000.",
        formUrl: COMMON_SINGING_FORM
      },
      {
        id: "classical-group",
        name: "Swaranjali(Group)",
        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Singing+Classical+Group&font=montserrat",
        tagline: "Group classical/Indian group song performance.",
        meta: "Group · Classical / Indian group song",
        day: 2,
        rules: [
          "Group should have at least 4 members and must not exceed 6 members.",
          "Presentation should be strictly non-cine.",
          "Time limit is 5 mins.",
          "No Orchestra will be provided.",
          "Karaoke is prohibited."
        ],
        studentCoordinators: [
          "Student Coord – Classical Group 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Classical Group 1"
        ],
        venue: "Main Stage.",
        dateTime: "Festival day · classical group slot.",
        prizes: "1st: ₹3,000 · 2nd: ₹2,000 · 3rd: ₹1,000.",
        formUrl: COMMON_SINGING_FORM
      },
      {
        id: "western-group",
        name: "Rock-Raaga(Group)",
        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Singing+Western+Group&font=montserrat",
        tagline:
          "Western group song with harmonies and live/backing accompaniment.",
        meta: "Group · Western group song",
        day: 2,
        rules: [
          "Group participation with defined minimum and maximum number of singers (e.g., 4–8) and accompanists (e.g., up to 3).",
          "Songs should be in English or as per guidelines; lyrics must be clean and non‑offensive.",
          "Live accompaniment is preferred; karaoke tracks may be allowed subject to rules.",
          "Time limit for performance (e.g., 4–6 minutes) must be followed strictly.",
          "The group should maintain pitch, rhythm, and tight coordination; harmonies are encouraged.",
          "Any kind of explicit, abusive, or inappropriate lyrics will lead to disqualification.",
          "Judging criteria include vocal arrangement, tightness, expression, and stage presence.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Western Group 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Western Group 1"
        ],
        venue: "Auditorium / Main Stage.",
        dateTime: "Festival day · western group slot.",
        prizes: "1st: ₹3,000 · 2nd: ₹2,000 · 3rd: ₹1,000.",
        formUrl: COMMON_SINGING_FORM
      },
      {
        id: "music-band",
        name: "Band-Storm",
        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Music+Band+Performance&font=montserrat",
        tagline:
          "Band competition showcasing live instrumental and vocal performance.",
        meta: "Band · Live music",
        day: 2,
        rules: [
          "All the Participants should carry their college ID Card.",
          "Registration must be done before the commencement of the event.",
          "Any suspicious doing can lead direct disqualification.",
          "Judges decision will be final.",
          "Any Violation of rules leads to negative marking.",
          "Every event is strictly time bound."
        ],
        studentCoordinators: [
          "Student Coord – Music Band 1 · 9XXXXXXXXX",
          "Student Coord – Music Band 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Music Band 1"
        ],
        venue: "Main Stage / Open Air Stage.",
        dateTime: "Festival day · band evening slot.",
        prizes: ["1st: ₹3,000.",
        "2nd: ₹2,000.",
        "3rd: ₹1,000."
        ],
        formUrl: COMMON_SINGING_FORM
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventContainer = document.getElementById("subEventContainer");

  if (trackTitleEl) trackTitleEl.textContent = singing.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = singing.description;

  const createEventCard = (se) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "event-card--sub";

    // dataset for modal
    card.dataset.name = se.name;
    card.dataset.tagline = se.tagline;
    card.dataset.meta = se.meta || "";
    card.dataset.rules = JSON.stringify(se.rules || []);
    card.dataset.studentCoords = JSON.stringify(se.studentCoordinators || []);
    card.dataset.staffCoords = JSON.stringify(se.staffCoordinators || []);
    card.dataset.venue = se.venue || "";
    card.dataset.dateTime = se.dateTime || "";
    card.dataset.prizes = JSON.stringify(se.prizes || "");
    card.dataset.formUrl = se.formUrl || "#";

    card.innerHTML = `
      <div class="event-card-image-container">
        <img src="${se.imageUrl}" alt="${se.name}" class="event-card-image" loading="lazy" onerror="this.src='https://placehold.co/400x250/1a202c/00f7ff?text=Image+Not+Available&font=montserrat'">
      </div>
      <div class="event-card-content">
        <div class="event-card-sub-name">${se.name}</div>
        <p class="event-card-sub-tagline">${se.tagline}</p>
        <div class="event-card-sub-meta">
          <span>${se.meta || ""}</span>
          <span>Day ${se.day || 1}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openSubeventModal(card));
    return card;
  };

  if (subEventContainer) {
    subEventContainer.innerHTML = "";

    // group events by numeric day: 1, 2
    const eventsByDay = singing.subEvents.reduce((acc, event) => {
      const dayKey = String(event.day || 1);
      if (!acc[dayKey]) acc[dayKey] = [];
      acc[dayKey].push(event);
      return acc;
    }, {});

    const containerFragment = document.createDocumentFragment();
    
    ["1", "2"].forEach((day) => {
      if (eventsByDay[day] && eventsByDay[day].length > 0) {
        const dayTitle = document.createElement("h2");
        dayTitle.className = "day-title";
        dayTitle.textContent = `Day ${day}`;
        containerFragment.appendChild(dayTitle);

        const grid = document.createElement("div");
        grid.className = "event-grid"; // use your existing grid class
        
        const gridFragment = document.createDocumentFragment();
        eventsByDay[day].forEach((se) => gridFragment.appendChild(createEventCard(se)));
        grid.appendChild(gridFragment);
        containerFragment.appendChild(grid);
      }
    });
    
    subEventContainer.appendChild(containerFragment);
  }

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
      // Handle object prizes with first/second/third properties
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
    } else if (Array.isArray(prizes)) {
      // Handle array prizes
      const fragment = document.createDocumentFragment();
      prizes.forEach(prize => {
        const li = document.createElement("li");
        li.textContent = prize;
        fragment.appendChild(li);
      });
      prizesEl.appendChild(fragment);
    } else {
      // Handle string prizes
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