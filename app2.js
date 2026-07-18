/* ============================================================
   BROTO v3 — Quiz Coletivo: Ética Ambiental & Ecofeminismo
   App Principal — GitHub Pages Ready
   ============================================================ */

/* ============== FIREBASE CONFIG ============== */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  databaseURL: "https://SEU-PROJETO-default-rtdb.firebaseio.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxx"
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
  {name:"Françoise d\'Eaubonne", url:"https://upload.wikimedia.org/wikipedia/en/5/5e/Fran%C3%A7oise_d%27Eaubonne.jpg"},
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
  "baitola","boiola","cuzao","cuzão","filho da puta","fdp","arrombado","arrombada",
  "vagabundo","vagabunda","idiota","imbecil","retardado","retardada","mongol",
  "mongoloide","negro","neguin","macaco","crioulo","hitler","nazi","nazista",
  "estuprador","estupro","pedofilo","pedófilo","gayzinho","viadinho",
  "bichinha","sapatao","sapatão","traveco","vadia","escroto","escrota",
  "nojento","nojenta","cocô","coco","mijar","mijo","urina","urinar","defecar",
  "seu cu","fode","fodendo","fodido","fodida","putaria","pornô","porno",
  "pornografia","sexo","transar","transou","transando","boquete","anal",
  "penis","pênis","vagina","clitoris","clitóris","masturbar","masturbação",
  "gozar","gozada","esperma","semen","orgasmo","ereto","ereção","tesão","tesao",
  "pau","rola","piroca","pika","bilau","bilola","bucetinha","xoxota","xota",
  "xoxotinha","pepeca","pepeka","priquito","prikito","bct","ct","vsf",
  "vai se foder","vai tomar no cu","vtnc","vtmnc","tomar no cu","tnc","tmnc",
  "se foder","se fodendo","fodasse","foda se","fodase","fdps","filhodaputa",
  "filho daputa","filho da puta","f d p","f.d.p","cuzinho","cu de","cu do",
  "cu da","arrombados","arrombadas","merdinha","merdao","merdão","bostinha",
  "bostao","bostão","nojentos","nojentas","idiotas","imbecis","retardados",
  "retardadas","mongol","mongoloide","mongolóide","down","síndrome","sindrome",
  "autista","autismo","esquizofrenico","esquizofrênico","louco","louca","doido",
  "doida","maluco","maluca","psicopata","psicótico","psicotico","maníaco",
  "maniaco","depressivo","depressiva","suicida","suicidio","suicídio","morte",
  "morto","morta","matar","matou","matando","assassino","assassina",
  "assassinato","crime","criminoso","criminosa","ladrão","ladrao","ladra",
  "roubou","roubando","furto","furou","estelionato","golpe","golpista",
  "corrupto","corrupta","corrupção","propina","suborno","tráfico","trafico",
  "droga","drogas","maconha","cocaína","cocaina","crack","heroína","heroina",
  "lsd","ecstasy","metanfetamina","anfetamina","mdma","thc","baseado","beck",
  "bong","pipe","drogado","drogada","viciado","viciada","dependente","químico",
  "quimico","alcoolatra","alcoolismo","bêbado","bebado","bêbada","bebada",
  "bêbedo","bebedo","cachaça","cachaca","pinga","aguardente","whisky","vodka",
  "cerveja","chopp","vinho","alcool","álcool","prostituta","prostituto",
  "prostitutas","prostitutos","garota de programa","gp","michê","miche",
  "cafetão","cafetao","cafetina"
];

function containsBadWord(name){
  const lower = name.toLowerCase().trim();
  for(const word of BAD_WORDS){
    if(lower.includes(word)) return true;
  }
  if(/(.)\1{5,}/.test(lower)) return true;
  if(/^\d+$/.test(lower)) return true;
  return false;
}

function checkNameFilter(){
  const input = document.getElementById('join-name-input');
  const warning = document.getElementById('name-filter-warning');
  const btn = document.getElementById('btn-join-room');
  const name = input.value.trim();
  if(name && containsBadWord(name)){
    warning.classList.add('show');
    btn.disabled = true;
    input.style.borderColor = 'var(--bloom)';
  } else {
    warning.classList.remove('show');
    btn.disabled = false;
    input.style.borderColor = '';
  }
}

/* ============== STATE ============== */
let role = null;
let code = null;
let myPid = null, myName = "", myAvatar = AVATARS[0];
let lastSeenStatus = null, lastSeenQIndex = -1;
let hostPollTimer = null, playerPollTimer = null, tickTimer = null;
let localMeta = null;
let hasAnsweredThisQ = false;
let hostRoster = {};
let db = null;
let roomRef = null;
let isDemoMode = false;
let demoPlayers = [];
let audioCtx = null;
let podiumRevealIndex = 0;
let podiumItems = [];
let livePodiumVisible = false;

/* ============== AUDIO ============== */
function initAudio(){ if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }
function playTone(freq, type, duration, vol){
  if(!audioCtx) return;
  vol = vol || 0.15;
  try{
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + duration);
  }catch(e){}
}
function sfxCorrect(){
  playTone(523,'sine',0.15,0.12);
  setTimeout(function(){playTone(659,'sine',0.15,0.12);},120);
  setTimeout(function(){playTone(784,'sine',0.3,0.12);},240);
}
function sfxWrong(){
  playTone(200,'sawtooth',0.3,0.08);
  setTimeout(function(){playTone(150,'sawtooth',0.4,0.08);},150);
}
function sfxTick(){ playTone(800,'sine',0.05,0.05); }
function sfxJoin(){
  playTone(440,'sine',0.1,0.1);
  setTimeout(function(){playTone(554,'sine',0.1,0.1);},100);
}
function sfxStart(){
  playTone(330,'sine',0.2,0.1);
  setTimeout(function(){playTone(440,'sine',0.2,0.1);},200);
  setTimeout(function(){playTone(554,'sine',0.2,0.1);},400);
  setTimeout(function(){playTone(659,'sine',0.4,0.15);},600);
}
function sfxCountdown(n){
  var base = 440 + (3-n)*110;
  playTone(base,'sine',0.15,0.12);
}
function sfxReveal(){
  playTone(440,'sine',0.1,0.1);
  setTimeout(function(){playTone(554,'sine',0.1,0.1);},100);
  setTimeout(function(){playTone(659,'sine',0.2,0.12);},200);
}
function sfxWinner(){
  playTone(523,'sine',0.2,0.12);
  setTimeout(function(){playTone(659,'sine',0.2,0.12);},200);
  setTimeout(function(){playTone(784,'sine',0.2,0.12);},400);
  setTimeout(function(){playTone(1047,'sine',0.5,0.15);},600);
}
function sfxDrumRoll(){
  for(var i=0;i<8;i++){
    (function(idx){
      setTimeout(function(){playTone(100+idx*20,'triangle',0.08,0.06);},idx*80);
    })(i);
  }
}

/* ============== FIREBASE INIT ============== */
function initFirebase(){
  try{
    if(!FIREBASE_CONFIG.apiKey.includes('XXXX')){
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.database();
      updateConnStatus(true);
      return true;
    }
  }catch(e){ console.error('Firebase init error:', e); }
  updateConnStatus(false);
  return false;
}
function updateConnStatus(online){
  var el = document.getElementById('conn-status');
  if(!el) return;
  if(online){ el.className='conn-status online'; el.textContent='● online'; }
  else { el.className='conn-status offline'; el.textContent='● offline — modo demo ativo'; }
}

/* ============== DEMO MODE ============== */
function enableDemoMode(){
  isDemoMode = true; updateConnStatus(false);
  document.getElementById('demo-badge').style.display='block';
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
      on: function(evt, cb){ if(evt==='value') demoOnValue(path, cb); },
      off: function(evt){ if(evt==='value') demoOff(path); },
      child: function(sub){ return dbRef(path+'/'+sub); },
      once: function(evt){ return Promise.resolve({val: function(){ return demoGet(path); }, exists: function(){ return demoGet(path)!==null; }}); }
    };
  }
  if(!db) return null;
  return db.ref(path);
}
function dbPath(){ return Array.prototype.slice.call(arguments).join('/'); }

/* ============== UTIL ============== */
function show(id){
  document.querySelectorAll('.screen').forEach(function(s){ s.classList.remove('active'); });
  var el = document.getElementById(id);
  if(el) el.classList.add('active');
}
function uid(){ return 'p'+Date.now().toString(36)+Math.random().toString(36).slice(2,8); }
function roomCode(){ return String(Math.floor(100000+Math.random()*900000)); }
function escapeHtml(s){ return (s||'').replace(/[&<>"']/g, function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
function calcPoints(elapsedMs){
  var clamped = Math.max(0, Math.min(QUESTION_MS, elapsedMs));
  var ratio = 1 - (clamped / QUESTION_MS);
  return Math.round(500 + 500*ratio);
}
function spawnConfetti(){
  var colors = ['#e0568f','#7fbf7f','#d4af37','#f3a6c4','#a8e6a8','#ff6b6b','#4ecdc4'];
  for(var i=0;i<40;i++){
    var el = document.createElement('div');
    el.className='confetti';
    el.style.left = (Math.random()*100)+'vw';
    el.style.top = '-10px';
    el.style.width = (6+Math.random()*10)+'px';
    el.style.height = (6+Math.random()*10)+'px';
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.borderRadius = Math.random()>0.5?'50%':'2px';
    el.style.animationDuration = (2+Math.random()*2)+'s';
    el.style.animationDelay = (Math.random()*0.5)+'s';
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 4500);
  }
}
function spawnLeafFall(){
  var el = document.createElement('div');
  el.className='leaf-fall';
  var leaves = ["🍃","🌸","🌿","🍂","🌾","🌼","🌺","🌻"];
  el.textContent = leaves[Math.floor(Math.random()*leaves.length)];
  el.style.left = (Math.random()*100)+'vw';
  el.style.animationDuration = (3+Math.random()*3)+'s';
  el.style.fontSize = (14+Math.random()*16)+'px';
  document.body.appendChild(el);
  setTimeout(function(){ el.remove(); }, 7000);
}
var leafInterval = null;
function startLeafFall(){ if(leafInterval) return; leafInterval = setInterval(spawnLeafFall, 250); }
function stopLeafFall(){ clearInterval(leafInterval); leafInterval=null; }

function spawnParticles(){
  var colors = ['#7fbf7f','#e0568f','#d4af37','#a8e6a8'];
  for(var i=0;i<15;i++){
    var el = document.createElement('div');
    el.className='particle';
    el.style.left = (Math.random()*100)+'vw';
    el.style.bottom = '-20px';
    el.style.width = (3+Math.random()*6)+'px';
    el.style.height = el.style.width;
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.borderRadius = '50%';
    el.style.animation = 'float-up '+(4+Math.random()*4)+'s linear forwards';
    el.style.animationDelay = (Math.random()*2)+'s';
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 9000);
  }
}

/* Countdown overlay */
function showCountdown(onComplete){
  var overlay = document.createElement('div');
  overlay.className = 'countdown-overlay';
  overlay.innerHTML = '<div class="countdown-num" id="cd-num">3</div><div class="countdown-label">Preparar…</div>';
  document.body.appendChild(overlay);

  var count = 3;
  var labels = ['Preparar…','Apontar…','Já!'];

  function tick(){
    sfxCountdown(count);
    var numEl = document.getElementById('cd-num');
    var labelEl = overlay.querySelector('.countdown-label');
    if(numEl) numEl.textContent = count;
    if(labelEl) labelEl.textContent = labels[3-count];

    if(numEl){
      numEl.style.animation = 'none';
      numEl.offsetHeight;
      numEl.style.animation = 'count-pop 0.5s cubic-bezier(0.2,1.4,0.4,1)';
    }

    count--;
    if(count >= 0){
      setTimeout(tick, 1000);
    } else {
      overlay.classList.add('hide');
      setTimeout(function(){
        overlay.remove();
        if(onComplete) onComplete();
      }, 300);
    }
  }

  setTimeout(tick, 300);
}

/* ============== NAV ============== */
function goLanding(){ role=null; show('screen-landing'); }

/* ============== HOST FLOW ============== */
async function goHostSetup(){
  initAudio();
  role='host';
  show('screen-host-setup');

  if(!initFirebase()){ enableDemoMode(); }

  code = roomCode();
  var meta = {status:'lobby', qIndex:-1, qStartAt:0, duration:QUESTION_MS, total:QUESTIONS.length, createdAt:Date.now()};
  localMeta = meta;

  var metaRef = dbRef(dbPath('broto', code, 'meta'));
  if(metaRef) await metaRef.set(meta);

  document.getElementById('host-code').textContent = code.replace(/(\d{3})(\d{3})/, '$1 $2');
  document.getElementById('qr-box').innerHTML = '';
  try{
    var joinUrl = location.origin + location.pathname + '?code=' + code;
    new QRCode(document.getElementById('qr-box'), {text: joinUrl, width:160, height:160, colorDark:"#0a1f12", colorLight:"#f2ead4", correctLevel:QRCode.CorrectLevel.M});
  }catch(e){}

  show('screen-host-lobby');

  var playersRef = dbRef(dbPath('broto', code, 'players'));
  if(playersRef) playersRef.on('value', function(snap){
    var val = snap.val() || {};
    hostRoster = val;
    if(document.getElementById('screen-host-lobby').classList.contains('active')){
      renderLobbyPlayers();
    }
  });

  var metaR = dbRef(dbPath('broto', code, 'meta'));
  if(metaR) metaR.on('value', function(snap){
    var m = snap.val();
    if(m) localMeta = m;
  });
}

function renderLobbyPlayers(){
  var grid = document.getElementById('host-players');
  var list = Object.values(hostRoster).sort(function(a,b){ return (a.joinedAt||0)-(b.joinedAt||0); });
  grid.innerHTML = list.map(function(p){
    var imgUrl = p.avatarUrl || p.avatar || '';
    return `<div class="sprout"><img class="av" src="${imgUrl}" alt="" onerror="this.onerror=null;this.src='';this.style.display='none';this.parentElement.insertAdjacentHTML('afterbegin','<div class=\'av\'>🌱</div>');"><div class="nm">${escapeHtml(p.name)}</div></div>`;
  }).join('');
  document.getElementById('host-count').textContent = list.length+' pessoa'+(list.length===1?'':'s')+' na sala';
  var btn = document.getElementById('btn-start-game');
  if(btn) btn.disabled = list.length === 0;
}

async function hostStartGame(){
  initAudio(); sfxStart();

  showCountdown(async function(){
    localMeta.qIndex = 0; localMeta.status='question'; localMeta.qStartAt = Date.now();
    var metaRef = dbRef(dbPath('broto', code, 'meta'));
    if(metaRef) await metaRef.set(localMeta);
    renderHostQuestion();
    show('screen-host-game');
    startHostTimerTick();
    listenForAnswers();
    spawnParticles();
    livePodiumVisible = true;
    document.getElementById('live-podium').style.display = 'flex';
    updateLivePodium();
  });
}

function listenForAnswers(){
  var ansRef = dbRef(dbPath('broto', code, 'answers', localMeta.qIndex));
  if(ansRef) ansRef.on('value', function(snap){
    var val = snap.val() || {};
    var count = Object.keys(val).length;
    var total = Object.keys(hostRoster).length;
    var el = document.getElementById('host-answered');
    if(el) el.textContent = count+' de '+total+' respostas';
  });
}

function renderHostQuestion(){
  var qd = QUESTIONS[localMeta.qIndex];
  document.getElementById('host-qcounter').textContent = 'Pergunta '+(localMeta.qIndex+1)+' de '+QUESTIONS.length;
  document.getElementById('host-answered').textContent = '0 respostas';
  document.getElementById('host-qtext').textContent = qd.q;
  document.getElementById('host-opts').innerHTML = qd.opts.map(function(o,i){
    return '<div class="opt o'+i+'" id="host-opt-'+i+'"><span class="mk">'+OPT_MARK[i]+'</span><span>'+o+'</span></div>';
  }).join('');
  document.getElementById('btn-reveal').style.display='inline-flex';
  document.getElementById('btn-next').style.display='none';
  document.getElementById('host-timerbar').style.width = '100%';
}

function startHostTimerTick(){
  clearInterval(tickTimer);
  tickTimer = setInterval(function(){
    if(!localMeta || localMeta.status!=='question') return;
    var remain = localMeta.duration - (Date.now()-localMeta.qStartAt);
    var pct = Math.max(0, Math.min(100, (remain/localMeta.duration)*100));
    var bar = document.getElementById('host-timerbar');
    if(bar) bar.style.width = pct+'%';
    if(remain<=3000 && remain>2500) sfxTick();
    if(remain<=0){ clearInterval(tickTimer); hostReveal(); }
  }, 150);
}

async function hostReveal(){
  if(localMeta.status!=='question') return;
  clearInterval(tickTimer);
  localMeta.status='reveal';
  var metaRef = dbRef(dbPath('broto', code, 'meta'));
  if(metaRef) await metaRef.set(localMeta);

  var qi = localMeta.qIndex, qd = QUESTIONS[qi];
  var ansRef = dbRef(dbPath('broto', code, 'answers', qi));
  var snap = ansRef ? await ansRef.get() : {val: function(){ return null; }};
  var answers = snap.val() || {};
  var counts=[0,0,0,0];
  for(var key in answers){
    var a = answers[key];
    if(a && a.choice>=0 && a.choice<4) counts[a.choice]++;
  }
  var total = Math.max(1, Object.keys(answers).length);

  qd.opts.forEach(function(o,i){
    var el = document.getElementById('host-opt-'+i);
    if(!el) return;
    if(i===qd.c) el.classList.add('correct'); else el.classList.add('dim');
    var pct = Math.round((counts[i]/total)*100);
    el.innerHTML += '<div class="bar"><i style="width:'+pct+'%"></i></div>';
  });

  // Update scores and live podium
  for(var key in answers){
    var a = answers[key];
    if(!a || !a.pid) continue;
    var isCorrect = a.choice===qd.c;
    var pts = isCorrect ? calcPoints(a.at - localMeta.qStartAt) : 0;
    var pRef = dbRef(dbPath('broto', code, 'players', a.pid));
    if(pRef){
      var pSnap = await pRef.get();
      var p = pSnap.val() || {};
      p.score = (p.score||0) + pts;
      await pRef.set(p);
    }
  }

  // Update live podium after scoring
  updateLivePodium();

  document.getElementById('btn-reveal').style.display='none';
  document.getElementById('btn-next').style.display='inline-flex';
  document.getElementById('btn-next').textContent = (qi+1<QUESTIONS.length) ? 'Próxima →' : 'Ver pódio 🏆';
}

async function hostNext(){
  if(localMeta.qIndex+1 < QUESTIONS.length){
    localMeta.qIndex += 1; localMeta.status='question'; localMeta.qStartAt=Date.now();
    var metaRef = dbRef(dbPath('broto', code, 'meta'));
    if(metaRef) await metaRef.set(localMeta);
    renderHostQuestion();
    startHostTimerTick();
    listenForAnswers();
    updateLivePodium();
  } else {
    localMeta.status='podium';
    var metaRef = dbRef(dbPath('broto', code, 'meta'));
    if(metaRef) await metaRef.set(localMeta);
    await renderHostPodium();
  }
}

/* ============== LIVE PODIUM ============== */
async function updateLivePodium(){
  if(!livePodiumVisible) return;
  var playersRef = dbRef(dbPath('broto', code, 'players'));
  var snap = playersRef ? await playersRef.get() : {val: function(){ return null; }};
  var items = Object.values(snap.val() || {}).filter(Boolean);
  items.sort(function(a,b){ return (b.score||0)-(a.score||0); });

  var container = document.getElementById('live-podium-content');
  if(!container) return;

  var maxScore = Math.max.apply(null, items.map(function(p){ return p.score||0; }).concat([1]));

  container.innerHTML = items.slice(0,5).map(function(p, idx){
    var isLeader = idx === 0;
    var pct = ((p.score||0) / maxScore) * 100;
    return `<div class="live-podium-row ${isLeader?'leader':''}">` +
      `<span class="lp-rank">#${idx+1}</span>` +
      `<img class="lp-av" src="${p.avatarUrl||p.avatar||''}" alt="" onerror="this.style.display='none'">` +
      `<span class="lp-name">${escapeHtml(p.name)}</span>` +
      `<span class="lp-score">${p.score||0} pts</span>` +
      `<div class="lp-bar" style="width:${pct}%"></div>` +
    `</div>`;
  }).join('');
}

/* ============== FINAL PODIUM ============== */
async function renderHostPodium(){
  clearInterval(tickTimer);
  livePodiumVisible = false;
  document.getElementById('live-podium').style.display = 'none';

  var playersRef = dbRef(dbPath('broto', code, 'players'));
  var snap = playersRef ? await playersRef.get() : {val: function(){ return null; }};
  var items = Object.values(snap.val() || {}).filter(Boolean);
  items.sort(function(a,b){ return (b.score||0)-(a.score||0); });

  show('screen-host-podium');
  startLeafFall();

  var stage = document.getElementById('host-podium');
  stage.innerHTML = '';

  var medals = ['🥇','🥈','🥉'];
  var flowers = ['🌻','🌼','🌸'];

  items.forEach(function(p, idx){
    var isTop3 = idx < 3;
    var rank = idx + 1;
    var medal = isTop3 ? medals[idx] : '';
    var flower = isTop3 ? flowers[idx] : '🌱';

    var step = document.createElement('div');
    step.className = 'podium-step' + (isTop3 && idx === 0 ? ' winner' : '');
    step.id = 'podium-step-' + idx;
    step.innerHTML = 
      `<div class="step-rank">#${rank}</div>` +
      `<img class="step-av" src="${p.avatarUrl || p.avatar || ''}" alt="" onerror="this.onerror=null;this.style.display='none';this.parentElement.querySelector('.step-rank').textContent='${flower}';">` +
      `<div class="step-info">` +
        `<div class="step-name">${escapeHtml(p.name)}</div>` +
        `<div class="step-score">${p.score||0} pontos</div>` +
      `</div>` +
      `<div class="step-medal">${isTop3 ? medal+flower : ''}</div>` +
      `<div class="step-bar-bg"></div>` +
      `<div class="step-bar-fill"></div>`;
    stage.appendChild(step);
  });

  var rl = document.getElementById('host-ranklist');
  rl.innerHTML = items.map(function(p,i){
    return `<div class="rank-row" style="animation-delay:${i*0.08}s"><span class="rn">${i+1}</span><img src="${p.avatarUrl||p.avatar||''}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'"><span>${escapeHtml(p.name)}</span><span class="rs">${p.score||0} pts</span></div>`;
  }).join('');

  podiumItems = items;
  podiumRevealIndex = items.length - 1;
  revealNextPodiumStep();
}

function revealNextPodiumStep(){
  if(podiumRevealIndex < 0){
    setTimeout(function(){
      var winnerStep = document.getElementById('podium-step-0');
      if(winnerStep){
        winnerStep.classList.add('winner-glow');
        sfxWinner();
        spawnConfetti();
        spawnConfetti();
      }
    }, 600);
    return;
  }

  var step = document.getElementById('podium-step-' + podiumRevealIndex);
  if(step){
    step.classList.add('revealed');
    sfxReveal();

    setTimeout(function(){
      var bar = step.querySelector('.step-bar-fill');
      if(bar){
        var maxScore = Math.max.apply(null, podiumItems.map(function(p){ return p.score||0; }).concat([1]));
        var pct = ((podiumItems[podiumRevealIndex].score||0) / maxScore) * 100;
        bar.style.width = pct + '%';
      }
    }, 100);
  }

  podiumRevealIndex--;

  var delay = podiumRevealIndex >= 2 ? 800 : 1200;
  setTimeout(revealNextPodiumStep, delay);
}

/* ============== PLAYER FLOW ============== */
function goJoinCode(){
  role='player';
  show('screen-join-code');
  document.getElementById('join-code-error').textContent='';
}
async function submitCode(){
  initAudio();
  var val = document.getElementById('join-code-input').value.replace(/\D/g,'');
  if(val.length!==6){ document.getElementById('join-code-error').textContent='Digite os 6 números do código.'; return; }

  if(!initFirebase()){ enableDemoMode(); }

  var metaRef = dbRef(dbPath('broto', val, 'meta'));
  var snap = metaRef ? await metaRef.get() : {val: function(){ return null; }, exists: function(){ return false; }};
  if(!snap.exists()){ document.getElementById('join-code-error').textContent='Não achamos essa sala. Confira o código com quem está apresentando.'; return; }

  code = val; localMeta = snap.val();
  buildAvatarGrid();
  show('screen-join-profile');
}
function buildAvatarGrid(){
  var g = document.getElementById('avatar-grid');
  g.innerHTML = AVATARS.map(function(a,i){
    return '<div class="avatar-opt'+(i===0?' sel':'')+'" data-idx="'+i+'" onclick="pickAvatar(this)"><img src="'+a.url+'" alt="'+a.name+'" loading="lazy"><div class="av-name">'+a.name+'</div></div>';
  }).join('');
  myAvatar = AVATARS[0];
}
function pickAvatar(el){
  document.querySelectorAll('.avatar-opt').forEach(function(e){ e.classList.remove('sel'); });
  el.classList.add('sel');
  myAvatar = AVATARS[parseInt(el.dataset.idx)];
}
async function playerJoinRoom(){
  var nameInput = document.getElementById('join-name-input');
  var name = nameInput.value.trim();
  if(!name){ document.getElementById('join-profile-error').textContent='Escreve um nome ou apelido pra gente te chamar :)'; return; }
  if(containsBadWord(name)){ 
    document.getElementById('join-profile-error').textContent='Esse nome não pode ser usado. Escolha outro.';
    nameInput.classList.add('shake');
    setTimeout(function(){ nameInput.classList.remove('shake'); }, 400);
    return; 
  }
  myName = name.slice(0,18);
  myPid = uid();
  var p = {pid:myPid, name:myName, avatar:myAvatar.name, avatarUrl:myAvatar.url, score:0, joinedAt:Date.now()};

  var pRef = dbRef(dbPath('broto', code, 'players', myPid));
  if(pRef) await pRef.set(p);

  document.getElementById('player-wait-av-img').src = myAvatar.url;
  document.getElementById('player-wait-av-img').alt = myAvatar.name;
  document.getElementById('player-wait-name').textContent = myName;
  document.getElementById('player-wait-code').textContent = 'sala ' + code;
  show('screen-player-wait');
  lastSeenStatus = 'lobby'; lastSeenQIndex = -1;

  var metaRef = dbRef(dbPath('broto', code, 'meta'));
  if(metaRef) metaRef.on('value', function(snap){
    var meta = snap.val();
    if(meta) handlePlayerMetaChange(meta);
  });
}

function handlePlayerMetaChange(meta){
  localMeta = meta;
  if(meta.status==='question' && (lastSeenStatus!=='question' || meta.qIndex!==lastSeenQIndex)){
    lastSeenStatus='question'; lastSeenQIndex=meta.qIndex; hasAnsweredThisQ=false;
    renderPlayerQuestion();
    show('screen-player-question');
  } else if(meta.status==='reveal' && lastSeenStatus!=='reveal'){
    lastSeenStatus='reveal';
    renderPlayerReveal().then(function(){ show('screen-player-reveal'); });
  } else if(meta.status==='podium' && lastSeenStatus!=='podium'){
    lastSeenStatus='podium';
    renderPlayerPodium().then(function(){ show('screen-player-podium'); });
  } else if(meta.status==='question' && document.getElementById('screen-player-question').classList.contains('active')){
    updatePlayerTimer();
  }
}

function renderPlayerQuestion(){
  initAudio();
  var qd = QUESTIONS[localMeta.qIndex];
  document.getElementById('player-qcounter').textContent = 'Pergunta '+(localMeta.qIndex+1)+' de '+QUESTIONS.length;
  document.getElementById('player-qtext').textContent = qd.q;
  document.getElementById('player-answer-status').textContent='';
  document.getElementById('player-opts').innerHTML = qd.opts.map(function(o,i){
    return '<div class="opt o'+i+' clickable" id="player-opt-'+i+'" onclick="playerAnswer('+i+')"><span class="mk">'+OPT_MARK[i]+'</span><span>'+o+'</span></div>';
  }).join('');
  updatePlayerTimer();
}
function updatePlayerTimer(){
  if(!localMeta || localMeta.status!=='question') return;
  var remain = Math.max(0, localMeta.duration - (Date.now()-localMeta.qStartAt));
  var pct = Math.max(0,Math.min(100,(remain/localMeta.duration)*100));
  var bar = document.getElementById('player-timerbar');
  var lab = document.getElementById('player-timer');
  if(bar) bar.style.width = pct+'%';
  if(lab) lab.textContent = Math.ceil(remain/1000)+'s';
}
setInterval(function(){
  if(role==='player' && document.getElementById('screen-player-question').classList.contains('active')) updatePlayerTimer();
}, 250);

async function playerAnswer(idx){
  if(hasAnsweredThisQ) return;
  hasAnsweredThisQ = true;
  document.querySelectorAll('#player-opts .opt').forEach(function(el,i){
    el.classList.remove('clickable');
    if(i!==idx) el.classList.add('dim');
  });
  document.getElementById('player-answer-status').textContent = 'Resposta enviada — aguarde a revelação!';
  var ansRef = dbRef(dbPath('broto', code, 'answers', localMeta.qIndex, myPid));
  if(ansRef) await ansRef.set({pid:myPid, choice:idx, at:Date.now()});
}
async function renderPlayerReveal(){
  var qd = QUESTIONS[localMeta.qIndex];
  var ansRef = dbRef(dbPath('broto', code, 'answers', localMeta.qIndex, myPid));
  var myAns = ansRef ? (await ansRef.get()).val() : null;
  var pRef = dbRef(dbPath('broto', code, 'players', myPid));
  var p = pRef ? (await pRef.get()).val() : null;
  var isCorrect = myAns && myAns.choice===qd.c;
  var banner = document.getElementById('player-reveal-banner');
  banner.className = 'reveal-banner '+(isCorrect?'ok':'no');
  if(!myAns) banner.textContent = 'Tempo esgotado ⏳';
  else if(isCorrect){ banner.textContent = 'Certinho! 🌿'; sfxCorrect(); spawnConfetti(); }
  else { banner.textContent = 'Quase — não foi dessa vez'; sfxWrong(); }
  document.getElementById('player-reveal-points').textContent = isCorrect ? ('+'+calcPoints(myAns.at-localMeta.qStartAt)+' pontos') : '';
  document.getElementById('player-reveal-total').textContent = 'Pontuação total: '+(p?p.score||0:0);
}
async function renderPlayerPodium(){
  var playersRef = dbRef(dbPath('broto', code, 'players'));
  var snap = playersRef ? await playersRef.get() : {val: function(){ return null; }};
  var items = Object.values(snap.val() || {}).filter(Boolean);
  items.sort(function(a,b){ return (b.score||0)-(a.score||0); });
  var myRank = items.findIndex(function(p){ return p.pid===myPid; })+1;
  var me = items.find(function(p){ return p.pid===myPid; });

  var emojis = ['🥇','🥈','🥉'];
  document.getElementById('player-final-emoji').textContent = myRank<=3 ? emojis[myRank-1] : '🌱';
  document.getElementById('player-final-rank').textContent = myRank+'º lugar de '+items.length;
  document.getElementById('player-final-score').textContent = (me?me.score||0:0)+' pontos';

  document.getElementById('player-final-list').innerHTML = items.map(function(p,i){
    var isMe = p.pid===myPid;
    return `<div class="rank-row" style="animation-delay:${i*0.08}s${isMe?';border-color:var(--bloom);box-shadow:0 0 0 1px var(--bloom)':''}"><span class="rn">${i+1}</span><img src="${p.avatarUrl||p.avatar||''}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'"><span>${escapeHtml(p.name)}</span><span class="rs">${p.score||0} pts</span></div>`;
  }).join('');

  show('screen-player-podium');
  startLeafFall();
  if(myRank<=3){ 
    sfxWinner(); 
    spawnConfetti(); 
    spawnConfetti();
  }
}

/* ============== BOOT ============== */
(function boot(){
  var params = new URLSearchParams(location.search);
  var preCode = params.get('code');
  if(preCode && /^\d{6}$/.test(preCode)){
    role='player';
    if(!initFirebase()) enableDemoMode();
    (async function(){
      var metaRef = dbRef(dbPath('broto', preCode, 'meta'));
      var snap = metaRef ? await metaRef.get() : {val: function(){ return null; }, exists: function(){ return false; }};
      if(snap.exists()){
        code = preCode; localMeta = snap.val();
        buildAvatarGrid();
        show('screen-join-profile');
      } else {
        goLanding();
      }
    })();
  }
})();