import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

/* ─── Tipografia Premium ──────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

/* ─── SEO Metadata ────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://raymondtowagroup.com.br"),
  alternates: {
    canonical: "/",
  },
  title: "Raymond Towa Group LTDA | Serviços Terceirizados e Gestão de Condomínios",
  description:
    "Empresa de serviços terceirizados, manutenção e conservação de condomínios, limpeza pós-obra, jardinagem, pintura predial e suporte residencial na Barra da Tijuca, Recreio dos Bandeirantes e Rio de Janeiro. CNPJ: 63.249.257/0001-00.",
  keywords: [
    "serviços terceirizados",
    "empresa de terceirização de serviços",
    "terceirização de limpeza e manutenção",
    "manutenção de condomínios",
    "conservação predial",
    "limpeza pós-obra",
    "Barra da Tijuca",
    "Recreio dos Bandeirantes",
    "Rio de Janeiro",
    "porteiro eletrônico Control ID",
    "higienização caixa d'água",
    "jardinagem condomínio",
    "pintura predial",
    "Raymond Towa Group",
  ],
  authors: [{ name: "Raymond Towa Group LTDA" }],
  creator: "Raymond Towa Group LTDA",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://raymondtowagroup.com.br",
    siteName: "Raymond Towa Group LTDA",
    title: "Raymond Towa Group LTDA | Serviços Terceirizados e Gestão Inteligente",
    description:
      "Soluções complexas, gestão inteligente. Serviços terceirizados e conservação predial de alto padrão na Barra da Tijuca e Recreio dos Bandeirantes.",
    images: [
      {
        url: "/logo-leao.png",
        width: 1200,
        height: 630,
        alt: "Raymond Towa Group LTDA",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "cOHVUY-fdJdZ4gaeaaD-PMNOkyOBAaN6WwQSiZKWafM",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Raymond Towa Group LTDA",
  legalName: "Raymond Towa Group LTDA",
  url: "https://raymondtowagroup.com.br",
  logo: "https://raymondtowagroup.com.br/logo-leao.png",
  image: "https://raymondtowagroup.com.br/hero-bg.jpg",
  description:
    "Empresa especializada em serviços terceirizados, manutenção e conservação de condomínios, limpeza pós-obra, pintura predial, jardinagem e suporte residencial na Barra da Tijuca, Recreio dos Bandeirantes e Rio de Janeiro.",
  telephone: "+55-21-99571-1553",
  taxID: "63.249.257/0001-00",
  foundingDate: "2025-10-17",
  founder: {
    "@type": "Person",
    name: "Joseli da Silva Raimundo",
    jobTitle: "CEO",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. das Américas, 1155, Sala 303",
    addressLocality: "Barra da Tijuca, Rio de Janeiro",
    addressRegion: "RJ",
    postalCode: "22631-903",
    addressCountry: "BR",
  },
  areaServed: [
    "Barra da Tijuca",
    "Recreio dos Bandeirantes",
    "Jacarepaguá",
    "Zona Oeste - Rio de Janeiro",
    "Rio de Janeiro",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-21-99571-1553",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: ["Portuguese"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Terceirizados e Conservação Predial",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manutenção e Conservação de Condomínios",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Limpeza Pós-Obra e Conservação Domiciliar Avançada",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Serviços Terceirizados de Jardinagem, Pintura Predial e Hidráulica",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Porteiros Eletrônicos Control ID e Higienização de Caixas d'Água",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F9FAFB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-cream text-graphite antialiased">
        {children}
      </body>
    </html>
  );
}
