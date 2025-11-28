// nexus-of-things.js
// NEXUS OF THINGS (CSE IoT / CSO) – Error Erase, Idea Arena, Sensor ShowDown, InnovWEB

document.addEventListener("DOMContentLoaded", () => {
  const nexus = {
    title: "NEXUS OF THINGS (CSE IoT / CSO)",
    description:
      "Events focusing on IoT, embedded systems, debugging, idea pitching, sensor interfacing, and web‑IoT integration.",
    subEvents: [
      {
        id: "error-erase",
        name: "Error Erase",
        tagline: "Debugging challenge on IoT / embedded C / microcontroller code.",
        meta: "Individual or Team of 2 · Debugging",
        rules: [
          "Open to UG and PG students with valid college ID cards.",
          "Participation may be individual or in teams of two, as announced by organizers.",
          "Participants will be given faulty code / configurations related to IoT or embedded systems.",
          "Points are awarded based on number of errors identified and corrected within the time limit.",
          "Use of internet and external code repositories is not allowed unless explicitly permitted.",
          "All solutions must be written on the provided systems or sheets.",
          "Any malpractice or discussion with other teams during the round leads to disqualification.",
          "Decisions of judges and organizers are final."
        ],
        studentCoordinators: [
          "Student Coord – Error Erase 1 · 9XXXXXXXXX",
          "Student Coord – Error Erase 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Error Erase 1 · CSE IoT / CSO"
        ],
        venue: "IoT / Embedded Systems Lab – CSE Block.",
        dateTime: "26 December · 10:00 AM – 12:00 PM (tentative).",
        prizes: "Cash prizes and certificates for top performers.",
        formUrl: "https://docs.google.com/forms/d/ERROR_ERASE_FORM_ID/viewform"
      },
      {
        id: "idea-arena",
        name: "Idea Arena",
        tagline: "Idea pitching event for innovative IoT and connected‑system solutions.",
        meta: "Teams of 2–3 · Idea Pitch",
        rules: [
          "Teams of 2–3 students; all members must be pre‑registered.",
          "Ideas must use IoT / sensors / connectivity as a core component.",
          "Teams should prepare a short presentation or poster explaining problem, proposed solution, architecture, and impact.",
          "Optional demo or prototype is encouraged and will carry extra weightage.",
          "Time limits for presentation and Q&A will be announced on the day of event.",
          "Evaluation criteria include originality, feasibility, technical soundness, and societal impact.",
          "Plagiarism or copying existing products without significant improvement is not allowed.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Idea Arena 1 · 9XXXXXXXXX",
          "Student Coord – Idea Arena 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Idea Arena 1 · CSE IoT / CSO"
        ],
        venue: "Innovation Hub / Seminar Hall – CSE Block.",
        dateTime: "26 December · 2:00 PM – 4:30 PM (tentative).",
        prizes: "Cash prizes and ‘Best Idea’ certificates.",
        formUrl: "https://docs.google.com/forms/d/IDEA_ARENA_FORM_ID/viewform"
      },
      {
        id: "sensor-showdown",
        name: "Sensor ShowDown",
        tagline: "Hands‑on event to build and tune sensor‑based IoT prototypes.",
        meta: "Teams of 2–3 · Hardware build",
        rules: [
          "Teams of 2–3 students are allowed; mixed‑branch teams are permitted if organizers allow.",
          "Basic sensors, microcontroller boards, and common components will be provided (exact list announced earlier).",
          "Teams must design and implement a small working prototype using the provided hardware.",
          "Focus is on correct interfacing, sensor calibration, and meaningful output / visualization.",
          "Time will be allotted for building and a short demo to judges.",
          "Teams are responsible for safe handling of all hardware; any damages may need to be compensated.",
          "External pre‑assembled kits are not allowed unless permitted.",
          "Judging will consider innovation, stability of prototype, and explanation.",
          "Judges’ decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Sensor ShowDown 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Sensor ShowDown 1 · CSE IoT / CSO"
        ],
        venue: "IoT Hardware Lab – CSE Block.",
        dateTime: "27 December · 10:00 AM – 1:00 PM (tentative).",
        prizes: "Cash prizes and hardware goodies for winning teams.",
        formUrl: "https://docs.google.com/forms/d/SENSOR_SHOWDOWN_FORM_ID/viewform"
      },
      {
        id: "innovweb",
        name: "InnovWEB",
        tagline: "Web + IoT integration event for building dashboards or control interfaces.",
        meta: "Teams of 2–3 · Web‑IoT build",
        rules: [
          "Teams of 2–3 students; at least one member should be comfortable with web development.",
          "Participants design a simple web interface to monitor or control IoT devices / simulated data.",
          "Back‑end / front‑end stack (e.g., Node.js, Python, plain JS) will be specified or restricted by organizers.",
          "Emphasis is on responsive UI, real‑time updates (where possible), and clear visualization.",
          "Teams must host or run their demo locally for judges to review.",
          "Use of templates is allowed but must be customized significantly.",
          "Security and reliability considerations will be appreciated and may gain extra credit.",
          "Any plagiarism from open‑source dashboards without customization may lead to disqualification.",
          "Judges' decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – InnovWEB 1 · 9XXXXXXXXX",
          "Student Coord – InnovWEB 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – InnovWEB 1 · CSE IoT / CSO"
        ],
        venue: "Web / IoT Integration Lab – CSE Block.",
        dateTime: "27 December · 2:00 PM – 5:00 PM (tentative).",
        prizes: "Cash prizes and ‘Best Dashboard’ certificates.",
        formUrl: "https://docs.google.com/forms/d/INNOVWEB_FORM_ID/viewform"
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = nexus.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = nexus.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    nexus.subEvents.forEach((se, index) => {
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
