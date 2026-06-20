"use client";

/**
 * Seção Institucional — Nossa Essência: Liderança com Propósito
 * Storytelling dos fundadores Joseli da Silva Raimundo (CEO) e Fabio Raimundo (Co-CEO),
 * com composição visual dupla (foto corporativa + mão na massa) e texto empático.
 */

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Quote, Heart, Target, TrendingUp } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5521995711553?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Raymond%20Towa%20Group.";

/* Pilares de valor */
const PILLARS = [
  {
    icon: Target,
    title: "Propósito Claro",
    description: "Resolver gargalos complexos com agilidade, eliminando o estresse do cliente.",
  },
  {
    icon: Heart,
    title: "Gestão Humana",
    description: "Um casal unido pela mesma visão: servir com excelência e cuidar com afeto.",
  },
  {
    icon: TrendingUp,
    title: "Execução de Elite",
    description: "Lideramos a gestão porque dominamos a execução — de dentro para fora.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      aria-labelledby="about-heading"
      style={{
        background: "linear-gradient(160deg, #F9FAFB 0%, #F5F0E8 50%, #F9FAFB 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B59410' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Section Label */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Nossa Essência</span>
          <h2
            id="about-heading"
            className="heading-display text-4xl lg:text-5xl mt-4"
          >
            Liderança com{" "}
            <span className="text-gradient-gold">Propósito</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        {/* Main Grid — 2 colunas */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ─── Coluna A: Storytelling ─────────────────────────── */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Quote decorativa */}
            <div className="relative">
              <Quote
                size={48}
                className="text-gold/20 absolute -top-4 -left-4"
                fill="currentColor"
              />
              <p className="text-xl lg:text-2xl font-display font-medium text-graphite leading-relaxed pl-6">
                "Construímos este grupo sobre um alicerce que nenhum manual ensina:{" "}
                <span className="text-gold font-semibold">
                  o casamento entre o amor pelo que fazemos e a obsessão pela excelência.
                </span>
              </p>
            </div>

            <div className="space-y-4 text-graphite-muted leading-relaxed">
              <p>
                A <strong className="text-graphite">Raymond Towa Group LTDA</strong> nasceu da
                visão compartilhada de Joseli da Silva Raimundo e Fabio Raimundo — um casal unido
                não apenas pela vida, mas por uma missão comum: resolver os gargalos mais complexos
                da gestão condominial e residencial com agilidade cirúrgica.
              </p>
              <p>
                Fundada em{" "}
                <strong className="text-graphite">17 de outubro de 2025</strong>, no coração do
                Recreio dos Bandeirantes, a empresa surgiu da percepção de que o mercado carecia
                de um grupo que combinasse{" "}
                <em className="text-graphite">gestão estratégica com execução técnica impecável</em>.
                Não apenas terceirizando mão de obra, mas assumindo a responsabilidade total pelo
                resultado.
              </p>
              <p>
                A força do grupo está na sinergia entre seus fundadores: Joseli (CEO) traz a visão
                operacional e o relacionamento humano com clientes, enquanto Fabio (Co-CEO) domina
                a execução técnica e a supervisão de campo. Juntos, eles criam um ciclo virtuoso
                que muito poucos concorrentes conseguem replicar.
              </p>
            </div>

            {/* Assinatura dos fundadores */}
            <div className="flex items-center gap-6 pt-4 border-t border-graphite/8">
              <div>
                <p className="font-display font-bold text-graphite text-lg">Joseli da Silva Raimundo</p>
                <p className="text-sm text-gold font-medium">CEO · Raymond Towa Group LTDA</p>
              </div>
              <div className="w-px h-12 bg-gold/20" />
              <div>
                <p className="font-display font-bold text-graphite text-lg">Fabio Raimundo</p>
                <p className="text-sm text-gold font-medium">Co-CEO · Diretor de Operações</p>
              </div>
            </div>

            {/* Pilares */}
            <div className="grid grid-cols-1 gap-4 mt-2">
              {PILLARS.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-white/60 border border-graphite/6 hover:border-gold/20 hover:bg-white transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-graphite text-sm">{title}</p>
                    <p className="text-xs text-graphite-muted mt-0.5 leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Coluna B: Composição Visual Dupla ──────────────── */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Container com posicionamento relativo */}
            <div className="relative w-full max-w-md mx-auto">

              {/* Decorative background circle */}
              <div
                className="absolute -inset-8 rounded-full opacity-10"
                style={{
                  background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
                }}
              />

              {/* ── Card Principal: Foto Corporativa ── */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-luxury border border-graphite/8 z-10"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/donos-corporativo.jpg"
                    alt="Joseli da Silva Raimundo (CEO) e Fabio Raimundo (Co-CEO) – Foto corporativa oficial da Raymond Towa Group"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.src = "https://placehold.co/600x800/111827/D4AF37?text=Foto+Corporativa";
                    }}
                  />
                  {/* Gradient de luxo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />

                  {/* Nome e cargo overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="gold-divider mb-3" />
                    <p className="text-white font-display font-bold text-lg leading-tight">
                      Joseli & Fabio Raimundo
                    </p>
                    <p className="text-gold-light text-sm font-medium mt-0.5">
                      CEO & Co-CEO · Raymond Towa Group LTDA
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── Card Secundário: Mão na Massa (sobreposto) ── */}
              <motion.div
                className="absolute -bottom-10 -right-8 lg:-right-14 w-52 lg:w-60 rounded-2xl overflow-hidden shadow-luxury border-2 border-white z-20 rotate-2"
                initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 2 } : {}}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, scale: 1.03 }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/donos-execucao.jpg"
                    alt="Joseli e Fabio Raimundo em atividade – Limpeza pós-obra profissional"
                    fill
                    className="object-cover"
                    sizes="240px"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.src = "https://placehold.co/400x533/1F2937/D4AF37?text=Em+Execu%C3%A7%C3%A3o";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-xs font-bold leading-tight">Na Prática 💪</p>
                    <p className="text-gold-light text-[10px] mt-0.5 leading-tight">
                      Limpeza Pós-Obra Profissional
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── Legenda Conceitual ── */}
              <motion.div
                className="absolute -top-6 -left-6 lg:-left-12 bg-white rounded-2xl shadow-luxury px-5 py-4 max-w-[200px] z-20 border border-gold/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <p className="text-graphite text-[11px] font-semibold leading-tight italic">
                  "Conhecimento técnico que nasce na prática. Lideramos a gestão porque dominamos
                  a execução."
                </p>
                <div className="w-8 h-px bg-gold mt-3" />
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="about-whatsapp-cta"
            className="btn-primary"
          >
            Fale Diretamente com os Fundadores
          </a>
        </motion.div>
      </div>
    </section>
  );
}
