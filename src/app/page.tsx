import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { Flor } from "@/components/Flor";
import { Rotulo } from "@/components/Titulo";
import { VitrineGrade } from "@/components/VitrineGrade";
import { DetalheLupa } from "@/components/DetalheLupa";
import { Seta } from "@/components/Icones";
import { produtos } from "@/data/produtos";
import { detalhe } from "@/data/detalhes";

import heroFoto from "@/assets/editorial/emily-azul.webp";
import emilyLaranja from "@/assets/editorial/emily-laranja.webp";
import emilyRosa from "@/assets/editorial/emily-rosa.webp";
import { BannerFoto } from "@/components/BannerFoto";
import camilaLavanda from "@/assets/produtos/camila-lavanda.webp";
import vicenciaAzul from "@/assets/produtos/vicencia-azul.webp";
import mariaRosa from "@/assets/produtos/maria-rosa.webp";

// Os quatro pontos de identificação mantidos da versão aprovada.
const MULHER = [
  "Gosta de moda, mas não precisa correr atrás dela.",
  "Percebe detalhes que nem todo mundo percebe.",
  "Prefere qualidade ao excesso.",
  "Escolhe com intenção.",
];

const DESTAQUES = [
  { img: vicenciaAzul, nome: "Vestido Vicência", cor: "Azul", slug: "vestido-vicencia", alt: "Vestido Vicência na cor Azul, com barrado em rechilieu" },
  { img: mariaRosa, nome: "Vestido Maria", cor: "Rosa", slug: "vestido-maria", alt: "Vestido Maria na cor Rosa, com renda no decote" },
];

export default function Home() {
  return (
    <>
      {/* 01 — HERO (composição aprovada) */}
      <section
        aria-labelledby="hero-titulo"
        className="relative isolate overflow-hidden bg-gradient-to-b from-[#b08f8a] via-[#bc9c97] to-[#cab1ae] text-linho"
      >
        <div className="relative mx-auto grid max-w-[1600px] md:min-h-[min(calc(100svh-8.25rem),900px)] md:grid-cols-12">
          <div className="relative aspect-[4/5] w-full md:aspect-auto md:col-span-6 md:col-start-7 md:row-start-1">
            <Image
              src={heroFoto}
              alt="Emilly, criadora da TULUZI, de vestido azul com bordados florais"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_16%] md:[mask-image:linear-gradient(90deg,transparent_0%,#000_22%)]"
            />
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#bfa29e] via-[#bfa29e]/70 to-transparent md:hidden" />
          </div>

          <div className="relative z-10 -mt-24 flex flex-col justify-end px-6 pb-14 md:mt-0 md:col-span-7 md:col-start-1 md:row-start-1 md:justify-center md:px-10 md:py-24 lg:pl-16">
            <p className="rotulo mb-6 flex items-center gap-4 text-linho/90 md:mb-8">
              <span className="inline-block h-px w-10 bg-linho/70" aria-hidden="true" /> Moda feminina autoral
            </p>
            <h1 id="hero-titulo" className="titulo text-[2.35rem] leading-[1.12] min-[400px]:text-[2.6rem] sm:text-[3.4rem] md:text-[clamp(2.9rem,4.3vw,4.9rem)] md:leading-[1.1]">
              <span className="linha-titulo"><span style={{ ["--atraso" as string]: "80ms" }}>Um jeito de viver</span></span>
              <span className="linha-titulo"><span style={{ ["--atraso" as string]: "200ms" }}>que começa</span></span>
              <span className="linha-titulo"><span style={{ ["--atraso" as string]: "320ms" }}>pelo <em className="italic">vestir.</em></span></span>
            </h1>
            <p className="mt-8 max-w-[26rem] text-[1rem] leading-[1.7] text-linho/95 md:mt-10 md:text-[1.05rem]">
              Peças de design autoral, em pequenas edições, para mulheres que encontram beleza nos detalhes.
            </p>
            <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
              <Link href="#pecas" className="btn btn-claro">
                Conheça as peças <Seta />
              </Link>
              <Link href="/tuluzi" className="rotulo link-traco link-traco-fixo whitespace-nowrap text-[0.7rem] text-linho">
                Descubra a TULUZI
              </Link>
            </div>
          </div>

          <Flor tipo="branca" giro={-14} sizes="180px" className="absolute bottom-[-2.5rem] left-[44%] z-20 hidden w-[150px] lg:block lg:w-[170px]" />
        </div>
      </section>

      {/* 02 — VITRINE */}
      <section id="pecas" aria-labelledby="pecas-titulo" className="scroll-mt-24 bg-linho pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="mx-auto mb-10 flex max-w-[1600px] flex-col gap-5 px-4 md:mb-14 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <Rotulo>As peças</Rotulo>
            <h2 id="pecas-titulo" className="titulo mt-5 text-[1.9rem] sm:text-[2.3rem] lg:text-[2.75rem]">
              Pequenas edições. <em className="italic">Grandes detalhes.</em>
            </h2>
          </div>
          <p className="rotulo text-[0.62rem] text-cinza">
            {produtos.length} modelos · Tamanhos P, M e G
          </p>
        </div>

        <VitrineGrade produtos={produtos} />
      </section>

      {/* 03 — BANNER EDITORIAL */}
      <section aria-label="Vestido Camila" className="relative overflow-hidden bg-rosa-claro">
        <div className="mx-auto grid max-w-[1600px] items-center md:grid-cols-12">
          <Reveal imagem className="relative aspect-[4/5] md:col-span-5 md:aspect-auto md:h-[min(78svh,720px)]">
            <Image
              src={camilaLavanda}
              alt="Vestido Camila na cor Lavanda, em movimento"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover object-[50%_20%]"
            />
          </Reveal>
          <div className="relative px-6 py-16 md:col-span-6 md:col-start-7 md:px-0 md:py-20">
            <Flor tipo="vermelha" giro={-8} duracao={12} sizes="200px" className="absolute -top-6 right-6 w-[96px] md:-top-24 md:right-[12%] md:w-[150px]" />
            <Reveal>
              <Rotulo className="text-grafite">Vestido Camila · Lavanda</Rotulo>
              <p className="titulo mt-6 max-w-lg text-[2rem] sm:text-[2.4rem] lg:text-[3rem]">
                Design autoral, <em className="italic">em pequenas edições.</em>
              </p>
              <p className="texto mt-6 max-w-sm">Viscolinho, frente única com amarração e saia de babados três marias.</p>
              <Link href="/pecas/vestido-camila?cor=Lavanda" className="rotulo link-traco link-traco-fixo mt-9 inline-flex items-center gap-3 text-[0.68rem]">
                Conhecer a peça <Seta className="h-2.5 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — FEITO À MÃO */}
      <section aria-labelledby="mao-titulo" className="relative overflow-hidden px-4 py-24 md:px-10 md:py-36">
        <Flor tipo="papoula" giro={-12} duracao={14} sizes="200px" className="absolute right-[6%] top-8 hidden w-[120px] md:block lg:right-[9%] lg:w-[140px]" />
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <Rotulo>Design autoral</Rotulo>
              <h2 id="mao-titulo" className="titulo mt-5 text-[2rem] sm:text-[2.5rem] lg:text-[3.1rem]">
                A beleza está <em className="italic">nos detalhes.</em>
              </h2>
              <p className="texto mt-5 max-w-md">Bordados, rendas e acabamentos que revelam o cuidado presente em cada criação.</p>
            </Reveal>
            <Reveal atraso={120}>
              <p className="rotulo hidden text-[0.6rem] text-cinza md:block">Passe o cursor para ver de perto</p>
              <p className="rotulo text-[0.6rem] text-cinza md:hidden">Toque para ver de perto</p>
            </Reveal>
          </div>

          <div className="grid items-start gap-y-10 md:grid-cols-12 md:gap-x-6">
            <Reveal className="md:col-span-5">
              <DetalheLupa d={detalhe("maria")} />
            </Reveal>
            <div className="grid grid-cols-2 items-start gap-x-4 gap-y-10 md:col-span-7 md:gap-x-6 md:gap-y-12">
              <Reveal atraso={100}>
                <DetalheLupa d={detalhe("hellen")} />
              </Reveal>
              <Reveal atraso={180}>
                <DetalheLupa d={detalhe("quesia")} />
              </Reveal>
              <Reveal atraso={240} className="col-span-2">
                <DetalheLupa d={detalhe("vicencia")} />
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-14 flex justify-center md:mt-20">
            <Link href="/design-autoral" className="btn btn-contorno">
              Ver todos os detalhes <Seta />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 05 — A MULHER TULUZI */}
      {/* 05 — BANNER EMILY · LARANJA */}
      <BannerFoto
        img={emilyLaranja}
        alt="Emilly sentada em uma poltrona de vime, de vestido laranja com barrado bordado, ao lado de um jardim"
        frase="Cada detalhe TULUZI importa."
        lado="direita"
        foco="object-[30%_55%] md:object-[50%_60%]"
      />

      <section aria-labelledby="mulher-titulo" className="relative overflow-hidden border-y border-linha bg-papel px-4 py-20 md:px-10 md:py-28">
        <Flor tipo="rosa" giro={12} duracao={13} sizes="200px" className="absolute -right-7 -top-3 w-[72px] md:right-[5%] md:top-10 md:w-[140px]" />
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal className="text-center">
            <h2 id="mulher-titulo" className="titulo text-[1.9rem] sm:text-[2.4rem] lg:text-[2.9rem]">
              Talvez você seja uma <em className="italic">mulher TULUZI.</em>
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[10px] bg-linha sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            {MULHER.map((frase, i) => (
              <li key={i} className="bg-papel px-6 py-8 md:px-8 md:py-10">
                <Reveal atraso={i * 90}>
                  <span className="rotulo text-[0.6rem] text-cinza">{String(i + 1).padStart(2, "0")}</span>
                  <p className="titulo mt-5 text-[1.15rem] leading-[1.45] md:text-[1.25rem]">{frase}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — DESTAQUE VISUAL */}
      {/* 07 — BANNER EMILY · ROSA */}
      <BannerFoto
        img={emilyRosa}
        alt="Emilly deitada entre flores, de vestido rosa com bordados coloridos, iluminada pelo sol"
        frase="Para dias que pedem flores."
        lado="esquerda"
        foco="object-[70%_45%] md:object-[50%_45%]"
      />

      <section aria-labelledby="destaque-titulo" className="relative overflow-hidden px-4 py-24 md:px-10 md:py-32">
        <div className="relative mx-auto max-w-[1300px]">
          <Reveal className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <h2 id="destaque-titulo" className="titulo text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem]">
              Outras cores, <em className="italic">o mesmo cuidado.</em>
            </h2>
            <Link href="/pecas" className="rotulo link-traco link-traco-fixo hidden shrink-0 items-center gap-3 text-[0.66rem] sm:inline-flex">
              Ver catálogo <Seta className="h-2.5 w-4" />
            </Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 md:gap-8">
            {DESTAQUES.map((d, i) => (
              <Reveal key={d.slug} atraso={i * 120} className={i === 1 ? "sm:mt-16" : ""}>
                <Link href={`/pecas/${d.slug}?cor=${encodeURIComponent(d.cor)}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-papel">
                    <Image
                      src={d.img}
                      alt={d.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 640px) 46vw, 92vw"
                      className="object-cover object-top transition-transform duration-[1600ms] ease-[var(--ease-entrada)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <p className="titulo text-[1.25rem] md:text-[1.4rem]">{d.nome}</p>
                    <span className="rotulo inline-flex items-center gap-2 text-[0.6rem] text-grafite">
                      {d.cor} <Seta className="h-2.5 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center sm:hidden">
            <Link href="/pecas" className="btn btn-contorno">
              Ver catálogo <Seta />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
