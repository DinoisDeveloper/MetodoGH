import React from 'react';
import { PlanGH } from '../../types'; // Updated to PlanGH
import { Button } from '../Button'; 

interface PlanCardOGProps { // Prop interface name remains
  plan: PlanGH; // Updated to PlanGH
  onSelectPlan: (plan: PlanGH) => void; // Updated to PlanGH
}

const PlanCardOG: React.FC<PlanCardOGProps> = ({ plan, onSelectPlan }) => {
  const defaultBorderColor = plan.borderColor || 'border-gray-700';
  const defaultButtonColor = plan.buttonColor || 'bg-gray-600 hover:bg-gray-500';
  const defaultBadgeColor = plan.badgeColor || 'bg-gray-500';
  const isRecommended = plan.highlight === 'RECOMENDADO';

  return (
    <div
      className={`bg-gray-800 p-6 rounded-xl shadow-xl border-2 flex flex-col justify-between transition-all duration-300 hover:shadow-[#FF0000]/50 hover:scale-105 relative
                  ${isRecommended ? 'border-[#FF0000] ring-2 ring-offset-2 ring-offset-black ring-[#FF0000]' : defaultBorderColor}`}
    >
      <div>
        {plan.highlight && (
          <span 
            className={`absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg
                        ${isRecommended ? 'bg-[#FF0000]' : defaultBadgeColor}`}
          >
            {plan.highlight}
          </span>
        )}
        <h3 className={`text-2xl font-bold mt-5 mb-2 ${isRecommended ? 'text-[#FF0000]' : 'text-white'}`}>
          {plan.name}
        </h3>
        <div className="mb-3">
            <span className={`text-4xl font-extrabold ${isRecommended ? 'text-[#FF0000]' : 'text-white'}`}>{plan.price}</span>
            <span className="text-sm text-gray-400"> à vista</span>
        </div>
        <p className="text-gray-300 text-sm mb-1">{plan.duration}</p>
        <p className="text-gray-300 text-sm mb-4">Potencial de Ganho: <strong className={isRecommended ? "text-white" : "text-[#FF0000]"}>{plan.gainEstimate}</strong></p>
        
        <div className="h-px bg-gray-700 my-4"></div>

        <ul className="text-sm text-gray-400 space-y-2 mb-6 min-h-[150px]">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-4 h-4 text-[#FF0000] mr-2 mt-0.5 flex-shrink-0"><use href="#icon-check-circle" /></svg>
              {feature}
            </li>
          ))}
        </ul>
         <div className="text-center mb-4">
             <Button
                variant="custom"
                className={`text-xs ${isRecommended ? 'text-[#FF0000]' : 'text-gray-400'} hover:underline`}
                noSound // Minor detail, no sound for this "see more" link
             >
                 Ver mais benefícios &rarr;
             </Button>
         </div>
      </div>
      <Button
        onClick={() => onSelectPlan(plan)}
        variant="custom"
        className={`w-full !text-lg !font-bold py-3 rounded-lg shadow-md
                    ${isRecommended ? 'bg-[#FF0000] hover:bg-[#FF3333] text-white animate-pulse-red' : `${defaultButtonColor} text-white`}`}
      >
        ESCOLHER PLANO {plan.name.split(' ')[0].toUpperCase()} {/* Using first word for GH plans */}
      </Button>
    </div>
  );
};

export default PlanCardOG;