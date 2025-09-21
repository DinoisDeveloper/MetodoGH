import React from 'react';
import { TestimonialItem } from '../../../types'; 

interface RealResultsSectionOGProps {
  testimonials: TestimonialItem[];
  uiText: {
    title: string;
    subtitle: string;
    ageSuffix: string;
  };
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const RealResultsSectionOG: React.FC<RealResultsSectionOGProps> = ({ testimonials, uiText }) => {
  return (
    <section className="py-8 animate-fade-in">
      <h2 className="text-center text-3xl font-bold text-white mb-8"
        dangerouslySetInnerHTML={{ __html: uiText.title }}
      >
      </h2>
      <p className="text-center text-gray-400 mb-10 max-w-lg mx-auto">
        {uiText.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-105 
                        ${testimonial.bgColorClass || 'bg-gray-800'} 
                        ${testimonial.textColorClass || 'text-white'}`}
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full 
                                     ${testimonial.planName.toLowerCase().includes('essencial') ? 'bg-white text-[#FF0000]' : 
                                       testimonial.planName.toLowerCase().includes('elite') ? 'bg-white text-purple-600' : 'bg-white text-blue-600'}`}>
                    {testimonial.planName}
                  </span>
                  <h3 className="text-lg font-semibold mt-1">{testimonial.personName}, {testimonial.age} {uiText.ageSuffix}</h3>
                </div>
                <p className={`text-2xl font-bold ${testimonial.planName.toLowerCase().includes('essencial') ? 'text-white' : 'text-[#FF0000]'}`}>
                    {testimonial.gain}
                </p>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="text-sm mt-3 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealResultsSectionOG;
