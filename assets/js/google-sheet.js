// Google Sheet submission module
// ส่วนนี้แยกไว้สำหรับยิงข้อมูลไป Google Sheet เท่านั้น
// หน้าเว็บไม่แสดง emoji แต่ข้อมูลที่ส่งขึ้น Google Sheets ยังแนบ emoji ได้


function getGoogleSheetResult(percent) {
  const resultText = interpretResult(percent);
  if (percent <= 40) return `${resultText} 🩺`;
  if (percent <= 70) return `${resultText} ⚖️`;
  return `${resultText} ✅`;
}

function saveToGoogleSheet() {
  showSavingStatus();
  const payload = {
    nickname: nickname,
    email: email,
    // status: selectedAnswers[0] || "",
    q_no_score: selectedAnswers[1] || "",
    language: lang,
    app_version: APP_INFO.version,
    answers: selectedAnswers,
    sum_score: totalScore,
    percent: calculatePercent().toFixed(1),
    result: getGoogleSheetResult(calculatePercent())
  };

  fetch(GOOGLE_SHEET_CONFIG.endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(() => {
    hideSavingStatus();
    setButtonLoading(nextBtn, false);
    console.log("Data sent to Google Sheets");
    showAlert("success", getI18n().dataSaved);
    
    const reloadBtn = document.createElement("button");
    reloadBtn.id = "reloadBtn";
    reloadBtn.className = "btn btn-outline-light mt-3";
    reloadBtn.textContent = getI18n().fillAgain;
    reloadBtn.addEventListener("click", () => window.location.reload());
    container.appendChild(reloadBtn);
  })
  .catch(error => {
    hideSavingStatus();
    setButtonLoading(nextBtn, false);
    console.error("Error sending data:", error);
    showAlert("danger", getI18n().sheetFailed);
  });
}
