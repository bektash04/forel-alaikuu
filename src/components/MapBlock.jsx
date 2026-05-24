import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Maximize2 } from 'lucide-react';

// Координаты фермы «Форель Алайкуу»
const FARM_POSITION = [40.31034, 74.24041];

// Кастомная иконка пина (красивая, не дефолтная)
const farmIcon = L.divIcon({
  className: 'custom-farm-pin',
  html: `
    <div style="
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #f97316, #ea580c);
      border: 3px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        transform: rotate(45deg);
        color: white;
        font-size: 20px;
        font-weight: bold;
      ">🐟</div>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function MapBlock({ t, onOpenFullMap }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-[0.15em] mb-4">
            ГДЕ МЫ НАХОДИМСЯ
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 font-display">
            Найдите нас на карте
          </h2>
          <p className="text-lg text-slate-600 italic max-w-2xl mx-auto">
            {t.contacts.address}
          </p>
        </div>

        {/* Контейнер карты */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/20 border-4 border-white">

          {/* Сама карта */}
          <div className="h-[400px] lg:h-[500px] relative">
            <MapContainer
              center={FARM_POSITION}
              zoom={11}
              scrollWheelZoom={false}
              className="w-full h-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={FARM_POSITION} icon={farmIcon}>
                <Popup>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    🐟 Форель Алайкуу
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    {t.contacts.address}
                  </div>
                </Popup>
              </Marker>
            </MapContainer>

            {/* Кнопка "Открыть на весь экран" в углу карты */}
            <button
              onClick={onOpenFullMap}
              className="absolute top-4 right-4 z-[1000] px-4 py-2.5 bg-white hover:bg-orange-500 hover:text-white text-slate-900 font-bold rounded-full shadow-2xl transition-all flex items-center gap-2 group"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="text-sm">Открыть карту</span>
            </button>
          </div>

          {/* Инфо-плашка снизу карты */}
          <div className="bg-gradient-to-r from-slate-900 to-teal-900 p-6 lg:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-cyan-300 font-bold mb-1">
                    Адрес фермы
                  </div>
                  <div className="text-lg font-bold font-display">
                    {t.contacts.address}
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenFullMap}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-xl shadow-orange-500/40 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
              >
                <MapPin className="w-5 h-5" />
                Проложить маршрут
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}