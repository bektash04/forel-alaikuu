import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function Gallery({ t }) {
  const [filter, setFilter] = useState('all');
  const [activeItem, setActiveItem] = useState(null); // открытое фото или видео

  // Список фото и видео. cat = категория, img = превью, video = mp4 (только для видео)
  const items = [
    { cat: 'clients',    label: t.gallery.farm,    img: '/gallery/clients-1.jpg' },
    { cat: 'farm', label: t.gallery.video, youtube: 'u09rjukn8kA', img: '/gallery/video-1-preview.jpg' },
    { cat: 'feeding', label:  t.gallery.video, youtube: 'qj8WYDVve2s', img: '/gallery/video-5-preview.jpg' },
    { cat: 'feeding', label: t.gallery.video, youtube: 'eaI6Pgvyo18', img: '/gallery/video-3-preview.jpg' },
    { cat: 'farm', label: t.gallery.video, youtube: 'k9FA53dJFZI', img: '/gallery/video-4-preview.jpg' },
    { cat: 'clients', label: t.gallery.clients, img: '/gallery/clients-2.jpg' },
    { cat: 'clients', label: t.gallery.clients, img: '/gallery/clients-3.jpg' },
    { cat: 'video', label: t.gallery.video, youtube: 'Htq9XvOPfXw', img: '/gallery/video-2-preview.jpg' },
    { cat: 'farm', label: t.gallery.clients, img: '/gallery/farm-1.jpg' },
  ];

 const filtered = filter === 'all'
  ? items
  : filter === 'video'
    ? items.filter((i) => i.youtube)
    : items.filter((i) => i.cat === filter);

  const cats = [
    { key: 'all', label: 'All' },
    { key: 'farm', label: t.gallery.farm },
    { key: 'video', label: t.gallery.video },
    { key: 'feeding', label: t.gallery.feeding },
    { key: 'clients', label: t.gallery.clients },
  ];

  const sizes = ['aspect-square', 'aspect-[3/4]', 'aspect-square', 'aspect-[3/3]', 'aspect-square', 'aspect-[3/4]']

  const heights = ['max-h-[400px]', 'max-h-[530px]', 'max-h-[480px]', 'max-h-[550px]', 'max-h-[550px]', 'max-h-[550px]'];

  // Обработчик клика по плитке
  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="pt-16 pb-20 lg:pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-[0.15em] mb-4">
            {t.nav.gallery.toUpperCase()}
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-4 font-display">
            {t.gallery.title}
          </h1>
          <p className="text-xl text-slate-600 italic">{t.gallery.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === c.key
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="columns-2 lg:columns-3 gap-3 space-y-3">
         {filtered.map((item, i) => (
            <div
  key={i}
  onClick={() => handleClick(item)}
  className="group relative rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all shadow-lg bg-slate-200 break-inside-avoid mb-2"
>
               <img
  src={item.img || `https://img.youtube.com/vi/${item.youtube}/hqdefault.jpg`}
  alt={item.label}
  className={`w-full h-auto ${heights[i % 6]} object-cover group-hover:scale-110 transition-transform duration-700`}
/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm drop-shadow-lg">{item.label}</span>
              </div>
              {item.youtube && (
                <>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="w-7 h-7 text-slate-900 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
  {/* МОДАЛЬНОЕ ОКНО ДЛЯ ФОТО И ВИДЕО */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        >
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
          >
            {activeItem.youtube ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeItem.youtube}?autoplay=1&rel=0`}
                title={activeItem.label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-[90vw] max-w-5xl aspect-video rounded-2xl"
              />
            ) : (
              <img
                src={activeItem.img}
                alt={activeItem.label}
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}