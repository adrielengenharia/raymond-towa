"use client";

/**
 * Hero Section — Abertura de Impacto Ultra-Premium
 * Título imponente, subtítulo sutil, CTA WhatsApp com glow,
 * scroll indicator animado e background com gradiente suave.
 */

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Sparkles, Shield, Clock } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5521995711553?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

/* Variantes de animação Framer Motion */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Stats de credibilidade rápida */
const STATS = [
  { value: "500+", label: "Projetos entregues", icon: Shield },
  { value: "98%", label: "Clientes satisfeitos", icon: Sparkles },
  { value: "24h", label: "Resposta garantida", icon: Clock },
];

export default function HeroSection() {

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-cream"
      aria-labelledby="hero-heading"
    >

      {/* ── Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient blobs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #B59410 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />
        {/* Geometric line accents */}
        <div className="absolute top-1/4 right-16 w-px h-64 bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />
        <div className="absolute bottom-1/3 left-16 w-px h-48 bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block" />
        {/* Diagonal subtle lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#B59410" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-12 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center lg:min-h-screen">

          {/* Left — Copy */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/8 border border-gold/20">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
                <span className="section-label text-[9px] sm:text-[11px] whitespace-nowrap tracking-[0.15em] sm:tracking-[0.25em]">
                  Recreio dos Bandeirantes · Rio de Janeiro
                </span>
              </div>
            </motion.div>

            {/* Heading principal */}
            <motion.div variants={itemVariants}>
              <h1
                id="hero-heading"
                className="font-display font-black text-[2.1rem] sm:text-5xl lg:text-7xl xl:text-[82px] leading-[1.05] tracking-tight text-graphite"
              >
                Soluções{" "}
                <span className="text-gradient-gold">Complexas,</span>
                <br />
                Gestão{" "}
                <span className="relative inline-block">
                  Inteligente
                  {/* Underline decoration */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-gold to-gold-light rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                .
              </h1>
            </motion.div>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="text-base lg:text-xl text-graphite-muted font-light leading-relaxed max-w-xl"
            >
              Otimizando seu tempo,{" "}
              <span className="text-graphite font-medium">elevando sua qualidade de vida.</span>{" "}
              Excelência operacional em manutenção, conservação predial e serviços
              residenciais premium.
            </motion.p>


            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="btn-primary py-4 px-8 text-base"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                <MessageCircle size={20} />
                Solicitar Orçamento Agora
              </a>
              <button
                onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })}
                id="hero-services-btn"
                className="btn-ghost py-4 px-8 text-base"
              >
                Conhecer Serviços
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6 pt-4 border-t border-graphite/6"
            >
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-gold" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-display font-bold text-lg sm:text-xl text-graphite leading-none">{value}</p>
                    <p className="text-[10px] sm:text-xs text-graphite-muted mt-0.5 leading-tight">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Composição Visual */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative ring */}
            <div className="absolute inset-8 rounded-full border border-gold/10 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-16 rounded-full border border-gold/6 animate-[spin_30s_linear_infinite_reverse]" />

            {/* Logo principal — Flutuante */}
            <motion.div
              className="relative w-72 h-72 lg:w-80 lg:h-80"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow de fundo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 blur-3xl scale-110" />

              <Image
                src="/logo-leao.png"
                alt="Raymond Towa Group – Logotipo Oficial"
                fill
                className="object-contain drop-shadow-[0_8px_32px_rgba(181,148,16,0.4)]"
                priority
              />
            </motion.div>

            {/* Badge flutuante — Verificado */}
            <motion.div
              className="absolute top-8 -right-4 bg-white rounded-2xl shadow-luxury px-5 py-3 flex items-center gap-2.5 border border-graphite/6"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-graphite">CNPJ Ativo</p>
                <p className="text-[10px] text-graphite-muted">63.249.257/0001-00</p>
              </div>
            </motion.div>

            {/* Badge flutuante — Localização */}
            <motion.div
              className="absolute bottom-16 -left-6 bg-white rounded-2xl shadow-luxury px-5 py-3 border border-graphite/6"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <p className="text-xs font-bold text-graphite">📍 Recreio dos Bandeirantes</p>
              <p className="text-[10px] text-graphite-muted">Rio de Janeiro · RJ</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 1 }}
        onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Rolar para serviços"
        id="hero-scroll-indicator"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-graphite-muted font-medium">
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
