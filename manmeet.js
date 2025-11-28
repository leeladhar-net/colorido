// manmeet.js
// MANMEET (MBA) – AI for Business, Business Quiz, Market Makers, Dalaal ka Kamaal, Smart Manager

document.addEventListener("DOMContentLoaded", () => {
  const manmeet = {
    title: "MANMEET (MBA)",
    description:
      "MBA‑level management events on analytics, business knowledge, markets, trading simulations, and overall management skills.",
    subEvents: [
      {
        id: "ai-for-business",
        name: "AI for Business",
        tagline: "Case + hands‑on event on using AI / analytics to solve business problems.",
        meta: "Teams of 2–3 · Case + analytics",
        rules: [
          "Open to MBA and other PG / senior UG students interested in analytics and management.",
          "Teams of 2–3 members from the same institution; pre‑registration is mandatory.",
          "A business case with data or scenario description will be provided.",
          "Teams must use analytical / AI tools (as allowed) to generate insights and recommendations.",
          "Deliverables include a short slide deck or report and a brief presentation.",
          "Use of AI assistants or tools will be allowed or restricted as per announced guidelines; teams must disclose tools used.",
          "Evaluation criteria include problem understanding, analytical depth, feasibility of recommendations, and clarity of presentation.",
          "Any plagiarism or direct copying of publicly available solutions is not permitted.",
          "Judges’ decision will be final and binding."
        ],
        studentCoordinators: [
          "Student Coord – AI for Business 1 · 9XXXXXXXXX",
          "Student Coord – AI for Business 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – AI for Business 1 · MBA"
        ],
        venue: "MBA Analytics / Computer Lab.",
        dateTime: "26 December · 10:00 AM – 1:00 PM (tentative).",
        prizes: "Cash prizes and ‘Best AI Business Solution’ certificates.",
        formUrl: "https://docs.google.com/forms/d/AI_FOR_BUSINESS_FORM_ID/viewform"
      },
      {
        id: "business-quiz",
        name: "Business Quiz",
        tagline: "Quiz on business, brands, current affairs, economics, and management concepts.",
        meta: "Teams of 2–3 · Quiz",
        rules: [
          "Teams of 2–3 participants; changes in team members after registration are not allowed.",
          "Preliminary written / online round may be conducted to shortlist teams.",
          "Quiz topics include management fundamentals, marketing, finance, operations, HR, brands, and current business news.",
          "Stage rounds may include MCQs, buzzer, visual / logo identification, and rapid‑fire.",
          "Use of mobile phones or smart devices is strictly prohibited during the quiz.",
          "In case of ties, tie‑breaker questions will be used.",
          "Teams must follow the instructions of the quizmaster and coordinators.",
          "Any malpractice will result in immediate disqualification.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Business Quiz 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Business Quiz 1 · MBA"
        ],
        venue: "MBA Seminar Hall / Auditorium.",
        dateTime: "26 December · Afternoon session (tentative).",
        prizes: "Cash prizes, trophies, and certificates for top teams.",
        formUrl: "https://docs.google.com/forms/d/BUSINESS_QUIZ_FORM_ID/viewform"
      },
      {
        id: "market-makers",
        name: "Market Makers",
        tagline: "Marketing and branding strategy event with case / campaign creation.",
        meta: "Teams of 3–4 · Marketing strategy",
        rules: [
          "Teams of 3–4 students.",
          "Each team will be assigned or can choose a product / service or problem statement.",
          "Teams must design a marketing strategy or campaign (positioning, target segment, media plan, and creative ideas).",
          "Deliverables may include a pitch deck, mock‑ups / posters, taglines, and budget outline.",
          "Judging will focus on creativity, feasibility, alignment with target audience, and overall impact.",
          "Teams must present their strategy within the allotted time, followed by short Q&A.",
          "Plagiarism from existing campaigns without significant changes is not allowed.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Market Makers 1 · 9XXXXXXXXX",
          "Student Coord – Market Makers 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Market Makers 1 · MBA"
        ],
        venue: "MBA Case Room / Marketing Lab.",
        dateTime: "27 December · 10:00 AM – 1:00 PM (tentative).",
        prizes: "Best campaign awards with cash prizes and certificates.",
        formUrl: "https://docs.google.com/forms/d/MARKET_MAKERS_FORM_ID/viewform"
      },
      {
        id: "dalaal-ka-kamaal",
        name: "Dalaal ka Kamaal",
        tagline: "Stock‑market or trading simulation competition focusing on decision‑making and risk management.",
        meta: "Teams of 2–3 · Trading simulation",
        rules: [
          "Teams of 2–3 students; each team will be given virtual capital in a simulated market setup.",
          "Event may use offline simulation with news and price updates, or an online virtual‑trading platform as allowed.",
          "Participants must build and manage a mock portfolio within the event rules (no real money).",
          "Scoring is based on portfolio value, risk‑adjusted returns, and reasoning behind trades.",
          "Insider‑style information outside the simulation is not allowed; all teams receive the same public information.",
          "Facilitators may introduce surprise news to test reaction and strategy.",
          "Teams must maintain decorum; no collusion between teams is allowed.",
          "Judges’ decision is final."
        ],
        studentCoordinators: [
          "Student Coord – Dalaal ka Kamaal 1 · 9XXXXXXXXX",
          "Student Coord – Dalaal ka Kamaal 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Dalaal ka Kamaal 1 · MBA (Finance)"
        ],
        venue: "Finance Lab / Computer Lab – MBA Block.",
        dateTime: "27 December · 2:00 PM – 4:30 PM (tentative).",
        prizes: "Cash prizes and ‘Top Trader’ certificates.",
        formUrl: "https://docs.google.com/forms/d/DALAAL_KA_KAMAAL_FORM_ID/viewform"
      },
      {
        id: "smart-manager",
        name: "Smart Manager",
        tagline: "Flagship multi‑round contest to test all‑round managerial skills.",
        meta: "Individual · Multi‑round",
        rules: [
          "Individual event; open primarily to MBA students (others may be allowed as per organizers).",
          "Multiple rounds may include aptitude test, case analysis, group activity, personal interview, and stress / HR rounds.",
          "Participants will be evaluated on analytical ability, communication, teamwork, leadership, and decision‑making.",
          "Shortlisting will take place after each round; only selected candidates progress.",
          "Participants must be punctual and attend all required rounds.",
          "Formal or business casual dress code may be recommended for final rounds.",
          "Any form of misbehavior or violation of instructions may lead to disqualification.",
          "The panel’s decision in each round is final and cannot be contested."
        ],
        studentCoordinators: [
          "Student Coord – Smart Manager 1 · 9XXXXXXXXX",
          "Student Coord – Smart Manager 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Smart Manager 1 · MBA"
        ],
        venue: "MBA Classrooms / Seminar Halls (multiple rooms as per round).",
        dateTime: "Both fest days · round‑wise schedule will be announced.",
        prizes: "‘Smart Manager of MANMEET’ title with cash prize, trophy, and certificate.",
        formUrl: "https://docs.google.com/forms/d/SMART_MANAGER_FORM_ID/viewform"
      }
    ]
  };

  // ---------- render cards ----------
  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = manmeet.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = manmeet.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    manmeet.subEvents.forEach((se, index) => {
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
