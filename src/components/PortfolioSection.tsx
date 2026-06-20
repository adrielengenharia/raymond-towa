"use client";

/**
 * Seção de Portfólio / Serviços Concluídos — Light Luxury Design
 * Apresenta fotos reais dos serviços da Raymond Towa Group.
 * Possui filtros interativos por categoria, efeito de zoom com Lightbox,
 * e animações fluidas via Framer Motion.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera, X, Check, MapPin, ZoomIn } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: "pos-obra" | "manutencao";
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Closet de Luxo com Portas de Vidro",
    category: "pos-obra",
    categoryLabel: "Limpeza Pós-Obra",
    location: "Recreio dos Bandeirantes",
    image: "/portfolio-1.jpg",
    description: "Remoção técnica de poeira fina e resíduos pós-instalação de marcenaria de alto padrão.",
  },
  {
    id: 2,
    title: "Cozinha Americana & Living Integrado",
    category: "pos-obra",
    categoryLabel: "Limpeza Pós-Obra",
    location: "Barra da Tijuca",
    image: "/portfolio-2.jpg",
    description: "Higienização completa de pisos, bancadas e superfícies vitrificadas após reforma.",
  },
  {
    id: 3,
    title: "Área de Cooktop e Lavanderia",
    category: "pos-obra",
    categoryLabel: "Limpeza Pós-Obra",
    location: "Recreio dos Bandeirantes",
    image: "/portfolio-3.jpg",
    description: "Limpeza cirúrgica de eletrodomésticos, nichos e metais sanitários pós-obra.",
  },
  {
    id: 4,
    title: "Fachada Lateral e Acessos do Condomínio",
    category: "manutencao",
    categoryLabel: "Conservação Predial",
    location: "Recreio dos Bandeirantes",
    image: "/portfolio-4.jpg",
    description: "Conservação de gradis, limpeza de calçadas externas e manutenção de áreas comuns.",
  },
  {
    id: 5,
    title: "Área de Piscina e Lazer Integrada",
    category: "manutencao",
    categoryLabel: "Conservação Predial",
    location: "Recreio dos Bandeirantes",
    image: "/portfolio-5.jpg",
    description: "Supervisão de áreas de circulação, deck de piscina e paisagismo integrado.",
  },
  {
    id: 6,
    title: "Banheiro Revestido em Mármore Nobre",
    category: "pos-obra",
    categoryLabel: "Limpeza Pós-Obra",
    location: "Vargem Pequena",
    image: "/portfolio-6.jpg",
    description: "Limpeza especializada de pedras naturais e louças finas sem abrasivos.",
  },
  {
    id: 7,
    title: "Manutenção de Sifões e Hidráulica",
    category: "manutencao",
    categoryLabel: "Conservação Predial",
    location: "Recreio dos Bandeirantes",
    image: "/portfolio-7.jpg",
    description: "Inspeção técnica preventiva e limpeza física de siphons e tubulações.",
  },
  {
    id: 8,
    title: "Banheiro Suíte Minimalista",
    category: "pos-obra",
    categoryLabel: "Limpeza Pós-Obra",
    location: "Barra da Tijuca",
    image: "/portfolio-8.jpg",
    description: "Higienização profunda de azulejos, box e remoção de marcas de cal/cimento.",
  },
  {
    id: 9,
    title: "Cozinha Gourmet Planejada",
    category: "pos-obra",
    categoryLabel: "Limpeza Pós-Obra",
    location: "Recreio dos Bandeirantes",
    image: "/portfolio-9.jpg",
    description: "Polimento de bancadas em quartzo, coifa e armários reflexivos pós-obra.",
  },
  {
    id: 10,
    title: "Jardins do Pátio Central",
    category: "manutencao",
    categoryLabel: "Conservação Predial",
    location: "Recreio dos Bandeirantes",
    image: "/portfolio-10.jpg",
    description: "Manutenção paisagística e podas de ornamentação na área comum condominial.",
  },
];

type FilterType = "all" | "pos-obra" | "manutencao";

export default function PortfolioSection() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [activePhoto, setActivePhoto] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section
      id="portfolio"
      className="py-16 lg:py-32 bg-white relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Decorative top grid */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label flex items-center justify-center gap-2">
            <Camera size={14} className="text-gold" />
            Galeria de Projetos
          </span>
          <h2 id="portfolio-heading" className="heading-display text-3xl lg:text-5xl mt-4 mb-4">
            Serviços <span className="text-gradient-gold">Entregues</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-graphite-muted leading-relaxed">
            Nossos resultados falam por nós. Explore imagens reais dos trabalhos concluídos
            por nossa equipe técnica no Recreio dos Bandeirantes e região.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {(
            [
              { id: "all", label: "Todos" },
              { id: "pos-obra", label: "Limpeza Pós-Obra" },
              { id: "manutencao", label: "Conservação Predial" },
            ] as const
          ).map((t) => {
            const active = filter === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gold text-white shadow-gold-sm"
                    : "bg-cream text-graphite-muted hover:text-graphite border border-graphite/5"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                key={proj.id}
                className="group relative bg-cream rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border border-graphite/5"
              >
                {/* Photo container */}
                <div
                  onClick={() => setActivePhoto(proj)}
                  className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer bg-graphite/10"
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-graphite/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gold transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                  {/* Category Tag */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/90 backdrop-blur-sm text-graphite font-bold text-[7px] sm:text-[9px] uppercase tracking-wider shadow-sm">
                    {proj.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5 flex flex-col gap-1 sm:gap-2">
                  <div className="flex items-center gap-1 text-gold text-[8px] sm:text-[10px] font-medium uppercase tracking-wider">
                    <MapPin size={9} className="sm:w-2.5 sm:h-2.5" />
                    {proj.location}
                  </div>
                  <h3 className="font-display font-bold text-graphite text-xs sm:text-base leading-snug group-hover:text-gold transition-colors duration-200 line-clamp-2">
                    {proj.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-graphite-muted leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-graphite/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative max-w-4xl w-full bg-cream rounded-3xl overflow-hidden shadow-luxury border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Fechar visualização"
              >
                <X size={18} />
              </button>

              {/* Photo Area */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
                <Image
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>

              {/* Details Area */}
              <div className="p-6 bg-white flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-widest">
                    <MapPin size={12} />
                    {activePhoto.location}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold font-bold text-[10px] uppercase tracking-wider">
                    {activePhoto.categoryLabel}
                  </span>
                </div>
                <h3 className="font-display font-bold text-graphite text-lg sm:text-xl leading-tight">
                  {activePhoto.title}
                </h3>
                <p className="text-sm text-graphite-muted leading-relaxed mt-1">
                  {activePhoto.description}
                </p>
                
                {/* Visual guarantee */}
                <div className="mt-4 flex items-center gap-2 p-3 bg-green-500/5 border border-green-500/10 rounded-xl w-fit">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 flex-shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-[11px] font-semibold text-green-800">
                    Padrão de Excelência Raymond Towa Group
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
