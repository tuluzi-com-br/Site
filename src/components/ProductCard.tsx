"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { capaDe, imagensDe, type ProdutoTuluzi } from "@/data/produtos";
import { formatarPreco } from "@/lib/site";
import { Seta } from "./Icones";

type Props = {
  produto: ProdutoTuluzi;
  sizes?: string;
  priority?: boolean;
  arredondado?: boolean;
  /** "faixa": informação numa etiqueta clara sob a foto (referência de vitrine); "grade": tipografia limpa */
  estilo?: "faixa" | "grade";
  proporcao?: string;
  compacto?: boolean;
};

export function ProductCard({
  produto,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 85vw",
  priority = false,
  arredondado = false,
  estilo = "grade",
  proporcao = "aspect-[4/5]",
  compacto = false,
}: Props) {
  const temCores = produto.variantes.length > 0;
  const [cor, setCor] = useState<string | null>(temCores ? produto.variantes[0].cor : null);
  const imagem = imagensDe(produto, cor)[0] ?? capaDe(produto);
  // segunda cor aparece no hover, quando existir
  const alternativa = produto.variantes.find((v) => v.cor !== cor)?.imagens[0];
  const href = cor ? `/pecas/${produto.slug}?cor=${encodeURIComponent(cor)}` : `/pecas/${produto.slug}`;
  const raio = arredondado ? "rounded-[14px]" : "";

  return (
    <article className="group relative">
      <Link href={href} className="block" aria-label={`${produto.nome}${cor ? ` — ${cor}` : ""}, ${formatarPreco(produto.preco)}`}>
        <div className={`relative overflow-hidden bg-papel ${proporcao} ${raio}`}>
          <Image
            src={imagem}
            alt={`${produto.nome}${cor ? ` na cor ${cor}` : ""}, fotografia original da peça`}
            fill
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            className="object-cover object-top transition-transform duration-[1600ms] ease-[var(--ease-entrada)] group-hover:scale-[1.045]"
          />
          {alternativa && (
            <Image
              src={alternativa}
              alt=""
              aria-hidden="true"
              fill
              sizes={sizes}
              className="object-cover object-top opacity-0 transition-[opacity,transform] duration-[900ms] ease-[var(--ease-suave)] group-hover:scale-[1.045] group-hover:opacity-100 max-md:hidden"
            />
          )}
          <span className="rotulo absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-3 whitespace-nowrap bg-linho/95 px-5 py-3 text-[0.6rem] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-md:hidden">
            Conhecer a peça
          </span>
        </div>
      </Link>

      <div className={estilo === "faixa" ? `mx-3 -mt-px bg-linho px-1 pt-4 ${raio}` : compacto ? "pt-4" : "pt-5"}>
        <Link href={href} className={`titulo block leading-tight ${compacto ? "text-[1.05rem]" : "text-[1.02rem] sm:text-[1.15rem] lg:text-[1.2rem]"}`}>
          {produto.nome}
        </Link>
        <div className="mt-1.5 flex flex-col gap-1 min-[520px]:flex-row min-[520px]:items-baseline min-[520px]:justify-between min-[520px]:gap-3">
          <p className="truncate text-[0.82rem] text-cinza">{cor ?? produto.comprimento ?? ""}</p>
          <p className="shrink-0 text-[0.86rem] font-medium tracking-wide md:text-[0.92rem]">{formatarPreco(produto.preco)}</p>
        </div>

        {(produto.variantes.length > 1 || !compacto) && (
          <div className="mt-3 flex min-h-7 items-center justify-between">
            {produto.variantes.length > 1 ? (
              <ul className="-ml-2 flex items-center" aria-label={`Cores do ${produto.nome}`}>
                {produto.variantes.map((v) => (
                  <li key={v.cor}>
                    <button
                      type="button"
                      onClick={() => setCor(v.cor)}
                      onMouseEnter={() => setCor(v.cor)}
                      aria-label={`Ver na cor ${v.cor}`}
                      aria-pressed={cor === v.cor}
                      className="flex h-7 w-7 items-center justify-center"
                    >
                      <span
                        className={`block h-[13px] w-[13px] rounded-full ring-offset-2 ring-offset-linho transition-shadow duration-300 ${
                          cor === v.cor ? "ring-1 ring-tinta" : "ring-1 ring-transparent"
                        }`}
                        style={{ background: v.amostra, boxShadow: "inset 0 0 0 1px rgba(22,20,19,0.12)" }}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <span />
            )}
            {!compacto && (
              <Link href={href} className="rotulo hidden items-center gap-2 whitespace-nowrap text-[0.58rem] text-grafite sm:inline-flex lg:hidden xl:inline-flex" tabIndex={-1} aria-hidden="true">
                Conhecer a peça <Seta className="h-2.5 w-4" />
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
