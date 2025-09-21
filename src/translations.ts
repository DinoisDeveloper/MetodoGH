// FIX: Corrected import path for types.
import { PlanGH, MultiStepQuizQuestion, AnalysisStep, FaqItem, TestimonialItem } from '../types';

const plansPT: PlanGH[] = [
  { id: 'gh_simple', name: 'Simple GH', price: 'R$ 14,90', duration: 'Protocolo Fundamental', gainEstimate: 'Até 3cm', features: ['Introdução ao Método GH.', 'Exercícios básicos de descompressão e alinhamento.', 'Ideal para ganhos iniciais e melhora postural leve.', 'Acesso à comunidade de membros.'], purchaseLink: 'https://pay.kiwify.com.br/EvpDQlo', purchaseLinkCommunity: 'https://pay.kiwify.com.br/l0IXclf', highlight: 'INICIANTE', borderColor: 'border-gray-700', buttonColor: 'bg-gray-700 hover:bg-gray-600', badgeColor: 'bg-blue-600' },
  { id: 'gh_essencial', name: 'Essencial GH', price: 'R$ 31,90', duration: 'Protocolo Completo', gainEstimate: 'Até 7cm', features: ['O plano mais popular e recomendado.', 'Técnicas avançadas de alongamento e fortalecimento postural.', 'Guia de otimização de rotina e hábitos.', 'Suporte prioritário e acesso à comunidade premium.'], purchaseLink: 'https://pay.kiwify.com.br/l05kkMT', purchaseLinkCommunity: 'https://pay.kiwify.com.br/PHGaHVx', highlight: 'RECOMENDADO', borderColor: 'border-[#FF0000]', buttonColor: 'bg-[#FF0000] hover:bg-[#FF3333]', badgeColor: 'bg-[#FF0000]' },
  { id: 'gh_elite', name: 'Elite GH', price: 'R$ 45,90', duration: 'Protocolo Intensivo VIP', gainEstimate: 'Até 12cm', features: ['Resultados máximos no menor tempo possível.', 'Acompanhamento individualizado com especialista GH.', 'Plano de exercícios e nutrição 100% personalizados.', 'Acesso VIP vitalício à comunidade e todos os bônus.'], purchaseLink: 'https://pay.kiwify.com.br/Ooz2222', purchaseLinkCommunity: 'https://pay.kiwify.com.br/BzAnqeO', highlight: 'PREMIUM', borderColor: 'border-purple-500', buttonColor: 'bg-purple-600 hover:bg-purple-700', badgeColor: 'bg-purple-600' },
];

const plansEN: PlanGH[] = [
    { id: 'gh_simple', name: 'Simple GH', price: '$5.90', duration: 'Fundamental Protocol', gainEstimate: 'Up to 3cm', features: ['Introduction to the GH Method.', 'Basic decompression and alignment exercises.', 'Ideal for initial gains and slight posture improvement.', 'Access to the member community.'], purchaseLink: 'https://pay.kiwify.com.br/EvpDQlo', purchaseLinkCommunity: 'https://pay.kiwify.com.br/l0IXclf', highlight: 'BEGINNER', borderColor: 'border-gray-700', buttonColor: 'bg-gray-700 hover:bg-gray-600', badgeColor: 'bg-blue-600' },
    { id: 'gh_essencial', name: 'Essential GH', price: '$9.90', duration: 'Complete Protocol', gainEstimate: 'Up to 7cm', features: ['The most popular and recommended plan.', 'Advanced stretching and postural strengthening techniques.', 'Routine and habit optimization guide.', 'Priority support and access to the premium community.'], purchaseLink: 'https://pay.kiwify.com.br/l05kkMT', purchaseLinkCommunity: 'https://pay.kiwify.com.br/PHGaHVx', highlight: 'RECOMMENDED', borderColor: 'border-[#FF0000]', buttonColor: 'bg-[#FF0000] hover:bg-[#FF3333]', badgeColor: 'bg-[#FF0000]' },
    { id: 'gh_elite', name: 'Elite GH', price: '$14.90', duration: 'Intensive VIP Protocol', gainEstimate: 'Up to 12cm', features: ['Maximum results in the shortest possible time.', 'Individualized monitoring with a GH specialist.', '100% personalized exercise and nutrition plan.', 'Lifetime VIP access to the community and all bonuses.'], purchaseLink: 'https://pay.kiwify.com.br/Ooz2222', purchaseLinkCommunity: 'https://pay.kiwify.com.br/BzAnqeO', highlight: 'PREMIUM', borderColor: 'border-purple-500', buttonColor: 'bg-purple-600 hover:bg-purple-700', badgeColor: 'bg-purple-600' },
];

const plansES: PlanGH[] = [
    { id: 'gh_simple', name: 'Simple GH', price: '€5.90', duration: 'Protocolo Fundamental', gainEstimate: 'Hasta 3cm', features: ['Introducción al Método GH.', 'Ejercicios básicos de descompresión y alineación.', 'Ideal para ganancias iniciales y mejora postural leve.', 'Acceso a la comunidad de miembros.'], purchaseLink: 'https://pay.kiwify.com.br/EvpDQlo', purchaseLinkCommunity: 'https://pay.kiwify.com.br/l0IXclf', highlight: 'PRINCIPIANTE', borderColor: 'border-gray-700', buttonColor: 'bg-gray-700 hover:bg-gray-600', badgeColor: 'bg-blue-600' },
    { id: 'gh_essencial', name: 'Esencial GH', price: '€9.90', duration: 'Protocolo Completo', gainEstimate: 'Hasta 7cm', features: ['El plan más popular y recomendado.', 'Técnicas avanzadas de estiramiento y fortalecimiento postural.', 'Guía de optimización de rutina y hábitos.', 'Soporte prioritario y acceso a la comunidad premium.'], purchaseLink: 'https://pay.kiwify.com.br/l05kkMT', purchaseLinkCommunity: 'https://pay.kiwify.com.br/PHGaHVx', highlight: 'RECOMENDADO', borderColor: 'border-[#FF0000]', buttonColor: 'bg-[#FF0000] hover:bg-[#FF3333]', badgeColor: 'bg-[#FF0000]' },
    { id: 'gh_elite', name: 'Elite GH', price: '€14.90', duration: 'Protocolo Intensivo VIP', gainEstimate: 'Hasta 12cm', features: ['Resultados máximos en el menor tiempo posible.', 'Seguimiento individualizado con un especialista GH.', 'Plan de ejercicios y nutrición 100% personalizados.', 'Acceso VIP vitalicio a la comunidad y todos los bonos.'], purchaseLink: 'https://pay.kiwify.com.br/Ooz2222', purchaseLinkCommunity: 'https://pay.kiwify.com.br/BzAnqeO', highlight: 'PREMIUM', borderColor: 'border-purple-500', buttonColor: 'bg-purple-600 hover:bg-purple-700', badgeColor: 'bg-purple-600' },
];


const quizQuestionsPT: MultiStepQuizQuestion[] = [
  { id: "q1_sitting_time_gh", text: "Quanto tempo você costuma passar sentado por dia?", type: "radio", options: [{ label: "Menos de 4 horas", value: "less_4h" }, { label: "Entre 4 e 8 horas", value: "4_8h" }, { label: "Mais de 8 horas por dia", value: "more_8h" }] },
  { id: "q2_stretching_mobility_gh", text: "Você costuma se alongar ou fazer mobilidade durante a semana?", type: "radio", options: [{ label: "Sim, com frequência", value: "often" }, { label: "Às vezes", value: "sometimes" }, { label: "Raramente ou nunca", value: "never" }] },
  { id: "q3_posture_gh", text: "Como você descreveria sua postura geralmente?", type: "radio", options: [{ label: "Excelente, sempre ereto", value: "excellent" }, { label: "Boa, mas às vezes curvo", value: "good_sometimes_bad" }, { label: "Regular, costumo me curvar", value: "regular_often_bad" }, { label: "Ruim, sinto que é muito curvada", value: "bad_very_stooped" }] },
  { id: "q4_touch_toes_gh", text: "Você consegue encostar as mãos nos pés sem dobrar os joelhos?", type: "radio", options: [{ label: "Sim, tranquilamente", value: "yes_easily" }, { label: "Chego perto", value: "close" }, { label: "Não chego nem perto", value: "not_close" }] },
  { id: "q5_pain_tension_regions_gh", text: "Sente dores ou tensões frequentes em alguma destas regiões?", type: "checkbox", isMultiSelect: true, options: [{ label: "Lombar", value: "lumbar" }, { label: "Pescoço / Ombros", value: "neck_shoulders" }, { label: "Posterior da coxa / Panturrilhas", value: "legs" }, { label: "Nenhuma das anteriores", value: "none" }] },
  { id: "q6_physical_activity_gh", text: "Qual seu nível de atividade física semanal (exercícios, esportes)?", type: "radio", options: [{ label: "Alto (5+ vezes/semana)", value: "high_5_plus" }, { label: "Médio (2-4 vezes/semana)", value: "medium_2_4" }, { label: "Baixo (0-1 vez/semana)", value: "low_0_1" }] },
  { id: "q7_height_goals_gh", text: "O quão importante é para você ganhar altura?", type: "radio", options: [{ label: "Muito importante, mudaria minha vida", value: "very_important" }, { label: "Importante, melhoraria minha confiança", value: "important" }, { label: "Gostaria, mas não é prioridade máxima", value: "nice_to_have" }] },
  { id: "q8_dedication_gh", text: "Você está disposto a dedicar 15-20 minutos diários aos exercícios do Método GH?", type: "radio", options: [{ label: "Sim, totalmente!", value: "yes_dedicated" }, { label: "Acho que sim, se os resultados vierem", value: "yes_if_results" }, { label: "Tenho receio de não conseguir manter", value: "not_sure_consistency" }] },
];

const quizQuestionsEN: MultiStepQuizQuestion[] = [
    { id: "q1_sitting_time_gh", text: "How much time do you usually spend sitting per day?", type: "radio", options: [{ label: "Less than 4 hours", value: "less_4h" }, { label: "Between 4 and 8 hours", value: "4_8h" }, { label: "More than 8 hours a day", value: "more_8h" }] },
    { id: "q2_stretching_mobility_gh", text: "Do you usually stretch or do mobility exercises during the week?", type: "radio", options: [{ label: "Yes, frequently", value: "often" }, { label: "Sometimes", value: "sometimes" }, { label: "Rarely or never", value: "never" }] },
    { id: "q3_posture_gh", text: "How would you generally describe your posture?", type: "radio", options: [{ label: "Excellent, always upright", value: "excellent" }, { label: "Good, but I sometimes slouch", value: "good_sometimes_bad" }, { label: "Fair, I often slouch", value: "regular_often_bad" }, { label: "Poor, I feel very stooped", value: "bad_very_stooped" }] },
    { id: "q4_touch_toes_gh", text: "Can you touch your hands to your feet without bending your knees?", type: "radio", options: [{ label: "Yes, easily", value: "yes_easily" }, { label: "I get close", value: "close" }, { label: "Not even close", value: "not_close" }] },
    { id: "q5_pain_tension_regions_gh", text: "Do you feel frequent pain or tension in any of these regions?", type: "checkbox", isMultiSelect: true, options: [{ label: "Lower back", value: "lumbar" }, { label: "Neck / Shoulders", value: "neck_shoulders" }, { label: "Hamstrings / Calves", value: "legs" }, { label: "None of the above", value: "none" }] },
    { id: "q6_physical_activity_gh", text: "What is your weekly level of physical activity (exercises, sports)?", type: "radio", options: [{ label: "High (5+ times/week)", value: "high_5_plus" }, { label: "Medium (2-4 times/week)", value: "medium_2_4" }, { label: "Low (0-1 time/week)", value: "low_0_1" }] },
    { id: "q7_height_goals_gh", text: "How important is it for you to gain height?", type: "radio", options: [{ label: "Very important, it would change my life", value: "very_important" }, { label: "Important, it would improve my confidence", value: "important" }, { label: "I'd like to, but it's not a top priority", value: "nice_to_have" }] },
    { id: "q8_dedication_gh", text: "Are you willing to dedicate 15-20 minutes daily to the GH Method exercises?", type: "radio", options: [{ label: "Yes, absolutely!", value: "yes_dedicated" }, { label: "I think so, if I see results", value: "yes_if_results" }, { label: "I'm afraid I won't be able to keep up", value: "not_sure_consistency" }] },
];

const quizQuestionsES: MultiStepQuizQuestion[] = [
    { id: "q1_sitting_time_gh", text: "¿Cuánto tiempo sueles pasar sentado al día?", type: "radio", options: [{ label: "Menos de 4 horas", value: "less_4h" }, { label: "Entre 4 y 8 horas", value: "4_8h" }, { label: "Más de 8 horas al día", value: "more_8h" }] },
    { id: "q2_stretching_mobility_gh", text: "¿Sueles estirar o hacer ejercicios de movilidad durante la semana?", type: "radio", options: [{ label: "Sí, con frecuencia", value: "often" }, { label: "A veces", value: "sometimes" }, { label: "Raramente o nunca", value: "never" }] },
    { id: "q3_posture_gh", text: "¿Cómo describirías tu postura generalmente?", type: "radio", options: [{ label: "Excelente, siempre erguido", value: "excellent" }, { label: "Buena, pero a veces me encorvo", value: "good_sometimes_bad" }, { label: "Regular, suelo encorvarme", value: "regular_often_bad" }, { label: "Mala, siento que estoy muy encorvado", value: "bad_very_stooped" }] },
    { id: "q4_touch_toes_gh", text: "¿Puedes tocar tus manos con los pies sin doblar las rodillas?", type: "radio", options: [{ label: "Sí, fácilmente", value: "yes_easily" }, { label: "Casi llego", value: "close" }, { label: "Ni de cerca", value: "not_close" }] },
    { id: "q5_pain_tension_regions_gh", text: "¿Sientes dolor o tensión frecuente en alguna de estas regiones?", type: "checkbox", isMultiSelect: true, options: [{ label: "Zona lumbar", value: "lumbar" }, { label: "Cuello / Hombros", value: "neck_shoulders" }, { label: "Isquiotibiales / Pantorillas", value: "legs" }, { label: "Ninguna de las anteriores", value: "none" }] },
    { id: "q6_physical_activity_gh", text: "¿Cuál es tu nivel de actividad física semanal (ejercicios, deportes)?", type: "radio", options: [{ label: "Alto (5+ veces/semana)", value: "high_5_plus" }, { label: "Medio (2-4 veces/semana)", value: "medium_2_4" }, { label: "Bajo (0-1 vez/semana)", value: "low_0_1" }] },
    { id: "q7_height_goals_gh", text: "¿Qué tan importante es para ti ganar altura?", type: "radio", options: [{ label: "Muy importante, cambiaría mi vida", value: "very_important" }, { label: "Importante, mejoraría mi confianza", value: "important" }, { label: "Me gustaría, pero no es una prioridad máxima", value: "nice_to_have" }] },
    { id: "q8_dedication_gh", text: "¿Estás dispuesto a dedicar 15-20 minutos diarios a los ejercicios del Método GH?", type: "radio", options: [{ label: "Sí, ¡totalmente!", value: "yes_dedicated" }, { label: "Creo que sí, si veo resultados", value: "yes_if_results" }, { label: "Me temo que no podré ser constante", value: "not_sure_consistency" }] },
];

// FIX: Create a template for the final height question to ensure correct typing and reduce repetition.
const finalHeightQuestionTemplate: Omit<MultiStepQuizQuestion, 'text' | 'placeholder'> = {
    id: "finalHeightGH",
    type: "number_input",
    unit: "cm",
};

export const translations = {
  pt: {
    header: { title: "Método GH", quizSubtitle: "Diagnóstico Personalizado GH" },
    landingPage: { title: "MÉTODO GH", subtitle: "Seu corpo está escondendo até 8cm de altura. E você pode desbloquear isso agora.", description1: "Você foi enganado: não é que você parou de crescer — é que sua estrutura foi comprimida. A verdade que ninguém te contou.", description2: "O Método GH não promete milagre. Ele corrige o que a vida entortou e libera sua altura real em apenas 30 dias.", ctaButtonText: "REVELAR MEU POTENCIAL", stats: [{ value: "3-8 cm", label: "Ganho de altura" }, { value: "20 min", label: "Por dia" }, { value: "30 dias", label: "Programa completo" }], diagnosisTime: "Diagnóstico personalizado em 2 minutos" },
    quizController: { title: "Diagnóstico Método <span class='text-[#FF0000]'>GH</span>", subtitle: "Descubra seu potencial de crescimento nos próximos meses.", questionLabel: (c,t) => `Pergunta ${c} de ${t}`, lastStepLabel: "Última Etapa" },
    quizQuestions: quizQuestionsPT,
    finalHeightQuestion: {
        ...finalHeightQuestionTemplate,
        text: "Qual é a sua altura atual (em cm)?",
        placeholder: "Ex: 170"
    },
    analysisLoading: { title: "Analisando Seu Potencial de Crescimento GH", subtitle: "Por favor, aguarde enquanto nosso algoritmo processa suas respostas", progressLabel: "Progresso", processingLabel: "Processando dados em tempo real...", factsTitle: "Fatos sobre o Método GH:"},
    analysisLoadingSteps: [
        { title: "Analisando seus dados...", details: "Processando suas respostas para o diagnóstico GH.", progress: 25, fact: "O Método GH combina alongamentos específicos e correção postural.", icon: "lightning-bolt" },
        { title: "Avaliando potencial de descompressão...", details: "Calculando a margem de crescimento postural.", progress: 60, fact: "Muitos usuários relatam melhora na postura em poucas semanas.", icon: "lightning-bolt" },
        { title: "Gerando seu resultado GH...", details: "Preparando sua estimativa de ganho de altura personalizada.", progress: 85, fact: "A consistência é chave para maximizar os resultados com o Método GH.", icon: "lightning-bolt" },
        { title: "Diagnóstico GH Concluído!", details: "Seu resultado personalizado está pronto.", progress: 100, fact: "Prepare-se para iniciar sua jornada de crescimento!", icon: "check-circle" }
    ],
    analysis: { defaultGrowth: "7cm", lowGrowth: "3-5cm", highGrowth: "8-10cm" },
    personalizedResults: { 
        title: (gain: string) => `Seu corpo tem potencial para<br/>ganhar até <span class='text-[#FF0000]'>+${gain}</span> de Altura.`,
        currentHeightLabel: "Altura atual",
        potentialHeightLabel: "Altura potencial",
        projectionTitle: "Projeção de crescimento",
        projectionSubtitle: (gain: string) => `Projeção baseada em potencial de +${gain} em 60 dias`,
        todayLabel: "Hoje",
        daysLabel: (days: number) => `${days}d`,
        summary: (potentialHeight: number, thirtyDayHeight: number) => `Seu corpo tem potencial para alcançar <strong class="text-white">${potentialHeight}cm</strong> em <strong class="text-[#FF0000]">60 dias</strong>, conseguindo já chegar em até <strong class="text-[#FF0000]">${thirtyDayHeight}cm</strong> em apenas <strong class="text-[#FF0000]">30 dias</strong>. Potencial <strong class="text-[#FF0000]">75%</strong> maior que outros usuários de <strong class="text-[#FF0000]">23 anos</strong>.`,
        progressLabel: (unlocked: number, total: number) => `${unlocked} cm de ${total} cm desbloqueados`,
        ctaButton: "INICIAR MEU CRESCIMENTO"
    },
    plansDisplay: { title: "Escolha o Plano <span class='text-[#FF0000]'>Método GH</span> Ideal", subtitle: "Inicie sua jornada de crescimento com o plano perfeito para seus objetivos.", offerEndsText: "Oferta especial de lançamento termina em:", offerEndedText: "Oferta encerrada!", paymentInfoText: "Pagamento seguro via Kiwify. Acesso liberado imediatamente após confirmação.", timeUnits: {days: "dias", hours: "horas", minutes: "minutos", seconds: "segundos"}},
    plans: plansPT,
    upsellModal: { title: "Excelente Escolha!", subtitle: (planName) => `Potencialize sua Jornada <span class="text-white">${planName.split(' ')[1]}</span>`, description: "Junte-se à Comunidade GH e acelere seus resultados com suporte exclusivo e conteúdos premium.", totalLabel: "Total", communityLabel: "Comunidade GH", ctaButton: "QUERO A COMUNIDADE GH", declineButton: (planName) => `Seguir apenas com meu ${planName}`},
    communityDetails: { price: "9,90", features: [{ icon: "user-circle", text: "Comunidade GH Exclusiva" }, { icon: "home", text: "Acesso vitalício, pague uma vez." }, { icon: "puzzle", text: "Desafios mensais e conteúdos bônus." }, { icon: "users", text: "Mentorias em grupo e troca de experiências." }], footerPoints: ["Acesso Imediato", "Sem Mensalidade", "Suporte Contínuo"] },
    guarantee: { title: "Garantia de Satisfação Método GH", description: "Nosso compromisso é com seu resultado. Siga o método conforme instruído. Se não tiver NENHUMA melhora postural ou de bem-estar em 30 dias, contate o suporte." },
    comparisonTable: { title: "Comparativo dos Planos <span class='text-[#FF0000]'>GH</span>", headers: ["Recursos", "Simple GH", "Essencial GH", "Elite GH"], rows: [{ resource: "Potencial de Ganho", simple: "Até 3cm", essencial: "Até 7cm", elite: "Até 12cm" }, { resource: "Duração Estimada", simple: "4-8 semanas", essencial: "8-12 semanas", elite: "12+ semanas (VIP)" }, { resource: "Suporte", simple: "Comunidade", essencial: "Email & Comunidade Premium", elite: "Individual VIP" }, { resource: "Personalização", simple: "Baixa", essencial: "Média", elite: "Alta (1:1)" }, { resource: "Preço Base", simple: "R$ 14,90", essencial: "R$ 31,90", elite: "R$ 45,90" }] },
    realResults: { title: "Resultados Reais <span class='text-[#FF0000]'>Método GH</span>", subtitle: "Veja o que nossos alunos alcançaram com o Método GH.", ageSuffix: "anos"},
    testimonials: [
        { planName: "Simple GH", personName: "Lucas P.", age: 22, rating: 5, gain: "+2.5 cm", quote: "Comecei com o Simple GH e já notei diferença na postura e ganhei 2.5cm! Muito bom para quem quer começar.", bgColorClass: "bg-slate-800", textColorClass:"text-white"},
        { planName: "Essencial GH", personName: "Fernanda L.", age: 28, rating: 5, gain: "+6 cm", quote: "O Essencial GH mudou minha vida! Ganhei 6cm e minha confiança disparou. Recomendo demais!", bgColorClass: "bg-red-700", textColorClass:"text-white"},
        { planName: "Elite GH", personName: "Ricardo S.", age: 33, rating: 5, gain: "+9 cm", quote: "Com o Elite GH e o acompanhamento, cheguei a 9cm de ganho! Nunca imaginei ser possível. Vale cada centavo.", bgColorClass: "bg-purple-700", textColorClass:"text-white"},
    ],
    statsHighlights: [ { value: "95%", description: "dos usuários relatam melhora na postura" }, { value: "4-7 cm", description: "ganho médio com o Plano Essencial GH" }, { value: "10.000+", description: "pessoas já usaram o Método GH" }],
    faqSection: { title: "Perguntas Frequentes <span class='text-[#FF0000]'>Método GH</span>", subtitle: "Tire suas dúvidas sobre os planos e o funcionamento do Método GH.", footerText: "Ainda tem dúvidas sobre qual plano escolher?", footerSubtext: "Consulte os detalhes dos planos ou entre em contato por outros canais se disponíveis."},
    faq: [
        { question: "O Método GH funciona para qualquer idade?", answer: "O Método GH foca na descompressão da coluna e otimização postural, o que pode resultar em ganho de altura mesmo após o fechamento das placas de crescimento. Os resultados variam, mas muitos adultos veem melhoras significativas." },
        { question: "Quanto tempo até ver resultados com o Método GH?", answer: "Muitos usuários relatam melhora na postura e bem-estar em poucas semanas. Ganhos de altura perceptíveis podem levar de 4 a 12 semanas, dependendo da sua dedicação, genética e plano escolhido." },
        { question: "Os exercícios do Método GH são difíceis?", answer: "Os exercícios são progressivos e adaptáveis. O foco é na execução correta e consistente, não na dificuldade extrema. Todos os planos vêm com instruções claras." },
        { question: "Preciso de equipamentos para o Método GH?", answer: "A maioria dos exercícios, especialmente nos planos Simple e Essencial, pode ser feita em casa sem equipamentos. O plano Elite pode sugerir alguns acessórios simples." },
        { question: "Os ganhos de altura são permanentes?", answer: "Sim, os ganhos obtidos pela correção postural e descompressão são duradouros, desde que você mantenha bons hábitos e, idealmente, alguns dos exercícios chave como manutenção." },
    ],
    footer: { ctaButtonPlans: "Acessar Método GH Essencial", ctaButtonResults: "INICIAR MEU CRESCIMENTO", copyright: "Método GH. Todos os direitos reservados." }
  },
  en: {
    header: { title: "GH Method", quizSubtitle: "Personalized GH Diagnosis" },
    landingPage: { title: "GH METHOD", subtitle: "Your body is hiding up to 8cm of height. And you can unlock it now.", description1: "You've been misled: it's not that you stopped growing—it's that your structure has been compressed. The truth no one told you.", description2: "The GH Method doesn't promise miracles. It corrects what life has bent and releases your real height in just 30 days.", ctaButtonText: "REVEAL MY POTENTIAL", stats: [{ value: "3-8 cm", label: "Height gain" }, { value: "20 min", label: "Per day" }, { value: "30 days", label: "Complete program" }], diagnosisTime: "Personalized diagnosis in 2 minutes" },
    quizController: { title: "Diagnosis GH <span class='text-[#FF0000]'>Method</span>", subtitle: "Discover your growth potential in the coming months.", questionLabel: (c,t) => `Question ${c} of ${t}`, lastStepLabel: "Final Step" },
    quizQuestions: quizQuestionsEN,
    finalHeightQuestion: {
        ...finalHeightQuestionTemplate,
        text: "What is your current height (in cm)?",
        placeholder: "e.g., 170"
    },
    analysisLoading: { title: "Analyzing Your GH Growth Potential", subtitle: "Please wait while our algorithm processes your answers", progressLabel: "Progress", processingLabel: "Processing data in real-time...", factsTitle: "Facts about the GH Method:"},
    analysisLoadingSteps: [
        { title: "Analyzing your data...", details: "Processing your answers for the GH diagnosis.", progress: 25, fact: "The GH Method combines specific stretches and posture correction.", icon: "lightning-bolt" },
        { title: "Assessing decompression potential...", details: "Calculating the margin for postural growth.", progress: 60, fact: "Many users report improved posture within a few weeks.", icon: "lightning-bolt" },
        { title: "Generating your GH result...", details: "Preparing your personalized height gain estimate.", progress: 85, fact: "Consistency is key to maximizing results with the GH Method.", icon: "lightning-bolt" },
        { title: "GH Diagnosis Complete!", details: "Your personalized result is ready.", progress: 100, fact: "Get ready to start your growth journey!", icon: "check-circle" }
    ],
    analysis: { defaultGrowth: "7cm", lowGrowth: "3-5cm", highGrowth: "8-10cm" },
    personalizedResults: { 
        title: (gain: string) => `Your body has the potential to<br/>gain up to <span class='text-[#FF0000]'>+${gain}</span> in Height.`,
        currentHeightLabel: "Current height",
        potentialHeightLabel: "Potential height",
        projectionTitle: "Growth projection",
        projectionSubtitle: (gain: string) => `Projection based on a potential of +${gain} in 60 days`,
        todayLabel: "Today",
        daysLabel: (days: number) => `${days}d`,
        summary: (potentialHeight: number, thirtyDayHeight: number) => `Your body has the potential to reach <strong class="text-white">${potentialHeight}cm</strong> in <strong class="text-[#FF0000]">60 days</strong>, and you can already reach up to <strong class="text-[#FF0000]">${thirtyDayHeight}cm</strong> in just <strong class="text-[#FF0000]">30 days</strong>. Potential <strong class="text-[#FF0000]">75%</strong> greater than other users aged <strong class="text-[#FF0000]">23 years</strong>.`,
        progressLabel: (unlocked: number, total: number) => `${unlocked} cm of ${total} cm unlocked`,
        ctaButton: "START MY GROWTH"
    },
    plansDisplay: { title: "Choose Your Ideal <span class='text-[#FF0000]'>GH Method</span> Plan", subtitle: "Start your growth journey with the perfect plan for your goals.", offerEndsText: "Special launch offer ends in:", offerEndedText: "Offer ended!", paymentInfoText: "Secure payment via Kiwify. Access is granted immediately after confirmation.", timeUnits: {days: "days", hours: "hours", minutes: "minutes", seconds: "seconds"}},
    plans: plansEN,
    upsellModal: { title: "Excellent Choice!", subtitle: (planName) => `Boost Your <span class="text-white">${planName.split(' ')[1]}</span> Journey`, description: "Join the GH Community and accelerate your results with exclusive support and premium content.", totalLabel: "Total", communityLabel: "GH Community", ctaButton: "I WANT THE GH COMMUNITY", declineButton: (planName) => `Continue with my ${planName} only`},
    communityDetails: { price: "1.90", features: [{ icon: "user-circle", text: "Exclusive GH Community" }, { icon: "home", text: "Lifetime access, pay once." }, { icon: "puzzle", text: "Monthly challenges and bonus content." }, { icon: "users", text: "Group mentoring and experience sharing." }], footerPoints: ["Immediate Access", "No Monthly Fees", "Continuous Support"] },
    guarantee: { title: "GH Method Satisfaction Guarantee", description: "Our commitment is to your results. Follow the method as instructed. If you see NO improvement in posture or well-being in 30 days, contact support." },
    comparisonTable: { title: "Comparison of <span class='text-[#FF0000]'>GH</span> Plans", headers: ["Features", "Simple", "Essential", "Elite"], rows: [{ resource: "Gain Potential", simple: "Up to 3cm", essencial: "Up to 7cm", elite: "Up to 12cm" }, { resource: "Estimated Duration", simple: "4-8 weeks", essencial: "8-12 weeks", elite: "12+ weeks (VIP)" }, { resource: "Support", simple: "Community", essencial: "Email & Premium Community", elite: "Individual VIP" }, { resource: "Customization", simple: "Low", essencial: "Medium", elite: "High (1:1)" }, { resource: "Base Price", simple: "$5.90", essencial: "$9.90", elite: "$14.90" }] },
    realResults: { title: "Real Results with the <span class='text-[#FF0000]'>GH Method</span>", subtitle: "See what our students have achieved with the GH Method.", ageSuffix: "years old"},
    testimonials: [
        { planName: "Simple GH", personName: "John D.", age: 22, rating: 5, gain: "+2.5 cm", quote: "Started with Simple GH and already noticed a difference in posture and gained 2.5cm! Great for beginners.", bgColorClass: "bg-slate-800", textColorClass:"text-white"},
        { planName: "Essential GH", personName: "Sarah P.", age: 28, rating: 5, gain: "+6 cm", quote: "Essential GH changed my life! I gained 6cm and my confidence soared. Highly recommend it!", bgColorClass: "bg-red-700", textColorClass:"text-white"},
        { planName: "Elite GH", personName: "Mike S.", age: 33, rating: 5, gain: "+9 cm", quote: "With Elite GH and the coaching, I gained 9cm! Never thought it was possible. Worth every penny.", bgColorClass: "bg-purple-700", textColorClass:"text-white"},
    ],
    statsHighlights: [ { value: "95%", description: "of users report improved posture" }, { value: "4-7 cm", description: "average gain with the Essential GH Plan" }, { value: "10,000+", description: "people have already used the GH Method" }],
    faqSection: { title: "Frequently Asked Questions <span class='text-[#FF0000]'>GH Method</span>", subtitle: "Clear your doubts about the plans and how the GH Method works.", footerText: "Still have questions about which plan to choose?", footerSubtext: "Consult the plan details or contact us through other available channels."},
    faq: [
        { question: "Does the GH Method work for any age?", answer: "The GH Method focuses on spinal decompression and postural optimization, which can result in height gain even after growth plates have closed. Results vary, but many adults see significant improvements." },
        { question: "How long until I see results with the GH Method?", answer: "Many users report improved posture and well-being within a few weeks. Noticeable height gains can take 4 to 12 weeks, depending on your dedication, genetics, and chosen plan." },
        { question: "Are the GH Method exercises difficult?", answer: "The exercises are progressive and adaptable. The focus is on correct and consistent execution, not extreme difficulty. All plans come with clear instructions." },
        { question: "Do I need equipment for the GH Method?", answer: "Most exercises, especially in the Simple and Essential plans, can be done at home without equipment. The Elite plan may suggest some simple accessories." },
        { question: "Are the height gains permanent?", answer: "Yes, the gains obtained through postural correction and decompression are long-lasting, provided you maintain good habits and, ideally, some of the key exercises for maintenance." },
    ],
    footer: { ctaButtonPlans: "Access Essential GH Method", ctaButtonResults: "START MY GROWTH", copyright: "GH Method. All rights reserved." }
  },
  es: {
    header: { title: "Método GH", quizSubtitle: "Diagnóstico Personalizado GH" },
    landingPage: { title: "MÉTODO GH", subtitle: "Tu cuerpo está ocultando hasta 8cm de altura. Y puedes desbloquearlo ahora.", description1: "Te han engañado: no es que hayas dejado de crecer, es que tu estructura se ha comprimido. La verdad que nadie te contó.", description2: "El Método GH no promete milagros. Corrige lo que la vida ha torcido y libera tu altura real en solo 30 días.", ctaButtonText: "REVELAR MI POTENCIAL", stats: [{ value: "3-8 cm", label: "Ganancia de altura" }, { value: "20 min", label: "Por día" }, { value: "30 días", label: "Programa completo" }], diagnosisTime: "Diagnóstico personalizado en 2 minutos" },
    quizController: { title: "Diagnóstico Método <span class='text-[#FF0000]'>GH</span>", subtitle: "Descubre tu potencial de crecimiento en los próximos meses.", questionLabel: (c,t) => `Pregunta ${c} de ${t}`, lastStepLabel: "Último Paso" },
    quizQuestions: quizQuestionsES,
    finalHeightQuestion: {
        ...finalHeightQuestionTemplate,
        text: "¿Cuál es tu altura actual (en cm)?",
        placeholder: "Ej: 170"
    },
    analysisLoading: { title: "Analizando Tu Potencial de Crecimiento GH", subtitle: "Por favor, espera mientras nuestro algoritmo procesa tus respuestas", progressLabel: "Progreso", processingLabel: "Procesando datos en tiempo real...", factsTitle: "Datos sobre el Método GH:"},
    analysisLoadingSteps: [
        { title: "Analizando tus datos...", details: "Procesando tus respuestas para el diagnóstico GH.", progress: 25, fact: "El Método GH combina estiramientos específicos y corrección postural.", icon: "lightning-bolt" },
        { title: "Evaluando el potencial de descompresión...", details: "Calculando el margen de crecimiento postural.", progress: 60, fact: "Muchos usuarios reportan una mejor postura en pocas semanas.", icon: "lightning-bolt" },
        { title: "Generando tu resultado GH...", details: "Preparando tu estimación de ganancia de altura personalizada.", progress: 85, fact: "La constancia es clave para maximizar los resultados con el Método GH.", icon: "lightning-bolt" },
        { title: "¡Diagnóstico GH Completado!", details: "Tu resultado personalizado está listo.", progress: 100, fact: "¡Prepárate para comenzar tu viaje de crecimiento!", icon: "check-circle" }
    ],
    analysis: { defaultGrowth: "7cm", lowGrowth: "3-5cm", highGrowth: "8-10cm" },
    personalizedResults: { 
        title: (gain: string) => `Tu cuerpo tiene potencial para<br/>ganar hasta <span class='text-[#FF0000]'>+${gain}</span> de Altura.`,
        currentHeightLabel: "Altura actual",
        potentialHeightLabel: "Altura potencial",
        projectionTitle: "Proyección de crecimiento",
        projectionSubtitle: (gain: string) => `Proyección basada en un potencial de +${gain} en 60 días`,
        todayLabel: "Hoy",
        daysLabel: (days: number) => `${days}d`,
        summary: (potentialHeight: number, thirtyDayHeight: number) => `Tu cuerpo tiene el potencial de alcanzar <strong class="text-white">${potentialHeight}cm</strong> en <strong class="text-[#FF0000]">60 días</strong>, pudiendo llegar hasta <strong class="text-[#FF0000]">${thirtyDayHeight}cm</strong> en solo <strong class="text-[#FF0000]">30 días</strong>. Potencial un <strong class="text-[#FF0000]">75%</strong> mayor que otros usuarios de <strong class="text-[#FF0000]">23 años</strong>.`,
        progressLabel: (unlocked: number, total: number) => `${unlocked} cm de ${total} cm desbloqueados`,
        ctaButton: "INICIAR MI CRECIMIENTO"
    },
    plansDisplay: { title: "Elige tu Plan Ideal del <span class='text-[#FF0000]'>Método GH</span>", subtitle: "Comienza tu viaje de crecimiento con el plan perfecto para tus metas.", offerEndsText: "La oferta especial de lanzamiento termina en:", offerEndedText: "¡Oferta terminada!", paymentInfoText: "Pago seguro a través de Kiwify. Acceso inmediato tras la confirmación.", timeUnits: {days: "días", hours: "horas", minutes: "minutos", seconds: "segundos"}},
    plans: plansES,
    upsellModal: { title: "¡Excelente Elección!", subtitle: (planName) => `Potencia tu Viaje <span class="text-white">${planName.split(' ')[1]}</span>`, description: "Únete a la Comunidad GH y acelera tus resultados con soporte exclusivo y contenido premium.", totalLabel: "Total", communityLabel: "Comunidad GH", ctaButton: "QUIERO LA COMUNIDAD GH", declineButton: (planName) => `Continuar solo con mi ${planName}`},
    communityDetails: { price: "1.90", features: [{ icon: "user-circle", text: "Comunidad Exclusiva GH" }, { icon: "home", text: "Acceso de por vida, un solo pago." }, { icon: "puzzle", text: "Desafíos mensuales y contenido extra." }, { icon: "users", text: "Mentorías grupales e intercambio de experiencias." }], footerPoints: ["Acceso Inmediato", "Sin Mensualidades", "Soporte Continuo"] },
    guarantee: { title: "Garantía de Satisfacción del Método GH", description: "Nuestro compromiso es con tus resultados. Sigue el método como se indica. Si no notas NINGUNA mejora postural o de bienestar en 30 días, contacta a soporte." },
    comparisonTable: { title: "Comparativa de Planes <span class='text-[#FF0000]'>GH</span>", headers: ["Características", "Simple", "Esencial", "Elite"], rows: [{ resource: "Ganancia Potencial", simple: "Hasta 3cm", essencial: "Hasta 7cm", elite: "Hasta 12cm" }, { resource: "Duración Estimada", simple: "4-8 semanas", essencial: "8-12 semanas", elite: "12+ semanas (VIP)" }, { resource: "Soporte", simple: "Comunidad", essencial: "Email y Comunidad Premium", elite: "Individual VIP" }, { resource: "Personalización", simple: "Baja", essencial: "Media", elite: "Alta (1:1)" }, { resource: "Precio Base", simple: "€5.90", essencial: "€9.90", elite: "€14.90" }] },
    realResults: { title: "Resultados Reales con el <span class='text-[#FF0000]'>Método GH</span>", subtitle: "Mira lo que nuestros alumnos han logrado con el Método GH.", ageSuffix: "años"},
    testimonials: [
        { planName: "Simple GH", personName: "Carlos G.", age: 22, rating: 5, gain: "+2.5 cm", quote: "¡Empecé con el Simple y ya noté una diferencia en mi postura y gané 2.5 cm! Genial para empezar.", bgColorClass: "bg-slate-800", textColorClass:"text-white"},
        { planName: "Esencial GH", personName: "Laura M.", age: 28, rating: 5, gain: "+6 cm", quote: "¡El Esencial cambió mi vida! Gané 6 cm y mi confianza se disparó. ¡Lo recomiendo totalmente!", bgColorClass: "bg-red-700", textColorClass:"text-white"},
        { planName: "Elite GH", personName: "Javier R.", age: 33, rating: 5, gain: "+9 cm", quote: "¡Con el Elite y el seguimiento, alcancé los 9 cm de ganancia! Nunca imaginé que fuera posible. Vale cada céntimo.", bgColorClass: "bg-purple-700", textColorClass:"text-white"},
    ],
    statsHighlights: [ { value: "95%", description: "de los usuarios reportan una mejor postura" }, { value: "4-7 cm", description: "ganancia promedio con el Plan Esencial GH" }, { value: "10.000+", description: "personas ya han utilizado el Método GH" }],
    faqSection: { title: "Preguntas Frequentes <span class='text-[#FF0000]'>Método GH</span>", subtitle: "Resuelve tus dudas sobre los planes y el funcionamiento del Método GH.", footerText: "¿Aún tienes dudas sobre qué plan elegir?", footerSubtext: "Consulta los detalles de los planes o contáctanos por otros canales disponibles."},
    faq: [
        { question: "¿El Método GH funciona para cualquier edad?", answer: "El Método GH se centra en la descompresión de la columna y la optimización postural, lo que puede resultar en una ganancia de altura incluso después de que las placas de crecimiento se hayan cerrado. Los resultados varían, pero muchos adultos ven mejoras significativas." },
        { question: "¿Cuánto tiempo hasta ver resultados con el Método GH?", answer: "Muchos usuarios reportan una mejora en la postura y el bienestar en pocas semanas. Las ganancias de altura notables pueden tardar de 4 a 12 semanas, dependiendo de tu dedicación, genética y el plan elegido." },
        { question: "¿Son difíciles los ejercicios del Método GH?", answer: "Los ejercicios son progresivos y adaptables. El enfoque está en la ejecución correcta y constante, no en la dificultad extrema. Todos los planes vienen con instrucciones claras." },
        { question: "¿Necesito equipo para el Método GH?", answer: "La mayoría de los ejercicios, especialmente en los planes Simple y Esencial, se pueden hacer en casa sin equipo. El plan Elite puede sugerir algunos accesorios simples." },
        { question: "¿Son permanentes las ganancias de altura?", answer: "Sí, las ganancias obtenidas mediante la corrección postural y la descompresión son duraderas, siempre y cuando mantengas buenos hábitos e, idealmente, algunos de los ejercicios clave como mantenimiento." },
    ],
    footer: { ctaButtonPlans: "Acceder al Método GH Esencial", ctaButtonResults: "INICIAR MI CRECIMIENTO", copyright: "Método GH. Todos los derechos reservados." }
  }
};