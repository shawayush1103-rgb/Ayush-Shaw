import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Interests } from './components/Interests';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomizerModal } from './components/CustomizerModal';
import { initialPortfolioData, PortfolioData } from './data/portfolioData';

export type BackgroundTheme = 'light' | 'navy' | 'aurora';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('ayush_portfolio_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // LocalStorage access fallback
    }
    return initialPortfolioData;
  });

  const [theme, setTheme] = useState<BackgroundTheme>(() => {
    try {
      const savedTheme = localStorage.getItem('ayush_portfolio_theme');
      if (savedTheme === 'light' || savedTheme === 'navy' || savedTheme === 'aurora') {
        return savedTheme;
      }
    } catch {
      // LocalStorage access fallback
    }
    return (data.personal.backgroundTheme as BackgroundTheme) || 'light';
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCustomizerModalOpen, setIsCustomizerModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('ayush_portfolio_theme', theme);
    } catch {
      // Storage fallback
    }

    if (theme === 'light') {
      document.body.className = 'bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white';
    } else if (theme === 'aurora') {
      document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-purple-600 selection:text-white';
    } else {
      document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white';
    }
  }, [theme]);

  const handleUpdateData = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem('ayush_portfolio_data', JSON.stringify(newData));
    } catch {
      // Storage error fallback
    }
  };

  const handleResetData = () => {
    setData(initialPortfolioData);
    setTheme('light');
    try {
      localStorage.removeItem('ayush_portfolio_data');
      localStorage.removeItem('ayush_portfolio_theme');
    } catch {
      // Storage error fallback
    }
  };

  const handleSelectTheme = (newTheme: BackgroundTheme) => {
    setTheme(newTheme);
    setData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        backgroundTheme: newTheme,
      },
    }));
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white'
          : theme === 'aurora'
          ? 'bg-[#030712] text-slate-100 selection:bg-purple-600 selection:text-white'
          : 'bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white'
      }`}
    >
      {/* Fixed Navigation */}
      <Navbar
        data={data}
        theme={theme}
        onSelectTheme={handleSelectTheme}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenCustomizerModal={() => setIsCustomizerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          data={data}
          theme={theme}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenCustomizerModal={() => setIsCustomizerModalOpen(true)}
        />

        <About data={data} theme={theme} />

        <Education data={data} theme={theme} />

        <Skills
          data={data}
          theme={theme}
          onOpenCustomizerModal={() => setIsCustomizerModalOpen(true)}
        />

        <Projects
          data={data}
          theme={theme}
          onOpenCustomizerModal={() => setIsCustomizerModalOpen(true)}
        />

        <Achievements
          data={data}
          theme={theme}
          onOpenCustomizerModal={() => setIsCustomizerModalOpen(true)}
        />

        <Interests data={data} theme={theme} />

        <ResumeSection
          data={data}
          theme={theme}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenCustomizerModal={() => setIsCustomizerModalOpen(true)}
        />

        <Contact
          data={data}
          theme={theme}
          onOpenCustomizerModal={() => setIsCustomizerModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        data={data}
        theme={theme}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenCustomizerModal={() => setIsCustomizerModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        data={data}
        onOpenCustomizer={() => setIsCustomizerModalOpen(true)}
      />

      <CustomizerModal
        isOpen={isCustomizerModalOpen}
        onClose={() => setIsCustomizerModalOpen(false)}
        data={data}
        currentTheme={theme}
        onSelectTheme={handleSelectTheme}
        onUpdateData={handleUpdateData}
        onResetData={handleResetData}
      />
    </div>
  );
}
