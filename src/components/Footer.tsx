import React from 'react';
import { ArrowUp, Mail, MapPin, GraduationCap, Heart, ShieldCheck } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface FooterProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
  onOpenResumeModal: () => void;
  onOpenCustomizerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  data,
  theme,
  onOpenResumeModal,
  onOpenCustomizerModal,
}) => {
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Interests', href: '#interests' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className={`border-t text-xs py-14 transition-colors duration-300 ${
        isLight
          ? 'bg-slate-100 border-slate-200 text-slate-600'
          : 'bg-slate-950 border-slate-900 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b ${isLight ? 'border-slate-200' : 'border-slate-900'}`}>
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 text-white font-extrabold text-sm flex items-center justify-center ring-1 ring-white/20">
                AS
              </div>
              <div>
                <span className={`text-base font-bold block ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {data.personal.name}
                </span>
                <span className="text-xs text-blue-600 font-medium">
                  BBA Student • Vedanta College, Kolkata
                </span>
              </div>
            </div>

            <p className={`text-xs leading-relaxed max-w-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Personal portfolio and academic profile representing genuine undergraduate studies in business administration, strategic curiosity, and practical management capabilities.
            </p>

            <div className={`flex items-center gap-2 pt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Authentic representation policy (no fabricated records)</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${isLight ? 'hover:text-blue-600 text-slate-600' : 'hover:text-blue-400 text-slate-400'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Actions & Utilities */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Portfolio Utilities
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenResumeModal}
                className="text-left text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                • View / Print Academic CV
              </button>
              <button
                onClick={onOpenCustomizerModal}
                className={`text-left text-xs font-medium ${isLight ? 'text-amber-700 hover:text-amber-800' : 'text-amber-300/90 hover:text-amber-200'}`}
              >
                • Edit Profile & Replace Placeholders
              </button>
              <a
                href={`mailto:${data.personal.email}`}
                className={`text-xs transition-colors ${isLight ? 'text-slate-700 hover:text-slate-950' : 'text-slate-300 hover:text-white'}`}
              >
                • Email: {data.personal.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
            © {new Date().getFullYear()} Ayush Shaw. All rights reserved. Vedanta College, Kolkata, West Bengal, India.
          </p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
              isLight
                ? 'bg-white hover:bg-slate-200 text-slate-700 border-slate-200 shadow-xs'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
            }`}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-500" />
          </button>
        </div>

      </div>
    </footer>
  );
};
