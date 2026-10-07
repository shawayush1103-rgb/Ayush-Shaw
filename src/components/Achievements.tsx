import React, { useState } from 'react';
import {
  Award,
  Calendar,
  Building,
  Trophy,
  Scroll,
  Users,
  Compass,
  CheckCircle2,
  PlusCircle,
  HelpCircle
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface AchievementsProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
  onOpenCustomizerModal: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({
  data,
  theme,
  onOpenCustomizerModal,
}) => {
  const [filter, setFilter] = useState<string>('All');
  const isLight = theme === 'light';

  const categories = [
    'All',
    'Competitions',
    'College Activities',
    'Certifications',
    'Workshops & Seminars',
    'Leadership'
  ];

  const filteredAchievements =
    filter === 'All'
      ? data.achievements
      : data.achievements.filter((a) => a.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Competitions':
        return <Trophy className="w-4 h-4 text-amber-500" />;
      case 'Certifications':
        return <Scroll className="w-4 h-4 text-emerald-500" />;
      case 'Leadership':
        return <Users className="w-4 h-4 text-indigo-500" />;
      default:
        return <Award className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <section
      id="achievements"
      className={`py-20 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-slate-50/70 border-slate-200 text-slate-800'
          : 'bg-slate-900 border-slate-800/80 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                isLight
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Milestones & Involvements</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
              Achievements & Activities
            </h2>
            <p className={`mt-3 text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Co-curricular participation, inter-college activities, workshops, and verified student milestones. Genuine records only.
            </p>
          </div>

          <button
            onClick={onOpenCustomizerModal}
            className={`self-start md:self-end flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              isLight
                ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <PlusCircle className="w-4 h-4 text-blue-500" />
            <span>Add / Edit Milestone</span>
          </button>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filter === c
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : isLight
                  ? 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Achievements Timeline & Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((item) => {
            const isPlace = item.isPlaceholder;

            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between rounded-2xl p-6 border transition-all ${
                  isPlace
                    ? isLight
                      ? 'bg-amber-50/40 border-dashed border-amber-300 text-amber-900'
                      : 'bg-slate-950/60 border-dashed border-amber-500/30'
                    : isLight
                    ? 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                    : 'bg-slate-950/90 border-slate-800 hover:border-slate-700 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                        {getCategoryIcon(item.category)}
                      </div>
                      <span className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        {item.category}
                      </span>
                    </div>

                    <div
                      className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${
                        isLight ? 'bg-slate-100 text-slate-600 border-slate-200' : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3 className={`text-lg font-bold mb-2 leading-snug ${isLight ? 'text-slate-950' : 'text-white'}`}>
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-blue-600 font-medium mb-3">
                    <Building className="w-3.5 h-3.5" />
                    <span>{item.organization}</span>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                    {item.description}
                  </p>
                </div>

                {isPlace && (
                  <div className={`mt-5 pt-3 border-t flex items-center justify-between text-xs ${isLight ? 'border-amber-200/60 text-amber-800' : 'border-slate-900 text-amber-300/80'}`}>
                    <span className="flex items-center gap-1">
                      <HelpCircle className="w-3 h-3" />
                      Placeholder entry
                    </span>
                    <button
                      onClick={onOpenCustomizerModal}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Configure in Profile
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Verification Footer Note */}
        <div
          className={`mt-12 p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            isLight
              ? 'bg-white border-slate-200 text-slate-600 shadow-xs'
              : 'bg-slate-950/40 border-slate-800/80 text-slate-400'
          }`}
        >
          <div>
            <span className={isLight ? 'text-slate-900 font-medium' : 'text-white font-medium'}>
              Standards of Representation: 
            </span>{' '}
            This portfolio maintains full academic integrity. Only confirmed certificates and participations are showcased.
          </div>
          <div className="text-blue-600 font-semibold">
            Vedanta College • 2024–Present
          </div>
        </div>

      </div>
    </section>
  );
};
