import React, { useState, useCallback } from 'react';
import { FullQuizData, QuizAnswer } from '../../types';
import { MULTI_STEP_QUIZ_QUESTIONS_GH, FINAL_HEIGHT_QUESTION_GH } from '../../constants'; // Updated to GH constants
import MultiStepQuizFlowOG from './MultiStepQuizFlowOG'; // Component filename OG, but uses GH questions
import FinalHeightInputOG from './FinalHeightInputOG'; // Component filename OG

interface QuizControllerProps {
  onQuizFlowComplete: (data: FullQuizData) => void;
}

const TOTAL_MAIN_QUESTIONS = MULTI_STEP_QUIZ_QUESTIONS_GH.length;
const TOTAL_QUIZ_STEPS = TOTAL_MAIN_QUESTIONS + 1; 

const QuizController: React.FC<QuizControllerProps> = ({ onQuizFlowComplete }) => {
  const [currentOverallStep, setCurrentOverallStep] = useState(0); 
  const [answers, setAnswers] = useState<FullQuizData>({});

  const handleMainQuizNext = useCallback((currentAnswers: QuizAnswer) => {
    setAnswers(prev => ({ ...prev, ...currentAnswers }));
    setCurrentOverallStep(prev => prev + 1);
  }, []);

  const handleMainQuizPrevious = useCallback((currentAnswers: QuizAnswer) => {
    setAnswers(prev => ({ ...prev, ...currentAnswers }));
    setCurrentOverallStep(prev => prev - 1);
  }, []);
  
  const handleMainQuizSubmit = useCallback((lastSetOfAnswers: QuizAnswer) => {
    setAnswers(prev => ({ ...prev, ...lastSetOfAnswers }));
    setCurrentOverallStep(TOTAL_MAIN_QUESTIONS); 
  }, []);

  const handleFinalHeightSubmit = useCallback((height: string) => {
    // Ensure the key matches FINAL_HEIGHT_QUESTION_GH.id
    const finalAnswers = { ...answers, [FINAL_HEIGHT_QUESTION_GH.id]: height };
    setAnswers(finalAnswers);
    onQuizFlowComplete(finalAnswers);
  }, [answers, onQuizFlowComplete]);

  const handleFinalHeightBack = useCallback(() => {
    setCurrentOverallStep(TOTAL_MAIN_QUESTIONS - 1); 
  }, []);

  const progressPercent = Math.min(100, ((currentOverallStep +1) / TOTAL_QUIZ_STEPS) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Diagnóstico Método <span className="text-[#FF0000]">GH</span></h2>
        <p className="text-gray-400 text-sm">Descubra seu potencial de crescimento nos próximos meses.</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>
            {currentOverallStep < TOTAL_MAIN_QUESTIONS ? 
             `Pergunta ${currentOverallStep + 1} de ${TOTAL_MAIN_QUESTIONS}` : 
             'Última Etapa'}
          </span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-[#FF0000] h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
      
      {currentOverallStep < TOTAL_MAIN_QUESTIONS ? (
        <MultiStepQuizFlowOG // Component filename OG
          questions={MULTI_STEP_QUIZ_QUESTIONS_GH} // GH Questions
          initialStep={currentOverallStep}
          initialAnswers={answers}
          onNext={handleMainQuizNext}
          onPrevious={handleMainQuizPrevious}
          onSubmit={handleMainQuizSubmit}
        />
      ) : (
        <FinalHeightInputOG // Component filename OG
          question={FINAL_HEIGHT_QUESTION_GH} // GH Question
          onSubmit={handleFinalHeightSubmit}
          onBack={handleFinalHeightBack}
          initialValue={answers.finalHeightGH || ''}
        />
      )}
    </div>
  );
};

export default QuizController;