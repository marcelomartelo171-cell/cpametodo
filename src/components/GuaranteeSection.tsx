import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 bg-[#0A0103] border-t border-red-950/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="rounded-3xl p-6 sm:p-10 bg-[#140205] border border-amber-500/40 shadow-xl flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          
          {/* Elegant Gold Seal SVG */}
          <div className="shrink-0 relative">
            <div className="w-28 h-28 sm:w-36 sm:h-36 relative flex items-center justify-center">
              {/* Outer decorative burst/seal */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_4px_15px_rgba(245,158,11,0.35)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="46" fill="url(#sealBg)" stroke="#FEF08A" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="38" stroke="#CA8A04" strokeWidth="1" strokeDasharray="3 3" />
                
                <defs>
                  <linearGradient id="sealBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF08A" />
                    <stop offset="35%" stopColor="#EAB308" />
                    <stop offset="70%" stopColor="#B45309" />
                    <stop offset="100%" stopColor="#78350F" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inside Text & Badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                <Shield className="w-6 h-6 text-[#1c0205] fill-[#1c0205]" />
                <span className="font-display font-black text-xs sm:text-sm text-[#1c0205] leading-none mt-1">
                  7 DIAS
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-[#2a0508] uppercase tracking-tighter">
                  GARANTIA
                </span>
              </div>
            </div>
          </div>

          {/* Guarantee Content */}
          <div className="text-center md:text-left">
            <div className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold mb-1">
              [7 DIAS] DE GARANTIA INCONDICIONAL
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
              Você terá tempo para conhecer o treinamento.
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
              Entre, conheça o conteúdo e avalie se o treinamento faz sentido para você. A garantia seguirá as condições informadas no momento da compra.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-amber-300 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Sem complicações, conforme previsto pelo Código de Defesa do Consumidor.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
