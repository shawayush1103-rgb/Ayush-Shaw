import React from 'react';
import {
  ArrowDown,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  ExternalLink,
  ChevronRight,
  Camera,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface HeroProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
  onOpenResumeModal: () => void;
  onOpenCustomizerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  data,
  theme,
  onOpenResumeModal,
  onOpenCustomizerModal,
}) => {
  const isLight = theme === 'light';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden transition-colors duration-300 ${
        isLight
          ? 'bg-gradient-to-b from-slate-100/90 via-slate-50 to-white text-slate-900 border-b border-slate-200/60'
          : theme === 'aurora'
          ? 'bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 text-white'
          : 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white'
      }`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isLight ? 'bg-grid-light opacity-35' : 'bg-grid-dark opacity-20'
        }`}
      ></div>

      {/* Ambient Gradient Highlights */}
      <div
        className={`absolute -top-40 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          isLight ? 'bg-blue-400/10' : theme === 'aurora' ? 'bg-indigo-500/25' : 'bg-blue-600/15'
        }`}
      ></div>
      <div
        className={`absolute top-1/2 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
          isLight ? 'bg-indigo-300/10' : theme === 'aurora' ? 'bg-sky-500/15' : 'bg-indigo-600/10'
        }`}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-6">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  isLight
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                Vedanta College • BBA 2nd Year
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  isLight
                    ? 'bg-slate-100 text-slate-700 border border-slate-200'
                    : 'bg-slate-800/80 text-slate-300 border border-slate-700/60'
                }`}
              >
                <MapPin className="w-3 h-3 text-emerald-500" />
                {data.personal.location}
              </span>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              <span className={`block ${isLight ? 'text-slate-950' : 'text-slate-100'}`}>
                {data.personal.name}
              </span>
            </h1>

            {/* Subtitle / Professional Headline */}
            <div
              className={`text-lg sm:text-xl font-medium mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 ${
                isLight ? 'text-blue-600 font-semibold' : 'text-blue-400'
              }`}
            >
              <span>BBA Student</span>
              <span className={isLight ? 'text-slate-400' : 'text-slate-500'}>•</span>
              <span>Aspiring Business Professional</span>
              <span className={isLight ? 'text-slate-400' : 'text-slate-500'}>•</span>
              <span>Entrepreneurial Mindset</span>
            </div>

            {/* Authentic Introduction */}
            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              {data.personal.bioShort}
            </p>

            {/* Strategic Pillars Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-9">
              <div
                className={`p-3 rounded-xl border transition-colors ${
                  isLight
                    ? 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div
                  className={`text-xs uppercase tracking-wider font-semibold mb-1 ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  Program
                </div>
                <div className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  BBA (2nd Year)
                </div>
              </div>

              <div
                className={`p-3 rounded-xl border transition-colors ${
                  isLight
                    ? 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div
                  className={`text-xs uppercase tracking-wider font-semibold mb-1 ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  Institution
                </div>
                <div className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Vedanta College
                </div>
              </div>

              <div
                className={`p-3 rounded-xl border transition-colors col-span-2 sm:col-span-1 ${
                  isLight
                    ? 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div
                  className={`text-xs uppercase tracking-wider font-semibold mb-1 ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  Focus
                </div>
                <div className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Strategy & Management
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border transition-all hover:translate-y-[-1px] cursor-pointer ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
                }`}
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                    : 'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>Resume / CV</span>
                <ExternalLink className={`w-3.5 h-3.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`} />
              </button>
            </div>

          </div>

          {/* Right Column: Visual Persona & Photo Placeholder Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Card Ambient Glow */}
              <div
                className={`absolute -inset-1 rounded-3xl blur-xl opacity-70 ${
                  isLight
                    ? 'bg-gradient-to-r from-blue-300/40 to-indigo-300/40'
                    : 'bg-gradient-to-r from-blue-600/30 to-indigo-600/30'
                }`}
              ></div>

              {/* Main Profile Card Container */}
              <div
                className={`relative rounded-3xl border p-6 sm:p-8 shadow-2xl transition-colors ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
                }`}
              >
                
                {/* Photo Display / Placeholder Box */}
                <div
                  className={`relative aspect-square w-full rounded-2xl overflow-hidden border flex flex-col items-center justify-center text-center p-6 group transition-colors ${
                    isLight
                      ? 'bg-gradient-to-b from-slate-50 to-slate-100 border-slate-200'
                      : 'bg-gradient-to-b from-slate-800 to-slate-950 border-slate-700/80'
                  }`}
                >
                  {data.personal.photoUrl ? (
                    <img
                      src={data.personal.photoUrl}
                      alt={data.personal.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3">
                      {/* Monogram Badge */}
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white text-3xl font-extrabold tracking-widest shadow-inner border border-blue-400/30">
                        AS
                      </div>
                      <div className="mt-2 text-center">
                        <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/30 mb-2">
                          [Add Professional Photo]
                        </span>
                        <p
                          className={`text-xs max-w-[220px] mx-auto leading-relaxed ${
                            isLight ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          Placeholder for Ayush Shaw&apos;s verified portrait or business headshot.
                        </p>
                      </div>

                      {/* Interactive preview action */}
                      <button
                        onClick={onOpenCustomizerModal}
                        className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          isLight
                            ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-xs'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                        }`}
                      >
                        <Camera className="w-3.5 h-3.5 text-blue-500" />
                        <span>Preview Your Photo</span>
                      </button>
                    </div>
                  )}

                  {/* Corner verified badge */}
                  <div
                    className={`absolute top-3 left-3 backdrop-blur-sm px-2.5 py-1 rounded-md border text-[11px] font-medium flex items-center gap-1.5 ${
                      isLight
                        ? 'bg-white/90 border-slate-200 text-slate-700 shadow-xs'
                        : 'bg-slate-900/90 border-slate-700/80 text-slate-300'
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-500" />
                    <span>Academic Profile</span>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div
                  className={`mt-5 pt-4 border-t flex items-center justify-between ${
                    isLight ? 'border-slate-100' : 'border-slate-800/80'
                  }`}
                >
                  <div>
                    <h3 className={`font-semibold text-base ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      Ayush Shaw
                    </h3>
                    <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      Vedanta College • Kolkata
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded border ${
                        isLight
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : 'bg-blue-900/40 text-blue-300 border border-blue-800'
                      }`}
                    >
                      BBA 2nd Year
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div
          className={`mt-14 pt-6 border-t flex justify-center ${
            isLight ? 'border-slate-200/80' : 'border-slate-800/40'
          }`}
        >
          <button
            onClick={() => scrollTo('about')}
            className={`flex items-center gap-2 text-xs font-medium transition-colors cursor-pointer group ${
              isLight ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Explore Academic Journey</span>
            <ArrowDown className="w-3.5 h-3.5 text-blue-500 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
