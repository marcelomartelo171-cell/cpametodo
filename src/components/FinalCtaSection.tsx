import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { GoldCoin } from './GoldCoin';

export const FinalCtaSection: React.FC = () => {
  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 sm:py-32 bg-[#090103] border-t border-red-950/70 overflow-hidden">
      {/* High impact background glow & radial highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(185,28,28,0.3)_0%,rgba(127,29,29,0.1)_45%,transparent_80%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-red-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-oriental-lattice opacity-30 pointer-events-none" />

      {/* Decorative Gold Coins */}
      <div className="absolute top-10 left-8 sm:left-24 animate-float-slow opacity-80 hidden sm:block">
        <GoldCoin size={52} />
      </div>
      <div className="absolute bottom-12 right-8 sm:right-24 animate-float-reverse opacity-80 hidden sm:block">
        <GoldCoin size={60} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Sua Próxima Decisão Digital</span>
        </div>

        <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
          Você já passou tempo suficiente apenas usando a internet.
          <br className="hidden sm:inline" />
          <span className="block mt-2 sm:mt-3 text-gold-gradient font-extrabold drop-shadow-[0_2px_20px_rgba(234,179,8,0.3)]">
            Agora descubra como funciona o outro lado.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-stone-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Comece entendendo o mecanismo. Depois decida até onde você quer levar isso.
        </p>

        {/* Big Action Button */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={scrollToOffer}
            className="cursor-pointer group relative w-full sm:w-auto px-10 py-5 sm:py-6 rounded-2xl bg-gold-btn text-[#1c0205] font-bold text-xl sm:text-2xl tracking-wider uppercase transition-all duration-300 transform active:scale-95 hover:scale-[1.03] btn-shimmer-effect flex items-center justify-center gap-3 border border-amber-200 shadow-[0_10px_40px_rgba(234,179,8,0.5)]"
          >
            <span>QUERO CONHECER O CPA CHINÊS</span>
            <ArrowRight className="w-6 h-6 stroke-[3] group-hover:translate-x-1.5 transition-transform" />
          </button>

          <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-stone-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Acesso seguro e suporte prioritário incluso.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
