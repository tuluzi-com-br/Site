import type { Metadata } from "next";
import { VitrineGrade } from "@/components/VitrineGrade";
import { Flor } from "@/components/Flor";
import { Rotulo } from "@/components/Titulo";
import { produtos } from "@/data/produtos";

export const metadata: Metadata = {
  title: "Peças",
  description: "Vestidos TULUZI de design autoral, em pequenas edições. Conheça cada peça, suas cores e detalhes.",
  alternates: { canonical: "/pecas" },
};

export default function Pecas() {
  const totalCores = produtos.reduce((n, p) => n + Math.max(1, p.variantes.length), 0);
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24">
        <Flor tipo="rosa" giro={14} sizes="200px" className="absolute -right-8 top-6 w-[90px] md:right-[8%] md:top-10 md:w-[140px]" />
        <div className="relative mx-auto max-w-[1600px]">
          <Rotulo>Peças</Rotulo>
          <h1 className="titulo mt-6 max-w-4xl text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem]">
            Pequenas edições. <em className="italic">Grandes detalhes.</em>
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-linha pt-8 md:flex-row md:items-end">
            <p className="texto max-w-md">
              Cada peça TULUZI nasce de escolhas cuidadosas: tecidos, formas, bordados, acabamentos e mãos que transformam cada detalhe.
            </p>
            <p className="rotulo text-[0.62rem] text-cinza">
              {produtos.length} modelos · {totalCores} variações · Tamanhos P, M e G
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Catálogo" className="pb-24 md:pb-36">
        <VitrineGrade produtos={produtos} />
      </section>
    </>
  );
}
