import React from 'react';
import { MapPin, CreditCard, Clock, ChevronRight, Truck } from 'lucide-react';

export default function Delivery({ t }) {
  return (
    <div className="pt-16 pb-20 lg:pt-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-[0.15em] mb-4">
            {t.nav.delivery.toUpperCase()}
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-4 font-display">
            {t.delivery.title}
          </h1>
          <p className="text-xl text-slate-600 italic">{t.delivery.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-teal-600 p-8 text-white shadow-2xl shadow-cyan-500/20">
            <MapPin className="w-12 h-12 mb-4 opacity-90" />
            <h3 className="text-2xl font-black mb-3 font-display">{t.delivery.cities}</h3>
            <p className="text-cyan-50 leading-relaxed">{t.delivery.citiesList}</p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white shadow-2xl shadow-orange-500/20">
            <CreditCard className="w-12 h-12 mb-4 opacity-90" />
            <h3 className="text-2xl font-black mb-3 font-display">{t.delivery.payment}</h3>
            <ul className="space-y-2">
              {t.delivery.paymentList.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-orange-50">
                  <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-green-700 p-8 text-white shadow-2xl shadow-emerald-500/20">
            <Clock className="w-12 h-12 mb-4 opacity-90" />
            <h3 className="text-2xl font-black mb-3 font-display">{t.delivery.time}</h3>
            <ul className="space-y-2">
              {t.delivery.timeList.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-emerald-50">
                  <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-slate-900 p-10 lg:p-14 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 50%, #14b8a6, transparent 50%), radial-gradient(circle at 70% 50%, #f97316, transparent 50%)',
            }}
          />
          <div className="relative">
            <Truck className="w-16 h-16 text-orange-400 mx-auto mb-4" />
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 font-display">
              {t.delivery.freeDelivery}
            </h3>
            <p className="text-cyan-200/80">{t.delivery.freeDeliverySub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
