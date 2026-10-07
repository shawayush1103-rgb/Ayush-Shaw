import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, Settings2, Sun, Moon, Sparkles, Palette } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface NavbarProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
  onSelectTheme: (theme: 'light' | 'navy' | 'aurora') => void;
  onOpenResumeModal: () => void;
  onOpenCustomizerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  theme,
  onSelectTheme,
  onOpenResumeModal,
  onOpenCustomizerModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'interests', 'resume', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Interests', href: '#interests' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cycleTheme = () => {
    if (theme === 'light') onSelectTheme('navy');
    else if (theme === 'navy') onSelectTheme('aurora');
    else onSelectTheme('light');
  };

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="w-4 h-4 text-amber-500" />;
    if (theme === 'navy') return <Moon className="w-4 h-4 text-blue-400" />;
    return <Sparkles className="w-4 h-4 text-purple-400" />;
  };

  const getThemeLabel = () => {
    if (theme === 'light') return 'Clean Light';
    if (theme === 'navy') return 'Deep Navy';
    return 'Aurora';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isLight
          ? isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3 text-slate-800'
            : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/60 py-4 text-slate-800'
          : isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3 text-white'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-900/50 py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 text-white font-extrabold text-base tracking-wider shadow-md shadow-blue-500/20 ring-1 ring-white/20 transition-transform group-hover:scale-105">
              <span>AS</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white"></span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold tracking-tight text-lg leading-tight transition-colors ${
                  isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-300'
                }`}
              >
                {data.personal.name}
              </span>
              <span className={`text-xs font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                BBA • Vedanta College
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'text-blue-600 bg-blue-50 border border-blue-200 font-semibold'
                        : 'text-white bg-blue-600/20 border border-blue-500/40 text-blue-400 font-semibold'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Background Theme Selector */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            {/* Background Theme Switcher Button */}
            <div className="relative">
              <button
                onClick={cycleTheme}
                title={`Current Background: ${getThemeLabel()}. Click to switch.`}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border-slate-200'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                }`}
              >
                {getThemeIcon()}
                <span className="capitalize">{getThemeLabel()}</span>
              </button>
            </div>

            {/* Quick customize button */}
            <button
              onClick={onOpenCustomizerModal}
              title="Personalize your info & replace placeholders"
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border-slate-200'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700/80'
              }`}
            >
              <Settings2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Customize</span>
            </button>

            {/* Resume button */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button & Quick Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={cycleTheme}
              aria-label="Toggle background theme"
              className={`p-2 rounded-lg border ${
                isLight
                  ? 'bg-slate-100 text-slate-700 border-slate-200'
                  : 'bg-slate-900 text-slate-200 border-slate-800'
              }`}
            >
              {getThemeIcon()}
            </button>

            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isLight
                  ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 animate-fadeIn shadow-2xl ${
            isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-950/95 border-slate-800 text-white'
          }`}
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? isLight
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'bg-blue-600/20 text-blue-400 font-semibold'
                    : isLight
                    ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className={`pt-3 mt-2 border-t flex flex-col gap-2 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
              <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold">
                <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Background Style:</span>
                <div className="flex items-center gap-1">
                  {(['light', 'navy', 'aurora'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => onSelectTheme(t)}
                      className={`px-2.5 py-1 rounded text-xs capitalize ${
                        theme === t
                          ? 'bg-blue-600 text-white font-bold'
                          : isLight
                          ? 'bg-slate-100 text-slate-600'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizerModal();
                }}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                }`}
              >
                <Settings2 className="w-4 h-4 text-blue-500" />
                Customize & Replace Placeholders
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25"
              >
                <FileText className="w-4 h-4" />
                View & Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
