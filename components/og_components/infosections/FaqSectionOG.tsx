import React, { useState } from 'react';
import { FaqItem } from '../../../types'; 
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
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-5 border-t border-gray-700 bg-gray-800/50">
          <p className="text-gray-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};


const FaqSectionOG: React.FC<{ faqs: FaqItem[]; uiText: { title: string; subtitle: string; footerText: string; footerSubtext: string } }> = ({ faqs, uiText }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first question by default

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 animate-fade-in">
      <h2 className="text-center text-3xl font-bold text-white mb-8"
        dangerouslySetInnerHTML={{ __html: uiText.title }}
      >
      </h2>
      <p className="text-center text-gray-400 mb-10 max-w-lg mx-auto">
        {uiText.subtitle}
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
        <p className="text-gray-400 mb-3">{uiText.footerText}</p>
        <p className="text-gray-500 text-sm">{uiText.footerSubtext}</p> 
      </div>
    </section>
  );
};

export default FaqSectionOG;
