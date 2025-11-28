// events-detail.js
// TECHFUSION (CSE) – 4 final sub‑events with one reusable modal

document.addEventListener("DOMContentLoaded", () => {
  // ========== DATA FOR TECHFUSION (CSE) ==========

  const techfusion = {
    title: "TECHFUSION (CSE)",
    description:
      "Techno Fiesta – Paper Presentation, Scintilla Challenge, Instamaze Programming Contest, and Colloquy Group Discussion.",
    subEvents: [
      // 1) Techno Fiesta – Paper Presentation (full details)
      {
        id: "techno-fiesta-paper",
        name: "Techno Fiesta – Paper Presentation",
        tagline:
          "Technical paper presentation under TECHNOFIESTA‑2024, Department of CSE (Data Science).",
        meta: "Team of max 2 · Paper Presentation",
        rules: [
          "Participants present research findings explaining key points, methodology, results, and conclusions of their study.",
          "PowerPoint must include at least: Title slide (Name, Roll No., College etc.), Introduction, key points, methodology, results, and conclusions.",
          "Contents should be neat and clear with proper diagrams & pictures; video clips / flash animations may be used.",
          "All participants must carry their college ID card.",
          "Registration is mandatory to present a paper.",
          "Any suspicious activity can lead to direct disqualification.",
          "Title, participants' names, email ID, institution name, year & branch, and phone number are mandatory.",
          "Implementation will carry additional weightage.",
          "Maximum of 2 members per team from the same institute.",
          "Total time per paper: 10 minutes (8 minutes presentation + 2 minutes questions).",
          "Soft copy of the paper must be in IEEE format and emailed to technofiestarvr@gmail.com.",
          "Last date for submission of technical paper: 23rd December 2024.",
          "Intimation of selection through email: 24th December 2024.",
          "Judges' decision will be final."
        ],
        studentCoordinators: [
          "M.H.S. Koushik · 8106873582",
          "K. Venkat · 8919199499"
        ],
        staffCoordinators: [
          "Dr. Ch. Sudha Sree",
          "Dr. G. Ramanjaiah",
          "Dr. P. Srinivasa Rao",
          "Mr. K. Subramanyam",
          "Ms. K. Aravinda",
          "B. Rama Krishna"
        ],
        venue: "Decennial Block, CM‑Skills Lab.",
        dateTime: "28 December 2024 · 11:00 AM – 3:00 PM",
        prizes: "First Prize: ₹3,000 · Second Prize: ₹2,000 · Third Prize: ₹1,000",
        // TODO: replace with real Google Form link
        formUrl: "https://docs.google.com/forms/d/TECHNO_FIESTA_FORM_ID/viewform"
      },

      // 2) Scintilla – SCINTILLA Challenge quiz
      {
        id: "scintilla",
        name: "Scintilla – Technical Quiz Challenge",
        tagline:
          "SCINTILLA Challenge is an exciting quiz program with Prelims and Mains rounds to test wide‑ranging technical knowledge.",
        meta: "Teams of 2 · Quiz · Prelims + 5 Mains rounds",
        rules: [
          "All UG and PG students are eligible; only team entries are allowed.",
          "Each team must consist of exactly two participants.",
          "Replacement of any participant after registration is not allowed.",
          "Prelims is an online multiple‑choice round (20 questions · 10 minutes) conducted in one of the campus computer labs.",
          "Based on prelims scores, top 9 teams will be selected for the Mains round.",
          "Mains consists of 5 rounds: Beginner's Luck (coding round), Knowledge Flip Fiesta (aptitude topics), Reel Riddle (video‑based questions), printed‑code completion round, and Fast and Furious rapid‑fire round.",
          "Beginner's Luck: coding questions in C/C++/Java/Python; solved question = 20 points, passed question solved by adjacent team = 10 points.",
          "Knowledge Flip Fiesta: aptitude questions from topics like Ages, Time & Work, Percentages, Profit & Loss, Clocks, Speed & Distance, Relations etc.; 2 questions, 10 points each; one lifeline to change topic.",
          "Reel Riddle: short video clip shown once; 5 questions based on video; 5 points per question.",
          "Printed‑code completion round: teams complete code using correct missing snippets from a mixed stack; 5 points for each correct answer.",
          "Fast and Furious: top 4 teams; answer maximum questions within 90 seconds; 5 points per question.",
          "Student identity card is compulsory; participants must enter the same details as provided during registration.",
          "The quiz is strictly time‑bound; judges' decision is final."
        ],
        studentCoordinators: [
          "Kancheti Chethan Eswar (Y22CM070) · 9966998706",
          "Nagalakshmi A (Y22CM008) · 7842441985",
          "Gogineni Naga Venkata Nihar Chowdary (Y23CM051) · 7093725382",
          "Puvvada Hima Varshini (Y22CM142) · 8885417555",
          "Manam Vineetha (Y22CM100) · 7013348013",
          "Thumuluri Saketh (Y22CM178) · 8347608499",
          "Shivaraj N (Y23CM116) · 7816045119",
          "Vishnubhotla Siri Chandana (Y23CM188) · 7075032603",
          "Gunda Bala Sai Venkatesh (Y22CM058) · 8125944863"
        ],
        staffCoordinators: [
          "Dr. Palacharla Ravikumar · Associate Professor, CSE (AI & ML) · 90004 56003",
          "Smt. K. Venkata Anusha · Asst. Professor, CSE (AI & ML) · 99516 15749"
        ],
        venue: "One of the CSE computer labs (venue & time will be informed to participants).",
        dateTime: "Prelims + Mains on fest day · exact slots notified later.",
        prizes: "Attractive cash prizes and certificates for top teams.",
        // TODO: replace with real Google Form link
        formUrl: "https://docs.google.com/forms/d/SCINTILLA_FORM_ID/viewform"
      },

      // 3) Instamaze – Programming Contest
      {
        id: "instamaze",
        name: "Instamaze – Programming Contest",
        tagline:
          "Instamaze aims to bring out the best programming talent through prelims (MCQs) and a mains coding round.",
        meta: "Teams of 2 · Prelims + 3‑hour coding mains",
        rules: [
          "All participants must carry their college ID card.",
          "Registration must be completed before the commencement of the event.",
          "Teams are not allowed to discuss with any other team during the contest.",
          "Any sort of indiscipline during the contest shall lead to cancellation of participation.",
          "Each member of the team will receive an individual participation certificate.",
          "Prelims: maximum 2 members per team; same team must appear for both prelims and mains.",
          "Each team must use only their allotted Unique ID; using other user IDs leads to disqualification.",
          "Each team must have a HackerEarth account registered with one teammate's email.",
          "Prelims round: 20 MCQs · 15 minutes, from C, C++, Python, and Java.",
          "Mains round: 3 hours; problems can be solved in C, C++, Python or Java.",
          "Winner is decided based on number of problems solved, test cases passed, and programming style.",
          "Winning teams receive cash prizes and certificates."
        ],
        studentCoordinators: [
          "P. Gayathri (Y22CS150) · 90633 41342",
          "K. Venu Sai (Y22CS074) · 91217 29277"
        ],
        staffCoordinators: [
          "Dr. K. Siva Kumar · Associate Professor, CSE · 96181 55353",
          "Mr. R. Mabu Basha",
          "Mr. P. Siva Prasad",
          "Mr. M. Brahmiah",
          "Dr. Z. Sunitha Bai",
          "Mr. P. Rama Krishna",
          "Ms. N. Zareena"
        ],
        venue: "CSE Programming Labs (HackerEarth based contest).",
        dateTime:
          "Prelims: 8:00 AM – 11:00 AM · Mains: 12:30 PM – 3:00 PM (same day).",
        prizes: "First Prize: ₹3,000 · Second Prize: ₹2,000 · Third Prize: ₹1,000",
        // TODO: replace with real Google Form link
        formUrl: "https://docs.google.com/forms/d/INSTAMAZE_FORM_ID/viewform"
      },

      // 4) Colloquy – Group Discussion
      {
        id: "colloquy",
        name: "Colloquy – Group Discussion",
        tagline:
          "Colloquy is a GD event to evaluate communication, critical thinking, and personality traits.",
        meta: "Individual participation · Group Discussion",
        rules: [
          "All participants must carry their college ID card.",
          "Registration must be done before the commencement of the event.",
          "Any suspicious activity can lead to direct disqualification; judges' decision is final.",
          "Any violation of rules leads to negative marking; the event is strictly time‑bound.",
          "This is an individual event; participants are grouped for discussion.",
          "Topics can be from a wide range of societal and current issues and will be given on the spot.",
          "Each group will have a minimum of 5 and a maximum of 8 students.",
          "Preparation time: 5 minutes.",
          "For a group of 5, discussion time is 10 minutes; for a group of 8, discussion time is 15 minutes.",
          "Only English language is allowed.",
          "Participants selected from prelims only are eligible for the final round.",
          "Winners in the final round will be selected solely by the panel of judges.",
          "Judges' decision is final."
        ],
        studentCoordinators: [
          "K. Yaswanth Vardhan (Y22CB027) · 95059 89959",
          "D. Vyshnavi (Y22CB014) · 93465 71689",
          "K. Vitesh Babu (Y22CB032) · 86398 11361",
          "Ch. SNVS Chandrika (Y22CB010) · 76710 05703"
        ],
        staffCoordinators: [
          "Dr. T. Anuradha · Associate Professor · 92487 87120",
          "Mrs. A. Maha Lakshmi · Asst. Professor · 77801 93847"
        ],
        venue: "E‑Learning Lab, Cyber Block.",
        dateTime: "Fest day · 11:00 AM – 1:00 PM",
        prizes: "First Prize: ₹3,000 · Second Prize: ₹2,000 · Third Prize: ₹1,000",
        // TODO: replace with real Google Form link
        formUrl: "https://docs.google.com/forms/d/COLLOQUY_FORM_ID/viewform"
      }
    ]
  };

  // ========== RENDER 4 SUB‑EVENT CARDS ==========

  const trackTitleEl = document.getElementById("trackTitle");
  const trackDescriptionEl = document.getElementById("trackDescription");
  const subEventGrid = document.getElementById("subEventGrid");

  if (trackTitleEl) trackTitleEl.textContent = techfusion.title;
  if (trackDescriptionEl) trackDescriptionEl.textContent = techfusion.description;

  if (subEventGrid) {
    subEventGrid.innerHTML = "";
    techfusion.subEvents.forEach((se, index) => {
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

  // ========== GENERIC MODAL LOGIC ==========

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
