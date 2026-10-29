import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Abertura } from "@/components/Abertura";
import { Reveal } from "@/components/Reveal";
import { Flor } from "@/components/Flor";
import { Rotulo } from "@/components/Titulo";
import { Seta } from "@/components/Icones";
import maria from "@/assets/produtos/maria-branco.webp";
import virginia from "@/assets/produtos/virginia-verde-agua.webp";

export const metadata: Metadata = {
  title: "A TULUZI",
  description: "Moda feminina de design autoral, em pequenas edições. Manifesto, filosofia e valores da TULUZI.",
  alternates: { canonical: "/tuluzi" },
};

const VALORES = [
  "Feminilidade", "Sofisticação", "Elegância", "Atemporalidade", "Delicadeza",
  "Exclusividade", "Atenção aos detalhes", "Produção cuidadosa", "Beleza cotidiana", "Escolhas intencionais",
];

export default function Tuluzi() {
  return (
    <>
      <Abertura rotulo="A TULUZI" titulo={<>Um jeito de viver que começa <em className="italic">pelo vestir.</em></>}>
        <p className="texto">
          A TULUZI é uma marca brasileira de moda feminina, com peças de design autoral produzidas em pequenas edições.
        </p>
      </Abertura>

      <section aria-labelledby="manifesto" className="border-t border-linha px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal imagem className="relative aspect-[4/5] overflow-hidden">
              <Image src={maria} alt="Vestido Maria na cor Branco" fill placeholder="blur" sizes="(min-width: 768px) 40vw, 90vw" className="object-cover object-top" />
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal><Rotulo>Manifesto</Rotulo></Reveal>
            <Reveal atraso={100}>
              <h2 id="manifesto" className="titulo mt-8 text-[2rem] md:text-[2.8rem]">
                Beleza não está apenas no que vestimos. <em className="italic text-grafite">Está no jeito como escolhemos viver.</em>
              </h2>
            </Reveal>
            <div className="texto mt-12 space-y-5">
              <Reveal><p>Acreditamos nas coisas feitas com tempo.</p></Reveal>
              <Reveal><p>Nas escolhas que carregam intenção.</p></Reveal>
              <Reveal><p>Na beleza que aparece nos detalhes, nos lugares, nas conversas e nas coisas que escolhemos preservar.</p></Reveal>
              <Reveal><p className="titulo text-2xl italic text-tinta">A TULUZI nasceu desse olhar.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="filosofia" className="bg-papel px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal><Rotulo>Filosofia</Rotulo></Reveal>
            <Reveal atraso={100}>
              <h2 id="filosofia" className="titulo mt-8 text-[2rem] md:text-[2.8rem]">Não acreditamos em excesso. <em className="italic">Acreditamos em escolher melhor.</em></h2>
            </Reveal>
            <Reveal atraso={160}>
              <p className="texto mt-10 max-w-lg">
                Criamos em pequenas edições para preservar o cuidado, o processo e a singularidade de cada peça. Ter menos nunca significou oferecer menos.
              </p>
            </Reveal>
          </div>
          <Reveal imagem className="relative aspect-[4/5] overflow-hidden md:col-span-4 md:col-start-9">
            <Image src={virginia} alt="Vestido Virgínia na cor Verde Água" fill placeholder="blur" sizes="(min-width: 768px) 32vw, 90vw" className="object-cover object-top" />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="valores" className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40">
        <Flor tipo="rosa" giro={10} sizes="220px" className="absolute -right-8 top-16 w-[120px] md:right-[6%] md:w-[180px]" />
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal><Rotulo>Valores</Rotulo></Reveal>
          <ul className="titulo mt-12 flex flex-wrap gap-x-6 gap-y-3 text-[2rem] leading-tight md:text-[2.6rem]">
            {VALORES.map((v, i) => (
              <li key={v}>
                <Reveal atraso={i * 50} as="span" className="inline-block">
                  <span className={i % 2 ? "italic text-grafite" : ""}>{v}</span>
                  {i < VALORES.length - 1 && <span className="ml-6 text-rosa-estudio" aria-hidden="true">·</span>}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="visao" className="border-t border-linha px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Rotulo>Posicionamento</Rotulo></Reveal>
            <Reveal atraso={100}>
              <p className="titulo mt-10 text-[2rem] leading-snug md:text-[2.6rem]">
                Moda feminina de design autoral. Peças em pequenas edições, para mulheres que encontram beleza nos detalhes.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal><Rotulo>Visão de mundo</Rotulo></Reveal>
            <Reveal atraso={100}>
              <h2 id="visao" className="titulo mt-10 text-[2rem] md:text-[2.6rem]">Moda é o nosso começo. <em className="italic">O universo TULUZI vai além dela.</em></h2>
            </Reveal>
            <Reveal atraso={160}>
              <p className="texto mt-8">
                Flores. Arte. Arquitetura. Viagens. Mesas que convidam a ficar. Livros que merecem ser guardados. Lugares que fazem o tempo passar mais devagar.
              </p>
              <div className="mt-12 flex flex-wrap gap-6">
                <Link href="/pecas" className="btn btn-tinta">Conheça as peças <Seta /></Link>
                <Link href="/universo" className="btn btn-contorno">Universo <Seta /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
