import React, { useState } from 'react';
import {
  Briefcase,
  MessageSquare,
  Users,
  Rocket,
  Search,
  Presentation,
  Laptop,
  Sparkles,
  PlusCircle,
  Tag,
  CheckCircle2
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface SkillsProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
  onOpenCustomizerModal: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ data, theme, onOpenCustomizerModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const isLight = theme === 'light';

  const categories = ['All', ...data.skills.map((s) => s.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? data.skills
      : data.skills.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Business & Management':
        return <Briefcase className="w-4 h-4 text-blue-500" />;
      case 'Communication':
        return <MessageSquare className="w-4 h-4 text-cyan-500" />;
      case 'Leadership & Teamwork':
      case 'Leadership':
        return <Users className="w-4 h-4 text-emerald-500" />;
      case 'Entrepreneurship':
        return <Rocket className="w-4 h-4 text-amber-500" />;
      case 'Research & Analysis':
        return <Search className="w-4 h-4 text-indigo-500" />;
      case 'Presentation & Pitching':
      case 'Presentation':
        return <Presentation className="w-4 h-4 text-purple-500" />;
      case 'Digital Skills & Tools':
      case 'Digital Skills':
        return <Laptop className="w-4 h-4 text-sky-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section
      id="skills"
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
              <Tag className="w-3.5 h-3.5" />
              <span>Core Competencies & Learning Focus</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
              Skills & Business Capabilities
            </h2>
            <p className={`mt-3 text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Structured across core managerial, analytical, communicative, and digital domains. No inflated percentage bars—grounded in active coursework and practical application.
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
            <span>Add / Edit Your Skills</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : isLight
                  ? 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className={`flex flex-col rounded-2xl border p-5 transition-all shadow-md group ${
                isLight
                  ? 'bg-white border-slate-200 hover:border-slate-300'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Category Header */}
              <div className={`flex items-center gap-2.5 mb-2 pb-3 border-b ${isLight ? 'border-slate-100' : 'border-slate-800/80'}`}>
                <div className={`p-2 rounded-lg border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
                  {getCategoryIcon(catGroup.category)}
                </div>
                <div>
                  <h3 className={`font-bold text-sm leading-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {catGroup.category}
                  </h3>
                </div>
              </div>

              <p className={`text-[11px] mb-4 min-h-[28px] leading-tight ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {catGroup.description}
              </p>

              {/* Skill Items List */}
              <div className="space-y-2 mt-auto">
                {catGroup.skills.map((skill, sIdx) => {
                  const isPlace = skill.isPlaceholder || skill.name.startsWith('[');
                  return (
                    <div
                      key={sIdx}
                      className={`p-2.5 rounded-xl border text-xs transition-colors flex items-center justify-between gap-2 ${
                        isPlace
                          ? isLight
                            ? 'bg-amber-50/70 border-amber-200 text-amber-800'
                            : 'bg-amber-500/5 border-amber-500/20 text-amber-300/90'
                          : isLight
                          ? 'bg-slate-50/80 border-slate-200/80 text-slate-700 hover:border-blue-300'
                          : 'bg-slate-900/90 border-slate-800/90 text-slate-200 hover:border-blue-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {isPlace ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        )}
                        <span className="font-medium truncate">{skill.name}</span>
                      </div>

                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded shrink-0 ${
                          isPlace
                            ? isLight
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-amber-500/10 text-amber-300'
                            : isLight
                            ? 'bg-slate-200/70 text-slate-600'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {skill.levelDescription}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Standards Note */}
        <div
          className={`mt-10 p-4 rounded-xl border text-center max-w-2xl mx-auto ${
            isLight
              ? 'bg-white border-slate-200 text-slate-600 shadow-xs'
              : 'bg-slate-950/60 border-slate-800 text-slate-400'
          }`}
        >
          <p className="text-xs">
            <span className="text-blue-600 font-semibold">Note for Recruiters & Mentors:</span> All skills reflect Ayush Shaw&apos;s current academic curriculum, student case presentations, and collaborative coursework at Vedanta College.
          </p>
        </div>

      </div>
    </section>
  );
};
