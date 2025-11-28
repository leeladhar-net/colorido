// mechmantra.js
// MECHMANTRA (MECH) – Paper Presentation, The Lord and the Lady, Robo‑Race, Yantralayam, Design Contest

document.addEventListener("DOMContentLoaded", () => {
  const mechmantra = {
    title: "MECHMANTRA (MECH)",
    description:
      "Mechanical engineering events on research, creativity, robotics, fabrication, and design thinking.",
    subEvents: [
      {
        id: "paper-presentation",
        name: "Paper Presentation",
        tagline: "Technical paper presentation on recent advances in mechanical engineering.",
        meta: "Teams of 2 · Paper presentation",
        rules: [
          "Open to UG and PG students from Mechanical and related disciplines.",
          "Maximum of 2 authors per paper; all authors must register.",
          "Papers must be original; plagiarism will result in rejection.",
          "Abstract / full paper format (e.g., IEEE) and last date of submission will be notified.",
          "Selected papers will be invited for oral presentation during the fest.",
          "Presentation time and Q&A duration will be announced on the schedule.",
          "Participants must bring presentation slides on USB / upload as instructed.",
          "Judging criteria include novelty, technical depth, clarity, and delivery.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Paper Presentation 1 · 9XXXXXXXXX",
          "Student Coord – Paper Presentation 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Paper Presentation 1 · MECH"
        ],
        venue: "Mechanical Seminar Hall.",
        dateTime: "26 December · Forenoon session (tentative).",
        prizes: "Cash prizes and ‘Best Paper’ certificates.",
        formUrl: "https://docs.google.com/forms/d/MECH_PAPER_FORM_ID/viewform"
      },
      {
        id: "lord-and-lady",
        name: "The Lord and the Lady",
        tagline: "Creative event combining technical knowledge with presentation / personality.",
        meta: "Individual · Theme‑based performance",
        rules: [
          "Individual participation; pre‑registration is mandatory.",
          "Rounds may include technical quiz, public speaking, and fun tasks with mech themes.",
          "Participants may be evaluated on technical awareness, communication, creativity, and stage presence.",
          "Dress code / theme guidelines (if any) will be informed in advance.",
          "Use of inappropriate language or behavior is strictly prohibited.",
          "Shortlisting rounds may be held if entries are many.",
          "Final judging will be done by a panel; decisions are final."
        ],
        studentCoordinators: [
          "Student Coord – Lord & Lady 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Lord & Lady 1 · MECH"
        ],
        venue: "Auditorium / Open Stage.",
        dateTime: "27 December · Evening slot (tentative).",
        prizes: "Titles, sashes, and prizes for ‘Lord’ and ‘Lady’ of MECHMANTRA.",
        formUrl: "https://docs.google.com/forms/d/LORD_LADY_FORM_ID/viewform"
      },
      {
        id: "robo-race",
        name: "Robo‑Race",
        tagline: "Line‑following or obstacle‑race challenge for manually / autonomously controlled robots.",
        meta: "Teams of 3–4 · Robotics race",
        rules: [
          "Teams of 3–4 students; robots must be built by the team.",
          "Exact robot size, weight, and power constraints will be specified in event rules.",
          "Race track may include curves, ramps, and obstacles; details shown before the event.",
          "Robots may be wired / wireless as per category announced.",
          "Time taken, penalties for touching boundaries, and completion of obstacles decide the score.",
          "Teams must not interfere with other robots or tracks.",
          "Any unsafe design or violation of rules may lead to disqualification.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Robo‑Race 1 · 9XXXXXXXXX",
          "Student Coord – Robo‑Race 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Robo‑Race 1 · MECH"
        ],
        venue: "Mechanical Grounds / Robo‑Race Arena.",
        dateTime: "26 & 27 December · Slots will be scheduled.",
        prizes: "Cash prizes and trophies for fastest and best‑designed robots.",
        formUrl: "https://docs.google.com/forms/d/ROBORACE_FORM_ID/viewform"
      },
      {
        id: "yantralayam",
        name: "Yantralayam",
        tagline: "Workshop or hands‑on fabrication / assembly challenge.",
        meta: "Teams of 2–3 · Fabrication / workshop",
        rules: [
          "Participants must follow all workshop safety rules and wear safety gear provided.",
          "Event may involve tasks such as assembling mechanisms, measuring tolerances, or simple fabrication.",
          "Tools and raw materials will be provided; personal tools may be allowed if approved.",
          "Scoring based on accuracy, workmanship, and completion within time.",
          "Any unsafe operation of machines will not be tolerated.",
          "Teams must keep their work area clean and return tools after use.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Yantralayam 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Yantralayam 1 · MECH"
        ],
        venue: "Mechanical Workshop / Lab.",
        dateTime: "27 December · Forenoon session (tentative).",
        prizes: "Best workshop performer awards with certificates.",
        formUrl: "https://docs.google.com/forms/d/YANTRALAYAM_FORM_ID/viewform"
      },
      {
        id: "design-contest",
        name: "Design Contest",
        tagline: "CAD or concept‑design competition for mechanical components / systems.",
        meta: "Individual or Teams of 2 · Design / CAD",
        rules: [
          "Participants will be given a design problem (component, mechanism, or system).",
          "Design must be modeled using approved CAD software or on drawing sheets as specified.",
          "Evaluation criteria include correctness, innovation, manufacturability, and neatness.",
          "If using software, files must be saved and submitted as instructed.",
          "Participants should not copy designs from others or online sources.",
          "Time limits are strict; late submissions may face penalties.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Design Contest 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Design Contest 1 · MECH"
        ],
        venue: "CAD Lab / Design Hall – MECH Block.",
        dateTime: "26 or 27 December · exact slot to be announced.",
        prizes: "Cash prizes and ‘Best Designer’ certificates.",
        formUrl: "https://docs.google.com/forms/d/DESIGN_CONTEST_FORM_ID/viewform"
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = mechmantra.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = mechmantra.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    mechmantra.subEvents.forEach((se, index) => {
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
