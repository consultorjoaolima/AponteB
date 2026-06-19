# AponteB — Site Institucional

Site institucional da **AponteB Performance Empresarial**, consultoria especializada em estratégia, gestão, liderança e desenvolvimento humano, com sede em Recife, Pernambuco.

---

## Sobre o projeto

Este site foi desenvolvido do zero com foco em **semântica, acessibilidade e performance**, substituindo uma versão anterior que acumulava CSS duplicado, estilos inline e estrutura HTML inconsistente.

A nova versão segue a abordagem **Mobile First** — o layout base é construído para dispositivos móveis e expandido progressivamente para tablets e desktops via media queries com `min-width`.

---

## Tecnologias

- HTML5 semântico
- CSS3 (Mobile First, variáveis CSS, Grid e Flexbox)
- JavaScript puro (sem frameworks ou dependências)
- Google Fonts — [Poppins](https://fonts.google.com/specimen/Poppins)
- Font Awesome (ícones do menu mobile)

---

## Estrutura de arquivos
aponteb/
├── index.html
├──src/
  ├── css/
  │   └── style.css
  ├── js/
  │   └── script.js
  └── img/
    ├── logoaponteb.png
    ├── socios.png
    ├── clientes/
    │  └── cliente-*.png / .jpg
    ├── Pilares/
    │  └── pilar-*.png

## Seções

| Seção | ID | Descrição |
|---|---|---|
| Hero | `#hero` | Apresentação principal e CTA |
| Proof | — | Números de impacto em destaque |
| Quem Somos | `#quem-somos` | Perfil dos sócios e credenciais |
| Pilares | `#pilares` | Os três pilares da AponteB |
| Resultados | `#resultados` | Métricas animadas de impacto |
| Método V.I.V.A. | `#metodo` | Framework proprietário |
| Frentes de Atuação | `#frentes` | Consultoria, Treinamentos e Mentoria |
| Clientes | `#clientes` | Empresas atendidas |
| Depoimentos | `#depoimentos` | Reconhecimento de parceiros |
| Contato | `#contato` | CTA final |

---

## Funcionalidades JavaScript

**Menu mobile**
- Toggle de abertura e fechamento
- Fecha ao clicar fora do menu
- Fecha ao pressionar `ESC`
- Fecha ao clicar em qualquer link interno
- Atualiza `aria-expanded` para acessibilidade

**Contadores animados**
- Ativados por `IntersectionObserver` ao entrar na viewport
- Animação suave com easing cúbico
- Formatação numérica no padrão pt-BR (ex: 3.000, 80.000h)
- Não reanima ao rolar de volta

**Fallback de imagens**
- Detecta imagens que falham ao carregar
- Esconde o elemento `<img>` sem remover do DOM
- Exibe o texto do atributo `alt` no lugar

---

## Boas práticas aplicadas

- **Mobile First** — estilos base para mobile, expandidos com `min-width`
- **BEM** — nomenclatura de classes seguindo Block__Element--Modifier
- **Semântica HTML** — uso correto de `<nav>`, `<article>`, `<figure>`, `<blockquote>`, `<ol>`, `<dl>`, `<figcaption>`
- **Acessibilidade** — `aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden` nos elementos adequados
- **Performance** — atributo `width` nas imagens para evitar layout shift, font-display via Google Fonts
- **CSS organizado** — 16 blocos comentados em ordem: reset → variáveis → utilitários → componentes → seções → responsivo
- **Sem estilos inline** — todo CSS no arquivo externo, sem `!important`

---

## Responsividade

| Breakpoint | Largura | Contexto |
|---|---|---|
| Base | < 640px | Mobile |
| `sm` | ≥ 640px | Mobile grande |
| `md` | ≥ 768px | Tablet |
| `lg` | ≥ 1024px | Laptop e desktop |
| Trava | ≥ 1180px | Conteúdo fixo, bordas expandem |

---

## Contato

**AponteB Performance Empresarial**  
Recife • Pernambuco  
[@apontebconsultoria](https://instagram.com/apontebconsultoria)  
[WhatsApp](https://wa.me/5581999646789)

---

## Desenvolvedor
Gmail: nicollassantos.dev@gmail.com  
[LinkedIn](https://www.linkedin.com/in/nicollas-dos-santos-bento-30b743414/)
