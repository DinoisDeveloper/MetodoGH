import React from 'react';

interface StatItem {
  value: string;
  description: string;
}

interface StatsHighlightsOGProps { // Prop interface name remains
  stats: StatItem[];
}

const StatsHighlightsOG: React.FC<StatsHighlightsOGProps> = ({ stats }) => {
  return (
    <section className="py-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-xl text-center transition-all duration-300 hover:bg-gray-700/50"
          >
            <p className="text-4xl md:text-5xl font-bold text-[#FF0000] mb-2">{stat.value}</p>
            <p className="text-sm text-gray-300">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsHighlightsOG;