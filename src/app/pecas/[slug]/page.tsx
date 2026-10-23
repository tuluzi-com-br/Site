import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ProductView } from "@/components/ProductView";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { Seta } from "@/components/Icones";
import { capaDe, getProduto, produtos } from "@/data/produtos";
import { SITE_URL } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduto(slug);
  if (!p) return {};
  const capa = capaDe(p);
  const cores = p.variantes.map((v) => v.cor).join(", ");
  return {
    title: p.nome,
    description: `${p.descricaoCurta}${cores ? ` Cores: ${cores}.` : ""} Peça feita à mão, em pequena edição.`,
    alternates: { canonical: `/pecas/${p.slug}` },
    openGraph: {
      title: `${p.nome} | TULUZI`,
      description: p.descricaoCurta,
      images: [{ url: capa.src, width: capa.width, height: capa.height, alt: p.nome }],
    },
  };
}

export default async function PaginaProduto({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const produto = getProduto(slug);
  if (!produto) notFound();

  const relacionados = produtos.filter((p) => p.id !== produto.id).slice(0, 4);

  // Dados estruturados: só o que está confirmado (sem disponibilidade de estoque).
  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: produto.nome,
    description: produto.descricaoCompleta ?? produto.descricaoCurta,
    brand: { "@type": "Brand", name: "TULUZI" },
    image: (produto.variantes.length ? produto.variantes.flatMap((v) => v.imagens) : produto.imagensSemCor ?? []).map(
      (i) => new URL(i.src, SITE_URL).toString(),
    ),
    ...(produto.variantes.length ? { color: produto.variantes.map((v) => v.cor).join(", ") } : {}),
    ...(produto.composicao ? { material: produto.composicao } : {}),
    size: produto.tamanhos.join(", "),
    ...(produto.preco !== null
      ? {
          offers: {
            "@type": "Offer",
            price: produto.preco.toFixed(2),
            priceCurrency: "BRL",
            url: new URL(`/pecas/${produto.slug}`, SITE_URL).toString(),
          },
        }
      : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="pb-24 pt-0 md:pb-32 md:pt-10">
        <Suspense>
          <ProductView produto={produto} />
        </Suspense>
      </section>

      <section aria-labelledby="relacionados" className="border-t border-linha px-6 pb-36 pt-24 md:px-10 md:pb-40 md:pt-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 id="relacionados" className="titulo text-[1.8rem] md:text-[2.4rem]">
              Também do <em className="italic">universo TULUZI</em>
            </h2>
            <Link href="/pecas" className="rotulo link-traco link-traco-fixo inline-flex items-center gap-3 self-start text-[0.66rem] md:self-auto">
              Ver todas as peças <Seta />
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-4 md:gap-x-6">
            {relacionados.map((p, i) => (
              <li key={p.id}>
                <Reveal atraso={i * 80}>
                  <ProductCard produto={p} sizes="(min-width: 768px) 24vw, 46vw" />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
