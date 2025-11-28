// technikos-festa.js
// TECHNIKOS FESTA (ECE) – 8 sub‑events with reusable modal

document.addEventListener("DOMContentLoaded", () => {
  const teknikos = {
    title: "TECHNIKOS FESTA (ECE)",
    description:
      "Electronics and communication events themed around circuits, communication, puzzles, and innovation.",
    subEvents: [
      {
        id: "mind-maze",
        name: "Mind Maze",
        tagline: "Circuit and ECE‑concept puzzle challenge.",
        meta: "Teams of 2–3 · Quiz / puzzle",
        rules: [
          "Open to all ECE and other branch students with valid college ID.",
          "Teams of 2–3 participants; no changes in team composition after registration.",
          "Questions cover basic to moderate ECE topics such as signals, communications, digital logic, and circuits.",
          "Event may include MCQs, visual puzzles, and small numerical problems.",
          "Use of calculators or any electronic devices will be as per organizers' instructions.",
          "Time limits are strictly enforced for each round.",
          "Malpractice or copying from other teams will lead to disqualification.",
          "Judges' and quiz masters' decisions are final."
        ],
        studentCoordinators: [
          "Student Coord – Mind Maze 1 · 9XXXXXXXXX",
          "Student Coord – Mind Maze 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Mind Maze 1 · ECE"
        ],
        venue: "ECE Seminar Hall.",
        dateTime: "26 December · 10:00 AM – 12:00 PM (tentative).",
        prizes: "Cash prizes and certificates for top 3 teams.",
        formUrl: "https://docs.google.com/forms/d/MIND_MAZE_FORM_ID/viewform"
      },
      {
        id: "venor-kaito",
        name: "Venor Kaito",
        tagline: "Treasure‑hunt style event with ECE‑based clues.",
        meta: "Teams of 3–4 · Campus hunt",
        rules: [
          "Teams of 3–4 students.",
          "Each clue will be related to electronics concepts, symbols, or lab equipment.",
          "Teams must follow the route and safety instructions provided by organizers.",
          "Running in unsafe areas or damaging college property is strictly prohibited.",
          "Using mobile phones for searching answers may be restricted as per rules announced.",
          "The team that completes all clues in the least time with correct answers wins.",
          "In case of tie, tie‑breaker tasks or time stamps will be used.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Venor Kaito 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Venor Kaito 1 · ECE"
        ],
        venue: "Starting point – ECE Block lobby (rest across campus).",
        dateTime: "26 December · Afternoon session (tentative).",
        prizes: "Cash prizes and goodies for winning teams.",
        formUrl: "https://docs.google.com/forms/d/VENOR_KAITO_FORM_ID/viewform"
      },
      {
        id: "micro-mission",
        name: "Micro Mission",
        tagline: "Microcontroller / embedded‑system mini‑project challenge.",
        meta: "Teams of 2–3 · Embedded build",
        rules: [
          "Teams of 2–3 students; at least one member must know embedded C or similar.",
          "Microcontroller boards and basic components will be provided or prescribed in advance.",
          "Problem statements (e.g., simple controller, display, or sensor task) will be given at the start.",
          "Teams must design, implement, and demonstrate a working solution within the given time.",
          "Participants must take care while handling hardware; any damage may be chargeable.",
          "Use of internet may be restricted to documentation only, if allowed.",
          "Evaluation based on correctness, robustness, and documentation.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Micro Mission 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Micro Mission 1 · ECE"
        ],
        venue: "Microprocessor & Microcontroller Lab – ECE Block.",
        dateTime: "27 December · 9:30 AM – 1:00 PM (tentative).",
        prizes: "Cash prizes and ‘Best Embedded Solution’ certificates.",
        formUrl: "https://docs.google.com/forms/d/MICRO_MISSION_FORM_ID/viewform"
      },
      {
        id: "figo-circuito",
        name: "Figo Circuito",
        tagline: "Circuit design and troubleshooting competition.",
        meta: "Teams of 2–3 · Circuit design",
        rules: [
          "Participants will design, analyze, or troubleshoot analog / digital circuits.",
          "Datasheets, component values, and necessary instruments will be provided in the lab.",
          "Use of simulation tools may be allowed depending on round format.",
          "Scoring based on correctness, efficiency, and explanation of design choices.",
          "Teams must strictly follow lab safety rules.",
          "Any mishandling of lab equipment may lead to penalties or disqualification.",
          "Judges’ decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Figo Circuito 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Figo Circuito 1 · ECE"
        ],
        venue: "Circuits Lab – ECE Block.",
        dateTime: "27 December · 2:00 PM – 4:30 PM (tentative).",
        prizes: "Cash prizes and lab‑based mementos.",
        formUrl: "https://docs.google.com/forms/d/FIGO_CIRCUITO_FORM_ID/viewform"
      },
      {
        id: "meta-matrix",
        name: "Meta Matrix",
        tagline: "Signal processing / communication systems themed event.",
        meta: "Teams of 2–3 · DSP / comms tasks",
        rules: [
          "Questions and tasks may involve basic DSP, modulation schemes, and communication concepts.",
          "Teams must solve analytical problems or simple MATLAB / simulation‑style tasks.",
          "Round structure (quiz / problem solving / mini‑project) will be informed in advance.",
          "Participants should not use unauthorized electronic devices during the contest.",
          "Evaluation focuses on conceptual clarity and problem‑solving steps.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Meta Matrix 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Meta Matrix 1 · ECE"
        ],
        venue: "DSP / Communication Lab – ECE Block.",
        dateTime: "26 or 27 December (slot to be announced).",
        prizes: "Cash prizes and certificates.",
        formUrl: "https://docs.google.com/forms/d/META_MATRIX_FORM_ID/viewform"
      },
      {
        id: "nomen-kairo",
        name: "Nomen Kairo",
        tagline: "Event around identifying components, symbols, and ECE jargon.",
        meta: "Teams of 2–3 · Identification quiz",
        rules: [
          "Teams will be given symbols, waveforms, device images, and short definitions to identify.",
          "Some rounds may include rapid naming, matching, and buzzer‑based questions.",
          "No external reference material is allowed during the rounds.",
          "Time limits are strict; wrong answers may carry negative marks in specific rounds.",
          "All participants must maintain discipline and follow quiz master instructions.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Nomen Kairo 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Nomen Kairo 1 · ECE"
        ],
        venue: "ECE Classroom / Mini Seminar Hall.",
        dateTime: "26 December · midday slot (tentative).",
        prizes: "Prizes for best‑performing teams.",
        formUrl: "https://docs.google.com/forms/d/NOMEN_KAIRO_FORM_ID/viewform"
      },
      {
        id: "nomizo-quid",
        name: "Nomizo Quid",
        tagline: "Logical reasoning and brain‑teaser contest with an ECE flavor.",
        meta: "Individual or Team of 2 · Logic puzzles",
        rules: [
          "Event may be individual or in pairs; format will be clearly announced.",
          "Puzzles can include logic grids, sequence problems, and small numericals related to ECE.",
          "Use of calculators will be allowed or disallowed as per organizer instructions.",
          "Multiple rounds may be conducted, with top scorers progressing.",
          "Participants must refrain from discussing solutions with other teams.",
          "Any malpractice will result in immediate disqualification.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Nomizo Quid 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Nomizo Quid 1 · ECE"
        ],
        venue: "ECE Tutorial Room.",
        dateTime: "27 December · morning session (tentative).",
        prizes: "Cash prizes and certificates.",
        formUrl: "https://docs.google.com/forms/d/NOMIZO_QUID_FORM_ID/viewform"
      },
      {
        id: "novus-milao",
        name: "Novus Milao",
        tagline: "Mini‑project / expo for innovative ECE ideas and prototypes.",
        meta: "Teams of 2–4 · Project expo",
        rules: [
          "Teams of 2–4 students may present an ECE‑based mini‑project or prototype.",
          "Projects can be hardware, simulation, or mixed, but must be demonstrable during evaluation.",
          "Teams should prepare an abstract, block diagram, and demonstration plan.",
          "Display tables, power supply, and basic lab support will be arranged; any special components must be brought by teams.",
          "Evaluation criteria include innovation, technical depth, real‑world relevance, and presentation quality.",
          "Teams must be present near their project during judging window.",
          "Any unsafe wiring or setup may be disqualified on safety grounds.",
          "Judges’ decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Novus Milao 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Novus Milao 1 · ECE"
        ],
        venue: "ECE Project Lab / Exhibition Area.",
        dateTime: "Both fest days · project expo timings to be announced.",
        prizes: "Best project awards with cash prizes and mementos.",
        formUrl: "https://docs.google.com/forms/d/NOVUS_MILAO_FORM_ID/viewform"
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = teknikos.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = teknikos.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    teknikos.subEvents.forEach((se, index) => {
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
