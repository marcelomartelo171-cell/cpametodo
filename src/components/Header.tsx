import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#080103]/85 border-b border-red-900/30 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#B91C1C] via-[#7F1D1D] to-[#450A0A] border border-[#F59E0B]/40 flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.25)]">
            <span className="font-display font-black text-sm tracking-wider text-[#FEF08A]">
              CPA
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-base sm:text-lg font-extrabold tracking-wide text-white">
                CPA <span className="text-gold-gradient">CHINÊS</span>
              </span>
            </div>
            <div className="text-[10px] text-red-200/60 tracking-wider uppercase font-medium hidden sm:block">
              Mecânica de Aquisição Digital
            </div>
          </div>
        </div>

        {/* Right side info + CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-amber-200/80 bg-red-950/50 px-3 py-1.5 rounded-full border border-amber-500/20">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Conteúdo 100% Educacional</span>
          </div>

          <button
            onClick={scrollToOffer}
            className="cursor-pointer text-xs sm:text-sm font-bold px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-[#EAB308] via-[#FACC15] to-[#CA8A04] text-[#200507] hover:brightness-110 active:scale-98 transition shadow-[0_2px_12px_rgba(234,179,8,0.3)] flex items-center gap-1"
          >
            <span>Acessar</span>
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};
