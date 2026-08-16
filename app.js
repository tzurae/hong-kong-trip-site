const days = [
  {
    date: "8/27 · Thu", title: "抵達香港，第一晚只休息", route: "HKG → Regal Airport Hotel", note: "不排景點。這天的任務只有落地、吃一點東西、睡飽。", items: [
      ["抵達", "HX283 抵達 HKG", "入境、領行李、到 Regal Airport Hotel 辦入住。", "機場內步行", "固定"],
      ["晚上", "Airport hotel 晚餐／休息", "早點睡，隔天 10:00 checkout 後再進市區。", "不用進城", "留體力"]
    ]
  },
  {
    date: "8/28 · Fri", title: "Old Hong Kong：中環老城區 + 太平山", route: "Regal → Airport Express → WE Hotel → Central", note: "第一天進城先把行李放好；中午吃 Yuan，下午 PMQ / Tai Kwun，傍晚看天氣上 Peak。", items: [
      ["10:00", "Regal checkout", "退房，帶行李搭 Airport Express 進市區。", "Airport Express 約 24 分鐘", "固定"],
      ["11:15", "WE Hotel 寄行李", "到西營盤飯店放行李；不要拖行李逛街。", "香港站 → Taxi", "固定"],
      ["12:00", "Yuan 蔬食午餐", "3-course lunch。第一餐吃現代中式蔬食，晚上再吃香港麵食。", "Central · 預約", "已規劃"],
      ["13:30–16:30", "Hollywood Road → PMQ → Tai Kwun", "設計店、古蹟與展覽。熱時縮短戶外路段，PMQ / Tai Kwun 當室內休息點。", "步行 + Taxi", "主行程"],
      ["17:00–19:30", "Peak Tram + Sky Terrace 428", "天氣好才上山：白天 → 黃昏 → 夜景一次看。", "Central → Peak Tram", "天氣決定"],
      ["20:15", "雲吞麵／牛腩麵", "哪一家排隊短就吃哪一家；不為了名店破壞節奏。", "Central 附近", "備案：Tsim Chai Kee / Kau Kee"]
    ]
  },
  {
    date: "8/29 · Sat", title: "Kowloon × Art：飲茶、深水埗、M+", route: "上環 → 深水埗 → 西九龍 → 佐敦 → 中環", note: "這是最完整的一天：早上老香港，中午輕食，下午把時間留給 M+，晚上用天星小輪收尾。", items: [
      ["09:00", "蓮香樓飲茶", "推車點心、竹籠與老派飲茶體驗。不要吃太撐，午餐只是豆品輕食。", "Sai Ying Pun → Sheung Wan", "固定"],
      ["10:45–12:15", "深水埗街區", "鴨寮街、Tai Nan Street、Good Bad Creative / vintage 小店。", "MTR 或 Taxi", "戶外"],
      ["12:30", "公和荳品廠", "豆腐花、豆漿、煎釀豆腐，當輕午餐。", "118 Pei Ho Street", "主行程"],
      ["13:00–14:30", "深水埗自由逛", "唱片、老物、街市；累了就直接前往西九，不需要逛完所有店。", "步行", "可刪減"],
      ["15:00–18:30", "M+ Museum", "Design Ah! → Sigg Collection → Shanshui → Dial-A-Poem。今天是星期六，時間較寬。", "西九龍 · 室內", "固定錨點"],
      ["19:30", "麥文記雲吞麵", "佐敦晚餐。排隊 ≤30 分鐘才吃；超過就用附近麵店備案。", "M+ → Jordan", "備案：附近廣東麵食"],
      ["20:30–21:30", "維港 + 天星小輪", "尖沙咀看 skyline，再搭 TST → Central 回港島。", "Star Ferry", "看體力"]
    ]
  },
  {
    date: "8/30 · Sun", title: "North Point × Food：生活街區 + Roganic", route: "Oi! → 北角 → 叮叮車 → 銅鑼灣 → Peak retry", note: "節奏放鬆，下午保留給天氣。如果 8/28 沒上 Peak，今天就是補登山的彈性日。", items: [
      ["10:00", "Oi! 油街實現", "看展 45–60 分鐘；晚起可以直接刪掉，不影響午餐。", "MTR → North Point", "可刪減"],
      ["10:50–11:30", "北角 + 春秧街", "看生活街區，再搭叮叮車穿過市場路段。", "步行 + Tram", "主行程"],
      ["12:00", "Roganic lunch", "3-course lunch，蔬菜為主但不是素食；訂位時說明 vegetable-forward preference。", "Causeway Bay · 預約", "固定"],
      ["14:30–17:30", "港島散步／Peak Retry", "8/28 晴天：灣仔、咖啡、設計店。8/28 下雨：今天補 Peak。爆熱：商場 + Taxi。", "Tram / MTR / Taxi", "天氣決定"],
      ["18:30", "靠得住粥品", "Roganic 午餐較重，晚上用魚湯粥＋小菜收尾。", "灣仔／港島", "備案：清爽廣東料理"]
    ]
  },
  {
    date: "8/31 · Mon", title: "回台，不再塞最後一個景點", route: "WE Hotel → Airport Express → HKG", note: "HX254 12:55 起飛，這天只留交通緩衝，不安排景點。", items: [
      ["08:00", "早餐 + 整理行李", "飯店附近簡單吃，確認護照、手機、充電器與伴手禮。", "步行", "固定"],
      ["09:30", "WE Hotel checkout", "搭 Taxi 或 MTR 前往 Hong Kong Station。", "Taxi 優先", "固定"],
      ["10:00", "Airport Express", "香港站 → 機場，預留報到與安檢時間。", "Airport Express", "固定"],
      ["12:55", "HX254 HKG → TPE", "抵達台北約 14:45。", "Hong Kong International Airport", "航班"]
    ]
  }
];

const modeCopy = {
  normal: { label: "正常行程", description: "照標準路線：飲茶 → 深水埗 → M+ → 佐敦晚餐 → 天星小輪。", note: "固定錨點：M+ 15:00。可調整的是戶外散步與晚餐順序。", icon: "☀" },
  heat: { label: "太熱模式", description: "12:30–16:00 不安排連續超過 45 分鐘的戶外步行。", note: "深水埗縮短、直接進 M+；跨區用 Taxi，Peak 改傍晚或取消。", icon: "◌" },
  rain: { label: "下雨模式", description: "保留 M+ 與室內行程，取消長距離街區散步。", note: "深水埗只留公和荳品；天星小輪看雨勢，必要時改 MTR 回飯店。", icon: "☂" },
  severe: { label: "惡劣天氣", description: "不追行程，先確認 MTR、場館與餐廳是否營業。", note: "優先回飯店或留在最近的室內場所；Peak、街區與渡輪全部可取消。", icon: "!" }
};

const agendaSummary = document.querySelector("#agenda-summary");
const agendaList = document.querySelector("#agenda-list");

function renderDay(index) {
  const day = days[index];
  agendaSummary.innerHTML = `<div><span class="agenda-date">${day.date}</span><h3>${day.title}</h3><p>${day.note}</p></div><div class="route-summary"><span class="card-label">ROUTE</span><strong>${day.route}</strong></div>`;
  agendaList.innerHTML = day.items.map(([time, title, detail, transport, tag]) => `<article class="agenda-row"><time>${time}</time><div class="agenda-main"><div class="agenda-title"><h4>${title}</h4><span>${tag}</span></div><p>${detail}</p><small>↳ ${transport}</small></div></article>`).join("");
  document.querySelectorAll(".date-tab").forEach((tab) => tab.classList.toggle("active", Number(tab.dataset.day) === index));
}

document.querySelectorAll(".date-tab").forEach((tab) => tab.addEventListener("click", () => renderDay(Number(tab.dataset.day))));
renderDay(1);

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = modeCopy[button.dataset.mode];
    document.querySelectorAll(".mode-button").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelector(".weather-icon").textContent = mode.icon;
    document.querySelector("#mode-label").textContent = mode.label;
    document.querySelector("#mode-description").textContent = mode.description;
    document.querySelector("#mode-note").textContent = mode.note;
  });
});
