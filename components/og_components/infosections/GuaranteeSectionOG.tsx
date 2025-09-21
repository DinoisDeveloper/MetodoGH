import React from 'react';

interface GuaranteeSectionOGProps { // Prop interface name remains
  title: string;
  description: string;
}

const GuaranteeSectionOG: React.FC<GuaranteeSectionOGProps> = ({ title, description }) => {
  return (
    <section className="py-8 bg-gray-800 rounded-xl shadow-xl animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
             <svg className="h-16 w-16 text-[#FF0000]" fill="currentColor" viewBox="0 0 20 20">
                <use href="#icon-shield-check" />
            </svg>
          </div>
          <div className="sm:ml-6">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mt-2 text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSectionOG;