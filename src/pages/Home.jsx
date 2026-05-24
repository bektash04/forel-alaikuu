import React, { useState } from 'react';
import {
  ShoppingBag,
  ChevronRight,
  Phone,
  Star,
  Droplets,
  Leaf,
  Award,
  Heart,
  Truck,
  Clock,
} from 'lucide-react';
import MapBlock from '../components/MapBlock';
import FullMapModal from '../components/FullMapModal';
export default function Home({ t, setCurrentPage }) {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const goTo = (p) => {
    setCurrentPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* HERO с фото форели в воде */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute inset-0">
          <img
  src="/images/hero-bg.jpg"
  alt="Mountains and river"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/55 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-16 lg:pt-24 pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-[0.2em]">{t.hero.tag}</span>
              </div>

              <h1 className="font-black leading-[0.9] tracking-tight font-display">
                <span className="block text-5xl lg:text-7xl xl:text-8xl text-white drop-shadow-2xl">
                  {t.hero.title1}
                </span>
                <span className="block text-5xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent italic">
                  {t.hero.title2}
                </span>
                <span className="block text-5xl lg:text-7xl xl:text-8xl text-white drop-shadow-2xl">
                  {t.hero.title3}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-cyan-50/90 max-w-xl leading-relaxed drop-shadow-lg">
                {t.hero.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => goTo('products')}
                  className="group px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all hover:shadow-2xl hover:shadow-orange-500/40 flex items-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {t.hero.order}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => goTo('contacts')}
                  className="px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full transition-all border border-white/30 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {t.hero.contact}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                {[
                  { n: '5+', l: t.hero.stat1 },
                  { n: '15', l: t.hero.stat2 },
                  { n: '5K+', l: t.hero.stat3 },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl lg:text-4xl font-black text-white drop-shadow-lg font-display">
                      {s.n}
                    </div>
                    <div className="text-xs lg:text-sm text-cyan-100/80 font-medium mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Карточка с фото форели */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/50 border border-white/10">
                <img
  src="/images/hero-card.jpg"
  alt="Свежая форель"
  className="w-full h-full object-cover"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                <div className="absolute top-6 left-6 px-3 py-1.5 bg-white rounded-full text-xs font-bold text-teal-700 shadow-lg">
                  ★ Premium
                </div>
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-orange-500 rounded-full text-xs font-bold text-white shadow-lg">
                  100% ECO
                </div>
              </div>

              <div className="absolute -bottom-6 md:-left-6 bg-white rounded-2xl p-4 shadow-2xl shadow-slate-900/30 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">4.9</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">5,000+ {t.hero.stat3}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Волна снизу */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20" preserveAspectRatio="none">
            <path
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-[0.15em] mb-4">
              {t.why.title.toUpperCase()}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-display">
              {t.why.subtitle}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Droplets, color: 'from-cyan-400 to-blue-500' },
              { icon: Leaf, color: 'from-emerald-400 to-teal-500' },
              { icon: Award, color: 'from-orange-400 to-red-500' },
              { icon: Heart, color: 'from-pink-400 to-rose-500' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-500/10 transition-all hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                    {t.why.items[i].t}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.why.items[i].d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 p-10 lg:p-16 overflow-hidden shadow-2xl shadow-teal-900/30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight font-display">
                  {t.hero.order}
                  <br />
                  <span className="italic text-orange-300">сегодня</span>
                </h2>
                <p className="text-cyan-100 text-lg mb-6 max-w-md">{t.hero.desc}</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => goTo('products')}
                    className="px-6 py-3 bg-white text-teal-700 font-bold rounded-full hover:bg-orange-400 hover:text-white transition-all shadow-lg"
                  >
                    {t.hero.order}
                  </button>
                  <button
                    onClick={() => goTo('contacts')}
                    className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/20 transition-all"
                  >
                    {t.hero.contact}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Truck, t: t.delivery.title },
                  { icon: Award, t: t.why.items[2].t },
                  { icon: Clock, t: '24h' },
                  { icon: Heart, t: '5K+' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20"
                    >
                      <Icon className="w-8 h-8 text-orange-300 mb-2" />
                      <div className="text-white font-bold text-sm">{item.t}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* БЛОК С КАРТОЙ */}
      {/* БЛОК С КАРТОЙ */}
<div style={{ visibility: isMapOpen ? 'hidden' : 'visible' }}>
  <MapBlock t={t} onOpenFullMap={() => setIsMapOpen(true)} />
</div>

<FullMapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} t={t} />
    </>
  );
}
