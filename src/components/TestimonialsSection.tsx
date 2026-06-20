"use client";

/**
 * Prova Social — Infinite Horizontal Slider de Depoimentos
 * Avatares discretos, estrelas douradas, animação CSS infinita pausada no hover.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

/* ─── Dados de Depoimentos ─────────────────────────────────── */
interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  initials: string;
  color: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana Fonseca",
    role: "Síndica",
    location: "Condomínio Riviera — Recreio",
    content:
      "A Raymond Towa Group transformou completamente a gestão do nosso condomínio. A equipe é extremamente profissional, pontual e os resultados superam as expectativas. Contrato renovado com prazer!",
    rating: 5,
    initials: "MF",
    color: "#7C3AED",
  },
  {
    id: "t2",
    name: "Carlos Eduardo Lima",
    role: "Proprietário",
    location: "Apartamento Duplex — Barra da Tijuca",
    content:
      "Contratei a limpeza pós-obra para meu apartamento recém-reformado. O serviço foi impecável — encontrei o imóvel pronto para morar, sem rastro algum da obra. Recomendo com muita confiança.",
    rating: 5,
    initials: "CL",
    color: "#1D4ED8",
  },
  {
    id: "t3",
    name: "Ana Paula Rocha",
    role: "Administradora",
    location: "Condomínio Parque Verde",
    content:
      "O paisagismo e a jardinagem ficaram incríveis! As áreas verdes do nosso condomínio viraram cartão-postal. Os moradores não param de elogiar a mudança. Equipe dedicada e comprometida.",
    rating: 5,
    initials: "AR",
    color: "#059669",
  },
  {
    id: "t4",
    name: "Roberto Carvalho",
    role: "Morador e Conselheiro",
    location: "Condomínio Le Jardin — Recreio",
    content:
      "A higienização da caixa d'água foi realizada com excelência. Recebemos o laudo técnico detalhado e ficamos tranquilos sabendo que a água dos nossos filhos está 100% segura. Muito obrigado!",
    rating: 5,
    initials: "RC",
    color: "#B45309",
  },
  {
    id: "t5",
    name: "Fernanda Matos",
    role: "Proprietária",
    location: "Short Stay — Barra da Tijuca",
    content:
      "As camareiras da Raymond Towa são excepcionais. Padrão de hotel cinco estrelas, cada detalhe cuidado com perfeição. Meus hóspedes sempre elogiam a limpeza e organização.",
    rating: 5,
    initials: "FM",
    color: "#DB2777",
  },
  {
    id: "t6",
    name: "Gustavo Teixeira",
    role: "Síndico Profissional",
    location: "Três Condomínios no Recreio",
    content:
      "Gerencio três condomínios e a Raymond Towa Group atende todos eles com a mesma qualidade e dedicação. São parceiros confiáveis que entregam sempre dentro do prazo e com preço justo.",
    rating: 5,
    initials: "GT",
    color: "#0E7490",
  },
  {
    id: "t7",
    name: "Lúcia Santos",
    role: "Moradora",
    location: "Condomínio Atlântico Sul",
    content:
      "A instalação do porteiro eletrônico Control ID mudou completamente nossa segurança. Processo rápido, equipe super atenciosa na explicação e suporte pós-instalação impecável.",
    rating: 5,
    initials: "LS",
    color: "#6D28D9",
  },
  {
    id: "t8",
    name: "Paulo Henrique Alves",
    role: "Diretor Administrativo",
    location: "Condomínio Marina Village",
    content:
      "A pintura da fachada do nosso prédio foi executada com perfeição técnica. Acabamento impecável, limpeza total da área ao final e entrega dentro do prazo combinado. Nota máxima!",
    rating: 5,
    initials: "PA",
    color: "#0369A1",
  },
];

/* Duplicar para criar o efeito infinito */
const DOUBLED = [...TESTIMONIALS, ...TESTIMONIALS];

/* ─── Estrelas ──────────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-gold fill-gold" : "text-graphite/20"}
          fill={i < count ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

/* ─── Card de Depoimento ────────────────────────────────────── */
function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="testimonial-card"
      role="article"
      aria-label={`Depoimento de ${t.name}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
          style={{ backgroundColor: t.color }}
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-graphite text-sm leading-tight truncate">{t.name}</p>
          <p className="text-xs text-graphite-muted truncate">{t.role}</p>
        </div>
      </div>

      {/* Estrelas */}
      <Stars count={t.rating} />

      {/* Conteúdo */}
      <blockquote className="mt-3">
        <p className="text-sm text-graphite-muted leading-relaxed line-clamp-4">
          "{t.content}"
        </p>
      </blockquote>

      {/* Localização */}
      <div className="mt-4 pt-4 border-t border-graphite/5">
        <p className="text-[10px] text-graphite-muted/70 tracking-wide">📍 {t.location}</p>
      </div>
    </div>
  );
}

/* ─── Main Section ─────────────────────────────────────────── */
export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="depoimentos"
      className="py-12 lg:py-32 overflow-hidden bg-white"
      aria-labelledby="testimonials-heading"
    >
      {/* Top border accent */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent mb-16" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-8 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Prova Social</span>
          <h2
            id="testimonials-heading"
            className="heading-display text-3xl lg:text-5xl mt-4 mb-4"
          >
            Quem Confia na{" "}
            <span className="text-gradient-gold">Raymond Towa</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-graphite-muted text-sm lg:text-lg max-w-xl mx-auto">
            Depoimentos reais de síndicos, proprietários e administradores que
            escolheram a excelência.
          </p>

          {/* Rating aggregate */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <Stars count={5} />
            <span className="font-display font-bold text-2xl text-graphite">5.0</span>
            <span className="text-graphite-muted text-sm">· Avaliação Média</span>
          </div>
        </motion.div>
      </div>

      {/* ── Infinite Slider ── */}
      {/* Row 1 — scroll left */}
      <div className="slider-mask mb-4" aria-hidden="true">
        <div className="flex animate-[scrollLeft_45s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {DOUBLED.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right (direção invertida) */}
      <div className="slider-mask" aria-hidden="true">
        <div className="flex animate-[scrollLeft_55s_linear_infinite_reverse] hover:[animation-play-state:paused] w-max">
          {[...DOUBLED].reverse().map((t, i) => (
            <TestimonialCard key={`rev-${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-graphite-muted text-sm mb-6">
            Seja o próximo cliente a vivenciar a excelência Raymond Towa Group.
          </p>
          <a
            href="https://wa.me/5521995711553?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            id="testimonials-cta"
            className="btn-primary"
          >
            Iniciar Parceria Agora
          </a>
        </motion.div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent mt-16" />
    </section>
  );
}
