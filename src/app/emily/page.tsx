import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Flor } from "@/components/Flor";
import { Rotulo } from "@/components/Titulo";
import { Seta } from "@/components/Icones";
import { FOTO_EMILY } from "@/data/emily";

export const metadata: Metadata = {
  title: "Emily",
  description: "Um olhar transformado em marca. Conheça Emily, por trás da TULUZI.",
  alternates: { canonical: "/emily" },
};

export default function Emily() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-14 md:px-10 md:pb-36 md:pt-20">
      <div className="mx-auto grid max-w-[1300px] items-start gap-12 md:grid-cols-12 md:gap-10">
        <div className="relative md:col-span-5 md:sticky md:top-32">
          <Reveal imagem className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-rosa-claro">
            {FOTO_EMILY ? (
              <Image
                src={FOTO_EMILY}
                alt="Emily, criadora da TULUZI"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 768px) 40vw, 92vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-end bg-gradient-to-b from-rosa-claro to-[#dcc5bf] p-8" aria-hidden="true">
                <p className="titulo text-[5rem] italic leading-none text-linho/90 md:text-[6.5rem]">Emily</p>
              </div>
            )}
          </Reveal>
          <Flor tipo="rosa" giro={-12} duracao={13} sizes="220px" className="absolute -right-6 -top-10 w-[100px] md:-right-14 md:w-[150px]" />
        </div>

        <article className="md:col-span-6 md:col-start-7 md:pt-10">
          <Rotulo>Por trás da TULUZI</Rotulo>
          <h1 className="titulo mt-6 text-[2.2rem] sm:text-[2.7rem] lg:text-[3.3rem]">
            Um olhar transformado em <em className="italic">marca.</em>
          </h1>
          <div className="mt-10 space-y-5 text-[1.08rem] leading-[1.8] text-grafite md:text-[1.15rem]">
            <Reveal><p className="titulo text-[1.35rem] leading-[1.5] text-tinta md:text-[1.55rem]">Sempre gostei de beleza, mas não daquela beleza que parece montada.</p></Reveal>
            <Reveal>
              <p>
                Gosto de uma roupa bonita.<br />
                De flores sobre a mesa.<br />
                De lugares que acolhem.<br />
                De objetos que contam histórias.
              </p>
            </Reveal>
            <Reveal><p>A TULUZI nasceu um pouco dessa forma de enxergar a vida.</p></Reveal>
            <Reveal><p>A roupa foi o nosso começo.</p></Reveal>
            <Reveal><p className="titulo text-[1.25rem] italic leading-[1.5] text-tinta md:text-[1.4rem]">Eu sou Emily. E este é o universo que quero dividir com vocês.</p></Reveal>
          </div>
          <Reveal className="mt-12 flex flex-wrap gap-5 border-t border-linha pt-10">
            <Link href="/pecas" className="btn btn-tinta">Conheça as peças <Seta /></Link>
            <Link href="/universo" className="btn btn-contorno">O universo TULUZI <Seta /></Link>
          </Reveal>
        </article>
      </div>
    </section>
  );
}
