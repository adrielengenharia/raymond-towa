"use client";

/**
 * Botão Flutuante WhatsApp — Fixo no canto inferior direito
 * Aparece após 3 segundos de scroll, com tooltip e animação de pulso.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5521995711553?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento!";

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-24 right-6 z-40 flex items-center gap-3"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-graphite text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-luxury whitespace-nowrap"
              >
                💬 Fale conosco agora!
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-2.5 h-2.5 bg-graphite rotate-45 rounded-sm" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAB Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-fab"
            aria-label="Falar no WhatsApp"
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.55)] hover:scale-110 transition-all duration-300"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <svg viewBox="0 0 24 24" width="26" height="26" fill="white" className="flex-shrink-0">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.9 9.9 0 0 0-6.98-2.82C6 1.022 1.578 5.39 1.574 10.82a9.7 9.7 0 0 0 1.439 4.885l-.995 3.635 3.73-.974zm11.238-5.362c-.309-.156-1.832-.904-2.116-1.008-.283-.103-.49-.156-.696.156-.206.312-.797.103-.977 1.21-.181.309-.36.363-.67.207-.31-.157-1.31-.484-2.5-1.543-.925-.824-1.55-1.84-1.732-2.148-.182-.309-.018-.475.137-.629.14-.139.31-.363.463-.544.156-.181.207-.31.31-.517.103-.207.052-.387-.026-.543-.078-.156-.696-1.678-.954-2.299-.25-.604-.505-.522-.696-.532-.18-.01-.387-.01-.595-.01a1.14 1.14 0 0 0-.825.385c-.284.31-1.083 1.06-1.083 2.585s1.11 3.001 1.26 3.207c.15.207 2.184 3.335 5.291 4.678.739.32 1.317.512 1.767.654.743.236 1.42.203 1.956.123.597-.09 1.832-.749 2.09-1.474.258-.724.258-1.344.18-1.474-.078-.13-.284-.207-.593-.363z"/>
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
