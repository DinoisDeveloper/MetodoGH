
import React from 'react';

export const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.68-3.091a4.503 4.503 0 00-1.02.072H8.25c-1.136 0-2.097-.847-2.193-1.98A18.75 18.75 0 016 12.75c0-1.136.847-2.097 1.98-2.193.34-.027.68-.052 1.02-.072V6.75A4.506 4.506 0 0112 4.5h4.506c1.136 0 2.097.847 2.193 1.98.027.34.052.68.072 1.02z" 
    />
  </svg>
);
