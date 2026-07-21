/* ============================================================
   BROTO v6.3 — Banco de Perguntas
   Baseado exclusivamente no arquivo: Ética Ambiental e Ecofeminismo
   Ordem das perguntas e opções definida pelo host via Firebase
   ============================================================ */

const QUESTION_MS = 15000;
const OPT_MARK = ["A", "B", "C", "D"];

const QUESTIONS_RAW = [
  {
    q: "Qual é a questão central da Ética Ambiental?",
    opts: [
      "Se a natureza deve ser protegida por leis internacionais",
      "Se a natureza possui valor apenas por sua utilidade ou também valor intrínseco",
      "Se os animais devem ter os mesmos direitos que os humanos",
      "Se a tecnologia pode resolver todos os problemas ambientais"
    ],
    c: 1
  },
  {
    q: "Quem escreveu 'Primavera Silenciosa', obra que alertou sobre pesticidas e poluição?",
    opts: [
      "Arne Naess",
      "Rachel Carson",
      "Françoise d'Eaubonne",
      "Vandana Shiva"
    ],
    c: 1
  },
  {
    q: "O que caracteriza a visão antropocêntrica em relação à natureza?",
    opts: [
      "A natureza tem valor próprio independente dos humanos",
      "O ser humano é o centro de tudo e a natureza existe para atender suas necessidades",
      "Todos os seres vivos têm direitos iguais",
      "A natureza deve ser preservada sem qualquer intervenção humana"
    ],
    c: 1
  },
  {
    q: "Qual é a diferença entre ecofilosofia e ecosofia?",
    opts: [
      "A ecofilosofia é prática e a ecosofia é teórica",
      "A ecofilosofia é teórica e a ecosofia une teoria e prática cotidiana",
      "Não há diferença, são sinônimos",
      "A ecosofia estuda apenas animais e a ecofilosofia estuda plantas"
    ],
    c: 1
  },
  {
    q: "Quem criou o termo 'ecosofia' em 1973?",
    opts: [
      "Félix Guattari",
      "Arne Naess",
      "Van Rensselaer Potter",
      "Françoise d'Eaubonne"
    ],
    c: 1
  },
  {
    q: "O que significa 'ecosofia' segundo Arne Naess?",
    opts: [
      "Estudo das relações entre ética e natureza",
      "'Sabedoria da casa comum' — filosofia prática que une ética, ecologia e modo de vida",
      "Teoria da evolução das espécies",
      "Economia baseada em recursos naturais"
    ],
    c: 1
  },
  {
    q: "O que é o ecocentrismo defendido por Arne Naess?",
    opts: [
      "A natureza deve ser explorada para o benefício humano",
      "A natureza tem valor próprio e os humanos são apenas uma parte do todo",
      "A tecnologia é a solução para todos os problemas ambientais",
      "Apenas ecossistemas inteiros têm valor, não seres individuais"
    ],
    c: 1
  },
  {
    q: "Segundo Félix Guattari, a crise ambiental é também uma crise:",
    opts: [
      "Econômica e política",
      "Social e mental",
      "Religiosa e espiritual",
      "Científica e tecnológica"
    ],
    c: 1
  },
  {
    q: "Quem cunhou o termo 'bioética' em 1970?",
    opts: [
      "Arne Naess",
      "Van Rensselaer Potter",
      "Rachel Carson",
      "Félix Guattari"
    ],
    c: 1
  },
];
/* ============================================================
   FUNÇÕES DE ACESSO DETERMINÍSTICO
   A ordem das perguntas e opções é definida pelo host no meta.
   Todos os clientes usam a MESMA ordem via Firebase.
   ============================================================ */

function generateQuestionOrder(count) {
  var arr = [];
  for (var i = 0; i < count; i++) arr.push(i);
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function generateOptionOrders(questionOrder) {
  var orders = [];
  for (var i = 0; i < questionOrder.length; i++) {
    var rawIdx = questionOrder[i];
    var rawQ = QUESTIONS_RAW[rawIdx];
    var optIndices = [];
    for (var j = 0; j < rawQ.opts.length; j++) optIndices.push(j);
    for (var j = optIndices.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var tmp = optIndices[j];
      optIndices[j] = optIndices[k];
      optIndices[k] = tmp;
    }
    orders.push(optIndices);
  }
  return orders;
}

function getQuestion(qIndex, meta) {
  if (!meta || !meta.questionOrder || !meta.optionOrders) {
    return QUESTIONS_RAW[qIndex] || QUESTIONS_RAW[0];
  }
  var rawIdx = meta.questionOrder[qIndex];
  if (rawIdx === undefined) rawIdx = qIndex;
  var rawQ = QUESTIONS_RAW[rawIdx];
  if (!rawQ) return QUESTIONS_RAW[0];

  var optShuffle = meta.optionOrders[qIndex];
  if (!optShuffle) {
    return { q: rawQ.q, opts: rawQ.opts.slice(), c: rawQ.c };
  }

  var newOpts = [];
  for (var i = 0; i < optShuffle.length; i++) {
    newOpts.push(rawQ.opts[optShuffle[i]]);
  }
  var newCorrect = optShuffle.indexOf(rawQ.c);
  if (newCorrect === -1) newCorrect = rawQ.c;

  return {
    q: rawQ.q,
    opts: newOpts,
    c: newCorrect
  };
}

function getTotalQuestions() {
  return QUESTIONS_RAW.length;
}