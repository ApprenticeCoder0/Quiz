/* ============================================================
   BROTO v3 — Quiz Coletivo: Etica Ambiental & Ecofeminismo
   App Principal — GitHub Pages Ready
   ============================================================ */

/* ============== FIREBASE CONFIG ============== */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDEWTmLRXrlKBKBopYwjlgA6MD2833GY54",
  authDomain: "broto-quiz-7815c.firebaseapp.com",
  databaseURL: "https://broto-quiz-7815c-default-rtdb.firebaseio.com",
  projectId: "broto-quiz-7815c",
  storageBucket: "broto-quiz-7815c.firebasestorage.app",
  messagingSenderId: "379059171454",
  appId: "1:379059171454:web:8574b77f5ec7eec8dbe82f"
};

/* ============== AVATARES — Personagens ============== */
const AVATARS = [
  {name:"Chico Mendes", url:"https://upload.wikimedia.org/wikipedia/en/7/7c/Chico_Mendes.jpg"},
  {name:"Vandana Shiva", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Vandana_Shiva_Booksigning_Helsinki_2009.jpg/440px-Vandana_Shiva_Booksigning_Helsinki_2009.jpg"},
  {name:"Greta Thunberg", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Greta_Thunberg_01.jpg/440px-Greta_Thunberg_01.jpg"},
  {name:"Marina Silva", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Marina_Silva_%28cropped%29.jpg/440px-Marina_Silva_%28cropped%29.jpg"},
  {name:"David Attenborough", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/David_Attenborough_2015.jpg/440px-David_Attenborough_2015.jpg"},
  {name:"Wangari Maathai", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Wangari_Maathai_in_2001.jpg/440px-Wangari_Maathai_in_2001.jpg"},
  {name:"Jane Goodall", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Jane_Goodall_2015.jpg/440px-Jane_Goodall_2015.jpg"},
  {name:"Leonardo DiCaprio", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/440px-Leonardo_DiCaprio_2014.jpg"},
  {name:"Rachel Carson", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Rachel-Carson.jpg/440px-Rachel-Carson.jpg"},
  {name:"Francoise d'Eaubonne", url:"https://upload.wikimedia.org/wikipedia/en/5/5e/Francoise_d%27Eaubonne.jpg"},
  {name:"Donna Haraway", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Donna_Haraway_2016.jpg/440px-Donna_Haraway_2016.jpg"},
  {name:"Val Plumwood", url:"https://upload.wikimedia.org/wikipedia/en/2/2e/Val_Plumwood.jpg"},
  {name:"Carolyn Merchant", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Carolyn_Merchant.jpg/440px-Carolyn_Merchant.jpg"},
  {name:"Severn Cullis-Suzuki", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Severn_Cullis-Suzuki.jpg/440px-Severn_Cullis-Suzuki.jpg"},
  {name:"Xiuhtezcatl Martinez", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Xiuhtezcatl_Martinez.jpg/440px-Xiuhtezcatl_Martinez.jpg"}
];

/* ============== FILTRO DE NOMES ============== */
const BAD_WORDS = [
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

function containsBadWord(name){
  var lower = name.toLowerCase().trim();
  for(var i = 0; i < BAD_WORDS.length; i++){
    if(lower.indexOf(BAD_WORDS[i]) !== -1) return true;
  }
  if(/(.)\1{5,}/.test(lower)) return true;
  if(/^\d+$/.test(lower)) return true;
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

/* ============== FIREBASE INIT ============== */
function initFirebase(){
  try{
    if(FIREBASE_CONFIG.apiKey.indexOf("XXXX") === -1){
      firebase.initializeApp(FIREBASE_CONFIG);
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
  if(online){ el.className="conn-status online"; el.textContent="● online"; }
  else { el.className="conn-status offline"; el.textContent="● offline — modo demo ativo"; }
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
function calcPoints(elapsedMs){
  var clamped = Math.max(0, Math.min(QUESTION_MS, elapsedMs));
  var ratio = 1 - (clamped / QUESTION_MS);
  return Math.round(500 + 500*ratio);
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

/* Countdown overlay */
function showCountdown(onComplete){
  var overlay = document.createElement("div");
  overlay.className = "countdown-overlay";
  overlay.innerHTML = '<div class="countdown-num" id="cd-num">3</div><div class="countdown-label">Preparar…</div>';
  document.body.appendChild(overlay);

  var count = 3;
  var labels = ["Preparar…","Apontar…","Já!"];

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
    var imgUrl = p.avatarUrl || p.avatar || "";
    html += '<div class="sprout"><img class="av" src="'+imgUrl+'" alt="" onerror="this.onerror=null;this.style.display=\'none\';this.parentElement.insertAdjacentHTML(\'afterbegin\',\'<div class=\\"av\\">🌱</div>\');"><div class="nm">'+escapeHtml(p.name)+'</div></div>';
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
    var pts = isCorrect ? calcPoints(a.at - localMeta.qStartAt) : 0;
    var pRef = dbRef(dbPath("broto", code, "players", a.pid));
    if(pRef){
      var pSnap = await pRef.get();
      var p = pSnap.val() || {};
      p.score = (p.score||0) + pts;
      await pRef.set(p);
    }
  }

  updateLivePodium();

  document.getElementById("btn-reveal").style.display="none";
  document.getElementById("btn-next").style.display="inline-flex";
  document.getElementById("btn-next").textContent = (qi+1<QUESTIONS.length) ? "Próxima →" : "Ver pódio 🏆";
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
    html += '<div class="live-podium-row '+(isLeader?"leader":"")+'">'+
      '<span class="lp-rank">#'+(i+1)+'</span>'+
      '<img class="lp-av" src="'+(p.avatarUrl||p.avatar||"")+'" alt="" onerror="this.style.display=\'none\'">'+
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

    var step = document.createElement("div");
    step.className = "podium-step" + (isTop3 && idx === 0 ? " winner" : "");
    step.id = "podium-step-" + idx;
    step.innerHTML = 
      '<div class="step-rank">#'+rank+'</div>'+
      '<img class="step-av" src="'+(p.avatarUrl || p.avatar || "")+'" alt="" onerror="this.onerror=null;this.style.display=\'none\';this.parentElement.querySelector(\'.step-rank\').textContent=\''+flower+'\';">'+
      '<div class="step-info">'+
        '<div class="step-name">'+escapeHtml(p.name)+'</div>'+
        '<div class="step-score">'+(p.score||0)+' pontos</div>'+
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
    rlHtml += '<div class="rank-row" style="animation-delay:'+(i*0.08)+'s"><span class="rn">'+(i+1)+'</span><img src="'+(p.avatarUrl||p.avatar||"")+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" onerror="this.style.display=\'none\'"><span>'+escapeHtml(p.name)+'</span><span class="rs">'+(p.score||0)+' pts</span></div>';
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
  if(val.length!==6){ document.getElementById("join-code-error").textContent="Digite os 6 números do código."; return; }

  if(!initFirebase()){ enableDemoMode(); }

  var metaRef = dbRef(dbPath("broto", val, "meta"));
  var snap = metaRef ? await metaRef.get() : {val: function(){ return null; }, exists: function(){ return false; }};
  if(!snap.exists()){ document.getElementById("join-code-error").textContent="Não achamos essa sala. Confira o código com quem está apresentando."; return; }

  code = val; localMeta = snap.val();
  buildAvatarGrid();
  show("screen-join-profile");
}
function buildAvatarGrid(){
  var g = document.getElementById("avatar-grid");
  var html = "";
  for(var i=0;i<AVATARS.length;i++){
    html += '<div class="avatar-opt'+(i===0?" sel":"")+'" data-idx="'+i+'" onclick="pickAvatar(this)"><img src="'+AVATARS[i].url+'" alt="'+AVATARS[i].name+'" loading="lazy"><div class="av-name">'+AVATARS[i].name+'</div></div>';
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
    document.getElementById("join-profile-error").textContent="Esse nome não pode ser usado. Escolha outro.";
    nameInput.classList.add("shake");
    setTimeout(function(){ nameInput.classList.remove("shake"); }, 400);
    return; 
  }
  myName = name.slice(0,18);
  myPid = uid();
  var p = {pid:myPid, name:myName, avatar:myAvatar.name, avatarUrl:myAvatar.url, score:0, joinedAt:Date.now()};

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

  var optsHtml = "";
  for(var i=0;i<qd.opts.length;i++){
    optsHtml += '<div class="opt o'+i+' clickable" id="player-opt-'+i+'" onclick="playerAnswer('+i+')"><span class="mk">'+OPT_MARK[i]+'</span><span>'+qd.opts[i]+'</span></div>';
  }
  document.getElementById("player-opts").innerHTML = optsHtml;
  updatePlayerTimer();
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
setInterval(function(){
  if(role==="player" && document.getElementById("screen-player-question").classList.contains("active")) updatePlayerTimer();
}, 250);

async function playerAnswer(idx){
  if(hasAnsweredThisQ) return;
  hasAnsweredThisQ = true;
  var opts = document.querySelectorAll("#player-opts .opt");
  for(var i=0;i<opts.length;i++){
    opts[i].classList.remove("clickable");
    if(i!==idx) opts[i].classList.add("dim");
  }
  document.getElementById("player-answer-status").textContent = "Resposta enviada — aguarde a revelação!";
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
  var banner = document.getElementById("player-reveal-banner");
  banner.className = "reveal-banner "+(isCorrect?"ok":"no");
  if(!myAns) banner.textContent = "Tempo esgotado ⏳";
  else if(isCorrect){ banner.textContent = "Certinho! 🌿"; sfxCorrect(); spawnConfetti(); }
  else { banner.textContent = "Quase — não foi dessa vez"; sfxWrong(); }
  document.getElementById("player-reveal-points").textContent = isCorrect ? ("+"+calcPoints(myAns.at-localMeta.qStartAt)+" pontos") : "";
  document.getElementById("player-reveal-total").textContent = "Pontuação total: "+(p?p.score||0:0);
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
  document.getElementById("player-final-rank").textContent = (myRank>0?myRank:"?")+"º lugar de "+items.length;
  document.getElementById("player-final-score").textContent = (me?me.score||0:0)+" pontos";

  var listHtml = "";
  for(var i=0;i<items.length;i++){
    var p = items[i];
    var isMe = p.pid===myPid;
    listHtml += '<div class="rank-row" style="animation-delay:'+(i*0.08)+'s'+(isMe?';border-color:var(--bloom);box-shadow:0 0 0 1px var(--bloom)':'')+'"><span class="rn">'+(i+1)+'</span><img src="'+(p.avatarUrl||p.avatar||"")+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" onerror="this.style.display=\'none\'"><span>'+escapeHtml(p.name)+'</span><span class="rs">'+(p.score||0)+' pts</span></div>';
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
