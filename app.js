const modeCopy = {
  normal: { label: "Normal", description: "Keep the standard route. Swap only when the city asks you to.", title: "M+", copy: "Three hours for design, contemporary art and the harbour light. Start with Design Ah!, then let the building pull you around." },
  heat: { label: "Heat mode", description: "Protect the middle of the day. Use indoor anchors and taxi across the gaps.", title: "M+ → Taxi", copy: "Stay inside from 12:30–16:00. Drop the waterfront walk and let M+ do the heavy lifting while the heat passes." },
  rain: { label: "Rain mode", description: "Keep the art. Cut exposed walking and move the harbour moment to later.", title: "M+ first", copy: "Take the covered route into West Kowloon, start inside, and keep the Star Ferry optional until the rain breaks." },
  severe: { label: "Severe weather", description: "Safety is the itinerary. Check venue and transport status before leaving the hotel.", title: "Stay flexible", copy: "Keep the nearest safe indoor option as the next move. Museums, hotel rest and a simple nearby meal all count today." }
};

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = modeCopy[button.dataset.mode];
    document.querySelectorAll(".mode-button").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelector(".weather-icon").textContent = button.dataset.mode === "rain" ? "☂" : button.dataset.mode === "severe" ? "!" : button.dataset.mode === "heat" ? "◌" : "☀";
    document.querySelector("#mode-label").textContent = mode.label;
    document.querySelector("#mode-description").textContent = mode.description;
    document.querySelector("#next-title").textContent = mode.title;
    document.querySelector("#next-copy").textContent = mode.copy;
  });
});

function togglePanel(buttonId, panelId) {
  const button = document.querySelector(buttonId);
  const panel = document.querySelector(panelId);
  button.addEventListener("click", () => {
    const hidden = panel.hasAttribute("hidden");
    panel.toggleAttribute("hidden", !hidden);
    button.textContent = hidden ? "Hide details −" : buttonId === "#timeline-toggle" ? "Show timeline +" : "Open checklist +";
  });
}

togglePanel("[data-expand='detail-1']", "#detail-1");
togglePanel("#timeline-toggle", "#timeline");
togglePanel("#checklist-toggle", "#checklist");

document.querySelectorAll(".day-list-item").forEach((item) => item.addEventListener("click", () => {
  document.querySelectorAll(".day-list-item").forEach((day) => day.classList.remove("selected"));
  item.classList.add("selected");
}));
