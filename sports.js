document.addEventListener("DOMContentLoaded", () => {
  try {
    // ------------ DATA ------------
    const sportsEvents = [
      // BOYS
      {
        id: "boys-volleyball",
        name: "Volley Ball (Boys)",
        category: "Boys",
        image: "volly.jpg",
        tagline: "Boys volleyball tournament during COLORIDO 2K25.",
        rules: [
          "Tournament will be conducted as per standard volleyball rules; detailed format (knockout/league) will be announced by the Sports committee.",
          "All players must be bona fide students of their institutions and possess valid college ID cards.",
          "Team size, number of substitutes, and registration procedure will be specified in the circular shared by the Sports committee.",
          "Teams must report at least 30 minutes prior to their scheduled match time.",
          "Any kind of foul play, indiscipline, or argument with officials may result in penalties or disqualification.",
          "Decisions of referees and organizing officials will be final and binding."
        ],
        studentCoordinators: [
          "Student Coord – Boys Volleyball 1 · 9XXXXXXXXX",
          "Student Coord – Boys Volleyball 2 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Sports Officer / Faculty Coord – Volleyball"
        ],
        dateTime: "Fixtures will be displayed on the Sports notice board and official channels.",
        prizes: "Trophies and certificates for Winners and Runners‑up.",
        formUrl: "https://docs.google.com/forms/d/SPORTS_VOLLEYBALL_BOYS_FORM_ID/viewform"
      },
      {
        id: "boys-basketball",
        name: "Basket Ball (Boys)",
        category: "Boys",
        image: "basket ball boys.jpg",
        tagline: "Inter‑college boys basketball competition.",
        rules: [
          "Matches will follow standard basketball rules with quarters/halves as announced.",
          "Each college can register one official team; team composition and jersey numbers must be submitted in advance.",
          "Players must wear appropriate sportswear and shoes; no jewellery or unsafe accessories.",
          "Any attempt at rough play or misconduct will invite penalties according to rule book.",
          "Organizers reserve the right to modify schedule due to weather or other conditions.",
          "Referees' decision will be final."
        ],
        studentCoordinators: [
          "Student Coord – Boys Basketball 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Sports Officer / Faculty Coord – Basketball"
        ],
        dateTime: "To be announced in fixtures; likely morning/evening sessions.",
        prizes: "Trophies and certificates for Winners and Runners‑up.",
        formUrl: "https://docs.google.com/forms/d/SPORTS_BASKETBALL_BOYS_FORM_ID/viewform"
      },
      {
        id: "boys-tabletennis",
        name: "Table Tennis (Boys)",
        category: "Boys",
        image: "tt boy.jpg",
        tagline: "Boys table tennis tournament (singles/doubles as announced).",
        rules: [
          "Matches will be played according to official TT rules; best‑of format (e.g., best of 3 or 5 games) will be informed.",
          "Players must bring their own TT rackets; balls will be provided by organizers.",
          "Footwear with non‑marking soles is recommended to protect indoor flooring.",
          "Reporting time and table allocations will be displayed at the venue.",
          "Unsportsmanlike behavior may result in match loss or disqualification.",
          "Umpire and organizers' decisions will be final."
        ],
        studentCoordinators: [
          "Student Coord – Boys Table Tennis 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Table Tennis"
        ],
        dateTime: "Matches during fest days at the TT hall; detailed schedule on notice board.",
        prizes: "Medals and certificates for Winners and Runners‑up.",
        formUrl: "https://docs.google.com/forms/d/SPORTS_TT_BOYS_FORM_ID/viewform"
      },

      // GIRLS
      {
        id: "girls-throwball",
        name: "Throw Ball (Girls)",
        category: "Girls",
        image: "throw ball.png",
        tagline: "Girls throw ball tournament.",
        rules: [
          "Throw ball matches will be conducted as per standard rules and regulations.",
          "Each college can register one team with specified number of players and substitutes.",
          "Players must report in proper sportswear and shoes; no ornaments or accessories during play.",
          "Schedule and court allocation will be informed through notice and WhatsApp groups as applicable.",
          "Any disputes on rules must be raised only by the team captain with officials, not by individual players.",
          "Decision of referees and organizers is final."
        ],
        studentCoordinators: [
          "Student Coord – Girls Throw Ball 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Sports Officer / Faculty Coord – Throw Ball"
        ],
        dateTime: "Matches across fest days; timings as per fixture.",
        prizes: "Trophies and certificates for Winners and Runners‑up.",
        formUrl: "https://docs.google.com/forms/d/SPORTS_THROWBALL_GIRLS_FORM_ID/viewform"
      },
      {
        id: "girls-tennikoit",
        name: "Tennikoit (Girls)",
        category: "Girls",
        image: "Tennikoit.png",
        tagline: "Girls tennikoit competition.",
        rules: [
          "Matches will follow standard tennikoit rules as notified by the organizing committee.",
          "Participants must use approved rings and play within the marked courts.",
          "Footwear and attire should be suitable for outdoor/indoor courts as per venue.",
          "Players should report 20–30 minutes before their scheduled match time.",
          "Indiscipline or repeated rule violations may lead to disqualification.",
          "Referees' decisions will be binding."
        ],
        studentCoordinators: [
          "Student Coord – Girls Tennikoit 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Tennikoit"
        ],
        dateTime: "Fest days · timings and court numbers to be displayed.",
        prizes: "Medals and certificates for Winners and Runners‑up.",
        formUrl: "https://docs.google.com/forms/d/SPORTS_TENNIKOIT_GIRLS_FORM_ID/viewform"
      },
      {
        id: "girls-tabletennis",
        name: "Table Tennis (Girls)",
        category: "Girls",
        image: "tt.jpg",
        tagline: "Girls table tennis matches (singles/doubles as announced).",
        rules: [
          "Played as per standard table tennis rules; exact format and rounds will be announced.",
          "Players must bring their own rackets; balls and tables are provided.",
          "Reporting time and match order will be posted at the venue.",
          "Late arrival beyond grace period may result in walkover to the opponent.",
          "Code of conduct and sportsmanship must be maintained at all times.",
          "Umpires' and organizers' decisions will be final."
        ],
        studentCoordinators: [
          "Student Coord – Girls Table Tennis 1 · 9XXXXXXXXX"
        ],
        staffCoordinators: [
          "Faculty Coord – Table Tennis"
        ],
        dateTime: "During fest days at TT hall; detailed schedule will be shared.",
        prizes: "Medals and certificates for Winners and Runners‑up.",
        formUrl: "https://docs.google.com/forms/d/SPORTS_TT_GIRLS_FORM_ID/viewform"
      }
    ];

    // ------------ RENDER POSTERS ------------
    const boysGrid = document.getElementById("boysSportsGrid");
    const girlsGrid = document.getElementById("girlsSportsGrid");

    if (boysGrid) {
      boysGrid.innerHTML = "";
      const fragment = document.createDocumentFragment();
      sportsEvents
        .filter((s) => s.category === "Boys")
        .forEach((sport) => {
          const card = createSportCard(sport);
          fragment.appendChild(card);
        });
      boysGrid.appendChild(fragment);
    }

    if (girlsGrid) {
      girlsGrid.innerHTML = "";
      const fragment = document.createDocumentFragment();
      sportsEvents
        .filter((s) => s.category === "Girls")
        .forEach((sport) => {
          const card = createSportCard(sport);
          fragment.appendChild(card);
        });
      girlsGrid.appendChild(fragment);
    }

    function createSportCard(sport) {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "sport-card";
      card.dataset.name = sport.name;
      card.dataset.tagline = sport.tagline;
      card.dataset.category = sport.category;
      card.dataset.rules = JSON.stringify(sport.rules || []);
      card.dataset.studentCoords = JSON.stringify(sport.studentCoordinators || []);
      card.dataset.staffCoords = JSON.stringify(sport.staffCoordinators || []);
      card.dataset.dateTime = sport.dateTime || "";
      card.dataset.prizes = sport.prizes || "";
      card.dataset.formUrl = sport.formUrl || "#";

      card.innerHTML = `
        <div class="event-card-image-container">
          <img src="${sport.image}" alt="${sport.name} poster" class="event-card-image" loading="lazy" onerror="this.src='https://placehold.co/400x250/1a202c/00f7ff?text=Image+Not+Available&font=montserrat'">
        </div>
        <div class="event-card-content">
          <div class="sport-card-name">${sport.name}</div>
          <div class="sport-card-tagline">${sport.tagline}</div>
        </div>
      `;

      card.addEventListener("click", () => openSportModal(card));
      return card;
    }

    // ------------ MODAL LOGIC ------------
    const modalOverlay = document.getElementById("subeventModalOverlay");
    const modal = document.getElementById("subeventModal");
    const modalTitle = document.getElementById("subeventModalTitle");
    const modalTagline = document.getElementById("subeventModalTagline");
    const rulesList = document.getElementById("subeventRules");
    const studentCoordsList = document.getElementById("subeventStudentCoords");
    const staffCoordsList = document.getElementById("subeventStaffCoords");
    const categoryEl = document.getElementById("subeventCategory");
    const dateTimeEl = document.getElementById("subeventDateTime");
    const prizesEl = document.getElementById("subeventPrizes");
    const registerBtn = document.getElementById("subeventRegisterBtn");
    const closeButtons = document.querySelectorAll(".subevent-modal-close-btn");

    let lastFocusedElement = null;
    let keyHandler = null;

    function openSportModal(triggerEl) {
      if (!modalOverlay || !modal) return;

      lastFocusedElement = triggerEl;

      const name = triggerEl.dataset.name || "";
      const tagline = triggerEl.dataset.tagline || "";
      const category = triggerEl.dataset.category || "";
      const rules = JSON.parse(triggerEl.dataset.rules || "[]");
      const studentCoords = JSON.parse(triggerEl.dataset.studentCoords || "[]");
      const staffCoords = JSON.parse(triggerEl.dataset.staffCoords || "[]");
      const dateTime = triggerEl.dataset.dateTime || "";
      const prizes = triggerEl.dataset.prizes || "";
      const formUrl = triggerEl.dataset.formUrl || "#";

      modalTitle.textContent = name;
      modalTagline.textContent = tagline;
      categoryEl.textContent = category;
      dateTimeEl.textContent = dateTime;
      
      // Format prizes display
      prizesEl.innerHTML = "";
      if (prizes && typeof prizes === "object") {
        const fragment = document.createDocumentFragment();
        
        if (prizes.first) {
          const firstLi = document.createElement("li");
          firstLi.textContent = `1st Prize: ₹${prizes.first}`;
          fragment.appendChild(firstLi);
        }
        
        if (prizes.second) {
          const secondLi = document.createElement("li");
          secondLi.textContent = `2nd Prize: ₹${prizes.second}`;
          fragment.appendChild(secondLi);
        }
        
        if (prizes.third) {
          const thirdLi = document.createElement("li");
          thirdLi.textContent = `3rd Prize: ₹${prizes.third}`;
          fragment.appendChild(thirdLi);
        }
        
        prizesEl.appendChild(fragment);
      } else {
        prizesEl.textContent = prizes || "";
      }

      rulesList.innerHTML = "";
      if (rules.length > 0) {
        const fragment = document.createDocumentFragment();
        rules.forEach((rule) => {
          const li = document.createElement("li");
          li.textContent = rule;
          fragment.appendChild(li);
        });
        rulesList.appendChild(fragment);
      }

      studentCoordsList.innerHTML = "";
      if (studentCoords.length > 0) {
        const fragment = document.createDocumentFragment();
        studentCoords.forEach((c) => {
          const li = document.createElement("li");
          li.textContent = c;
          fragment.appendChild(li);
        });
        studentCoordsList.appendChild(fragment);
      }

      staffCoordsList.innerHTML = "";
      if (staffCoords.length > 0) {
        const fragment = document.createDocumentFragment();
        staffCoords.forEach((c) => {
          const li = document.createElement("li");
          li.textContent = c;
          fragment.appendChild(li);
        });
        staffCoordsList.appendChild(fragment);
      }

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
          closeSportModal();
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

    function closeSportModal() {
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

    closeButtons.forEach((btn) => btn.addEventListener("click", closeSportModal));

    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeSportModal();
      });
    }
  } catch (error) {
    console.error("Error initializing sports page:", error);
  }
});