import React from 'react';

// Utility to play sound (assuming it's globally available or passed, for now direct call)
const playSound = (soundId: string) => {
  const sound = document.getElementById(soundId) as HTMLAudioElement;
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(error => console.warn(`Error playing sound ${soundId}:`, error));
  } else {
    console.warn(`Sound element with id ${soundId} not found.`);
  }
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'custom';
  children: React.ReactNode;
  className?: string;
  pulsate?: boolean;
  noSound?: boolean; // Option to disable sound for specific buttons if needed
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  pulsate = false,
  noSound = false,
  onClick,
  ...props
}) => {
  const baseStyle =
    'font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-md';

  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-[#FF0000] text-white hover:bg-[#FF3333] focus:ring-[#FF0000]';
      break;
    case 'secondary':
      variantStyle = 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500';
      break;
    case 'danger':
      variantStyle = 'bg-red-700 text-white hover:bg-red-800 focus:ring-red-600';
      break;
    case 'custom':
      variantStyle = ''; 
      break;
  }

  const pulseStyle = pulsate ? 'animate-pulse-red' : '';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!noSound) {
      playSound('audio-click');
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${pulseStyle} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};