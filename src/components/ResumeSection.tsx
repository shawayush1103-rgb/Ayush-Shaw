import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Printer,
  Eye,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ResumeSectionProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
  onOpenResumeModal: () => void;
  onOpenCustomizerModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  data,
  theme,
  onOpenResumeModal,
  onOpenCustomizerModal,
}) => {
  const isLight = theme === 'light';

  const isRealResumeUrl =
    data.personal.resumeUrl &&
    data.personal.resumeUrl !== '[Resume PDF URL]' &&
    data.personal.resumeUrl.startsWith('http');

  return (
    <section
      id="resume"
      className={`py-20 border-t transition-colors duration-300 relative ${
        isLight ? 'bg-slate-50/70 border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-800 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Container */}
        <div
          className={`rounded-3xl border p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-colors ${
            isLight
              ? 'bg-gradient-to-br from-white via-slate-50 to-white border-slate-200'
              : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-slate-800'
          }`}
        >
          {/* Subtle Ambient Light */}
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
              isLight ? 'bg-blue-300/15' : 'bg-blue-600/10'
            }`}
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                  isLight
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
                Resume & Academic Profile
              </h2>

              <p className={`text-base leading-relaxed max-w-2xl ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                A concise, structured record of Ayush Shaw&apos;s BBA coursework at Vedanta College, foundational business competencies, projects, and co-curricular milestones.
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
                <div className={`flex items-center gap-2 text-xs sm:text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Vedanta College 2nd-Year BBA</span>
                </div>
                <div className={`flex items-center gap-2 text-xs sm:text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Verified academic integrity</span>
                </div>
                <div className={`flex items-center gap-2 text-xs sm:text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Print-ready 1-page layout</span>
                </div>
                <div className={`flex items-center gap-2 text-xs sm:text-sm ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Connectable external PDF URL</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-start lg:items-end">
              
              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Preview & Print Resume</span>
              </button>

              {isRealResumeUrl ? (
                <a
                  href={data.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm border transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-xs'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <Download className="w-4 h-4 text-blue-500" />
                  <span>Direct Download PDF</span>
                  <ExternalLink className={`w-3.5 h-3.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`} />
                </a>
              ) : (
                <button
                  onClick={onOpenCustomizerModal}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-xs border transition-colors ${
                    isLight
                      ? 'bg-amber-50/90 hover:bg-amber-100 text-amber-800 border-amber-300'
                      : 'bg-slate-800/80 hover:bg-slate-800 text-amber-300 border-amber-500/30'
                  }`}
                  title="Link your own PDF or Google Drive resume link"
                >
                  <Download className="w-4 h-4 text-amber-600" />
                  <span>Download Resume ({data.personal.resumeUrl})</span>
                </button>
              )}

              <span className={`text-[11px] text-left lg:text-right ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Accessible to recruiters, faculty, and business mentors.
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
