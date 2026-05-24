import React from 'react';
import { Fish } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:rotate-12 transition-transform duration-500">
          <Fish className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-orange-400 animate-pulse" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tight text-slate-900 font-display">
          Алайкуу
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-teal-600 font-semibold">
          Форель
        </span>
      </div>
    </div>
  );
}
