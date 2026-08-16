const mapSearch = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const directions = (origin, destination, travelmode = "walking") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${travelmode}`;

const photos = {
  hongKong: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hong_Kong_Harbour_Night_2019-06-11.jpg/960px-Hong_Kong_Harbour_Night_2019-06-11.jpg",
  taiKwun: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Tai_Kwun_%281%29.jpg/960px-Tai_Kwun_%281%29.jpg",
  pmq: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Balconies_of_PMQ_January_2026.jpg/960px-Balconies_of_PMQ_January_2026.jpg",
  centralMarket: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Central_Market_Hong_Kong_Tram_Store.jpg/960px-Central_Market_Hong_Kong_Tram_Store.jpg",
  ifc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/HK_International_Finance_Centre_200809.jpg/960px-HK_International_Finance_Centre_200809.jpg",
  ferry: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/On_the_Star_Ferry_Hong_Kong._%289066236142%29.jpg/960px-On_the_Star_Ferry_Hong_Kong._%289066236142%29.jpg",
  avenue: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/2024-12-27_Avenue_of_Stars%2C_Hong_Kong.jpg/960px-2024-12-27_Avenue_of_Stars%2C_Hong_Kong.jpg",
  mplus: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HK_YTM_%E8%A5%BF%E4%B9%9D%E9%BE%8D%E6%96%87%E5%8C%96%E5%8D%80_West_Kowloon_Cultural_District_M%2B_Plus_Museum_%E5%A4%A9%E5%8F%B0%E8%8A%B1%E5%9C%92_roof_garden_view_WKCD_Art_Park_July_2022_Px3_HKPM_Hong_Kong_Palace_Museum_sunset.jpg/960px-thumbnail.jpg",
  oi: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/HK_%E5%8C%97%E8%A7%92_North_Point_%E6%B2%B9%E8%A1%97%E5%AF%A6%E7%8F%BE_Oil_Street_Art_Space_exhibition_house_entrance_Mar-2014.JPG/960px-HK_%E5%8C%97%E8%A7%92_North_Point_%E6%B2%B9%E8%A1%97%E5%AF%A6%E7%8F%BE_Oil_Street_Art_Space_exhibition_house_entrance_Mar-2014.JPG",
  tram: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Chun_Yeung_Street%2C_Tram_140_%28Hong_Kong%29.jpg/960px-Chun_Yeung_Street%2C_Tram_140_%28Hong_Kong%29.jpg"
};

const places = {
  hkg: { name: "香港國際機場", query: "Hong Kong International Airport", history: "赤鱲角機場於 1998 年啟用，是這趟旅程的交通節點，不是要硬塞進第一天的景點。", why: "落地後把通關、行李和睡眠處理好，會比第一晚趕進市區更不容易把後面四天玩壞。", photo: photos.hongKong, source: "https://www.hongkongairport.com/" },
  regal: { name: "富豪機場酒店", query: "Regal Airport Hotel Hong Kong", rating: "4.0", reviews: "6,439", history: "酒店與機場客運大樓相連，適合晚班抵達後直接休息。", why: "第一晚不必拖行李轉車，隔天睡飽再進市區，是這個安排最實際的價值。", photo: photos.hongKong, source: "https://www.regalhotel.com/en/regal-airport-hotel" },
  we: { name: "伯惠酒店 WE Hotel", query: "WE Hotel Hong Kong Sai Ying Pun", rating: "4.5", reviews: "189", history: "位在西營盤東邊街，靠近港鐵與港島西側舊街區。", why: "先寄行李再走中環，不會拖著行李爬坡；後續回飯店也比住九龍更順。", photo: photos.hongKong, source: mapSearch("WE Hotel Hong Kong Sai Ying Pun") },
  yuan: { name: "Yuan 蔬食午餐", query: "Yuan Hong Kong vegetarian restaurant", history: "這站是已排定的預約午餐；網站沒有硬填查不到的 Google 分數。", why: "先用一頓坐得下來的午餐進入旅行節奏，再開始中環步行線，體力比較穩。", photo: photos.hongKong, source: mapSearch("Yuan Hong Kong vegetarian restaurant") },
  taiKwun: { name: "大館 Tai Kwun", query: "Tai Kwun Hong Kong", rating: "4.4", reviews: "13,788", friend: true, history: "大館由前中區警署、中央裁判司署與域多利監獄組成，活化後在 2018 年對外開放。", why: "它不是單一打卡建築，而是能把香港殖民時期司法、警政與當代藝術放在同一個場域理解。", photo: photos.taiKwun, source: "https://www.taikwun.hk/en/taikwun/about/heritage" },
  pmq: { name: "PMQ 元創方", query: "PMQ Hong Kong", rating: "4.2", reviews: "5,074", friend: true, history: "原址曾是中央書院，後來成為已婚警察宿舍；活化後轉為設計與創意工作室聚落。", why: "它和大館只隔約 6 分鐘，能在不繞路的情況下看香港設計品牌，也可吹冷氣休息。", photo: photos.pmq, source: "https://www.pmq.org.hk/about/history/" },
  cheung: { name: "祥興記上海生煎包（中環）", query: "Cheung Hing Kee Shanghai Pan-Fried Buns Central", rating: "4.7", reviews: "862", friend: true, history: "朋友推薦的小吃點；中環店在擺花街 48 號，主打現煎、脆底、多汁的上海生煎包。米其林曾介紹其品牌故事，但不能把尖沙咀店的必比登資格直接套到中環店。", why: "PMQ 下坡約 4 分鐘就到，而且下一站蛋撻在對面，不需要為了吃東西另外繞一區。", photo: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=82", source: "https://guide.michelin.com/hk/zh_HK/article/dining-out/behind-the-bib-cheung-hing-kee" },
  taiCheong: { name: "泰昌餅家（中環）", query: "Tai Cheong Bakery Central Hong Kong", rating: "3.9", reviews: "2,968", friend: true, history: "泰昌餅家 1954 年創立，以曲奇皮蛋撻成名，是中環最具代表性的老餅店之一。", why: "它就在祥興記對面，Google Maps 顯示步行約 1 分鐘；生煎包與蛋撻一次完成，完全不用折返。", photo: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1000&q=82", source: mapSearch("Tai Cheong Bakery Central Hong Kong") },
  centralMarket: { name: "中環街市", query: "Central Market Hong Kong", rating: "4.1", reviews: "9,409", friend: true, history: "現有建築於 1939 年落成，是香港少見的流線型現代主義街市建築；活化後在 2021 年重新開放。", why: "從擺花街下坡約 4 分鐘，接著可沿有蓋通道往 IFC，既順路又能避雨避熱。", photo: photos.centralMarket, source: "https://www.centralmarket.hk/en/history" },
  tsimChai: { name: "沾仔記雲吞麵", query: "Tsim Chai Kee Wellington Street Hong Kong", rating: "4.0", reviews: "4,275", friend: true, history: "沾仔記是中環威靈頓街的平價雲吞麵店，目前可由米其林官方核實為必比登推介。招牌配料是雲吞、鯪魚球與牛肉。", why: "從中環街市步行約 3–5 分鐘；早一點吃晚餐再往 IFC 與碼頭，不會折返，也避開正餐尖峰。", photo: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=82", source: "https://guide.michelin.com/en/hong-kong-region/hong-kong/restaurant/tsim-chai-kee-wellington-street" },
  ifc: { name: "IFC 國際金融中心", query: "IFC Mall Hong Kong", rating: "4.2", reviews: "16,946", friend: true, history: "IFC 是香港站上蓋的金融與商業建築群，連接機場快線、商場與中環海濱。", why: "它是中環街市到天星碼頭之間最舒服的有蓋休息點；補水、上廁所後再走去碼頭。", photo: photos.ifc, source: "https://ifc.com.hk/" },
  pier7: { name: "中環 7 號碼頭・天星小輪", query: "Central Star Ferry Pier 7 Hong Kong", rating: "4.5", reviews: "529", friend: true, history: "天星小輪的渡海服務源於 19 世紀，至今仍是維港兩岸最有城市感的公共交通之一。", why: "它不是另加的景點，而是把中環路線自然接到尖沙咀；航程約 8–10 分鐘，沿途就是維港景色。", photo: photos.ferry, source: "https://www.starferry.com.hk/en/history" },
  avenue: { name: "尖沙咀星光大道", query: "Avenue of Stars Hong Kong", history: "星光大道沿尖沙咀海濱展示香港電影工作者的手印與相關雕塑，2019 年完成翻新。", why: "從尖沙咀碼頭沿海旁走約 15 分鐘，方向不需折返；傍晚到夜間的城市天際線最好看。", photo: photos.avenue, source: "https://www.avenueofstars.com.hk/" },
  london: { name: "倫敦大酒樓", query: "London Restaurant Mong Kok Hong Kong", rating: "3.6", reviews: "4,451", friend: true, history: "朋友推薦這裡的重點不是高分網美店，而是仍保留傳統港式酒樓與推車點心的用餐感。", why: "位於旺角，接著往深水埗只要短程港鐵；把它放在九龍日早上，比從港島來回更合理。", photo: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=82", source: mapSearch("London Restaurant Mong Kok Hong Kong") },
  shamShuiPo: { name: "深水埗街區", query: "Apliu Street Sham Shui Po Hong Kong", history: "深水埗是九龍較早發展的工住混合區，街市、電子零件、布料與新型小店密集共存。", why: "從旺角往西九龍本來就會經過這一帶；只走一條主線，不安排無止境亂逛。", photo: photos.tram, source: "https://www.discoverhongkong.com/eng/explore/neighbourhoods/sham-shui-po.html" },
  kungWo: { name: "公和荳品廠", query: "Kung Wo Beancurd Factory Sham Shui Po", rating: "4.0", reviews: "2,907", history: "公和是深水埗老字號豆品店，以豆腐花、豆漿和煎釀豆腐聞名。", why: "北河街 118 號正好在深水埗散步線裡，可當輕午餐，不會吃太飽影響下午 M+。", photo: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=82", source: mapSearch("Kung Wo Beancurd Factory Sham Shui Po") },
  mplus: { name: "M+ 博物館", query: "M+ Hong Kong", rating: "4.3", reviews: "5,843", history: "M+ 於 2021 年開館，收藏與研究 20、21 世紀的視覺文化，範圍涵蓋設計、建築、流動影像與當代藝術。", why: "它是這天真正需要留 3 小時以上的固定錨點；前面街區可刪，M+ 不要被零碎小吃擠掉。", photo: photos.mplus, source: "https://www.mplus.org.hk/en/about-us/" },
  hingKee: { name: "興記菜館・廟街", query: "Hing Kee Restaurant Temple Street Hong Kong", rating: "3.7", reviews: "3,982", friend: true, history: "朋友推薦的廟街粵菜選項，位置在油麻地廟街 15 號，適合接在西九龍與佐敦之後。", why: "M+ 搭車過去約 15–20 分鐘，吃完可直接由油麻地／佐敦回飯店，不用再折回尖沙咀。", photo: photos.hongKong, source: mapSearch("Hing Kee Restaurant Temple Street Hong Kong") },
  taoHeung: { name: "稻香（尖沙咀）", query: "Tao Heung Tsim Sha Tsui Hong Kong", rating: "3.5", reviews: "1,595", friend: true, history: "朋友標註為連鎖但味道不錯；它比較適合作為有人數、座位與時間壓力時的備案。", why: "不拿它取代更有特色的主行程，但在尖沙咀臨時需要穩定座位時很實用。", photo: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=82", source: mapSearch("Tao Heung Tsim Sha Tsui Hong Kong") },
  oi: { name: "油街實現 Oi!", query: "Oi Oil Street Art Space Hong Kong", rating: "4.0", reviews: "1,069", history: "園區核心是 1908 年落成的舊皇家香港遊艇會會所，後來活化為公共藝術空間。", why: "展覽規模不大，45–60 分鐘剛好；它和北角市場在同一條東區路線，晚起也能無痛刪除。", photo: photos.oi, source: "https://www.lcsd.gov.hk/CE/Museum/APO/en_US/web/apo/oi.html" },
  chunYeung: { name: "春秧街市場 × 叮叮車", query: "Chun Yeung Street North Point Hong Kong", history: "春秧街是北角具代表性的露天市場街，電車會直接穿過攤販與人流之間。", why: "這裡值得去的不是某一家店，而是生活中的香港；但炎熱或下雨時要果斷取消。", photo: photos.tram, source: "https://www.hktramways.com/" },
  roganic: { name: "Roganic Hong Kong", query: "Roganic Hong Kong", rating: "4.5", reviews: "557", history: "餐廳以英國廚師 Simon Rogan 的農場到餐桌理念為核心，香港店位於銅鑼灣利園一期。", why: "這是已預約的固定午餐；前一站從北角向西回銅鑼灣，方向與回西營盤一致。", photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=82", source: "https://www.roganic.com.hk/" },
  causeway: { name: "銅鑼灣室內散步", query: "Causeway Bay Hong Kong", history: "銅鑼灣是港島最密集的商業區之一，從傳統街市到大型百貨都集中在步行範圍。", why: "Roganic 午餐後不再跨區追景點，視體力選商場、咖啡或直接回飯店。", photo: photos.hongKong, source: mapSearch("Causeway Bay Hong Kong") },
  peak: { name: "太平山頂（Optional）", query: "Victoria Peak Hong Kong", rating: "4.6", reviews: "4,947", history: "山頂自 19 世紀起就是香港重要的高地聚落與觀景地，山頂纜車於 1888 年投入服務。", why: "景觀經典，但朋友特別提醒人潮會消耗精神；因此只在能見度好、精神有餘裕時才去。", photo: photos.hongKong, source: "https://www.thepeak.com.hk/en/heritage" },
  congee: { name: "靠得住粥品", query: "Trusty Congee King Hong Kong", history: "以粥品與廣東小菜為主，適合放在較重的午餐之後。", why: "晚餐不必再追一輪大菜；選離當下位置最近的分店，吃完直接回飯店。", photo: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=82", source: mapSearch("Trusty Congee King Hong Kong") },
  hkStation: { name: "香港站・機場快線", query: "Hong Kong Station Airport Express", history: "機場快線把香港站與機場連在同一條專用鐵路上，是回程最可控的交通。", why: "最後一天不排景點，預留報到與安檢時間；拖行李時以 Taxi 接香港站。", photo: photos.ifc, source: "https://www.mtr.com.hk/en/customer/services/airport_express_index.html" }
};

const stop = (time, id, detail, tag, leg) => ({ time, id, title: places[id]?.name || id, detail, tag, leg });
const leg = (label, minutes, origin, destination, travelmode = "walking", verdict = "順路") => ({ label, minutes, url: directions(origin, destination, travelmode), verdict });

const days = [
  { date: "8/27 · Thu", title: "抵達香港，第一晚只休息", route: "HKG → 富豪機場酒店", note: "這天沒有假裝充實：落地、入住、睡飽。", routeVerdict: "零折返；酒店與機場相連", items: [
    stop("抵達", "hkg", "HX283 抵達後入境、領行李。", "固定"),
    stop("約 +15 分", "regal", "沿機場有蓋通道入住，晚餐留在機場或飯店。", "休息", leg("有蓋步行", "約 10–15 分", "Hong Kong International Airport Terminal 1", "Regal Airport Hotel Hong Kong"))
  ]},
  { date: "8/28 · Fri", title: "朋友版中環主線：老城一路走到維港", route: "西營盤 → 大館 → PMQ → 祥興記／泰昌 → 中環街市 → 沾仔記 → IFC → 天星小輪 → 星光大道", note: "採用朋友給的中環順序，並把生煎包＋蛋撻插在沿途；Peak 從主線移除。", routeVerdict: "已用 Google Maps 逐段核對：一路往山下與海旁，不折返", friendNote: "朋友原案：大館 → PMQ → 中環街市 → IFC → 天星渡輪 → 尖沙咀星光大道。網站完整採用，另外把祥興記與正對面的泰昌餅家插進 PMQ 下坡段。", items: [
    stop("10:00", "regal", "退房後走回機場站，搭 Airport Express 進香港站。", "固定"),
    stop("11:05", "we", "先寄行李，絕對不要拖行李走中環坡道。", "固定", leg("Airport Express 24 分 + Taxi", "共約 40–50 分", "Regal Airport Hotel Hong Kong", "WE Hotel Hong Kong", "transit")),
    stop("12:00", "yuan", "預約午餐；吃完再開始中環步行線。", "預約", leg("Taxi", "約 10–15 分", "WE Hotel Hong Kong", "Yuan Hong Kong vegetarian restaurant", "driving")),
    stop("13:30", "taiKwun", "古蹟與當代藝術，預留 75–90 分鐘。", "朋友推薦", leg("步行／短程 Taxi", "約 8–15 分", "Yuan Hong Kong vegetarian restaurant", "Tai Kwun Hong Kong")),
    stop("15:00", "pmq", "看設計店與中庭，45–60 分鐘即可。", "朋友推薦", leg("步行 400m", "6 分", "Tai Kwun Hong Kong", "PMQ Hong Kong")),
    stop("16:00", "cheung", "點生煎包分食，不把它吃成正餐。", "朋友推薦", leg("下坡步行 280m", "4 分", "PMQ Hong Kong", "Cheung Hing Kee Shanghai Pan-Fried Buns Central")),
    stop("16:25", "taiCheong", "蛋撻就在對面；買完繼續往中環街市下坡。", "朋友指定蛋撻", leg("過街 35m", "1 分", "Cheung Hing Kee Shanghai Pan-Fried Buns Central", "Tai Cheong Bakery Central Hong Kong")),
    stop("16:45", "centralMarket", "看建築、補水、上廁所，停 30–40 分鐘。", "朋友推薦", leg("下坡步行 240m", "4 分", "Tai Cheong Bakery Central Hong Kong", "Central Market Hong Kong")),
    stop("17:30", "tsimChai", "朋友給的米其林必比登雲吞麵；提早吃，避開晚餐尖峰。", "必比登", leg("步行", "約 3–5 分", "Central Market Hong Kong", "Tsim Chai Kee Wellington Street Hong Kong")),
    stop("18:15", "ifc", "走有蓋通道休息、補水、上廁所，再往碼頭。", "休息點", leg("步行／有蓋通道", "約 12–15 分", "Tsim Chai Kee Wellington Street Hong Kong", "IFC Mall Hong Kong")),
    stop("19:00", "pier7", "中環到尖沙咀，船程約 9 分；含候船抓 15–25 分。", "朋友推薦", leg("有蓋步行 700m", "10 分", "IFC Mall Hong Kong", "Central Star Ferry Pier 7 Hong Kong")),
    stop("19:35", "avenue", "沿海旁走到星光大道，看入夜後的維港。", "朋友推薦", leg("海旁步行 1.1km", "15 分", "Tsim Sha Tsui Star Ferry Pier", "Avenue of Stars Hong Kong"))
  ]},
  { date: "8/29 · Sat", title: "九龍老味道 × 深水埗 × M+", route: "旺角 → 深水埗 → 西九龍 → 廟街", note: "早上用朋友推薦的推車飲茶，下午留給 M+；晚上順著西九往廟街，不再搭船繞回中環。", routeVerdict: "由北往南收束到西九龍與油麻地，沒有重複過海", friendNote: "倫敦大酒樓採用的是朋友說的『傳統港式推車體驗』；興記菜館放在 M+ 後，地理上比先去尖沙咀再回佐敦更順。稻香保留為尖沙咀備案。", items: [
    stop("09:00", "london", "重點是推車與老酒樓體驗；評分不高，期待值放在氛圍，不是精緻服務。", "朋友推薦", leg("港鐵", "約 25–35 分", "WE Hotel Hong Kong", "London Restaurant Mong Kok Hong Kong", "transit")),
    stop("10:45", "shamShuiPo", "只走鴨寮街／北河街主線 60–75 分鐘，不無限擴張。", "街區", leg("港鐵 旺角→深水埗", "約 15–20 分", "London Restaurant Mong Kok Hong Kong", "Apliu Street Sham Shui Po", "transit")),
    stop("12:15", "kungWo", "豆腐花、豆漿、煎釀豆腐當輕午餐。", "老店", leg("街區步行", "約 8–12 分", "Apliu Street Sham Shui Po", "Kung Wo Beancurd Factory Sham Shui Po")),
    stop("14:30", "mplus", "提早往西九，15:00 前入館；累了就刪掉深水埗尾段。", "固定錨點", leg("Taxi 最省力", "約 15–25 分", "Kung Wo Beancurd Factory Sham Shui Po", "M+ Hong Kong", "driving")),
    stop("19:00", "hingKee", "廟街粵菜晚餐；若排隊太久，就近換店。", "朋友推薦", leg("Taxi／巴士", "約 15–20 分", "M+ Hong Kong", "Hing Kee Restaurant Temple Street Hong Kong", "driving")),
    stop("備案", "taoHeung", "只有已在尖沙咀、需要穩定座位時才用；不是專程繞去。", "朋友備案", leg("視位置決定", "約 10–15 分", "Hing Kee Restaurant Temple Street Hong Kong", "Tao Heung Tsim Sha Tsui Hong Kong", "transit", "非主線"))
  ]},
  { date: "8/30 · Sun", title: "北角生活感 × Roganic，下午留白", route: "西營盤 → 油街 → 春秧街 → 銅鑼灣 → 回飯店", note: "上午只排兩個相鄰點，中午固定餐廳；下午不再塞景點。Peak 僅為天氣與精神都好的 optional。", routeVerdict: "全程沿港島東西線移動；Peak 不強迫插入", items: [
    stop("10:00", "oi", "看展 45–60 分鐘；晚起直接刪除。", "可刪", leg("港鐵", "約 30–40 分", "WE Hotel Hong Kong", "Oi Oil Street Art Space Hong Kong", "transit")),
    stop("11:05", "chunYeung", "看市場與電車穿街，停 25–35 分鐘。", "戶外", leg("步行", "約 12–15 分", "Oi Oil Street Art Space Hong Kong", "Chun Yeung Street North Point")),
    stop("12:00", "roganic", "預約午餐；從北角向西回銅鑼灣，不折返。", "固定", leg("港鐵／Taxi", "約 15–25 分", "Chun Yeung Street North Point", "Roganic Hong Kong", "transit")),
    stop("14:30", "causeway", "商場、咖啡或直接回飯店休息，依午餐後體力決定。", "留白", leg("步行", "約 5–10 分", "Roganic Hong Kong", "Causeway Bay Hong Kong")),
    stop("Optional", "peak", "只有能見度好、即時人潮可接受、精神還夠才上山；三項缺一就取消。", "非主線", leg("Taxi／港鐵轉纜車", "約 35–50 分", "Causeway Bay Hong Kong", "Victoria Peak Hong Kong", "transit", "刻意繞路")),
    stop("18:30", "congee", "若沒去 Peak 就在港島找最近分店；吃完回飯店。", "輕晚餐", leg("依當下位置", "約 10–20 分", "Causeway Bay Hong Kong", "Trusty Congee King Hong Kong", "transit"))
  ]},
  { date: "8/31 · Mon", title: "回台，不塞最後一個景點", route: "WE Hotel → 香港站 → HKG", note: "HX254 12:55 起飛；這天只留交通緩衝。", routeVerdict: "單向前往機場，預留報到與安檢", items: [
    stop("08:00", "we", "早餐、整理行李，確認護照與充電器。", "固定"),
    stop("09:30", "hkStation", "退房後 Taxi 到香港站，不拖行李轉港鐵。", "固定", leg("Taxi", "約 10–15 分", "WE Hotel Hong Kong", "Hong Kong Station", "driving")),
    stop("10:00", "hkg", "Airport Express 約 24 分；抵達後預留報到與安檢。", "固定", leg("Airport Express", "24 分", "Hong Kong Station", "Hong Kong International Airport", "transit"))
  ]}
];

const modeCopy = {
  normal: { label: "正常行程", description: "照順路版本走；每一段交通時間都標在兩站之間。", note: "評分為 2026/8/16 查閱 Google Maps，之後可能變動。", icon: "☀" },
  heat: { label: "太熱模式", description: "砍掉 12:00–16:00 的長距離戶外段，跨區改 Taxi，保留室內主體。", note: "被刪掉的不是換個名字而已；街區、渡輪與 Peak 會實際退出行程。", icon: "◌" },
  rain: { label: "下雨模式", description: "保留有蓋與室內點，取消長走、海旁與市場；點到點改 MTR／Taxi。", note: "短暫陣雨可現場切回正常；持續大雨就照這版走。", icon: "☂" },
  severe: { label: "惡劣天氣", description: "景點全部不是必需品；只看航班、HKO、MTR 與場館官方狀態。", note: "颱風或黑雨期間不跨區、不追訂位，留在最近安全室內地點。", icon: "!" }
};

const severePlans = [
  ["留在機場／富豪酒店", "不進市區；依航班與機場公告行動。"],
  ["留在富豪或 WE Hotel", "取消中環線、餐廳與渡輪；交通未恢復就不要搬飯店。"],
  ["WE Hotel 安全日", "取消旺角、深水埗、M+ 與廟街，不跨區。"],
  ["WE Hotel 安全日", "取消油街、北角、Roganic 與 Peak，聯絡餐廳處理訂位。"],
  ["先確認 HX254", "確認航班與 Airport Express 後才離開飯店；必要時延住。"]
];

function cloneStops(dayIndex, ids, mode) {
  const source = days[dayIndex].items;
  return ids.map((id, index) => {
    const original = source.find((item) => item.id === id);
    const item = { ...original, tag: mode === "heat" ? "太熱保留" : "雨天保留" };
    if (index > 0) {
      const previous = places[ids[index - 1]];
      const current = places[id];
      item.leg = leg(mode === "heat" ? "Taxi／冷氣交通" : "MTR／Taxi", "約 10–25 分", previous.query, current.query, mode === "heat" ? "driving" : "transit");
    } else item.leg = undefined;
    return item;
  });
}

function getPlan(dayIndex, mode) {
  if (mode === "normal") return days[dayIndex];
  if (mode === "severe") {
    const [title, detail] = severePlans[dayIndex];
    return { ...days[dayIndex], route: title, note: detail, routeVerdict: "安全優先；不是把原行程換個名字", items: [{ time: "現在", title, detail, tag: "全部取消" }] };
  }
  const selections = {
    heat: [["hkg", "regal"], ["regal", "we", "yuan", "taiKwun", "pmq", "centralMarket", "tsimChai", "ifc"], ["london", "kungWo", "mplus", "hingKee"], ["oi", "roganic", "causeway", "congee"], ["we", "hkStation", "hkg"]],
    rain: [["hkg", "regal"], ["regal", "we", "yuan", "taiKwun", "pmq", "centralMarket", "tsimChai", "ifc"], ["london", "kungWo", "mplus", "hingKee"], ["oi", "roganic", "causeway", "congee"], ["we", "hkStation", "hkg"]]
  };
  const items = cloneStops(dayIndex, selections[mode][dayIndex], mode);
  const route = items.map((item) => item.title).join(" → ");
  const cut = mode === "heat" ? "已移除長時間曝曬、海旁與 Peak；室內主體保留，跨區改冷氣交通。" : "已移除街區長走、春秧街、渡輪海旁與 Peak；保留可安全到達的室內點。";
  return { ...days[dayIndex], route, note: cut, routeVerdict: `這是實際刪減版，共保留 ${items.length} 站`, items };
}

const agendaSummary = document.querySelector("#agenda-summary");
const agendaList = document.querySelector("#agenda-list");
let activeDay = 1;
let activeMode = "normal";

function renderDetails(place) {
  if (!place) return "";
  const image = place.photo ? `<img class="stop-photo" src="${place.photo}" alt="${place.name}" loading="lazy" />` : "";
  return `<details class="stop-details"><summary class="detail-toggle">DETAIL 詳情＋照片</summary><div class="stop-detail-panel">${image}<div class="stop-detail-copy"><h5>背景／歷史</h5><p>${place.history}</p><h5>為什麼值得去</h5><p>${place.why}</p><a class="source-link" href="${place.source}" target="_blank" rel="noreferrer">資料來源 ↗</a></div></div></details>`;
}

function renderStop(item) {
  const place = item.id ? places[item.id] : null;
  const rating = place?.rating ? `<span class="rating-pill" title="2026/8/16 查閱"><b>★ ${place.rating}</b><span>${place.reviews} 則</span></span>` : "";
  const map = place ? `<a class="map-link" href="${mapSearch(place.query)}" target="_blank" rel="noreferrer">Google Maps ↗</a>` : "";
  const friend = place?.friend ? `<span class="friend-badge">CK 朋友推薦</span>` : "";
  const meta = rating || friend ? `<div class="stop-meta">${rating}${friend}</div>` : "";
  return `<article class="agenda-row agenda-${activeMode}"><time>${item.time}</time><div class="agenda-main"><div class="agenda-title"><div class="agenda-title-group"><h4>${item.title}</h4><span class="agenda-tag">${item.tag}</span></div></div><p>${item.detail}</p>${meta}<div class="stop-actions">${map}${renderDetails(place)}</div></div></article>`;
}

function renderLeg(item) {
  if (!item.leg) return "";
  const statusClass = item.leg.verdict === "順路" ? "is-on-route" : "is-detour";
  return `<div class="transfer-row"><span class="transfer-kicker">下一段</span><div class="transfer-copy"><strong>${item.leg.label}</strong><span>${item.leg.minutes}<b class="route-status ${statusClass}">${item.leg.verdict === "順路" ? "✓ " : ""}${item.leg.verdict}</b></span></div><a href="${item.leg.url}" target="_blank" rel="noreferrer">Google 路線 ↗</a></div>`;
}

function renderDay(index) {
  const day = days[index];
  const plan = getPlan(index, activeMode);
  const mode = modeCopy[activeMode];
  activeDay = index;
  agendaSummary.innerHTML = `<div><span class="agenda-date">${day.date} · ${mode.label}</span><h3>${day.title}</h3><p>${plan.note}</p><span class="route-verdict">${plan.routeVerdict}</span>${activeMode === "normal" && day.friendNote ? `<div class="friend-route-note"><strong>朋友推薦怎麼採用：</strong>${day.friendNote}</div>` : ""}</div><div class="route-summary"><span class="card-label">本模式路線</span><strong>${plan.route}</strong></div>`;
  agendaList.innerHTML = plan.items.map((item) => `${renderLeg(item)}${renderStop(item)}`).join("");
  document.querySelectorAll(".date-tab").forEach((tab) => tab.classList.toggle("active", Number(tab.dataset.day) === index));
}

document.querySelectorAll(".date-tab").forEach((tab) => tab.addEventListener("click", () => renderDay(Number(tab.dataset.day))));
document.querySelectorAll(".mode-button").forEach((button) => button.addEventListener("click", () => {
  activeMode = button.dataset.mode;
  const mode = modeCopy[activeMode];
  document.querySelectorAll(".mode-button").forEach((item) => item.classList.toggle("active", item === button));
  document.querySelector(".weather-icon").textContent = mode.icon;
  document.querySelector("#mode-label").textContent = mode.label;
  document.querySelector("#mode-description").textContent = mode.description;
  document.querySelector("#mode-note").textContent = mode.note;
  renderDay(activeDay);
}));

renderDay(1);
