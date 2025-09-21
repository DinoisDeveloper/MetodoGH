// DEPRECATED: This component is part of the old "Método GH" flow.
// It is replaced by PlanCardOG.tsx.
import React from 'react';
import { Plan } from '../types'; // This Plan type is also for the old flow
import { Button } from './Button';

interface PlanCardProps {
  plan: Plan;
}

const OldPlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const isRecommended = plan.id === 'essencial'; 

  let currentButtonColor = plan.buttonColor;
  if (plan.highlight) {
    currentButtonColor = 'bg-[#FF0000] hover:bg-[#FF3333]';
  } else if (plan.id === 'elite') { 
    currentButtonColor = 'bg-yellow-500 hover:bg-yellow-600';
  } else { 
    currentButtonColor = 'bg-gray-600 hover:bg-gray-500';
  }
  
  let currentBorderColor = plan.borderColor;
   if (plan.highlight) {
    currentBorderColor = 'border-[#FF0000]';
  }

  let currentPlanNameColor = plan.highlight ? 'text-[#FF0000]' : 'text-white';
  let currentPriceColor = plan.highlight ? 'text-[#FF0000]' : (plan.id === 'elite' ? 'text-yellow-400' : 'text-gray-300');
  let currentGrowthTextColor = plan.highlight ? "text-white" : "text-[#FF0000]";


  return (
    <div 
      className={`bg-gray-800 p-6 rounded-lg shadow-xl border-2 ${currentBorderColor} flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-105 ${plan.highlight ? 'ring-2 ring-offset-2 ring-offset-black ring-[#FF0000]' : ''} relative`}
    >
      <div>
        <h3 className={`text-2xl font-bold ${currentPlanNameColor} mb-2`}>{plan.name}</h3>
        {plan.highlight && (
          <span className="bg-[#FF0000] text-white text-xs font-semibold px-2 py-1 rounded-full absolute -top-3 -right-3 transform rotate-6">
            RECOMENDADO
          </span>
        )}
        <p className={`text-3xl font-extrabold ${currentPriceColor} mb-3`}>{plan.price}</p>
        <p className={`${plan.textColor || 'text-gray-300'} text-lg mb-4`}>Crescimento estimado: <strong className={currentGrowthTextColor}>{plan.growthEstimate}</strong></p>
        <ul className="text-sm text-gray-400 space-y-1 mb-6">
          <li>✓ Acesso ao método</li>
          <li>✓ Suporte básico</li>
          {plan.id === 'essencial' && <li>✓ Guia de nutrição avançado</li>}
          {plan.id === 'elite' && <><li>✓ Guia de nutrição avançado</li><li>✓ Acompanhamento VIP</li></>}
        </ul>
      </div>
      <Button
        onClick={() => window.open(plan.purchaseLink, '_blank')}
        variant="custom"
        className={`w-full !text-lg !font-bold ${currentButtonColor} ${plan.textColor === 'text-gray-900' ? 'text-black' : 'text-white'} rounded-lg`}
        pulsate={plan.highlight}
      >
        Acessar Método {plan.name}
      </Button>
    </div>
  );
};

// export default OldPlanCard; // Not exporting as it's deprecated.
