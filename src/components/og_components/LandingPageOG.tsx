import React from 'react';
import { Button } from '../Button'; 
import { ChevronRightIcon } from '../icons/ChevronRightIcon';

interface LandingPageOGProps { // Props interface name remains, but content is GH
  content: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    ctaButtonText: string;
    stats: Array<{ value: string; label: string }>;
  };
  onStartQuiz: () => void;
}

const LandingPageOG: React.FC<LandingPageOGProps> = ({ content, onStartQuiz }) => {
  return (
    <div className="w-full max-w-3xl mx-auto text-center py-12 md:py-20 animate-fade-in">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">
        {content.title.split(' ').map((word, index) => (
          <span key={index} className={word === 'GH' ? 'text-[#FF0000]' : 'text-white'}>
            {word}{' '}
          </span>
        ))}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-xl mx-auto">
        {content.subtitle}
      </p>
      <p className="text-md md:text-lg text-gray-400 mb-4 max-w-lg mx-auto">
        {content.description1}
      </p>
      <p className="text-md md:text-lg text-gray-400 mb-10 max-w-lg mx-auto">
        {content.description2}
      </p>

      <Button
        onClick={onStartQuiz}
        variant="primary"
        className="text-lg md:text-xl !py-4 !px-8 rounded-lg shadow-xl animate-pulse-red"
      >
        {content.ctaButtonText} <ChevronRightIcon className="inline w-6 h-6 ml-2" />
      </Button>
      <p className="text-sm text-gray-500 mt-3">Diagnóstico personalizado em 2 minutos</p>

      <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
        {content.stats.map((stat, index) => (
          <div key={index} className="p-4 bg-gray-900 rounded-lg shadow-md">
            <p className="text-2xl md:text-3xl font-bold text-[#FF0000]">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPageOG;