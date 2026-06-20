/**
 * ═══════════════════════════════════════════════════════════════
 * Raymond Towa Group LTDA — Landing Page Institucional
 * Arquitetura: Next.js 14 App Router · Tailwind CSS · Framer Motion
 *
 * Arquiteto Front-end Senior: Design System Light Luxury
 * ═══════════════════════════════════════════════════════════════
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function HomePage() {
  return (
    <>
      {/* ── Sticky Navigation ── */}
      <Navbar />

      {/* ── Main Content ── */}
      <main id="main-content" role="main">
        {/* 1. Hero — Abertura de Impacto */}
        <HeroSection />

        {/* 2. Ecossistema de Serviços — Bento Grid Assimétrico */}
        <ServicesSection />

        {/* 2.5. Portfólio — Fotos Reais de Serviços Concluídos */}
        <PortfolioSection />

        {/* 3. Institucional — Liderança com Propósito */}
        <AboutSection />

        {/* 4. Prova Social — Depoimentos */}
        <TestimonialsSection />
      </main>

      {/* ── Footer Corporativo ── */}
      <Footer />

      {/* ── Elementos Flutuantes (Portal) ── */}
      {/* Botão WhatsApp fixo */}
      <WhatsAppFAB />

      {/* Banner LGPD */}
      <CookieBanner />
    </>
  );
}
