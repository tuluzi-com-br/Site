# TULUZI — site oficial

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4. Sem banco de dados, sem carrinho, sem checkout: a venda é concluída pelo WhatsApp oficial.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
```

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub e importe em vercel.com/new (framework detectado automaticamente: Next.js), **ou** rode `npx vercel` dentro da pasta.
2. Em *Settings → Environment Variables*, defina `NEXT_PUBLIC_SITE_URL` com o domínio final (ex.: `https://tuluzi.com.br`). Ele alimenta canonical, sitemap, Open Graph e dados estruturados.

## Onde editar

| O quê | Arquivo |
|---|---|
| Produtos (nome, preço, descrição, composição, cores, fotos) | `src/data/produtos.ts` |
| Número do WhatsApp, Instagram, mensagens | `src/lib/site.ts` |
| Fotos das peças | `src/assets/produtos/` |
| Detalhes (enquadramentos da seção Feito à mão) | `src/data/detalhes.ts` |
| Foto da Emily | `src/data/emily.ts` (+ `src/assets/editorial/emily.webp`) |
| Paleta, tipografia, botões, animações | `src/app/globals.css` |
| Home | `src/app/page.tsx` |

Para adicionar fotos a uma cor, coloque o arquivo em `src/assets/produtos/`, importe em `produtos.ts` e acrescente ao array `imagens` da variante — a galeria, as miniaturas e o zoom se ajustam sozinhos.

## Mensagem do WhatsApp

Número único, centralizado: `5531998089895`. A página de produto monta, por exemplo:

> Olá! Conheci o Vestido Virgínia — Rosa Malte pelo site da TULUZI e gostaria de saber mais sobre disponibilidade e tamanhos.

Com tamanho escolhido: "…e gostaria de saber mais sobre a disponibilidade no tamanho M." Peças sem cor confirmada (Fernanda, Cássia) não mencionam cor.

## Catálogo cadastrado (fonte: 17 prints do Drive)

| Peça | Preço | Cores | Print |
|---|---|---|---|
| Vestido Virgínia | R$ 519,00 | Rosa Malte · Vermelho Goiaba · Verde Água | IMG_6061–6066 |
| Vestido Maria | R$ 759,00 | Branco · Rosa | IMG_6056–6057 |
| Vestido Vicência | R$ 799,00 | Laranja · Azul | IMG_6070–6071 |
| Vestido Camila | R$ 489,00 | Lavanda · Rosa Magenta | IMG_6068–6069 |
| Vestido Fernanda | R$ 559,00 | não informada | IMG_6067 |
| Vestido Cássia | R$ 799,00 | não informada | IMG_6072 |
| Vestido Quésia | R$ 489,00 | Rosa Magenta | IMG_6060 |
| Vestido Hellen | R$ 559,00 | Azul Turquesa · Rosa | IMG_6058–6059 |

Os prints IMG_6064, 6065 e 6066 repetem as três cores da Virgínia; foram unificados, sem duplicar produto.

## Pendências para aprovação

**Fotografias**
- Os prints da Virgínia e da Cássia indicam 4 fotos por peça ("1/4"); só a primeira veio. Hoje a galeria mostra uma foto por cor.
- As fotos foram recortadas dos prints (~1020 × 1280 px). Servem bem à vitrine; para zoom de tecido em alta definição, enviar os originais.
- Cássia: os pontinhos do carrossel do Instagram aparecem sobre o piso da foto. Não foram apagados para não editar a imagem.
- Sem foto oficial da Emily, de ateliê/processo ou de lifestyle (arquitetura, viagens, mesas). As páginas usam as fotos das peças, recortes de detalhe das próprias fotos e as camélias enviadas.

**Dados das peças**
- Vestido Hellen: o print não tem descrição nem composição. A descrição foi redigida só com o que a foto mostra (marcada `descricaoRedigida` no código) — validar.
- Vestido Hellen: o print da cor rosa diz "Vestido Hellen Rosa" (sem traço); padronizado como "Vestido Hellen — Rosa".
- Vestido Fernanda: o print diz "Sais com babados"; corrigido para "Saia com babados".
- Vestido Fernanda e Vestido Cássia: cor não informada no print — seletor de cor oculto.
- Vestido Cássia: composição não informada.
- Vestido Virgínia: descrição "em linho" e composição com 8% de linho — conferir se a descrição deve permanecer assim.

**Institucional**
- Política de Privacidade e Termos de Uso: páginas publicadas como "pendentes de aprovação", sem conteúdo jurídico inventado (marcadas `noindex`).
- Instagram configurado como `instagram.com/tuluzi` — confirmar o endereço.
- Logomarca: arquivo original, proporção preservada. Na seção escura da Home há uma versão da mesma marca em tom marfim (só a cor muda) — validar o uso.

## Reformulação comercial (outubro/2026)

- Tipografia: Libre Baskerville (títulos, nomes, frases) + DM Sans (menus, textos, botões, preços). Logotipo intacto.
- Home: Hero → vitrine em grade (4/3/2/1 colunas, sem carrossel) → banner Camila → Feito à mão (enquadramentos com lupa) → Mulher TULUZI (4 pontos) → Outras cores → rodapé.
- Removidos da Home: O nosso olhar, Universo, Emily, "tão poucas vezes", "Talvez luxo…", "Podemos ajudar…". As páginas internas foram mantidas.
- Flores só em recorte transparente, com flutuação lenta; a camélia vermelha foi reaproveitada no banner e no Feito à mão.
- Detalhes: os recortes antigos (240 px) foram descartados. Agora cada detalhe é a foto original da peça (~1015 px), só enquadrada; a lupa amplia 1,45×.

**Pendências desta etapa**
- Foto da Emily: página pronta, aguardando o arquivo (hoje mostra um painel rosado com o nome).
- Mulher TULUZI: a versão anterior tinha seis frases e o briefing pede quatro. Ficaram: moda sem correr atrás, perceber detalhes, qualidade ao excesso, escolher com intenção. Validar.
- Fotos dos detalhes: a melhor resolução disponível são os prints (~1015 px). Para zoom de bordado nítido, enviar as fotos originais da câmera.
