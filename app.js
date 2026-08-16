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

const modePlans = {
  heat: {
    0: { route: "HKG → Regal Airport Hotel", note: "落地後不進城，補水、吃飯、直接休息。", items: [
      ["抵達", "HX283 抵達 HKG", "入境後先補水；不增加任何機場外行程。", "機場內步行", "太熱模式"],
      ["晚上", "Regal Airport Hotel 休息", "晚餐留在機場或飯店，洗澡後提早睡。", "全程室內", "保留"]
    ]},
    1: { route: "Regal → WE Hotel → Yuan → PMQ / Tai Kwun → Peak（晚一點）", note: "午後只走短距離；Hollywood Road 長走取消，跨區改 Taxi。", items: [
      ["10:00", "Regal checkout", "搭 Airport Express 進市區，抵達後直接 Taxi 到飯店。", "Airport Express + Taxi", "固定"],
      ["11:15", "WE Hotel 寄行李", "放完行李先補水、整理再出門。", "室內", "固定"],
      ["12:00", "Yuan 蔬食午餐", "預約照常；午餐後不要立刻長距離步行。", "Taxi 到 Central", "固定"],
      ["13:45–16:30", "PMQ → Tai Kwun 室內版", "取消 Hollywood Road 長走，只保留兩個有冷氣的室內主體。", "點到點 Taxi", "太熱替代"],
      ["16:30–18:00", "Café / 回飯店降溫", "休息到接近日落，再判斷是否上山。", "室內", "新增休息"],
      ["18:15–20:00", "Peak 夜景（可取消）", "只看傍晚與夜景；若仍不舒服，移到 8/30 或取消。", "Taxi → Peak Tram", "延後"],
      ["20:30", "Central 附近麵食", "選最近、排隊最短的店，不再走遠。", "Taxi / 短走", "保留"]
    ]},
    2: { route: "蓮香樓 → 深水埗精簡版 → M+ → 佐敦", note: "深水埗戶外砍半，13:30 前就離開；維港散步取消。", items: [
      ["09:00", "蓮香樓飲茶", "早上較涼，照原訂安排。", "MTR / Taxi", "固定"],
      ["10:45–11:45", "深水埗精簡版", "只走鴨寮街一小段與一間小店；45–60 分鐘封頂。", "Taxi 到站、短走", "縮短"],
      ["12:00", "公和荳品廠", "提早吃豆品輕午餐，吃完直接離開戶外區。", "短走", "保留"],
      ["13:00–14:45", "提前到西九室內休息", "取消深水埗自由逛，改到商場／M+ 周邊吹冷氣。", "Taxi", "太熱替代"],
      ["15:00–18:30", "M+ Museum", "完整保留，作為全天主要室內行程。", "室內", "固定錨點"],
      ["19:30", "麥文記或附近麵食", "Taxi 到佐敦；排隊超過 20–30 分鐘立即換店。", "Taxi", "保留"],
      ["20:30", "取消維港長走", "若晚間已降溫才搭天星小輪；否則 MTR 回飯店。", "MTR 優先", "視溫度"]
    ]},
    3: { route: "Oi! → Taxi → Roganic → 室內港島 → 晚餐", note: "取消春秧街與叮叮車曝曬，下午不補 Peak。", items: [
      ["10:00", "Oi! 油街實現", "室內看展 45–60 分鐘，照常。", "MTR + 短走", "保留"],
      ["11:00", "取消北角／春秧街散步", "直接搭 Taxi 去銅鑼灣，留時間在室內休息。", "Taxi", "太熱取消"],
      ["12:00", "Roganic lunch", "預約照常。", "Causeway Bay · 室內", "固定"],
      ["14:30–17:30", "商場／Café／設計店", "不補 Peak；避免 45 分鐘以上連續戶外曝曬。", "室內 + Taxi", "太熱替代"],
      ["18:30", "靠得住粥品", "晚餐後直接回飯店。", "Taxi / MTR", "保留"]
    ]},
    4: { route: "WE Hotel → Taxi → Airport Express → HKG", note: "減少拖行李步行，提早出發並持續補水。", items: [
      ["08:00", "早餐 + 整理行李", "在飯店附近室內用餐。", "短走", "保留"],
      ["09:20", "提早 checkout", "直接 Taxi 到 Hong Kong Station。", "Taxi", "太熱調整"],
      ["09:50", "Airport Express", "提早進機場，避免在戶外與月台趕路。", "全程室內", "固定"],
      ["12:55", "HX254 HKG → TPE", "航班時間不變。", "HKG", "固定"]
    ]}
  },
  rain: {
    0: { route: "HKG → Regal Airport Hotel", note: "不進城；全程留在有蓋路線。", items: [
      ["抵達", "HX283 抵達 HKG", "確認雨勢與交通後，走室內通道到飯店。", "有蓋步行", "下雨模式"],
      ["晚上", "Regal Airport Hotel 休息", "晚餐留在機場或飯店。", "全程室內", "保留"]
    ]},
    1: { route: "Regal → WE Hotel → Yuan → Tai Kwun / PMQ → 室內晚餐", note: "Peak 取消並移到 8/30；Old Town 改成室內點到點。", items: [
      ["10:00", "Regal checkout", "Airport Express 照常；到市區改搭 Taxi。", "Airport Express + Taxi", "固定"],
      ["11:15", "WE Hotel 寄行李", "放好雨具與備用衣物再出門。", "Taxi", "固定"],
      ["12:00", "Yuan 蔬食午餐", "預約照常。", "Central · 室內", "固定"],
      ["13:45–16:45", "Tai Kwun → PMQ 室內版", "取消 Hollywood Road 長走，兩個室內點之間直接 Taxi。", "Taxi", "雨天替代"],
      ["17:00", "取消 Peak", "今天不上山，改放到 8/30 下午 recovery slot。", "不移動", "雨天取消"],
      ["17:15–19:30", "Central Café / 室內展覽", "留在中環有蓋區域，慢慢等晚餐。", "室內", "新增替代"],
      ["20:00", "Central 附近麵食", "選有位、最近的店，吃完 Taxi 回飯店。", "Taxi", "保留"]
    ]},
    2: { route: "蓮香樓 → 公和荳品 → M+ → 佐敦 → MTR", note: "深水埗街區縮成一小段，取消維港與天星小輪。", items: [
      ["09:00", "蓮香樓飲茶", "照常；離店前確認雨勢。", "MTR / Taxi", "固定"],
      ["10:45–12:00", "深水埗室內精簡版", "取消鴨寮街長走，只去公和與一間室內小店。", "MTR + 有蓋短走", "雨天替代"],
      ["12:00", "公和荳品廠", "提早吃完，避免在街上停留。", "室內", "保留"],
      ["13:00–14:45", "提前前往西九", "取消深水埗自由逛，在商場／M+ 內休息。", "Taxi", "雨天替代"],
      ["15:00–18:30", "M+ Museum", "完整保留，是今天主要行程。", "室內", "固定錨點"],
      ["19:30", "麥文記或附近麵食", "雨大就直接在西九／佐敦有位的店吃。", "Taxi / MTR", "保留"],
      ["20:30", "取消維港與天星小輪", "直接搭 MTR 回飯店。", "MTR", "雨天取消"]
    ]},
    3: { route: "Oi! → MTR → Roganic → 室內港島 → 晚餐", note: "取消春秧街、叮叮車與 Peak Retry。", items: [
      ["10:00", "Oi! 油街實現", "室內展覽照常；若官方關閉就留飯店。", "MTR", "看營業狀態"],
      ["11:00", "取消北角／春秧街", "不走市場、不搭開放式叮叮車，直接 MTR 去銅鑼灣。", "MTR", "雨天取消"],
      ["12:00", "Roganic lunch", "預約照常。", "Causeway Bay · 室內", "固定"],
      ["14:30–17:30", "室內港島：商場／Café", "Peak Retry 取消；留到天氣好的時段或放棄。", "室內", "雨天替代"],
      ["18:30", "靠得住粥品", "雨勢大就選飯店附近餐廳。", "MTR / Taxi", "保留"]
    ]},
    4: { route: "WE Hotel → Taxi → Airport Express → HKG", note: "增加 20 分鐘雨天交通緩衝。", items: [
      ["08:00", "早餐 + 整理行李", "確認航班與 Airport Express 狀態。", "室內", "固定"],
      ["09:10", "提早 checkout", "Taxi 直達 Hong Kong Station，不拖行李轉 MTR。", "Taxi", "雨天調整"],
      ["09:45", "Airport Express", "提早到機場，預留雨天延誤。", "Airport Express", "固定"],
      ["12:55", "HX254 HKG → TPE", "若航班異動，以航空公司通知為準。", "HKG", "固定"]
    ]}
  },
  severe: {
    0: { route: "HKG / Regal Airport Hotel", note: "安全優先，不離開機場區。", items: [
      ["抵達前", "先看 HX283 航班狀態", "延誤或取消時，依航空公司指示處理。", "航空公司官方資訊", "惡劣天氣"],
      ["抵達後", "留在機場／Regal", "不進市區；走有蓋路線，必要時延長機場飯店住宿。", "室內", "安全安排"]
    ]},
    1: { route: "Regal 或 WE Hotel · 不追景點", note: "所有景點與餐廳視官方營業狀態取消。", items: [
      ["早上", "確認 Airport Express / MTR 狀態", "交通未恢復就留在 Regal，不急著搬飯店。", "官方交通公告", "惡劣天氣"],
      ["白天", "飯店安全日", "取消 Yuan、PMQ、Tai Kwun、Peak；只在飯店或最近的安全室內場所活動。", "不跨區", "全部取消"],
      ["晚上", "飯店內／最近餐飲", "不為了既定餐廳外出。", "步行最短距離", "安全優先"]
    ]},
    2: { route: "WE Hotel / 最近安全室內場所", note: "取消深水埗、M+、佐敦與天星小輪，除非官方明確恢復且交通安全。", items: [
      ["早上", "留在飯店並查官方公告", "確認颱風、黑雨、MTR 與 M+ 營業狀態。", "HKO / MTR / M+ 官方", "惡劣天氣"],
      ["白天", "取消跨區行程", "蓮香樓、深水埗、M+ 全部取消；不在訊號降低前搶移動。", "不跨區", "安全取消"],
      ["晚上", "飯店附近簡單用餐", "維港與天星小輪取消。", "最近室內餐飲", "安全優先"]
    ]},
    3: { route: "WE Hotel / 最近安全室內場所", note: "取消 Oi!、北角、Roganic、Peak Retry；不跨區。", items: [
      ["早上", "查 HKO 與交通狀態", "訊號生效期間留在飯店。", "官方公告", "惡劣天氣"],
      ["中午", "Roganic 取消／聯絡餐廳", "依餐廳惡劣天氣政策處理訂位，不冒險赴約。", "電話／訂位平台", "取消"],
      ["下午至晚上", "飯店安全日", "所有街區、叮叮車、Peak 與跨區晚餐取消。", "不跨區", "安全優先"]
    ]},
    4: { route: "WE Hotel ↔ HKG · 依航班與交通狀態", note: "先確認 HX254 與 Airport Express，再決定何時離開飯店。", items: [
      ["07:30", "確認 HX254 航班狀態", "沒有確認前不要直接前往機場。", "航空公司官方資訊", "惡劣天氣"],
      ["08:00", "確認 Airport Express / 道路", "依實際恢復時間提早出發；必要時延住飯店。", "官方交通公告", "安全安排"],
      ["出發時", "直接前往 HKG", "不安排早餐店或任何最後景點。", "最安全可用交通", "固定"],
      ["12:55", "HX254 HKG → TPE", "以航空公司最新通知為準。", "HKG", "航班"]
    ]}
  }
};

const modeCopy = {
  normal: { label: "正常行程", description: "照標準路線：飲茶 → 深水埗 → M+ → 佐敦晚餐 → 天星小輪。", note: "固定錨點：M+ 15:00。可調整的是戶外散步與晚餐順序。", icon: "☀" },
  heat: { label: "太熱模式", description: "12:30–16:00 不安排連續超過 45 分鐘的戶外步行。", note: "深水埗縮短、直接進 M+；跨區用 Taxi，Peak 改傍晚或取消。", icon: "◌" },
  rain: { label: "下雨模式", description: "保留 M+ 與室內行程，取消長距離街區散步。", note: "深水埗只留公和荳品；天星小輪看雨勢，必要時改 MTR 回飯店。", icon: "☂" },
  severe: { label: "惡劣天氣", description: "不追行程，先確認 MTR、場館與餐廳是否營業。", note: "優先回飯店或留在最近的室內場所；Peak、街區與渡輪全部可取消。", icon: "!" }
};

const agendaSummary = document.querySelector("#agenda-summary");
const agendaList = document.querySelector("#agenda-list");
let activeDay = 1;
let activeMode = "normal";

function renderDay(index) {
  const day = days[index];
  const plan = activeMode === "normal" ? day : modePlans[activeMode][index];
  const mode = modeCopy[activeMode];
  activeDay = index;
  agendaSummary.innerHTML = `<div><span class="agenda-date">${day.date} · ${mode.label}</span><h3>${day.title}</h3><p>${plan.note}</p></div><div class="route-summary"><span class="card-label">本模式路線</span><strong>${plan.route}</strong></div>`;
  agendaList.innerHTML = plan.items.map(([time, title, detail, transport, tag]) => `<article class="agenda-row agenda-${activeMode}"><time>${time}</time><div class="agenda-main"><div class="agenda-title"><h4>${title}</h4><span>${tag}</span></div><p>${detail}</p><small>↳ ${transport}</small></div></article>`).join("");
  document.querySelectorAll(".date-tab").forEach((tab) => tab.classList.toggle("active", Number(tab.dataset.day) === index));
}

document.querySelectorAll(".date-tab").forEach((tab) => tab.addEventListener("click", () => renderDay(Number(tab.dataset.day))));
renderDay(1);

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = modeCopy[button.dataset.mode];
    activeMode = button.dataset.mode;
    document.querySelectorAll(".mode-button").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelector(".weather-icon").textContent = mode.icon;
    document.querySelector("#mode-label").textContent = mode.label;
    document.querySelector("#mode-description").textContent = mode.description;
    document.querySelector("#mode-note").textContent = mode.note;
    renderDay(activeDay);
  });
});
