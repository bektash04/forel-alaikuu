import React, { useState } from 'react';
import { Phone, MessageCircle, Send, MapPin, ChevronRight, Heart } from 'lucide-react';
import { PHONE, PHONE_RAW, TELEGRAM } from '../data/translations';

export default function Contacts({ t }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (form.name && form.phone) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', phone: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="pt-16 pb-20 lg:pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-[0.15em] mb-4">
            {t.nav.contacts.toUpperCase()}
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-4 font-display">
            {t.contacts.title}
          </h1>
          <p className="text-xl text-slate-600 italic">{t.contacts.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a href={`tel:${PHONE_RAW}`} className="block group">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-6 text-white shadow-xl shadow-teal-500/20 hover:scale-[1.02] transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-cyan-100 font-bold">
                        Телефон
                      </div>
                      <div className="text-2xl font-black font-display">{PHONE}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${PHONE_RAW.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-xl shadow-green-500/20 hover:scale-[1.02] transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-green-100 font-bold">
                        WhatsApp
                      </div>
                      <div className="text-2xl font-black font-display">{PHONE}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href={`https://t.me/${TELEGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-blue-100 font-bold">
                        Telegram
                      </div>
                      <div className="text-2xl font-black font-display">@{TELEGRAM}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <div className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white shadow-xl relative overflow-hidden h-48">
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <path
                    d="M0,100 Q100,80 200,100 T400,100"
                    stroke="#14b8a6"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />
                  <path
                    d="M0,120 Q100,100 200,120 T400,120"
                    stroke="#0891b2"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />
                  <circle cx="200" cy="100" r="8" fill="#f97316" />
                  <circle cx="200" cy="100" r="20" fill="#f97316" opacity="0.3" />
                </svg>
              </div>
              <div className="relative flex items-start gap-3">
                <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-cyan-200 font-bold mb-1">
                    Адрес
                  </div>
                  <div className="text-lg font-bold">{t.contacts.address}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Форма */}
          <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />

            <div className="relative">
              <h3 className="text-3xl font-black text-white mb-2 font-display">
                {t.contacts.formTitle}
              </h3>
              <p className="text-cyan-200/70 mb-8">{t.contacts.formSub}</p>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t.contacts.name}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder={t.contacts.phone}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <textarea
                  placeholder={t.contacts.message}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows="4"
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                />

                <button
                  onClick={submit}
                  className={`w-full py-4 font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-xl ${
                    sent
                      ? 'bg-green-500 text-white'
                      : 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/30'
                  }`}
                >
                  {sent ? (
                    <>
                      <Heart className="w-5 h-5 fill-white" /> {t.contacts.sent}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> {t.contacts.send}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
