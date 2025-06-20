// DEPRECATED: This component is part of the old "Método GH" flow.
// It is replaced by PersonalizedResultsOG.tsx.
import React, { useState, useEffect } from 'react';
import { QuizData, Plan } from '../types'; // These types are also for the old flow
// import PlanCard from './PlanCard'; // PlanCard is also for the old flow
import { Button } from './Button';

// Define the missing interface
interface ResultsDisplayProps {
  quizData: QuizData;
  plans: Plan[];
  onStartOver: () => void;
}

// Helper component for typing HTML content
const TypedHTMLContent: React.FC<{ htmlString: string; speed?: number }> = ({ htmlString, speed = 30 }) => {
  const [displayedHtml, setDisplayedHtml] = useState('');

  useEffect(() => {
    setDisplayedHtml(''); 
    if (!htmlString) return;

    const segments: Array<{ type: 'text' | 'tag'; content: string }> = [];
    let i = 0;
    while (i < htmlString.length) {
      if (htmlString[i] === '<') {
        let tag = '';
        while (i < htmlString.length && htmlString[i] !== '>') {
          tag += htmlString[i++];
        }
        if (i < htmlString.length && htmlString[i] === '>') {
          tag += htmlString[i++];
        }
        segments.push({ type: 'tag', content: tag });
      } else {
        let text = '';
        while (i < htmlString.length && htmlString[i] !== '<') {
          text += htmlString[i++];
        }
        segments.push({ type: 'text', content: text });
      }
    }
    
    let currentOutput = '';
    let segmentIndex = 0;
    let charIndex = 0;
    let animationFrameId: number;

    function type() {
      if (segmentIndex < segments.length) {
        const segment = segments[segmentIndex];
        if (segment.type === 'tag') {
          currentOutput += segment.content;
          segmentIndex++;
        } else { 
          if (charIndex < segment.content.length) {
            currentOutput += segment.content[charIndex++];
          } else {
            segmentIndex++;
            charIndex = 0;
          }
        }
        setDisplayedHtml(currentOutput);
        animationFrameId = window.setTimeout(type, speed); // Changed to window.setTimeout
      } else {
         setDisplayedHtml(htmlString); 
      }
    }

    animationFrameId = window.setTimeout(type, speed); // Changed to window.setTimeout
    return () => window.clearTimeout(animationFrameId); // Changed to window.clearTimeout
  }, [htmlString, speed]);

  return <span dangerouslySetInnerHTML={{ __html: displayedHtml }} />;
};


const OldResultsDisplay: React.FC<ResultsDisplayProps> = ({ quizData, plans, onStartOver }) => {
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowResults(true), 100); 
    return () => clearTimeout(timer);
  }, []);
  
  const age = parseInt(quizData.age);
  let estimatedGrowth = "9-12cm";
  if (age > 21) {
    estimatedGrowth = "5-8cm";
  } if (age > 25) {
    estimatedGrowth = "3-5cm";
  }

  const resultTextHtml = `Com base nas suas respostas (Altura: ${quizData.height}cm, Peso: ${quizData.weight}kg, Idade: ${quizData.age} anos), você pode crescer até <strong class="text-[#FF0000]">${estimatedGrowth}</strong> com o Método GH.`;

  return (
    <div className={`w-full max-w-3xl mx-auto p-6 transition-opacity duration-700 ease-in-out ${showResults ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FF0000] mb-4">Seu Potencial de Crescimento!</h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-3">
          {showResults ? <TypedHTMLContent htmlString={resultTextHtml} /> : 'Calculando...'}
        </p>
        <p className="text-md sm:text-lg text-yellow-400 font-semibold animate-pulse">
          Mas atenção: seu tempo está acabando. As placas de crescimento fecham e não voltam mais. Aja agora!
        </p>
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#FF0000] mb-6">Escolha Seu Plano e Comece Hoje Mesmo!</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} /> // PlanCard is also old
        ))} */}
      </div>
      
      <div className="text-center">
        <Button onClick={onStartOver} variant="secondary">
          Refazer Quiz
        </Button>
      </div>
    </div>
  );
};

// export default OldResultsDisplay; // Not exporting as it's deprecated--- END OF FILE components/ResultsDisplay.tsx ---
