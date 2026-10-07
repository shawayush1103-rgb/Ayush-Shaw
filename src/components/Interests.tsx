import React from 'react';
import {
  Rocket,
  TrendingUp,
  PieChart,
  Megaphone,
  Cpu,
  BookOpen,
  Sparkles,
  Compass
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface InterestsProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
}

export const Interests: React.FC<InterestsProps> = ({ data, theme }) => {
  const isLight = theme === 'light';

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-amber-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-500" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5 text-emerald-500" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-pink-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-500" />;
      default:
        return <Compass className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section
      id="interests"
      className={`py-20 transition-colors duration-300 relative ${
        isLight ? 'bg-white text-slate-800' : 'bg-slate-950 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
              isLight
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Curiosity & Horizons</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
            Professional & Business Interests
          </h2>
          <p className={`mt-3 text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Disciplines and emerging trends Ayush Shaw actively studies and explores beyond core BBA lectures. Presented transparently as subjects of interest and career curiosity.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.interests.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-6 rounded-2xl border transition-all shadow-md group ${
                isLight
                  ? 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                  : 'bg-slate-900 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl border group-hover:scale-105 transition-transform ${
                      isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    {getInterestIcon(item.iconName)}
                  </div>
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                      isLight ? 'bg-slate-200/70 text-slate-700' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold mb-2 transition-colors ${
                    isLight ? 'text-slate-950 group-hover:text-blue-600' : 'text-white group-hover:text-blue-300'
                  }`}
                >
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  {item.description}
                </p>
              </div>

              <div
                className={`mt-6 pt-3 border-t flex items-center justify-between text-xs ${
                  isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800/70 text-slate-400'
                }`}
              >
                <span>Active Reading & Inquiry</span>
                <span className="text-blue-600 text-[11px] font-semibold">Student Focus</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
