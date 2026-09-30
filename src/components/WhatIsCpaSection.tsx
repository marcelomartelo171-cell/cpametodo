import React from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';

export const WhatIsCpaSection: React.FC = () => {
  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      num: '01',
      title: 'PLATAFORMA',
      desc: 'DEFINE UMA BONIFICAÇÃO'
    },
    {
      num: '02',
      title: 'AQUISIÇÃO',
      desc: 'VOCÊ INDICA UM USUÁRIO'
    },
    {
      num: '03',
      title: 'AÇÃO',
      desc: 'O USUÁRIO CUMPRE OS REQUISITOS DA INDICAÇÃO'
    },
    {
      num: '04',
      title: 'BONIFICAÇÃO',
      desc: 'VOCÊ COLETA SEU BÔNUS'
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#080103] border-t border-red-950/60 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-red-700/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-3">
            Tá, mas afinal… o que é CPA Chinês?
          </h2>
          <p className="text-base sm:text-xl text-stone-300 font-medium">
            É muito mais simples de entender do que parece.
          </p>
        </div>

        {/* Text Explanation & Highlight Box */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 space-y-6 text-center">
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            Essas plataformas chinesas trabalham com programas de indicação e pagam bonificações para usuários que trouxerem novos depositantes qualificados.
          </p>

          {/* Destaque Visual */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#240408] via-[#32060C] to-[#240408] border-2 border-amber-400/50 text-white font-bold text-base sm:text-xl shadow-[0_4px_25px_rgba(245,158,11,0.2)]">
            <span>
              Como muitas estão voltando para o mercado agora e querem ganhar espaço, estão pagando bonificações{' '}
              <span className="text-gold-gradient drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)] font-extrabold">
                MUITO ALTAS
              </span>{' '}
              por esses usuários.
            </span>
          </div>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            Ou seja: você não depende do Tigrinho para poder lucrar. Você traz um novo usuário e recebe pela indicação.
          </p>
        </div>

        {/* 4-Step Simple Flowchart */}
        <div className="mb-14 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-4 relative">
            {steps.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="relative rounded-2xl p-6 bg-gradient-to-b from-[#200408] via-[#140205] to-[#0A0102] border border-red-900/60 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col items-center text-center">
                  {/* Golden Step Number */}
                  <div className="text-3xl sm:text-4xl font-black text-gold-gradient mb-3 tracking-wider">
                    {step.num}
                  </div>

                  {/* Step Title */}
                  <div className="font-extrabold text-base sm:text-lg text-white tracking-wide mb-2">
                    {step.title}
                  </div>

                  {/* Down Arrow separator */}
                  <div className="text-amber-400 font-bold text-lg mb-2 leading-none">
                    ↓
                  </div>

                  {/* Step Description */}
                  <div className="text-xs sm:text-sm font-bold text-amber-200/90 uppercase tracking-wide">
                    {step.desc}
                  </div>
                </div>

                {/* Connecting arrow for desktop between cards */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 items-center justify-center pointer-events-none z-20 text-amber-400/70"
                       style={{ left: `calc(${(idx + 1) * 25}% - 12px)` }}>
                    <ArrowRight className="w-6 h-6 stroke-[3]" />
                  </div>
                )}

                {/* Connecting arrow for mobile between cards */}
                {idx < steps.length - 1 && (
                  <div className="flex md:hidden justify-center items-center py-1 text-amber-400">
                    <ArrowDown className="w-5 h-5 stroke-[3]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* After Flowchart: "E onde entra o nosso método?" */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            E onde entra o nosso método?
          </h3>

          <div className="space-y-3 text-stone-300 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-white">
              É justamente essa estrutura que mostramos dentro do treinamento.
            </p>
            <p className="text-stone-300">
              Você aprende como funciona o processo, como estruturar seus perfis corretamente, cumprir os requisitos das plataformas e reduzir problemas com validações ou saques, além de entender na prática como funciona esse mercado.
            </p>
          </div>

          {/* CTA Button: QUERO COMEÇAR AGORA ↗ */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={scrollToOffer}
              className="cursor-pointer group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl bg-gold-btn text-[#1c0205] font-bold text-lg sm:text-xl tracking-wider uppercase transition-all duration-300 transform active:scale-95 hover:scale-[1.02] btn-shimmer-effect flex items-center justify-center gap-2 border border-amber-200/60 shadow-[0_0_30px_rgba(245,158,11,0.35)]"
            >
              <span>QUERO COMEÇAR AGORA ↗</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
