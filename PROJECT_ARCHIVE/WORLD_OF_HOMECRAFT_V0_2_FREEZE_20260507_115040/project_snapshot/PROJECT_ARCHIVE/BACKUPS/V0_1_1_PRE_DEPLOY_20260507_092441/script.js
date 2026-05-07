const plans = {
  warlock: {
    className: "术士",
    themes: ["暗影契约藏书室", "邪能烛光会客厅", "暮色召唤小屋"],
    furniture: ["邪能烛台", "符文法阵地毯", "恶魔学识书架", "紫焰壁灯", "黑檀炼金桌", "虚空水晶柜"],
    coords: ["影月谷 48.2, 72.5", "达拉然 44.1, 37.8", "破碎海滩 39.5, 31.2", "逆风小径 46.8, 78.0"],
    style: "以深色木材、紫色火光和邪能绿点缀为主，中心区域放置法阵地毯，边角用烛台和卷轴制造仪式感。整体适合偏神秘、压低照明的私人研究空间。",
    rumors: ["附近居民已经习惯凌晨三点的低语声。", "有人说地下室不止住着主人一个。", "信使拒绝把包裹送到法阵中央。", "邻居认为这里的硫磺味已经超出装修范畴。", "酒馆里传言书架后面藏着一扇会呼吸的门。", "清洁工坚称蜡烛会自己重新点燃。", "有个学徒进去借书，出来时多了一条影子。", "门口的地毯据说会判断访客是否值得献祭。"],
    affixes: ["虚空传送门", "传说级藏书区", "恶魔契约角", "灵魂碎片保险柜", "邪能壁炉", "禁忌召唤间", "暗影密语书桌"]
  },
  paladin: {
    className: "圣骑士",
    themes: ["圣光誓约礼拜厅", "金辉守护者宅邸", "白银壁炉会堂"],
    furniture: ["白银圣徽挂饰", "金边长椅", "圣光讲台", "晨光壁毯", "骑士盾牌陈列架", "祝福蜡烛台"],
    coords: ["暴风城 42.6, 75.1", "提尔之手 76.3, 48.9", "圣光礼拜堂 75.0, 52.6", "晶歌森林 54.2, 41.7"],
    style: "选择白石、金边和暖色光源，入口放圣徽挂饰，中央安排讲台或长桌，两侧用长椅形成庄重秩序。空间要明亮、对称，突出守护与誓约感。",
    rumors: ["路过的卫兵会下意识站直。", "据说这里的椅子坐久了会想忏悔。", "邻居抱怨夜里太亮，像太阳忘了下班。", "每个杯垫都被摆得像军令一样整齐。", "酒馆老板说屋主连扫帚都给了祝福。", "有冒险者在门口脱帽，结果只是来问路。", "孩子们相信这里的壁炉能赶走噩梦。", "有人怀疑大厅中央的长椅比审判还严肃。"],
    affixes: ["圣光礼拜角", "誓约长廊", "净化圣泉", "骑士荣誉墙", "公会会议厅", "祝福餐桌", "黎明祈祷席"]
  },
  rogue: {
    className: "盗贼",
    themes: ["暗巷战利品密室", "午夜潜行公寓", "黑市情报工作间"],
    furniture: ["暗巷工具桌", "锁箱陈列架", "深色帷幕", "匕首展示柜", "旧木情报板", "黑市账本桌"],
    coords: ["拉文霍德庄园 71.4, 45.2", "伯拉勒斯 56.0, 70.4", "吉尔尼斯 38.8, 62.0", "藏宝海湾 42.1, 73.5"],
    style: "用深色帷幕分隔视线，把工具桌靠墙摆放，锁箱和展示柜集中在低光角落。整体保持紧凑、隐蔽、可快速行动的感觉，适合做情报据点。",
    rumors: ["没人知道正门到底是不是正门。", "有信使把包裹放下就走，连收据都不敢要。", "酒馆里都说这里的锁比主人更会说话。", "邻居听见金币声，却从没见过客人进出。", "有一面墙看起来很普通，因此最可疑。", "据说餐桌下面藏着三份不同身份的账本。", "巡逻兵每次路过都会忘记自己要查什么。", "有人在门口等了半小时，才发现门铃是假的。"],
    affixes: ["可疑地下通道", "黑市暗门", "PvP 奖杯墙", "锁箱收藏区", "隐藏地下室", "密探情报桌", "影步逃生窗"]
  },
  shaman: {
    className: "萨满",
    themes: ["四元素静修庭", "风暴图腾木屋", "流水火石仪式间"],
    furniture: ["元素图腾组", "风暴鼓", "流水石盆", "火焰盆架", "兽皮圆毯", "雷鸣石柱"],
    coords: ["纳格兰 55.2, 36.7", "雷霆崖 41.8, 58.3", "瓦丝琪尔 49.4, 42.1", "奥格瑞玛 37.9, 87.4"],
    style: "围绕四元素做分区：图腾作为竖向焦点，石盆和火盆形成水火平衡，地面铺兽皮或圆毯。材质以木、石、皮革为主，氛围自然但有仪式秩序。",
    rumors: ["天气预报在这栋房子附近基本失效。", "水盆偶尔会对客人提出意见。", "邻居已经分不清打雷和屋主搬椅子的声音。", "每个图腾都像知道一点内幕。", "有人说火盆和水盆曾经吵了一整晚。", "信使把信交给图腾后竟然收到了点头回应。", "酒馆里传言这里的地板会自己找平衡。", "屋主不在时，风也会替他开门。"],
    affixes: ["元素议会席", "雷霆冥想区", "先祖低语墙", "潮汐净化盆", "熔岩暖炉", "风暴观测台", "图腾收藏柱"]
  },
  deathKnight: {
    className: "死亡骑士",
    themes: ["黑锋寒霜军械室", "冰冠静默宅邸", "符文壁炉墓室"],
    furniture: ["黑锋符文桌", "寒霜火盆", "亡者旗帜", "暗钢武器架", "冰蓝符文地砖", "荒芜王座椅"],
    coords: ["阿彻鲁斯 52.4, 34.5", "冰冠冰川 63.1, 24.8", "东瘟疫之地 35.6, 68.4", "龙骨荒野 56.7, 31.9"],
    style: "以暗钢、石墙和冰蓝光源压住空间温度，武器架与符文桌放在主视觉位置，旗帜拉高垂直线条。整体保持冷峻、克制，像一间可居住的黑锋据点。",
    rumors: ["这里的火盆从来没有温度。", "半夜会传出金属拖地声。", "邻居怀疑地下埋着什么东西。", "没人敢在这里待到午夜之后。", "送奶工说门口的霜比冬幕节还准时。", "有冒险者坐过那把椅子，三天没说暖和。", "酒馆里传言墙上的旗帜会记住每个访客。", "壁炉旁边最热闹的时候，通常一个活人也没有。"],
    affixes: ["冰封武器库", "亡者纪念墙", "黑锋审判席", "符文熔炉角", "寒霜王座位", "灵魂封存柜", "天灾战旗廊"]
  },
  warrior: {
    className: "战士",
    themes: ["铁红战旗大厅", "角斗冠军训练馆", "炉火兵器宅邸"],
    furniture: ["战旗挂墙", "双手斧武器架", "铁砧修理台", "冠军圆桌", "厚皮训练假人", "红毯荣誉阶"],
    coords: ["奥格瑞玛 50.8, 72.1", "暴风城 74.3, 59.8", "勇气试炼 45.0, 64.4", "阿拉希高地 69.1, 35.6"],
    style: "铁、皮革和红色旗帜构成主调，武器架要放在一眼能看到的位置，训练区留出完整动线。整体像一座能开会、能备战、也能展示胜利的战士大厅。",
    rumors: ["这里的门轴听起来像开战号角。", "邻居说每次关门都像攻城开始。", "训练假人比很多冒险者更有资历。", "酒馆里传言餐桌曾经被当成盾牌用过。", "没人敢把杯子放在战旗下面。", "有个客人问路，最后被安排做了三组热身。", "铁砧旁边的凳子据说只欢迎真正的勇士。", "墙上的武器看起来都在等一个理由。"],
    affixes: ["角斗士备战间", "战吼回音厅", "PvP 奖杯墙", "传奇武器架", "铁血公会会议厅", "决斗训练圈", "战旗收藏廊"]
  },
  hunter: {
    className: "猎人",
    themes: ["森林追踪者木屋", "荒野兽栏小院", "鹰眼狩猎营地"],
    furniture: ["兽栏围栏", "皮革睡垫", "弓箭陈列墙", "篝火料理台", "木桩地图桌", "猎鹰栖架"],
    coords: ["灰谷 42.5, 51.4", "纳格兰 63.2, 38.8", "至高岭 55.9, 72.0", "洛克莫丹 35.1, 47.3"],
    style: "用原木、兽皮、绿植和开放式院落制造野外营地感，家具不要过度对称，保留像临时扎营一样的松弛秩序。宠物区和装备区分开会更像真实猎人之家。",
    rumors: ["宠物区面积据说已经超过主人卧室。", "有人看到一只熊占用了餐桌主位。", "肉干失踪案至今没有破案。", "邻居投诉半夜总有狼嚎声。", "信使会先确认门口那只猫头鹰是不是管家。", "屋里的脚印种类比旅店客人还多。", "酒馆里传言厨房门只听宠物的话。", "弓架旁的灰尘从来没有机会落稳。"],
    affixes: ["稀有宠物兽栏", "猎鹰观察台", "荒野烹饪角", "足迹追踪地图", "巨兽战利品墙", "森林隐蔽入口", "箭袋收藏柜"]
  },
  mage: {
    className: "法师",
    themes: ["奥术星图书房", "传送门会客厅", "蓝紫水晶高塔"],
    furniture: ["奥术星图桌", "蓝晶法杖架", "悬浮书本堆", "传送门圆毯", "魔法茶具台", "紫晶壁灯"],
    coords: ["达拉然 49.6, 47.2", "艾萨拉 59.3, 21.8", "苏拉玛 42.0, 61.5", "碧蓝林海 39.8, 62.4"],
    style: "奥术蓝和紫色光晕是核心，书桌与星图放在主位，周围用悬浮书本、水晶和传送门元素制造高阶施法者的秩序感。空间要干净、聪明、带一点炫耀。",
    rumors: ["访客抱怨厕所门偶尔会随机传送。", "据说茶壶会自己漂浮倒茶。", "有人误入地下室后迟到了三天。", "书架之间经常发生奥术辩论。", "邻居说夜里窗户里能看到不属于本地的星空。", "信使每次敲门前都会确认自己还在同一座城市。", "酒馆里传言这里的楼梯会挑选目的地。", "有个学徒声称扫帚比他更懂奥术。"],
    affixes: ["私人传送门", "奥术星图穹顶", "传说级藏书区", "变羊实验角", "魔法甜点桌", "水晶充能柱", "时间扭曲钟"]
  },
  priest: {
    className: "牧师",
    themes: ["圣白祈祷室", "暗影忏悔书房", "晨光治愈会客厅"],
    furniture: ["白纱帷幔", "金边祈祷椅", "暗影烛台", "治愈花瓶", "双面圣典架", "柔光壁灯"],
    coords: ["暴风城 49.4, 44.8", "幽暗城遗址 61.2, 39.7", "沙塔斯 53.0, 42.6", "苏拉玛 36.4, 48.2"],
    style: "用圣白金光和紫灰暗影做双主题，一侧明亮柔和，一侧克制低光，中间用书架或帷幔过渡。这样既有治愈感，也保留牧师职业的精神张力。",
    rumors: ["访客进门会自动压低声音。", "有人说镜子里偶尔会给出人生建议。", "邻居分不清这里是在祈祷还是在开会。", "暗影角落总比房间其他地方冷半拍。", "酒馆里传言祈祷椅能听懂叹气。", "信使离开时总觉得自己被原谅了一次。", "白色帷幔从不沾灰，理由没人敢问。", "有人看见圣典自己翻到了该看的那一页。"],
    affixes: ["神圣告解室", "暗影低语角", "治愈冥想席", "圣典收藏墙", "灵魂安抚区", "晨光祈祷窗", "虚空忏悔镜"]
  },
  druid: {
    className: "德鲁伊",
    themes: ["梦境树屋庭院", "月光自然温室", "野性变形客厅"],
    furniture: ["活木长桌", "月井水盆", "藤蔓吊灯", "野性皮毯", "梦境花架", "橡木储物柜"],
    coords: ["月光林地 44.4, 45.9", "瓦尔莎拉 54.1, 73.2", "翡翠梦境 50.6, 49.0", "海加尔山 61.8, 23.5"],
    style: "自然绿和月光金适合做柔和层次，植物、活木和水盆要占据主要视觉。家具像从树屋里自然长出来，越少直线硬边，越有德鲁伊的梦境感。",
    rumors: ["有人怀疑屋里的植物会偷偷移动位置。", "访客总会莫名其妙在地板上睡着。", "没人能解释为什么屋里永远有月光。", "地毯上偶尔会长出小蘑菇。", "邻居说窗外那棵树昨天还不在那里。", "酒馆里传言藤蔓会把乱放的鞋拖走。", "信使每次来都被鸟群认真审视。", "有人听见月井在夜里轻轻打哈欠。"],
    affixes: ["翡翠梦境阳台", "月井疗愈区", "变形休息垫", "古树守护门", "自然药草温室", "星辰观景台", "野性爪痕墙"]
  },
  monk: {
    className: "武僧",
    themes: ["青竹静心茶室", "玉绿练功庭", "云端酒仙小馆"],
    furniture: ["青竹屏风", "玉石茶桌", "训练木桩", "酒仙陶坛", "禅意蒲团", "云纹灯笼"],
    coords: ["昆莱山 52.1, 46.8", "翡翠林 57.6, 45.1", "四风谷 53.4, 51.7", "迷踪岛 42.7, 67.9"],
    style: "青竹、玉绿和暖木色组成主视觉，茶桌居中，练功木桩放在侧边，留出呼吸感和动线。空间不需要堆满，越克制越像真正的武僧居所。",
    rumors: ["这里的茶香能让吵架的人忘词。", "有人说训练木桩比导师还严格。", "酒坛旁边总会多出一个空杯子。", "邻居听见晨钟后开始主动早起。", "信使送完信顺便学了两招站桩。", "蒲团看似普通，坐下就不想谈房租。", "酒馆里传言屏风后面藏着一只很懂礼貌的扫帚。", "屋主说是练功声，墙壁表示需要休息。"],
    affixes: ["禅意冥想席", "酒仙私藏坛", "青竹练功庭", "玉珑祝福角", "滚地翻动线", "云端茶会桌", "晨钟静修廊"]
  },
  demonHunter: {
    className: "恶魔猎手",
    themes: ["邪绿暗焰训练场", "伊利达雷猎魔居所", "碎刃眼棱密室"],
    furniture: ["邪能火盆", "战刃陈列架", "暗焰石台", "恶魔皮革座椅", "绿色水晶灯", "破碎锁链墙"],
    coords: ["马顿 48.9, 52.3", "黑暗神殿 71.5, 46.1", "破碎海滩 45.7, 61.4", "费伍德森林 38.5, 59.8"],
    style: "邪绿暗焰要足够锐利，战刃和锁链形成强烈轮廓，家具保持低矮和攻击性。整体像猎魔训练场，不追求舒适，追求压迫感和速度感。",
    rumors: ["路过的人总觉得墙上有东西在盯着自己。", "邪能火盆把普通影子照得很不普通。", "邻居说这里的裂缝看起来不像装修失误。", "没人愿意背对战刃展示墙。", "信使每次送信都把字写得格外工整。", "酒馆里传言沙发坐垫曾经被审判过。", "有客人问能不能开窗，屋主说裂痕已经够通风。", "门口的绿色光亮足以让醉汉瞬间清醒。"],
    affixes: ["眼棱训练线", "战刃收藏墙", "邪能监牢角", "恶魔战利品柜", "暗焰冥想台", "伊利达雷誓约廊", "碎刃逃生门"]
  },
  evoker: {
    className: "唤魔师",
    themes: ["龙鳞青铜观景厅", "翡翠守护书房", "五色龙誓会客室"],
    furniture: ["龙鳞屏风", "青铜沙漏桌", "翡翠水晶盆", "龙翼纹地毯", "誓约圆桌", "宝石孵化架"],
    coords: ["禁忌离岛 47.2, 59.5", "瓦德拉肯 58.8, 37.6", "欧恩哈拉平原 62.4, 72.3", "碧蓝林海 45.5, 41.2"],
    style: "青铜与翡翠要交替出现，圆桌代表龙族誓约，水晶和沙漏制造时间与生命的双重主题。空间适合明亮、开阔，带一点巨龙收藏家的奢华感。",
    rumors: ["有人说客厅的沙漏比管家还准时。", "龙鳞屏风在烛光下像在眨眼。", "邻居坚称屋顶偶尔传来翅膀声。", "信使把包裹放下时会先向圆桌点头。", "酒馆里传言这里的椅子按龙族颜色排资历。", "宝石架旁边总能听见轻微的呼吸声。", "有人在这里迟到后解释说时间线不同。", "翡翠水晶盆看起来比很多治疗师更可靠。"],
    affixes: ["巨龙收藏区", "青铜时间沙漏", "翡翠疗愈巢", "五色誓约桌", "龙鳞展示墙", "幼龙观察台", "宝石孵化角"]
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
const classSelect = document.querySelector("#classSelect");
const generateBtn = document.querySelector("#generateBtn");
const saveBtn = document.querySelector("#saveBtn");
const className = document.querySelector("#className");
const serialNumber = document.querySelector("#serialNumber");
const themeName = document.querySelector("#themeName");
const furnitureList = document.querySelector("#furnitureList");
const coordsList = document.querySelector("#coordsList");
const affixList = document.querySelector("#affixList");
const styleDescription = document.querySelector("#styleDescription");
const rumorList = document.querySelector("#rumorList");
const npcName = document.querySelector("#npcName");
const npcComment = document.querySelector("#npcComment");

let currentPlan = null;

function pickItems(items, count) {
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
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
    badge.innerHTML = `<span class="affix-rarity">${affix.rarity}</span>${affix.name}`;
    affixList.appendChild(badge);
  });
}

function generateAffixes(plan) {
  const count = Math.floor(Math.random() * 3) + 2;
  const meta = classMeta[classSelect.value];
  const selected = pickItems(plan.affixes, count).map((name) => ({
    name,
    rarity: pickWeighted(rarityPool)
  }));

  if (Math.random() < 0.08) {
    selected[selected.length - 1] = {
      name: pickItems(meta.mythicAffixes, 1)[0],
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
    className: plan.className,
    serial: generateSerial(),
    theme: pickItems(plan.themes, 1)[0],
    furniture: pickItems(plan.furniture, 3),
    coords: pickItems(plan.coords, 3),
    affixes,
    style: plan.style,
    rumors: pickItems(plan.rumors, Math.floor(Math.random() * 2) + 2),
    npc
  };

  document.body.dataset.theme = key;
  className.textContent = `${currentPlan.className}方案`;
  serialNumber.textContent = currentPlan.serial;
  themeName.textContent = currentPlan.theme;
  renderList(furnitureList, currentPlan.furniture);
  renderList(coordsList, currentPlan.coords);
  renderAffixes(currentPlan.affixes);
  styleDescription.textContent = currentPlan.style;
  renderList(rumorList, currentPlan.rumors);
  npcName.textContent = `${currentPlan.npc.name}:`;
  npcComment.textContent = `“${currentPlan.npc.comment}”`;
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
  ctx.fillText("魔坊世界", padding, y);

  y += 12;
  y += 66;
  ctx.fillStyle = accentTwo;
  ctx.font = "800 30px sans-serif";
  ctx.fillText(`${currentPlan.className} · 职业家宅方案`, padding, y);

  y += 76;
  ctx.fillStyle = "#f4ead8";
  ctx.font = "900 68px sans-serif";
  y = drawWrappedText(ctx, currentPlan.theme, padding, y, width - padding * 2 - 70, 78, 3) + 26;

  ctx.fillStyle = "rgba(215, 173, 83, 0.9)";
  ctx.fillRect(padding, y, width - padding * 2, 3);
  y += 56;

  y = drawSection(ctx, "核心家具", currentPlan.furniture, padding, y, width - padding * 2);
  y = drawSection(ctx, "摆放坐标", currentPlan.coords, padding, y, width - padding * 2);

  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 24px sans-serif";
  ctx.fillText("装备词缀", padding, y);
  y += 42;
  let badgeX = padding;
  currentPlan.affixes.forEach((affix) => {
    const badgeWidth = drawPosterBadge(ctx, `${affix.rarity} · ${affix.name}`, affix.rarity, badgeX, y);
    badgeX += badgeWidth + 16;
    if (badgeX > width - padding - 260) {
      badgeX = padding;
      y += 56;
    }
  });
  y += 72;

  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 24px sans-serif";
  ctx.fillText("NPC 点评", padding, y);
  y += 42;
  ctx.fillStyle = accentTwo;
  ctx.font = "800 28px sans-serif";
  ctx.fillText(`${currentPlan.npc.name}:`, padding, y);
  ctx.fillStyle = "rgba(244, 234, 216, 0.86)";
  ctx.font = "26px sans-serif";
  y = drawWrappedText(ctx, `“${currentPlan.npc.comment}”`, padding + 132, y, width - padding * 2 - 132, 36, 3) + 20;

  ctx.fillStyle = "#d7ad53";
  ctx.font = "700 24px sans-serif";
  ctx.fillText("坊间传闻", padding, y);
  y += 42;
  ctx.fillStyle = "#d7c6a5";
  ctx.font = "26px sans-serif";
  currentPlan.rumors.forEach((rumor) => {
    y = drawWrappedText(ctx, `✦ ${rumor}`, padding, y, width - padding * 2, 38, 2) + 8;
  });
  y += 10;

  ctx.fillStyle = "rgba(244, 234, 216, 0.82)";
  ctx.font = "22px sans-serif";
  drawWrappedText(ctx, currentPlan.style, padding, y + 34, width - padding * 2, 34, 5);

  const link = document.createElement("a");
  link.download = `wow-home-plan-${currentPlan.className}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

generateBtn.addEventListener("click", generatePlan);
saveBtn.addEventListener("click", savePlanImage);
classSelect.addEventListener("change", generatePlan);

generatePlan();
