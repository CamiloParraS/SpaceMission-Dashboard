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
  { text: "Mass relay oscillation detected (+0.3%)" },
  { text: "Gravitic shear forming near Hawking Eta" },
  { text: "Asteroid field density increasing (Route 9)" },
  { text: "Solar flare watch active (Trellis system)" },
  { text: "Dark energy readings rising beyond baseline" },
];

const scroll_speed = 50;

const alertThingy = document.querySelector(".alert");
const alertContent = document.getElementById("alert-content");

function updateAlert() {
  const alertString = alerts
    .map((a) => {
      return `\u00A0${a.text}\u00A0`;
    })
    .join("\u00A0\u00A0\u00A0///\u00A0\u00A0\u00A0");

  alertContent.textContent =
    alertString + "\u00A0\u00A0\u00A0///\u00A0\u00A0\u00A0" + alertString;
}

function updateScrollSpeed() {
  alertThingy.style.animation = "none";

  const textWidth = alertContent.offsetWidth;
  const containerWidth = alertThingy.parentElement.offsetWidth;
  const totalDistance = textWidth + containerWidth;
  const duration = totalDistance / scroll_speed;

  alertThingy.style.animation = `alert-scroll ${duration}s linear infinite`;
}

updateAlert();
updateScrollSpeed();
