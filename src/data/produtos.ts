import type { StaticImageData } from "next/image";

import mariaBranco from "@/assets/produtos/maria-branco.webp";
import mariaRosa from "@/assets/produtos/maria-rosa.webp";
import hellenAzul from "@/assets/produtos/hellen-azul-turquesa.webp";
import hellenRosa from "@/assets/produtos/hellen-rosa.webp";
import quesiaMagenta from "@/assets/produtos/quesia-rosa-magenta.webp";
import virginiaMalte from "@/assets/produtos/virginia-rosa-malte.webp";
import virginiaGoiaba from "@/assets/produtos/virginia-vermelho-goiaba.webp";
import virginiaVerde from "@/assets/produtos/virginia-verde-agua.webp";
import fernanda from "@/assets/produtos/fernanda.webp";
import camilaLavanda from "@/assets/produtos/camila-lavanda.webp";
import camilaMagenta from "@/assets/produtos/camila-rosa-magenta.webp";
import vicenciaLaranja from "@/assets/produtos/vicencia-laranja.webp";
import vicenciaAzul from "@/assets/produtos/vicencia-azul.webp";
import cassia from "@/assets/produtos/cassia.webp";

export type Tamanho = "P" | "M" | "G";

export type VarianteCor = {
  /** Nome da cor exatamente como aparece no print. */
  cor: string;
  /** Tom aproximado, usado só no seletor visual. */
  amostra: string;
  /** Fotografias reais desta variação (recortadas do print, sem edição). */
  imagens: StaticImageData[];
  /** Print de origem, para auditoria. */
  fonte: string;
};

export type ProdutoTuluzi = {
  id: string;
  slug: string;
  nome: string;
  preco: number | null;
  moeda: "BRL";
  descricaoCurta: string;
  descricaoCompleta?: string;
  /** true quando a descrição foi redigida a partir da foto, sem texto no print. */
  descricaoRedigida?: boolean;
  composicao?: string;
  comprimento?: string;
  /** Variações de cor confirmadas. Vazio = cor não informada no print. */
  variantes: VarianteCor[];
  /** Usado quando não há cor confirmada. */
  imagensSemCor?: StaticImageData[];
  tamanhos: Tamanho[];
  destaque?: boolean;
  fonte: string;
};

const TAMANHOS: Tamanho[] = ["P", "M", "G"];

export const produtos: ProdutoTuluzi[] = [
  {
    id: "virginia",
    slug: "vestido-virginia",
    nome: "Vestido Virgínia",
    preco: 519,
    moeda: "BRL",
    descricaoCurta: "Linho, alças finas e decote em V, no comprimento midi com saia assimétrica.",
    descricaoCompleta:
      "Vestido em linho com alça e decote em V, no comprimento midi com saia assimétrica.",
    composicao: "61% poliéster, 16% viscose, 15% algodão, 08% linho. Forro 100% algodão.",
    comprimento: "Midi",
    variantes: [
      { cor: "Rosa Malte", amostra: "#E5C2B4", imagens: [virginiaMalte], fonte: "IMG_6061.jpg (também IMG_6065.jpg)" },
      { cor: "Vermelho Goiaba", amostra: "#D64B3C", imagens: [virginiaGoiaba], fonte: "IMG_6062.jpg (também IMG_6064.jpg)" },
      { cor: "Verde Água", amostra: "#9DC8AE", imagens: [virginiaVerde], fonte: "IMG_6063.jpg (também IMG_6066.jpg)" },
    ],
    tamanhos: TAMANHOS,
    destaque: true,
    fonte: "IMG_6061–6066",
  },
  {
    id: "maria",
    slug: "vestido-maria",
    nome: "Vestido Maria",
    preco: 759,
    moeda: "BRL",
    descricaoCurta: "Midi acinturado por lastex, decote em V com renda e mangas bufantes.",
    descricaoCompleta:
      "Vestido midi, acinturado por lastex, decote em V com renda. Manga curta bufante com elástico. Saia com renda.",
    composicao: "100% poliéster. Forro 97% viscose, 03% elastano.",
    comprimento: "Midi",
    variantes: [
      { cor: "Branco", amostra: "#F5F3EF", imagens: [mariaBranco], fonte: "IMG_6056.jpg" },
      { cor: "Rosa", amostra: "#F2D2D0", imagens: [mariaRosa], fonte: "IMG_6057.jpg" },
    ],
    tamanhos: TAMANHOS,
    destaque: true,
    fonte: "IMG_6056–6057",
  },
  {
    id: "vicencia",
    slug: "vestido-vicencia",
    nome: "Vestido Vicência",
    preco: 799,
    moeda: "BRL",
    descricaoCurta: "Midi com barrado em rechilieu, busto com nervuras e entremeios.",
    descricaoCompleta:
      "Vestido midi com barrado em rechilieu. Busto com nervuras e entremeios. Alças finas com amarração. Fechamento com zíper na parte posterior.",
    composicao: "100% algodão.",
    comprimento: "Midi",
    variantes: [
      { cor: "Laranja", amostra: "#EC7B2E", imagens: [vicenciaLaranja], fonte: "IMG_6070.jpg" },
      { cor: "Azul", amostra: "#3DAFB9", imagens: [vicenciaAzul], fonte: "IMG_6071.jpg" },
    ],
    tamanhos: TAMANHOS,
    destaque: true,
    fonte: "IMG_6070–6071",
  },
  {
    id: "camila",
    slug: "vestido-camila",
    nome: "Vestido Camila",
    preco: 489,
    moeda: "BRL",
    descricaoCurta: "Longuete em viscolinho, frente única e saia de babados três marias.",
    descricaoCompleta:
      "Vestido longuete em viscolinho. Frente única com amarração transpassada nas costas e nas laterais da cintura. Saia de babados três marias.",
    composicao: "100% viscose. O tecido está sujeito a encolhimento.",
    comprimento: "Longuete",
    variantes: [
      { cor: "Lavanda", amostra: "#B8A5DF", imagens: [camilaLavanda], fonte: "IMG_6068.jpg" },
      { cor: "Rosa Magenta", amostra: "#C23D98", imagens: [camilaMagenta], fonte: "IMG_6069.jpg" },
    ],
    tamanhos: TAMANHOS,
    destaque: true,
    fonte: "IMG_6068–6069",
  },
  {
    id: "fernanda",
    slug: "vestido-fernanda",
    nome: "Vestido Fernanda",
    preco: 559,
    moeda: "BRL",
    descricaoCurta: "Longuete com laço nos ombros, decote quadrado nas costas e babados três marias.",
    descricaoCompleta:
      "Vestido longuete, laço nos ombros, decote quadrado nas costas até a cintura. Acinturado com lastex. Saia com babados três marias.",
    composicao: "94% poliéster, 6% elastano.",
    comprimento: "Longuete",
    variantes: [],
    imagensSemCor: [fernanda],
    tamanhos: TAMANHOS,
    fonte: "IMG_6067.jpg",
  },
  {
    id: "cassia",
    slug: "vestido-cassia",
    nome: "Vestido Cássia",
    preco: 799,
    moeda: "BRL",
    descricaoCurta: "Longuete em laise, com amarração nos ombros e babado com renda no busto.",
    descricaoCompleta:
      "Vestido longuete em laise e com amarração nos ombros. Detalhes de babado com renda no busto. Fechado com zíper nas costas.",
    comprimento: "Longuete",
    variantes: [],
    imagensSemCor: [cassia],
    tamanhos: TAMANHOS,
    fonte: "IMG_6072.jpg",
  },
  {
    id: "quesia",
    slug: "vestido-quesia",
    nome: "Vestido Quésia",
    preco: 489,
    moeda: "BRL",
    descricaoCurta: "Midi transpassado com fivela, busto bordado e saia assimétrica.",
    descricaoCompleta:
      "Vestido midi transpassado com fivela. Busto bordado e manga curta. Saia assimétrica.",
    composicao: "100% viscose.",
    comprimento: "Midi",
    variantes: [
      { cor: "Rosa Magenta", amostra: "#C447A0", imagens: [quesiaMagenta], fonte: "IMG_6060.jpg" },
    ],
    tamanhos: TAMANHOS,
    fonte: "IMG_6060.jpg",
  },
  {
    id: "hellen",
    slug: "vestido-hellen",
    nome: "Vestido Hellen",
    preco: 559,
    moeda: "BRL",
    // O print não traz descrição: texto redigido apenas a partir do que a foto mostra.
    descricaoCurta: "Alças com amarração, bordado floral no busto e na cintura, saia leve e curta.",
    descricaoCompleta:
      "Alças finas com amarração nos ombros e bordado floral que contorna o busto e marca a cintura. A saia, curta e levemente franzida, termina em um acabamento delicado na barra. Uma peça solar, para dias leves.",
    descricaoRedigida: true,
    variantes: [
      { cor: "Azul Turquesa", amostra: "#3FB2BC", imagens: [hellenAzul], fonte: "IMG_6058.jpg" },
      { cor: "Rosa", amostra: "#C8339E", imagens: [hellenRosa], fonte: "IMG_6059.jpg" },
    ],
    tamanhos: TAMANHOS,
    fonte: "IMG_6058–6059",
  },
];

export function getProduto(slug: string) {
  return produtos.find((p) => p.slug === slug);
}

export function imagensDe(p: ProdutoTuluzi, cor?: string | null): StaticImageData[] {
  if (p.variantes.length === 0) return p.imagensSemCor ?? [];
  const v = p.variantes.find((x) => x.cor === cor) ?? p.variantes[0];
  return v.imagens;
}

export function capaDe(p: ProdutoTuluzi): StaticImageData {
  return imagensDe(p)[0];
}

export function nomeCompleto(p: ProdutoTuluzi, cor?: string | null) {
  return cor ? `${p.nome} — ${cor}` : p.nome;
}

export const destaques = produtos.filter((p) => p.destaque);
