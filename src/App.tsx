import React, { useState, useCallback, useEffect } from 'react';
import { FullQuizData, PlanGH, AppStep } from './types'; // Updated PlanOG to PlanGH
import { APP_STEPS_GH, PLANS_GH, LANDING_PAGE_GH_CONTENT, GUARANTEE_SECTION_GH, COMPARISON_TABLE_GH, TESTIMONIALS_GH, STATS_HIGHLIGHTS_GH, FAQ_DATA_GH } from './constants'; // Updated constants for GH

// OG Components are used structurally but will render GH content
import LandingPageOG from './components/og_components/LandingPageOG'; 
import QuizController from './components/og_components/QuizController';
import AnalysisLoadingOG from './components/og_components/AnalysisLoadingOG';
import PersonalizedResultsOG from './components/og_components/PersonalizedResultsOG';
import PlansDisplayOG from './components/og_components/PlansDisplayOG';
import UpsellModalOG from './components/og_components/UpsellModalOG';

import GuaranteeSectionOG from './components/og_components/infosections/GuaranteeSectionOG';
import ComparisonTableOG from './components/og_components/infosections/ComparisonTableOG';
import RealResultsSectionOG from './components/og_components/infosections/RealResultsSectionOG';
import StatsHighlightsOG from './components/og_components/infosections/StatsHighlightsOG';
import FaqSectionOG from './components/og_components/infosections/FaqSectionOG';

// Utility to play sound
const playSound = (soundId: string) => {
  const sound = document.getElementById(soundId) as HTMLAudioElement;
  if (sound) {
    sound.currentTime = 0; // Rewind to start
    sound.play().catch(error => console.warn(`Error playing sound ${soundId}:`, error));
  } else {
    console.warn(`Sound element with id ${soundId} not found.`);
  }
};

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(APP_STEPS_GH.LANDING_GH); // GH Step
  const [fullQuizAnswers, setFullQuizAnswers] = useState<FullQuizData | null>(null);
  const [showUpsellModalForPlan, setShowUpsellModalForPlan] = useState<PlanGH | null>(null); // PlanGH
  const [estimatedGrowthResult, setEstimatedGrowthResult] = useState<string>("5-7cm"); // Default for GH

  const handleStartQuiz = useCallback(() => {
    playSound('audio-click');
    setCurrentStep(APP_STEPS_GH.QUIZ_MULTI_STEP_GH); // GH Step
  }, []);

  const handleQuizFlowComplete = useCallback((data: FullQuizData) => {
    playSound('audio-click');
    setFullQuizAnswers(data);
    // Basic estimation logic for GH (can be refined)
    let growth = "Até 7cm"; // Default based on Essencial GH
    if (data.finalHeightGH) { // Assuming finalHeight id is finalHeightGH now
        const finalH = parseInt(data.finalHeightGH);
        if (finalH > 185) growth = "Até 3-5cm";
        else if (finalH < 165) growth = "Até 8-10cm";
    }
    setEstimatedGrowthResult(growth);
    setCurrentStep(APP_STEPS_GH.ANALYSIS_LOADING_GH); // GH Step
  }, []);

  const handleAnalysisComplete = useCallback(() => {
    playSound('audio-click');
    setCurrentStep(APP_STEPS_GH.PERSONALIZED_RESULTS_GH); // GH Step
  }, []);

  const handleShowPlans = useCallback(() => {
    playSound('audio-click');
    setCurrentStep(APP_STEPS_GH.PLANS_DISPLAY_GH); // GH Step
  }, []);
  
  const handlePlanSelectForUpsell = useCallback((plan: PlanGH) => { // PlanGH
    playSound('audio-click');
    // Show upsell for GH plans if they have community link defined
    if (plan.purchaseLinkCommunity && (plan.id === 'gh_essencial' || plan.id === 'gh_elite' || plan.id === 'gh_simple')) { // Example: upsell for all GH plans
      setShowUpsellModalForPlan(plan);
    } else {
      window.open(plan.purchaseLink, '_blank');
    }
  }, []);

  const handleCloseUpsellModal = useCallback(() => {
    playSound('audio-click');
    setShowUpsellModalForPlan(null);
  }, []);

  const handleRestartProcess = useCallback(() => {
    playSound('audio-click');
    setFullQuizAnswers(null);
    setCurrentStep(APP_STEPS_GH.LANDING_GH); // GH Step
  }, []);
  
  const recommendedPlanLink = PLANS_GH.find(p => p.id === 'gh_essencial')?.purchaseLink || PLANS_GH[0].purchaseLink;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start p-0 selection:bg-[#FF0000] selection:text-white">
      {currentStep !== APP_STEPS_GH.LANDING_GH && ( // GH Step
         <header className="w-full bg-black py-4 md:py-6 text-center sticky top-0 z-40 shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FF0000]">Método GH</h1>
          {currentStep === APP_STEPS_GH.QUIZ_MULTI_STEP_GH && <p className="text-md text-gray-400 mt-1">Diagnóstico Personalizado GH</p>}
        </header>
      )}

      <main className="w-full flex-grow flex flex-col items-center justify-start pt-6 pb-24 px-4">
        {currentStep === APP_STEPS_GH.LANDING_GH && ( // GH Step
          <LandingPageOG // Component name is OG, but content is GH
            content={LANDING_PAGE_GH_CONTENT} // GH Content
            onStartQuiz={handleStartQuiz} 
          />
        )}
        {currentStep === APP_STEPS_GH.QUIZ_MULTI_STEP_GH && ( // GH Step
          <QuizController onQuizFlowComplete={handleQuizFlowComplete} />
        )}
        {currentStep === APP_STEPS_GH.ANALYSIS_LOADING_GH && ( // GH Step
          <AnalysisLoadingOG onAnalysisComplete={handleAnalysisComplete} />
        )}
        {currentStep === APP_STEPS_GH.PERSONALIZED_RESULTS_GH && fullQuizAnswers && ( // GH Step
          <PersonalizedResultsOG // Component name is OG, but content is GH
            quizData={fullQuizAnswers}
            estimatedGain={estimatedGrowthResult} // This will be GH estimate
            onProceedToPlans={handleShowPlans}
            onRestart={handleRestartProcess}
            // onOpenChat prop removed
          />
        )}
        {currentStep === APP_STEPS_GH.PLANS_DISPLAY_GH && ( // GH Step
          <>
            <PlansDisplayOG plans={PLANS_GH} onSelectPlan={handlePlanSelectForUpsell} /> 
            <div className="mt-12 space-y-12 w-full max-w-4xl">
              <GuaranteeSectionOG title={GUARANTEE_SECTION_GH.title} description={GUARANTEE_SECTION_GH.description} />
              <ComparisonTableOG headers={COMPARISON_TABLE_GH.headers} rows={COMPARISON_TABLE_GH.rows} />
              <RealResultsSectionOG testimonials={TESTIMONIALS_GH} />
              <StatsHighlightsOG stats={STATS_HIGHLIGHTS_GH} />
              <FaqSectionOG faqs={FAQ_DATA_GH} />
            </div>
          </>
        )}
      </main>

      {showUpsellModalForPlan && showUpsellModalForPlan.purchaseLinkCommunity && (
        <UpsellModalOG // Component name is OG, but content is GH
          isOpen={!!showUpsellModalForPlan}
          onClose={handleCloseUpsellModal}
          plan={showUpsellModalForPlan} // PlanGH object
        />
      )}
      
      {currentStep !== APP_STEPS_GH.LANDING_GH && ( // GH Step
        <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm p-3 border-t border-gray-700 flex justify-center items-center space-x-3 z-50">
          <a
            href={recommendedPlanLink} // Essencial GH link
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('audio-click')}
            className="px-5 py-3 bg-[#FF0000] text-white font-semibold rounded-lg shadow-md hover:bg-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-opacity-50 transition-colors duration-300 animate-pulse-red text-center text-sm sm:text-base"
          >
            Acessar Método GH Essencial
          </a>
          {/* Chat button removed */}
        </div>
      )}
      
      {/* Chatbot component rendering removed */}

      {currentStep !== APP_STEPS_GH.LANDING_GH && ( // GH Step
        <footer className="w-full text-center py-6 bg-black border-t border-gray-800 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Método GH. Todos os direitos reservados.</p>
          <p className="text-xs mt-1 px-4">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.</p>
        </footer>
      )}
    </div>
  );
};

export default App;