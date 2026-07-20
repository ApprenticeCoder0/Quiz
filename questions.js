const QUESTION_MS = 20000;
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
  {
    q: "Qual era a intenção original de Van Rensselaer Potter ao criar o termo 'bioética'?",
    opts: [
      "Criar leis de proteção ambiental",
      "Unir conhecimento biológico aos valores éticos para garantir a sobrevivência humana",
      "Defender os direitos dos animais",
      "Criticar o desenvolvimento tecnológico"
    ],
    c: 1
  },
  {
    q: "O que é a responsabilidade intergeracional na Ética Ambiental?",
    opts: [
      "A obrigação de cuidar dos idosos",
      "A obrigação de não comprometer a vida das gerações futuras com nossas escolhas atuais",
      "A divisão igual de recursos entre todas as gerações vivas",
      "A transmissão de conhecimento ecológico para as crianças"
    ],
    c: 1
  },
  {
    q: "O que é o desenvolvimento sustentável?",
    opts: [
      "Crescimento econômico sem limites",
      "Atender às necessidades atuais sem comprometer as futuras gerações",
      "Proibição total de atividades industriais",
      "Uso exclusivo de energia renovável"
    ],
    c: 1
  },
  {
    q: "Quem criou o termo 'Ecofeminismo' em 1974?",
    opts: [
      "Vandana Shiva",
      "Françoise d'Eaubonne",
      "Rachel Carson",
      "Arne Naess"
    ],
    c: 1
  },
  {
    q: "Qual é a ideia central do Ecofeminismo?",
    opts: [
      "As mulheres são naturalmente mais próximas da natureza",
      "A mesma lógica que domina a natureza justifica a desigualdade de gênero",
      "A natureza deve ser protegida por mulheres",
      "O feminismo e o ambientalismo são movimentos separados"
    ],
    c: 1
  },
  {
    q: "O que o Ecofeminismo critica no sistema patriarcal?",
    opts: [
      "A falta de participação feminina na política",
      "A concentração de poder nas mãos dos homens e a valorização da dominação e exploração",
      "A ausência de leis de proteção ambiental",
      "A exclusão das mulheres do mercado de trabalho"
    ],
    c: 1
  },
  {
    q: "Qual crítica o Ecofeminismo faz ao modelo capitalista industrial?",
    opts: [
      "Ele não produz empregos suficientes",
      "Busca crescimento infinito em um planeta de recursos finitos",
      "É muito lento para resolver problemas",
      "Não investe em tecnologia verde"
    ],
    c: 1
  },
  {
    q: "Quem é Vandana Shiva e qual sua principal contribuição ao Ecofeminismo?",
    opts: [
      "Filósofa francesa que criou o termo ecofeminismo",
      "Cientista e ativista indiana que defende biodiversidade e critica monocultura e patentes de sementes",
      "Autora de 'Primavera Silenciosa'",
      "Criadora do conceito de ecosofia"
    ],
    c: 1
  },
  {
    q: "O que a agroecologia representa segundo o texto?",
    opts: [
      "Uso intensivo de pesticidas para aumentar a produção",
      "Agricultura sustentável que respeita o solo e a saúde",
      "Monocultura em larga escala",
      "Patente de sementes por multinacionais"
    ],
    c: 1
  },
  {
    q: "Qual é uma das principais críticas feitas ao Ecofeminismo?",
    opts: [
      "Ser muito radical em suas propostas",
      "O risco de essencialismo — supor que mulheres são 'naturalmente' mais próximas da natureza",
      "Não defender a proteção ambiental",
      "Ser exclusivo de países ricos"
    ],
    c: 1
  },
  {
    q: "Segundo o texto, o que o Ecofeminismo demonstra sobre o futuro justo?",
    opts: [
      "Que a tecnologia resolverá todos os problemas",
      "Que cuidar de si, do outro e do planeta é uma única e mesma missão",
      "Que apenas mulheres podem salvar o planeta",
      "Que o capitalismo verde é a solução"
    ],
    c: 1
  }
];

/* ============================================================
   FUNÇÕES DE ACESSO DETERMINÍSTICO
   A ordem das perguntas e opções é definida pelo host no meta.
   Todos os clientes usam a MESMA ordem via Firebase.
   ============================================================ */

/**
 * Gera uma ordem aleatória de índices [0, 1, ..., n-1]
 * Chamada UMA ÚNICA VEZ pelo host ao criar a sala.
 */
function generateQuestionOrder(count) {
  var arr = [];
  for (var i = 0; i < count; i++) arr.push(i);
  // Fisher-Yates shuffle
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/**
 * Gera embaralhamento das opções para cada pergunta.
 * Retorna array de arrays: optionOrders[qIndex] = [shuffled opt indices]
 */
function generateOptionOrders(questionOrder) {
  var orders = [];
  for (var i = 0; i < questionOrder.length; i++) {
    var rawIdx = questionOrder[i];
    var rawQ = QUESTIONS_RAW[rawIdx];
    var optIndices = [];
    for (var j = 0; j < rawQ.opts.length; j++) optIndices.push(j);
    // Fisher-Yates shuffle
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

/**
 * Retorna a pergunta na posição qIndex, de acordo com a ordem definida no meta.
 * Todos os clientes (host + jogadores) chamam esta função com o MESMO meta.
 */
function getQuestion(qIndex, meta) {
  if (!meta || !meta.questionOrder || !meta.optionOrders) {
    // Fallback: retorna pergunta original sem embaralhamento (não deve acontecer)
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

/**
 * Retorna o número total de perguntas.
 */
function getTotalQuestions() {
  return QUESTIONS_RAW.length;
}
