import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { MultiStepQuizQuestion, QuizAnswer } from '../../types';
import { Button } from '../Button';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';
import { ChevronLeftIcon } from '../icons/ChevronLeftIcon';

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

interface MultiStepQuizFlowOGProps {
  questions: MultiStepQuizQuestion[];
  initialStep?: number;
  initialAnswers?: QuizAnswer;
  onNext: (currentAnswers: QuizAnswer) => void;
  onPrevious: (currentAnswers: QuizAnswer) => void;
  onSubmit: (finalAnswers: QuizAnswer) => void; 
}

const MultiStepQuizFlowOG: React.FC<MultiStepQuizFlowOGProps> = ({
  questions,
  initialStep = 0,
  initialAnswers = {},
  onNext,
  onPrevious,
  onSubmit,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialStep);
  const [answers, setAnswers] = useState<QuizAnswer>(initialAnswers);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setCurrentQuestionIndex(initialStep);
  }, [initialStep]);
  
  useEffect(() => {
    setAnswers(initialAnswers);
  }, [initialAnswers]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleRadioChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    playSound('audio-click');
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
    setError(null);
  }, []);

  const handleCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    playSound('audio-click');
    const { name, value, checked } = e.target;
    const currentValues = (answers[name] as string[] | undefined) || [];
    let newValues: string[];

    if (value === "none") { 
        newValues = checked ? [value] : [];
    } else {
        const existingNone = currentValues.includes("none");
        if (checked) {
            newValues = existingNone ? [value] : [...currentValues.filter(v => v !== "none"), value];
        } else {
            newValues = currentValues.filter(v => v !== value);
        }
    }
    setAnswers(prev => ({ ...prev, [name]: newValues }));
    setError(null);
  }, [answers]);


  const validateCurrentAnswer = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === 'radio' && !answer) {
      return false;
    }
    if (currentQuestion.type === 'checkbox' && (!Array.isArray(answer) || answer.length === 0)) {
      return false;
    }
    return true;
  };

  const handleNextClick = () => {
    if (!validateCurrentAnswer()) {
      setError('Por favor, selecione uma opção.');
      return;
    }
    setError(null);
    if (currentQuestionIndex < questions.length - 1) {
      onNext(answers); 
    } else {
      onSubmit(answers); 
    }
  };

  const handlePreviousClick = () => {
    setError(null);
    if (currentQuestionIndex > 0) {
      onPrevious(answers); 
    }
  };
  
  if (!currentQuestion) return <p>Carregando quiz...</p>;

  return (
    <div key={currentQuestion.id} className="quiz-question-container-animate">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
        {currentQuestion.text}
      </h3>
      <div className="space-y-3 mb-6 max-h-[45vh] overflow-y-auto pr-2">
        {currentQuestion.options?.map(option => (
          <label
            key={option.value}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                        ${( (currentQuestion.type === 'radio' && answers[currentQuestion.id] === option.value) ||
                           (currentQuestion.type === 'checkbox' && (answers[currentQuestion.id] as string[] | undefined)?.includes(option.value))
                         ) ? 'bg-[#FF0000] border-[#FF0000] text-white' : 'bg-gray-800 border-gray-700 hover:border-[#FF3333] text-gray-300'}`}
          >
            <input
              type={currentQuestion.type}
              name={currentQuestion.id}
              value={option.value}
              checked={currentQuestion.type === 'radio' ? answers[currentQuestion.id] === option.value : (answers[currentQuestion.id] as string[] | undefined)?.includes(option.value)}
              onChange={currentQuestion.type === 'radio' ? handleRadioChange : handleCheckboxChange}
              className={`form-${currentQuestion.type} h-5 w-5 mr-3 rounded text-[#FF0000] bg-gray-700 border-gray-600 focus:ring-[#FF3333] focus:ring-offset-gray-800 custom-${currentQuestion.type}`}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {error && <p className="text-red-400 text-sm mb-4 animate-pulse">{error}</p>}

      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:items-center mt-6">
        <Button
          type="button"
          onClick={handlePreviousClick}
          disabled={currentQuestionIndex === 0}
          variant="secondary"
          className="!px-5 !py-2.5 w-full sm:w-auto"
        >
          <ChevronLeftIcon className="w-5 h-5 mr-1 inline" /> Voltar
        </Button>
        <Button
          type="button"
          onClick={handleNextClick}
          variant="primary"
          className="!px-5 !py-2.5 w-full sm:w-auto"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Próxima Pergunta' : 'Próxima Etapa'}
          <ChevronRightIcon className="w-5 h-5 ml-1 inline" />
        </Button>
      </div>
    </div>
  );
};

export default MultiStepQuizFlowOG;