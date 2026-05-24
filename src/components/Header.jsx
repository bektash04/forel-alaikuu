import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Header({ currentPage, setCurrentPage, lang, setLang, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const pages = ['home', 'about', 'products', 'gallery', 'delivery', 'reviews', 'contacts'];
  const langs = { ru: 'РУС', ky: 'КЫР', en: 'ENG' };

  const goTo = (p) => {
    setCurrentPage(p);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-md shadow-slate-900/5 py-3 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        <div onClick={() => goTo('home')}>
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-1 flex-wrap">
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => goTo(p)}
              className={`px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold rounded-full transition-all whitespace-nowrap ${
                currentPage === p
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {t.nav[p]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all"
            >
              <Globe className="w-4 h-4" />
              {langs[lang]}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden min-w-[120px] border border-slate-100">
                {Object.entries(langs).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setLang(key);
                      setLangOpen(false);
                    }}
                    className={`block w-full px-4 py-2.5 text-sm font-semibold text-left transition-colors ${
                      lang === key ? 'bg-teal-50 text-teal-700' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-700"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100">
          <nav className="flex flex-col p-4 gap-1">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`px-4 py-3 text-left rounded-xl font-semibold transition-all ${
                  currentPage === p ? 'bg-teal-500 text-white' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {t.nav[p]}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
