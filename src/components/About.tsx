import React from 'react';
import {
  BookOpen,
  Target,
  Compass,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  Brain,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface AboutProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
}

export const About: React.FC<AboutProps> = ({ data, theme }) => {
  const isLight = theme === 'light';

  return (
    <section
      id="about"
      className={`py-20 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-slate-50/80 border-slate-200 text-slate-800'
          : 'bg-slate-900/50 border-slate-800/80 text-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
              isLight
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Profile & Mindset</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
            About Ayush Shaw
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            A second-year BBA student at Vedanta College, developing a holistic foundation in enterprise management, business strategy, and entrepreneurial problem-solving.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl border shadow-xl space-y-5 transition-colors ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <h3 className={`text-xl font-bold flex items-center gap-2.5 ${isLight ? 'text-slate-950' : 'text-white'}`}>
                <Compass className="w-5 h-5 text-blue-500" />
                <span>Academic Direction & Passion</span>
              </h3>
              
              {data.personal.bioLong.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`leading-relaxed text-sm sm:text-base ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              <div className={`pt-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 ${isLight ? 'border-slate-100' : 'border-slate-800/80'}`}>
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg border shrink-0 mt-0.5 ${
                      isLight ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-blue-900/40 border-blue-800 text-blue-400'
                    }`}
                  >
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      Current Objective
                    </h4>
                    <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      Building solid analytical and managerial skills for future corporate roles and startup ventures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg border shrink-0 mt-0.5 ${
                      isLight ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-indigo-900/40 border-indigo-800 text-indigo-400'
                    }`}
                  >
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      Core Value
                    </h4>
                    <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      Curiosity, integrity, teamwork, and an evidence-backed approach to decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guiding Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className={`p-5 rounded-xl border transition-colors ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900/70 border-slate-800'
                }`}
              >
                <div className="text-blue-500 mb-2">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className={`text-sm font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Analytical Rigor
                </h4>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Interpreting market data and case realities rather than relying on intuition alone.
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border transition-colors ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900/70 border-slate-800'
                }`}
              >
                <div className="text-emerald-500 mb-2">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className={`text-sm font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Growth Mindset
                </h4>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Treating every assignment, case debate, and project as a stepping stone to excellence.
                </p>
              </div>

              <div
                className={`p-5 rounded-xl border transition-colors ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900/70 border-slate-800'
                }`}
              >
                <div className="text-purple-500 mb-2">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className={`text-sm font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Collaborative Spirit
                </h4>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Believing high-performing teams outperform individual efforts in any organization.
                </p>
              </div>
            </div>

          </div>

          {/* Currently Learning Subsection */}
          <div className="lg:col-span-5">
            <div
              className={`p-6 sm:p-7 rounded-2xl border shadow-xl transition-colors ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <div className={`flex items-center justify-between mb-4 pb-3 border-b ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Currently Learning
                  </h3>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                    isLight ? 'bg-slate-100 text-slate-600 border-slate-200' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  BBA 2nd Year
                </span>
              </div>

              <p className={`text-xs mb-5 leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Active subjects and strategic business disciplines Ayush is currently engaged in at Vedanta College:
              </p>

              <div className="space-y-3.5">
                {data.currentlyLearning.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3.5 rounded-xl border transition-all group ${
                      isLight
                        ? 'bg-slate-50/70 border-slate-200/80 hover:border-blue-300'
                        : 'bg-slate-950/70 border-slate-800/90 hover:border-blue-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4
                        className={`text-sm font-semibold transition-colors ${
                          isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-slate-100 group-hover:text-blue-300'
                        }`}
                      >
                        {item.subject}
                      </h4>
                      <span
                        className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${
                          isLight
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : 'bg-blue-900/30 text-blue-300 border-blue-800/50'
                        }`}
                      >
                        {item.area}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${isLight ? 'border-slate-100 text-slate-500' : 'border-slate-800 text-slate-400'}`}>
                <span>Continuously expanding scope</span>
                <span className="text-blue-600 font-semibold">Vedanta College</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
