import React, { useState, useEffect } from 'react';
import { ANALYSIS_LOADING_STEPS_GH } from '../../constants'; // Updated to GH
import { AnalysisStep } from '../../types';

interface AnalysisLoadingOGProps { // Prop interface name remains
  onAnalysisComplete: () => void;
}

const AnalysisLoadingOG: React.FC<AnalysisLoadingOGProps> = ({ onAnalysisComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentAnalysisStep = ANALYSIS_LOADING_STEPS_GH[currentStepIndex]; // GH steps

  useEffect(() => {
    if (currentStepIndex < ANALYSIS_LOADING_STEPS_GH.length -1) { // GH steps
      const timer = setTimeout(() => {
        setCurrentStepIndex(prevIndex => prevIndex + 1);
      }, 2500); 
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        onAnalysisComplete();
      }, 2000);
      return () => clearTimeout(finalTimer);
    }
  }, [currentStepIndex, onAnalysisComplete]);

  if (!currentAnalysisStep) return null;

  return (
    <div className="w-full max-w-xl mx-auto text-center py-12 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Analisando Seu Potencial de Crescimento GH
      </h2>
      <p className="text-gray-400 mb-10">
        Por favor, aguarde enquanto nosso algoritmo processa suas respostas
      </p>

      <div className="mb-8 px-4">
        <div className="flex justify-between text-sm text-gray-300 mb-1">
          <span>Progresso</span>
          <span>{currentAnalysisStep.progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3.5">
          <div
            className="bg-[#FF0000] h-3.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${currentAnalysisStep.progress}%` }}
          ></div>
        </div>
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
            Processando dados em tempo real...
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-xl animate-fade-in">
        <h3 className="text-lg font-semibold text-[#FF0000] mb-2">Fatos sobre o Método GH:</h3>
        <p className="text-gray-300 text-sm md:text-base">{currentAnalysisStep.fact}</p>
      </div>
    </div>
  );
};

export default AnalysisLoadingOG;