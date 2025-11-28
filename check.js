// check.js
// CheCK (CHE) – Paper Presentation, Elocution, Group Discussion, Technical Quiz

document.addEventListener("DOMContentLoaded", () => {
  const checkBlock = {
    title: "CheCK (CHE)",
    description:
      "Chemical Engineering events focused on technical communication, discussion, and subject‑based quizzing.",
    subEvents: [
      {
        id: "chem-paper-presentation",
        name: "Paper Presentation",
        tagline: "Technical paper presentation on chemical engineering topics and emerging technologies.",
        meta: "Teams of 2 · Paper presentation",
        rules: [
          "Open to UG and PG students of Chemical Engineering and related branches.",
          "Maximum of 2 authors per paper; all participating authors must register.",
          "Papers must be original; plagiarism from existing publications or web sources is not allowed.",
          "Format (e.g., IEEE) and paper length guidelines will be shared in advance.",
          "Shortlisted papers will be called for oral presentation.",
          "Each team will get a fixed time for presentation followed by Q&A.",
          "Judging will be based on novelty, technical content, clarity, and response to questions.",
          "Decisions of the panel of judges are final."
        ],
        studentCoordinators: [
          "Student Coord – Paper Presentation 1 · 9XXXXXXXXX",
          "Student Coord – Paper Presentation 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Paper Presentation 1 · CHE"
        ],
        venue: "Chemical Engineering Seminar Hall.",
        dateTime: "26 December · Forenoon session (tentative).",
        prizes: "Cash prizes and ‘Best Paper’ certificates.",
        formUrl: "https://docs.google.com/forms/d/CHECK_PAPER_FORM_ID/viewform"
      },
      {
        id: "elocution",
        name: "Elocution",
        tagline: "Speech event on chemical engineering, environment, and society‑related themes.",
        meta: "Individual · Speech",
        rules: [
          "Individual participation only; each participant must register separately.",
          "Topics will be announced in advance or given on the spot, as decided by organizers.",
          "Maximum speaking time per participant will be announced (e.g., 3–5 minutes).",
          "Speeches should be in the permitted language(s) and stay relevant to the theme.",
          "Reading fully from paper is discouraged and may impact scoring.",
          "Evaluation criteria include content, delivery, language, confidence, and time management.",
          "Use of offensive or inappropriate language is strictly prohibited.",
          "Judges’ decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Elocution 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Elocution 1 · CHE"
        ],
        venue: "CHE Lecture Hall / Mini Seminar Hall.",
        dateTime: "26 December · Afternoon session (tentative).",
        prizes: "Cash prizes and ‘Best Speaker’ certificates.",
        formUrl: "https://docs.google.com/forms/d/CHECK_ELOCUTION_FORM_ID/viewform"
      },
      {
        id: "group-discussion",
        name: "Group Discussion",
        tagline: "GD event on technical / general topics to assess communication and analytical skills.",
        meta: "Individual · GD in groups",
        rules: [
          "Individual registration; participants will be assigned to groups.",
          "Each group will have a minimum of 6 and a maximum of around 10 participants (as decided by organizers).",
          "Topics can range from chemical industry, sustainability, safety, to general current affairs.",
          "A short preparation time will be provided before each discussion.",
          "Participants are expected to maintain decorum, respect others, and avoid shouting.",
          "Evaluation criteria include content, clarity, listening, teamwork, and leadership qualities.",
          "Shortlisting prelims may be held before a final GD round.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Group Discussion 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Group Discussion 1 · CHE"
        ],
        venue: "CHE Discussion Room / Seminar Hall.",
        dateTime: "27 December · Forenoon session (tentative).",
        prizes: "Cash prizes and ‘Best Participant’ certificates.",
        formUrl: "https://docs.google.com/forms/d/CHECK_GD_FORM_ID/viewform"
      },
      {
        id: "technical-quiz",
        name: "Technical Quiz",
        tagline: "Quiz event on chemical engineering fundamentals, applications, and general science.",
        meta: "Teams of 2–3 · Quiz",
        rules: [
          "Teams of 2–3 members; all must be from the same institution.",
          "Preliminary written / online round may be conducted to shortlist teams.",
          "Quiz questions will cover chemical process principles, thermodynamics, equipment, safety, and general science & GK.",
          "Main rounds may include MCQs, buzzer rounds, picture rounds, and rapid‑fire.",
          "Use of mobile phones and smart devices during the quiz is strictly prohibited.",
          "Tie‑breaker questions will be used where necessary.",
          "Teams must follow all instructions from quizmaster and coordinators.",
          "Any malpractice will lead to disqualification.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Technical Quiz 1 · 9XXXXXXXXX",
          "Student Coord – Technical Quiz 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Technical Quiz 1 · CHE"
        ],
        venue: "Chemical Engineering Seminar Hall / Auditorium.",
        dateTime: "27 December · Afternoon session (tentative).",
        prizes: "Cash prizes, certificates, and mementos for top teams.",
        formUrl: "https://docs.google.com/forms/d/CHECK_TECHQUIZ_FORM_ID/viewform"
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = checkBlock.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = checkBlock.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    checkBlock.subEvents.forEach((se, index) => {
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
