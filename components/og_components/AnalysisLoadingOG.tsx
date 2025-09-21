import React, { useState, useEffect } from 'react';
import { AnalysisStep } from '../../types';
import AnimatedProgressBar from './AnimatedProgressBar';

interface AnalysisLoadingOGProps {
  steps: AnalysisStep[];
  uiText: {
    title: string;
    subtitle: string;
    progressLabel: string;
    processingLabel: string;
    factsTitle: string;
  };
  onAnalysisComplete: () => void;
}

const AnalysisLoadingOG: React.FC<AnalysisLoadingOGProps> = ({ steps, uiText, onAnalysisComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentAnalysisStep = steps[currentStepIndex];

  useEffect(() => {
    if (currentStepIndex < steps.length -1) {
      const timer = setTimeout(() => {
        setCurrentStepIndex(prevIndex => prevIndex + 1);
      }, 1200); 
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        onAnalysisComplete();
      }, 1200);
      return () => clearTimeout(finalTimer);
    }
  }, [currentStepIndex, onAnalysisComplete, steps.length]);

  if (!currentAnalysisStep) return null;

  return (
    <div className="w-full max-w-xl mx-auto text-center py-12 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        {uiText.title}
      </h2>
      <p className="text-gray-400 mb-10">
        {uiText.subtitle}
      </p>

      <div className="mb-8 px-4">
        <AnimatedProgressBar 
            label={uiText.progressLabel}
            targetProgress={currentAnalysisStep.progress}
        />
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-xl mb-8 min-h-[150px] flex flex-col justify-center items-center text-center quiz-question-container-animate" key={currentStepIndex}>
        <div className="flex items-center text-[#FF0000] text-xl md:text-2xl font-semibold mb-2">
           {currentAnalysisStep.icon && (
             <svg className="w-6 h-6 mr-2 animate-pulse"><use href={`#icon-${currentAnalysisStep.icon}`} /></svg>
           )}
          {currentAnalysisStep.title}
        </div>
        <p className="text-gray-300 text-sm md:text-base mb-2">{currentAnalysisStep.details}</p>
        <div className="flex items-center text-gray-500 text-xs">
             <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-ping"></div>
            {uiText.processingLabel}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-xl animate-fade-in">
        <h3 className="text-lg font-semibold text-[#FF0000] mb-2">{uiText.factsTitle}</h3>
        <p className="text-gray-300 text-sm md:text-base">{currentAnalysisStep.fact}</p>
      </div>
    </div>
  );
};

export default AnalysisLoadingOG;