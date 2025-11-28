// Standardized Event Data Structure for COLORIDO 2K25
// This file defines the common structure for all event categories

/**
 * Event Category Structure
 * @typedef {Object} EventCategory
 * @property {string} title - The name of the event category
 * @property {string} description - Brief description of the category
 * @property {string} venue - Venue for the category (shown only in modal)
 * @property {string[]} staffCoordinators - List of staff coordinators with contact info (shown only in modal)
 * @property {SubEvent[]} subEvents - Array of sub-events in this category
 */

/**
 * Sub-Event Structure
 * @typedef {Object} SubEvent
 * @property {string} id - Unique identifier for the event
 * @property {string} name - Name of the sub-event
 * @property {string} tagline - Short description/tagline
 * @property {number} day - Day of the event (1 or 2)
 * @property {string} meta - Category metadata (e.g., "Individual · Classical")
 * @property {string[]} rules - List of rules for the event
 * @property {string[]} studentCoordinators - List of student coordinators
 * @property {string[]} staffCoordinators - List of staff coordinators for this specific event
 * @property {string} venue - Specific venue for this event (shown only in modal)
 * @property {string} dateTime - Date and time information (shown only in modal)
 * @property {string} prizes - Prize information (shown only in modal)
 * @property {string} formUrl - Registration form URL
 */

// Example structure for Fine Arts
const fineArtsData = {
  title: "Fine Arts",
  description: "Visual‑arts events including conceptual painting, paper folding, traditional designs, rangoli, and sculpture.",
  venue: "Silver Jubilee Block Portico",
  staffCoordinators: [
    "Dr. P. Samatha Chowdary, CE – 9032776749",
    "Smt. M. Sunitha, ECE – 9573297310",
    "Dr. V. Sujatha Lakshmi, MCA – 9441834758",
    "Smt. P. Vaniree, ECE – 8897020224",
    "Sri. G.R.N. Chowdary, ME – 9848384828"
  ],
  subEvents: [
    {
      id: "origami-art",
      name: "Origami Art",
      tagline: "Paper‑folding contest to create artistic models without cutting or glue (as per rules).",
      day: 1,
      meta: "Individual · Paper folding",
      rules: [
        "Individual participation; each participant should register in advance.",
        "Participants must create origami models using paper only; use of scissors, glue, or other materials may be restricted as per rules announced.",
        "Basic colored or plain papers may be provided, or participants may be asked to bring their own (organizers will clarify).",
        "Time limit for completing one or more models will be announced at the beginning.",
        "Models will be judged on neatness, difficulty, originality, and overall presentation.",
        "Pre‑folded or pre‑prepared models are not allowed; all folding must be done during the contest.",
        "Any violation of rules may result in disqualification.",
        "Judges’ decision is final."
      ],
      studentCoordinators: [
        "Student Coord – Origami Art 1 · 9XXXXXXXXX"
      ],
      staffCoordinators: [
        "Faculty Coord – Origami Art 1"
      ],
      venue: "Fine Arts Classroom / Hall.",
      dateTime: "Festival day · forenoon or afternoon slot.",
      prizes: "1st: ₹1,500 · 2nd: ₹1,000 · 3rd: ₹500.",
      formUrl: "https://docs.google.com/forms/d/FINEARTS_ORIGAMI_FORM_ID/viewform"
    },
    // Additional events would follow the same structure...
  ]
};

// Example structure for Dance
const danceData = {
  title: "Dance & Fashion Show",
  description: "Solo and group dance competitions across Classical, Folk, Western styles, plus Choreoday and Fashion Show.",
  venue: "Open Air Theatre",
  staffCoordinators: [
    "Sri. J. Ranga Raya Chowdary, ME – 9701730044",
    "Sri. K. Siva Prasada Rao, CHE – 9640940920",
    "Smt. M. Vasavi, CSE – 9490114243",
    "Sri. V. Mastan Rao, EEE – 9492078762"
  ],
  subEvents: [
    {
      id: "classical-solo-dance",
      name: "Classical (Solo)",
      tagline: "Solo classical dance in any approved Indian classical style.",
      day: 1,
      meta: "Individual · Classical",
      rules: [
        "Only individual participation is allowed for Classical Solo.",
        "Dance style should belong to any recognized Indian classical form (e.g., Bharatanatyam, Kuchipudi, Kathak, Odissi etc.).",
        "Maximum time including entry/exit should be within the limit announced (for example, 8–10 minutes).",
        "Maximum number of accompanists will be specified (commonly up to 3); all must be registered.",
        "Recorded music may be allowed or disallowed as per organizers’ guidelines; check in advance.",
        "Judgment will be based on technique, expressions (abhinaya), rhythm (tala), costume, and overall presentation.",
        "Participants must report at least 30 minutes before the event slot for stage briefing.",
        "The decision of the judges will be final."
      ],
      studentCoordinators: [
        "Student Coord – Classical Solo Dance 1 · 9XXXXXXXXX"
      ],
      staffCoordinators: [
        "Faculty Coord – Classical Solo Dance 1"
      ],
      venue: "Main Stage / Auditorium.",
      dateTime: "Festival day · classical solo slot.",
      prizes: "1st: ₹3,000 · 2nd: ₹2,000 · 3rd: ₹1,000 (mapped to Dance prize slab).",
      formUrl: "https://docs.google.com/forms/d/DANCE_CLASSICAL_SOLO_FORM_ID/viewform"
    },
    // Additional events would follow the same structure...
  ]
};

// Export the structures for use in other files
// In a real implementation, you would export these properly based on your module system