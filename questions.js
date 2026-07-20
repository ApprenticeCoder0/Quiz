/* ============================================================
   BROTO v5.2 — Banco de Perguntas
   Respostas e perguntas rotacionadas de forma definitiva em memória
   ============================================================ */

const QUESTION_MS = 20000;
const OPT_MARK = ["A", "B", "C", "D"];

const QUESTIONS_RAW = [
  {
    q: "Qual conceito ecofeminista defende que a opressão das mulheres e a degradação ambiental compartilham raízes sistêmicas?",
    opts: ["Ecologia profunda", "Ecofeminismo", "Ambientalismo liberal", "Desenvolvimento sustentável"],
    c: 1
  },
  {
    q: "Quem é considerada uma das pioneiras do ecofeminismo com a obra 'Le Féminisme ou la Mort'?",
    opts: ["Vandana Shiva", "Françoise d'Eaubonne", "Rachel Carson", "Donna Haraway"],
    c: 1
  },
  {
    q: "Na ética ambiental, o que significa 'antropocentrismo fraco'?",
    opts: ["A natureza tem valor intrínseco absoluto", "Os humanos têm valor superior, mas devem respeitar a natureza", "A natureza é apenas recurso para exploração", "A ética não se aplica à natureza"],
    c: 1
  },
  {
    q: "Qual é a principal crítica do ecofeminismo ao desenvolvimento tecnológico desenfreado?",
    opts: ["É economicamente inviável", "Reforça a dominação sobre mulheres e natureza", "Não produz empregos suficientes", "É muito lento para resolver problemas"],
    c: 1
  },
  {
    q: "O conceito de 'justiça ambiental' surgiu principalmente em qual contexto histórico?",
    opts: ["Movimento pelos direitos dos animais", "Movimento dos direitos civis nos EUA", "Revolução Industrial na Europa", "Descolonização na África"],
    c: 1
  },
  {
    q: "Qual filósofa desenvolveu o conceito de 'companhia de espécies' e a crítica à natureza como recurso?",
    opts: ["Martha Nussbaum", "Val Plumwood", "Judith Butler", "Simone de Beauvoir"],
    c: 1
  },
  {
    q: "Na perspectiva ética de Aldo Leopold, qual é o princípio central?",
    opts: ["Utilitarismo ambiental", "Ética da terra", "Deontologia ecológica", "Virtude ambiental"],
    c: 1
  },
  {
    q: "O que caracteriza o 'ambientalismo de mercado'?",
    opts: ["Proibição total de atividades poluidoras", "Uso de mecanismos econômicos para internalizar custos ambientais", "Controle estatal absoluto dos recursos", "Rejeição de qualquer intervenção humana"],
    c: 1
  },
  {
    q: "Qual é a relação entre 'extrativismo' e violência de gênero segundo análises ecofeministas?",
    opts: ["Não há relação comprovada", "Ambos são formas de dominação colonial e patriarcal", "O extrativismo reduz a violência", "A violência de gênero é anterior ao extrativismo"],
    c: 1
  },
  {
    q: "O conceito de 'buen vivir' (sumak kawsay) tem origem em qual tradição?",
    opts: ["Filosofia chinesa", "Cosmovisão andina", "Pensamento africano", "Tradição indígena norte-americana"],
    c: 1
  },
  {
    q: "Qual é a principal contribuição de Donna Haraway para o pensamento ambiental?",
    opts: ["Teoria da justiça climática", "Ciborgue e simpoiese como figuras para repensar relações humano-natureza", "Economia circular", "Direitos dos rios"],
    c: 1
  },
  {
    q: "Na ética ambiental, o que é 'extensão moral'?",
    opts: ["Aumento da população mundial", "Ampliação do círculo de entidades com consideração moral", "Expansão territorial de parques", "Crescimento econômico sustentável"],
    c: 1
  },
  {
    q: "Qual movimento social brasileiro é frequentemente associado à defesa da floresta e dos direitos das mulheres?",
    opts: ["Movimento dos Trabalhadores Rurais Sem Terra", "Movimento das Mulheres Trabalhadoras Rurais", "Movimento Gay", "Movimento Negro"],
    c: 1
  },
  {
    q: "O que é 'violência estrutural' no contexto ambiental?",
    opts: ["Conflitos armados por recursos naturais", "Formas institucionalizadas de dano ambiental que afetam grupos marginalizados", "Desastres naturais", "Caça ilegal de animais"],
    c: 1
  },
  {
    q: "Qual é a posição do ecofeminismo sobre a relação entre ciência e natureza?",
    opts: ["A ciência é neutra e objetiva", "A ciência tradicional frequentemente reproduz padrões de dominação", "A ciência deve ser abandonada", "Apenas ciências naturais são válidas"],
    c: 1
  },
  {
    q: "O conceito de 'serviços ecossistêmicos' é criticado por alguns autores porque:",
    opts: ["É muito complexo para ser aplicado", "Reduz a natureza a mercadoria e ignora valores não econômicos", "Não considera o clima", "É exclusivo de países ricos"],
    c: 1
  },
  {
    q: "Qual é a contribuição de Vandana Shiva para o pensamento ambiental?",
    opts: ["Teoria da evolução das espécies", "Crítica aos monocultivos e patentes de sementes", "Desenvolvimento de energia nuclear", "Economia behavioral"],
    c: 1
  },
  {
    q: "Na perspectiva ecofeminista, por que a crise climática é também uma crise de gênero?",
    opts: ["As mulheres causam mais poluição", "As mulheres são mais afetadas pelos impactos e menos representadas nas decisões", "O clima afeta apenas mulheres", "As mulheres não se preocupam com o clima"],
    c: 1
  },
  {
    q: "O que é 'justiça intergeracional' na ética ambiental?",
    opts: ["Igualdade entre gerações atuais", "Responsabilidade para com as gerações futuras", "Distribuição de renda entre idosos", "Igualdade racial"],
    c: 1
  },
  {
    q: "Qual é a relação entre 'ecologia profunda' e ecofeminismo?",
    opts: ["São idênticos", "Compartilham preocupações mas diferem na análise do papel das mulheres", "São completamente opostos", "O ecofeminismo rejeita a ecologia profunda"],
    c: 1
  }
];

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const QUESTIONS = [];
for (let i = 0; i < QUESTIONS_RAW.length; i++) {
  const q = QUESTIONS_RAW[i];
  const optIndices = [0, 1, 2, 3];
  const shuffledIndices = shuffleArray(optIndices);
  const newCorrect = shuffledIndices.indexOf(q.c);
  const newOpts = [];
  for (let j = 0; j < 4; j++) {
    newOpts.push(q.opts[shuffledIndices[j]]);
  }
  QUESTIONS.push({
    q: q.q,
    opts: newOpts,
    c: newCorrect
  });
}

// Correção estrutural: Embaralha o array global definitivo diretamente no escopo
for (let i = QUESTIONS.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [QUESTIONS[i], QUESTIONS[j]] = [QUESTIONS[j], QUESTIONS[i]];
     }    opts: ["Martha Nussbaum", "Val Plumwood", "Judith Butler", "Simone de Beauvoir"],
    c: 1
  },
  {
    q: "Na perspectiva ética de Aldo Leopold, qual é o princípio central?",
    opts: ["Utilitarismo ambiental", "Ética da terra", "Deontologia ecológica", "Virtude ambiental"],
    c: 1
  },
  {
    q: "O que caracteriza o 'ambientalismo de mercado'?",
    opts: ["Proibição total de atividades poluidoras", "Uso de mecanismos econômicos para internalizar custos ambientais", "Controle estatal absoluto dos recursos", "Rejeição de qualquer intervenção humana"],
    c: 1
  },
  {
    q: "Qual é a relação entre 'extrativismo' e violência de gênero segundo análises ecofeministas?",
    opts: ["Não há relação comprovada", "Ambos são formas de dominação colonial e patriarcal", "O extrativismo reduz a violência", "A violência de gênero é anterior ao extrativismo"],
    c: 1
  },
  {
    q: "O conceito de 'buen vivir' (sumak kawsay) tem origem em qual tradição?",
    opts: ["Filosofia chinesa", "Cosmovisão andina", "Pensamento africano", "Tradição indígena norte-americana"],
    c: 1
  },
  {
    q: "Qual é a principal contribuição de Donna Haraway para o pensamento ambiental?",
    opts: ["Teoria da justiça climática", "Ciborgue e simpoiese como figuras para repensar relações humano-natureza", "Economia circular", "Direitos dos rios"],
    c: 1
  },
  {
    q: "Na ética ambiental, o que é 'extensão moral'?",
    opts: ["Aumento da população mundial", "Ampliação do círculo de entidades com consideração moral", "Expansão territorial de parques", "Crescimento econômico sustentável"],
    c: 1
  },
  {
    q: "Qual movimento social brasileiro é frequentemente associado à defesa da floresta e dos direitos das mulheres?",
    opts: ["Movimento dos Trabalhadores Rurais Sem Terra", "Movimento das Mulheres Trabalhadoras Rurais", "Movimento Gay", "Movimento Negro"],
    c: 1
  },
  {
    q: "O que é 'violência estrutural' no contexto ambiental?",
    opts: ["Conflitos armados por recursos naturais", "Formas institucionalizadas de dano ambiental que afetam grupos marginalizados", "Desastres naturais", "Caça ilegal de animais"],
    c: 1
  },
  {
    q: "Qual é a posição do ecofeminismo sobre a relação entre ciência e natureza?",
    opts: ["A ciência é neutra e objetiva", "A ciência tradicional frequentemente reproduz padrões de dominação", "A ciência deve ser abandonada", "Apenas ciências naturais são válidas"],
    c: 1
  },
  {
    q: "O conceito de 'serviços ecossistêmicos' é criticado por alguns autores porque:",
    opts: ["É muito complexo para ser aplicado", "Reduz a natureza a mercadoria e ignora valores não econômicos", "Não considera o clima", "É exclusivo de países ricos"],
    c: 1
  },
  {
    q: "Qual é a contribuição de Vandana Shiva para o pensamento ambiental?",
    opts: ["Teoria da evolução das espécies", "Crítica aos monocultivos e patentes de sementes", "Desenvolvimento de energia nuclear", "Economia comportamental"],
    c: 1
  },
  {
    q: "Na perspectiva ecofeminista, por que a crise climática é também uma crise de gênero?",
    opts: ["As mulheres causam mais poluição", "As mulheres são mais afetadas pelos impactos e menos representadas nas decisões", "O clima afeta apenas mulheres", "As mulheres não se preocupam com o clima"],
    c: 1
  },
  {
    q: "O que é 'justiça intergeracional' na ética ambiental?",
    opts: ["Igualdade entre gerações atuais", "Responsabilidade para com as gerações futuras", "Distribuição de renda entre idosos", "Igualdade racial"],
    c: 1
  },
  {
    q: "Qual é a relação entre 'ecologia profunda' e ecofeminismo?",
    opts: ["São idênticos", "Compartilham preocupações mas diferem na análise do papel das mulheres", "São completamente opostos", "O ecofeminismo rejeita a ecologia profunda"],
    c: 1
  }
];

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const QUESTIONS = [];
for (let i = 0; i < QUESTIONS_RAW.length; i++) {
  const q = QUESTIONS_RAW[i];
  const optIndices = [0, 1, 2, 3];
  const shuffledIndices = shuffleArray(optIndices);
  const newCorrect = shuffledIndices.indexOf(q.c);
  const newOpts = [];
  for (let j = 0; j < 4; j++) {
    newOpts.push(q.opts[shuffledIndices[j]]);
  }
  QUESTIONS.push({
    q: q.q,
    opts: newOpts,
    c: newCorrect
  });
}

// Shuffle question order too
shuffleArray(QUESTIONS);
