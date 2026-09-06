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
    q: "Uma pessoa diz: 'só vale a pena cuidar da floresta porque ela nos dá madeira e ar limpo; se não desse nada útil, não precisaríamos protegê-la'. Essa forma de pensar coloca no centro de tudo:",
    opts: [
      "Os interesses e necessidades dos seres humanos.",
      "Os interesses das próprias árvores.",
      "Os interesses dos animais silvestres.",
      "Nenhum interesse específico."
    ],
    c: 0
  },
  {
    q: "Alguém defende que um rio tem valor mesmo que ninguém nunca vá usá-lo pra nada, só pelo fato de existir. Essa forma de pensar considera que:",
    opts: [
      "Só o que é útil aos humanos merece ser preservado.",
      "A natureza pode ter valor próprio, independente da utilidade que tem para as pessoas.",
      "Rios sem uso aparente deveriam ser aterrados.",
      "Só espécies raras merecem proteção."
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
    q: "Uma pessoa não separa 'cuidar do planeta' do resto da vida dela — ela pensa nos seus hábitos de consumo, nas suas relações e no cuidado com o ambiente como partes de uma coisa só. Isso mostra uma forma de pensar que:",
    opts: [
      "Trata a ecologia como um assunto isolado, sem relação com o cotidiano.",
      "Une o cuidado ambiental às escolhas e valores do dia a dia.",
      "Só interessa a quem estuda biologia.",
      "Não muda em nada o comportamento da pessoa."
    ],
    c: 1
  },
  {
    q: "Numa cidade, as indústrias mais poluentes são sempre construídas perto dos bairros mais pobres, nunca perto dos bairros ricos — mesmo havendo terrenos disponíveis nos dois lugares. Isso mostra que:",
    opts: [
      "Os impactos ambientais negativos estão sendo distribuídos de forma desigual entre a população.",
      "Os bairros pobres pediram para receber essas indústrias.",
      "Isso é apenas uma coincidência sem nenhum padrão.",
      "Bairros ricos não geram nenhum tipo de poluição."
    ],
    c: 0
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
    q: "Um fabricante projeta de propósito um produto para quebrar rápido, obrigando o cliente a comprar outro em pouco tempo. Isso beneficia principalmente:",
    opts: [
      "O meio ambiente, pois gera menos lixo.",
      "O próprio fabricante, que vende mais, enquanto prejudica o consumidor e o planeta.",
      "O consumidor, que economiza dinheiro.",
      "Ninguém, pois isso não tem nenhum efeito prático."
    ],
    c: 1
  },
  {
    q: "Se duas pessoas têm a mesma renda, mas uma compra só o necessário e evita desperdício, enquanto a outra troca de roupas e aparelhos toda semana sem necessidade, qual delas provavelmente causa menos impacto ambiental?",
    opts: [
      "A que compra só o necessário e evita desperdício.",
      "A que troca de roupas e aparelhos toda semana.",
      "As duas causam exatamente o mesmo impacto, pois ganham o mesmo salário.",
      "É impossível saber isso sem outras informações."
    ],
    c: 0
  },
  {
    q: "Duas pessoas querem ajudar o planeta. Uma só troca a lâmpada de casa por uma mais econômica. A outra repensa todo o seu jeito de consumir e se relacionar com a natureza. Qual atitude representa uma mudança mais profunda?",
    opts: [
      "Trocar só a lâmpada.",
      "Repensar o próprio jeito de consumir e se relacionar com a natureza.",
      "As duas mudanças são igualmente superficiais.",
      "Nenhuma das duas faz diferença nenhuma."
    ],
    c: 1
  },
  {
    q: "Estudos mostram que aterros sanitários e indústrias poluentes costumam ser instalados, com muito mais frequência, perto de comunidades pobres e de minorias étnicas do que perto de bairros ricos. Esse padrão mostra que:",
    opts: [
      "É pura coincidência de localização.",
      "Certos grupos sofrem, de forma desproporcional, mais os impactos ambientais negativos.",
      "Comunidades pobres preferem morar perto de indústrias.",
      "Esse padrão não existe na prática."
    ],
    c: 1
  },
  {
    q: "Um inseto raro não tem nenhuma utilidade econômica conhecida para os humanos. Ainda assim, algumas pessoas defendem que ele deve ser protegido. Esse argumento se baseia na ideia de que:",
    opts: [
      "Só vale a pena proteger o que dá lucro.",
      "Um ser pode merecer respeito e proteção só por existir, independente de servir para algo.",
      "Espécies sem utilidade deveriam ser extintas.",
      "Só animais bonitos merecem ser protegidos."
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
    q: "Vários pescadores usam o mesmo lago, sem nenhuma regra combinada entre eles. Cada um pesca o máximo que consegue pra si, e em poucos anos não sobra peixe nenhum. O que causou esse esgotamento?",
    opts: [
      "A falta de acordo entre eles sobre um limite de uso do recurso compartilhado.",
      "O excesso de peixes que havia no lago.",
      "A pesca ter sido proibida por lei.",
      "O lago ter secado naturalmente."
    ],
    c: 0
  },
  {
    q: "Comunidades que vivem há gerações numa floresta, retirando dela só o necessário e sem esgotar seus recursos, são frequentemente citadas como exemplo de:",
    opts: [
      "Atraso que precisa ser superado com tecnologia.",
      "Uma forma de conviver com a natureza sem destruí-la.",
      "Desperdício de recursos naturais.",
      "Isolamento sem nenhum valor prático."
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
    q: "Em vez de tratar a natureza como algo a ser controlado e dominado, uma pessoa a trata com empatia e responsabilidade, como algo a ser cuidado. Essa postura está mais próxima de:",
    opts: [
      "Uma lógica de dominação.",
      "Uma lógica de cuidado e responsabilidade mútua.",
      "Uma lógica de indiferença total.",
      "Uma lógica puramente comercial."
    ],
    c: 1
  },
  {
    q: "Uma escola ensina os alunos a separar o lixo em casa, mas nunca discute por que tanto lixo é produzido, nem quem lucra com isso. O que estaria faltando para tornar essa educação mais completa?",
    opts: [
      "Nada, ensinar a separar o lixo já é suficiente.",
      "Discutir também as causas mais profundas do problema e incentivar a participação ativa dos alunos.",
      "Proibir os alunos de falarem sobre o assunto.",
      "Focar só em decorar os símbolos de reciclagem."
    ],
    c: 1
  },
  {
    q: "Comparando alguém que anda de avião com frequência, come muita carne e usa carro todos os dias com alguém que anda de bicicleta e usa transporte público, quem provavelmente causa mais emissão de gases poluentes?",
    opts: [
      "Quem anda de avião com frequência, come muita carne e usa carro todos os dias.",
      "Quem anda de bicicleta e usa transporte público.",
      "As duas pessoas causam a mesma emissão, pois moram na mesma cidade.",
      "Isso não tem relação nenhuma com hábitos pessoais."
    ],
    c: 0
  },
  {
    q: "Um país passa a decidir, com base na sua própria cultura e necessidades, o que plantar e como se alimentar, em vez de depender totalmente de importações controladas por grandes empresas estrangeiras. Isso representa:",
    opts: [
      "Uma perda de autonomia do país.",
      "Uma forma de o país ter mais controle sobre sua própria alimentação.",
      "Um retrocesso econômico automático.",
      "Uma prática proibida internacionalmente."
    ],
    c: 1
  },
  {
    q: "Em vez de construir um muro de concreto para conter a erosão da praia, uma cidade decide restaurar o manguezal natural da região, que já cumpria essa função sozinho antes de ser destruído. Essa escolha é vantajosa porque:",
    opts: [
      "Usa uma estrutura natural que já resolvia o problema, em vez de uma solução artificial cara.",
      "Manguezais não têm nenhuma função ecológica.",
      "Concreto sempre é mais barato e eficiente que soluções naturais.",
      "Restaurar a natureza nunca resolve problemas práticos."
    ],
    c: 0
  },
  {
    q: "Uma pessoa acredita que animais e plantas merecem respeito moral só pelo fato de estarem vivos, não apenas os seres humanos. Essa visão amplia o círculo de quem 'importa moralmente' para além de:",
    opts: [
      "Apenas os seres humanos.",
      "Apenas os animais domésticos.",
      "Apenas as plantas.",
      "Apenas os seres microscópicos."
    ],
    c: 0
  },
  {
    q: "Qual das atitudes abaixo mostra alguém unindo o cuidado com o ambiente às escolhas do dia a dia, numa cidade grande?",
    opts: [
      "Repensar o consumo, evitar desperdício e cultivar solidariedade com a vizinhança e o ambiente.",
      "Trocar de carro toda vez que sai um modelo novo, mesmo sem necessidade.",
      "Comprar sem nunca verificar de onde vêm os produtos.",
      "Jogar lixo eletrônico no lixo comum por conveniência."
    ],
    c: 0
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