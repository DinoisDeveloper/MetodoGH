import { AppStep, MultiStepQuizQuestion, PlanGH, FaqItem, TestimonialItem, AnalysisStep } from './types';

// API_KEY_ERROR_MESSAGE removed

export const APP_STEPS_GH: Record<string, AppStep> = { // Renamed from APP_STEPS_OG
  LANDING_GH: AppStep.LANDING_GH,
  QUIZ_MULTI_STEP_GH: AppStep.QUIZ_MULTI_STEP_GH,
  ANALYSIS_LOADING_GH: AppStep.ANALYSIS_LOADING_GH,
  PERSONALIZED_RESULTS_GH: AppStep.PERSONALIZED_RESULTS_GH,
  PLANS_DISPLAY_GH: AppStep.PLANS_DISPLAY_GH,
};

export const LANDING_PAGE_GH_CONTENT = { // Renamed from LANDING_PAGE_OG_CONTENT
  title: "MÉTODO GH",
  subtitle: "Desbloqueie seu potencial de altura natural. O Método GH pode te ajudar a ganhar centímetros de forma segura e eficaz.",
  description1: "Cansado de se sentir baixo? Acredite, ainda há esperança. O Método GH foca na descompressão da coluna e otimização postural.",
  description2: "Com dedicação e o método certo, você pode alcançar a altura que sempre desejou. Comece sua transformação hoje!",
  ctaButtonText: "INICIAR DIAGNÓSTICO GH",
  stats: [ // Adjusted stats for GH
    { value: "3-12 cm", label: "Potencial de ganho" },
    { value: "15-20 min", label: "Por dia" },
    { value: "Resultados", label: "Em semanas" },
  ]
};

// Quiz questions remain structurally similar but are now for GH
export const MULTI_STEP_QUIZ_QUESTIONS_GH: MultiStepQuizQuestion[] = [
  {
    id: "q1_sitting_time_gh",
    text: "Quanto tempo você costuma passar sentado por dia?",
    type: "radio",
    options: [
      { label: "Menos de 4 horas", value: "less_4h" },
      { label: "Entre 4 e 8 horas", value: "4_8h" },
      { label: "Mais de 8 horas por dia", value: "more_8h" },
    ],
  },
  {
    id: "q2_stretching_mobility_gh",
    text: "Você costuma se alongar ou fazer mobilidade durante a semana?",
    type: "radio",
    options: [
      { label: "Sim, com frequência", value: "often" },
      { label: "Às vezes", value: "sometimes" },
      { label: "Raramente ou nunca", value: "never" },
    ],
  },
  {
    id: "q3_posture_gh",
    text: "Como você descreveria sua postura geralmente?",
    type: "radio",
    options: [
      { label: "Excelente, sempre ereto", value: "excellent" },
      { label: "Boa, mas às vezes curvo", value: "good_sometimes_bad" },
      { label: "Regular, costumo me curvar", value: "regular_often_bad" },
      { label: "Ruim, sinto que é muito curvada", value: "bad_very_stooped" },
    ],
  },
  {
    id: "q4_touch_toes_gh",
    text: "Você consegue encostar as mãos nos pés sem dobrar os joelhos?",
    type: "radio",
    options: [
      { label: "Sim, tranquilamente", value: "yes_easily" },
      { label: "Chego perto", value: "close" },
      { label: "Não chego nem perto", value: "not_close" },
    ],
  },
  {
    id: "q5_pain_tension_regions_gh",
    text: "Sente dores ou tensões frequentes em alguma destas regiões?",
    type: "checkbox",
    isMultiSelect: true,
    options: [
      { label: "Lombar", value: "lumbar" },
      { label: "Pescoço / Ombros", value: "neck_shoulders" },
      { label: "Posterior da coxa / Panturrilhas", value: "legs" },
      { label: "Nenhuma das anteriores", value: "none" },
    ],
  },
  {
    id: "q6_physical_activity_gh",
    text: "Qual seu nível de atividade física semanal (exercícios, esportes)?",
    type: "radio",
    options: [
      { label: "Alto (5+ vezes/semana)", value: "high_5_plus" },
      { label: "Médio (2-4 vezes/semana)", value: "medium_2_4" },
      { label: "Baixo (0-1 vez/semana)", value: "low_0_1" },
    ],
  },
  {
    id: "q7_height_goals_gh",
    text: "O quão importante é para você ganhar altura?",
    type: "radio",
    options: [
      { label: "Muito importante, mudaria minha vida", value: "very_important" },
      { label: "Importante, melhoraria minha confiança", value: "important" },
      { label: "Gostaria, mas não é prioridade máxima", value: "nice_to_have" },
    ],
  },
  {
    id: "q8_dedication_gh",
    text: "Você está disposto a dedicar 15-20 minutos diários aos exercícios do Método GH?",
    type: "radio",
    options: [
      { label: "Sim, totalmente!", value: "yes_dedicated" },
      { label: "Acho que sim, se os resultados vierem", value: "yes_if_results" },
      { label: "Tenho receio de não conseguir manter", value: "not_sure_consistency" },
    ],
  },
];
export const FINAL_HEIGHT_QUESTION_GH: MultiStepQuizQuestion = { // Renamed
    id: "finalHeightGH", // Renamed ID
    text: "Qual é a sua altura atual (em cm)?",
    type: "number_input",
    placeholder: "Ex: 170",
    unit: "cm",
};

export const ANALYSIS_LOADING_STEPS_GH: AnalysisStep[] = [ // Renamed & content adapted for GH
  { 
    title: "Analisando seus dados...", 
    details: "Processando suas respostas para o diagnóstico GH.", 
    progress: 25, 
    fact: "O Método GH combina alongamentos específicos e correção postural.",
    icon: "lightning-bolt"
  },
  { 
    title: "Avaliando potencial de descompressão...", 
    details: "Calculando a margem de crescimento postural.", 
    progress: 60, 
    fact: "Muitos usuários relatam melhora na postura em poucas semanas.",
    icon: "lightning-bolt"
  },
  { 
    title: "Gerando seu resultado GH...", 
    details: "Preparando sua estimativa de ganho de altura personalizada.", 
    progress: 85, 
    fact: "A consistência é chave para maximizar os resultados com o Método GH.",
    icon: "lightning-bolt"
  },
   { 
    title: "Diagnóstico GH Concluído!", 
    details: "Seu resultado personalizado está pronto.", 
    progress: 100, 
    fact: "Prepare-se para iniciar sua jornada de crescimento!",
    icon: "check-circle"
  }
];

export const PLANS_GH: PlanGH[] = [ // Renamed from PLANS_OG, reverted to GH structure
  {
    id: 'gh_simple',
    name: 'Simple GH',
    price: 'R$ 14,90',
    duration: 'Protocolo Fundamental',
    gainEstimate: 'Até 3cm',
    features: [
      'Introdução ao Método GH.',
      'Exercícios básicos de descompressão e alinhamento.',
      'Ideal para ganhos iniciais e melhora postural leve.',
      'Acesso à comunidade de membros.'
    ],
    purchaseLink: 'https://pay.kiwify.com.br/EvpDQlo',
    purchaseLinkCommunity: 'https://pay.kiwify.com.br/l0IXclf', // 14.90 + 9.90 = 24.80
    highlight: 'INICIANTE',
    borderColor: 'border-gray-700',
    buttonColor: 'bg-gray-700 hover:bg-gray-600',
    badgeColor: 'bg-blue-600',
  },
  {
    id: 'gh_essencial',
    name: 'Essencial GH',
    price: 'R$ 31,90',
    duration: 'Protocolo Completo',
    gainEstimate: 'Até 7cm',
    features: [
      'O plano mais popular e recomendado.',
      'Técnicas avançadas de alongamento e fortalecimento postural.',
      'Guia de otimização de rotina e hábitos.',
      'Suporte prioritário e acesso à comunidade premium.'
    ],
    purchaseLink: 'https://pay.kiwify.com.br/l05kkMT',
    purchaseLinkCommunity: 'https://pay.kiwify.com.br/PHGaHVx', // 31.90 + 9.90 = 41.80
    highlight: 'RECOMENDADO',
    borderColor: 'border-[#FF0000]',
    buttonColor: 'bg-[#FF0000] hover:bg-[#FF3333]',
    badgeColor: 'bg-[#FF0000]',
  },
  {
    id: 'gh_elite',
    name: 'Elite GH',
    price: 'R$ 45,90',
    duration: 'Protocolo Intensivo VIP',
    gainEstimate: 'Até 12cm',
    features: [
      'Resultados máximos no menor tempo possível.',
      'Acompanhamento individualizado com especialista GH.',
      'Plano de exercícios e nutrição 100% personalizados.',
      'Acesso VIP vitalício à comunidade e todos os bônus.'
    ],
    purchaseLink: 'https://pay.kiwify.com.br/Ooz2222',
    purchaseLinkCommunity: 'https://pay.kiwify.com.br/BzAnqeO', // 45.90 + 9.90 = 55.80
    highlight: 'PREMIUM',
    borderColor: 'border-purple-500', 
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    badgeColor: 'bg-purple-600',
  },
];

export const COMMUNITY_GH_DETAILS = { // Renamed
  price: "9,90", // R$
  features: [
    { icon: "user-circle", text: "Comunidade GH Exclusiva" },
    { icon: "home", text: "Acesso vitalício, pague uma vez." },
    { icon: "puzzle", text: "Desafios mensais e conteúdos bônus." },
    { icon: "users", text: "Mentorias em grupo e troca de experiências." },
  ],
  footerPoints: ["Acesso Imediato", "Sem Mensalidade", "Suporte Contínuo"]
};

// GHBOT_MODEL_NAME removed
// GHBOT_SYSTEM_INSTRUCTION removed
// GHBOT_DEFAULT_GREETING removed

export const FAQ_DATA_GH: FaqItem[] = [ // Renamed & content adapted for GH
    { question: "O Método GH funciona para qualquer idade?", answer: "O Método GH foca na descompressão da coluna e otimização postural, o que pode resultar em ganho de altura mesmo após o fechamento das placas de crescimento. Os resultados variam, mas muitos adultos veem melhoras significativas." },
    { question: "Quanto tempo até ver resultados com o Método GH?", answer: "Muitos usuários relatam melhora na postura e bem-estar em poucas semanas. Ganhos de altura perceptíveis podem levar de 4 a 12 semanas, dependendo da sua dedicação, genética e plano escolhido." },
    { question: "Os exercícios do Método GH são difíceis?", answer: "Os exercícios são progressivos e adaptáveis. O foco é na execução correta e consistente, não na dificuldade extrema. Todos os planos vêm com instruções claras." },
    { question: "Preciso de equipamentos para o Método GH?", answer: "A maioria dos exercícios, especialmente nos planos Simple e Essencial, pode ser feita em casa sem equipamentos. O plano Elite pode sugerir alguns acessórios simples." },
    { question: "Os ganhos de altura são permanentes?", answer: "Sim, os ganhos obtidos pela correção postural e descompressão são duradouros, desde que você mantenha bons hábitos e, idealmente, alguns dos exercícios chave como manutenção." },
];

export const TESTIMONIALS_GH: TestimonialItem[] = [ // Renamed & content adapted for GH
    { planName: "Simple GH", personName: "Lucas P.", age: 22, rating: 5, gain: "+2.5 cm", quote: "Comecei com o Simple GH e já notei diferença na postura e ganhei 2.5cm! Muito bom para quem quer começar.", bgColorClass: "bg-slate-800", textColorClass:"text-white"},
    { planName: "Essencial GH", personName: "Fernanda L.", age: 28, rating: 5, gain: "+6 cm", quote: "O Essencial GH mudou minha vida! Ganhei 6cm e minha confiança disparou. Recomendo demais!", bgColorClass: "bg-red-700", textColorClass:"text-white"},
    { planName: "Elite GH", personName: "Ricardo S.", age: 33, rating: 5, gain: "+9 cm", quote: "Com o Elite GH e o acompanhamento, cheguei a 9cm de ganho! Nunca imaginei ser possível. Vale cada centavo.", bgColorClass: "bg-purple-700", textColorClass:"text-white"},
];

export const STATS_HIGHLIGHTS_GH = [ // Renamed & content adapted for GH
    { value: "95%", description: "dos usuários relatam melhora na postura" },
    { value: "4-7 cm", description: "ganho médio com o Plano Essencial GH" },
    { value: "10.000+", description: "pessoas já usaram o Método GH" },
];

export const GUARANTEE_SECTION_GH = { // Renamed
    title: "Garantia de Satisfação Método GH",
    description: "Nosso compromisso é com seu resultado. Siga o método conforme instruído. Se não tiver NENHUMA melhora postural ou de bem-estar em 30 dias, contate o suporte."
};

export const COMPARISON_TABLE_GH = { // Renamed
    headers: ["Recursos", "Simple GH", "Essencial GH", "Elite GH"],
    rows: [
        { resource: "Potencial de Ganho", simple_gh: "Até 3cm", essencial_gh: "Até 7cm", elite_gh: "Até 12cm" },
        { resource: "Duração Estimada", simple_gh: "4-8 semanas", essencial_gh: "8-12 semanas", elite_gh: "12+ semanas (VIP)" },
        { resource: "Suporte", simple_gh: "Comunidade", essencial_gh: "Email & Comunidade Premium", elite_gh: "Individual VIP" },
        { resource: "Personalização", simple_gh: "Baixa", essencial_gh: "Média", elite_gh: "Alta (1:1)" },
        { resource: "Preço Base", simple_gh: "R$ 14,90", essencial_gh: "R$ 31,90", elite_gh: "R$ 45,90" },
    ]
};

// Deprecated constants from previous versions
export const PLANS: any[] = [];
export const ESSENCIAL_GH_LINK = ''; // This was the old constant name
export const QUIZ_QUESTIONS: any[] = [];
export const APP_STEPS: any = {};
export {}; // Ensure this file is treated as a module if all exports are objects/arrays