// 生成离线可用的时尚款式 SVG 预览图（确保本地打开零破图，且每款配色与版型不同）
function makeLookbookSvg(bg1, bg2, garmentColor, accentColor, styleType, badgeLabel) {
  const shapes = {
    cardigan: `<path d="M95,70 L130,55 L150,75 L170,55 L205,70 L225,160 L198,166 L190,115 L190,245 L153,245 L153,125 L147,125 L147,245 L110,245 L110,115 L102,166 L75,160 Z" fill="${garmentColor}" stroke="rgba(15,23,42,0.12)" stroke-width="2"/>
               <circle cx="150" cy="135" r="3" fill="${accentColor}"/>
               <circle cx="150" cy="162" r="3" fill="${accentColor}"/>
               <circle cx="150" cy="189" r="3" fill="${accentColor}"/>`,
    sweater: `<path d="M92,72 L128,54 Q150,70 172,54 L208,72 L230,175 L200,182 L188,118 L188,242 L112,242 L112,118 L100,182 L70,175 Z" fill="${garmentColor}" stroke="rgba(15,23,42,0.12)" stroke-width="2"/>
              <path d="M128,54 Q150,76 172,54" fill="none" stroke="${accentColor}" stroke-width="4"/>`,
    dress: `<path d="M115,60 L135,54 Q150,72 165,54 L185,60 L198,118 L180,124 L212,265 L88,265 L120,124 L102,118 Z" fill="${garmentColor}" stroke="rgba(15,23,42,0.12)" stroke-width="2"/>
            <rect x="118" y="132" width="64" height="7" rx="3" fill="${accentColor}" opacity="0.85"/>`,
    coat: `<path d="M88,68 L128,52 L150,82 L172,52 L212,68 L234,188 L202,194 L192,120 L198,268 L102,268 L108,120 L98,194 L66,188 Z" fill="${garmentColor}" stroke="rgba(15,23,42,0.15)" stroke-width="2"/>
           <path d="M128,52 L145,115 L150,82 L155,115 L172,52" fill="${accentColor}" opacity="0.5"/>`,
    hoodie: `<path d="M120,42 Q150,28 180,42 L208,72 L228,176 L198,182 L188,120 L188,242 L112,242 L112,120 L102,182 L72,176 L92,72 Z" fill="${garmentColor}" stroke="rgba(15,23,42,0.12)" stroke-width="2"/>
             <rect x="125" y="178" width="50" height="34" rx="6" fill="${accentColor}" opacity="0.35"/>`
  };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 350">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg1}"/>
        <stop offset="100%" stop-color="${bg2}"/>
      </linearGradient>
    </defs>
    <rect width="300" height="350" fill="url(#g)"/>
    <circle cx="245" cy="65" r="46" fill="rgba(255,255,255,0.35)"/>
    <circle cx="55" cy="295" r="60" fill="rgba(255,255,255,0.28)"/>
    ${shapes[styleType] || shapes.sweater}
    <text x="150" y="318" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="rgba(15,23,42,0.45)">${badgeLabel}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

const PRODUCTS = [
  {
    id: "ZY-10841",
    title: "【11/16-11/18一折专区2件9折】温柔显瘦微露肩蕾丝针织开衫女秋冬",
    shop: "小宅女 HADOGGYSTUDIO",
    category: "针织衫",
    price: 109,
    originPrice: 159,
    favCount: 211,
    favDelta7d: 68,
    sales30d: 156,
    conversionRate: "14.2%",
    rankInShop: "#2",
    launchDate: "2026-11-10",
    daysOnline: 4,
    modeTags: ["surge", "hot"],
    badge: { type: "surge", text: "📈 7日飙升 +68%" },
    colors: [
      { name: "奶杏白", hex: "#f5efe6" },
      { name: "雾霾蓝", hex: "#7c9cb8" },
      { name: "炭黑色", hex: "#2f3542" }
    ],
    tags: ["法式慵懒", "蕾丝拼接", "修身显瘦", "秋冬内搭"],
    img: makeLookbookSvg("#f8ede3", "#ead7c3", "#fffaf3", "#c89f7b", "cardigan", "CREAM KNIT CARDIGAN"),
    altImgs: [
      makeLookbookSvg("#e8eff6", "#d2e0ee", "#7c9cb8", "#334155", "cardigan", "HAZE BLUE"),
      makeLookbookSvg("#eceef2", "#d8dce3", "#374151", "#9ca3af", "cardigan", "CHARCOAL"),
      makeLookbookSvg("#f5f0eb", "#e6ddd3", "#fffaf3", "#a88463", "sweater", "DETAIL VIEW")
    ],
    trend14d: [
      { day: "11/01", fav: 42, sales: 4 }, { day: "11/03", fav: 68, sales: 7 },
      { day: "11/05", fav: 95, sales: 11 }, { day: "11/07", fav: 124, sales: 14 },
      { day: "11/09", fav: 143, sales: 16 }, { day: "11/11", fav: 179, sales: 24 },
      { day: "11/13", fav: 211, sales: 29 }
    ],
    reviews: [
      { word: "版型显瘦", count: 48 },
      { word: "面料软糯不扎", count: 36 },
      { word: "蕾丝很精致", count: 29 },
      { word: "颜色无色差", count: 19 },
      { word: "适合搭半身裙", count: 14 }
    ],
    aiReport: {
      silhouette: "采用微收腰短款H-X版型，衣长50cm拉高腰线，肩部斜裁微露锁骨，兼顾显瘦与纯欲氛围。",
      fabric: "42%粘纤 + 30%锦纶 + 28%聚酯纤维包芯纱，袖口与领口拼接法式睫毛蕾丝，克重适中。",
      sellingPoint: "“微露肩+蕾丝花边”差异化明显，客单价卡在109元高转化区间，复购率与连带率高。",
      suggestion: "建议培创开发时增加【花灰】与【酒红】圣诞/新年配色，袖长可加长2cm提升包裹感。"
    }
  },
  {
    id: "ZY-10842",
    title: "11/16 20:00PM上新【重工】半高领软糯羊绒感长袖打底针织衫女",
    shop: "米上衣",
    category: "针织衫",
    price: 109,
    originPrice: 149,
    favCount: 217,
    favDelta7d: 54,
    sales30d: 198,
    conversionRate: "16.5%",
    rankInShop: "#1",
    launchDate: "2026-11-12",
    daysOnline: 2,
    modeTags: ["new", "hot"],
    badge: { type: "hot", text: "🔥 店内销量TOP1" },
    colors: [
      { name: "燕麦灰", hex: "#b8b4ad" },
      { name: "奶白色", hex: "#faf8f5" },
      { name: "可可棕", hex: "#7b5e4c" },
      { name: "经典黑", hex: "#22252a" }
    ],
    tags: ["半高领", "亲肤打底", "高弹力", "通勤百搭"],
    img: makeLookbookSvg("#e9edf2", "#d8dfe8", "#9ea3ab", "#4b5563", "sweater", "SOFT TURTLENECK"),
    altImgs: [
      makeLookbookSvg("#f4efe9", "#e5ddd3", "#faf8f5", "#9ca3af", "sweater", "MILK WHITE"),
      makeLookbookSvg("#efe7e0", "#decbb9", "#7b5e4c", "#4a3728", "sweater", "COCOA BROWN"),
      makeLookbookSvg("#e5e7eb", "#d1d5db", "#22252a", "#6b7280", "sweater", "BLACK")
    ],
    trend14d: [
      { day: "11/01", fav: 55, sales: 8 }, { day: "11/03", fav: 84, sales: 12 },
      { day: "11/05", fav: 112, sales: 15 }, { day: "11/07", fav: 138, sales: 19 },
      { day: "11/09", fav: 163, sales: 22 }, { day: "11/11", fav: 190, sales: 28 },
      { day: "11/13", fav: 217, sales: 34 }
    ],
    reviews: [
      { word: "非常亲肤", count: 62 },
      { word: "单穿内搭都可", count: 44 },
      { word: "领口不勒脖子", count: 31 },
      { word: "洗后不变形", count: 22 }
    ],
    aiReport: {
      silhouette: "基础微宽松正肩版型，半高领高度5.5cm自然堆叠，修饰颈部线条。",
      fabric: "高支仿羊绒晴纶混纺，表面有细腻绒感，抗起球等级达3.5级。",
      sellingPoint: "秋冬刚需高复购打底单品，4色齐发拉高多件购买率。",
      suggestion: "可作为店铺引流基础款，搭配大衣做组合套餐销售。"
    }
  },
  {
    id: "ZY-10843",
    title: "【11/16-11/18一折专区2件9折】女装法式复古雾霾蓝显白修身针织衫",
    shop: "小宅女 HADOGGYSTUDIO",
    category: "针织衫",
    price: 89.98,
    originPrice: 139,
    favCount: 168,
    favDelta7d: 49,
    sales30d: 124,
    conversionRate: "12.8%",
    rankInShop: "#4",
    launchDate: "2026-11-08",
    daysOnline: 6,
    modeTags: ["surge"],
    badge: { type: "surge", text: "📈 收藏飙升 +49" },
    colors: [
      { name: "雾霾蓝", hex: "#5b7fb2" },
      { name: "奶黄色", hex: "#f5e3a1" }
    ],
    tags: ["显白冷色调", "法式坑条", "微喇叭袖"],
    img: makeLookbookSvg("#e4ecf7", "#cddcf0", "#5b7fb2", "#1e3a8a", "sweater", "VINTAGE BLUE KNIT"),
    altImgs: [
      makeLookbookSvg("#fbf5df", "#f3e6b8", "#f5e3a1", "#b45309", "sweater", "BUTTER YELLOW"),
      makeLookbookSvg("#e4ecf7", "#cddcf0", "#5b7fb2", "#1e3a8a", "cardigan", "FRONT DETAIL")
    ],
    trend14d: [
      { day: "11/01", fav: 30, sales: 3 }, { day: "11/03", fav: 48, sales: 5 },
      { day: "11/05", fav: 72, sales: 8 }, { day: "11/07", fav: 96, sales: 11 },
      { day: "11/09", fav: 119, sales: 15 }, { day: "11/11", fav: 145, sales: 19 },
      { day: "11/13", fav: 168, sales: 22 }
    ],
    reviews: [
      { word: "蓝色超级显白", count: 51 },
      { word: "坑条很显瘦", count: 27 },
      { word: "性价比很高", count: 24 }
    ],
    aiReport: {
      silhouette: "纵向坑条纹理视觉纵向拉伸，袖口做微喇叭开叉设计。",
      fabric: "高弹力人棉锦纶混纺，贴身穿着不紧绷。",
      sellingPoint: "89.98元极具价格穿透力，雾霾蓝主图点击率高于均值32%。",
      suggestion: "重点保留低饱和显白蓝，可延伸同色系半身裙套装。"
    }
  },
  {
    id: "ZY-10844",
    title: "【新品首发】学院风撞色菱格拼接针织开衫小个子短款外套女",
    shop: "色小姐",
    category: "外套",
    price: 169,
    originPrice: 229,
    favCount: 145,
    favDelta7d: 31,
    sales30d: 89,
    conversionRate: "10.4%",
    rankInShop: "#3",
    launchDate: "2026-11-13",
    daysOnline: 1,
    modeTags: ["new"],
    badge: { type: "new", text: "✨ 24h 上新" },
    colors: [
      { name: "鹅黄撞黑", hex: "#facc15" },
      { name: "奶白撞蓝", hex: "#e0f2fe" }
    ],
    tags: ["学院减龄", "撞色拼接", "小个子友好"],
    img: makeLookbookSvg("#fef9c3", "#fde68a", "#eab308", "#1f2937", "cardigan", "PREPPY CARDIGAN"),
    altImgs: [
      makeLookbookSvg("#e0f2fe", "#bae6fd", "#f8fafc", "#1d4ed8", "cardigan", "CREAM BLUE")
    ],
    trend14d: [
      { day: "11/01", fav: 20, sales: 2 }, { day: "11/03", fav: 34, sales: 4 },
      { day: "11/05", fav: 51, sales: 6 }, { day: "11/07", fav: 76, sales: 9 },
      { day: "11/09", fav: 102, sales: 11 }, { day: "11/11", fav: 125, sales: 14 },
      { day: "11/13", fav: 145, sales: 17 }
    ],
    reviews: [
      { word: "很减龄", count: 33 },
      { word: "配百褶裙绝了", count: 21 },
      { word: "厚度正好", count: 16 }
    ],
    aiReport: {
      silhouette: "48cm短款落肩廓形，门襟与袖口黑色滚边增强立体感。",
      fabric: "5针粗棒针提花，手感厚实有筋骨。",
      sellingPoint: "强视觉冲击力撞色主图，适合小红书/抖音种草引流。",
      suggestion: "建议测试【克莱因蓝撞白】新配色，契合冬季圣诞节点。"
    }
  },
  {
    id: "ZY-10845",
    title: "法式赫本风方领收腰针织连衣裙女秋冬显瘦长袖打底中长裙",
    shop: "色小姐",
    category: "连衣裙",
    price: 229,
    originPrice: 299,
    favCount: 196,
    favDelta7d: 45,
    sales30d: 142,
    conversionRate: "13.1%",
    rankInShop: "#1",
    launchDate: "2026-11-05",
    daysOnline: 9,
    modeTags: ["hot", "surge"],
    badge: { type: "hot", text: "🔥 爆款连衣裙" },
    colors: [
      { name: "美拉德棕", hex: "#5c3d2e" },
      { name: "复古黑", hex: "#1f2937" },
      { name: "酒红色", hex: "#7f1d1d" }
    ],
    tags: ["赫本方领", "高腰A字", "美拉德色系", "约会战袍"],
    img: makeLookbookSvg("#f3ebe6", "#e4d5cb", "#5c3d2e", "#d6b8a5", "dress", "HEPBURN KNIT DRESS"),
    altImgs: [
      makeLookbookSvg("#ebedf0", "#d8dce2", "#1f2937", "#9ca3af", "dress", "CLASSIC BLACK"),
      makeLookbookSvg("#f9e8ea", "#f0ced3", "#7f1d1d", "#fca5a5", "dress", "WINE RED")
    ],
    trend14d: [
      { day: "11/01", fav: 60, sales: 6 }, { day: "11/03", fav: 82, sales: 9 },
      { day: "11/05", fav: 108, sales: 12 }, { day: "11/07", fav: 132, sales: 15 },
      { day: "11/09", fav: 151, sales: 18 }, { day: "11/11", fav: 175, sales: 21 },
      { day: "11/13", fav: 196, sales: 25 }
    ],
    reviews: [
      { word: "非常显腰细", count: 57 },
      { word: "裙摆垂感很好", count: 38 },
      { word: "棕色很高级", count: 26 }
    ],
    aiReport: {
      silhouette: "大方领露锁骨+高腰双罗纹收腰+360度伞摆，遮胯显高。",
      fabric: "高密双面针织，垂坠感强且不易起皱。",
      sellingPoint: "200-300元主力高利润价带代表款，毛利率空间大。",
      suggestion: "培创可重点跟进此版型，增加加绒内里应对北方冬季。"
    }
  },
  {
    id: "ZY-10846",
    title: "韩系慵懒风复古印花连帽加绒卫衣女宽松显瘦长袖上衣秋冬款",
    shop: "米上衣",
    category: "卫衣",
    price: 118,
    originPrice: 168,
    favCount: 134,
    favDelta7d: 27,
    sales30d: 112,
    conversionRate: "11.5%",
    rankInShop: "#5",
    launchDate: "2026-11-11",
    daysOnline: 3,
    modeTags: ["new"],
    badge: { type: "new", text: "✨ 上新 3天" },
    colors: [
      { name: "花灰色", hex: "#9ca3af" },
      { name: "藏青色", hex: "#1e3a5f" }
    ],
    tags: ["美式复古", "加绒保暖", "宽松Oversize"],
    img: makeLookbookSvg("#eef1f5", "#dde2ea", "#9ca3af", "#1f2937", "hoodie", "FLEECE HOODIE"),
    altImgs: [
      makeLookbookSvg("#e6ecf5", "#cfdbee", "#1e3a5f", "#93c5fd", "hoodie", "NAVY BLUE")
    ],
    trend14d: [
      { day: "11/01", fav: 28, sales: 4 }, { day: "11/03", fav: 44, sales: 6 },
      { day: "11/05", fav: 63, sales: 9 }, { day: "11/07", fav: 82, sales: 12 },
      { day: "11/09", fav: 98, sales: 14 }, { day: "11/11", fav: 116, sales: 17 },
      { day: "11/13", fav: 134, sales: 20 }
    ],
    reviews: [
      { word: "加绒很暖和", count: 40 },
      { word: "帽子版型挺括", count: 29 },
      { word: "不掉毛", count: 18 }
    ],
    aiReport: {
      silhouette: "落肩宽松廓形，双层定型连帽不塌，下摆螺纹微收。",
      fabric: "420g重磅精梳棉银狐绒，克重足保暖性好。",
      sellingPoint: "百元出头重磅加绒，学生与通勤人群通吃。",
      suggestion: "胸前字母绣花工艺可升级为立体毛巾绣提升质感。"
    }
  },
  {
    id: "ZY-10847",
    title: "赫本风双面羊绒大衣女中长款2026秋冬新款高端过膝毛呢外套",
    shop: "木子家STUDIO",
    category: "外套",
    price: 389,
    originPrice: 599,
    favCount: 182,
    favDelta7d: 41,
    sales30d: 76,
    conversionRate: "9.8%",
    rankInShop: "#1",
    launchDate: "2026-11-06",
    daysOnline: 8,
    modeTags: ["hot"],
    badge: { type: "hot", text: "🏆 高客单爆款" },
    colors: [
      { name: "驼色", hex: "#c19a6b" },
      { name: "玄黑色", hex: "#18181b" }
    ],
    tags: ["100%纯羊毛", "双面呢手工", "系带显瘦"],
    img: makeLookbookSvg("#f6efe8", "#eadbc8", "#c19a6b", "#78350f", "coat", "WOOL OVERCOAT"),
    altImgs: [
      makeLookbookSvg("#eceef2", "#d6dae2", "#18181b", "#52525b", "coat", "OBSIDIAN BLACK")
    ],
    trend14d: [
      { day: "11/01", fav: 50, sales: 3 }, { day: "11/03", fav: 72, sales: 5 },
      { day: "11/05", fav: 96, sales: 7 }, { day: "11/07", fav: 120, sales: 9 },
      { day: "11/09", fav: 141, sales: 10 }, { day: "11/11", fav: 162, sales: 12 },
      { day: "11/13", fav: 182, sales: 15 }
    ],
    reviews: [
      { word: "质感超好", count: 35 },
      { word: "驼色很正", count: 28 },
      { word: "轻盈又保暖", count: 19 }
    ],
    aiReport: {
      silhouette: "经典大翻领配腰带，后背开衩走路带风，适合158-172cm身高。",
      fabric: "澳洲美利奴双面顺毛呢，手工缝制暗线。",
      sellingPoint: "高客单价高GMV贡献款，适合品牌调性提升。",
      suggestion: "可同步开发小个子102cm衣长版本扩大受众。"
    }
  },
  {
    id: "ZY-10848",
    title: "20:00PM上新【白色恋人】显瘦方领修身长袖连衣裙女秋冬内搭",
    shop: "木子家STUDIO",
    category: "连衣裙",
    price: 79.98,
    originPrice: 119,
    favCount: 158,
    favDelta7d: 52,
    sales30d: 165,
    conversionRate: "15.1%",
    rankInShop: "#2",
    launchDate: "2026-11-12",
    daysOnline: 2,
    modeTags: ["new", "surge"],
    badge: { type: "surge", text: "📈 7日飙升 +52%" },
    colors: [
      { name: "纯欲白", hex: "#ffffff" },
      { name: "曜石黑", hex: "#111827" }
    ],
    tags: ["甜辣纯欲", "弹力修身", "性价比之王"],
    img: makeLookbookSvg("#f3f4f6", "#e5e7eb", "#ffffff", "#94a3b8", "dress", "WHITE BODYCON"),
    altImgs: [
      makeLookbookSvg("#e5e7eb", "#cbd5e1", "#111827", "#64748b", "dress", "BLACK BODYCON")
    ],
    trend14d: [
      { day: "11/01", fav: 22, sales: 5 }, { day: "11/03", fav: 40, sales: 9 },
      { day: "11/05", fav: 64, sales: 14 }, { day: "11/07", fav: 89, sales: 18 },
      { day: "11/09", fav: 106, sales: 21 }, { day: "11/11", fav: 132, sales: 26 },
      { day: "11/13", fav: 158, sales: 31 }
    ],
    reviews: [
      { word: "白而不透", count: 44 },
      { word: "拉长腿部比例", count: 31 },
      { word: "79元太香了", count: 29 }
    ],
    aiReport: {
      silhouette: "微弧形方领+高弹贴合腰臀线，下摆微A字不挑腿型。",
      fabric: "320g磨毛德绒双层不透面料。",
      sellingPoint: "极致性价比引流爆款，日均收藏增速位居全库前列。",
      suggestion: "注意白色面料防透度品控，建议内衬加厚。"
    }
  }
];

// 全局状态
const state = {
  activeTab: "products",
  subMode: "all",
  shop: "all",
  category: "all",
  price: "all",
  sort: "fav_desc",
  search: "",
  view: "grid",
  favorites: new Set(["ZY-10841"]),
  compareIds: [],
  currentModalId: null
};

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  renderShopStrip();
  bindEvents();
  renderProducts();
});

function renderShopStrip() {
  const counts = {};
  PRODUCTS.forEach(p => {
    counts[p.shop] = (counts[p.shop] || 0) + 1;
  });
  const shops = Object.entries(counts);
  const strip = document.getElementById("shopStrip");
  strip.innerHTML = [
    `<button class="shop-chip ${state.shop === "all" ? "active" : ""}" data-shop="all">全部监控店铺 <span class="s-cnt">${PRODUCTS.length}</span></button>`,
    ...shops.map(([name, cnt]) =>
      `<button class="shop-chip ${state.shop === name ? "active" : ""}" data-shop="${name}">${name} <span class="s-cnt">${cnt}</span></button>`
    )
  ].join("");

  strip.querySelectorAll(".shop-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.shop = btn.dataset.shop;
      renderShopStrip();
      renderProducts();
    });
  });
}

function getFilteredProducts() {
  let list = PRODUCTS.filter(p => {
    if (state.subMode !== "all" && state.subMode !== "compare") {
      if (!p.modeTags.includes(state.subMode)) return false;
    }
    if (state.shop !== "all" && p.shop !== state.shop) return false;
    if (state.category !== "all" && p.category !== state.category) return false;
    if (state.price === "0-100" && p.price >= 100) return false;
    if (state.price === "100-200" && (p.price < 100 || p.price > 200)) return false;
    if (state.price === "200+" && p.price <= 200) return false;
    if (state.search.trim()) {
      const q = state.search.trim().toLowerCase();
      const hay = `${p.title} ${p.shop} ${p.id} ${p.tags.join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  switch (state.sort) {
    case "fav_desc": list.sort((a, b) => b.favCount - a.favCount); break;
    case "surge_desc": list.sort((a, b) => b.favDelta7d - a.favDelta7d); break;
    case "sales_desc": list.sort((a, b) => b.sales30d - a.sales30d); break;
    case "newest": list.sort((a, b) => a.daysOnline - b.daysOnline); break;
    case "price_asc": list.sort((a, b) => a.price - b.price); break;
  }
  return list;
}

function makeMiniSparkSvg(trend) {
  const vals = trend.map(t => t.fav);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const pts = vals.map((v, i) => {
    const x = (i / (vals.length - 1)) * 56;
    const y = 16 - ((v - min) / (max - min || 1)) * 13;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg width="58" height="18" viewBox="0 0 58 18">
    <polyline fill="none" stroke="#10b981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" points="${pts}"/>
  </svg>`;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const tableWrap = document.getElementById("productTableWrap");
  const logsView = document.getElementById("logsView");
  const tasksView = document.getElementById("tasksView");
  const empty = document.getElementById("emptyState");

  logsView.classList.add("hidden");
  tasksView.classList.add("hidden");

  if (state.activeTab === "logs") {
    grid.classList.add("hidden");
    tableWrap.classList.add("hidden");
    empty.classList.add("hidden");
    renderLogsView();
    return;
  }
  if (state.activeTab === "tasks") {
    grid.classList.add("hidden");
    tableWrap.classList.add("hidden");
    empty.classList.add("hidden");
    renderTasksView();
    return;
  }

  const list = getFilteredProducts();
  document.getElementById("visibleCount").textContent = list.length;

  if (list.length === 0) {
    grid.classList.add("hidden");
    tableWrap.classList.add("hidden");
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  if (state.view === "grid") {
    grid.classList.remove("hidden");
    tableWrap.classList.add("hidden");
    grid.innerHTML = list.map(p => {
      const isFav = state.favorites.has(p.id);
      const isComp = state.compareIds.includes(p.id);
      const badgeCls = p.badge.type === "hot" ? "badge-hot" : p.badge.type === "new" ? "badge-new" : "badge-surge";
      return `
        <article class="product-card" data-id="${p.id}">
          <div class="card-media">
            <img src="${p.img}" alt="${p.title}" loading="lazy" />
            <div class="media-top-left">
              <span class="${badgeCls}">${p.badge.text}</span>
            </div>
            <div class="media-top-right ${isFav || isComp ? "pinned" : ""}">
              <button class="icon-action fav-btn ${isFav ? "active" : ""}" data-id="${p.id}" title="加入款式库">${isFav ? "♥" : "♡"}</button>
              <button class="icon-action comp-btn ${isComp ? "active" : ""}" data-id="${p.id}" title="加入对比篮">⚖</button>
            </div>
            <div class="media-bottom-left">${p.launchDate.slice(5)} 上新 · ${p.daysOnline}天</div>
            <div class="media-bottom-right" title="${p.colors.length}色可选">
              ${p.colors.map(c => `<span class="swatch-dot" style="background:${c.hex}"></span>`).join("")}
            </div>
          </div>

          <div class="card-body">
            <div class="card-price-row">
              <div class="price-group">
                <span class="price-now">¥${p.price}</span>
                <span class="price-old">¥${p.originPrice}</span>
              </div>
              <span class="growth-pill">7日收藏 +${p.favDelta7d}</span>
            </div>

            <div class="card-title" title="${p.title}">${p.title}</div>

            <div class="card-shop">
              <span class="shop-name-tag">🏪 ${p.shop}</span>
              <span>店内 ${p.rankInShop}</span>
            </div>

            <div class="card-metrics-strip">
              <div class="metric-cell">
                <span class="metric-val">${p.favCount}</span>
                <span class="metric-lbl">总收藏</span>
              </div>
              <div class="metric-cell">
                <span class="metric-val">${p.sales30d}</span>
                <span class="metric-lbl">30日销量</span>
              </div>
              <div class="metric-cell">
                <span class="metric-val">${p.conversionRate}</span>
                <span class="metric-lbl">收藏转化</span>
              </div>
            </div>

            <div class="card-tags-row">
              ${p.tags.slice(0, 3).map(t => `<span class="tag-pill">${t}</span>`).join("")}
            </div>

            <div class="card-footer">
              <div class="mini-spark">
                ${makeMiniSparkSvg(p.trend14d)}
                <span>14日趋势</span>
              </div>
              <span class="btn-detail-link">详情与拆款 ›</span>
            </div>
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll(".product-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".icon-action")) return;
        openDetailModal(card.dataset.id);
      });
    });
  } else {
    grid.classList.add("hidden");
    tableWrap.classList.remove("hidden");
    tableWrap.innerHTML = `
      <table class="data-table">
        <thead>
          <tr>
            <th>款式主图与标题</th>
            <th>所属店铺</th>
            <th>到手价 / 吊牌价</th>
            <th>总收藏 (7日增量)</th>
            <th>30日销量</th>
            <th>收藏转化</th>
            <th>上新时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${list.map(p => `
            <tr data-id="${p.id}">
              <td>
                <div class="table-prod-cell">
                  <img class="table-thumb" src="${p.img}" alt="" />
                  <div>
                    <div style="font-weight:600;margin-bottom:3px;">${p.title}</div>
                    <div style="display:flex;gap:4px;">${p.tags.slice(0, 3).map(t => `<span class="tag-pill">${t}</span>`).join("")}</div>
                  </div>
                </div>
              </td>
              <td>${p.shop}</td>
              <td><strong style="color:#2563eb;">¥${p.price}</strong> <span style="color:#9ca3af;text-decoration:line-through;font-size:11px;">¥${p.originPrice}</span></td>
              <td><strong>${p.favCount}</strong> <span class="growth-pill">+${p.favDelta7d}</span></td>
              <td><strong>${p.sales30d}</strong></td>
              <td>${p.conversionRate}</td>
              <td>${p.launchDate}</td>
              <td><button class="btn-outline-sm">查看详情</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
    tableWrap.querySelectorAll("tbody tr").forEach(tr => {
      tr.addEventListener("click", () => openDetailModal(tr.dataset.id));
    });
  }

  // 绑定卡片快捷按钮
  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.id);
    });
  });

  document.querySelectorAll(".comp-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCompare(btn.dataset.id);
    });
  });
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast("已从培创款式库移除");
  } else {
    state.favorites.add(id);
    showToast("✓ 已加入培创款式库");
  }
  renderProducts();
  if (state.currentModalId === id) updateModalLibraryBtn(id);
}

function toggleCompare(id) {
  const idx = state.compareIds.indexOf(id);
  if (idx >= 0) {
    state.compareIds.splice(idx, 1);
  } else {
    if (state.compareIds.length >= 4) {
      showToast("对比篮最多支持 4 款商品");
      return;
    }
    state.compareIds.push(id);
  }
  document.getElementById("compareCount").textContent = state.compareIds.length;
  renderProducts();
  renderCompareDrawer();
}

function renderCompareDrawer() {
  const drawer = document.getElementById("compareDrawer");
  const grid = document.getElementById("compareGrid");
  if (state.compareIds.length === 0) {
    drawer.classList.add("hidden");
    return;
  }
  drawer.classList.remove("hidden");
  grid.innerHTML = state.compareIds.map(id => {
    const p = PRODUCTS.find(item => item.id === id);
    return `
      <div class="compare-card">
        <img src="${p.img}" alt="" />
        <div class="compare-card-info">
          <div class="compare-card-title">${p.title}</div>
          <div style="font-size:11px;color:#2563eb;font-weight:700;margin-top:2px;">¥${p.price} · 收藏 ${p.favCount} · 销量 ${p.sales30d}</div>
        </div>
        <button class="btn-outline-sm" onclick="toggleCompare('${p.id}')">✕</button>
      </div>
    `;
  }).join("");
}

// ===== 二级详情页 Modal =====
function openDetailModal(id) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;
  state.currentModalId = id;

  document.getElementById("modalShopBreadcrumb").textContent = p.shop;
  document.getElementById("modalIdBreadcrumb").textContent = p.id;
  document.getElementById("modalMainImg").src = p.img;

  const badgeCls = p.badge.type === "hot" ? "badge-hot" : p.badge.type === "new" ? "badge-new" : "badge-surge";
  document.getElementById("modalBadges").innerHTML = `<span class="${badgeCls}">${p.badge.text}</span>`;

  const allImgs = [p.img, ...p.altImgs];
  document.getElementById("modalThumbs").innerHTML = allImgs.map((src, i) => `
    <div class="thumb-item ${i === 0 ? "active" : ""}" data-src="${src}">
      <img src="${src}" alt="" />
    </div>
  `).join("");
  document.querySelectorAll(".thumb-item").forEach(el => {
    el.addEventListener("click", () => {
      document.getElementById("modalMainImg").src = el.dataset.src;
      document.querySelectorAll(".thumb-item").forEach(x => x.classList.remove("active"));
      el.classList.add("active");
    });
  });

  document.getElementById("modalColorCount").textContent = p.colors.length;
  document.getElementById("modalSwatches").innerHTML = p.colors.map((c, idx) => `
    <button class="color-chip ${idx === 0 ? "active" : ""}">
      <span class="swatch-dot" style="background:${c.hex}"></span>
      <span>${c.name}</span>
    </button>
  `).join("");

  document.getElementById("modalStyleTags").innerHTML = p.tags.map(t => `<span class="style-tag"># ${t}</span>`).join("");
  document.getElementById("modalShopPill").textContent = `🏪 ${p.shop}`;
  document.getElementById("modalLaunchPill").textContent = `📅 上架：${p.launchDate}（第 ${p.daysOnline} 天）`;
  document.getElementById("modalCatPill").textContent = p.category;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalPrice").textContent = p.price;
  document.getElementById("modalOriginPrice").textContent = `¥${p.originPrice}`;
  const discount = ((p.price / p.originPrice) * 10).toFixed(1);
  document.getElementById("modalDiscount").textContent = `${discount}折`;

  const estGmv = Math.round(p.price * p.sales30d).toLocaleString();
  document.getElementById("modalKpiGrid").innerHTML = `
    <div class="dkpi-card">
      <div class="dkpi-label">总收藏人数</div>
      <div class="dkpi-value">${p.favCount}</div>
      <div class="dkpi-sub">近7天 +${p.favDelta7d}</div>
    </div>
    <div class="dkpi-card">
      <div class="dkpi-label">预估 30 日销量</div>
      <div class="dkpi-value">${p.sales30d} 件</div>
      <div class="dkpi-sub">转化率 ${p.conversionRate}</div>
    </div>
    <div class="dkpi-card">
      <div class="dkpi-label">30 日预估销售额</div>
      <div class="dkpi-value">¥${estGmv}</div>
      <div class="dkpi-sub">店内人气 ${p.rankInShop}</div>
    </div>
    <div class="dkpi-card">
      <div class="dkpi-label">商品货号 / ID</div>
      <div class="dkpi-value" style="font-size:15px;">${p.id}</div>
      <div class="dkpi-sub" style="color:#2563eb;">● 监控正常</div>
    </div>
  `;

  renderTrendChart(p.trend14d);
  document.getElementById("modalReviewPills").innerHTML = p.reviews.map(r =>
    `<span class="review-pill">${r.word} <strong>${r.count}</strong></span>`
  ).join("");

  renderSkuTable(p);
  renderAiReport(p);
  updateModalLibraryBtn(p.id);

  document.getElementById("detailModal").classList.remove("hidden");
}

function updateModalLibraryBtn(id) {
  const btn = document.getElementById("addToLibraryBtn");
  if (state.favorites.has(id)) {
    btn.textContent = "✓ 已在培创款式库中（点击移除）";
    btn.style.background = "#059669";
  } else {
    btn.textContent = "＋ 加入培创款式库";
    btn.style.background = "";
  }
}

function renderTrendChart(data) {
  const w = 620, h = 190, padL = 36, padR = 20, padT = 18, padB = 28;
  const maxFav = Math.max(...data.map(d => d.fav)) * 1.15;
  const maxSales = Math.max(...data.map(d => d.sales)) * 1.2;

  const favPts = data.map((d, i) => {
    const x = padL + (i / (data.length - 1)) * (w - padL - padR);
    const y = h - padB - (d.fav / maxFav) * (h - padT - padB);
    return { x, y, ...d };
  });

  const salesPts = data.map((d, i) => {
    const x = padL + (i / (data.length - 1)) * (w - padL - padR);
    const y = h - padB - (d.sales / maxSales) * (h - padT - padB);
    return { x, y, ...d };
  });

  const favLine = favPts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const salesLine = salesPts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

  document.getElementById("modalTrendChart").innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" style="width:100%;height:auto;overflow:visible;">
      ${[0.25, 0.5, 0.75, 1].map(r => {
        const y = h - padB - r * (h - padT - padB);
        return `<line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" stroke="#e5e9f2" stroke-dasharray="3,3"/>
                <text x="${padL - 6}" y="${y + 4}" text-anchor="end" font-size="10" fill="#8a94a6">${Math.round(maxFav * r)}</text>`;
      }).join("")}
      <polyline fill="none" stroke="#2563eb" stroke-width="2.5" points="${favLine}" />
      <polyline fill="none" stroke="#10b981" stroke-width="2.2" stroke-dasharray="4,3" points="${salesLine}" />
      ${favPts.map((p, idx) => `
        <g>
          <circle cx="${p.x}" cy="${p.y}" r="4.5" fill="#2563eb" stroke="#fff" stroke-width="1.5">
            <title>${p.day} · 累计收藏 ${p.fav} / 日增销量 ${salesPts[idx].sales}</title>
          </circle>
          <text x="${p.x}" y="${p.y - 9}" text-anchor="middle" font-size="10" font-weight="600" fill="#1e40af">${p.fav}</text>
          <text x="${p.x}" y="${h - 8}" text-anchor="middle" font-size="10" fill="#6b7280">${p.day}</text>
        </g>
      `).join("")}
    </svg>
  `;
}

function renderSkuTable(p) {
  const sizes = ["S", "M", "L", "XL"];
  document.getElementById("modalSkuTable").innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>颜色规格</th>
          <th>尺码</th>
          <th>监控售价</th>
          <th>当前库存状态</th>
          <th>近7天动销</th>
        </tr>
      </thead>
      <tbody>
        ${p.colors.flatMap((c, ci) => sizes.map((s, si) => {
          const stock = ((ci + 1) * (si + 2) * 19) % 120 + 12;
          const low = stock < 25;
          return `
            <tr>
              <td><span class="swatch-dot" style="display:inline-block;background:${c.hex};vertical-align:middle;margin-right:6px;"></span>${c.name}</td>
              <td><strong>${s}</strong></td>
              <td style="color:#2563eb;font-weight:600;">¥${p.price}</td>
              <td><span style="color:${low ? "#e11d48" : "#059669"};font-weight:600;">${low ? `紧张 (${stock}件)` : `充足 (${stock}件)`}</span></td>
              <td>+${Math.max(2, Math.round(p.sales30d / 16 - ci))} 件</td>
            </tr>
          `;
        })).join("")}
      </tbody>
    </table>
  `;
}

function renderAiReport(p) {
  document.getElementById("modalAiReport").innerHTML = `
    <div class="ai-box">
      <div class="ai-box-title">📐 版型与廓形拆解</div>
      <p>${p.aiReport.silhouette}</p>
    </div>
    <div class="ai-box">
      <div class="ai-box-title">🧵 面料与工艺特征</div>
      <p>${p.aiReport.fabric}</p>
    </div>
    <div class="ai-box">
      <div class="ai-box-title">💡 核心爆款卖点</div>
      <p>${p.aiReport.sellingPoint}</p>
    </div>
    <div class="ai-box">
      <div class="ai-box-title">🎯 培创打版与开发建议</div>
      <p>${p.aiReport.suggestion}</p>
    </div>
  `;
}

// ===== 事件绑定 =====
function bindEvents() {
  document.querySelectorAll("#subModePills .sub-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#subModePills .sub-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.subMode = btn.dataset.mode;
      if (state.subMode === "compare") {
        if (state.compareIds.length === 0) showToast("点击卡片右上角 ⚖ 按钮即可加入对比篮");
        else document.getElementById("compareDrawer").classList.remove("hidden");
      }
      renderProducts();
    });
  });

  document.querySelectorAll("#primaryTabs .seg-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#primaryTabs .seg-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeTab = btn.dataset.tab;
      renderProducts();
    });
  });

  document.querySelectorAll("#viewSwitch .view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#viewSwitch .view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.view = btn.dataset.view;
      renderProducts();
    });
  });

  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    clearSearchBtn.classList.toggle("hidden", !state.search);
    renderProducts();
  });
  clearSearchBtn.addEventListener("click", () => {
    state.search = "";
    searchInput.value = "";
    clearSearchBtn.classList.add("hidden");
    renderProducts();
  });

  document.getElementById("categorySelect").addEventListener("change", (e) => {
    state.category = e.target.value;
    renderProducts();
  });
  document.getElementById("priceSelect").addEventListener("change", (e) => {
    state.price = e.target.value;
    renderProducts();
  });
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  const resetAll = () => {
    state.subMode = "all";
    state.shop = "all";
    state.category = "all";
    state.price = "all";
    state.sort = "fav_desc";
    state.search = "";
    searchInput.value = "";
    clearSearchBtn.classList.add("hidden");
    document.getElementById("categorySelect").value = "all";
    document.getElementById("priceSelect").value = "all";
    document.getElementById("sortSelect").value = "fav_desc";
    document.querySelectorAll("#subModePills .sub-pill").forEach((b, i) => b.classList.toggle("active", i === 0));
    renderShopStrip();
    renderProducts();
  };
  document.getElementById("resetFilterBtn").addEventListener("click", resetAll);
  document.getElementById("emptyResetBtn").addEventListener("click", resetAll);

  // Modal 内交互
  document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("detailModal").classList.add("hidden");
    state.currentModalId = null;
  });
  document.getElementById("detailModal").addEventListener("click", (e) => {
    if (e.target.id === "detailModal") {
      document.getElementById("detailModal").classList.add("hidden");
      state.currentModalId = null;
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.getElementById("detailModal").classList.add("hidden");
  });

  document.getElementById("prevItemBtn").addEventListener("click", () => stepModal(-1));
  document.getElementById("nextItemBtn").addEventListener("click", () => stepModal(1));

  document.getElementById("addToLibraryBtn").addEventListener("click", () => {
    if (state.currentModalId) toggleFavorite(state.currentModalId);
  });
  document.getElementById("modalCompareBtn").addEventListener("click", () => {
    if (state.currentModalId) toggleCompare(state.currentModalId);
  });
  document.getElementById("openSourceBtn").addEventListener("click", () => {
    showToast("演示环境：即将跳转至淘宝/知衣原商品页面");
  });

  document.querySelectorAll("#detailTabs .detail-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("#detailTabs .detail-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const key = tab.dataset.dtab;
      document.querySelectorAll(".detail-panel").forEach(p => p.classList.remove("active"));
      document.getElementById(`panel-${key}`).classList.add("active");
    });
  });

  document.getElementById("compareBasketBtn").addEventListener("click", () => {
    if (state.compareIds.length === 0) showToast("请先在卡片右上角点击 ⚖ 加入对比款式");
    else document.getElementById("compareDrawer").classList.toggle("hidden");
  });
  document.getElementById("clearCompareBtn").addEventListener("click", () => {
    state.compareIds = [];
    document.getElementById("compareCount").textContent = "0";
    renderCompareDrawer();
    renderProducts();
  });
  document.getElementById("closeCompareBtn").addEventListener("click", () => {
    document.getElementById("compareDrawer").classList.add("hidden");
  });

  document.getElementById("aiInsightBtn").addEventListener("click", openAiInsightModal);
  document.getElementById("refreshBtn").addEventListener("click", () => {
    renderProducts();
    showToast("✓ 已刷新最新竞店监控数据（11/13 14:24）");
  });
  document.getElementById("exportBtn").addEventListener("click", exportCsv);
  document.getElementById("syncSettingBtn").addEventListener("click", () => {
    document.getElementById("syncSettingModal").classList.remove("hidden");
  });
  document.getElementById("saveSyncSettingBtn").addEventListener("click", () => {
    const freq = document.getElementById("syncFreqSelect").value;
    document.getElementById("syncSettingModal").classList.add("hidden");
    showToast(`✓ 已保存：每 ${freq} 小时自动同步一次`);
  });
  document.getElementById("openCompareMatrixBtn").addEventListener("click", openCompareMatrixModal);

  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById(btn.dataset.close).classList.add("hidden");
    });
  });
}

function renderLogsView() {
  const el = document.getElementById("logsView");
  el.classList.remove("hidden");
  const logs = [
    { shop: "小宅女 HADOGGYSTUDIO", total: 142, added: "+12", status: "ok", text: "同步成功", cost: "4.2s", time: "2026/11/13 14:24:53" },
    { shop: "米上衣", total: 118, added: "+9", status: "ok", text: "同步成功", cost: "3.8s", time: "2026/11/13 14:24:48" },
    { shop: "色小姐", total: 96, added: "+6", status: "ok", text: "同步成功", cost: "3.1s", time: "2026/11/13 14:24:41" },
    { shop: "木子家STUDIO", total: 88, added: "+5", status: "warn", text: "部分图片重试中", cost: "8.4s", time: "2026/11/13 14:24:30" },
    { shop: "其余 13 家监控店铺", total: 185, added: "+10", status: "ok", text: "全部同步完成", cost: "11.5s", time: "2026/11/13 14:24:12" }
  ];
  el.innerHTML = `
    <div class="subpage-header">
      <div>
        <strong>📋 竞店数据同步记录</strong>
        <span style="color:var(--text-muted);font-size:12px;margin-left:8px;">共 17 家店铺 · 最近批次完成于 2026/11/13 14:24:53</span>
      </div>
      <button class="btn-primary" onclick="showToast('✓ 已触发全店即时增量同步')">↻ 立即全量同步</button>
    </div>
    <table class="data-table">
      <thead><tr><th>监控店铺</th><th>在库商品数</th><th>本次上新</th><th>同步状态</th><th>耗时</th><th>完成时间</th><th>操作</th></tr></thead>
      <tbody>
        ${logs.map(l => `
          <tr>
            <td><strong>${l.shop}</strong></td>
            <td>${l.total} 款</td>
            <td><span class="growth-pill">${l.added}</span></td>
            <td><span class="status-badge ${l.status}">● ${l.text}</span></td>
            <td>${l.cost}</td>
            <td>${l.time}</td>
            <td><button class="btn-outline-sm" onclick="showToast('正在重新同步「${l.shop}」...')">单店重采</button></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderTasksView() {
  const el = document.getElementById("tasksView");
  el.classList.remove("hidden");
  const tasks = [
    { name: "知衣 17 家竞店增量采集", type: "定时采集", progress: 100, status: "ok", label: "已完成", time: "14:24:53" },
    { name: "近 7 天收藏飙升款 AI 自动拆款（18 款）", type: "AI 拆款", progress: 78, status: "run", label: "处理中 14/18", time: "14:25:10" },
    { name: "【小宅女】双11返场折扣价格追踪", type: "价格监控", progress: 100, status: "ok", label: "已完成", time: "12:00:05" },
    { name: "导出 11 月第 2 周选品分析报表", type: "报表导出", progress: 100, status: "ok", label: "可下载", time: "10:15:42" }
  ];
  el.innerHTML = `
    <div class="subpage-header">
      <div>
        <strong>⚡ 异步任务中心</strong>
        <span style="color:var(--text-muted);font-size:12px;margin-left:8px;">实时查看数据采集、AI 拆款与报表生成进度</span>
      </div>
      <button class="btn-outline-sm" onclick="showToast('✓ 已清理已完成的历史任务')">清理已完成</button>
    </div>
    <table class="data-table">
      <thead><tr><th>任务名称</th><th>任务类型</th><th>当前进度</th><th>状态</th><th>触发时间</th></tr></thead>
      <tbody>
        ${tasks.map(t => `
          <tr>
            <td><strong>${t.name}</strong></td>
            <td><span class="tag-pill">${t.type}</span></td>
            <td><span class="progress-track"><span class="progress-fill" style="width:${t.progress}%"></span></span><strong>${t.progress}%</strong></td>
            <td><span class="status-badge ${t.status}">● ${t.label}</span></td>
            <td>${t.time}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function openAiInsightModal() {
  document.getElementById("aiInsightBody").innerHTML = `
    <div style="margin-bottom:14px;padding:10px 12px;background:#eff6ff;border-radius:8px;color:#1e40af;font-size:12.5px;">
      <strong>核心结论：</strong>本周 17 家竞店共上新 42 款，其中 <strong>¥89 - ¥199</strong> 价带贡献了 71% 的收藏飙升款，建议培创重点跟进「微露肩针织」与「方领收腰连衣裙」。
    </div>
    <div class="section-mini-title">各价格带爆款分布</div>
    <div class="insight-bar-row"><span class="insight-bar-label">¥100 以下</span><div class="insight-bar-track"><div class="insight-bar-fill" style="width:32%"></div></div><span class="insight-bar-val">32%</span></div>
    <div class="insight-bar-row"><span class="insight-bar-label">¥100 - ¥200</span><div class="insight-bar-track"><div class="insight-bar-fill" style="width:48%"></div></div><span class="insight-bar-val">48%</span></div>
    <div class="insight-bar-row"><span class="insight-bar-label">¥200 以上</span><div class="insight-bar-track"><div class="insight-bar-fill" style="width:20%"></div></div><span class="insight-bar-val">20%</span></div>
    <div class="section-mini-title" style="margin-top:14px;">AI 推荐优先跟进款 Top 3</div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${PRODUCTS.slice(0, 3).map(p => `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border:1px solid var(--border);border-radius:8px;">
          <div>
            <div style="font-weight:600;font-size:12.5px;">${p.title}</div>
            <div style="font-size:11px;color:var(--text-muted);">${p.shop} · ¥${p.price} · 7日收藏 +${p.favDelta7d}</div>
          </div>
          <button class="btn-outline-sm" onclick="document.getElementById('aiInsightModal').classList.add('hidden');openDetailModal('${p.id}')">去拆款 ›</button>
        </div>
      `).join("")}
    </div>
  `;
  document.getElementById("aiInsightModal").classList.remove("hidden");
}

function openCompareMatrixModal() {
  const items = state.compareIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  if (items.length < 2) {
    showToast("请至少选择 2 款商品进行横向对比");
    return;
  }
  document.getElementById("compareMatrixBody").innerHTML = `
    <table class="compare-matrix-table">
      <thead>
        <tr>
          <th>对比维度</th>
          ${items.map(p => `<td style="text-align:center;"><img src="${p.img}" style="width:86px;height:104px;object-fit:cover;border-radius:8px;margin-bottom:6px;"/><div style="font-weight:700;">${p.shop}</div></td>`).join("")}
        </tr>
      </thead>
      <tbody>
        <tr><th>商品标题</th>${items.map(p => `<td>${p.title}</td>`).join("")}</tr>
        <tr><th>到手价 / 吊牌价</th>${items.map(p => `<td><strong style="color:#2563eb;font-size:15px;">¥${p.price}</strong> <span style="color:#9ca3af;text-decoration:line-through;">¥${p.originPrice}</span></td>`).join("")}</tr>
        <tr><th>总收藏 / 7日增量</th>${items.map(p => `<td><strong>${p.favCount}</strong> <span class="growth-pill">+${p.favDelta7d}</span></td>`).join("")}</tr>
        <tr><th>30日销量 / 转化</th>${items.map(p => `<td><strong>${p.sales30d} 件</strong>（${p.conversionRate}）</td>`).join("")}</tr>
        <tr><th>AI 核心卖点</th>${items.map(p => `<td>${p.aiReport.sellingPoint}</td>`).join("")}</tr>
        <tr><th>打版建议</th>${items.map(p => `<td>${p.aiReport.suggestion}</td>`).join("")}</tr>
      </tbody>
    </table>
  `;
  document.getElementById("compareMatrixModal").classList.remove("hidden");
}

function exportCsv() {
  const list = getFilteredProducts();
  const header = ["货号", "商品标题", "店铺", "分类", "到手价", "吊牌价", "总收藏", "7日收藏增量", "30日销量", "收藏转化率", "上架日期"];
  const rows = list.map(p => [
    p.id, `"${p.title.replace(/"/g, '""')}"`, p.shop, p.category,
    p.price, p.originPrice, p.favCount, p.favDelta7d, p.sales30d, p.conversionRate, p.launchDate
  ].join(","));
  const csv = "\uFEFF" + [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `知衣竞店监控_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast(`✓ 已导出 ${list.length} 款商品数据 CSV`);
}

function stepModal(delta) {
  const list = getFilteredProducts();
  const idx = list.findIndex(p => p.id === state.currentModalId);
  if (idx < 0) return;
  const next = list[(idx + delta + list.length) % list.length];
  openDetailModal(next.id);
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add("hidden"), 2400);
}
