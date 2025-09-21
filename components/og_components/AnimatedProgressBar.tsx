import React, { useState, useEffect, useRef } from 'react';

interface AnimatedProgressBarProps {
  label: string;
  targetProgress: number; // The percentage value (0-100)
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({ label, targetProgress }) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const requestRef = useRef<number | null>(null);
  const lastTargetRef = useRef(0);

  useEffect(() => {
    const previousProgress = displayProgress;
    
    if (targetProgress === lastTargetRef.current && displayProgress === targetProgress) return;
    lastTargetRef.current = targetProgress;

    const animationDuration = 500; // Total duration of animation
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / animationDuration, 1); // 0 to 1
      const currentAnimatedValue = Math.floor(previousProgress + (targetProgress - previousProgress) * progress);
      
      setDisplayProgress(currentAnimatedValue);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(step);
      } else {
        setDisplayProgress(targetProgress); // Ensure it ends exactly on target
      }
    };
    
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    requestRef.current = requestAnimationFrame(step);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [targetProgress]);

  return (
    <div>
      <div className="flex justify-between text-sm text-gray-400 mb-1">
        <span>{label}</span>
        <span>{displayProgress}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-[#FF0000] h-2.5 rounded-full"
          style={{ width: `${displayProgress}%`, transition: 'width 0.1s linear' }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedProgressBar;