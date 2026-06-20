"use client";

/**
 * Navbar — Header de Alta Fidelidade
 * Sticky com glass morphism, logotipo, menu minimalista e CTA WhatsApp magnético.
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL =
  "https://wa.me/5521995711553?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  /* Detecta scroll para intensificar o blur */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Fecha mobile menu ao clicar fora */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav shadow-[0_1px_0_rgba(181,148,16,0.1)]"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* ── Logotipo ── */}
            <Link
              href="#hero"
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Raymond Towa Group – Página Inicial"
              id="navbar-logo"
            >
              <div className="relative w-11 h-11 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-leao.png"
                  alt="Leão Dourado – Raymond Towa Group"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-[15px] text-graphite tracking-tight group-hover:text-gold transition-colors duration-300">
                  Raymond Towa Group
                </span>
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-graphite-muted">
                  Serviços Terceirizados
                </span>
              </div>
            </Link>

            {/* ── Menu Desktop ── */}
            <nav className="hidden lg:flex items-center gap-7" role="navigation" aria-label="Menu principal">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="nav-link"
                  aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* ── CTA WhatsApp ── */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="navbar-whatsapp-cta"
                className="btn-primary text-sm py-3 px-6 glow-ring"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle size={16} />
                <span>(21) 99571-1553</span>
              </a>
            </div>

            {/* ── Hamburguer Mobile ── */}
            <button
              className="lg:hidden p-2 rounded-lg text-graphite hover:text-gold transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              id="navbar-mobile-toggle"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 glass-nav flex flex-col pt-24 px-8 pb-8 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  className="text-left py-4 text-xl font-medium text-graphite border-b border-graphite/5 hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                id="mobile-whatsapp-cta"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
              <p className="text-center text-sm text-graphite-muted mt-4">
                (21) 99571-1553
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
