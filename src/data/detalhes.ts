import type { StaticImageData } from "next/image";

import hellen from "@/assets/produtos/hellen-azul-turquesa.webp";
import maria from "@/assets/produtos/maria-branco.webp";
import vicencia from "@/assets/produtos/vicencia-laranja.webp";
import quesia from "@/assets/produtos/quesia-rosa-magenta.webp";
import cassia from "@/assets/produtos/cassia.webp";

export type Detalhe = {
  id: string;
  titulo: string;
  peca: string;
  slug: string;
  /** Texto curto, sempre tirado da descrição real da peça. */
  descricao: string;
  img: StaticImageData;
  /**
   * Região da fotografia original (x, y, largura, altura em px).
   * A imagem é enquadrada, nunca recortada em arquivo nem ampliada além do necessário.
   */
  regiao: [number, number, number, number];
};

export const DETALHES: Detalhe[] = [
  {
    id: "maria",
    titulo: "Renda no decote",
    peca: "Vestido Maria",
    slug: "vestido-maria",
    descricao: "Decote em V com renda e saia com renda.",
    img: maria,
    regiao: [350, 205, 420, 640],
  },
  {
    id: "hellen",
    titulo: "Bordado floral",
    peca: "Vestido Hellen",
    slug: "vestido-hellen",
    descricao: "Flores bordadas contornam o busto e marcam a cintura.",
    img: hellen,
    regiao: [320, 195, 460, 400],
  },
  {
    id: "quesia",
    titulo: "Busto bordado",
    peca: "Vestido Quésia",
    slug: "vestido-quesia",
    descricao: "Transpassado com fivela, busto bordado e manga curta.",
    img: quesia,
    regiao: [320, 205, 440, 400],
  },
  {
    id: "vicencia",
    titulo: "Barrado em rechilieu",
    peca: "Vestido Vicência",
    slug: "vestido-vicencia",
    descricao: "Barrado em rechilieu; busto com nervuras e entremeios.",
    img: vicencia,
    regiao: [300, 745, 440, 300],
  },
  {
    id: "cassia",
    titulo: "Laise e babado",
    peca: "Vestido Cássia",
    slug: "vestido-cassia",
    descricao: "Laise com amarração nos ombros e babado com renda no busto.",
    img: cassia,
    regiao: [330, 255, 360, 380],
  },
];

export const detalhe = (id: string) => DETALHES.find((d) => d.id === id)!;
