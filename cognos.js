// cognos.js
// COGNOS (CSD / AI) – Data Dazzle, Sparkathon, CogniQuest, Razzle Review, Vishleshana, Rapid Code

document.addEventListener("DOMContentLoaded", () => {
  // ---------- DATA (edit later with actual details) ----------
  const cognos = {
    title: "COGNOS (CSD / AI)",
    description:
      "Technical events by CSE (Data Science / AI) focusing on data analytics, AI hackathons, quiz, reviews, and rapid coding.",
    subEvents: [
      {
        id: "data-dazzle",
        name: "Data Dazzle",
        tagline: "Data analytics & visualization challenge on real‑world datasets.",
        meta: "Teams of 2–3 · Data analytics",
        rules: [
          "Open to all UG / PG students with a valid college ID card.",
          "Teams of 2–3 members; all members must belong to the same institution.",
          "Datasets or problem cases will be provided by the organizers at the venue.",
          "Teams may use Python / R / SQL / BI tools as allowed by organizers.",
          "Evaluation will focus on data cleaning, feature engineering, insights, and clarity of visualization.",
          "Teams must briefly present their findings to the judging panel.",
          "Any external or pre‑built notebooks / solutions must be clearly disclosed.",
          "Judges' decisions will be final and binding."
        ],
        studentCoordinators: [
          "Student Coord – Data Dazzle 1 · 9XXXXXXXXX",
          "Student Coord – Data Dazzle 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Data Dazzle 1 · CSD / AI",
          "Faculty Coord – Data Dazzle 2 · CSD / AI"
        ],
        venue: "Data Science Lab – CSD Block.",
        dateTime: "26 December · 10:00 AM – 1:00 PM (tentative).",
        prizes: "Cash prizes and certificates for top 3 teams.",
        formUrl: "https://docs.google.com/forms/d/DATA_DAZZLE_FORM_ID/viewform"
      },
      {
        id: "sparkathon",
        name: "Sparkathon",
        tagline: "Mini‑hackathon for AI, ML, and data‑driven problem solving.",
        meta: "Teams of 3–4 · AI / ML hackathon",
        rules: [
          "Teams of 3–4 students; all members must be registered before the event starts.",
          "Problem statements will be revealed at the beginning of the event.",
          "Teams should ideate, prototype, and present a working proof of concept within the allotted time.",
          "Use of open‑source libraries and frameworks is encouraged, subject to license terms.",
          "Each team must submit source code and a short presentation / demo.",
          "Evaluation criteria include innovation, feasibility, technical depth, and presentation.",
          "Any form of plagiarism or code copying from other teams is strictly prohibited.",
          "Judges' decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Sparkathon 1 · 9XXXXXXXXX",
          "Student Coord – Sparkathon 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Sparkathon 1 · CSD / AI"
        ],
        venue: "Innovation / Project Lab – CSD Block.",
        dateTime: "27 December · 9:00 AM – 3:00 PM (tentative).",
        prizes: "Cash prizes and goodies for best hacks.",
        formUrl: "https://docs.google.com/forms/d/SPARKATHON_FORM_ID/viewform"
      },
      {
        id: "cogniquest",
        name: "CogniQuest",
        tagline: "Technical quiz on AI, data science, and computing fundamentals.",
        meta: "Teams of 2 · Quiz with multiple rounds",
        rules: [
          "Teams of exactly 2 members are allowed; replacement after registration is not permitted.",
          "Preliminary written / online round may be conducted to shortlist teams.",
          "Mains may include MCQ, buzzer, and rapid‑fire rounds on AI, ML, data science, and general CS topics.",
          "Use of mobile phones or smart devices during the quiz is strictly prohibited.",
          "In case of ties, tie‑breaker questions will be used.",
          "All participants must obey invigilators and quiz masters.",
          "Any malpractice will result in disqualification.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – CogniQuest 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – CogniQuest 1 · CSD / AI"
        ],
        venue: "Seminar Hall – CSD Block.",
        dateTime: "26 December · Afternoon session (tentative).",
        prizes: "Cash prizes, certificates, and mementos.",
        formUrl: "https://docs.google.com/forms/d/COGNIQUEST_FORM_ID/viewform"
      },
      {
        id: "razzle-review",
        name: "Razzle Review",
        tagline: "Review‑style event for explaining and critiquing trending tech / AI papers, products, or tools.",
        meta: "Individual or Team of 2 · Presentation",
        rules: [
          "Open to individuals or teams of 2 participants.",
          "Participants choose a recent AI / data‑science paper, product, or tool to review (subject to approval).",
          "Review must cover problem statement, methodology, strengths, limitations, and potential applications.",
          "Presentations are strictly time‑bound; exceeding time may lead to negative marking.",
          "Plagiarism from online reviews or blogs is not allowed; references should be cited.",
          "Judging criteria include clarity, depth, critical analysis, and delivery.",
          "Organizers may conduct a short Q&A after each review.",
          "Judges' decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Razzle Review 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Razzle Review 1 · CSD / AI"
        ],
        venue: "Presentation Room – CSD Block.",
        dateTime: "27 December · 10:00 AM – 1:00 PM (tentative).",
        prizes: "Best review awards with cash prizes and certificates.",
        formUrl: "https://docs.google.com/forms/d/RAZZLE_REVIEW_FORM_ID/viewform"
      },
      {
        id: "vishleshana",
        name: "Vishleshana",
        tagline: "Case‑study / problem‑analysis event in data science and analytics.",
        meta: "Teams of 2–3 · Case analysis",
        rules: [
          "Teams of 2–3 students; pre‑registered teams only.",
          "Each team is given a case study or problem scenario with supporting data.",
          "Teams must analyze the case, identify key issues, and propose data‑driven solutions.",
          "Deliverables include a short report and a brief presentation.",
          "Evaluation focuses on analytical thinking, correctness of approach, and clarity of communication.",
          "Use of generative AI tools may be regulated or restricted by organizers.",
          "Any plagiarism in reports will result in disqualification.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Vishleshana 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Vishleshana 1 · CSD / AI"
        ],
        venue: "Case Study Room – CSD Block.",
        dateTime: "26 December · 11:00 AM – 2:00 PM (tentative).",
        prizes: "Cash prizes and ‘Best Analyst’ certificates.",
        formUrl: "https://docs.google.com/forms/d/VISHLESHANA_FORM_ID/viewform"
      },
      {
        id: "rapid-code",
        name: "Rapid Code",
        tagline: "Short‑format rapid coding showdown for quick problem solving.",
        meta: "Individual · Short coding rounds",
        rules: [
          "Individual participation only; each participant must register separately.",
          "Contest will consist of multiple short rounds with increasing difficulty.",
          "Supported languages will be announced (commonly C, C++, Java, Python).",
          "Scoring is based on correctness and speed; penalties may apply for wrong submissions in later rounds.",
          "Participants should not communicate with others during the contest.",
          "Use of internet beyond the contest platform is prohibited.",
          "Top performers from early rounds qualify for final rapid‑fire coding.",
          "Judges’ and problem setters’ decisions are final."
        ],
        studentCoordinators: [
          "Student Coord – Rapid Code 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Rapid Code 1 · CSD / AI"
        ],
        venue: "Coding Lab – CSD Block.",
        dateTime: "27 December · 2:00 PM – 4:30 PM (tentative).",
        prizes: "Cash prizes and certificates for winners and runners‑up.",
        formUrl: "https://docs.google.com/forms/d/RAPID_CODE_FORM_ID/viewform"
      }
    ]
  };

  // ---------- RENDER CARDS ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = cognos.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = cognos.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    cognos.subEvents.forEach((se, index) => {
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

  // ---------- MODAL LOGIC ----------
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
