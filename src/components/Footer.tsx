"use client";

/**
 * Footer Corporativo — Compliance & Identidade
 * Grid organizado: logo + emails + endereço + WhatsApp + CNPJ + redes sociais.
 */

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
  FileText,
  Instagram,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5521995711553?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const SERVICES_LIST = [
  "Manutenção de Condomínios",
  "Conservação Predial e Domiciliar",
  "Limpeza Pós-Obra",
  "Jardinagem e Paisagismo",
  "Pintura Predial",
  "Higienização de Caixas d'Água",
  "Porteiro Eletrônico Control ID",
  "Camareiras e Suporte Residencial",
  "Manutenção de Elevadores",
];

const EMAILS = [
  { address: "joseliceo@jraymondgroup.com.br", label: "Joseli · CEO" },
  { address: "fabioceo@jraymondgroup.com.br", label: "Fabio · Co-CEO" },
  { address: "servicos@jraymondgroup.com.br", label: "Solicitação de Serviços" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      id="contato"
      ref={ref}
      className="relative bg-graphite text-white overflow-hidden"
      role="contentinfo"
      aria-label="Rodapé e informações de contato"
    >
      {/* Top accent */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Gold glow top-left */}
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 0%, #D4AF37, transparent 60%)",
        }}
      />

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10 lg:py-20 relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* ── Coluna 1: Identidade ── */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Logo */}
            <Link href="#hero" className="flex items-center gap-3 group w-fit">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo-leao.png"
                  alt="Raymond Towa Group – Logotipo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display font-bold text-base text-white leading-tight">
                  Raymond Towa Group
                </p>
                <p className="text-[10px] font-medium tracking-widest uppercase text-gold">
                  LTDA
                </p>
              </div>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed">
              Soluções complexas, gestão inteligente. Otimizando o tempo e elevando
              a qualidade de vida no Recreio dos Bandeirantes.
            </p>

            {/* CNPJ em destaque */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-gold/20 w-fit">
              <FileText size={14} className="text-gold flex-shrink-0" />
              <div>
                <p className="text-[10px] tracking-wider uppercase text-white/50 mb-0.5">CNPJ</p>
                <p className="text-sm font-mono font-semibold text-gold">63.249.257/0001-00</p>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/raymondtowagroup"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center hover:border-gold/40 hover:text-gold transition-all duration-200"
                aria-label="Instagram Raymond Towa Group"
              >
                <Instagram size={15} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-icon"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center hover:border-gold/40 hover:text-gold transition-all duration-200"
                aria-label="WhatsApp Raymond Towa Group"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* ── Coluna 2: Serviços ── */}
          <div>
            <h3 className="text-sm font-semibold text-gold tracking-wider uppercase mb-6">
              Serviços
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((s) => (
                <li key={s}>
                  <button
                    onClick={() =>
                      document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 text-left flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Coluna 3: Links & Navegação ── */}
          <div>
            <h3 className="text-sm font-semibold text-gold tracking-wider uppercase mb-6">
              Empresa
            </h3>
            <ul className="space-y-2.5 mb-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    id={`footer-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-gold tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {["Política de Privacidade", "Termos de Uso", "LGPD"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/40 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Coluna 4: Contato ── */}
          <div>
            <h3 className="text-sm font-semibold text-gold tracking-wider uppercase mb-6">
              Contato
            </h3>

            {/* Endereço */}
            <div className="flex gap-3 mb-6">
              <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-white font-medium">Recreio dos Bandeirantes</p>
                <p className="text-xs text-white/50 mt-0.5">Rio de Janeiro · RJ · Brasil</p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-link"
              className="flex items-center gap-3 mb-6 group hover:text-gold transition-colors"
            >
              <Phone size={16} className="text-gold flex-shrink-0" />
              <div>
                <p className="text-sm text-white group-hover:text-gold transition-colors">
                  (21) 99571-1553
                </p>
                <p className="text-xs text-white/50">WhatsApp — Atendimento Rápido</p>
              </div>
            </a>

            {/* E-mails Corporativos */}
            <div className="space-y-3">
              {EMAILS.map(({ address, label }) => (
                <div key={address} className="flex gap-3">
                  <Mail size={14} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`mailto:${address}`}
                      id={`footer-email-${label.toLowerCase().split("·")[0].trim()}`}
                      className="text-xs text-white/70 hover:text-gold transition-colors break-all"
                    >
                      {address}
                    </a>
                    <p className="text-[10px] text-white/40 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-main-cta"
              className="mt-8 flex items-center gap-2 px-5 py-3 rounded-xl bg-gold/10 border border-gold/25 text-gold text-sm font-semibold hover:bg-gold hover:text-white transition-all duration-300 w-full justify-center"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} Raymond Towa Group LTDA · CNPJ 63.249.257/0001-00
            · Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/20">
            Fundada em 17 de Outubro de 2025 · Recreio dos Bandeirantes, RJ
          </p>
        </div>
      </div>
    </footer>
  );
}
