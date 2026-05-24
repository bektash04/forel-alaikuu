import React from 'react';
import { Star, MapPin } from 'lucide-react';

const colors = [
  'from-pink-400 to-rose-500',
  'from-cyan-400 to-blue-500',
  'from-orange-400 to-red-500',
  'from-emerald-400 to-teal-500',
  'from-purple-400 to-indigo-500',
  'from-yellow-400 to-orange-500',
];

export default function Reviews({ t }) {
  return (
    <div className="pt-16 pb-20 lg:pt-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold tracking-[0.15em] mb-4">
            {t.nav.reviews.toUpperCase()}
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-4 font-display">
            {t.reviews.title}
          </h1>
          <p className="text-xl text-slate-600 italic">{t.reviews.subtitle}</p>

          <div className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-white rounded-full shadow-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="text-2xl font-black text-slate-900 font-display">4.9</span>
            <span className="text-slate-500 text-sm font-medium">/ {t.reviews.count}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.reviews.list.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors[i % 6]} opacity-10 rounded-full blur-2xl`}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[i % 6]} flex items-center justify-center text-white font-black text-lg shadow-lg`}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{r.name}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {r.city}
                    </div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed text-sm">"{r.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
