import React, { useState, useEffect } from 'react';
import { PlanGH } from '../../types'; // Updated to PlanGH
import PlanCardOG from './PlanCardOG'; // Component filename OG, but uses PlanGH

interface PlansDisplayOGProps { // Prop interface name remains
  plans: PlanGH[]; // Updated to PlanGH
  onSelectPlan: (plan: PlanGH) => void; // Updated to PlanGH
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    // Example: offer ends at midnight of the current day + 2 days
    const endDate = new Date(now);
    endDate.setDate(now.getDate() + 2);
    endDate.setHours(23, 59, 59, 999);

    const difference = +endDate - +now;
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
        timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (!timeLeft[interval] && timeLeft[interval] !==0) { 
      return null;
    }
    return (
      <div key={interval} className="flex flex-col items-center mx-1 sm:mx-2">
        <span className="text-xl sm:text-2xl font-bold text-white bg-gray-700 px-2 py-1 rounded">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-xs text-gray-400 uppercase">{interval}</span>
      </div>
    );
  });

  return <div className="flex justify-center my-4">{timerComponents.length ? timerComponents : <span>Oferta encerrada!</span>}</div>;
};


const PlansDisplayOG: React.FC<PlansDisplayOGProps> = ({ plans, onSelectPlan }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Escolha o Plano <span className="text-[#FF0000]">Método GH</span> Ideal
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Inicie sua jornada de crescimento com o plano perfeito para seus objetivos.
        </p>
      </div>
      
      <div className="text-center mb-6">
          <p className="text-lg text-yellow-400">Oferta especial de lançamento termina em:</p>
          <CountdownTimer />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => (
          <PlanCardOG key={plan.id} plan={plan} onSelectPlan={onSelectPlan} />
        ))}
      </div>
       <p className="text-center text-sm text-gray-500 mt-10">
        Pagamento seguro via Kiwify. Acesso liberado imediatamente após confirmação.
      </p>
    </div>
  );
};

export default PlansDisplayOG;