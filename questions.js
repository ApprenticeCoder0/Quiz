/* ============================================================
   BROTO v4.0 - Banco de Perguntas
   Respostas embaralhadas para evitar padrao fixo
   ============================================================ */

const QUESTION_MS = 20000;
const OPT_MARK = ["A","B","C","D"];

var QUESTIONS_RAW = [
  {
    q: "Qual conceito ecofeminista defende que a opressao das mulheres e a degradacao ambiental compartilham raizes sistemicas?",
    opts: ["Ecologia profunda","Ecofeminismo","Ambientalismo liberal","Desenvolvimento sustentavel"],
    c: 1
  },
  {
    q: "Quem e considerada uma das pioneiras do ecofeminismo com a obra 'Le Feminisme ou la Mort'?",
    opts: ["Vandana Shiva","Francoise d'Eaubonne","Rachel Carson","Donna Haraway"],
    c: 1
  },
  {
    q: "Na etica ambiental, o que significa 'antropocentrismo fraco'?",
    opts: ["A natureza tem valor intrinseco absoluto","Os humanos tem valor superior, mas devem respeitar a natureza","A natureza e apenas recurso para exploracao","A etica nao se aplica a natureza"],
    c: 1
  },
  {
    q: "Qual e a principal critica do ecofeminismo ao desenvolvimento tecnologico desenfreado?",
    opts: ["E economicamente inviavel","Reforca a dominacao sobre mulheres e natureza","Nao produz empregos suficientes","E muito lento para resolver problemas"],
    c: 1
  },
  {
    q: "O conceito de 'justica ambiental' surgiu principalmente em qual contexto historico?",
    opts: ["Movimento pelos direitos dos animais","Movimento dos direitos civis nos EUA","Revolucao Industrial na Europa","Descolonizacao na Africa"],
    c: 1
  },
  {
    q: "Qual filosofa desenvolveu o conceito de 'companhia de especies' e a critica a natureza como recurso?",
    opts: ["Martha Nussbaum","Val Plumwood","Judith Butler","Simone de Beauvoir"],
    c: 1
  },
  {
    q: "Na perspectiva etica de Aldo Leopold, qual e o principio central?",
    opts: ["Utilitarismo ambiental","Etica da terra","Deontologia ecologica","Virtude ambiental"],
    c: 1
  },
  {
    q: "O que caracteriza o 'ambientalismo de mercado'?",
    opts: ["Proibicao total de atividades poluidoras","Uso de mecanismos economicos para internalizar custos ambientais","Controle estatal absoluto dos recursos","Rejeicao de qualquer intervencao humana"],
    c: 1
  },
  {
    q: "Qual e a relacao entre 'extractivismo' e violencia de genero segundo analises ecofeministas?",
    opts: ["Nao ha relacao comprovada","Ambos sao formas de dominacao colonial e patriarcal","O extractivismo reduz a violencia","A violencia de genero e anterior ao extractivismo"],
    c: 1
  },
  {
    q: "O conceito de 'buen vivir' (sumak kawsay) tem origem em qual tradicao?",
    opts: ["Filosofia chinesa","Cosmovisao andina","Pensamento africano","Tradicao indigena norte-americana"],
    c: 1
  },
  {
    q: "Qual e a principal contribuicao de Donna Haraway para o pensamento ambiental?",
    opts: ["Teoria da justica climatica","Ciborgue e simpoiese como figuras para repensar relacoes humano-natureza","Economia circular","Direitos dos rios"],
    c: 1
  },
  {
    q: "Na etica ambiental, o que e 'extensao moral'?",
    opts: ["Aumento da populacao mundial","Ampliacao do circulo de entidades com consideracao moral","Expansao territorial de parques","Crescimento economico sustentavel"],
    c: 1
  },
  {
    q: "Qual movimento social brasileiro e frequentemente associado a defesa da floresta e dos direitos das mulheres?",
    opts: ["Movimento dos Trabalhadores Rurais Sem Terra","Movimento das Mulheres Trabalhadoras Rurais","Movimento Gay","Movimento Negro"],
    c: 1
  },
  {
    q: "O que e 'violencia estrutural' no contexto ambiental?",
    opts: ["Conflitos armados por recursos naturais","Formas institucionalizadas de dano ambiental que afetam grupos marginalizados","Desastres naturais","Caca ilegal de animais"],
    c: 1
  },
  {
    q: "Qual e a posicao do ecofeminismo sobre a relacao entre ciencia e natureza?",
    opts: ["A ciencia e neutra e objetiva","A ciencia tradicional frequentemente reproduz padroes de dominacao","A ciencia deve ser abandonada","Apenas ciencias naturais sao validas"],
    c: 1
  },
  {
    q: "O conceito de 'servicos ecossistemicos' e criticado por alguns autores porque:",
    opts: ["E muito complexo para ser aplicado","Reduz a natureza a mercadoria e ignora valores nao economicos","Nao considera o clima","E exclusivo de paises ricos"],
    c: 1
  },
  {
    q: "Qual e a contribuicao de Vandana Shiva para o pensamento ambiental?",
    opts: ["Teoria da evolucao das especies","Critica aos monocultivos e patentes de sementes","Desenvolvimento de energia nuclear","Economia comportamental"],
    c: 1
  },
  {
    q: "Na perspectiva ecofeminista, por que a crise climatica e tambem uma crise de genero?",
    opts: ["As mulheres causam mais poluicao","As mulheres sao mais afetadas pelos impactos e menos representadas nas decisoes","O clima afeta apenas mulheres","As mulheres nao se preocupam com o clima"],
    c: 1
  },
  {
    q: "O que e 'justica intergeracional' na etica ambiental?",
    opts: ["Igualdade entre geracoes atuais","Responsabilidade para com as geracoes futuras","Distribuicao de renda entre idosos","Igualdade racial"],
    c: 1
  },
  {
    q: "Qual e a relacao entre 'ecologia profunda' e ecofeminismo?",
    opts: ["Sao identicos","Compartilham preocupacoes mas diferem na analise do papel das mulheres","Sao completamente opostos","O ecofeminismo rejeita a ecologia profunda"],
    c: 1
  }
];

function shuffleArray(array) {
  var arr = array.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

var QUESTIONS = [];
for (var i = 0; i < QUESTIONS_RAW.length; i++) {
  var q = QUESTIONS_RAW[i];
  var optIndices = [0, 1, 2, 3];
  var shuffledIndices = shuffleArray(optIndices);
  var newCorrect = shuffledIndices.indexOf(q.c);
  var newOpts = [];
  for (var j = 0; j < 4; j++) {
    newOpts.push(q.opts[shuffledIndices[j]]);
  }
  QUESTIONS.push({
    q: q.q,
    opts: newOpts,
    c: newCorrect
  });
}

QUESTIONS = shuffleArray(QUESTIONS);