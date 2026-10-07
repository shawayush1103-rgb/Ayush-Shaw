import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Instagram,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ContactProps {
  data: PortfolioData;
  theme: 'light' | 'navy' | 'aurora';
  onOpenCustomizerModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ data, theme, onOpenCustomizerModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const isLight = theme === 'light';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and message before sending.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      const mailtoSubject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
      const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${data.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 600);
  };

  const isRealUrl = (url: string) => url && !url.startsWith('[') && url.startsWith('http');

  return (
    <section
      id="contact"
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
            Connect with Ayush Shaw
          </h2>
          <p className={`mt-3 text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Open for academic discussions, business case collaborations, internship opportunities, student initiatives, and professional networking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div
              className={`p-6 rounded-2xl border shadow-xl transition-colors ${
                isLight ? 'bg-slate-50/70 border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-2.5 rounded-xl border ${
                    isLight ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-blue-900/30 text-blue-400 border-blue-800/60'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Direct Email
              </span>
              <a
                href={`mailto:${data.personal.email}`}
                className={`text-base sm:text-lg font-bold transition-colors break-all ${
                  isLight ? 'text-slate-900 hover:text-blue-600' : 'text-white hover:text-blue-400'
                }`}
              >
                {data.personal.email}
              </a>
              <p className={`text-xs mt-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Preferred for formal communications, internship inquiries, and academic collaboration.
              </p>
            </div>

            {/* Location & Academic Base */}
            <div
              className={`p-6 rounded-2xl border shadow-xl transition-colors ${
                isLight ? 'bg-slate-50/70 border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`p-2.5 rounded-xl border ${
                    isLight ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-slate-800 text-emerald-400 border-slate-700'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Location
                  </span>
                  <div className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    {data.personal.location}
                  </div>
                </div>
              </div>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Undergraduate student at Vedanta College, Kolkata. Available for in-person local engagements in Kolkata as well as remote opportunities.
              </p>
            </div>

            {/* Phone Placeholder */}
            <div
              className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
                isLight ? 'bg-slate-50/50 border-slate-200' : 'bg-slate-900/70 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Phone:</span>
                <span className={`font-medium ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>{data.personal.phone}</span>
              </div>
              <button
                onClick={onOpenCustomizerModal}
                className="text-blue-600 hover:underline"
              >
                Configure
              </button>
            </div>

            {/* Verified Social & Professional Links */}
            <div
              className={`p-6 rounded-2xl border ${
                isLight ? 'bg-slate-50/70 border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Professional Network Profiles
                </h3>
                <span className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Verified links only
                </span>
              </div>

              <div className="space-y-2.5">
                {/* LinkedIn */}
                <div
                  className={`flex items-center justify-between p-3 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span className={`text-xs font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>LinkedIn:</span>
                    <span className={`text-xs truncate max-w-[150px] sm:max-w-[200px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {data.personal.linkedin}
                    </span>
                  </div>
                  {isRealUrl(data.personal.linkedin) ? (
                    <a
                      href={data.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenCustomizerModal}
                      className="text-[11px] font-semibold text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30"
                    >
                      Add URL
                    </button>
                  )}
                </div>

                {/* GitHub */}
                <div
                  className={`flex items-center justify-between p-3 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Github className={`w-4 h-4 ${isLight ? 'text-slate-700' : 'text-slate-300'}`} />
                    <span className={`text-xs font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>GitHub:</span>
                    <span className={`text-xs truncate max-w-[150px] sm:max-w-[200px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {data.personal.github}
                    </span>
                  </div>
                  {isRealUrl(data.personal.github) ? (
                    <a
                      href={data.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenCustomizerModal}
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      Optional
                    </button>
                  )}
                </div>

                {/* Instagram */}
                <div
                  className={`flex items-center justify-between p-3 rounded-xl border ${
                    isLight ? 'bg-white border-slate-200' : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span className={`text-xs font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>Instagram:</span>
                    <span className={`text-xs truncate max-w-[150px] sm:max-w-[200px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {data.personal.instagram}
                    </span>
                  </div>
                  {isRealUrl(data.personal.instagram) ? (
                    <a
                      href={data.personal.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenCustomizerModal}
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        isLight ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      Optional
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-9 rounded-3xl border shadow-2xl transition-colors ${
                isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isLight ? 'text-slate-950' : 'text-white'}`}>
                Send a Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Whether you represent an organization offering an internship, a fellow student proposing a business case project, or a faculty member, feel free to reach out.
              </p>

              {submitted ? (
                <div
                  className={`p-6 rounded-2xl border text-center space-y-3 animate-fadeIn ${
                    isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-600">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className={`text-lg font-bold ${isLight ? 'text-slate-950' : 'text-white'}`}>
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs leading-relaxed max-w-md mx-auto">
                    Your message draft has been prepared and your email app was opened to send it directly to <strong>{data.personal.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Prof. Sharma"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-1 transition-colors ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500'
                            : 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}
                      >
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-1 transition-colors ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500'
                            : 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}
                    >
                      Subject (Optional)
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Summer Internship Opportunity / Business Case Project"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-1 transition-colors ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500'
                          : 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message, inquiry, or meeting proposal here..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-1 transition-colors resize-none ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500'
                          : 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className={`pt-2 text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>
                    Your contact submission prepares an email to Ayush Shaw&apos;s verified inbox: {data.personal.email}.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
