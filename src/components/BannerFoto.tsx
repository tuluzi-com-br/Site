import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { Seta } from "./Icones";

/**
 * Banner editorial em tela cheia, com a fotografia original e uma frase.
 * Desktop: texto sobre o lado mais limpo da foto. Celular: texto embaixo.
 */
export function BannerFoto({
  img,
  alt,
  frase,
  lado,
  foco = "object-center",
  href = "/pecas",
  acao = "Ver as peças",
}: {
  img: StaticImageData;
  alt: string;
  frase: string;
  lado: "esquerda" | "direita";
  foco?: string;
  href?: string;
  acao?: string;
}) {
  const direita = lado === "direita";
  return (
    <section aria-label={frase} className="relative isolate overflow-hidden bg-tinta text-linho">
      <div className="relative aspect-[4/5] w-full sm:aspect-[4/3] md:aspect-auto md:h-[min(86svh,820px)]">
        <Image src={img} alt={alt} fill placeholder="blur" sizes="100vw" className={`object-cover ${foco}`} />
        {/* véu só onde o texto mora, para a foto continuar luminosa */}
        <div
          aria-hidden="true"
          className="absolute inset-0 md:hidden"
          style={{ background: "linear-gradient(to top, rgba(22,20,19,0.62) 0%, rgba(22,20,19,0.18) 45%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden md:block"
          style={{
            background: `linear-gradient(to ${direita ? "left" : "right"}, rgba(22,20,19,0.55) 0%, rgba(22,20,19,0.22) 38%, transparent 62%)`,
          }}
        />
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 px-6 pb-12 md:inset-y-0 md:flex md:items-center md:px-10 md:pb-0 lg:px-16 ${
          direita ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <Reveal className={`max-w-[34rem] ${direita ? "md:text-right" : ""}`}>
          <p className="titulo text-[2.1rem] leading-[1.12] drop-shadow-[0_1px_12px_rgba(0,0,0,0.25)] min-[400px]:text-[2.4rem] sm:text-[2.9rem] lg:text-[3.6rem]">
            {frase}
          </p>
          <Link href={href} className={`btn btn-claro mt-8 md:mt-10 ${direita ? "md:ml-auto" : ""}`}>
            {acao} <Seta />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
