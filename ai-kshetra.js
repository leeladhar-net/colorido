// ai-kshetra.js
// AI KSHETRA (CSM) – Build with AI & CODEWARZ with generic, editable details

document.addEventListener("DOMContentLoaded", () => {
  // -------- DATA (EDIT LATER WITH REAL DETAILS) --------
  const aiKshetra = {
    title: "AI KSHETRA (CSM)",
    description:
      "AI‑focused events hosted by the CSM department, combining applied AI building and competitive coding.",
    subEvents: [
      {
        id: "build-with-ai",
        name: "Build with AI",
        tagline:
          "Hands‑on event where participants build small AI/ML powered applications or prototypes.",
        meta: "Teams of 2–3 · AI/ML Build Event",
        rules: [
          "Open to all UG and PG students from any branch.",
          "Teams of 2–3 members; all members must be from the same institution.",
          "Participants must carry a valid college ID card.",
          "Each team should bring at least one laptop with required software / libraries pre‑installed.",
          "Internet access, if allowed, will be provided only through the lab network as per instructions.",
          "Problem statements or themes will be announced at the start of the event.",
          "Judging criteria include problem understanding, model approach, implementation, innovation, and presentation.",
          "Any plagiarism or use of pre‑built templates without disclosure may lead to disqualification.",
          "Decisions of the judging panel will be final and binding."
        ],
        studentCoordinators: [
          "Student Coordinator 1 · 9XXXXXXXXX",
          "Student Coordinator 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coordinator 1 · CSM",
          "Faculty Coordinator 2 · CSM"
        ],
        venue: "CSM / AI Lab – Block & room will be updated.",
        dateTime: "26 December · 10:00 AM – 3:00 PM (tentative).",
        prizes: "Cash prizes and certificates for top 3 teams.",
        // TODO: put actual form link
        formUrl: "https://docs.google.com/forms/d/BUILD_WITH_AI_FORM_ID/viewform"
      },
      {
        id: "codewarz",
        name: "CODEWARZ",
        tagline:
          "Competitive programming contest focusing on algorithms, data structures, and problem‑solving speed.",
        meta: "Individual or Team of 2 · Coding Contest",
        rules: [
          "Open to all UG and PG students with valid college ID.",
          "Participation can be individual or in teams of two, as specified by organizers.",
          "Prelims and/or single online round will be conducted on competitive coding platform (e.g., HackerEarth / CodeChef).",
          "Allowed languages typically include C, C++, Java, and Python (final list will be announced before the contest).",
          "Scoring will be based on number of problems solved, number of test cases passed, and total time taken.",
          "Participants must not discuss solutions with other teams during the contest.",
          "Use of internet resources other than the contest platform is strictly prohibited.",
          "Any malpractice will result in immediate disqualification.",
          "The decision of the judges and problem‑setting panel will be final."
        ],
        studentCoordinators: [
          "Student Coordinator 3 · 9XXXXXXXXX",
          "Student Coordinator 4 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coordinator 3 · CSM",
          "Faculty Coordinator 4 · CSM"
        ],
        venue: "CSM Programming Lab – details will be shared via notice / WhatsApp group.",
        dateTime: "27 December · 9:00 AM – 1:00 PM (tentative).",
        prizes: "Cash prizes and certificates for winners and runners‑up.",
        // TODO: put actual form link
        formUrl: "https://docs.google.com/forms/d/CODEWARZ_FORM_ID/viewform"
      }
    ]
  };

  // -------- RENDER CARDS --------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = aiKshetra.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = aiKshetra.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    aiKshetra.subEvents.forEach((se, index) => {
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

  // -------- MODAL WIRES (same pattern as TECHFUSION) --------
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
