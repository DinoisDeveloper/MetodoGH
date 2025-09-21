import React, { useState, useEffect } from 'react';
import { PlanGH } from '../../types';
import PlanCardOG from './PlanCardOG';

interface PlansDisplayOGProps {
  plans: PlanGH[];
  uiText: {
    title: string;
    subtitle: string;
    offerEndsText: string;
    offerEndedText: string;
    paymentInfoText: string;
    timeUnits: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  onSelectPlan: (plan: PlanGH) => void;
}

const CountdownTimer: React.FC<{ timeUnits: PlansDisplayOGProps['uiText']['timeUnits'], offerEndedText: string }> = ({ timeUnits, offerEndedText }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date(now);
    endDate.setDate(now.getDate() + 2);
    endDate.setHours(23, 59, 59, 999);

    const difference = +endDate - +now;
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        [timeUnits.days]: Math.floor(difference / (1000 * 60 * 60 * 24)),
        [timeUnits.hours]: Math.floor((difference / (1000 * 60 * 60)) % 24),
        [timeUnits.minutes]: Math.floor((difference / 1000 / 60) % 60),
        [timeUnits.seconds]: Math.floor((difference / 1000) % 60),
      };
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

  const timerComponents = Object.keys(timeLeft).map(interval => (
    <div key={interval} className="flex flex-col items-center mx-1 sm:mx-2">
      <span className="text-xl sm:text-2xl font-bold text-white bg-gray-700 px-2 py-1 rounded">
        {String(timeLeft[interval]).padStart(2, '0')}
      </span>
      <span className="text-xs text-gray-400 uppercase">{interval}</span>
    </div>
  ));

  return <div className="flex justify-center my-4">{timerComponents.length ? timerComponents : <span>{offerEndedText}</span>}</div>;
};

const PlansDisplayOG: React.FC<PlansDisplayOGProps> = ({ plans, onSelectPlan, uiText }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white" dangerouslySetInnerHTML={{ __html: uiText.title }}>
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          {uiText.subtitle}
        </p>
      </div>
      
      <div className="text-center mb-6">
          <p className="text-lg text-yellow-400">{uiText.offerEndsText}</p>
          <CountdownTimer timeUnits={uiText.timeUnits} offerEndedText={uiText.offerEndedText} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => (
          <PlanCardOG key={plan.id} plan={plan} onSelectPlan={onSelectPlan} />
        ))}
      </div>
       <p className="text-center text-sm text-gray-500 mt-10">
        {uiText.paymentInfoText}
      </p>
    </div>
  );
};

export default PlansDisplayOG;
