import React from 'react';
import { COMMUNITY_GH_DETAILS } from '../../constants'; // Updated to GH
import { PlanGH } from '../../types'; // Updated to PlanGH
import { Button } from '../Button';
import { CloseIcon } from '../icons/CloseIcon';

interface UpsellModalOGProps { // Prop interface name remains
  isOpen: boolean;
  onClose: () => void;
  plan: PlanGH; // Updated to PlanGH
}

const UpsellModalOG: React.FC<UpsellModalOGProps> = ({ isOpen, onClose, plan }) => {
  if (!isOpen) return null;

  const basePriceNum = parseFloat(plan.price.replace('R$', '').replace(',', '.').trim());
  const communityPriceNum = parseFloat(COMMUNITY_GH_DETAILS.price.replace(',', '.').trim());
  const totalPriceNum = basePriceNum + communityPriceNum;
  const totalPriceFormatted = `R$ ${totalPriceNum.toFixed(2).replace('.', ',')}`;

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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Excelente Escolha!</h2>
          <p className="text-lg text-[#FF0000] font-semibold mb-3">Potencialize sua Jornada <span className="text-white">GH</span></p>
          <p className="text-sm text-gray-400 mb-6">
            Junte-se à Comunidade GH e acelere seus resultados com suporte exclusivo e conteúdos premium.
          </p>

          <div className="bg-gray-700 p-4 rounded-lg space-y-3 text-left mb-6 shadow-inner">
            {COMMUNITY_GH_DETAILS.features.map((feature, index) => (
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
              <span className="text-[#FF0000]">Comunidade GH</span>
              <span className="text-[#FF0000]">+ R$ {COMMUNITY_GH_DETAILS.price}</span>
            </div>
            <div className="h-px bg-gray-600 my-1"></div>
            <div className="flex justify-between items-center text-white text-xl font-bold">
              <span>Total</span>
              <span>{totalPriceFormatted}</span>
            </div>
          </div>

          <Button
            onClick={() => { window.open(communityLink, '_blank'); }}
            variant="primary"
            className="w-full !text-lg !py-3 rounded-lg shadow-xl animate-pulse-red mb-3"
          >
            <svg className="w-5 h-5 inline mr-2 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            QUERO A COMUNIDADE GH
          </Button>
          <Button
            onClick={() => { window.open(basePlanLink, '_blank'); onClose(); }}
            variant="custom"
            className="w-full text-sm text-gray-400 hover:text-white hover:underline"
          >
            Seguir apenas com meu {plan.name}
          </Button>
        </div>
        <div className="bg-gray-900 p-3 grid grid-cols-3 gap-2 text-center border-t border-gray-700">
            {COMMUNITY_GH_DETAILS.footerPoints.map((point, index) => (
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