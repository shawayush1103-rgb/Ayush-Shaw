import React, { useState } from 'react';
import {
  FolderGit2,
  Calendar,
  User,
  ArrowRight,
  PlusCircle,
  ExternalLink,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { ProjectItem, PortfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
  onOpenCustomizerModal: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ data, theme, onOpenCustomizerModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const isLight = theme === 'light';

  const categories = [
    'All',
    'Case Studies',
    'Business Ideas',
    'Academic Projects',
    'Entrepreneurship Projects'
  ];

  const filteredProjects =
    selectedFilter === 'All'
      ? data.projects
      : data.projects.filter((p) => p.category === selectedFilter);

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 relative ${
        isLight ? 'bg-white text-slate-800' : 'bg-slate-950 text-white'
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
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Initiatives & Applied Work</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
              Academic & Business Projects
            </h2>
            <p className={`mt-3 text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Practical case studies, conceptual venture frameworks, and collaborative BBA research conducted during studies at Vedanta College.
            </p>
          </div>

          <button
            onClick={onOpenCustomizerModal}
            className={`self-start md:self-end flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              isLight
                ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <PlusCircle className="w-4 h-4 text-blue-500" />
            <span>Add / Edit Projects</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : isLight
                  ? 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => {
            const isPlace = project.isPlaceholder;

            return (
              <div
                key={project.id}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 border ${
                  isPlace
                    ? isLight
                      ? 'bg-amber-50/40 border-amber-300/60 hover:border-amber-400'
                      : 'bg-slate-900/60 border-amber-500/30 hover:border-amber-500/60'
                    : isLight
                    ? 'bg-slate-50/70 border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md'
                    : 'bg-slate-900 border-slate-800 hover:border-blue-500/50 shadow-xl'
                }`}
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isPlace
                          ? isLight
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                          : isLight
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                      }`}
                    >
                      {project.category}
                    </span>

                    <div className={`flex items-center gap-1.5 text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className={`text-xl font-bold mb-2.5 leading-snug ${isLight ? 'text-slate-950' : 'text-white'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-5 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                    {project.shortDescription}
                  </p>

                  {/* Role & Problem Snapshot */}
                  <div
                    className={`space-y-2 mb-6 text-xs p-3.5 rounded-xl border ${
                      isLight
                        ? 'bg-white border-slate-200'
                        : 'bg-slate-950/60 border-slate-800/80'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className={`font-semibold shrink-0 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Problem / Idea:</span>
                      <span className={`line-clamp-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>{project.problemOrIdea}</span>
                    </div>
                    <div className={`flex items-start gap-2 pt-1.5 border-t ${isLight ? 'border-slate-100' : 'border-slate-800/60'}`}>
                      <span className={`font-semibold shrink-0 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Role:</span>
                      <span className={isLight ? 'text-slate-800' : 'text-slate-300'}>{project.role}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.skillsUsed.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium border ${
                          isLight
                            ? 'bg-white text-slate-700 border-slate-200'
                            : 'bg-slate-800 text-slate-300 border-slate-700/60'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className={`pt-4 border-t flex items-center justify-between mt-auto ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
                  <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {isPlace ? 'Placeholder ready for customization' : 'Outcome documented'}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={activeModalProject}
          theme={theme}
          onClose={() => setActiveModalProject(null)}
          onOpenCustomizer={onOpenCustomizerModal}
        />

      </div>
    </section>
  );
};
