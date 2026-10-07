import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, MapPin, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onOpenCustomizer: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  data,
  onOpenCustomizer,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const isRealResumeUrl =
    data.personal.resumeUrl &&
    data.personal.resumeUrl !== '[Resume PDF URL]' &&
    data.personal.resumeUrl.startsWith('http');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="no-print p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-sm font-bold text-white">
              Ayush Shaw — Academic CV & Profile Preview
            </span>
            <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
              BBA Undergraduate
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {isRealResumeUrl ? (
              <a
                href={data.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open External PDF</span>
              </a>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onOpenCustomizer();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
                title="Connect your Google Drive or PDF link"
              >
                <span>[Set Resume URL]</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Canvas */}
        <div className="p-6 sm:p-10 bg-white text-slate-900 max-h-[80vh] overflow-y-auto print:max-h-none print:p-0 print:overflow-visible">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-950 uppercase">
                  {data.personal.name}
                </h1>
                <p className="text-sm font-semibold text-blue-700 tracking-wide mt-0.5">
                  Bachelor of Business Administration (BBA) Student • Vedanta College
                </p>
              </div>
              <div className="text-xs text-slate-600 sm:text-right space-y-0.5 font-medium">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3 h-3 text-slate-500" />
                  <span>{data.personal.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>{data.personal.location}</span>
                </div>
                <div>{data.personal.phone}</div>
              </div>
            </div>
          </div>

          {/* Professional Profile Objective */}
          <div className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Profile
            </h2>
            <p className="text-xs leading-relaxed text-slate-700 text-justify">
              Motivated second-year Bachelor of Business Administration (BBA) student at Vedanta College, Kolkata. Demonstrating a disciplined academic foundation in business management, modern organizational behavior, and commercial strategy. Seeking opportunities to apply conceptual business principles to solve real-world organizational challenges and develop practical executive capabilities.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-slate-950">
                  {data.educationDetails.degree}
                </h3>
                <p className="text-xs text-slate-700 font-medium">
                  {data.educationDetails.institution}, {data.educationDetails.location}
                </p>
                <p className="text-[11px] text-slate-600 italic mt-0.5">
                  Current Status: {data.educationDetails.status}
                </p>
              </div>
              <div className="text-right text-xs font-semibold text-slate-800">
                {data.personal.startYear} – {data.personal.expectedGraduationYear}
              </div>
            </div>
          </div>

          {/* Coursework & Learning Modules */}
          <div className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Key Academic Coursework & Disciplines
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-700">
              <div>• Principles of Business Management</div>
              <div>• Financial Accounting & Basics</div>
              <div>• Organizational Behaviour & Dynamics</div>
              <div>• Marketing Fundamentals & Strategy</div>
              <div>• Business Communication & Reporting</div>
              <div>• Business Analytics & Data Insights</div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Core Skills & Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Management & Strategy:</span>
                Strategic thinking, problem-solving, case analysis, team coordination.
              </div>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Communication & Presentation:</span>
                Formal business writing, presentation deck preparation, collaborative speaking.
              </div>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Digital & Software Tools:</span>
                Microsoft Excel & Sheets basics, PowerPoint / Slides, Canva for presentations.
              </div>
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Personal Disciplines:</span>
                Continuous learning, adaptability, research diligence, ethical integrity.
              </div>
            </div>
          </div>

          {/* Academic Projects Snapshot */}
          <div className="mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Academic Projects & Case Studies
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-950">
                    Business Model Case Study: Retail to Digital Transformation
                  </h3>
                  <span className="text-[11px] text-slate-600">2024</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-snug mt-0.5">
                  Conducted qualitative research on adaptation pathways for traditional retailers in Kolkata; evaluated SWOT parameters and omnichannel loyalty workflows.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-950">
                    Sustainable Campus Venture: Student Peer Exchange Concept
                  </h3>
                  <span className="text-[11px] text-slate-600">2024</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-snug mt-0.5">
                  Formulated a lean canvas and value proposition model for a localized, peer-to-peer textbook and academic resource circulation network.
                </p>
              </div>
            </div>
          </div>

          {/* Activities & Engagement */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Activities & Extracurriculars
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <p>• Participant in Vedanta College Inter-College Management & Academic Forums</p>
              <p>• {data.achievements[1]?.title || '[Add Competition / Business Plan Contest]'}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
