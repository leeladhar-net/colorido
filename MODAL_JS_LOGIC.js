// Standardized Modal JavaScript Logic
// This is the correct implementation that should be used in all event files

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