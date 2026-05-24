import React from 'react';
import { Fish, Phone, MapPin, MessageCircle, Heart } from 'lucide-react';
import { PHONE } from '../data/translations';

export default function Footer({ t, setCurrentPage }) {
  const goTo = (p) => {
    setCurrentPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-950 text-white py-16 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <Fish className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black font-display">Алайкуу</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                  Форель
                </span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">{t.hero.desc}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-cyan-400 uppercase tracking-wider text-sm">
              {t.nav.home}
            </h4>
            <ul className="space-y-2">
              {['home', 'about', 'products', 'gallery'].map((p) => (
                <li key={p}>
                  <button
                    onClick={() => goTo(p)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {t.nav[p]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-cyan-400 uppercase tracking-wider text-sm">
              {t.nav.contacts}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {PHONE}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {t.contacts.address}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp / Telegram
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>© 2025 Форель Алайкуу. {t.footer.rights}.</div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 fill-orange-500 text-orange-500" />
            {t.footer.made}
          </div>
        </div>
      </div>
    </footer>
  );
}
