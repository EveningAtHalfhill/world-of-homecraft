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

const LOCATION_ROOTS = [
  "hold", "keep", "quarters", "cellar", "forge", "crypt", "watch", "den", "archives", "rookery", "hall", "barracks", "manor", "sanctum", "vault", "rest", "crossing", "hollow", "basement", "chamber"
];

const MOOD_ROOTS = [
  "ebon", "ashen", "grim", "fel", "dusk", "ember", "frost", "black", "gilded", "iron", "storm", "raven", "hollow", "scarlet", "golden", "moonlit", "greenfire"
];

const ATMOSPHERE_ROOTS = [
  "whisper", "ember", "thorn", "mist", "veil", "shadow", "dust", "cinder", "ash", "rune", "candle", "iron", "stone", "moss", "smoke"
];

const EN_CONTENT = {
  warlock: {
    className: "Warlock",
    themes: ["Felwhisper Cellar", "Ashcircle Basement", "Blackwick Den"],
    furniture: ["Greenfire Candelabrum", "Ashcircle Rug", "Demonhide Lectern", "Blackwick Lantern", "Soulglass Cabinet", "Rite-Stained Worktable"],
    locationTitle: "Places Neighbors Avoid",
    coords: ["Swamp of Sorrows rite-house", "Deadwind lower crypt", "Silverpine burntstead", "Duskwood lampless back door"],
    styles: ["Keep the walls close and the light wrong.", "Nothing here should smell newly built."],
    rumors: ["People stopped asking about the basement.", "The candles burn too clean.", "Someone keeps paying for a second room.", "The cellar door has no handle inside.", "No priest will bless the threshold.", "The courier leaves parcels in the road."],
    affixes: ["Greenfire Hearth", "Soulglass Vault", "Ashcircle Floor", "Contract Niche", "Imp-Locked Cabinet", "Blackwick Desk", "Rite Chain"],
    mythicAffixes: ["Legacy of the Burning Legion", "Whisper of Sargeras", "Deed from the Twisting Nether"],
    npcs: [
      { name: "Gul'dan", comment: "The cellar wants more." },
      { name: "Wilfred", comment: "Do not stand in the circle." },
      { name: "Kanrethad", comment: "The candles know their work." }
    ]
  },
  paladin: {
    className: "Paladin",
    themes: ["Gilded Oathhall", "Lightward Manor", "Silverbell Rest"],
    furniture: ["Gilded Reliquary", "Oathbench", "Sunlit Lectern", "Whiteglass Banner", "Shield Shrine", "Dawn Candle Stand"],
    locationTitle: "Blessed Homestead Sites",
    coords: ["Northshire bell yard", "Light's Hope rear garden", "Cathedral stone steps", "Tyr's Hand prayer hall"],
    styles: ["Let the far wall carry the oath.", "Every candle should look assigned to duty."],
    rumors: ["Guards stand straighter near the door.", "The bell rings when no one pulls it.", "Dust will not settle on the altar.", "A squire slept there and woke honest.", "The windows glow before dawn.", "No one curses twice inside."],
    affixes: ["Oath Corridor", "Cleansing Font", "Knightwall", "Dawn Seat", "Reliquary Niche", "Whiteglass Hearth", "Vigil Table"],
    mythicAffixes: ["Silver Hand Approval", "Light-Chosen Deed", "Echo of the Naaru"],
    npcs: [
      { name: "Uther", comment: "Keep the benches straight." },
      { name: "Tirion", comment: "A good hall for hard vows." },
      { name: "Turalyon", comment: "The light holds." }
    ]
  },
  rogue: {
    className: "Rogue",
    themes: ["Ravenlock Den", "Blackledger Room", "Old Town Knifehold"],
    furniture: ["Lockpick Bench", "Blackledger Desk", "Knife Case", "Smokecloth Screen", "Contraband Rack", "Coinworn Chair"],
    locationTitle: "Last Reported Sightings",
    coords: ["Old Town sewer mouth", "Ratchet back bridge", "Ravenholdt west storehouse", "Booty Bay shadow door"],
    styles: ["Keep the brass dull and the exits unclear.", "A good safehouse looks smaller than it is."],
    rumors: ["No one agrees where the front door is.", "The lock knows more than the landlord.", "A guard forgot why he came.", "Coins move after midnight.", "Someone rents the wall behind the wall.", "The back room has a back room."],
    affixes: ["Blackledger Table", "False Wall", "Poison Shelf", "Lockbox Stack", "Knife Rail", "Ravenholdt Seal", "Shadow Door"],
    mythicAffixes: ["Ravenholdt Private Deed", "Legendary Black Market Compartment", "Uncrowned Passage Right"],
    npcs: [
      { name: "Valeera", comment: "Lower the lamp." },
      { name: "Garona", comment: "Add another exit." },
      { name: "VanCleef", comment: "Do not label the crates." }
    ]
  },
  shaman: {
    className: "Shaman",
    themes: ["Stormroot Lodge", "Totemwatch Rest", "Ashrain Hall"],
    furniture: ["Storm Totems", "Thunder Drum", "Waterstone Bowl", "Ember Stand", "Hide Ring Rug", "Carved Sky Post"],
    locationTitle: "Where the Elements Linger",
    coords: ["Nagrand wind slope", "Thunder Bluff drum ring", "Vashj'ir tide basin", "Durotar red-earth altar"],
    styles: ["Let stone answer wood.", "The fire must not own the room."],
    rumors: ["Rain starts at the threshold.", "The basin speaks first.", "The drum sounded with no hand on it.", "The wind opens the door.", "The floor remembers old feet.", "A totem turned to face the guest."],
    affixes: ["Storm Seat", "Ancestor Wall", "Tide Basin", "Lava Hearth", "Windpost", "Totem Ring", "Ashrain Shelf"],
    mythicAffixes: ["Elemental Lord Co-Signature", "Echo of the Throne of Storms", "Earthen Ring Blessing"],
    npcs: [
      { name: "Thrall", comment: "The stones are listening." },
      { name: "Rehgar", comment: "Leave the drum where it is." },
      { name: "Nobundo", comment: "The water is calm enough." }
    ]
  },
  deathKnight: {
    className: "Death Knight",
    themes: ["Ebon Coldforge Quarters", "Frostrune Crypt", "Blackwatch War Room"],
    furniture: ["Ebon Rune Table", "Cold Brazier", "Deadbanner", "Darksteel Rack", "Blue Rune Stone", "Ash Throne"],
    locationTitle: "Places Even Braziers Cannot Warm",
    coords: ["Acherus cold-iron corridor", "Icecrown dead watch", "Plaguelands nameless yard", "Dragonblight frost door"],
    styles: ["Keep the room disciplined and cold.", "Nothing here should look forgiven."],
    rumors: ["The brazier has not warmed in years.", "Metal drags under the floor.", "Nobody stays after midnight.", "The chair was not there yesterday.", "Frost gathers on the inside.", "A second set of boots waits by the door."],
    affixes: ["Cold Armory", "Deadwall", "Ebon Seat", "Runeforge Nook", "Frost Throne", "Soul Cabinet", "Scourge Banner"],
    mythicAffixes: ["Ebon Council Collection", "Lich King's Cold Storage Permit", "Upper Acherus Key"],
    npcs: [
      { name: "Darion", comment: "Colder." },
      { name: "Mograine", comment: "Lower the weapon wall." },
      { name: "Koltira", comment: "Living guests will leave." }
    ]
  },
  warrior: {
    className: "Warrior",
    themes: ["Ironfront Barracks", "Redbanner Hall", "Anvilkeep Quarters"],
    furniture: ["War Banner", "Greataxe Rack", "Field Anvil", "Round War Table", "Oak Training Man", "Red March Rug"],
    locationTitle: "Common Encampments",
    coords: ["Redridge old watch", "Ashenvale palisade camp", "Stormwind barracks yard", "Arathi faded standard"],
    styles: ["The banners should dominate the far wall.", "Leave enough floor for a fight."],
    rumors: ["The hinge sounds like a horn.", "The table has shield marks.", "No cup stays under the banner.", "The dummy has rank.", "A guest asked directions and got drills.", "The anvil rings before dawn."],
    affixes: ["Gladiator Room", "Battlecry Hall", "Trophy Wall", "Ironblood Table", "Duel Ring", "Banner Gallery", "Field Rack"],
    mythicAffixes: ["Valarjar Banner Right", "Champion's Trial Seat", "Titan-Certified Training Yard"],
    npcs: [
      { name: "Varian", comment: "Raise the banner." },
      { name: "Saurfang", comment: "The dummy belongs there." },
      { name: "Muradin", comment: "More ale by the anvil." }
    ]
  },
  hunter: {
    className: "Hunter",
    themes: ["Wildtrack Lodge", "Beastwatch Den", "Hawthorn Rookery"],
    furniture: ["Beast Rail", "Hide Bedroll", "Bow Wall", "Campfire Stand", "Trail Table", "Hawk Perch"],
    locationTitle: "Paths Beasts Remember",
    coords: ["Ashenvale pine trail", "Nagrand watering slope", "Highmountain eyrie camp", "Loch Modan old target"],
    styles: ["Let the tracks stay visible.", "The beast corner should look claimed."],
    rumors: ["The bear sits first.", "Jerky vanishes weekly.", "The owl judges couriers.", "There are more tracks than guests.", "The wolf knows the latch.", "Someone feeds the bow rack."],
    affixes: ["Beast Pen", "Hawk Watch", "Trailfire", "Tracking Map", "Trophy Wall", "Forest Door", "Quiver Chest"],
    mythicAffixes: ["Loa-Beast Approval", "Great Migration Route", "Ancient Hunting Ground Contract"],
    npcs: [
      { name: "Rexxar", comment: "Give the beasts more room." },
      { name: "Nesingwary", comment: "Another wall for trophies." },
      { name: "Sylvanas", comment: "The bow rack will do." }
    ]
  },
  mage: {
    className: "Mage",
    themes: ["Ashenrook Archives", "Blueglass Observatory", "Runestar Chamber"],
    furniture: ["Star Table", "Crystal Staff Stand", "Floating Folios", "Portal Rug", "Conjured Tea Set", "Amethyst Lamp"],
    locationTitle: "Where Arcane Leaks Through",
    coords: ["Dalaran west attic", "Azshara blueglass cliff", "Suramar rear salon", "Azure Span starless tower"],
    styles: ["The star table rules the room.", "Books should appear slightly offended."],
    rumors: ["The washroom door changed cities.", "The teapot pours without witness.", "The cellar lost three days.", "Books argue after midnight.", "The window shows the wrong sky.", "The stairs pick favorites."],
    affixes: ["Private Portal", "Star Dome", "Old Archive", "Sheepwork Corner", "Conjured Sweets", "Crystal Pillar", "Timeworn Clock"],
    mythicAffixes: ["Kirin Tor Star Registry", "Guardian Library Privilege", "Titan-Certified Arcane Circuit"],
    npcs: [
      { name: "Khadgar", comment: "The portal has manners." },
      { name: "Jaina", comment: "Cold light. Good control." },
      { name: "Medivh", comment: "Lock the third shelf." }
    ]
  },
  priest: {
    className: "Priest",
    themes: ["Greyveil Confessional", "Dawnrest Study", "Hushed Mercy Hall"],
    furniture: ["White Veil", "Gilded Prayer Chair", "Shadow Candle", "Mercy Urn", "Twin Tome Stand", "Softlight Lamp"],
    locationTitle: "Where Prayers Are Heard in Low Voices",
    coords: ["Stormwind side aisle", "Shattrath petition table", "Old Undercity broken shrine", "Suramar white-curtain room"],
    styles: ["Mercy should have a shadow.", "The mirror must not face the door."],
    rumors: ["Voices drop at the threshold.", "The mirror answers sighs.", "The corner stays colder.", "A courier left forgiven.", "The chair remembers names.", "The candle bends away from lies."],
    affixes: ["Confession Nook", "Whisper Corner", "Mercy Seat", "Tome Wall", "Dawn Window", "Void Mirror", "Greyveil Shelf"],
    mythicAffixes: ["Naaru Soft Blessing", "Void Whisper License", "Light-and-Shadow Dual Seal"],
    npcs: [
      { name: "Anduin", comment: "Let the room breathe." },
      { name: "Velen", comment: "Turn the mirror." },
      { name: "Alonsus", comment: "Keep one chair empty." }
    ]
  },
  druid: {
    className: "Druid",
    themes: ["Moonmoss Hollow", "Emeraldroot Rest", "Stagveil House"],
    furniture: ["Livingwood Table", "Moonwell Bowl", "Vine Lamp", "Wildhide Rug", "Dreambloom Rack", "Oak Chest"],
    locationTitle: "Where Moonlight Seems to Rest",
    coords: ["Moonglade well-slope", "Val'sharah old roots", "Dream halfwake garden", "Hyjal dew steps"],
    styles: ["Nothing here should feel cut down.", "Let the moss decide the edges."],
    rumors: ["The tree moved closer.", "Guests wake on the floor.", "Moonlight lingers indoors.", "Mushrooms claim the rug.", "Vines hide misplaced boots.", "The basin hums in rain."],
    affixes: ["Dream Balcony", "Moonwell Nook", "Wildshape Mat", "Ancient Door", "Herbroom", "Starwatch Step", "Clawmarked Wall"],
    mythicAffixes: ["Elune's Moonlit Favor", "Permanent Emerald Terrace", "Cenarion Ancient Deed"],
    npcs: [
      { name: "Malfurion", comment: "Let the vines choose." },
      { name: "Ysera", comment: "This room dreams lightly." },
      { name: "Hamuul", comment: "No axe marks. Good." }
    ]
  },
  monk: {
    className: "Monk",
    themes: ["Bamboo Rest", "Jadebrew Court", "Cloudstep Teahouse"],
    furniture: ["Bamboo Screen", "Jade Tea Table", "Training Post", "Brew Jar", "Meditation Mat", "Cloud Lantern"],
    locationTitle: "Quiet Places for Meditation",
    coords: ["Kun-Lai mist steps", "Jade Forest bamboo creek", "Wandering Isle morning court", "Four Winds field ridge"],
    styles: ["Leave silence in the center.", "The training post should wait, not threaten."],
    rumors: ["Tea ended the argument.", "The post corrects posture.", "An empty cup returns.", "The bell woke the lane.", "A courier learned a stance.", "Rent talk dies on the cushion."],
    affixes: ["Meditation Seat", "Brew Jar", "Bamboo Yard", "Yu'lon Corner", "Rollway", "Cloud Table", "Morning Bell"],
    mythicAffixes: ["Yu'lon-Taught Tea Seat", "Peak of Serenity Right", "Legendary Brew Cellar"],
    npcs: [
      { name: "Chen", comment: "Move the brew closer." },
      { name: "Taran Zhu", comment: "The path is clear." },
      { name: "Taoshi", comment: "Quiet. Too quiet." }
    ]
  },
  demonHunter: {
    className: "Demon Hunter",
    themes: ["Blindwatch Sanctum", "Glaiverift Hall", "Greenfire Hold"],
    furniture: ["Fel Brazier", "Glaive Rack", "Darkflame Slab", "Demonhide Seat", "Green Crystal Lamp", "Broken Chain Wall"],
    locationTitle: "Footholds by the Rift",
    coords: ["Black Temple outer wall", "Broken Shore scorched steps", "Felwood green shadow", "Mardum ruined armory"],
    styles: ["The room should look warned.", "Comfort should not survive the doorway."],
    rumors: ["The walls watch back.", "Shadows look guilty here.", "The crack is not decoration.", "No one turns from the glaives.", "Couriers write neatly.", "The sofa was judged."],
    affixes: ["Eye Beam Line", "Glaive Wall", "Fel Cell", "Demon Cabinet", "Darkflame Slab", "Illidari Hall", "Blade Door"],
    mythicAffixes: ["Burning Legion Relic", "Illidari High Alert", "Permanent Fel Rift"],
    npcs: [
      { name: "Illidan", comment: "Leave the glaives." },
      { name: "Kayn", comment: "Too bright for comfort." },
      { name: "Altruis", comment: "The room accuses." }
    ]
  },
  evoker: {
    className: "Evoker",
    themes: ["Bronzewing Gallery", "Emerald Oathhall", "Scalevault Parlor"],
    furniture: ["Scale Screen", "Bronze Hourglass", "Emerald Basin", "Wingweave Rug", "Oath Table", "Gem Hatchery"],
    locationTitle: "Sites Named in Old Draconic Records",
    coords: ["Forbidden Reach scale wall", "Valdrakken hourglass hall", "Ohn'ahran wind ring", "Azure Span crystal slope"],
    styles: ["Bronze should remember. Emerald should answer.", "Leave enough air for wings."],
    rumors: ["The hourglass corrects guests.", "The screen blinks in candlelight.", "Wings pass over the roof.", "Couriers bow to the table.", "Chairs keep flight order.", "The gem rack breathes."],
    affixes: ["Dragon Nook", "Bronze Timeglass", "Emerald Nest", "Oath Table", "Scale Wall", "Whelp Perch", "Gem Corner"],
    mythicAffixes: ["Titan-Certified Dragon Nest", "Bronze Time Deed", "Five-Flight Co-Signature"],
    npcs: [
      { name: "Ebyssian", comment: "Good scale work." },
      { name: "Chromie", comment: "I liked it tomorrow." },
      { name: "Alexstrasza", comment: "Enough air. Enough warmth." }
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
    save: "分享我的家宅档案",
    copied: "家宅档案已装入行囊，链接也抄进旅店账本。",
    affixes: "稀有词条",
    visitor: "访客留言",
    danger: "家宅危险等级",
    archive: "档案稀有度",
    neighbor: "邻居评价",
    tavern: "酒馆声望",
    npc: "NPC 点评",
    rumors: "坊间传闻",
    siteStamp: "worldofhomecraft.com · 魔坊世界档案馆",
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
    save: "Share My Homestead Record",
    copied: "Your homestead record is packed. The link is copied into the tavern ledger.",
    affixes: "Rare Affixes",
    visitor: "Visitor Note",
    danger: "House Danger Level",
    archive: "Archive Rarity",
    neighbor: "Neighbor Notes",
    tavern: "Tavern Reputation",
    npc: "NPC Comments",
    rumors: "Tavern Rumors",
    siteStamp: "worldofhomecraft.com · World of Homecraft Archive",
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
const copyStatus = document.querySelector("#copyStatus");
const langToggle = document.querySelector("#langToggle");
const brandName = document.querySelector("#brandName");
const introText = document.querySelector("#introText");
const classLabel = document.querySelector("#classLabel");
const className = document.querySelector("#className");
const serialNumber = document.querySelector("#serialNumber");
const themeName = document.querySelector("#themeName");
const characterTitle = document.querySelector("#characterTitle");
const archiveRegion = document.querySelector("#archiveRegion");
const atmosphereFragments = document.querySelector("#atmosphereFragments");
const visitorTitle = document.querySelector("#visitorTitle");
const visitorNote = document.querySelector("#visitorNote");
const affixList = document.querySelector("#affixList");
const affixTitle = document.querySelector("#affixTitle");
const dangerTitle = document.querySelector("#dangerTitle");
const dangerLevel = document.querySelector("#dangerLevel");
const archiveTitle = document.querySelector("#archiveTitle");
const archiveRarity = document.querySelector("#archiveRarity");
const neighborTitle = document.querySelector("#neighborTitle");
const neighborNote = document.querySelector("#neighborNote");
const tavernTitle = document.querySelector("#tavernTitle");
const tavernReputation = document.querySelector("#tavernReputation");
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

const dangerLevels = {
  zh: ["安全", "有轻微投诉", "守卫已记录", "附近居民不愿靠近", "请勿深夜进入"],
  en: ["Safe", "Minor Complaints Filed", "Guard-Watched", "Neighbors Avoid It", "Do Not Enter After Midnight"]
};

const archiveLevels = {
  zh: ["普通档案", "稀有档案", "史诗档案", "传说档案", "禁忌档案"],
  en: ["Common Record", "Rare Record", "Epic Record", "Legendary Record", "Forbidden Archive"]
};

const roomTraces = {
  zh: {
    warlock: ["墙角仍有绿火和旧契约味。", "蜡烛熄灭后，低语还留着。"],
    paladin: ["长椅和晨光都过分端正。", "门槛像刚被祝福过。"],
    rogue: ["皮革、冷铁和金币声藏在暗处。", "后门比正门更像主人。"],
    shaman: ["石盆旁还残着雨和灰烬。", "地板像记得昨夜的雷声。"],
    deathKnight: ["冷铁气息压住了炉火。", "霜痕沿着门缝停住。"],
    warrior: ["旗影、铁锈和旧战吼仍在。", "桌面留下盾牌撞痕。"],
    hunter: ["兽皮、松针和肉干味未散。", "脚印比访客名字更多。"],
    mage: ["空气里残着蓝光和错位星尘。", "茶壶旁有传送后的静电。"],
    priest: ["帷幕后有光，也有安静的影子。", "椅背像听过太多告解。"],
    druid: ["苔藓沿着木纹慢慢醒来。", "月光停在水盆边不肯走。"],
    monk: ["茶香压住了争吵声。", "晨钟余音还挂在竹影里。"],
    demonHunter: ["邪火把墙影烧得很锋利。", "裂痕旁仍有战刃的冷光。"],
    evoker: ["青铜尘和翡翠光落在桌沿。", "沙漏旁残着一阵温热风声。"]
  },
  en: {
    warlock: ["Greenfire and old contracts linger in the corner.", "The candles die; the whispers remain."],
    paladin: ["Benches and dawnlight stand too straight.", "The threshold still feels blessed."],
    rogue: ["Leather, cold iron, and coin-sound hide in shadow.", "The back door knows the owner better."],
    shaman: ["Rain and ash linger beside the stone basin.", "The floor remembers last night's thunder."],
    deathKnight: ["Cold iron keeps the hearth obedient.", "Frost stops neatly at the doorframe."],
    warrior: ["Banner-shadow, rust, and old battle cries remain.", "Shield marks still scar the table."],
    hunter: ["Hide, pine needles, and jerky scent remain.", "There are more tracks than names."],
    mage: ["Blue light and misplaced stardust hang in the air.", "Portal static clings to the teapot."],
    priest: ["Light waits behind the veil; shadow waits beside it.", "The chair has heard too many confessions."],
    druid: ["Moss wakes slowly along the grain.", "Moonlight refuses to leave the basin."],
    monk: ["Tea has settled the argument.", "The morning bell still hangs in bamboo shade."],
    demonHunter: ["Felfire leaves every shadow sharpened.", "The rift still holds a glaive-cold gleam."],
    evoker: ["Bronze dust and emerald light rest on the table.", "Warm wind lingers beside the hourglass."]
  }
};

const atmosphereWords = {
  zh: {
    warlock: ["冷铁味", "低语声", "门缝绿光", "蜡烛灰"],
    paladin: ["白石尘", "晨光", "誓约蜡痕", "旧钟声"],
    rogue: ["皮革味", "暗巷灰", "金币声", "毒药绿光"],
    shaman: ["雨腥味", "图腾木屑", "雷声残响", "灰烬"],
    deathKnight: ["冷炉灰", "霜痕", "黑铁味", "无声旗影"],
    warrior: ["铁锈", "战旗影", "旧战吼", "皮革尘"],
    hunter: ["松针", "兽皮味", "鹰羽", "篝火灰"],
    mage: ["蓝光尘", "奥术静电", "茶壶雾", "错位星尘"],
    priest: ["烛泪", "低声祈祷", "白纱灰", "暗影边角"],
    druid: ["月光苔", "潮湿木纹", "花粉", "树影"],
    monk: ["茶香", "竹影", "晨钟余音", "酒坛木塞"],
    demonHunter: ["邪火灰", "裂痕绿光", "战刃冷影", "焦痕"],
    evoker: ["青铜尘", "翡翠光", "龙鳞热风", "沙漏声"]
  },
  en: {
    warlock: ["cold iron", "low whispers", "green doorlight", "candle ash"],
    paladin: ["white stone dust", "dawnlight", "oath-wax", "old bell sound"],
    rogue: ["leather smell", "backroom dust", "coin-smoke", "poison green"],
    shaman: ["rain scent", "totem splinters", "thunder echo", "ash"],
    deathKnight: ["dead hearth ash", "frost marks", "black iron", "silent banner"],
    warrior: ["rust", "banner shadow", "old warcry", "leather dust"],
    hunter: ["pine needles", "hide scent", "hawk feather", "campfire ash"],
    mage: ["blue dust", "arcane static", "teapot mist", "misplaced stars"],
    priest: ["candle tears", "low prayer", "white veil dust", "shadow edge"],
    druid: ["moonlit moss", "wet woodgrain", "pollen", "tree shadow"],
    monk: ["tea steam", "bamboo shade", "morning bell", "brew cork"],
    demonHunter: ["fel ash", "rift green", "glaive-cold shadow", "scorch mark"],
    evoker: ["bronze dust", "emerald light", "scale-warm wind", "hourglass sound"]
  }
};

const dangerProfiles = {
  warlock: [4, 8, 18, 32, 38],
  paladin: [38, 34, 18, 8, 2],
  rogue: [8, 22, 34, 28, 8],
  shaman: [16, 28, 30, 18, 8],
  deathKnight: [2, 8, 20, 34, 36],
  warrior: [10, 24, 34, 24, 8],
  hunter: [14, 30, 26, 22, 8],
  mage: [12, 24, 30, 24, 10],
  priest: [32, 34, 20, 10, 4],
  druid: [24, 34, 22, 14, 6],
  monk: [36, 34, 18, 8, 4],
  demonHunter: [2, 8, 18, 34, 38],
  evoker: [14, 26, 28, 22, 10]
};

const shareContent = {
  zh: {
    warlock: {
      neighbor: ["附近居民认为你的地下室太安静了。", "隔壁裁缝说墙缝里有东西在背诵契约。", "信使要求以后只把包裹放在路边。"],
      tavern: ["旅店老板知道你的名字，但不愿细说。", "有人替你付过酒钱，账单上只留下硫磺味。", "你在酒馆账本上的名字旁边画着一支黑蜡烛。"]
    },
    paladin: {
      neighbor: ["邻居承认这里很安全，但抱怨清晨太亮。", "守卫说你家的门廊比岗哨还像岗哨。", "附近孩子相信你的壁炉能赶走噩梦。"],
      tavern: ["酒馆老板说你会按时交租，而且会提醒别人也按时。", "你的杯子总被放在最干净的位置。", "有人在账本旁写下：此人不会赖账。"]
    },
    rogue: {
      neighbor: ["隔壁矮人投诉你半夜还在敲墙。", "邻居说你的后门比正门更有礼貌。", "巡逻兵觉得这栋房子太会假装无辜。"],
      tavern: ["你在酒馆的账本上被画了一个问号。", "酒馆老板说你不像会按时交租的人。", "有人替你付过酒钱，但没人承认。"]
    },
    shaman: {
      neighbor: ["邻居已经分不清你在装修还是在召唤天气。", "隔壁牛头人说鼓声不错，就是雷声太准时。", "附近居民希望火盆和水盆别再吵架。"],
      tavern: ["酒馆里的老萨满说风替你占了座。", "你的账页有水渍、灰烬和一小片闪电痕。", "老板说你点酒前，杯子自己转向了你。"]
    },
    deathKnight: {
      neighbor: ["附近居民认为你的火盆没有尽到火盆的职责。", "守夜人说你家门口的霜会记名字。", "隔壁没人投诉，因为没人敢敲门。"],
      tavern: ["旅店老板知道你的名字，但念出来会让炉火变小。", "你的账本页总是比其他页冷。", "有人替你留了座位，没人愿意坐旁边。"]
    },
    warrior: {
      neighbor: ["隔壁铁匠说你关门像战鼓点名。", "邻居承认安全感很强，但墙壁压力很大。", "守卫已记录三次无故战吼。"],
      tavern: ["酒馆老板给你的杯子换成了铁杯。", "你的账本旁写着：别让此人搬桌子。", "有人说你赢过一次掰手腕，桌子输了。"]
    },
    hunter: {
      neighbor: ["邻居说宠物区已经开始向外扩张。", "附近居民想知道餐桌主位到底归谁。", "信使先向鹰点头，再向你问好。"],
      tavern: ["老板说你每次来都像带了半个森林。", "你的账本页夹着一根羽毛和三块肉干。", "有人替你的宠物点过一杯水。"]
    },
    mage: {
      neighbor: ["邻居投诉厕所门昨天开到了达拉然。", "有人说你家窗户显示的星空不属于本地。", "信使要求确认地址没有被传送走。"],
      tavern: ["你的酒钱有时会提前一天付清。", "酒馆老板说你的杯子会自己回到桌上。", "账本旁写着：此人可能来自刚才，也可能来自明天。"]
    },
    priest: {
      neighbor: ["邻居说路过时会下意识反省。", "附近居民觉得这里很安静，安静到能听见叹气。", "有人说你的窗帘从不沾灰。"],
      tavern: ["老板说你听完别人抱怨后还会付自己的酒钱。", "你的账本页被压得很平，像刚做过告解。", "有人在你座位旁低声说了谢谢。"]
    },
    druid: {
      neighbor: ["邻居怀疑你的藤蔓替你收过信。", "附近居民说地毯最近有春天的态度。", "有人投诉树影占用了公共走道。"],
      tavern: ["酒馆老板说你的椅子总会长出一点苔藓。", "你的账本页闻起来像雨后的月光林地。", "有人替你点了清水，后来杯里开了花。"]
    },
    monk: {
      neighbor: ["邻居说晨钟很好，就是让人突然想早起。", "隔壁农夫承认你的茶香平息过一次争吵。", "附近居民觉得训练木桩比房东更讲道理。"],
      tavern: ["老板说你总能把吵架桌变成喝茶桌。", "你的账本页旁放着一个没人承认的空杯。", "有人说你没点酒，但酒坛自己靠近了。"]
    },
    demonHunter: {
      neighbor: ["邻居说你的裂痕不像装修风格，更像警告。", "守卫路过时会下意识绕远。", "附近居民认为绿色火光已经超过气氛照明。"],
      tavern: ["酒馆老板给你的座位留在离门最近的地方。", "你的账本页边缘有烧焦的爪痕。", "有人替你付酒钱，只求你别盯着他看。"]
    },
    evoker: {
      neighbor: ["邻居说屋顶偶尔会有翅膀影子。", "信使向圆桌点头后才敢放下包裹。", "附近居民认为你的沙漏不太尊重今天。"],
      tavern: ["老板说你上次明明明天才来过。", "你的账本页有青铜粉和翡翠光。", "有人替你留了高背椅，理由是尾巴空间。"]
    }
  },
  en: {
    warlock: {
      neighbor: ["Neighbors say the basement has been too quiet.", "The tailor next door heard contracts inside the wall.", "Couriers now leave parcels in the road."],
      tavern: ["The innkeeper knows your name, but will not explain why.", "Someone paid your tab. The coin smelled of brimstone.", "A black candle is drawn beside your name in the ledger."]
    },
    paladin: {
      neighbor: ["The neighbors feel safe, but complain about dawn.", "Guards say the porch looks more disciplined than the gate.", "Children believe the hearth keeps nightmares out."],
      tavern: ["The innkeeper says you pay rent on time and remind others.", "Your cup is always placed on the cleanest shelf.", "The ledger note says: will not skip the bill."]
    },
    rogue: {
      neighbor: ["The dwarf next door filed three noise complaints.", "The back door seems more honest than the front.", "A patrolman said the house looked too innocent."],
      tavern: ["There is a question mark next to your name in the tavern ledger.", "The innkeeper says you do not look like someone who pays rent on time.", "Someone paid for your drink. Nobody admits it."]
    },
    shaman: {
      neighbor: ["Neighbors cannot tell renovation from weather.", "The drum is fine, says the tauren next door. The thunder is the issue.", "People nearby want the fire and water bowls separated."],
      tavern: ["An old shaman says the wind saved you a seat.", "Your ledger page has water, ash, and a small lightning mark.", "The cup turned toward you before you ordered."]
    },
    deathKnight: {
      neighbor: ["Neighbors say the brazier is failing at being a brazier.", "The night watch says the frost at your door remembers names.", "No one complains, because no one knocks."],
      tavern: ["The innkeeper knows your name, but saying it lowers the fire.", "Your ledger page is colder than the rest.", "Someone saved you a chair. Nobody sits beside it."]
    },
    warrior: {
      neighbor: ["The smith next door says your door closes like a war drum.", "Neighbors feel safer, though the walls look tired.", "Guards recorded three unexplained battle cries."],
      tavern: ["The innkeeper replaced your cup with an iron one.", "The ledger note says: do not let this one move tables.", "You once beat the table at arm wrestling."]
    },
    hunter: {
      neighbor: ["Neighbors say the beast corner is expanding.", "People nearby ask who owns the head seat at dinner.", "Couriers greet the hawk before greeting you."],
      tavern: ["The innkeeper says you bring half a forest indoors.", "Your ledger page holds one feather and three strips of jerky.", "Someone ordered water for your pet."]
    },
    mage: {
      neighbor: ["The washroom door opened in Dalaran yesterday.", "The window shows stars from somewhere else.", "Couriers ask if the address is still in this city."],
      tavern: ["Your tab is sometimes paid tomorrow.", "The innkeeper says your cup returns itself.", "The ledger note says: may arrive from earlier."]
    },
    priest: {
      neighbor: ["Neighbors lower their voices when passing.", "People say the room is quiet enough to hear regrets.", "The curtains never gather dust."],
      tavern: ["The innkeeper says you listen to complaints and still pay your own bill.", "Your ledger page lies flat, like it confessed.", "Someone whispered thanks beside your chair."]
    },
    druid: {
      neighbor: ["Neighbors suspect the vines collect your mail.", "The rug has developed opinions about spring.", "A tree shadow was reported in the public lane."],
      tavern: ["The innkeeper says your chair grows moss.", "Your ledger page smells like rain in Moonglade.", "Someone ordered water for you. It bloomed."]
    },
    monk: {
      neighbor: ["The morning bell has improved the lane's posture.", "A farmer says your tea ended an argument.", "The training post seems more reasonable than the landlord."],
      tavern: ["The innkeeper says you turn shouting tables into tea tables.", "An empty cup keeps appearing beside your ledger.", "You did not order brew. The barrel moved closer."]
    },
    demonHunter: {
      neighbor: ["Neighbors say the rift feels less like decor and more like a warning.", "Guards take the long way around.", "The green fire is past mood lighting."],
      tavern: ["The innkeeper keeps your seat near the door.", "Your ledger page has scorched claw marks.", "Someone paid your tab so you would stop staring."]
    },
    evoker: {
      neighbor: ["Neighbors report wing shadows over the roof.", "Couriers bow to the table before setting parcels down.", "The hourglass does not respect today."],
      tavern: ["The innkeeper says you already came tomorrow.", "Your ledger page glitters with bronze dust and emerald light.", "Someone saved you a high-backed chair for tail clearance."]
    }
  }
};

const identityLayer = {
  zh: {
    warlock: {
      titles: ["暮色守门人", "地下室账本管理员", "黑蜡烛契约人"],
      regions: ["暮色森林边缘", "银松森林旧路", "逆风小径下层"],
      visitors: ["“这里的门从不真正锁上。”", "“有人凌晨三点还看见绿火亮着。”", "“旅店老板拒绝送餐到这里。”"],
      codes: ["AZ-FEL", "AZ-DUSK", "DWD-RITE"]
    },
    paladin: {
      titles: ["晨光守誓人", "旧礼拜堂看护者", "白石长椅主人"],
      regions: ["北郡旧钟楼", "圣光礼拜堂后庭", "暴风城教堂区"],
      visitors: ["“门槛像刚被祝福过。”", "“没人敢在这里赖账。”", "“壁炉旁的椅子会让人坐直。”"],
      codes: ["SW-LGT", "AZ-OATH", "NTH-DAWN"]
    },
    rogue: {
      titles: ["酒馆低语者", "不被旅店记录的人", "后巷钥匙保管人"],
      regions: ["闪金镇后巷", "暴风城旧城区", "拉文霍德西仓"],
      visitors: ["“访客回来后都说自己只是路过。”", "“这里的窗帘比主人更守口如瓶。”", "“账本上少了一页，但没人承认。”"],
      codes: ["SW-SHD", "AZ-LOCK", "RVN-KEY"]
    },
    shaman: {
      titles: ["风暴听屋人", "图腾旧坡看守", "四元素调停者"],
      regions: ["雷霆崖旧坡", "纳格兰风口", "杜隆塔尔红土祭台"],
      visitors: ["“门口的风先回答了问题。”", "“水盆说今晚不接待客人。”", "“这里的地板知道雷雨何时来。”"],
      codes: ["THR-STO", "NAG-WND", "AZ-TOTM"]
    },
    deathKnight: {
      titles: ["寒门守夜人", "黑锋旧钥持有人", "冷炉旁的租客"],
      regions: ["阿彻鲁斯下层", "龙骨荒野霜门", "东瘟疫无名墓园"],
      visitors: ["“这里的灯亮着，却没有温度。”", "“访客离开时鞋底结了霜。”", "“没人愿意把名字写进登记簿。”"],
      codes: ["ACH-EBN", "AZ-FRST", "DK-VAULT"]
    },
    warrior: {
      titles: ["战旗厅主人", "旧哨塔炉边人", "铁杯账本常客"],
      regions: ["赤脊山旧哨塔", "阿拉希战旗坡", "暴风城兵营后院"],
      visitors: ["“门一关，像有人敲响战鼓。”", "“这里的桌子不再接受挑战。”", "“访客进门前会先看墙上的斧头。”"],
      codes: ["RED-IRON", "AZ-WAR", "STM-BRKS"]
    },
    hunter: {
      titles: ["林径留痕者", "兽栏灯火主人", "鹰架旁的租客"],
      regions: ["灰谷猎径尽头", "纳格兰饮水坡", "至高岭鹰巢下"],
      visitors: ["“先敲门，后向鹰问好。”", "“肉干不见了，没人追查。”", "“餐桌主位看起来已经有人占了。”"],
      codes: ["ASH-TRK", "NAG-HUNT", "AZ-BEAST"]
    },
    mage: {
      titles: ["奥术租客", "蓝晶阁楼记录员", "迟到三天的人"],
      regions: ["达拉然下层", "艾萨拉蓝晶断崖", "苏拉玛后厅"],
      visitors: ["“有人凌晨三点还看见灯亮着。”", "“门牌昨天短暂出现在另一座城。”", "“茶壶比主人更准时。”"],
      codes: ["DAL-ARC", "AZ-RUNE", "SUR-GLS"]
    },
    priest: {
      titles: ["低声告解人", "晨光帷幕后的人", "双面圣典守书者"],
      regions: ["沙塔斯烛光台", "暴风城侧廊", "幽暗城破损圣龛"],
      visitors: ["“进门后，大家都会小声一点。”", "“镜子没有回答第二个问题。”", "“访客说自己只是来坐一会儿。”"],
      codes: ["AZ-VEIL", "SHA-MRCY", "SW-PRAY"]
    },
    druid: {
      titles: ["沼泽梦行者", "月井边的邻居", "藤蔓钥匙持有人"],
      regions: ["月光林地旧坡", "瓦尔莎拉根须间", "海加尔晨露石阶"],
      visitors: ["“地毯今天又长出一点东西。”", "“访客回来时带着睡意和苔藓。”", "“没人解释屋里为何总有月光。”"],
      codes: ["SLV-MOON", "AZ-DREAM", "VAL-ROOT"]
    },
    monk: {
      titles: ["竹溪听钟人", "晨茶院看守", "酒坛旁的安静租客"],
      regions: ["昆莱山云阶", "翡翠林竹溪", "四风谷田埂边"],
      visitors: ["“这里吵不起来，茶太香了。”", "“有人坐下后忘了讨租。”", "“晨钟响过，连扫帚都站直了。”"],
      codes: ["JDE-TEA", "KL-MIST", "AZ-BREW"]
    },
    demonHunter: {
      titles: ["裂痕边缘居住者", "盲眼门卫", "邪火走廊主人"],
      regions: ["黑暗神殿断墙", "破碎海滩焦阶", "费伍德绿影"],
      visitors: ["“墙上的裂缝像在看人。”", "“没人愿意背对那面战刃墙。”", "“访客说椅子审判了他。”"],
      codes: ["BT-FEL", "AZ-RIFT", "ILL-BLD"]
    },
    evoker: {
      titles: ["青铜档案携带者", "龙鳞厅守卷人", "明天来过的租客"],
      regions: ["瓦德拉肯沙漏廊", "禁忌离岛风墙", "碧蓝林海晶坡"],
      visitors: ["“沙漏说访客已经迟到了。”", "“有人在屋顶看见翅膀影子。”", "“椅子按颜色排好了座次。”"],
      codes: ["VAL-BRZ", "AZ-SCALE", "DRG-OATH"]
    }
  },
  en: {
    warlock: {
      titles: ["Dusk Gatekeeper", "Basement Ledger-Keeper", "Black Candle Contractor"],
      regions: ["Duskwood Edge", "Old Silverpine Road", "Lower Deadwind Pass"],
      visitors: ["“The door here never truly locks.”", "“Someone saw greenfire burning at three bells.”", "“The innkeeper refuses to deliver food here.”"]
    },
    paladin: {
      titles: ["Dawn Oathkeeper", "Old Chapel Warden", "Keeper of the White Bench"],
      regions: ["Northshire Bell Yard", "Light's Hope Rear Garden", "Stormwind Cathedral Walk"],
      visitors: ["“The threshold feels freshly blessed.”", "“No one dares skip a bill here.”", "“The hearth chair makes visitors sit straighter.”"]
    },
    rogue: {
      titles: ["Tavern Whisperer", "The Tenant Not Written Down", "Back-Lane Keyholder"],
      regions: ["Goldshire Back Lane", "Old Town of Stormwind", "Ravenholdt West Storehouse"],
      visitors: ["“Visitors return saying they only passed by.”", "“The curtains keep better secrets than the owner.”", "“A ledger page is missing. Nobody admits it.”"]
    },
    shaman: {
      titles: ["Stormlistener", "Old Totem Rise Keeper", "Mediator of Four Elements"],
      regions: ["Old Rise of Thunder Bluff", "Nagrand Windbreak", "Durotar Red-Earth Altar"],
      visitors: ["“The wind at the door answered first.”", "“The water bowl says no guests tonight.”", "“The floor knows when rain is coming.”"]
    },
    deathKnight: {
      titles: ["Cold-Door Watcher", "Ebon Keybearer", "Tenant by the Dead Hearth"],
      regions: ["Lower Acherus", "Dragonblight Frost Door", "Nameless Plaguelands Yard"],
      visitors: ["“The lamps are lit, but give no warmth.”", "“Visitors leave with frost on their boots.”", "“No one signs the register willingly.”"]
    },
    warrior: {
      titles: ["Banner-Hall Keeper", "Old Watchtower Hearthman", "Iron Cup Regular"],
      regions: ["Redridge Old Watch", "Arathi Banner Slope", "Stormwind Barracks Yard"],
      visitors: ["“When the door shuts, it sounds like a war drum.”", "“The table no longer accepts challenges.”", "“Visitors check the axe wall before speaking.”"]
    },
    hunter: {
      titles: ["Trailmark Keeper", "Beast-Lamp Warden", "Lodger by the Hawk Perch"],
      regions: ["Ashenvale Trail End", "Nagrand Watering Slope", "Below the Highmountain Eyrie"],
      visitors: ["“Knock first. Greet the hawk second.”", "“The jerky vanished. No one investigated.”", "“The head seat at dinner appears claimed.”"]
    },
    mage: {
      titles: ["Arcane Lodger", "Blueglass Attic Clerk", "The One Three Days Late"],
      regions: ["Lower Dalaran", "Azshara Blueglass Cliff", "Suramar Rear Salon"],
      visitors: ["“Someone saw the lamp burning at three bells.”", "“The address briefly appeared in another city.”", "“The teapot keeps better time than the tenant.”"]
    },
    priest: {
      titles: ["Low-Voiced Confessor", "Keeper Behind the Dawn Veil", "Twin-Tome Warden"],
      regions: ["Shattrath Candle Table", "Stormwind Side Aisle", "Broken Undercity Shrine"],
      visitors: ["“Everyone speaks softer after entering.”", "“The mirror did not answer the second question.”", "“Visitors say they only came to sit awhile.”"]
    },
    druid: {
      titles: ["Marsh Dreamwalker", "Neighbor by the Moonwell", "Vine-Key Holder"],
      regions: ["Old Moonglade Slope", "Val'sharah Rootway", "Hyjal Dew Steps"],
      visitors: ["“The rug grew something again.”", "“Visitors return sleepy and moss-marked.”", "“No one explains why moonlight stays indoors.”"]
    },
    monk: {
      titles: ["Bamboo Bell Listener", "Morning Tea Warden", "Quiet Lodger by the Brew Jar"],
      regions: ["Kun-Lai Cloud Steps", "Jade Forest Bamboo Creek", "Four Winds Field Ridge"],
      visitors: ["“Arguments do not last here. The tea is too good.”", "“Someone sat down and forgot to ask for rent.”", "“After the morning bell, even the broom stood straight.”"]
    },
    demonHunter: {
      titles: ["Rift-Edge Dweller", "Blind Doorwarden", "Keeper of the Fel Hall"],
      regions: ["Black Temple Broken Wall", "Broken Shore Scorched Step", "Felwood Green Shadow"],
      visitors: ["“The crack in the wall looks back.”", "“No one turns their back to the glaive wall.”", "“A visitor says the chair judged him.”"]
    },
    evoker: {
      titles: ["Bronze Archive Carrier", "Scalehall Record-Keeper", "The Tenant Who Came Tomorrow"],
      regions: ["Valdrakken Hourglass Hall", "Forbidden Reach Wind Wall", "Azure Span Crystal Slope"],
      visitors: ["“The hourglass says the guest is already late.”", "“Someone saw wing shadows over the roof.”", "“The chairs arranged themselves by color.”"]
    }
  }
};

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

function pickWeightedIndex(weights) {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let roll = Math.random() * total;
  for (let index = 0; index < weights.length; index += 1) {
    roll -= weights[index];
    if (roll <= 0) {
      return index;
    }
  }
  return 0;
}

function generateSerial(key) {
  const digits = String(Math.floor(Math.random() * 10000)).padStart(4, "0");
  const codes = identityLayer.zh[key].codes;
  return `${pickItems(codes, 1)[0]}-${digits}`;
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
  affixes.slice(0, 2).forEach((affix) => {
    const badge = document.createElement("span");
    badge.className = "affix-badge";
    badge.dataset.rarity = affix.rarity;
    badge.innerHTML = `<span class="affix-rarity">${tRarity(affix.rarity)}</span>${getAffixName(currentPlan.key, affix)}`;
    affixList.appendChild(badge);
  });
}

function renderAtmosphereFragments(fragments) {
  atmosphereFragments.innerHTML = "";
  fragments.forEach((fragment) => {
    const span = document.createElement("span");
    span.textContent = fragment;
    atmosphereFragments.appendChild(span);
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

function highestAffixRank(affixes) {
  const rank = { "普通": 0, "稀有": 1, "史诗": 2, "传说": 3, "神话": 4 };
  return Math.max(...affixes.map((affix) => rank[affix.rarity] || 0));
}

function archiveIndexFor(affixes) {
  const highest = highestAffixRank(affixes);
  if (highest >= 4) {
    return 4;
  }
  if (highest === 3) {
    return Math.random() < 0.82 ? 3 : 2;
  }
  if (highest === 2) {
    return Math.random() < 0.75 ? 2 : 1;
  }
  if (highest === 1) {
    return Math.random() < 0.72 ? 1 : 0;
  }
  return 0;
}

function identityFor(key) {
  return shareContent[currentLang][key];
}

function homesteadIdentityFor(key) {
  return identityLayer[currentLang][key];
}

function roomTraceFor(key, index) {
  const traces = roomTraces[currentLang][key];
  return traces[index % traces.length];
}

function atmosphereFor(key) {
  const data = contentFor(key);
  const trace = roomTraceFor(key, currentPlan.styleIndex);
  const fragments = [
    ...currentPlan.furnitureIndices.map((index) => data.furniture[index]),
    ...atmosphereWords[currentLang][key],
    trace
  ];
  return currentPlan.atmosphereIndices.map((index) => fragments[index % fragments.length]);
}

function updateStaticText() {
  document.documentElement.lang = t("htmlLang");
  brandName.textContent = t("brand");
  introText.textContent = t("intro");
  classLabel.textContent = t("classLabel");
  generateBtn.textContent = t("generate");
  saveBtn.textContent = t("save");
  affixTitle.textContent = t("affixes");
  visitorTitle.textContent = t("visitor");
  dangerTitle.textContent = t("danger");
  archiveTitle.textContent = t("archive");
  neighborTitle.textContent = t("neighbor");
  tavernTitle.textContent = t("tavern");
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
  const identity = identityFor(currentPlan.key);
  const homesteadIdentity = homesteadIdentityFor(currentPlan.key);
  const npc = meta.npcs[currentPlan.npcIndex];

  document.body.dataset.theme = currentPlan.key;
  className.textContent = `${tClass(currentPlan.key)} ${t("classSuffix")}`;
  serialNumber.textContent = currentPlan.serial;
  themeName.textContent = data.themes[currentPlan.themeIndex];
  characterTitle.textContent = homesteadIdentity.titles[currentPlan.characterTitleIndex % homesteadIdentity.titles.length];
  archiveRegion.textContent = homesteadIdentity.regions[currentPlan.archiveRegionIndex % homesteadIdentity.regions.length];
  visitorNote.textContent = homesteadIdentity.visitors[currentPlan.visitorNoteIndex % homesteadIdentity.visitors.length];
  renderAtmosphereFragments(atmosphereFor(currentPlan.key));
  renderAffixes(currentPlan.affixes);
  dangerLevel.textContent = dangerLevels[currentLang][currentPlan.dangerIndex];
  archiveRarity.textContent = archiveLevels[currentLang][currentPlan.archiveIndex];
  neighborNote.textContent = identity.neighbor[currentPlan.neighborIndex % identity.neighbor.length];
  tavernReputation.textContent = identity.tavern[currentPlan.tavernIndex % identity.tavern.length];
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
  const rumorPoolSize = Math.min(plan.rumors.length, EN_CONTENT[key].rumors.length);
  const rumorPool = Array.from({ length: rumorPoolSize });
  const atmospherePoolSize = 3 + atmosphereWords.zh[key].length + roomTraces.zh[key].length;
  const atmosphereCount = Math.floor(Math.random() * 3) + 3;

  currentPlan = {
    key,
    serial: generateSerial(key),
    themeIndex: pickIndices(plan.themes, 1)[0],
    characterTitleIndex: pickIndices(identityLayer.zh[key].titles, 1)[0],
    archiveRegionIndex: pickIndices(identityLayer.zh[key].regions, 1)[0],
    visitorNoteIndex: pickIndices(identityLayer.zh[key].visitors, 1)[0],
    furnitureIndices: pickIndices(plan.furniture, 3),
    atmosphereIndices: pickIndices(Array.from({ length: atmospherePoolSize }), atmosphereCount),
    coordIndices: pickIndices(plan.coords, 3),
    affixes,
    dangerIndex: pickWeightedIndex(dangerProfiles[key]),
    archiveIndex: archiveIndexFor(affixes),
    neighborIndex: pickIndices(shareContent.zh[key].neighbor, 1)[0],
    tavernIndex: pickIndices(shareContent.zh[key].tavern, 1)[0],
    styleIndex: Math.floor(Math.random() * 2),
    rumorIndices: pickIndices(rumorPool, Math.floor(Math.random() * 2) + 2),
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

function wrapCanvasText(ctx, text, maxWidth, maxLines = 3) {
  const hasSpaces = /\s/.test(text);
  const units = hasSpaces ? text.split(/(\s+)/).filter(Boolean) : Array.from(text);
  const lines = [];
  let line = "";

  units.forEach((unit) => {
    const nextLine = line + unit;
    if (ctx.measureText(nextLine).width > maxWidth && line.trim()) {
      lines.push(line.trimEnd());
      line = unit.trimStart();
    } else {
      line = nextLine;
    }
  });

  if (line.trim()) {
    lines.push(line.trimEnd());
  }

  if (lines.length > maxLines) {
    const clipped = lines.slice(0, maxLines);
    let lastLine = clipped[maxLines - 1];
    while (ctx.measureText(`${lastLine}...`).width > maxWidth && lastLine.length > 1) {
      lastLine = lastLine.slice(0, -1);
    }
    clipped[maxLines - 1] = `${lastLine.trimEnd()}...`;
    return clipped;
  }

  return lines;
}

function measurePosterBadge(ctx, text, maxWidth = 440) {
  ctx.font = "700 22px sans-serif";
  const innerWidth = Math.max(200, maxWidth - 46);
  const lines = wrapCanvasText(ctx, text, innerWidth, 3);
  const textWidth = Math.max(...lines.map((line) => ctx.measureText(line).width));
  return {
    lines,
    width: Math.min(Math.max(textWidth + 46, 210), maxWidth),
    height: 22 + lines.length * 28
  };
}

function drawPosterBadge(ctx, text, rarity, x, y, maxWidth = 440) {
  const colors = {
    "普通": "#b8b8b8",
    "稀有": "#58a8ff",
    "史诗": "#be76ff",
    "传说": "#ffad3f",
    "神话": "#ffe05c"
  };
  const color = colors[rarity] || colors["普通"];
  ctx.font = "700 22px sans-serif";
  const badge = measurePosterBadge(ctx, text, maxWidth);
  drawRoundRect(ctx, x, y - 28, badge.width, badge.height, 20);
  ctx.fillStyle = "rgba(0, 0, 0, 0.42)";
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = color;
  badge.lines.forEach((line, index) => {
    ctx.fillText(line, x + 22, y + index * 28);
  });
  return badge;
}

function drawPosterAtmosphere(ctx, fragments, x, y, maxWidth) {
  ctx.font = "700 21px sans-serif";
  let cursorX = x;
  let cursorY = y;
  const gapX = 18;
  const gapY = 32;
  fragments.forEach((fragment, index) => {
    const text = index % 2 === 0 ? fragment : `· ${fragment}`;
    const textWidth = ctx.measureText(text).width;
    if (cursorX > x && cursorX + textWidth > x + maxWidth) {
      cursorX = x + 24;
      cursorY += gapY;
    }
    ctx.fillStyle = index % 2 === 0 ? "rgba(215, 198, 165, 0.48)" : "rgba(244, 234, 216, 0.36)";
    ctx.fillText(text, cursorX, cursorY);
    cursorX += textWidth + gapX;
  });
  return cursorY + gapY;
}

function savePlanImage(options = {}) {
  const { download = true } = options;
  if (!currentPlan) {
    generatePlan();
  }

  const data = contentFor(currentPlan.key);
  const meta = metaFor(currentPlan.key);
  const npc = meta.npcs[currentPlan.npcIndex];
  const identity = identityFor(currentPlan.key);
  const homesteadIdentity = homesteadIdentityFor(currentPlan.key);
  const currentCharacterTitle = homesteadIdentity.titles[currentPlan.characterTitleIndex % homesteadIdentity.titles.length];
  const currentArchiveRegion = homesteadIdentity.regions[currentPlan.archiveRegionIndex % homesteadIdentity.regions.length];
  const currentVisitorNote = homesteadIdentity.visitors[currentPlan.visitorNoteIndex % homesteadIdentity.visitors.length];
  const atmosphere = atmosphereFor(currentPlan.key);
  const rumors = currentPlan.rumorIndices.map((index) => data.rumors[index % data.rumors.length]);
  const neighbor = identity.neighbor[currentPlan.neighborIndex % identity.neighbor.length];
  const tavern = identity.tavern[currentPlan.tavernIndex % identity.tavern.length];

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1980;
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

  y += 50;
  ctx.fillStyle = "rgba(215, 173, 83, 0.92)";
  ctx.font = "800 30px sans-serif";
  ctx.fillText(currentCharacterTitle, padding, y);
  ctx.fillStyle = "rgba(215, 198, 165, 0.7)";
  ctx.font = "700 24px sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(currentArchiveRegion, width - padding, y);
  ctx.textAlign = "left";

  y += 58;
  ctx.fillStyle = "#f4ead8";
  ctx.font = "900 68px sans-serif";
  y = drawWrappedText(ctx, data.themes[currentPlan.themeIndex], padding, y, width - padding * 2 - 70, 78, 3) + 26;

  ctx.fillStyle = "rgba(244, 234, 216, 0.86)";
  ctx.font = "700 28px sans-serif";
  y = drawWrappedText(ctx, currentVisitorNote, padding, y, width - padding * 2, 38, 2) + 12;

  y = drawPosterAtmosphere(ctx, atmosphere, padding, y, width - padding * 2) + 20;

  ctx.fillStyle = "rgba(215, 173, 83, 0.9)";
  ctx.fillRect(padding, y, width - padding * 2, 3);
  y += 56;

  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 24px sans-serif";
  ctx.fillText(t("affixes"), padding, y);
  y += 42;
  let badgeX = padding;
  const posterRight = width - padding;
  const badgeGap = 16;
  let rowHeight = 0;
  currentPlan.affixes.slice(0, 2).forEach((affix) => {
    const badgeText = `${tRarity(affix.rarity)} · ${getAffixName(currentPlan.key, affix)}`;
    const measured = measurePosterBadge(ctx, badgeText, 440);
    if (badgeX > padding && badgeX + measured.width > posterRight) {
      badgeX = padding;
      y += rowHeight + 14;
      rowHeight = 0;
    }
    const availableWidth = posterRight - badgeX;
    const badge = drawPosterBadge(ctx, badgeText, affix.rarity, badgeX, y, Math.min(440, availableWidth));
    badgeX += badge.width + badgeGap;
    rowHeight = Math.max(rowHeight, badge.height);
  });
  y += rowHeight + 44;

  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 24px sans-serif";
  ctx.fillText(t("danger"), padding, y);
  ctx.fillText(t("archive"), padding + 470, y);
  y += 42;
  ctx.fillStyle = "#f4ead8";
  ctx.font = "900 30px sans-serif";
  ctx.fillText(dangerLevels[currentLang][currentPlan.dangerIndex], padding, y);
  ctx.fillText(archiveLevels[currentLang][currentPlan.archiveIndex], padding + 470, y);
  y += 58;

  y = drawSection(ctx, t("neighbor"), [neighbor], padding, y, width - padding * 2);
  y = drawSection(ctx, t("tavern"), [tavern], padding, y, width - padding * 2);

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

  ctx.fillStyle = "rgba(215, 198, 165, 0.48)";
  ctx.font = "20px sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(tNote(currentPlan.cornerNote), width - padding, canvas.height - 118);
  ctx.fillStyle = "rgba(215, 173, 83, 0.56)";
  ctx.font = "700 20px sans-serif";
  ctx.fillText(t("siteStamp"), width - padding, canvas.height - 82);
  ctx.textAlign = "left";

  const image = {
    canvas,
    filename: `wow-home-plan-${tClass(currentPlan.key)}.png`,
    dataUrl: canvas.toDataURL("image/png")
  };

  if (download) {
    downloadPlanImage(image);
  }

  return image;
}

function downloadPlanImage(image) {
  const link = document.createElement("a");
  link.download = image.filename;
  link.href = image.dataUrl;
  link.click();
}

function dataUrlToBlob(dataUrl) {
  const [meta, data] = dataUrl.split(",");
  const mimeMatch = meta.match(/data:([^;]+)/);
  const mime = mimeMatch ? mimeMatch[1] : "image/png";
  const binary = atob(data);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: mime });
}

function canvasToBlob(canvas, dataUrl) {
  if (canvas.toBlob) {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob || dataUrlToBlob(dataUrl)), "image/png");
    });
  }
  return Promise.resolve(dataUrlToBlob(dataUrl));
}

async function copyShareLink(updateStatus = true) {
  const url = "https://worldofhomecraft.com";
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
    } else {
      const input = document.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    if (updateStatus) {
      copyStatus.textContent = t("copied");
    }
    return true;
  } catch (error) {
    if (updateStatus) {
      copyStatus.textContent = url;
    }
    return false;
  }
}

function isLikelyMobileShare() {
  return window.matchMedia && (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(max-width: 680px)").matches
  );
}

async function shareHomesteadRecord() {
  await copyShareLink(false);
  const image = savePlanImage({ download: false });
  const url = "https://worldofhomecraft.com";
  let shared = false;

  if (isLikelyMobileShare() && navigator.share) {
    try {
      const blob = await canvasToBlob(image.canvas, image.dataUrl);
      const file = typeof File === "function" ? new File([blob], image.filename, { type: "image/png" }) : null;
      const shareData = {
        title: "World of Homecraft",
        text: t("copied"),
        url
      };

      if (file && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
        shareData.files = [file];
      }

      await navigator.share(shareData);
      shared = true;

      if (!shareData.files) {
        downloadPlanImage(image);
      }
    } catch (error) {
      shared = false;
    }
  }

  if (!shared) {
    downloadPlanImage(image);
  }

  copyStatus.textContent = t("copied");
}

generateBtn.addEventListener("click", generatePlan);
saveBtn.addEventListener("click", shareHomesteadRecord);
classSelect.addEventListener("change", generatePlan);
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  updateStaticText();
  copyStatus.textContent = "";
  renderCurrentPlan();
});

updateStaticText();
generatePlan();
