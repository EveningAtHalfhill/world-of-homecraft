const plans = {
  warlock: {
    className: "术士",
    themes: ["暗影契约藏书室", "邪能烛光会客厅", "暮色召唤小屋"],
    furniture: ["邪能烛台", "符文法阵地毯", "恶魔学识书架", "紫焰壁灯", "黑檀炼金桌", "虚空水晶柜"],
    locationTitle: "附近居民不愿靠近的区域",
    coords: ["悲伤沼泽废弃仪式屋", "逆风小径旧墓地下层", "银松森林烧焦农舍附近", "暮色森林无灯小屋后门"],
    style: "以深色木材、紫色火光和邪能绿点缀为主，中心区域放置法阵地毯，边角用烛台和卷轴制造仪式感。整体适合偏神秘、压低照明的私人研究空间。",
    rumors: ["附近居民已经习惯凌晨三点的低语声。", "有人说地下室不止住着主人一个。", "信使拒绝把包裹送到法阵中央。", "邻居认为这里的硫磺味已经超出装修范畴。", "酒馆里传言书架后面藏着一扇会呼吸的门。", "清洁工坚称蜡烛会自己重新点燃。", "有个学徒进去借书，出来时多了一条影子。", "门口的地毯据说会判断访客是否值得献祭。"],
    affixes: ["虚空传送门", "传说级藏书区", "恶魔契约角", "灵魂碎片保险柜", "邪能壁炉", "禁忌召唤间", "暗影密语书桌"]
  },
  paladin: {
    className: "圣骑士",
    themes: ["圣光誓约礼拜厅", "金辉守护者宅邸", "白银壁炉会堂"],
    furniture: ["白银圣徽挂饰", "金边长椅", "圣光讲台", "晨光壁毯", "骑士盾牌陈列架", "祝福蜡烛台"],
    locationTitle: "被祝福过的落址",
    coords: ["北郡修道院旧钟楼旁", "圣光礼拜堂后庭", "暴风城教堂区石阶边", "提尔之手残旧礼拜厅"],
    style: "选择白石、金边和暖色光源，入口放圣徽挂饰，中央安排讲台或长桌，两侧用长椅形成庄重秩序。空间要明亮、对称，突出守护与誓约感。",
    rumors: ["路过的卫兵会下意识站直。", "据说这里的椅子坐久了会想忏悔。", "邻居抱怨夜里太亮，像太阳忘了下班。", "每个杯垫都被摆得像军令一样整齐。", "酒馆老板说屋主连扫帚都给了祝福。", "有冒险者在门口脱帽，结果只是来问路。", "孩子们相信这里的壁炉能赶走噩梦。", "有人怀疑大厅中央的长椅比审判还严肃。"],
    affixes: ["圣光礼拜角", "誓约长廊", "净化圣泉", "骑士荣誉墙", "公会会议厅", "祝福餐桌", "黎明祈祷席"]
  },
  rogue: {
    className: "盗贼",
    themes: ["暗巷战利品密室", "午夜潜行公寓", "黑市情报工作间"],
    furniture: ["暗巷工具桌", "锁箱陈列架", "深色帷幕", "匕首展示柜", "旧木情报板", "黑市账本桌"],
    locationTitle: "最后有人见过它的地方",
    coords: ["暴风城旧城区下水道入口", "棘齿城酒馆背后的木桥", "拉文霍德庄园西侧废仓", "藏宝海湾码头阴影下的后门"],
    style: "用深色帷幕分隔视线，把工具桌靠墙摆放，锁箱和展示柜集中在低光角落。整体保持紧凑、隐蔽、可快速行动的感觉，适合做情报据点。",
    rumors: ["没人知道正门到底是不是正门。", "有信使把包裹放下就走，连收据都不敢要。", "酒馆里都说这里的锁比主人更会说话。", "邻居听见金币声，却从没见过客人进出。", "有一面墙看起来很普通，因此最可疑。", "据说餐桌下面藏着三份不同身份的账本。", "巡逻兵每次路过都会忘记自己要查什么。", "有人在门口等了半小时，才发现门铃是假的。"],
    affixes: ["可疑地下通道", "黑市暗门", "PvP 奖杯墙", "锁箱收藏区", "隐藏地下室", "密探情报桌", "影步逃生窗"]
  },
  shaman: {
    className: "萨满",
    themes: ["四元素静修庭", "风暴图腾木屋", "流水火石仪式间"],
    furniture: ["元素图腾组", "风暴鼓", "流水石盆", "火焰盆架", "兽皮圆毯", "雷鸣石柱"],
    locationTitle: "元素愿意停留的地方",
    coords: ["纳格兰风吹过的图腾坡", "雷霆崖旧鼓圈旁", "瓦丝琪尔潮声石盆边", "杜隆塔尔暴雨前的红土祭台"],
    style: "围绕四元素做分区：图腾作为竖向焦点，石盆和火盆形成水火平衡，地面铺兽皮或圆毯。材质以木、石、皮革为主，氛围自然但有仪式秩序。",
    rumors: ["天气预报在这栋房子附近基本失效。", "水盆偶尔会对客人提出意见。", "邻居已经分不清打雷和屋主搬椅子的声音。", "每个图腾都像知道一点内幕。", "有人说火盆和水盆曾经吵了一整晚。", "信使把信交给图腾后竟然收到了点头回应。", "酒馆里传言这里的地板会自己找平衡。", "屋主不在时，风也会替他开门。"],
    affixes: ["元素议会席", "雷霆冥想区", "先祖低语墙", "潮汐净化盆", "熔岩暖炉", "风暴观测台", "图腾收藏柱"]
  },
  deathKnight: {
    className: "死亡骑士",
    themes: ["黑锋寒霜军械室", "冰冠静默宅邸", "符文壁炉墓室"],
    furniture: ["黑锋符文桌", "寒霜火盆", "亡者旗帜", "暗钢武器架", "冰蓝符文地砖", "荒芜王座椅"],
    locationTitle: "火盆也暖不起来的地方",
    coords: ["阿彻鲁斯下层冷铁走廊", "冰冠冰川废弃岗哨旁", "东瘟疫之地无名墓园外", "龙骨荒野覆霜石门后"],
    style: "以暗钢、石墙和冰蓝光源压住空间温度，武器架与符文桌放在主视觉位置，旗帜拉高垂直线条。整体保持冷峻、克制，像一间可居住的黑锋据点。",
    rumors: ["这里的火盆从来没有温度。", "半夜会传出金属拖地声。", "邻居怀疑地下埋着什么东西。", "没人敢在这里待到午夜之后。", "送奶工说门口的霜比冬幕节还准时。", "有冒险者坐过那把椅子，三天没说暖和。", "酒馆里传言墙上的旗帜会记住每个访客。", "壁炉旁边最热闹的时候，通常一个活人也没有。"],
    affixes: ["冰封武器库", "亡者纪念墙", "黑锋审判席", "符文熔炉角", "寒霜王座位", "灵魂封存柜", "天灾战旗廊"]
  },
  warrior: {
    className: "战士",
    themes: ["铁红战旗大厅", "角斗冠军训练馆", "炉火兵器宅邸"],
    furniture: ["战旗挂墙", "双手斧武器架", "铁砧修理台", "冠军圆桌", "厚皮训练假人", "红毯荣誉阶"],
    locationTitle: "常见驻扎地",
    coords: ["赤脊山旧哨塔旁", "灰谷前线木栅营地", "暴风城兵营后院", "阿拉希高地战旗残影下"],
    style: "铁、皮革和红色旗帜构成主调，武器架要放在一眼能看到的位置，训练区留出完整动线。整体像一座能开会、能备战、也能展示胜利的战士大厅。",
    rumors: ["这里的门轴听起来像开战号角。", "邻居说每次关门都像攻城开始。", "训练假人比很多冒险者更有资历。", "酒馆里传言餐桌曾经被当成盾牌用过。", "没人敢把杯子放在战旗下面。", "有个客人问路，最后被安排做了三组热身。", "铁砧旁边的凳子据说只欢迎真正的勇士。", "墙上的武器看起来都在等一个理由。"],
    affixes: ["角斗士备战间", "战吼回音厅", "PvP 奖杯墙", "传奇武器架", "铁血公会会议厅", "决斗训练圈", "战旗收藏廊"]
  },
  hunter: {
    className: "猎人",
    themes: ["森林追踪者木屋", "荒野兽栏小院", "鹰眼狩猎营地"],
    furniture: ["兽栏围栏", "皮革睡垫", "弓箭陈列墙", "篝火料理台", "木桩地图桌", "猎鹰栖架"],
    locationTitle: "兽群常绕行的地方",
    coords: ["灰谷猎径尽头的松木屋", "纳格兰裂蹄牛饮水坡", "至高岭鹰巢下的猎人营", "洛克莫丹湖边旧箭靶旁"],
    style: "用原木、兽皮、绿植和开放式院落制造野外营地感，家具不要过度对称，保留像临时扎营一样的松弛秩序。宠物区和装备区分开会更像真实猎人之家。",
    rumors: ["宠物区面积据说已经超过主人卧室。", "有人看到一只熊占用了餐桌主位。", "肉干失踪案至今没有破案。", "邻居投诉半夜总有狼嚎声。", "信使会先确认门口那只猫头鹰是不是管家。", "屋里的脚印种类比旅店客人还多。", "酒馆里传言厨房门只听宠物的话。", "弓架旁的灰尘从来没有机会落稳。"],
    affixes: ["稀有宠物兽栏", "猎鹰观察台", "荒野烹饪角", "足迹追踪地图", "巨兽战利品墙", "森林隐蔽入口", "箭袋收藏柜"]
  },
  mage: {
    className: "法师",
    themes: ["奥术星图书房", "传送门会客厅", "蓝紫水晶高塔"],
    furniture: ["奥术星图桌", "蓝晶法杖架", "悬浮书本堆", "传送门圆毯", "魔法茶具台", "紫晶壁灯"],
    locationTitle: "奥术偶尔走漏的地方",
    coords: ["达拉然偏僻书塔阁楼", "艾萨拉蓝晶断崖边", "苏拉玛旧贵族书房后厅", "碧蓝林海星光照不到的塔基"],
    style: "奥术蓝和紫色光晕是核心，书桌与星图放在主位，周围用悬浮书本、水晶和传送门元素制造高阶施法者的秩序感。空间要干净、聪明、带一点炫耀。",
    rumors: ["访客抱怨厕所门偶尔会随机传送。", "据说茶壶会自己漂浮倒茶。", "有人误入地下室后迟到了三天。", "书架之间经常发生奥术辩论。", "邻居说夜里窗户里能看到不属于本地的星空。", "信使每次敲门前都会确认自己还在同一座城市。", "酒馆里传言这里的楼梯会挑选目的地。", "有个学徒声称扫帚比他更懂奥术。"],
    affixes: ["私人传送门", "奥术星图穹顶", "传说级藏书区", "变羊实验角", "魔法甜点桌", "水晶充能柱", "时间扭曲钟"]
  },
  priest: {
    className: "牧师",
    themes: ["圣白祈祷室", "暗影忏悔书房", "晨光治愈会客厅"],
    furniture: ["白纱帷幔", "金边祈祷椅", "暗影烛台", "治愈花瓶", "双面圣典架", "柔光壁灯"],
    locationTitle: "低声祈祷传出的地方",
    coords: ["暴风城教堂区侧廊", "沙塔斯烛光祈愿台旁", "幽暗城遗址破损圣龛前", "苏拉玛白纱窗后的静室"],
    style: "用圣白金光和紫灰暗影做双主题，一侧明亮柔和，一侧克制低光，中间用书架或帷幔过渡。这样既有治愈感，也保留牧师职业的精神张力。",
    rumors: ["访客进门会自动压低声音。", "有人说镜子里偶尔会给出人生建议。", "邻居分不清这里是在祈祷还是在开会。", "暗影角落总比房间其他地方冷半拍。", "酒馆里传言祈祷椅能听懂叹气。", "信使离开时总觉得自己被原谅了一次。", "白色帷幔从不沾灰，理由没人敢问。", "有人看见圣典自己翻到了该看的那一页。"],
    affixes: ["神圣告解室", "暗影低语角", "治愈冥想席", "圣典收藏墙", "灵魂安抚区", "晨光祈祷窗", "虚空忏悔镜"]
  },
  druid: {
    className: "德鲁伊",
    themes: ["梦境树屋庭院", "月光自然温室", "野性变形客厅"],
    furniture: ["活木长桌", "月井水盆", "藤蔓吊灯", "野性皮毯", "梦境花架", "橡木储物柜"],
    locationTitle: "月光自己会停下的地方",
    coords: ["月光林地月井后的草坡", "瓦尔莎拉古树根须间", "翡翠梦境半醒花圃旁", "海加尔山晨露石阶下"],
    style: "自然绿和月光金适合做柔和层次，植物、活木和水盆要占据主要视觉。家具像从树屋里自然长出来，越少直线硬边，越有德鲁伊的梦境感。",
    rumors: ["有人怀疑屋里的植物会偷偷移动位置。", "访客总会莫名其妙在地板上睡着。", "没人能解释为什么屋里永远有月光。", "地毯上偶尔会长出小蘑菇。", "邻居说窗外那棵树昨天还不在那里。", "酒馆里传言藤蔓会把乱放的鞋拖走。", "信使每次来都被鸟群认真审视。", "有人听见月井在夜里轻轻打哈欠。"],
    affixes: ["翡翠梦境阳台", "月井疗愈区", "变形休息垫", "古树守护门", "自然药草温室", "星辰观景台", "野性爪痕墙"]
  },
  monk: {
    className: "武僧",
    themes: ["青竹静心茶室", "玉绿练功庭", "云端酒仙小馆"],
    furniture: ["青竹屏风", "玉石茶桌", "训练木桩", "酒仙陶坛", "禅意蒲团", "云纹灯笼"],
    locationTitle: "适合静修的地点",
    coords: ["昆莱山云雾石阶", "翡翠林竹溪旁", "迷踪岛旧晨练庭院", "四风谷酒香飘过的田埂边"],
    style: "青竹、玉绿和暖木色组成主视觉，茶桌居中，练功木桩放在侧边，留出呼吸感和动线。空间不需要堆满，越克制越像真正的武僧居所。",
    rumors: ["这里的茶香能让吵架的人忘词。", "有人说训练木桩比导师还严格。", "酒坛旁边总会多出一个空杯子。", "邻居听见晨钟后开始主动早起。", "信使送完信顺便学了两招站桩。", "蒲团看似普通，坐下就不想谈房租。", "酒馆里传言屏风后面藏着一只很懂礼貌的扫帚。", "屋主说是练功声，墙壁表示需要休息。"],
    affixes: ["禅意冥想席", "酒仙私藏坛", "青竹练功庭", "玉珑祝福角", "滚地翻动线", "云端茶会桌", "晨钟静修廊"]
  },
  demonHunter: {
    className: "恶魔猎手",
    themes: ["邪绿暗焰训练场", "伊利达雷猎魔居所", "碎刃眼棱密室"],
    furniture: ["邪能火盆", "战刃陈列架", "暗焰石台", "恶魔皮革座椅", "绿色水晶灯", "破碎锁链墙"],
    locationTitle: "裂痕边缘的落脚处",
    coords: ["黑暗神殿外侧断墙下", "破碎海滩焦黑石阶旁", "费伍德森林邪能树影里", "马顿残破军械台后"],
    style: "邪绿暗焰要足够锐利，战刃和锁链形成强烈轮廓，家具保持低矮和攻击性。整体像猎魔训练场，不追求舒适，追求压迫感和速度感。",
    rumors: ["路过的人总觉得墙上有东西在盯着自己。", "邪能火盆把普通影子照得很不普通。", "邻居说这里的裂缝看起来不像装修失误。", "没人愿意背对战刃展示墙。", "信使每次送信都把字写得格外工整。", "酒馆里传言沙发坐垫曾经被审判过。", "有客人问能不能开窗，屋主说裂痕已经够通风。", "门口的绿色光亮足以让醉汉瞬间清醒。"],
    affixes: ["眼棱训练线", "战刃收藏墙", "邪能监牢角", "恶魔战利品柜", "暗焰冥想台", "伊利达雷誓约廊", "碎刃逃生门"]
  },
  evoker: {
    className: "唤魔师",
    themes: ["龙鳞青铜观景厅", "翡翠守护书房", "五色龙誓会客室"],
    furniture: ["龙鳞屏风", "青铜沙漏桌", "翡翠水晶盆", "龙翼纹地毯", "誓约圆桌", "宝石孵化架"],
    locationTitle: "龙族旧档案提到的地方",
    coords: ["禁忌离岛风化龙鳞墙旁", "瓦德拉肯青铜沙漏廊下", "欧恩哈拉平原风鸣石圈边", "碧蓝林海翡翠水晶坡"],
    style: "青铜与翡翠要交替出现，圆桌代表龙族誓约，水晶和沙漏制造时间与生命的双重主题。空间适合明亮、开阔，带一点巨龙收藏家的奢华感。",
    rumors: ["有人说客厅的沙漏比管家还准时。", "龙鳞屏风在烛光下像在眨眼。", "邻居坚称屋顶偶尔传来翅膀声。", "信使把包裹放下时会先向圆桌点头。", "酒馆里传言这里的椅子按龙族颜色排资历。", "宝石架旁边总能听见轻微的呼吸声。", "有人在这里迟到后解释说时间线不同。", "翡翠水晶盆看起来比很多治疗师更可靠。"],
    affixes: ["巨龙收藏区", "青铜时间沙漏", "翡翠疗愈巢", "五色誓约桌", "龙鳞展示墙", "幼龙观察台", "宝石孵化角"]
  }
};

const EN_CONTENT = {
  warlock: {
    className: "Warlock",
    themes: ["Felwhisper Cellar", "The Room Below the Candlelight", "Duskcalling Shack"],
    furniture: ["Fel Candlestand", "Runed Summoning Rug", "Demonology Bookcase", "Violet Ember Lantern", "Blackwood Alchemy Table", "Voidglass Cabinet"],
    locationTitle: "Places Neighbors Avoid",
    coords: ["Abandoned rite-house in the Swamp of Sorrows", "The lower crypt beneath Deadwind Pass", "Near a scorched farmhouse in Silverpine", "The back door of a lampless cottage in Duskwood"],
    styles: ["Dark timber, green fel glimmers, and violet candlelight make the room feel private in the wrong way. The rug belongs in the center, where every guest can pretend not to notice the circle.", "Bookshelves should crowd the walls, with candles tucked into corners and one locked cabinet that nobody asks about twice."],
    rumors: ["The neighbors are used to whispering after midnight. That does not mean they like it.", "Someone claims the cellar has more tenants than the deed admits.", "The courier refuses to place parcels in the middle of the circle.", "The sulfur smell has moved beyond decoration.", "A tavern regular says the bookcase breathes when the moon is low.", "The candles relight themselves after every cleaning."],
    affixes: ["Void Portal Alcove", "Legendary Archive Nook", "Demon Contract Corner", "Soul Shard Strongbox", "Fel Hearth", "Forbidden Summoning Room", "Shadowbound Writing Desk"],
    mythicAffixes: ["Legacy of the Burning Legion", "Whisper of Sargeras", "Deed from the Twisting Nether"],
    npcs: [
      { name: "Gul'dan", comment: "Not enough power, but the cellar is excellent for private bargains." },
      { name: "Wilfred", comment: "The circle is placed well. Just try not to summon the wrong guest again." },
      { name: "Kanrethad", comment: "Good fel lighting. The psychological pressure on visitors is acceptable." }
    ]
  },
  paladin: {
    className: "Paladin",
    themes: ["Golden Guardian Manor", "Oathlight Chapel Hall", "Silver Hearth Refectory"],
    furniture: ["Silver Hand Wall Seal", "Gilded Chapel Bench", "Lectern of Oaths", "Dawnweave Banner", "Shield Reliquary", "Blessed Candle Stand"],
    locationTitle: "Blessed Homestead Sites",
    coords: ["Beside the old bell tower at Northshire Abbey", "The rear garden of Light's Hope Chapel", "Stone steps near the Cathedral District", "A worn prayer hall at Tyr's Hand"],
    styles: ["White stone, warm gold, and a sense of order should lead every eye toward the oath table. Nothing here needs to shout; the room judges quietly.", "Benches belong in pairs, banners high on the wall, and every candle should look like it was lit for a reason."],
    rumors: ["Passing guards straighten their backs near the door.", "The chairs are said to encourage confession after long dinners.", "The neighbors complain that the windows glow like dawn forgot to leave.", "Even the coasters appear to follow military discipline.", "A child swears the hearth chases bad dreams away.", "Someone bowed at the entrance and only meant to ask directions."],
    affixes: ["Chapel Nook", "Oathbound Corridor", "Cleansing Font", "Wall of Knightly Honors", "Guild Council Table", "Blessed Supper Table", "Dawn Prayer Seat"],
    mythicAffixes: ["Silver Hand Approval", "Light-Chosen Deed", "Echo of the Naaru"],
    npcs: [
      { name: "Uther", comment: "A disciplined hall. Enough benches for a properly solemn meeting." },
      { name: "Tirion", comment: "Good for oaths, and for reminding guests to wipe their boots." },
      { name: "Turalyon", comment: "The holy lighting is stable. It may be expensive in candles." }
    ]
  },
  rogue: {
    className: "Rogue",
    themes: ["Black Market Office", "Old Town Safehouse", "Back-Alley Trophy Room"],
    furniture: ["Lockpick Worktable", "Quiet Ledger Desk", "Knife Display Case", "Dark Curtain Partition", "Contraband Crate Rack", "Coin-Worn Tavern Chair"],
    locationTitle: "Last Reported Sightings",
    coords: ["The sewer mouth below Stormwind's Old Town", "A wooden bridge behind the Ratchet tavern", "A ruined storehouse west of Ravenholdt", "The shadowed back door by Booty Bay docks"],
    styles: ["Leather, dull brass, and low green lamplight keep the room useful without making it honest. Every wall should look ordinary enough to be suspicious.", "The best safehouse feels cramped on purpose: one table for work, one curtain for lies, and one exit nobody admits exists."],
    rumors: ["Nobody agrees which door is the front door.", "A courier left a parcel and refused a receipt.", "They say the locks speak more clearly than the owner.", "Coins are heard inside, but visitors are rarely seen.", "One wall looks too normal, which is why everyone distrusts it.", "A guard forgot what he was inspecting halfway down the alley."],
    affixes: ["Questionable Underpass", "Black Market Side Door", "Trophy Wall from Bad Decisions", "Lockbox Collection", "Hidden Cellar", "Informant Ledger Table", "Shadowstep Window"],
    mythicAffixes: ["Ravenholdt Private Deed", "Legendary Black Market Compartment", "Uncrowned Passage Right"],
    npcs: [
      { name: "Valeera", comment: "Good curtains. Useful for hiding, and for pretending you are not home." },
      { name: "Garona", comment: "Too few exits. A proper safehouse needs three excuses and four ways out." },
      { name: "VanCleef", comment: "The crates are arranged well. Nobody should open them without permission." }
    ]
  },
  shaman: {
    className: "Shaman",
    themes: ["Four-Winds Totem Lodge", "Stormdrum Hearth", "Tide-and-Ember Ritual Room"],
    furniture: ["Elemental Totem Set", "Storm Drum", "Waterstone Basin", "Ember Bowl Stand", "Hide Circle Rug", "Thunder-Carved Stone Post"],
    locationTitle: "Where the Elements Linger",
    coords: ["A wind-cut totem slope in Nagrand", "Beside the old drum circle on Thunder Bluff", "Near a tide basin in Vashj'ir", "A red-earth altar before rain in Durotar"],
    styles: ["Wood, stone, hide, and water should share the room without competing. Place the totems like quiet witnesses, not decorations.", "A good shaman home feels balanced: the fire has a reason, the water has an opinion, and the floor remembers old drums."],
    rumors: ["Weather reports fail around this house.", "The basin occasionally disagrees with guests.", "The neighbors cannot tell thunder from furniture moving anymore.", "Every totem looks as if it knows something.", "The fire bowl and water basin may have argued all night.", "The wind opens the door when the owner is away."],
    affixes: ["Elemental Council Seat", "Storm Meditation Nook", "Ancestor Whisper Wall", "Tide-Cleansing Basin", "Lava-Warm Hearth", "Stormwatch Platform", "Totem Memory Post"],
    mythicAffixes: ["Elemental Lord Co-Signature", "Echo of the Throne of Storms", "Earthen Ring Blessing"],
    npcs: [
      { name: "Thrall", comment: "The balance is good, provided the neighbors accept thunder after midnight." },
      { name: "Rehgar", comment: "The drum is well placed. No one can pretend they missed the meeting." },
      { name: "Nobundo", comment: "The water and fire are far enough apart. That is progress." }
    ]
  },
  deathKnight: {
    className: "Death Knight",
    themes: ["Frozen War Room", "Ebon Coldforge Quarters", "Runebound Crypt Hearth"],
    furniture: ["Ebon Rune Table", "Frostless Brazier", "Banner of the Dead", "Darksteel Weapon Rack", "Blue Rune Floorstone", "Ashen Throne Chair"],
    locationTitle: "Places Even Braziers Cannot Warm",
    coords: ["A cold iron corridor below Acherus", "An abandoned watchpost in Icecrown", "Outside a nameless graveyard in the Plaguelands", "Behind a frost-covered stone door in Dragonblight"],
    styles: ["Dark metal, stone, and blue rune light should make warmth feel like a rumor. The weapon rack belongs where guests see it immediately.", "Keep the room disciplined and cold. A death knight home should not be cozy; it should be memorable."],
    rumors: ["The braziers here have never been warm.", "Metal scraping is heard after midnight.", "The neighbors suspect something is buried below.", "No one volunteers to stay past midnight.", "The milkman says frost appears on schedule.", "The chair has made several living guests reconsider comfort."],
    affixes: ["Frozen Armory", "Memorial Wall of the Dead", "Ebon Judgment Seat", "Runeforge Corner", "Frost Throne Nook", "Soul-Sealed Cabinet", "Scourge Banner Hall"],
    mythicAffixes: ["Ebon Council Collection", "Lich King's Cold Storage Permit", "Upper Acherus Key"],
    npcs: [
      { name: "Darion", comment: "It lacks a little Ebon Blade presence, but the chill will repel salesmen." },
      { name: "Mograine", comment: "Lower the weapon wall. Visitors should understand your position quickly." },
      { name: "Koltira", comment: "Perfect temperature. Living guests may disagree." }
    ]
  },
  warrior: {
    className: "Warrior",
    themes: ["Ironfront Barracks", "Battle Banner Hall", "Champion's Anvil House"],
    furniture: ["War Banner Wall", "Greataxe Rack", "Anvil Repair Bench", "Champion's Round Table", "Heavy Training Dummy", "Red Honor Runner"],
    locationTitle: "Common Encampments",
    coords: ["Beside an old watchtower in Redridge", "A timber palisade camp on the Ashenvale front", "Behind the Stormwind barracks", "Under a faded battle standard in Arathi"],
    styles: ["Iron, leather, and red cloth set the tone. The room should feel ready to hold a meeting or survive one.", "Leave room to move. A warrior hall is not complete until the furniture looks like it could endure an argument."],
    rumors: ["The door hinge sounds like a war horn.", "Every slammed door feels like a siege beginning.", "The training dummy has more experience than several adventurers.", "The table may once have served as a shield.", "Nobody sets a cup beneath the war banner.", "A visitor asked for directions and was assigned warm-ups."],
    affixes: ["Gladiator Ready Room", "Battlecry Echo Hall", "Trophy Wall", "Legendary Weapon Rack", "Ironblood Council Table", "Duel Circle", "War Banner Gallery"],
    mythicAffixes: ["Valarjar Banner Right", "Champion's Trial Seat", "Titan-Certified Training Yard"],
    npcs: [
      { name: "Varian", comment: "The banner is clear. Three steps inside and no one mistakes this place for soft." },
      { name: "Saurfang", comment: "Good training dummy placement. The walls will suffer less." },
      { name: "Muradin", comment: "Fine anvil. The ale storage could use deeper strategy." }
    ]
  },
  hunter: {
    className: "Hunter",
    themes: ["Wild Tracker Lodge", "Beastyard Cabin", "Hawkeye Hunting Camp"],
    furniture: ["Beast Pen Rail", "Leather Bedroll", "Bow and Quiver Wall", "Campfire Cookstand", "Trail Map Table", "Hawk Perch"],
    locationTitle: "Paths Beasts Remember",
    coords: ["A pine lodge at the end of an Ashenvale trail", "A clefthoof watering slope in Nagrand", "A hunter camp below the Highmountain eyries", "Beside an old target near Loch Modan"],
    styles: ["Raw wood, hides, and open air keep the place honest. The pet corner should look more lived-in than the owner's bed.", "Do not make the room too orderly. A true hunting lodge carries tracks, feathers, and one unexplained bowl."],
    rumors: ["The pet area may be larger than the bedroom.", "Someone saw a bear take the head seat at dinner.", "The jerky disappearance remains unsolved.", "The neighbors complain about wolf howls at night.", "The courier checks whether the owl is the doorman.", "There are more footprints than guests."],
    affixes: ["Rare Beast Pen", "Hawk Watch Post", "Trail Cookfire", "Tracking Map", "Great Beast Trophy Wall", "Hidden Forest Entry", "Quiver Cabinet"],
    mythicAffixes: ["Loa-Beast Approval", "Great Migration Route", "Ancient Hunting Ground Contract"],
    npcs: [
      { name: "Rexxar", comment: "The pet space should be larger. Honestly, the whole house could belong to them." },
      { name: "Nesingwary", comment: "Good trophy wall. I recommend another wall for bigger stories." },
      { name: "Sylvanas", comment: "The bow rack is conveniently placed. I will allow that." }
    ]
  },
  mage: {
    className: "Mage",
    themes: ["Arcane Observatory", "Portal Parlor", "Blueglass Tower Study"],
    furniture: ["Arcane Star Table", "Crystal Staff Stand", "Floating Book Stack", "Portal Circle Rug", "Conjured Tea Service", "Amethyst Wall Lamp"],
    locationTitle: "Where Arcane Leaks Through",
    coords: ["A quiet attic in a Dalaran book tower", "Beside a blue crystal cliff in Azshara", "A rear salon in an old Suramar townhouse", "A tower base where Azure Span starlight fails"],
    styles: ["Blue light, violet glass, and impossible books should make the room feel intelligent before it feels comfortable.", "Place the star table where it can dominate the room. Everything else may orbit it politely."],
    rumors: ["Visitors complain the washroom door sometimes teleports.", "The teapot is said to pour itself.", "Someone entered the cellar and was late by three days.", "The bookshelves hold arcane debates after midnight.", "The windows show a sky not local to this city.", "The stairs may choose destinations."],
    affixes: ["Private Portal", "Arcane Star Dome", "Legendary Archive", "Polymorph Experiment Corner", "Conjured Dessert Table", "Crystal Charging Pillar", "Timewarp Clock"],
    mythicAffixes: ["Kirin Tor Star Registry", "Guardian Library Privilege", "Titan-Certified Arcane Circuit"],
    npcs: [
      { name: "Khadgar", comment: "The arcane structure is stable. More stable than some portals I know." },
      { name: "Jaina", comment: "Elegant blue-violet work. Calm as a prepared blizzard." },
      { name: "Medivh", comment: "Good archive. I hope you know which books not to open." }
    ]
  },
  priest: {
    className: "Priest",
    themes: ["Shadow Confession Study", "Dawnlit Prayer Room", "Quiet Mercy Parlor"],
    furniture: ["White Veil Drapery", "Gilded Prayer Chair", "Shadow Candle", "Mercy Vase", "Two-Faced Tome Stand", "Softlight Wall Lamp"],
    locationTitle: "Where Prayers Are Heard in Low Voices",
    coords: ["A side aisle in Stormwind's Cathedral District", "Beside a candlelit petition table in Shattrath", "Before a broken shrine in old Undercity", "A quiet room behind white curtains in Suramar"],
    styles: ["Let gold light and gray violet shadow share the room. The best priestly spaces feel calm until you notice what the mirror reflects.", "Use veils and soft lamps to divide mercy from confession. Neither side should fully trust the other."],
    rumors: ["Visitors lower their voices at the door.", "The mirror sometimes offers life advice.", "The neighbors cannot tell prayer from a meeting.", "The shadowed corner is colder by half a breath.", "The prayer chair understands sighing.", "A courier left feeling forgiven."],
    affixes: ["Confession Nook", "Shadow Whisper Corner", "Mercy Meditation Seat", "Tome Wall", "Soul-Soothing Alcove", "Dawn Prayer Window", "Void Confession Mirror"],
    mythicAffixes: ["Naaru Soft Blessing", "Void Whisper License", "Light-and-Shadow Dual Seal"],
    npcs: [
      { name: "Anduin", comment: "A good place for healing, and perhaps for reconsidering the furniture budget." },
      { name: "Velen", comment: "The light and shadow are balanced. I would clean the mirror." },
      { name: "Alonsus", comment: "Enough prayer chairs for a raid leader under pressure." }
    ]
  },
  druid: {
    className: "Druid",
    themes: ["Emerald Root House", "Moonwell Conservatory", "Wildshape Garden Room"],
    furniture: ["Living Wood Table", "Moonwell Basin", "Vine Lantern", "Wild Hide Rug", "Dreambloom Rack", "Oak Storage Chest"],
    locationTitle: "Where Moonlight Seems to Rest",
    coords: ["The grass slope behind a Moonglade moonwell", "Between old roots in Val'sharah", "Beside a half-awake flowerbed in the Dream", "Under dew-wet steps on Hyjal"],
    styles: ["Green, gold, and living wood should make the house feel grown rather than built.", "Leave the edges soft. A druid room works best when the furniture seems to have wandered into place."],
    rumors: ["The plants may move when nobody watches.", "Guests keep falling asleep on the floor.", "No one explains why moonlight is always present.", "Small mushrooms appear in the rug.", "The tree outside was not there yesterday.", "Vines drag misplaced shoes away."],
    affixes: ["Emerald Dream Balcony", "Moonwell Rest Corner", "Shapeshift Nap Mat", "Ancient Tree Door", "Herbal Conservatory", "Starwatch Platform", "Wild Claw Wall"],
    mythicAffixes: ["Elune's Moonlit Favor", "Permanent Emerald Terrace", "Cenarion Ancient Deed"],
    npcs: [
      { name: "Malfurion", comment: "Nature and stillness are balanced. The vines may claim the kitchen." },
      { name: "Ysera", comment: "Gentle dream scent. Good for sleeping, and for missing appointments." },
      { name: "Hamuul", comment: "The plants are healthy. No reckless fire magic, I see." }
    ]
  },
  monk: {
    className: "Monk",
    themes: ["Quiet Bamboo Teahouse", "Jade Training Courtyard", "Cloudbrew Wayside Room"],
    furniture: ["Bamboo Screen", "Jade Tea Table", "Training Post", "Brewmaster Jar", "Meditation Cushion", "Cloud-Painted Lantern"],
    locationTitle: "Quiet Places for Meditation",
    coords: ["Misty stone steps in Kun-Lai", "Beside a bamboo creek in the Jade Forest", "An old morning courtyard on the Wandering Isle", "A field ridge in the Valley of the Four Winds"],
    styles: ["Bamboo, jade, and warm wood should leave room for silence. The tea table is the center; the training post waits at the edge.", "Do not crowd the room. A monk dwelling should feel like it can breathe before it teaches."],
    rumors: ["The tea scent makes arguments lose their words.", "The training post is stricter than some teachers.", "An empty cup appears near the brew jars.", "The morning bell convinced a neighbor to wake early.", "A courier learned two stances after delivering a letter.", "The cushion makes rent discussions difficult."],
    affixes: ["Meditation Seat", "Brewmaster Private Jar", "Bamboo Practice Yard", "Yu'lon Blessing Corner", "Roll-Friendly Walkway", "Cloud Tea Table", "Morning Bell Gallery"],
    mythicAffixes: ["Yu'lon-Taught Tea Seat", "Peak of Serenity Right", "Legendary Brew Cellar"],
    npcs: [
      { name: "Chen", comment: "The tea table is good. The brew jars are also good. The order may be reversed." },
      { name: "Taran Zhu", comment: "Clear movement lines. Guests may survive the practice area." },
      { name: "Taoshi", comment: "Quiet enough to hear the echo of rent." }
    ]
  },
  demonHunter: {
    className: "Demon Hunter",
    themes: ["Blindwatch Sanctum", "Felrift Training Room", "Warglaive Shadow Hall"],
    furniture: ["Fel Brazier", "Warglaive Wall Rack", "Darkflame Stone Table", "Demonhide Seat", "Green Crystal Lamp", "Broken Chain Wall"],
    locationTitle: "Footholds by the Rift",
    coords: ["Below an outer wall of the Black Temple", "Beside scorched steps on the Broken Shore", "In fel-shadow beneath Felwood trees", "Behind a ruined armory table on Mardum"],
    styles: ["Fel green should cut through the room like a warning. Keep the furniture low, sharp, and ready to be judged.", "This is not a cozy home. It is a place where comfort arrived, saw the warglaives, and left."],
    rumors: ["Passersby feel watched by the walls.", "The fel brazier makes ordinary shadows look guilty.", "The neighbors insist that crack is not decorative.", "No one turns their back on the glaive wall.", "Couriers write very neatly here.", "The sofa may have been judged."],
    affixes: ["Eye Beam Line", "Warglaive Wall", "Fel Holding Cell", "Demon Trophy Cabinet", "Darkflame Meditation Slab", "Illidari Oath Hall", "Shattered Blade Escape Door"],
    mythicAffixes: ["Burning Legion Relic", "Illidari High Alert", "Permanent Fel Rift"],
    npcs: [
      { name: "Illidan", comment: "You are not prepared. The warglaive wall is acceptable." },
      { name: "Kayn", comment: "The brazier is bright enough that no one can call this warm." },
      { name: "Altruis", comment: "Good training room. The sofa appears to have been condemned." }
    ]
  },
  evoker: {
    className: "Evoker",
    themes: ["Bronze Dragonwing Gallery", "Emerald Oath Study", "Five-Flight Parlor"],
    furniture: ["Dragon Scale Screen", "Bronze Hourglass Table", "Emerald Crystal Basin", "Wing-Woven Rug", "Oath Round Table", "Gem Hatchery Rack"],
    locationTitle: "Sites Named in Old Draconic Records",
    coords: ["Beside a weathered scale wall on the Forbidden Reach", "Under a bronze hourglass hall in Valdrakken", "Near a wind-singing stone ring on the Ohn'ahran Plains", "A crystal slope in the Azure Span"],
    styles: ["Bronze and emerald should alternate like memory and life. The room needs air, light, and one object that feels older than the owner.", "Use a round table for oaths, a crystal basin for warmth, and enough scale texture to make guests sit carefully."],
    rumors: ["The hourglass may keep better time than the steward.", "The scale screen seems to blink in candlelight.", "The neighbors report wingbeats on the roof.", "Couriers nod to the round table before leaving parcels.", "The chairs may rank themselves by flight color.", "The gem rack breathes very softly."],
    affixes: ["Dragon Collection Nook", "Bronze Timeglass", "Emerald Healing Nest", "Five-Flight Oath Table", "Scale Display Wall", "Whelp Watching Perch", "Gem Hatchery Corner"],
    mythicAffixes: ["Titan-Certified Dragon Nest", "Bronze Time Deed", "Five-Flight Co-Signature"],
    npcs: [
      { name: "Ebyssian", comment: "Good scale texture. Guests will admire it before sitting carefully." },
      { name: "Chromie", comment: "Adorable hourglass table. I may have complimented it tomorrow already." },
      { name: "Alexstrasza", comment: "A gentle balance of bronze and emerald. A home for serious living." }
    ]
  }
};

const classMeta = {
  warlock: {
    mythicAffixes: ["燃烧军团遗产", "萨格拉斯低语", "扭曲虚空房契"],
    npcs: [
      { name: "古尔丹", comment: "力量还不够，但这个地下室很适合谈交易。" },
      { name: "威尔弗雷德", comment: "法阵位置不错，只要别再召错东西。" },
      { name: "坎雷萨德", comment: "邪能采光合格，访客的心理压力也合格。" }
    ]
  },
  paladin: {
    mythicAffixes: ["白银之手认证", "圣光亲选宅邸", "纳鲁光辉回响"],
    npcs: [
      { name: "乌瑟尔", comment: "秩序感很好，长椅数量也足够开一次严肃会议。" },
      { name: "提里奥", comment: "这里适合宣誓，也适合提醒客人把鞋擦干净。" },
      { name: "图拉扬", comment: "圣光照明很稳定，就是有点费蜡烛。" }
    ]
  },
  rogue: {
    mythicAffixes: ["拉文霍德秘密产权", "黑市传说暗格", "无冕者专属通道"],
    npcs: [
      { name: "瓦莉拉", comment: "窗帘很好，适合藏身，也适合假装自己不在家。" },
      { name: "迦罗娜", comment: "出口太少。真正的安全屋至少要有三个借口和四条路。" },
      { name: "范克里夫", comment: "木箱摆得不错，一看就知道里面不该随便打开。" }
    ]
  },
  shaman: {
    mythicAffixes: ["元素领主会签", "风暴王座回音", "大地之环祝福"],
    npcs: [
      { name: "萨尔", comment: "元素平衡不错，如果邻居不介意半夜打雷就更好了。" },
      { name: "雷加尔", comment: "鼓的位置很好，开会时没人能假装听不见。" },
      { name: "努波顿", comment: "水火距离刚好，终于不像上次那样像事故现场。" }
    ]
  },
  deathKnight: {
    mythicAffixes: ["黑锋议会收藏", "巫妖王冷藏许可", "阿彻鲁斯最高层钥匙"],
    npcs: [
      { name: "达里安", comment: "缺少一点黑锋气息，但寒气已经足够劝退推销员。" },
      { name: "莫格莱尼", comment: "武器墙可以再低一点，方便访客立刻理解你的态度。" },
      { name: "库尔迪拉", comment: "室温完美，活人可能会有意见。" }
    ]
  },
  warrior: {
    mythicAffixes: ["瓦拉加尔战旗授权", "冠军试炼永久席位", "泰坦认证训练场"],
    npcs: [
      { name: "瓦里安", comment: "战旗够醒目，进门三秒就知道这里不适合软弱。" },
      { name: "萨鲁法尔", comment: "训练假人摆得很好，它会替墙壁承受很多。" },
      { name: "穆拉丁", comment: "铁砧不错，就是酒桶区域还可以更有战略深度。" }
    ]
  },
  hunter: {
    mythicAffixes: ["洛阿兽王认可", "巨兽迁徙路线", "远古猎场契约"],
    npcs: [
      { name: "雷克萨", comment: "宠物区域应该再大一点。其实整栋房都可以给宠物。" },
      { name: "奈辛瓦里", comment: "战利品墙不错，但我建议再留一面墙给更大的。" },
      { name: "希尔瓦娜斯", comment: "弓架位置很顺手，这一点我认可。" }
    ]
  },
  mage: {
    mythicAffixes: ["肯瑞托星图备案", "守护者图书馆借阅权", "泰坦认证奥术回路"],
    npcs: [
      { name: "卡德加", comment: "奥术结构很稳定，至少比我的某些传送门稳定。" },
      { name: "吉安娜", comment: "蓝紫配色很优雅，冷静得像一场准备好的暴风雪。" },
      { name: "麦迪文", comment: "藏书区不错。希望你知道哪些书不该打开。" }
    ]
  },
  priest: {
    mythicAffixes: ["纳鲁轻声祝福", "虚空低语许可", "圣光与暗影双认证"],
    npcs: [
      { name: "安度因", comment: "这里很适合疗愈，也很适合认真反省购物预算。" },
      { name: "维伦", comment: "光影平衡很好，我只建议把暗影镜子擦一擦。" },
      { name: "阿隆索斯", comment: "祈祷椅数量足够，压力大的团长会喜欢这里。" }
    ]
  },
  druid: {
    mythicAffixes: ["月神艾露恩赐福", "翡翠梦境永久露台", "塞纳里奥古树产权"],
    npcs: [
      { name: "玛法里奥", comment: "自然与宁静的平衡还不错，只是藤蔓可能会接管厨房。" },
      { name: "伊瑟拉", comment: "梦境气息很柔和，适合睡觉，也适合错过集合。" },
      { name: "哈缪尔", comment: "植物状态很好，看得出屋主没有乱用火焰法术。" }
    ]
  },
  monk: {
    mythicAffixes: ["玉珑亲授茶席", "晴日峰静修权", "酒仙传说窖藏"],
    npcs: [
      { name: "陈", comment: "茶桌很好，酒坛也很好。顺序可以反过来。" },
      { name: "祝踏岚", comment: "动线清楚，来客应该不会在练功区被误伤太多次。" },
      { name: "陶矢", comment: "这里很安静，安静到能听见房贷的回声。" }
    ]
  },
  demonHunter: {
    mythicAffixes: ["燃烧军团遗产", "伊利达雷最高警戒", "邪能裂痕永久开放"],
    npcs: [
      { name: "伊利丹", comment: "你们根本没准备好。但这面战刃墙准备得还行。" },
      { name: "凯恩", comment: "邪能火盆很亮，亮到没有人敢说这里温馨。" },
      { name: "奥图里斯", comment: "训练场不错，只是沙发看起来像刚被审判过。" }
    ]
  },
  evoker: {
    mythicAffixes: ["泰坦认证龙巢", "青铜龙时间产权", "五色龙军团会签"],
    npcs: [
      { name: "艾比西安", comment: "龙鳞质感很好，访客会先赞叹，再小心翼翼坐下。" },
      { name: "克罗米", comment: "这个沙漏桌很可爱。我可能已经在明天夸过一次了。" },
      { name: "阿莱克丝塔萨", comment: "翡翠与青铜的比例很温和，适合认真生活。" }
    ]
  }
};

const rarityPool = [
  { name: "普通", weight: 34 },
  { name: "稀有", weight: 34 },
  { name: "史诗", weight: 22 },
  { name: "传说", weight: 9 }
];
const I18N = {
  zh: {
    htmlLang: "zh-CN",
    brand: "魔坊世界",
    intro: "一个会生成职业家宅、坊间传闻与NPC吐槽的艾泽拉斯生活幻想工具。",
    classLabel: "职业",
    generate: "生成家宅方案",
    save: "保存方案截图",
    furniture: "核心家具",
    style: "装修风格说明",
    affixes: "稀有词条",
    npc: "NPC 点评",
    rumors: "坊间传闻",
    classSuffix: "方案",
    posterClassSuffix: "职业家宅方案",
    posterBrand: "魔坊世界",
    rarity: { "普通": "普通", "稀有": "稀有", "史诗": "史诗", "传说": "传说", "神话": "神话" },
    classes: {
      warlock: "术士", paladin: "圣骑士", rogue: "盗贼", shaman: "萨满", deathKnight: "死亡骑士", warrior: "战士", hunter: "猎人", mage: "法师", priest: "牧师", druid: "德鲁伊", monk: "武僧", demonHunter: "恶魔猎手", evoker: "唤魔师"
    },
    notes: {}
  },
  en: {
    htmlLang: "en",
    brand: "World of Homecraft",
    intro: "A folk Azeroth life archive for class-themed dwellings, tavern rumors, and NPC comments.",
    classLabel: "Class",
    generate: "Roll a Homestead",
    save: "Save Poster",
    furniture: "Core Furnishings",
    style: "Style Notes",
    affixes: "Rare Affixes",
    npc: "NPC Comments",
    rumors: "Tavern Rumors",
    classSuffix: "Record",
    posterClassSuffix: "Class Homestead Record",
    posterBrand: "Folk Azeroth Archive",
    rarity: { "普通": "Common", "稀有": "Rare", "史诗": "Epic", "传说": "Legendary", "神话": "Mythic" },
    classes: {
      warlock: "Warlock", paladin: "Paladin", rogue: "Rogue", shaman: "Shaman", deathKnight: "Death Knight", warrior: "Warrior", hunter: "Hunter", mage: "Mage", priest: "Priest", druid: "Druid", monk: "Monk", demonHunter: "Demon Hunter", evoker: "Evoker"
    },
    locationTitles: {
      "附近居民不愿靠近的区域": "Places Neighbors Avoid",
      "被祝福过的落址": "Blessed Homestead Sites",
      "最后有人见过它的地方": "Last Reported Sightings",
      "元素愿意停留的地方": "Where the Elements Linger",
      "火盆也暖不起来的地方": "Places Even Braziers Cannot Warm",
      "常见驻扎地": "Common Encampments",
      "兽群常绕行的地方": "Paths Beasts Remember",
      "奥术偶尔走漏的地方": "Where Arcane Leaks Through",
      "低声祈祷传出的地方": "Where Prayers Are Heard in Low Voices",
      "月光自己会停下的地方": "Where Moonlight Seems to Rest",
      "适合静修的地点": "Quiet Places for Meditation",
      "裂痕边缘的落脚处": "Footholds by the Rift",
      "龙族旧档案提到的地方": "Sites Named in Old Draconic Records"
    },
    notes: {
      "多半是酒馆醉话，别真去找。": "Probably tavern talk. Do not actually go looking.",
      "位置记录未必可靠。": "The location record may not be reliable.",
      "有人说它在那，也有人喝多了。": "Some say it was there. Some were drinking.",
      "是戏说，也是胡说。": "Half tale, half nonsense.",
      "地图师本人拒绝负责。": "The mapmaker refuses responsibility.",
      "若真找到了，请先确认你是不是喝多了。": "If you find it, first check whether you are drunk."
    }
  }
};
const classSelect = document.querySelector("#classSelect");
const generateBtn = document.querySelector("#generateBtn");
const saveBtn = document.querySelector("#saveBtn");
const langToggle = document.querySelector("#langToggle");
const brandName = document.querySelector("#brandName");
const introText = document.querySelector("#introText");
const classLabel = document.querySelector("#classLabel");
const className = document.querySelector("#className");
const serialNumber = document.querySelector("#serialNumber");
const themeName = document.querySelector("#themeName");
const locationTitle = document.querySelector("#locationTitle");
const furnitureTitle = document.querySelector("#furnitureTitle");
const furnitureList = document.querySelector("#furnitureList");
const coordsList = document.querySelector("#coordsList");
const affixList = document.querySelector("#affixList");
const styleTitle = document.querySelector("#styleTitle");
const styleDescription = document.querySelector("#styleDescription");
const affixTitle = document.querySelector("#affixTitle");
const rumorList = document.querySelector("#rumorList");
const npcTitle = document.querySelector("#npcTitle");
const npcName = document.querySelector("#npcName");
const npcComment = document.querySelector("#npcComment");
const rumorTitle = document.querySelector("#rumorTitle");
const cornerNote = document.querySelector("#cornerNote");

let currentPlan = null;
let currentLang = "zh";
const cornerNotes = [
  "多半是酒馆醉话，别真去找。",
  "位置记录未必可靠。",
  "有人说它在那，也有人喝多了。",
  "是戏说，也是胡说。",
  "地图师本人拒绝负责。",
  "若真找到了，请先确认你是不是喝多了。"
];

function pickItems(items, count) {
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function pickIndices(items, count) {
  return items.map((_, index) => index).sort(() => Math.random() - 0.5).slice(0, count);
}

function pickWeighted(items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) {
      return item.name;
    }
  }
  return items[0].name;
}

function generateSerial() {
  const digits = String(Math.floor(Math.random() * 10000)).padStart(4, "0");
  return `AZ-2026-0507-${digits}`;
}

function renderList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function renderAffixes(affixes) {
  affixList.innerHTML = "";
  affixes.forEach((affix) => {
    const badge = document.createElement("span");
    badge.className = "affix-badge";
    badge.dataset.rarity = affix.rarity;
    badge.innerHTML = `<span class="affix-rarity">${tRarity(affix.rarity)}</span>${getAffixName(currentPlan.key, affix)}`;
    affixList.appendChild(badge);
  });
}

function t(key) {
  return I18N[currentLang][key];
}

function tClass(key) {
  return I18N[currentLang].classes[key] || plans[key].className;
}

function contentFor(key) {
  return currentLang === "en" ? EN_CONTENT[key] : plans[key];
}

function metaFor(key) {
  return currentLang === "en" ? EN_CONTENT[key] : classMeta[key];
}

function tRarity(rarity) {
  return I18N[currentLang].rarity[rarity] || rarity;
}

function tLocationTitle(title) {
  return currentLang === "en" ? title : title;
}

function tNote(note) {
  return currentLang === "en" ? I18N.en.notes[note] || note : note;
}

function updateStaticText() {
  document.documentElement.lang = t("htmlLang");
  brandName.textContent = t("brand");
  introText.textContent = t("intro");
  classLabel.textContent = t("classLabel");
  generateBtn.textContent = t("generate");
  saveBtn.textContent = t("save");
  furnitureTitle.textContent = t("furniture");
  styleTitle.textContent = t("style");
  affixTitle.textContent = t("affixes");
  npcTitle.textContent = t("npc");
  rumorTitle.textContent = t("rumors");
  langToggle.textContent = currentLang === "zh" ? "中文 / EN" : "EN / 中文";
  Array.from(classSelect.options).forEach((option) => {
    option.textContent = tClass(option.value);
  });
}

function renderCurrentPlan() {
  if (!currentPlan) {
    return;
  }

  const data = contentFor(currentPlan.key);
  const meta = metaFor(currentPlan.key);
  const npc = meta.npcs[currentPlan.npcIndex];

  document.body.dataset.theme = currentPlan.key;
  className.textContent = `${tClass(currentPlan.key)} ${t("classSuffix")}`;
  serialNumber.textContent = currentPlan.serial;
  themeName.textContent = data.themes[currentPlan.themeIndex];
  locationTitle.textContent = data.locationTitle;
  renderList(furnitureList, currentPlan.furnitureIndices.map((index) => data.furniture[index]));
  renderList(coordsList, currentPlan.coordIndices.map((index) => data.coords[index]));
  renderAffixes(currentPlan.affixes);
  styleDescription.textContent = getStyleText(data, currentPlan.styleIndex);
  renderList(rumorList, currentPlan.rumorIndices.map((index) => data.rumors[index % data.rumors.length]));
  npcName.textContent = `${npc.name}:`;
  npcComment.textContent = `“${npc.comment}”`;
  cornerNote.textContent = tNote(currentPlan.cornerNote);
}

function getStyleText(data, index) {
  return data.styles ? data.styles[index % data.styles.length] : data.style;
}

function getAffixName(key, affix) {
  const data = contentFor(key);
  const meta = metaFor(key);
  if (affix.mythic) {
    return meta.mythicAffixes[affix.index];
  }
  return data.affixes[affix.index];
}

function generateAffixes(plan) {
  const count = Math.floor(Math.random() * 3) + 2;
  const meta = classMeta[classSelect.value];
  const selected = pickIndices(plan.affixes, count).map((index) => ({
    index,
    mythic: false,
    rarity: pickWeighted(rarityPool)
  }));

  if (Math.random() < 0.08) {
    selected[selected.length - 1] = {
      index: pickIndices(meta.mythicAffixes, 1)[0],
      mythic: true,
      rarity: "神话"
    };
  }

  return selected;
}

function generatePlan() {
  const key = classSelect.value;
  const plan = plans[key];
  const meta = classMeta[key];
  const npc = pickItems(meta.npcs, 1)[0];
  const affixes = generateAffixes(plan);

  currentPlan = {
    key,
    serial: generateSerial(),
    themeIndex: pickIndices(plan.themes, 1)[0],
    furnitureIndices: pickIndices(plan.furniture, 3),
    coordIndices: pickIndices(plan.coords, 3),
    affixes,
    styleIndex: Math.floor(Math.random() * 2),
    rumorIndices: pickIndices(plan.rumors, Math.floor(Math.random() * 2) + 2),
    npcIndex: meta.npcs.indexOf(npc),
    cornerNote: pickItems(cornerNotes, 1)[0]
  };

  renderCurrentPlan();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 10) {
  const chars = Array.from(text);
  let line = "";
  let lines = 0;

  for (const char of chars) {
    const nextLine = line + char;
    if (ctx.measureText(nextLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      lines += 1;
      line = char;
      if (lines >= maxLines - 1) {
        break;
      }
    } else {
      line = nextLine;
    }
  }

  if (line && lines < maxLines) {
    ctx.fillText(line, x, y);
    y += lineHeight;
  }

  return y;
}

function drawSection(ctx, title, lines, x, y, width) {
  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 24px sans-serif";
  ctx.fillText(title, x, y);
  y += 38;

  ctx.fillStyle = "#f4ead8";
  ctx.font = "24px sans-serif";
  lines.forEach((line) => {
    y = drawWrappedText(ctx, `• ${line}`, x, y, width, 32, 2) + 8;
  });

  return y + 18;
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawPosterBadge(ctx, text, rarity, x, y) {
  const colors = {
    "普通": "#b8b8b8",
    "稀有": "#58a8ff",
    "史诗": "#be76ff",
    "传说": "#ffad3f",
    "神话": "#ffe05c"
  };
  const color = colors[rarity] || colors["普通"];
  ctx.font = "700 22px sans-serif";
  const width = Math.min(ctx.measureText(text).width + 46, 420);
  drawRoundRect(ctx, x, y - 28, width, 42, 20);
  ctx.fillStyle = "rgba(0, 0, 0, 0.42)";
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fillText(text, x + 22, y);
  return width;
}

function savePlanImage() {
  if (!currentPlan) {
    generatePlan();
  }

  const data = contentFor(currentPlan.key);
  const meta = metaFor(currentPlan.key);
  const npc = meta.npcs[currentPlan.npcIndex];
  const furniture = currentPlan.furnitureIndices.map((index) => data.furniture[index]);
  const locations = currentPlan.coordIndices.map((index) => data.coords[index]);
  const rumors = currentPlan.rumorIndices.map((index) => data.rumors[index % data.rumors.length]);
  const styleText = getStyleText(data, currentPlan.styleIndex);

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1620;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const padding = 72;

  const styles = getComputedStyle(document.body);
  const bg = styles.getPropertyValue("--bg").trim() || "#100f13";
  const accent = styles.getPropertyValue("--accent").trim() || "#b369f2";
  const accentTwo = styles.getPropertyValue("--accent-2").trim() || "#4ccf72";

  const gradient = ctx.createLinearGradient(0, 0, width, canvas.height);
  gradient.addColorStop(0, bg);
  gradient.addColorStop(0.46, accent);
  gradient.addColorStop(1, accentTwo);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
  for (let x = 0; x < width; x += 54) {
    ctx.fillRect(x, 0, 2, canvas.height);
  }

  ctx.fillStyle = "rgba(12, 10, 12, 0.84)";
  drawRoundRect(ctx, 44, 44, width - 88, canvas.height - 88, 34);
  ctx.fill();

  ctx.strokeStyle = "rgba(215, 173, 83, 0.55)";
  ctx.lineWidth = 5;
  ctx.stroke();
  drawRoundRect(ctx, 70, 70, width - 140, canvas.height - 140, 22);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
  ctx.lineWidth = 2;
  ctx.stroke();

  let y = 128;
  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 28px sans-serif";
  ctx.fillText("WORLD OF HOMECRAFT", padding, y);
  ctx.fillStyle = "rgba(244, 234, 216, 0.72)";
  ctx.font = "700 24px sans-serif";
  ctx.fillText(currentPlan.serial, width - padding - 245, y);

  y += 36;
  ctx.fillStyle = "#f4ead8";
  ctx.font = "800 34px sans-serif";
  ctx.fillText(t("posterBrand"), padding, y);

  y += 12;
  y += 66;
  ctx.fillStyle = accentTwo;
  ctx.font = "800 30px sans-serif";
  ctx.fillText(`${tClass(currentPlan.key)} · ${t("posterClassSuffix")}`, padding, y);

  y += 76;
  ctx.fillStyle = "#f4ead8";
  ctx.font = "900 68px sans-serif";
  y = drawWrappedText(ctx, data.themes[currentPlan.themeIndex], padding, y, width - padding * 2 - 70, 78, 3) + 26;

  ctx.fillStyle = "rgba(215, 173, 83, 0.9)";
  ctx.fillRect(padding, y, width - padding * 2, 3);
  y += 56;

  y = drawSection(ctx, t("furniture"), furniture, padding, y, width - padding * 2);
  y = drawSection(ctx, data.locationTitle, locations, padding, y, width - padding * 2);

  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 24px sans-serif";
  ctx.fillText(t("affixes"), padding, y);
  y += 42;
  let badgeX = padding;
  currentPlan.affixes.forEach((affix) => {
    const badgeWidth = drawPosterBadge(ctx, `${tRarity(affix.rarity)} · ${getAffixName(currentPlan.key, affix)}`, affix.rarity, badgeX, y);
    badgeX += badgeWidth + 16;
    if (badgeX > width - padding - 260) {
      badgeX = padding;
      y += 56;
    }
  });
  y += 72;

  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 24px sans-serif";
  ctx.fillText(t("npc"), padding, y);
  y += 42;
  ctx.fillStyle = accentTwo;
  ctx.font = "800 28px sans-serif";
  ctx.fillText(`${npc.name}:`, padding, y);
  ctx.fillStyle = "rgba(244, 234, 216, 0.86)";
  ctx.font = "26px sans-serif";
  y = drawWrappedText(ctx, `“${npc.comment}”`, padding + 132, y, width - padding * 2 - 132, 36, 3) + 20;

  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 24px sans-serif";
  ctx.fillText(t("rumors"), padding, y);
  y += 42;
  ctx.fillStyle = "#d7c6a5";
  ctx.font = "26px sans-serif";
  rumors.forEach((rumor) => {
    y = drawWrappedText(ctx, `✦ ${rumor}`, padding, y, width - padding * 2, 38, 2) + 8;
  });
  y += 10;

  ctx.fillStyle = "rgba(244, 234, 216, 0.82)";
  ctx.font = "22px sans-serif";
  drawWrappedText(ctx, styleText, padding, y + 34, width - padding * 2, 34, 5);

  ctx.fillStyle = "rgba(215, 198, 165, 0.48)";
  ctx.font = "20px sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(tNote(currentPlan.cornerNote), width - padding, canvas.height - 92);
  ctx.textAlign = "left";

  const link = document.createElement("a");
  link.download = `wow-home-plan-${tClass(currentPlan.key)}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

generateBtn.addEventListener("click", generatePlan);
saveBtn.addEventListener("click", savePlanImage);
classSelect.addEventListener("change", generatePlan);
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  updateStaticText();
  renderCurrentPlan();
});

updateStaticText();
generatePlan();
