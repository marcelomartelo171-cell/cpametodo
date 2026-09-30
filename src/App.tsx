import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { WhatIsCpaSection } from './components/WhatIsCpaSection';
import { ProblematizationSection } from './components/ProblematizationSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080103] text-[#F3F4F6] selection:bg-[#EAB308] selection:text-black antialiased relative">
      {/* Main Landing Page Flow */}
      <main>
        {/* 1. Primeira Dobra — Hero */}
        <Hero />

        {/* 2. O Que É CPA Chinês */}
        <WhatIsCpaSection />

        {/* 3. Problematização & Prova Social */}
        <ProblematizationSection />

        {/* 4. Oferta Principal */}
        <OfferSection onCheckoutClick={() => setIsCheckoutOpen(true)} />

        {/* 5. Garantia Incondicional */}
        <GuaranteeSection />

        {/* 6. Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 7. CTA Final */}
        <FinalCtaSection />
      </main>

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
