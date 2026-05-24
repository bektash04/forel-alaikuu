import React from 'react';
import { Award, Fish, Leaf } from 'lucide-react';

export default function About({ t }) {
  const sections = [
    { title: t.about.history, text: t.about.historyText, icon: Award, color: 'from-orange-400 to-red-500', num: '01' },
    { title: t.about.grow, text: t.about.growText, icon: Fish, color: 'from-cyan-400 to-teal-500', num: '02' },
    { title: t.about.eco, text: t.about.ecoText, icon: Leaf, color: 'from-emerald-400 to-green-600', num: '03' },
  ];

  return (
    <div className="pt-16 pb-20 lg:pt-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 min-h-screen">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-[0.15em] mb-4">
            {t.nav.about.toUpperCase()}
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-4 font-display">
            {t.about.title}
          </h1>
          <p className="text-xl text-slate-600 italic">{t.about.subtitle}</p>
        </div>

        <div className="space-y-8">
          {sections.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="grid lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div
                    className={`aspect-square rounded-[2rem] bg-gradient-to-br ${item.color} relative overflow-hidden shadow-2xl shadow-slate-900/10`}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 30% 30%, white, transparent 60%)',
                      }}
                    />
                    <div className="absolute top-6 right-6 text-9xl font-black text-white/20 font-display">
                      {item.num}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-white/90" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-sm font-bold text-teal-600 mb-2 tracking-[0.15em]">
                    CHAPTER {item.num}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 font-display">
                    {item.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
