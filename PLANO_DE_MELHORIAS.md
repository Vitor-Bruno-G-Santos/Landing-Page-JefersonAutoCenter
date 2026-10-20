# Plano Completo de Redesign e Descaracterização de IA — Jeferson Autocenter

> **Objetivo:** Eliminar todos os "sinais clássicos de template gerado por IA" (monotonia azul, jargão de prompt, cards de preço estilo SaaS, ausência de fotos reais, avatares de letras, textos clichês e placeholders esquecidos) e transformar o site em uma página comercial autêntica, tangível e de alta conversão para uma oficina mecânica real em Campo Grande - MS.

---

## Diagnóstico Consolidado (Seus Pontos + Achados Adicionais no Código)

### Pontos da Análise de Design (1 a 7)
1. **100% código e ícones, zero fotos reais:** Tanto o Hero quanto a seção "Quem Está Por Trás" usam apenas caixas de texto e ícones Lucide genéricos.
2. **Monotonia cromática ("Mar de Azul"):** Todas as 9 seções usam tons quase idênticos de azul-marinho (`#001f5c` / `#002d80`), causando fadiga visual.
3. **Poluição na Navbar e redundância no Hero:** A barra fixa carrega 4 telefones completos ao lado do CTA; no Hero, a pergunta *"Por que escolher a Jeferson Autocenter?"* aparece duplicada na badge da esquerda e no título do card da direita.
4. **Vazamento de jargão de prompt e erros gramaticais:** O subtítulo exibe literalmente `"A Ponte de Solução: No Jeferson Autocenter é Diferente!"` (*Solution Bridge*), além de erros como `"peças paralela"`, `"Aprovação previa"` (sem acento) e `"peças trocadas possui"` (no FAQ).
5. **Layout de "Planos de SaaS" nos Serviços:** 3 colunas altas com card central em `scale-105`, badge centralizada no topo e lista de checkmarks idêntica a planos *Basic / Pro / Enterprise*.
6. **Depoimentos com cara de mock de IA:** Avatares apenas com iniciais (`C`, `M`, `R`), sem o selo oficial do Google e sem link externo para ver as 162 avaliações reais no Google Maps.
7. **Conflito de cores na seção Nossas Unidades:** Dois botões vibrantes empilhados (um amarelo e um verde WhatsApp) competindo entre si e com o botão flutuante.

### Achados Extras da Auditoria de Código e Copywriting (Adições 8 a 10)
8. **Placeholder `"CNPJ: XX.XXX.XXX/0001-XX"` exposto no rodapé (`src/data/infos.json:9`):** O rodapé renderiza literalmente `CNPJ: XX.XXX.XXX/0001-XX`, um sinal imediato de template não finalizado.
9. **Vocabulário clichê de LLM (`src/data/infos.json`):** Expressões como *"atendimento humanizado"*, *"precisão milimétrica"* e *"gastos astronômicos"* soam artificiais para o público automotivo e devem ser trocadas por termos reais de oficina (suspensão, freios, câmbio automático, scanner, peças de primeira linha).
10. **Logo puramente em CSS (`src/components/atoms/Logo.jsx`):** A logo atual é apenas uma `<div>` com borda amarela; existe um `LogoIcon.jsx` órfão na pasta `atoms` que nem está conectado, ou espaço para a imagem real da marca.

---

## Passo 1: Limpar Vazamentos de Prompt, Erros Gramaticais, Clichês de IA e CNPJ Placeholder

**Objetivo:** Humanizar todo o copywriting do site, remover o termo *"A Ponte de Solução:"*, corrigir os 3 erros gramaticais, remover o CNPJ `XX.XXX.XXX/0001-XX` e substituir adjetivos artificiais de IA por linguagem real de oficina mecânica.

**Arquivos:**
- Modificar: `src/data/infos.json`
- Modificar: `src/components/organisms/FooterOrganism.jsx` (linha 78)

**Como fazer:**

1. Em `src/data/infos.json`:
   - Adicione um campo `"badge": "Oficina Mecânica em Campo Grande - MS • 2 Unidades"` dentro de `company` para usar no Hero sem repetir o título do card lateral.
   - Em `company.cnpj`, deixe `""` (vazio) até inserir o CNPJ real (ou preencha o CNPJ real da *Santos & Almeida Ltda*).
   - Em `differentials.items[0]`, corrija `"Aprovação previa"` para `"Aprovação prévia"`.
   - Em `benefits.subtitle`, troque `"Combinação perfeita entre alta tecnologia, atendimento humanizado e preço justo."` por `"Duas unidades equipadas em Campo Grande para cuidar da revisão, suspensão, freios e motor do seu veículo com orçamento transparente."`
   - Em `benefits.items`, troque expressões como `"precisão milimétrica"` e `"gastos astronômicos"` por descrições técnicas diretas.
   - Em `painPoints`:
     - Troque `"solutionTitle": "A Ponte de Solução: No Jeferson Autocenter é Diferente!"` por `"solutionTitle": "No Jeferson Autocenter é Diferente!"`.
     - Em `painPoints.items[3]`, corrija `"peças paralela"` para `"peças paralelas"`.
   - Em `faq.items[1].a`, corrija `"peças trocadas possui"` para `"peças trocadas possuem"`.

2. Em `src/components/organisms/FooterOrganism.jsx` (linha 78), só exiba o CNPJ se ele existir e não for placeholder:
```jsx
<p>
  {company.city}
  {company.cnpj && !company.cnpj.includes('XX') ? ` | CNPJ: ${company.cnpj}` : ''}
</p>
```

**Critério de conclusão:**
- Nenhuma ocorrência de `"Ponte de Solução"`, `"peças paralela"`, `"Aprovação previa"`, `"possui garantia"` ou `"XX.XXX"` na página.

---

## Passo 2: Simplificar a Navbar e Eliminar Redundâncias no Hero

**Objetivo:** Enxugar a barra de navegação fixa (removendo os 4 números de telefone que poluem o topo) e eliminar a repetição do título e dos telefones na primeira dobra (`HeroOrganism`).

**Arquivos:**
- Modificar: `src/components/organisms/HeaderOrganism.jsx`
- Modificar: `src/components/organisms/HeroOrganism.jsx`

**Como fazer:**

1. Em `src/components/organisms/HeaderOrganism.jsx`:
   - Substitua a lista de 4 telefones por um indicador compacto de localização que leva à seção `#unidades` (`"2 Unidades em Campo Grande"` com ícone `MapPin`), mantendo os links de navegação (`Serviços`, `Avaliações`, `Unidades`, `Dúvidas`) com bastante respiro ao lado do botão `"Falar no WhatsApp"`:
```jsx
"use client";
import React from 'react';
import Logo from '../atoms/Logo';
import { MapPin } from 'lucide-react';
import WhatsAppModalOrganism from '../organisms/WhatsAppModalOrganism';

export default function HeaderOrganism({ units = [] }) {
  return (
    <header className="sticky top-0 z-50 bg-[#001744]/95 backdrop-blur-md border-b border-blue-900/60 py-3.5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-200">
          <a href="#servicos" className="hover:text-[#ffcc00] transition-colors">Serviços</a>
          <a href="#avaliacoes" className="hover:text-[#ffcc00] transition-colors">Avaliações</a>
          <a href="#unidades" className="hover:text-[#ffcc00] transition-colors">Nossas Lojas</a>
          <a href="#faq" className="hover:text-[#ffcc00] transition-colors">Dúvidas</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#unidades"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-[#ffcc00] transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#ffcc00]" />
            <span>Salgado Filho e Júlio de Castilho</span>
          </a>
          <WhatsAppModalOrganism units={units} buttonLabel="Falar no WhatsApp" variant="primary" />
        </div>
      </div>
    </header>
  );
}
```

2. Em `src/components/organisms/HeroOrganism.jsx`:
   - Na `Badge` superior esquerda (linha 22), troque `{differentials.title}` por `"2 Unidades em Campo Grande - MS • Salgado Filho e Júlio de Castilho"` (com ícone `MapPin` ou `ShieldCheck`), acabando com a repetição da frase *"Por que escolher a Jeferson Autocenter?"*.

**Critério de conclusão:**
- Navbar limpa, sem números empilhados, e Hero sem frases duplicadas entre a coluna esquerda e a direita.

---

## Passo 3: Inserir Fotografias Reais no Hero e na Seção "Quem Está Por Trás"

**Objetivo:** Dar tangibilidade física de oficina mecânica real à primeira dobra e à seção institucional, substituindo caixas puramente textuais/ícones por fotografias da estrutura/oficina.

**Arquivos:**
- Criar pasta: `public/images/` (para armazenar fotos reais das fachadas da Salgado Filho e Júlio de Castilho, elevadores e equipe, ex.: `public/images/oficina-hero.jpg`, `public/images/unidade-salgado-filho.jpg`, `public/images/unidade-julio-castilho.jpg`)
- Modificar: `src/components/organisms/HeroOrganism.jsx`
- Modificar: `src/components/organisms/AboutOrganism.jsx`

**Como fazer:**

1. **No `HeroOrganism.jsx`:**
   - Transforme a coluna da direita (`lg:col-span-5`) em um **Card Fotográfico da Oficina**: imagem principal no topo (`aspect-[4/3] object-cover`) mostrando o pátio/elevador/scanner da oficina, sobreposta pelo selo `"Diagnóstico com Vídeo no WhatsApp"`, e abaixo da foto os 3 diferenciais objetivos enxutos, sem repetir a lista de 4 telefones:
```jsx
<div className="lg:col-span-5 relative">
  <div className="relative bg-[#001f5c] border border-blue-800/80 rounded-3xl overflow-hidden shadow-2xl">
    <div className="relative h-64 sm:h-72 w-full bg-[#001744]">
      <img
        src="/images/oficina-hero.jpg"
        alt="Interior e estrutura da oficina Jeferson Autocenter em Campo Grande"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c] via-transparent to-black/30" />
      <span className="absolute top-4 right-4 bg-[#ffcc00] text-gray-900 text-xs font-black px-3.5 py-1.5 rounded-full uppercase shadow-md">
        Orçamento Transparente
      </span>
    </div>

    <div className="p-6 space-y-3">
      <h2 className="text-lg font-extrabold text-white">{differentials.title}</h2>
      <ul className="space-y-2.5 text-sm text-gray-200">
        {differentials.items.map((item, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
```

2. **No `AboutOrganism.jsx` ("Quem Está Por Trás do Jeferson Autocenter"):**
   - Remova os 3 cards de ícones (`Qualificação Técnica`, `Transparência Total`, `Peças de Qualidade`) que repetem a seção de Benefícios.
   - Reestruture em um layout de 2 colunas: à esquerda, a história real da empresa em Campo Grande, os valores em formato editorial e os endereços das duas lojas; à direita, um grid fotográfico com as fotos das **2 Unidades Próprias** (Loja 1 Salgado Filho e Loja 2 Júlio de Castilho) identificadas com legenda.

**Nota importante sobre as fotos:**
- Se você já tiver as fotos reais das duas lojas (fachada Salgado Filho, fachada Júlio de Castilho, pátio com carros no elevador), basta colocá-las em `public/images/`. Enquanto as fotos próprias não forem copiadas, podemos deixar imagens fotográficas automotivas reais de oficina mecânica como *fallback* local em `public/images/` para o layout já funcionar com fotografia real.

---

## Passo 4: Quebrar a Monotonia do "Mar de Azul" (Intercalar Seções Claras e Escuras)

**Objetivo:** Criar contraste e ritmo visual intercalando seções em fundo claro (`#F8FAFC` / `#FFFFFF` com tipografia `#0F172A`) e seções em fundo azul-marinho escuro (`#001f5c` / `#001744`).

**Mapa de Cores por Seção (Ritmo Visual Recomendado):**
1. **Header + Hero:** Escuro (`#001744` -> `#001f5c`) — Impacto inicial da marca.
2. **Dores vs. Padrão Jeferson (`PainPointsOrganism`):** **CLARO (`bg-slate-50` / `#F8FAFC`)** — Leitura limpa e imediata logo após o Hero.
3. **Por Que Somos Referência (`BenefitsOrganism`):** Escuro (`bg-[#001f5c]`) — Destaca os ícones amarelos.
4. **Serviços & Manutenção (`ServicesPricingOrganism`):** **CLARO (`bg-white` / `#FFFFFF`)** — Cards claros com borda técnica, sem aspecto de SaaS escuro.
5. **Avaliações de Clientes (`TestimonialsOrganism`):** Escuro (`bg-[#001f5c]`) — Faz as 5 estrelas amarelas e os cards brancos/claros de review do Google saltarem aos olhos.
6. **Nossas Unidades (`LocationMapsOrganism`):** **CLARO (`bg-slate-100` / `#F1F5F9`)** — Integra harmoniosamente com o mapa claro do Google Maps.
7. **Quem Está Por Trás (`AboutOrganism`):** **CLARO (`bg-white`)** — Valoriza as fotografias das lojas e a leitura da história.
8. **Perguntas Frequentes (`FAQOrganism`) + Footer:** Escuro (`bg-[#001f5c]` e `bg-[#001744]`) — Fechamento sólido da página.

**Arquivos:**
- Modificar: `src/components/organisms/PainPointsOrganism.jsx`
- Modificar: `src/components/organisms/ServicesPricingOrganism.jsx`
- Modificar: `src/components/organisms/LocationMapsOrganism.jsx`
- Modificar: `src/components/organisms/AboutOrganism.jsx`

---

## Passo 5: Reformular a Seção de Dores em Comparativo Lado a Lado ("Oficinas Comuns vs. Padrão Jeferson")

**Objetivo:** Substituir os 4 blocos soltos + caixa gigante "Ponte de Solução" por um quadro comparativo direto em fundo claro (`bg-slate-50`), muito mais objetivo e livre de cara de landing page de curso.

**Arquivos:**
- Modificar: `src/components/organisms/PainPointsOrganism.jsx`

**Como fazer:**
- Divida a seção em duas colunas lado a lado (`grid-cols-1 lg:grid-cols-2 gap-8`):
  - **Coluna Esquerda ("O que você NÃO passa aqui" — fundo branco com borda `border-red-200`):** Lista as 4 situações frustrantes com ícone `XCircle` vermelho.
  - **Coluna Direita ("Como trabalhamos no Jeferson Autocenter" — fundo `#001f5c` texto branco e borda `#ffcc00`):** Explica o diagnóstico por vídeo no WhatsApp, aprovação prévia de orçamento, peças homologadas com garantia e inclui o botão `"Solicitar Diagnóstico pelo WhatsApp"`.

---

## Passo 6: Descaracterizar o Visual de "Planos SaaS" na Seção de Serviços

**Objetivo:** Fazer a seção de serviços parecer o catálogo real de um centro automotivo (e não planos *Basic / Pro / Enterprise* de software), em fundo claro (`bg-white`).

**Arquivos:**
- Modificar: `src/components/molecules/ServiceCard.jsx`
- Modificar: `src/components/organisms/ServicesPricingOrganism.jsx`
- Modificar: `src/data/infos.json` (seção `services`)

**Como fazer:**

1. Em `src/components/molecules/ServiceCard.jsx`:
   - Remova o `scale-105` que infla o card do meio.
   - Adicione uma faixa superior com foto/ícone técnico do serviço e alinhe a tag `"Mais Procurado"` no **canto superior direito** (`top-4 right-4`) em vez de centralizada na borda superior.
   - Use card branco (`bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#001f5c]`) com título em `#001f5c`, faixa de preço destacada em badge ou subtítulo técnico, e botões consistentes (`variant="secondary"` azul-marinho com hover amarelo, e `variant="primary"` amarelo no serviço em destaque).

2. *(Opcional recomendado em `infos.json`)*: Adicionar uma faixa abaixo dos 3 pacotes principais listando as demais especialidades rápidas da oficina em tags/chips: **Alinhamento 3D e Balanceamento • Freios e Suspensão • Troca de Óleo de Câmbio Automático • Embreagem e Correias • Ar-Condicionado Automotivo**.

---

## Passo 7: Redesenhar os Depoimentos no Padrão Oficial Google Meu Negócio

**Objetivo:** Tirar a aparência de depoimentos inventados por IA, adicionando o ícone colorido oficial do Google, metadados de avaliação verificada e link direto para as 162 avaliações no Google Maps.

**Arquivos:**
- Modificar: `src/components/molecules/TestimonialCard.jsx`
- Modificar: `src/components/organisms/TestimonialsOrganism.jsx`

**Como fazer:**

1. Em `src/components/molecules/TestimonialCard.jsx`:
   - Estilize o card em fundo branco (`bg-white text-slate-800 rounded-2xl p-6 shadow-lg`) sobre a seção azul-escura, exatamente como um card real do Google Reviews.
   - No topo do card, coloque o cabeçalho do autor (nome, unidade avaliada + estrelas) à esquerda e o **SVG colorido oficial do "G" do Google** no canto superior direito.
   - Adicione um selo discreto `"Avaliação publicada no Google"`.

2. Em `src/components/organisms/TestimonialsOrganism.jsx`:
   - Adicione `id="avaliacoes"` na `<section>`.
   - Abaixo do grid de depoimentos, adicione um botão/link externo discreto: `"Ver avaliações diretamente no Google Maps ↗"` apontando para a ficha do Google Maps da oficina.

---

## Passo 8: Eliminar o Conflito de Cores na Seção "Nossas Unidades"

**Objetivo:** Resolver a competição visual entre o botão amarelo e o botão verde empilhados dentro do card da unidade.

**Arquivos:**
- Modificar: `src/components/organisms/LocationMapsOrganism.jsx` (linhas 94-103)

**Como fazer:**
- Deixe o botão principal de conversão (`"Falar com a Unidade..."`) na cor principal da marca (`variant="primary"` amarelo `#ffcc00` com texto escuro).
- Transforme o segundo botão (`"Traçar Rota no Google Maps"`) em estilo secundário/outline (`variant="outline"` ou borda neutra), mantendo toda a seção fiel à tríade Azul + Amarelo + Branco:

```jsx
<div className="space-y-3">
  <Button href={currentUnit.whatsapp} target="_blank" rel="noreferrer" variant="primary" className="w-full">
    <WhatsAppIcon className="w-5 h-5 mr-2" />
    Falar com a Unidade {currentUnit.shortName || currentUnit.name}
  </Button>
  <Button href={currentUnit.mapsUrl} target="_blank" rel="noreferrer" variant="outline" className="w-full">
    <Navigation className="w-5 h-5 mr-2" />
    Traçar Rota no Google Maps
  </Button>
</div>
```

---

## Ordem Sugerida de Execução

- **Passo 1:** Limpeza de copywriting, remoção de `"A Ponte de Solução:"`, correções gramaticais e remoção do CNPJ `XX.XXX.XXX/0001-XX`.
- **Passo 2:** Simplificação da Navbar e remoção das repetições no Hero.
- **Passo 3:** Inclusão de estrutura fotográfica real no Hero e reformulação da seção "Quem Está Por Trás".
- **Passo 4 + Passo 5:** Alternância de seções claras/escuras e novo layout comparativo na seção de Dores.
- **Passo 6:** Redesign dos cards de Serviços (fim do visual de planos SaaS + faixa de especialidades).
- **Passo 7:** Cards de Depoimentos no padrão Google Reviews com logo oficial do Google e link para o Maps.
- **Passo 8:** Correção da hierarquia de cores dos botões na seção Nossas Unidades.
