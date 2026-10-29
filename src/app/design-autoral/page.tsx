import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Abertura } from "@/components/Abertura";
import { Reveal } from "@/components/Reveal";
import { Flor } from "@/components/Flor";
import { DetalheLupa } from "@/components/DetalheLupa";
import { Seta } from "@/components/Icones";
import { detalhe } from "@/data/detalhes";
import vicencia from "@/assets/produtos/vicencia-azul.webp";

export const metadata: Metadata = {
  title: "Design autoral",
  description: "Bordados, rendas e acabamentos que revelam o cuidado presente em cada criação TULUZI.",
  alternates: { canonical: "/design-autoral" },
};

const PILARES = [
  { t: "Bordados", d: "Flores bordadas no busto e na cintura." },
  { t: "Rendas", d: "Renda no decote e na saia." },
  { t: "Barrados", d: "Rechilieu na barra e entremeios no busto." },
  { t: "Acabamentos", d: "Amarrações, babados e laise." },
];

export default function FeitoAMao() {
  return (
    <>
      <Abertura rotulo="Design autoral" titulo={<>A beleza está <em className="italic">nos detalhes.</em></>}>
        <p className="texto">Bordados, rendas e acabamentos que revelam o cuidado presente em cada criação.</p>
      </Abertura>

      <section aria-label="Detalhes das peças" className="relative overflow-hidden px-4 pb-24 md:px-10 md:pb-36">
        <div className="mx-auto max-w-[1400px]">
          <p className="rotulo mb-10 text-[0.6rem] text-cinza">
            <span className="hidden md:inline">Passe o cursor sobre as fotografias para ver de perto</span>
            <span className="md:hidden">Toque nas fotografias para ver de perto</span>
          </p>
          <div className="grid grid-cols-1 items-start gap-y-14 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-12 md:gap-x-8 md:gap-y-20">
            <Reveal className="sm:col-span-2 md:col-span-6">
              <DetalheLupa d={detalhe("maria")} legenda="completa" />
            </Reveal>
            <Reveal atraso={120} className="md:col-span-5 md:col-start-8 md:mt-32">
              <DetalheLupa d={detalhe("hellen")} legenda="completa" />
            </Reveal>
            <Reveal className="sm:col-span-2 md:col-span-7">
              <DetalheLupa d={detalhe("vicencia")} legenda="completa" />
            </Reveal>
            <Reveal atraso={120} className="md:col-span-4 md:col-start-9 md:mt-20">
              <DetalheLupa d={detalhe("quesia")} legenda="completa" />
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-3">
              <DetalheLupa d={detalhe("cassia")} legenda="completa" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-linha bg-papel px-4 py-16 md:px-10 md:py-20">
        <ol className="mx-auto grid max-w-[1400px] gap-px overflow-hidden rounded-[10px] bg-linha sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map((p, i) => (
            <li key={p.t} className="bg-papel p-7 md:p-9">
              <Reveal atraso={i * 90}>
                <span className="rotulo text-[0.6rem] text-cinza">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="titulo mt-5 text-[1.5rem] italic">{p.t}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-grafite">{p.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-12">
          <Reveal imagem className="relative aspect-[4/5] overflow-hidden rounded-[14px] md:col-span-5">
            <Image src={vicencia} alt="Vestido Vicência na cor Azul, com barrado em rechilieu" fill placeholder="blur" sizes="(min-width: 768px) 40vw, 90vw" className="object-cover object-top" />
          </Reveal>
          <div className="relative md:col-span-6 md:col-start-7">
            <Flor tipo="vermelha" giro={-8} duracao={12} sizes="200px" className="absolute -top-20 right-0 w-[90px] md:w-[130px]" />
            <Reveal>
              <h2 className="titulo text-[2rem] md:text-[2.8rem]">Pequenas edições. <em className="italic">Grandes detalhes.</em></h2>
              <p className="texto mt-6 max-w-md">Peças de design autoral, em pequenas edições, nos tamanhos P, M e G.</p>
              <Link href="/pecas" className="btn btn-tinta mt-10">Conheça as peças <Seta /></Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
