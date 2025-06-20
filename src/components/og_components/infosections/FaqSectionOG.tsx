import React, { useState } from 'react';
import { FaqItem } from '../../../types'; 
import { Button } from '../../Button'; 
import { ChevronDownIcon } from '../../icons/ChevronDownIcon'; 

interface FaqItemProps {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <h3>
        <button
          type="button"
          className="flex justify-between items-center w-full p-5 font-medium text-left text-gray-200 bg-gray-800 hover:bg-gray-700/50 focus:outline-none focus:ring-1 focus:ring-[#FF0000]"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${item.question.replace(/\s+/g, '-')}`}
        >
          <span>{item.question}</span>
          <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </h3>
      <div
        id={`faq-content-${item.question.replace(/\s+/g, '-')}`}
        className={`p-5 border-t border-gray-700 bg-gray-800/50 transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ transitionProperty: 'max-height, padding', paddingTop: isOpen ? undefined : 0, paddingBottom: isOpen ? undefined : 0 }}
      >
        <p className="text-gray-400">{item.answer}</p>
      </div>
    </div>
  );
};


const FaqSectionOG: React.FC<{ faqs: FaqItem[]; }> = ({ faqs }) => { // onOpenChat prop removed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 animate-fade-in">
      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Perguntas Frequentes <span className="text-[#FF0000]">Método GH</span>
      </h2>
      <p className="text-center text-gray-400 mb-10 max-w-lg mx-auto">
        Tire suas dúvidas sobre os planos e o funcionamento do Método GH.
      </p>
      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            item={faq}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-400 mb-3">Ainda tem dúvidas sobre qual plano escolher?</p>
        {/* "Fale com Especialista GH" button removed */}
        <p className="text-gray-500 text-sm">Consulte os detalhes dos planos ou entre em contato por outros canais se disponíveis.</p> 
      </div>
    </section>
  );
};

export default FaqSectionOG;