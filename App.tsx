import React, { useState, useCallback, useEffect } from 'react';
import { FullQuizData, PlanGH, AppStep } from './types';
import { APP_STEPS_GH } from './constants';
import { useLocalization } from './src/contexts/LocalizationContext';

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
import LanguageSelector from './src/components/LanguageSelector';

// Utility to play sound
const playSound = (soundId: string) => {
  const sound = document.getElementById(soundId) as HTMLAudioElement;
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(error => console.warn(`Error playing sound ${soundId}:`, error));
  } else {
    console.warn(`Sound element with id ${soundId} not found.`);
  }
};

const App: React.FC = () => {
  const { t } = useLocalization();
  const [currentStep, setCurrentStep] = useState<AppStep>(APP_STEPS_GH.LANDING_GH);
  const [fullQuizAnswers, setFullQuizAnswers] = useState<FullQuizData | null>(null);
  const [showUpsellModalForPlan, setShowUpsellModalForPlan] = useState<PlanGH | null>(null);
  const [estimatedGrowthResult, setEstimatedGrowthResult] = useState<string>("5-7cm");

  const handleStartQuiz = useCallback(() => {
    playSound('audio-click');
    setCurrentStep(APP_STEPS_GH.QUIZ_MULTI_STEP_GH);
  }, []);

  const handleQuizFlowComplete = useCallback((data: FullQuizData) => {
    playSound('audio-click');
    setFullQuizAnswers(data);
    
    // This logic can be moved to translations if estimations differ by region
    let growth = t.analysis.defaultGrowth;
    if (data.finalHeightGH) {
        const finalH = parseInt(data.finalHeightGH);
        if (finalH > 185) growth = t.analysis.lowGrowth;
        else if (finalH < 165) growth = t.analysis.highGrowth;
    }
    setEstimatedGrowthResult(growth);
    setCurrentStep(APP_STEPS_GH.ANALYSIS_LOADING_GH);
  }, [t]);

  const handleAnalysisComplete = useCallback(() => {
    playSound('audio-click');
    setCurrentStep(APP_STEPS_GH.PERSONALIZED_RESULTS_GH);
  }, []);

  const handleShowPlans = useCallback(() => {
    setCurrentStep(APP_STEPS_GH.PLANS_DISPLAY_GH);
  }, []);
  
  const handlePlanSelectForUpsell = useCallback((plan: PlanGH) => {
    playSound('audio-click');
    if (plan.purchaseLinkCommunity && (plan.id === 'gh_essencial' || plan.id === 'gh_elite' || plan.id === 'gh_simple')) {
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
    setCurrentStep(APP_STEPS_GH.LANDING_GH);
  }, []);
  
  const recommendedPlanLink = t.plans.find(p => p.id === 'gh_essencial')?.purchaseLink || t.plans[0].purchaseLink;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  
  const isLanding = currentStep === APP_STEPS_GH.LANDING_GH;

  return (
    <div className={`min-h-screen bg-black flex flex-col items-center ${isLanding ? 'justify-center' : 'justify-start'} p-0 selection:bg-[#FF0000] selection:text-white`}>
      {!isLanding && (
         <header className="w-full bg-black py-4 md:py-6 text-center sticky top-0 z-40 shadow-md flex justify-between items-center px-4">
          <div></div> {/* Spacer */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#FF0000]">{t.header.title}</h1>
            {currentStep === APP_STEPS_GH.QUIZ_MULTI_STEP_GH && <p className="text-md text-gray-400 mt-1">{t.header.quizSubtitle}</p>}
          </div>
          <LanguageSelector />
        </header>
      )}

      <main className={`w-full flex-grow flex flex-col items-center ${isLanding ? 'justify-center' : 'justify-start pt-6 pb-24'} px-4`}>
        {isLanding && (
          <>
            <div className="absolute top-4 right-4 z-10">
              <LanguageSelector />
            </div>
            <LandingPageOG
              content={t.landingPage}
              onStartQuiz={handleStartQuiz} 
            />
          </>
        )}
        {currentStep === APP_STEPS_GH.QUIZ_MULTI_STEP_GH && (
          <QuizController 
            questions={t.quizQuestions} 
            finalQuestion={t.finalHeightQuestion}
            onQuizFlowComplete={handleQuizFlowComplete} 
            uiText={t.quizController}
          />
        )}
        {currentStep === APP_STEPS_GH.ANALYSIS_LOADING_GH && (
          <AnalysisLoadingOG 
            steps={t.analysisLoadingSteps}
            onAnalysisComplete={handleAnalysisComplete}
            uiText={t.analysisLoading}
          />
        )}
        {currentStep === APP_STEPS_GH.PERSONALIZED_RESULTS_GH && fullQuizAnswers && (
          <PersonalizedResultsOG
            quizData={fullQuizAnswers}
            estimatedGain={estimatedGrowthResult}
            uiText={t.personalizedResults}
            finalHeightQuestionId={t.finalHeightQuestion.id}
          />
        )}
        {currentStep === APP_STEPS_GH.PLANS_DISPLAY_GH && (
          <>
            <PlansDisplayOG 
              plans={t.plans} 
              onSelectPlan={handlePlanSelectForUpsell} 
              uiText={t.plansDisplay}
            /> 
            <div className="mt-12 space-y-12 w-full max-w-4xl">
              <GuaranteeSectionOG title={t.guarantee.title} description={t.guarantee.description} />
              <ComparisonTableOG headers={t.comparisonTable.headers} rows={t.comparisonTable.rows} uiText={t.comparisonTable} />
              <RealResultsSectionOG testimonials={t.testimonials} uiText={t.realResults} />
              <StatsHighlightsOG stats={t.statsHighlights} />
              <FaqSectionOG faqs={t.faq} uiText={t.faqSection} />
            </div>
          </>
        )}
      </main>

      {showUpsellModalForPlan && showUpsellModalForPlan.purchaseLinkCommunity && (
        <UpsellModalOG
          isOpen={!!showUpsellModalForPlan}
          onClose={handleCloseUpsellModal}
          plan={showUpsellModalForPlan}
          communityDetails={t.communityDetails}
          uiText={t.upsellModal}
        />
      )}
      
      {(currentStep === APP_STEPS_GH.PERSONALIZED_RESULTS_GH || currentStep === APP_STEPS_GH.PLANS_DISPLAY_GH) && (
        <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm p-3 border-t border-gray-700 flex justify-center items-center z-50">
          {currentStep === APP_STEPS_GH.PERSONALIZED_RESULTS_GH ? (
            <button
              onClick={() => {
                playSound('audio-click');
                handleShowPlans();
              }}
              className="px-5 py-3 bg-[#FF0000] text-white font-semibold rounded-lg shadow-md hover:bg-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-opacity-50 transition-colors duration-300 animate-pulse-red text-center text-sm sm:text-base w-full max-w-xs"
            >
              {t.footer.ctaButtonResults}
            </button>
          ) : (
            <a
              href={recommendedPlanLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('audio-click')}
              className="px-5 py-3 bg-[#FF0000] text-white font-semibold rounded-lg shadow-md hover:bg-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:ring-opacity-50 transition-colors duration-300 animate-pulse-red text-center text-sm sm:text-base"
            >
              {t.footer.ctaButtonPlans}
            </a>
          )}
        </div>
      )}
      
      {!isLanding && (
        <footer className="w-full text-center py-6 bg-black border-t border-gray-800 text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}.</p>
        </footer>
      )}
    </div>
  );
};

export default App;