/* ============================================================
   BROTO v5.1 — Quiz Coletivo: Ética Ambiental & Ecofeminismo
   Avatares com rosto (DiceBear Notionists) + Fallback SVG
   ============================================================ */

/* ============== FIREBASE CONFIG ============== */
const firebaseConfig = {
  apiKey: "AIzaSyDEWTmLRXrlKBKBopYwjlgA6MD2833GY54",
  authDomain: "broto-quiz-7815c.firebaseapp.com",
  databaseURL: "https://broto-quiz-7815c-default-rtdb.firebaseio.com",
  projectId: "broto-quiz-7815c",
  storageBucket: "broto-quiz-7815c.firebasestorage.app",
  messagingSenderId: "379059171454",
  appId: "1:379059171454:web:8574b77f5ec7eec8dbe82f"
};

/* ============== AVATARES COM ROSTO ==============
   Usamos DiceBear Notionists — gera ilustrações de rosto
   únicas e consistentes por seed. Serviço estável, gratuito.
   Fallback SVG artístico garantido via onerror.
   ==================================================== */
const AVATAR_DATA = [
  {name:"Chico Mendes", seed:"chico-mendes", icon:"🌳",
   grad:["#2d5a3d","#5a9e6e"]},
  {name:"Vandana Shiva", seed:"vandana-shiva", icon:"🌾",
   grad:["#5a3d2d","#9e7a5a"]},
  {name:"Greta Thunberg", seed:"greta-thunberg", icon:"🌍",
   grad:["#2d3d5a","#5a7a9e"]},
  {name:"Marina Silva", seed:"marina-silva", icon:"🌿",
   grad:["#3d5a2d","#6e9e5a"]},
  {name:"David Attenborough", seed:"david-attenborough", icon:"🦎",
   grad:["#3d2d5a","#7a5a9e"]},
  {name:"Wangari Maathai", seed:"wangari-maathai", icon:"🌳",
   grad:["#5a5a2d","#9e9e5a"]},
  {name:"Jane Goodall", seed:"jane-goodall", icon:"🐒",
   grad:["#2d5a5a","#5a9e9e"]},
  {name:"Leonardo DiCaprio", seed:"leonardo-dicaprio", icon:"🎬",
   grad:["#1a3a2a","#4a7a5a"]},
  {name:"Rachel Carson", seed:"rachel-carson", icon:"📖",
   grad:["#3a1a2a","#7a4a5a"]},
  {name:"Françoise d'Eaubonne", seed:"francoise-eaubonne", icon:"♀️",
   grad:["#2a3a1a","#5a7a4a"]},
  {name:"Donna Haraway", seed:"donna-haraway", icon:"🐕",
   grad:["#1a2a3a","#4a5a7a"]},
  {name:"Val Plumwood", seed:"val-plumwood", icon:"🌲",
   grad:["#3a2a1a","#7a5a4a"]},
  {name:"Carolyn Merchant", seed:"carolyn-merchant", icon:"📚",
   grad:["#2a1a3a","#5a4a7a"]},
  {name:"Severn Cullis-Suzuki", seed:"severn-cullis-suzuki", icon:"🎤",
   grad:["#1a3a3a","#4a7a7a"]},
  {name:"Xiuhtezcatl Martinez", seed:"xiuhtezcatl-martinez", icon:"🌵",
   grad:["#3a3a1a","#7a7a4a"]}
];

function getDiceBearUrl(seed, size) {
  size = size || 120;
  // DiceBear Notionists — ilustrações de rosto elegantes e únicas
  return `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}&size=${size}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
}

function generateArtisticAvatar(data, size) {
  size = size || 120;
  const s = size;
  const id = 'av-' + Math.random().toString(36).slice(2, 8);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="${id}-g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${data.grad[0]}"/>
        <stop offset="100%" style="stop-color:${data.grad[1]}"/>
      </linearGradient>
      <filter id="${id}-s">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.35)"/>
      </filter>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#${id}-g)" stroke="rgba(240,234,214,0.15)" stroke-width="1.5"/>
    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
    <text x="50" y="48" text-anchor="middle" font-family="Georgia,serif" font-size="24" font-weight="700" fill="#f2ead4" filter="url(#${id}-s)">${data.name.split(' ').map(n=>n[0]).join('')}</text>
    <text x="50" y="72" text-anchor="middle" font-size="16">${data.icon}</text>
  </svg>`;

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function getAvatarUrl(index, size) {
  const data = AVATAR_DATA[index % AVATAR_DATA.length];
  return getDiceBearUrl(data.seed, size);
}

function getFallbackAvatar(index, size) {
  const data = AVATAR_DATA[index % AVATAR_DATA.length];
  return generateArtisticAvatar(data, size);
}

const AVATARS = AVATAR_DATA.map((data, i) => ({
  name: data.name,
  url: getAvatarUrl(i, 120),
  fallback: getFallbackAvatar(i, 120),
  seed: data.seed,
  palette: data
}));

/* ============== FILTRO DE NOMES ============== */
const BAD_WORDS_PT = [
  "buceta","caralho","cu","foda","foder","foda-se","fodase","fodido","fudido",
  "merda","porra","puta","puto","pica","pinto","bosta","viado","bicha","bichona",
  "baitola","boiola","cuzao","filho da puta","fdp","arrombado","arrombada",
  "vagabundo","vagabunda","idiota","imbecil","retardado","retardada","mongol",
  "mongoloide","negro","neguin","macaco","crioulo","hitler","nazi","nazista",
  "estuprador","estupro","pedofilo","gayzinho","viadinho","bichinha","sapatao",
  "traveco","vadia","escroto","escrota","nojento","nojenta","coco","mijar","mijo",
  "urina","urinar","defecar","seu cu","fode","fodendo","fodida","putaria","porno",
  "pornografia","sexo","transar","transou","transando","boquete","anal","penis",
  "vagina","clitoris","masturbar","masturbacao","gozar","gozada","esperma","semen",
  "orgasmo","ereto","erecao","tesao","pau","rola","piroca","pika","bilau","bilola",
  "bucetinha","xoxota","xota","xoxotinha","pepeca","pepeka","priquito","prikito",
  "bct","ct","vsf","vai se foder","vai tomar no cu","vtnc","vtmnc","tomar no cu",
  "tnc","tmnc","se foder","se fodendo","fodasse","foda se","fdps","filhodaputa",
  "filho daputa","filho da puta","f d p","f.d.p","cuzinho","cu de","cu do","cu da",
  "arrombados","arrombadas","merdinha","merdao","bostinha","bostao","nojentos",
  "nojentas","idiotas","imbecis","retardados","retardadas","mongoloide","down",
  "sindrome","autista","autismo","esquizofrenico","louco","louca","doido","doida",
  "maluco","maluca","psicopata","psicotico","maníaco","maniaco","depressivo",
  "depressiva","suicida","suicidio","morte","morto","morta","matar","matou",
  "matando","assassino","assassina","assassinato","crime","criminoso","criminosa",
  "ladrao","ladra","roubou","roubando","furto","furou","estelionato","golpe",
  "golpista","corrupto","corrupta","corrupcao","propina","suborno","trafico",
  "droga","drogas","maconha","cocaina","crack","heroina","lsd","ecstasy",
  "metanfetamina","anfetamina","mdma","thc","baseado","beck","bong","pipe",
  "drogado","drogada","viciado","viciada","dependente","quimico","alcoolatra",
  "alcoolismo","bebado","bebada","bebedo","cachaca","pinga","aguardente",
  "whisky","vodka","cerveja","chopp","vinho","alcool","prostituta","prostituto",
  "prostitutas","prostitutos","garota de programa","gp","miche","cafetao",
  "cafetina"
];

const BAD_WORDS_EN = [
  "fuck","shit","bitch","asshole","bastard","damn","hell","crap","piss","dick",
  "cock","pussy","cunt","nigger","nigga","faggot","retard","slut","whore",
  "douche","wanker","twat","bollocks","arse","bloody","bugger","choad","clit",
  "cum","dildo","dyke","fag","jizz","knob","labia","muff","nads","penis",
  "prick","queer","scrotum","shag","shemale","smegma","spunk","tit","tosser",
  "turd","vag","vulva","wang","wank","weed","wtf","stfu","gtfo","kys","kms",
  "kill","die","death","murder","rape","rapist","molest","pedo","incest",
  "suicide","cutting","selfharm","overdose","homicide","genocide","terrorist",
  "bomb","shooting","shooter","gun","weapon","explosive","acid","poison",
  "torture","abuse","abuser","bully","harass","stalk","threat","threaten",
  "violence","violent","attack","assault","fight","beaten","stab","strangle",
  "drown","hang","burn","knife","blade","razor","overdose","pills"
];

const BAD_WORDS_ES = [
  "puta","puto","mierda","joder","coño","cabron","maricon","pendejo","gilipollas",
  "hostia","carajo","chingar","chingada","verga","pene","vagina","culo","culero",
  "naco","prieto","negro","negrata","marica","bollera","tortillera","zorra",
  "perra","perro","malparido","hijueputa","hijo de puta","gonorrea","cuca",
  "chucha","teta","tetas","picha","polla","cojones","huevos","mamada","mamon",
  "pajero","coger","cogiendo","cogido","follar","follando","sexo","sexual",
  "desnudo","desnuda","pornografia","porno","xxx","prostituta","puticlub"
];

const BAD_WORDS_FR = [
  "putain","merde","connard","con","salope","enculé","encule","bite","couille",
  "cul","foutre","foutu","nique","niquer","baiser","baise","chier","chiant",
  "conne","conard","pédé","pédale","tapette","tarlouze","nègre","négro","nazi",
  "hitlerien","pute","putain","salopard","ordure","trou du cul","trouduc"
];

const BAD_WORDS_ALL = [...BAD_WORDS_PT, ...BAD_WORDS_EN, ...BAD_WORDS_ES, ...BAD_WORDS_FR];

function normalizeLeet(text) {
  let result = text.toLowerCase();
  const replacements = [
    ['4','a'],['@','a'],['^','a'],['ª','a'],
    ['8','b'],['6','b'],
    ['<','c'],['{','c'],['[','c'],['©','c'],
    ['0','o'],['°','o'],['º','o'],
    ['3','e'],['&','e'],['€','e'],['£','e'],
    ['9','g'],
    ['1','i'],['!','i'],['|','i'],[':','i'],[';','i'],
    ['7','t'],['+','t'],['†','t'],
    ['5','s'],['$','s'],['z','s'],['§','s'],
    ['2','z'],['%','z']
  ];
  replacements.forEach(([from, to]) => {
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\]/g, '\$&'), 'g');
    result = result.replace(regex, to);
  });
  return result;
}

function containsBadWord(name) {
  const lower = name.toLowerCase().trim();
  const normalized = normalizeLeet(lower);
  const clean = normalized.replace(/[^a-zà-ÿ0-9]/g, '');
  const cleanSpaced = normalized.replace(/[^a-zà-ÿ0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const noSpaces = lower.replace(/\s/g, '');

  for (let i = 0; i < BAD_WORDS_ALL.length; i++) {
    const word = BAD_WORDS_ALL[i].toLowerCase();
    const wordNoSpace = word.replace(/\s/g, '');
    if (lower.indexOf(word) !== -1) return true;
    if (normalized.indexOf(word) !== -1) return true;
    if (clean.indexOf(word.replace(/[^a-zà-ÿ0-9]/g, '')) !== -1) return true;
    if (cleanSpaced.indexOf(word) !== -1) return true;
    if (noSpaces.indexOf(wordNoSpace) !== -1) return true;
  }

  if (/(.)(){5,}/.test(lower)) return true;
  if (/^\d+$/.test(lower)) return true;

  return false;
}

function checkNameFilter() {
  const input = document.getElementById("join-name-input");
  const warning = document.getElementById("name-filter-warning");
  const btn = document.getElementById("btn-join-room");
  const name = input.value.trim();
  if (name && containsBadWord(name)) {
    warning.classList.add("show");
    btn.disabled = true;
    input.style.borderColor = "var(--bloom)";
  } else {
    warning.classList.remove("show");
    btn.disabled = false;
    input.style.borderColor = "";
  }
}

/* ============== STATE ============== */
let role = null;
let code = null;
let myPid = null;
let myName = "";
let myAvatar = AVATARS[0];
let lastSeenStatus = null;
let lastSeenQIndex = -1;
let hostPollTimer = null;
let playerPollTimer = null;
let tickTimer = null;
let localMeta = null;
let hasAnsweredThisQ = false;
let hostRoster = {};
let db = null;
let roomRef = null;
let isDemoMode = false;
let audioCtx = null;
let podiumRevealIndex = 0;
let podiumItems = [];
let livePodiumVisible = false;
let myStreak = 0;
let myBestStreak = 0;

/* ============== AUDIO ============== */
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playTone(freq, type, duration, vol) {
  if (!audioCtx) return;
  vol = vol || 0.12;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function sfxCorrect() {
  playTone(523, "sine", 0.15, 0.10);
  setTimeout(() => playTone(659, "sine", 0.15, 0.10), 120);
  setTimeout(() => playTone(784, "sine", 0.30, 0.10), 240);
  setTimeout(() => playTone(1047, "sine", 0.40, 0.12), 400);
}

function sfxWrong() {
  playTone(180, "sawtooth", 0.25, 0.06);
  setTimeout(() => playTone(140, "sawtooth", 0.35, 0.06), 150);
  setTimeout(() => playTone(100, "sawtooth", 0.40, 0.05), 350);
}

function sfxTick() {
  playTone(900, "sine", 0.04, 0.04);
}

function sfxJoin() {
  playTone(440, "sine", 0.10, 0.08);
  setTimeout(() => playTone(554, "sine", 0.10, 0.08), 100);
  setTimeout(() => playTone(659, "sine", 0.15, 0.10), 200);
}

function sfxStart() {
  playTone(330, "sine", 0.18, 0.08);
  setTimeout(() => playTone(440, "sine", 0.18, 0.08), 180);
  setTimeout(() => playTone(554, "sine", 0.18, 0.08), 360);
  setTimeout(() => playTone(659, "sine", 0.35, 0.12), 540);
  setTimeout(() => playTone(880, "sine", 0.50, 0.14), 750);
}

function sfxCountdown(n) {
  const base = 440 + (3 - n) * 120;
  playTone(base, "sine", 0.15, 0.10);
}

function sfxReveal() {
  playTone(440, "sine", 0.10, 0.08);
  setTimeout(() => playTone(554, "sine", 0.10, 0.08), 100);
  setTimeout(() => playTone(659, "sine", 0.15, 0.10), 200);
  setTimeout(() => playTone(880, "sine", 0.25, 0.12), 350);
}

function sfxWinner() {
  const notes = [523, 659, 784, 1047, 1319];
  notes.forEach((note, i) => {
    setTimeout(() => playTone(note, "sine", 0.25, 0.10), i * 180);
  });
  setTimeout(() => playTone(1568, "sine", 0.80, 0.14), notes.length * 180);
}

function sfxDrumRoll() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => playTone(80 + i * 25, "triangle", 0.07, 0.05), i * 70);
  }
}

function sfxStreak(n) {
  const base = 440 + Math.min(n, 10) * 55;
  playTone(base, "sine", 0.12, 0.08);
  setTimeout(() => playTone(base + 110, "sine", 0.12, 0.08), 90);
  setTimeout(() => playTone(base + 220, "sine", 0.18, 0.10), 180);
  setTimeout(() => playTone(base + 330, "sine", 0.25, 0.12), 300);
}

function sfxPlayerJoined() {
  playTone(600, "sine", 0.08, 0.06);
  setTimeout(() => playTone(750, "sine", 0.12, 0.06), 80);
}

/* ============== FIREBASE INIT ============== */
function initFirebase() {
  try {
    if (firebaseConfig.apiKey.indexOf("XXXX") === -1 && typeof firebase !== 'undefined') {
      firebase.initializeApp(firebaseConfig);
      db = firebase.database();
      updateConnStatus(true);
      return true;
    }
  } catch (e) {
    console.error("Firebase init error:", e);
  }
  updateConnStatus(false);
  return false;
}

function updateConnStatus(online) {
  const el = document.getElementById("conn-status");
  if (!el) return;
  const dot = el.querySelector('.conn-dot');
  const text = el.querySelector('.conn-text');
  if (online) {
    el.className = "conn-status online";
    if (text) text.textContent = "online";
    if (dot) {
      dot.style.background = "var(--leaf)";
      dot.style.boxShadow = "0 0 6px var(--leaf)";
      dot.style.animation = "none";
    }
  } else {
    el.className = "conn-status offline";
    if (text) text.textContent = "offline — demo ativo";
    if (dot) {
      dot.style.background = "var(--bloom)";
      dot.style.boxShadow = "0 0 6px var(--bloom)";
    }
  }
}

/* ============== DEMO MODE ============== */
function enableDemoMode() {
  isDemoMode = true;
  updateConnStatus(false);
  const badge = document.getElementById("demo-badge");
  if (badge) badge.style.display = "flex";
  window.demoStorage = {};
  window.demoListeners = {};
}

function toggleDemoMode() {
  isDemoMode = !isDemoMode;
  location.reload();
}

function demoSet(path, val) {
  window.demoStorage[path] = JSON.parse(JSON.stringify(val));
  const cbs = window.demoListeners[path] || [];
  cbs.forEach(cb => cb({
    val: () => window.demoStorage[path],
    exists: () => true
  }));
}

function demoGet(path) {
  return window.demoStorage[path] || null;
}

function demoOnValue(path, cb) {
  if (!window.demoListeners[path]) window.demoListeners[path] = [];
  window.demoListeners[path].push(cb);
  const val = window.demoStorage[path];
  if (val !== undefined) cb({ val: () => val, exists: () => true });
}

function demoOff(path) {
  window.demoListeners[path] = [];
}

/* ============== DB WRAPPER ============== */
function dbRef(path) {
  if (isDemoMode) {
    return {
      set: (val) => Promise.resolve(demoSet(path, val)),
      get: () => Promise.resolve({
        val: () => demoGet(path),
        exists: () => demoGet(path) !== null
      }),
      on: (evt, cb) => { if (evt === "value") demoOnValue(path, cb); },
      off: (evt) => { if (evt === "value") demoOff(path); },
      child: (sub) => dbRef(path + "/" + sub),
      once: (evt) => Promise.resolve({
        val: () => demoGet(path),
        exists: () => demoGet(path) !== null
      })
    };
  }
  if (!db) return null;
  return db.ref(path);
}

function dbPath(...parts) {
  return parts.join("/");
}

/* ============== UTIL ============== */
function show(id) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) {
    requestAnimationFrame(() => {
      el.classList.add("active");
    });
  }
}

function uid() {
  return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function roomCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s || "";
  return div.innerHTML;
}

function calcPoints(elapsedMs, streak) {
  const clamped = Math.max(0, Math.min(QUESTION_MS, elapsedMs));
  const ratio = 1 - (clamped / QUESTION_MS);
  const base = Math.round(500 + 500 * ratio);
  const streakBonus = Math.min(streak, 10) * 0.10;
  const total = Math.round(base * (1 + streakBonus));
  return { base, bonus: Math.round(base * streakBonus), total };
}

/* ============== PARTICLES & EFFECTS ============== */
function spawnConfetti() {
  const colors = ["#e07098", "#6abf6a", "#d4b840", "#f0c0d0", "#90e090", "#ff7b7b", "#5ecdc4"];
  for (let i = 0; i < 50; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.left = (Math.random() * 100) + "vw";
    el.style.top = "-10px";
    const size = 6 + Math.random() * 10;
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = Math.random() > 0.5 ? "50%" : "3px";
    el.style.animationDuration = (2 + Math.random() * 2.5) + "s";
    el.style.animationDelay = (Math.random() * 0.6) + "s";
    el.style.opacity = 0.7 + Math.random() * 0.3;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}

function spawnLeafFall() {
  const el = document.createElement("div");
  el.className = "leaf-fall";
  const leaves = ["🍃", "🌸", "🌿", "🍂", "🌾", "🌼", "🌺", "🌻", "🌱"];
  el.textContent = leaves[Math.floor(Math.random() * leaves.length)];
  el.style.left = (Math.random() * 100) + "vw";
  el.style.animationDuration = (3 + Math.random() * 4) + "s";
  el.style.fontSize = (14 + Math.random() * 18) + "px";
  el.style.opacity = 0.4 + Math.random() * 0.4;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 8000);
}

let leafInterval = null;
function startLeafFall() {
  if (leafInterval) return;
  leafInterval = setInterval(spawnLeafFall, 300);
}
function stopLeafFall() {
  clearInterval(leafInterval);
  leafInterval = null;
}

function spawnParticles() {
  const colors = ["#6abf6a", "#e07098", "#d4b840", "#90e090"];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.className = "particle";
    el.style.left = (Math.random() * 100) + "vw";
    el.style.bottom = "-20px";
    const size = 3 + Math.random() * 7;
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = "50%";
    el.style.animation = `float-up ${4 + Math.random() * 5}s linear forwards`;
    el.style.animationDelay = (Math.random() * 3) + "s";
    el.style.opacity = 0.3 + Math.random() * 0.4;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 10000);
  }
}

function showCountdown(onComplete) {
  const overlay = document.createElement("div");
  overlay.className = "countdown-overlay";
  overlay.innerHTML = `
    <div class="countdown-num" id="cd-num">3</div>
    <div class="countdown-label">Preparar...</div>
  `;
  document.body.appendChild(overlay);

  let count = 3;
  const labels = ["Preparar...", "Apontar...", "Já!"];

  function tick() {
    sfxCountdown(count);
    const numEl = document.getElementById("cd-num");
    const labelEl = overlay.querySelector(".countdown-label");
    if (numEl) {
      numEl.textContent = count;
      numEl.style.animation = "none";
      void numEl.offsetHeight;
      numEl.style.animation = "count-pop 0.5s cubic-bezier(0.2,1.6,0.4,1)";
    }
    if (labelEl) labelEl.textContent = labels[3 - count];

    count--;
    if (count >= 0) {
      setTimeout(tick, 1000);
    } else {
      overlay.classList.add("hide");
      setTimeout(() => {
        overlay.remove();
        if (onComplete) onComplete();
      }, 350);
    }
  }

  setTimeout(tick, 400);
}

/* ============== NAV ============== */
function goLanding() {
  role = null;
  show("screen-landing");
  startAmbientLeaves();
}

function startAmbientLeaves() {
  const container = document.getElementById("floating-leaves");
  if (!container) return;
  container.innerHTML = "";
  const leaves = ["🍃", "🌸", "🌿", "🍂", "🌾"];
  for (let i = 0; i < 8; i++) {
    const el = document.createElement("span");
    el.textContent = leaves[Math.floor(Math.random() * leaves.length)];
    el.style.position = "absolute";
    el.style.left = (Math.random() * 100) + "%";
    el.style.top = (Math.random() * 100) + "%";
    el.style.fontSize = (12 + Math.random() * 20) + "px";
    el.style.opacity = 0.15 + Math.random() * 0.2;
    el.style.animation = `orb-float ${10 + Math.random() * 15}s ease-in-out infinite`;
    el.style.animationDelay = (Math.random() * -10) + "s";
    el.style.pointerEvents = "none";
    container.appendChild(el);
  }
}

/* ============== HOST FLOW ============== */
async function goHostSetup() {
  initAudio();
  role = "host";
  show("screen-host-setup");

  if (!initFirebase()) {
    enableDemoMode();
  }

  code = roomCode();
  const meta = {
    status: "lobby",
    qIndex: -1,
    qStartAt: 0,
    duration: QUESTION_MS,
    total: QUESTIONS.length,
    createdAt: Date.now()
  };
  localMeta = meta;

  const metaRef = dbRef(dbPath("broto", code, "meta"));
  if (metaRef) await metaRef.set(meta);

  document.getElementById("host-code").textContent = code.replace(/(\d{3})(\d{3})/, "$1 $2");

  const qrBox = document.getElementById("qr-box");
  qrBox.innerHTML = "";
  try {
    const joinUrl = location.origin + location.pathname + "?code=" + code;
    document.getElementById("qr-url").textContent = joinUrl;
    new QRCode(qrBox, {
      text: joinUrl,
      width: 160,
      height: 160,
      colorDark: "#0a1f12",
      colorLight: "#f0ead6",
      correctLevel: QRCode.CorrectLevel.M
    });
  } catch (e) {}

  show("screen-host-lobby");

  const playersRef = dbRef(dbPath("broto", code, "players"));
  if (playersRef) {
    playersRef.on("value", snap => {
      const val = snap.val() || {};
      const prevCount = Object.keys(hostRoster).length;
      hostRoster = val;
      if (document.getElementById("screen-host-lobby").classList.contains("active")) {
        renderLobbyPlayers();
        const newCount = Object.keys(val).length;
        if (newCount > prevCount && prevCount > 0) {
          sfxPlayerJoined();
        }
      }
    });
  }

  const metaR = dbRef(dbPath("broto", code, "meta"));
  if (metaR) {
    metaR.on("value", snap => {
      const m = snap.val();
      if (m) localMeta = m;
    });
  }
}

function renderLobbyPlayers() {
  const grid = document.getElementById("host-players");
  const list = [];
  for (const key in hostRoster) list.push(hostRoster[key]);
  list.sort((a, b) => (a.joinedAt || 0) - (b.joinedAt || 0));

  let html = "";
  for (let i = 0; i < list.length; i++) {
    const p = list[i];
    const avIdx = AVATAR_DATA.findIndex(d => d.name === p.avatar);
    const safeIdx = avIdx >= 0 ? avIdx : 0;
    const avUrl = getAvatarUrl(safeIdx, 80);
    const fallback = getFallbackAvatar(safeIdx, 80);
    html += `<div class="sprout" style="animation-delay:${i * 0.05}s">
      <img class="av" src="${avUrl}" alt="${escapeHtml(p.name)}" 
           style="border-radius:50%;width:40px;height:40px;object-fit:cover;"
           onerror="this.src='${fallback}'">
      <div class="nm">${escapeHtml(p.name)}</div>
    </div>`;
  }
  grid.innerHTML = html;

  document.getElementById("host-count-text").textContent = list.length + " pessoa" + (list.length === 1 ? "" : "s") + " na sala";
  const btn = document.getElementById("btn-start-game");
  if (btn) btn.disabled = list.length === 0;
}

async function hostStartGame() {
  initAudio();
  sfxStart();

  showCountdown(async () => {
    localMeta.qIndex = 0;
    localMeta.status = "question";
    localMeta.qStartAt = Date.now();
    const metaRef = dbRef(dbPath("broto", code, "meta"));
    if (metaRef) await metaRef.set(localMeta);
    renderHostQuestion();
    show("screen-host-game");
    startHostTimerTick();
    listenForAnswers();
    spawnParticles();
    livePodiumVisible = true;
    document.getElementById("live-podium").style.display = "flex";
    updateLivePodium();
  });
}

function listenForAnswers() {
  const ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex));
  if (ansRef) {
    ansRef.on("value", snap => {
      const val = snap.val() || {};
      let count = 0;
      for (const k in val) count++;
      let total = 0;
      for (const k in hostRoster) total++;
      const el = document.getElementById("host-answered");
      if (el) el.textContent = count + " de " + total + " respostas";
    });
  }
}

function renderHostQuestion() {
  const qd = QUESTIONS[localMeta.qIndex];
  document.getElementById("host-qcounter").textContent = "Pergunta " + (localMeta.qIndex + 1) + " de " + QUESTIONS.length;
  document.getElementById("host-qnum").textContent = localMeta.qIndex + 1;
  document.getElementById("host-answered").textContent = "0 respostas";
  document.getElementById("host-qtext").textContent = qd.q;

  let optsHtml = "";
  for (let i = 0; i < qd.opts.length; i++) {
    optsHtml += `<div class="opt o${i}" id="host-opt-${i}">
      <span class="mk">${OPT_MARK[i]}</span>
      <span>${qd.opts[i]}</span>
    </div>`;
  }
  document.getElementById("host-opts").innerHTML = optsHtml;

  document.getElementById("btn-reveal").style.display = "inline-flex";
  document.getElementById("btn-next").style.display = "none";
  document.getElementById("host-timerbar").style.width = "100%";
}

function startHostTimerTick() {
  clearInterval(tickTimer);
  tickTimer = setInterval(() => {
    if (!localMeta || localMeta.status !== "question") return;
    const remain = localMeta.duration - (Date.now() - localMeta.qStartAt);
    const pct = Math.max(0, Math.min(100, (remain / localMeta.duration) * 100));
    const bar = document.getElementById("host-timerbar");
    if (bar) bar.style.width = pct + "%";
    if (remain <= 3000 && remain > 2500) sfxTick();
    if (remain <= 0) {
      clearInterval(tickTimer);
      hostReveal();
    }
  }, 150);
}

async function hostReveal() {
  if (localMeta.status !== "question") return;
  clearInterval(tickTimer);
  localMeta.status = "reveal";
  const metaRef = dbRef(dbPath("broto", code, "meta"));
  if (metaRef) await metaRef.set(localMeta);

  const qi = localMeta.qIndex;
  const qd = QUESTIONS[qi];
  const ansRef = dbRef(dbPath("broto", code, "answers", qi));
  const snap = ansRef ? await ansRef.get() : { val: () => null };
  const answers = snap.val() || {};
  const counts = [0, 0, 0, 0];
  for (const key in answers) {
    const a = answers[key];
    if (a && a.choice >= 0 && a.choice < 4) counts[a.choice]++;
  }
  let total = 0;
  for (const k in answers) total++;
  total = Math.max(1, total);

  for (let i = 0; i < qd.opts.length; i++) {
    const el = document.getElementById("host-opt-" + i);
    if (!el) continue;
    if (i === qd.c) el.classList.add("correct");
    else el.classList.add("dim");
    const pct = Math.round((counts[i] / total) * 100);
    el.innerHTML += `<div class="bar" style="width:${pct}%"></div>
      <div class="bar-label">${pct}%</div>`;
  }

  for (const key in answers) {
    const a = answers[key];
    if (!a || !a.pid) continue;
    const isCorrect = a.choice === qd.c;
    const pRef = dbRef(dbPath("broto", code, "players", a.pid));
    if (pRef) {
      const pSnap = await pRef.get();
      const p = pSnap.val() || {};
      const pts = isCorrect ? calcPoints(a.at - localMeta.qStartAt, p.streak || 0).total : 0;
      p.score = (p.score || 0) + pts;
      if (isCorrect) {
        p.streak = (p.streak || 0) + 1;
        p.bestStreak = Math.max(p.bestStreak || 0, p.streak);
      } else {
        p.streak = 0;
      }
      await pRef.set(p);
    }
  }

  updateLivePodium();

  document.getElementById("btn-reveal").style.display = "none";
  document.getElementById("btn-next").style.display = "inline-flex";
  document.getElementById("btn-next-text").textContent = (qi + 1 < QUESTIONS.length) ? "Próxima →" : "Ver pódio 🏆";
}

async function hostNext() {
  if (localMeta.qIndex + 1 < QUESTIONS.length) {
    localMeta.qIndex += 1;
    localMeta.status = "question";
    localMeta.qStartAt = Date.now();
    const metaRef = dbRef(dbPath("broto", code, "meta"));
    if (metaRef) await metaRef.set(localMeta);
    renderHostQuestion();
    startHostTimerTick();
    listenForAnswers();
    updateLivePodium();
  } else {
    localMeta.status = "podium";
    const metaRef = dbRef(dbPath("broto", code, "meta"));
    if (metaRef) await metaRef.set(localMeta);
    await renderHostPodium();
  }
}

/* ============== LIVE PODIUM ============== */
async function updateLivePodium() {
  if (!livePodiumVisible) return;
  const playersRef = dbRef(dbPath("broto", code, "players"));
  const snap = playersRef ? await playersRef.get() : { val: () => null };
  const items = [];
  const val = snap.val() || {};
  for (const k in val) if (val[k]) items.push(val[k]);
  items.sort((a, b) => (b.score || 0) - (a.score || 0));

  const container = document.getElementById("live-podium-content");
  if (!container) return;

  let maxScore = 1;
  for (let i = 0; i < items.length; i++) maxScore = Math.max(maxScore, items[i].score || 0);

  let html = "";
  for (let i = 0; i < Math.min(items.length, 5); i++) {
    const p = items[i];
    const isLeader = i === 0;
    const pct = ((p.score || 0) / maxScore) * 100;
    const avIdx = AVATAR_DATA.findIndex(d => d.name === p.avatar);
    const safeIdx = avIdx >= 0 ? avIdx : 0;
    const avUrl = getAvatarUrl(safeIdx, 36);
    const fallback = getFallbackAvatar(safeIdx, 36);
    html += `<div class="live-podium-row ${isLeader ? 'leader' : ''}">
      <span class="lp-rank">#${i + 1}</span>
      <img class="lp-av" src="${avUrl}" alt="" 
           style="border-radius:50%;width:28px;height:28px;object-fit:cover;"
           onerror="this.src='${fallback}'">
      <span class="lp-name">${escapeHtml(p.name)}</span>
      <span class="lp-score">${p.score || 0} pts</span>
      <div class="lp-bar" style="width:${pct}%"></div>
    </div>`;
  }
  container.innerHTML = html;
}

/* ============== FINAL PODIUM ============== */
async function renderHostPodium() {
  clearInterval(tickTimer);
  livePodiumVisible = false;
  document.getElementById("live-podium").style.display = "none";

  const playersRef = dbRef(dbPath("broto", code, "players"));
  const snap = playersRef ? await playersRef.get() : { val: () => null };
  const items = [];
  const val = snap.val() || {};
  for (const k in val) if (val[k]) items.push(val[k]);
  items.sort((a, b) => (b.score || 0) - (a.score || 0));

  show("screen-host-podium");
  startLeafFall();

  const stage = document.getElementById("host-podium");
  stage.innerHTML = "";

  const medals = ["🥇", "🥈", "🥉"];
  const flowers = ["🌻", "🌼", "🌸"];

  for (let idx = 0; idx < items.length; idx++) {
    const p = items[idx];
    const isTop3 = idx < 3;
    const rank = idx + 1;
    const medal = isTop3 ? medals[idx] : "";
    const flower = isTop3 ? flowers[idx] : "🌱";
    const avIdx = AVATAR_DATA.findIndex(d => d.name === p.avatar);
    const safeIdx = avIdx >= 0 ? avIdx : 0;
    const avUrl = getAvatarUrl(safeIdx, 56);
    const fallback = getFallbackAvatar(safeIdx, 56);
    const topClass = isTop3 ? (idx === 0 ? "top-1" : idx === 1 ? "top-2" : "top-3") : "";

    const step = document.createElement("div");
    step.className = "podium-step " + topClass;
    step.id = "podium-step-" + idx;
    step.innerHTML = `
      <div class="step-rank">#${rank}</div>
      <img class="step-av" src="${avUrl}" alt="${escapeHtml(p.name)}" 
           style="border-radius:50%;width:52px;height:52px;object-fit:cover;"
           onerror="this.src='${fallback}'">
      <div class="step-info">
        <div class="step-name">${escapeHtml(p.name)}</div>
        <div class="step-score">${p.score || 0} pontos${p.bestStreak > 2 ? ' · 🔥 série ' + p.bestStreak : ''}</div>
      </div>
      <div class="step-medal">${isTop3 ? medal + flower : ""}</div>
      <div class="step-bar-bg"></div>
      <div class="step-bar-fill"></div>
    `;
    stage.appendChild(step);
  }

  const rl = document.getElementById("host-ranklist");
  let rlHtml = "";
  for (let i = 0; i < items.length; i++) {
    const p = items[i];
    const avIdx = AVATAR_DATA.findIndex(d => d.name === p.avatar);
    const safeIdx = avIdx >= 0 ? avIdx : 0;
    const avUrl = getAvatarUrl(safeIdx, 28);
    const fallback = getFallbackAvatar(safeIdx, 28);
    rlHtml += `<div class="rank-row" style="animation-delay:${i * 0.08}s">
      <span class="rn">${i + 1}</span>
      <img src="${avUrl}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" alt=""
           onerror="this.src='${fallback}'">
      <span>${escapeHtml(p.name)}</span>
      <span class="rs">${p.score || 0} pts</span>
    </div>`;
  }
  rl.innerHTML = rlHtml;

  podiumItems = items;
  podiumRevealIndex = items.length - 1;
  sfxDrumRoll();
  setTimeout(revealNextPodiumStep, 800);
}

function revealNextPodiumStep() {
  if (podiumRevealIndex < 0) {
    setTimeout(() => {
      const winnerStep = document.getElementById("podium-step-0");
      if (winnerStep) {
        winnerStep.classList.add("winner-glow");
        sfxWinner();
        spawnConfetti();
        setTimeout(spawnConfetti, 300);
      }
    }, 800);
    return;
  }

  const step = document.getElementById("podium-step-" + podiumRevealIndex);
  if (step) {
    step.classList.add("revealed");
    sfxReveal();

    setTimeout(() => {
      const bar = step.querySelector(".step-bar-fill");
      if (bar) {
        let maxScore = 1;
        for (let i = 0; i < podiumItems.length; i++) {
          maxScore = Math.max(maxScore, podiumItems[i].score || 0);
        }
        const pct = ((podiumItems[podiumRevealIndex].score || 0) / maxScore) * 100;
        bar.style.width = pct + "%";
      }
      const bgBar = step.querySelector(".step-bar-bg");
      if (bgBar) bgBar.style.width = "100%";
    }, 150);
  }

  podiumRevealIndex--;
  const delay = podiumRevealIndex >= 2 ? 700 : 1100;
  setTimeout(revealNextPodiumStep, delay);
}

/* ============== PLAYER FLOW ============== */
function goJoinCode() {
  role = "player";
  show("screen-join-code");
  document.getElementById("join-code-error").textContent = "";
  setTimeout(() => {
    const input = document.getElementById("join-code-input");
    if (input) input.focus();
  }, 300);
}

async function submitCode() {
  initAudio();
  const val = document.getElementById("join-code-input").value.replace(/\D/g, "");
  if (val.length !== 6) {
    document.getElementById("join-code-error").textContent = "Digite os 6 números do código.";
    return;
  }

  if (!initFirebase()) {
    enableDemoMode();
  }

  const metaRef = dbRef(dbPath("broto", val, "meta"));
  const snap = metaRef ? await metaRef.get() : { val: () => null, exists: () => false };
  if (!snap.exists()) {
    document.getElementById("join-code-error").textContent = "Não achamos essa sala. Confira o código com quem está apresentando.";
    return;
  }

  code = val;
  localMeta = snap.val();
  buildAvatarGrid();
  show("screen-join-profile");
  setTimeout(() => {
    const input = document.getElementById("join-name-input");
    if (input) input.focus();
  }, 300);
}

function buildAvatarGrid() {
  const g = document.getElementById("avatar-grid");
  let html = "";
  for (let i = 0; i < AVATARS.length; i++) {
    const isSel = i === 0 ? " sel" : "";
    html += `<div class="avatar-opt${isSel}" data-idx="${i}" onclick="pickAvatar(this)">
      <img src="${AVATARS[i].url}" alt="${AVATARS[i].name}" loading="lazy" 
           style="border-radius:50%;width:52px;height:52px;object-fit:cover;"
           onerror="this.src='${AVATARS[i].fallback}'">
      <div class="av-name">${AVATARS[i].name}</div>
    </div>`;
  }
  g.innerHTML = html;
  myAvatar = AVATARS[0];
}

function pickAvatar(el) {
  const opts = document.querySelectorAll(".avatar-opt");
  opts.forEach(o => o.classList.remove("sel"));
  el.classList.add("sel");
  myAvatar = AVATARS[parseInt(el.dataset.idx)];
}

async function playerJoinRoom() {
  const nameInput = document.getElementById("join-name-input");
  const name = nameInput.value.trim();
  if (!name) {
    document.getElementById("join-profile-error").textContent = "Escreve um nome ou apelido pra gente te chamar :)";
    return;
  }
  if (containsBadWord(name)) {
    document.getElementById("join-profile-error").textContent = "Esse nome não pode ser usado. Escolha outro.";
    nameInput.classList.add("shake");
    setTimeout(() => nameInput.classList.remove("shake"), 400);
    return;
  }
  myName = name.slice(0, 18);
  myPid = uid();
  const p = {
    pid: myPid,
    name: myName,
    avatar: myAvatar.name,
    avatarUrl: myAvatar.url,
    avatarPalette: myAvatar.palette,
    score: 0,
    streak: 0,
    bestStreak: 0,
    joinedAt: Date.now()
  };

  const pRef = dbRef(dbPath("broto", code, "players", myPid));
  if (pRef) await pRef.set(p);

  const avImg = document.getElementById("player-wait-av-img");
  avImg.src = myAvatar.url;
  avImg.onerror = function() { this.src = myAvatar.fallback; };
  avImg.alt = myAvatar.name;
  document.getElementById("player-wait-name").textContent = myName;
  document.getElementById("player-wait-code").textContent = "sala " + code;
  show("screen-player-wait");
  lastSeenStatus = "lobby";
  lastSeenQIndex = -1;

  const metaRef = dbRef(dbPath("broto", code, "meta"));
  if (metaRef) {
    metaRef.on("value", snap => {
      const meta = snap.val();
      if (meta) handlePlayerMetaChange(meta);
    });
  }
}

function handlePlayerMetaChange(meta) {
  localMeta = meta;
  if (meta.status === "question" && (lastSeenStatus !== "question" || meta.qIndex !== lastSeenQIndex)) {
    lastSeenStatus = "question";
    lastSeenQIndex = meta.qIndex;
    hasAnsweredThisQ = false;
    renderPlayerQuestion();
    show("screen-player-question");
  } else if (meta.status === "reveal" && lastSeenStatus !== "reveal") {
    lastSeenStatus = "reveal";
    renderPlayerReveal().then(() => show("screen-player-reveal"));
  } else if (meta.status === "podium" && lastSeenStatus !== "podium") {
    lastSeenStatus = "podium";
    renderPlayerPodium().then(() => show("screen-player-podium"));
  } else if (meta.status === "question" && document.getElementById("screen-player-question").classList.contains("active")) {
    updatePlayerTimer();
  }
}

function renderPlayerQuestion() {
  initAudio();
  const qd = QUESTIONS[localMeta.qIndex];
  document.getElementById("player-qcounter").textContent = "Pergunta " + (localMeta.qIndex + 1) + " de " + QUESTIONS.length;
  document.getElementById("player-qtext").textContent = qd.q;
  document.getElementById("player-answer-status").textContent = "";

  const streakBadge = document.getElementById("player-streak-badge");
  const streakText = document.getElementById("player-streak-text");
  if (myStreak >= 2) {
    streakBadge.style.display = "inline-flex";
    streakText.textContent = "Série x" + myStreak + " 🔥";
  } else {
    streakBadge.style.display = "none";
  }

  let optsHtml = "";
  for (let i = 0; i < qd.opts.length; i++) {
    optsHtml += `<div class="opt o${i} clickable" id="player-opt-${i}" onclick="playerAnswer(${i})">
      <span class="mk">${OPT_MARK[i]}</span>
      <span>${qd.opts[i]}</span>
    </div>`;
  }
  document.getElementById("player-opts").innerHTML = optsHtml;
  updatePlayerTimer();
  updatePlayerGap();
}

function updatePlayerTimer() {
  if (!localMeta || localMeta.status !== "question") return;
  const remain = Math.max(0, localMeta.duration - (Date.now() - localMeta.qStartAt));
  const pct = Math.max(0, Math.min(100, (remain / localMeta.duration) * 100));
  const bar = document.getElementById("player-timerbar");
  const lab = document.getElementById("player-timer");
  if (bar) bar.style.width = pct + "%";
  if (lab) lab.textContent = Math.ceil(remain / 1000) + "s";
}

async function updatePlayerGap() {
  if (!code || !myPid) return;
  const playersRef = dbRef(dbPath("broto", code, "players"));
  const snap = playersRef ? await playersRef.get() : { val: () => null };
  const items = [];
  const val = snap.val() || {};
  for (const k in val) if (val[k]) items.push(val[k]);
  items.sort((a, b) => (b.score || 0) - (a.score || 0));

  let myRank = -1, myScore = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].pid === myPid) { myRank = i + 1; myScore = items[i].score || 0; }
  }

  const gapEl = document.getElementById("player-gap-info");
  const gapText = document.getElementById("player-gap-text");

  if (myRank > 1 && items[myRank - 2]) {
    const gap = (items[myRank - 2].score || 0) - myScore;
    gapEl.style.display = "inline-flex";
    gapText.textContent = "Você está a " + gap + " pts do " + (myRank - 1) + "º lugar";
  } else if (myRank === 1 && items[1]) {
    const lead = myScore - (items[1].score || 0);
    gapEl.style.display = "inline-flex";
    gapText.textContent = "Liderando por " + lead + " pts 🔥";
  } else {
    gapEl.style.display = "none";
  }
}

setInterval(() => {
  if (role === "player" && document.getElementById("screen-player-question").classList.contains("active")) {
    updatePlayerTimer();
    updatePlayerGap();
  }
}, 250);

async function playerAnswer(idx) {
  if (hasAnsweredThisQ) return;
  hasAnsweredThisQ = true;
  const opts = document.querySelectorAll("#player-opts .opt");
  opts.forEach((opt, i) => {
    opt.classList.remove("clickable");
    if (i !== idx) opt.classList.add("dim");
  });
  document.getElementById("player-answer-status").textContent = "Resposta enviada — aguarde a revelação!";
  const ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex, myPid));
  if (ansRef) await ansRef.set({ pid: myPid, choice: idx, at: Date.now() });
}

async function renderPlayerReveal() {
  const qd = QUESTIONS[localMeta.qIndex];
  const ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex, myPid));
  const myAns = ansRef ? (await ansRef.get()).val() : null;
  const pRef = dbRef(dbPath("broto", code, "players", myPid));
  const p = pRef ? (await pRef.get()).val() : null;
  const isCorrect = myAns && myAns.choice === qd.c;

  if (isCorrect) {
    myStreak++;
    myBestStreak = Math.max(myBestStreak, myStreak);
    sfxStreak(myStreak);
  } else {
    myStreak = 0;
  }

  const banner = document.getElementById("player-reveal-banner");
  banner.className = "reveal-banner " + (isCorrect ? "ok" : "no");
  if (!myAns) {
    banner.textContent = "Tempo esgotado ⏳";
  } else if (isCorrect) {
    banner.textContent = "Certinho! 🌿";
    sfxCorrect();
    spawnConfetti();
  } else {
    banner.textContent = "Quase — não foi dessa vez";
    sfxWrong();
  }

  const pts = isCorrect ? calcPoints(myAns.at - localMeta.qStartAt, myStreak) : { base: 0, bonus: 0, total: 0 };
  const ptsText = isCorrect
    ? ("+" + pts.total + " pontos" + (pts.bonus > 0 ? " (" + pts.base + " + 🔥" + pts.bonus + ")" : ""))
    : "";
  document.getElementById("player-reveal-points").textContent = ptsText;
  document.getElementById("player-reveal-total").textContent = "Pontuação total: " + (p ? p.score || 0 : 0);

  const streakReveal = document.getElementById("player-streak-reveal");
  const streakRevealText = document.getElementById("player-streak-reveal-text");
  if (myStreak >= 2) {
    streakReveal.style.display = "flex";
    streakRevealText.textContent = "Série de " + myStreak + " acertos! 🔥";
  } else {
    streakReveal.style.display = "none";
  }

  const playersRef = dbRef(dbPath("broto", code, "players"));
  const snap = playersRef ? await playersRef.get() : { val: () => null };
  const items = [];
  const val = snap.val() || {};
  for (const k in val) if (val[k]) items.push(val[k]);
  items.sort((a, b) => (b.score || 0) - (a.score || 0));

  let myRank = -1, myScore = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].pid === myPid) { myRank = i + 1; myScore = items[i].score || 0; }
  }

  const gapRevealEl = document.getElementById("player-gap-reveal");
  const gapRevealText = document.getElementById("player-gap-reveal-text");
  if (myRank > 1 && items[myRank - 2]) {
    const gap = (items[myRank - 2].score || 0) - myScore;
    gapRevealEl.style.display = "inline-flex";
    gapRevealText.textContent = "Você está a " + gap + " pts do " + (myRank - 1) + "º lugar";
  } else if (myRank === 1 && items[1]) {
    const lead = myScore - (items[1].score || 0);
    gapRevealEl.style.display = "inline-flex";
    gapRevealText.textContent = "Liderando por " + lead + " pts 🔥";
  } else {
    gapRevealEl.style.display = "none";
  }
}

async function renderPlayerPodium() {
  const playersRef = dbRef(dbPath("broto", code, "players"));
  const snap = playersRef ? await playersRef.get() : { val: () => null };
  const items = [];
  const val = snap.val() || {};
  for (const k in val) if (val[k]) items.push(val[k]);
  items.sort((a, b) => (b.score || 0) - (a.score || 0));

  let myRank = -1;
  let me = null;
  for (let i = 0; i < items.length; i++) {
    if (items[i].pid === myPid) {
      myRank = i + 1;
      me = items[i];
    }
  }

  const emojis = ["🥇", "🥈", "🥉"];
  document.getElementById("player-final-emoji").textContent = myRank <= 3 && myRank > 0 ? emojis[myRank - 1] : "🌱";
  document.getElementById("player-final-rank").textContent = (myRank > 0 ? myRank : "?") + "º lugar de " + items.length;
  document.getElementById("player-final-score").textContent = (me ? me.score || 0 : 0) + " pontos" + (me && me.bestStreak > 2 ? " · 🔥 série " + me.bestStreak : "");

  let listHtml = "";
  for (let i = 0; i < items.length; i++) {
    const p = items[i];
    const isMe = p.pid === myPid;
    const avIdx = AVATAR_DATA.findIndex(d => d.name === p.avatar);
    const safeIdx = avIdx >= 0 ? avIdx : 0;
    const avUrl = getAvatarUrl(safeIdx, 28);
    const fallback = getFallbackAvatar(safeIdx, 28);
    const highlight = isMe ? 'border-color:var(--bloom);box-shadow:0 0 0 1px var(--bloom)' : '';
    listHtml += `<div class="rank-row" style="animation-delay:${i * 0.08}s;${highlight}">
      <span class="rn">${i + 1}</span>
      <img src="${avUrl}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" alt=""
           onerror="this.src='${fallback}'">
      <span>${escapeHtml(p.name)}</span>
      <span class="rs">${p.score || 0} pts${p.bestStreak > 2 ? ' 🔥' + p.bestStreak : ''}</span>
    </div>`;
  }
  document.getElementById("player-final-list").innerHTML = listHtml;

  show("screen-player-podium");
  startLeafFall();
  if (myRank <= 3 && myRank > 0) {
    sfxWinner();
    spawnConfetti();
    setTimeout(spawnConfetti, 400);
  }
}

/* ============== BOOT ============== */
(function boot() {
  const params = new URLSearchParams(location.search);
  const preCode = params.get("code");
  if (preCode && /^\d{6}$/.test(preCode)) {
    role = "player";
    if (!initFirebase()) enableDemoMode();
    (async () => {
      const metaRef = dbRef(dbPath("broto", preCode, "meta"));
      const snap = metaRef ? await metaRef.get() : { val: () => null, exists: () => false };
      if (snap.exists()) {
        code = preCode;
        localMeta = snap.val();
        buildAvatarGrid();
        show("screen-join-profile");
      } else {
        goLanding();
      }
    })();
  } else {
    goLanding();
  }
})();
