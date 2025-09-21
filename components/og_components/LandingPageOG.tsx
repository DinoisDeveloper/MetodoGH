import React from 'react';
import { Button } from '../Button'; 
import { ChevronRightIcon } from '../icons/ChevronRightIcon';

interface LandingPageOGProps {
  content: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    ctaButtonText: string;
    stats: Array<{ value: string; label: string }>;
    diagnosisTime: string;
  };
  onStartQuiz: () => void;
}

const LandingPageOG: React.FC<LandingPageOGProps> = ({ content, onStartQuiz }) => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        {content.title.split(' ').map((word, index) => (
          <span key={index} className={word.toUpperCase() === 'GH' ? 'text-[#FF0000]' : 'text-white'}>
            {word}{' '}
          </span>
        ))}
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-5 max-w-xl mx-auto">
        {content.subtitle}
      </p>
      <p className="text-md text-gray-400 mb-4 max-w-lg mx-auto">
        {content.description1}
      </p>
      <p className="text-md text-gray-400 mb-8 max-w-lg mx-auto">
        {content.description2}
      </p>

      <Button
        onClick={onStartQuiz}
        variant="primary"
        className="text-lg md:text-xl !py-4 !px-8 rounded-lg shadow-xl animate-pulse-red"
      >
        {content.ctaButtonText} <ChevronRightIcon className="inline w-6 h-6 ml-1 -mr-1" />
      </Button>
      <p className="text-xs text-gray-500 mt-2">{content.diagnosisTime}</p>

      <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
        {content.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#FF0000]">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPageOG;