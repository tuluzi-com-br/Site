import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Abertura } from "@/components/Abertura";
import { Reveal } from "@/components/Reveal";
import { Flor } from "@/components/Flor";
import { Seta } from "@/components/Icones";
import camila from "@/assets/produtos/camila-rosa-magenta.webp";

export const metadata: Metadata = {
  title: "Universo",
  description: "Flores, arte, arquitetura, viagens, livros e mesas que convidam a ficar. O universo por trás de cada TULUZI.",
  alternates: { canonical: "/universo" },
};

// Cada linha vem da narrativa institucional da marca.
const TEMAS = [
  { t: "Moda", l: "O nosso começo — vestir como uma das formas de expressar como escolhemos viver." },
  { t: "Flores", l: "Flores sobre a mesa." },
  { t: "Arquitetura", l: "Casas que acolhem." },
  { t: "Arte", l: "Objetos que contam histórias." },
  { t: "Viagens", l: "Lugares que fazem o tempo passar mais devagar." },
  { t: "Livros", l: "Livros que merecem ser guardados." },
  { t: "Hospitalidade", l: "Mesas que convidam a ficar." },
  { t: "Beleza cotidiana", l: "A beleza que aparece nos detalhes, nos lugares, nas conversas." },
  { t: "Momentos especiais", l: "Conversas que ficam." },
];

export default function Universo() {
  return (
    <>
      <Abertura rotulo="Universo TULUZI" titulo={<>Há um mundo por trás de <em className="italic">cada TULUZI.</em></>}>
        <p className="texto">São referências, gestos e escolhas que formam o nosso olhar.</p>
      </Abertura>

      <section className="relative overflow-hidden bg-rosa-claro px-6 py-24 md:px-10 md:py-36">
        <Flor tipo="branca" giro={-16} sizes="280px" className="absolute -left-12 top-24 w-[150px] md:left-[3%] md:w-[240px]" />
        <div className="relative mx-auto grid max-w-[1400px] gap-14 md:grid-cols-12">
          <Reveal imagem className="relative aspect-[4/5] overflow-hidden md:col-span-5 md:col-start-2">
            <Image src={camila} alt="Vestido Camila na cor Rosa Magenta" fill placeholder="blur" sizes="(min-width: 768px) 38vw, 90vw" className="object-cover object-top" />
          </Reveal>
          <div className="self-center md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="titulo text-[1.8rem] italic leading-snug md:text-[2.4rem]">
                Porque vestir é apenas uma das formas de expressar como escolhemos viver.
              </p>
            </Reveal>
            <Flor tipo="rosa" giro={10} duracao={13} sizes="220px" className="mt-12 w-[120px] md:w-[170px]" />
          </div>
        </div>
      </section>

      <section aria-label="Temas do universo" className="px-6 py-24 md:px-10 md:py-36">
        <ol className="mx-auto max-w-[1400px]">
          {TEMAS.map((x, i) => (
            <li key={x.t} className="group border-t border-linha last:border-b">
              <Reveal atraso={(i % 3) * 70} className="grid items-baseline gap-3 py-8 md:grid-cols-12 md:gap-10 md:py-11">
                <span className="rotulo text-[0.6rem] text-cinza md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="titulo text-[2rem] transition-transform duration-700 ease-[var(--ease-entrada)] group-hover:translate-x-3 md:col-span-6 md:text-[3rem]">
                  {i % 2 ? <em className="italic">{x.t}</em> : x.t}
                </h2>
                <p className="titulo text-[1.25rem] italic text-grafite md:col-span-5 md:text-[1.5rem]">{x.l}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative overflow-hidden bg-tinta px-6 py-32 text-center text-linho md:py-44">
        <Flor tipo="vermelha" giro={8} sizes="240px" className="mx-auto mb-12 w-[110px] md:w-[150px]" />
        <Reveal>
          <p className="titulo mx-auto max-w-3xl text-[2.1rem] md:text-[3.2rem]">Talvez luxo seja ter tempo para <em className="italic">perceber.</em></p>
          <Link href="/pecas" className="btn btn-claro mt-14">Conheça as peças <Seta /></Link>
        </Reveal>
      </section>
    </>
  );
}
