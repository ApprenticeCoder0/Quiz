/* ============================================================
   BROTO v6.3 — Banco de Perguntas
   Baseado exclusivamente no arquivo: Ética Ambiental e Ecofeminismo
   Ordem das perguntas e opções definida pelo host via Firebase
   ============================================================ */

const QUESTION_MS = 20000;
const OPT_MARK = ["A", "B", "C", "D"];

const QUESTIONS_RAW = [
  {
    q: "Uma fábrica joga lixo tóxico numa área sem moradores. Ainda que ninguém seja diretamente prejudicado, várias pessoas consideram isso errado. Isso mostra que, para essas pessoas, a natureza:",
    opts: [
      "Só importa quando afeta diretamente o bolso de alguém.",
      "Pode merecer cuidado mesmo sem gerar prejuízo direto às pessoas.",
      "Não tem nenhuma importância se não há testemunhas.",
      "Só deve ser protegida em áreas turísticas."
    ],
    c: 1
  },
  {
    q: "Historicamente, tanto mulheres quanto a natureza foram tratadas, em muitos contextos, como algo a ser controlado e explorado por quem detinha o poder. Reconhecer essa semelhança entre os dois casos ajuda a entender que:",
    opts: [
      "Esses dois tipos de exploração não têm nenhuma relação entre si.",
      "As duas formas de opressão podem vir de uma mesma lógica de dominação.",
      "Só as mulheres podem se preocupar com questões ambientais.",
      "A natureza deve ser cuidada exclusivamente por homens."
    ],
    c: 1
  },
  {
    q: "Uma empresa muda a cor da embalagem para verde e escreve 'sustentável' nela, mas continua poluindo exatamente como antes. O consumidor que acredita que essa empresa mudou de verdade está sendo:",
    opts: [
      "Bem informado sobre as práticas reais da empresa.",
      "Enganado por uma imagem que não corresponde à realidade.",
      "Beneficiado financeiramente pela empresa.",
      "Impedido de comprar o produto."
    ],
    c: 1
  },
  {
    q: "Qual das opções abaixo é um exemplo de pensar no futuro ao usar os recursos do presente?",
    opts: [
      "Usar toda a água de um rio hoje, sem se importar se vai faltar para quem vier depois.",
      "Usar os recursos de um jeito que ainda sobre o suficiente para as próximas gerações.",
      "Ignorar completamente a existência de gerações futuras.",
      "Aumentar o consumo sem nenhum planejamento."
    ],
    c: 1
  },
  {
    q: "Numa fábrica, o material que sobra da produção de um item é reaproveitado para fazer outro produto, em vez de virar lixo. Isso é um exemplo de um sistema que:",
    opts: [
      "Desperdiça mais recursos do que o normal.",
      "Reduz o desperdício, reaproveitando materiais dentro do próprio processo produtivo.",
      "Só funciona em fábricas de reciclagem.",
      "Aumenta a quantidade de lixo produzido."
    ],
    c: 1
  },
  {
    q: "Ainda não há certeza absoluta sobre todos os riscos de um novo produto químico, mas já existem sinais de que ele pode causar dano grave à saúde. O que seria mais prudente fazer?",
    opts: [
      "Esperar a certeza 100% antes de agir, mesmo que isso demore anos.",
      "Tomar alguma medida de proteção mesmo sem certeza absoluta, já que o risco é grave.",
      "Ignorar os sinais até que haja mortes comprovadas.",
      "Deixar a decisão inteiramente a cargo de quem fabrica o produto."
    ],
    c: 1
  },
  {
    q: "Trocar usinas movidas a carvão e petróleo por usinas solares e eólicas é considerado positivo principalmente porque:",
    opts: [
      "Reduz a emissão de gases poluentes e a dependência de combustíveis que um dia vão se esgotar.",
      "Aumenta a poluição do ar nas cidades.",
      "Torna a energia elétrica permanentemente mais cara.",
      "Elimina a necessidade de qualquer fonte de energia."
    ],
    c: 0
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
