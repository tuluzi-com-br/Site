/**
 * Configuração central da TULUZI.
 * Todos os botões comerciais usam exclusivamente este número.
 */
export const WHATSAPP_NUMERO = "5531998089895";
export const WHATSAPP_EXIBICAO = "+55 31 99808-9895";

export const INSTAGRAM_HANDLE = "@tuluzi";
export const INSTAGRAM_URL = "https://www.instagram.com/tuluzi/";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const ASSINATURA = "Um jeito de viver que começa pelo vestir.";

export const NAV = [
  { label: "Peças", href: "/pecas" },
  { label: "Feito à mão", href: "/feito-a-mao" },
  { label: "Emily", href: "/emily" },
  { label: "Universo", href: "/universo" },
] as const;

export const MENSAGEM_GERAL =
  "Olá! Conheci a TULUZI pelo site e gostaria de saber mais sobre as peças.";

export function linkWhatsApp(mensagem: string = MENSAGEM_GERAL) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Mensagem personalizada da página de produto.
 * Só menciona tamanho e cor quando foram efetivamente escolhidos.
 */
export function mensagemProduto(opts: {
  nomeCompleto: string;
  tamanho?: string | null;
}) {
  const { nomeCompleto, tamanho } = opts;
  // Ex.: "Olá! Conheci o Vestido Virgínia — Rosa Malte pelo site da TULUZI e gostaria de saber mais sobre disponibilidade e tamanhos."
  const final = tamanho
    ? `e gostaria de saber mais sobre a disponibilidade no tamanho ${tamanho}.`
    : "e gostaria de saber mais sobre disponibilidade e tamanhos.";
  return `Olá! Conheci o ${nomeCompleto} pelo site da TULUZI ${final}`;
}

export function formatarPreco(valor: number | null) {
  if (valor === null) return "Preço sob consulta";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })
    .format(valor)
    .replace(/ /g, " ");
}
