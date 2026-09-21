(() => {
  const textBindings = [];
  const htmlBindings = [];
  const attrBindings = [];
  const textNodeBindings = [];

  const bindText = (selector, en) => {
    const el = document.querySelector(selector);
    if (el) textBindings.push({ el, pt: el.textContent, en });
  };
  const bindAllText = (selector, translations) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      if (translations[index] !== undefined) {
        textBindings.push({ el, pt: el.textContent, en: translations[index] });
      }
    });
  };
  const bindHTML = (selector, en) => {
    const el = document.querySelector(selector);
    if (el) htmlBindings.push({ el, pt: el.innerHTML, en });
  };
  const bindAttr = (selector, attribute, en) => {
    const el = document.querySelector(selector);
    if (el) attrBindings.push({ el, attribute, pt: el.getAttribute(attribute), en });
  };
  const bindEdgeTextNode = (selector, en, edge = "last") => {
    const el = document.querySelector(selector);
    if (!el) return;
    const nodes = [...el.childNodes].filter(
      (node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim(),
    );
    const node = edge === "first" ? nodes[0] : nodes[nodes.length - 1];
    if (node) textNodeBindings.push({ node, pt: node.nodeValue, en });
  };

  [
    ["#navLinks a:nth-child(1)", "Home"],
    ["#navLinks a:nth-child(2)", "About Clinichand"],
    ["#navLinks a:nth-child(3)", "Features"],
    ["#navLinks a:nth-child(4)", "Benefits"],
    ["#navLinks a:nth-child(5)", "About"],
    ["#navLinks a:nth-child(6)", "Contact"],
    ["#navLinks a:nth-child(7)", "Learn more"],
    ["#inicio .hero-copy .eyebrow", "Clinichand • Clinical workflow"],
    ["#inicio .hero-copy .lead", "Clinichand was developed to simplify processes, organize information and make healthcare professionals’ routines more efficient."],
    ["#inicio .actions .primary", "Discover Clinichand"],
    ["#inicio .actions .ghost", "Talk to us"],
    ["#inicio .interaction-hint", "Move to explore"],
    ["#produto .eyebrow", "Clinichand"],
    ["#produto h2", "A new way to manage your routine."],
    ["#produto .lead", "A platform designed to help healthcare professionals centralize processes and manage their activities through a simple, intuitive experience."],
    ["#recursos .eyebrow", "Features"],
    ["#recursos h2", "Everything you need, all in one place."],
    ["#recursos .section-head > p", "Essential areas organized to support a clearer, more structured clinical workflow."],
    ["#beneficios .eyebrow", "Benefits"],
    ["#beneficios h2", "More organization. More efficiency. More time for what matters."],
    ["#beneficios + .section .eyebrow", "How it works"],
    ["#beneficios + .section h2", "From access to everyday use, made simple."],
    [".showcase .eyebrow", "Product interface"],
    [".showcase-head h2", "Clarity on every screen."],
    [".tabs .tab:nth-child(1)", "Login"],
    [".tabs .tab:nth-child(2)", "Patients"],
    [".tabs .tab:nth-child(3)", "Schedule"],
    [".tabs .tab:nth-child(4)", "Medical records"],
    [".login-tagline", "HEALTHCARE CLOSER TO YOU"],
    [".login-card h3", "Welcome"],
    [".login-card > p", "Choose how you would like to sign in"],
    [".patient-titlebar h3", "Patients"],
    [".add-patient", "＋ New patient"],
    ["#patientCount", "4 patients found"],
    [".new-patient-button", "＋ New patient"],
    [".agenda-heading h3", "Schedule"],
    [".availability-button", "◷ Availability"],
    [".agenda-subtab:nth-child(1)", "Schedule"],
    [".agenda-subtab:nth-child(2)", "Waiting list"],
    [".view-option:nth-child(1)", "✓ Day"],
    [".view-option:nth-child(2)", "Week"],
    [".view-option:nth-child(3)", "Month"],
    ["#appointmentBadge", "Awaiting confirmation"],
    ["[data-action='confirmar']", "✓ Confirm"],
    ["[data-action='recusar']", "× Decline"],
    ["[data-action='reagendar']", "↻ Reschedule"],
    ["[data-action='cancelar']", "× Cancel"],
    [".new-consultation", "＋ New appointment"],
    [".record-heading h3", "Medical record"],
    [".record-export", "⇩ Export PDF"],
    [".record-status", "Active"],
    [".new-record-entry", "＋ New medical record entry"],
    ["main > section:nth-of-type(7) .eyebrow", "Who it is for"],
    ["main > section:nth-of-type(7) h2", "Made for those who live the clinical routine."],
    ["#sobre .trust-copy .eyebrow", "Clinichand commitment"],
    ["#sobre .trust-copy h2", "Organized information requires responsibility."],
    ["#sobre .trust-copy > p", "Clinichand is developed with organization, security, privacy and responsible information handling in mind."],
    ["#sobre .kainon-card .eyebrow", "Developed by"],
    ["#sobre .kainon-card h3", "Clinichand. Developed by KAINON."],
    ["#sobre .kainon-card p", "KAINON develops products and projects that turn complex processes into more organized, efficient experiences built to grow."],
    ["#sobre .kainon-card .btn", "Discover KAINON ↗"],
    [".final .eyebrow", "Clinichand — the future in your hands."],
    [".final h2", "The future of your routine starts now."],
    [".final p", "Discover Clinichand and find a new way to organize your routine."],
    [".final .primary", "Discover Clinichand"],
    [".final .ghost", "Talk to us"],
    ["#contato .eyebrow", "Contact"],
    ["#contato h2", "Let’s talk?"],
    ["#contato p", "Tell us a little about your needs and discover how Clinichand can become part of your routine."],
    ["#contato .btn", "Talk to us"],
    ["#emailDialogTitle", "How would you like to send it?"],
    ["#emailDialogTitle + p", "Choose one option to write to Clinichand."],
    ["#gmailAppChoice strong", "Gmail app"],
    ["#gmailAppChoice small", "Open the installed Gmail app"],
    ["#mailAppChoice strong", "Mail or another app"],
    ["#mailAppChoice small", "Use your device’s default email app"],
    ["#gmailWebChoice strong", "Gmail Web"],
    ["#gmailWebChoice small", "Open in your browser"],
    [".footer-brand > p", "Software for a more organized, practical and efficient clinical routine."],
    [".footer-col:nth-child(2) > b", "Navigation"],
    [".footer-col:nth-child(2) a:nth-of-type(1)", "About Clinichand"],
    [".footer-col:nth-child(2) a:nth-of-type(2)", "Features"],
    [".footer-col:nth-child(2) a:nth-of-type(3)", "Benefits"],
    [".footer-col:nth-child(2) a:nth-of-type(4)", "About"],
    [".footer-col:nth-child(3) > b", "Contact"],
    [".footer-bottom span:nth-child(2)", "Clinichand — the future in your hands."],
  ].forEach(([selector, en]) => bindText(selector, en));

  bindHTML(
    "#inicio .hero-copy h1",
    'Technology that puts the clinical routine <span>in your hands.</span>',
  );
  bindAllText("#produto .point span", [
    "Greater clarity when viewing information and appointments.",
    "More agility when following daily activities.",
    "More practicality to keep your routine structured.",
  ]);
  bindAllText("#recursos .feature h3", [
    "Patient management",
    "Schedule",
    "Medical records",
    "Workflow organization",
    "Integration",
  ]);
  bindAllText("#recursos .feature p", [
    "Organize information and manage your routine in a more structured way.",
    "Get a clearer view of your appointments and consultations.",
    "Centralize important information in an organized way.",
    "Reduce unnecessary processes and gain more control over your activities.",
    "Connect processes and information for a smoother experience.",
  ]);
  bindAllText("#beneficios .benefit h3", ["Organization", "Efficiency", "Practicality", "Control"]);
  bindAllText("#beneficios .benefit p", [
    "Structured information that is simple and accessible.",
    "Faster processes and a smoother routine.",
    "An experience designed to make everyday work easier.",
    "Greater visibility into your operations and appointments.",
  ]);
  bindAllText("#beneficios + .section .step h3", ["Access", "Organize", "Follow", "Improve"]);
  bindAllText("#beneficios + .section .step p", [
    "Enter the platform quickly and securely.",
    "Centralize information and processes.",
    "Get a clear view of your routine.",
    "Use organized information to improve your processes.",
  ]);

  bindEdgeTextNode(".login-option:nth-child(1)", "I’m a professional");
  bindEdgeTextNode(".login-option:nth-child(2)", "I’m a patient");
  bindEdgeTextNode(".login-option:nth-child(3)", "I’m a clinic");
  bindEdgeTextNode(".login-option:nth-child(4)", "I’m part of a team");
  bindEdgeTextNode("#inicio .hero-note", "A centralized, clear and intuitive digital experience.");
  bindEdgeTextNode(".agenda-tools label", "Daily appointments", "first");

  bindAllText("#statusFilter option", ["All statuses", "Active", "Inactive"]);
  bindAllText(".patient-filters select:nth-child(2) option", ["All professionals", "Demo professional"]);
  bindAllText(".patient-filters select:nth-child(3) option", ["Last appointment", "Name"]);
  bindAllText(".patient-row .patient-status", ["Active", "Active", "Inactive", "Active"]);
  bindAllText(".patient-row .record-link", ["View medical record", "View medical record", "View medical record", "View medical record"]);
  bindAllText(".patient-row .patient-info small", [
    "Demo record · No real personal data",
    "Demo record · No real personal data",
    "Demo record · No real personal data",
    "Demo record · No real personal data",
  ]);
  bindHTML(
    ".appointment-details",
    "<strong>Type:</strong> Consultation · <strong>Procedure:</strong> Assessment<br><strong>Professional:</strong> Demo professional<br><strong>Location:</strong> Clinic/Office · <strong>Room/Resources:</strong> Not provided<br><strong>Duration:</strong> 1h · <strong>Financial:</strong> Open",
  );
  bindText(".record-person small", "Demo record · No real personal data");
  bindAllText(".record-subtab", ["History", "Medical history", "Exams", "Prescriptions", "Documents"]);
  bindAllText(".record-entry-head > b", ["Demo entry — Assessment", "Demo entry — Follow-up", "Demo entry — First appointment"]);
  const recordEntries = [
    "<strong>Content:</strong> visual example with no real clinical information.<br><strong>Record:</strong> data used exclusively to demonstrate the interface.",
    "<strong>Content:</strong> visual example with no real clinical information.",
    "<strong>Content:</strong> visual example with no real clinical information.",
  ];
  document.querySelectorAll(".record-entry > p").forEach((el, index) => {
    if (recordEntries[index]) htmlBindings.push({ el, pt: el.innerHTML, en: recordEntries[index] });
  });

  bindAllText("main > section:nth-of-type(7) .audience-card h3", [
    "Doctors", "Clinics", "Medical offices", "Healthcare professionals", "Administrative teams", "Managers",
  ]);
  bindAllText("main > section:nth-of-type(7) .audience-card p", [
    "Organization to keep track of activities and information.",
    "Greater clarity for clinical operations.",
    "A more centralized and practical routine.",
    "An experience designed for different workflows.",
    "More organized processes and appointments.",
    "Greater visibility to monitor operations.",
  ]);
  bindAllText("#sobre .trust-item b", ["Privacy", "Responsibility", "Organization", "Trust"]);
  bindAllText("#sobre .trust-item small", [
    "Respect for routine information.",
    "Thoughtful decisions at every stage of the product.",
    "Clear, structured information.",
    "A professional experience.",
  ]);

  bindAttr(".brand", "aria-label", "Clinichand home");
  bindAttr("#menuBtn", "aria-label", "Open menu");
  bindAttr(".lang-switch", "aria-label", "Language");
  bindAttr("#logoPlayground", "aria-label", "Interactive Clinichand identity");
  bindAttr(".interactive-logo", "alt", "Official Clinichand symbol");
  bindAttr("#patientSearch", "placeholder", "⌕  Search patients by name, ID or phone number");
  bindAttr("#patientSearch", "aria-label", "Search patients");
  bindAttr("#statusFilter", "aria-label", "Filter by status");
  bindAttr(".patient-filters select:nth-child(2)", "aria-label", "Filter by professional");
  bindAttr(".patient-filters select:nth-child(3)", "aria-label", "Sort patients");
  bindAttr(".record-subtabs", "aria-label", "Medical record sections");
  bindAttr(".email-close", "aria-label", "Close email options");
  bindAttr(".footer-socials", "aria-label", "KAINON social media");
  bindAttr("#inicio .actions .ghost", "href", "mailto:supportkainon@gmail.com?subject=I%20want%20to%20learn%20more%20about%20Clinichand");
  bindAttr(".final .primary", "href", "mailto:supportkainon@gmail.com?subject=I%20want%20to%20learn%20more%20about%20Clinichand");
  bindAttr(".final .ghost", "href", "mailto:supportkainon@gmail.com?subject=Contact%20-%20Clinichand");
  bindAttr("#contato .btn", "href", "mailto:supportkainon@gmail.com?subject=Contact%20-%20Clinichand");

  const buttons = [...document.querySelectorAll(".lang-switch button")];
  const description = document.querySelector('meta[name="description"]');
  const initialDescription = description?.content || "";
  const initialTitle = document.title;
  let current = "pt";

  const message = (key, variables = {}) => {
    const pt = {
      patients_found: `${variables.count} paciente${variables.count === 1 ? "" : "s"} encontrado${variables.count === 1 ? "" : "s"}`,
      record_opened: `Prontuário de ${variables.name} aberto.`,
      new_patient: "Novo paciente: cadastro será iniciado.",
      schedule_updated: "Agenda atualizada para a data escolhida.",
      view_selected: `Visualização por ${variables.view} selecionada.`,
      tab_selected: `${variables.tab} selecionada.`,
      confirmed: "Consulta confirmada.", declined: "Consulta recusada.", rescheduled: "Reagendamento selecionado.", cancelled: "Consulta cancelada.",
      availability: "Configuração de disponibilidade selecionada.",
      new_appointment: "Nova consulta: agendamento será iniciado.",
      empty_record: `${variables.section}: nenhuma informação adicionada nesta demonstração.`,
      section_selected: `${variables.section} selecionado.`,
      export_ready: "Prontuário preparado para exportação em PDF.",
      new_record: "Nova entrada: formulário de registro será iniciado.",
    };
    const en = {
      patients_found: `${variables.count} patient${variables.count === 1 ? "" : "s"} found`,
      record_opened: `Medical record for ${variables.name} opened.`,
      new_patient: "New patient: registration will begin.",
      schedule_updated: "Schedule updated to the selected date.",
      view_selected: `${variables.view} view selected.`,
      tab_selected: `${variables.tab} selected.`,
      confirmed: "Appointment confirmed.", declined: "Appointment declined.", rescheduled: "Rescheduling selected.", cancelled: "Appointment cancelled.",
      availability: "Availability settings selected.",
      new_appointment: "New appointment: scheduling will begin.",
      empty_record: `${variables.section}: no information has been added in this demo.`,
      section_selected: `${variables.section} selected.`,
      export_ready: "Medical record prepared for PDF export.",
      new_record: "New entry: the registration form will open.",
    };
    return (current === "en" ? en : pt)[key] || "";
  };

  const updatePatientCount = () => {
    const count = [...document.querySelectorAll(".patient-row")].filter((row) => !row.hidden).length;
    const target = document.querySelector("#patientCount");
    if (target) target.textContent = message("patients_found", { count });
  };

  const setLanguage = (language, updateAddress = false) => {
    current = language === "en" ? "en" : "pt";
    document.documentElement.lang = current === "en" ? "en" : "pt-BR";
    textBindings.forEach(({ el, pt, en }) => { el.textContent = current === "en" ? en : pt; });
    htmlBindings.forEach(({ el, pt, en }) => { el.innerHTML = current === "en" ? en : pt; });
    attrBindings.forEach(({ el, attribute, pt, en }) => { el.setAttribute(attribute, current === "en" ? en : pt); });
    textNodeBindings.forEach(({ node, pt, en }) => { node.nodeValue = current === "en" ? ` ${en}` : pt; });
    document.title = current === "en" ? "Clinichand — The future in your hands" : initialTitle;
    if (description) description.content = current === "en" ? "Clinichand — software for a more organized, practical and efficient clinical routine." : initialDescription;
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === current)));
    const menuButton = document.querySelector("#menuBtn");
    if (menuButton) menuButton.setAttribute("aria-label", current === "en" ? (menuButton.getAttribute("aria-expanded") === "true" ? "Close menu" : "Open menu") : (menuButton.getAttribute("aria-expanded") === "true" ? "Fechar menu" : "Abrir menu"));
    updatePatientCount();
    try { localStorage.setItem("clinichand-language", current); } catch (_) {}
    if (updateAddress) {
      const url = new URL(location.href);
      url.searchParams.set("lang", current);
      history.replaceState(null, "", url);
    }
  };

  buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang, true)));
  document.querySelector("#menuBtn")?.addEventListener("click", () => queueMicrotask(() => {
    const menuButton = document.querySelector("#menuBtn");
    menuButton.setAttribute("aria-label", current === "en" ? (menuButton.getAttribute("aria-expanded") === "true" ? "Close menu" : "Open menu") : (menuButton.getAttribute("aria-expanded") === "true" ? "Fechar menu" : "Abrir menu"));
  }));
  document.querySelectorAll("#navLinks a").forEach((link) => link.addEventListener("click", () => queueMicrotask(() => {
    const menuButton = document.querySelector("#menuBtn");
    menuButton?.setAttribute("aria-label", current === "en" ? "Open menu" : "Abrir menu");
  })));

  [document.querySelector("#patientSearch"), document.querySelector("#statusFilter")].forEach((el) => el?.addEventListener(el.tagName === "SELECT" ? "change" : "input", updatePatientCount));
  document.querySelectorAll(".record-link").forEach((button) => button.addEventListener("click", () => {
    const name = button.closest(".patient-row").dataset.name;
    document.querySelector("#recordFeedback").textContent = message("record_opened", { name });
  }));
  document.querySelectorAll(".add-patient, .new-patient-button").forEach((button) => button.addEventListener("click", () => { document.querySelector("#patientFeedback").textContent = message("new_patient"); }));
  document.querySelector("#agendaDate")?.addEventListener("change", () => { document.querySelector("#agendaFeedback").textContent = message("schedule_updated"); });
  document.querySelectorAll(".view-option").forEach((button) => button.addEventListener("click", () => { document.querySelector("#agendaFeedback").textContent = message("view_selected", { view: button.textContent.replace("✓", "").trim() }); }));
  document.querySelectorAll(".agenda-subtab").forEach((button) => button.addEventListener("click", () => { document.querySelector("#agendaFeedback").textContent = message("tab_selected", { tab: button.textContent.trim() }); }));
  document.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => {
    const keys = { confirmar: "confirmed", recusar: "declined", reagendar: "rescheduled", cancelar: "cancelled" };
    document.querySelector("#agendaFeedback").textContent = message(keys[button.dataset.action]);
    if (current === "en") {
      if (button.dataset.action === "confirmar") document.querySelector("#appointmentBadge").textContent = "Confirmed";
      if (button.dataset.action === "recusar") document.querySelector("#appointmentBadge").textContent = "Declined";
      if (button.dataset.action === "cancelar") document.querySelector("#appointmentBadge").textContent = "Cancelled";
    }
  }));
  document.querySelector(".availability-button")?.addEventListener("click", () => { document.querySelector("#agendaFeedback").textContent = message("availability"); });
  document.querySelector(".new-consultation")?.addEventListener("click", () => { document.querySelector("#agendaFeedback").textContent = message("new_appointment"); });
  document.querySelectorAll(".record-subtab").forEach((button) => button.addEventListener("click", () => {
    const section = button.textContent.trim();
    const empty = document.querySelector("#recordEmpty");
    if (empty.style.display === "grid") empty.textContent = message("empty_record", { section });
    document.querySelector("#recordFeedback").textContent = message("section_selected", { section });
  }));
  document.querySelector(".record-export")?.addEventListener("click", () => { document.querySelector("#recordFeedback").textContent = message("export_ready"); });
  document.querySelector(".new-record-entry")?.addEventListener("click", () => { document.querySelector("#recordFeedback").textContent = message("new_record"); });

  let savedLanguage = "pt";
  try { savedLanguage = localStorage.getItem("clinichand-language") || "pt"; } catch (_) {}
  const requestedLanguage = new URLSearchParams(location.search).get("lang");
  setLanguage(requestedLanguage === "en" || requestedLanguage === "pt" ? requestedLanguage : savedLanguage);
  window.clinicI18n = { setLanguage, message, get language() { return current; } };
})();
