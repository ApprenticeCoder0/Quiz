/* ============================================================
   BROTO v4.0 - Quiz Coletivo: Etica Ambiental & Ecofeminismo
   Respostas Aleatorizadas - Avatares Fotos - Filtro Global
   Sistema de Streak - Gap ao Vivo - Podio Premium - Mobile-First
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

/* ============== AVATARES - Gerados Dinamicamente ============== */
const AVATAR_PALETTES = [
  {name:"Chico Mendes", initials:"CM", bg:"#2d5a3d", bg2:"#4a8c5c", icon:"🌳"},
  {name:"Vandana Shiva", initials:"VS", bg:"#5a3d2d", bg2:"#8c6a4a", icon:"🌾"},
  {name:"Greta Thunberg", initials:"GT", bg:"#2d3d5a", bg2:"#4a6a8c", icon:"🌍"},
  {name:"Marina Silva", initials:"MS", bg:"#3d5a2d", bg2:"#6a8c4a", icon:"🌿"},
  {name:"David Attenborough", initials:"DA", bg:"#3d2d5a", bg2:"#6a4a8c", icon:"🦎"},
  {name:"Wangari Maathai", initials:"WM", bg:"#5a5a2d", bg2:"#8c8c4a", icon:"🌳"},
  {name:"Jane Goodall", initials:"JG", bg:"#2d5a5a", bg2:"#4a8c8c", icon:"🐒"},
  {name:"Leonardo DiCaprio", initials:"LD", bg:"#1a3a2a", bg2:"#3a6a4a", icon:"🎬"},
  {name:"Rachel Carson", initials:"RC", bg:"#3a1a2a", bg2:"#6a3a4a", icon:"📖"},
  {name:"Francoise d'Eaubonne", initials:"FE", bg:"#2a3a1a", bg2:"#4a6a3a", icon:"♀️"},
  {name:"Donna Haraway", initials:"DH", bg:"#1a2a3a", bg2:"#3a4a6a", icon:"🐕"},
  {name:"Val Plumwood", initials:"VP", bg:"#3a2a1a", bg2:"#6a4a3a", icon:"🌲"},
  {name:"Carolyn Merchant", initials:"CM2", bg:"#2a1a3a", bg2:"#4a3a6a", icon:"📚"},
  {name:"Severn Cullis-Suzuki", initials:"SS", bg:"#1a3a3a", bg2:"#3a6a6a", icon:"🎤"},
  {name:"Xiuhtezcatl Martinez", initials:"XM", bg:"#3a3a1a", bg2:"#6a6a3a", icon:"🌵"}
];

function generateAvatarSVG(palette, size) {
  size = size || 120;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 100 100">' +
    '<defs>' +
    '<linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '<stop offset="0%" style="stop-color:' + palette.bg + '"/>' +
    '<stop offset="100%" style="stop-color:' + palette.bg2 + '"/>' +
    '</linearGradient>' +
    '<filter id="s"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="rgba(0,0,0,0.3)"/></filter>' +
    '</defs>' +
    '<circle cx="50" cy="50" r="48" fill="url(#g)" stroke="rgba(242,234,212,0.2)" stroke-width="1.5"/>' +
    '<circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>' +
    '<text x="50" y="46" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#f2ead4" filter="url(#s)">' + palette.initials + '</text>' +
    '<text x="50" y="68" text-anchor="middle" font-size="14">' + palette.icon + '</text>' +
    '</svg>'
  );
}

function getAvatarUrl(index, size) {
  var p = AVATAR_PALETTES[index % AVATAR_PALETTES.length];
  return generateAvatarSVG(p, size || 120);
}

const AVATARS = AVATAR_PALETTES.map(function(p, i) {
  return {name: p.name, url: getAvatarUrl(i, 120), palette: p};
});

/* ============== FILTRO DE NOMES - ABRENGENTE ============== */
const BAD_WORDS_PT = [
  "buceta","caralho","cu","foda","foder","foda-se","fodase","fodido","fudido",
  "merda","porra","puta","puto","pica","pinto","bosta","viado","bicha","bichona",
  "baitola","boiola","cuzao","cuzao","filho da puta","fdp","arrombado","arrombada",
  "vagabundo","vagabunda","idiota","imbecil","retardado","retardada","mongol",
  "mongoloide","negro","neguin","macaco","crioulo","hitler","nazi","nazista",
  "estuprador","estupro","pedofilo","pedofilo","gayzinho","viadinho",
  "bichinha","sapatao","sapatao","traveco","vadia","escroto","escrota",
  "nojento","nojenta","coco","coco","mijar","mijo","urina","urinar","defecar",
  "seu cu","fode","fodendo","fodido","fodida","putaria","porno","porno",
  "pornografia","sexo","transar","transou","transando","boquete","anal",
  "penis","penis","vagina","clitoris","clitoris","masturbar","masturbacao",
  "gozar","gozada","esperma","semen","orgasmo","ereto","erecao","tesao","tesao",
  "pau","rola","piroca","pika","bilau","bilola","bucetinha","xoxota","xota",
  "xoxotinha","pepeca","pepeka","priquito","prikito","bct","ct","vsf",
  "vai se foder","vai tomar no cu","vtnc","vtmnc","tomar no cu","tnc","tmnc",
  "se foder","se fodendo","fodasse","foda se","fodase","fdps","filhodaputa",
  "filho daputa","filho da puta","f d p","f.d.p","cuzinho","cu de","cu do",
  "cu da","arrombados","arrombadas","merdinha","merdao","merdao","bostinha",
  "bostao","bostao","nojentos","nojentas","idiotas","imbecis","retardados",
  "retardadas","mongol","mongoloide","mongoloide","down","sindrome","sindrome",
  "autista","autismo","esquizofrenico","esquizofrenico","louco","louca","doido",
  "doida","maluco","maluca","psicopata","psicotico","psicotico","maníaco",
  "maniaco","depressivo","depressiva","suicida","suicidio","suicidio","morte",
  "morto","morta","matar","matou","matando","assassino","assassina",
  "assassinato","crime","criminoso","criminosa","ladrao","ladrao","ladra",
  "roubou","roubando","furto","furou","estelionato","golpe","golpista",
  "corrupto","corrupta","corrupcao","propina","suborno","trafico","trafico",
  "droga","drogas","maconha","cocaina","cocaina","crack","heroina","heroina",
  "lsd","ecstasy","metanfetamina","anfetamina","mdma","thc","baseado","beck",
  "bong","pipe","drogado","drogada","viciado","viciada","dependente","quimico",
  "quimico","alcoolatra","alcoolismo","bebado","bebado","bebada","bebada",
  "bebedo","bebedo","cachaca","cachaca","pinga","aguardente","whisky","vodka",
  "cerveja","chopp","vinho","alcool","alcool","prostituta","prostituto",
  "prostitutas","prostitutos","garota de programa","gp","miche","miche",
  "cafetao","cafetao","cafetina"
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
  "drown","hang","burn","acid","knife","blade","razor","overdose","pills"
];

const BAD_WORDS_ES = [
  "puta","puto","mierda","joder","coño","cabron","maricon","pendejo","gilipollas",
  "hostia","carajo","chingar","chingada","verga","pene","vagina","culo","culero",
  "naco","prieto","negro","negrata","marica","bollera","tortillera","zorra",
  "perra","perro","malparido","hijueputa","hijo de puta","gonorrea","cuca",
  "chucha","teta","tetas","picha","polla","cojones","huevos","mamada","mamon",
  "pajero","coger","cogiendo","cogido","follar","follando","follando","sexo",
  "sexual","desnudo","desnuda","pornografia","porno","xxx","prostituta","puticlub"
];

const BAD_WORDS_FR = [
  "putain","merde","connard","con","salope","enculé","encule","bite","couille",
  "cul","foutre","foutu","nique","niquer","baiser","baise","chier","chiant",
  "conne","conard","pédé","pédale","tapette","tarlouze","nègre","négro","nazi",
  "hitlerien","pute","putain","salopard","ordure","trou du cul","trouduc"
];

const BAD_WORDS_ALL = BAD_WORDS_PT.concat(BAD_WORDS_EN, BAD_WORDS_ES, BAD_WORDS_FR);

function normalizeLeet(text) {
  var result = text.toLowerCase();
  var replacements = [
    ['4','a'],['@','a'],['^','a'],['ª','a'],
    ['8','b'],['6','b'],
    ['<','c'],['{','c'],['[','c'],['©','c'],
    ['0','o'],['°','o'],['º','o'],
    ['3','e'],['&','e'],['€','e'],['£','e'],
    ['9','g'],
    ['1','i'],['!','i'],['|','i'],[':','i'],[';','i'],
    ['7','t'],['+','t'],['†','t'],
    ['5','s'],['$','s'],['z','s'],['§','s'],
    ['2','z'],['%','z'],
    ['v','v'],
    ['u','v']
  ];
  for (var r = 0; r < replacements.length; r++) {
    var from = replacements[r][0];
    var to = replacements[r][1];
    var regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    result = result.replace(regex, to);
  }
  return result;
}

function containsBadWord(name){
  var lower = name.toLowerCase().trim();
  var normalized = normalizeLeet(lower);

  var clean = normalized.replace(/[^a-zà-ÿ0-9]/g, '');
  var cleanSpaced = normalized.replace(/[^a-zà-ÿ0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

  for(var i = 0; i < BAD_WORDS_ALL.length; i++){
    var word = BAD_WORDS_ALL[i].toLowerCase();
    if(lower.indexOf(word) !== -1) return true;
    if(normalized.indexOf(word) !== -1) return true;
    if(clean.indexOf(word.replace(/[^a-zà-ÿ0-9]/g, '')) !== -1) return true;
    if(cleanSpaced.indexOf(word) !== -1) return true;
  }

  if(/(.)(\1){5,}/.test(lower)) return true;
  if(/^\d+$/.test(lower)) return true;

  var noSpaces = lower.replace(/\s/g, '');
  for(var j = 0; j < BAD_WORDS_ALL.length; j++){
    var w = BAD_WORDS_ALL[j].toLowerCase().replace(/\s/g, '');
    if(noSpaces.indexOf(w) !== -1) return true;
  }

  return false;
}

function checkNameFilter(){
  var input = document.getElementById("join-name-input");
  var warning = document.getElementById("name-filter-warning");
  var btn = document.getElementById("btn-join-room");
  var name = input.value.trim();
  if(name && containsBadWord(name)){
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
var role = null;
var code = null;
var myPid = null, myName = "", myAvatar = AVATARS[0];
var lastSeenStatus = null, lastSeenQIndex = -1;
var hostPollTimer = null, playerPollTimer = null, tickTimer = null;
var localMeta = null;
var hasAnsweredThisQ = false;
var hostRoster = {};
var db = null;
var roomRef = null;
var isDemoMode = false;
var audioCtx = null;
var podiumRevealIndex = 0;
var podiumItems = [];
var livePodiumVisible = false;
var myStreak = 0;
var myBestStreak = 0;

/* ============== AUDIO ============== */
function initAudio(){ if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }
function playTone(freq, type, duration, vol){
  if(!audioCtx) return;
  vol = vol || 0.15;
  try{
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + duration);
  }catch(e){}
}
function sfxCorrect(){
  playTone(523,"sine",0.15,0.12);
  setTimeout(function(){playTone(659,"sine",0.15,0.12);},120);
  setTimeout(function(){playTone(784,"sine",0.3,0.12);},240);
}
function sfxWrong(){
  playTone(200,"sawtooth",0.3,0.08);
  setTimeout(function(){playTone(150,"sawtooth",0.4,0.08);},150);
}
function sfxTick(){ playTone(800,"sine",0.05,0.05); }
function sfxJoin(){
  playTone(440,"sine",0.1,0.1);
  setTimeout(function(){playTone(554,"sine",0.1,0.1);},100);
}
function sfxStart(){
  playTone(330,"sine",0.2,0.1);
  setTimeout(function(){playTone(440,"sine",0.2,0.1);},200);
  setTimeout(function(){playTone(554,"sine",0.2,0.1);},400);
  setTimeout(function(){playTone(659,"sine",0.4,0.15);},600);
}
function sfxCountdown(n){
  var base = 440 + (3-n)*110;
  playTone(base,"sine",0.15,0.12);
}
function sfxReveal(){
  playTone(440,"sine",0.1,0.1);
  setTimeout(function(){playTone(554,"sine",0.1,0.1);},100);
  setTimeout(function(){playTone(659,"sine",0.2,0.12);},200);
}
function sfxWinner(){
  playTone(523,"sine",0.2,0.12);
  setTimeout(function(){playTone(659,"sine",0.2,0.12);},200);
  setTimeout(function(){playTone(784,"sine",0.2,0.12);},400);
  setTimeout(function(){playTone(1047,"sine",0.5,0.15);},600);
}
function sfxDrumRoll(){
  for(var i=0;i<8;i++){
    (function(idx){
      setTimeout(function(){playTone(100+idx*20,"triangle",0.08,0.06);},idx*80);
    })(i);
  }
}
function sfxStreak(n){
  var base = 440 + Math.min(n, 10) * 50;
  playTone(base,"sine",0.15,0.1);
  setTimeout(function(){playTone(base+110,"sine",0.15,0.1);},100);
  setTimeout(function(){playTone(base+220,"sine",0.2,0.12);},200);
}

/* ============== FIREBASE INIT ============== */
function initFirebase(){
  try{
    if(firebaseConfig.apiKey.indexOf("XXXX") === -1){
      firebase.initializeApp(firebaseConfig);
      db = firebase.database();
      updateConnStatus(true);
      return true;
    }
  }catch(e){ console.error("Firebase init error:", e); }
  updateConnStatus(false);
  return false;
}
function updateConnStatus(online){
  var el = document.getElementById("conn-status");
  if(!el) return;
  if(online){ el.className="conn-status online"; el.textContent="- online"; }
  else { el.className="conn-status offline"; el.textContent="- offline - modo demo ativo"; }
}

/* ============== DEMO MODE ============== */
function enableDemoMode(){
  isDemoMode = true; updateConnStatus(false);
  document.getElementById("demo-badge").style.display="block";
  window.demoStorage = {};
  window.demoListeners = {};
}
function toggleDemoMode(){ isDemoMode = !isDemoMode; location.reload(); }

function demoSet(path, val){
  window.demoStorage[path] = JSON.parse(JSON.stringify(val));
  var cbs = window.demoListeners[path] || [];
  cbs.forEach(function(cb){ cb({val: function(){ return window.demoStorage[path]; }, exists: function(){ return true; }}); });
}
function demoGet(path){ return window.demoStorage[path] || null; }
function demoOnValue(path, cb){
  if(!window.demoListeners[path]) window.demoListeners[path]=[];
  window.demoListeners[path].push(cb);
  var val = window.demoStorage[path];
  if(val!==undefined) cb({val: function(){ return val; }, exists: function(){ return true; }});
}
function demoOff(path){ window.demoListeners[path]=[]; }

/* ============== DB WRAPPER ============== */
function dbRef(path){
  if(isDemoMode){
    return {
      set: function(val){ return Promise.resolve(demoSet(path, val)); },
      get: function(){ return Promise.resolve({val: function(){ return demoGet(path); }, exists: function(){ return demoGet(path)!==null; }}); },
      on: function(evt, cb){ if(evt==="value") demoOnValue(path, cb); },
      off: function(evt){ if(evt==="value") demoOff(path); },
      child: function(sub){ return dbRef(path+"/"+sub); },
      once: function(evt){ return Promise.resolve({val: function(){ return demoGet(path); }, exists: function(){ return demoGet(path)!==null; }}); }
    };
  }
  if(!db) return null;
  return db.ref(path);
}
function dbPath(){ return Array.prototype.slice.call(arguments).join("/"); }

/* ============== UTIL ============== */
function show(id){
  var screens = document.querySelectorAll(".screen");
  for(var i=0;i<screens.length;i++) screens[i].classList.remove("active");
  var el = document.getElementById(id);
  if(el) el.classList.add("active");
}
function uid(){ return "p"+Date.now().toString(36)+Math.random().toString(36).slice(2,8); }
function roomCode(){ return String(Math.floor(100000+Math.random()*900000)); }
function escapeHtml(s){
  return (s||"").replace(/[&<>"']/g, function(c){
    return ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c];
  });
}

function calcPoints(elapsedMs, streak){
  var clamped = Math.max(0, Math.min(QUESTION_MS, elapsedMs));
  var ratio = 1 - (clamped / QUESTION_MS);
  var base = Math.round(500 + 500*ratio);

  var streakBonus = Math.min(streak, 10) * 0.10;
  var total = Math.round(base * (1 + streakBonus));

  return { base: base, bonus: Math.round(base * streakBonus), total: total };
}

function spawnConfetti(){
  var colors = ["#e0568f","#7fbf7f","#d4af37","#f3a6c4","#a8e6a8","#ff6b6b","#4ecdc4"];
  for(var i=0;i<40;i++){
    var el = document.createElement("div");
    el.className="confetti";
    el.style.left = (Math.random()*100)+"vw";
    el.style.top = "-10px";
    el.style.width = (6+Math.random()*10)+"px";
    el.style.height = (6+Math.random()*10)+"px";
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.borderRadius = Math.random()>0.5?"50%":"2px";
    el.style.animationDuration = (2+Math.random()*2)+"s";
    el.style.animationDelay = (Math.random()*0.5)+"s";
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 4500);
  }
}
function spawnLeafFall(){
  var el = document.createElement("div");
  el.className="leaf-fall";
  var leaves = ["🍃","🌸","🌿","🍂","🌾","🌼","🌺","🌻"];
  el.textContent = leaves[Math.floor(Math.random()*leaves.length)];
  el.style.left = (Math.random()*100)+"vw";
  el.style.animationDuration = (3+Math.random()*3)+"s";
  el.style.fontSize = (14+Math.random()*16)+"px";
  document.body.appendChild(el);
  setTimeout(function(){ el.remove(); }, 7000);
}
var leafInterval = null;
function startLeafFall(){ if(leafInterval) return; leafInterval = setInterval(spawnLeafFall, 250); }
function stopLeafFall(){ clearInterval(leafInterval); leafInterval=null; }

function spawnParticles(){
  var colors = ["#7fbf7f","#e0568f","#d4af37","#a8e6a8"];
  for(var i=0;i<15;i++){
    var el = document.createElement("div");
    el.className="particle";
    el.style.left = (Math.random()*100)+"vw";
    el.style.bottom = "-20px";
    el.style.width = (3+Math.random()*6)+"px";
    el.style.height = el.style.width;
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.borderRadius = "50%";
    el.style.animation = "float-up "+(4+Math.random()*4)+"s linear forwards";
    el.style.animationDelay = (Math.random()*2)+"s";
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 9000);
  }
}

function showCountdown(onComplete){
  var overlay = document.createElement("div");
  overlay.className = "countdown-overlay";
  overlay.innerHTML = '<div class="countdown-num" id="cd-num">3</div><div class="countdown-label">Preparar...</div>';
  document.body.appendChild(overlay);

  var count = 3;
  var labels = ["Preparar...","Apontar...","Ja!"];

  function tick(){
    sfxCountdown(count);
    var numEl = document.getElementById("cd-num");
    var labelEl = overlay.querySelector(".countdown-label");
    if(numEl) numEl.textContent = count;
    if(labelEl) labelEl.textContent = labels[3-count];

    if(numEl){
      numEl.style.animation = "none";
      numEl.offsetHeight;
      numEl.style.animation = "count-pop 0.5s cubic-bezier(0.2,1.4,0.4,1)";
    }

    count--;
    if(count >= 0){
      setTimeout(tick, 1000);
    } else {
      overlay.classList.add("hide");
      setTimeout(function(){
        overlay.remove();
        if(onComplete) onComplete();
      }, 300);
    }
  }

  setTimeout(tick, 300);
}

/* ============== NAV ============== */
function goLanding(){ role=null; show("screen-landing"); }

/* ============== HOST FLOW ============== */
async function goHostSetup(){
  initAudio();
  role="host";
  show("screen-host-setup");

  if(!initFirebase()){ enableDemoMode(); }

  code = roomCode();
  var meta = {status:"lobby", qIndex:-1, qStartAt:0, duration:QUESTION_MS, total:QUESTIONS.length, createdAt:Date.now()};
  localMeta = meta;

  var metaRef = dbRef(dbPath("broto", code, "meta"));
  if(metaRef) await metaRef.set(meta);

  document.getElementById("host-code").textContent = code.replace(/(\d{3})(\d{3})/, "$1 $2");
  document.getElementById("qr-box").innerHTML = "";
  try{
    var joinUrl = location.origin + location.pathname + "?code=" + code;
    new QRCode(document.getElementById("qr-box"), {text: joinUrl, width:160, height:160, colorDark:"#0a1f12", colorLight:"#f2ead4", correctLevel:QRCode.CorrectLevel.M});
  }catch(e){}

  show("screen-host-lobby");

  var playersRef = dbRef(dbPath("broto", code, "players"));
  if(playersRef) playersRef.on("value", function(snap){
    var val = snap.val() || {};
    hostRoster = val;
    if(document.getElementById("screen-host-lobby").classList.contains("active")){
      renderLobbyPlayers();
    }
  });

  var metaR = dbRef(dbPath("broto", code, "meta"));
  if(metaR) metaR.on("value", function(snap){
    var m = snap.val();
    if(m) localMeta = m;
  });
}

function renderLobbyPlayers(){
  var grid = document.getElementById("host-players");
  var list = [];
  for(var key in hostRoster) list.push(hostRoster[key]);
  list.sort(function(a,b){ return (a.joinedAt||0)-(b.joinedAt||0); });

  var html = "";
  for(var i=0;i<list.length;i++){
    var p = list[i];
    var palette = p.avatarPalette || AVATAR_PALETTES[0];
    var avUrl = generateAvatarSVG(palette, 80);
    html += '<div class="sprout"><img class="av" src="'+avUrl+'" alt="'+escapeHtml(p.name)+'" style="border-radius:50%;width:40px;height:40px;object-fit:cover;"><div class="nm">'+escapeHtml(p.name)+'</div></div>';
  }
  grid.innerHTML = html;

  document.getElementById("host-count").textContent = list.length+" pessoa"+(list.length===1?"":"s")+" na sala";
  var btn = document.getElementById("btn-start-game");
  if(btn) btn.disabled = list.length === 0;
}

async function hostStartGame(){
  initAudio(); sfxStart();

  showCountdown(async function(){
    localMeta.qIndex = 0; localMeta.status="question"; localMeta.qStartAt = Date.now();
    var metaRef = dbRef(dbPath("broto", code, "meta"));
    if(metaRef) await metaRef.set(localMeta);
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

function listenForAnswers(){
  var ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex));
  if(ansRef) ansRef.on("value", function(snap){
    var val = snap.val() || {};
    var count = 0;
    for(var k in val) count++;
    var total = 0;
    for(var k in hostRoster) total++;
    var el = document.getElementById("host-answered");
    if(el) el.textContent = count+" de "+total+" respostas";
  });
}

function renderHostQuestion(){
  var qd = QUESTIONS[localMeta.qIndex];
  document.getElementById("host-qcounter").textContent = "Pergunta "+(localMeta.qIndex+1)+" de "+QUESTIONS.length;
  document.getElementById("host-answered").textContent = "0 respostas";
  document.getElementById("host-qtext").textContent = qd.q;

  var optsHtml = "";
  for(var i=0;i<qd.opts.length;i++){
    optsHtml += '<div class="opt o'+i+'" id="host-opt-'+i+'"><span class="mk">'+OPT_MARK[i]+'</span><span>'+qd.opts[i]+'</span></div>';
  }
  document.getElementById("host-opts").innerHTML = optsHtml;

  document.getElementById("btn-reveal").style.display="inline-flex";
  document.getElementById("btn-next").style.display="none";
  document.getElementById("host-timerbar").style.width = "100%";
}

function startHostTimerTick(){
  clearInterval(tickTimer);
  tickTimer = setInterval(function(){
    if(!localMeta || localMeta.status!=="question") return;
    var remain = localMeta.duration - (Date.now()-localMeta.qStartAt);
    var pct = Math.max(0, Math.min(100, (remain/localMeta.duration)*100));
    var bar = document.getElementById("host-timerbar");
    if(bar) bar.style.width = pct+"%";
    if(remain<=3000 && remain>2500) sfxTick();
    if(remain<=0){ clearInterval(tickTimer); hostReveal(); }
  }, 150);
}

async function hostReveal(){
  if(localMeta.status!=="question") return;
  clearInterval(tickTimer);
  localMeta.status="reveal";
  var metaRef = dbRef(dbPath("broto", code, "meta"));
  if(metaRef) await metaRef.set(localMeta);

  var qi = localMeta.qIndex, qd = QUESTIONS[qi];
  var ansRef = dbRef(dbPath("broto", code, "answers", qi));
  var snap = ansRef ? await ansRef.get() : {val: function(){ return null; }};
  var answers = snap.val() || {};
  var counts=[0,0,0,0];
  for(var key in answers){
    var a = answers[key];
    if(a && a.choice>=0 && a.choice<4) counts[a.choice]++;
  }
  var total = 0;
  for(var k in answers) total++;
  total = Math.max(1, total);

  for(var i=0;i<qd.opts.length;i++){
    var el = document.getElementById("host-opt-"+i);
    if(!el) continue;
    if(i===qd.c) el.classList.add("correct"); else el.classList.add("dim");
    var pct = Math.round((counts[i]/total)*100);
    el.innerHTML += '<div class="bar"><i style="width:'+pct+'%"></i></div>';
  }

  for(var key in answers){
    var a = answers[key];
    if(!a || !a.pid) continue;
    var isCorrect = a.choice===qd.c;
    var pRef = dbRef(dbPath("broto", code, "players", a.pid));
    if(pRef){
      var pSnap = await pRef.get();
      var p = pSnap.val() || {};
      p.score = (p.score||0) + (isCorrect ? calcPoints(a.at - localMeta.qStartAt, p.streak||0).total : 0);
      if(isCorrect) {
        p.streak = (p.streak||0) + 1;
        p.bestStreak = Math.max(p.bestStreak||0, p.streak);
      } else {
        p.streak = 0;
      }
      await pRef.set(p);
    }
  }

  updateLivePodium();

  document.getElementById("btn-reveal").style.display="none";
  document.getElementById("btn-next").style.display="inline-flex";
  document.getElementById("btn-next").textContent = (qi+1<QUESTIONS.length) ? "Proxima ->" : "Ver podio 🏆";
}

async function hostNext(){
  if(localMeta.qIndex+1 < QUESTIONS.length){
    localMeta.qIndex += 1; localMeta.status="question"; localMeta.qStartAt=Date.now();
    var metaRef = dbRef(dbPath("broto", code, "meta"));
    if(metaRef) await metaRef.set(localMeta);
    renderHostQuestion();
    startHostTimerTick();
    listenForAnswers();
    updateLivePodium();
  } else {
    localMeta.status="podium";
    var metaRef = dbRef(dbPath("broto", code, "meta"));
    if(metaRef) await metaRef.set(localMeta);
    await renderHostPodium();
  }
}

/* ============== LIVE PODIUM ============== */
async function updateLivePodium(){
  if(!livePodiumVisible) return;
  var playersRef = dbRef(dbPath("broto", code, "players"));
  var snap = playersRef ? await playersRef.get() : {val: function(){ return null; }};
  var items = [];
  var val = snap.val() || {};
  for(var k in val) if(val[k]) items.push(val[k]);
  items.sort(function(a,b){ return (b.score||0)-(a.score||0); });

  var container = document.getElementById("live-podium-content");
  if(!container) return;

  var maxScore = 1;
  for(var i=0;i<items.length;i++) maxScore = Math.max(maxScore, items[i].score||0);

  var html = "";
  for(var i=0;i<Math.min(items.length,5);i++){
    var p = items[i];
    var isLeader = i === 0;
    var pct = ((p.score||0) / maxScore) * 100;
    var palette = p.avatarPalette || AVATAR_PALETTES[0];
    var avUrl = generateAvatarSVG(palette, 36);
    html += '<div class="live-podium-row '+(isLeader?"leader":"")+'">'+
      '<span class="lp-rank">#'+(i+1)+'</span>'+
      '<img class="lp-av" src="'+avUrl+'" alt="" style="border-radius:50%;width:28px;height:28px;object-fit:cover;">'+
      '<span class="lp-name">'+escapeHtml(p.name)+'</span>'+
      '<span class="lp-score">'+(p.score||0)+' pts</span>'+
      '<div class="lp-bar" style="width:'+pct+'%"></div>'+
    '</div>';
  }
  container.innerHTML = html;
}

/* ============== FINAL PODIUM ============== */
async function renderHostPodium(){
  clearInterval(tickTimer);
  livePodiumVisible = false;
  document.getElementById("live-podium").style.display = "none";

  var playersRef = dbRef(dbPath("broto", code, "players"));
  var snap = playersRef ? await playersRef.get() : {val: function(){ return null; }};
  var items = [];
  var val = snap.val() || {};
  for(var k in val) if(val[k]) items.push(val[k]);
  items.sort(function(a,b){ return (b.score||0)-(a.score||0); });

  show("screen-host-podium");
  startLeafFall();

  var stage = document.getElementById("host-podium");
  stage.innerHTML = "";

  var medals = ["🥇","🥈","🥉"];
  var flowers = ["🌻","🌼","🌸"];

  for(var idx=0;idx<items.length;idx++){
    var p = items[idx];
    var isTop3 = idx < 3;
    var rank = idx + 1;
    var medal = isTop3 ? medals[idx] : "";
    var flower = isTop3 ? flowers[idx] : "🌱";
    var palette = p.avatarPalette || AVATAR_PALETTES[0];
    var avUrl = generateAvatarSVG(palette, 56);
    var topClass = isTop3 ? (idx===0 ? "top-1" : idx===1 ? "top-2" : "top-3") : "";

    var step = document.createElement("div");
    step.className = "podium-step" + (isTop3 && idx === 0 ? " winner" : "") + " " + topClass;
    step.id = "podium-step-" + idx;
    step.innerHTML = 
      '<div class="step-rank">#'+rank+'</div>'+
      '<img class="step-av" src="'+avUrl+'" alt="'+escapeHtml(p.name)+'" style="border-radius:50%;width:56px;height:56px;object-fit:cover;" onerror="this.src=\''+generateAvatarSVG(palette,56)+'\'">'+
      '<div class="step-info">'+
        '<div class="step-name">'+escapeHtml(p.name)+'</div>'+
        '<div class="step-score">'+(p.score||0)+' pontos'+(p.bestStreak>2?' · 🔥 serie '+p.bestStreak:'')+'</div>'+
      '</div>'+
      '<div class="step-medal">'+(isTop3 ? medal+flower : "")+'</div>'+
      '<div class="step-bar-bg"></div>'+
      '<div class="step-bar-fill"></div>';
    stage.appendChild(step);
  }

  var rl = document.getElementById("host-ranklist");
  var rlHtml = "";
  for(var i=0;i<items.length;i++){
    var p = items[i];
    var palette = p.avatarPalette || AVATAR_PALETTES[0];
    var avUrl = generateAvatarSVG(palette, 28);
    rlHtml += '<div class="rank-row" style="animation-delay:'+(i*0.08)+'s"><span class="rn">'+(i+1)+'</span><img src="'+avUrl+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" alt=""><span>'+escapeHtml(p.name)+'</span><span class="rs">'+(p.score||0)+' pts</span></div>';
  }
  rl.innerHTML = rlHtml;

  podiumItems = items;
  podiumRevealIndex = items.length - 1;
  revealNextPodiumStep();
}

function revealNextPodiumStep(){
  if(podiumRevealIndex < 0){
    setTimeout(function(){
      var winnerStep = document.getElementById("podium-step-0");
      if(winnerStep){
        winnerStep.classList.add("winner-glow");
        sfxWinner();
        spawnConfetti();
        spawnConfetti();
      }
    }, 600);
    return;
  }

  var step = document.getElementById("podium-step-" + podiumRevealIndex);
  if(step){
    step.classList.add("revealed");
    sfxReveal();

    setTimeout(function(){
      var bar = step.querySelector(".step-bar-fill");
      if(bar){
        var maxScore = 1;
        for(var i=0;i<podiumItems.length;i++) maxScore = Math.max(maxScore, podiumItems[i].score||0);
        var pct = ((podiumItems[podiumRevealIndex].score||0) / maxScore) * 100;
        bar.style.width = pct + "%";
      }
    }, 100);
  }

  podiumRevealIndex--;

  var delay = podiumRevealIndex >= 2 ? 800 : 1200;
  setTimeout(revealNextPodiumStep, delay);
}

/* ============== PLAYER FLOW ============== */
function goJoinCode(){
  role="player";
  show("screen-join-code");
  document.getElementById("join-code-error").textContent="";
}
async function submitCode(){
  initAudio();
  var val = document.getElementById("join-code-input").value.replace(/\D/g,"");
  if(val.length!==6){ document.getElementById("join-code-error").textContent="Digite os 6 numeros do codigo."; return; }

  if(!initFirebase()){ enableDemoMode(); }

  var metaRef = dbRef(dbPath("broto", val, "meta"));
  var snap = metaRef ? await metaRef.get() : {val: function(){ return null; }, exists: function(){ return false; }};
  if(!snap.exists()){ document.getElementById("join-code-error").textContent="Nao achamos essa sala. Confira o codigo com quem esta apresentando."; return; }

  code = val; localMeta = snap.val();
  buildAvatarGrid();
  show("screen-join-profile");
}
function buildAvatarGrid(){
  var g = document.getElementById("avatar-grid");
  var html = "";
  for(var i=0;i<AVATARS.length;i++){
    var isSel = i===0 ? " sel" : "";
    html += '<div class="avatar-opt'+isSel+'" data-idx="'+i+'" onclick="pickAvatar(this)"><img src="'+AVATARS[i].url+'" alt="'+AVATARS[i].name+'" loading="lazy" style="border-radius:50%;width:56px;height:56px;object-fit:cover;"><div class="av-name">'+AVATARS[i].name+'</div></div>';
  }
  g.innerHTML = html;
  myAvatar = AVATARS[0];
}
function pickAvatar(el){
  var opts = document.querySelectorAll(".avatar-opt");
  for(var i=0;i<opts.length;i++) opts[i].classList.remove("sel");
  el.classList.add("sel");
  myAvatar = AVATARS[parseInt(el.dataset.idx)];
}
async function playerJoinRoom(){
  var nameInput = document.getElementById("join-name-input");
  var name = nameInput.value.trim();
  if(!name){ document.getElementById("join-profile-error").textContent="Escreve um nome ou apelido pra gente te chamar :)"; return; }
  if(containsBadWord(name)){ 
    document.getElementById("join-profile-error").textContent="Esse nome nao pode ser usado. Escolha outro.";
    nameInput.classList.add("shake");
    setTimeout(function(){ nameInput.classList.remove("shake"); }, 400);
    return; 
  }
  myName = name.slice(0,18);
  myPid = uid();
  var p = {pid:myPid, name:myName, avatar:myAvatar.name, avatarUrl:myAvatar.url, avatarPalette: myAvatar.palette, score:0, streak:0, bestStreak:0, joinedAt:Date.now()};

  var pRef = dbRef(dbPath("broto", code, "players", myPid));
  if(pRef) await pRef.set(p);

  document.getElementById("player-wait-av-img").src = myAvatar.url;
  document.getElementById("player-wait-av-img").alt = myAvatar.name;
  document.getElementById("player-wait-name").textContent = myName;
  document.getElementById("player-wait-code").textContent = "sala " + code;
  show("screen-player-wait");
  lastSeenStatus = "lobby"; lastSeenQIndex = -1;

  var metaRef = dbRef(dbPath("broto", code, "meta"));
  if(metaRef) metaRef.on("value", function(snap){
    var meta = snap.val();
    if(meta) handlePlayerMetaChange(meta);
  });
}

function handlePlayerMetaChange(meta){
  localMeta = meta;
  if(meta.status==="question" && (lastSeenStatus!=="question" || meta.qIndex!==lastSeenQIndex)){
    lastSeenStatus="question"; lastSeenQIndex=meta.qIndex; hasAnsweredThisQ=false;
    renderPlayerQuestion();
    show("screen-player-question");
  } else if(meta.status==="reveal" && lastSeenStatus!=="reveal"){
    lastSeenStatus="reveal";
    renderPlayerReveal().then(function(){ show("screen-player-reveal"); });
  } else if(meta.status==="podium" && lastSeenStatus!=="podium"){
    lastSeenStatus="podium";
    renderPlayerPodium().then(function(){ show("screen-player-podium"); });
  } else if(meta.status==="question" && document.getElementById("screen-player-question").classList.contains("active")){
    updatePlayerTimer();
  }
}

function renderPlayerQuestion(){
  initAudio();
  var qd = QUESTIONS[localMeta.qIndex];
  document.getElementById("player-qcounter").textContent = "Pergunta "+(localMeta.qIndex+1)+" de "+QUESTIONS.length;
  document.getElementById("player-qtext").textContent = qd.q;
  document.getElementById("player-answer-status").textContent="";

  var streakBadge = document.getElementById("player-streak-badge");
  var streakText = document.getElementById("player-streak-text");
  if(myStreak >= 2) {
    streakBadge.style.display = "flex";
    streakText.textContent = "Serie x" + myStreak + " 🔥";
  } else {
    streakBadge.style.display = "none";
  }

  var optsHtml = "";
  for(var i=0;i<qd.opts.length;i++){
    optsHtml += '<div class="opt o'+i+' clickable" id="player-opt-'+i+'" onclick="playerAnswer('+i+')"><span class="mk">'+OPT_MARK[i]+'</span><span>'+qd.opts[i]+'</span></div>';
  }
  document.getElementById("player-opts").innerHTML = optsHtml;
  updatePlayerTimer();
  updatePlayerGap();
}

function updatePlayerTimer(){
  if(!localMeta || localMeta.status!=="question") return;
  var remain = Math.max(0, localMeta.duration - (Date.now()-localMeta.qStartAt));
  var pct = Math.max(0,Math.min(100,(remain/localMeta.duration)*100));
  var bar = document.getElementById("player-timerbar");
  var lab = document.getElementById("player-timer");
  if(bar) bar.style.width = pct+"%";
  if(lab) lab.textContent = Math.ceil(remain/1000)+"s";
}

async function updatePlayerGap(){
  if(!code || !myPid) return;
  var playersRef = dbRef(dbPath("broto", code, "players"));
  var snap = playersRef ? await playersRef.get() : {val: function(){ return null; }};
  var items = [];
  var val = snap.val() || {};
  for(var k in val) if(val[k]) items.push(val[k]);
  items.sort(function(a,b){ return (b.score||0)-(a.score||0); });

  var myRank = -1, myScore = 0;
  for(var i=0;i<items.length;i++){
    if(items[i].pid === myPid) { myRank = i+1; myScore = items[i].score||0; }
  }

  var gapEl = document.getElementById("player-gap-info");
  var gapText = document.getElementById("player-gap-text");

  if(myRank > 1 && items[myRank-2]) {
    var gap = (items[myRank-2].score||0) - myScore;
    gapEl.style.display = "flex";
    gapText.textContent = "Voce esta a " + gap + " pts do " + (myRank-1) + "o lugar";
  } else if(myRank === 1 && items[1]) {
    var lead = myScore - (items[1].score||0);
    gapEl.style.display = "flex";
    gapText.textContent = "Liderando por " + lead + " pts 🔥";
  } else {
    gapEl.style.display = "none";
  }
}

setInterval(function(){
  if(role==="player" && document.getElementById("screen-player-question").classList.contains("active")) {
    updatePlayerTimer();
    updatePlayerGap();
  }
}, 250);

async function playerAnswer(idx){
  if(hasAnsweredThisQ) return;
  hasAnsweredThisQ = true;
  var opts = document.querySelectorAll("#player-opts .opt");
  for(var i=0;i<opts.length;i++){
    opts[i].classList.remove("clickable");
    if(i!==idx) opts[i].classList.add("dim");
  }
  document.getElementById("player-answer-status").textContent = "Resposta enviada - aguarde a revelacao!";
  var ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex, myPid));
  if(ansRef) await ansRef.set({pid:myPid, choice:idx, at:Date.now()});
}

async function renderPlayerReveal(){
  var qd = QUESTIONS[localMeta.qIndex];
  var ansRef = dbRef(dbPath("broto", code, "answers", localMeta.qIndex, myPid));
  var myAns = ansRef ? (await ansRef.get()).val() : null;
  var pRef = dbRef(dbPath("broto", code, "players", myPid));
  var p = pRef ? (await pRef.get()).val() : null;
  var isCorrect = myAns && myAns.choice===qd.c;

  if(isCorrect) {
    myStreak++;
    myBestStreak = Math.max(myBestStreak, myStreak);
    sfxStreak(myStreak);
  } else {
    myStreak = 0;
  }

  var banner = document.getElementById("player-reveal-banner");
  banner.className = "reveal-banner "+(isCorrect?"ok":"no");
  if(!myAns) banner.textContent = "Tempo esgotado ⏳";
  else if(isCorrect){ banner.textContent = "Certinho! 🌿"; sfxCorrect(); spawnConfetti(); }
  else { banner.textContent = "Quase - nao foi dessa vez"; sfxWrong(); }

  var pts = isCorrect ? calcPoints(myAns.at-localMeta.qStartAt, myStreak) : {base:0, bonus:0, total:0};
  var ptsText = isCorrect ? ("+"+pts.total+" pontos" + (pts.bonus>0 ? " ("+pts.base+" + 🔥"+pts.bonus+")" : "")) : "";
  document.getElementById("player-reveal-points").textContent = ptsText;
  document.getElementById("player-reveal-total").textContent = "Pontuacao total: "+(p?p.score||0:0);

  var streakReveal = document.getElementById("player-streak-reveal");
  var streakRevealText = document.getElementById("player-streak-reveal-text");
  if(myStreak >= 2) {
    streakReveal.style.display = "flex";
    streakRevealText.textContent = "Serie de " + myStreak + " acertos! 🔥";
  } else {
    streakReveal.style.display = "none";
  }

  var playersRef = dbRef(dbPath("broto", code, "players"));
  var snap = playersRef ? await playersRef.get() : {val: function(){ return null; }};
  var items = [];
  var val = snap.val() || {};
  for(var k in val) if(val[k]) items.push(val[k]);
  items.sort(function(a,b){ return (b.score||0)-(a.score||0); });

  var myRank = -1, myScore = 0;
  for(var i=0;i<items.length;i++){
    if(items[i].pid === myPid) { myRank = i+1; myScore = items[i].score||0; }
  }

  var gapRevealEl = document.getElementById("player-gap-reveal");
  var gapRevealText = document.getElementById("player-gap-reveal-text");
  if(myRank > 1 && items[myRank-2]) {
    var gap = (items[myRank-2].score||0) - myScore;
    gapRevealEl.style.display = "flex";
    gapRevealText.textContent = "Voce esta a " + gap + " pts do " + (myRank-1) + "o lugar";
  } else if(myRank === 1 && items[1]) {
    var lead = myScore - (items[1].score||0);
    gapRevealEl.style.display = "flex";
    gapRevealText.textContent = "Liderando por " + lead + " pts 🔥";
  } else {
    gapRevealEl.style.display = "none";
  }
}

async function renderPlayerPodium(){
  var playersRef = dbRef(dbPath("broto", code, "players"));
  var snap = playersRef ? await playersRef.get() : {val: function(){ return null; }};
  var items = [];
  var val = snap.val() || {};
  for(var k in val) if(val[k]) items.push(val[k]);
  items.sort(function(a,b){ return (b.score||0)-(a.score||0); });

  var myRank = -1;
  for(var i=0;i<items.length;i++) if(items[i].pid===myPid) myRank = i+1;
  var me = null;
  for(var i=0;i<items.length;i++) if(items[i].pid===myPid) me = items[i];

  var emojis = ["🥇","🥈","🥉"];
  document.getElementById("player-final-emoji").textContent = myRank<=3 && myRank>0 ? emojis[myRank-1] : "🌱";
  document.getElementById("player-final-rank").textContent = (myRank>0?myRank:"?")+"o lugar de "+items.length;
  document.getElementById("player-final-score").textContent = (me?me.score||0:0)+" pontos" + (me && me.bestStreak>2?" · 🔥 serie "+me.bestStreak:"");

  var listHtml = "";
  for(var i=0;i<items.length;i++){
    var p = items[i];
    var isMe = p.pid===myPid;
    var palette = p.avatarPalette || AVATAR_PALETTES[0];
    var avUrl = generateAvatarSVG(palette, 28);
    listHtml += '<div class="rank-row" style="animation-delay:'+(i*0.08)+'s'+(isMe?';border-color:var(--bloom);box-shadow:0 0 0 1px var(--bloom)':'')+'"><span class="rn">'+(i+1)+'</span><img src="'+avUrl+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" alt=""><span>'+escapeHtml(p.name)+'</span><span class="rs">'+(p.score||0)+' pts'+(p.bestStreak>2?' 🔥'+p.bestStreak:'')+'</span></div>';
  }
  document.getElementById("player-final-list").innerHTML = listHtml;

  show("screen-player-podium");
  startLeafFall();
  if(myRank<=3 && myRank>0){ 
    sfxWinner(); 
    spawnConfetti(); 
    spawnConfetti();
  }
}

/* ============== BOOT ============== */
(function boot(){
  var params = new URLSearchParams(location.search);
  var preCode = params.get("code");
  if(preCode && /^\d{6}$/.test(preCode)){
    role="player";
    if(!initFirebase()) enableDemoMode();
    (async function(){
      var metaRef = dbRef(dbPath("broto", preCode, "meta"));
      var snap = metaRef ? await metaRef.get() : {val: function(){ return null; }, exists: function(){ return false; }};
      if(snap.exists()){
        code = preCode; localMeta = snap.val();
        buildAvatarGrid();
        show("screen-join-profile");
      } else {
        goLanding();
      }
    })();
  }
})();