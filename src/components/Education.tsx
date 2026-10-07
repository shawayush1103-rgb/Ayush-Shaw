import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
  Building2,
  Clock
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface EducationProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
}

export const Education: React.FC<EducationProps> = ({ data, theme }) => {
  const isLight = theme === 'light';

  return (
    <section
      id="education"
      className={`py-20 transition-colors duration-300 relative ${
        isLight ? 'bg-white text-slate-800' : 'bg-slate-950 text-white'
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
            Education
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Formal undergraduate academic training shaping business perspective, analytical acumen, and management foundation.
          </p>
        </div>

        {/* Timeline & Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Education Card */}
          <div className="lg:col-span-8">
            <div
              className={`relative rounded-2xl border p-6 sm:p-9 shadow-xl overflow-hidden transition-colors ${
                isLight ? 'bg-slate-50/70 border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              {/* Decorative accent top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400"></div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Affiliated Higher Education</span>
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold ${isLight ? 'text-slate-950' : 'text-white'}`}>
                    {data.educationDetails.degree}
                  </h3>
                  <div className={`text-lg font-semibold mt-1 ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {data.educationDetails.institution}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                      isLight
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    {data.educationDetails.status}
                  </span>
                  <div className={`flex items-center gap-1 text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{data.educationDetails.location}</span>
                  </div>
                </div>
              </div>

              {/* Verified Dates & Placeholders Box */}
              <div
                className={`p-4 rounded-xl border mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                  <div>
                    <span className={`text-xs block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Academic Timeline:</span>
                    <span className={`text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                      {data.personal.startYear} — {data.personal.expectedGraduationYear}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-amber-700 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30">
                  Exact start & graduation years can be configured via Customize
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <h4 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  <Award className="w-4 h-4 text-blue-500" />
                  <span>Program Focus & Academic Engagement</span>
                </h4>
                <div className="grid grid-cols-1 gap-3 pt-1">
                  {data.educationDetails.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3 rounded-lg border text-sm ${
                        isLight
                          ? 'bg-white border-slate-200/90 text-slate-700'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-300'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Core Foundations Card */}
          <div className="lg:col-span-4 space-y-4">
            <div
              className={`rounded-2xl border p-6 shadow-xl transition-colors ${
                isLight ? 'bg-slate-50/70 border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <h4 className={`text-base font-bold mb-3 flex items-center gap-2 ${isLight ? 'text-slate-950' : 'text-white'}`}>
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>BBA Academic Pillars</span>
              </h4>
              <p className={`text-xs mb-4 leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Foundational disciplines forming the Bachelor of Business Administration core:
              </p>

              <div className="space-y-2.5">
                {[
                  { name: "Principles of Management", tag: "Management" },
                  { name: "Business Organization", tag: "Strategy" },
                  { name: "Managerial Economics", tag: "Economics" },
                  { name: "Business Communication", tag: "Core" },
                  { name: "Financial Accounting", tag: "Finance" },
                  { name: "Marketing Essentials", tag: "Commerce" },
                ].map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs ${
                      isLight
                        ? 'bg-white border-slate-200 text-slate-800'
                        : 'bg-slate-950/60 border-slate-800/70 text-slate-200'
                    }`}
                  >
                    <span className="font-medium">{pillar.name}</span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Credential Note */}
            <div
              className={`p-4 rounded-xl border text-xs leading-relaxed ${
                isLight
                  ? 'bg-blue-50/70 border-blue-200 text-slate-700'
                  : 'bg-blue-950/30 border-blue-900/40 text-slate-300'
              }`}
            >
              <span className={`font-semibold block mb-1 ${isLight ? 'text-blue-800' : 'text-blue-300'}`}>
                Authentic Profile Assurance:
              </span>
              Academic progress is strictly represented as an active 2nd-year undergraduate at Vedanta College without exaggerated marks or fictional claims.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
