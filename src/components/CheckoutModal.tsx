import React, { useState } from 'react';
import { X, ShieldCheck, Lock, QrCode, CreditCard, Check, Sparkles, AlertCircle } from 'lucide-react';
import { GoldCoin } from './GoldCoin';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Por favor, preencha seu nome e e-mail.');
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#120204] border-2 border-amber-500/50 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(245,158,11,0.2)] flex flex-col overflow-hidden text-stone-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-red-900/50 flex items-center justify-between bg-gradient-to-r from-red-950 via-[#26040A] to-red-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Inscrição • CPA Chinês
              </h3>
              <p className="text-[11px] text-amber-300/80 font-mono">
                Ambiente Seguro 256-bit
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-1.5 rounded-lg bg-red-950 text-stone-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto max-h-[80vh]">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="font-display font-black text-2xl text-white">
                Pedido Inicializado!
              </h4>
              <p className="text-sm text-stone-300 max-w-sm mx-auto">
                Parabéns, <strong>{name}</strong>! Seus dados foram validados. Você receberá as instruções e link de acesso no e-mail:
                <br />
                <span className="text-amber-300 font-mono text-sm block mt-1">{email}</span>
              </p>
              <div className="p-4 rounded-xl bg-[#1A0307] border border-amber-500/40 text-xs text-amber-200">
                (Em ambiente de produção, este passo direciona para o gateway de pagamento como Kiwify, Hotmart ou Eduzz).
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer w-full py-3 rounded-xl bg-gold-btn text-[#1c0205] font-bold text-base uppercase"
              >
                Concluir e Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Order summary small box */}
              <div className="p-3.5 rounded-xl bg-[#1A0307] border border-red-900/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Treinamento CPA Chinês</div>
                  <div className="text-[11px] text-amber-300/80">Acesso Vitalício + 3 Bônus</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-stone-400 line-through">R$ 127,90</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono">R$ 23,47</div>
                </div>
              </div>

              {/* Form Fields */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0102] border border-red-900/60 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Seu Melhor E-mail (para envio do login)
                </label>
                <input
                  type="email"
                  required
                  placeholder="exemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0102] border border-red-900/60 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0102] border border-red-900/60 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Payment selector */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`cursor-pointer p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition ${
                      paymentMethod === 'pix'
                        ? 'border-amber-400 bg-amber-500/20 text-amber-200 shadow-md'
                        : 'border-red-950 bg-[#0A0102] text-stone-400'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-400" />
                    <span>Pix (Imediato)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`cursor-pointer p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition ${
                      paymentMethod === 'card'
                        ? 'border-amber-400 bg-amber-500/20 text-amber-200 shadow-md'
                        : 'border-red-950 bg-[#0A0102] text-stone-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-amber-400" />
                    <span>Cartão em até 12x</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="cursor-pointer w-full py-4 rounded-xl bg-gold-btn text-[#1c0205] font-bold text-lg tracking-wider uppercase transition active:scale-95 shadow-[0_4px_25px_rgba(234,179,8,0.4)] btn-shimmer-effect mt-2"
              >
                CONFIRMAR MATRÍCULA
              </button>

              <div className="text-center text-[10px] text-stone-400 flex items-center justify-center gap-1.5 pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Garantia legal de 7 dias com devolução total assegurada.</span>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
