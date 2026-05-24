import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_RAW } from '../data/translations';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${PHONE_RAW.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl shadow-green-500/40 flex items-center justify-center transition-all hover:scale-110 relative"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white text-sm font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp
        </span>
      </a>
      <a
        href={`tel:${PHONE_RAW}`}
        className="group w-14 h-14 rounded-full bg-teal-500 hover:bg-teal-600 shadow-2xl shadow-teal-500/40 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Phone"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
