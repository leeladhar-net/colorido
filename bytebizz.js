// bytebizz.js
// ByteBizz (CSBS) – Bizzovate, InnoReel

document.addEventListener("DOMContentLoaded", () => {
  const byteBizz = {
    title: "ByteBizz (CSBS)",
    description:
      "CSBS technical‑cum‑business events focusing on startup ideas, business models, and creative tech storytelling.",
    subEvents: [
      {
        id: "bizzovate",
        name: "Bizzovate",
        tagline: "Business idea pitching contest where technology meets entrepreneurship.",
        meta: "Teams of 2–4 · Startup / idea pitch",
        rules: [
          "Open to UG and PG students from all departments; at least one member from CSBS is recommended (can be relaxed by organizers).",
          "Teams of 2–4 members; registration with full team details is mandatory.",
          "Each team must propose a tech‑enabled business idea or product with a clear problem statement and solution.",
          "Teams should prepare a concise pitch deck covering problem, solution, target customers, revenue model, and basic go‑to‑market.",
          "Pitch duration and Q&A time will be announced (for example, 5 minutes pitch + 3 minutes Q&A).",
          "Use of offensive or plagiarized content is not allowed; borrowed ideas must be properly referenced.",
          "Evaluation criteria include problem clarity, innovation, feasibility, business model, and presentation.",
          "Any malpractice or misrepresentation may result in disqualification.",
          "Judges' decision will be final and binding."
        ],
        studentCoordinators: [
          "Student Coord – Bizzovate 1 · 9XXXXXXXXX",
          "Student Coord – Bizzovate 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Bizzovate 1 · CSBS"
        ],
        venue: "CSBS Seminar Hall / Innovation Hub.",
        dateTime: "26 December · 10:00 AM – 1:00 PM (tentative).",
        prizes: "Cash prizes and ‘Best Startup Pitch’ certificates.",
        formUrl: "https://docs.google.com/forms/d/BIZZOVATE_FORM_ID/viewform"
      },
      {
        id: "innoreel",
        name: "InnoReel",
        tagline: "Short‑video / reel‑style contest to showcase tech‑business ideas creatively.",
        meta: "Individual or Teams of 2–3 · Video / reel contest",
        rules: [
          "Participation can be individual or in teams of 2–3; every participant must be registered.",
          "Teams must create a short video / reel (duration and format will be specified) presenting a tech or business‑innovation theme.",
          "Content can be explanatory, storytelling, demo‑style, or promotional, but must stay within decent and professional boundaries.",
          "Background music, voice‑over, and simple effects are allowed; ensure you have rights to use any third‑party assets.",
          "Videos must be submitted before the deadline through the method specified by organizers.",
          "Entries will be screened for relevance, originality, clarity of message, editing, and overall impact.",
          "Any inappropriate, copyrighted, or plagiarized content will be disqualified.",
          "Selected entries may be played during the fest; organizers reserve the right to edit for time.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – InnoReel 1 · 9XXXXXXXXX",
          "Student Coord – InnoReel 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – InnoReel 1 · CSBS"
        ],
        venue: "Screening in CSBS Seminar Hall (submissions online).",
        dateTime: "27 December · Screening / results slot to be announced.",
        prizes: "Cash prizes and ‘Best InnoReel’ awards.",
        formUrl: "https://docs.google.com/forms/d/INNOREEL_FORM_ID/viewform"
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = byteBizz.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = byteBizz.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    byteBizz.subEvents.forEach((se, index) => {
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
