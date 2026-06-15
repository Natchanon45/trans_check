const questions = {
  th: [
    {
      category: "หมวดคำถาม : ข้อมูลทั่วไป(ไม่มีคะแนน)",
      text: "รับฮอร์โมนเอสโตรเจนหรือฮอร์โมนเพศอื่นที่เกี่ยวข้องในช่วง 1 ปีแรกหรือไม่?",
      answers: ["รับฮอร์โมนสม่ำเสมอ ได้รับการสั่งยาและปรับยาโดยแพทย์", "รับฮอร์โมนสม่ำเสมอ โดยหาซื้อฮอร์โมนด้วยตัวเอง", "รับฮอร์โมนไม่สม่ำเสมอ"]
    },
    {
      category: "หมวดคำถาม : ข้อมูลทั่วไป(ไม่มีคะแนน)",
      text: "ได้รับการผ่าตัดแปลงเพศแล้วหรือไม่",
      answers: ["ได้รับการตัดอัณฑะแล้ว และสร้างอวัยวะเพศใหม่ที่พอใจแล้ว", "ได้รับการตัดอัณฑะแล้ว สร้างอวัยวะเพศใหม่ที่ไม่สามารถใช้งานได้ดี หรือยังไม่ได้สร้างอวัยวะเพศใหม่", "ยังไม่ได้รับการตัดอัณฑะ"]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "1.การสะสมของไขมันในร่างกายเปลี่ยนไปอย่างไร?",
      answers: ["ไขมันเพิ่มขึ้นตามต้องการ", "ไขมันเพิ่มขึ้นเล็กน้อย ", "ไม่มีความเปลี่ยนแปลง "]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "2.มวลกล้ามเนื้อและความแข็งแรงของกล้ามเนื้อเปลี่ยนแปลงไปอย่างไร? ",
      answers: ["กล้ามเนื้อลดลง ยังมีแรงทำกิจกรรม", "กล้ามเนื้อลดลงเล็กน้อย ไม่มีแรง", "ไม่เปลี่ยนแปลง"]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "3.เสียงเปลี่ยนแปลงหรือไม่?",
      answers: ["เปลี่ยนชัดเจน", "เปลี่ยนเล็กน้อย", "ไม่เปลี่ยนเลย"]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "4.ขนตามร่างกายหรือใบหน้าเปลี่ยนแปลงไปอย่างไร?",
      answers: ["ลดลงตามต้องการ", "ลดลงเล็กน้อย", "ไม่เปลี่ยนแปลง"]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "5.ผิวของคุณมีลักษณะเปลียนไปหรือไม่?",
      answers: ["เนียนและละเอียดขึ้น", "มีผิวแห้งหรือมีสิวบ้าง", "ผิวแห้งมากหรือมีปัญหาผิวหนัง"]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "6.หน้าอกของคุณเปลี่ยนแปลงหรือไม่?",
      answers: ["ขนาดเพิ่มขึ้นอย่างเห็นได้ชัด", "เพิ่มขึ้นเล็กน้อย", "ไม่เปลี่ยนแปลง"]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "7.ร้อนวูบวาบ เหงื่อออกมากตอนกลางคืนหรือไม่?",
      answers: ["ไม่มี", "มีบางครั้ง", "มีเป็นประจำ"]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "8.ร่างกายมีอาการบวมตามตัวหรือไม่?",
      answers: ["ไม่มี", "บวมเล็กน้อยตามมือหรือเท้า", "บวมอย่างเห็นได้ชัดทั่วร่างกาย"]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "9.น้ำหนักตัวเปลี่ยนแปลงไปอย่างไร?",
      answers: ["ไม่เปลี่ยนแปลง ", "เพิ่มขึ้นเล็กน้อย", "เพิ่มขึ้นอย่างรวดเร็ว"]
    },
    {
      category: "หมวดคำถาม : การเปลี่ยนแปลงทางร่างกาย",
      text: "10.ปวดเมื่อยตามข้อต่อหรือกระดูกหรือไม่?",
      answers: ["ไม่มี", "เล็กน้อย", "เป็นประจำ"]
    },
    {
      category: "หมวดคำถาม : ด้านจิตใจและสังคม",
      text: "11.คุณรู้สึกมั่นใจในเพศของตนมากขึ้นหรือไม่",
      answers: ["มากขึ้นมาก", "เพิ่มขึ้นเล็กน้อย", "ไม่เปลี่ยนแปลง"]
    },
    {
      category: "หมวดคำถาม : ด้านจิตใจและสังคม",
      text: "12.คุณมีความรู้สึกรำคาญ หงุดหงิดง่าย หรืออารมณ์แปรปรวนหรือไม่?",
      answers: ["ไม่เลย", "บางครั้ง", "บ่อยครั้ง"]
    },
    {
      category: "หมวดคำถาม : ด้านจิตใจและสังคม",
      text: "13.คุณรู้สึก หดหู่ เศร้า หรือท้อแท้สิ้นหวัง หรือไม่?",
      answers: ["ไม่มี", "เป็นบางครั้ง", "เป็นประจำ"]
    },
    {
      category: "หมวดคำถาม : ด้านจิตใจและสังคม",
      text: "14.คุณรู้สึก เบื่อ ทำอะไรก็ไม่เพลิดเพลิน หรือไม่?",
      answers: ["ไม่มี ", "เป็นบางครั้ง ", "เป็นประจำ"]
    },
    {
      category: "หมวดคำถาม : การใช้ฮอร์โมนและการติดตาม",
      text: "15.คุณภาพการนอนหลับเป็นอย่างไร?",
      answers: ["หลับสนิทและนานพอสมควร", "หลับๆตื่นๆบ้าง ยังรู้สึกว่านอนพอ", "หลับยาก ตื่นบ่อยมาก"]
    },
    {
      category: "หมวดคำถาม : การใช้ฮอร์โมนและการติดตาม",
      text: "16.ง่วงนอนหรือหลับมากช่วงกลางวันหรือไม่?",
      answers: ["ไม่เลย", "เป็นบางครั้ง", "บ่อยและรบกวนการทำงาน"]
    },
    {
      category: "หมวดคำถาม : การใช้ฮอร์โมนและการติดตาม",
      text: "17.ความสนใจและความต้องการทางเพศเป็นอย่างไร?  ",
      answers: ["เป็นปกติ", "ลดลงบ้างเล็กน้อย", "ลดลงมาก"]
    },
    {
      category: "หมวดคำถาม : การใช้ฮอร์โมนและการติดตาม",
      text: "18.ความรู้สึกตอบสนองทางเพศเป็นอย่างไร?",
      answers: ["มีสารคัดหลั่งออกดี", "มีสารคัดหลั่งน้อย ต้องใช้สารหล่อลื่น", "ไม่มีความรู้สึกตอบสนองและอารมณ์ทางเพศ"]
    },
    {
      category: "หมวดคำถาม : การใช้ฮอร์โมนและการติดตาม",
      text: "19.การมีเพศสัมพันธ์มีความสุขหรือไม่?",
      answers: ["พอใจ และเป็นปกติ", "พอสมควร แต่ยังไม่เต็มที่", "ไม่ค่อยมีความสุขหรือไม่มีเลย"]
    },
    {
      category: "หมวดคำถาม : การใช้ฮอร์โมนและการติดตาม",
      text: "20.ระดับการถึงจุด orgasm ของคุณเป็นอย่างไร",
      answers: ["พอใจ และเป็นปกติ", "ยากหรือใช้เวลานาน", "ไม่สามารถถึง orgasm ได้เลย"]
    }
  ],

  en: [
    {
      category: "Question Category: General Information (No Score)",
      text: "Have you taken estrogen or any other related hormones during the first year?",
      answers: ["Regular hormone intake under medical prescription and adjustment", "Regular hormone intake obtained by self-purchase", "Irregular hormone intake" ]
    },
    {
      category: "Question Category: General Information (No Score)",
      text: "Have you undergone gender-affirming surgery?",
      answers: [ "Had orchiectomy and satisfactory genital reconstruction", "Had orchiectomy but genital reconstruction is unsatisfactory or not yet performed", "Have not undergone orchiectomy" ]
    },
    {
      category: "Question Category: Physical Changes",
      text: "1. How has your body fat distribution changed?",
      answers: [ "Increased as desired", "Slightly increased", "No change" ]
    },
    {
      category: "Question Category: Physical Changes",
      text: "2. How have your muscle mass and strength changed?",
      answers: ["Decreased but still able to perform daily activities", "Slightly decreased with noticeable weakness", "No change" ]
    },
    {
      category: "Question Category: Physical Changes",
      text: "3. Has your voice changed?",
      answers: [ "Significant change", "Slight change", "No change" ]
    },
    {
      category: "Question Category: Physical Changes",
      text: "4. How have your body or facial hair changed?",
      answers: [ "Decreased as desired", "Slightly decreased", "No change" ]
    },
    {
      category: "Question Category: Physical Changes",
      text: "5. Has your skin condition changed?",
      answers: [ "Smoother and more refined", "Some dryness or occasional acne", "Very dry skin or other skin problems" ]
    },
    {
      category: "Question Category: Physical Changes",
      text: "6. Have your breasts changed?",
      answers: [ "Significant increase in size", "Slight increase in size", "No change" ]
    },
    {
      category: "Question Category: Physical Changes",
      text: "7. Do you experience hot flashes or excessive night sweating?",
      answers: [ "None", "Occasionally", "Frequently"]
    },
    {
      category: "Question Category: Physical Changes",
      text: "8. Have you experienced swelling in your body?",
      answers: ["None", "Mild swelling in hands or feet", "Noticeable swelling throughout the body" ]
    },
    {
      category: "Question Category: Physical Changes",
      text: "9. How has your body weight changed?",
      answers: ["No change", "Slight increase", "Rapid increase" ]
    },
    {
      category: "Question Category: Physical Changes",
      text: "10. Do you experience joint or bone pain?",
      answers: ["None", "Mild", "Frequent"]
    },
    {
      category: "Question Category: Psychological and Social Aspects",
      text: "11. Do you feel more confident in your gender identity?",
      answers: [ "Much more confident","Slightly more confident", "No change" ]
    },
    {
      category: "Question Category: Psychological and Social Aspects",
      text: "12. Do you often feel irritated, easily annoyed, or moody?",
      answers: ["Never","Sometimes", "Often" ]
    },
    {
      category: "Question Category: Psychological and Social Aspects",
      text: "13. Do you feel depressed, sad, or hopeless?",
      answers: [ "Never", "Sometimes", "Frequently"]
    },
    {
      category: "Question Category: Psychological and Social Aspects",
      text: "14. Do you feel bored or lose interest in activities you usually enjoy?",
      answers: [ "Never", "Sometimes", "Frequently" ]
    },
    {
      category: "Question Category: Hormone Use and Monitoring",
      text: "15. How would you describe your sleep quality?",
      answers: [ "Deep and sufficient sleep", "Intermittent sleep but still adequate", "Difficulty falling asleep or frequent awakenings"]
    },
    {
      category: "Question Category: Hormone Use and Monitoring",
      text: "16. Do you feel sleepy or fall asleep often during the day?",
      answers: [ "Never", "Sometimes", "Frequently and interferes with work" ]
    },
    {
      category: "Question Category: Hormone Use and Monitoring",
      text: "17. How is your sexual interest and desire?",
      answers: [ "Normal", "Slightly decreased", "Greatly decreased"]
    },
    {
      category: "Question Category: Hormone Use and Monitoring",
      text: "18. How is your sexual responsiveness?",
      answers: [ "Normal vaginal lubrication or secretion", "Reduced lubrication, requires lubricant", "No sexual responsiveness or arousal" ]
    },
    {
      category: "Question Category: Hormone Use and Monitoring",
      text: "19. Do you feel satisfaction during sexual intercourse?",
      answers: [ "Satisfied and normal", "Moderately satisfied but not fully", "Unsatisfied or no satisfaction at all" ]
    },
    {
      category: "Question Category: Hormone Use and Monitoring",
      text: "20. How would you describe your ability to reach orgasm?",
      answers: ["Normal and satisfying", "Difficult or takes longer time","Unable to reach orgasm" ]
    }
  ]
};
let lang = localStorage.getItem("appLang") || "th";
let current = 0;
let totalScore = 0;
let nickname = "", email = "";
let selectedAnswers = [];
let selectedAnswerIndexes = [];

const container = document.getElementById("questionContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const startBtn = document.getElementById("startBtn");
const langBtn = document.getElementById("langToggle");
const scoredQuestions = Array.from({length: questions[lang].length}, (_, i) => i >= 2);
const versions = document.getElementById("version");

const installAppBtn = document.getElementById("installAppBtn");
const themeModeToggle = document.getElementById("themeModeToggle");
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
let deferredInstallPrompt = null;

function getSavedThemeMode() {
  return localStorage.getItem("appThemeMode") || "system";
}

function getEffectiveTheme(mode) {
  if (mode === "system") return systemThemeQuery.matches ? "dark" : "light";
  return mode;
}

function applyTheme(mode = getSavedThemeMode()) {
  const effectiveTheme = getEffectiveTheme(mode);
  document.documentElement.setAttribute("data-bs-theme", effectiveTheme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", effectiveTheme === "dark" ? "#020617" : "#f8fafc");
  renderThemeToggle(mode, effectiveTheme);
}

const APP_I18N = {
  th: {
    appName: APP_INFO.appNameTh || "แบบประเมินฮอร์โมน",
    appSubtitle: "แบบสอบถามสุขภาพ",
    developedBy: "พัฒนาโดย",
    developer: APP_INFO.authorTh,
    copyright: `© ${APP_INFO.copyrightYear} สงวนลิขสิทธิ์`,
    formTitle: "แบบสอบถาม",
    formTitle1: "ความเปลี่ยนแปลงหลังรับฮอร์โมน",
    nicknameLabel: "ชื่อเล่น",
    nicknamePlaceholder: "กรอกชื่อเล่น",
    emailLabel: "อีเมล",
    emailPlaceholder: "กรอกอีเมล",
    installApp: "ติดตั้งแอป",
    start: "เริ่มทำแบบสอบถาม",
    next: "ถัดไป",
    previous: "ย้อนกลับ",
    nicknameRequired: "กรุณากรอกชื่อเล่น",
    emailRequired: "กรุณากรอกอีเมล",
    emailInvalid: "รูปแบบอีเมลไม่ถูกต้อง",
    resultTitle: "สรุปผลของคุณ",
    nickname: "ชื่อเล่น",
    email: "อีเมล",
    totalScore: "คะแนนรวมของคุณคือ",
    percentText: "คิดเป็น",
    resultLow: "ผลลัพธ์: ควรปรึกษาแพทย์เพิ่มเติม",
    resultMedium: "ผลลัพธ์: มีการเปลี่ยนแปลงปานกลาง",
    resultHigh: "ผลลัพธ์: ปรับตัวดีมาก",
    close: "ปิด",
    dataSaved: "บันทึกข้อมูลเรียบร้อยแล้ว",
    sheetFailed: "ไม่สามารถเชื่อมต่อกับ Google Sheet ได้",
    fillAgain: "ทำแบบสอบถามอีกครั้ง",
    savingData: "กำลังส่งข้อมูล"
  },
  en: {
    appName: APP_INFO.appNameEn || "Hormone Assessment",
    appSubtitle: "Health questionnaire",
    developedBy: "Developed by",
    developer: APP_INFO.authorEn,
    copyright: `© ${APP_INFO.copyrightYear} All Rights Reserved`,
    formTitle: "Questionnaire",
    formTitle1: "Changes after taking hormones",
    nicknameLabel: "Nickname",
    nicknamePlaceholder: "Enter nickname",
    emailLabel: "Email",
    emailPlaceholder: "Enter email",
    installApp: "Install App",
    start: "Start Questionnaire",
    next: "Next",
    previous: "Previous",
    nicknameRequired: "Please enter your nickname",
    emailRequired: "Please enter your email",
    emailInvalid: "Invalid email format",
    resultTitle: "Your Result",
    nickname: "Nickname",
    email: "Email",
    totalScore: "Your total score is",
    percentText: "Equivalent to",
    resultLow: "Result: Consider consulting a specialist",
    resultMedium: "Result: Moderate changes",
    resultHigh: "Result: Excellent adaptation",
    close: "Close",
    dataSaved: "Data saved successfully",
    sheetFailed: "Failed to connect to Google Sheet",
    fillAgain: "Fill Again",
    savingData: "Sending data"
  }
};

function getI18n() {
  return APP_I18N[lang] || APP_I18N.th;
}

function renderFooter() {
  const versionEl = document.getElementById("version");
  if (!versionEl) return;
  const text = getI18n();
  versionEl.innerHTML = `
    <div class="footer-developer">
      <strong>${text.developedBy} • ${text.developer} • ${text.copyright}</strong>
    </div>
    <div class="footer-version">Version ${APP_INFO.version}</div>
  `;
}

function renderActionBarText() {
  const appNameEl = document.getElementById("appName");
  const appSubtitleEl = document.getElementById("appSubtitle");
  const text = getI18n();
  if (appNameEl) appNameEl.textContent = text.appName;
  if (appSubtitleEl) appSubtitleEl.textContent = text.appSubtitle;
}

function renderThemeToggle(mode = getSavedThemeMode(), effectiveTheme = getEffectiveTheme(mode)) {
  if (!themeModeToggle) return;
  const data = {
    system: { icon: "bi-circle-half", th: "ตามระบบ", en: "System" },
    light: { icon: "bi-sun", th: "กลางวัน", en: "Light" },
    dark: { icon: "bi-moon-stars", th: "กลางคืน", en: "Dark" }
  }[mode] || { icon: effectiveTheme === "dark" ? "bi-moon-stars" : "bi-sun", th: "โหมดสี", en: "Theme" };
  themeModeToggle.innerHTML = `<i class="bi ${data.icon}"></i>`;
  themeModeToggle.title = lang === "th" ? `โหมด${data.th}` : `${data.en} mode`;
  themeModeToggle.setAttribute("aria-label", themeModeToggle.title);
}

function iconText(icon, text) {
  return `<i class="bi ${icon}"></i> ${text}`;
}

if (themeModeToggle) {
  themeModeToggle.addEventListener("click", () => {
    const modes = ["system", "light", "dark"];
    const currentMode = getSavedThemeMode();
    const nextMode = modes[(modes.indexOf(currentMode) + 1) % modes.length] || "system";
    localStorage.setItem("appThemeMode", nextMode);
    applyTheme(nextMode);
  });
}

systemThemeQuery.addEventListener("change", () => {
  if (getSavedThemeMode() === "system") applyTheme("system");
});

applyTheme();
document.documentElement.lang = lang;
renderActionBarText();
renderFooter();
renderLanguageToggle();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(console.error);
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installAppBtn.style.display = "inline-flex";
});

installAppBtn.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installAppBtn.style.display = "none";
});

window.addEventListener("appinstalled", () => {
  installAppBtn.style.display = "none";
  deferredInstallPrompt = null;
});

function renderLanguageToggle() {
  if (!langBtn) return;
  langBtn.innerHTML = `<i class="bi bi-translate"></i>`;
  langBtn.title = lang === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย";
  langBtn.setAttribute("aria-label", langBtn.title);
}

langBtn.addEventListener("click", () => {
  lang = lang === "th" ? "en" : "th";
  localStorage.setItem("appLang", lang);
  document.documentElement.lang = lang;
  syncSelectedAnswersForLanguage();
  updateLanguageUI({ rerender: true });
});

function syncSelectedAnswersForLanguage() {
  selectedAnswerIndexes.forEach((answerIndex, questionIndex) => {
    if (answerIndex == null) return;
    const question = questions[lang]?.[questionIndex];
    if (!question) return;
    selectedAnswers[questionIndex] = scoredQuestions[questionIndex]
      ? 3 - answerIndex
      : question.answers[answerIndex];
  });
}

function updateLanguageUI(options = {}) {
  const text = getI18n();
  renderActionBarText();
  renderFooter();
  renderLanguageToggle();
  renderThemeToggle(getSavedThemeMode(), getEffectiveTheme(getSavedThemeMode()));

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  const setPlaceholder = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = value;
  };

  setText("formTitle", text.formTitle);
  setText("formTitle1", text.formTitle1);
  setText("nicknameLabel", text.nicknameLabel);
  setText("emailLabel", text.emailLabel);
  setPlaceholder("nickname", text.nicknamePlaceholder);
  setPlaceholder("email", text.emailPlaceholder);

  if (installAppBtn) installAppBtn.innerHTML = iconText("bi-phone", text.installApp);
  if (startBtn) startBtn.innerHTML = iconText("bi-play-circle", text.start);
  if (nextBtn) nextBtn.innerHTML = iconText("bi-arrow-right-circle", text.next);
  if (prevBtn) prevBtn.innerHTML = iconText("bi-arrow-left-circle", text.previous);

  const nicknameError = document.getElementById("nicknameError");
  const emailError = document.getElementById("emailError");
  if (nicknameError && nicknameError.style.display !== "none") nicknameError.textContent = text.nicknameRequired;
  if (emailError && emailError.style.display !== "none") {
    const emailValue = document.getElementById("email")?.value.trim() || "";
    emailError.textContent = emailValue ? text.emailInvalid : text.emailRequired;
  }

  if (options.rerender !== false) rerenderCurrentScreen();
}

function getCurrentScreen() {
  const introForm = document.getElementById("introForm");
  if (introForm && introForm.style.display !== "none") return "intro";
  if (current >= questions[lang].length || (nextBtn && nextBtn.style.display === "none" && progressBar && progressBar.style.width === "100%")) return "result";
  return "question";
}

function rerenderCurrentScreen() {
  const screen = getCurrentScreen();
  if (screen === "question") showQuestion();
  if (screen === "result") showResult(false);
}

document.addEventListener("DOMContentLoaded", function() {
  updateLanguageUI({ rerender: false });
});

startBtn.addEventListener("click", () => {
  const nicknameInput = document.getElementById("nickname");
  const emailInput = document.getElementById("email");
  const nicknameError = document.getElementById("nicknameError");
  const emailError = document.getElementById("emailError");
  nickname = nicknameInput.value.trim();
  email = emailInput.value.trim();
  let valid = true;
  nicknameError.style.display = "none";
  emailError.style.display = "none";
  if (!nickname) {
    nicknameError.textContent = getI18n().nicknameRequired;
    nicknameError.style.display = "block";
    valid = false;
  }

  if (!email) {
    emailError.textContent = getI18n().emailRequired;
    emailError.style.display = "block";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = getI18n().emailInvalid;
    emailError.style.display = "block";
    valid = false;
  }
  if(!valid) return;

  document.getElementById("introForm").style.display = "none";
  progressContainer.style.display = "block";
  nextBtn.style.display = "block";
  prevBtn.style.display = "none";

  showQuestion();
});

// คะแนน 1,2,3
// function showQuestion() {
//   const q = questions[lang][current];
//   container.innerHTML = `
//     <div class="category">${q.category || ""} [${current+1}/${questions[lang].length}]</div>
//     <div class="question">${q.text}</div>
//     ${q.answers.map((a,i)=>`<button class="answer-btn" data-score="${i+1}">${a}</button>`).join("")}
//   `;

// คะแนน 3,2,1
function showQuestion() {
  const q = questions[lang][current];
  container.innerHTML = `
    <div class="category">${q.category || ""} [${current+1}/${questions[lang].length}]</div>
    <div class="question">${q.text}</div>
    ${q.answers.map((a,i)=>`<button class="answer-btn" data-index="${i}" data-score="${3 - i}">${a}</button>`).join("")}

  `;

  prevBtn.style.display = current > 0 ? "block" : "none";

  nextBtn.disabled = selectedAnswerIndexes[current] == null;

  updateProgress();

  document.querySelectorAll(".answer-btn").forEach(btn=>{
    btn.classList.remove("selected");
    if (selectedAnswerIndexes[current] === Number(btn.dataset.index)) btn.classList.add("selected");

    btn.addEventListener("click", ()=>{
      document.querySelectorAll(".answer-btn").forEach(b=>b.classList.remove("selected"));
      btn.classList.add("selected");
      const answerIndex = Number(btn.dataset.index);
      selectedAnswerIndexes[current] = answerIndex;
      selectedAnswers[current] = scoredQuestions[current] ? parseInt(btn.dataset.score) : questions[lang][current].answers[answerIndex];
      nextBtn.disabled = false;
      recalcScore();
    });
  });
}

function updateProgress() {
  progressBar.style.width = (current/questions[lang].length)*100 + "%";
}

function recalcScore() {
  totalScore = 0;
  selectedAnswers.forEach((a,i)=>{
    if(scoredQuestions[i] && typeof a === "number") totalScore += a;
  });
}

function setButtonLoading(button, isLoading, loadingText) {
  if (!button) return;
  if (isLoading) {
    if (!button.dataset.originalHtml) button.dataset.originalHtml = button.innerHTML;
    button.disabled = true;
    button.classList.add("is-loading");
    button.innerHTML = `<span class="spinner-border spinner-border-sm" aria-hidden="true"></span><span>${loadingText}</span>`;
  } else {
    if (button.dataset.originalHtml) {
      button.innerHTML = button.dataset.originalHtml;
      delete button.dataset.originalHtml;
    }
    button.classList.remove("is-loading");
  }
}

function showSavingStatus() {
  const existing = document.getElementById("savingStatus");
  if (existing) return existing;
  const status = document.createElement("div");
  status.id = "savingStatus";
  status.className = "saving-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  status.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span>${getI18n().savingData}</span>
  `;
  container.appendChild(status);
  return status;
}

function hideSavingStatus() {
  const status = document.getElementById("savingStatus");
  if (status) status.remove();
}

nextBtn.addEventListener("click", ()=>{
  if(selectedAnswerIndexes[current]==null || nextBtn.classList.contains("is-loading")) return;
  current++;
  if (current < questions[lang].length) {
    showQuestion();
  } else {
    setButtonLoading(nextBtn, true, getI18n().savingData);
    showResult(true);
  }
});

prevBtn.addEventListener("click", ()=>{
  if(current===0) return;
  current--;
  showQuestion();
});

function calculatePercent() {
  const scoredCount = questions[lang].length - 2;
  const maxScore = scoredCount * 3;
  return (totalScore / maxScore) * 100;
}

function showResult(shouldSave = false) {
  const scoredCount = questions[lang].length - 2;
  const maxScore = scoredCount * 3;
  const percent = calculatePercent();
  const text = getI18n();
  container.innerHTML = `
    <h4>${text.resultTitle}</h4>
    <p><b>${text.nickname}:</b> ${nickname}</p>
    <p><b>${text.email}:</b> ${email}</p>
    <p>${text.totalScore} <b>${totalScore}</b> / ${maxScore}</p>
    <p>${text.percentText} ${percent.toFixed(1)}%</p>
    <p>${interpretResult(percent)}</p>
  `;
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  progressBar.style.width = "100%";
  if (shouldSave) {
    syncSelectedAnswersForLanguage();
    saveToGoogleSheet();
  }
}

function interpretResult(p) {
  const text = getI18n();
  if (p <= 40) return text.resultLow;
  if (p <= 70) return text.resultMedium;
  return text.resultHigh;
}


function showAlert(type, message) {
  const toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) return;

  const toastEl = document.createElement("div");
  const icon = type === "success" ? "bi-check-circle-fill" : (type === "warning" ? "bi-exclamation-triangle-fill" : "bi-x-circle-fill");
  toastEl.className = `toast app-toast toast-${type || "info"}`;
  toastEl.setAttribute("role", "status");
  toastEl.setAttribute("aria-live", "polite");
  toastEl.setAttribute("aria-atomic", "true");
  toastEl.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon"><i class="bi ${icon}"></i></span>
      <span class="toast-message">${message}</span>
    </div>
  `;
  toastContainer.appendChild(toastEl);

  const delay = type === "error" || type === "danger" ? 4200 : (type === "warning" ? 3200 : 2600);
  const toast = new bootstrap.Toast(toastEl, { autohide: true, delay });
  toast.show();
  toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
}
