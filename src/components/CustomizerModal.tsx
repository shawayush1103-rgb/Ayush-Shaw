import React, { useState } from 'react';
import {
  X,
  Settings2,
  Copy,
  Check,
  RotateCcw,
  Upload,
  Link,
  Calendar,
  User,
  BookOpen,
  Sparkles,
  HelpCircle,
  FileCode2,
  Sun,
  Moon,
  Palette
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  currentTheme: 'light' | 'navy' | 'aurora';
  onSelectTheme: (theme: 'light' | 'navy' | 'aurora') => void;
  onUpdateData: (newData: PortfolioData) => void;
  onResetData: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  data,
  currentTheme,
  onSelectTheme,
  onUpdateData,
  onResetData,
}) => {
  const [activeTab, setActiveTab] = useState<'edit' | 'guide' | 'export'>('edit');
  const [copied, setCopied] = useState(false);

  // Local form states
  const [startYear, setStartYear] = useState(data.personal.startYear);
  const [expectedGradYear, setExpectedGradYear] = useState(data.personal.expectedGraduationYear);
  const [linkedin, setLinkedin] = useState(data.personal.linkedin);
  const [github, setGithub] = useState(data.personal.github);
  const [instagram, setInstagram] = useState(data.personal.instagram);
  const [phone, setPhone] = useState(data.personal.phone);
  const [resumeUrl, setResumeUrl] = useState(data.personal.resumeUrl);
  const [photoUrl, setPhotoUrl] = useState(data.personal.photoUrl || '');
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'navy' | 'aurora'>(currentTheme);

  if (!isOpen) return null;

  const isLight = currentTheme === 'light';

  const handleApplyChanges = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectTheme(selectedTheme);
    const updated: PortfolioData = {
      ...data,
      personal: {
        ...data.personal,
        backgroundTheme: selectedTheme,
        startYear: startYear.trim() || '[Add Start Year]',
        expectedGraduationYear: expectedGradYear.trim() || '[Add Expected Graduation Year]',
        linkedin: linkedin.trim() || '[Add LinkedIn URL]',
        github: github.trim() || '[Add GitHub URL]',
        instagram: instagram.trim() || '[Add Instagram URL]',
        phone: phone.trim() || '[Add Phone Number]',
        resumeUrl: resumeUrl.trim() || '[Resume PDF URL]',
        photoUrl: photoUrl.trim() ? photoUrl.trim() : null,
      },
    };
    onUpdateData(updated);
    onClose();
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhotoUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className={`relative w-full max-w-2xl border rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto transition-colors ${
          isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-800 text-white'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between pb-4 border-b mb-6 ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-500 border border-blue-500/30">
              <Settings2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-lg font-bold ${isLight ? 'text-slate-950' : 'text-white'}`}>
                Portfolio Customizer & Background Settings
              </h3>
              <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Update Ayush Shaw&apos;s background style, links, dates, and photo live.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              isLight ? 'text-slate-400 hover:text-slate-800 hover:bg-slate-100' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub Navigation */}
        <div className={`flex items-center gap-2 mb-6 border-b pb-2 ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
          <button
            onClick={() => setActiveTab('edit')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'edit'
                ? 'bg-blue-600 text-white'
                : isLight
                ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Quick Edit Inputs
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'guide'
                ? 'bg-blue-600 text-white'
                : isLight
                ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Placeholder Guide
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'export'
                ? 'bg-blue-600 text-white'
                : isLight
                ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Data JSON Export
          </button>
        </div>

        {/* Tab 1: Quick Edit Form */}
        {activeTab === 'edit' && (
          <form onSubmit={handleApplyChanges} className="space-y-4">
            
            {/* Background Theme Selector Swatches */}
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/70 border-slate-800'}`}>
              <label className={`block text-xs font-bold mb-2.5 flex items-center gap-1.5 ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                <Palette className="w-3.5 h-3.5 text-blue-500" />
                <span>Background Visual Style</span>
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTheme('light');
                    onSelectTheme('light');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedTheme === 'light'
                      ? 'border-blue-500 ring-2 ring-blue-500/20 bg-white text-slate-900'
                      : 'border-slate-300 bg-white/70 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 font-bold text-xs text-slate-900">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Clean Light</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    Crisp off-white & whitespace
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedTheme('navy');
                    onSelectTheme('navy');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedTheme === 'navy'
                      ? 'border-blue-500 ring-2 ring-blue-500/20 bg-slate-900 text-white'
                      : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 font-bold text-xs text-blue-400">
                    <Moon className="w-3.5 h-3.5 text-blue-400" />
                    <span>Deep Navy</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight">
                    Executive charcoal & sapphire
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedTheme('aurora');
                    onSelectTheme('aurora');
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedTheme === 'aurora'
                      ? 'border-blue-500 ring-2 ring-blue-500/20 bg-slate-950 text-white'
                      : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 font-bold text-xs text-purple-400">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>Aurora</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight">
                    Gradient mesh & glow
                  </p>
                </button>
              </div>
            </div>

            {/* Photo preview / upload */}
            <div className={`p-4 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/70 border-slate-800'}`}>
              <label className={`block text-xs font-semibold mb-2 ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                Professional Photo Preview
              </label>
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-xl border flex items-center justify-center overflow-hidden shrink-0 ${
                    isLight ? 'bg-white border-slate-200 text-slate-600 font-bold' : 'bg-slate-800 border-slate-700 text-slate-500 font-bold'
                  }`}
                >
                  {photoUrl ? (
                    <img src={photoUrl} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs">AS</span>
                  )}
                </div>
                <div className="space-y-1.5 w-full">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="block w-full text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer"
                  />
                  <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
                    Upload and preview your actual portrait in real time.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Start Year
                </label>
                <input
                  type="text"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  placeholder="e.g. 2023 or 2024"
                  className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-blue-500 ${
                    isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-white'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Expected Graduation Year
                </label>
                <input
                  type="text"
                  value={expectedGradYear}
                  onChange={(e) => setExpectedGradYear(e.target.value)}
                  placeholder="e.g. 2026 or 2027"
                  className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-blue-500 ${
                    isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-white'
                  }`}
                />
              </div>
            </div>

            {/* Social & Contact */}
            <div className="space-y-3">
              <div>
                <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="https://linkedin.com/in/ayush-shaw..."
                  className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-blue-500 ${
                    isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-white'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Resume PDF Link (Google Drive / Cloud URL)
                </label>
                <input
                  type="text"
                  value={resumeUrl}
                  onChange={(e) => setResumeUrl(e.target.value)}
                  placeholder="https://drive.google.com/... or https://..."
                  className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-blue-500 ${
                    isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-white'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Phone (Optional)
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="[Add Phone Number]"
                    className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-blue-500 ${
                      isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-white'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    GitHub / Portfolio (Optional)
                  </label>
                  <input
                    type="text"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder="[Add GitHub URL]"
                    className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-blue-500 ${
                      isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-white'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className={`pt-4 border-t flex items-center justify-between ${isLight ? 'border-slate-100' : 'border-slate-800'}`}>
              <button
                type="button"
                onClick={onResetData}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  isLight ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                    isLight ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30"
                >
                  Save & Update Preview
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Tab 2: Placeholder Guide */}
        {activeTab === 'guide' && (
          <div className="space-y-4 text-xs text-slate-300">
            <div
              className={`p-3.5 rounded-xl border leading-relaxed ${
                isLight ? 'bg-blue-50 border-blue-200 text-blue-900' : 'bg-blue-950/40 border-blue-900/60 text-slate-300'
              }`}
            >
              <span className={`font-semibold block mb-1 ${isLight ? 'text-blue-950' : 'text-blue-300'}`}>
                Zero-Fabrication Guarantee:
              </span>
              This website intentionally never invents fake certifications, awards, grades, or work experience. All non-verified fields are marked with standard brackets.
            </div>

            <div className="space-y-3">
              <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950 border-slate-800 text-slate-300'}`}>
                <span className="font-bold text-amber-600 block mb-0.5">[Add Professional Photo]</span>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>Located in the Hero section card. Can be replaced with a link or file in the Customizer or by placing a headshot in the repository.</p>
              </div>

              <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950 border-slate-800 text-slate-300'}`}>
                <span className="font-bold text-amber-600 block mb-0.5">[Start Year] & [Expected Graduation Year]</span>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>Located in the Education section and Resume. Update to reflect your exact batch year at Vedanta College.</p>
              </div>

              <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950 border-slate-800 text-slate-300'}`}>
                <span className="font-bold text-amber-600 block mb-0.5">[Add LinkedIn URL] & [Add Phone Number]</span>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>Located in the Contact and Footer sections. Update with your real LinkedIn handle when created.</p>
              </div>

              <div className={`p-3 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-slate-950 border-slate-800 text-slate-300'}`}>
                <span className="font-bold text-amber-600 block mb-0.5">[Add Project] & [Add Certificate]</span>
                <p className={isLight ? 'text-slate-600' : 'text-slate-400'}>Located in <code className="text-blue-600 font-mono">src/data/portfolioData.ts</code>. You can easily add more real projects as you finish your 2nd and 3rd year terms.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: JSON Export */}
        {activeTab === 'export' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Full structured data representation from <code className="text-blue-600">src/data/portfolioData.ts</code>
              </span>
              <button
                onClick={handleCopyJson}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied JSON!' : 'Copy JSON'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 max-h-60 overflow-y-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};
