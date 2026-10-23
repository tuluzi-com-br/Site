import type { Metadata } from "next";
import Link from "next/link";
import { Abertura } from "@/components/Abertura";
import { linkWhatsApp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  robots: { index: false, follow: true },
  alternates: { canonical: "/termos-de-uso" },
};

export default function Pagina() {
  return (
    <>
      <Abertura rotulo="Informações" titulo="Termos de Uso">
        <p className="texto">
          Este conteúdo está em elaboração e será publicado após aprovação da TULUZI.
        </p>
        <p className="texto mt-6">
          Em caso de dúvidas, <a className="link-traco link-traco-fixo" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">fale com a TULUZI</a> ou volte para a <Link className="link-traco link-traco-fixo" href="/">página inicial</Link>.
        </p>
      </Abertura>
    </>
  );
}
