// casoiree.js
// CASOIREE (MCA) – TechTales, Web Weave

document.addEventListener("DOMContentLoaded", () => {
  const casoiree = {
    title: "CASOIREE (MCA)",
    description:
      "MCA department events focused on storytelling with technology and creative web experiences.",
    subEvents: [
      {
        id: "techtales",
        name: "TechTales",
        tagline: "Storytelling event where participants narrate tech journeys, case studies, or conceptual stories.",
        meta: "Individual or Teams of 2 · Tech storytelling",
        rules: [
          "Open to MCA and other interested students with valid college ID cards.",
          "Participation may be individual or in teams of 2, as decided by organizers.",
          "Stories can be based on real projects, fictional tech scenarios, or lessons from technology failures/successes.",
          "Each participant/team will get a fixed time slot for narration or presentation.",
          "Use of simple slides or props is allowed, subject to time and facility constraints.",
          "Content must remain decent and professional; no offensive language or visuals.",
          "Evaluation criteria include originality, clarity, structure, technical relevance, and delivery.",
          "Plagiarized or copied talks (e.g., from TED videos, blogs) are not allowed.",
          "Judges’ decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – TechTales 1 · 9XXXXXXXXX",
          "Student Coord – TechTales 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – TechTales 1 · MCA"
        ],
        venue: "MCA Seminar Hall.",
        dateTime: "26 December · 10:00 AM – 1:00 PM (tentative).",
        prizes: "Cash prizes and ‘Best Tech Tale’ certificates.",
        formUrl: "https://docs.google.com/forms/d/TECHTALES_FORM_ID/viewform"
      },
      {
        id: "web-weave",
        name: "Web Weave",
        tagline: "Web design / front‑end contest focusing on UI/UX and responsive layouts.",
        meta: "Individual or Teams of 2 · Web design",
        rules: [
          "Participation may be individual or in teams of 2 students.",
          "Participants will design a web page or mini website based on a theme/problem provided by organizers.",
          "Front‑end technologies such as HTML, CSS, and JavaScript can be used; specific frameworks may be allowed or restricted.",
          "Important evaluation factors are responsiveness, accessibility basics, visual hierarchy, and usability.",
          "Judges may inspect both the design and underlying code for structure and cleanliness.",
          "Pre‑built templates must be significantly customized; pure template usage is discouraged and may reduce marks.",
          "Participants must submit their files and demonstrate the site on provided systems.",
          "Any plagiarism from online templates without meaningful changes is not allowed.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Web Weave 1 · 9XXXXXXXXX",
          "Student Coord – Web Weave 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Web Weave 1 · MCA"
        ],
        venue: "MCA Computer Lab.",
        dateTime: "27 December · 10:00 AM – 1:00 PM (tentative).",
        prizes: "Cash prizes and ‘Best Web Design’ certificates.",
        formUrl: "https://docs.google.com/forms/d/WEB_WEAVE_FORM_ID/viewform"
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = casoiree.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = casoiree.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    casoiree.subEvents.forEach((se, index) => {
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
      card.dataset.prizes = se.prizes || "";
      card.dataset.formUrl = se.formUrl || "#";

      card.innerHTML = `
        <div>
          <div class="event-card-sub-name">${se.name}</div>
          <p class="event-card-sub-tagline">${se.tagline}</p>
        </div>
        <div class="event-card-sub-meta">
          <span>${se.meta || ""}</span>
          <span>#${index + 1}</span>
        </div>
      `;

      card.addEventListener("click", () => openSubeventModal(card));
      subEventGrid.appendChild(card);
    });
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
    const prizes = triggerEl.dataset.prizes || "";
    const formUrl = triggerEl.dataset.formUrl || "#";

    modalTitle.textContent = name;
    modalTagline.textContent = tagline;

    rulesList.innerHTML = "";
    rules.forEach((rule) => {
      const li = document.createElement("li");
      li.textContent = rule;
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
    prizesEl.textContent = prizes;

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
