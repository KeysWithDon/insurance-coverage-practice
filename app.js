const studySets = {
  dp: {
    shortLabel: "DP",
    title: "Dwelling Policies Coverage Parts",
    subtitle: "Exam prep fill-in chart",
    rowHeader: "Coverage Part",
    storageKey: "dwelling-policy-chart-practice-v2",
    columns: [
      { key: "dp1", label: "DP-1" },
      { key: "dp2", label: "DP-2" },
      { key: "dp3", label: "DP-3" }
    ],
    references: [
      {
        src: "assets/reference-chart.jpg",
        alt: "Original chart photo for dwelling policies coverage parts",
        caption: "Coverage parts"
      },
      {
        src: "assets/perils-removal-chart.jpg",
        alt: "Reference photo showing perils covered against and removal rows",
        caption: "Perils covered against and removal"
      }
    ],
    rows: [
      {
        id: "coverage-a",
        coverage: "Coverage A - Dwelling",
        answers: {
          dp1: answer("Declared Value", ["declared", "value"]),
          dp2: answer("Declared Value", ["declared", "value"]),
          dp3: answer("Declared Value", ["declared", "value"])
        }
      },
      {
        id: "coverage-b",
        coverage: "Coverage B - Other Structures",
        answers: {
          dp1: answer("10% of Coverage A (Within Policy Limits)", ["10", "coverage a", "within", "policy limits"]),
          dp2: answer("10% of Coverage A (Outside Policy Limits)", ["10", "coverage a", "outside", "policy limits"]),
          dp3: answer("10% of Coverage A (Outside Policy Limits)", ["10", "coverage a", "outside", "policy limits"])
        }
      },
      {
        id: "coverage-c",
        coverage: "Coverage C - Personal Property",
        answers: {
          dp1: answer("No minimum", ["no", "minimum"]),
          dp2: answer("No minimum", ["no", "minimum"]),
          dp3: answer("No minimum", ["no", "minimum"])
        }
      },
      {
        id: "coverage-d",
        coverage: "Coverage D - Fair Rental Value",
        answers: {
          dp1: answer("20% of Coverage A (Not an additional amount above Coverage A limit)", ["20", "coverage a", "not", "additional", "coverage a limit"]),
          dp2: answer("20% of Coverage A (Additional amount above Coverage A limit)", ["20", "coverage a", "additional", "coverage a limit"]),
          dp3: answer("20% of Coverage A (Additional amount above Coverage A limit)", ["20", "coverage a", "additional", "coverage a limit"])
        }
      },
      {
        id: "coverage-e",
        coverage: "Coverage E - Additional Living Expense",
        answers: {
          dp1: answer("By endorsement; 20% of Coverage A (Not an additional amount above Coverage A limit)", ["by endorsement", "20", "coverage a", "not", "additional", "coverage a limit"]),
          dp2: answer("20% of Coverage A (Additional amount above Coverage A limit)", ["20", "coverage a", "additional", "coverage a limit"]),
          dp3: answer("20% of Coverage A (Additional amount above Coverage A limit)", ["20", "coverage a", "additional", "coverage a limit"])
        }
      },
      {
        id: "perils",
        coverage: "Perils Covered Against",
        answers: {
          dp1: answer(
            "Fire, Lightning and Internal Explosion; WC SHAVVER can be added by endorsement; V.M.M. by endorsement",
            ["fire", "lightning", "internal explosion", ["wc shavver", "w c shavver"], "endorsement", ["vmm", "v m m"]]
          ),
          dp2: answer(
            "Same as DP-1 perils, plus damage by burglars; weight of ice, sleet or snow; glass breakage; accidental discharge of water or steam; falling object; freezing of plumbing, heating, A/C or sprinkler system; artificially generated electrical current; cracking or tearing apart of a steam water system",
            ["same as dp 1", "burglars", "ice", "sleet", "snow", "glass breakage", "accidental discharge", "water", "steam", "falling object", "freezing", "plumbing", "heating", ["a/c", "a c"], "sprinkler", "electrical current", "artificially generated", "cracking", "tearing apart"]
          ),
          dp3: answer(
            "All-risk on Coverage A & B; Broad Form (DP-2) perils on Coverage C",
            ["all risk", "coverage a", ["coverage b", "a and b"], "broad form", ["dp 2", "dp2"], "coverage c"]
          )
        }
      },
      {
        id: "removal",
        coverage: "Removal",
        answers: {
          dp1: answer("5 days", ["5", "days"]),
          dp2: answer("30 days", ["30", "days"]),
          dp3: answer("30 days", ["30", "days"])
        }
      },
      {
        id: "coverage-l",
        coverage: "Coverage L - Personal Liability",
        answers: {
          dp1: answer("Added by endorsement (Minimum of $100,000 with larger amount available)", ["added", "endorsement", "minimum", "100000", "larger", "available"]),
          dp2: answer("Added by endorsement (Minimum of $100,000 with larger amount available)", ["added", "endorsement", "minimum", "100000", "larger", "available"]),
          dp3: answer("Added by endorsement (Minimum of $100,000 with larger amount available)", ["added", "endorsement", "minimum", "100000", "larger", "available"])
        }
      },
      {
        id: "coverage-m",
        coverage: "Coverage M - Medical Payments to Others",
        answers: {
          dp1: answer("The minimum coverage is $1,000 with larger amounts available.", ["minimum", "coverage", "1000", "larger", "amounts", "available"]),
          dp2: answer("The minimum coverage is $1,000 with larger amounts available.", ["minimum", "coverage", "1000", "larger", "amounts", "available"]),
          dp3: answer("The minimum coverage is $1,000 with larger amounts available.", ["minimum", "coverage", "1000", "larger", "amounts", "available"])
        }
      }
    ]
  },
  ho: {
    shortLabel: "HO",
    title: "Homeowners Coverage Parts",
    subtitle: "Homeowners policy comparison chart",
    rowHeader: "Coverage Part",
    storageKey: "homeowners-chart-practice-v1",
    columns: [
      { key: "ho2", label: "HO 2 Broad" },
      { key: "ho3", label: "HO 3 Special" },
      { key: "ho4", label: "HO 4 Renters" },
      { key: "ho5", label: "HO 5 Comprehensive" },
      { key: "ho6", label: "HO 6 Condo Owners" },
      { key: "ho8", label: "HO 8 Modified" }
    ],
    references: [
      {
        src: "assets/homeowners-chart.jpg",
        alt: "Reference photo showing homeowners coverage parts chart",
        caption: "Homeowners coverage parts"
      }
    ],
    rows: [
      {
        id: "part-a",
        coverage: "Part A - Dwelling",
        answers: {
          ho2: answer("No Minimum", ["no", "minimum"]),
          ho3: answer("No Minimum", ["no", "minimum"]),
          ho4: answer("No Coverage", ["no", "coverage"]),
          ho5: answer("No Minimum", ["no", "minimum"]),
          ho6: answer("$1,000 Flat", ["1000", "flat"]),
          ho8: answer("No Minimum", ["no", "minimum"])
        }
      },
      {
        id: "part-b",
        coverage: "Part B - Other Structures",
        answers: {
          ho2: answer("10% of A", ["10", "a"]),
          ho3: answer("10% of A", ["10", "a"]),
          ho4: answer("No Coverage", ["no", "coverage"]),
          ho5: answer("10% of A", ["10", "a"]),
          ho6: answer("No Coverage", ["no", "coverage"]),
          ho8: answer("10% of A", ["10", "a"])
        }
      },
      {
        id: "part-c",
        coverage: "Part C - Personal Property",
        answers: {
          ho2: answer("50% of A", ["50", "a"]),
          ho3: answer("50% of A", ["50", "a"]),
          ho4: answer("Insured selects coverage limit ($5K min)", ["insured selects", "coverage limit", ["5k", "5 k", "5000"], "min"]),
          ho5: answer("50% of A", ["50", "a"]),
          ho6: answer("Insured selects coverage limit ($10K min)", ["insured selects", "coverage limit", ["10k", "10 k", "10000"], "min"]),
          ho8: answer("50% of A", ["50", "a"])
        }
      },
      {
        id: "part-d",
        coverage: "Part D - Loss of Use",
        answers: {
          ho2: answer("20% of A", ["20", "a"]),
          ho3: answer("20% of A", ["20", "a"]),
          ho4: answer("20% of C", ["20", "c"]),
          ho5: answer("20% of A", ["20", "a"]),
          ho6: answer("40% of C", ["40", "c"]),
          ho8: answer("10% of A", ["10", "a"])
        }
      },
      {
        id: "part-e",
        coverage: "Part E - Liability",
        answers: {
          ho2: answer("$100,000 Minimum", ["100000", "minimum"]),
          ho3: answer("$100,000 Minimum", ["100000", "minimum"]),
          ho4: answer("$100,000 Minimum", ["100000", "minimum"]),
          ho5: answer("$100,000 Minimum", ["100000", "minimum"]),
          ho6: answer("$100,000 Minimum", ["100000", "minimum"]),
          ho8: answer("$100,000 Minimum", ["100000", "minimum"])
        }
      },
      {
        id: "part-f",
        coverage: "Part F - Med Pay",
        answers: {
          ho2: answer("$1,000 Minimum", ["1000", "minimum"]),
          ho3: answer("$1,000 Minimum", ["1000", "minimum"]),
          ho4: answer("$1,000 Minimum", ["1000", "minimum"]),
          ho5: answer("$1,000 Minimum", ["1000", "minimum"]),
          ho6: answer("$1,000 Minimum", ["1000", "minimum"]),
          ho8: answer("$1,000 Minimum", ["1000", "minimum"])
        }
      },
      {
        id: "perils",
        coverage: "Perils Covered Against",
        answers: {
          ho2: answer("Broad Form Perils", ["broad form", "perils"]),
          ho3: answer("Open Perils on A and B. Broad form on C", ["open perils", ["a and b", "a b"], "broad form", ["on c", "coverage c"]]),
          ho4: answer("Broad form Perils", ["broad form", "perils"]),
          ho5: answer("Open perils on A, B and C", ["open perils", ["a b and c", "a b c"]]),
          ho6: answer("Broad form Perils", ["broad form", "perils"]),
          ho8: answer("Fire, Lightning, WC Shaver, VMM, Theft, Volcanic action", ["fire", "lightning", ["wc shaver", "w c shaver"], ["vmm", "v m m"], "theft", "volcanic"])
        }
      }
    ]
  }
};

const activeStudyStorageKey = "coverage-chart-active-study-v1";
const body = document.querySelector("#practiceBody");
const brandMark = document.querySelector("#brandMark");
const studyTitle = document.querySelector("#studyTitle");
const studySubtitle = document.querySelector("#studySubtitle");
const studyMode = document.querySelector("#studyMode");
const scoreValue = document.querySelector("#scoreValue");
const practiceMode = document.querySelector("#practiceMode");
const chartTable = document.querySelector("#practiceTable");
const chartCaption = document.querySelector("#chartCaption");
const practiceHeader = document.querySelector("#practiceHeader");
const referenceFigures = document.querySelector("#referenceFigures");
const cardPrompt = document.querySelector("#cardPrompt");
const cardInput = document.querySelector("#cardInput");
const cardFeedback = document.querySelector("#cardFeedback");
const cardAnswer = document.querySelector("#cardAnswer");
const cardCount = document.querySelector("#cardCount");

let activeStudyKey = loadActiveStudyKey();
let activeStudy = studySets[activeStudyKey];
let progress = loadProgress();
let deck = [];
let randomRowIndex = Math.floor(Math.random() * activeStudy.rows.length);
let cardIndex = 0;

studyMode.value = activeStudyKey;
renderStudy();

document.querySelector("#checkAll").addEventListener("click", () => checkActiveCells(false));
document.querySelector("#showMisses").addEventListener("click", () => checkActiveCells(true));
document.querySelector("#revealAll").addEventListener("click", () => setAllAnswersVisible(true));
document.querySelector("#hideAll").addEventListener("click", () => setAllAnswersVisible(false));
document.querySelector("#resetAll").addEventListener("click", resetAll);
document.querySelector("#printBlank").addEventListener("click", () => window.print());
studyMode.addEventListener("change", () => switchStudy(studyMode.value));
practiceMode.addEventListener("change", () => {
  if (practiceMode.value === "row") {
    randomRowIndex = Math.floor(Math.random() * activeStudy.rows.length);
  }
  applyPracticeMode();
  updateScore();
});

document.querySelector("#cardCheck").addEventListener("click", checkCard);
document.querySelector("#cardReveal").addEventListener("click", revealCard);
document.querySelector("#cardNext").addEventListener("click", nextCard);
cardInput.addEventListener("input", () => {
  cardFeedback.textContent = "";
  cardFeedback.className = "card-feedback";
  cardAnswer.hidden = true;
});

function answer(text, requiredTerms) {
  return { text, requiredTerms };
}

function switchStudy(nextStudyKey) {
  if (!studySets[nextStudyKey]) {
    return;
  }

  activeStudyKey = nextStudyKey;
  activeStudy = studySets[activeStudyKey];
  progress = loadProgress();
  cardIndex = 0;
  randomRowIndex = Math.floor(Math.random() * activeStudy.rows.length);
  saveActiveStudyKey();
  renderStudy();
}

function renderStudy() {
  brandMark.textContent = activeStudy.shortLabel;
  studyTitle.textContent = activeStudy.title;
  studySubtitle.textContent = activeStudy.subtitle;
  chartCaption.textContent = activeStudy.title;
  chartTable.dataset.study = activeStudyKey;

  renderPracticeOptions();
  renderHeader();
  renderReferences();
  renderTable();
  deck = buildDeck();
  applyPracticeMode();
  showCard();
  updateScore();
}

function renderPracticeOptions() {
  const options = [
    { value: "all", label: "Full chart" },
    ...activeStudy.columns.map((column) => ({ value: column.key, label: `${column.label} only` })),
    { value: "row", label: "Random row" }
  ];

  practiceMode.innerHTML = "";
  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.label;
    practiceMode.append(option);
  });
  practiceMode.value = "all";
}

function renderHeader() {
  practiceHeader.innerHTML = "";

  const rowHeader = document.createElement("th");
  rowHeader.scope = "col";
  rowHeader.textContent = activeStudy.rowHeader;
  practiceHeader.append(rowHeader);

  activeStudy.columns.forEach((column) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = column.label;
    practiceHeader.append(th);
  });
}

function renderReferences() {
  referenceFigures.innerHTML = "";

  activeStudy.references.forEach((reference) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");

    image.src = reference.src;
    image.alt = reference.alt;
    caption.textContent = reference.caption;
    figure.append(image, caption);
    referenceFigures.append(figure);
  });
}

function renderTable() {
  body.innerHTML = "";

  activeStudy.rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.scope = "row";
    th.textContent = row.coverage;
    tr.append(th);

    activeStudy.columns.forEach((column) => {
      const cellId = getCellId(row.id, column.key);
      const td = document.createElement("td");
      const cell = document.createElement("div");
      const input = document.createElement("textarea");
      const actions = document.createElement("div");
      const revealButton = document.createElement("button");
      const clearButton = document.createElement("button");
      const feedback = document.createElement("div");
      const answerBox = document.createElement("div");
      const printLine = document.createElement("div");

      cell.className = "cell";
      cell.dataset.cellId = cellId;
      cell.dataset.rowIndex = String(rowIndex);
      cell.dataset.column = column.key;

      input.value = progress[cellId] || "";
      input.placeholder = `${column.label} answer`;
      input.spellcheck = false;
      input.autocomplete = "off";
      input.setAttribute("aria-label", `${row.coverage}, ${column.label}`);
      input.addEventListener("input", () => {
        progress[cellId] = input.value;
        saveProgress();
        clearCellState(cell);
        updateScore();
      });

      actions.className = "cell-actions";
      revealButton.type = "button";
      revealButton.textContent = "Reveal";
      revealButton.addEventListener("click", () => toggleCellAnswer(cell));
      clearButton.type = "button";
      clearButton.textContent = "Clear";
      clearButton.addEventListener("click", () => {
        input.value = "";
        progress[cellId] = "";
        saveProgress();
        clearCellState(cell);
        updateScore();
      });
      actions.append(revealButton, clearButton);

      feedback.className = "feedback";
      answerBox.className = "answer";
      answerBox.hidden = true;
      answerBox.textContent = row.answers[column.key].text;
      printLine.className = "print-line";

      cell.append(input, actions, feedback, answerBox, printLine);
      td.append(cell);
      tr.append(td);
    });

    body.append(tr);
  });
}

function getCellId(rowId, columnKey) {
  return `${rowId}-${columnKey}`;
}

function getCellAnswer(cell) {
  const rowIndex = Number(cell.dataset.rowIndex);
  const column = cell.dataset.column;
  return activeStudy.rows[rowIndex].answers[column];
}

function getInput(cell) {
  return cell.querySelector("textarea");
}

function getFeedback(cell) {
  return cell.querySelector(".feedback");
}

function getAnswerBox(cell) {
  return cell.querySelector(".answer");
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[$,%().;:/-]/g, " ")
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function evaluate(value, expected) {
  const normalized = normalize(value);
  if (!normalized) {
    return { status: "blank", missing: expected.requiredTerms };
  }

  const missing = expected.requiredTerms.filter((term) => {
    if (Array.isArray(term)) {
      return !term.some((option) => termMatches(normalized, option));
    }
    return !termMatches(normalized, term);
  });
  return {
    status: missing.length === 0 ? "correct" : "wrong",
    missing
  };
}

function termMatches(normalizedAnswer, term) {
  const normalizedTerm = normalize(term);
  if (normalizedTerm.length === 1) {
    return new RegExp(`(^| )${escapeRegExp(normalizedTerm)}( |$)`).test(normalizedAnswer);
  }
  return normalizedAnswer.includes(normalizedTerm);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function clearCellState(cell) {
  cell.classList.remove("correct", "wrong", "blank");
  getFeedback(cell).textContent = "";
}

function checkCell(cell, showAnswerOnMiss) {
  const result = evaluate(getInput(cell).value, getCellAnswer(cell));
  const feedback = getFeedback(cell);
  const answerBox = getAnswerBox(cell);

  cell.classList.remove("correct", "wrong", "blank");
  cell.classList.add(result.status);

  if (result.status === "correct") {
    feedback.textContent = "Correct";
    answerBox.hidden = true;
    return true;
  }

  if (result.status === "blank") {
    feedback.textContent = "Blank";
  } else {
    feedback.textContent = `Review: missing ${formatMissingTerms(result.missing)}`;
  }

  if (showAnswerOnMiss) {
    answerBox.hidden = false;
  }

  return false;
}

function activeCells() {
  return [...document.querySelectorAll(".cell")].filter((cell) => cell.dataset.active === "true");
}

function checkActiveCells(showAnswerOnMiss) {
  activeCells().forEach((cell) => checkCell(cell, showAnswerOnMiss));
  updateScore();
}

function setAllAnswersVisible(isVisible) {
  activeCells().forEach((cell) => {
    getAnswerBox(cell).hidden = !isVisible;
  });
}

function toggleCellAnswer(cell) {
  const answerBox = getAnswerBox(cell);
  answerBox.hidden = !answerBox.hidden;
}

function applyPracticeMode() {
  const mode = practiceMode.value;

  document.querySelectorAll(".cell").forEach((cell) => {
    const rowIndex = Number(cell.dataset.rowIndex);
    const column = cell.dataset.column;
    const isActive =
      mode === "all" ||
      mode === column ||
      (mode === "row" && rowIndex === randomRowIndex);

    cell.dataset.active = String(isActive);
    cell.classList.toggle("inactive", !isActive);
    getInput(cell).disabled = !isActive;
    cell.querySelectorAll("button").forEach((button) => {
      button.disabled = !isActive;
    });
    getAnswerBox(cell).hidden = true;
    clearCellState(cell);
  });
}

function resetAll() {
  Object.keys(progress).forEach((key) => delete progress[key]);
  saveProgress();
  document.querySelectorAll(".cell").forEach((cell) => {
    getInput(cell).value = "";
    getAnswerBox(cell).hidden = true;
    clearCellState(cell);
  });
  cardInput.value = "";
  cardAnswer.hidden = true;
  cardFeedback.textContent = "";
  cardFeedback.className = "card-feedback";
  updateScore();
}

function updateScore() {
  const cells = activeCells();
  const correct = cells.filter((cell) => evaluate(getInput(cell).value, getCellAnswer(cell)).status === "correct").length;
  scoreValue.textContent = `${correct} / ${cells.length}`;
}

function buildDeck() {
  const cards = [];
  activeStudy.rows.forEach((row, rowIndex) => {
    activeStudy.columns.forEach((column) => {
      cards.push({
        rowIndex,
        columnKey: column.key,
        columnLabel: column.label,
        coverage: row.coverage,
        expected: row.answers[column.key]
      });
    });
  });
  return shuffle(cards);
}

function showCard() {
  const card = deck[cardIndex];
  cardPrompt.textContent = `${card.coverage} in ${card.columnLabel}`;
  cardInput.value = "";
  cardFeedback.textContent = "";
  cardFeedback.className = "card-feedback";
  cardAnswer.hidden = true;
  cardAnswer.textContent = card.expected.text;
  cardCount.textContent = `${cardIndex + 1} of ${deck.length}`;
}

function checkCard() {
  const card = deck[cardIndex];
  const result = evaluate(cardInput.value, card.expected);
  cardFeedback.className = `card-feedback ${result.status}`;

  if (result.status === "correct") {
    cardFeedback.textContent = "Correct";
    cardAnswer.hidden = true;
    return;
  }

  if (result.status === "blank") {
    cardFeedback.textContent = "Blank";
  } else {
    cardFeedback.textContent = `Review: missing ${formatMissingTerms(result.missing)}`;
  }
}

function formatMissingTerms(terms) {
  return terms
    .map((term) => Array.isArray(term) ? term[0] : term)
    .join(", ");
}

function revealCard() {
  cardAnswer.hidden = false;
}

function nextCard() {
  cardIndex = (cardIndex + 1) % deck.length;
  showCard();
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function loadActiveStudyKey() {
  try {
    const saved = localStorage.getItem(activeStudyStorageKey);
    return studySets[saved] ? saved : "dp";
  } catch {
    return "dp";
  }
}

function saveActiveStudyKey() {
  try {
    localStorage.setItem(activeStudyStorageKey, activeStudyKey);
  } catch {
    // Some file:// or privacy-mode contexts block storage. Practice still works.
  }
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(activeStudy.storageKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(activeStudy.storageKey, JSON.stringify(progress));
  } catch {
    // Some file:// or privacy-mode contexts block storage. Practice still works.
  }
}
