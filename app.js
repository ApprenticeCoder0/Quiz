/* BROTO v6.2 - Quiz Coletivo */
console.log('[BROTO] App.js carregado v6.2');

const firebaseConfig = {
  apiKey: "AIzaSyDEWTmLRXrlKBKBopYwjlgA6MD2833GY54",
  authDomain: "broto-quiz-7815c.firebaseapp.com",
  databaseURL: "https://broto-quiz-7815c-default-rtdb.firebaseio.com",
  projectId: "broto-quiz-7815c",
  storageBucket: "broto-quiz-7815c.firebasestorage.app",
  messagingSenderId: "379059171454",
  appId: "1:379059171454:web:8574b77f5ec7eec8dbe82f"
};

const AVATAR_DATA = [
  {name:"Chico Mendes", seed:"chico-mendes", icon:"🌳", grad:["#2d5a3d","#5a9e6e"]},
  {name:"Vandana Shiva", seed:"vandana-shiva", icon:"🌾", grad:["#5a3d2d","#9e7a5a"]},
  {name:"Greta Thunberg", seed:"greta-thunberg", icon:"🌍", grad:["#2d3d5a","#5a7a9e"]},
  {name:"Marina Silva", seed:"marina-silva", icon:"🌿", grad:["#3d5a2d","#6e9e5a"]},
  {name:"David Attenborough", seed:"david-attenborough", icon:"🦎", grad:["#3d2d5a","#7a5a9e"]},
  {name:"Wangari Maathai", seed:"wangari-maathai", icon:"🌳", grad:["#5a5a2d","#9e9e5a"]},
  {name:"Jane Goodall", seed:"jane-goodall", icon:"🐒", grad:["#2d5a5a","#5a9e9e"]},
  {name:"Leonardo DiCaprio", seed:"leonardo-dicaprio", icon:"🎬", grad:["#1a3a2a","#4a7a5a"]},
  {name:"Rachel Carson", seed:"rachel-carson", icon:"📖", grad:["#3a1a2a","#7a4a5a"]},
  {name:"Françoise d'Eaubonne", seed:"francoise-eaubonne", icon:"♀️", grad:["#2a3a1a","#5a7a4a"]},
  {name:"Donna Haraway", seed:"donna-haraway", icon:"🐕", grad:["#1a2a3a","#4a5a7a"]},
  {name:"Val Plumwood", seed:"val-plumwood", icon:"🌲", grad:["#3a2a1a","#7a5a4a"]},
  {name:"Carolyn Merchant", seed:"carolyn-merchant", icon:"📚", grad:["#2a1a3a","#5a4a7a"]},
  {name:"Severn Cullis-Suzuki", seed:"severn-cullis-suzuki", icon:"🎤", grad:["#1a3a3a","#4a7a7a"]},
  {name:"Xiuhtezcatl Martinez", seed:"xiuhtezcatl-martinez", icon:"🌵", grad:["#3a3a1a","#7a7a4a"]}
];

function getDiceBearUrl(seed, size) {
  size = size || 120;
  return 'https://api.dicebear.com/7.x/notionists/svg?seed=' + encodeURIComponent(seed) + '&size=' + size + '&backgroundColor=b6e3f4,c0aede,d1d4f9';
}

function generateArtisticAvatar(data, size) {
  size = size || 120;
  var s = size;
  var id = 'av-' + Math.random().toString(36).slice(2, 8);
  var initials = data.name.split(' ').map(function(n){return n[0];}).join('');
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s + '" viewBox="0 0 100 100">' +
    '<defs>' +
      '<linearGradient id="' + id + '-g" x1="0%" y1="0%" x2="100%" y2="100%">' +
        '<stop offset="0%" style="stop-color:' + data.grad[0] + '"/>' +
        '<stop offset="100%" style="stop-color:' + data.grad[1] + '"/>' +
      '</linearGradient>' +
      '<filter id="' + id + '-s">' +
        '<feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.35)"/>' +
      '</filter>' +
    '</defs>' +
    '<circle cx="50" cy="50" r="48" fill="url(#' + id + '-g)" stroke="rgba(240,234,214,0.15)" stroke-width="1.5"/>' +
    '<circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>' +
    '<text x="50" y="48" text-anchor="middle" font-family="Georgia,serif" font-size="24" font-weight="700" fill="#f2ead4" filter="url(#' + id + '-s)">' + initials + '</text>' +
    '<text x="50" y="72" text-anchor="middle" font-size="16">' + data.icon + '</text>' +
  '</svg>';
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function getAvatarUrl(index, size) {
  var data = AVATAR_DATA[index % AVATAR_DATA.length];
  return getDiceBearUrl(data.seed, size);
}

function getFallbackAvatar(index, size) {
  var data = AVATAR_DATA[index % AVATAR_DATA.length];
  return generateArtisticAvatar(data, size);
}

var AVATARS = AVATAR_DATA.map(function(data, i) {
  return {
    name: data.name,
    url: getAvatarUrl(i, 120),
    fallback: getFallbackAvatar(i, 120),
    seed: data.seed,
    palette: data
  };
});

var BAD_WORDS_ALL = [
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
  "maluco","maluca","psicopata","psicotico","maniac","depressivo",
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
  "cafetina",
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
  "drown","hang","burn","knife","blade","razor","overdose","pills",
  "puta","puto","mierda","joder","cono","cabron","maricon","pendejo","gilipollas",
  "hostia","carajo","chingar","chingada","verga","pene","vagina","culo","culero",
  "naco","prieto","negro","negrata","marica","bollera","tortillera","zorra",
  "perra","perro","malparido","hijueputa","hijo de puta","gonorrea","cuca",
  "chucha","teta","tetas","picha","polla","cojones","huevos","mamada","mamon",
  "pajero","coger","cogiendo","cogido","follar","follando","sexo","sexual",
  "desnudo","desnuda","pornografia","porno","xxx","prostituta","puticlub",
  "putain","merde","connard","con","salope","encule","encule","bite","couille",
  "cul","foutre","foutu","nique","niquer","baiser","baise","chier","chiant",
  "conne","conard","pede","pedale","tapette","tarlouze","negre","negro","nazi",
  "hitlerien","pute","putain","salopard","ordure","trou du cul","trouduc"
];

function normalizeLeet(text) {
  var result = text.toLowerCase();
  var replacements = [
    ['4','a'],['@','a'],['^','a'],['a','a'],
    ['8','b'],['6','b'],
    ['<','c'],['{','c'],['[','c'],['c','c'],
    ['0','o'],['o','o'],['o','o'],
    ['3','e'],['&','e'],['e','e'],['e','e'],
    ['9','g'],
    ['1','i'],['!','i'],['|','i'],[':','i'],[';','i'],
    ['7','t'],['+','t'],['t','t'],
    ['5','s'],['$','s'],['z','s'],['s','s'],
    ['2','z'],['%','z']
  ];
  replacements.forEach(function(pair) {
    var from = pair[0];
    var to = pair[1];
    var escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(escaped, 'g'), to);
  });
  return result;
}

function containsBadWord(name) {
  var lower = name.toLowerCase().trim();
  var normalized = normalizeLeet(lower);
  var clean = normalized.replace(/[^a-z\u00e0-\u00ff0-9]/g, '');
  var cleanSpaced = normalized.replace(/[^a-z\u00e0-\u00ff0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  var noSpaces = lower.replace(/\s/g, '');

  for (var i = 0; i < BAD_WORDS_ALL.length; i++) {
    var word = BAD_WORDS_ALL[i].toLowerCase();
    var wordNoSpace = word.replace(/\s/g, '');
    if (lower.indexOf(word) !== -1) return true;
    if (normalized.indexOf(word) !== -1) return true;
    if (clean.indexOf(word.replace(/[^a-z\u00e0-\u00ff0-9]/g, '')) !== -1) return true;
    if (cleanSpaced.indexOf(word) !== -1) return true;
    if (noSpaces.indexOf(wordNoSpace) !== -1) return true;
  }

  if (/(.)(\1){5,}/.test(lower)) return true;
  if (/^\d+$/.test(lower)) return true;

  return false;
}

function checkNameFilter() {
  var input = document.getElementById("join-name-input");
  var warning = document.getElementById("name-filter-warning");
  var btn = document.getElementById("btn-join-room");
  var name = input.value.trim();
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

/* ===== STATE ===== */
var role = null;
var code = null;
var myPid = null;
var myName = "";
var myAvatar = AVATARS[0];
var lastSeenStatus = null;
var lastSeenQIndex = -1;
var tickTimer = null;
var localMeta = null;
var hasAnsweredThisQ = false;
var myLastAnswer = null;
var hostRoster = {};
var db = null;
var isDemoMode = false;
var audioCtx = null;
var podiumRevealIndex = 0;
var podiumItems = [];
var livePodiumVisible = false;
var myStreak = 0;
var myBestStreak = 0;
var gapUpdatePending = false;
var hostNextLocked = false;
/* v6.3 */
var hostBots = {};
var livePodiumHidden = false;
var interstitialBlurred = false;
/* v6.0 */
var lastRoundPoints = 0;
var lastRoundWasCorrect = false;
var interstitialTimer = null;

/* ===== AUDIO ===== */
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playTone(freq, type, duration, vol) {
  if (!audioCtx) return;
  vol = vol || 0.12;
  try {
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
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
  setTimeout(function(){ playTone(659, "sine", 0.15, 0.10); }, 120);
  setTimeout(function(){ playTone(784, "sine", 0.30, 0.10); }, 240);
  setTimeout(function(){ playTone(1047, "sine", 0.40, 0.12); }, 400);
}

function sfxWrong() {
  playTone(180, "sawtooth", 0.25, 0.06);
  setTimeout(function(){ playTone(140, "sawtooth", 0.35, 0.06); }, 150);
  setTimeout(function(){ playTone(100, "sawtooth", 0.40, 0.05); }, 350);
}

function sfxTick() { playTone(900, "sine", 0.04, 0.04); }

function sfxJoin() {
  playTone(440, "sine", 0.10, 0.08);
  setTimeout(function(){ playTone(554, "sine", 0.10, 0.08); }, 100);
  setTimeout(function(){ playTone(659, "sine", 0.15, 0.10); }, 200);
}

function sfxStart() {
  playTone(330, "sine", 0.18, 0.08);
  setTimeout(function(){ playTone(440, "sine", 0.18, 0.08); }, 180);
  setTimeout(function(){ playTone(554, "sine", 0.18, 0.08); }, 360);
  setTimeout(function(){ playTone(659, "sine", 0.35, 0.12); }, 540);
  setTimeout(function(){ playTone(880, "sine", 0.50, 0.14); }, 750);
}

function sfxCountdown(n) {
  var base = 440 + (3 - n) * 120;
  playTone(base, "sine", 0.15, 0.10);
}

function sfxReveal() {
  playTone(440, "sine", 0.10, 0.08);
  setTimeout(function(){ playTone(554, "sine", 0.10, 0.08); }, 100);
  setTimeout(function(){ playTone(659, "sine", 0.15, 0.10); }, 200);
  setTimeout(function(){ playTone(880, "sine", 0.25, 0.12); }, 350);
}

function sfxWinner() {
  var notes = [523, 659, 784, 1047, 1319];
  notes.forEach(function(note, i) {
    setTimeout(function(){ playTone(note, "sine", 0.25, 0.10); }, i * 180);
  });
  setTimeout(function(){ playTone(1568, "sine", 0.80, 0.14); }, notes.length * 180);
}

function sfxDrumRoll() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function(idx){ return function(){ playTone(80 + idx * 25, "triangle", 0.07, 0.05); }; }(i), i * 70);
  }
}

function sfxStreak(n) {
  var base = 440 + Math.min(n, 10) * 55;
  playTone(base, "sine", 0.12, 0.08);
  setTimeout(function(){ playTone(base + 110, "sine", 0.12, 0.08); }, 90);
  setTimeout(function(){ playTone(base + 220, "sine", 0.18, 0.10); }, 180);
  setTimeout(function(){ playTone(base + 330, "sine", 0.25, 0.12); }, 300);
}

function sfxPlayerJoined() {
  playTone(600, "sine", 0.08, 0.06);
  setTimeout(function(){ playTone(750, "sine", 0.12, 0.06); }, 80);
}

function sfxSpotlight() {
  playTone(220, "sine", 0.30, 0.08);
  setTimeout(function(){ playTone(330, "sine", 0.40, 0.10); }, 200);
  setTimeout(function(){ playTone(440, "sine", 0.50, 0.12); }, 500);
}

function sfxSuspense() {
  playTone(110, "sine", 0.80, 0.06);
  setTimeout(function(){ playTone(130, "sine", 0.60, 0.05); }, 400);
}

function sfxScoreTick() {
  playTone(880, "sine", 0.04, 0.05);
}

function sfxSlide() {
  playTone(330, "sine", 0.12, 0.06);
  setTimeout(function(){ playTone(440, "sine", 0.12, 0.06); }, 80);
}

/* ===== BOT SIMULATOR v6.3 ===== */
function addBots(n) {
  for (var i = 0; i < n; i++) {
    createBotPlayer();
  }
  sfxJoin();
}

function createBotPlayer() {
  var botNames = ["EcoBot", "VerdeBot", "BrotoBot", "FloraBot", "RaizBot", "SementeBot", "FolhaBot", "PétalaBot", "MossBot", "LíquenBot"];
  var botName = botNames[Math.floor(Math.random() * botNames.length)] + " " + Math.floor(Math.random() * 999);
  var botAvatarIdx = Math.floor(Math.random() * AVATARS.length);
  var botPid = "bot_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  var bot = {
    pid: botPid,
    name: botName,
    avatar: AVATARS[botAvatarIdx].name,
    avatarUrl: AVATARS[botAvatarIdx].url,
    avatarPalette: AVATARS[botAvatarIdx].palette,
    score: 0,
    streak: 0,
    bestStreak: 0,
    joinedAt: Date.now(),
    isBot: true
  };
  hostBots[botPid] = bot;
  var pRef = dbRef(dbPath("broto", code, "players", botPid));
  if (pRef) pRef.set(bot);
}

function scheduleBotAnswers() {
  if (!localMeta || localMeta.status !== "question") return;
  var qd = getQuestion(localMeta.qIndex, localMeta);
  for (var pid in hostBots) {
    (function(botPid) {
      if (hostBots[botPid].timer) clearTimeout(hostBots[botPid].timer);
      var delay = 2000 + Math.random() * (localMeta.duration - 4000);
      if (delay < 1500) delay = 1500;
      hostBots[botPid].timer = setTimeout(function() {
        if (!localMeta || localMeta.status !== "question") return;
        var ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex, botPid));
        if (ansRef) {
          var choice = Math.random() < 0.72 ? qd.c : Math.floor(Math.random() * qd.opts.length);
          ansRef.set({ pid: botPid, choice: choice, at: Date.now() });
        }
      }, delay);
    })(pid);
  }
}

function clearBotTimers() {
  for (var pid in hostBots) {
    if (hostBots[pid].timer) {
      clearTimeout(hostBots[pid].timer);
      hostBots[pid].timer = null;
    }
  }
}

function clearBots() {
  for (var pid in hostBots) {
    var pRef = dbRef(dbPath("broto", code, "players", pid));
    if (pRef) pRef.set(null);
    if (hostBots[pid].timer) clearTimeout(hostBots[pid].timer);
  }
  hostBots = {};
}

function kickPlayer(pid) {
  if (!code || !pid) return;
  if (hostBots[pid]) {
    if (hostBots[pid].timer) clearTimeout(hostBots[pid].timer);
    delete hostBots[pid];
  }
  var pRef = dbRef(dbPath("broto", code, "players", pid));
  if (pRef) pRef.set(null);
}

/* ===== PRIVACIDADE DO PLACAR v6.3 ===== */
function toggleLivePodium() {
  livePodiumHidden = !livePodiumHidden;
  var lp = document.getElementById("live-podium");
  var btn = document.getElementById("btn-toggle-podium");
  if (lp) {
    if (livePodiumHidden) lp.classList.add("hidden");
    else lp.classList.remove("hidden");
  }
  if (btn) {
    btn.textContent = livePodiumHidden ? "👁️ Mostrar Rank" : "🙈 Ocultar Rank";
  }
  localMeta.hideLivePodium = livePodiumHidden;
  var metaRef = dbRef(dbPath("broto", code, "meta"));
  if (metaRef) metaRef.set(localMeta);
}

function toggleInterstitialBlur() {
  interstitialBlurred = !interstitialBlurred;
  var screen = document.getElementById("screen-host-interstitial");
  var btn = document.getElementById("btn-toggle-blur");
  if (screen) {
    if (interstitialBlurred) screen.classList.add("blur-mode");
    else screen.classList.remove("blur-mode");
  }
  if (btn) {
    btn.textContent = interstitialBlurred ? "👁️ Mostrar Placar" : "🙈 Ocultar Placar";
  }
}

function isSuspenseMode() {
  return localMeta && localMeta.qIndex >= 19;
}


/* ===== FIREBASE INIT ===== */
function initFirebase() {
  try {
    // v6.2: firebaseConfig vem de config.js (carregado antes).
    // Se não estiver definida, cai em demo mode sem quebrar.
    if (typeof firebaseConfig !== 'undefined' && firebaseConfig.apiKey && firebaseConfig.apiKey.indexOf("XXXX") === -1 && typeof firebase !== 'undefined' && firebase.initializeApp) {
      firebase.initializeApp(firebaseConfig);
      db = firebase.database();
      updateConnStatus(true);
      console.log('[BROTO] Firebase conectado');
      return true;
    }
  } catch (e) {
    console.error("[BROTO] Firebase init error:", e);
  }
  updateConnStatus(false);
  console.log('[BROTO] Firebase offline, usando demo mode');
  return false;
}

function updateConnStatus(online) {
  var el = document.getElementById("conn-status");
  if (!el) return;
  var dot = el.querySelector('.conn-dot');
  var text = el.querySelector('.conn-text');
  if (online) {
    el.className = "conn-status online";
    if (text) text.textContent = "online";
    if (dot) { dot.style.background = "var(--leaf)"; dot.style.boxShadow = "0 0 6px var(--leaf)"; dot.style.animation = "none"; }
  } else {
    el.className = "conn-status offline";
    if (text) text.textContent = "offline — demo";
    if (dot) { dot.style.background = "var(--bloom)"; dot.style.boxShadow = "0 0 6px var(--bloom)"; }
  }
}

/* ===== DEMO MODE ===== */
function enableDemoMode() {
  isDemoMode = true;
  updateConnStatus(false);
  var badge = document.getElementById("demo-badge");
  if (badge) badge.style.display = "flex";
  window.demoStorage = {};
  window.demoListeners = {};
  console.log('[BROTO] Demo mode ativado');
}

function toggleDemoMode() {
  isDemoMode = !isDemoMode;
  location.reload();
}

function demoSet(path, val) {
  window.demoStorage[path] = JSON.parse(JSON.stringify(val));
  var cbs = window.demoListeners[path] || [];
  cbs.forEach(function(cb) {
    cb({ val: function(){ return window.demoStorage[path]; }, exists: function(){ return true; } });
  });
}

function demoGet(path) {
  return window.demoStorage[path] || null;
}

function demoOnValue(path, cb) {
  if (!window.demoListeners[path]) window.demoListeners[path] = [];
  window.demoListeners[path].push(cb);
  var val = window.demoStorage[path];
  if (val !== undefined) cb({ val: function(){ return val; }, exists: function(){ return true; } });
}

function demoOff(path) {
  window.demoListeners[path] = [];
}

/* ===== DB WRAPPER ===== */
function dbRef(path) {
  if (isDemoMode) {
    return {
      set: function(val) { return Promise.resolve(demoSet(path, val)); },
      get: function() { return Promise.resolve({ val: function(){ return demoGet(path); }, exists: function(){ return demoGet(path) !== null; } }); },
      on: function(evt, cb) { if (evt === "value") demoOnValue(path, cb); },
      off: function(evt) { if (evt === "value") demoOff(path); },
      child: function(sub) { return dbRef(path + "/" + sub); },
      once: function(evt) { return Promise.resolve({ val: function(){ return demoGet(path); }, exists: function(){ return demoGet(path) !== null; } }); }
    };
  }
  if (!db) return null;
  return db.ref(path);
}

function dbPath() {
  return Array.prototype.slice.call(arguments).join("/");
}

/* ===== UTIL ===== */
function show(id) {
  var screens = document.querySelectorAll(".screen");
  screens.forEach(function(s) { s.classList.remove("active"); });
  var el = document.getElementById(id);
  if (el) {
    requestAnimationFrame(function() { el.classList.add("active"); });
  }
}

function uid() {
  return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function roomCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function escapeHtml(s) {
  var div = document.createElement('div');
  div.textContent = s || "";
  return div.innerHTML;
}

function calcPoints(elapsedMs, streak) {
  var clamped = Math.max(0, Math.min(QUESTION_MS, elapsedMs));
  var ratio = 1 - (clamped / QUESTION_MS);
  var base = Math.round(500 + 500 * ratio);
  var streakBonus = Math.min(streak, 10) * 0.10;
  var total = Math.round(base * (1 + streakBonus));
  return { base: base, bonus: Math.round(base * streakBonus), total: total };
}

/* v6.0 — Animação de contagem de números */
function animateValue(el, start, end, duration, onDone) {
  if (start === end) {
    el.textContent = end;
    if (onDone) onDone();
    return;
  }
  var range = end - start;
  var startTime = null;
  var tickCount = 0;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = Math.min((timestamp - startTime) / duration, 1);
    var ease = 1 - Math.pow(1 - progress, 4);
    var current = Math.floor(start + range * ease);
    if (el.textContent !== String(current)) {
      el.textContent = current;
      tickCount++;
      if (tickCount % 3 === 0) sfxScoreTick();
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = end;
      if (onDone) onDone();
    }
  }
  window.requestAnimationFrame(step);
}

/* ===== PARTICLES & EFFECTS ===== */
function spawnConfetti() {
  var colors = ["#e07098", "#6abf6a", "#d4b840", "#f0c0d0", "#90e090", "#ff7b7b", "#5ecdc4", "#ffd700", "#ff8c00", "#40e0d0"];
  var shapes = ["circle", "square", "triangle", "star"];
  for (var i = 0; i < 80; i++) {
    var el = document.createElement("div");
    el.className = "confetti";
    el.style.left = (Math.random() * 100) + "vw";
    el.style.top = "-10px";
    var size = 6 + Math.random() * 14;
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    var shape = shapes[Math.floor(Math.random() * shapes.length)];
    if (shape === "circle") el.style.borderRadius = "50%";
    else if (shape === "triangle") {
      el.style.width = "0"; el.style.height = "0";
      el.style.background = "transparent";
      el.style.borderLeft = (size/2) + "px solid transparent";
      el.style.borderRight = (size/2) + "px solid transparent";
      el.style.borderBottom = size + "px solid " + colors[Math.floor(Math.random() * colors.length)];
    } else if (shape === "star") {
      el.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    }
    el.style.animationDuration = (2 + Math.random() * 2.5) + "s";
    el.style.animationDelay = (Math.random() * 0.6) + "s";
    el.style.opacity = 0.7 + Math.random() * 0.3;
    el.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
    document.body.appendChild(el);
    setTimeout(function(e){ return function(){ e.remove(); }; }(el), 5000);
  }
}

function spawnGoldRain() {
  for (var i = 0; i < 40; i++) {
    var el = document.createElement("div");
    el.className = "gold-rain";
    el.style.left = (Math.random() * 100) + "vw";
    el.style.top = "-20px";
    var size = 4 + Math.random() * 8;
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.animationDuration = (1.5 + Math.random() * 2) + "s";
    el.style.animationDelay = (Math.random() * 1) + "s";
    el.style.opacity = 0.6 + Math.random() * 0.4;
    document.body.appendChild(el);
    setTimeout(function(e){ return function(){ e.remove(); }; }(el), 4000);
  }
}

function spawnLeafFall() {
  var el = document.createElement("div");
  el.className = "leaf-fall";
  var leaves = ["🍃", "🌸", "🌿", "🍂", "🌾", "🌼", "🌺", "🌻", "🌱"];
  el.textContent = leaves[Math.floor(Math.random() * leaves.length)];
  el.style.left = (Math.random() * 100) + "vw";
  el.style.animationDuration = (3 + Math.random() * 4) + "s";
  el.style.fontSize = (14 + Math.random() * 18) + "px";
  el.style.opacity = 0.4 + Math.random() * 0.4;
  document.body.appendChild(el);
  setTimeout(function(e){ return function(){ e.remove(); }; }(el), 8000);
}

var leafInterval = null;
function startLeafFall() {
  if (leafInterval) return;
  leafInterval = setInterval(spawnLeafFall, 300);
}
function stopLeafFall() {
  clearInterval(leafInterval);
  leafInterval = null;
}

function spawnParticles() {
  var colors = ["#6abf6a", "#e07098", "#d4b840", "#90e090"];
  for (var i = 0; i < 20; i++) {
    var el = document.createElement("div");
    el.className = "particle";
    el.style.left = (Math.random() * 100) + "vw";
    el.style.bottom = "-20px";
    var size = 3 + Math.random() * 7;
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = "50%";
    el.style.animation = "float-up " + (4 + Math.random() * 5) + "s linear forwards";
    el.style.animationDelay = (Math.random() * 3) + "s";
    el.style.opacity = 0.3 + Math.random() * 0.4;
    document.body.appendChild(el);
    setTimeout(function(e){ return function(){ e.remove(); }; }(el), 10000);
  }
}

/* v6.1 — Estrelas cintilantes para o pódio */
function spawnStarLights(container, count, color) {
  for (var i = 0; i < count; i++) {
    var star = document.createElement("div");
    star.className = "star-light";
    star.style.left = (10 + Math.random() * 80) + "%";
    star.style.top = (5 + Math.random() * 90) + "%";
    star.style.animationDelay = (Math.random() * 2) + "s";
    star.style.animationDuration = (1.5 + Math.random() * 1.5) + "s";
    if (color) star.style.background = color;
    container.appendChild(star);
  }
}

function showCountdown(onComplete) {
  var overlay = document.createElement("div");
  overlay.className = "countdown-overlay";
  overlay.innerHTML = '<div class="countdown-num" id="cd-num">3</div><div class="countdown-label">Preparar...</div>';
  document.body.appendChild(overlay);

  var count = 3;
  var labels = ["Preparar...", "Apontar...", "Já!"];

  function tick() {
    sfxCountdown(count);
    var numEl = document.getElementById("cd-num");
    var labelEl = overlay.querySelector(".countdown-label");
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
      setTimeout(function() {
        overlay.remove();
        if (onComplete) onComplete();
      }, 350);
    }
  }

  setTimeout(tick, 400);
}

/* ===== NAV ===== */
function goLanding() {
  role = null;
  show("screen-landing");
  startAmbientLeaves();
}

function startAmbientLeaves() {
  var container = document.getElementById("floating-leaves");
  if (!container) return;
  container.innerHTML = "";
  var leaves = ["🍃", "🌸", "🌿", "🍂", "🌾"];
  for (var i = 0; i < 8; i++) {
    var el = document.createElement("span");
    el.textContent = leaves[Math.floor(Math.random() * leaves.length)];
    el.style.position = "absolute";
    el.style.left = (Math.random() * 100) + "%";
    el.style.top = (Math.random() * 100) + "%";
    el.style.fontSize = (12 + Math.random() * 20) + "px";
    el.style.opacity = 0.15 + Math.random() * 0.2;
    el.style.animation = "orb-float " + (10 + Math.random() * 15) + "s ease-in-out infinite";
    el.style.animationDelay = (Math.random() * -10) + "s";
    el.style.pointerEvents = "none";
    container.appendChild(el);
  }
}

/* ===== HOST FLOW ===== */
function goHostSetup() {
  console.log('[BROTO] goHostSetup chamado');
  initAudio();
  role = "host";
  show("screen-host-setup");

  if (!initFirebase()) {
    enableDemoMode();
  }

  code = roomCode();

  var totalQs = getTotalQuestions();
  var questionOrder = generateQuestionOrder(totalQs);
  var optionOrders = generateOptionOrders(questionOrder);

  var meta = {
    status: "lobby",
    qIndex: -1,
    qStartAt: 0,
    duration: QUESTION_MS,
    total: totalQs,
    createdAt: Date.now(),
    questionOrder: questionOrder,
    optionOrders: optionOrders
  };
  localMeta = meta;
  hostBots = {};

  var metaRef = dbRef(dbPath("broto", code, "meta"));
  if (metaRef) {
    metaRef.set(meta).then(function() {
      console.log('[BROTO] Sala criada:', code);
      document.getElementById("host-code").textContent = code.replace(/(\d{3})(\d{3})/, "$1 $2");

      var qrBox = document.getElementById("qr-box");
      qrBox.innerHTML = "";
      try {
        var joinUrl = location.origin + location.pathname + "?code=" + code;
        document.getElementById("qr-url").textContent = joinUrl;
        if (typeof QRCode !== 'undefined') {
          new QRCode(qrBox, {
            text: joinUrl,
            width: 160,
            height: 160,
            colorDark: "#0a1f12",
            colorLight: "#f0ead6",
            correctLevel: QRCode.CorrectLevel.M
          });
        }
      } catch (e) {}

      show("screen-host-lobby");

      var playersRef = dbRef(dbPath("broto", code, "players"));
      if (playersRef) {
        playersRef.on("value", function(snap) {
          var val = snap.val() || {};
          var prevCount = Object.keys(hostRoster).length;
          hostRoster = val;
          if (document.getElementById("screen-host-lobby").classList.contains("active")) {
            renderLobbyPlayers();
            var newCount = Object.keys(val).length;
            if (newCount > prevCount && prevCount > 0) {
              sfxPlayerJoined();
            }
          }
        });
      }

      var metaR = dbRef(dbPath("broto", code, "meta"));
      if (metaR) {
        metaR.on("value", function(snap) {
          var m = snap.val();
          if (m) localMeta = m;
        });
      }
    }).catch(function(err) {
      console.error('[BROTO] Erro ao criar sala:', err);
      alert('Erro ao criar sala. Tente recarregar a página.');
    });
  }
}

function renderLobbyPlayers() {
  var grid = document.getElementById("host-players");
  var list = [];
  for (var key in hostRoster) list.push(hostRoster[key]);
  list.sort(function(a, b) { return (a.joinedAt || 0) - (b.joinedAt || 0); });

  var html = "";
  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    var avIdx = AVATAR_DATA.findIndex(function(d) { return d.name === p.avatar; });
    var safeIdx = avIdx >= 0 ? avIdx : 0;
    var avUrl = getAvatarUrl(safeIdx, 80);
    var fallback = getFallbackAvatar(safeIdx, 80);
    html += '<div class="sprout" style="animation-delay:' + (i * 0.05) + 's">' +
      '<img class="av" src="' + avUrl + '" alt="' + escapeHtml(p.name) + '" ' +
      'style="border-radius:50%;width:40px;height:40px;object-fit:cover;" ' +
      'onerror="this.src=\'' + fallback + '\'">' +
      '<div class="nm">' + escapeHtml(p.name) + '</div></div>';
  }
  grid.innerHTML = html;

  document.getElementById("host-count-text").textContent = list.length + " pessoa" + (list.length === 1 ? "" : "s") + " na sala";
  var btn = document.getElementById("btn-start-game");
  if (btn) btn.disabled = list.length === 0;
}

function hostStartGame() {
  console.log('[BROTO] hostStartGame chamado');
  initAudio();
  sfxStart();

  showCountdown(function() {
    // v6.2 FIX: Garantir que questionOrder e optionOrders sejam preservados
    // Se por algum motivo foram perdidos, regenerar
    if (!localMeta.questionOrder || !localMeta.optionOrders) {
      var totalQs = getTotalQuestions();
      localMeta.questionOrder = generateQuestionOrder(totalQs);
      localMeta.optionOrders = generateOptionOrders(localMeta.questionOrder);
    }
    localMeta.total = localMeta.total || getTotalQuestions();
    localMeta.qIndex = 0;
    localMeta.status = "question";
    localMeta.qStartAt = Date.now();
    var metaRef = dbRef(dbPath("broto", code, "meta"));
    if (metaRef) {
      metaRef.set(localMeta).then(function() {
        renderHostQuestion();
        show("screen-host-game");
        startHostTimerTick();
        listenForAnswers();
        scheduleBotAnswers();
        spawnParticles();
        livePodiumVisible = true;
        if (localMeta.hideLivePodium) { livePodiumHidden = true; } else { livePodiumHidden = false; }
        var lp = document.getElementById("live-podium");
        var btn = document.getElementById("btn-toggle-podium");
        if (lp) { if (livePodiumHidden) lp.classList.add("hidden"); else lp.classList.remove("hidden"); }
        if (btn) { btn.textContent = livePodiumHidden ? "👁️ Mostrar Rank" : "🙈 Ocultar Rank"; }
        document.getElementById("live-podium").style.display = "flex";
        updateLivePodium();
      });
    }
  });
}

function listenForAnswers() {
  var ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex));
  if (ansRef) {
    ansRef.on("value", function(snap) {
      var val = snap.val() || {};
      var count = 0;
      for (var k in val) count++;
      var total = 0;
      for (var k in hostRoster) total++;
      var el = document.getElementById("host-answered");
      if (el) el.textContent = count + " de " + total + " respostas";
    });
  }
}

function renderHostQuestion() {
  // v6.2 FIX: Host também deve garantir que tem questionOrder/optionOrders
  if (!localMeta || !localMeta.questionOrder || !localMeta.optionOrders) {
    console.error('[BROTO] Host sem questionOrder/optionOrders!');
    var totalQs = getTotalQuestions();
    localMeta.questionOrder = generateQuestionOrder(totalQs);
    localMeta.optionOrders = generateOptionOrders(localMeta.questionOrder);
    localMeta.total = totalQs;
  }
  var qd = getQuestion(localMeta.qIndex, localMeta);
  var total = localMeta.total || getTotalQuestions();
  document.getElementById("host-qcounter").textContent = "Pergunta " + (localMeta.qIndex + 1) + " de " + total;
  document.getElementById("host-qnum").textContent = localMeta.qIndex + 1;
  document.getElementById("host-answered").textContent = "0 respostas";
  document.getElementById("host-qtext").textContent = qd.q;

  var optsHtml = "";
  for (var i = 0; i < qd.opts.length; i++) {
    optsHtml += '<div class="opt o' + i + '" id="host-opt-' + i + '" style="animation-delay:' + (0.1 + i * 0.08) + 's">' +
      '<span class="mk">' + OPT_MARK[i] + '</span>' +
      '<span>' + qd.opts[i] + '</span></div>';
  }
  document.getElementById("host-opts").innerHTML = optsHtml;

  document.getElementById("btn-reveal").style.display = "inline-flex";
  document.getElementById("host-timerbar").style.width = "100%";

  // v6.0 — animação de entrada na pergunta
  var qbox = document.querySelector("#screen-host-game .question-box");
  if (qbox) {
    qbox.style.animation = "none";
    void qbox.offsetHeight;
    qbox.style.animation = "question-enter 0.6s cubic-bezier(0.2,1.4,0.4,1) both";
  }
}

function startHostTimerTick() {
  clearInterval(tickTimer);
  tickTimer = setInterval(function() {
    if (!localMeta || localMeta.status !== "question") return;
    var remain = localMeta.duration - (Date.now() - localMeta.qStartAt);
    var pct = Math.max(0, Math.min(100, (remain / localMeta.duration) * 100));
    var bar = document.getElementById("host-timerbar");
    if (bar) bar.style.width = pct + "%";
    if (remain <= 3000 && remain > 2500) sfxTick();
    if (remain <= 0) {
      clearInterval(tickTimer);
      hostReveal();
    }
  }, 150);
}

function hostReveal() {
  if (localMeta.status !== "question") return;
  clearInterval(tickTimer);
  clearBotTimers();
  localMeta.status = "reveal";
  var metaRef = dbRef(dbPath("broto", code, "meta"));
  if (metaRef) metaRef.set(localMeta);

  var qi = localMeta.qIndex;
  var qd = getQuestion(qi, localMeta);
  var ansRef = dbRef(dbPath("broto", code, "answers", qi));

  function processAnswers(snap) {
    var answers = (snap && snap.val) ? snap.val() || {} : {};
    var counts = [0, 0, 0, 0];
    for (var key in answers) {
      var a = answers[key];
      if (a && a.choice >= 0 && a.choice < 4) counts[a.choice]++;
    }
    var total = 0;
    for (var k in answers) total++;
    total = Math.max(1, total);

    for (var i = 0; i < qd.opts.length; i++) {
      var el = document.getElementById("host-opt-" + i);
      if (!el) continue;
      if (i === qd.c) el.classList.add("correct");
      else el.classList.add("dim");
      var pct = Math.round((counts[i] / total) * 100);
      el.innerHTML += '<div class="bar" style="width:' + pct + '%"></div>' +
        '<div class="bar-label">' + pct + '%</div>';
    }

    /* v6.2 FIX — Processa TODOS os jogadores: quem acertou, quem errou,
       e quem NÃO respondeu (streak zerada, 0 pts) */
    var playersRef = dbRef(dbPath("broto", code, "players"));
    if (playersRef) {
      playersRef.get().then(function(playersSnap) {
        var allPlayers = playersSnap.val() || {};

        // Primeiro: zerar streak de quem NÃO respondeu
        for (var pid in allPlayers) {
          var answered = false;
          for (var key in answers) {
            if (answers[key] && answers[key].pid === pid) {
              answered = true;
              break;
            }
          }
          if (!answered) {
            allPlayers[pid].streak = 0;
            // score não muda (0 pts)
          }
        }

        // Depois: processar quem respondeu
        for (var key in answers) {
          var a = answers[key];
          if (!a || !a.pid) continue;
          var p = allPlayers[a.pid] || {};
          var isCorrect = (a.choice === qd.c);
          var pts = isCorrect ? calcPoints(a.at - localMeta.qStartAt, p.streak || 0).total : 0;
          p.score = (p.score || 0) + pts;
          if (isCorrect) {
            p.streak = (p.streak || 0) + 1;
            p.bestStreak = Math.max(p.bestStreak || 0, p.streak);
          } else {
            p.streak = 0;
          }
          allPlayers[a.pid] = p;
        }

        playersRef.set(allPlayers).then(function() {
          updateLivePodium();
          document.getElementById("btn-reveal").style.display = "none";

          // v6.2 — Se for a última pergunta, vai direto ao podium
          var totalQs = localMeta.total || getTotalQuestions();
          var isLastQuestion = (localMeta.qIndex + 1 >= totalQs);

          setTimeout(function() {
            if (isLastQuestion) {
              localMeta.status = "podium";
              var metaRef2 = dbRef(dbPath("broto", code, "meta"));
              if (metaRef2) {
                metaRef2.set(localMeta).then(function() {
                  renderHostPodium();
                });
              }
            } else {
              localMeta.status = "interstitial";
              var metaRef2 = dbRef(dbPath("broto", code, "meta"));
              if (metaRef2) {
                metaRef2.set(localMeta).then(function() {
                  renderHostInterstitial();
                  show("screen-host-interstitial");
                });
              }
            }
          }, 3000);
        });
      });
    } else {
      // Fallback se não houver playersRef
      document.getElementById("btn-reveal").style.display = "none";
      var totalQs = localMeta.total || getTotalQuestions();
      var isLastQuestion = (localMeta.qIndex + 1 >= totalQs);
      setTimeout(function() {
        if (isLastQuestion) {
          localMeta.status = "podium";
          var metaRef2 = dbRef(dbPath("broto", code, "meta"));
          if (metaRef2) {
            metaRef2.set(localMeta).then(function() {
              renderHostPodium();
            });
          }
        } else {
          localMeta.status = "interstitial";
          var metaRef2 = dbRef(dbPath("broto", code, "meta"));
          if (metaRef2) {
            metaRef2.set(localMeta).then(function() {
              renderHostInterstitial();
              show("screen-host-interstitial");
            });
          }
        }
      }, 3000);
    }
  }

  if (ansRef) {
    ansRef.get().then(processAnswers);
  } else {
    processAnswers({ val: function(){ return {}; } });
  }
}

/* v6.0 — INTERSTITIAL HOST */
function renderHostInterstitial() {
  sfxSlide();
  var suspenseBox = document.getElementById("host-suspense-box");
  var podiumBox = document.getElementById("host-interstitial-podium");
  var streakBox = document.getElementById("host-interstitial-streak");
  if (isSuspenseMode()) {
    if (podiumBox) podiumBox.style.display = "none";
    if (streakBox) streakBox.style.display = "none";
    if (suspenseBox) suspenseBox.style.display = "block";
    return;
  } else {
    if (podiumBox) podiumBox.style.display = "flex";
    if (streakBox) streakBox.style.display = "block";
    if (suspenseBox) suspenseBox.style.display = "none";
  }
  var playersRef = dbRef(dbPath("broto", code, "players"));
  if (!playersRef) return;

  playersRef.get().then(function(snap) {
    var items = [];
    var val = snap.val() || {};
    for (var k in val) if (val[k]) items.push(val[k]);
    items.sort(function(a, b) { return (b.score || 0) - (a.score || 0); });

    // Maior streak
    var maxStreak = 0, streakHolder = null;
    for (var i = 0; i < items.length; i++) {
      if ((items[i].bestStreak || 0) > maxStreak) {
        maxStreak = items[i].bestStreak;
        streakHolder = items[i];
      }
    }

    var streakEl = document.getElementById("host-interstitial-streak");
    if (streakEl) {
      if (maxStreak >= 2 && streakHolder) {
        streakEl.innerHTML = '<div class="streak-banner-host">' +
          '<span class="streak-flame">🔥</span>' +
          '<span>Maior sequência: <strong>' + escapeHtml(streakHolder.name) + '</strong> — ' + maxStreak + ' acertos!</span>' +
          '</div>';
        streakEl.style.display = "block";
      } else {
        streakEl.style.display = "none";
      }
    }

    // Render top 8
    var html = "";
    var maxScore = Math.max(1, items[0] ? items[0].score || 0 : 0);
    for (var i = 0; i < Math.min(items.length, 5); i++) {
      var p = items[i];
      var avIdx = AVATAR_DATA.findIndex(function(d) { return d.name === p.avatar; });
      var safeIdx = avIdx >= 0 ? avIdx : 0;
      var avUrl = getAvatarUrl(safeIdx, 56);
      var fallback = getFallbackAvatar(safeIdx, 56);
      var pct = ((p.score || 0) / maxScore) * 100;
      var medals = ["🥇", "🥈", "🥉"];
      var medal = i < 3 ? medals[i] : "";
      var topClass = i < 3 ? " is-top" + (i+1) : "";

      html += '<div class="interstitial-row' + topClass + '" style="animation-delay:' + (i * 0.08) + 's">' +
        '<span class="is-rank">' + (i + 1) + '</span>' +
        '<img class="is-av" src="' + avUrl + '" alt="" onerror="this.src=\'' + fallback + '\'">' +
        '<div class="is-info">' +
          '<div class="is-name">' + escapeHtml(p.name) + ' <span class="is-medal">' + medal + '</span></div>' +
          '<div class="is-bar-bg"><div class="is-bar-fill" style="width:0%" data-width="' + pct + '%"></div></div>' +
        '</div>' +
        '<div class="is-score" data-target="' + (p.score || 0) + '">0</div>' +
      '</div>';
    }

    document.getElementById("host-interstitial-podium").innerHTML = html;

    // Anima barras e scores
    setTimeout(function() {
      var bars = document.querySelectorAll("#host-interstitial-podium .is-bar-fill");
      bars.forEach(function(bar) {
        bar.style.width = bar.dataset.width;
      });
      var scores = document.querySelectorAll("#host-interstitial-podium .is-score");
      scores.forEach(function(sc) {
        animateValue(sc, 0, parseInt(sc.dataset.target), 1200);
      });
    }, 100);
  });
}

function hostNextFromInterstitial() {
  if (hostNextLocked) return;
  hostNextLocked = true;
  clearBotTimers();
  interstitialBlurred = false;
  var screen = document.getElementById("screen-host-interstitial");
  if (screen) screen.classList.remove("blur-mode");
  var btn = document.getElementById("btn-toggle-blur");
  if (btn) btn.textContent = "🙈 Ocultar Placar";

  var totalQs = localMeta.total || getTotalQuestions();
  if (localMeta.qIndex + 1 < totalQs) {
    localMeta.qIndex += 1;
    localMeta.status = "question";
    localMeta.qStartAt = Date.now();
    var metaRef = dbRef(dbPath("broto", code, "meta"));
    if (metaRef) {
      metaRef.set(localMeta).then(function() {
        renderHostQuestion();
        show("screen-host-game");
        startHostTimerTick();
        listenForAnswers();
        scheduleBotAnswers();
        updateLivePodium();
        hostNextLocked = false;
      }).catch(function(err) {
        console.error('[BROTO] Erro ao avançar pergunta:', err);
        hostNextLocked = false;
      });
    } else {
      hostNextLocked = false;
    }
  } else {
    localMeta.status = "podium";
    var metaRef = dbRef(dbPath("broto", code, "meta"));
    if (metaRef) metaRef.set(localMeta);
    renderHostPodium();
    hostNextLocked = false;
  }
}

/* ===== LIVE PODIUM ===== */
function updateLivePodium() {
  if (!livePodiumVisible) return;
  var playersRef = dbRef(dbPath("broto", code, "players"));
  if (!playersRef) return;

  playersRef.get().then(function(snap) {
    var items = [];
    var val = snap.val() || {};
    for (var k in val) if (val[k]) items.push(val[k]);
    items.sort(function(a, b) { return (b.score || 0) - (a.score || 0); });

    var container = document.getElementById("live-podium-content");
    if (!container) return;

    var maxScore = 1;
    for (var i = 0; i < items.length; i++) maxScore = Math.max(maxScore, items[i].score || 0);

    var html = "";
    for (var i = 0; i < Math.min(items.length, 5); i++) {
      var p = items[i];
      var isLeader = i === 0;
      var pct = ((p.score || 0) / maxScore) * 100;
      var avIdx = AVATAR_DATA.findIndex(function(d) { return d.name === p.avatar; });
      var safeIdx = avIdx >= 0 ? avIdx : 0;
      var avUrl = getAvatarUrl(safeIdx, 36);
      var fallback = getFallbackAvatar(safeIdx, 36);
      html += '<div class="live-podium-row ' + (isLeader ? 'leader' : '') + '">' +
        '<span class="lp-rank">#' + (i + 1) + '</span>' +
        '<img class="lp-av" src="' + avUrl + '" alt="" ' +
        'style="border-radius:50%;width:28px;height:28px;object-fit:cover;" ' +
        'onerror="this.src=\'' + fallback + '\'">' +
        '<span class="lp-name">' + escapeHtml(p.name) + '</span>' +
        '<span class="lp-score">' + (p.score || 0) + ' pts</span>' +
        '<div class="lp-bar" style="width:' + pct + '%"></div></div>';
    }
    container.innerHTML = html;
  });
}

/* ===== FINAL PODIUM ===== */
function renderHostPodium() {
  clearInterval(tickTimer);
  livePodiumVisible = false;
  document.getElementById("live-podium").style.display = "none";

  var playersRef = dbRef(dbPath("broto", code, "players"));
  if (!playersRef) return;

  playersRef.get().then(function(snap) {
    var items = [];
    var val = snap.val() || {};
    for (var k in val) if (val[k]) items.push(val[k]);
    items.sort(function(a, b) { return (b.score || 0) - (a.score || 0); });

    show("screen-host-podium");
    startLeafFall();

    var stage = document.getElementById("host-podium");
    stage.innerHTML = "";

    var cinematic = document.createElement("div");
    cinematic.className = "podium-cinematic";
    cinematic.id = "podium-cinematic";
    stage.appendChild(cinematic);

    var fullList = document.createElement("div");
    fullList.className = "podium-full-list";
    fullList.id = "podium-full-list";
    fullList.style.display = "none";
    stage.appendChild(fullList);

    podiumItems =  items.slice(0, 5);
    podiumRevealIndex = podiumItems.length - 1

    setTimeout(function() {
      revealCinematicPodiumStep();
    }, 600);
  });
}

function revealCinematicPodiumStep() {
  var cinematic = document.getElementById("podium-cinematic");
  if (!cinematic) return;

  if (podiumRevealIndex < 0) {
    setTimeout(function() {
      showFullPodiumList();
    }, 1200);
    return;
  }

  var p = podiumItems[podiumRevealIndex];
  var rank = podiumRevealIndex + 1;
  var isTop3 = podiumRevealIndex < 3;
  var isWinner = podiumRevealIndex === 0;

  var avIdx = AVATAR_DATA.findIndex(function(d) { return d.name === p.avatar; });
  var safeIdx = avIdx >= 0 ? avIdx : 0;
  var avUrl = getAvatarUrl(safeIdx, 120);
  var fallback = getFallbackAvatar(safeIdx, 120);

  var medals = ["🥇", "🥈", "🥉"];
  var flowers = ["🌻", "🌼", "🌸"];
  var medal = isTop3 ? medals[podiumRevealIndex] : "";
  var flower = isTop3 ? flowers[podiumRevealIndex] : "🌱";
  var positionLabels = ["Primeiro Lugar", "Segundo Lugar", "Terceiro Lugar"];
  var positionLabel = isTop3 ? positionLabels[podiumRevealIndex] : (rank + "º Lugar");

  var card = document.createElement("div");
  card.className = "podium-spotlight-card";
  card.id = "spotlight-card-" + podiumRevealIndex;

  var topClass = isTop3 ? (podiumRevealIndex === 0 ? "spotlight-gold" : podiumRevealIndex === 1 ? "spotlight-silver" : "spotlight-bronze") : "";

  card.innerHTML =
    '<div class="spotlight-rank-label ' + topClass + '">' + positionLabel + '</div>' +
    '<div class="spotlight-avatar-wrap">' +
      '<img class="spotlight-avatar" src="' + avUrl + '" alt="' + escapeHtml(p.name) + '" ' +
      'onerror="this.src=\'' + fallback + '\'">' +
      (isWinner ? '<div class="spotlight-crown">👑</div>' : '') +
    '</div>' +
    '<div class="spotlight-name">' + escapeHtml(p.name) + '</div>' +
    '<div class="spotlight-score">' + (p.score || 0) + ' pontos</div>' +
    (p.bestStreak > 2 ? '<div class="spotlight-streak">🔥 Série de ' + p.bestStreak + ' acertos</div>' : '') +
    '<div class="spotlight-medal">' + (isTop3 ? medal + " " + flower : flower) + '</div>';

  cinematic.innerHTML = "";
  cinematic.appendChild(card);

  /* v6.1 — Efeitos de luz para top 3 */
  if (isTop3) {
    var starColor = podiumRevealIndex === 0 ? "#ffd700" : podiumRevealIndex === 1 ? "#c0c0c0" : "#cd8c46";
    var starCount = podiumRevealIndex === 0 ? 18 : podiumRevealIndex === 1 ? 12 : 8;
    spawnStarLights(card, starCount, starColor);
  }
  if (isWinner) {
    var mysteryGlow = document.createElement("div");
    mysteryGlow.className = "mystery-glow";
    card.appendChild(mysteryGlow);
  }

  requestAnimationFrame(function() {
    card.classList.add("spotlight-in");
  });

  if (isWinner) {
    sfxWinner();
    spawnConfetti();
    spawnGoldRain();
  } else if (isTop3) {
    sfxSpotlight();
  } else {
    sfxReveal();
  }

  podiumRevealIndex--;
  var delay = isWinner ? 3500 : (podiumRevealIndex >= 2 ? 2200 : 2800);
  setTimeout(revealCinematicPodiumStep, delay);
}

function showFullPodiumList() {
  var cinematic = document.getElementById("podium-cinematic");
  var fullList = document.getElementById("podium-full-list");
  if (!cinematic || !fullList) return;

  cinematic.style.transition = "opacity 0.8s ease";
  cinematic.style.opacity = "0";

  setTimeout(function() {
    cinematic.style.display = "none";
    fullList.style.display = "flex";

    var medals = ["🥇", "🥈", "🥉"];
    var flowers = ["🌻", "🌼", "🌸"];

    var html = "";
    for (var i = 0; i < podiumItems.length; i++) {
      var p = podiumItems[i];
      var isTop3 = i < 3;
      var avIdx = AVATAR_DATA.findIndex(function(d) { return d.name === p.avatar; });
      var safeIdx = avIdx >= 0 ? avIdx : 0;
      var avUrl = getAvatarUrl(safeIdx, 52);
      var fallback = getFallbackAvatar(safeIdx, 52);
      var topClass = isTop3 ? (i === 0 ? "top-1" : i === 1 ? "top-2" : "top-3") : "";
      var medal = isTop3 ? medals[i] : "";
      var flower = isTop3 ? flowers[i] : "🌱";

      html += '<div class="podium-step ' + topClass + '" style="animation-delay:' + (i * 0.06) + 's">' +
        '<div class="step-rank">#' + (i + 1) + '</div>' +
        '<img class="step-av" src="' + avUrl + '" alt="' + escapeHtml(p.name) + '" ' +
        'onerror="this.src=\'' + fallback + '\'">' +
        '<div class="step-info">' +
          '<div class="step-name">' + escapeHtml(p.name) + '</div>' +
          '<div class="step-score">' + (p.score || 0) + ' pontos' + (p.bestStreak > 2 ? ' · 🔥 serie ' + p.bestStreak : '') + '</div>' +
        '</div>' +
        '<div class="step-medal">' + (isTop3 ? medal + flower : "") + '</div>' +
        '<div class="step-bar-bg"></div>' +
        '<div class="step-bar-fill"></div>' +
      '</div>';
    }
    fullList.innerHTML = html;

    setTimeout(function() {
      var maxScore = 1;
      for (var j = 0; j < podiumItems.length; j++) {
        maxScore = Math.max(maxScore, podiumItems[j].score || 0);
      }
      var steps = fullList.querySelectorAll(".podium-step");
      steps.forEach(function(step, idx) {
        var bar = step.querySelector(".step-bar-fill");
        var bgBar = step.querySelector(".step-bar-bg");
        if (bar) {
          var pct = ((podiumItems[idx].score || 0) / maxScore) * 100;
          bar.style.width = pct + "%";
        }
        if (bgBar) bgBar.style.width = "100%";
      });
    }, 300);

    sfxWinner();
    spawnConfetti();
    spawnGoldRain();
  }, 900);
}

/* ===== PLAYER FLOW ===== */
function goJoinCode() {
  console.log('[BROTO] goJoinCode chamado');
  role = "player";
  show("screen-join-code");
  document.getElementById("join-code-error").textContent = "";
  setTimeout(function() {
    var input = document.getElementById("join-code-input");
    if (input) input.focus();
  }, 300);
}

function submitCode() {
  console.log('[BROTO] submitCode chamado');
  initAudio();
  var val = document.getElementById("join-code-input").value.replace(/\D/g, "");
  if (val.length !== 6) {
    document.getElementById("join-code-error").textContent = "Digite os 6 numeros do codigo.";
    return;
  }

  if (!initFirebase()) {
    enableDemoMode();
  }

  var metaRef = dbRef(dbPath("broto", val, "meta"));
  if (!metaRef) {
    document.getElementById("join-code-error").textContent = "Erro de conexao. Tente em modo demo.";
    return;
  }

  metaRef.get().then(function(snap) {
    if (!snap.exists()) {
      document.getElementById("join-code-error").textContent = "Nao achamos essa sala. Confira o codigo.";
      return;
    }
    code = val;
    localMeta = snap.val();
    // v6.2 FIX: Garantir que o player tenha questionOrder/optionOrders do host
    if (!localMeta.questionOrder || !localMeta.optionOrders) {
      console.error('[BROTO] Meta sem questionOrder/optionOrders! Sala corrompida?');
      document.getElementById("join-code-error").textContent = "Erro na sala. Peça ao apresentador para recriar.";
      return;
    }
    buildAvatarGrid();
    show("screen-join-profile");
    setTimeout(function() {
      var input = document.getElementById("join-name-input");
      if (input) input.focus();
    }, 300);
  }).catch(function(err) {
    console.error('[BROTO] Erro ao buscar sala:', err);
    document.getElementById("join-code-error").textContent = "Erro de conexao. Verifique sua internet.";
  });
}

function buildAvatarGrid() {
  var g = document.getElementById("avatar-grid");
  var html = "";
  for (var i = 0; i < AVATARS.length; i++) {
    var isSel = i === 0 ? " sel" : "";
    html += '<div class="avatar-opt' + isSel + '" data-idx="' + i + '" onclick="pickAvatar(this)">' +
      '<img src="' + AVATARS[i].url + '" alt="' + AVATARS[i].name + '" loading="lazy" ' +
      'style="border-radius:50%;width:52px;height:52px;object-fit:cover;" ' +
      'onerror="this.src=\'' + AVATARS[i].fallback + '\'">' +
      '<div class="av-name">' + AVATARS[i].name + '</div></div>';
  }
  g.innerHTML = html;
  myAvatar = AVATARS[0];
}

function pickAvatar(el) {
  var opts = document.querySelectorAll(".avatar-opt");
  opts.forEach(function(o) { o.classList.remove("sel"); });
  el.classList.add("sel");
  myAvatar = AVATARS[parseInt(el.dataset.idx)];
}

function playerJoinRoom() {
  console.log('[BROTO] playerJoinRoom chamado');
  var nameInput = document.getElementById("join-name-input");
  var name = nameInput.value.trim();
  if (!name) {
    document.getElementById("join-profile-error").textContent = "Escreve um nome ou apelido pra gente te chamar :)";
    return;
  }
  if (containsBadWord(name)) {
    document.getElementById("join-profile-error").textContent = "Esse nome nao pode ser usado. Escolha outro.";
    nameInput.classList.add("shake");
    setTimeout(function() { nameInput.classList.remove("shake"); }, 400);
    return;
  }
  myName = name.slice(0, 18);
  myPid = uid();
  var p = {
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

  var pRef = dbRef(dbPath("broto", code, "players", myPid));
  if (pRef) {
    pRef.set(p).then(function() {
      var avImg = document.getElementById("player-wait-av-img");
      avImg.src = myAvatar.url;
      avImg.onerror = function() { this.src = myAvatar.fallback; };
      avImg.alt = myAvatar.name;
      document.getElementById("player-wait-name").textContent = myName;
      document.getElementById("player-wait-code").textContent = "sala " + code;
      show("screen-player-wait");
      lastSeenStatus = "lobby";
      lastSeenQIndex = -1;

      var myPlayerRef = dbRef(dbPath("broto", code, "players", myPid));
      if (myPlayerRef) {
        myPlayerRef.on("value", function(snap) {
          if (!snap.exists() && lastSeenStatus !== null && lastSeenStatus !== "kicked") {
            lastSeenStatus = "kicked";
            show("screen-player-kicked");
          }
        });
      }
      var metaRef = dbRef(dbPath("broto", code, "meta"));
      if (metaRef) {
        metaRef.on("value", function(snap) {
          var meta = snap.val();
          if (meta) handlePlayerMetaChange(meta);
        });
      }
    });
  }
}

function handlePlayerMetaChange(meta) {
  // Sempre manter localMeta atualizado com os dados mais recentes do servidor
  localMeta = meta;
  hostBots = {};

  if (meta.status === "question" && (lastSeenStatus !== "question" || meta.qIndex !== lastSeenQIndex)) {
    lastSeenStatus = "question";
    lastSeenQIndex = meta.qIndex;
    hasAnsweredThisQ = false;
    myLastAnswer = null;
    renderPlayerQuestion();
    show("screen-player-question");
  } else if (meta.status === "reveal" && lastSeenStatus !== "reveal") {
    lastSeenStatus = "reveal";
    renderPlayerReveal().then(function() {
      if (localMeta && localMeta.status === "reveal") {
        show("screen-player-reveal");
      }
    });
  } else if (meta.status === "interstitial" && lastSeenStatus !== "interstitial") {
    lastSeenStatus = "interstitial";
    renderPlayerInterstitial().then(function() {
      if (localMeta && localMeta.status === "interstitial") {
        show("screen-player-interstitial");
      }
    });
  } else if (meta.status === "podium" && lastSeenStatus !== "podium") {
    lastSeenStatus = "podium";
    renderPlayerPodium().then(function() {
      if (localMeta && localMeta.status === "podium") {
        show("screen-player-podium");
      }
    });
  } else if (meta.status === "question" && document.getElementById("screen-player-question").classList.contains("active")) {
    // Mesmo se já estivermos na tela de pergunta, atualizar o timer
    // pois qStartAt pode ter mudado (host reiniciou, drift, etc.)
    updatePlayerTimer();
  }
}

function updateStreakBadge() {
  var streakBadge = document.getElementById("player-streak-badge");
  var streakText = document.getElementById("player-streak-text");
  if (!streakBadge || !streakText) return;
  if (myStreak >= 2) {
    streakBadge.style.display = "inline-flex";
    streakText.textContent = "Serie x" + myStreak + " 🔥";
  } else {
    streakBadge.style.display = "none";
  }
}

function renderPlayerQuestion() {
  initAudio();

  // v6.2 FIX: Se localMeta não tem questionOrder/optionOrders, buscar do servidor
  // Isso garante que host e players vejam a MESMA pergunta
  if (!localMeta || !localMeta.questionOrder || !localMeta.optionOrders) {
    var metaRef = dbRef(dbPath("broto", code, "meta"));
    if (metaRef) {
      metaRef.get().then(function(snap) {
        var freshMeta = snap.val();
        if (freshMeta && freshMeta.questionOrder && freshMeta.optionOrders) {
          localMeta = freshMeta;
          renderPlayerQuestion(); // re-render com meta correto
        }
      });
      return; // aguarda o meta correto
    }
  }

  var qd = getQuestion(localMeta.qIndex, localMeta);
  var total = localMeta.total || getTotalQuestions();
  document.getElementById("player-qcounter").textContent = "Pergunta " + (localMeta.qIndex + 1) + " de " + total;
  document.getElementById("player-qtext").textContent = qd.q;
  document.getElementById("player-answer-status").textContent = "";

  // Sincronizar streak com o servidor (crucial após refresh ou reconexão)
  var pRef = dbRef(dbPath("broto", code, "players", myPid));
  if (pRef) {
    pRef.get().then(function(snap) {
      var p = snap.val();
      if (p) {
        myStreak = p.streak || 0;
        myBestStreak = p.bestStreak || 0;
        updateStreakBadge();
      }
    });
  }
  updateStreakBadge();

  var optsHtml = "";
  for (var i = 0; i < qd.opts.length; i++) {
    optsHtml += '<div class="opt o' + i + ' clickable" id="player-opt-' + i + '" onclick="playerAnswer(' + i + ')" style="animation-delay:' + (0.15 + i * 0.1) + 's">' +
      '<span class="mk">' + OPT_MARK[i] + '</span>' +
      '<span>' + qd.opts[i] + '</span></div>';
  }
  document.getElementById("player-opts").innerHTML = optsHtml;
  updatePlayerTimer();
  updatePlayerGap();

  // v6.2 — animação de entrada
  var qbox = document.querySelector("#screen-player-question .question-box");
  if (qbox) {
    qbox.style.animation = "none";
    void qbox.offsetHeight;
    qbox.style.animation = "question-enter 0.6s cubic-bezier(0.2,1.4,0.4,1) both";
  }
}

function updatePlayerTimer() {
  if (!localMeta || localMeta.status !== "question") return;

  // v6.2 FIX: Usar qStartAt do servidor + compensação de drift
  // Se o relógio do cliente está adiantado, o tempo aparece acabado antes da hora
  // Se está atrasado, o jogador tem mais tempo do que deveria
  var now = Date.now();
  var elapsed = now - localMeta.qStartAt;
  var remain = Math.max(0, localMeta.duration - elapsed);
  var pct = Math.max(0, Math.min(100, (remain / localMeta.duration) * 100));
  var bar = document.getElementById("player-timerbar");
  var lab = document.getElementById("player-timer");
  if (bar) bar.style.width = pct + "%";
  if (lab) lab.textContent = Math.ceil(remain / 1000) + "s";

  // Se o tempo acabou e o jogador ainda não respondeu, mostrar aviso
  if (remain <= 0 && !hasAnsweredThisQ) {
    document.getElementById("player-answer-status").textContent = "Tempo esgotado! Aguarde a revelação...";
    var opts = document.querySelectorAll("#player-opts .opt");
    opts.forEach(function(opt) { opt.classList.remove("clickable"); });
  }
}

function updatePlayerGap() {
  if (!code || !myPid || gapUpdatePending) return;
  gapUpdatePending = true;
  var playersRef = dbRef(dbPath("broto", code, "players"));
  if (!playersRef) { gapUpdatePending = false; return; }

  playersRef.get().then(function(snap) {
    var items = [];
    var val = snap.val() || {};
    for (var k in val) if (val[k]) items.push(val[k]);
    items.sort(function(a, b) { return (b.score || 0) - (a.score || 0); });

    var myRank = -1, myScore = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].pid === myPid) { myRank = i + 1; myScore = items[i].score || 0; }
    }

    var gapEl = document.getElementById("player-gap-info");
    var gapText = document.getElementById("player-gap-text");

    if (myRank > 1 && items[myRank - 2]) {
      var gap = (items[myRank - 2].score || 0) - myScore;
      gapEl.style.display = "inline-flex";
      gapText.textContent = "Voce esta a " + gap + " pts do " + (myRank - 1) + "o lugar";
    } else if (myRank === 1 && items[1]) {
      var lead = myScore - (items[1].score || 0);
      gapEl.style.display = "inline-flex";
      gapText.textContent = "Liderando por " + lead + " pts 🔥";
    } else {
      gapEl.style.display = "none";
    }
    gapUpdatePending = false;
  }).catch(function() {
    gapUpdatePending = false;
  });
}

setInterval(function() {
  if (role === "player" && document.getElementById("screen-player-question").classList.contains("active")) {
    updatePlayerTimer();
    updatePlayerGap();
  }
}, 200);

function playerAnswer(idx) {
  if (hasAnsweredThisQ) return;
  hasAnsweredThisQ = true;

  myLastAnswer = {
    choice: idx,
    at: Date.now()
  };

  var opts = document.querySelectorAll("#player-opts .opt");
  opts.forEach(function(opt, i) {
    opt.classList.remove("clickable");
    if (i !== idx) opt.classList.add("dim");
  });
  document.getElementById("player-answer-status").textContent = "Resposta enviada — aguarde a revelacao!";
  var ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex, myPid));
  if (ansRef) ansRef.set({ pid: myPid, choice: idx, at: Date.now() });
}

function renderPlayerReveal() {
  var qd = getQuestion(localMeta.qIndex, localMeta);
  var ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex, myPid));
  var pRef = dbRef(dbPath("broto", code, "players", myPid));

  return Promise.all([
    ansRef ? ansRef.get() : Promise.resolve({ val: function(){ return null; } }),
    pRef ? pRef.get() : Promise.resolve({ val: function(){ return null; } })
  ]).then(function(results) {
    var myAns = results[0].val();
    var p = results[1].val();

    if (!myAns && myLastAnswer && myLastAnswer.choice !== undefined) {
      myAns = myLastAnswer;
      console.log('[BROTO] Usando resposta local:', myAns);
    }

    if (!qd) {
      console.error('[BROTO] qd indefinido para qIndex:', localMeta.qIndex);
      qd = { c: 0, opts: ["","","",""] };
    }

    var isCorrect = myAns && typeof myAns.choice === 'number' && myAns.choice === qd.c;
    lastRoundWasCorrect = isCorrect;

    console.log('[BROTO] Render reveal — choice:', myAns ? myAns.choice : 'null', 'correct:', qd.c, 'isCorrect:', isCorrect);

    if (isCorrect) {
      myStreak++;
      myBestStreak = Math.max(myBestStreak, myStreak);
      sfxStreak(myStreak);
    } else {
      myStreak = 0;
    }

    var pts = isCorrect ? calcPoints(myAns.at - localMeta.qStartAt, myStreak) : { base: 0, bonus: 0, total: 0 };
    lastRoundPoints = pts.total;

    var banner = document.getElementById("player-reveal-banner");
    banner.className = "reveal-banner " + (isCorrect ? "ok" : "no");
    if (!myAns) {
      banner.textContent = "Tempo esgotado ⏳";
    } else if (isCorrect) {
      banner.textContent = "Certinho! 🌿";
      sfxCorrect();
      spawnConfetti();
    } else {
      banner.textContent = "Quase — nao foi dessa vez";
      sfxWrong();
    }

    var ptsText = isCorrect
      ? ("+" + pts.total + " pontos" + (pts.bonus > 0 ? " (" + pts.base + " + 🔥" + pts.bonus + ")" : ""))
      : "";
    document.getElementById("player-reveal-points").textContent = ptsText;
    document.getElementById("player-reveal-total").textContent = "Pontuacao total: " + (p ? p.score || 0 : 0);

    var streakReveal = document.getElementById("player-streak-reveal");
    var streakRevealText = document.getElementById("player-streak-reveal-text");
    if (myStreak >= 2) {
      streakReveal.style.display = "flex";
      streakRevealText.textContent = "Serie de " + myStreak + " acertos! 🔥";
    } else {
      streakReveal.style.display = "none";
    }

    return dbRef(dbPath("broto", code, "players")).get();
  }).then(function(snap) {
    var items = [];
    var val = snap.val() || {};
    for (var k in val) if (val[k]) items.push(val[k]);
    items.sort(function(a, b) { return (b.score || 0) - (a.score || 0); });

    var myRank = -1, myScore = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].pid === myPid) { myRank = i + 1; myScore = items[i].score || 0; }
    }

    var gapRevealEl = document.getElementById("player-gap-reveal");
    var gapRevealText = document.getElementById("player-gap-reveal-text");
    if (myRank > 1 && items[myRank - 2]) {
      var gap = (items[myRank - 2].score || 0) - myScore;
      gapRevealEl.style.display = "inline-flex";
      gapRevealText.textContent = "Voce esta a " + gap + " pts do " + (myRank - 1) + "o lugar";
    } else if (myRank === 1 && items[1]) {
      var lead = myScore - (items[1].score || 0);
      gapRevealEl.style.display = "inline-flex";
      gapRevealText.textContent = "Liderando por " + lead + " pts 🔥";
    } else {
      gapRevealEl.style.display = "none";
    }
  });
}

/* v6.0 — INTERSTITIAL PLAYER */
function renderPlayerInterstitial() {
  var suspenseBox = document.getElementById("player-suspense-box");
  var listBox = document.getElementById("player-interstitial-list");
  var rankBox = document.getElementById("player-interstitial-rank");
  var scoreBox = document.getElementById("player-interstitial-score");
  var gapBox = document.getElementById("player-interstitial-gap");
  var streakBox = document.getElementById("player-interstitial-streak");
  if (isSuspenseMode()) {
    if (listBox) listBox.style.display = "none";
    if (rankBox) rankBox.style.display = "none";
    if (scoreBox) scoreBox.style.display = "none";
    if (gapBox) gapBox.style.display = "none";
    if (streakBox) streakBox.style.display = "none";
    if (suspenseBox) suspenseBox.style.display = "block";
    return Promise.resolve();
  } else {
    if (listBox) listBox.style.display = "flex";
    if (rankBox) rankBox.style.display = "block";
    if (scoreBox) scoreBox.style.display = "block";
    if (gapBox) gapBox.style.display = "block";
    if (streakBox) streakBox.style.display = "block";
    if (suspenseBox) suspenseBox.style.display = "none";
  }
  return dbRef(dbPath("broto", code, "players")).get().then(function(snap) {
    var items = [];
    var val = snap.val() || {};
    for (var k in val) if (val[k]) items.push(val[k]);
    items.sort(function(a, b) { return (b.score || 0) - (a.score || 0); });

    var myRank = -1, me = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].pid === myPid) { myRank = i + 1; me = items[i]; }
    }

    // Rank display
    var rankEl = document.getElementById("player-interstitial-rank");
    if (myRank > 0) {
      rankEl.innerHTML = '<div class="big-rank">#' + myRank + '</div><div class="big-rank-label">de ' + items.length + ' jogadores</div>';
    } else {
      rankEl.innerHTML = '<div class="big-rank">#?</div>';
    }

    // Score animation
    var scoreEl = document.getElementById("player-interstitial-score");
    var currentScore = me ? me.score || 0 : 0;
    scoreEl.innerHTML = '<span class="score-number">0</span>';
    setTimeout(function() {
      var numEl = scoreEl.querySelector(".score-number");
      if (numEl) animateValue(numEl, 0, currentScore, 1500);
    }, 200);

    // Points gained this round
    if (lastRoundWasCorrect && lastRoundPoints > 0) {
      scoreEl.innerHTML += '<div class="points-gained">+' + lastRoundPoints + ' pts nesta rodada</div>';
    }

    // Gap info
    var gapEl = document.getElementById("player-interstitial-gap");
    if (myRank > 1 && items[myRank - 2]) {
      var ahead = items[myRank - 2];
      var gap = (ahead.score || 0) - (me.score || 0);
      gapEl.innerHTML = '<span class="gap-behind">📍 Você está a <strong>' + gap + ' pts</strong> de ' + escapeHtml(ahead.name) + ' (' + (myRank - 1) + 'º)</span>';
      gapEl.style.display = "block";
    } else if (myRank === 1 && items[1]) {
      var lead = (me.score || 0) - (items[1].score || 0);
      gapEl.innerHTML = '<span class="gap-ahead">👑 Liderando por <strong>' + lead + ' pts</strong></span>';
      gapEl.style.display = "block";
    } else {
      gapEl.style.display = "none";
    }

    // Streak
    var streakEl = document.getElementById("player-interstitial-streak");
    var maxStreak = 0, streakHolder = null;
    for (var i = 0; i < items.length; i++) {
      if ((items[i].bestStreak || 0) > maxStreak) {
        maxStreak = items[i].bestStreak;
        streakHolder = items[i];
      }
    }
    if (maxStreak >= 2 && streakHolder) {
      var isMe = streakHolder.pid === myPid;
      streakEl.innerHTML = '<div class="streak-banner ' + (isMe ? 'streak-mine' : '') + '">' +
        '<span class="streak-flame">🔥</span>' +
        '<span>Maior sequência: <strong>' + escapeHtml(streakHolder.name) + '</strong> — ' + maxStreak + ' acertos!</span>' +
      '</div>';
      streakEl.style.display = "block";
    } else {
      streakEl.style.display = "none";
    }

    // Top 8 list
    var listHtml = "";
    var maxScore = Math.max(1, items[0] ? items[0].score || 0 : 0);
    for (var i = 0; i < Math.min(items.length, 5); i++) {
      var p = items[i];
      var isMe = p.pid === myPid;
      var avIdx = AVATAR_DATA.findIndex(function(d) { return d.name === p.avatar; });
      var safeIdx = avIdx >= 0 ? avIdx : 0;
      var avUrl = getAvatarUrl(safeIdx, 40);
      var fallback = getFallbackAvatar(safeIdx, 40);
      var pct = ((p.score || 0) / maxScore) * 100;
      var highlight = isMe ? ' is-me' : '';
      var medals = ["🥇", "🥈", "🥉"];
      var medal = i < 3 ? medals[i] : "";

      listHtml += '<div class="is-row-player' + highlight + '" style="animation-delay:' + (i * 0.06) + 's">' +
        '<span class="is-rank-p">' + (i + 1) + '</span>' +
        '<img src="' + avUrl + '" alt="" onerror="this.src=\'' + fallback + '\'">' +
        '<span class="is-name-p">' + escapeHtml(p.name) + ' ' + medal + '</span>' +
        '<span class="is-score-p">' + (p.score || 0) + '</span>' +
        '<div class="is-bar-p"><div style="width:0%" data-width="' + pct + '%"></div></div>' +
      '</div>';
    }

    // If player is not in top 8, add separator and show them
    if (myRank > 8 && me) {
      listHtml += '<div class="is-separator" style="animation-delay:0.5s">···</div>';
      var avIdx = AVATAR_DATA.findIndex(function(d) { return d.name === me.avatar; });
      var safeIdx = avIdx >= 0 ? avIdx : 0;
      var avUrl = getAvatarUrl(safeIdx, 40);
      var fallback = getFallbackAvatar(safeIdx, 40);
      var pct = ((me.score || 0) / maxScore) * 100;
      listHtml += '<div class="is-row-player is-me" style="animation-delay:0.55s">' +
        '<span class="is-rank-p">' + myRank + '</span>' +
        '<img src="' + avUrl + '" alt="" onerror="this.src=\'' + fallback + '\'">' +
        '<span class="is-name-p">' + escapeHtml(me.name) + '</span>' +
        '<span class="is-score-p">' + (me.score || 0) + '</span>' +
        '<div class="is-bar-p"><div style="width:0%" data-width="' + pct + '%"></div></div>' +
      '</div>';
    }

    document.getElementById("player-interstitial-list").innerHTML = listHtml;

    // Animate bars
    setTimeout(function() {
      var bars = document.querySelectorAll("#player-interstitial-list .is-bar-p div");
      bars.forEach(function(bar) {
        if (bar.dataset.width) bar.style.width = bar.dataset.width;
      });
    }, 200);
  });
}

function renderPlayerPodium() {
  var playersRef = dbRef(dbPath("broto", code, "players"));
  if (!playersRef) return Promise.resolve();

  return playersRef.get().then(function(snap) {
    var items = [];
    var val = snap.val() || {};
    for (var k in val) if (val[k]) items.push(val[k]);
    items.sort(function(a, b) { return (b.score || 0) - (a.score || 0); });

    var myRank = -1;
    var me = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].pid === myPid) {
        myRank = i + 1;
        me = items[i];
      }
    }

    var emojis = ["🥇", "🥈", "🥉"];
    document.getElementById("player-final-emoji").textContent = myRank <= 3 && myRank > 0 ? emojis[myRank - 1] : "🌱";
    document.getElementById("player-final-rank").textContent = (myRank > 0 ? myRank : "?") + "o lugar de " + items.length;
    document.getElementById("player-final-score").textContent = (me ? me.score || 0 : 0) + " pontos" + (me && me.bestStreak > 2 ? " · 🔥 serie " + me.bestStreak : "");

    var listHtml = "";
    for (var i = 0; i < items.length; i++) {
      var p = items[i];
      var isMe = p.pid === myPid;
      var avIdx = AVATAR_DATA.findIndex(function(d) { return d.name === p.avatar; });
      var safeIdx = avIdx >= 0 ? avIdx : 0;
      var avUrl = getAvatarUrl(safeIdx, 28);
      var fallback = getFallbackAvatar(safeIdx, 28);
      var highlight = isMe ? 'border-color:var(--bloom);box-shadow:0 0 0 1px var(--bloom)' : '';
      listHtml += '<div class="rank-row" style="animation-delay:' + (i * 0.08) + 's;' + highlight + '">' +
        '<span class="rn">' + (i + 1) + '</span>' +
        '<img src="' + avUrl + '" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" alt="" ' +
        'onerror="this.src=\'' + fallback + '\'">' +
        '<span>' + escapeHtml(p.name) + '</span>' +
        '<span class="rs">' + (p.score || 0) + ' pts' + (p.bestStreak > 2 ? ' 🔥' + p.bestStreak : '') + '</span></div>';
    }
    document.getElementById("player-final-list").innerHTML = listHtml;

    show("screen-player-podium");
    startLeafFall();
    if (myRank <= 3 && myRank > 0) {
      sfxWinner();
      spawnConfetti();
      spawnGoldRain();
      setTimeout(function(){ spawnConfetti(); spawnGoldRain(); }, 400);
    }
  });
}

/* ===== BOOT ===== */
(function boot() {
  console.log('[BROTO] Boot iniciado v6.1');
  var params = new URLSearchParams(location.search);
  var preCode = params.get("code");
  if (preCode && /^\d{6}$/.test(preCode)) {
    role = "player";
    if (!initFirebase()) enableDemoMode();

    var metaRef = dbRef(dbPath("broto", preCode, "meta"));
    if (metaRef) {
      metaRef.get().then(function(snap) {
        if (snap.exists()) {
          var m = snap.val();
          if (!m.questionOrder || !m.optionOrders) {
            console.error('[BROTO] Meta via URL sem questionOrder');
            goLanding();
            return;
          }
          code = preCode;
          localMeta = m;
          buildAvatarGrid();
          show("screen-join-profile");
        } else {
          goLanding();
        }
      }).catch(function() {
        goLanding();
      });
    } else {
      goLanding();
    }
  } else {
    goLanding();
  }
})();
