import React from 'react';
import { Check, Sparkles, Zap, ArrowRight, Gift } from 'lucide-react';
import { GoldCoin } from './GoldCoin';

interface OfferSectionProps {
  onCheckoutClick?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onCheckoutClick }) => {
  const includedItems = [
    'Acesso completo aos 6 Módulos do Treinamento',
    'Aulas práticas direto ao ponto (aplique pelo celular ou PC)',
    'Metodologia passo a passo para iniciantes absolutos',
    'Atualizações de conteúdo de acordo com mudanças do mercado',
    'Suporte para dúvidas dentro da área de membros'
  ];

  const bonusItems = [
    'Método para aplicar apenas com o seu celular',
    'Grupo de networking com pessoas que estão fazendo o mesmo que você',
    'Calls em grupo semanais para alinhar operações'
  ];

  const handleCtaClick = () => {
    if (onCheckoutClick) {
      onCheckoutClick();
    } else {
      // Default alert or placeholder checkout
      alert('Redirecionando para o ambiente seguro de pagamento...');
    }
  };

  return (
    <section id="oferta" className="relative py-16 sm:py-28 bg-[#070102] border-t border-red-950/80 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -right-10 w-80 h-80 bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating Coins on Offer Background */}
      <div className="absolute top-12 left-6 sm:left-16 opacity-75 hidden sm:block animate-float-slow">
        <GoldCoin size={48} />
      </div>
      <div className="absolute bottom-16 right-6 sm:right-16 opacity-75 hidden sm:block animate-float-reverse">
        <GoldCoin size={56} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Offer Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950 via-red-900 to-red-950 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>CONDIÇÃO ESPECIAL DE LANÇAMENTO</span>
          </div>
        </div>

        {/* Master Offer Card */}
        <div className="rounded-[32px] p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-[#240307] via-[#160205] to-[#0D0103] border-2 border-amber-400/60 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(234,179,8,0.25)] relative overflow-hidden">
          
          {/* Subtle top banner strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

          {/* Offer Title & Subtitle */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-3">
              ACESSO AO MÉTODO <span className="text-gold-gradient">CPA CHINÊS</span>
            </h2>
            <p className="text-base sm:text-xl text-stone-300 font-medium">
              Aprenda o mecanismo que existe por trás da aquisição digital.
            </p>
          </div>

          {/* What's included checklist + Bonuses in exact same format */}
          <div className="bg-[#120204]/80 rounded-2xl p-5 sm:p-7 border border-red-900/50 mb-8 sm:mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-4">
              O que você recebe ao se inscrever hoje:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {includedItems.map((item, idx) => (
                <div key={`item-${idx}`} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
              {bonusItems.map((item, idx) => (
                <div key={`bonus-${idx}`} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                  <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/40">
                    <Gift className="w-2.5 h-2.5 text-amber-300" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Box */}
          <div className="text-center rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#1C0307] to-[#120104] border border-red-800/60 mb-8 shadow-inner">
            
            {/* [PREÇO ORIGINAL] */}
            <div className="text-xs sm:text-sm text-stone-400 uppercase tracking-widest font-mono">
              De <span className="line-through text-red-400 font-bold">R$ 127,90</span> por apenas:
            </div>

            {/* [PREÇO ATUAL] */}
            <div className="mt-2 flex items-baseline justify-center">
              <span className="font-extrabold text-5xl sm:text-7xl text-white tracking-tight text-gold-gradient">
                R$ 23,47
              </span>
            </div>
          </div>

          {/* Big Action Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleCtaClick}
              className="cursor-pointer group relative w-full sm:w-auto px-8 sm:px-12 py-5 rounded-xl bg-gold-btn text-[#1c0205] font-bold text-xl sm:text-2xl tracking-wider uppercase transition-all duration-300 transform active:scale-95 hover:scale-[1.02] btn-shimmer-effect flex items-center justify-center gap-3 border border-amber-200 shadow-[0_8px_30px_rgba(234,179,8,0.5)]"
            >
              <span>QUERO COMEÇAR AGORA</span>
              <ArrowRight className="w-6 h-6 stroke-[3] group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Immediate access note */}
            <p className="mt-3.5 text-xs sm:text-sm text-stone-300 flex items-center gap-1.5 font-medium">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Acesso imediato após confirmação do pagamento.</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
