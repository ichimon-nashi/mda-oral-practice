const questions = [
    {
      "id": 1,
      "chapter": "0.4",
      "page": "1",
      "point": "(3.2.4)",
      "question": "組員上機後，應將手冊放在哪裡才是標準規定？"
    },
    {
      "id": 2,
      "chapter": "0.4",
      "page": "2",
      "point": "(5.6)",
      "question": "CCOM抽換後之作廢文件如何處理?"
    },
    {
      "id": 3,
      "chapter": "0.4",
      "page": "2",
      "point": "(5.9.1)",
      "question": "當紙本手冊與電子手冊版本有異時,以哪個版為主?"
    },
    {
      "id": 4,
      "chapter": "0.4",
      "page": "2",
      "point": "(5.9.4)",
      "question": "CCOM客艙組員作業手冊之電子檔存放於何處?"
    },
    {
      "id": 5,
      "chapter": "0.4",
      "page": "2",
      "point": "(5.8)",
      "question": "客艙組員手冊檢查，於平時及年度由誰檢查?如何檢查?"
    },
    {
      "id": 6,
      "chapter": "0.4",
      "page": "3",
      "point": "(7)",
      "question": "如何確認各機種裝備檢查卡為最新版本?"
    },
    {
      "id": 7,
      "chapter": "0.5",
      "page": "4",
      "point": "(3.5.1.1)",
      "question": "空服經理行政職的代理順序為何?"
    },
    {
      "id": 8,
      "chapter": "0.5",
      "page": "4",
      "point": "(5.1.10)",
      "question": "督導危險品手冊制修訂,訓練與民航主管聯繫協調危險品相關事宜是誰的業務職掌?"
    },
    {
      "id": 9,
      "chapter": "0.7",
      "page": "1",
      "point": "(5.1.4)",
      "question": "機種訓練的訓練代號是FATT,請問定期複訓訓練代號是?"
    },
    {
      "id": 10,
      "chapter": "0.8",
      "page": "2",
      "point": "(5.1.3)",
      "question": "空服科的安全目標為何？"
    },
    {
      "id": 11,
      "chapter": "0.8",
      "page": "3",
      "point": "(5.2.2.1)",
      "question": "AQD中自願報告分成哪幾種報告類別?"
    },
    {
      "id": 12,
      "chapter": "0.8",
      "page": "5",
      "point": "(5.3.5.2)",
      "question": "安全報告之相關資料於每月SAG會議提報分析外，應彙整並公佈於EIP何處?"
    },
    {
      "id": 13,
      "chapter": "0.9",
      "page": "3",
      "point": "(5.2.1.2)",
      "question": "帶班空服員是否可擔任客艙組員適性考核之考核員?"
    },
    {
      "id": 14,
      "chapter": "0.9",
      "page": "3",
      "point": "(5.1.6.4.1)",
      "question": "空服科自我督察查核記錄每月彙整，於SAG會議上檢視後，應公佈於EIP何處?"
    },
    {
      "id": 15,
      "chapter": "0.9",
      "page": "4",
      "point": "(5.2.3)",
      "question": "績效考核每年應施行幾次?面談紀錄應保持多久?"
    },
    {
      "id": 16,
      "chapter": "0.10.",
      "page": "1",
      "point": "(5.3.4)",
      "question": "任何因疲勞解除任務者,應併入哪種假別計算?"
    },
    {
      "id": 17,
      "chapter": "0.10",
      "page": "2",
      "point": "(附件一)",
      "question": "客艙組員中度疲勞會有什麼現象? 可否派遣由誰決策?"
    },
    {
      "id": 18,
      "chapter": "0.11",
      "page": "2",
      "point": "(5.2.4)",
      "question": "登機時,未放置妥當之行李,應立即協助,開啟櫃門時應養成甚麼習慣避免內容物掉落?"
    },
    {
      "id": 19,
      "chapter": "0.11",
      "page": "2",
      "point": "(5.3)",
      "question": "客艙組員職業災害之主要發生因素有哪些？"
    },
    {
      "id": 20,
      "chapter": "0.11",
      "page": "3",
      "point": "(5.4.3)",
      "question": "如有因執行職務時遭受不法侵害，該如何處理?"
    },
    {
      "id": 21,
      "chapter": "1.1",
      "page": "1",
      "point": "(5.1.註2)",
      "question": "依公司勞工退休辦法,年齡上限為幾歲?"
    },
    {
      "id": 22,
      "chapter": "1.1",
      "page": "2",
      "point": "(5.2.4)",
      "question": "女性組員因生理狀況無法於指定日期完成體檢,應如何處置?"
    },
    {
      "id": 23,
      "chapter": "1.2",
      "page": "2",
      "point": "(5.4.1)",
      "question": "組員行進間以飛航組員為首,座艙長應列於何處?"
    },
    {
      "id": 24,
      "chapter": "1.3",
      "page": "1",
      "point": "(5.1.6)",
      "question": "客艙組員如捐血300c.c.，於多少小時內不得值勤？"
    },
    {
      "id": 25,
      "chapter": "1.3",
      "page": "1",
      "point": "(5.1.7)",
      "question": "經醫師確認懷孕後,組員應於幾日內通知辦公室?"
    },
    {
      "id": 26,
      "chapter": "1.4",
      "page": "2",
      "point": "(5.1.2.2)",
      "question": "機場待命(SA/SP)未滿兩小時,折抵飛加多少小時?"
    },
    {
      "id": 27,
      "chapter": "1.4",
      "page": "3",
      "point": "(5.2.5.2)",
      "question": "在家待命時段內經辦公室連續通聯無法取得聯繫者,各時長罰責為何?"
    },
    {
      "id": 28,
      "chapter": "1.4",
      "page": "3",
      "point": "(5.2.8)",
      "question": "課室訓練課,遲到幾分鐘以上則當日訓練課程失效,需擇期辦理訓練?"
    },
    {
      "id": 29,
      "chapter": "1.4",
      "page": "4",
      "point": "(5.4.1.2)",
      "question": "台胞證申辦期間可否值勤大陸航線?"
    },
    {
      "id": 30,
      "chapter": "1.4",
      "page": "4",
      "point": "(5.4.7)",
      "question": "年度內因個人疏失忘記刷卡超過幾次以上,每次予以書面警告?"
    },
    {
      "id": 31,
      "chapter": "1.4",
      "page": "5",
      "point": "(5.7.6)",
      "question": "客艙組員隱瞞懷孕繼續執勤期間,若發生事故,一切後果或公司衍生之支出由誰負責?"
    },
    {
      "id": 32,
      "chapter": "1.4",
      "page": "5",
      "point": "(5.7.8)",
      "question": "未經報備及同意即上傳制服之照片於社群網站,將予以什麼處罰?"
    },
    {
      "id": 33,
      "chapter": "1.5",
      "page": "1",
      "point": "(5.3.3.2/)",
      "question": "座艙長會議多久召開一次?"
    },
    {
      "id": 34,
      "chapter": "1.5",
      "page": "2",
      "point": "(5.5.3)",
      "question": "組員依規定應於何時檢視個人郵箱INOTE並閱讀公告?"
    },
    {
      "id": 35,
      "chapter": "1.7",
      "page": "1",
      "point": "(5.1.2)",
      "question": "如何在EIP中搜尋TR表填寫頁面?"
    },
    {
      "id": 36,
      "chapter": "1.7",
      "page": "1",
      "point": "(5.1.3)",
      "question": "座艙長報告之一般報告應於多久內繳交?如為緊急或強制事件報告多久內繳交?"
    },
    {
      "id": 37,
      "chapter": "1.7",
      "page": "5",
      "point": "(5.3.4.2.2)",
      "question": "貴重物品載運單件貨物收受重量限制為幾公斤?"
    },
    {
      "id": 38,
      "chapter": "2.1",
      "page": "2",
      "point": "(4.2.4)",
      "question": "若已開始執行飛航任務，因班機延誤需延長FDP時，有何方式可延長及其限制?"
    },
    {
      "id": 39,
      "chapter": "2.1",
      "page": "4",
      "point": "(4.10.4.1)",
      "question": "依國際線輪休作業規範，安排輪休後之FT及FDP限度不可超過幾小時？"
    },
    {
      "id": 40,
      "chapter": "2.1",
      "page": "4",
      "point": "(4.10.4.3)",
      "question": "遇輪休航班,738組員指定輪休座位為何處?"
    },
    {
      "id": 41,
      "chapter": "2.1",
      "page": "5",
      "point": "(4.10.6.2)",
      "question": "組員待命或因公執行非飛航任務,完畢後應給予連續多少小時以上之休息?"
    },
    {
      "id": 42,
      "chapter": "2.1",
      "page": "6",
      "point": "(5.1.2.3)",
      "question": "組員於外站報離返回基地時間,高雄台中應於落地時間加幾小時?"
    },
    {
      "id": 43,
      "chapter": "2.1",
      "page": "6",
      "point": "(5.1.3.2.3)",
      "question": "特殊班表待命(SH)之待命時間應於何處發布?"
    },
    {
      "id": 44,
      "chapter": "2.1",
      "page": "8",
      "point": "(5.2.1.1)",
      "question": "組員報到遇疲勞檢測系統警示出現時,應如何處置?"
    },
    {
      "id": 45,
      "chapter": "2.2",
      "page": "2",
      "point": "(5.3.2.2)",
      "question": "空機派遣時,各機種開關門操作指定艙門為何?"
    },
    {
      "id": 46,
      "chapter": "2.2",
      "page": "2",
      "point": "(5.4)",
      "question": "載客航班時,組員因故無法派遣造成低於最低派遣人數時,須達成何種條件始可飛航?"
    },
    {
      "id": 47,
      "chapter": "2.3",
      "page": "1",
      "point": "(5.1.3.4)",
      "question": "客艙組員經藥測及毒物檢測異常時，是否須停止派遣並接受專案處理?"
    },
    {
      "id": 48,
      "chapter": "2.4",
      "page": "1",
      "point": "(5.1.1)",
      "question": "事病假以特休抵充者,次月是否符合互換班資格?"
    },
    {
      "id": 49,
      "chapter": "2.4",
      "page": "1",
      "point": "(5.1.4)",
      "question": "任務互換須符合執勤前至少幾個小時以上休息?"
    },
    {
      "id": 50,
      "chapter": "2.5",
      "page": "1",
      "point": "(5.2.7)",
      "question": "當月申請特休7-15天者,需經過誰的審核?"
    },
    {
      "id": 51,
      "chapter": "2.5",
      "page": "2",
      "point": "(5.3.2)",
      "question": "事病假是否可用福利補休假抵充?"
    },
    {
      "id": 52,
      "chapter": "2.5",
      "page": "2",
      "point": "(5.5.1)",
      "question": "次月特休假須於當月幾號前完成申請?"
    },
    {
      "id": 53,
      "chapter": "2.5",
      "page": "2",
      "point": "(5.5.2)",
      "question": "申請休假跨月情形,填寫電子假單時,應如何填寫?"
    },
    {
      "id": 54,
      "chapter": "3.1",
      "page": "2",
      "point": "(5.2.2)",
      "question": "旅客於登機前即要求使用機上氧氣瓶，是否可允收或予以婉拒?"
    },
    {
      "id": 55,
      "chapter": "3.1",
      "page": "2",
      "point": "(5.3.2.4)",
      "question": "導盲犬除出口座位外，應安排於客艙何處伴隨其主人？"
    },
    {
      "id": 56,
      "chapter": "3.1",
      "page": "2",
      "point": "(5.5.2)",
      "question": "精障旅客於報到現場有哪些狀況時，公司仍保有最後載運之決定權利？"
    },
    {
      "id": 57,
      "chapter": "3.1",
      "page": "3",
      "point": "(5.9.4)",
      "question": "國內線懷孕34周的孕搭機婦應備妥多少天內的醫生診斷證明書?"
    },
    {
      "id": 58,
      "chapter": "3.2",
      "page": "2",
      "point": "(5.2.1.1.1)",
      "question": "出口座位旅客須知應由誰負責檢查及確認版次?"
    },
    {
      "id": 59,
      "chapter": "3.2",
      "page": "3",
      "point": "(5.2.1.2.1)",
      "question": "出口座位簡報時機為何?"
    },
    {
      "id": 60,
      "chapter": "3.2",
      "page": "4",
      "point": "(5.2.2.9)",
      "question": "遇出口座位旅客無故將逃生出口開啟之處置?"
    },
    {
      "id": 61,
      "chapter": "3.2",
      "page": "4",
      "point": "(5.3.4.2)",
      "question": "預先購買特選座位的旅客,不願意乘坐出口座位,該如何辦理退費?"
    },
    {
      "id": 62,
      "chapter": "3.2",
      "page": "9",
      "point": "(附件三)",
      "question": "出口座位安全簡報標準用語為何?"
    },
    {
      "id": 63,
      "chapter": "3.3",
      "page": "2",
      "point": "(5.3.1.2)",
      "question": "旅客攜帶電子醫療設備上機，但未事先申請且未符合報局款式或認證標籤之使用規範為何？"
    },
    {
      "id": 64,
      "chapter": "3.3",
      "page": "4",
      "point": "(附件一4.2/5.2.5)",
      "question": "攜帶式制氧機不使用時,須具備那些功能,否則電池必須移出並分開包裝?"
    },
    {
      "id": 65,
      "chapter": "3.3",
      "page": "4",
      "point": "(附件一5.1.4)",
      "question": "使用攜帶式制氧機的旅客,當客艙失壓固定式氧氣面罩掉落時,是否應繼續使用制氧機?"
    },
    {
      "id": 66,
      "chapter": "3.3",
      "page": "8",
      "point": "(ITEM 23)",
      "question": "公司可允收之POC哪一款ATR拒收? "
    },
    {
      "id": 67,
      "chapter": "3.3",
      "page": "10",
      "point": "(附件三1.4.1)",
      "question": "睡眠呼吸中止症之旅客攜帶持續式正壓呼吸器上機使用,是否需要提出適航申請?"
    },
    {
      "id": 68,
      "chapter": "3.4",
      "page": "1",
      "point": "(1.2.2)",
      "question": "依民航局訂定身心障礙之安全因素有哪些?"
    },
    {
      "id": 69,
      "chapter": "3.4",
      "page": "1",
      "point": "(1.2.3.1)",
      "question": "華信航空是否收使用保溫箱之身心障礙旅客?  "
    },
    {
      "id": 70,
      "chapter": "3.4",
      "page": "2",
      "point": "(1.2.4.2)",
      "question": "客艙組員是否提供餵食 如廁或醫療服務?"
    },
    {
      "id": 71,
      "chapter": "3.4",
      "page": "3",
      "point": "(6.1.4)",
      "question": "視障旅客之點字版由誰檢查?短缺時如何處理?"
    },
    {
      "id": 72,
      "chapter": "3.5",
      "page": "3",
      "point": "(5.1.4.5)",
      "question": "除規定的行李件數外,小型樂器幾件內可免費攜帶上機?"
    },
    {
      "id": 73,
      "chapter": "3.5",
      "page": "4",
      "point": "(5.1.5.7)",
      "question": "客艙行李CBBG旅客應自行包裝妥善，且包裝物不得為何種材質？"
    },
    {
      "id": 74,
      "chapter": "3.5",
      "page": "5",
      "point": "(5.2.1.2)",
      "question": "隨身行李放置,應符合哪些標準?"
    },
    {
      "id": 75,
      "chapter": "3.7",
      "page": "1",
      "point": "(4.3)",
      "question": "Accompanied Minor定義為何?"
    },
    {
      "id": 76,
      "chapter": "3.7",
      "page": "2",
      "point": "(5.1.3)",
      "question": "公司規定一位成人能攜帶幾名嬰兒，限制為何?"
    },
    {
      "id": 77,
      "chapter": "3.7",
      "page": "2",
      "point": "(5.2.1.1.1)",
      "question": "壁掛式嬰兒床適用於幾個月內的嬰兒?"
    },
    {
      "id": 78,
      "chapter": "3.7",
      "page": "2",
      "point": "(5.2.1.4)",
      "question": "壁掛式嬰兒床故障之處置方式為何?"
    },
    {
      "id": 79,
      "chapter": "3.7",
      "page": "3",
      "point": "(5.4.6)",
      "question": "客艙組員應對單獨旅行兒童協助並施以簡報，簡報內容應包含哪些重點?"
    },
    {
      "id": 80,
      "chapter": "3.7",
      "page": "6",
      "point": "(5.7.7)",
      "question": "於緊急撤離時，使用CRS之兒童離機時是否要連同CRS設備一起撤離?"
    },
    {
      "id": 81,
      "chapter": "4.4",
      "page": "3",
      "point": "(5.3.1.1.2.2)",
      "question": "B738遇緊急狀況時,客艙組員該如何通知飛航組員?"
    },
    {
      "id": 82,
      "chapter": "4.4",
      "page": "4",
      "point": "(5.5.3.2)",
      "question": "在靜默駕艙時機，相關安全事項需立即聯繫前艙之緊急狀況包含有哪些?"
    },
    {
      "id": 83,
      "chapter": "5.1",
      "page": "1",
      "point": "(2.2)",
      "question": "華信航空清艙檢查共分為哪三級？"
    },
    {
      "id": 84,
      "chapter": "5.1",
      "page": "2",
      "point": "(5.1.1.3)",
      "question": "一般保安清艙檢查完畢後，PR/LF規定應在多久時間內完成簽收地勤提供之檢查表?"
    },
    {
      "id": 85,
      "chapter": "5.1",
      "page": "2",
      "point": "(5.1.1.3.1)",
      "question": "出境航空器清艙檢查紀錄表簽收時機為何?"
    },
    {
      "id": 86,
      "chapter": "5.1",
      "page": "3",
      "point": "(5.3.1.5)",
      "question": "實施全面清艙時應使用何種檢查表做清艙檢查?"
    },
    {
      "id": 87,
      "chapter": "5.2",
      "page": "1",
      "point": "(4.4)",
      "question": "CLEAR ZONE程序內容為何？"
    },
    {
      "id": 88,
      "chapter": "5.2",
      "page": "2",
      "point": "(5.1.2)",
      "question": "OBS ID由哪個單位核發?"
    },
    {
      "id": 89,
      "chapter": "5.2",
      "page": "2",
      "point": "(5.4.1.3)",
      "question": "公司規定飛航組員應將駕駛艙門關閉鎖妥之時機為何?"
    },
    {
      "id": 90,
      "chapter": "5.2",
      "page": "3",
      "point": "(5.4.3.4)",
      "question": "二名飛航組員執勤其中一名欲離座時，進入駕駛替代保安監控的程序是什麼?，"
    },
    {
      "id": 91,
      "chapter": "5.3",
      "page": "1",
      "point": "(4.2.3.1)",
      "question": "DEPA依華信政策,戒護人員人數限制經何單位評估通知其他單位後,得以低危險限制允收?"
    },
    {
      "id": 92,
      "chapter": "5.3",
      "page": "3",
      "point": "(5.2.2.2.3)",
      "question": "DEPU座位安排應盡量集中或盡量分散於客艙?"
    },
    {
      "id": 93,
      "chapter": "5.3",
      "page": "3",
      "point": "(5.2.2.2.4)",
      "question": "DEPU登機上下機建議順序為何?"
    },
    {
      "id": 94,
      "chapter": "5.4",
      "page": "1",
      "point": "(4)",
      "question": "東京公約及中華民國法律訂定滋擾行為範圍包含哪些?"
    },
    {
      "id": 95,
      "chapter": "5.4",
      "page": "2",
      "point": "(5.4)",
      "question": "滋擾旅客約束束帶，ATR裝載位置及數量?"
    },
    {
      "id": 96,
      "chapter": "5.5",
      "page": "2",
      "point": "(5.1.5)",
      "question": "攜帶武器的禮遇對象之隨行人員是否可以處理機上乘客滋擾事件?"
    },
    {
      "id": 97,
      "chapter": "5.6",
      "page": "1",
      "point": "(5.2.1.3)",
      "question": "若於起飛前發生班機遇劫，飛航組員可否先設法從駕駛艙緊急逃生窗離開?"
    },
    {
      "id": 98,
      "chapter": "5.6",
      "page": "2",
      "point": "(5.3.5)",
      "question": "B738於地面時遭劫持時,經機長警示後,Girt Bar應設定在哪個位置?"
    },
    {
      "id": 99,
      "chapter": "5.6",
      "page": "2",
      "point": "(5.3.7)",
      "question": "班機遇劫事件處理結束，待旅客全部下機後，客艙組員後續應如何作為?"
    },
    {
      "id": 100,
      "chapter": "5.7",
      "page": "1",
      "point": "(5.1)",
      "question": "發現爆裂物後的處理步驟依序為何？"
    },
    {
      "id": 101,
      "chapter": "5.7",
      "page": "2",
      "point": "(5.2.3)",
      "question": "在航機後推時，若接獲或評估有爆裂物威脅，客艙作業內容是什麼?"
    },
    {
      "id": 102,
      "chapter": "5.7",
      "page": "3",
      "point": "(5.6.3)",
      "question": "發現爆裂物或危險裝置時,本公司的基本處理原則為何?"
    },
    {
      "id": 103,
      "chapter": "5.7",
      "page": "4",
      "point": "(5.7.5)",
      "question": "ATR機型若爆裂物可移動，應於何時將2R門調整至UNLOCK？"
    },
    {
      "id": 104,
      "chapter": "5.7",
      "page": "7",
      "point": "(附件)",
      "question": "依據航機搜尋可疑爆炸物檢查表，各機型之LRBL於何處?"
    },
    {
      "id": 105,
      "chapter": "5.8",
      "page": "1",
      "point": "(5.2.1)",
      "question": "為保護公司系統不被網路攻擊,組員應注意那些防護要點?"
    },
    {
      "id": 106,
      "chapter": "5.5/5.10",
      "page": "1",
      "point": "(4.1/4.3)",
      "question": "危安物品的定義?"
    },
    {
      "id": 107,
      "chapter": "5.10.",
      "page": "2",
      "point": "(5.2)",
      "question": "航程中,如發現旅客攜帶危安品,應如何處置?"
    },
    {
      "id": 108,
      "chapter": "6.1",
      "page": "2",
      "point": "(3)",
      "question": "航班載運疫苗時，關艙前有什麼客艙作業需執行?"
    },
    {
      "id": 109,
      "chapter": "6.1",
      "page": "3",
      "point": "(C)",
      "question": "危險品規範裡，有關AE/CI均禁止載運之危險物品有哪些?"
    },
    {
      "id": 110,
      "chapter": "6.2",
      "page": "7",
      "point": "(圖示標籤)",
      "question": "試指出操作性標籤\"僅限貨機裝運標籤\"圖示並說明"
    },
    {
      "id": 111,
      "chapter": "6.2",
      "page": "9",
      "point": "(3)",
      "question": "何為化學品全球分類與標示調和制度？"
    },
    {
      "id": 112,
      "chapter": "6.2",
      "page": "9",
      "point": "(3.3)",
      "question": "當發現旅客攜帶物品外有GHS菱形標籤時,組員應採取何種措施?"
    },
    {
      "id": 113,
      "chapter": "6.3",
      "page": "1",
      "point": "(2.12)",
      "question": "自熱餐盒包含哪些危險物品?"
    },
    {
      "id": 114,
      "chapter": "6.3",
      "page": "1",
      "point": "(3)",
      "question": "旅客行李改機邊拖運時，DG規範需確認何種危險品不能放在要拖運的行李裡?"
    },
    {
      "id": 115,
      "chapter": "6.3",
      "page": "3",
      "point": "(表格)",
      "question": "小型打火機入客艙只可放入手提行李?隨身行李?還是隨身攜帶?"
    },
    {
      "id": 116,
      "chapter": "6.3",
      "page": "11",
      "point": "(註一)",
      "question": "Operator Approved行李標籤需標註何種資訊以利旅客通行安檢?"
    },
    {
      "id": 117,
      "chapter": "6.5",
      "page": "5",
      "point": "(5.2.4)",
      "question": "如遇在旅客椅墊及椅縫不慎壓碎或損壞之可攜式電子裝置，其處置程序為何?"
    },
    {
      "id": 118,
      "chapter": "6.5",
      "page": "7",
      "point": "(5.3)",
      "question": "水銀體溫計摔破滲漏之處置方式?"
    },
    {
      "id": 119,
      "chapter": "6.5",
      "page": "8",
      "point": "(5.9.3)",
      "question": "本公司將危險物品事件報告表回報民航局由哪個單位負責？"
    },
    {
      "id": 120,
      "chapter": "7.1",
      "page": "1",
      "point": "(4.4)",
      "question": "組員依班表於指定時段(SH)執行家中待命任務,地點應在何處？"
    },
    {
      "id": 121,
      "chapter": "7.1",
      "page": "2",
      "point": "(5.2.5.3)",
      "question": "當風險評估項目任何項目不符合時,系統將自動出現警示並副知那些單位?"
    },
    {
      "id": 122,
      "chapter": "7.1",
      "page": "3",
      "point": "(5.4.7)",
      "question": "機場待命組員應參加哪一組航班任務之簡報?"
    },
    {
      "id": 123,
      "chapter": "7.2",
      "page": "2",
      "point": "(5.1.4)",
      "question": "簡報時經座艙長檢查異常或抽問不合格組員,座艙長應如何處置?"
    },
    {
      "id": 124,
      "chapter": "7.3",
      "page": "1",
      "point": "(5.2.1.4)",
      "question": "如果遇飛機或客艙組員更換時，是否需再次檢查CLB及做緊急裝備檢查?"
    },
    {
      "id": 125,
      "chapter": "7.3",
      "page": "3",
      "point": "(附件一-1)",
      "question": "客艙裝備檢查時窗型出口該如何檢查?"
    },
    {
      "id": 126,
      "chapter": "7.3",
      "page": "3",
      "point": "(附件一-3)",
      "question": "出風口檢查應開啟且無滴水現象，(各機型)客艙空調開關位於何處? 由誰負責控制?"
    },
    {
      "id": 127,
      "chapter": "7.3",
      "page": "6",
      "point": "(附件三 2.1)",
      "question": "738煙霧偵測器檢查方式?"
    },
    {
      "id": 128,
      "chapter": "7.4",
      "page": "1",
      "point": "(5.2.3.3)",
      "question": "B738商務艙扶手高低調整方式?"
    },
    {
      "id": 129,
      "chapter": "7.4",
      "page": "1",
      "point": "(5.4.2)",
      "question": "旅客登機起至關門止，登機門應由誰監控? 有無替代程序? "
    },
    {
      "id": 130,
      "chapter": "7.4/7.8",
      "page": "2/2",
      "point": "(5.4.7/5.4.4)",
      "question": "ATR若未使用銜接裝備,使用飛機梯上下樓梯時,應注意甚麼條件完備後,始可讓人員通行?"
    },
    {
      "id": 131,
      "chapter": "7.4/7.22",
      "page": "2/3",
      "point": "(5.5.5)/(5.6.2.4)",
      "question": "已登機的旅客是否可以任意離開客艙? 若需離開應由誰陪同?"
    },
    {
      "id": 132,
      "chapter": "7.4",
      "page": "3",
      "point": "(5.6.2.3.2)",
      "question": "B738國內線貨物清單由誰負責檢查?"
    },
    {
      "id": 133,
      "chapter": "7.4",
      "page": "3",
      "point": "(5.7.1)",
      "question": "旅客到齊定義為何?"
    },
    {
      "id": 134,
      "chapter": "7.4",
      "page": "4",
      "point": "(5.8.3)",
      "question": "ATR機型遇ZONE區旅客人數與艙單不符時，(座艙長)/(客艙組員) 應做什麼?"
    },
    {
      "id": 135,
      "chapter": "7.5",
      "page": "2",
      "point": "(5.2.5.1.4)",
      "question": "若ATR CMS預錄廣播系統故障時，應如何執行安全示範?"
    },
    {
      "id": 136,
      "chapter": "7.5",
      "page": "3",
      "point": "(5.4.4)",
      "question": "座艙長回座位後須完成哪些條件始可回報CABIN READY?"
    },
    {
      "id": 137,
      "chapter": "7.6",
      "page": "2",
      "point": "(5.3.2)",
      "question": "國際線每幾小時應執行一次禁菸廣播，提醒旅客全面禁菸？"
    },
    {
      "id": 138,
      "chapter": "7.6",
      "page": "2",
      "point": "(5.4.8)",
      "question": "航程中最少多久需巡視客艙乙次?"
    },
    {
      "id": 139,
      "chapter": "7.7",
      "page": "1",
      "point": "(5.3.1.1)",
      "question": "客艙、廚房、洗手間何處應首先執行安全檢查(SAFTY CHECK)首先?"
    },
    {
      "id": 140,
      "chapter": "7.7",
      "page": "2",
      "point": "(5.4.6)",
      "question": "降落前接獲機長指示須執行低能見度操作，客艙作業為何？"
    },
    {
      "id": 141,
      "chapter": "7.8/7.10",
      "page": "2/2",
      "point": "(5.3.2.2/5.1.4.3)",
      "question": "ATR開門前執行DOUBLE CHECK時機為何?"
    },
    {
      "id": 142,
      "chapter": "7.9",
      "page": "1",
      "point": "(5.9.2)",
      "question": "地停時組員非全員離機，應至少保留多少名客艙組員以執行必要之艙門操作及保安監控?"
    },
    {
      "id": 143,
      "chapter": "7.9",
      "page": "2",
      "point": "(5.15)",
      "question": "全體組員離機後,再次巡視全機艙門設定狀況是誰的責任?"
    },
    {
      "id": 144,
      "chapter": "7.9",
      "page": "2",
      "point": "(5.16)",
      "question": "夏季航機地停超過一小時或空調系統不足時，可採取何措施達到節能降溫？"
    },
    {
      "id": 145,
      "chapter": "7.9",
      "page": "2",
      "point": "(5.17.1)",
      "question": "因大雨無法關艙時,為防止雨水滲入客艙所用的吸水紙墊,何時需移除?"
    },
    {
      "id": 146,
      "chapter": "7.9",
      "page": "2",
      "point": "(5.17.4)",
      "question": "ATR F1 INTERPHONE HANDSET 固定帶使用時機為何?"
    },
    {
      "id": 147,
      "chapter": "7.10.",
      "page": "3",
      "point": "(5.2.5.6)",
      "question": "何種情況下開啟艙門,無須將安全帶指示燈熄滅?"
    },
    {
      "id": 148,
      "chapter": "7.10.",
      "page": "4",
      "point": "(5.5.3.1)",
      "question": "如ATR機型落地後需使用機上尾橇時，誰負責裝備管理、取出尾橇及復位？"
    },
    {
      "id": 149,
      "chapter": "7.10.",
      "page": "4",
      "point": "(5.6.3)",
      "question": "艙門操作中，若發生異常時該如何處理?"
    },
    {
      "id": 150,
      "chapter": "7.10.",
      "page": "5",
      "point": "(5.9.2)",
      "question": "ATR除2L門外，當1L/1R/2R發生故障時，應有何處理程序?"
    },
    {
      "id": 151,
      "chapter": "7.11",
      "page": "2",
      "point": "(5.1.4.5)",
      "question": "客艙維護紀錄簿內容寫錯時應如何處理?"
    },
    {
      "id": 152,
      "chapter": "7.11",
      "page": "2",
      "point": "(5.1.4.6)",
      "question": "烤箱因不明原因異常須登錄C.L.B，英文用字敍述建議為何?"
    },
    {
      "id": 153,
      "chapter": "7.11",
      "page": "3",
      "point": "(5.1.5.3)",
      "question": "遇客艙裝備重大缺失或登入多次仍無法改善,組員應如何處置?"
    },
    {
      "id": 154,
      "chapter": "7.12",
      "page": "2",
      "point": "(5.4.3)",
      "question": "如遇國內外民航主管機關查核，哪些查核情形除了記入TR外亦須立即通報辦公室?"
    },
    {
      "id": 155,
      "chapter": "7.13",
      "page": "3",
      "point": "(5.2.3.5)",
      "question": "旅客個人電子用品如無法顯示或無法確認為飛航模式時，該如何說明要求旅客關機?"
    },
    {
      "id": 156,
      "chapter": "7.13",
      "page": "3",
      "point": "(5.2.4.1)",
      "question": "落地後旅客何時可以解除飛航模式並使用語音功能?"
    },
    {
      "id": 157,
      "chapter": "7.13",
      "page": "4",
      "point": "(5.4)",
      "question": "發生哪些狀況應要求旅客關閉所有可攜式個人電子用品電源?"
    },
    {
      "id": 158,
      "chapter": "7.13",
      "page": "4",
      "point": "(5.8.2)",
      "question": "旅客於機上時,組員可否使用個人電子用品?"
    },
    {
      "id": 159,
      "chapter": "7.13",
      "page": "5",
      "point": "(5.8.7)",
      "question": "機上發現新的PED產品或無法辨識之設備時，應如何處理?"
    },
    {
      "id": 160,
      "chapter": "7.13",
      "page": "5",
      "point": "(5.8.8.2)",
      "question": "筆記型電腦國際線與國內線使用規範為何?"
    },
    {
      "id": 161,
      "chapter": "7.15",
      "page": "3",
      "point": "(5.4.2)",
      "question": "如遇不可預期亂流，客艙組員應如何因應?"
    },
    {
      "id": 162,
      "chapter": "7.16",
      "page": "2",
      "point": "(5.4.1.6)",
      "question": "旅客於登機時進行加油作業，身心障礙旅客應最先還是最後登機?"
    },
    {
      "id": 163,
      "chapter": "7.16",
      "page": "3",
      "point": "(5.4.3.4)",
      "question": "執行旅客於下機時加油作業,洗手間是否應需鎖妥?"
    },
    {
      "id": 164,
      "chapter": "7.16",
      "page": "3",
      "point": "(5.5)",
      "question": "執行機內有旅客之加油作業時，各機種客艙組員的警戒位置分別在哪裏? "
    },
    {
      "id": 165,
      "chapter": "7.17",
      "page": "2",
      "point": "(5.5)",
      "question": "旅客於機上違規使用電子菸,組員應依何法規處理?菸害防制法或電子用品使用規範?"
    },
    {
      "id": 166,
      "chapter": "7.17",
      "page": "2",
      "point": "(5.6.4)",
      "question": "懷疑特定旅客在機上吸菸，但無確切證據或證人時，處理程序為何?"
    },
    {
      "id": 167,
      "chapter": "7.17",
      "page": "2",
      "point": "(5.7)",
      "question": "加熱菸及電子菸之差異?"
    },
    {
      "id": 168,
      "chapter": "7.17",
      "page": "2",
      "point": "(5.7.1.2)",
      "question": "加熱菸是否視同電子菸不可托運也不可攜帶入境台灣?"
    },
    {
      "id": 169,
      "chapter": "7.20.",
      "page": "2",
      "point": "(5.1.2.6)",
      "question": "客艙組員座JUMP SEAT除要求穿制服外，還有什麼要求或限制?"
    },
    {
      "id": 170,
      "chapter": "7.20.",
      "page": "2",
      "point": "(5.1.2.9)",
      "question": "轉訓738之他機種合格學員,OJT時是否可坐3Rα?"
    },
    {
      "id": 171,
      "chapter": "7.20.",
      "page": "2",
      "point": "(5.1.3.3.1)",
      "question": "B738六人派遣時,3R組員指定座椅固定為靠近走到座位的理由為何?"
    },
    {
      "id": 172,
      "chapter": "7.22",
      "page": "1",
      "point": "(5.2.1.4)",
      "question": "B738個人影音系統異常SESET超過幾次仍無法修復,需登入CLB"
    },
    {
      "id": 173,
      "chapter": "7.22",
      "page": "1",
      "point": "(5.2.2.3)",
      "question": "ATR CMS故障時要如何重新開機Reset?"
    },
    {
      "id": 174,
      "chapter": "7.22",
      "page": "2",
      "point": "(5.4.1)",
      "question": "航程中客艙溫度達到幾度即視為異常？應如何處置？"
    },
    {
      "id": 175,
      "chapter": "7.22",
      "page": "3",
      "point": "(5.6.2.5)",
      "question": "若艙門關閉後旅客發現有遺失物品，客艙組員應如何協助?"
    },
    {
      "id": 176,
      "chapter": "7.22",
      "page": "6",
      "point": "(附件二-文字說明)",
      "question": "B738為五人派遣時，Z2於地面準備時職務為?"
    },
    {
      "id": 177,
      "chapter": "7.23",
      "page": "1",
      "point": "(5.4)",
      "question": "大量冰塊是否可倒入水槽?"
    },
    {
      "id": 178,
      "chapter": "7.23",
      "page": "2",
      "point": "(5.6)",
      "question": "咖啡機BREW CUP 是否可放置茶包?"
    },
    {
      "id": 179,
      "chapter": "8.1",
      "page": "2",
      "point": "(5.2.6.4.4)",
      "question": "長時間地面延誤是否於機內送餐，由誰進行討論，最後由誰決定?"
    },
    {
      "id": 180,
      "chapter": "8.1",
      "page": "2",
      "point": "(5.2.6.4.7)",
      "question": "B738地面使用烤箱G4不得超過幾台?"
    },
    {
      "id": 181,
      "chapter": "8.1",
      "page": "2",
      "point": "(5.2.6.5.5)",
      "question": "機內地面送餐服務時,各式警示燈號應如何開關?"
    },
    {
      "id": 182,
      "chapter": "8.1",
      "page": "3",
      "point": "(5.2.6.5.9)",
      "question": "執行地面送餐時，本公司機型可否使用餐車推出服務?"
    },
    {
      "id": 183,
      "chapter": "8.1",
      "page": "4",
      "point": "(5.8)",
      "question": "遇旅客霸佔飛機時，客艙組員應如何處置?"
    },
    {
      "id": 184,
      "chapter": "8.2",
      "page": "1",
      "point": "(5.1.1.4.1)",
      "question": "航程中遇急救處理,組員的目標為何?"
    },
    {
      "id": 185,
      "chapter": "8.2",
      "page": "2",
      "point": "(5.1.3)",
      "question": "遇旅客於機上有傷病情形，應做傷病報告讓地面醫護人員了解狀況，於報告中應記錄哪些項目?"
    },
    {
      "id": 186,
      "chapter": "8.2",
      "page": "7",
      "point": "(5.2.8.2.1)",
      "question": "如遇低血糖症旅客，可否使用代糖提升旅客體內血糖值？"
    },
    {
      "id": 187,
      "chapter": "8.2",
      "page": "18",
      "point": "(5.7.1.1)",
      "question": "UPK防護裝備穿戴順序為何?"
    },
    {
      "id": 188,
      "chapter": "8.2",
      "page": "19",
      "point": "(5.8.2)",
      "question": "機上急救使用之各類侵入性醫療器材,使用過後該如何處置?"
    },
    {
      "id": 189,
      "chapter": "8.3",
      "page": "2",
      "point": "(5.2.3.3)",
      "question": "如遇客艙組員失能，班機又客滿之狀況，該如何調整座位？"
    },
    {
      "id": 190,
      "chapter": "8.5",
      "page": "3",
      "point": "(附件二)",
      "question": "使用Medical Pouch內容物是否須回報機長?"
    },
    {
      "id": 191,
      "chapter": "8.5.1",
      "page": "1",
      "point": "(2.2.3)",
      "question": "AED使用限制為何?"
    },
    {
      "id": 192,
      "chapter": "8.5.1",
      "page": "2",
      "point": "(2.7)",
      "question": "當AED指示燈為綠色恆亮但藍色訊息燈未亮，代表設備狀態為何？如何處置？"
    },
    {
      "id": 193,
      "chapter": "8.5.3",
      "page": "3",
      "point": "(圖示/文字說明)",
      "question": "ATR的求生標示指示卡如何使用?"
    },
    {
      "id": 194,
      "chapter": "8.5.4",
      "page": "1",
      "point": "(1.2.1)",
      "question": "機上如需使用EMK內藥品，除醫護人員外，至少需幾名以上客艙組員在場協助取藥? "
    },
    {
      "id": 195,
      "chapter": "8.5.5",
      "page": "3",
      "point": "(附件B)",
      "question": "B738兩個UPK皆開啟或遺失,續飛後續航航段有何限制?"
    },
    {
      "id": 196,
      "chapter": "8.6",
      "page": "1",
      "point": "(3.2.2)",
      "question": "遇機上緊急救護，必要時可成立急救小組，(座艙長)/(客艙組員)工作分配為何?"
    },
    {
      "id": 197,
      "chapter": "8.6",
      "page": "2",
      "point": "(8)",
      "question": "緊急救護CPR時，哪些狀況不宜使用口對口人工呼吸法?"
    },
    {
      "id": 198,
      "chapter": "8.6",
      "page": "2",
      "point": "(8)",
      "question": "飛機上具有隔離的人工呼吸裝備,裝載於何處?"
    },
    {
      "id": 199,
      "chapter": "8.6",
      "page": "3",
      "point": "(9.6.1)",
      "question": "可攜式氧氣裝備使用後之處置方式?"
    },
    {
      "id": 200,
      "chapter": "8.6",
      "page": "4",
      "point": "",
      "question": "心肺復甦術之按壓與吹氣比率為何?"
    },
    {
      "id": 201,
      "chapter": "8.7",
      "page": "1",
      "point": "(4)",
      "question": "疑似傳染病症狀定義為何？"
    },
    {
      "id": 202,
      "chapter": "8.7",
      "page": "2",
      "point": "(5.1.3.4)",
      "question": "航程中若旅客出現疑似傳染病徵狀時，其使用過之餐盤應如何處理？"
    },
    {
      "id": 203,
      "chapter": "8.7",
      "page": "3",
      "point": "(5.3.1)",
      "question": "組員於自主健康管理期間,每日應測量幾次體溫及管理健康狀況?"
    },
    {
      "id": 204,
      "chapter": "8.7",
      "page": "3",
      "point": "(5.5.7.1)",
      "question": "執行滅火程序前,個人防疫裝備是否應先移除?"
    },
    {
      "id": 205,
      "chapter": "9.1",
      "page": "1",
      "point": "(註)",
      "question": "ATR機型執行CPP準備時，每分段廣播完座艙長是否需至客艙協助？"
    },
    {
      "id": 206,
      "chapter": "9.1",
      "page": "4",
      "point": "(附件一)",
      "question": "PSP的定義及適任人選?"
    },
    {
      "id": 207,
      "chapter": "9.2",
      "page": "2",
      "point": "(5.1)",
      "question": "緊急撤離時，由誰負責手動開啟緊急燈光?"
    },
    {
      "id": 208,
      "chapter": "9.3",
      "page": "3",
      "point": "(5表格/廚房電器火災1.1)",
      "question": "ATR廚房發生火災時,HOT JUGS關閉電源的正確步驟為何?"
    },
    {
      "id": 209,
      "chapter": "9.3",
      "page": "3",
      "point": "(5表格/廚房電器火災1.2)",
      "question": "B738 Galley power如何關閉?"
    },
    {
      "id": 210,
      "chapter": "9.3",
      "page": "5",
      "point": "(客艙煙霧表格)",
      "question": "發生客艙煙霧時,組員應盡可能回報飛航組員煙霧的那些特徵?"
    },
    {
      "id": 211,
      "chapter": "9.3",
      "page": "5",
      "point": "(表格-1.2)",
      "question": "ATR遇後貨艙火災，如無法找出火源或距離太遠，應如何滅火?"
    },
    {
      "id": 212,
      "chapter": "9.3",
      "page": "7",
      "point": "(7.8)",
      "question": "滅火後，使用過的PBE或滅火器應該如何處理?"
    },
    {
      "id": 213,
      "chapter": "9.4",
      "page": "2",
      "point": "(3.1.2.2.4)",
      "question": "ATR可允許僅裝備25%固定式氧氣面罩之原因?"
    },
    {
      "id": 214,
      "chapter": "9.4",
      "page": "3",
      "point": "(3.1.6.1)",
      "question": "失壓結束後，掉落的氧氣面罩該如何處理?"
    },
    {
      "id": 215,
      "chapter": "9.4",
      "page": "4",
      "point": "(4.1.1)",
      "question": "失壓時最大的危害為何?"
    },
    {
      "id": 216,
      "chapter": "9.5",
      "page": "4",
      "point": "(4.5)",
      "question": "成人實施安全姿勢時,是否需要使用枕頭或毛毯以減少撞擊傷害?"
    },
    {
      "id": 217,
      "chapter": "10.2.2",
      "page": "2",
      "point": "(5)",
      "question": "ATR地板緊急燈光冷光條持續吸光15分鐘後，將可提供幾分鐘的緊急照明？"
    },
    {
      "id": 218,
      "chapter": "10.2.10",
      "page": "4",
      "point": "(NOTE1)",
      "question": "為何客艙組員需要熟悉如何使用駕艙內的固定式氧氣系統?"
    },
    {
      "id": 219,
      "chapter": "10.2.11",
      "page": "2",
      "point": "(NOTE1.NOTE2)",
      "question": "ATR洗手間或後貨艙偵測到煙霧時，客艙CMS上會有何警示?"
    },
    {
      "id": 220,
      "chapter": "11.1",
      "page": "17",
      "point": "(ROPES)",
      "question": "B738客艙緊急逃生窗之逃生繩索位於何處?"
    },
    {
      "id": 221,
      "chapter": "11.2.4",
      "page": "1",
      "point": "(IN CASE OF..)",
      "question": "B738 水上迫降CPP時，組員示範應使用組員救生衣或DEMO用救生衣?"
    }
]

//card flip
const cards = document.querySelector(".card")

function cardFlip() {
    cards.classList.toggle("is-flipped")
}

cards.addEventListener("click", cardFlip)

//get random question
const getQuestion = () => {
    cards.classList.contains("is-flipped") ? cards.classList.toggle("is-flipped") : cards
    reset()
    let randomNum = Math.floor(Math.random() * questions.length)
    document.getElementById("question-num").innerHTML = randomNum;
    document.getElementById("question").innerHTML = questions[randomNum].question;
    document.getElementById("chapter").innerHTML = questions[randomNum].chapter;
    document.getElementById("page").innerHTML = questions[randomNum].page;
    document.getElementById("line").innerHTML = questions[randomNum].point;
}

//stopwatch global variables
var stopwatch = document.getElementById('stopwatch');
var mainButton = document.getElementById('main-btn');
var startTime=0;
var elapsedTime=0;
var timeoutId=null;


//method to operate start and stop function
function main(){
  if (mainButton.innerHTML === 'Start') {
    buttonColor()
    startTime = Date.now();
    startStopwatch();
    mainButton.innerHTML = 'Pause';
  } else {
    buttonColor()
    elapsedTime += Date.now() - startTime;
    clearTimeout(timeoutId);
    mainButton.innerHTML = 'Start';
  }
}
 
//method to reset the stopwatch
function reset() {
  mainButton.style.backgroundColor = "#179e54";
  elapsedTime = 0;
  startTime = Date.now();
  clearTimeout(timeoutId);
  mainButton.innerHTML = 'Start';
  displayTime( 0, 0, 0);  
}
 
//method to start the stopwatch
function startStopwatch() {
  
  //run setTimeout() and save id
  timeoutId = setTimeout(function(){
    //calculate elapsed time
    const time = Date.now() - startTime + elapsedTime;
     
    //calculate different time measurements based on elapsed time
    const milliseconds = parseInt((time%1000)/10)
    const seconds = parseInt((time/1000)%60)
    const minutes = parseInt((time/(1000*60))%60)

     
    //display time
    displayTime(minutes, seconds, milliseconds);
     
    //calling same method again recursively 
    startStopwatch();
  }, 100);
}
 
//method to display time in '00:00:00:00' format
function displayTime(minutes, seconds, milliseconds) {
    minutes = minutes < 10 ? '0'+minutes : minutes ;
    seconds = seconds < 10 ? '0'+seconds : seconds ;
    milliseconds = milliseconds < 10 ? '0'+milliseconds : milliseconds ;
    stopwatch.innerHTML = minutes+':'+seconds+':'+milliseconds;
}

function buttonColor() {
  if (mainButton.innerHTML === 'Start') {
    mainButton.style.backgroundColor = "#d3364b"
  } else {
    mainButton.style.backgroundColor = "#179e54"
  }
}
