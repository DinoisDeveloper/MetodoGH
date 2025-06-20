import React from 'react';
import { FullQuizData } from '../../types';
import { Button } from '../Button';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';
import { FINAL_HEIGHT_QUESTION_GH } from '../../constants'; // To get the correct key for height

interface PersonalizedResultsOGProps { // Prop interface name remains
  quizData: FullQuizData;
  estimatedGain: string; 
  onProceedToPlans: () => void;
  onRestart: () => void;
  // onOpenChat prop removed
}

const PersonalizedResultsOG: React.FC<PersonalizedResultsOGProps> = ({
  quizData,
  estimatedGain,
  onProceedToPlans,
  onRestart,
  // onOpenChat, // Prop removed
}) => {
  const currentHeight = parseInt(quizData.finalHeightGH || "0", 10); 
  const gainValue = parseInt(estimatedGain.match(/\d+/)?.[0] || "0", 10);
  const potentialHeight = currentHeight + gainValue;

  return (
    <div className="w-full max-w-2xl mx-auto text-center py-8 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Seu Resultado <span className="text-[#FF0000]">Personalizado GH</span>
      </h2>
      <p className="text-gray-400 mb-8">
        Com base na sua análise, veja seu potencial de crescimento com o Método GH
      </p>

      <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl mb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
          Você pode ganhar até <span className="text-[#FF0000] font-bold">{estimatedGain}</span> com o Método GH
        </h3>
        <p className="text-gray-300 mb-8">
          Sua estrutura tem potencial para este ganho com dedicação em algumas semanas.
        </p>

        <div className="flex flex-col sm:flex-row justify-around items-center gap-4 mb-8">
          <div className="bg-gray-700 p-4 rounded-lg text-center w-full sm:w-1/3 shadow-md">
            <p className="text-sm text-gray-400 mb-1">Sua altura atual</p>
            <p className="text-4xl font-bold text-white">{currentHeight}cm</p>
          </div>
          <div className="text-[#FF0000] text-3xl font-bold transform sm:rotate-0 rotate-90 my-2 sm:my-0">
            &rarr;
          </div>
          <div className="bg-[#FF0000] p-4 rounded-lg text-center w-full sm:w-1/3 shadow-md">
            <p className="text-sm text-white opacity-80 mb-1">Seu potencial com GH</p>
            <p className="text-4xl font-bold text-white">{potentialHeight}cm</p>
          </div>
        </div>
        
         <div className="w-full h-10 bg-gray-700 rounded-full flex items-center mb-8 relative shadow-inner overflow-hidden">
            <div 
                className="h-full bg-[#FF0000] rounded-full flex items-center justify-end pr-2 transition-all duration-1000 ease-out"
                style={{ width: `${(potentialHeight / (potentialHeight + 5)) * 100}%` }} 
            >
                <span className="text-white text-sm font-semibold">{potentialHeight}cm</span>
            </div>
            <div 
                className="absolute left-0 top-0 h-full bg-gray-600 rounded-l-full flex items-center justify-start pl-2"
                style={{ width: `${(currentHeight / (potentialHeight + 5)) * 80}%` }} 
            >
                 <span className="text-white text-sm font-semibold">{currentHeight}cm</span>
            </div>
             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl p-1 bg-gray-800 rounded-full border-2 border-white">
                <ChevronRightIcon className="w-6 h-6"/>
            </div>
        </div>

        <ul className="space-y-3 text-left mb-8">
          <li className="flex items-center text-gray-300">
            <svg className="w-5 h-5 text-[#FF0000] mr-2 flex-shrink-0"><use href="#icon-check-circle" /></svg>
            <span className="font-semibold text-white">Resultados visíveis</span> em poucas semanas com dedicação diária de <span className="font-semibold text-white">15-20 minutos</span>.
          </li>
          <li className="flex items-center text-gray-300">
            <svg className="w-5 h-5 text-[#FF0000] mr-2 flex-shrink-0"><use href="#icon-check-circle" /></svg>
            O Método GH é seguro e baseado em princípios de <span className="font-semibold text-white">correção postural e descompressão</span>.
          </li>
        </ul>

        <Button
          onClick={onProceedToPlans}
          variant="primary"
          className="w-full !text-lg !py-3.5 rounded-lg shadow-xl animate-pulse-red"
        >
          Ver Planos Método GH <ChevronRightIcon className="inline w-5 h-5 ml-1" />
        </Button>
        <p className="text-xs text-gray-500 mt-2">
          Escolha o plano ideal para sua jornada de crescimento com o Método GH.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
        <Button onClick={onRestart} variant="secondary" className="!px-6 !py-2.5">
          Refazer Diagnóstico GH
        </Button>
        {/* "Falar com Especialista GH" button removed */}
      </div>
    </div>
  );
};

export default PersonalizedResultsOG;