import React, { useState, FormEvent, ChangeEvent, useCallback } from 'react';
import { MultiStepQuizQuestion } from '../../types';
import { Button } from '../Button';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';
import { ChevronLeftIcon } from '../icons/ChevronLeftIcon';

interface FinalHeightInputOGProps {
  question: MultiStepQuizQuestion; // This will be FINAL_HEIGHT_QUESTION_GH
  initialValue?: string;
  onSubmit: (height: string) => void;
  onBack: () => void;
}

const FinalHeightInputOG: React.FC<FinalHeightInputOGProps> = ({ question, initialValue = '', onSubmit, onBack }) => {
  const [height, setHeight] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
    if (error) setError(null);
  }, [error]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!height.trim()) {
      setError('Por favor, insira sua altura.');
      return;
    }
    const numericHeight = Number(height);
    if (isNaN(numericHeight) || numericHeight <= 0) {
      setError('Por favor, insira um valor numérico positivo para a altura.');
      return;
    }
    setError(null);
    onSubmit(height); // onSubmit will associate this with question.id
  };

  return (
    <div className="quiz-question-container-animate">
      <form onSubmit={handleSubmit}>
        <label htmlFor={question.id} className="block text-xl sm:text-2xl font-semibold text-white mb-6">
          {question.text}
        </label>
        <div className="relative mb-6">
          <input
            type="number" 
            id={question.id}
            name={question.id} // Name should match the ID for form data
            value={height}
            onChange={handleChange}
            placeholder={question.placeholder}
            className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#FF0000] focus:border-[#FF0000] outline-none transition-colors text-lg"
            required
            min="1" 
          />
          {question.unit && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">{question.unit}</span>
          )}
        </div>

        {error && <p className="text-red-400 text-sm mb-4 animate-pulse">{error}</p>}

        <div className="flex justify-between items-center mt-8">
          <Button
            type="button"
            onClick={onBack}
            variant="secondary"
            className="!px-5 !py-2.5"
          >
            <ChevronLeftIcon className="w-5 h-5 mr-1 inline" /> Voltar
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="!px-5 !py-2.5"
            pulsate
          >
            Calcular Resultado <ChevronRightIcon className="w-5 h-5 ml-1 inline" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FinalHeightInputOG;