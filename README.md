# Raymond Towa Group LTDA — Landing Page Institucional

## Stack Tecnológica
- **Framework**: Next.js 14 (App Router)
- **Estilização**: Tailwind CSS 3.4
- **Animações**: Framer Motion 11
- **Ícones**: Lucide React
- **Tipografia**: Inter + Playfair Display (Google Fonts)
- **Deploy**: Vercel (recomendado)

---

## Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build para produção
npm run build

# 4. Iniciar servidor de produção
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📸 Imagens Necessárias na pasta `/public`

> ⚠️ **Você precisa copiar manualmente as fotos reais para a pasta `/public`:**

| Arquivo Esperado | Descrição |
|---|---|
| `/public/logo-leao.png` | Logotipo oficial (leão dourado) — **fornecida pelo cliente** |
| `/public/donos-corporativo.jpg` | Foto corporativa dos CEOs — **fornecida pelo cliente** |
| `/public/donos-execucao.jpg` | Foto dos CEOs em execução/pós-obra — **fornecida pelo cliente** |
| `/public/service-pos-obra.jpg` | Foto do apartamento após limpeza pós-obra |
| `/public/service-condominio.jpg` | Foto de área comum de condomínio |

As demais imagens (`service-*-ai.jpg`) já foram geradas por IA e estão na pasta `/public`.

---

## Estrutura do Projeto

```
raymond-towa/
├── public/
│   ├── logo-leao.png              ← Copiar manualmente
│   ├── donos-corporativo.jpg      ← Copiar manualmente
│   ├── donos-execucao.jpg         ← Copiar manualmente
│   ├── service-*.jpg              ← Já presentes (IA geradas)
│   └── favicon.ico                ← Opcional
├── src/
│   ├── app/
│   │   ├── layout.tsx             ← Root layout + SEO metadata
│   │   ├── page.tsx               ← Página principal
│   │   └── globals.css            ← Design System CSS
│   └── components/
│       ├── Navbar.tsx             ← Header sticky com glass morphism
│       ├── HeroSection.tsx        ← Seção de abertura com parallax
│       ├── ServicesSection.tsx    ← Bento Grid de serviços
│       ├── AboutSection.tsx       ← Seção dos fundadores
│       ├── TestimonialsSection.tsx ← Slider infinito de depoimentos
│       ├── Footer.tsx             ← Rodapé corporativo
│       ├── CookieBanner.tsx       ← Banner LGPD
│       └── WhatsAppFAB.tsx        ← Botão flutuante WhatsApp
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Deploy na Vercel

1. Faça push para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e conecte o repositório
3. A Vercel detecta automaticamente Next.js — clique em **Deploy**
4. Configure o domínio personalizado `jraymondgroup.com.br` nas configurações

---

## Personalização

### Cores (tailwind.config.ts)
```ts
gold: "#B59410"       // Dourado Nobre Muted
graphite: "#111827"   // Grafite Profundo
cream: "#F9FAFB"      // Off-white Principal
```

### WhatsApp (todos os componentes)
Busque por `wa.me/5521995711553` e substitua o número se necessário.

### Emails (Footer.tsx)
Atualize o array `EMAILS` com novos endereços conforme necessário.

---

## LGPD & Compliance
- Banner de cookies com localStorage persistence
- Política de Privacidade deve ser criada em `/app/privacidade/page.tsx`
- CNPJ: `63.249.257/0001-00` exibido no Footer e Hero

---

**Raymond Towa Group LTDA © 2025 · CNPJ 63.249.257/0001-00**
