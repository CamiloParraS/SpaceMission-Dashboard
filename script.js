const alerts = [
  { text: "Reaper activity +2% [SECTOR 4]" },
  { text: "Collector vessel signature detected (Iera)" },
  { text: "Distress beacon: Sanctum system" },
  { text: "Cerberus chatter intercepted" },
  { text: "Alliance reconship online" },
];

const tickerContent = document.getElementById("alert-content");

function updateAlert() {
  const alertString = alerts
    .map((a) => {
      return `   ${a.text}   `;
    })
    .join("\u00A0\u00A0\u00A0///\u00A0\u00A0\u00A0");

  tickerContent.textContent =
    alertString + "\u00A0\u00A0\u00A0///\u00A0\u00A0\u00A0" + alertString;
}

updateAlert();
