import React from 'react';
import { FullQuizData } from '../../types';

interface PersonalizedResultsOGProps {
  quizData: FullQuizData;
  estimatedGain: string;
  uiText: {
    title: (gain: string) => string;
    currentHeightLabel: string;
    potentialHeightLabel: string;
    projectionTitle: string;
    projectionSubtitle: (gain: string) => string;
    todayLabel: string;
    daysLabel: (days: number) => string;
    summary: (potentialHeight: number, thirtyDayHeight: number) => string;
    progressLabel: (unlocked: number, total: number) => string;
    ctaButton: string;
  };
  finalHeightQuestionId: string;
}

const PersonalizedResultsOG: React.FC<PersonalizedResultsOGProps> = ({
  quizData,
  estimatedGain,
  uiText,
  finalHeightQuestionId,
}) => {
  const currentHeight = parseInt((quizData[finalHeightQuestionId] as string) || "0", 10);
  const gainValue = parseInt(estimatedGain.match(/\d+/)?.[0] || "0", 10);
  const potentialHeight = currentHeight + gainValue;

  // Growth projection calculations
  const thirtyDayGain = gainValue * 0.7;
  const thirtyDayHeight = currentHeight + thirtyDayGain;

  const points = [
    { days: 0, height: currentHeight, label: uiText.todayLabel },
    { days: 30, height: thirtyDayHeight, label: uiText.daysLabel(30) },
    { days: 60, height: potentialHeight, label: uiText.daysLabel(60) }
  ];

  const chartMinHeight = currentHeight;
  const chartMaxHeight = potentialHeight;
  const heightRange = chartMaxHeight - chartMinHeight || 1; // Avoid division by zero

  const getPointPosition = (point: typeof points[number], index: number) => {
    const verticalPercent = (point.height - chartMinHeight) / heightRange;
    const bottom = 15 + verticalPercent * 70; // Map to 15%-85% of height
    const left = 5 + (index / (points.length - 1)) * 90; // Map to 5%-95% of width
    return { left, bottom };
  };


  return (
    <div className="w-full max-w-md mx-auto animate-fade-in text-white flex flex-col justify-center flex-grow py-1">
      <h2 
        className="text-3xl font-bold text-center mb-3 leading-tight" 
        dangerouslySetInnerHTML={{ __html: uiText.title(gainValue.toString()) }}>
      </h2>

      <div className="flex justify-center items-center gap-2 mb-3">
        <div className="bg-[#1C1C1E] p-4 rounded-lg text-center w-full shadow-md">
          <p className="text-sm text-gray-400 mb-1">{uiText.currentHeightLabel}</p>
          <p className="text-3xl font-bold">{currentHeight}cm</p>
        </div>
        <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        <div className="bg-[#1C1C1E] p-4 rounded-lg text-center w-full shadow-md">
          <p className="text-sm text-gray-400 mb-1">{uiText.potentialHeightLabel}</p>
          <p className="text-3xl font-bold">{potentialHeight}cm</p>
        </div>
      </div>

      <div className="bg-[#1C1C1E] p-5 rounded-xl shadow-2xl mb-3">
        <div className="flex items-center mb-4">
          <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          <h3 className="text-xl font-semibold">{uiText.projectionTitle}</h3>
        </div>
        
        {/* Growth Chart */}
        <div className="relative h-28">
          <svg width="100%" height="100%" className="absolute inset-0 z-0 overflow-visible">
            {points.slice(0, -1).map((point, index) => {
              const startPos = getPointPosition(point, index);
              const endPos = getPointPosition(points[index + 1], index + 1);
              return (
                <line
                  key={index}
                  x1={`${startPos.left}%`}
                  y1={`${100 - startPos.bottom}%`}
                  x2={`${endPos.left}%`}
                  y2={`${100 - endPos.bottom}%`}
                  stroke="#FF0000"
                  strokeWidth="2"
                />
              );
            })}
          </svg>

          {points.map((point, index) => {
            const {left, bottom} = getPointPosition(point, index);
            const isEdge = index === 0 || index === points.length - 1;
            const isMiddle = index > 0 && index < points.length - 1;
            
            const displayHeight = isEdge ? String(Math.round(point.height)) : point.height.toFixed(1);

            return (
              <div 
                  key={index} 
                  className="absolute z-10 flex flex-col items-center" 
                  style={{ bottom: `${bottom}%`, left: `${left}%`, transform: 'translate(-50%, 50%)' }}
              >
                  {isMiddle && (
                      <p className="absolute whitespace-nowrap bottom-full mb-2 text-xs text-gray-400">
                          {point.label} • {displayHeight}cm
                      </p>
                  )}
                  
                  <div className="w-5 h-5 bg-black border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>

                  {isEdge && (
                      <p className="absolute whitespace-nowrap top-full mt-2 text-xs text-gray-400">
                          {`${point.label} • ${displayHeight}cm`}
                      </p>
                  )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          {uiText.projectionSubtitle(gainValue.toString())}
        </p>
      </div>

      <p 
        className="text-center text-gray-300 mb-3 leading-relaxed text-sm px-2"
        dangerouslySetInnerHTML={{ __html: uiText.summary(potentialHeight, parseFloat(thirtyDayHeight.toFixed(1))) }}
      />
        
      <div className="px-2">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
          <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
        </div>
        <p className="text-xs text-gray-400 text-center">
          {uiText.progressLabel(0, gainValue)}
        </p>
      </div>
      
       {/* CTA button is handled by the fixed footer in App.tsx */}
    </div>
  );
};

export default PersonalizedResultsOG;