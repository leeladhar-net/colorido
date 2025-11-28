// vidyut-tarang.js
// VIDYUT TARANG (EEE) – Coulomb Convergence, Watt‑Whiz, Amp‑Architect, Volt‑Vox

document.addEventListener("DOMContentLoaded", () => {
  const vidyut = {
    title: "VIDYUT TARANG (EEE)",
    description:
      "EEE technical events covering power systems, electrical machines, design of circuits, and energy‑themed quizzes.",
    subEvents: [
      {
        id: "coulomb-convergence",
        name: "Coulomb Convergence",
        tagline: "Power‑systems and electrical‑engineering problem‑solving contest.",
        meta: "Teams of 2–3 · Power systems",
        rules: [
          "Open to all EEE and related‑branch students with valid college ID card.",
          "Teams of 2–3 participants; team composition cannot be changed after registration.",
          "Problems may include load flow, fault analysis, protection, and basic design calculations.",
          "Round format may consist of written problems, case‑studies, or interactive problem‑solving.",
          "Use of scientific calculators is allowed; mobile phones or smart devices are not.",
          "Time limits for each round will be clearly announced; late submissions will not be accepted.",
          "Any malpractice or copying from other teams will attract disqualification.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Coulomb Convergence 1 · 9XXXXXXXXX",
          "Student Coord – Coulomb Convergence 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Coulomb Convergence 1 · EEE"
        ],
        venue: "Power Systems Lab – EEE Block.",
        dateTime: "26 December · 10:00 AM – 12:30 PM (tentative).",
        prizes: "Cash prizes and certificates for winning teams.",
        formUrl: "https://docs.google.com/forms/d/COULOMB_CONVERGENCE_FORM_ID/viewform"
      },
      {
        id: "watt-whiz",
        name: "Watt‑Whiz",
        tagline: "Energy and electrical‑engineering quiz contest.",
        meta: "Teams of 2 · Quiz",
        rules: [
          "Teams of exactly 2 participants from the same institution.",
          "Quiz questions will cover basic circuits, machines, power electronics, renewable energy, and general science.",
          "Event may have prelims followed by stage rounds (MCQ, buzzer, rapid‑fire, picture rounds).",
          "Use of mobile phones or smart devices during the quiz is strictly prohibited.",
          "Teams must adhere to time limits and instructions of the quizmaster.",
          "Tie‑breaker questions will be used if necessary.",
          "Any attempt to cheat will result in disqualification.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Watt‑Whiz 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Watt‑Whiz 1 · EEE"
        ],
        venue: "EEE Seminar Hall.",
        dateTime: "26 December · Afternoon session (tentative).",
        prizes: "Cash prizes, certificates, and mementos for top teams.",
        formUrl: "https://docs.google.com/forms/d/WATT_WHIZ_FORM_ID/viewform"
      },
      {
        id: "amp-architect",
        name: "Amp‑Architect",
        tagline: "Design‑oriented contest for electrical installations or machine‑related setups.",
        meta: "Teams of 2–3 · Design contest",
        rules: [
          "Teams of 2–3 participants; registration must be completed before the event day.",
          "Problem statements may include designing distribution systems, panel layouts, or basic drive systems.",
          "Teams must work out ratings, protection schemes, and basic layout as required.",
          "Submissions may include single‑line diagrams, calculations, and brief explanations.",
          "Judging criteria include practicality, safety, standards compliance (where applicable), and innovation.",
          "Use of standard data books / charts is allowed; internet access may be restricted.",
          "Any copied or non‑original designs may be rejected.",
          "Judges’ decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Amp‑Architect 1 · 9XXXXXXXXX",
          "Student Coord – Amp‑Architect 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Amp‑Architect 1 · EEE"
        ],
        venue: "Design / Drawing Hall – EEE Block.",
        dateTime: "27 December · 10:00 AM – 1:00 PM (tentative).",
        prizes: "Best design awards with cash prizes and certificates.",
        formUrl: "https://docs.google.com/forms/d/AMP_ARCHITECT_FORM_ID/viewform"
      },
      {
        id: "volt-vox",
        name: "Volt‑Vox",
        tagline: "Presentation / speaking event on power and energy themes.",
        meta: "Individual · Tech talk / elocution",
        rules: [
          "Individual participation only.",
          "Topics will relate to emerging trends in power systems, renewable energy, smart grids, and sustainability.",
          "Participants may choose a topic from a suggested list or propose their own (subject to approval).",
          "Each participant will be given a fixed time slot for speech / presentation followed by short Q&A.",
          "Evaluation criteria include content, technical depth, clarity, body language, and time management.",
          "Reading entirely from notes is discouraged and may reduce marks.",
          "Use of slides is allowed if facility is available, but participants must manage within allotted time.",
          "Any offensive or inappropriate content is not permitted.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Volt‑Vox 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Volt‑Vox 1 · EEE"
        ],
        venue: "EEE Lecture Hall / Mini Seminar Hall.",
        dateTime: "27 December · 2:00 PM – 4:30 PM (tentative).",
        prizes: "Cash prizes and ‘Best Speaker’ certificates.",
        formUrl: "https://docs.google.com/forms/d/VOLT_VOX_FORM_ID/viewform"
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = vidyut.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = vidyut.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    vidyut.subEvents.forEach((se, index) => {
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
