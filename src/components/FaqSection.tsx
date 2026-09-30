import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: 'Preciso entender de marketing digital?',
      a: 'Não. O treinamento foi estruturado especificamente para explicar os conceitos desde a base. Você aprenderá como funciona a engrenagem de aquisição sem precisar de vocabulário prévio ou experiência na área.'
    },
    {
      q: 'Preciso ter seguidores?',
      a: 'Não. O modelo de CPA é focado na entrega direta de tráfego e cumprimento de ações definidas pelas empresas parceiras. Você não precisa construir perfil público, ter audiência ou produzir conteúdo diário.'
    },
    {
      q: 'Preciso aparecer?',
      a: 'De forma alguma. Operações de CPA trabalham nos bastidores da internet (por meio de links, campanhas e pontes de navegação). Você não precisa gravar vídeos, mostrar o rosto ou se expor.'
    },
    {
      q: 'Consigo acompanhar sendo iniciante?',
      a: 'Sim. As aulas são curtas, didáticas e organizadas em módulos progressivos. O objetivo do curso é justamente transformar conceitos que parecem complexos em um passo a passo simples e compreensível.'
    },
    {
      q: 'O que significa CPA?',
      a: 'CPA significa "Cost Per Action" (Custo Por Ação). É um modelo em que uma empresa remunera parceiros de aquisição quando um usuário realiza uma ação específica previamente estipulada (como cadastro, download de app ou primeiro depósito).'
    },
    {
      q: 'Preciso de computador?',
      a: 'Não necessariamente. Todo o material do curso pode ser assistido pelo celular. Para a execução e acompanhamento das operações, o uso de computador é recomendado para maior conforto, mas é perfeitamente viável gerenciar testes iniciais com seu smartphone.'
    },
    {
      q: 'Existe garantia de resultado?',
      a: 'Não. CPA é uma atividade profissional de aquisição de tráfego, onde resultados dependem exclusivamente da sua estratégia, dedicação, condições de mercado e regras das plataformas. Não vendemos promessas mágicas de ganhos rápidos.'
    },
    {
      q: 'Quando recebo acesso?',
      a: 'Imediatamente após a confirmação do pagamento. Pagamentos via Pix e Cartão de Crédito são aprovados em poucos segundos e os dados de login são enviados diretamente para o seu e-mail cadastrado.'
    },
    {
      q: 'Por quanto tempo tenho acesso?',
      a: 'Você terá acesso completo a todas as aulas e atualizações pelo período informado no momento da matrícula (geralmente [1 ano] com direito a revisitar o conteúdo sempre que desejar).'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#080103] border-t border-red-950/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            Respostas diretas e transparentes sobre o formato do treinamento.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#140205] border border-red-900/40 overflow-hidden transition-all duration-300 hover:border-amber-500/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="cursor-pointer w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-red-950/80 border border-red-800/60 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-500/20 text-amber-300' : 'text-stone-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-stone-300 text-sm sm:text-base leading-relaxed border-t border-red-950/60 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
