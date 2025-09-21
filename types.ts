
export interface QuizAnswer {
  [key: string]: string | string[] | undefined; // Allow string array for multi-select
}
// This will store all answers from the multi-step quiz & final height input
export interface FullQuizData extends QuizAnswer {
  finalHeightGH?: string; // Explicitly define finalHeightGH to ensure it's treated as a string
  // q1, q2, ... q8 will be dynamic keys based on question IDs from QuizAnswer
}

export interface PlanGH { // Renamed from PlanOG
  id: string;
  name: string;
  price: string;
  originalPrice?: string; // For strikethrough price
  duration: string;
  gainEstimate: string;
  features: string[];
  purchaseLink: string;
  purchaseLinkCommunity?: string; // Link if community is added
  highlight?: 'RECOMENDADO' | 'INICIANTE' | 'PREMIUM' | false | string; // Allow string for GH highlights
  borderColor?: string;
  buttonColor?: string;
  badgeColor?: string;
  textColor?: string;
}

export enum AppStep { // Values updated for GH
  LANDING_GH = 'landing_gh',
  QUIZ_MULTI_STEP_GH = 'quiz_multi_step_gh',
  ANALYSIS_LOADING_GH = 'analysis_loading_gh',
  PERSONALIZED_RESULTS_GH = 'personalized_results_gh',
  PLANS_DISPLAY_GH = 'plans_display_gh',
}

// ChatMessage interface removed

export interface MultiStepQuizQuestion {
  id: string; // e.g., "q1_sitting_time"
  text: string;
  type: 'radio' | 'checkbox' | 'number_input';
  options?: Array<{ label: string; value: string }>;
  placeholder?: string; // For number_input
  unit?: string; // For number_input
  isMultiSelect?: boolean; // for checkbox type
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  planName: string; 
  personName: string;
  age: number;
  rating: number; // 1-5
  gain: string; 
  quote: string;
  bgColorClass?: string;
  textColorClass?: string;
}

export interface AnalysisStep {
  title: string;
  details: string;
  progress: number; // 0-100
  fact: string;
  icon?: string; 
}

export interface UpsellModalInfo { // Kept for structure, may be GHCommunity related
  basePlan: PlanGH;
  communityPrice: string;
  totalPrice: string;
  communityPurchaseLink: string;
}

// Old types - to be removed or adapted if any part is reused
export interface QuizData { // This is for the OLD 3-question quiz.
  height: string;
  weight: string;
  age: string;
}

export interface Plan { // This is for the OLD plans.
  id: string;
  name: string;
  price: string;
  growthEstimate: string;
  purchaseLink: string;
  highlight?: boolean;
  borderColor: string;
  buttonColor: string;
  textColor?: string;
}

export interface QuizQuestionData { // This is for the OLD 3-question quiz.
  id: 'height' | 'weight' | 'age';
  label: string;
  placeholder: string;
  type: 'number' | 'text';
  unit?: string;
}