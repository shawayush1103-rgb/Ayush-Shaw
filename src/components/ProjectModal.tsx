import React from 'react';
import { X, Calendar, Tag, User, CheckCircle2, Lightbulb, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  theme?: 'light' | 'navy' | 'aurora';
  onClose: () => void;
  onOpenCustomizer: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  theme = 'light',
  onClose,
  onOpenCustomizer,
}) => {
  if (!project) return null;
  const isLight = theme === 'light';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-2xl border rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto transition-colors ${
          isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-800 text-white'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-xl transition-colors ${
            isLight
              ? 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200'
              : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
          }`}
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                isLight
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
              }`}
            >
              {project.category}
            </span>
            <span
              className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full ${
                isLight ? 'text-slate-600 bg-slate-100' : 'text-slate-400 bg-slate-800'
              }`}
            >
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
            {project.isPlaceholder && (
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                  isLight
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                }`}
              >
                Customizable Placeholder
              </span>
            )}
          </div>
          <h3 className={`text-2xl font-bold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
            {project.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            {project.shortDescription}
          </p>
        </div>

        {/* Structured Details */}
        <div className="space-y-4">
          
          {/* Problem / Idea */}
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/70 border-slate-800/90'
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2 mb-1.5">
              <Lightbulb className="w-4 h-4" />
              <span>Problem / Idea</span>
            </div>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
              {project.problemOrIdea}
            </p>
          </div>

          {/* Role */}
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/70 border-slate-800/90'
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2 mb-1.5">
              <User className="w-4 h-4" />
              <span>Ayush&apos;s Role & Contribution</span>
            </div>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
              {project.role}
            </p>
          </div>

          {/* Outcome */}
          <div
            className={`p-4 rounded-xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/70 border-slate-800/90'
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600 flex items-center gap-2 mb-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Outcome & Key Takeaways</span>
            </div>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
              {project.outcome}
            </p>
          </div>

          {/* Skills Used */}
          <div>
            <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Skills & Methodologies Applied
            </div>
            <div className="flex flex-wrap gap-2">
              {project.skillsUsed.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                    isLight
                      ? 'bg-slate-100 text-slate-800 border-slate-200'
                      : 'bg-slate-800 text-slate-200 border-slate-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className={`mt-8 pt-5 border-t flex flex-wrap items-center justify-between gap-3 ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
          <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Project recorded for BBA portfolio showcase
          </div>

          <div className="flex items-center gap-2">
            {project.isPlaceholder ? (
              <button
                onClick={() => {
                  onClose();
                  onOpenCustomizer();
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                Edit this Project Details
              </button>
            ) : project.projectLink ? (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                <span>External Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}

            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
