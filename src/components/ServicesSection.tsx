"use client";

/**
 * Ecossistema de Serviços — Bento Grid Assimétrico Ultra-Premium
 * Mosaico de cards com imagens (reais + IA), ícones Lucide e legendas detalhadas.
 * Scroll Reveal assíncrono via Framer Motion.
 */

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Sparkles,
  ArrowUpDown,
  Zap,
  Leaf,
  Paintbrush,
  Droplets,
  Shield,
  Users,
  Baby,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5521995711553?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20";

/* ─── Dados dos Serviços ──────────────────────────────────── */
interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string; // caminho em /public ou path de IA
  imageAlt: string;
  size: "large" | "medium" | "small"; // define o span no grid
  accent?: boolean;
}

const SERVICES: Service[] = [
  {
    id: "manutencao-condominio",
    title: "Manutenção de Condomínios",
    subtitle: "Gestão Completa de Áreas Comuns",
    description:
      "Conservação profissional de áreas comuns, fachadas, portarias e paisagismo. Nossa equipe garante a valorização e a apresentação impecável do seu condomínio, com relatórios de acompanhamento e resposta ágil a qualquer demanda.",
    icon: Building2,
    image: "/service-condominio.jpg",
    imageAlt: "Área comum de condomínio premium conservada pela Raymond Towa Group",
    size: "large",
    accent: true,
  },
  {
    id: "conservacao-predial",
    title: "Conservação Predial e Domiciliar",
    subtitle: "Pós-Obra · Cozinhas Gourmet · Banheiros",
    description:
      "Limpezas técnicas pós-obra com remoção de resíduos de argamassa, cal e tinta. Higienização profunda de cozinhas gourmet, banheiros de alto padrão e acabamentos premium, devolvendo o imóvel em condição de entrega.",
    icon: Sparkles,
    image: "/service-pos-obra.jpg",
    imageAlt: "Apartamento após limpeza pós-obra pela Raymond Towa Group",
    size: "large",
  },
  {
    id: "elevadores",
    title: "Manutenção de Elevadores",
    subtitle: "Inspeção e Conservação",
    description:
      "Supervisão periódica, limpeza interna e reporte de anomalias em elevadores, garantindo segurança e funcionamento dentro das normas da ABNT.",
    icon: ArrowUpDown,
    image: "/service-elevador-ai.jpg",
    imageAlt: "Técnico realizando manutenção de elevador em condomínio",
    size: "medium",
  },
  {
    id: "eletrica",
    title: "Chaves Elétricas",
    subtitle: "Painéis e Quadros Elétricos",
    description:
      "Verificação, substituição e conservação de disjuntores, quadros de distribuição e chaves elétricas, assegurando a conformidade e segurança da instalação.",
    icon: Zap,
    image: "/service-eletrica-ai.jpg",
    imageAlt: "Quadro elétrico sendo inspecionado por técnico especializado",
    size: "small",
  },
  {
    id: "jardinagem",
    title: "Jardinagem e Paisagismo",
    subtitle: "Áreas Verdes Premium",
    description:
      "Criação e manutenção de jardins, gramados e canteiros em condomínios. Plantio, podas, adubação e irrigação com padrão de jardinagem de hotel boutique.",
    icon: Leaf,
    image: "/service-jardim-ai.jpg",
    imageAlt: "Jardim tropical impecável de condomínio de luxo",
    size: "medium",
  },
  {
    id: "pintura",
    title: "Pintura Predial",
    subtitle: "Fachadas e Interiores",
    description:
      "Pintura técnica de fachadas, corredores e áreas internas com tintas de alta durabilidade. Preparação de superfície, selagem e acabamento premium.",
    icon: Paintbrush,
    image: "/service-pintura-ai.jpg",
    imageAlt: "Equipe profissional realizando pintura de fachada predial",
    size: "small",
  },
  {
    id: "caixa-dagua",
    title: "Higienização de Caixas d'Água",
    subtitle: "Limpeza e Laudos Técnicos",
    description:
      "Limpeza, desinfecção e higienização completa de reservatórios de água, com emissão de laudo técnico conforme a Portaria MS 888/2021 e normas da ABNT NBR 5626.",
    icon: Droplets,
    image: "/service-caixa-ai.jpg",
    imageAlt: "Higienização profissional de caixa d'água com equipamentos especializados",
    size: "medium",
  },
  {
    id: "porteiro-eletronico",
    title: "Porteiros Eletrônicos Control ID",
    subtitle: "Tecnologia de Acesso Premium",
    description:
      "Instalação, configuração e manutenção de sistemas de porteiro eletrônico Control ID com reconhecimento facial, controle de acesso e integração com câmeras IP.",
    icon: Shield,
    image: "/service-porteiro-ai.jpg",
    imageAlt: "Sistema de porteiro eletrônico Control ID instalado em condomínio premium",
    size: "medium",
  },
  {
    id: "camareiras",
    title: "Camareiras e Suporte Residencial",
    subtitle: "Hotel-Grade em Sua Casa",
    description:
      "Serviço de camareira com padrão hoteleiro de 5 estrelas para residências, apartamentos de alto padrão e short stays. Organização, limpeza profunda e arrumação com protocolo premium.",
    icon: Users,
    image: "/service-camareira-ai.jpg",
    imageAlt: "Camareira profissional arrumando quarto de alto padrão",
    size: "medium",
  },
  {
    id: "babas",
    title: "Suporte Familiar — Babás",
    subtitle: "Cuidado e Confiança",
    description:
      "Intermediação e gestão de profissionais de cuidado infantil qualificadas, com verificação de referências e alinhamento com as necessidades específicas de cada família.",
    icon: Baby,
    image: "/service-babas-ai.jpg",
    imageAlt: "Cuidado infantil profissional com bebê em ambiente seguro",
    size: "small",
  },
];



/* ─── Card Components ──────────────────────────────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`service-card gold-shimmer group ${
        service.size === "large" ? "lg:row-span-2" : ""
      }`}
      id={`service-card-${service.id}`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden ${
          service.size === "large"
            ? "h-56 lg:h-72"
            : service.size === "medium"
            ? "h-44"
            : "h-36"
        }`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority={index < 2}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          onError={(e) => {
            // Fallback para placeholder se imagem não existir
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/800x500/F9FAFB/B59410?text=${encodeURIComponent(service.title)}`;
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 via-transparent to-transparent" />

        {/* Icon Badge */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-card">
          <Icon size={18} className="text-gold" />
        </div>

        {/* Accent tag */}
        {service.accent && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold text-white text-[10px] font-bold tracking-wider uppercase">
            Destaque
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <div>
          <p className="section-label text-[10px] mb-1">{service.subtitle}</p>
          <h3 className="font-display font-bold text-graphite text-lg leading-tight">
            {service.title}
          </h3>
        </div>
        <p className="text-sm text-graphite-muted leading-relaxed">
          {service.description}
        </p>
        <a
          href={`${WHATSAPP_URL}${encodeURIComponent(service.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          id={`cta-${service.id}`}
          className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light transition-colors group/link"
          aria-label={`Solicitar orçamento para ${service.title}`}
        >
          Solicitar Orçamento
          <svg
            className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

/* ─── Section Header ───────────────────────────────────────── */
function SectionHeader() {
  return (
    <motion.div
      className="text-center max-w-2xl mx-auto mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-label">Ecossistema de Serviços</span>
      <h2 className="heading-display text-4xl lg:text-5xl mt-4 mb-6">
        Soluções Completas para{" "}
        <span className="text-gradient-gold">Cada Necessidade</span>
      </h2>
      <div className="gold-divider mx-auto mb-6" />
      <p className="text-graphite-muted leading-relaxed text-lg">
        De condomínios corporativos a residências de alto padrão — nosso ecossistema
        de serviços foi desenhado para eliminar gargalos e garantir excelência operacional
        em cada detalhe.
      </p>
    </motion.div>
  );
}

/* ─── Main Export ──────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="py-24 lg:py-32 bg-cream relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #B59410 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeader />

        {/* Bento Grid Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-min">
          {/* Row 1 — Large cards */}
          <div className="md:col-span-2 lg:col-span-2">
            <ServiceCard service={SERVICES[0]} index={0} />
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <ServiceCard service={SERVICES[1]} index={1} />
          </div>

          {/* Row 2 — Mixed */}
          <div className="lg:col-span-1">
            <ServiceCard service={SERVICES[2]} index={2} />
          </div>
          <div className="lg:col-span-1">
            <ServiceCard service={SERVICES[3]} index={3} />
          </div>
          <div className="lg:col-span-2">
            <ServiceCard service={SERVICES[4]} index={4} />
          </div>

          {/* Row 3 — Mixed */}
          <div className="lg:col-span-2">
            <ServiceCard service={SERVICES[5]} index={5} />
          </div>
          <div className="lg:col-span-1">
            <ServiceCard service={SERVICES[6]} index={6} />
          </div>
          <div className="lg:col-span-1">
            <ServiceCard service={SERVICES[7]} index={7} />
          </div>

          {/* Row 4 */}
          <div className="lg:col-span-2">
            <ServiceCard service={SERVICES[8]} index={8} />
          </div>
          <div className="lg:col-span-2">
            <ServiceCard service={SERVICES[9]} index={9} />
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-graphite-muted mb-6 text-base">
            Não encontrou o serviço que precisa? Fale com nossa equipe.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="services-bottom-cta"
            className="btn-primary"
          >
            Falar com um Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
