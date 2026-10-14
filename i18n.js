/* IOPOSTER: RU / EN / 中文 translations. Brand/control from LedPoster.
   Russian is the canonical authored content. Preserve markup and links. */
(() => {
  const dictionary = [
    ["Продукт","Product","产品"],["Возможности","Capabilities","功能"],["Характеристики","Specifications","产品参数"],["Платформа","Platform","平台"],["Инвесторам","Investors","投资者"],["Контакты","Contact","联系"],
    ["Реклама","Advertising","广告"],["больше не стоит","that never","不再"],["на месте.","stands still.","止步不前。"],
    ["IoPoster — автономный медиа-робот нового поколения.","IoPoster — a new-generation autonomous media robot.","IoPoster — 新一代自主移动媒体机器人。"],
    ["360° LED-реклама, ИИ-ассистент и интеллектуальная навигация. Две платформы — с функцией автономной уборки и без.","360° LED advertising, an AI assistant and smart navigation. Two platforms — with or without autonomous cleaning.","360° LED 广告、AI 助手与智能导航。提供带或不带自主清洁功能的两种平台。"],
    ["Смотреть продукт","Explore the product","了解产品"],["ОДИН ОБЪЕКТ. ТРИ СИСТЕМЫ.","ONE DEVICE. THREE SYSTEMS.","一台设备 · 三大系统"],
    ["Медиа. AI.","Media. AI.","媒体 · AI"],["Робототехника.","Robotics.","机器人技术"],
    ["IOPOSTER.RU превращает рекламный носитель в активный элемент пространства: показывает контент, общается с посетителями и автономно перемещается по объекту.","IoPoster turns a display into an active part of a space: it delivers content, interacts with visitors and moves autonomously.","IoPoster 将广告终端变成空间中的主动服务设备：展示内容、与访客互动并自主移动。"],
    ["Четырёхсторонний LED-экран для рекламы, навигации, акций и динамического контента.","Four-sided LED displays for advertising, wayfinding, promotions and dynamic content.","四面 LED 屏幕用于广告、导航、促销和动态内容展示。"],
    ["Голосовой консультант, поиск товаров, рекомендации и персональные сценарии коммуникации.","Voice assistant, product discovery, recommendations and personalized interactions.","语音助手、商品查找、推荐及个性化互动。"],
    ["Навигация внутри помещения, безопасное движение и уборка пола во время работы.","Indoor navigation, safe movement and floor cleaning during operation.","室内导航、安全移动及运行时地面清洁。"],
    ["Не киоск.","Not a kiosk.","不只是终端。"],["Часть пространства.","Part of the space.","融入空间。"],
    ["Высота 1920 мм — всего на 120 мм выше человека ростом 1800 мм. Компактное основание 640 × 640 мм.","At 1,920 mm tall, it stands just 120 mm above a 1,800 mm person. Compact 640 × 640 mm footprint.","整机高 1920 毫米，仅比身高 1800 毫米的人高 120 毫米。占地 640 × 640 毫米。"],
    ["AI-КОНСУЛЬТАНТ","AI ASSISTANT","AI 智能助手"],["Здравствуйте!","Hello!","您好！"],["Чем помочь?","How can I help?","有什么可以帮您？"],
    ["Разговор вместо","Conversation,","通过对话，"],["поиска по меню.","not menus.","无需搜索菜单。"],
    ["Посетитель просто задаёт вопрос. IOPOSTER.RU помогает найти магазин, товар, акцию, ресторан или сервис и показывает дальнейший маршрут.","Visitors simply ask. IoPoster finds stores, products, promotions, restaurants or services and guides them there.","访客只需提问。IoPoster 即可帮助查找商店、商品、促销、餐厅或服务并提供路线。"],
    ["Голосовой диалог","Voice dialogue","语音对话"],["Естественное общение без сложного интерфейса.","Natural conversation without complicated menus.","无需复杂界面，自然流畅交流。"],
    ["Мультиязычность","Multilingual support","多语言支持"],["Сценарии для международной аудитории.","Interactions for international visitors.","面向国际访客的多语言场景。"],
    ["Контекст пространства","Venue context","场地信息"],["Ответы по магазинам, акциям и инфраструктуре ТЦ.","Answers about stores, promotions and mall facilities.","解答有关商店、促销及商场设施的问题。"],
    ["Найти магазин","Find a store","查找商店"],["Акции и скидки","Deals & offers","优惠活动"],["Рестораны и кафе","Restaurants & cafés","餐厅与咖啡馆"],["Сервисы","Services","服务"],
    ["10 ОСНОВНЫХ ФУНКЦИЙ","10 KEY CAPABILITIES","十大核心功能"],
    ["Одна платформа.","One platform.","一个平台。"],["Десять сценариев.","Ten use cases.","十大应用场景。"],
    ["Навигация по ТЦ","Mall navigation","商场导航"],["Поиск магазинов, зон и сервисов с маршрутом.","Find stores, zones and services with routes.","查找商店、区域和服务并规划路线。"],
    ["Реклама ТЦ и акций","Mall promotions","商场促销广告"],["События, распродажи и специальные предложения.","Events, sales and special offers.","活动、折扣及特别优惠。"],
    ["Реклама брендов","Brand advertising","品牌广告"],["Мобильный 360° DOOH-носитель внутри объекта.","Mobile 360° digital out-of-home media inside venues.","场内移动式 360° 数字户外广告载体。"],
    ["AI-голосовой консультант","AI voice assistant","AI 语音助手"],["Ответы на вопросы посетителей в режиме диалога.","Conversational answers to visitor questions.","通过对话解答访客问题。"],
    ["Персональные предложения","Personalized offers","个性化优惠"],["Купоны и офферы через QR, приложение или loyalty.","Coupons and offers via QR, apps and loyalty programs.","通过二维码、应用程序或会员系统提供优惠。"],
    ["Звуковая реклама","Audio advertising","音频广告"],["Аудиосообщения и направленные рекламные сценарии.","Audio messages and targeted advertising scenarios.","音频消息和定向广告场景。"],
    ["Интерактивная реклама","Interactive advertising","互动广告"],["QR, промокоды, опросы и вовлекающие механики.","QR codes, promo codes, surveys and interactive experiences.","二维码、优惠码、调查及互动体验。"],
    ["Контекстная реклама","Context-aware advertising","场景广告"],["Контент по зоне, времени, трафику и событиям.","Content adapted to location, time, traffic and events.","根据位置、时间、人流和活动调整内容。"],
    ["AI-рекомендации","AI recommendations","AI 推荐"],["Поиск товаров и подходящих магазинов по запросу.","Find products and relevant stores based on requests.","根据需求查找商品及相关商店。"],
    ["Централизованное управление контентом и сетью.","Centralized management of content and devices.","集中管理内容与设备网络。"],
    ["Точные пропорции.","Precise proportions.","精准比例。"],["Без лишнего объёма.","Nothing extra.","精简结构。"],
    ["Экран и робот формируют единый корпус 640 × 640 мм, заподлицо — без ступеней, щелей и промежуточных секций.","Screen and robot form one flush 640 × 640 mm footprint, with no steps, gaps or intermediate sections.","屏幕与机器人采用统一的 640 × 640 毫米外形，齐平无台阶、缝隙或中间结构。"],
    ["мм основание","mm footprint","毫米底座"],["мм общая высота","mm total height","毫米总高度"],["мм LED-экран","mm LED display","毫米 LED 屏幕"],["мм робот","mm robot base","毫米机器人底座"],["мм верхняя полоса камер","mm top camera strip","毫米顶部摄像头区域"],["одинаковые стороны","identical sides","相同屏幕面"],
    ["Одна панель","One dashboard","一个控制台"],["для всей сети.","for the entire fleet.","管理整个网络。"],
    ["Контент, расписание, кампании, зоны показа и устройства — централизованно. От одного робота до сети в нескольких объектах.","Centralized control of content, schedules, campaigns, display zones and devices — from one robot to a fleet across venues.","集中管理内容、排期、广告活动、展示区域及设备，从单台机器人到跨场地网络。"],
    ["Пример интерфейса","Interface preview","界面示例"],["ДЕМО","DEMO","演示"],["Устройства","Devices","设备"],["Онлайн","Online","在线"],["Кампании","Campaigns","广告活动"],["Показы","Impressions","展示次数"],
    ["Модель дохода","Revenue model","收益模式"],["для инвесторов.","for investors.","面向投资者。"],
    ["IOPOSTER.RU можно монетизировать через продажу устройств, аренду и рекламное размещение по всей сети IOPOSTER.RU.","IoPoster can generate revenue from device sales, rentals and advertising across the IoPoster network.","IoPoster 可通过设备销售、租赁及全网络广告投放实现收益。"],
    ["Устройство и цена","Device & pricing","设备与定价"],["Инвестиция начинается с покупки устройства IOPOSTER.RU. Стоимость фиксируется в коммерческом предложении под выбранную конфигурацию и объём партии.","Investment starts with purchasing a device. Pricing is quoted based on configuration and order volume.","投资从购买设备开始，价格根据配置及采购数量报价。"],
    ["Доход с продажи","Sales revenue","销售收益"],["Ориентир дохода с продажи одного устройства — ","Indicative revenue per device sold — ","每售出一台设备的参考收益为 "],
    ["Доход от аренды","Rental revenue","租赁收益"],["Потенциальный доход от сдачи устройства в аренду — ","Potential rental revenue per device — ","每台设备的潜在租赁收益为 "],
    ["Доход с сети IOPOSTER.RU","Network advertising revenue","网络广告收益"],["Дополнительный доход от размещения рекламы по всей сети IOPOSTER.RU — ","Additional revenue from advertising across the IoPoster network — ","IoPoster 网络广告带来的额外收益为 "],
    ["Новый формат retail media","A new retail media format","零售媒体新模式"],["в вашем пространстве.","for your venue.","助力您的场地。"],
    ["Торговые центры · бизнес-центры · аэропорты · вокзалы · отели · выставки","Malls · offices · airports · stations · hotels · exhibitions","购物中心 · 办公楼 · 机场 · 车站 · 酒店 · 展会"],
    ["Связаться с LEDSouz","Contact LEDSouz","联系 LEDSouz"],["AI-консультант","AI assistant","AI 智能助手"]
  ];
  const lookup = new Map();
  dictionary.forEach(([ru,en,zh]) => lookup.set(ru,{en,zh}));
  const roots = [...document.querySelectorAll("header,main,footer")];
  const originals = [];
  roots.forEach(root => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const el = node.parentElement;
        if (!el || ['SCRIPT','STYLE','TEXTAREA'].includes(el.tagName) || el.closest('.lang-switch')) return NodeFilter.FILTER_REJECT;
        const raw = node.nodeValue;
        const trimmed = raw.trim();
        return trimmed && lookup.has(trimmed) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let node;
    while (node = walker.nextNode()) {
      const trimmed = node.nodeValue.trim();
      originals.push([node,node.nodeValue,lookup.get(trimmed)]);
    }
  });
  const descriptions={
    ru:"IOPOSTER.RU — автономный медиа-робот нового поколения. 360° LED-реклама, ИИ-ассистент и интеллектуальная навигация.",
    en:"IoPoster — autonomous digital media robot with 360° LED advertising, an AI assistant and intelligent navigation.",
    zh:"IoPoster — 集 360° LED 广告、AI 助手与智能导航于一体的自主移动媒体机器人。"
  };
  const titles={ru:"IOPOSTER.RU — Реклама больше не стоит на месте",en:"IoPoster — Advertising on the move",zh:"IoPoster — 让广告主动走向人群"};
  function setLanguage(lang) {
    if (!["ru","en","zh"].includes(lang)) lang="ru";
    originals.forEach(([node,initial,values])=>{
      const leading=initial.match(/^\s*/)[0],trailing=initial.match(/\s*$/)[0];
      node.nodeValue=lang==="ru"?initial:leading+values[lang]+trailing;
    });
    document.documentElement.lang=lang==="zh"?"zh-CN":lang;
    document.title=titles[lang];
    const meta=document.querySelector('meta[name="description"]');
    if(meta)meta.content=descriptions[lang];
    document.querySelectorAll(".lang").forEach(button=>{
      const active=button.dataset.lang===lang;
      button.classList.toggle("active",active);
      button.setAttribute("aria-pressed",String(active));
    });
    try {localStorage.setItem("ioposter-lang",lang)}catch(e){}
  }
  document.querySelectorAll(".lang").forEach(button=>button.addEventListener("click",()=>setLanguage(button.dataset.lang)));
  let saved="ru";
  try {saved=localStorage.getItem("ioposter-lang")||"ru"}catch(e){}
  setLanguage(saved);
})();
