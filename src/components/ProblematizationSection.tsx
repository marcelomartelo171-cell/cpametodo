import React from 'react';
import { AlertTriangle, XCircle, ShieldAlert, AlertOctagon, User, Image as ImageIcon } from 'lucide-react';

export const ProblematizationSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#080103] border-t border-red-950/60 overflow-hidden">
      {/* Background Ambient Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-800/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* PARTE 1 — PROBLEMATIZAÇÃO */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* Badge: MAS ATENÇÃO */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/50 text-red-300 text-xs font-bold uppercase tracking-wider mb-5 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>MAS ATENÇÃO</span>
          </div>

          {/* Headline grande */}
          <h2 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Não pense que é só encontrar seu link de indicação, criar uma conta e pronto.{' '}
            <span className="block mt-2 text-gold-gradient drop-shadow-[0_2px_15px_rgba(234,179,8,0.25)]">
              Não é tão simples assim.
            </span>
          </h2>

          {/* Textos explicativos */}
          <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
            <p>
              Muitos dos nossos alunos chegaram à comunidade depois de tentar fazer tudo por conta própria e cometer erros que poderiam ter sido evitados com orientação de quem já conhece esse mercado.
            </p>
            <p>
              As plataformas possuem critérios próprios para validar usuários, indicações, bonificações e saques. Quando alguma atividade não atende aos requisitos da operação, ela pode não ser validada.
            </p>
          </div>
        </div>

        {/* Bloco visual de ALERTA com 3 itens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-18">
          {/* Item 1 */}
          <div className="rounded-2xl p-6 bg-gradient-to-b from-[#240508] via-[#160205] to-[#0D0102] border border-red-700/40 hover:border-red-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-600/40 flex items-center justify-center mb-4 text-red-400">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">
                Indicação não validada
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-normal">
                Uma ação feita incorretamente pode não atender aos critérios necessários para gerar uma bonificação.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="rounded-2xl p-6 bg-gradient-to-b from-[#240508] via-[#160205] to-[#0D0102] border border-red-700/40 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-amber-500/40 flex items-center justify-center mb-4 text-amber-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">
                Bônus não liberado
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-normal">
                Cada plataforma possui condições próprias que precisam ser compreendidas antes da execução.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="rounded-2xl p-6 bg-gradient-to-b from-[#240508] via-[#160205] to-[#0D0102] border border-red-700/40 hover:border-red-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-600/40 flex items-center justify-center mb-4 text-red-400">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">
                Problemas no saque
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-normal">
                Erros durante o processo podem gerar verificações adicionais ou impedir que uma operação seja considerada válida.
              </p>
            </div>
          </div>
        </div>

        {/* Virada para a Solução */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-5">
            Foi exatamente por isso que nós testamos o processo antes de transformá-lo em um método.
          </h3>

          <div className="space-y-4 text-base sm:text-lg text-stone-300 leading-relaxed font-normal mb-8">
            <p>
              Passamos por diferentes testes e cenários para entender como essas operações funcionam na prática, quais erros precisam ser evitados e quais requisitos devem ser observados em cada etapa.
            </p>
            <p>
              Dentro da comunidade, você não precisa tentar descobrir tudo sozinho. Você aprende com quem já passou pelas diferentes fases desse mercado.
            </p>
          </div>

          {/* Destaque Grande */}
          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-[#280409] via-[#1D0306] to-[#280409] border-2 border-amber-400/50 shadow-[0_4px_30px_rgba(245,158,11,0.2)] text-center">
            <p className="text-base sm:text-lg lg:text-xl font-bold text-white leading-relaxed">
              Não ensinamos atalhos para burlar sistemas. Ensinamos como{' '}
              <span className="text-gold-gradient font-extrabold">
                entender o processo, evitar erros e operar respeitando os critérios
              </span>{' '}
              das plataformas utilizadas.
            </p>
          </div>
        </div>

        {/* Transição visual para a próxima seção */}
        <div className="text-center mb-10 sm:mb-14 pt-4 border-t border-red-950/60">
          <p className="text-stone-300 text-base sm:text-lg font-medium mb-1.5">
            Mas você não precisa acreditar somente no que estamos dizendo.
          </p>
          <p className="text-gold-gradient font-extrabold text-xl sm:text-3xl drop-shadow-[0_2px_12px_rgba(245,158,11,0.3)]">
            Veja a experiência de quem já está dentro.
          </p>
        </div>

        {/* PARTE 2 — SEÇÃO DE DEPOIMENTOS */}
        <div className="mb-4">
          <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white text-center tracking-tight mb-8 sm:mb-10">
            O que nossos alunos estão falando
          </h3>

          {/* Cards de Depoimentos: Mobile Horizontal Smooth Carousel / Desktop 3 Columns */}
          <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="min-w-[85%] sm:min-w-0 snap-center rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#1E0306] via-[#120204] to-[#0A0102] border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* [FOTO DO ALUNO] + [NOME] */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-red-900/40">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-950 to-stone-900 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-300 shadow-inner">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        [NOME DO ALUNO]
                      </div>
                      <div className="text-xs text-amber-300/80 font-medium">
                        Aluno da Comunidade • Verificado
                      </div>
                    </div>
                  </div>

                  {/* [DEPOIMENTO] */}
                  <div className="mb-5 text-sm text-stone-300 leading-relaxed italic bg-black/40 p-4 rounded-xl border border-red-900/30">
                    "[DEPOIMENTO: Espaço reservado para o relato real do aluno sobre sua experiência, aprendizado e acompanhamento com o método.]"
                  </div>
                </div>

                {/* [PRINT OU RESULTADO VERIFICÁVEL] */}
                <div className="rounded-xl border border-dashed border-amber-500/40 bg-[#160205]/60 p-4 text-center hover:bg-[#1C0307] transition">
                  <div className="flex flex-col items-center justify-center gap-2 py-4">
                    <ImageIcon className="w-8 h-8 text-amber-400/70" />
                    <span className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                      [PRINT OU RESULTADO VERIFICÁVEL]
                    </span>
                    <span className="text-[11px] text-stone-400">
                      Espaço reservado para print de validação
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dica para mobile scroll */}
          <div className="text-center md:hidden mt-3 text-xs text-stone-400 font-medium">
            ← Deslize para ver mais depoimentos →
          </div>
        </div>

      </div>
    </section>
  );
};
