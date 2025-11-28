// civil-varna.js
// CIVIL VARNA (CE) – Kriti Quest, Samsodhana, Aakrithik, Civil‑Digi Expo, Tech Hunt, CADCon

document.addEventListener("DOMContentLoaded", () => {
  const civilVarna = {
    title: "CIVIL VARNA (CE)",
    description:
      "Civil Engineering technical events focused on structures, planning, surveying, digital tools, and design.",
    subEvents: [
      {
        id: "kriti-quest",
        name: "Kriti Quest",
        tagline: "Paper / project presentation event for civil engineering innovations.",
        meta: "Teams of 2–3 · Presentation",
        rules: [
          "Open to UG and PG students in Civil Engineering and related branches.",
          "Teams of up to 2–3 members; all authors / presenters must register.",
          "Submissions can be technical papers or project summaries on civil‑engineering topics.",
          "Work must be original; plagiarism will cause rejection or disqualification.",
          "Accepted entries will be invited for on‑stage or classroom presentations.",
          "Presentation time and Q&A duration will be informed in the schedule.",
          "Judging criteria include technical relevance, innovation, and clarity of presentation.",
          "Judges’ decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Kriti Quest 1 · 9XXXXXXXXX",
          "Student Coord – Kriti Quest 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Kriti Quest 1 · CE"
        ],
        venue: "Civil Seminar Hall.",
        dateTime: "26 December · Forenoon session (tentative).",
        prizes: "Cash prizes and ‘Best Presentation’ certificates.",
        formUrl: "https://docs.google.com/forms/d/KRITI_QUEST_FORM_ID/viewform"
      },
      {
        id: "samsodhana",
        name: "Samsodhana",
        tagline: "Technical quiz / problem‑solving challenge in civil engineering.",
        meta: "Teams of 2 · Quiz / problem‑solving",
        rules: [
          "Teams of exactly 2 students from the same institution.",
          "Questions will cover structural engineering, transportation, geotech, environmental, and basic engineering mechanics.",
          "Prelims and mains rounds may include MCQs, numerical problems, and conceptual questions.",
          "Use of mobile phones or smart devices is strictly prohibited.",
          "Time limits for each round are fixed; late answers may not be evaluated.",
          "In case of tie, tie‑breaker questions will be used.",
          "Participants must maintain discipline; any malpractice leads to disqualification.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Samsodhana 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Samsodhana 1 · CE"
        ],
        venue: "Civil Lecture Hall / Mini Auditorium.",
        dateTime: "26 December · Afternoon session (tentative).",
        prizes: "Cash prizes, certificates, and mementos for winners.",
        formUrl: "https://docs.google.com/forms/d/SAMSODHANA_FORM_ID/viewform"
      },
      {
        id: "aakrithik",
        name: "Aakrithik",
        tagline: "Model‑making or structural‑form event showcasing creativity in civil structures.",
        meta: "Teams of 2–4 · Model / structure",
        rules: [
          "Teams of 2–4 students can participate.",
          "Event focuses on physical models of civil structures such as bridges, towers, buildings, or special forms.",
          "Basic materials (cardboard, sticks, threads, etc.) may be provided or specified; teams may bring additional approved materials.",
          "Models should be structurally logical and aesthetically appealing.",
          "Evaluation criteria include stability, creativity, practicality, and explanation.",
          "Teams must be present with their model during judging.",
          "Any unsafe or non‑compliant setup can be rejected.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Aakrithik 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Aakrithik 1 · CE"
        ],
        venue: "Civil Project / Exhibition Area.",
        dateTime: "Both fest days · judging window will be announced.",
        prizes: "Best model awards with cash prizes and certificates.",
        formUrl: "https://docs.google.com/forms/d/AAKRITHIK_FORM_ID/viewform"
      },
      {
        id: "civil-digi-expo",
        name: "Civil‑Digi Expo",
        tagline: "Digital tools and software‑based expo (CAD/BIM/GIS) for civil engineering.",
        meta: "Teams or individuals · Digital expo",
        rules: [
          "Participants showcase work created using civil‑related software such as AutoCAD, STAAD, ETABS, Revit, GIS tools, etc.",
          "Work can include drawings, 3D models, simulations, or analysis reports.",
          "Entries must be prepared before the event and presented using provided systems or laptops.",
          "Participants should explain their workflow, assumptions, and outputs.",
          "Evaluation will consider complexity, correctness, detailing, and presentation.",
          "Any plagiarized or template‑only submissions without customization may be rejected.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Civil‑Digi Expo 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Civil‑Digi Expo 1 · CE"
        ],
        venue: "Civil CAD Lab / Digital Lab.",
        dateTime: "27 December · Forenoon session (tentative).",
        prizes: "Best digital model / analysis awards with cash prizes.",
        formUrl: "https://docs.google.com/forms/d/CIVIL_DIGI_EXPO_FORM_ID/viewform"
      },
      {
        id: "tech-hunt",
        name: "Tech Hunt",
        tagline: "Civil‑themed treasure hunt with drawings, clues, and site‑related puzzles.",
        meta: "Teams of 3–4 · Treasure hunt",
        rules: [
          "Teams of 3–4 students; pre‑registered teams only.",
          "Clues will be hidden in and around Civil department / campus, linked to civil‑engineering concepts or drawings.",
          "Teams must follow the sequence of clues without skipping.",
          "Running in restricted areas or damaging property is strictly prohibited.",
          "The team that completes all clues correctly in the shortest time wins.",
          "In case of tie, tie‑breaker tasks or timestamps will be used.",
          "Any malpractice or collusion between teams may lead to disqualification.",
          "Organizers’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Tech Hunt 1 · 9XXXXXXXXX",
          "Student Coord – Tech Hunt 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Tech Hunt 1 · CE"
        ],
        venue: "Starting point – Civil Block lobby; across campus.",
        dateTime: "27 December · Afternoon session (tentative).",
        prizes: "Cash prizes and goodies for winning teams.",
        formUrl: "https://docs.google.com/forms/d/TECH_HUNT_FORM_ID/viewform"
      },
      {
        id: "cadcon",
        name: "CADCon",
        tagline: "CAD drawing / drafting competition for civil plans and details.",
        meta: "Individual · CAD contest",
        rules: [
          "Individual participation only; each participant must have basic CAD knowledge.",
          "Contest will use specified CAD software (e.g., AutoCAD); details will be provided beforehand.",
          "Problems may include preparing plans, elevations, sections, or detailing of RC / steel elements.",
          "Drawing standards, layers, and units must be followed as instructed.",
          "Time‑bound tasks; incomplete or improperly saved files may lose marks.",
          "Evaluation criteria include accuracy, completeness, neatness, and adherence to standards.",
          "Participants must not share files or discuss solutions during the contest.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – CADCon 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – CADCon 1 · CE"
        ],
        venue: "Civil CAD Lab.",
        dateTime: "26 or 27 December · slot to be announced.",
        prizes: "Cash prizes and ‘Best CAD Drafter’ certificates.",
        formUrl: "https://docs.google.com/forms/d/CADCON_FORM_ID/viewform"
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = civilVarna.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = civilVarna.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    civilVarna.subEvents.forEach((se, index) => {
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
