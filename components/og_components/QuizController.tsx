import React, { useState, useCallback } from 'react';
import { FullQuizData, QuizAnswer, MultiStepQuizQuestion } from '../../types';
import MultiStepQuizFlowOG from './MultiStepQuizFlowOG';
import FinalHeightInputOG from './FinalHeightInputOG';
import AnimatedProgressBar from './AnimatedProgressBar';

interface QuizControllerProps {
  questions: MultiStepQuizQuestion[];
  finalQuestion: MultiStepQuizQuestion;
  uiText: {
    title: string;
    subtitle: string;
    questionLabel: (current: number, total: number) => string;
    lastStepLabel: string;
  };
  onQuizFlowComplete: (data: FullQuizData) => void;
}

const QuizController: React.FC<QuizControllerProps> = ({ questions, finalQuestion, uiText, onQuizFlowComplete }) => {
  const [currentOverallStep, setCurrentOverallStep] = useState(0); 
  const [answers, setAnswers] = useState<FullQuizData>({});

  const TOTAL_MAIN_QUESTIONS = questions.length;
  const TOTAL_QUIZ_STEPS = TOTAL_MAIN_QUESTIONS + 1; 

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
  }, [TOTAL_MAIN_QUESTIONS]);

  const handleFinalHeightSubmit = useCallback((height: string) => {
    const finalAnswers = { ...answers, [finalQuestion.id]: height };
    setAnswers(finalAnswers);
    onQuizFlowComplete(finalAnswers);
  }, [answers, onQuizFlowComplete, finalQuestion.id]);

  const handleFinalHeightBack = useCallback(() => {
    setCurrentOverallStep(TOTAL_MAIN_QUESTIONS - 1); 
  }, [TOTAL_MAIN_QUESTIONS]);

  const progressPercent = Math.floor(Math.min(100, ((currentOverallStep + 1) / TOTAL_QUIZ_STEPS) * 100));

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1" dangerouslySetInnerHTML={{ __html: uiText.title }}></h2>
        <p className="text-gray-400 text-sm">{uiText.subtitle}</p>
      </div>

      <div className="mb-8">
        <AnimatedProgressBar
           label={
             currentOverallStep < TOTAL_MAIN_QUESTIONS 
               ? uiText.questionLabel(currentOverallStep + 1, TOTAL_MAIN_QUESTIONS) 
               : uiText.lastStepLabel
           }
           targetProgress={progressPercent}
        />
      </div>
      
      {currentOverallStep < TOTAL_MAIN_QUESTIONS ? (
        <MultiStepQuizFlowOG
          questions={questions}
          initialStep={currentOverallStep}
          initialAnswers={answers}
          onNext={handleMainQuizNext}
          onPrevious={handleMainQuizPrevious}
          onSubmit={handleMainQuizSubmit}
        />
      ) : (
        <FinalHeightInputOG
          question={finalQuestion}
          onSubmit={handleFinalHeightSubmit}
          onBack={handleFinalHeightBack}
          // FIX: Cast `answers[finalQuestion.id]` to string to fix type error.
          // The value for height should always be a string, but TypeScript infers a wider type from the `FullQuizData` index signature.
          initialValue={(answers[finalQuestion.id] as string) || ''}
        />
      )}
    </div>
  );
};

export default QuizController;