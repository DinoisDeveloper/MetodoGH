// DEPRECATED: This component is part of the old "Método GH" flow.
// It is replaced by QuizController.tsx, MultiStepQuizFlowOG.tsx, and FinalHeightInputOG.tsx.
import React, { useState, FormEvent, ChangeEvent, useCallback } from 'react';
import { QuizData, QuizQuestionData } from '../types'; // These types are also for the old flow
import { QUIZ_QUESTIONS } from '../constants'; // Deprecated constant
import { Button } from './Button';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';

interface QuizProps {
  onQuizComplete: (data: QuizData) => void;
}

const OldQuiz: React.FC<QuizProps> = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizData>>({});
  const [error, setError] = useState<string | null>(null);
  
  // This constant QUIZ_QUESTIONS is from the old flow.
  // Check constants.ts for its deprecation status.
  const currentQuestion: QuizQuestionData = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
    if (error) setError(null); 
  }, [error]);

  const navigateQuestion = (nextIndex: number) => {
    setCurrentQuestionIndex(nextIndex);
  }

  const handleNext = useCallback(() => {
    const currentValue = answers[currentQuestion.id as keyof QuizData];
    if (!currentValue || currentValue.trim() === '') {
      setError(`Por favor, preencha o campo "${currentQuestion.label}".`);
      return;
    }
    if (currentQuestion.type === 'number' && isNaN(Number(currentValue))) {
       setError(`Por favor, insira um valor numérico para "${currentQuestion.label}".`);
       return;
    }
    if (currentQuestion.type === 'number' && Number(currentValue) <=0) {
      setError(`O valor para "${currentQuestion.label}" deve ser positivo.`);
      return;
    }

    setError(null);
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      navigateQuestion(currentQuestionIndex + 1);
    } else {
      onQuizComplete(answers as QuizData);
    }
  }, [answers, currentQuestion, currentQuestionIndex, onQuizComplete]);

  const handlePrevious = useCallback(() => {
    setError(null);
    if (currentQuestionIndex > 0) {
        navigateQuestion(currentQuestionIndex - 1);
    }
  }, [currentQuestionIndex]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currentValue = answers[currentQuestion.id as keyof QuizData];
     if (!currentValue || currentValue.trim() === '') {
      setError(`Por favor, preencha o campo "${currentQuestion.label}".`);
      return;
    }
    if (currentQuestion.type === 'number' && isNaN(Number(currentValue))) {
       setError(`Por favor, insira um valor numérico para "${currentQuestion.label}".`);
       return;
    }
     if (currentQuestion.type === 'number' && Number(currentValue) <=0) {
      setError(`O valor para "${currentQuestion.label}" deve ser positivo.`);
      return;
    }

    if (Object.keys(answers).length === QUIZ_QUESTIONS.length && QUIZ_QUESTIONS.every(q => !!answers[q.id as keyof QuizData])) {
      onQuizComplete(answers as QuizData);
    } else {
       setError("Por favor, responda todas as perguntas.");
    }
  };


  return (
    <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <div key={currentQuestionIndex} className="quiz-question-container-animate mb-6 min-h-[150px]">
          <label htmlFor={currentQuestion.id} className="block text-xl sm:text-2xl font-medium text-[#FF0000] mb-3">
            {currentQuestion.label}
          </label>
          <div className="relative">
            <input
              type={currentQuestion.type === 'number' ? 'number' : 'text'}
              id={currentQuestion.id}
              name={currentQuestion.id}
              value={answers[currentQuestion.id as keyof QuizData] || ''}
              onChange={handleChange}
              placeholder={currentQuestion.placeholder}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#FF0000] focus:border-[#FF0000] outline-none transition-colors"
              required
              min={currentQuestion.type === 'number' ? "1" : undefined}
            />
            {currentQuestion.unit && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{currentQuestion.unit}</span>
            )}
          </div>
          {error && <p className="text-red-400 text-sm mt-2 animate-pulse">{error}</p>}
        </div>

        <div className="flex justify-between items-center mt-8">
          <Button
            type="button"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            variant="secondary"
            className="!px-4 !py-2"
          >
            <ChevronLeftIcon className="w-5 h-5 mr-1 inline"/> Anterior
          </Button>
          
          {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? (
            <Button type="button" onClick={handleNext} className="!px-4 !py-2">
              Próximo <ChevronRightIcon className="w-5 h-5 ml-1 inline"/>
            </Button>
          ) : (
            <Button type="submit" className="!px-4 !py-2" pulsate>
              Ver Resultado
            </Button>
          )}
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
            Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
        </div>
      </form>
    </div>
  );
};

// export default OldQuiz; // Not exporting as it's deprecated.
