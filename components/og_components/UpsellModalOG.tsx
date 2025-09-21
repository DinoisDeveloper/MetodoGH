import React from 'react';
import { PlanGH } from '../../types';
import { Button } from '../Button';
import { CloseIcon } from '../icons/CloseIcon';

interface UpsellModalOGProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PlanGH;
  communityDetails: {
      price: string;
      features: { icon: string; text: string }[];
      footerPoints: string[];
  };
  uiText: {
    title: string;
    subtitle: (planName: string) => string;
    description: string;
    totalLabel: string;
    communityLabel: string;
    ctaButton: string;
    declineButton: (planName: string) => string;
  };
}

const UpsellModalOG: React.FC<UpsellModalOGProps> = ({ isOpen, onClose, plan, communityDetails, uiText }) => {
  if (!isOpen) return null;

  const basePriceNum = parseFloat(plan.price.replace(/[^0-9,.-]/g, '').replace(',', '.').trim());
  const communityPriceNum = parseFloat(communityDetails.price.replace(',', '.').trim());
  const totalPriceNum = basePriceNum + communityPriceNum;
  
  const formatter = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'BRL' }); // This could be adapted with language
  const totalPriceFormatted = `R$ ${totalPriceNum.toFixed(2).replace('.', ',')}`; // Simple formatting for now

  const communityLink = plan.purchaseLinkCommunity || '#'; 
  const basePlanLink = plan.purchaseLink;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-[150] p-4 animate-slide-in-up-fade">
      <div className="bg-gray-800 w-full max-w-md rounded-xl shadow-2xl flex flex-col border-2 border-[#FF0000] relative overflow-hidden">
        <Button 
            onClick={onClose} 
            variant="custom" 
            className="!absolute top-3 right-3 !p-2 text-gray-400 hover:text-white z-10"
            aria-label="Fechar modal"
            noSound
        >
          <CloseIcon className="w-6 h-6" />
        </Button>

        <div className="p-6 sm:p-8 text-center">
            <div className="mx-auto mb-4 inline-block p-3 bg-[#FF0000] rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{uiText.title}</h2>
          <p className="text-lg text-[#FF0000] font-semibold mb-3" dangerouslySetInnerHTML={{__html: uiText.subtitle(plan.name)}}></p>
          <p className="text-sm text-gray-400 mb-6">
            {uiText.description}
          </p>

          <div className="bg-gray-700 p-4 rounded-lg space-y-3 text-left mb-6 shadow-inner">
            {communityDetails.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-[#FF0000] mr-3 mt-0.5 flex-shrink-0"><use href={`#icon-${feature.icon}`} /></svg>
                <span className="text-sm text-gray-200">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center text-gray-300">
              <span>{plan.name}</span>
              <span>{plan.price}</span>
            </div>
            <div className="flex justify-between items-center text-gray-300">
              <span className="text-[#FF0000]">{uiText.communityLabel}</span>
              <span className="text-[#FF0000]">+ R$ {communityDetails.price}</span>
            </div>
            <div className="h-px bg-gray-600 my-1"></div>
            <div className="flex justify-between items-center text-white text-xl font-bold">
              <span>{uiText.totalLabel}</span>
              <span>{totalPriceFormatted}</span>
            </div>
          </div>

          <Button
            onClick={() => { window.open(communityLink, '_blank'); }}
            variant="primary"
            className="w-full !text-lg !py-3 rounded-lg shadow-xl animate-pulse-red mb-3"
          >
            <svg className="w-5 h-5 inline mr-2 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            {uiText.ctaButton}
          </Button>
          <Button
            onClick={() => { window.open(basePlanLink, '_blank'); onClose(); }}
            variant="custom"
            className="w-full text-sm text-gray-400 hover:text-white hover:underline"
          >
            {uiText.declineButton(plan.name)}
          </Button>
        </div>
        <div className="bg-gray-900 p-3 grid grid-cols-3 gap-2 text-center border-t border-gray-700">
            {communityDetails.footerPoints.map((point, index) => (
                 <div key={index} className="flex items-center justify-center text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5 text-green-500 mr-1.5 flex-shrink-0"><use href="#icon-check-circle" /></svg>
                    {point}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UpsellModalOG;
