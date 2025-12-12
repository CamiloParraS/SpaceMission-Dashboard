const alerts = [
  { text: "Reaper activity +2% [SECTOR 4]" },
  { text: "Collector vessel signature detected (Iera)" },
  { text: "Distress beacon: Sanctum system" },
  { text: "Cerberus chatter intercepted" },
  { text: "Alliance reconship online" },
  { text: "Credits stockpile updated: +12,500" },
  { text: "Element Zero anomaly detected near Ismar Frontier" },
  { text: "Iridium mining drone recovered (+1,200)" },
  { text: "Platinum veins located: Ore Belt 7" },
  { text: "Palladium refinement completed (+850)" },
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
