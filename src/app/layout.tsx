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
  title: "Raymond Towa Group LTDA | Gestão Inteligente de Condomínios e Serviços Especializados",
  description:
    "Excelência em manutenção e conservação de condomínios, limpeza pós-obra, jardinagem, pintura predial e suporte residencial no Recreio dos Bandeirantes, Rio de Janeiro. CNPJ: 63.249.257/0001-00",
  keywords: [
    "manutenção condomínios",
    "conservação predial",
    "limpeza pós obra",
    "Recreio dos Bandeirantes",
    "porteiro eletrônico Control ID",
    "higienização caixa d'água",
    "jardinagem condomínio",
    "Raymond Towa Group",
  ],
  authors: [{ name: "Raymond Towa Group LTDA" }],
  creator: "Raymond Towa Group LTDA",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.jraymondgroup.com.br",
    siteName: "Raymond Towa Group LTDA",
    title: "Raymond Towa Group LTDA | Gestão Inteligente de Condomínios",
    description:
      "Soluções complexas, gestão inteligente. Otimizando seu tempo, elevando sua qualidade de vida.",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F9FAFB" />
      </head>
      <body className="font-sans bg-cream text-graphite antialiased">
        {children}
      </body>
    </html>
  );
}
