import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-10 pb-14 sm:pt-16 sm:pb-20 overflow-hidden bg-[#080103]">
      {/* Background Ambient Atmosphere (Red gradients, oriental lattice) */}
      <div className="absolute inset-0 bg-red-hero-radial pointer-events-none" />
      <div className="absolute inset-0 bg-oriental-lattice opacity-40 pointer-events-none" />
      
      {/* Top ambient glow light */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-red-700/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-4 sm:mb-5">
            A mudança nas Bets está te dando uma{' '}
            <span className="block mt-2 sm:mt-3">
              oportunidade nunca antes vista no mercado digital.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto font-normal leading-relaxed">
            O método de <span className="text-amber-300 font-bold">CPA Chinês</span> deixou milhares de pessoas como você <span className="text-amber-300 font-bold">ricas em 2022</span>. E, com a nova proibição, os <span className="text-amber-300 font-bold">chineses voltaram com tudo</span> para o mercado.
          </p>
        </div>

        {/* Feature Image between Subheadline and CTA */}
        <div className="flex justify-center mb-8 sm:mb-10 relative z-10 px-2">
          <div className="relative group max-w-xs sm:max-w-md lg:max-w-lg w-full">
            <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-2xl -z-10" />
            <img
              src="https://i.postimg.cc/SxHwkcqW/20ead334d7e87e09fe391a676317fe50-(1).png"
              alt="CPA Chinês"
              className="w-full h-auto object-contain mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] filter hover:scale-[1.01] transition-transform duration-300"
              loading="eager"
            />
          </div>
        </div>

        {/* CTA Button & Sub-bullets */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={scrollToOffer}
            className="cursor-pointer group relative w-full sm:w-auto px-8 py-4 sm:py-5 rounded-xl bg-gold-btn text-[#1c0205] font-bold text-lg sm:text-xl tracking-wider uppercase transition-all duration-300 transform active:scale-95 hover:scale-[1.02] btn-shimmer-effect flex items-center justify-center gap-3 border border-amber-200/50"
          >
            <Sparkles className="w-5 h-5 text-amber-950" />
            <span>QUERO ENTENDER COMO FUNCIONA</span>
            <ArrowDown className="w-5 h-5 text-amber-950 stroke-[3] group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Micro text under CTA */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm text-stone-400 font-medium">
            <span className="text-amber-300/90 font-semibold">Do absoluto zero</span>
            <span className="text-stone-600" aria-hidden="true">•</span>
            <span>Sem precisar ser influencer</span>
            <span className="text-stone-600" aria-hidden="true">•</span>
            <span>Método passo a passo</span>
          </div>
        </div>

      </div>
    </section>
  );
};
