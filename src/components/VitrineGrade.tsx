import type { ProdutoTuluzi } from "@/data/produtos";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

/**
 * Vitrine em grade fixa (sem carrossel): 4 por linha no desktop,
 * 3 no tablet, 2 no celular e 1 só em telas muito estreitas.
 * O card é o mesmo aprovado na vitrine anterior.
 */
export function VitrineGrade({ produtos, prioridade = 4 }: { produtos: ProdutoTuluzi[]; prioridade?: number }) {
  return (
    <ul
      aria-label="Vitrine de peças"
      className="mx-auto grid max-w-[1600px] grid-cols-1 gap-x-4 gap-y-12 px-4 min-[360px]:grid-cols-2 sm:gap-x-5 md:grid-cols-3 md:gap-x-6 md:gap-y-16 md:px-10 lg:grid-cols-4"
    >
      {produtos.map((p, i) => (
        <li key={p.id}>
          <Reveal atraso={(i % 4) * 80}>
            <ProductCard
              produto={p}
              arredondado
              estilo="faixa"
              priority={i < prioridade}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 32vw, (min-width: 360px) 48vw, 92vw"
            />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
