/* ============================================================
   BROTO v3 — Banco de Perguntas
   20 questões sobre Ética Ambiental & Ecofeminismo
   Baseado no conteúdo do slide da turma
   ============================================================ */

const QUESTIONS = [
  {
    q: "Qual é o principal objetivo da Ética Ambiental?",
    opts: [
      "Criar leis para proteger apenas animais ameaçados",
      "Estabelecer regras morais para a convivência respeitosa entre humanos e natureza",
      "Promover o crescimento econômico sustentável",
      "Proibir o uso de tecnologias industriais"
    ],
    c: 1
  },
  {
    q: "A questão central da Ética Ambiental é:",
    opts: [
      "Se a natureza deve ser preservada apenas em áreas protegidas",
      "Se a natureza possui valor intrínseco ou apenas utilitário para os humanos",
      "Se os animais têm direitos iguais aos humanos",
      "Se o governo deve controlar todos os recursos naturais"
    ],
    c: 1
  },
  {
    q: "Qual obra de Rachel Carson alertou sobre os danos dos pesticidas?",
    opts: [
      "A Morte da Natureza",
      "Primavera Silenciosa",
      "O Princípio da Responsabilidade",
      "A Ética da Terra"
    ],
    c: 1
  },
  {
    q: "O que caracteriza a visão antropocêntrica?",
    opts: [
      "Considerar todos os seres vivos igualmente importantes",
      "Colocar o ser humano como centro de tudo, sujeitando a natureza às suas necessidades",
      "Defender que a natureza é sagrada e não deve ser tocada",
      "Priorizar a proteção de ecossistemas sobre o desenvolvimento humano"
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
      "Uma filosofia puramente teórica sobre ecologia",
      "'Sabedoria da casa comum' — união de ética, ecologia e modo de vida",
      "Um sistema político para governar recursos naturais",
      "Uma técnica de agricultura orgânica"
    ],
    c: 1
  },
  {
    q: "Qual a diferença entre ecofilosofia e ecosofia?",
    opts: [
      "Não há diferença — são sinônimos",
      "Ecofilosofia é teórica; ecosofia une teoria e prática cotidiana",
      "Ecofilosofia é prática; ecosofia é apenas teórica",
      "Ecofilosofia estuda animais; ecosofia estuda plantas"
    ],
    c: 1
  },
  {
    q: "Segundo Félix Guattari, a crise ambiental é também:",
    opts: [
      "Apenas um problema de gestão de resíduos",
      "Uma crise social e mental que exige transformação de valores",
      "Um desafio exclusivamente tecnológico",
      "Uma questão de falta de investimento em energia limpa"
    ],
    c: 1
  },
  {
    q: "Quem cunhou o termo 'bioética' em 1970?",
    opts: [
      "Rachel Carson",
      "Van Rensselaer Potter",
      "Arne Naess",
      "Carolyn Merchant"
    ],
    c: 1
  },
  {
    q: "O que é a Bioética Ambiental?",
    opts: [
      "O estudo de ética apenas em laboratórios",
      "A ligação entre saúde humana, dos animais e dos ecossistemas",
      "Uma técnica de engenharia genética",
      "A proteção exclusiva de espécies ameaçadas"
    ],
    c: 1
  },
  {
    q: "Qual princípio central une Ética Ambiental e Bioética?",
    opts: [
      "A responsabilidade com as gerações futuras",
      "O crescimento econômico ilimitado",
      "A proteção apenas de áreas urbanas",
      "A exploração sustentável de recursos"
    ],
    c: 0
  },
  {
    q: "O desenvolvimento sustentável busca:",
    opts: [
      "Maximizar o lucro a curto prazo",
      "Atender necessidades atuais sem comprometer as futuras gerações",
      "Proibir toda forma de industrialização",
      "Priorizar apenas a justiça social"
    ],
    c: 1
  },
  {
    q: "Quem criou o termo 'ecofeminismo' em 1974?",
    opts: [
      "Vandana Shiva",
      "Françoise d'Eaubonne",
      "Val Plumwood",
      "Donna Haraway"
    ],
    c: 1
  },
  {
    q: "Qual é a ideia central do Ecofeminismo?",
    opts: [
      "Que as mulheres são naturalmente superiores na proteção ambiental",
      "Que a mesma lógica de dominação explora tanto a natureza quanto as mulheres",
      "Que apenas mulheres podem salvar o planeta",
      "Que a natureza deve ser protegida independentemente das questões de gênero"
    ],
    c: 1
  },
  {
    q: "O que o Ecofeminismo critica no sistema patriarcal?",
    opts: [
      "A valorização excessiva da natureza",
      "A concentração de poder e a lógica de dominação e exploração",
      "A falta de tecnologia industrial",
      "A proteção excessiva de áreas naturais"
    ],
    c: 1
  },
  {
    q: "Segundo o Ecofeminismo, a sustentabilidade verdadeira só existe se:",
    opts: [
      "Houver crescimento econômico contínuo",
      "For justa e não mantiver comunidades pobres e marginalizadas",
      "As empresas pagarem impostos ambientais",
      "Os governos controlarem todos os recursos naturais"
    ],
    c: 1
  },
  {
    q: "Qual ativista indiana é figura central no Ecofeminismo?",
    opts: [
      "Greta Thunberg",
      "Vandana Shiva",
      "Wangari Maathai",
      "Jane Goodall"
    ],
    c: 1
  },
  {
    q: "O que Vandana Shiva critica sobre a monocultura?",
    opts: [
      "Que ela é mais produtiva que a agricultura tradicional",
      "Que destrói o solo e reduz a biodiversidade",
      "Que é a única forma de alimentar a população mundial",
      "Que não gera lucro suficiente para as empresas"
    ],
    c: 1
  },
  {
    q: "Qual crítica o Ecofeminismo enfrenta em relação ao essencialismo?",
    opts: [
      "De que ignora completamente a natureza",
      "De que supõe que mulheres são 'naturalmente' mais próximas da natureza",
      "De que defende a exploração mineral",
      "De que não valoriza o conhecimento científico"
    ],
    c: 1
  },
  {
    q: "Segundo o texto, o Ecofeminismo contribui para:",
    opts: [
      "A criação de leis que proíbem o trabalho feminino",
      "A formulação de políticas públicas e a participação feminina em conselhos ecológicos",
      "A industrialização acelerada das zonas rurais",
      "A privatização de recursos naturais"
    ],
    c: 1
  }
];

const QUESTION_MS = 20000;
const OPT_MARK = ["A","B","C","D"];
