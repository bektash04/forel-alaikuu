import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { PHONE_RAW } from '../data/translations';

export default function Products({ t }) {
  const [weight, setWeight] = useState(2);
  const [selectedProduct, setSelectedProduct] = useState(0);


  // Открыть WhatsApp с готовым сообщением
const sendToWhatsApp = (productName, weight = null) => {
  const phone = PHONE_RAW.replace('+', '');

  let message = `Здравствуйте! Хочу заказать`;
  if (weight) {
    message += ` ${weight} килограмм`;
  }
  message += `. Подскажите по доставке, пожалуйста.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

  const products = [
    {
      name: t.products.live,
      desc: t.products.liveDesc,
      price: 650,
      weight: '0.8-1.2 кг',
      color: 'from-cyan-500 to-teal-600',
      img: '/images/product-live.jpg',
    },
    {
      name: t.products.chilled,
      desc: t.products.chilledDesc,
      price: 750,
      weight: '0.6-1.0 кг',
      color: 'from-orange-500 to-red-600',
      img: '/images/product-chilled.jpg',
    },
  ];

  return (
    <div className="pt-16 pb-20 lg:pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-[0.15em] mb-4">
            {t.nav.products.toUpperCase()}
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-4 font-display">
            {t.products.title}
          </h1>
          <p className="text-xl text-slate-600 italic">{t.products.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {products.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelectedProduct(i)}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer transition-all ${
                selectedProduct === i ? 'ring-4 ring-teal-400 scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
            >
              <div className="aspect-[4/5] relative">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                <div className={`absolute bg-gradient-to-br ${p.color} opacity-40`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                  <span className="px-3 py-1.5 bg-[#fffc10] backdrop-blur rounded-full text-xs font-black text-slate-800">
                    {p.weight}
                  </span>
                  <span className="px-3 py-1.5 bg-orange-500 backdrop-blur rounded-full text-xs font-bold text-white border border-white/30">
                    ★ TOP
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 font-display drop-shadow-2xl">
  {p.name}
</h3>
                  <p className="text-white/95 text-sm mb-5 drop-shadow-lg leading-relaxed max-w-md">{p.desc}</p>
                  <div className="flex items-end justify-between">
                   <div>
  <div className="text-5xl font-black font-display drop-shadow-2xl">
    <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
      {p.price}
    </span>
    <span className="text-2xl text-white ml-1">сом</span>
  </div>
  <div className="text-xs text-white/80 font-bold tracking-wider uppercase mt-1">{t.products.perKg}</div>
</div>
                    <button
  onClick={(e) => {
    e.stopPropagation();
    sendToWhatsApp(p.name);
  }}
  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-bold transition-all shadow-2xl shadow-orange-500/40 hover:scale-105"
>
  {t.products.order}
</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Калькулятор */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold tracking-[0.15em] mb-3">
                CALCULATOR
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 font-display">
                {t.products.calc}
              </h3>
              <p className="text-cyan-200/80 mb-6">{products[selectedProduct].name}</p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-cyan-200 text-sm font-semibold">{t.products.weight}</span>
                    <span className="text-white text-2xl font-black font-display">
                      {weight} {t.products.kg}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={weight}
                    onChange={(e) => setWeight(+e.target.value)}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-orange-400"
                  />
                  <div className="flex justify-between text-xs text-cyan-300/60 mt-1">
                    <span>1 кг</span>
                    <span>20 кг</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-cyan-200">
                  <span>{products[selectedProduct].name}</span>
                  <span className="font-bold">
                    {products[selectedProduct].price} × {weight}
                  </span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between items-end">
                  <span className="text-white font-bold">{t.products.total}</span>
                  <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent font-display">
                    {(products[selectedProduct].price * weight).toLocaleString()}
                  </span>
                </div>
                <div className="text-right text-cyan-300/60 text-sm">сом</div>
              </div>
              <button
  onClick={() => sendToWhatsApp(products[selectedProduct].name, weight)}
  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-xl shadow-orange-500/30"
>
  <ShoppingBag className="w-5 h-5" />
  {t.products.order}
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
