"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { nomeCompleto, type ProdutoTuluzi, type Tamanho } from "@/data/produtos";
import { formatarPreco, linkWhatsApp, mensagemProduto } from "@/lib/site";
import { IconeFechar, IconeLupa, IconeWhatsApp, SetaCarrossel } from "./Icones";

type Foto = { src: StaticImageData; cor: string | null };

export function ProductView({ produto }: { produto: ProdutoTuluzi }) {
  const params = useSearchParams();
  const corUrl = params.get("cor");
  const temCores = produto.variantes.length > 0;

  const corInicial =
    temCores ? (produto.variantes.find((v) => v.cor === corUrl)?.cor ?? produto.variantes[0].cor) : null;

  const [cor, setCor] = useState<string | null>(corInicial);
  const [tamanho, setTamanho] = useState<Tamanho | null>(null);

  // Todas as fotografias reais da peça, de todas as cores
  const fotos: Foto[] = useMemo(
    () =>
      temCores
        ? produto.variantes.flatMap((v) => v.imagens.map((src) => ({ src, cor: v.cor })))
        : (produto.imagensSemCor ?? []).map((src) => ({ src, cor: null })),
    [produto, temCores],
  );

  const [indice, setIndice] = useState(() => Math.max(0, fotos.findIndex((f) => f.cor === corInicial)));
  const [ampliada, setAmpliada] = useState(false);

  const escolherCor = (c: string) => {
    setCor(c);
    const i = fotos.findIndex((f) => f.cor === c);
    if (i >= 0) setIndice(i);
    const url = new URL(window.location.href);
    url.searchParams.set("cor", c);
    window.history.replaceState(null, "", url.toString());
  };

  const irPara = (i: number) => {
    const n = (i + fotos.length) % fotos.length;
    setIndice(n);
    if (fotos[n].cor) setCor(fotos[n].cor);
  };

  const nome = nomeCompleto(produto, cor);
  const href = linkWhatsApp(mensagemProduto({ nomeCompleto: nome, tamanho }));
  const foto = fotos[indice];

  return (
    <>
      <div className="mx-auto grid max-w-[1500px] gap-10 px-0 md:grid-cols-12 md:gap-12 md:px-10 lg:gap-20">
        {/* A. Galeria */}
        <div className="md:col-span-7">
          <div className="md:sticky md:top-28 md:grid md:grid-cols-[76px_1fr] md:gap-5">
            {fotos.length > 1 && (
              <ul className="order-2 hidden flex-col gap-3 md:order-1 md:flex" aria-label="Fotografias da peça">
                {fotos.map((f, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => irPara(i)}
                      aria-label={`Ver fotografia${f.cor ? ` na cor ${f.cor}` : ` ${i + 1}`}`}
                      aria-current={i === indice}
                      className={`relative block aspect-[4/5] w-full overflow-hidden transition-opacity duration-300 ${
                        i === indice ? "opacity-100 outline outline-1 outline-offset-2 outline-tinta" : "opacity-55 hover:opacity-100"
                      }`}
                    >
                      <Image src={f.src} alt="" fill sizes="80px" className="object-cover object-top" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className={`relative md:order-2 ${fotos.length > 1 ? "" : "md:col-span-2"}`}>
              <ZoomFoto
                key={indice}
                foto={foto}
                alt={`${nome} — fotografia original da peça`}
                onAbrir={() => setAmpliada(true)}
              />

              {fotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => irPara(indice - 1)}
                    aria-label="Fotografia anterior"
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-linho/85 backdrop-blur md:hidden"
                  >
                    <SetaCarrossel direcao="esq" className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => irPara(indice + 1)}
                    aria-label="Próxima fotografia"
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-linho/85 backdrop-blur md:hidden"
                  >
                    <SetaCarrossel direcao="dir" className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:hidden" aria-hidden="true">
                    {fotos.map((_, i) => (
                      <span key={i} className={`h-[3px] transition-all duration-300 ${i === indice ? "w-6 bg-tinta" : "w-3 bg-tinta/30"}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* B–I. Informações */}
        <div className="px-6 pb-8 md:col-span-5 md:px-0 md:pt-6">
          <nav aria-label="Trilha" className="rotulo mb-10 text-[0.6rem] text-cinza">
            <Link href="/" className="link-traco">Início</Link>
            <span className="mx-3" aria-hidden="true">/</span>
            <Link href="/pecas" className="link-traco">Peças</Link>
          </nav>

          <h1 className="titulo text-[2rem] leading-[1.15] md:text-[2.6rem]">{produto.nome}</h1>
          {cor && <p className="titulo mt-2 text-[1.4rem] italic text-grafite">{cor}</p>}

          <p className="mt-6 text-[1.05rem] font-[450] tracking-wide">{formatarPreco(produto.preco)}</p>

          <p className="texto mt-8 max-w-md">{produto.descricaoCurta}</p>

          {/* G. Cores */}
          {temCores && (
            <fieldset className="mt-10">
              <legend className="rotulo mb-4 text-[0.62rem] text-cinza">
                Cor <span className="ml-2 text-tinta">{cor}</span>
              </legend>
              <div className="flex flex-wrap gap-3">
                {produto.variantes.map((v) => {
                  const sel = v.cor === cor;
                  return (
                    <button
                      key={v.cor}
                      type="button"
                      onClick={() => escolherCor(v.cor)}
                      aria-pressed={sel}
                      className={`group flex items-center gap-3 border px-4 py-3 text-[0.82rem] transition-colors duration-300 ${
                        sel ? "border-tinta" : "border-linha hover:border-grafite"
                      }`}
                    >
                      <span
                        className="block h-4 w-4 rounded-full"
                        style={{ background: v.amostra, boxShadow: "inset 0 0 0 1px rgba(22,20,19,0.14)" }}
                        aria-hidden="true"
                      />
                      {v.cor}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          {/* F. Tamanhos */}
          <fieldset className="mt-9">
            <legend className="rotulo mb-4 text-[0.62rem] text-cinza">
              Tamanho {tamanho && <span className="ml-2 text-tinta">{tamanho}</span>}
            </legend>
            <div className="flex gap-3">
              {produto.tamanhos.map((t) => {
                const sel = t === tamanho;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTamanho(sel ? null : t)}
                    aria-pressed={sel}
                    className={`relative h-14 w-14 border text-[0.9rem] tracking-widest transition-colors duration-300 ${
                      sel ? "border-tinta bg-tinta text-linho" : "border-linha hover:border-grafite"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-[0.8rem] leading-relaxed text-cinza">
              A seleção ajuda nosso atendimento; a disponibilidade é confirmada pelo WhatsApp.
            </p>
          </fieldset>

          {/* I. CTA */}
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-tinta mt-10 w-full">
            <IconeWhatsApp className="h-[18px] w-[18px]" /> Quero esta peça
          </a>

          {/* H. Pequenas edições */}
          <p className="mt-6 flex items-start gap-3 text-[0.86rem] leading-relaxed text-grafite">
            <span className="mt-[0.55em] inline-block h-px w-5 shrink-0 bg-grafite" aria-hidden="true" />
            Feita à mão, em pequena edição. Cada peça existe poucas vezes — por isso o atendimento é pessoal.
          </p>

          {/* D–E. Detalhes técnicos */}
          <div className="mt-12 border-t border-linha">
            <Detalhe titulo="Descrição" aberto>
              <p>{produto.descricaoCompleta ?? produto.descricaoCurta}</p>
            </Detalhe>
            {produto.composicao && (
              <Detalhe titulo="Composição">
                <p>{produto.composicao}</p>
              </Detalhe>
            )}
            <Detalhe titulo="Ficha">
              <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2">
                {produto.comprimento && (
                  <>
                    <dt className="text-cinza">Comprimento</dt>
                    <dd>{produto.comprimento}</dd>
                  </>
                )}
                <dt className="text-cinza">Tamanhos</dt>
                <dd>{produto.tamanhos.join(" · ")}</dd>
                {temCores && (
                  <>
                    <dt className="text-cinza">Cores</dt>
                    <dd>{produto.variantes.map((v) => v.cor).join(" · ")}</dd>
                  </>
                )}
              </dl>
            </Detalhe>
            <Detalhe titulo="Atendimento">
              <p>
                Não há carrinho nem pagamento pelo site. Escolha a peça e fale com a TULUZI pelo WhatsApp: tiramos dúvidas sobre
                medidas, confirmamos a disponibilidade e acompanhamos você até o fim.
              </p>
            </Detalhe>
          </div>
        </div>
      </div>

      {/* Barra fixa no celular */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-linha bg-linho/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.82rem]">{nome}{tamanho ? ` · ${tamanho}` : ""}</p>
            <p className="text-[0.82rem] font-[450]">{formatarPreco(produto.preco)}</p>
          </div>
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-tinta min-h-12 px-5 text-[0.62rem]">
            <IconeWhatsApp className="h-4 w-4" /> Quero esta peça
          </a>
        </div>
      </div>

      {ampliada && (
        <Lightbox fotos={fotos} indice={indice} nome={produto.nome} onFechar={() => setAmpliada(false)} onIr={irPara} />
      )}
    </>
  );
}

function Detalhe({ titulo, children, aberto = false }: { titulo: string; children: React.ReactNode; aberto?: boolean }) {
  return (
    <details className="group border-b border-linha" open={aberto}>
      <summary className="flex cursor-pointer list-none items-center justify-between py-5 [&::-webkit-details-marker]:hidden">
        <span className="rotulo text-[0.66rem]">{titulo}</span>
        <span className="relative h-3 w-3" aria-hidden="true">
          <span className="absolute left-0 top-1/2 h-px w-3 bg-tinta" />
          <span className="absolute left-1/2 top-0 h-3 w-px bg-tinta transition-transform duration-300 group-open:scale-y-0" />
        </span>
      </summary>
      <div className="pb-6 text-[0.95rem] leading-relaxed text-grafite">{children}</div>
    </details>
  );
}

/** Lupa que acompanha o cursor, sobre a própria fotografia original. */
function ZoomFoto({ foto, alt, onAbrir }: { foto: Foto; alt: string; onAbrir: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);

  const mover = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current!.getBoundingClientRect();
    setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={onAbrir}
      onPointerMove={mover}
      onPointerLeave={() => setZoom(null)}
      aria-label="Ampliar fotografia"
      className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden bg-papel"
    >
      <Image
        src={foto.src}
        alt={alt}
        fill
        priority
        placeholder="blur"
        sizes="(min-width: 768px) 52vw, 100vw"
        quality={92}
        className="entrada-pagina object-cover object-top transition-transform duration-300 ease-out"
        style={
          zoom
            ? { transform: "scale(2)", transformOrigin: `${zoom.x}% ${zoom.y}%` }
            : { transform: "scale(1)", transformOrigin: "50% 50%" }
        }
      />
      <span className="rotulo pointer-events-none absolute right-4 top-4 flex items-center gap-2 bg-linho/85 px-3 py-2 text-[0.56rem] backdrop-blur transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
        <IconeLupa className="h-3.5 w-3.5" /> <span className="max-md:hidden">Clique para ampliar</span>
        <span className="md:hidden">Toque para ampliar</span>
      </span>
    </button>
  );
}

/** Visualização em tela cheia, com zoom por toque/clique e navegação. */
function Lightbox({
  fotos,
  indice,
  nome,
  onFechar,
  onIr,
}: {
  fotos: Foto[];
  indice: number;
  nome: string;
  onFechar: () => void;
  onIr: (i: number) => void;
}) {
  const fechar = useRef<HTMLButtonElement>(null);
  const area = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(false);
  const [origem, setOrigem] = useState({ x: 50, y: 30 });
  const toqueInicio = useRef<number | null>(null);

  const posicionar = useCallback((clientX: number, clientY: number) => {
    const r = area.current?.getBoundingClientRect();
    if (!r) return;
    setOrigem({
      x: Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)),
      y: Math.min(100, Math.max(0, ((clientY - r.top) / r.height) * 100)),
    });
  }, []);

  useEffect(() => {
    fechar.current?.focus();
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
      if (e.key === "ArrowRight") onIr(indice + 1);
      if (e.key === "ArrowLeft") onIr(indice - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [indice, onFechar, onIr]);

  useEffect(() => setZoom(false), [indice]);

  const f = fotos[indice];

  return (
    <div role="dialog" aria-modal="true" aria-label={`Fotografias ampliadas — ${nome}`} className="fixed inset-0 z-[90] flex flex-col bg-linho entrada-pagina">
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        <p className="rotulo text-[0.6rem] text-cinza">
          {nome}
          {f.cor ? ` — ${f.cor}` : ""}
          {fotos.length > 1 && <span className="ml-4">{indice + 1} / {fotos.length}</span>}
        </p>
        <button ref={fechar} type="button" onClick={onFechar} aria-label="Fechar" className="flex h-11 w-11 items-center justify-center">
          <IconeFechar />
        </button>
      </div>

      <div
        ref={area}
        className={`relative flex-1 overflow-hidden ${zoom ? "cursor-zoom-out" : "cursor-zoom-in"}`}
        style={{ touchAction: zoom ? "none" : "pan-y" }}
        onClick={(e) => {
          posicionar(e.clientX, e.clientY);
          setZoom((z) => !z);
        }}
        onPointerMove={(e) => zoom && posicionar(e.clientX, e.clientY)}
        onTouchStart={(e) => {
          toqueInicio.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (zoom || toqueInicio.current === null || fotos.length < 2) return;
          const dx = e.changedTouches[0].clientX - toqueInicio.current;
          if (Math.abs(dx) > 60) onIr(indice + (dx < 0 ? 1 : -1));
          toqueInicio.current = null;
        }}
      >
        <Image
          key={indice}
          src={f.src}
          alt={`${nome}${f.cor ? ` — ${f.cor}` : ""}, fotografia original ampliada`}
          fill
          sizes="100vw"
          quality={95}
          className="object-contain transition-transform duration-300 ease-out"
          style={{ transform: zoom ? "scale(2.2)" : "scale(1)", transformOrigin: `${origem.x}% ${origem.y}%` }}
        />
      </div>

      <div className="flex items-center justify-center gap-6 px-5 py-4">
        {fotos.length > 1 && (
          <button type="button" onClick={() => onIr(indice - 1)} aria-label="Fotografia anterior" className="flex h-11 w-11 items-center justify-center border border-linha">
            <SetaCarrossel direcao="esq" className="h-4 w-4" />
          </button>
        )}
        <p className="rotulo text-[0.56rem] text-cinza">{zoom ? "Toque para reduzir" : "Toque na foto para aproximar"}</p>
        {fotos.length > 1 && (
          <button type="button" onClick={() => onIr(indice + 1)} aria-label="Próxima fotografia" className="flex h-11 w-11 items-center justify-center border border-linha">
            <SetaCarrossel direcao="dir" className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
