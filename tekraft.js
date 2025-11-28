// tekraft.js
// Tekraft – Capture in the Moment, Social Media Endorsement, Cartoon Creation

document.addEventListener("DOMContentLoaded", () => {
  const tekraft = {
    title: "Tekraft",
    description:
      "Creative and tech-driven contests blending photography, digital media, and visual storytelling.",
    venue: "Seminar Hall – Decennial Block",
    staffCoordinators: [
      "Sri. V. Sudhakar, CSD – 9989515989",
      "Ms. K. Radhika, CSM – 7981672760",
      "Sri. K. Balakrishna, CSO – 9502479009"
    ],

    subEvents: [
      // ---------------------- CAPTURE IN THE MOMENT ----------------------
      {
        id: "capture-in-the-moment",
        name: "Capture in the Moment",
        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Tekraft+Capture+Moment&font=montserrat",
        tagline:
          "A themed spot-photography challenge to test creativity and visual storytelling.",
        day: 1,
        meta: "Individual · Photography",

        rules: [
          "Individual participation only.",
          "Theme will be announced on the spot.",
          "Participants must capture photos within the given time limit.",
          "Only basic editing such as cropping and exposure fixing is permitted.",
          "Heavy editing, AI-generated imagery, or composite photos are not allowed.",
          "Photos must be original and taken within the campus during the event.",
          "Judging criteria: creativity, composition, theme relevance, and clarity.",
          "Participants must carry their own mobile phones or cameras.",
          "Judges' decision will be final."
        ],

        studentCoordinators: [
          "Student Coord – Capture in the Moment 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: ["Faculty Coord – Capture in the Moment 1"],

        venue: "College Campus",
        dateTime: "Festival day · Morning slot",

        prizes: {
          first: 1500,
          second: 1000,
          third: 500
        },

        formUrl: "https://forms.gle/EkdcMQorBmHjikYi6"
      },

      // ---------------------- SOCIAL MEDIA ENDORSEMENT ----------------------
      {
        id: "social-media-endorsement",
        name: "Social Media Endorsement",
        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Tekraft+Social+Media&font=montserrat",
        tagline:
          "Create a compelling social-media campaign based on a given product or theme.",
        day: 1,
        meta: "Individual / Team (2) · Digital Marketing",

        rules: [
          "Individual or team participation (maximum 2 members).",
          "A product / topic will be given on the spot.",
          "Participants must create a marketing-style post, caption, or short concept.",
          "Campaign must be original and suitable for social platforms.",
          "Offensive or sensitive content is strictly not allowed.",
          "Judging criteria: creativity, clarity, marketing impact, and presentation.",
          "Participants must complete their work within the allotted time.",
          "Use of AI tools is permitted only for idea generation—NOT for full content creation.",
          "Judges' decision is final."
        ],

        studentCoordinators: [
          "Student Coord – Social Media Endorsement 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: ["Faculty Coord – Social Media Endorsement 1"],

        venue: "Computer Lab / Seminar Hall",
        dateTime: "Festival day · Afternoon session",

        prizes: {
          first: 1500,
          second: 1000,
          third: 500
        },

        formUrl: "https://forms.gle/EkdcMQorBmHjikYi6"
      },

      // ---------------------- CARTOON CREATION ----------------------
      {
        id: "cartoon-creation",
        name: "Cartoon Creation",
        imageUrl: "https://placehold.co/400x250/1a202c/00f7ff?text=Tekraft+Cartoon+Creation&font=montserrat",
        tagline:
          "Bring characters to life through creative hand-drawn or digital cartoon design.",
        day: 1,
        meta: "Individual · Drawing / Digital Art",

        rules: [
          "Individual participation only.",
          "Theme will be provided on the spot.",
          "Participants may draw traditionally or use digital tools.",
          "Artwork must be original and created during the event.",
          "AI-generated drawings or traced images are not permitted.",
          "Judging criteria: creativity, humor, theme alignment, and artistic skill.",
          "Participants must bring required drawing tools or digital devices.",
          "Submission must be completed within the assigned time.",
          "Judges' decision is final."
        ],

        studentCoordinators: [
          "Student Coord – Cartoon Creation 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: ["Faculty Coord – Cartoon Creation 1"],

        venue: "Fine Arts Classroom / Computer Lab",
        dateTime: "Festival day · Afternoon slot",

        prizes: {
          first: 3000,
          second: 2000,
          third: 1000
        },

        formUrl: "https://forms.gle/EkdcMQorBmHjikYi6"
      }
    ]
  };

  // -------------------- RENDER CARDS --------------------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventContainer = document.getElementById("subEventContainer");

  if (trackTitleEl) trackTitleEl.textContent = tekraft.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = tekraft.description;

  const createEventCard = (se) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "event-card--sub";

    card.dataset.name = se.name;
    card.dataset.tagline = se.tagline;
    card.dataset.meta = se.meta;
    card.dataset.rules = JSON.stringify(se.rules || []);
    card.dataset.studentCoords = JSON.stringify(se.studentCoordinators || []);
    card.dataset.staffCoords = JSON.stringify(se.staffCoordinators || []);
    card.dataset.venue = se.venue || "";
    card.dataset.dateTime = se.dateTime || "";
    card.dataset.prizes = JSON.stringify(se.prizes || {});
    card.dataset.formUrl = se.formUrl || "#";

    card.innerHTML = `
      <div class="event-card-image-container">
        <img src="${se.imageUrl}" alt="${se.name}"
          class="event-card-image"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x250/1a202c/00f7ff?text=Image+Not+Available'">
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

  if (subEventContainer) {
    subEventContainer.innerHTML = "";

    const eventsByDay = tekraft.subEvents.reduce((acc, event) => {
      const day = event.day || 1;
      if (!acc[day]) acc[day] = [];
      acc[day].push(event);
      return acc;
    }, {});

    const containerFragment = document.createDocumentFragment();

    [1, 2].forEach((day) => {
      if (eventsByDay[day] && eventsByDay[day].length > 0) {
        const dayTitle = document.createElement("h2");
        dayTitle.className = "day-title";
        dayTitle.textContent = `Day ${day}`;
        containerFragment.appendChild(dayTitle);

        const grid = document.createElement("div");
        grid.className = "event-grid";

        const gridFragment = document.createDocumentFragment();
        eventsByDay[day].forEach((se) =>
          gridFragment.appendChild(createEventCard(se))
        );

        grid.appendChild(gridFragment);
        containerFragment.appendChild(grid);
      }
    });

    subEventContainer.appendChild(containerFragment);
  }

  // -------------------- MODAL LOGIC (UNCHANGED) --------------------
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
  const closeButtons =
    document.querySelectorAll(".subevent-modal-close-btn");
  const registerBtn = document.getElementById("subeventRegisterBtn");

  let lastFocusedElement = null;
  let keyHandler = null;

  function openSubeventModal(triggerEl) {
    if (!modalOverlay || !modal) return;

    lastFocusedElement = triggerEl;

    const name = triggerEl.dataset.name;
    const tagline = triggerEl.dataset.tagline;
    const rules = JSON.parse(triggerEl.dataset.rules);
    const studentCoords = JSON.parse(triggerEl.dataset.studentCoords);
    const staffCoords = JSON.parse(triggerEl.dataset.staffCoords);
    const venue = triggerEl.dataset.venue;
    const dateTime = triggerEl.dataset.dateTime;
    const prizes = JSON.parse(triggerEl.dataset.prizes || "null");
    const formUrl = triggerEl.dataset.formUrl;

    modalTitle.textContent = name;
    modalTagline.textContent = tagline;

    rulesList.innerHTML = "";
    rules.forEach((r) => {
      const li = document.createElement("li");
      li.textContent = r;
      rulesList.appendChild(li);
    });

    studentCoordsList.innerHTML = "";
    studentCoords.forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c;
      studentCoordsList.appendChild(li);
    });

    staffCoordsList.innerHTML = "";
    staffCoords.forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c;
      staffCoordsList.appendChild(li);
    });

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

    registerBtn.href = formUrl;

    modalOverlay.hidden = false;
    modalOverlay.classList.add("is-open");

    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();

    keyHandler = function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeSubeventModal();
      }
    };

    document.addEventListener("keydown", keyHandler);
  }

  function closeSubeventModal() {
    modalOverlay.classList.remove("is-open");
    modalOverlay.hidden = true;

    if (keyHandler) {
      document.removeEventListener("keydown", keyHandler);
      keyHandler = null;
    }

    if (lastFocusedElement) lastFocusedElement.focus();
  }

  closeButtons.forEach((btn) =>
    btn.addEventListener("click", closeSubeventModal)
  );

  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeSubeventModal();
  });
});
