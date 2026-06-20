"use client";

/**
 * Banner LGPD — Componente de Privacidade
 * Flutuante na base da tela, aparece após 2 segundos, desaparece após aceitar ou recusar.
 * Persiste a decisão em localStorage para não exibir novamente.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  /* Checa localStorage ao montar */
  useEffect(() => {
    const consent = localStorage.getItem("rtg-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("rtg-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("rtg-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-description"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-2xl"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-luxury border border-graphite/8 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">

            {/* Ícone */}
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
              <Cookie size={18} className="text-gold" />
            </div>

            {/* Texto */}
            <div className="flex-1 min-w-0">
              <p id="cookie-title" className="font-semibold text-graphite text-sm leading-tight mb-1 flex items-center gap-2">
                <Shield size={13} className="text-gold" />
                Privacidade & Cookies — LGPD
              </p>
              <p id="cookie-description" className="text-xs text-graphite-muted leading-relaxed">
                Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego
                do site, em conformidade com a{" "}
                <strong className="text-graphite">Lei Geral de Proteção de Dados (LGPD)</strong>.
                Seus dados nunca são vendidos a terceiros.
              </p>
            </div>

            {/* Botões */}
            <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                id="cookie-decline-btn"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold text-graphite-muted border border-graphite/12 hover:border-graphite/30 hover:text-graphite transition-all duration-200"
                aria-label="Recusar cookies não essenciais"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                id="cookie-accept-btn"
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-semibold bg-gold text-white hover:bg-gold-light transition-all duration-200 hover:shadow-gold-sm"
                aria-label="Aceitar todos os cookies"
              >
                Aceitar Cookies
              </button>
            </div>

            {/* Fechar (X) */}
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 p-1.5 rounded-lg text-graphite-muted hover:text-graphite hover:bg-graphite/5 transition-all"
              aria-label="Fechar banner de cookies"
              id="cookie-close-btn"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
