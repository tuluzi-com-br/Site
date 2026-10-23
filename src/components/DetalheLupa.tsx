"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Detalhe } from "@/data/detalhes";
import { Seta } from "./Icones";

/**
 * Enquadra uma região da fotografia original da peça.
 * Desktop: ao passar o mouse, a imagem amplia suavemente seguindo o cursor.
 * Toque: um toque amplia no ponto tocado, outro devolve ao tamanho original.
 */
export function DetalheLupa({
  d,
  legenda = "curta",
  className = "",
}: {
  d: Detalhe;
  legenda?: "curta" | "completa";
  className?: string;
}) {
  const quadro = useRef<HTMLDivElement>(null);
  const tipoPonteiro = useRef("mouse");
  const [zoom, setZoom] = useState(false);
  const [origem, setOrigem] = useState({ ox: 50, oy: 50 });
  const [x, y, w, h] = d.regiao;
  const W = d.img.width;
  const H = d.img.height;

  const mirar = (cx: number, cy: number) => {
    const r = quadro.current?.getBoundingClientRect();
    if (!r) return;
    const fx = Math.min(1, Math.max(0, (cx - r.left) / r.width));
    const fy = Math.min(1, Math.max(0, (cy - r.top) / r.height));
    // ponto do quadro → ponto na fotografia inteira (origem da ampliação)
    setOrigem({ ox: ((x + fx * w) / W) * 100, oy: ((y + fy * h) / H) * 100 });
  };

  return (
    <figure className={className}>
      <div
        ref={quadro}
        className="lupa relative cursor-zoom-in overflow-hidden rounded-[10px] bg-papel"
        data-zoom={zoom ? "1" : "0"}
        style={{ aspectRatio: `${w} / ${h}` }}
        onPointerDown={(e) => {
          tipoPonteiro.current = e.pointerType;
        }}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") {
            mirar(e.clientX, e.clientY);
            setZoom(true);
          }
        }}
        onPointerMove={(e) => e.pointerType === "mouse" && mirar(e.clientX, e.clientY)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setZoom(false)}
        onClick={(e) => {
          if (tipoPonteiro.current === "mouse") return;
          mirar(e.clientX, e.clientY);
          setZoom((z) => !z);
        }}
        role="button"
        tabIndex={0}
        aria-pressed={zoom}
        aria-label={`Ampliar: ${d.titulo}, ${d.peca}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setZoom((z) => !z);
          }
        }}
      >
        <Image
          src={d.img}
          alt={`${d.titulo} do ${d.peca}, na fotografia original da peça`}
          // a fotografia inteira fica maior que o quadro: pedir sempre a melhor resolução disponível
          sizes="(min-width: 768px) 90vw, 200vw"
          placeholder="blur"
          className="lupa-img absolute max-w-none"
          style={{
            width: `${(W / w) * 100}%`,
            height: `${(H / h) * 100}%`,
            left: `${(-x / w) * 100}%`,
            top: `${(-y / h) * 100}%`,
            ["--ox" as string]: `${origem.ox}%`,
            ["--oy" as string]: `${origem.oy}%`,
          }}
        />
      </div>
      <figcaption className="mt-4 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <span>
          <span className="titulo block text-[1.15rem] md:text-[1.25rem]">{d.titulo}</span>
          {legenda === "completa" && <span className="mt-2 block text-[0.92rem] leading-relaxed text-grafite">{d.descricao}</span>}
        </span>
        <Link href={`/pecas/${d.slug}`} className="rotulo link-traco inline-flex shrink-0 items-center gap-2 text-[0.6rem] text-grafite">
          {d.peca} <Seta className="h-2.5 w-4" />
        </Link>
      </figcaption>
    </figure>
  );
}
